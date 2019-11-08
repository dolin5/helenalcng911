(function(){(this||window).webpackJsonp.registerAbsMids({"esri/renderers/support/heatmapUtils":1071,"esri/views/2d/layers/features/processors/BaseProcessor":1148,"esri/views/2d/layers/features/processors/HeatmapProcessor":2037})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1071:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(47),r(66)],void 0===(o=function(e,t,r,n){function o(e,t,r,o,a){for(var i=new Uint32Array(e*e),l=("buffer"in t?t:new Float64Array(t)),u=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),p=u.length/(a-o),s=0;s<l.length;s++){var c=l[s],f=Math.floor((c-o)*p);i[s]=u[n.clamp(f,0,u.length-1)]}return i.buffer}function a(e){for(var t=Math.round(3*e),r=2*e*e,n=new Float64Array(2*t+1),o=0;o<=n.length;o++)n[o]=Math.exp(-Math.pow(o-t,2)/r)/Math.sqrt(2*Math.PI)*(e/2);return n}function i(e,t){return"function"==typeof e?e:e?"string"==typeof t?function(t){return-1*+t[e]}:function(r){return+r[e]+t}:function(e){return 1}}Object.defineProperty(t,"__esModule",{value:!0}),t.generateGradient=function(){if(!("document"in r))return function(e){return null};var e=document.createElement("canvas"),t=e.getContext("2d");return e.height=512,e.width=1,function(r){t.clearRect(0,0,1,e.height);for(var n=t.createLinearGradient(0,0,0,e.height),o=0,a=r.colorStops;o<a.length;o++){var i=a[o],l=i.ratio,u=i.color;n.addColorStop(Math.max(l,.001),"rgba("+u[0]+", "+u[1]+", "+u[2]+", "+u[3]+")")}return t.fillStyle=n,t.fillRect(0,0,1,e.height),t.getImageData(0,0,1,e.height).data}}(),t.calculateHeatmapIntensityInfo=function(e,t,r,n){for(var o,l=t.blurRadius,u=t.fieldOffset,p=t.field,s=new Float64Array(r*n),c=a(l),f=Math.round(3*l),d=Number.NEGATIVE_INFINITY,y=i(p,u),h=0,v=e;h<v.length;h++)for(var g=v[h],m=g.geometry,w=g.attributes,b=m.x-f,O=m.y-f,I=Math.max(0,b),M=Math.max(0,O),x=Math.min(n,m.y+f),R=Math.min(r,m.x+f),U=+y(w),A=M;A<x;A++)for(var P=c[A-O],S=I;S<R;S++){var T=c[S-b];(o=s[A*r+S]+=P*T*U)>d&&(d=o)}return{matrix:s.buffer,max:d}},t.drawHeatmap=function(e,t,r,n,a,i){e.canvas.width=e.canvas.height=t,e.clearRect(0,0,t,t);var l=e.getImageData(0,0,t,t);r&&n&&l.data.set(new Uint8ClampedArray(o(t,r,n,a,i))),e.putImageData(l,0,0)},t.createHeatmapImageData=o,t.createKernel=a,t.createValueFunction=i}.apply(null,n))||(e.exports=o)},1148:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(1),r(0),r(6),r(8),r(116),r(2)],void 0===(o=function(e,t,r,n,o,a,i,l){Object.defineProperty(t,"__esModule",{value:!0});var u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),n([l.property({readOnly:!0})],t.prototype,"supportsTileUpdates",null),n([l.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),n([l.property({constructOnly:!0})],t.prototype,"service",void 0),n([l.property({dependsOn:["tileStore.tileScheme.spatialReference"]})],t.prototype,"spatialReference",null),n([l.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),n([l.property({constructOnly:!0})],t.prototype,"tileStore",void 0),n([l.subclass("esri.views.2d.layers.features.processors.BaseProcessor")],t)}(l.declared(i.HandleOwner));t.default=u}.apply(null,n))||(e.exports=o)},2037:function(e,t,r){var n,o;n=[r.dj.c(e.i),t,r(1),r(0),r(6),r(8),r(2),r(1071),r(1148)],void 0===(o=function(e,t,r,n,o,a,i,l,u){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="heatmap",t.updating=!1,t}return r(t,e),t.prototype.update=function(e){return a(this,void 0,void 0,(function(){return o(this,(function(t){return this._set("config",e),[2]}))}))},t.prototype.onTileData=function(e,t,r){if(t&&t.addOrUpdate&&t.addOrUpdate.length>0){var n=l.calculateHeatmapIntensityInfo(t.addOrUpdate,this.config.renderer,512,512);return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:n},{transferList:[n.matrix]})}return this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.key.id,intensityInfo:null},r)},t.prototype.onTileError=function(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)},n([i.property()],t.prototype,"config",void 0),n([i.property()],t.prototype,"updating",void 0),n([i.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],t)}(i.declared(u.default));t.default=p}.apply(null,n))||(e.exports=o)}}]);