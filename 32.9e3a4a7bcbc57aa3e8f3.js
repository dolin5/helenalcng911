(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/WebTileLayer":829,"esri/layers/OpenStreetMapLayer":840,"esri/layers/support/WMTSLayerInfo":995})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[32,34],{829:function(e,t,r){var o,l;o=[r.dj.c(e.i),t,r(7),r(1),r(0),r(6),r(8),r(20),r(41),r(11),r(5),r(276),r(4),r(62),r(23),r(23),r(2),r(75),r(278),r(277),r(285),r(176),r(128),r(174),r(995)],void 0===(l=function(e,t,o,l,n,i,p,a,s,u,y,c,d,f,v,m,h,w,b,g,S,T,j,R,O){return function(e){function t(t,r){var o=e.call(this)||this;return o.copyright="",o.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),o.legendEnabled=!1,o.isReference=null,o.popupEnabled=!1,o.spatialReference=a.SpatialReference.WebMercator,o.subDomains=null,o.tileInfo=new R({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new j({level:0,scale:591657527.591555,resolution:156543.033928}),new j({level:1,scale:295828763.795777,resolution:78271.5169639999}),new j({level:2,scale:147914381.897889,resolution:39135.7584820001}),new j({level:3,scale:73957190.948944,resolution:19567.8792409999}),new j({level:4,scale:36978595.474472,resolution:9783.93962049996}),new j({level:5,scale:18489297.737236,resolution:4891.96981024998}),new j({level:6,scale:9244648.868618,resolution:2445.98490512499}),new j({level:7,scale:4622324.434309,resolution:1222.99245256249}),new j({level:8,scale:2311162.217155,resolution:611.49622628138}),new j({level:9,scale:1155581.108577,resolution:305.748113140558}),new j({level:10,scale:577790.554289,resolution:152.874056570411}),new j({level:11,scale:288895.277144,resolution:76.4370282850732}),new j({level:12,scale:144447.638572,resolution:38.2185141425366}),new j({level:13,scale:72223.819286,resolution:19.1092570712683}),new j({level:14,scale:36111.909643,resolution:9.55462853563415}),new j({level:15,scale:18055.954822,resolution:4.77731426794937}),new j({level:16,scale:9027.977411,resolution:2.38865713397468}),new j({level:17,scale:4513.988705,resolution:1.19432856685505}),new j({level:18,scale:2256.994353,resolution:.597164283559817}),new j({level:19,scale:1128.497176,resolution:.298582141647617})]}),o.type="web-tile",o.urlTemplate=null,o.wmtsInfo=null,o}return l(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?y.mixin({urlTemplate:e},t||{}):e},t.prototype.load=function(e){var t=this,r=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((function(){var e="";if(t.urlTemplate)if(t.spatialReference.equals(t.tileInfo.spatialReference)){var r=new v.Url(t.urlTemplate);!!t.subDomains&&t.subDomains.length>0||-1===r.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new u("web-tile-layer:load","WebTileLayer (title: '"+t.title+"', id: '"+t.id+"') "+e)}));return this.addResolvingPromise(r),this.when()},Object.defineProperty(t.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var t=0,r=this.tileInfo.lods;t<r.length;t++){var o=r[t];e[o.level]=o.levelValue||o.level}return e},enumerable:!0,configurable:!0}),t.prototype.readSpatialReference=function(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&a.SpatialReference.fromJSON(t.fullExtent.spatialReference)},Object.defineProperty(t.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],t=this.urlTemplate,r=this.subDomains,o=new v.Url(t),l=o.scheme?o.scheme+"://":"//",n=l+o.authority+"/";if(-1===o.authority.indexOf("{subDomain}"))e.push(n);else if(r&&r.length>0&&o.authority.split(".").length>1)for(var i=0,p=r;i<p.length;i++){var a=p[i];e.push(l+o.authority.replace(/\{subDomain\}/gi,a)+"/")}return e.map((function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e}))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,t=new v.Url(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)},enumerable:!0,configurable:!0}),t.prototype.readUrlTemplate=function(e,t){return e||t.templateUrl},t.prototype.writeUrlTemplate=function(e,t,r){e&&m.isProtocolRelative(e)&&(e="https:"+e),t.templateUrl=e?m.normalize(e):e},t.prototype.fetchTile=function(e,t,r,o){void 0===o&&(o={});var l=o.signal,n=o.timestamp,i=this.getTileUrl(e,t,r),p={responseType:"image",signal:l};return null!=n&&(p.query={_ts:o.timestamp}),s(i,p).then((function(e){return e.data}))},t.prototype.getTileUrl=function(e,t,r){var o=this.levelValues[e],l=this.tileServers[t%this.tileServers.length]+f.replace(this.urlPath,{level:o,col:r,row:t});return l.replace(/\{level\}/gi,""+o).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)},t.prototype.importLayerViewModule=function(e){return p(this,void 0,void 0,(function(){return i(this,(function(t){switch(e.type){case"2d":return[2,d.create((function(e){return Promise.all([r.e(1),r.e(0),r.e(2),r.e(6),r.e(16)]).then(function(){var t=[r(1029)];e.apply(null,t)}.bind(this)).catch(r.oe)}))];case"3d":return[2,d.create((function(e){return r.e(18).then(function(){var t=[r(1030)];e.apply(null,t)}.bind(this)).catch(r.oe)}))]}return[2]}))}))},n([h.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),n([h.property({type:a.Extent,json:{write:!0}})],t.prototype,"fullExtent",void 0),n([h.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"legendEnabled",void 0),n([h.property({type:["show","hide"]})],t.prototype,"listMode",void 0),n([h.property({dependsOn:["tileInfo"]})],t.prototype,"levelValues",null),n([h.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],t.prototype,"isReference",void 0),n([h.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],t.prototype,"operationalLayerType",void 0),n([h.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"popupEnabled",void 0),n([h.property({type:a.SpatialReference})],t.prototype,"spatialReference",void 0),n([h.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],t.prototype,"readSpatialReference",null),n([h.property({type:[String],json:{write:!0}})],t.prototype,"subDomains",void 0),n([h.property({type:R,json:{write:!0}})],t.prototype,"tileInfo",void 0),n([h.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],t.prototype,"tileServers",null),n([h.property({json:{read:!1}})],t.prototype,"type",void 0),n([h.property({dependsOn:["urlTemplate"]})],t.prototype,"urlPath",null),n([h.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],t.prototype,"urlTemplate",void 0),n([h.reader("urlTemplate",["urlTemplate","templateUrl"])],t.prototype,"readUrlTemplate",null),n([h.writer("urlTemplate",{templateUrl:{type:String}})],t.prototype,"writeUrlTemplate",null),n([h.property({type:O.default,json:{write:!0}})],t.prototype,"wmtsInfo",void 0),n([h.subclass("esri.layers.WebTileLayer")],t)}(h.declared(S.RefreshableLayer(T.ScaleRangeLayer(b.OperationalLayer(g.PortalLayer(c.MultiOriginJSONMixin(w)))))))}.apply(null,o))||(e.exports=l)},840:function(e,t,r){var o,l;o=[r.dj.c(e.i),t,r(7),r(1),r(0),r(20),r(2),r(829),r(174),r(96)],void 0===(l=function(e,t,r,o,l,n,i,p,a,s){return function(e){function t(){var t=e.call(this)||this;return t.portalItem=null,t.isReference=null,t.subDomains=["a","b","c"],t.fullExtent=new n.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.SpatialReference.WebMercator),t.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",t.operationalLayerType="OpenStreetMap",t.type="open-street-map",t.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",t}return o(t,e),Object.defineProperty(t.prototype,"refreshInterval",{get:function(){return 0},enumerable:!0,configurable:!0}),l([i.property({type:s,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",void 0),l([i.property({type:Boolean,json:{read:!1,write:!1}})],t.prototype,"isReference",void 0),l([i.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"refreshInterval",null),l([i.property({type:a,json:{write:!1}})],t.prototype,"tileInfo",void 0),l([i.property({type:["show","hide"]})],t.prototype,"listMode",void 0),l([i.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"subDomains",void 0),l([i.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"fullExtent",void 0),l([i.property({readOnly:!0,json:{read:!1,write:!1}})],t.prototype,"urlTemplate",void 0),l([i.property({type:["OpenStreetMap"]})],t.prototype,"operationalLayerType",void 0),l([i.property({json:{read:!1}})],t.prototype,"type",void 0),l([i.property({json:{read:!1,write:!1}})],t.prototype,"copyright",void 0),l([i.property({json:{read:!1,write:!1}})],t.prototype,"wmtsInfo",void 0),l([i.subclass("esri.layers.OpenStreetMapLayer")],t)}(i.declared(p))}.apply(null,o))||(e.exports=l)},995:function(e,t,r){var o,l;o=[r.dj.c(e.i),t,r(1),r(0),r(3),r(5),r(2)],void 0===(l=function(e,t,r,o,l,n,i){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){return e.call(this)||this}var l;return r(t,e),l=t,t.prototype.clone=function(){return new l({customLayerParameters:n.clone(this.customLayerParameters),customParameters:n.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})},o([i.property({json:{type:Object,write:!0}})],t.prototype,"customLayerParameters",void 0),o([i.property({json:{type:Object,write:!0}})],t.prototype,"customParameters",void 0),o([i.property({type:String,json:{write:!0}})],t.prototype,"layerIdentifier",void 0),o([i.property({type:String,json:{write:!0}})],t.prototype,"tileMatrixSet",void 0),o([i.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),l=o([i.subclass("esri.layer.support.WMTSLayerInfo")],t)}(i.declared(l.JSONSupport));t.WMTSLayerInfo=p,t.default=p}.apply(null,o))||(e.exports=l)}}]);