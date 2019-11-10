(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/engine/webgl/definitions":876,"esri/layers/graphics/OptimizedGeometry":877,"esri/views/layers/support/ClipArea":878,"esri/views/2d/engine/vectorTiles/GeometryUtils":881,"esri/layers/graphics/OptimizedFeature":884,"esri/geometry/support/quantizationUtils":885,"esri/views/layers/LayerView":892,"esri/layers/graphics/OptimizedFeatureSet":893,"esri/core/pbf":894,"esri/views/2d/layers/LayerView2D":902,"esri/views/layers/support/ClipRect":910,"esri/views/layers/support/Geometry":911,"esri/views/layers/support/Path":912,"esri/renderers/support/clickToleranceUtils":1059,"esri/views/2d/layers/support/popupUtils2D":1061})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[6,73,79,84],{1059:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){function n(t,e){return e&&e.xoffset?Math.max(t,Math.abs(e.xoffset)):e&&e.yoffset?Math.max(t,Math.abs(e.yoffset)):t}function r(t,e){return"number"==typeof t?t:t&&t.stops&&t.stops.length?function(t){for(var e=0,n=0,r=0;r<t.length;r++){var i=t[r].size;"number"==typeof i&&(e+=i,n++)}return e/n}(t.stops):e}function i(t,e){if(!e)return t;var n=e.filter((function(t){return"size"===t.type})).map((function(e){var n=e.maxSize,i=e.minSize;return(r(n,t)+r(i,t))/2})),i=0,o=n.length;if(0===o)return t;for(var a=0;a<o;a++)i+=n[a];var s=Math.floor(i/o);return Math.max(s,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.calculateTolerance=function(t){if(!t)return 6;var e="visualVariables"in t?i(6,t.visualVariables):6;if("simple"===t.type)return n(e,t.symbol);if("unique-value"===t.type){var r=e;return t.uniqueValueInfos.forEach((function(t){r=n(r,t.symbol)})),r}if("class-breaks"===t.type){var o=e;return t.classBreakInfos.forEach((function(t){o=n(o,t.symbol)})),o}return t.type,e}}.apply(null,r))||(t.exports=i)},1061:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(18),n(0),n(28)],void 0===(i=function(t,e,n,r,i){Object.defineProperty(e,"__esModule",{value:!0}),e.createQueryGeometry=function(t,e,n){var r=n.get("state.resolution"),o=e*("number"==typeof r?r:1),a=t.clone().offset(-o,-o),s=t.clone().offset(o,o),u=n.spatialReference;return new i({xmin:Math.min(a.x,s.x),ymin:Math.min(a.y,s.y),xmax:Math.max(a.x,s.x),ymax:Math.max(a.y,s.y),spatialReference:u})}}.apply(null,r))||(t.exports=i)},876:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.WEBGL_MAX_STOPS=8,e.WEBGL_MAX_INNER_STOPS=e.WEBGL_MAX_STOPS-2,e.NAN_MAGIC_NUMBER=1e-30,e.EXTRUDE_SCALE=64,e.PICTURE_FILL_COLOR=4294967295,e.TILE_SIZE=512,e.RASTER_TILE_SIZE=256,e.ANGLE_FACTOR_256=256/360,e.DEBUG_LABELS=!1,e.COLLISION_BUCKET_SIZE=128,e.DOT_DENSITY_MAX_FIELDS=8,e.COLLISION_MAX_ZOOM_DELTA=3,e.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,e.COLLISION_BOX_PADDING=16,e.COLLISION_TILE_BOX_SIZE=e.TILE_SIZE/e.COLLISION_BUCKET_SIZE,e.COLLISION_PLACEMENT_PADDING=8,e.HEURISTIC_GLYPHS_PER_LINE=50,e.HEURISTIC_GLYPHS_PER_FEATURE=10,e.GLYPH_SIZE=24,e.TEXT_LINE_HEIGHT=1.2*e.GLYPH_SIZE,e.TEXT_MAX_WIDTH=10*e.GLYPH_SIZE,e.TEXT_SPACING=0,e.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},e.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,e.TEXTURE_BINDING_SPRITE_ATLAS=0,e.TEXTURE_BINDING_GLYPH_ATLAS=0,e.TEXTURE_BINDING_BITMAP=0,e.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,e.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,e.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,e.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,e.TEXTURE_BINDING_HIGHLIGHT_0=5,e.TEXTURE_BINDING_HIGHLIGHT_1=6,e.TEXTURE_BINDING_RENDERER_0=5,e.TEXTURE_BINDING_RENDERER_1=6,e.ATTRIBUTE_DATA_FILTER_FLAGS=0,e.ATTRIBUTE_DATA_ANIMATION=1,e.ATTRIBUTE_DATA_VV=2,e.ATTRIBUTE_DATA_DD0=3,e.ATTRIBUTE_DATA_DD1=3,e.MAX_FILTERS=2,e.HIGHLIGHT_FLAG=1,e.FILTER_FLAG_0=2,e.EFFECT_FLAG_0=4,e.THIN_LINE_THRESHOLD=2.5,e.HITTEST_SEARCH_SIZE=24,e.MAX_ANIMATION_TIME_MS=2e3}.apply(null,r))||(t.exports=i)},877:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){void 0===t&&(t=[]),void 0===e&&(e=[]),this.lengths=t,this.coords=e};e.default=n}.apply(null,r))||(t.exports=i)},878:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(0),n(1),n(3),n(2)],void 0===(i=function(t,e,n,r,i,o){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),n([o.subclass("esri.views.layers.support.ClipArea")],e)}(o.declared(i.JSONSupport))}.apply(null,r))||(t.exports=i)},881:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){function n(t,e){return(t%=e)>=0?t:t+e}Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var r=1/Math.LN2;e.positiveMod=n,e.radToByte=function(t){return n(t*e.C_RAD_TO_256,256)},e.degToByte=function(t){return n(t*e.C_DEG_TO_256,256)},e.log2=function(t){return Math.log(t)*r},e.sqr=function(t){return t*t},e.interpolate=function(t,e,n){return t*(1-n)+e*n},e.between=function(t,e,n){return t>=e&&t<=n||t>=n&&t<=e}}.apply(null,r))||(t.exports=i)},884:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n,r){void 0===t&&(t=null),void 0===e&&(e={}),this.geometry=t,e&&(this.attributes=e),n&&(this.centroid=n),null!=r&&(this.objectId=r)};e.default=n}.apply(null,r))||(t.exports=i)},885:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(55)],void 0===(i=function(t,e,n){function r(t){return t&&"upperLeft"===t.originPosition}function i(t,e){var n=t.scale,r=t.translate;return Math.round((e-r[0])/n[0])}function o(t,e){var n=t.scale,r=t.translate;return Math.round((r[1]-e)/n[1])}function a(t,e,n){for(var r,a,s,u,p=[],l=0;l<n.length;l++){var d=n[l];l>0?(s=i(t,d[0]),u=o(t,d[1]),s===r&&u===a||(p.push(e(d,s-r,u-a)),r=s,a=u)):(r=i(t,d[0]),a=o(t,d[1]),p.push(e(d,r,a)))}return p.length>0?p:null}function s(t,e,n,r){return a(t,n?r?N:A:r?A:x,e)}function u(t,e,n,r){for(var i=[],o=n?r?N:A:r?A:x,s=0;s<e.length;s++){var u=a(t,o,e[s]);u&&u.length>=3&&i.push(u)}return i.length?i:null}function p(t,e,n,r){for(var i=[],o=n?r?N:A:r?A:x,s=0;s<e.length;s++){var u=a(t,o,e[s]);u&&u.length>=2&&i.push(u)}return i.length?i:null}function l(t,e){var n=t.scale,r=t.translate;return e*n[0]+r[0]}function d(t,e){var n=t.scale;return t.translate[1]-e*n[1]}function c(t,e,n){var r=new Array(n.length);if(!n.length)return r;var i=t.scale,o=i[0],a=i[1],s=l(t,n[0][0]),u=d(t,n[0][1]);r[0]=e(n[0],s,u);for(var p=1;p<n.length;p++){var c=n[p];s+=c[0]*o,u-=c[1]*a,r[p]=e(c,s,u)}return r}function h(t,e,n){for(var r=new Array(n.length),i=0;i<n.length;i++)r[i]=c(t,e,n[i]);return r}function y(t,e,n,r){return c(t,n?r?N:A:r?A:x,e)}function f(t,e,n,r){return h(t,n?r?N:A:r?A:x,e)}function _(t,e,n,r){return h(t,n?r?N:A:r?A:x,e)}function v(t,e,n){for(var r=n[0],i=r[0],o=r[1],a=Math.min(i,e[0]),s=Math.min(o,e[1]),u=Math.max(i,e[2]),p=Math.max(o,e[3]),l=1;l<n.length;l++){var d=n[l],c=d[0],h=d[1];i+=c,o+=h,c<0&&(a=Math.min(a,i)),c>0&&(u=Math.max(u,i)),h<0?s=Math.min(s,o):h>0&&(p=Math.max(p,o))}return t[0]=a,t[1]=s,t[2]=u,t[3]=p,t}function g(t,e){if(!e.length)return null;t[0]=t[1]=Number.POSITIVE_INFINITY,t[2]=t[3]=Number.NEGATIVE_INFINITY;for(var n=0;n<e.length;n++)v(t,t,e[n]);return t}function I(t,e,n,r,a){return e.xmin=i(t,n.xmin),e.ymin=o(t,n.ymin),e.xmax=i(t,n.xmax),e.ymax=o(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),a&&(e.mmin=n.mmin,e.mmax=n.mmax)),e}function m(t,e,n,r,i){return e.points=s(t,n.points,r,i),e}function T(t,e,n,r,a){return e.x=i(t,n.x),e.y=o(t,n.y),e!==n&&(r&&(e.z=n.z),a&&(e.m=n.m)),e}function E(t,e,n,r,i){var o=u(t,n.rings,r,i);return o?(e.rings=o,e):null}function b(t,e,n,r,i){var o=p(t,n.paths,r,i);return o?(e.paths=o,e):null}Object.defineProperty(e,"__esModule",{value:!0});var x=function(t,e,n){return[e,n]},A=function(t,e,n){return[e,n,t[2]]},N=function(t,e,n){return[e,n,t[2],t[3]]};e.toQuantizationTransform=function(t){return t?{originPosition:"upperLeft",scale:[t.tolerance,t.tolerance],translate:[t.extent.xmin,t.extent.ymax]}:null},e.equals=function(t,e){return t===e||null==t&&null==e||null!=t&&null!=e&&(r(t)?(n=t.translate[0],i=t.translate[1],o=t.scale[0]):(n=t.extent.xmin,i=t.extent.ymax,o=t.tolerance),r(e)?(a=e.translate[0],s=e.translate[1],u=e.scale[0]):(a=e.extent.xmin,s=e.extent.ymax,u=e.tolerance),n===a&&i===s&&o===u);var n,i,o,a,s,u},e.quantizeX=i,e.quantizeY=o,e.quantizeBounds=function(t,e,n){return e[0]=i(t,n[0]),e[3]=o(t,n[1]),e[2]=i(t,n[2]),e[1]=o(t,n[3]),e},e.quantizePoints=s,e.quantizeRings=u,e.quantizePaths=p,e.hydrateX=l,e.hydrateY=d,e.hydrateCoordsArray=c,e.hydrateCoordsArrayArray=h,e.hydrateBounds=function(t,e,n){return n?(e[0]=l(t,n[0]),e[1]=d(t,n[3]),e[2]=l(t,n[2]),e[3]=d(t,n[1]),e):[l(t,e[0]),d(t,e[3]),l(t,e[2]),d(t,e[1])]},e.hydratePoints=y,e.hydratePaths=f,e.hydrateRings=_,e.getQuantizedBoundsCoordsArray=v,e.getQuantizedBoundsCoordsArrayArray=g,e.getQuantizedBoundsPoints=function(t){var e=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return v(e,e,t)},e.getQuantizedBoundsPaths=function(t){return g([0,0,0,0],t)},e.getQuantizedBoundsRings=function(t){return g([0,0,0,0],t)},e.quantizeExtent=I,e.quantizeMultipoint=m,e.quantizePoint=T,e.quantizePolygon=E,e.quantizePolyline=b,e.quantizeGeometry=function(t,e){return t&&e?n.isPoint(e)?T(t,{},e,!1,!1):n.isPolyline(e)?b(t,{},e,!1,!1):n.isPolygon(e)?E(t,{},e,!1,!1):n.isMultipoint(e)?m(t,{},e,!1,!1):n.isExtent(e)?I(t,{},e,!1,!1):null:null},e.hydrateExtent=function(t,e,n,r,i){return e.xmin=l(t,n.xmin),e.ymin=d(t,n.ymin),e.xmax=l(t,n.xmax),e.ymax=d(t,n.ymax),e!==n&&(r&&(e.zmin=n.zmin,e.zmax=n.zmax),i&&(e.mmin=n.mmin,e.mmax=n.mmax)),e},e.hydrateMultipoint=function(t,e,n,r,i){return e.points=y(t,n.points,r,i),e},e.hydratePoint=function(t,e,n,r,i){return e.x=l(t,n.x),e.y=d(t,n.y),e!==n&&(r&&(e.z=n.z),i&&(e.m=n.m)),e},e.hydratePolygon=function(t,e,n,r,i){return e.rings=_(t,n.rings,r,i),e},e.hydratePolyline=function(t,e,n,r,i){return e.paths=f(t,n.paths,r,i),e}}.apply(null,r))||(t.exports=i)},892:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(1),n(0),n(10),n(49),n(116),n(175),n(9),n(91),n(4),n(2)],void 0===(i=function(t,e,n,r,i,o,a,s,u,p,l,d){return function(t){function e(e){var n=t.call(this)||this;return n.layer=null,n.parent=null,n}return n(e,t),e.prototype.initialize=function(){var t=this;this.addResolvingPromise(this.layer),this.when().catch((function(e){if("layerview:create-error"!==e.name){var n=t.layer&&t.layer.id||"no id",r=t.layer&&t.layer.title||"no title";return u.getLogger(t.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+n+"')",e),l.reject(e)}}))},e.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(e.prototype,"fullOpacity",{get:function(){var t=function(t){return null==t?1:t};return t(this.get("layer.opacity"))*t(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(t){void 0!==t?this._override("visible",t):this._clearOverride("visible")},enumerable:!0,configurable:!0}),e.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},e.prototype.isUpdating=function(){return!1},r([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],e.prototype,"fullOpacity",null),r([d.property()],e.prototype,"layer",void 0),r([d.property()],e.prototype,"parent",void 0),r([d.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],e.prototype,"suspended",null),r([d.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],e.prototype,"updating",null),r([d.property({dependsOn:["layer.visible"]})],e.prototype,"visible",null),r([d.subclass("esri.views.layers.LayerView")],e)}(d.declared(a.HandleOwnerMixin(s.IdentifiableMixin(p.EsriPromiseMixin(o.EventedMixin(i))))))}.apply(null,r))||(t.exports=i)},893:function(t,e,n){var r,i;r=[n.dj.c(t.i),e],void 0===(i=function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1};e.default=n}.apply(null,r))||(t.exports=i)},894:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(15),n(58)],void 0===(i=function(t,e,n,r){var i=n("esri-text-decoder")?new TextDecoder("utf-8"):null,o=n("safari")?6:n("ff")?12:32;return function(){function t(t,e,n,r){void 0===n&&(n=0),void 0===r&&(r=t?t.byteLength:0),this._tag=0,this._dataType=99,this.init(t,e,n,r)}return t.prototype.init=function(t,e,n,r){this._data=t,this._dataView=e,this._pos=n,this._end=r},t.prototype.clone=function(){return new t(this._data,this._dataView,this._pos,this._end)},t.prototype.pos=function(){return this._pos},t.prototype.next=function(t){for(;;){if(this._pos===this._end)return!1;var e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0},t.prototype.empty=function(){return this._pos>=this._end},t.prototype.tag=function(){return this._tag},t.prototype.getInt32=function(){return this._decodeVarint()},t.prototype.getInt64=function(){return this._decodeVarint()},t.prototype.getUInt32=function(){var t=4294967295;return t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?t:(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?t:(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?t:void 0))))},t.prototype.getUInt64=function(){return this._decodeVarint()},t.prototype.getSInt32=function(){var t=this.getUInt32();return t>>>1^-(1&t)|0},t.prototype.getSInt64=function(){return this._decodeSVarint()},t.prototype.getBool=function(){var t=0!==this._data[this._pos];return this._skip(1),t},t.prototype.getEnum=function(){return this._decodeVarint()},t.prototype.getFixed64=function(){var t=this._dataView,e=this._pos,n=t.getUint32(e,!0)+4294967296*t.getUint32(e+4,!0);return this._skip(8),n},t.prototype.getSFixed64=function(){var t=this._dataView,e=this._pos,n=t.getUint32(e,!0)+4294967296*t.getInt32(e+4,!0);return this._skip(8),n},t.prototype.getDouble=function(){var t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t},t.prototype.getFixed32=function(){var t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t},t.prototype.getSFixed32=function(){var t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t},t.prototype.getFloat=function(){var t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t},t.prototype.getString=function(){var t=this._getLength(),e=this._pos,n=this._toString(this._data,e,e+t);return this._skip(t),n},t.prototype.getBytes=function(){var t=this._getLength(),e=this._pos,n=this._toBytes(this._data,e,e+t);return this._skip(t),n},t.prototype.processMessageWithArgs=function(t,e,n,r){var i=this.getMessage(),o=t(i,e,n,r);return i.release(),o},t.prototype.processMessage=function(t){var e=this.getMessage(),n=t(e);return e.release(),n},t.prototype.getMessage=function(){var e=this._getLength(),n=t.pool.acquire();return n.init(this._data,this._dataView,this._pos,this._pos+e),this._skip(e),n},t.prototype.release=function(){t.pool.release(this)},t.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},t.prototype._skip=function(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t},t.prototype._decodeVarint=function(){var t,e=this._data,n=this._pos,r=0;if(this._end-n>=10)do{if(r|=127&(t=e[n++]),0==(128&t))break;if(r|=(127&(t=e[n++]))<<7,0==(128&t))break;if(r|=(127&(t=e[n++]))<<14,0==(128&t))break;if(r|=(127&(t=e[n++]))<<21,0==(128&t))break;if(r+=268435456*(127&(t=e[n++])),0==(128&t))break;if(r+=34359738368*(127&(t=e[n++])),0==(128&t))break;if(r+=4398046511104*(127&(t=e[n++])),0==(128&t))break;if(r+=562949953421312*(127&(t=e[n++])),0==(128&t))break;if(r+=72057594037927940*(127&(t=e[n++])),0==(128&t))break;if(r+=0x8000000000000000*(127&(t=e[n++])),0==(128&t))break;throw new Error("Varint too long!")}while(0);else{for(var i=1;n!==this._end&&0!=(128&(t=e[n]));)++n,r+=(127&t)*i,i*=128;if(n===this._end)throw new Error("Varint overrun!");++n,r+=t*i}return this._pos=n,r},t.prototype._decodeSVarint=function(){var t=this._decodeVarint();return t%2?-(t+1)/2:t/2},t.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},t.prototype._toString=function(t,e,n){if((n=Math.min(this._end,n))-e>o&&i){var r=t.subarray(e,n);return i.decode(r)}for(var a="",s="",u=e;u<n;++u){var p=t[u];128&p?s+="%"+p.toString(16):(a+=decodeURIComponent(s)+String.fromCharCode(p),s="")}return s.length&&(a+=decodeURIComponent(s)),a},t.prototype._toBytes=function(t,e,n){return n=Math.min(this._end,n),new Uint8Array(t.buffer,e,n-e)},t.pool=new r(t,!1,(function(t){t._data=null,t._dataView=null})),t}()}.apply(null,r))||(t.exports=i)},902:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(1),n(0),n(17),n(94),n(14),n(2),n(878),n(910),n(911),n(912)],void 0===(i=function(t,e,n,r,i,o,a,s,u,p,l,d){Object.defineProperty(e,"__esModule",{value:!0});var c=i.ofType({key:"type",base:u,typeMap:{rect:p,path:d,geometry:l}});e.LayerView2D=function(t){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.clips=new c,e.moving=!1,e.attached=!1,e.lastUpdateId=-1,e.updateRequested=!1,e}return n(e,t),e.prototype.initialize=function(){var t=this;this.when((function(){t.requestUpdate()}),(function(){}));var e=function(){return t.notifyChange("rendering")};this.handles.add([a.init(this,"suspended",(function(e){t.container&&(t.container.visible=!e),t.view&&!e&&t.updateRequested&&t.view.requestLayerViewUpdate(t)}),!0),a.init(this,"fullOpacity",(function(e){t.container&&(t.container.opacity=e)}),!0),a.on(this,"container","post-render",e),a.on(this,"container","will-render",e)])},e.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(e.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),e.prototype.isVisibleAtScale=function(t){var e=!0,n=this.layer,r=n.minScale,i=n.maxScale;if(null!=r&&null!=i){var o=!r,a=!i;!o&&t<=r&&(o=!0),!a&&t>=i&&(a=!0),e=o&&a}return e},e.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},e.prototype.processUpdate=function(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1},e.prototype.isUpdating=function(){return!1},e.prototype.isRendering=function(){return!1},e.prototype.canResume=function(){var t=this.inherited(arguments);return t&&(t=this.isVisibleAtScale(this.view.scale)),t},r([s.property({type:c,set:function(t){var e=o.referenceSetter(t,this._get("clips"),c);this._set("clips",e)}})],e.prototype,"clips",void 0),r([s.property()],e.prototype,"moving",void 0),r([s.property({dependsOn:["attached","suspended","moving"]})],e.prototype,"rendering",null),r([s.property()],e.prototype,"attached",void 0),r([s.property()],e.prototype,"container",void 0),r([s.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],e.prototype,"suspended",void 0),r([s.property({readOnly:!0})],e.prototype,"updateParameters",void 0),r([s.property()],e.prototype,"updateRequested",void 0),r([s.property({dependsOn:["updateRequested","attached","suspended"]})],e.prototype,"updating",null),r([s.property()],e.prototype,"view",void 0),r([s.subclass("esri.views.2d.layers.LayerView2D")],e)}(s.declared(t))}}.apply(null,r))||(t.exports=i)},910:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(0),n(1),n(2),n(878)],void 0===(i=function(t,e,n,r,i,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="rect",e.left=null,e.right=null,e.top=null,e.bottom=null,e}var o;return r(e,t),o=e,e.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),n([i.property({type:[Number,String],json:{write:!0}})],e.prototype,"left",void 0),n([i.property({type:[Number,String],json:{write:!0}})],e.prototype,"right",void 0),n([i.property({type:[Number,String],json:{write:!0}})],e.prototype,"top",void 0),n([i.property({type:[Number,String],json:{write:!0}})],e.prototype,"bottom",void 0),n([i.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],e.prototype,"version",null),o=n([i.subclass("esri.views.layers.support.ClipRect")],e)}(i.declared(o))}.apply(null,r))||(t.exports=i)},911:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(0),n(1),n(20),n(2),n(46),n(55),n(878)],void 0===(i=function(t,e,n,r,i,o,a,s,u){var p={base:a,key:"type",typeMap:{extent:i.Extent,polygon:i.Polygon}};return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="geometry",e.geometry=null,e}var i;return r(e,t),i=e,Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),e.prototype.clone=function(){return new i({geometry:this.geometry.clone()})},n([o.property({types:p,json:{read:s.fromJSON,write:!0}})],e.prototype,"geometry",void 0),n([o.property({readOnly:!0,dependsOn:["geometry"]})],e.prototype,"version",null),i=n([o.subclass("esri.views.layers.support.Geometry")],e)}(o.declared(u))}.apply(null,r))||(t.exports=i)},912:function(t,e,n){var r,i;r=[n.dj.c(t.i),e,n(0),n(1),n(2),n(878)],void 0===(i=function(t,e,n,r,i,o){return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.type="path",e.path=[],e}return r(e,t),Object.defineProperty(e.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),n([i.property({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),n([i.property({readOnly:!0,dependsOn:["path"]})],e.prototype,"version",null),n([i.subclass("esri.views.layers.support.Path")],e)}(i.declared(o))}.apply(null,r))||(t.exports=i)}}]);