(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/GeometryService":847,"esri/portal/support/geometryServiceUtils":868,"esri/tasks/Task":883,"esri/tasks/support/ProjectParameters":1037})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[80,89],{1037:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(3),r(9),r(2),r(55)],void 0===(i=function(e,t,r,n,i,s,o,a){var u=s.getLogger("esri.tasks.support.ProjectParameters");return function(e){function t(t){var r=e.call(this)||this;return r.geometries=null,r.outSpatialReference=null,r.transformation=null,r.transformForward=null,r}return r(t,e),Object.defineProperty(t.prototype,"outSR",{get:function(){return u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference},set:function(e){u.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=e},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:a.getJsonType(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r},n([o.property()],t.prototype,"geometries",void 0),n([o.property({json:{read:{source:"outSR"}}})],t.prototype,"outSpatialReference",void 0),n([o.property({json:{read:!1}})],t.prototype,"outSR",null),n([o.property()],t.prototype,"transformation",void 0),n([o.property()],t.prototype,"transformForward",void 0),n([o.subclass("esri.tasks.support.ProjectParameters")],t)}(o.declared(i.JSONSupport))}.apply(null,n))||(e.exports=i)},847:function(e,t,r){var n,i;n=[r(5),r(12),r(13),r(28),r(118),r(77),r(90),r(55),r(41),r(883),r(1037)],void 0===(i=function(e,t,r,n,i,s,o,a,u,p,f){var c=new t.JSONMap({MGRS:"mgrs",USNG:"usng",UTM:"utm",GeoRef:"geo-ref",GARS:"gars",DMS:"dms",DDM:"ddm",DD:"dd"}),l=r.ensureType(f),N=p.createSubclass({declaredClass:"esri.tasks.GeometryService",areasAndLengths:function(t,r){var n={query:e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON())};return(this.requestOptions||r)&&(n=e.mixin({},this.requestOptions,r,n)),u(this.parsedUrl.path+"/areasAndLengths",n).then((function(e){return e.data}))},autoComplete:function(t,r,n){var i=t[0].spatialReference,s={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),polygons:JSON.stringify(this._encodeGeometries(t).geometries),polylines:JSON.stringify(this._encodeGeometries(r).geometries)})};return(this.requestOptions||n)&&(s=e.mixin({},this.requestOptions,n,s)),u(this.parsedUrl.path+"/autoComplete",s).then((function(e){return(e.data.geometries||[]).map((function(e){return new o({spatialReference:i,rings:e.rings})}))}))},buffer:function(t,r){var n=e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON()),i=t.outSpatialReference||t.geometries[0].spatialReference,s={query:n};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/buffer",s).then((function(e){return(e.data.geometries||[]).map((function(e){return new o({spatialReference:i,rings:e.rings})}))}))},cut:function(t,r,n){var i=t[0].spatialReference,s=t.map((function(e){return e.toJSON()})),o={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:a.getJsonType(t[0]),geometries:s}),cutter:JSON.stringify(r.toJSON())})};return(this.requestOptions||n)&&(o=e.mixin({},this.requestOptions,n,o)),u(this.parsedUrl.path+"/cut",o).then((function(e){var t=e.data,r=t.geometries||[];return{cutIndexes:t.cutIndexes,geometries:r.map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}}))},convexHull:function(t,r){var n=t[0].spatialReference,i={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(this._encodeGeometries(t))})};return(this.requestOptions||r)&&(i=e.mixin({},this.requestOptions,r,i)),u(this.parsedUrl.path+"/convexHull",i).then((function(e){return a.fromJSON(e.data.geometry).set("spatialReference",n)}))},densify:function(t,r){var n=e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON()),i=t.geometries[0].spatialReference,s={query:n};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/densify",s).then((function(e){return(e.data.geometries||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},difference:function(t,r,n){var i=t[0].spatialReference,s={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(this._encodeGeometries(t)),geometry:JSON.stringify({geometryType:a.getJsonType(r),geometry:r.toJSON()})})};return(this.requestOptions||n)&&(s=e.mixin({},this.requestOptions,n,s)),u(this.parsedUrl.path+"/difference",s).then((function(e){return(e.data.geometries||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},distance:function(t,r){var n={query:e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON())};return(this.requestOptions||r)&&(n=e.mixin({},this.requestOptions,r,n)),u(this.parsedUrl.path+"/distance",n).then(this._handleDistanceResponse)},fromGeoCoordinateString:function(t,r){var n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.strings=JSON.stringify(t.strings);var i=t.conversionType||"mgrs";n.conversionType=c.toJSON(i),n.conversionMode=t.conversionMode;var s={query:e.mixin({},this.parsedUrl.query,{f:"json"},n)};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/fromGeoCoordinateString",s).then(this._handleFromGeoCoordinateResponse)},generalize:function(t,r){var n=e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON()),i=t.geometries[0].spatialReference,s={query:n};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/generalize",s).then((function(e){return(e.data.geometries||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},intersect:function(t,r,n){var i=t[0].spatialReference,s={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),geometries:JSON.stringify(this._encodeGeometries(t)),geometry:JSON.stringify({geometryType:a.getJsonType(r),geometry:r.toJSON()})})};return(this.requestOptions||n)&&(s=e.mixin({},this.requestOptions,n,s)),u(this.parsedUrl.path+"/intersect",s).then((function(e){return(e.data.geometries||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},lengths:function(t,r){var n={query:e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON())};return(this.requestOptions||r)&&(n=e.mixin({},this.requestOptions,r,n)),u(this.parsedUrl.path+"/lengths",n).then((function(e){return e.data}))},labelPoints:function(t,r){var n=t.map((function(e){return e.toJSON()})),i=t[0].spatialReference,s={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:i.wkid?i.wkid:JSON.stringify(i.toJSON()),polygons:JSON.stringify(n)})};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/labelPoints",s).then((function(e){return(e.data.labelPoints||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},offset:function(t,r){var n=e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON()),i=t.geometries[0].spatialReference,s={query:n};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/offset",s).then((function(e){return(e.data.geometries||[]).map((function(e){return a.fromJSON(e).set("spatialReference",i)}))}))},project:function(t,r){t=l(t);var n=e.mixin({},t.toJSON(),this.parsedUrl.query,{f:"json"}),i=t.outSpatialReference,s=a.getJsonType(t.geometries[0]),o=this._decodeGeometries,p={query:n};return(this.requestOptions||r)&&(p=e.mixin({},this.requestOptions,r,p)),u(this.parsedUrl.path+"/project",p).then((function(e){return o(e.data,s,i)}))},relation:function(t,r){var n={query:e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON())};return(this.requestOptions||r)&&(n=e.mixin({},this.requestOptions,r,n)),u(this.parsedUrl.path+"/relation",n).then(this._handleRelationResponse)},reshape:function(t,r,n){var i=t.spatialReference,s={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(i.toJSON()),target:JSON.stringify({geometryType:a.getJsonType(t),geometry:t.toJSON()}),reshaper:JSON.stringify(r.toJSON())})};return(this.requestOptions||n)&&(s=e.mixin({},this.requestOptions,n,s)),u(this.parsedUrl.path+"/reshape",s).then((function(e){return a.fromJSON(e.data.geometry).set("spatialReference",i)}))},simplify:function(t,r){var n=t[0].spatialReference,i=e.mixin({},this.parsedUrl.query,{f:"json",sr:n.wkid?n.wkid:JSON.stringify(n.toJSON()),geometries:JSON.stringify(this._encodeGeometries(t))}),s=a.getJsonType(t[0]),o=this._decodeGeometries,p={query:i};return(this.requestOptions||r)&&(p=e.mixin({},this.requestOptions,r,p)),u(this.parsedUrl.path+"/simplify",p).then((function(e){return o(e.data,s,n)}))},toGeoCoordinateString:function(t,r){var n={};null!=t.sr&&"object"==typeof t.sr?n.sr=t.sr.wkid||JSON.stringify(t.sr):n.sr=t.sr,n.coordinates=JSON.stringify(t.coordinates);var i=t.conversionType||"mgrs";n.conversionType=c.toJSON(i),n.conversionMode=t.conversionMode,n.numOfDigits=t.numOfDigits,n.rounding=t.rounding,n.addSpaces=t.addSpaces;var s={query:e.mixin({},this.parsedUrl.query,{f:"json"},n)};return(this.requestOptions||r)&&(s=e.mixin({},this.requestOptions,r,s)),u(this.parsedUrl.path+"/toGeoCoordinateString",s).then(this._handleToGeoCoordinateResponse)},trimExtend:function(t,r){var n=e.mixin({},this.parsedUrl.query,{f:"json"},t.toJSON()),i=t.sr,o={query:n};return(this.requestOptions||r)&&(o=e.mixin({},this.requestOptions,r,o)),u(this.parsedUrl.path+"/trimExtend",o).then((function(e){return(e.data.geometries||[]).map((function(e){return new s({spatialReference:i,paths:e.paths})}))}))},union:function(t,r){var n=t[0].spatialReference,i={query:e.mixin({},this.parsedUrl.query,{f:"json",sr:JSON.stringify(n.toJSON()),geometries:JSON.stringify(this._encodeGeometries(t))})};return(this.requestOptions||r)&&(i=e.mixin({},this.requestOptions,r,i)),u(this.parsedUrl.path+"/union",i).then((function(e){return a.fromJSON(e.data.geometry).set("spatialReference",n)}))},_handleRelationResponse:function(e){return e.data.relations},_handleDistanceResponse:function(e){return(e=e.data)&&e.distance},_handleToGeoCoordinateResponse:function(e){return e.data.strings},_handleFromGeoCoordinateResponse:function(e){return e.data.coordinates},_encodeGeometries:function(e){var t,r=[],n=e.length;for(t=0;t<n;t++)r.push(e[t].toJSON());return{geometryType:a.getJsonType(e[0]),geometries:r}},_decodeGeometries:function(t,r,n){var i=a.getGeometryType(r),s=t.geometries,o=[],u={spatialReference:n.toJSON()},p=e.mixin;return s.forEach((function(e,t){o[t]=new i(p(e,u))})),o},_toProjectGeometry:function(e){var t=e.spatialReference.toJSON();return e instanceof n?new o({rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]],spatialReference:t}):new s({paths:[[].concat(e.points)],spatialReference:t})},_fromProjectedGeometry:function(e,t,r){if("extent"===t){var s=e.rings[0];return new n(s[0][0],s[0][1],s[2][0],s[2][1],r)}return new i({points:e.paths[0],spatialReference:r.toJSON()})}});return e.mixin(N,{UNIT_METER:9001,UNIT_GERMAN_METER:9031,UNIT_FOOT:9002,UNIT_SURVEY_FOOT:9003,UNIT_CLARKE_FOOT:9005,UNIT_FATHOM:9014,UNIT_NAUTICAL_MILE:9030,UNIT_SURVEY_CHAIN:9033,UNIT_SURVEY_LINK:9034,UNIT_SURVEY_MILE:9035,UNIT_KILOMETER:9036,UNIT_CLARKE_YARD:9037,UNIT_CLARKE_CHAIN:9038,UNIT_CLARKE_LINK:9039,UNIT_SEARS_YARD:9040,UNIT_SEARS_FOOT:9041,UNIT_SEARS_CHAIN:9042,UNIT_SEARS_LINK:9043,UNIT_BENOIT_1895A_YARD:9050,UNIT_BENOIT_1895A_FOOT:9051,UNIT_BENOIT_1895A_CHAIN:9052,UNIT_BENOIT_1895A_LINK:9053,UNIT_BENOIT_1895B_YARD:9060,UNIT_BENOIT_1895B_FOOT:9061,UNIT_BENOIT_1895B_CHAIN:9062,UNIT_BENOIT_1895B_LINK:9063,UNIT_INDIAN_FOOT:9080,UNIT_INDIAN_1937_FOOT:9081,UNIT_INDIAN_1962_FOOT:9082,UNIT_INDIAN_1975_FOOT:9083,UNIT_INDIAN_YARD:9084,UNIT_INDIAN_1937_YARD:9085,UNIT_INDIAN_1962_YARD:9086,UNIT_INDIAN_1975_YARD:9087,UNIT_FOOT_1865:9070,UNIT_RADIAN:9101,UNIT_DEGREE:9102,UNIT_ARCMINUTE:9103,UNIT_ARCSECOND:9104,UNIT_GRAD:9105,UNIT_GON:9106,UNIT_MICRORADIAN:9109,UNIT_ARCMINUTE_CENTESIMAL:9112,UNIT_ARCSECOND_CENTESIMAL:9113,UNIT_MIL6400:9114,UNIT_BRITISH_1936_FOOT:9095,UNIT_GOLDCOAST_FOOT:9094,UNIT_INTERNATIONAL_CHAIN:109003,UNIT_INTERNATIONAL_LINK:109004,UNIT_INTERNATIONAL_YARD:109001,UNIT_STATUTE_MILE:9093,UNIT_SURVEY_YARD:109002,UNIT_50KILOMETER_LENGTH:109030,UNIT_150KILOMETER_LENGTH:109031,UNIT_DECIMETER:109005,UNIT_CENTIMETER:109006,UNIT_MILLIMETER:109007,UNIT_INTERNATIONAL_INCH:109008,UNIT_US_SURVEY_INCH:109009,UNIT_INTERNATIONAL_ROD:109010,UNIT_US_SURVEY_ROD:109011,UNIT_US_NAUTICAL_MILE:109012,UNIT_UK_NAUTICAL_MILE:109013,UNIT_SQUARE_INCHES:"esriSquareInches",UNIT_SQUARE_FEET:"esriSquareFeet",UNIT_SQUARE_YARDS:"esriSquareYards",UNIT_ACRES:"esriAcres",UNIT_SQUARE_MILES:"esriSquareMiles",UNIT_SQUARE_MILLIMETERS:"esriSquareMillimeters",UNIT_SQUARE_CENTIMETERS:"esriSquareCentimeters",UNIT_SQUARE_DECIMETERS:"esriSquareDecimeters",UNIT_SQUARE_METERS:"esriSquareMeters",UNIT_ARES:"esriAres",UNIT_HECTARES:"esriHectares",UNIT_SQUARE_KILOMETERS:"esriSquareKilometers"}),N}.apply(null,n))||(e.exports=i)},868:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(6),r(8),r(60),r(11),r(51),r(96),r(847),r(1037),r(50)],void 0===(i=function(e,t,r,n,i,s,o,a,u,p){function f(e,t){return void 0===e&&(e=null),n(this,void 0,void 0,(function(){var n;return r(this,(function(r){switch(r.label){case 0:if(i.geometryServiceUrl)return[2,new u({url:i.geometryServiceUrl})];if(!e)throw new s("internal:geometry-service-url-not-configured");return e.isInstanceOf(a)?n=e.portal||o.getDefault():e.isInstanceOf(o)&&(n=e),[4,n.load({signal:t})];case 1:if(r.sent(),n.helperServices&&n.helperServices.geometry&&n.helperServices.geometry.url)return[2,new u({url:n.helperServices.geometry.url})];throw new s("internal:geometry-service-url-not-configured")}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.create=f,t.projectGeometry=function(e,t,i,o){return void 0===i&&(i=null),n(this,void 0,void 0,(function(){var n,a,u;return r(this,(function(r){switch(r.label){case 0:return[4,f(i,o)];case 1:return n=r.sent(),(a=new p).geometries=[e],a.outSpatialReference=t,[4,n.project(a,{signal:o})];case 2:if((u=r.sent())&&Array.isArray(u)&&1===u.length)return[2,u[0]];throw new s("internal:geometry-service-projection-failed")}}))}))}}.apply(null,n))||(e.exports=i)},883:function(e,t,r){var n,i;n=[r.dj.c(e.i),t,r(1),r(0),r(72),r(7),r(10),r(23),r(2)],void 0===(i=function(e,t,r,n,i,s,o,a,u){return function(e){function t(t){var r=e.call(this)||this;return r.requestOptions=null,r.url=null,r}return r(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"!=typeof e?e:s({url:e},t)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!0,configurable:!0}),t.prototype._parseUrl=function(e){return e?a.urlToObject(e):null},t.prototype._encode=function(e,t,r){var n={};for(var i in e)if("declaredClass"!==i){var s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){n[i]=[];for(var o=0;o<s.length;o++)n[i][o]=this._encode(s[o])}else if("object"==typeof s)if(s.toJSON){var a=s.toJSON(r&&r[i]);n[i]=t?a:JSON.stringify(a)}else n[i]=t?s:JSON.stringify(s);else n[i]=s}return n},n([u.property({readOnly:!0,dependsOn:["url"]})],t.prototype,"parsedUrl",null),n([u.property()],t.prototype,"requestOptions",void 0),n([u.property({type:String})],t.prototype,"url",void 0),n([u.subclass("esri.tasks.Task")],t)}(u.declared(o))}.apply(null,n))||(e.exports=i)}}]);