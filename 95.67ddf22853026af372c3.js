(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/UnknownLayer":1069})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1069:function(e,n,r){var o,t;o=[r.dj.c(e.i),n,r(1),r(0),r(11),r(276),r(4),r(29),r(2),r(75),r(277)],void 0===(t=function(e,n,r,o,t,i,p,s,u,a,y){return function(e){function n(n){var r=e.call(this)||this;return r.resourceInfo=null,r.type="unknown",r}return r(n,e),n.prototype.initialize=function(){var e=this;this.addResolvingPromise(p.create((function(n,r){s.schedule((function(){var n=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),o="Unknown layer type";n&&(o+=" "+n),r(new t("layer:unknown-layer-type",o,{layerType:n}))}))})))},n.prototype.read=function(e,n){this.inherited(arguments,[{resourceInfo:e},n])},n.prototype.write=function(e,n){return null},o([u.property({readOnly:!0})],n.prototype,"resourceInfo",void 0),o([u.property({type:["show","hide"]})],n.prototype,"listMode",void 0),o([u.property({json:{read:!1},readOnly:!0,value:"unknown"})],n.prototype,"type",void 0),o([u.subclass("esri.layers.UnknownLayer")],n)}(u.declared(y.PortalLayer(i.MultiOriginJSONMixin(a))))}.apply(null,o))||(e.exports=t)}}]);