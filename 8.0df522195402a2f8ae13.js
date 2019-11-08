(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/BingMapsLayer":187,"esri/layers/BaseTileLayer":1982})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{187:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(1),r(0),r(6),r(8),r(41),r(11),r(12),r(16),r(276),r(4),r(2),r(26),r(1982),r(278),r(174)],void 0===(n=function(e,t,r,o,n,a,i,l,s,p,u,y,c,d,g,b,h){var v=new s.default({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"});return function(e){function t(t){var r=e.call(this)||this;return r.type="bing-maps",r.tileInfo=new h({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:d.WebMercator},spatialReference:d.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),r.key=null,r.style="road",r.culture="en-US",r.region=null,r.portalUrl=null,r.hasAttributionData=!0,r}return r(t,e),Object.defineProperty(t.prototype,"bingMetadata",{get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"copyright",{get:function(){return p.isSome(this.bingMetadata)?this.bingMetadata.copyright:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bingLogo",{get:function(){return p.isSome(this.bingMetadata)?this.bingMetadata.brandLogoUri:null},enumerable:!0,configurable:!0}),t.prototype.load=function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(y.reject(new l("bingmapslayer:load","Bing layer must have bing key."))),this.when()},t.prototype.getTileUrl=function(e,t,r){if(!this.loaded||p.isNone(this.bingMetadata))return null;var o=this.bingMetadata.resourceSets[0].resources[0],n=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],a=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",n).replace("{quadkey}",a)},t.prototype.fetchAttributionData=function(){return a(this,void 0,void 0,(function(){var e=this;return n(this,(function(t){return[2,this.load().then((function(){return p.isNone(e.bingMetadata)?null:{contributors:e.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}}))]}))}))},t.prototype._getMetadata=function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return i("https://dev.virtualearth.net/REST/v1/Imagery/Metadata/"+t,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;return 200!==r.statusCode?y.reject(new l("bingmapslayer:getmetadata",r.statusDescription)):(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length?y.reject(new l("bingmapslayer:getmetadata","no bing resourcesets")):0===e.bingMetadata.resourceSets[0].resources.length?y.reject(new l("bingmapslayer:getmetadata","no bing resources")):void 0)})).catch((function(e){throw new l("bingmapslayer:getmetadata",e.message)}))},t.prototype._getPortalBingKey=function(){var e=this;return i(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new l("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new l("bingmapslayer:getportalbingkey",e.message)}))},t.prototype._getQuadKey=function(e,t,r){for(var o="",n=e;n>0;n--){var a=0,i=1<<n-1;0!=(r&i)&&(a+=1),0!=(t&i)&&(a+=2),o+=a.toString()}return o},o([c.property({json:{read:!1,write:!1},value:null})],t.prototype,"bingMetadata",null),o([c.property({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],t.prototype,"type",void 0),o([c.property({type:h})],t.prototype,"tileInfo",void 0),o([c.property({type:String,readOnly:!0,dependsOn:["bingMetadata"],json:{read:!1,write:!1}})],t.prototype,"copyright",null),o([c.property({type:String,json:{write:!1,read:!1}})],t.prototype,"key",void 0),o([c.property({type:String,json:{write:{target:"layerType",writer:v.write},read:{source:"layerType",reader:v.read}}})],t.prototype,"style",void 0),o([c.property({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"],readOnly:!0,json:{read:{source:"layerType"}}})],t.prototype,"operationalLayerType",void 0),o([c.property({type:String,json:{write:!1,read:!1}})],t.prototype,"culture",void 0),o([c.property({type:String,json:{write:!1,read:!1}})],t.prototype,"region",void 0),o([c.property({type:String,json:{write:!0,read:!0}})],t.prototype,"portalUrl",void 0),o([c.property({type:Boolean,json:{write:!1,read:!1}})],t.prototype,"hasAttributionData",void 0),o([c.property({type:String,readOnly:!0,dependsOn:["bingMetadata"]})],t.prototype,"bingLogo",null),o([c.subclass("esri.layers.BingMapsLayer")],t)}(c.declared(b.OperationalLayer(u.MultiOriginJSONMixin(g))))}.apply(null,o))||(e.exports=n)},1982:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r(7),r(1),r(0),r(6),r(8),r(41),r(11),r(4),r(2),r(28),r(26),r(168),r(75),r(285),r(176),r(174)],void 0===(n=function(e,t,o,n,a,i,l,s,p,u,y,c,d,g,b,h,v,f){var m={id:"0/0/0",level:0,row:0,col:0,extent:null};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.tileInfo=f.create({spatialReference:d.WebMercator,size:256}),t.type="base-tile",t.fullExtent=new c(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,d.WebMercator),t.spatialReference=d.WebMercator,t}return n(t,e),t.prototype.getTileBounds=function(e,t,r,o){var n=o||g.create();return m.level=e,m.row=t,m.col=r,m.extent=n,this.tileInfo.updateTileInfo(m),m.extent=null,n},t.prototype.fetchTile=function(e,t,r,o){void 0===o&&(o={});var n=o.signal,a=o.timestamp,i=this.getTileUrl(e,t,r),l={responseType:"image",signal:n};return null!=a&&(l.query={_ts:o.timestamp}),s(i,l).then((function(e){return e.data}))},t.prototype.getTileUrl=function(e,t,r){throw new p("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")},t.prototype.importLayerViewModule=function(e){return l(this,void 0,void 0,(function(){return i(this,(function(t){switch(e.type){case"2d":return[2,u.create((function(e){return Promise.all([r.e(1),r.e(0),r.e(2),r.e(6),r.e(16)]).then(function(){var t=[r(1029)];e.apply(null,t)}.bind(this)).catch(r.oe)}))];case"3d":return[2,u.create((function(e){return r.e(18).then(function(){var t=[r(1030)];e.apply(null,t)}.bind(this)).catch(r.oe)}))]}return[2]}))}))},a([y.property({type:f})],t.prototype,"tileInfo",void 0),a([y.property({type:["show","hide"]})],t.prototype,"listMode",void 0),a([y.property({readOnly:!0,value:"base-tile"})],t.prototype,"type",void 0),a([y.property()],t.prototype,"fullExtent",void 0),a([y.property()],t.prototype,"spatialReference",void 0),a([y.subclass("esri.layers.BaseTileLayer")],t)}(y.declared(v.ScaleRangeLayer(h.RefreshableLayer(b))))}.apply(null,o))||(e.exports=n)}}]);