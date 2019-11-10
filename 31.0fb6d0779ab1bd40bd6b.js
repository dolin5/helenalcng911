(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/KMLLayer":840,"esri/layers/support/kmlUtils":1139,"esri/layers/support/KMLSublayer":1998})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1139:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(6),t(8),t(7),t(60),t(120),t(41),t(5),t(183),t(171)],void 0===(o=function(e,r,t,n,o,i,l,s,a,u,p){function y(e,r,t){t.forEach((function(t){e.set(t.attributes[r],t)}))}Object.defineProperty(r,"__esModule",{value:!0});var c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};r.parseKML=function(e){var r=e.folders.slice(),t=new Map,n=new Map,o=new Map,i=new Map,l=new Map,s={esriGeometryPoint:n,esriGeometryPolyline:o,esriGeometryPolygon:i};return e.featureCollection.layers.forEach((function(e){var r=a.clone(e);r.featureSet.features=[];var l=e.featureSet.geometryType;t.set(l,r);var s=e.layerDefinition.objectIdField;"esriGeometryPoint"===l?y(n,s,e.featureSet.features):"esriGeometryPolyline"===l?y(o,s,e.featureSet.features):"esriGeometryPolygon"===l&&y(i,s,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((function(e){l.set(e.id,e)})),e.folders.forEach((function(t){t.networkLinkIds.forEach((function(n){var o=function(e,r,t){var n=function(e,r){var t;return r.some((function(r){return r.id===e&&(t=r,!0)})),t}(e,t);return n&&(n.parentFolderId=r,n.networkLink=n),n}(n,t.id,e.networkLinks);o&&r.push(o)}))})),r.forEach((function(e){e.featureInfos&&(e.points=a.clone(t.get("esriGeometryPoint")),e.polylines=a.clone(t.get("esriGeometryPolyline")),e.polygons=a.clone(t.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map((function(r){switch(r.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":var t=s[r.type].get(r.id);t&&e[c[r.type]].featureSet.features.push(t);break;case"GroundOverlay":var n=l.get(r.id);n&&e.mapImages.push(n)}})))})),{folders:e.folders,sublayers:r}},r.fetchService=function(e,r,t,n){var o=i.kmlServiceUrl;return s(o,{query:{url:e,model:"simple",folders:"",refresh:0!==t||void 0,outSR:JSON.stringify(r)},responseType:"json",signal:n})},r.sublayersFromJSON=function(e,r,t,n){void 0===t&&(t=null),void 0===n&&(n=[]);var o=[],i={},l=r.sublayers,s=r.folders.map((function(e){return e.id}));return l.forEach((function(r){var l=new e;if(t?l.read(r,t):l.read(r),n.length&&s.indexOf(l.id)>-1&&(l.visible=-1!==n.indexOf(l.id)),i[r.id]=l,null!=r.parentFolderId&&-1!==r.parentFolderId){var a=i[r.parentFolderId];a.sublayers||(a.sublayers=[]),a.sublayers.unshift(l)}else o.unshift(l)})),o},r.getGraphics=function(e){return n(this,void 0,void 0,(function(){var r,n,o,i,s,a,y,c,f,d;return t(this,(function(t){switch(t.label){case 0:r=p.fromJSON(e.featureSet),n=r.features,o=e.layerDefinition,i=u.fromJSON(o.drawingInfo.renderer),s=l.fromJSON(e.popupInfo),a=[],y=0,c=n,t.label=1;case 1:return y<c.length?(f=c[y],[4,i.getSymbolAsync(f)]):[3,4];case 2:d=t.sent(),f.symbol=d,f.popupTemplate=s,f.visible=!!f.attributes.visibility,a.push(f),t.label=3;case 3:return y++,[3,1];case 4:return[2,a]}}))}))}}.apply(null,n))||(e.exports=o)},1998:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(1),t(0),t(72),t(17),t(3),t(52),t(16),t(14),t(2),t(13),t(1139)],void 0===(o=function(e,r,t,n,o,i,l,s,a,u,p,y,c){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._sublayersHandles=null,r.description=null,r.id=null,r.networkLink=null,r.title=null,r}var o;return t(r,e),o=r,r.prototype.initialize=function(){var e=this;u.whenOnce(this,"networkLink").then((function(r){return u.whenTrueOnce(e,"visible")})).then((function(){return e.load()}))},r.prototype.load=function(e){var r=this;if(this.networkLink){var t=a.isSome(e)?e.signal:null,n=this._fetchService(this._get("networkLink").href,t).then((function(e){var t=y.default(i.ofType(o),c.sublayersFromJSON(o,e));r.sublayers?r.sublayers.addMany(t):r.sublayers=t,r.layer&&r.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(n),this.when()}},Object.defineProperty(r.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(r){return r.layer=e}))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"sublayers",{set:function(e){var r=this,t=this._get("sublayers");t&&(t.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=r,e.layer=r.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var t=e.item;t.parent=r,t.layer=r.layer})),e.on("after-remove",(function(e){var r=e.item;r.parent=null,r.layer=null}))]),this._set("sublayers",e)},enumerable:!0,configurable:!0}),r.prototype.castSublayers=function(e){return y.default(i.ofType(o),e)},Object.defineProperty(r.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))},enumerable:!0,configurable:!0}),r.prototype.readVisible=function(e,r){return!!r.visibility},r.prototype._fetchService=function(e,r){return c.fetchService(e,this.layer.outSpatialReference,this.layer.refreshInterval,r).then((function(e){return c.parseKML(e.data)}))},n([p.property()],r.prototype,"description",void 0),n([p.property()],r.prototype,"id",void 0),n([p.property({value:null})],r.prototype,"layer",null),n([p.property({readOnly:!0,value:null})],r.prototype,"networkLink",void 0),n([p.property({json:{write:{allowNull:!0}}})],r.prototype,"parent",void 0),n([p.property({value:null,json:{write:{allowNull:!0}}})],r.prototype,"sublayers",null),n([p.cast("sublayers")],r.prototype,"castSublayers",null),n([p.property({value:null,json:{read:{source:"name"}}})],r.prototype,"title",void 0),n([p.property({value:!0})],r.prototype,"visible",null),n([p.reader("visible",["visibility"])],r.prototype,"readVisible",null),o=n([p.subclass("esri.layers.support.KMLSublayer")],r)}(p.declared(l.JSONSupportMixin(s)))}.apply(null,n))||(e.exports=o)},840:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(7),t(1),t(0),t(6),t(8),t(17),t(186),t(11),t(16),t(276),t(4),t(2),t(26),t(75),t(278),t(277),t(285),t(176),t(1998),t(1139)],void 0===(o=function(e,r,n,o,i,l,s,a,u,p,y,c,f,d,h,b,v,m,g,w,S,O){return function(e){function r(r,t){var n=e.call(this)||this;return n._visibleFolders=[],n.allSublayers=new u({root:n,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),n.outSpatialReference=h.WGS84,n.path=null,n.operationalLayerType="KML",n.sublayers=null,n.type="kml",n.url=null,n.watch("sublayers",(function(e,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),e&&e.forEach((function(e){e.parent=n,e.layer=n}))}),!0),n}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?n({url:e},r):e},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){this._visibleFolders=r.visibleFolders},r.prototype.readSublayers=function(e,r,t){return O.sublayersFromJSON(S,r,t,this._visibleFolders)},r.prototype.writeSublayers=function(e,r,t,n){for(var o=[],i=e.toArray();i.length;){var l=i[0];l.networkLink||(l.visible&&o.push(l.id),l.sublayers&&i.push.apply(i,l.sublayers.toArray())),i.shift()}r.visibleFolders=o},Object.defineProperty(r.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=this.url.substring(this.url.lastIndexOf("/")+1,this.parsedUrl.path.lastIndexOf("."));return 0===e.length&&(e="KML"),e}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this.sublayers,r=[],t=function(e){e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then((function(){return r._fetchService(t)}))),this.when()},r.prototype.importLayerViewModule=function(e){return s(this,void 0,void 0,(function(){return l(this,(function(r){switch(e.type){case"2d":return[2,f.create((function(e){return Promise.all([t.e(1),t.e(0),t.e(2),t.e(3),t.e(54)]).then(function(){var r=[t(2061)];e.apply(null,r)}.bind(this)).catch(t.oe)}))];case"3d":return[2,f.reject(new p("kml-layer:view-not-supported","KMLLayer is only supported in 2D"))]}return[2]}))}))},r.prototype._fetchService=function(e){return s(this,void 0,void 0,(function(){var r,t,n=this;return l(this,(function(o){switch(o.label){case 0:return[4,f.resolve().then((function(){return n.resourceInfo?{ssl:!1,data:n.resourceInfo}:O.fetchService(n.url,n.outSpatialReference,n.refreshInterval,e)}))];case 1:return r=o.sent(),(t=O.parseKML(r.data))&&this.read(t,{origin:"service"}),[2]}}))}))},i([d.property({readOnly:!0})],r.prototype,"allSublayers",void 0),i([d.property({type:h})],r.prototype,"outSpatialReference",void 0),i([d.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),i([d.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([d.property({type:["KML"]})],r.prototype,"operationalLayerType",void 0),i([d.property({type:a.ofType(S),json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),i([d.reader(["web-map","portal-item"],"sublayers",["visibleFolders"])],r.prototype,"readSublayersFromItemOrWebMap",null),i([d.reader("service","sublayers",["sublayers"])],r.prototype,"readSublayers",null),i([d.writer("sublayers")],r.prototype,"writeSublayers",null),i([d.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),i([d.property({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}},dependsOn:["url","parsedUrl"]})],r.prototype,"title",null),i([d.property()],r.prototype,"url",void 0),i([d.property({readOnly:!0,dependsOn:["sublayers"]})],r.prototype,"visibleSublayers",null),i([d.subclass("esri.layers.KMLLayer")],r)}(d.declared(g.RefreshableLayer(w.ScaleRangeLayer(v.OperationalLayer(m.PortalLayer(c.MultiOriginJSONMixin(b)))))))}.apply(null,n))||(e.exports=o)}}]);