// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/has","../../../core/maybe","../../../core/libs/rbush/PooledRBush"],function(e,t,r,n,o,a,i){function s(e,t,r,n){return{minX:Math.min(e[t+0],e[r+0],e[n+0]),maxX:Math.max(e[t+0],e[r+0],e[n+0]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t+0],e[t+1],e[t+2]],p1:[e[r+0],e[r+1],e[r+2]],p2:[e[n+0],e[n+1],e[n+2]]}}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(){}return e.prototype.createIndex=function(e,t){return n(this,void 0,void 0,function(){var n,o,s,u;return r(this,function(r){switch(r.label){case 0:return n=new Array,e.vertexAttributes&&e.vertexAttributes.position?(o=this.createMeshData(e),a.isSome(t)?[4,t.invoke("createIndexThread",o,{transferList:n})]:[3,2]):[2,new i.default];case 1:return u=r.sent(),[3,3];case 2:u=this.createIndexThread(o).result,r.label=3;case 3:return s=u,[2,this.createPooledRBush().fromJSON(s)]}})})},e.prototype.createIndexThread=function(e){var t=new Float64Array(e.position),r=this.createPooledRBush();return e.components?this.createIndexComponentsThread(r,t,e.components.map(function(e){return new Uint32Array(e)})):this.createIndexAllThread(r,t)},e.prototype.createIndexAllThread=function(e,t){for(var r=new Array(t.length/9),n=0,o=0;o<t.length;o+=9)r[n++]=s(t,o+0,o+3,o+6);return e.load(r),{result:e.toJSON()}},e.prototype.createIndexComponentsThread=function(e,t,r){for(var n=0,o=0,a=r;o<a.length;o++){var i=a[o];n+=i.length/3}for(var u=new Array(n),c=0,p=0,h=r;p<h.length;p++)for(var i=h[p],l=0;l<i.length;l+=3)u[c++]=s(t,3*i[l+0],3*i[l+1],3*i[l+2]);return e.load(u),{result:e.toJSON()}},e.prototype.createMeshData=function(e){var t=e.vertexAttributes.position.buffer;return!e.components||e.components.some(function(e){return!e.faces})?{position:t}:{position:t,components:e.components.map(function(e){return e.faces})}},e.prototype.createPooledRBush=function(){return new i.default(9,o("csp-restrictions")?function(e){return e}:[".minX",".minY",".maxX",".maxY"])},e}();t.ElevationSamplerWorker=u,t.default=u});