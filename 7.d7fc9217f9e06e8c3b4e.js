(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/featureConversionUtils":615,"dojo/regexp":650,"dojo/string":771,"dojo/number":773,"dojo/i18n!dojo/cldr/nls/number":1231,"dojo/cldr/nls/en/number":1232,"dojo/cldr/nls/en-au/number":1233,"dojo/cldr/nls/number":1234})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[7,38],{1231:function(e,r,t){var n,o;n=[t(61),t(63),t(1232),t(1233),t(1234)],void 0===(o=function(e,r){return r(e,"dojo/cldr/nls/number",t.dj.c(),!1)}.apply(null,n))||(e.exports=o)},1232:function(e,r,t){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000 trillion","decimalFormat-short":"000T"}},1233:function(e,r,t){e.exports={currencyFormat:"¤#,##0.00"}},1234:function(e,r,t){e.exports={root:{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"¤ #,##0.00",perMille:"‰",group:",",percentFormat:"#,##0%","decimalFormat-long":"000T",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E"},ar:!1,bs:!1,ca:!1,cs:!1,da:!1,de:!1,el:!1,en:!0,"en-au":!0,es:!1,et:!1,"es-mx":!1,fi:!1,fr:!1,"fr-ch":!1,he:!1,hi:!1,hr:!1,hu:!1,id:!1,it:!1,ja:!1,ko:!1,mk:!1,lt:!1,lv:!1,nb:!1,nl:!1,pl:!1,pt:!1,"pt-pt":!1,ro:!1,ru:!1,sk:!1,sl:!1,sr:!1,sv:!1,th:!1,tr:!1,uk:!1,vi:!1,zh:!1,"zh-hant":!1,"zh-hk":!1,"zh-tw":!1}},615:function(e,r,t){var n,o;n=[t.dj.c(e.i),r,t(11),t(9),t(56),t(619),t(628),t(612)],void 0===(o=function(e,r,t,n,o,a,i,u){function s(e,r){return e?r?4:3:r?3:2}function l(e,r){var t=e.scale,n=e.translate;return Math.round((r-n[0])/t[0])}function c(e,r){var t=e.scale,n=e.translate;return Math.round((n[1]-r)/t[1])}function d(e,r){var t=e.scale,n=e.translate;return r*t[0]+n[0]}function f(e,r){var t=e.scale;return e.translate[1]-r*t[1]}function g(e){var r=e.coords;return{x:r[0],y:r[1]}}function h(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e}function p(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2]}}function m(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e}function v(e){var r=e.coords;return{x:r[0],y:r[1],m:r[2]}}function y(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.m,e}function b(e){var r=e.coords;return{x:r[0],y:r[1],z:r[2],m:r[3]}}function x(e,r){return e.coords[0]=r.x,e.coords[1]=r.y,e.coords[2]=r.z,e.coords[3]=r.m,e}function F(e,r){return e&&r?x:e?m:r?y:h}function M(e,r,t,n,o){for(var i=F(t,n),s=0,l=r;s<l.length;s++){var c=l[s],d=c.geometry,f=c.attributes,g=void 0;d&&(g=i(new u.default,d)),e.push(new a.default(g,f,null,f[o]))}return e}function w(e,r,t){if(!e)return null;for(var n=s(r,t),o=[],a=0;a<e.coords.length;a+=n){for(var i=[],u=0;u<n;u++)i.push(e.coords[a+u]);o.push(i)}return r?t?{points:o,hasZ:r,hasM:t}:{points:o,hasZ:r}:t?{points:o,hasM:t}:{points:o}}function I(e,r,t,n,o){for(var i=s(t,n),l=0,c=r;l<c.length;l++){var d=c[l],f=d.geometry,g=d.attributes,h=void 0;f&&(h=N(new u.default,f,i)),e.push(new a.default(h,g,null,g[o]))}return e}function N(e,r,t){void 0===t&&(t=s(r.hasZ,r.hasM)),e.lengths[0]=r.points.length;for(var n=e.coords,o=0,a=0,i=r.points;a<i.length;a++)for(var u=i[a],l=0;l<t;l++)n[o++]=u[l];return e}function S(e,r,t){if(!e)return null;for(var n=s(r,t),o=e.coords,a=[],i=0,u=0,l=e.lengths;u<l.length;u++){for(var c=l[u],d=[],f=0;f<c;f++){for(var g=[],h=0;h<n;h++)g.push(o[i++]);d.push(g)}a.push(d)}return r?t?{paths:a,hasZ:r,hasM:t}:{paths:a,hasZ:r}:t?{paths:a,hasM:t}:{paths:a}}function G(e,r,t,n,o){for(var i=s(t,n),l=0,c=r;l<c.length;l++){var d=c[l],f=d.geometry,g=d.attributes,h=void 0;f&&(h=T(new u.default,f,i)),e.push(new a.default(h,g,null,g[o]))}return e}function T(e,r,t){void 0===t&&(t=s(r.hasZ,r.hasM));for(var n=e.lengths,o=e.coords,a=0,i=0,u=r.paths;i<u.length;i++){for(var l=u[i],c=0,d=l;c<d.length;c++)for(var f=d[c],g=0;g<t;g++)o[a++]=f[g];n.push(l.length)}return e}function z(e,r,t){if(!e)return null;for(var n=s(r,t),o=e.coords,a=[],i=0,u=0,l=e.lengths;u<l.length;u++){for(var c=l[u],d=[],f=0;f<c;f++){for(var g=[],h=0;h<n;h++)g.push(o[i++]);d.push(g)}a.push(d)}return r?t?{rings:a,hasZ:r,hasM:t}:{rings:a,hasZ:r}:t?{rings:a,hasM:t}:{rings:a}}function j(e,r,t,n,o){for(var i=0,s=r;i<s.length;i++){var l=s[i],c=l.geometry,d=l.centroid,f=l.attributes,g=void 0;c&&(g=E(new u.default,c,t,n)),d?e.push(new a.default(g,f,h(new u.default,d),f[o])):e.push(new a.default(g,f,null,f[o]))}return e}function E(e,r,t,n){return void 0===t&&(t=r.hasZ),void 0===n&&(n=r.hasM),O(e,r.rings,t,n),e}function O(e,r,t,n){var o=s(t,n),a=e.lengths,i=e.coords,u=0;a.length=i.length=0;for(var l=0,c=r;l<c.length;l++){for(var d=c[l],f=0,g=d;f<g.length;f++)for(var h=g[f],p=0;p<o;p++)i[u++]=h[p];a.push(d.length)}return e}function P(e,r,n,o,i,u){if(e.length=0,!n){for(var s=0,l=r;s<l.length;s++){var c=l[s],d=c.attributes[u];e.push(new a.default(null,c.attributes,null,d))}return e}switch(n){case"esriGeometryPoint":return M(e,r,o,i,u);case"esriGeometryMultipoint":return I(e,r,o,i,u);case"esriGeometryPolyline":return G(e,r,o,i,u);case"esriGeometryPolygon":return j(e,r,o,i,u);default:Y.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type '"+n+"'")),e.length=0}return e}function _(e,r,n,o,a){switch(e.length=0,n){case"esriGeometryPoint":return function(e,r,t,n){var o=g;t&&n?o=b:t?o=p:n&&(o=v);for(var a=0,i=r;a<i.length;a++){var u=i[a],s=u.geometry,l=u.attributes,c=s?o(s):null;e.push({attributes:l,geometry:c})}return e}(e,r,o,a);case"esriGeometryMultipoint":return function(e,r,t,n){for(var o=0,a=r;o<a.length;o++){var i=a[o],u=i.geometry,s=i.attributes,l=void 0;u&&(l=w(u,t,n)),e.push({attributes:s,geometry:l})}return e}(e,r,o,a);case"esriGeometryPolyline":return function(e,r,t,n){for(var o=0,a=r;o<a.length;o++){var i=a[o],u=i.geometry,s=i.attributes,l=void 0;u&&(l=S(u,t,n)),e.push({attributes:s,geometry:l})}return e}(e,r,o,a);case"esriGeometryPolygon":return function(e,r,t,n){for(var o=0,a=r;o<a.length;o++){var i=a[o],u=i.geometry,s=i.attributes,l=i.centroid,c=void 0;if(u&&(c=z(u,t,n)),l){var d=g(l);e.push({attributes:s,centroid:d,geometry:c})}else e.push({attributes:s,geometry:c})}return e}(e,r,o,a);default:Y.error("convertToFeatureSet:unknown-geometry",new t("Unable to parse unknown geometry type '"+n+"'"))}return e}function R(e,r,t,n,o,a){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var i=L[o],u=r.coords,d=r.lengths,f=s(t,n),g=t?n?q:V:n?V:C;if(!d.length)return g(e.coords,u,0,0,l(a,u[0]),c(a,u[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;for(var h,p,m,v,y=0,b=0,x=b,F=0,M=d;F<M.length;F++){var w=M[F];if(!(w<i)){var I=0;b=x,m=h=l(a,u[y]),v=p=c(a,u[y+1]),g(e.coords,u,b,y,m,v),I++,y+=f,b+=f;for(var N=1;N<w;N++,y+=f)m=l(a,u[y]),v=c(a,u[y+1]),m===h&&v===p||(g(e.coords,u,b,y,m-h,v-p),b+=f,I++,h=m,p=v);I>=i&&(e.lengths.push(I),x=b)}}return e.coords.length=x,e.coords.length?e:null}function k(e,r,t,n){var o=e[r],a=e[r+1],i=e[t],u=e[t+1],s=e[n],l=e[n+1];if(i===s)return Math.abs(o-i);var c=(l-u)/(s-i),d=u-c*i;return Math.abs(c*o-a+d)/Math.sqrt(c*c+1)}function Z(e,r,t,n,o,a,i){for(var u,s=a,l=i-t,c=0,d=0,f=a+t;f<i-t;f+=t)(u=k(r,f,s,l))>c&&(d=f,c=u);c>n?(Z(e,r,t,n,o,a,d+t),Z(e,r,t,n,o,d,i)):(o(e,r,e.length,s,r[s],r[s+1]),o(e,r,e.length,l,r[l],r[l+1]))}function A(e,r,t,n,o){var a=r.coords,i=r.lengths,u=t?n?q:V:n?V:C,l=s(t,n);if(!a.length)return e!==r&&(e.lengths.length=0,e.coords.length=0),e;if(!i.length)return u(e.coords,a,0,0,d(o,a[0]),f(o,a[1])),e!==r&&(e.lengths.length=0,e.coords.length=l),e;for(var c=o.scale,g=c[0],h=c[1],p=0,m=0;m<i.length;m++){var v=i[m];e.lengths[m]=v;var y=d(o,a[p]),b=f(o,a[p+1]);u(e.coords,a,p,p,y,b),p+=l;for(var x=1;x<v;x++,p+=l)y+=a[p]*g,b-=a[p+1]*h,u(e.coords,a,p,p,y,b)}return e!==r&&(e.lengths.length=i.length,e.coords.length=a.length),e}Object.defineProperty(r,"__esModule",{value:!0});var Y=n.getLogger("esri.tasks.support.optimizedFeatureSet"),L={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},C=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a},V=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a,e[t+2]=r[n+2]},q=function(e,r,t,n,o,a){e[t]=o,e[t+1]=a,e[t+2]=r[n+2],e[t+3]=r[n+3]};r.quantizeX=l,r.quantizeY=c,r.hydrateX=d,r.hydrateY=f,r.convertToPoint=function(e,r,t){return e?r?t?b(e):p(e):t?v(e):g(e):null},r.convertFromPoint=function(e,r,t){return void 0===t&&(t=F(null!=r.z,null!=r.m)),t(e,r)},r.convertToMultipoint=w,r.convertFromMultipoint=N,r.convertToPolyline=S,r.convertFromPolyline=T,r.convertToPolygon=z,r.convertFromPolygon=E,r.convertFromNestedArray=O;var U=[],B=[];r.convertFromFeature=function(e,r,t,n,o){U[0]=e;var a=P(B,U,r,t,n,o)[0];return U.length=B.length=0,a},r.convertFromFeatures=P,r.convertToFeature=function(e,r,t,n){B[0]=e,_(U,B,r,t,n);var o=U[0];return U.length=B.length=0,o},r.convertFromGeometry=function(e,r,n){if(!e)return null;var a=new u.default;return"hasZ"in e&&null==r&&(r=e.hasZ),"hasM"in e&&null==n&&(n=e.hasM),o.isPoint(e)?F(null!=r?r:null!=e.z,null!=n?n:null!=e.m)(a,e):o.isPolygon(e)?E(a,e,r,n):o.isPolyline(e)?T(a,e,s(r,n)):o.isMultipoint(e)?N(a,e,s(r,n)):void Y.error("convertFromGeometry:unknown-geometry",new t("Unable to parse unknown geometry type '"+e+"'"))},r.convertToGeometry=function(e,r,n,o){var a=e&&("coords"in e?e:e.geometry);if(!a)return null;switch(r){case"esriGeometryPoint":var i=g;return n&&o?i=b:n?i=p:o&&(i=v),i(a);case"esriGeometryMultipoint":return w(a,n,o);case"esriGeometryPolyline":return S(a,n,o);case"esriGeometryPolygon":return z(a,n,o);default:return void Y.error("convertToGeometry:unknown-geometry",new t("Unable to parse unknown geometry type '"+r+"'"))}},r.convertToFeatures=_,r.convertToFeatureSet=function(e){var r=e.objectIdFieldName,t=e.spatialReference,n=e.transform,o=e.fields,a=e.hasM,i=e.hasZ,u=e.features,s=e.geometryType,l=e.exceededTransferLimit,c={features:_([],u,s,i,a),fields:o,geometryType:s,objectIdFieldName:r,spatialReference:t};return n&&(c.transform=n),l&&(c.exceededTransferLimit=l),a&&(c.hasM=a),i&&(c.hasZ=i),c},r.convertFromFeatureSet=function(e,r){var n=new i.default,o=e.hasM,a=e.hasZ,u=e.features,s=e.objectIdFieldName,l=e.spatialReference,c=e.geometryType,d=e.exceededTransferLimit,f=e.transform;return n.fields=e.fields,n.geometryType=c,n.objectIdFieldName=s||r,n.spatialReference=l,n.objectIdFieldName?(u&&P(n.features,u,c,a,o,n.objectIdFieldName),d&&(n.exceededTransferLimit=d),o&&(n.hasM=o),a&&(n.hasZ=a),f&&(n.transform=f),n):(Y.error(new t("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)},r.hydrateOptimizedFeatureSet=function(e){var r=e.transform,t=e.features,n=e.hasM,o=e.hasZ;if(!r)return e;for(var a=0,i=t;a<i.length;a++){var u=i[a];u.geometry&&A(u.geometry,u.geometry,n,o,r),u.centroid&&A(u.centroid,u.centroid,n,o,r)}return e.transform=null,e},r.quantizeOptimizedFeatureSet=function(e,r){var t=r.geometryType,n=r.features,o=r.hasM,i=r.hasZ;if(!e)return r;for(var s=0;s<n.length;s++){var l=n[s],c=new a.default(new u.default,l.attributes);R(c.geometry,l.geometry,o,i,t,e),l.centroid&&(c.centroid=new u.default,R(c.centroid,l.centroid,o,i,"esriGeometryPoint",e)),n[s]=c}return r.transform=e,r},r.quantizeOptimizedGeometry=R,r.quantizeOptimizedGeometryRemoveCollinear=function(e,r,t,n,o,a){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var i=L[o],u=r.coords,d=r.lengths,f=s(t,n),g=t?n?q:V:n?V:C;if(!d.length)return g(e.coords,u,0,0,l(a,u[0]),c(a,u[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=f,e;for(var h,p,m,v,y=0,b=0,x=b,F=0,M=d;F<M.length;F++){var w=M[F];if(!(w<i)){var I=0;b=x,m=h=l(a,u[y]),v=p=c(a,u[y+1]),g(e.coords,u,b,y,m,v),I++,y+=f;for(var N=!1,S=0,G=0,T=1;T<w;T++,y+=f)if(m=l(a,u[y]),v=c(a,u[y+1]),m!==h||v!==p){var z=m-h,j=v-p;N&&(0===S&&0===z||0===G&&0===j)?(S+=z,G+=j,g(e.coords,u,b,y,S,G)):(N=!0,S=z,G=j,b+=f,I++,g(e.coords,u,b,y,S,G)),h=m,p=v}N&&(b+=f,g(e.coords,u,b,y,S,G)),I>=i&&(e.lengths.push(I),x=b)}}return e.coords.length!==x&&(e.coords.length=x),e.coords.length?e:null},r.generalizeOptimizedGeometry=function(e,r,t,n,o,a){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!r||!r.coords.length)return null;var i=L[o],u=r.coords,l=r.lengths,c=s(t,n),d=t?n?q:V:n?V:C;if(!l.length)return d(e.coords,u,0,0,u[0],u[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=c,e;for(var f=0,g=0,h=l;g<h.length;g++){var p=h[g];if(p<i)f+=p*c;else{var m=e.coords.length/c;Z(e.coords,u,c,a,d,f,f+p*c);var v=e.coords.length/c-m;v>=i?e.lengths.push(v):e.coords.length=m*c,f+=p*c}}return e.coords.length?e:null},r.getBoundsOptimizedGeometry=function(e,r,t,n){var o=s(t,n),a=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&r.coords)for(var c=r.coords,d=0;d<c.length;d+=o){var f=c[d],g=c[d+1];a=Math.min(a,f),u=Math.max(u,f),i=Math.min(i,g),l=Math.max(l,g)}return e[0]=a,e[1]=i,e[2]=u,e[3]=l,e},r.getQuantizedBoundsOptimizedGeometry=function(e,r,t,n){for(var o=s(t,n),a=r.lengths,i=r.coords,u=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY,f=0,g=0,h=a;g<h.length;g++){var p=h[g],m=i[f],v=i[f+1];u=Math.min(m,u),l=Math.min(v,l),c=Math.max(m,c),d=Math.max(v,d),f+=o;for(var y=1;y<p;y++,f+=o){var b=i[f],x=i[f+1];m+=b,v+=x,b<0&&(u=Math.min(u,m)),b>0&&(c=Math.max(c,m)),x<0?l=Math.min(l,v):x>0&&(d=Math.max(d,v))}}return e[0]=u,e[1]=l,e[2]=c,e[3]=d,e},r.hydrateOptimizedGeometry=A}.apply(null,n))||(e.exports=o)},650:function(e,r,t){var n,o;n=[t(24),t(22)],void 0===(o=function(e,r){var t={};return r.setObject("dojo.regexp",t),t.escapeString=function(e,r){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(function(e){return r&&-1!=r.indexOf(e)?e:"\\"+e}))},t.buildGroupRE=function(e,r,n){if(!(e instanceof Array))return r(e);for(var o=[],a=0;a<e.length;a++)o.push(r(e[a]));return t.group(o.join("|"),n)},t.group=function(e,r){return"("+(r?"?:":"")+e+")"},t}.apply(null,n))||(e.exports=o)},771:function(e,r,t){var n,o;n=[t(24),t(22)],void 0===(o=function(e,r){var t=/[&<>'"\/]/g,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},o={};return r.setObject("dojo.string",o),o.escape=function(e){return e?e.replace(t,(function(e){return n[e]})):""},o.rep=function(e,r){if(r<=0||!e)return"";for(var t=[];1&r&&t.push(e),r>>=1;)e+=e;return t.join("")},o.pad=function(e,r,t,n){t||(t="0");var a=String(e),i=o.rep(t,Math.ceil((r-a.length)/t.length));return n?a+i:i+a},o.substitute=function(t,n,o,a){return a=a||e.global,o=o?r.hitch(a,o):function(e){return e},t.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,t,i){if(""==t)return"$";var u=r.getObject(t,!1,n);i&&(u=r.getObject(i,!1,a).call(a,u,t));var s=o(u,t);if(void 0===s)throw new Error('string.substitute could not find key "'+t+'" in template');return s.toString()}))},o.trim=String.prototype.trim?r.trim:function(e){for(var r=(e=e.replace(/^\s+/,"")).length-1;r>=0;r--)if(/\S/.test(e.charAt(r))){e=e.substring(0,r+1);break}return e},o}.apply(null,n))||(e.exports=o)},773:function(e,r,t){var n,o;n=[t(22),t(61),t(1231),t(771),t(650)],void 0===(o=function(e,r,t,n,o){var a={};if(e.setObject("dojo.number",a),a.format=function(t,n){n=e.mixin({},n||{});var o=r.normalizeLocale(n.locale),i=r.getLocalization("dojo.cldr","number",o);n.customs=i;var u=n.pattern||i[(n.type||"decimal")+"Format"];return isNaN(t)||Math.abs(t)==1/0?null:a._applyPattern(t,u,n)},a._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/,a._applyPattern=function(e,r,t){var n=(t=t||{}).customs.group,o=t.customs.decimal,i=r.split(";"),u=i[0];if(-1!=(r=i[e<0?1:0]||"-"+u).indexOf("%"))e*=100;else if(-1!=r.indexOf("‰"))e*=1e3;else if(-1!=r.indexOf("¤"))n=t.customs.currencyGroup||n,o=t.customs.currencyDecimal||o,r=r.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/,(function(e,r,n,o){var a=["symbol","currency","displayName"][n.length-1],i=t[a]||t.currency||"";return i?r+i+o:""}));else if(-1!=r.indexOf("E"))throw new Error("exponential notation not supported");var s=a._numberPatternRE,l=u.match(s);if(!l)throw new Error("unable to find a number expression in pattern: "+r);return!1===t.fractional&&(t.places=0),r.replace(s,a._formatAbsolute(e,l[0],{decimal:o,group:n,places:t.places,round:t.round}))},a.round=function(e,r,t){var n=10/(t||10);return(n*+e).toFixed(r)/n},0==.9.toFixed()){var i=a.round;a.round=function(e,r,t){var n=Math.pow(10,-r||0),o=Math.abs(e);return!e||o>=n?n=0:((o/=n)<.5||o>=.95)&&(n=0),i(e,r,t)+(e>0?n:-n)}}return a._formatAbsolute=function(e,r,t){!0===(t=t||{}).places&&(t.places=0),t.places===1/0&&(t.places=6);var o=r.split("."),i="string"==typeof t.places&&t.places.indexOf(","),u=t.places;i?u=t.places.substring(i+1):u>=0||(u=(o[1]||[]).length),t.round<0||(e=a.round(e,u,t.round));var s=String(Math.abs(e)).split("."),l=s[1]||"";if(o[1]||t.places){i&&(t.places=t.places.substring(0,i));var c=void 0!==t.places?t.places:o[1]&&o[1].lastIndexOf("0")+1;c>l.length&&(s[1]=n.pad(l,c,"0",!0)),u<l.length&&(s[1]=l.substr(0,u))}else s[1]&&s.pop();var d=o[0].replace(",","");-1!=(c=d.indexOf("0"))&&((c=d.length-c)>s[0].length&&(s[0]=n.pad(s[0],c)),-1==d.indexOf("#")&&(s[0]=s[0].substr(s[0].length-c)));var f,g,h=o[0].lastIndexOf(",");if(-1!=h){f=o[0].length-h-1;var p=o[0].substr(0,h);-1!=(h=p.lastIndexOf(","))&&(g=p.length-h-1)}for(var m=[],v=s[0];v;){var y=v.length-f;m.push(y>0?v.substr(y):v),v=y>0?v.slice(0,y):"",g&&(f=g,g=void 0)}return s[0]=m.reverse().join(t.group||","),s.join(t.decimal||".")},a.regexp=function(e){return a._parseInfo(e).regexp},a._parseInfo=function(e){e=e||{};var t=r.normalizeLocale(e.locale),n=r.getLocalization("dojo.cldr","number",t),i=e.pattern||n[(e.type||"decimal")+"Format"],u=n.group,s=n.decimal,l=1;if(-1!=i.indexOf("%"))l/=100;else if(-1!=i.indexOf("‰"))l/=1e3;else{var c=-1!=i.indexOf("¤");c&&(u=n.currencyGroup||u,s=n.currencyDecimal||s)}var d=i.split(";");1==d.length&&d.push("-"+d[0]);var f=o.buildGroupRE(d,(function(r){return(r="(?:"+o.escapeString(r,".")+")").replace(a._numberPatternRE,(function(r){var t={signed:!1,separator:e.strict?u:[u,""],fractional:e.fractional,decimal:s,exponent:!1},n=r.split("."),o=e.places;1==n.length&&1!=l&&(n[1]="###"),1==n.length||0===o?t.fractional=!1:(void 0===o&&(o=e.pattern?n[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(t.fractional=!0),!e.places&&o<n[1].length&&(o+=","+n[1].length),t.places=o);var i=n[0].split(",");return i.length>1&&(t.groupSize=i.pop().length,i.length>1&&(t.groupSize2=i.pop().length)),"("+a._realNumberRegexp(t)+")"}))}),!0);return c&&(f=f.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,(function(r,t,n,a){var i=["symbol","currency","displayName"][n.length-1],u=o.escapeString(e[i]||e.currency||"");return u?(t=t?"[\\s\\xa0]":"",a=a?"[\\s\\xa0]":"",e.strict?t+u+a:(t&&(t+="*"),a&&(a+="*"),"(?:"+t+u+a+")?")):""}))),{regexp:f.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:u,decimal:s,factor:l}},a.parse=function(e,r){var t=a._parseInfo(r),n=new RegExp("^"+t.regexp+"$").exec(e);if(!n)return NaN;var o=n[1];if(!n[1]){if(!n[2])return NaN;o=n[2],t.factor*=-1}return(o=o.replace(new RegExp("["+t.group+"\\s\\xa0]","g"),"").replace(t.decimal,"."))*t.factor},a._realNumberRegexp=function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(e.places)||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var r=a._integerRegexp(e),t=o.buildGroupRE(e.fractional,(function(r){var t="";return r&&0!==e.places&&(t="\\"+e.decimal,e.places==1/0?t="(?:"+t+"\\d+)?":t+="\\d{"+e.places+"}"),t}),!0),n=r+t;return t&&(n="(?:(?:"+n+")|(?:"+t+"))"),n+o.buildGroupRE(e.exponent,(function(r){return r?"([eE]"+a._integerRegexp({signed:e.eSigned})+")":""}))},a._integerRegexp=function(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",o.buildGroupRE(e.signed,(function(e){return e?"[-+]":""}),!0)+o.buildGroupRE(e.separator,(function(r){if(!r)return"(?:\\d+)";" "==(r=o.escapeString(r))?r="\\s":" "==r&&(r="\\s\\xa0");var t=e.groupSize,n=e.groupSize2;if(n){var a="(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+r+"]\\d{"+n+"})*["+r+"]\\d{"+t+"})";return t-n>0?"(?:"+a+"|(?:0|[1-9]\\d{0,"+(t-1)+"}))":a}return"(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+r+"]\\d{"+t+"})*)"}),!0)},a}.apply(null,n))||(e.exports=o)}}]);