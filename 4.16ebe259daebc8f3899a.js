(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/operations/PBFWorker":564,"esri/core/pbf":629,"esri/geometry/support/aaBoundingBox":634,"esri/tasks/operations/pbfQueryUtils":651,"esri/layers/graphics/dehydratedFeatures":710,"esri/layers/graphics/dehydratedFeatureComparison":711,"esri/tasks/operations/pbfFeatureServiceParser":748,"esri/tasks/operations/pbfDehydratedFeatureSet":749,"esri/tasks/operations/pbfOptimizedFeatureSet":750})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{564:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(18),r(58),r(4),r(287),r(121),r(26),r(119),r(651),r.dj.m(e)],void 0===(a=function(e,t,r,n,a,i,s,o,u,h,p){Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var t=h.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var r=t;if(t.spatialReference=r.spatialReference.toJSON(),r.fields)for(var n=0;n<r.fields.length;n++)r.fields[n]=r.fields[n].toJSON()}return a.resolve(t)},e}(),l=function(t){function c(){var r=t.call(this)||this;return r._thread=void 0,s.open(i.getAbsMid("./PBFWorker",e,p),{strategy:"dedicated"}).then((function(e){void 0===r._thread?r._thread=e:e.close()})),r}return r(c,t),c.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},c.prototype.parseFeatureQuery=function(e,t){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:t},{transferList:[e]}).then((function(e){if(t&&"dehydrated"===t.type){var r=e;if(r.spatialReference=o.fromJSON(r.spatialReference),r.fields)for(var a=0;a<r.fields.length;a++)r.fields[a]=u.fromJSON(r.fields[a]);for(var i=r.spatialReference,s=0,h=r.features;s<h.length;s++){var p=h[s];p.uid=n.generateUID(),p.geometry&&(p.geometry.spatialReference=i)}}return e})):a.resolve(h.parsePBFFeatureQuery(e,t)):a.resolve(null)},c}(c);t.PBFWorker=l,t.default=function(){return new c}}.apply(null,n))||(e.exports=a)},629:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(15),r(60)],void 0===(a=function(e,t,r,n){var a=r("esri-text-decoder")?new TextDecoder("utf-8"):null,i=r("safari")?6:r("ff")?12:32;return function(){function e(e,t,r,n){void 0===r&&(r=0),void 0===n&&(n=e?e.byteLength:0),this._tag=0,this._dataType=99,this.init(e,t,r,n)}return e.prototype.init=function(e,t,r,n){this._data=e,this._dataView=t,this._pos=r,this._end=n},e.prototype.clone=function(){return new e(this._data,this._dataView,this._pos,this._end)},e.prototype.pos=function(){return this._pos},e.prototype.next=function(e){for(;;){if(this._pos===this._end)return!1;var t=this._decodeVarint();if(this._tag=t>>3,this._dataType=7&t,!e||e===this._tag)break;this.skip()}return!0},e.prototype.empty=function(){return this._pos>=this._end},e.prototype.tag=function(){return this._tag},e.prototype.getInt32=function(){return this._decodeVarint()},e.prototype.getInt64=function(){return this._decodeVarint()},e.prototype.getUInt32=function(){var e=4294967295;return e=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128?e:(e=(e|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128?e:(e=(e|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128?e:void 0))))},e.prototype.getUInt64=function(){return this._decodeVarint()},e.prototype.getSInt32=function(){var e=this.getUInt32();return e>>>1^-(1&e)|0},e.prototype.getSInt64=function(){return this._decodeSVarint()},e.prototype.getBool=function(){var e=0!==this._data[this._pos];return this._skip(1),e},e.prototype.getEnum=function(){return this._decodeVarint()},e.prototype.getFixed64=function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getUint32(t+4,!0);return this._skip(8),r},e.prototype.getSFixed64=function(){var e=this._dataView,t=this._pos,r=e.getUint32(t,!0)+4294967296*e.getInt32(t+4,!0);return this._skip(8),r},e.prototype.getDouble=function(){var e=this._dataView.getFloat64(this._pos,!0);return this._skip(8),e},e.prototype.getFixed32=function(){var e=this._dataView.getUint32(this._pos,!0);return this._skip(4),e},e.prototype.getSFixed32=function(){var e=this._dataView.getInt32(this._pos,!0);return this._skip(4),e},e.prototype.getFloat=function(){var e=this._dataView.getFloat32(this._pos,!0);return this._skip(4),e},e.prototype.getString=function(){var e=this._getLength(),t=this._pos,r=this._toString(this._data,t,t+e);return this._skip(e),r},e.prototype.getBytes=function(){var e=this._getLength(),t=this._pos,r=this._toBytes(this._data,t,t+e);return this._skip(e),r},e.prototype.processMessageWithArgs=function(e,t,r,n){var a=this.getMessage(),i=e(a,t,r,n);return a.release(),i},e.prototype.processMessage=function(e){var t=this.getMessage(),r=e(t);return t.release(),r},e.prototype.getMessage=function(){var t=this._getLength(),r=e.pool.acquire();return r.init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),r},e.prototype.release=function(){e.pool.release(this)},e.prototype.skip=function(){switch(this._dataType){case 0:this._decodeVarint();break;case 1:this._skip(8);break;case 2:this._skip(this._getLength());break;case 5:this._skip(4);break;default:throw new Error("Invalid data type!")}},e.prototype._skip=function(e){if(this._pos+e>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=e},e.prototype._decodeVarint=function(){var e,t=this._data,r=this._pos,n=0;if(this._end-r>=10)do{if(n|=127&(e=t[r++]),0==(128&e))break;if(n|=(127&(e=t[r++]))<<7,0==(128&e))break;if(n|=(127&(e=t[r++]))<<14,0==(128&e))break;if(n|=(127&(e=t[r++]))<<21,0==(128&e))break;if(n+=268435456*(127&(e=t[r++])),0==(128&e))break;if(n+=34359738368*(127&(e=t[r++])),0==(128&e))break;if(n+=4398046511104*(127&(e=t[r++])),0==(128&e))break;if(n+=562949953421312*(127&(e=t[r++])),0==(128&e))break;if(n+=72057594037927940*(127&(e=t[r++])),0==(128&e))break;if(n+=0x8000000000000000*(127&(e=t[r++])),0==(128&e))break;throw new Error("Varint too long!")}while(0);else{for(var a=1;r!==this._end&&0!=(128&(e=t[r]));)++r,n+=(127&e)*a,a*=128;if(r===this._end)throw new Error("Varint overrun!");++r,n+=e*a}return this._pos=r,n},e.prototype._decodeSVarint=function(){var e=this._decodeVarint();return e%2?-(e+1)/2:e/2},e.prototype._getLength=function(){if(2!==this._dataType)throw new Error("Not a delimited data type!");return this._decodeVarint()},e.prototype._toString=function(e,t,r){if((r=Math.min(this._end,r))-t>i&&a){var n=e.subarray(t,r);return a.decode(n)}for(var s="",o="",u=t;u<r;++u){var h=e[u];128&h?o+="%"+h.toString(16):(s+=decodeURIComponent(o)+String.fromCharCode(h),o="")}return o.length&&(s+=decodeURIComponent(o)),s},e.prototype._toBytes=function(e,t,r){return r=Math.min(this._end,r),new Uint8Array(e.buffer,t,r-t)},e.pool=new n(e,!1,(function(e){e._data=null,e._dataView=null})),e}()}.apply(null,n))||(e.exports=a)},634:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(30),r(170)],void 0===(a=function(e,t,r,n){function a(e){return e}function i(e){return void 0===e&&(e=t.ZERO),a([e[0],e[1],e[2],e[3],e[4],e[5]])}function s(e,t,r,n,a,s,o){return void 0===o&&(o=i()),o[0]=e,o[1]=t,o[2]=r,o[3]=n,o[4]=a,o[5]=s,o}function o(e){return e[0]>=e[3]?0:e[3]-e[0]}function u(e){return e[1]>=e[4]?0:e[4]-e[1]}function h(e){return e[2]>=e[5]?0:e[5]-e[2]}function p(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function c(e){return 6===e.length}Object.defineProperty(t,"__esModule",{value:!0}),t.create=i,t.fromValues=s,t.fromExtent=function(e,t){return void 0===t&&(t=i()),t[0]=e.xmin,t[1]=e.ymin,t[2]=e.zmin,t[3]=e.xmax,t[4]=e.ymax,t[5]=e.zmax,t},t.toExtent=function(e,t){var n=isFinite(e[2])||isFinite(e[5]);return new r(n?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})},t.fromMinMax=function(e,t,r){return void 0===r&&(r=i()),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r},t.expandPointInPlace=function(e,t){t[0]<e[0]&&(e[0]=t[0]),t[0]>e[3]&&(e[3]=t[0]),t[1]<e[1]&&(e[1]=t[1]),t[1]>e[4]&&(e[4]=t[1]),t[2]<e[2]&&(e[2]=t[2]),t[2]>e[5]&&(e[5]=t[2])},t.expand=function(e,t,r){return void 0===r&&(r=e),c(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[3]),r[4]=Math.max(e[4],t[4]),r[5]=Math.max(e[5],t[5])):n.is(t)?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[2]),r[4]=Math.max(e[4],t[3])):2===t.length?(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1])):3===t.length&&(r[0]=Math.min(e[0],t[0]),r[1]=Math.min(e[1],t[1]),r[2]=Math.min(e[2],t[2]),r[3]=Math.max(e[3],t[0]),r[4]=Math.max(e[4],t[1]),r[5]=Math.max(e[5],t[2])),r},t.expandWithBuffer=function(e,t,r,n,a){void 0===a&&(a=e);for(var i=e[0],s=e[1],o=e[2],u=e[3],h=e[4],p=e[5],c=0;c<n;c++)i=Math.min(i,t[r+3*c]),s=Math.min(s,t[r+3*c+1]),o=Math.min(o,t[r+3*c+2]),u=Math.max(u,t[r+3*c]),h=Math.max(h,t[r+3*c+1]),p=Math.max(p,t[r+3*c+2]);return a[0]=i,a[1]=s,a[2]=o,a[3]=u,a[4]=h,a[5]=p,a},t.expandWithNestedArray=function(e,t,r,n){void 0===n&&(n=e);var a=t.length,i=e[0],s=e[1],o=e[2],u=e[3],h=e[4],p=e[5];if(r)for(var c=0;c<a;c++){var l=t[c];i=Math.min(i,l[0]),s=Math.min(s,l[1]),o=Math.min(o,l[2]),u=Math.max(u,l[0]),h=Math.max(h,l[1]),p=Math.max(p,l[2])}else for(c=0;c<a;c++){l=t[c];i=Math.min(i,l[0]),s=Math.min(s,l[1]),u=Math.max(u,l[0]),h=Math.max(h,l[1])}return n[0]=i,n[1]=s,n[2]=o,n[3]=u,n[4]=h,n[5]=p,n},t.allFinite=function(e){for(var t=0;t<6;t++)if(!isFinite(e[t]))return!1;return!0},t.width=o,t.depth=u,t.height=h,t.diameter=function(e){var t=o(e),r=h(e),n=u(e);return Math.sqrt(t*t+r*r+n*n)},t.center=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=e[0]+o(e)/2,t[1]=e[1]+u(e)/2,t[2]=e[2]+h(e)/2,t},t.size=function(e,t){return void 0===t&&(t=[0,0,0]),t[0]=o(e),t[1]=u(e),t[2]=h(e),t},t.maximumDimension=function(e){return Math.max(o(e),h(e),u(e))},t.containsPoint=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[0]<=e[3]&&t[1]<=e[4]&&t[2]<=e[5]},t.containsPointWithMargin=function(e,t,r){return t[0]>=e[0]-r&&t[1]>=e[1]-r&&t[2]>=e[2]-r&&t[0]<=e[3]+r&&t[1]<=e[4]+r&&t[2]<=e[5]+r},t.contains=function(e,t){return t[0]>=e[0]&&t[1]>=e[1]&&t[2]>=e[2]&&t[3]<=e[3]&&t[4]<=e[4]&&t[5]<=e[5]},t.intersects=function(e,t){return Math.max(t[0],e[0])<=Math.min(t[3],e[3])&&Math.max(t[1],e[1])<=Math.min(t[4],e[4])&&Math.max(t[2],e[2])<=Math.min(t[5],e[5])},t.offset=function(e,t,r,n,a){return void 0===a&&(a=e),a[0]=e[0]+t,a[1]=e[1]+r,a[2]=e[2]+n,a[3]=e[3]+t,a[4]=e[4]+r,a[5]=e[5]+n,a},t.setMin=function(e,t,r){return void 0===r&&(r=e),r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r},t.setMax=function(e,t,r){return void 0===r&&(r=e),r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e},t.set=p,t.empty=function(e){return e?p(e,t.NEGATIVE_INFINITY):i(t.NEGATIVE_INFINITY)},t.toRect=function(e,t){return t||(t=n.create()),t[0]=e[0],t[1]=e[1],t[2]=e[3],t[3]=e[4],t},t.fromRect=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e},t.is=c,t.isPoint=function(e){return 0===o(e)&&0===u(e)&&0===h(e)},t.equals=function(e,t,r){if(null==e||null==t)return e===t;if(!c(e)||!c(t))return!1;if(r){for(var n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},t.wrap=function(e,t,r,n,a,i){return s(e,t,r,n,a,i,l)},t.POSITIVE_INFINITY=a([-1/0,-1/0,-1/0,1/0,1/0,1/0]),t.NEGATIVE_INFINITY=a([1/0,1/0,1/0,-1/0,-1/0,-1/0]),t.ZERO=a([0,0,0,0,0,0]);var l=i()}.apply(null,n))||(e.exports=a)},651:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(748)],void 0===(a=function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.parsePBFFeatureQuery=function(e,t){var n=r.parseFeatureQuery(e,t).queryResult.featureResult;if(n&&n.features&&n.features.length&&n.objectIdFieldName)for(var a=n.objectIdFieldName,i=0,s=n.features;i<s.length;i++){var o=s[i];o.attributes&&(o.objectId=o.attributes[a])}return n}}.apply(null,n))||(e.exports=a)},710:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(20),r(58),r(35),r(15),r(5),r(16),r(289),r(26),r(634),r(170),r(56),r(620),r(119),r(711)],void 0===(a=function(e,t,r,n,a,i,s,o,u,h,p,c,l,f,d,y){function g(e,t,r,a){return{uid:n.generateUID(),objectId:a&&e.attributes?e.attributes[a]:null,attributes:e.attributes,geometry:m(e.geometry,t,r),visible:!0}}function m(e,t,r){if(!e)return null;switch(t){case"point":var n=e;return{x:n.x,y:n.y,z:n.z,m:n.m,hasZ:null!=n.z,hasM:null!=n.m,type:"point",spatialReference:r};case"polyline":var a=e;return{paths:a.paths,hasZ:!!a.hasZ,hasM:!!a.hasM,type:"polyline",spatialReference:r};case"polygon":var i=e;return{rings:i.rings,hasZ:!!i.hasZ,hasM:!!i.hasM,type:"polygon",spatialReference:r};case"multipoint":var s=e;return{points:s.points,hasZ:!!s.hasZ,hasM:!!s.hasM,type:"multipoint",spatialReference:r}}}function v(e,t,r,n){return{x:e,y:t,z:r,hasZ:null!=r,hasM:!1,spatialReference:n,type:"point"}}function b(e){return"declaredClass"in e}function x(e){return"declaredClass"in e}function _(e){return"declaredClass"in e}function M(e){return o.isNone(e)?null:b(e)?e:l.fromJSON(function(e){var t=e.spatialReference.toJSON();switch(e.type){case"point":return{x:e.x,y:e.y,z:e.z,m:e.m,spatialReference:t};case"polygon":var r=e.rings,n=e.hasZ,i=e.hasM;return{rings:w(r),hasZ:n,hasM:i,spatialReference:t};case"polyline":var s=e.paths;n=e.hasZ,i=e.hasM;return{paths:w(s),hasZ:n,hasM:i,spatialReference:t};case"extent":var o=e.xmin,u=e.xmax,h=e.ymin,p=e.ymax,c=e.zmin,l=e.zmax,f=e.mmin,d=e.mmax;n=e.hasZ,i=e.hasM;return{xmin:o,xmax:u,ymin:h,ymax:p,zmin:c,zmax:l,mmin:f,mmax:d,hasZ:n,hasM:i,spatialReference:t};case"multipoint":var y=e.points;n=e.hasZ,i=e.hasM;return{points:T(y)?I(y):y,hasZ:n,hasM:i,spatialReference:t};default:return void a.neverReached(e)}}(e))}function k(e){if(!e)return 0;var t=32;for(var r in e)if(e.hasOwnProperty(r)){var n=e[r];switch(typeof n){case"string":t+=A(n);break;default:case"number":t+=16}}return t}function F(e){if(o.isNone(e))return 0;var t=32;switch(e.type){case"point":t+=42;break;case"polyline":case"polygon":for(var r=0,n=2+(e.hasZ?1:0)+(e.hasM?1:0),i="polyline"===e.type?e.paths:e.rings,s=0,h=i;s<h.length;s++)r+=h[s].length;t+=8*r*n+64,t+=128*r,t+=34,t+=32*(i.length+1);break;case"multipoint":var p=2+(e.hasZ?1:0)+(e.hasM?1:0),c=e.points.length;t+=8*c*p+64,t+=128*c,t+=34,t+=32;break;case"extent":t+=98,e.hasM&&(t+=32),e.hasZ&&(t+=32);break;case"mesh":t+=u.estimateSize(e.vertexAttributes.position),t+=u.estimateSize(e.vertexAttributes.normal),t+=u.estimateSize(e.vertexAttributes.uv),t+=u.estimateSize(e.vertexAttributes.tangent);break;default:a.neverReached(e)}return t}function w(e){return function(e){for(var t=0,r=e;t<r.length;t++){var n=r[t];if(0!==n.length)return T(n)}return!1}(e)?e.map((function(e){return I(e)})):e}function I(e){return e.map((function(e){return u.toArray(e)}))}function T(e){return e.length&&(u.isFloat32Array(e[0])||u.isFloat64Array(e[0]))}function R(e,t){switch(p.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[3]=e.x,t[1]=t[4]=e.y,e.hasZ&&(t[2]=t[5]=e.z);break;case"polyline":for(var r=0;r<e.paths.length;r++)p.expandWithNestedArray(t,e.paths[r],e.hasZ);break;case"polygon":for(r=0;r<e.rings.length;r++)p.expandWithNestedArray(t,e.rings[r],e.hasZ);break;case"multipoint":p.expandWithNestedArray(t,e.points,e.hasZ);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[3]=e.xmax,t[4]=e.ymax,null!=e.zmin&&(t[2]=e.zmin),null!=e.zmax&&(t[5]=e.zmax);break;default:a.neverReached(e)}}function P(e,t){switch(c.empty(t),"mesh"===e.type&&(e=e.extent),e.type){case"point":t[0]=t[2]=e.x,t[1]=t[3]=e.y;break;case"polyline":for(var r=0;r<e.paths.length;r++)c.expandWithNestedArray(t,e.paths[r]);break;case"polygon":for(r=0;r<e.rings.length;r++)c.expandWithNestedArray(t,e.rings[r]);break;case"multipoint":c.expandWithNestedArray(t,e.points);break;case"extent":t[0]=e.xmin,t[1]=e.ymin,t[2]=e.xmax,t[3]=e.ymax;break;default:a.neverReached(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=y.equals;var S=function(e,t,r){this.uid=e,this.geometry=t,this.attributes=r,this.visible=!0,this.objectId=null,this.centroid=null};t.DehydratedFeatureClass=S,t.hasGeometry=function(e){return o.isSome(e.geometry)},t.isFeatureGeometry=function(e){return r.isFeatureGeometryType(e.type)};var N=function(){this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null};t.DehydratedFeatureSetClass=N,t.isPoint=function(e){return"point"===e.type},t.fromFeatureSetJSON=function(e){var t=r.featureGeometryTypeKebabDictionary.fromJSON(e.geometryType),n=h.fromJSON(e.spatialReference),i=e.transform,s=e.features.map((function(r){var s=g(r,t,n,e.objectIdFieldName),o=s.geometry;if(o&&i)switch(o.type){case"point":s.geometry=f.hydratePoint(i,o,o,o.hasZ,o.hasM);break;case"multipoint":s.geometry=f.hydrateMultipoint(i,o,o,o.hasZ,o.hasM);break;case"polygon":s.geometry=f.hydratePolygon(i,o,o,o.hasZ,o.hasM);break;case"polyline":s.geometry=f.hydratePolyline(i,o,o,o.hasZ,o.hasM);break;default:a.neverReached(o)}return s}));return{geometryType:t,features:s,spatialReference:n,fields:e.fields?e.fields.map((function(e){return d.fromJSON(e)})):null,objectIdFieldName:e.objectIdFieldName,globalIdFieldName:e.globalIdFieldName,geohashFieldName:e.geohashFieldName,geometryProperties:e.geometryProperties,hasZ:e.hasZ,hasM:e.hasM,exceededTransferLimit:e.exceededTransferLimit,transform:null}},t.fromJSONGeometry=m,t.makeDehydratedPoint=v,t.isHydratedGeometry=b,t.isHydratedPoint=x,t.isHydratedGraphic=_,t.hydrateGraphic=function(e,t){if(!e||_(e))return e;var r=new n({layer:t,sourceLayer:t});return r.visible=e.visible,r.symbol=s.clone(e.symbol),r.attributes=s.clone(e.attributes),r.geometry=M(e.geometry),r},t.hydrateGeometry=M,t.clonePoint=function(e,t){if(!e)return null;var r;if(x(e)){if(null==t)return e.clone();if(x(t))return t.copy(e)}return null!=t?((r=t).x=e.x,r.y=e.y,r.spatialReference=e.spatialReference,e.hasZ?(r.z=e.z,r.hasZ=e.hasZ):(r.z=null,r.hasZ=!1),e.hasM?(r.m=e.m,r.hasM=!0):(r.m=null,r.hasM=!1)):(r=v(e.x,e.y,e.z,e.spatialReference),e.hasM&&(r.m=e.m,r.hasM=!0)),r};var A=i("esri-text-decoder")?function(e){return 32+e.length}:function(e){return 32*e.length};t.estimateAttributesObjectSize=k,t.estimateGeometryObjectSize=F,t.estimateSize=function(e){var t=32;return t+=k(e.attributes),(t+=3)+(8+F(e.geometry))},t.numVertices=function(e){if(o.isNone(e))return 0;switch(e.type){case"point":return 1;case"polyline":for(var t=0,r=0,n=e.paths;r<n.length;r++)t+=n[r].length;return t;case"polygon":t=0;for(var i=0,s=e.rings;i<s.length;i++)t+=s[i].length;return t;case"multipoint":return e.points.length;case"extent":return 2;case"mesh":var u=e.vertexAttributes&&e.vertexAttributes.position;return u?u.length/3:0;default:return void a.neverReached(e)}},t.hasVertices=function(e){if(!e)return!1;switch(e.type){case"extent":case"point":return!0;case"polyline":for(var t=0,r=e.paths;t<r.length;t++)if(r[t].length>0)return!0;return!1;case"polygon":for(var n=0,i=e.rings;n<i.length;n++)if(i[n].length>0)return!0;return!1;case"multipoint":return e.points.length>0;case"mesh":return e.vertexAttributes&&e.vertexAttributes.position&&e.vertexAttributes.position.length>0;default:return void a.neverReached(e)}},t.computeAABB=R,t.expandAABB=function(e,t){R(e,Z),p.expand(t,Z)},t.computeAABR=P,t.expandAABR=function(e,t){P(e,C),c.expand(t,C)},t.getObjectId=function(e,t){return null!=e.objectId?e.objectId:e.attributes&&t?e.attributes[t]:null};var Z=p.create(),C=c.create()}.apply(null,n))||(e.exports=a)},711:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(35),r(16)],void 0===(a=function(e,t,r,n){function a(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++){var n=e[r],a=t[r];if(n.length!==a.length)return!1;for(var i=0;i<n.length;i++)if(n[i]!==a[i])return!1}return!0}function i(e,t){if(e===t)return!0;if(null==e||null==t)return!1;if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!a(e[r],t[r]))return!1;return!0}function s(e,t){return e===t||e&&t&&e.equals(t)}function o(e,t){if(e===t)return!0;if(n.isNone(e)||n.isNone(t))return!1;if(e.type!==t.type)return!1;switch(e.type){case"point":return function(e,t){return!!s(e.spatialReference,t.spatialReference)&&e.x===t.x&&e.y===t.y&&e.z===t.z&&e.m===t.m}(e,t);case"extent":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&e.xmin===t.xmin&&e.ymin===t.ymin&&e.zmin===t.zmin&&e.xmax===t.xmax&&e.ymax===t.ymax&&e.zmax===t.zmax}(e,t);case"polyline":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&i(e.paths,t.paths)}(e,t);case"polygon":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&i(e.rings,t.rings)}(e,t);case"multipoint":return function(e,t){return e.hasZ===t.hasZ&&e.hasM===t.hasM&&!!s(e.spatialReference,t.spatialReference)&&a(e.points,t.points)}(e,t);case"mesh":return!1;default:return void r.neverReached(e)}}Object.defineProperty(t,"__esModule",{value:!0}),t.equals=function(e,t){return e===t||null!=e&&null!=t&&e.objectId===t.objectId&&!!o(e.geometry,t.geometry)&&!!function(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0,i=r;a<i.length;a++){var s=i[a];if(e[s]!==t[s])return!1}return!0}(e.attributes,t.attributes)}}.apply(null,n))||(e.exports=a)},748:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(11),r(9),r(629),r(749),r(750)],void 0===(a=function(e,t,r,n,a,i,s){function o(e){return e>=w.length?null:w[e]}function u(e){return e>=I.length?null:I[e]}function h(e){return e>=T.length?null:T[e]}function p(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function c(e,t,r){for(var n=t.createPointGeometry(r);e.next();)switch(e.tag()){case 3:for(var a=e.getUInt32(),i=e.pos()+a,s=0;e.pos()<i;)t.addCoordinatePoint(n,e.getSInt64(),0,s++);break;case 1:case 2:default:e.skip()}return n}function l(e,t,r){for(var n=t.createGeometry(r),a=2+(r.hasZ?1:0)+(r.hasM?1:0);e.next();)switch(e.tag()){case 2:for(var i=e.getUInt32(),s=e.pos()+i,o=0;e.pos()<s;)t.addLength(n,e.getUInt32(),o++);break;case 3:for(var u=e.getUInt32(),h=(s=e.pos()+u,0),p=0;e.pos()<s;)t.addCoordinate(n,e.getSInt64(),p,h),++h===a&&(p++,h=0);break;case 1:default:e.skip()}return n}function f(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function d(e){for(var t={type:o(0)};e.next();)switch(e.tag()){case 1:t.name=e.getString();break;case 2:t.type=o(e.getEnum());break;case 3:t.alias=e.getString();break;case 4:t.sqlType=u(e.getEnum());break;case 5:case 6:default:e.skip()}return t}function y(e,t,r,n){for(var a=t.createFeature(r),i=0;e.next();)switch(e.tag()){case 1:var s=n[i++].name;a.attributes[s]=e.processMessage(f);break;case 2:a.geometry=e.processMessageWithArgs(l,t,r);break;case 4:a.centroid=e.processMessageWithArgs(c,t,r);break;default:e.skip()}return a}function g(e){for(var t=[0,0,0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function m(e){for(var t=[0,0,0,0];e.next();)switch(e.tag()){case 1:t[0]=e.getDouble();break;case 2:t[1]=e.getDouble();break;case 4:t[2]=e.getDouble();break;case 3:t[3]=e.getDouble();break;default:e.skip()}return t}function v(e){for(var t={originPosition:h(0)};e.next();)switch(e.tag()){case 1:t.originPosition=h(e.getEnum());break;case 2:t.scale=e.processMessage(g);break;case 3:t.translate=e.processMessage(m);break;default:e.skip()}return t}function b(e){for(var t={};e.next();)switch(e.tag()){case 1:t.shapeAreaFieldName=e.getString();break;case 2:t.shapeLengthFieldName=e.getString();break;case 3:t.units=e.getString();break;default:e.skip()}return t}function x(e,t){for(var r=t.createSpatialReference();e.next();)switch(e.tag()){case 1:r.wkid=e.getUInt32();break;case 5:r.wkt=e.getString();break;case 2:case 3:case 4:default:e.skip()}return r}function _(e,t){var r=t.createFeatureResult();r.geometryType=p(t,0);for(var n=!1;e.next();)switch(e.tag()){case 1:r.objectIdFieldName=e.getString();break;case 3:r.globalIdFieldName=e.getString();break;case 4:r.geohashFieldName=e.getString();break;case 5:r.geometryProperties=e.processMessage(b);break;case 7:r.geometryType=p(t,e.getEnum());break;case 8:r.spatialReference=e.processMessageWithArgs(x,t);break;case 10:r.hasZ=e.getBool();break;case 11:r.hasM=e.getBool();break;case 12:r.transform=e.processMessage(v);break;case 9:var a=e.getBool();r.exceededTransferLimit=a;break;case 13:t.addField(r,e.processMessage(d));break;case 15:n||(t.prepareFeatures(r),n=!0),t.addFeature(r,e.processMessageWithArgs(y,t,r,r.fields));break;case 2:case 6:default:e.skip()}return t.finishFeatureResult(r),r}function M(e,t){for(var r={};e.next();)switch(e.tag()){case 1:r.featureResult=e.processMessageWithArgs(_,t);break;default:e.skip()}return r}function k(e){return e&&"dehydrated"===e.type?new i.Context(e):new s.Context(e)}Object.defineProperty(t,"__esModule",{value:!0});var F=n.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),w=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],I=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],T=["upperLeft","lowerLeft"];t.parseFeatureQuery=function(e,t){var n=k(t);try{for(var i=new a(new Uint8Array(e),new DataView(e)),s={};i.next();)switch(i.tag()){case 2:s.queryResult=i.processMessageWithArgs(M,n);break;default:i.skip()}return s}catch(e){var o=new r("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return F.error(o),{queryResult:{featureResult:n.createFeatureResult()}}}}}.apply(null,n))||(e.exports=a)},749:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(58),r(35),r(26),r(710),r(119)],void 0===(a=function(e,t,r,n,a,i,s){function o(e,t,r,n){return t}function u(e,t,r,n){switch(r){case 0:return l(e,t+n,0);case 1:return f(e,t+n,1)}}function h(e,t,r,n){switch(r){case 0:return l(e,t+n,0);case 1:return f(e,t+n,1);case 2:return l(e,t,2)}}function p(e,t,r,n){switch(r){case 0:return l(e,t+n,0);case 1:return f(e,t+n,1);case 2:return l(e,t,3)}}function c(e,t,r,n){switch(r){case 0:return l(e,t+n,0);case 1:return f(e,t+n,1);case 2:case 3:return l(e,t,3)}}function l(e,t,r){var n=e.translate,a=e.scale;return n[r]+t*a[r]}function f(e,t,r){var n=e.translate,a=e.scale;return n[r]-t*a[r]}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e){this.options=e,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=o,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}return e.prototype.createFeatureResult=function(){return new i.DehydratedFeatureSetClass},e.prototype.finishFeatureResult=function(e){this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0},e.prototype.createSpatialReference=function(){return new a},e.prototype.addField=function(e,t){e.fields.push(s.fromJSON(t));var r=e.fields.map((function(e){return e.name}));this.AttributesConstructor=function(){for(var e=0,t=r;e<t.length;e++)this[t[e]]=null}},e.prototype.addFeature=function(e,t){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(var n in t.attributes){var a=t.attributes[n];"string"==typeof a&&a.length>r&&(t.attributes[n]="")}e.features.push(t)},e.prototype.prepareFeatures=function(e){switch(this.options.applyTransform&&e.transform&&(this.transform=e.transform,this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=this.addCoordinatePoint.bind(this),this.createGeometry=this.createPointGeometry.bind(this);break;case"polygon":this.addCoordinate=this.addCoordinatePolygon.bind(this),this.createGeometry=this.createPolygonGeometry.bind(this);break;case"polyline":this.addCoordinate=this.addCoordinatePolyline.bind(this),this.createGeometry=this.createPolylineGeometry.bind(this);break;case"multipoint":this.addCoordinate=this.addCoordinateMultipoint.bind(this),this.createGeometry=this.createMultipointGeometry.bind(this);break;default:n.neverReached(e.geometryType)}},e.prototype.createFeature=function(e){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new i.DehydratedFeatureClass(r.generateUID(),null,new this.AttributesConstructor)},e.prototype.addLength=function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)},e.prototype.createPointGeometry=function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t},e.prototype.addCoordinatePoint=function(e,t,r,n){switch(t=this.applyTransform(this.transform,t,n,0),n){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}},e.prototype.transformPathLikeValue=function(e,t){var r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)},e.prototype.addCoordinatePolyline=function(e,t,r,n){this.dehydratedAddPointsCoordinate(e.paths,t,r,n)},e.prototype.addCoordinatePolygon=function(e,t,r,n){this.dehydratedAddPointsCoordinate(e.rings,t,r,n)},e.prototype.addCoordinateMultipoint=function(e,t,r){0===r&&e.points.push([]);var n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)},e.prototype.createPolygonGeometry=function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.createPolylineGeometry=function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.createMultipointGeometry=function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}},e.prototype.dehydratedAddPointsCoordinate=function(e,t,r,n){if(null===this.coordinateBuffer){var a=this.lengths.reduce((function(e,t){return e+t}),0);this.coordinateBuffer=new Float64Array(a*this.vertexDimension)}0===n&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var i=this.transformPathLikeValue(t,n),s=e[e.length-1];0===n&&s.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=i},e.prototype.deriveApplyTransform=function(e){var t=e.hasZ,r=e.hasM;return t&&r?c:t?h:r?p:u},e}();t.Context=d}.apply(null,n))||(e.exports=a)},750:function(e,t,r){var n,a;n=[r.dj.c(e.i),t,r(619),r(628),r(612)],void 0===(a=function(e,t,r,n,a){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e){this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]}return e.prototype.createFeatureResult=function(){return new n.default},e.prototype.prepareFeatures=function(){},e.prototype.finishFeatureResult=function(){},e.prototype.addFeature=function(e,t){e.features.push(t)},e.prototype.createFeature=function(){return new r.default},e.prototype.createSpatialReference=function(){return{wkid:0}},e.prototype.createGeometry=function(){return new a.default},e.prototype.addField=function(e,t){e.fields.push(t)},e.prototype.addCoordinate=function(e,t){e.coords.push(t)},e.prototype.addCoordinatePoint=function(e,t){e.coords.push(t)},e.prototype.addLength=function(e,t){e.lengths.push(t)},e.prototype.createPointGeometry=function(){return new a.default},e}();t.Context=i}.apply(null,n))||(e.exports=a)}}]);