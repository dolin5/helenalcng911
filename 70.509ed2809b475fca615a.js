(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/FeatureLayerSource":604,"esri/layers/graphics/OptimizedGeometry":612,"esri/tasks/operations/urlUtils":617,"esri/tasks/Task":618,"esri/layers/graphics/OptimizedFeature":619,"esri/geometry/support/quantizationUtils":620,"esri/layers/graphics/OptimizedFeatureSet":628,"esri/tasks/operations/query":640,"esri/tasks/operations/queryAttachments":661,"esri/tasks/QueryTask":671,"esri/tasks/operations/queryRelatedRecords":672})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[70,77,80,85],{604:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(1),r(0),r(7),r(6),r(8),r(41),r(11),r(52),r(16),r(4),r(22),r(2),r(671),r(661)],void 0===(u=function(e,t,r,n,u,o,a,i,s,l,c,d,p,y,f,h){Object.defineProperty(t,"__esModule",{value:!0});var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="feature-layer",t}return r(t,e),t.prototype.load=function(e){var t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),this.when()},Object.defineProperty(t.prototype,"queryTask",{get:function(){var e=this.layer,t=e.parsedUrl,r=e.dynamicDataSource,n=e.gdbVersion;return new f({url:null!=r?t.path+"?"+p.objectToQuery(t.query):t.path,gdbVersion:n})},enumerable:!0,configurable:!0}),t.prototype.addAttachment=function(e,t){var r=this;return this.load().then((function(){var n=e.attributes[r.layer.objectIdField],o=r.layer.parsedUrl.path+"/"+n+"/addAttachment",a=u({f:"json"},r.layer.parsedUrl.query),s=r._getFormDataForAttachment(t,a);return i(o,{body:s}).then((function(e){return r._createFeatureEditResult(e.data.addAttachmentResult)})).catch((function(e){return d.reject(r._createAttachmentErrorResult(n,e))}))}))},t.prototype.updateAttachment=function(e,t,r){var n=this;return this.load().then((function(){var o=e.attributes[n.layer.objectIdField],a=n.layer.parsedUrl.path+"/"+o+"/updateAttachment",s=u({f:"json"},n.layer.parsedUrl.query,{attachmentId:t}),l=n._getFormDataForAttachment(r,s);return i(a,{body:l}).then((function(e){return n._createFeatureEditResult(e.data.updateAttachmentResult)})).catch((function(e){return d.reject(n._createAttachmentErrorResult(o,e))}))}))},t.prototype.applyEdits=function(e){var t=this;return this.load().then((function(){var r=e.addFeatures.map(t._serializeFeature,t),n=e.updateFeatures.map(t._serializeFeature,t),u=t._getFeatureIds(e.deleteFeatures),o={f:"json",adds:r.length?JSON.stringify(r):null,updates:n.length?JSON.stringify(n):null,deletes:u.length?u.join(","):null};return i(t.layer.parsedUrl.path+"/applyEdits",{query:o,method:"post",responseType:"json"})})).then((function(e){return t._createEditsResult(e)}))},t.prototype.deleteAttachments=function(e,t){var r=this;return this.load().then((function(){var n=e.attributes[r.layer.objectIdField],o=r.layer.parsedUrl.path+"/"+n+"/deleteAttachments";return i(o,{query:u({f:"json"},r.layer.parsedUrl.query,{attachmentIds:t.join(",")}),method:"post",responseType:"json"}).then((function(e){return e.data.deleteAttachmentResults.map(r._createFeatureEditResult)})).catch((function(e){return d.reject(r._createAttachmentErrorResult(n,e))}))}))},t.prototype.queryAttachments=function(e,t){var r=this;void 0===t&&(t={});var n=this.layer.parsedUrl,o=n.path;return this.load().then((function(){var a=u({},t,{query:u({},n.query,{f:"json"}),responseType:"json"});if(!r.layer.get("capabilities.operations.supportsQueryAttachments")){for(var s=e.objectIds,l=[],c=0,p=s;c<p.length;c++){var y=p[c],f=o+"/"+y+"/attachments";l.push(i(f,a))}return d.all(l).then((function(e){return s.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return h.processAttachmentQueryResult(e,o)}))}return r.queryTask.executeAttachmentQuery(e,a)}))},t.prototype.queryFeatures=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.execute(e,t)}))},t.prototype.queryFeaturesJSON=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeJSON(e,t)}))},t.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForIds(e,t)}))},t.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForCount(e,t)}))},t.prototype.queryExtent=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeForExtent(e,t)}))},t.prototype.queryRelatedFeatures=function(e,t){var r=this;return this.load().then((function(){return r.queryTask.executeRelationshipQuery(e,t)}))},t.prototype._fetchService=function(e){return a(this,void 0,void 0,(function(){var t,r;return o(this,(function(n){switch(n.label){case 0:return(t=this.layer.sourceJSON)?(this.sourceJSON=t,[2]):[4,i(this.layer.parsedUrl.path,{query:u({f:"json"},this.layer.parsedUrl.query),responseType:"json",signal:e})];case 1:return r=n.sent().data,this.sourceJSON=r,[2]}}))}))},t.prototype._serializeFeature=function(e){var t=e.geometry,r=e.attributes;return c.isNone(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}},t.prototype._getFeatureIds=function(e){var t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]},t.prototype._getIdsFromFeatures=function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))},t.prototype._getIdsFromFeatureIdentifier=function(e){return e.map((function(e){return e.objectId}))},t.prototype._createEditsResult=function(e){var t=e.data;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[]}},t.prototype._createFeatureEditResult=function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new s("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},t.prototype._createAttachmentErrorResult=function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new s("feature-layer-source:attachment-failure",r,{code:n})}},t.prototype._getFormDataForAttachment=function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var n in t){var u=t[n];null!=u&&(r.set?r.set(n,u):r.append(n,u))}return r},n([y.property()],t.prototype,"type",void 0),n([y.property({constructOnly:!0})],t.prototype,"layer",void 0),n([y.property({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource"]})],t.prototype,"queryTask",null),n([y.subclass("esri.layers.graphics.sources.FeatureLayerSource")],t)}(y.declared(l));t.default=m}.apply(null,n))||(e.exports=u)},612:function(e,t,r){var n,u;n=[r.dj.c(e.i),t],void 0===(u=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.lengths=e,this.coords=t};t.default=r}.apply(null,n))||(e.exports=u)},617:function(e,t,r){var n,u;n=[r.dj.c(e.i),t],void 0===(u=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.mapParameters=function e(t){var r={};for(var n in t)if("declaredClass"!==n){var u=t[n];if(null!=u&&"function"!=typeof u)if(Array.isArray(u)){r[n]=[];for(var o=0;o<u.length;o++)r[n][o]=e(u[o])}else"object"==typeof u?u.toJSON&&(r[n]=JSON.stringify(u)):r[n]=u}return r}}.apply(null,n))||(e.exports=u)},618:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(1),r(0),r(74),r(7),r(10),r(22),r(2)],void 0===(u=function(e,t,r,n,u,o,a,i,s){return function(e){function t(t){var r=e.call(this)||this;return r.requestOptions=null,r.url=null,r}return r(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"!=typeof e?e:o({url:e},t)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){return this._parseUrl(this.url)},enumerable:!0,configurable:!0}),t.prototype._parseUrl=function(e){return e?i.urlToObject(e):null},t.prototype._encode=function(e,t,r){var n={};for(var u in e)if("declaredClass"!==u){var o=e[u];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[u]=[];for(var a=0;a<o.length;a++)n[u][a]=this._encode(o[a])}else if("object"==typeof o)if(o.toJSON){var i=o.toJSON(r&&r[u]);n[u]=t?i:JSON.stringify(i)}else n[u]=t?o:JSON.stringify(o);else n[u]=o}return n},n([s.property({readOnly:!0,dependsOn:["url"]})],t.prototype,"parsedUrl",null),n([s.property()],t.prototype,"requestOptions",void 0),n([s.property({type:String})],t.prototype,"url",void 0),n([s.subclass("esri.tasks.Task")],t)}(s.declared(a))}.apply(null,n))||(e.exports=u)},619:function(e,t,r){var n,u;n=[r.dj.c(e.i),t],void 0===(u=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,r,n){void 0===e&&(e=null),void 0===t&&(t={}),this.geometry=e,t&&(this.attributes=t),r&&(this.centroid=r),null!=n&&(this.objectId=n)};t.default=r}.apply(null,n))||(e.exports=u)},620:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(56)],void 0===(u=function(e,t,r){function n(e){return e&&"upperLeft"===e.originPosition}function u(e,t){var r=e.scale,n=e.translate;return Math.round((t-n[0])/r[0])}function o(e,t){var r=e.scale,n=e.translate;return Math.round((n[1]-t)/r[1])}function a(e,t,r){for(var n,a,i,s,l=[],c=0;c<r.length;c++){var d=r[c];c>0?(i=u(e,d[0]),s=o(e,d[1]),i===n&&s===a||(l.push(t(d,i-n,s-a)),n=i,a=s)):(n=u(e,d[0]),a=o(e,d[1]),l.push(t(d,n,a)))}return l.length>0?l:null}function i(e,t,r,n){return a(e,r?n?q:S:n?S:O,t)}function s(e,t,r,n){for(var u=[],o=r?n?q:S:n?S:O,i=0;i<t.length;i++){var s=a(e,o,t[i]);s&&s.length>=3&&u.push(s)}return u.length?u:null}function l(e,t,r,n){for(var u=[],o=r?n?q:S:n?S:O,i=0;i<t.length;i++){var s=a(e,o,t[i]);s&&s.length>=2&&u.push(s)}return u.length?u:null}function c(e,t){var r=e.scale,n=e.translate;return t*r[0]+n[0]}function d(e,t){var r=e.scale;return e.translate[1]-t*r[1]}function p(e,t,r){var n=new Array(r.length);if(!r.length)return n;var u=e.scale,o=u[0],a=u[1],i=c(e,r[0][0]),s=d(e,r[0][1]);n[0]=t(r[0],i,s);for(var l=1;l<r.length;l++){var p=r[l];i+=p[0]*o,s-=p[1]*a,n[l]=t(p,i,s)}return n}function y(e,t,r){for(var n=new Array(r.length),u=0;u<r.length;u++)n[u]=p(e,t,r[u]);return n}function f(e,t,r,n){return p(e,r?n?q:S:n?S:O,t)}function h(e,t,r,n){return y(e,r?n?q:S:n?S:O,t)}function m(e,t,r,n){return y(e,r?n?q:S:n?S:O,t)}function v(e,t,r){for(var n=r[0],u=n[0],o=n[1],a=Math.min(u,t[0]),i=Math.min(o,t[1]),s=Math.max(u,t[2]),l=Math.max(o,t[3]),c=1;c<r.length;c++){var d=r[c],p=d[0],y=d[1];u+=p,o+=y,p<0&&(a=Math.min(a,u)),p>0&&(s=Math.max(s,u)),y<0?i=Math.min(i,o):y>0&&(l=Math.max(l,o))}return e[0]=a,e[1]=i,e[2]=s,e[3]=l,e}function g(e,t){if(!t.length)return null;e[0]=e[1]=Number.POSITIVE_INFINITY,e[2]=e[3]=Number.NEGATIVE_INFINITY;for(var r=0;r<t.length;r++)v(e,e,t[r]);return e}function x(e,t,r,n,a){return t.xmin=u(e,r.xmin),t.ymin=o(e,r.ymin),t.xmax=u(e,r.xmax),t.ymax=o(e,r.ymax),t!==r&&(n&&(t.zmin=r.zmin,t.zmax=r.zmax),a&&(t.mmin=r.mmin,t.mmax=r.mmax)),t}function b(e,t,r,n,u){return t.points=i(e,r.points,n,u),t}function F(e,t,r,n,a){return t.x=u(e,r.x),t.y=o(e,r.y),t!==r&&(n&&(t.z=r.z),a&&(t.m=r.m)),t}function j(e,t,r,n,u){var o=s(e,r.rings,n,u);return o?(t.rings=o,t):null}function I(e,t,r,n,u){var o=l(e,r.paths,n,u);return o?(t.paths=o,t):null}Object.defineProperty(t,"__esModule",{value:!0});var O=function(e,t,r){return[t,r]},S=function(e,t,r){return[t,r,e[2]]},q=function(e,t,r){return[t,r,e[2],e[3]]};t.toQuantizationTransform=function(e){return e?{originPosition:"upperLeft",scale:[e.tolerance,e.tolerance],translate:[e.extent.xmin,e.extent.ymax]}:null},t.equals=function(e,t){return e===t||null==e&&null==t||null!=e&&null!=t&&(n(e)?(r=e.translate[0],u=e.translate[1],o=e.scale[0]):(r=e.extent.xmin,u=e.extent.ymax,o=e.tolerance),n(t)?(a=t.translate[0],i=t.translate[1],s=t.scale[0]):(a=t.extent.xmin,i=t.extent.ymax,s=t.tolerance),r===a&&u===i&&o===s);var r,u,o,a,i,s},t.quantizeX=u,t.quantizeY=o,t.quantizeBounds=function(e,t,r){return t[0]=u(e,r[0]),t[3]=o(e,r[1]),t[2]=u(e,r[2]),t[1]=o(e,r[3]),t},t.quantizePoints=i,t.quantizeRings=s,t.quantizePaths=l,t.hydrateX=c,t.hydrateY=d,t.hydrateCoordsArray=p,t.hydrateCoordsArrayArray=y,t.hydrateBounds=function(e,t,r){return r?(t[0]=c(e,r[0]),t[1]=d(e,r[3]),t[2]=c(e,r[2]),t[3]=d(e,r[1]),t):[c(e,t[0]),d(e,t[3]),c(e,t[2]),d(e,t[1])]},t.hydratePoints=f,t.hydratePaths=h,t.hydrateRings=m,t.getQuantizedBoundsCoordsArray=v,t.getQuantizedBoundsCoordsArrayArray=g,t.getQuantizedBoundsPoints=function(e){var t=[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY];return v(t,t,e)},t.getQuantizedBoundsPaths=function(e){return g([0,0,0,0],e)},t.getQuantizedBoundsRings=function(e){return g([0,0,0,0],e)},t.quantizeExtent=x,t.quantizeMultipoint=b,t.quantizePoint=F,t.quantizePolygon=j,t.quantizePolyline=I,t.quantizeGeometry=function(e,t){return e&&t?r.isPoint(t)?F(e,{},t,!1,!1):r.isPolyline(t)?I(e,{},t,!1,!1):r.isPolygon(t)?j(e,{},t,!1,!1):r.isMultipoint(t)?b(e,{},t,!1,!1):r.isExtent(t)?x(e,{},t,!1,!1):null:null},t.hydrateExtent=function(e,t,r,n,u){return t.xmin=c(e,r.xmin),t.ymin=d(e,r.ymin),t.xmax=c(e,r.xmax),t.ymax=d(e,r.ymax),t!==r&&(n&&(t.zmin=r.zmin,t.zmax=r.zmax),u&&(t.mmin=r.mmin,t.mmax=r.mmax)),t},t.hydrateMultipoint=function(e,t,r,n,u){return t.points=f(e,r.points,n,u),t},t.hydratePoint=function(e,t,r,n,u){return t.x=c(e,r.x),t.y=d(e,r.y),t!==r&&(n&&(t.z=r.z),u&&(t.m=r.m)),t},t.hydratePolygon=function(e,t,r,n,u){return t.rings=m(e,r.rings,n,u),t},t.hydratePolyline=function(e,t,r,n,u){return t.paths=h(e,r.paths,n,u),t}}.apply(null,n))||(e.exports=u)},628:function(e,t,r){var n,u;n=[r.dj.c(e.i),t],void 0===(u=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1};t.default=r}.apply(null,n))||(e.exports=u)},640:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(7),r(41),r(46),r(16),r(22),r(56),r(271),r(651),r(564),r(617),r(50)],void 0===(u=function(e,t,r,n,u,o,a,i,s,l,c,d){function p(e,t){var r=e.geometry,n=e.toJSON(),u=n;if(r&&(u.geometry=JSON.stringify(r),u.geometryType=i.getJsonType(r),u.inSR=r.spatialReference.wkid||JSON.stringify(r.spatialReference)),n.groupByFieldsForStatistics&&(u.groupByFieldsForStatistics=n.groupByFieldsForStatistics.join(",")),n.objectIds&&(u.objectIds=n.objectIds.join(",")),n.orderByFields&&(u.orderByFields=n.orderByFields.join(",")),!n.outFields||t&&(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)?delete u.outFields:-1!==n.outFields.indexOf("*")?u.outFields="*":u.outFields=n.outFields.join(","),n.outSR?u.outSR=n.outSR.wkid||JSON.stringify(n.outSR):r&&(n.returnGeometry||n.returnCentroid)&&(u.outSR=u.inSR),n.returnGeometry&&delete n.returnGeometry,n.outStatistics&&(u.outStatistics=JSON.stringify(n.outStatistics)),n.pixelSize&&(u.pixelSize=JSON.stringify(n.pixelSize)),n.quantizationParameters&&(u.quantizationParameters=JSON.stringify(n.quantizationParameters)),n.source&&(u.layer=JSON.stringify({source:n.source}),delete n.source),n.timeExtent){var o=n.timeExtent,a=o.start,s=o.end;null==a&&null==s||(u.time=a===s?a:(null==a?"null":a)+","+(null==s?"null":s)),delete n.timeExtent}return u}function y(e,t,i,l,c){void 0===l&&(l={});var y="string"==typeof e?a.urlToObject(e):e,f=t.geometry?[t.geometry]:[];return l.responseType="pbf"===i?"array-buffer":"json",u.safeCast(s.normalizeCentralMeridian(f,null,l)).then((function(e){var u=e&&e[0];o.isSome(u)&&((t=t.clone()).geometry=u);var a=d.mapParameters(r({},y.query,{f:i},c,p(t,c)));return n(y.path+"/query",r({},l,{query:a}))}))}Object.defineProperty(t,"__esModule",{value:!0});var f,h="Layer does not support extent calculation.";t.queryToQueryStringParameters=p,t.executeQuery=function(e,t,r){return y(e,t,"json",r)},t.executeQueryPBF=function(e,t,r,n){return y(e,t,"pbf",n).then((function(e){var t=function(t){var r=e;return r.data=t,r};return r.useWorker?(null==f&&(f=new c.PBFWorker),f).parseFeatureQuery(e.data,r).then((function(e){return t(e)})):t(l.parsePBFFeatureQuery(e.data,r))}))},t.executeQueryForIds=function(e,t,r){return y(e,t,"json",r,{returnIdsOnly:!0})},t.executeQueryForCount=function(e,t,r){return y(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})},t.executeQueryForExtent=function(e,t,r){return y(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((function(e){var t=e.data;if(t.hasOwnProperty("extent"))return e;if(t.features)throw new Error(h);if(t.hasOwnProperty("count"))throw new Error(h);return e}))}}.apply(null,n))||(e.exports=u)},661:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(7),r(41),r(22),r(294),r(617)],void 0===(u=function(e,t,r,n,u,o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.processAttachmentQueryResult=function(e,t){for(var r={},n=0,a=e;n<a.length;n++)for(var i=a[n],s=i.parentObjectId,l=0,c=i.attachmentInfos;l<c.length;l++){var d=c[l],p=d.id,y=u.addProxy(u.addTokenParameter(t+"/"+s+"/attachments/"+p)),f=o.fromJSON(d);f.set({url:y,parentObjectId:s}),r[s]?r[s].push(f):r[s]=[f]}return r},t.executeAttachmentQuery=function(e,t,u){var o={query:a.mapParameters(r({},e.query,{f:"json"},function(e){var t=e.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}(t)))};return u&&(o=r({},u,o)),n(e.path+"/queryAttachments",o)}}.apply(null,n))||(e.exports=u)},671:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(1),r(0),r(74),r(7),r(20),r(2),r(618),r(640),r(661),r(672),r(291),r(174),r(272),r(292)],void 0===(u=function(e,t,r,n,u,o,a,i,s,l,c,d,p,y,f,h){return function(e){function t(t){var r=e.call(this,t)||this;return r.gdbVersion=null,r.source=null,r}return r(t,e),t.prototype.execute=function(e,t){return this.executeJSON(e,t).then((function(e){return y.fromJSON(e)}))},t.prototype.executeJSON=function(e,t){return l.executeQuery(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then((function(e){return e.data}))},t.prototype.executeForCount=function(e,t){return l.executeQueryForCount(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then((function(e){return e.data.count}))},t.prototype.executeForExtent=function(e,t){return l.executeQueryForExtent(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then((function(e){return{count:e.data.count,extent:a.Extent.fromJSON(e.data.extent)}}))},t.prototype.executeForIds=function(e,t){return l.executeQueryForIds(this.parsedUrl,this._normalizeQuery(e),o({},this.requestOptions,t)).then((function(e){return e.data.objectIds}))},t.prototype.executeRelationshipQuery=function(e,t){return e=h.from(e),(this.gdbVersion||this.source)&&(e=e.clone().set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source})),d.executeRelationshipQuery(this.parsedUrl,e,o({},this.requestOptions,t)).then((function(e){var t=e.data,r={};return Object.keys(t).forEach((function(e){return r[e]=y.fromJSON(t[e])})),r}))},t.prototype.executeAttachmentQuery=function(e,t){var r=this;return c.executeAttachmentQuery(this.parsedUrl,p.from(e),o({},this.requestOptions,t)).then((function(e){return c.processAttachmentQueryResult(e.data.attachmentGroups,r.parsedUrl.path)}))},t.prototype._normalizeQuery=function(e){var t=f.from(e);return this.gdbVersion||this.source?(t===e?t.clone():t).set({gdbVersion:this.gdbVersion||e.gdbVersion,source:this.source||e.source}):t},n([i.property()],t.prototype,"gdbVersion",void 0),n([i.property()],t.prototype,"source",void 0),n([i.subclass("esri.tasks.QueryTask")],t)}(i.declared(s))}.apply(null,n))||(e.exports=u)},672:function(e,t,r){var n,u;n=[r.dj.c(e.i),t,r(7),r(41),r(617)],void 0===(u=function(e,t,r,n,u){function o(e){var t=e.toJSON();return t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.outFields&&(t.outFields=t.outFields.join(",")),t.outSpatialReference&&(t.outSR=t.outSR.wkid||JSON.stringify(t.outSR.toJSON()),delete t.outSpatialReference),t.source&&(t.layer=JSON.stringify({source:t.source}),delete t.source),t}Object.defineProperty(t,"__esModule",{value:!0}),t.toQueryStringParameters=o,t.executeRelationshipQuery=function(e,t,a){var i={query:u.mapParameters(r({},e.query,{f:"json"},o(t)))};return a&&(i=r({},a,i)),n(e.path+"/queryRelatedRecords",i).then((function(e){for(var t=e.data,r=t.geometryType,n=t.spatialReference,u={},o=0,a=t.relatedRecordGroups;o<a.length;o++){var i=a[o],s={fields:void 0,objectIdFieldName:void 0,geometryType:r,spatialReference:n,features:i.relatedRecords};if(null!=i.objectId)u[i.objectId]=s;else for(var l in i)i.hasOwnProperty(l)&&"relatedRecords"!==l&&(u[i[l]]=s)}return e.data=u,e}))}}.apply(null,n))||(e.exports=u)}}]);