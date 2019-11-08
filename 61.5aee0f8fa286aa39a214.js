(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/engine/webgl/definitions":875,"esri/layers/graphics/OptimizedGeometry":876,"esri/views/layers/support/ClipArea":877,"esri/views/2d/engine/vectorTiles/GeometryUtils":880,"esri/layers/graphics/OptimizedFeature":883,"esri/geometry/support/quantizationUtils":884,"esri/views/layers/LayerView":891,"esri/layers/graphics/OptimizedFeatureSet":892,"esri/core/pbf":893,"esri/views/2d/layers/LayerView2D":901,"esri/views/layers/support/ClipRect":909,"esri/views/layers/support/Geometry":910,"esri/views/layers/support/Path":911,"esri/views/2d/layers/BitmapTileLayerView2D":1150,"esri/views/2d/layers/WMTSLayerView2D":2089})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[61,73,79,84],{1150:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(0),i(1),i(2),i(1047),i(971)],void 0===(r=function(t,e,i,n,r,o,s){Object.defineProperty(e,"__esModule",{value:!0}),e.BitmapTileLayerView2D=function(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.container=new s.Container,e}return n(e,t),e.prototype.attach=function(){var t=this;this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new o.BitmapTileContainer(this._tileInfoView,this.clips),this.handles.add(this.clips.on("change",(function(){return t._bitmapView.setClips(t.clips)}))),this.container.addChild(this._bitmapView)},e.prototype.detatch=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i([r.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],e)}(r.declared(t))}}.apply(null,n))||(t.exports=r)},2089:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(1),i(0),i(6),i(8),i(21),i(2),i(31),i(1150),i(901),i(291),i(306),i(299),i(891),i(290)],void 0===(r=function(t,e,i,n,r,o,s,a,u,p,l,d,h,c,y,f){var _=[102113,102100,3857,3785,900913];return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._handles=new s,e._tileStrategy=null,e._fetchQueue=null,e._tileRequests=new Map,e.layer=null,e}return i(e,t),Object.defineProperty(e.prototype,"tileMatrixSet",{get:function(){if(this.layer.activeLayer.tileMatrixSetId)return this.layer.activeLayer.tileMatrixSet;var t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(this.layer.activeLayer.tileMatrixSetId=t.id,t):null},enumerable:!0,configurable:!0}),e.prototype.hitTest=function(t,e){return null},e.prototype.update=function(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),this.notifyChange("updating")},e.prototype.attach=function(){var t=this,e=this.layer.activeLayer,i=this.tileMatrixSet;if(i){var n=i.tileInfo.spatialReference,r=e.fullExtent&&e.fullExtent.clone();n.isWebMercator?r=u.geographicToWebMercator(r):n.isWGS84||(r=i.fullExtent),this._tileInfoView=new d(i.tileInfo,r),this._fetchQueue=new h({tileInfoView:this._tileInfoView,process:function(e){return t.fetchTile(e)}}),this._tileStrategy=new c({cachePolicy:"keep",acquireTile:function(e){return t.acquireTile(e)},releaseTile:function(e){return t.releaseTile(e)},tileInfoView:this._tileInfoView}),this._handles.add(this.watch("layer.activeLayer.styleId, tileMatrixSet",(function(){return t._refresh()}))),this.inherited(arguments)}},e.prototype.detach=function(){this.inherited(arguments),this._handles.removeAll(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null},e.prototype.moveStart=function(){this.requestUpdate()},e.prototype.viewChange=function(){this.requestUpdate()},e.prototype.moveEnd=function(){this.requestUpdate()},e.prototype.doRefresh=function(t){return o(this,void 0,void 0,(function(){return r(this,(function(t){return this.updateRequested||this.suspended?[2]:(this._refresh(),[2])}))}))},e.prototype.isUpdating=function(){return this._fetchQueue.length>0},e.prototype.acquireTile=function(t){var e,i,n=this,r=this._bitmapView.createTile(t),o=r.bitmap;e=this._tileInfoView.getTileCoords([0,0],r.key),o.x=e[0],o.y=e[1],o.resolution=this._tileInfoView.getTileResolution(r.key),i=this._tileInfoView.tileInfo.size,o.width=i[0],o.height=i[1],this._tileInfoView.getTileCoords(o,r.key);var s={id:t.id,fulfilled:!1,promise:this._fetchQueue.push(r.key).then((function(t){r.bitmap.source=t,r.once("attach",(function(){return n.requestUpdate()})),n._bitmapView.addChild(r)})).catch((function(t){r.bitmap.source=null,r.once("attach",(function(){return n.requestUpdate()})),n._bitmapView.addChild(r)}))};return s.promise.then((function(){return s.fulfilled=!0}),(function(){return s.fulfilled=!0})),this._tileRequests.set(r,s),this.requestUpdate(),r},e.prototype.releaseTile=function(t){var e=this._tileRequests.get(t);e.fulfilled||this._fetchQueue.abort(e.id),this._tileRequests.delete(t),this._bitmapView.removeChild(t),this.requestUpdate()},e.prototype.fetchTile=function(t){return o(this,void 0,void 0,(function(){return r(this,(function(e){return[2,this.layer.fetchTile(t.level,t.row,t.col)]}))}))},e.prototype.canResume=function(){var t=this.inherited(arguments);return t?null!==this.tileMatrixSet:t},e.prototype._refresh=function(){var t=this;this._fetchQueue.reset(),this._tileStrategy.tiles.forEach((function(e){if(e.bitmap.source){e.bitmap.source=null;var i={id:e.key.id,fulfilled:!1,promise:t._fetchQueue.push(e.key).then((function(i){e.bitmap.source=i,e.requestRender(),t.notifyChange("updating")}))};i.promise.then((function(){return i.fulfilled=!0}),(function(){return i.fulfilled=!0})),t._tileRequests.set(e,i)}})),this.notifyChange("updating")},e.prototype._getTileMatrixSetBySpatialReference=function(t){var e=this.view.spatialReference,i=t.tileMatrixSets.find((function(t){return t.tileInfo.spatialReference.wkid===e.wkid}));return!i&&e.isWebMercator&&(i=t.tileMatrixSets.find((function(t){return _.indexOf(t.tileInfo.spatialReference.wkid)>-1}))),i},n([a.property({dependsOn:["tileMatrixSet"]})],e.prototype,"suspended",void 0),n([a.property({readOnly:!0,dependsOn:["view.spatialReference","layer.activeLayer"]})],e.prototype,"tileMatrixSet",null),n([a.subclass("esri.views.2d.layers.WMTSLayerView2D")],e)}(a.declared(f.RefreshableLayerView(p.BitmapTileLayerView2D(l.LayerView2D(y)))))}.apply(null,n))||(t.exports=r)},875:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.WEBGL_MAX_STOPS=8,e.WEBGL_MAX_INNER_STOPS=e.WEBGL_MAX_STOPS-2,e.NAN_MAGIC_NUMBER=1e-30,e.EXTRUDE_SCALE=64,e.PICTURE_FILL_COLOR=4294967295,e.TILE_SIZE=512,e.RASTER_TILE_SIZE=256,e.ANGLE_FACTOR_256=256/360,e.DEBUG_LABELS=!1,e.COLLISION_BUCKET_SIZE=128,e.DOT_DENSITY_MAX_FIELDS=8,e.COLLISION_MAX_ZOOM_DELTA=3,e.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,e.COLLISION_BOX_PADDING=16,e.COLLISION_TILE_BOX_SIZE=e.TILE_SIZE/e.COLLISION_BUCKET_SIZE,e.COLLISION_PLACEMENT_PADDING=8,e.HEURISTIC_GLYPHS_PER_LINE=50,e.HEURISTIC_GLYPHS_PER_FEATURE=10,e.GLYPH_SIZE=24,e.TEXT_LINE_HEIGHT=1.2*e.GLYPH_SIZE,e.TEXT_MAX_WIDTH=10*e.GLYPH_SIZE,e.TEXT_SPACING=0,e.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},e.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,e.TEXTURE_BINDING_SPRITE_ATLAS=0,e.TEXTURE_BINDING_GLYPH_ATLAS=0,e.TEXTURE_BINDING_BITMAP=0,e.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,e.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,e.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,e.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,e.TEXTURE_BINDING_HIGHLIGHT_0=5,e.TEXTURE_BINDING_HIGHLIGHT_1=6,e.TEXTURE_BINDING_RENDERER_0=5,e.TEXTURE_BINDING_RENDERER_1=6,e.ATTRIBUTE_DATA_FILTER_FLAGS=0,e.ATTRIBUTE_DATA_ANIMATION=1,e.ATTRIBUTE_DATA_VV=2,e.ATTRIBUTE_DATA_DD0=3,e.ATTRIBUTE_DATA_DD1=3,e.MAX_FILTERS=2,e.HIGHLIGHT_FLAG=1,e.FILTER_FLAG_0=2,e.EFFECT_FLAG_0=4,e.THIN_LINE_THRESHOLD=2.5,e.HITTEST_SEARCH_SIZE=24,e.MAX_ANIMATION_TIME_MS=2e3}.apply(null,n))||(t.exports=r)},876:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=[]),this.lengths=t,this.coords=e};e.default=i}.apply(null,n))||(t.exports=r)},877:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(0),i(1),i(3),i(2)],void 0===(r=function(t,e,i,n,r,o){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),i([o.subclass("esri.views.layers.support.ClipArea")],e)}(o.declared(r.JSONSupport))}.apply(null,n))||(t.exports=r)},880:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=function(t,e){function i(t,e){return(t%=e)>=0?t:t+e}Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var n=1/Math.LN2;e.positiveMod=i,e.radToByte=function(t){return i(t*e.C_RAD_TO_256,256)},e.degToByte=function(t){return i(t*e.C_DEG_TO_256,256)},e.log2=function(t){return Math.log(t)*n},e.sqr=function(t){return t*t},e.interpolate=function(t,e,i){return t*(1-i)+e*i},e.between=function(t,e,i){return t>=e&&t<=i||t>=i&&t<=e}}.apply(null,n))||(t.exports=r)},883:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e,i,n){void 0===t&&(t=null),void 0===e&&(e={}),this.geometry=t,e&&(this.attributes=e),i&&(this.centroid=i),null!=n&&(this.objectId=n)};e.default=i}.apply(null,n))||(t.exports=r)},884:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(55)],void 0===(r=function(t,e,i){function n(t){return t&&"upperLeft"===t.originPosition}function r(t,e){var i=t.scale,n=t.translate;return Math.round((e-n[0])/i[0])}function o(t,e){var i=t.scale,n=t.translate;return Math.round((n[1]-e)/i[1])}function s(t,e,i){for(var n,s,a,u,p=[],l=0;l<i.length;l++){var d=i[l];l>0?(a=r(t,d[0]),u=o(t,d[1]),a===n&&u===s||(p.push(e(d,a-n,u-s)),n=a,s=u)):(n=r(t,d[0]),s=o(t,d[1]),p.push(e(d,n,s)))}return p.length>0?p:null}function a(t,e,i,n){return s(t,i?n?R:S:n?S:b,e)}function u(t,e,i,n){for(var r=[],o=i?n?R:S:n?S:b,a=0;a<e.length;a++){var u=s(t,o,e[a]);u&&u.length>=3&&r.push(u)}return r.length?r:null}function p(t,e,i,n){for(var r=[],o=i?n?R:S:n?S:b,a=0;a<e.length;a++){var u=s(t,o,e[a]);u&&u.length>=2&&r.push(u)}return r.length?r:null}function l(t,e){var i=t.scale,n=t.translate;return e*i[0]+n[0]}function d(t,e){var i=t.scale;return t.translate[1]-e*i[1]}function h(t,e,i){var n=new Array(i.length);if(!i.length)return n;var r=t.scale,o=r[0],s=r[1],a=l(t,i[0][0]),u=d(t,i[0][1]);n[0]=e(i[0],a,u);for(var p=1;p<i.length;p++){var h=i[p];a+=h[0]*o,u-=h[1]*s,n[p]=e(h,a,u)}return n}function c(t,e,i){for(var n=new Array(i.length),r=0;r<i.length;r++)n[r]=h(t,e,i[r]);return n}function y(t,e,i,n){return h(t,i?n?R:S:n?S:b,e)}function f(t,e,i,n){return c(t,i?n?R:S:n?S:b,e)}function _(t,e,i,n){return c(t,i?n?R:S:n?S:b,e)}function v(t,e,i){for(var n=i[0],r=n[0],o=n[1],s=Math.min(r,e[0]),a=Math.min(o,e[1]),u=Math.max(r,e[2]),p=Math.max(o,e[3]),l=1;l<i.length;l++){var d=i[l],h=d[0],c=d[1];r+=h,o+=c,h<0&&(s=Math.min(s,r)),h>0&&(u=Math.max(u,r)),c<0?a=Math.min(a,o):c>0&&(p=Math.max(p,o))}return t[0]=s,t[1]=a,t[2]=u,t[3]=p,t}function g(t,e){if(!e.length)return null;t[0]=t[1]=Number.POSITIVE_INFINITY,t[2]=t[3]=Number.NEGATIVE_INFINITY;for(var i=0;i<e.length;i++)v(t,t,e[i]);return t}function I(t,e,i,n,s){return e.xmin=r(t,i.xmin),e.ymin=o(t,i.ymin),e.xmax=r(t,i.xmax),e.ymax=o(t,i.ymax),e!==i&&(n&&(e.zmin=i.zmin,e.zmax=i.zmax),s&&(e.mmin=i.mmin,e.mmax=i.mmax)),e}function T(t,e,i,n,r){return e.points=a(t,i.points,n,r),e}function m(t,e,i,n,s){return e.x=r(t,i.x),e.y=o(t,i.y),e!==i&&(n&&(e.z=i.z),s&&(e.m=i.m)),e}function E(t,e,i,n,r){var o=u(t,i.rings,n,r);return o?(e.rings=o,e):null}function w(t,e,i,n,r){var o=p(t,i.paths,n,r);return o?(e.paths=o,e):null}Object.defineProperty(e,"__esModule",{value:!0});var b=function(t,e,i){return[e,i]},S=function(t,e,i){return[e,i,t[2]]},R=function(t,e,i){return[e,i,t[2],t[3]]};e.toQuantizationTransform=function(t){return t?{originPosition:"upperLeft",scale:[t.tolerance,t.tolerance],translate:[t.extent.xmin,t.extent.ymax]}:null},e.equals=function(t,e){return t===e||null==t&&null==e||null!=t&&null!=e&&(n(t)?(i=t.translate[0],r=t.translate[1],o=t.scale[0]):(i=t.extent.xmin,r=t.extent.ymax,o=t.tolerance),n(e)?(s=e.translate[0],a=e.translate[1],u=e.scale[0]):(s=e.extent.xmin,a=e.extent.ymax,u=e.tolerance),i===s&&r===a&&o===u);var i,r,o,s,a,u},e.quantizeX=r,e.quantizeY=o,e.quantizeBounds=function(t,e,i){return e[0]=r(t,i[0]),e[3]=o(t,i[1]),e[2]=r(t,i[2]),e[1]=o(t,i[3]),e},e.quantizePoints=a,e.quantizeRings=u,e.quantizePaths=p,e.hydrateX=l,e.hydrateY=d,e.hydrateCoordsArray=h,e.hydrateCoordsArrayArray=c,e.hydrateBounds=function(t,e,i){return i?(e[0]=l(t,i[0]),e[1]=d(t,i[3]),e[2]=l(t,i[2]),e[3]=d(t,i[1]),e):[l(t,e[0]),d(t,e[3]),l(t,e[2]),d(t,e[1])]},e.hydratePoints=y,e.hydratePaths=f,e.hydrateRings=_,e.getQuantizedBoundsCoordsArray=v,e.getQuantizedBoundsCoordsArrayArray=g,e.getQuantizedBoundsPoints=function(t){var e=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return v(e,e,t)},e.getQuantizedBoundsPaths=function(t){return g([0,0,0,0],t)},e.getQuantizedBoundsRings=function(t){return g([0,0,0,0],t)},e.quantizeExtent=I,e.quantizeMultipoint=T,e.quantizePoint=m,e.quantizePolygon=E,e.quantizePolyline=w,e.quantizeGeometry=function(t,e){return t&&e?i.isPoint(e)?m(t,{},e,!1,!1):i.isPolyline(e)?w(t,{},e,!1,!1):i.isPolygon(e)?E(t,{},e,!1,!1):i.isMultipoint(e)?T(t,{},e,!1,!1):i.isExtent(e)?I(t,{},e,!1,!1):null:null},e.hydrateExtent=function(t,e,i,n,r){return e.xmin=l(t,i.xmin),e.ymin=d(t,i.ymin),e.xmax=l(t,i.xmax),e.ymax=d(t,i.ymax),e!==i&&(n&&(e.zmin=i.zmin,e.zmax=i.zmax),r&&(e.mmin=i.mmin,e.mmax=i.mmax)),e},e.hydrateMultipoint=function(t,e,i,n,r){return e.points=y(t,i.points,n,r),e},e.hydratePoint=function(t,e,i,n,r){return e.x=l(t,i.x),e.y=d(t,i.y),e!==i&&(n&&(e.z=i.z),r&&(e.m=i.m)),e},e.hydratePolygon=function(t,e,i,n,r){return e.rings=_(t,i.rings,n,r),e},e.hydratePolyline=function(t,e,i,n,r){return e.paths=f(t,i.paths,n,r),e}}.apply(null,n))||(t.exports=r)},891:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(1),i(0),i(10),i(49),i(116),i(175),i(9),i(91),i(4),i(2)],void 0===(r=function(t,e,i,n,r,o,s,a,u,p,l,d){return function(t){function e(e){var i=t.call(this)||this;return i.layer=null,i.parent=null,i}return i(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(this.layer),this.when().catch((function(e){if("layerview:create-error"!==e.name){var i=t.layer&&t.layer.id||"no id",n=t.layer&&t.layer.title||"no title";return u.getLogger(t.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+n+"', id: '"+i+"')",e),l.reject(e)}}))},e.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(e.prototype,"fullOpacity",{get:function(){var t=function(t){return null==t?1:t};return t(this.get("layer.opacity"))*t(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")},enumerable:!0,configurable:!0}),e.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},e.prototype.isUpdating=function(){return!1},n([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],e.prototype,"fullOpacity",null),n([d.property()],e.prototype,"layer",void 0),n([d.property()],e.prototype,"parent",void 0),n([d.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],e.prototype,"suspended",null),n([d.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],e.prototype,"updating",null),n([d.property({dependsOn:["layer.visible"]})],e.prototype,"visible",null),n([d.subclass("esri.views.layers.LayerView")],e)}(d.declared(s.HandleOwnerMixin(a.IdentifiableMixin(p.EsriPromiseMixin(o.EventedMixin(r))))))}.apply(null,n))||(t.exports=r)},892:function(t,e,i){var n,r;n=[i.dj.c(t.i),e],void 0===(r=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1};e.default=i}.apply(null,n))||(t.exports=r)},893:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(15),i(58)],void 0===(r=function(t,e,i,n){var r=i("esri-text-decoder")?new TextDecoder("utf-8"):null,o=i("safari")?6:i("ff")?12:32;return function(){function t(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=t?t.byteLength:0),this._tag=0,this._dataType=99,this.init(t,e,i,n)}return t.prototype.init=function(t,e,i,n){this._data=t,this._dataView=e,this._pos=i,this._end=n},t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.pos=function(){return this._pos},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){var t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){var t=this.getUInt32();return t>>>1^-(1&t)|0},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getUint32(e+4,!0);return this._skip(8),i},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+4294967296*t.getInt32(e+4,!0);return this._skip(8),i},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i},t.prototype.processMessageWithArgs=function(t,e,i,n){var r=this.getMessage(),o=t(r,e,i,n);return r.release(),o},t.prototype.processMessage=function(t){var e=this.getMessage(),i=t(e);return e.release(),i},t.prototype.getMessage=function(){var e=this._getLength(),i=t.pool.acquire();return i.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),i},t.prototype.release=function(){t.pool.release(this)},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,i=this._pos,n=0;if(this._end-i>=10)do{if(n|=127&(t=e[i++]),0==(128&t))break;if(n|=(127&(t=e[i++]))<<7,0==(128&t))break;if(n|=(127&(t=e[i++]))<<14,0==(128&t))break;if(n|=(127&(t=e[i++]))<<21,0==(128&t))break;if(n+=268435456*(127&(t=e[i++])),0==(128&t))break;if(n+=34359738368*(127&(t=e[i++])),0==(128&t))break;if(n+=4398046511104*(127&(t=e[i++])),0==(128&t))break;if(n+=562949953421312*(127&(t=e[i++])),0==(128&t))break;if(n+=72057594037927940*(127&(t=e[i++])),0==(128&t))break;if(n+=0x8000000000000000*(127&(t=e[i++])),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{for(var r=1;i!==this._end&&0!=(128&(t=e[i]));)++i,n+=(127&t)*r,r*=128;if(i===this._end)throw new Error("Varint overrun!");++i,n+=t*r}return this._pos=i,n},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,i){if((i=Math.min(this._end,i))-e>o&&r){var n=t.subarray(e,i);return r.decode(n)}for(var s="",a="",u=e;u<i;++u){var p=t[u];128&p?a+="%"+p.toString(16):(s+=decodeURIComponent(a)+String.fromCharCode(p),a="")}return a.length&&(s+=decodeURIComponent(a)),s},t.prototype._toBytes=function(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)},t.pool=new n(t,!1,(function(t){t._data=null,t._dataView=null})),t}()}.apply(null,n))||(t.exports=r)},901:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(1),i(0),i(17),i(94),i(14),i(2),i(877),i(909),i(910),i(911)],void 0===(r=function(t,e,i,n,r,o,s,a,u,p,l,d){Object.defineProperty(e,"__esModule",{value:!0});var h=r.ofType({key:"type",base:u,typeMap:{rect:p,path:d,geometry:l}});e.LayerView2D=function(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clips=new h,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return i(e,t),e.prototype.initialize=function(){var t=this;this.when((function(){t.requestUpdate()}),(function(){}));var e=function(){return t.notifyChange("rendering")};this.handles.add([s.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestLayerViewUpdate(t)}),!0),s.init(this,"fullOpacity",(function(e){t.container&&(t.container.opacity=e)}),!0),s.on(this,"container","post-render",e),s.on(this,"container","will-render",e)])},e.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(e.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),e.prototype.isVisibleAtScale=function(t){var e=!0,i=this.layer,n=i.minScale,r=i.maxScale;if(null!=n&&null!=r){var o=!n,s=!r;!o&&t<=n&&(o=!0),!s&&t>=r&&(s=!0),e=o&&s}return e},e.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},e.prototype.processUpdate=function(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1},e.prototype.isUpdating=function(){return!1},e.prototype.isRendering=function(){return!1},e.prototype.canResume=function(){var t=this.inherited(arguments);return t&&(t=this.isVisibleAtScale(this.view.scale)),t},n([a.property({type:h,set:function(t){var e=o.referenceSetter(t,this._get("clips"),h);this._set("clips",e)}})],e.prototype,"clips",void 0),n([a.property()],e.prototype,"moving",void 0),n([a.property({dependsOn:["attached","suspended","moving"]})],e.prototype,"rendering",null),n([a.property()],e.prototype,"attached",void 0),n([a.property()],e.prototype,"container",void 0),n([a.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],e.prototype,"suspended",void 0),n([a.property({readOnly:!0})],e.prototype,"updateParameters",void 0),n([a.property()],e.prototype,"updateRequested",void 0),n([a.property({dependsOn:["updateRequested","attached","suspended"]})],e.prototype,"updating",null),n([a.property()],e.prototype,"view",void 0),n([a.subclass("esri.views.2d.layers.LayerView2D")],e)}(a.declared(t))}}.apply(null,n))||(t.exports=r)},909:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(0),i(1),i(2),i(877)],void 0===(r=function(t,e,i,n,r,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}var o;return n(e,t),o=e,e.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([r.property({type:[Number,String],json:{write:!0}})],e.prototype,"left",void 0),i([r.property({type:[Number,String],json:{write:!0}})],e.prototype,"right",void 0),i([r.property({type:[Number,String],json:{write:!0}})],e.prototype,"top",void 0),i([r.property({type:[Number,String],json:{write:!0}})],e.prototype,"bottom",void 0),i([r.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],e.prototype,"version",null),o=i([r.subclass("esri.views.layers.support.ClipRect")],e)}(r.declared(o))}.apply(null,n))||(t.exports=r)},910:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(0),i(1),i(20),i(2),i(46),i(55),i(877)],void 0===(r=function(t,e,i,n,r,o,s,a,u){var p={base:s,key:"type",typeMap:{extent:r.Extent,polygon:r.Polygon}};return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="geometry",e.geometry=null,e}var r;return n(e,t),r=e,Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new r({geometry:this.geometry.clone()})},i([o.property({types:p,json:{read:a.fromJSON,write:!0}})],e.prototype,"geometry",void 0),i([o.property({readOnly:!0,dependsOn:["geometry"]})],e.prototype,"version",null),r=i([o.subclass("esri.views.layers.support.Geometry")],e)}(o.declared(u))}.apply(null,n))||(t.exports=r)},911:function(t,e,i){var n,r;n=[i.dj.c(t.i),e,i(0),i(1),i(2),i(877)],void 0===(r=function(t,e,i,n,r,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="path",e.path=[],e}return n(e,t),Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),i([r.property({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),i([r.property({readOnly:!0,dependsOn:["path"]})],e.prototype,"version",null),i([r.subclass("esri.views.layers.support.Path")],e)}(r.declared(o))}.apply(null,n))||(t.exports=r)}}]);