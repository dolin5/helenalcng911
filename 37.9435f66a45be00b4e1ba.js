(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/GeoRSSLayer":837})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{837:function(e,t,r){var o,i;o=[r.dj.c(e.i),t,r(7),r(1),r(0),r(6),r(8),r(60),r(41),r(11),r(16),r(276),r(4),r(2),r(75),r(278),r(277),r(285),r(176),r(172),r(198),r(102),r(48)],void 0===(i=function(e,t,o,i,n,l,p,s,a,u,y,c,d,f,S,v,h,g,w,b,m,R,C){return function(e){function t(t,r){var o=e.call(this)||this;return o.description=null,o.title=null,o.lineSymbol=null,o.pointSymbol=null,o.polygonSymbol=null,o.outSpatialReference=null,o.url=null,o.type="geo-rss",o}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?o({url:e},t):e},t.prototype.readFeatureCollections=function(e,t){return t.featureCollection.layers.forEach((function(e){var t=e.layerDefinition.drawingInfo.renderer.symbol;t&&"esriSFS"===t.type&&t.outline&&-1!==t.outline.style.indexOf("esriSFS")&&(t.outline.style="esriSLSSolid")})),t.featureCollection.layers},t.prototype.load=function(e){var t=this,r=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then((function(){return t._fetchService(r)}),(function(){return t._fetchService(r)}))),this.when()},t.prototype.importLayerViewModule=function(e){return p(this,void 0,void 0,(function(){return l(this,(function(t){switch(e.type){case"2d":return[2,d.create((function(e){return Promise.all([r.e(1),r.e(0),r.e(2),r.e(3),r.e(52)]).then(function(){var t=[r(2058)];e.apply(null,t)}.bind(this)).catch(r.oe)}))];case"3d":return[2,d.reject(new u("geo-rss-layer:view-not-supported","GeoRSSLayer is only supported in 2D"))]}return[2]}))}))},t.prototype._fetchService=function(e){return p(this,void 0,void 0,(function(){var t;return l(this,(function(r){switch(r.label){case 0:return[4,a(s.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return t=r.sent().data,this.read(t,{origin:"service"}),[2]}}))}))},n([f.property()],t.prototype,"description",void 0),n([f.property()],t.prototype,"title",void 0),n([f.property()],t.prototype,"featureCollections",void 0),n([f.reader("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),n([f.property({type:C})],t.prototype,"lineSymbol",void 0),n([f.property({type:["show","hide"]})],t.prototype,"listMode",void 0),n([f.property({type:m})],t.prototype,"pointSymbol",void 0),n([f.property({type:R})],t.prototype,"polygonSymbol",void 0),n([f.property()],t.prototype,"outSpatialReference",void 0),n([f.property(b.url)],t.prototype,"url",void 0),n([f.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),n([f.subclass("esri.layers.GeoRSSLayer")],t)}(f.declared(g.RefreshableLayer(v.OperationalLayer(h.PortalLayer(w.ScaleRangeLayer(c.MultiOriginJSONMixin(S)))))))}.apply(null,o))||(e.exports=i)}}]);