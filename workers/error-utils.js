var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "esri/geometry/Polyline", "esri/geometry/Point", "esri/geometry/support/webMercatorUtils", "esri/geometry/support/geodesicUtils"], function (require, exports, Polyline_1, Point_1, webMercUtils, geodesicUtils) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Polyline_1 = __importDefault(Polyline_1);
    Point_1 = __importDefault(Point_1);
    webMercUtils = __importStar(webMercUtils);
    geodesicUtils = __importStar(geodesicUtils);
    var addressFields;
    var addressFieldsArray;
    var roadFields;
    var addressFeatures;
    var roadFeatures;
    var roadLookup = {};
    var goodRoads;
    var badRoads;
    var goodAddresses;
    var badAddresses = [];
    var matches = [];
    var addressRoadPairs = {};
    exports.splitBadRoadValues = function (_a) {
        var _b;
        var fs = _a.fs, rf = _a.rf;
        console.log("inside split bad values");
        roadFeatures = JSON.parse(fs);
        roadFields = rf;
        console.log(typeof roadFeatures);
        _b = roadFeatures.reduce(function (_a, f) {
            var goodRoads = _a[0], badRoads = _a[1];
            badRoadValues(f);
            return "error" in f
                ? [goodRoads, __spreadArrays(badRoads, [f])]
                : [__spreadArrays(goodRoads, [f]), badRoads];
        }, [[], []]), goodRoads = _b[0], badRoads = _b[1];
    };
    var badRoadValues = function (f) {
        var errorMessage = "";
        var addressRangeFields = [
            roadFields.fromLeft,
            roadFields.toLeft,
            roadFields.fromRight,
            roadFields.toRight
        ];
        addressRangeFields.forEach(function (field) {
            if (isNaN(f.attributes[field]) || f.attributes[field] < 0) {
                errorMessage += field + " is invalid, ";
            }
        });
        [roadFields.leftCommunity, roadFields.rightCommunity].forEach(function (field) {
            var _a;
            if (((_a = f.attributes[field]) === null || _a === void 0 ? void 0 : _a.length) < 1) {
                errorMessage += field + " is blank, ";
            }
        });
        if (f.roadName.length <= 0) {
            errorMessage += "no road name, ";
        }
        if (errorMessage.length) {
            f.attributes["ERROR"] = errorMessage.slice(0, -2);
            f.error = "road-bad-attributes";
        }
    };
    exports.rangeParity = function () {
        badRoads.push.apply(badRoads, goodRoads
            .filter(function (f) {
            if (f.addressRanges[0][0] % 2 !== f.addressRanges[0][1] % 2 ||
                f.addressRanges[1][0] % 2 !== f.addressRanges[1][1] % 2) {
                return true;
            }
            return false;
        })
            .map(function (f) {
            //let nf = Graphic.fromJSON(featureToJSON(f)) as RoadErrorGraphic;
            f.attributes["ERROR"] = "Road range parity";
            f.error = "road-range-parity";
            return f;
        }));
    };
    exports.lowToHigh = function () {
        badRoads.push.apply(badRoads, goodRoads
            .filter(function (f) {
            if (f.addressRanges[0][0] > f.addressRanges[0][1] ||
                f.addressRanges[1][0] > f.addressRanges[1][1]) {
                return true;
            }
            return false;
        })
            .map(function (f) {
            //let nf = Graphic.fromJSON(f.toJSON()) as RoadErrorGraphic;
            f.attributes["ERROR"] = "Address range low greater than high";
            f.error = "road-range-low-greater-than-high";
            return f;
        }));
    };
    exports.nullGeom = function (fs) {
        badRoads.push.apply(badRoads, goodRoads
            .filter(function (f) {
            if (f.geometry == null) {
                return true;
            }
            return false;
        })
            .map(function (f) {
            ///let nf = Graphic.fromJSON(f.toJSON()) as ErrorGraphic;
            f.attributes["ERROR"] = "Null geometry";
            f.error = "null-geometry";
            return f;
        }));
    };
    exports.multiPart = function () {
        badRoads.push.apply(badRoads, goodRoads
            .filter(function (f) {
            var geometry = f.geometry;
            if (geometry.hasOwnProperty("paths") && geometry.paths.length > 1) {
                return true;
            }
            return false;
        })
            .map(function (f) {
            //let nf = Graphic.fromJSON(f.toJSON()) as RoadErrorGraphic;
            f.attributes["ERROR"] = "Multipart geometry";
            f.error = "multipart-geometry";
            return f;
        }));
    };
    exports.overlappingRanges = function () {
        populateRoadLookup(goodRoads);
        var overlapFeatures = [];
        var pairs = [
            [0, 0],
            [0, 1],
            [1, 0],
            [1, 1]
        ];
        goodRoads.forEach(function (f, i) {
            for (var j = i; j < goodRoads.length; j++) {
                var g = goodRoads[j];
                if (f.roadName === g.roadName) {
                    innerLoop: for (var _i = 0, pairs_1 = pairs; _i < pairs_1.length; _i++) {
                        var pair = pairs_1[_i];
                        if (f.communities[pair[0]] !== g.communities[pair[1]] ||
                            (f.objectId === g.objectId && pair[0] === pair[1])) {
                            continue innerLoop;
                        }
                        if (isBetween(f.addressRanges[pair[0]], g.addressRanges[pair[1]])) {
                            overlapFeatures.push(makeOverlapFeature(f, "Overlapping range with objectid:" + g.objectId));
                            overlapFeatures.push(makeOverlapFeature(g, "Overlapping range with objectid:" + f.objectId));
                        }
                    }
                }
            }
        });
        badRoads.push.apply(badRoads, overlapFeatures);
        return badRoads.map(function (f) {
            f.geomString = JSON.stringify(f.geometry);
            return f;
        });
    };
    var makeOverlapFeature = function (f, message) {
        var nf = {};
        nf.geometry = JSON.parse(JSON.stringify(f.geometry));
        nf.extent = f.extent;
        nf.attributes = Object.assign({}, f.attributes);
        nf.attributes["ERROR"] = message;
        nf.error = "overlapping-range";
        nf.roadName = f.roadName;
        nf.communities = f.communities;
        nf.objectId = f.objectId;
        nf.addressRanges = f.addressRanges;
        return nf;
    };
    var populateRoadLookup = function (fs) {
        fs.forEach(function (f) {
            !(f.roadName in roadLookup) && (roadLookup[f.roadName] = {});
            !(f.communities[0] in roadLookup[f.roadName]) &&
                (roadLookup[f.roadName][f.communities[0]] = []);
            roadLookup[f.roadName][f.communities[0]].push(f);
            if (f.communities[0] === f.communities[1]) {
                return;
            }
            !(f.communities[1] in roadLookup[f.roadName]) &&
                (roadLookup[f.roadName][f.communities[1]] = []);
            roadLookup[f.roadName][f.communities[1]].push(f);
            //f.objectId = f.objectId;
        });
    };
    var isBetween = function (a, b) {
        for (var i = 0; i <= 1; i++) {
            if (a[i] !== 0 &&
                (a[i] % 2 === b[0] % 2 || a[i] % 2 === b[1] % 2) &&
                b[0] <= a[i] &&
                a[i] <= b[1]) {
                return true;
            }
        }
        return false;
    };
    exports.splitBadAddressValues = function (_a) {
        var fs = _a.fs, af = _a.af;
        console.log("inside split bad values");
        addressFeatures = JSON.parse(fs);
        addressFields = af;
        addressFieldsArray = [].concat.apply([], Object.values(addressFields));
        goodAddresses = addressFeatures.filter(addressBadValues);
    };
    var addressBadValues = function (f) {
        var errorMessage = "";
        if (isNaN(f.attributes[addressFields.houseNumber]) ||
            f.attributes[addressFields.houseNumber] < 0) {
            errorMessage += addressFields.houseNumber + " is invalid, ";
        }
        else {
            f.houseNumber = f.attributes[addressFields.houseNumber];
        }
        if (f.attributes[addressFields.community] == null ||
            String(f.attributes[addressFields.community]).length < 1) {
            errorMessage += addressFields.community + " is blank, ";
        }
        else {
            f.community = String(f.attributes[addressFields.community]);
        }
        f.roadName = setFullRoadName(f, addressFields.roadNames);
        f.fullAddress = setFullAddress(f);
        if (f.roadName.length <= 0) {
            errorMessage += "no road name, ";
        }
        if (errorMessage.length) {
            addAddressErrorGraphic(f, errorMessage.slice(0, -2), "address-bad-attributes");
            return false;
        }
        return true;
    };
    var setFullAddress = function (f) {
        return addressFieldsArray
            .map(function (fn) {
            return f.attributes[fn] == null ? "" : f.attributes[fn];
        })
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
    };
    var setFullRoadName = function (f, fields) {
        return fields
            .map(function (fn) {
            return f.attributes[fn] == null ? "" : f.attributes[fn];
        })
            .join(" ")
            .replace(/\s+/g, " ")
            .trim();
    };
    exports.nullAddressGeom = function () {
        goodAddresses
            .filter(function (f) {
            if (f.geometry == null) {
                return true;
            }
            return false;
        })
            .forEach(function (f) {
            addAddressErrorGraphic(f, "Null geometry", "null-geometry");
        });
    };
    exports.duplicateAddresses = function () {
        var fullAddressDict = {};
        var geomDict = {};
        goodAddresses.map(function (f) {
            f.fullAddress in fullAddressDict
                ? fullAddressDict[f.fullAddress]++
                : (fullAddressDict[f.fullAddress] = 1);
            JSON.stringify(f.geometry) in geomDict
                ? geomDict[JSON.stringify(f.geometry)]++
                : (geomDict[JSON.stringify(f.geometry)] = 1);
        });
        goodAddresses.map(function (f) {
            if (fullAddressDict[f.fullAddress] > 1) {
                addAddressErrorGraphic(f, "Duplicate address", "duplicate-address");
            }
            if (geomDict[JSON.stringify(f.geometry)] > 1) {
                addAddressErrorGraphic(f, "Duplicate geometry", "address-duplicate-geometry");
            }
        });
    };
    exports.roadDataSync = function () {
        goodAddresses.map(function (f) {
            if (!(f.roadName in roadLookup)) {
                addAddressErrorGraphic(f, f.roadName + " not found in roads", "no-matching-roadname");
            }
            else if (!(f.community in roadLookup[f.roadName])) {
                addAddressErrorGraphic(f, f.roadName + "-" + f.community + " not in roads", "no-matching-road-community");
            }
            else {
                matches = [];
                roadLookup[f.roadName][f.community].forEach(function (rs) {
                    if (rs.communities[0] === f.community) {
                        if (isWithin(f.houseNumber, rs.addressRanges[0])) {
                            matches.push({
                                side: 0,
                                rsOID: rs.objectId,
                                rsGeom: rs.geometry,
                                addressRanges: rs.addressRanges
                            });
                        }
                    }
                    if (rs.communities[1] === f.community) {
                        if (isWithin(f.houseNumber, rs.addressRanges[1])) {
                            matches.push({
                                side: 1,
                                rsOID: rs.objectId,
                                rsGeom: rs.geometry,
                                addressRanges: rs.addressRanges
                            });
                        }
                    }
                });
                if (matches.length === 0) {
                    addAddressErrorGraphic(f, "Not in address range", "no-matching-road-segment-address-range");
                }
                else if (matches.length > 1) {
                    addAddressErrorGraphic(f, "Matches multiple segments/sides", "matches-multiple-segments");
                }
                else if (matches.length === 1) {
                    addressRoadPairs[f.objectId] = matches[0];
                }
            }
        });
        return badAddresses;
    };
    exports.getAddressRoadPairs = function () {
        return addressRoadPairs;
    };
    var addAddressErrorGraphic = function (f, message, error) {
        var nf = JSON.parse(JSON.stringify(f));
        nf.geomString = JSON.stringify(nf.geometry);
        nf.attributes["ERROR"] = message;
        nf.error = error;
        badAddresses.push(nf);
    };
    var isWithin = function (a, b) {
        return b[0] <= a && a <= b[1] && (a % 2 === b[0] % 2 || a % 2 === b[1] % 2);
    };
    function makeFishbones(_a) {
        var _this = this;
        var addressOID = _a.addressOID;
        var count = addressFeatures.length;
        var fishboneGraphics = [];
        addressFeatures.forEach(function (af, idx) {
            var _a, _b;
            if (idx % 100 === 0) {
                _this.remoteClient.invoke("incrementFishboneProgress", idx / count);
            }
            if (af.attributes[addressOID] in addressRoadPairs) {
                var match = addressRoadPairs[af.attributes[addressOID]];
                var rsGeom = void 0;
                if (((_b = (_a = match.rsGeom) === null || _a === void 0 ? void 0 : _a.paths) === null || _b === void 0 ? void 0 : _b.length) <= 1) {
                    rsGeom = new Polyline_1.default(match.rsGeom);
                }
                else {
                    return;
                }
                var endpoint = getEndpoint(Number(af.attributes[addressFields.houseNumber]), addressRoadPairs[af.attributes[addressOID]], rsGeom);
                var afPath_1 = [[af.geometry.x, af.geometry.y], endpoint];
                var grphc_1 = {
                    attributes: af.attributes,
                    geometry: {
                        type: "polyline",
                        spatialReference: { wkid: match.rsGeom.spatialReference.wkid },
                        paths: [afPath_1]
                    },
                    symbol: {
                        type: "simple-line",
                        miterLimit: 0,
                        width: 1.5,
                        color: [76, 230, 0, 0.5]
                    },
                    rsGeom: rsGeom
                };
                fishboneGraphics.forEach(function (fg) {
                    var fgPath = fg.geometry.paths[0];
                    if (intersects(afPath_1[0][0], afPath_1[0][1], afPath_1[1][0], afPath_1[1][1], fgPath[0][0], fgPath[0][1], fgPath[1][0], fgPath[1][1])) {
                        grphc_1.symbol = {
                            type: "simple-line",
                            miterLimit: 0,
                            width: 1.5,
                            color: [255, 0, 0, 0.5]
                        };
                        fg.symbol = {
                            type: "simple-line",
                            miterLimit: 0,
                            width: 1.5,
                            color: [255, 0, 0, 0.5]
                        };
                    }
                });
                fishboneGraphics.push(grphc_1);
            }
        });
        return fishboneGraphics;
    }
    exports.makeFishbones = makeFishbones;
    var getEndpoint = function (houseNumber, m, rsGeom) {
        var percentAlong = getPercentAlongSegment(houseNumber, m);
        var totalLength = geodesicUtils.geodesicLengths([
            new Polyline_1.default(webMercUtils.webMercatorToGeographic(rsGeom))
        ])[0];
        var _a = getPointAlongLine(rsGeom, (totalLength - 4) * percentAlong + 2), pointOnLine = _a[0], angle = _a[1];
        //(totalLength - 4) * percentAlong + 2
        var endpoint;
        if (pointOnLine) {
            endpoint = getPointAtDistance(pointOnLine, toDegrees(angle), m.side);
        }
        return endpoint;
    };
    var getPointAlongLine = function (polyline, distance) {
        var x1, x2, y1, y2;
        var travelledDistance = 0;
        var pathDistance;
        var distanceDiff;
        var angle;
        var path = polyline.paths[0];
        x1 = path[0][0];
        y1 = path[0][1];
        x2 = path[1][0];
        y2 = path[1][1];
        angle = Math.atan2(y2 - y1, x2 - x1);
        if (distance === 0) {
            return [polyline.getPoint(0, 0), angle];
        }
        else if (distance > 0) {
            for (var i = 1; i < path.length; i++) {
                x1 = path[i - 1][0];
                y1 = path[i - 1][1];
                x2 = path[i][0];
                y2 = path[i][1];
                var from = webMercUtils.webMercatorToGeographic(new Point_1.default({ x: x1, y: y1, spatialReference: polyline.spatialReference }));
                var to = webMercUtils.webMercatorToGeographic(new Point_1.default({ x: x2, y: y2, spatialReference: polyline.spatialReference }));
                pathDistance = geodesicUtils.geodesicDistance(from, to).distance;
                angle = Math.atan2(y2 - y1, x2 - x1);
                travelledDistance += pathDistance;
                if (travelledDistance === distance) {
                    return [polyline.getPoint(0, i), angle];
                }
                else if (travelledDistance > distance) {
                    distanceDiff = distance - (travelledDistance - pathDistance);
                    var bearing = toDegrees(angle);
                    bearing = bearing * -1 + 90;
                    bearing += 360;
                    bearing = bearing % 360;
                    return [
                        geodesicUtils.pointFromDistance(webMercUtils.webMercatorToGeographic(polyline.getPoint(0, i - 1)), distanceDiff, bearing),
                        angle
                    ];
                }
            }
        }
        return null;
    };
    var getPointAtDistance = function (point, bearing, side) {
        bearing = bearing * -1 + 90;
        bearing += 360;
        if (side === 0) {
            bearing += -90;
        }
        if (side === 1) {
            bearing += 90;
        }
        bearing = bearing % 360;
        var endpoint = webMercUtils.geographicToWebMercator(geodesicUtils.pointFromDistance(point, 2, bearing));
        return [endpoint.x, endpoint.y];
    };
    var toDegrees = function (val) {
        return (val * 180) / Math.PI;
    };
    var getPercentAlongSegment = function (houseNumber, match) {
        var denom = match.addressRanges[match.side][1] - match.addressRanges[match.side][0];
        if (denom !== 0) {
            return (houseNumber - match.addressRanges[match.side][0]) / denom;
        }
        else {
            return 0.5;
        }
    };
    function intersects(a, b, c, d, p, q, r, s) {
        var det, gamma, lambda;
        det = (c - a) * (s - q) - (r - p) * (d - b);
        if (det === 0) {
            return false;
        }
        else {
            lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
            gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
            return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
        }
    }
});
