(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/BuildingSceneLayer":836,"esri/layers/mixins/SceneService":986,"esri/layers/support/I3SLayerDefinitions":1023,"esri/layers/support/BuildingFilterMode":1138,"esri/layers/buildingSublayers/BuildingComponentSublayer":1243,"esri/layers/buildingSublayers/BuildingSublayer":1244,"esri/layers/support/BuildingFilterAuthoringInfo":1245,"esri/layers/buildingSublayers/BuildingGroupSublayer":1984,"esri/layers/support/BuildingFilter":1985,"esri/core/uuid":1986,"esri/layers/support/BuildingFilterAuthoringInfoCheckbox":1987,"esri/layers/support/BuildingFilterAuthoringInfoBlock":1988,"esri/layers/support/BuildingFilterAuthoringInfoType":1989,"esri/layers/support/BuildingFilterBlock":1990,"esri/layers/support/BuildingFilterModeSolid":1991,"esri/layers/support/BuildingFilterModeWireFrame":1992,"esri/symbols/edges/utils":1993})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1023:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(3),t(2)],void 0===(i=function(e,r,t,o,i,n){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.nodesPerPage=null,r.rootIndex=0,r.lodSelectionMetricType=null,r}return t(r,e),o([n.property({type:Number})],r.prototype,"nodesPerPage",void 0),o([n.property({type:Number})],r.prototype,"rootIndex",void 0),o([n.property({type:String})],r.prototype,"lodSelectionMetricType",void 0),o([n.subclass("esri.layer.support.I3SNodePageDefinition")],r)}(n.declared(i.JSONSupport));r.I3SNodePageDefinition=p;var l=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.factor=1,r}return t(r,e),o([n.property({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],r.prototype,"id",void 0),o([n.property({type:Number})],r.prototype,"factor",void 0),o([n.subclass("esri.layer.support.I3SMaterialTexture")],r)}(n.declared(i.JSONSupport));r.I3SMaterialTexture=l;var a=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.baseColorFactor=[1,1,1,1],r.baseColorTexture=null,r.metallicRoughnessTexture=null,r.metallicFactor=1,r.roughnessFactor=1,r}return t(r,e),o([n.property({type:[Number]})],r.prototype,"baseColorFactor",void 0),o([n.property({type:l})],r.prototype,"baseColorTexture",void 0),o([n.property({type:l})],r.prototype,"metallicRoughnessTexture",void 0),o([n.property({type:Number})],r.prototype,"metallicFactor",void 0),o([n.property({type:Number})],r.prototype,"roughnessFactor",void 0),o([n.subclass("esri.layer.support.I3SMaterialPBRMetallicRoughness")],r)}(n.declared(i.JSONSupport));r.I3SMaterialPBRMetallicRoughness=a;var s=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.alphaMode="opaque",r.alphaCutoff=.25,r.doubleSided=!1,r.cullFace="none",r.normalTexture=null,r.occlusionTexture=null,r.emissiveTexture=null,r.emissiveFactor=null,r.pbrMetallicRoughness=null,r}return t(r,e),o([n.enumeration.serializable()({opaque:"opaque",mask:"mask",blend:"blend"})],r.prototype,"alphaMode",void 0),o([n.property({type:Number})],r.prototype,"alphaCutoff",void 0),o([n.property({type:Boolean})],r.prototype,"doubleSided",void 0),o([n.enumeration.serializable()({none:"none",back:"back",front:"front"})],r.prototype,"cullFace",void 0),o([n.property({type:l})],r.prototype,"normalTexture",void 0),o([n.property({type:l})],r.prototype,"occlusionTexture",void 0),o([n.property({type:l})],r.prototype,"emissiveTexture",void 0),o([n.property({type:[Number]})],r.prototype,"emissiveFactor",void 0),o([n.property({type:a})],r.prototype,"pbrMetallicRoughness",void 0),o([n.subclass("esri.layer.support.I3SMaterialDefinition")],r)}(n.declared(i.JSONSupport));r.I3SMaterialDefinition=s;var u=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.property({type:String,json:{read:{source:["name","index"],reader:function(e,r){return null!=e?e:""+r.index}}}})],r.prototype,"name",void 0),o([n.enumeration.serializable()({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2"})],r.prototype,"format",void 0),o([n.subclass("esri.layer.support.I3STextureFormat")],r)}(n.declared(i.JSONSupport));r.I3STextureFormat=u;var y=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.atlas=!1,r}return t(r,e),o([n.property({type:[u]})],r.prototype,"formats",void 0),o([n.property({type:Boolean})],r.prototype,"atlas",void 0),o([n.subclass("esri.layer.support.I3STextureSetDefinition")],r)}(n.declared(i.JSONSupport));r.I3STextureSetDefinition=y;var d=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.enumeration.serializable()({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],r.prototype,"type",void 0),o([n.property({type:Number})],r.prototype,"component",void 0),o([n.subclass("esri.layer.support.I3SGeometryAttribute")],r)}(n.declared(i.JSONSupport));r.I3SGeometryAttribute=d;var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.enumeration.serializable()({draco:"draco"})],r.prototype,"encoding",void 0),o([n.property({type:[String]})],r.prototype,"attributes",void 0),o([n.subclass("esri.layer.support.I3SGeometryAttribute")],r)}(n.declared(i.JSONSupport));r.I3SGeometryCompressedAttributes=c;var f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.offset=0,r}return t(r,e),o([n.property({type:Number})],r.prototype,"offset",void 0),o([n.property({type:d})],r.prototype,"position",void 0),o([n.property({type:d})],r.prototype,"normal",void 0),o([n.property({type:d})],r.prototype,"uv0",void 0),o([n.property({type:d})],r.prototype,"color",void 0),o([n.property({type:d})],r.prototype,"uvRegion",void 0),o([n.property({type:d})],r.prototype,"featureId",void 0),o([n.property({type:d})],r.prototype,"faceRange",void 0),o([n.property({type:c})],r.prototype,"compressedAttributes",void 0),o([n.subclass("esri.layer.support.I3SGeometryBuffer")],r)}(n.declared(i.JSONSupport));r.I3SGeometryBuffer=f;var v=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.enumeration.serializable()({triangle:"triangle"})],r.prototype,"topology",void 0),o([n.property()],r.prototype,"geometryBuffers",void 0),o([n.subclass("esri.layer.support.I3SMeshDefinition")],r)}(n.declared(i.JSONSupport));r.I3SGeometryDefinition=v}.apply(null,o))||(e.exports=i)},1138:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(3),t(2)],void 0===(i=function(e,r,t,o,i,n){return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),o([n.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),o([n.subclass("esri.layers.support.BuildingFilterMode")],r)}(n.declared(i.JSONSupport))}.apply(null,o))||(e.exports=i)},1243:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(7),t(1),t(0),t(6),t(8),t(120),t(300),t(41),t(53),t(16),t(91),t(2),t(28),t(26),t(1244),t(172),t(313),t(274),t(1023),t(183),t(308),t(204)],void 0===(i=function(e,r,t,o,i,n,p,l,a,s,u,y,d,c,f,v,h,b,g,S,m,w,x,I){var O=g.defineFieldProperties();return function(e){function r(r){var t=e.call(this)||this;return t.type="building-component",t.nodePages=null,t.materialDefinitions=null,t.textureSetDefinitions=null,t.geometryDefinitions=null,t.serviceUpdateTimeStamp=null,t.fields=null,t.outFields=null,t.listMode="show",t.renderer=null,t.definitionExpression=null,t.popupEnabled=!0,t.popupTemplate=null,t.geometryType="mesh",t.profile="mesh-pyramids",t}return o(r,e),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fieldsIndex",{get:function(){return new S(this.fields)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var e=0,r=this.fields;e<r.length;e++){var t=r[e];if("oid"===t.type)return t.name}return null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),this.when()},r.prototype.createPopupTemplate=function(e){return x.createPopupTemplate(this,e)},r.prototype._fetchService=function(e){return p(this,void 0,void 0,(function(){var r,t;return n(this,(function(o){switch(o.label){case 0:return[4,s(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return r=o.sent(),t=r.data,this.read(t,{origin:"service",url:this.parsedUrl}),[2]}}))}))},r.prototype.getField=function(e){return this.fieldsIndex.get(e)},r.prototype.getFieldDomain=function(e){var r=this.getField(e);return r&&r.domain?r.domain:null},i([c.property({readOnly:!0,dependsOn:["layer","id"]})],r.prototype,"parsedUrl",null),i([c.property({type:m.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),i([c.property({type:[m.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),i([c.property({type:[m.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),i([c.property({type:[m.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),i([c.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),i([c.property({readOnly:!0})],r.prototype,"store",void 0),i([c.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],r.prototype,"rootNode",void 0),i([c.property({readOnly:!0})],r.prototype,"attributeStorageInfo",void 0),i([c.property(O.fields)],r.prototype,"fields",void 0),i([c.property({readOnly:!0,dependsOn:["fields"]})],r.prototype,"fieldsIndex",null),i([c.property(O.outFields)],r.prototype,"outFields",void 0),i([c.property({type:String,dependsOn:["fields"],readOnly:!0})],r.prototype,"objectIdField",null),i([c.property({readOnly:!0,type:f,aliasOf:"layer.fullExtent"})],r.prototype,"fullExtent",void 0),i([c.property({readOnly:!0,type:v,aliasOf:"layer.spatialReference"})],r.prototype,"spatialReference",void 0),i([c.property({readOnly:!0,aliasOf:"layer.version"})],r.prototype,"version",void 0),i([c.property({readOnly:!0,type:I,aliasOf:"layer.elevationInfo"})],r.prototype,"elevationInfo",void 0),i([c.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],r.prototype,"minScale",void 0),i([c.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],r.prototype,"maxScale",void 0),i([c.property({type:["hide","show"],json:{write:!0}})],r.prototype,"listMode",void 0),i([c.property({types:a.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:w.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:w.read},write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],r.prototype,"renderer",void 0),i([c.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],r.prototype,"definitionExpression",void 0),i([c.property(b.popupEnabled)],r.prototype,"popupEnabled",void 0),i([c.property({type:l,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],r.prototype,"popupTemplate",void 0),i([c.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],r.prototype,"normalReferenceFrame",void 0),i([c.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],r.prototype,"defaultPopupTemplate",null),i([c.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],r)}(c.declared(u.LoadableMixin(d.EsriPromiseMixin(h))))}.apply(null,o))||(e.exports=i)},1244:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(7),t(1),t(0),t(175),t(276),t(2),t(172)],void 0===(i=function(e,r,t,o,i,n,p,l,a){return function(e){function r(r){var t=e.call(this)||this;return t.title="",t.id=-1,t.modelName=null,t.visible=!0,t.opacity=1,t}return o(r,e),r.prototype.readTitle=function(e,r,t){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""},r.prototype.readIdOnlyOnce=function(e,r,t){return-1!==this.id?this.id:"number"==typeof e?e:void 0},i([l.property({type:String,json:{origins:{"web-scene":{write:!0}}}})],r.prototype,"title",void 0),i([l.reader("service","title",["alias","name"])],r.prototype,"readTitle",null),i([l.property()],r.prototype,"layer",void 0),i([l.property({type:Number,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],r.prototype,"id",void 0),i([l.reader("service","id")],r.prototype,"readIdOnlyOnce",null),i([l.property(a.readOnlyService(String))],r.prototype,"modelName",void 0),i([l.property({type:Boolean,json:{read:{source:"visibility"},write:{target:"visibility"}}})],r.prototype,"visible",void 0),i([l.property({type:Number,json:{write:!0}})],r.prototype,"opacity",void 0),i([l.subclass("esri.layers.buildingSublayers.BuildingSublayer")],r)}(l.declared(n.IdentifiableMixin(p.MultiOriginJSONSupport)))}.apply(null,o))||(e.exports=i)},1245:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(3),t(2)],void 0===(i=function(e,r,t,o,i,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type=null,r}return t(r,e),o([n.property({type:String,readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),o([n.subclass("esri.layers.support.BuildingFilterAuthoringInfo")],r)}(n.declared(i.JSONSupport))}.apply(null,o))||(e.exports=i)},1984:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(7),t(1),t(0),t(45),t(17),t(190),t(69),t(2),t(1243),t(1244)],void 0===(i=function(e,r,t,o,i,n,p,l,a,s,u,y){function d(e,r,t){if(e&&Array.isArray(e))return new p(e.map((function(e){var r=function(e){return"group"===e.layerType?f:u}(e);if(r){var o=new r;return o.read(e,t),o}t&&t.messages&&e&&t.messages.push(new a("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:t}))})))}var c={type:p,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:d}}},read:!1}},f=function(e){function r(r){var t=e.call(this)||this;return t.type="building-group",t.listMode="show",t.sublayers=null,t}var t;return o(r,e),t=r,r.prototype.loadAll=function(){var e=this;return n.safeCast(l.loadAllChildren(this,(function(r){return t.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))})))},i([s.property({type:["hide","show","hide-children"],json:{write:!0}})],r.prototype,"listMode",void 0),i([s.property(c)],r.prototype,"sublayers",void 0),t=i([s.subclass("esri.layers.buildingSublayers.BuildingGroupSublayer")],r)}(s.declared(y));return function(e){e.sublayersProperty=c,e.readSublayers=d,e.forEachSublayer=function e(r,t){r.forEach((function(r){t(r),"building-group"===r.type&&e(r.sublayers,t)}))}}(f||(f={})),f}.apply(null,o))||(e.exports=i)},1985:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(17),t(3),t(5),t(1986),t(2),t(1245),t(1987),t(1990)],void 0===(i=function(e,r,t,o,i,n,p,l,a,s,u,y){var d=i.ofType(y);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.description=null,r.filterBlocks=null,r.id=l.generateUUID(),r.name=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({description:this.description,filterBlocks:p.clone(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:p.clone(this.filterAuthoringInfo)})},o([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([a.property({type:d,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterBlocks",void 0),o([a.property({types:{key:"type",base:s,typeMap:{checkbox:u}},json:{read:function(e){switch(e&&e.type){case"checkbox":return u.fromJSON(e);default:return null}},write:!0}})],r.prototype,"filterAuthoringInfo",void 0),o([a.property({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"id",void 0),o([a.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"name",void 0),i=o([a.subclass("esri.layers.support.BuildingFilter")],r)}(a.declared(n.JSONSupport))}.apply(null,o))||(e.exports=i)},1986:function(e,r,t){var o,i;o=[t.dj.c(e.i),r],void 0===(i=function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.generateUUID=function(){var e=t.getRandomValues(new Uint16Array(8));e[3]=4095&e[3]|16384,e[4]=16383&e[4]|32768;var r=function(r){return e[r].toString(16)};return r(0)+r(1)+"-"+r(2)+"-"+r(3)+"-"+r(4)+"-"+r(5)+r(6)+r(7)};var t=window.crypto||window.msCrypto}.apply(null,o))||(e.exports=i)},1987:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(17),t(5),t(2),t(1245),t(1988)],void 0===(i=function(e,r,t,o,i,n,p,l,a){var s=i.ofType(a);return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="checkbox",r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({filterBlocks:n.clone(this.filterBlocks)})},o([p.property({type:["checkbox"]})],r.prototype,"type",void 0),o([p.property({type:s,json:{write:!0}})],r.prototype,"filterBlocks",void 0),i=o([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],r)}(p.declared(l))}.apply(null,o))||(e.exports=i)},1988:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(17),t(3),t(5),t(2),t(1989)],void 0===(i=function(e,r,t,o,i,n,p,l,a){var s=i.ofType(a);return function(e){function r(){return null!==e&&e.apply(this,arguments)||this}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({filterTypes:p.clone(this.filterTypes)})},o([l.property({type:s,json:{write:!0}})],r.prototype,"filterTypes",void 0),i=o([l.subclass("esri.layers.support.BuildingFilterAuthoringInfoBlock")],r)}(l.declared(n.JSONSupport))}.apply(null,o))||(e.exports=i)},1989:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(3),t(5),t(2)],void 0===(i=function(e,r,t,o,i,n,p){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterType=null,r.filterValues=null,r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({filterType:this.filterType,filterValues:n.clone(this.filterValues)})},o([p.property({type:String,json:{write:!0}})],r.prototype,"filterType",void 0),o([p.property({type:[String],json:{write:!0}})],r.prototype,"filterValues",void 0),i=o([p.subclass("esri.layers.support.BuildingFilterAuthoringInfoType")],r)}(p.declared(i.JSONSupport))}.apply(null,o))||(e.exports=i)},1990:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(3),t(5),t(2),t(1138),t(1991),t(1992)],void 0===(i=function(e,r,t,o,i,n,p,l,a,s){var u={types:{key:"type",base:l,typeMap:{solid:a,"wire-frame":s}},json:{read:function(e){switch(e&&e.type){case"solid":return a.fromJSON(e);case"wireFrame":return s.fromJSON(e);default:return null}},write:{enabled:!0,isRequired:!0}}};return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.filterExpression=null,r.filterMode=new a,r.title="",r}var i;return t(r,e),i=r,r.prototype.clone=function(){return new i({filterExpression:this.filterExpression,filterMode:n.clone(this.filterMode),title:this.title})},o([p.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"filterExpression",void 0),o([p.property(u)],r.prototype,"filterMode",void 0),o([p.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],r.prototype,"title",void 0),i=o([p.subclass("esri.layers.support.BuildingFilterBlock")],r)}(p.declared(i.JSONSupport))}.apply(null,o))||(e.exports=i)},1991:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(2),t(1138)],void 0===(i=function(e,r,t,o,i,n){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="solid",r}var n;return t(r,e),n=r,r.prototype.clone=function(){return new n},o([i.property({type:["solid"],readOnly:!0,json:{write:!0}})],r.prototype,"type",void 0),n=o([i.subclass("esri.layers.support.BuildingFilterModeSolid")],r)}(i.declared(n))}.apply(null,o))||(e.exports=i)},1992:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(5),t(2),t(1138),t(1993)],void 0===(i=function(e,r,t,o,i,n,p,l){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.type="wire-frame",r.edges=null,r}var p;return t(r,e),p=r,r.prototype.clone=function(){return new p({edges:i.clone(this.edges)})},o([n.enumeration.serializable()({wireFrame:"wire-frame"})],r.prototype,"type",void 0),o([n.property(l.symbol3dEdgesProperty)],r.prototype,"edges",void 0),p=o([n.subclass("esri.layers.support.BuildingFilterModeWireFrame")],r)}(n.declared(p))}.apply(null,o))||(e.exports=i)},1993:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1994),t(1995),t(1996)],void 0===(i=function(e,r,t,o,i){function n(e,r,t){if(!e)return e;switch(e.type){case"solid":return(n=new i).read(e,t),n;case"sketch":var n;return(n=new o).read(e,t),n}}Object.defineProperty(r,"__esModule",{value:!0}),r.read=n,r.symbol3dEdgesProperty={types:{key:"type",base:t,typeMap:{solid:i,sketch:o}},json:{read:n,write:!0}}}.apply(null,o))||(e.exports=i)},1994:function(e,r){},1995:function(e,r){},1996:function(e,r){},836:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(7),t(1),t(0),t(6),t(8),t(45),t(17),t(186),t(11),t(5),t(190),t(9),t(16),t(276),t(4),t(2),t(28),t(26),t(75),t(1243),t(1984),t(287),t(278),t(277),t(176),t(986),t(1985),t(172)],void 0===(i=function(e,r,o,i,n,p,l,a,s,u,y,d,c,f,v,h,b,g,S,m,w,x,I,O,j,N,T,F,M,R){var B=f.getLogger("esri.layers.BuildingSceneLayer"),P=s.ofType(M),E=d.clone(I.sublayersProperty);return E.json.origins["web-scene"]={type:[x],write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}},function(e){function r(r){var t=e.call(this)||this;return t.operationalLayerType="BuildingSceneLayer",t.allSublayers=new u({root:t,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return"building-group"===e.type?e.sublayers:null}}),t.sublayers=null,t.sublayerOverrides=null,t.filters=new P,t.activeFilterId=null,t.type="building-scene",t}return i(r,e),r.prototype.normalizeCtorArgs=function(e){return"string"==typeof e?{url:e}:e},r.prototype.readSublayers=function(e,r,t){var o=this,i=I.readSublayers(e,r,t);return I.forEachSublayer(i,(function(e){return e.layer=o})),this.sublayerOverrides&&(this.applySublayerOverrides(i,this.sublayerOverrides),this.sublayerOverrides=null),i},r.prototype.applySublayerOverrides=function(e,r){var t=r.overrides,o=r.context;I.forEachSublayer(e,(function(e){return e.read(t.get(e.id),o)}))},r.prototype.readSublayerOverrides=function(e,r){for(var t=new Map,o=0,i=e;o<i.length;o++){var n=i[o];null!=n&&"object"==typeof n&&"number"==typeof n.id?t.set(n.id,n):r.messages.push(new y("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}))}return{overrides:t,context:r}},r.prototype.writeSublayerOverrides=function(e,r,t){var o=[];I.forEachSublayer(this.sublayers,(function(e){var r=e.write({},t);Object.keys(r).length>1&&o.push(r)})),o.length>0&&(r.sublayers=o)},r.prototype.writeUnappliedOverrides=function(e,r){r.sublayers=[],e.overrides.forEach((function(e){r.sublayers.push(d.clone(e))}))},r.prototype.write=function(e,r){return e=this.inherited(arguments),r&&"web-scene"===r.origin&&(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e},r.prototype.read=function(e,r){if(this.inherited(arguments),r&&"web-scene"===r.origin&&null!=e&&Array.isArray(e.sublayers)){var t=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,t):this.sublayerOverrides=t}},Object.defineProperty(r.prototype,"elevationInfo",{set:function(e){this._set("elevationInfo",e),this._validateElevationInfo()},enumerable:!0,configurable:!0}),r.prototype.load=function(e){var r=this,t=v.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((function(){return r._fetchService(t)}),(function(){return r._fetchService(t)}));return this.addResolvingPromise(o),this.when()},r.prototype.loadAll=function(){var e=this;return a.safeCast(c.loadAll(this,(function(r){return I.forEachSublayer(e.sublayers,(function(e){"building-group"!==e.type&&r(e)}))})))},r.prototype.importLayerViewModule=function(e){return l(this,void 0,void 0,(function(){return p(this,(function(r){switch(e.type){case"2d":return[2,b.reject(new y("building-scene-layer:view-not-supported","BuildingSceneLayer is only supported in 3D"))];case"3d":return[2,b.create((function(e){return t.e(102).then(function(){var r=[t(2058)];e.apply(null,r)}.bind(this)).catch(t.oe)}))]}return[2]}))}))},r.prototype._validateLayer=function(e){if(!e.layerType||"Building"!==e.layerType)throw new y("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})},r.prototype._validateElevationInfo=function(){var e=this.elevationInfo;e&&("absolute-height"!==e.mode&&B.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&B.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))},n([g.property({type:["BuildingSceneLayer"]})],r.prototype,"operationalLayerType",void 0),n([g.property({readOnly:!0})],r.prototype,"allSublayers",void 0),n([g.property(E)],r.prototype,"sublayers",void 0),n([g.reader("service","sublayers")],r.prototype,"readSublayers",null),n([g.property({type:P,nonNullable:!0,json:{write:!0}})],r.prototype,"filters",void 0),n([g.property({type:String,json:{write:!0}})],r.prototype,"activeFilterId",void 0),n([g.property(R.readOnlyService(S))],r.prototype,"fullExtent",void 0),n([g.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),n([g.property(R.readOnlyService(m))],r.prototype,"spatialReference",void 0),n([g.property(R.elevationInfo)],r.prototype,"elevationInfo",null),n([g.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),n([g.subclass("esri.layers.BuildingSceneLayer")],r)}(g.declared(T.ScaleRangeLayer(F.SceneService(O.ArcGISService(j.OperationalLayer(N.PortalLayer(h.MultiOriginJSONMixin(w))))))))}.apply(null,o))||(e.exports=i)},986:function(e,r,t){var o,i;o=[t.dj.c(e.i),r,t(1),t(0),t(6),t(8),t(41),t(11),t(9),t(4),t(23),t(2),t(28),t(126),t(26),t(121),t(172)],void 0===(i=function(e,r,t,o,i,n,p,l,a,s,u,y,d,c,f,v,h){Object.defineProperty(r,"__esModule",{value:!0});var b=a.getLogger("esri.layers.mixins.SceneService");r.SceneService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.blendMode=null,r.spatialReference=null,r.fullExtent=null,r.heightModelInfo=null,r.minScale=0,r.maxScale=0,r.version={major:Number.NaN,minor:Number.NaN,versionString:""},r.copyright=null,r.sublayerTitleMode="item-title",r.title=null,r.layerId=null,r}return t(r,e),r.prototype.readSpatialReference=function(e,r){return this._readSpatialReference(r)},r.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return f.fromJSON(e.spatialReference);var r=e.store,t=r.indexCRS||r.geographicCRS,o=t&&parseInt(t.substring(t.lastIndexOf("/")+1,t.length),10);return null!=o?new f(o):null},r.prototype.readFullExtent=function(e,r){var t=r.store,o=this._readSpatialReference(r);return null==o||null==t||null==t.extent||!Array.isArray(t.extent)||t.extent.some((function(e){return e<g}))?null:new d({xmin:t.extent[0],ymin:t.extent[1],xmax:t.extent[2],ymax:t.extent[3],spatialReference:o})},r.prototype.readVersion=function(e,r){var t=r.store,o=null!=t.version?t.version.toString():"",i={major:Number.NaN,minor:Number.NaN,versionString:o},n=o.split(".");return n.length>=2&&(i.major=parseInt(n[0],10),i.minor=parseInt(n[1],10)),i},r.prototype.readTitlePortalItem=function(e,r){return"item-title"!==this.sublayerTitleMode?void 0:e},r.prototype.readTitleService=function(e,r){var t=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return v.titleFromUrlAndName(this.url,r.name);var o=r.name||v.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&t&&(o=t+" - "+o),v.cleanTitle(o)},r.prototype.readLayerId=function(e,r){return r.id},Object.defineProperty(r.prototype,"url",{set:function(e){var r=v.sanitizeUrlWithLayerId(this,e,b);this._set("url",r.url),null!=r.layerId&&this._set("layerId",r.layerId)},enumerable:!0,configurable:!0}),r.prototype.writeUrl=function(e,r,t,o){v.writeUrlWithLayerId(this,e,"layers",r,o)},Object.defineProperty(r.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var r=u.urlToObject(e);return null!=this.layerId&&v.match.test(r.path)&&(r.path=r.path+"/layers/"+this.layerId),r},enumerable:!0,configurable:!0}),r.prototype._verifyRootNodeAndUpdateExtent=function(e,r){return n(this,void 0,void 0,(function(){var t,o,n;return i(this,(function(i){switch(i.label){case 0:if(!e)return[3,4];i.label=1;case 1:return i.trys.push([1,3,,4]),t=this._updateExtentFromRootPage,o=[e],[4,this._fetchRootPage(e,r)];case 2:return[2,t.apply(this,o.concat([i.sent()]))];case 3:return i.sent(),[3,4];case 4:return n=this._updateExtentFromRootNode,[4,this._fetchRootNode(r)];case 5:return[2,n.apply(this,[i.sent()])]}}))}))},r.prototype._fetchRootPage=function(e,r){return n(this,void 0,void 0,(function(){var t,o;return i(this,(function(i){switch(i.label){case 0:return e?(t=Math.floor(e.rootIndex/e.nodesPerPage),o=this.parsedUrl.path+"/nodepages/"+t,[4,p(o,{responseType:"json",signal:r})]):[2,s.reject()];case 1:return[2,i.sent().data]}}))}))},r.prototype._updateExtentFromRootPage=function(e,r){if(null==r||null==r.nodes)throw new l("sceneservice:invalid-node-page","Inavlid node page.");var t=r.nodes[e.rootIndex%e.nodesPerPage];if(null==t||null==t.obb||null==t.obb.center||null==t.obb.halfSize)throw new l("sceneservice:invalid-node-page","Inavlid node page.");var o=t.obb.halfSize,i=t.obb.center[2],n=Math.sqrt(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]);this.fullExtent.zmin=i-n,this.fullExtent.zmax=i+n},r.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var r=e.mbs[2],t=e.mbs[3];this.fullExtent.zmin=r-t,this.fullExtent.zmax=r+t}},r.prototype._fetchRootNode=function(e){return n(this,void 0,void 0,(function(){var r,t;return i(this,(function(o){switch(o.label){case 0:if(!this.rootNode)return[2];r=u.join(this.parsedUrl.path,this.rootNode),o.label=1;case 1:return o.trys.push([1,3,,4]),[4,p(r,{query:{f:"json"},responseType:"json",signal:e})];case 2:return[2,o.sent().data];case 3:throw t=o.sent(),new l("sceneservice:root-node-missing","Root node missing.",{error:t,url:r});case 4:return[2]}}))}))},r.prototype._fetchService=function(e){return n(this,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return null==this.layerId&&/SceneServer\/*$/i.test(this.url)?[4,this._fetchFirstLayerId(e)]:[3,2];case 1:null!=(r=t.sent())&&(this.layerId=r),t.label=2;case 2:return[2,this._fetchServiceLayer(e)]}}))}))},r.prototype._fetchFirstLayerId=function(e){return n(this,void 0,void 0,(function(){var r;return i(this,(function(t){switch(t.label){case 0:return[4,p(this.url,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(r=t.sent()).data&&Array.isArray(r.data.layers)&&r.data.layers.length>0?[2,r.data.layers[0].id]:[2,void 0]}}))}))},r.prototype._fetchServiceLayer=function(e){return n(this,void 0,void 0,(function(){var r,t;return i(this,(function(o){switch(o.label){case 0:return[4,p(this.parsedUrl.path,{query:{f:"json"},responseType:"json",signal:e})];case 1:return(r=o.sent()).ssl&&(this.url=this.url.replace(/^http:/i,"https:")),t=r.data,this.read(t,{origin:"service",url:this.parsedUrl}),this._validateLayer(t),[2]}}))}))},r.prototype._validateLayer=function(e){},o([y.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],r.prototype,"properties",void 0),o([y.property({type:f})],r.prototype,"spatialReference",void 0),o([y.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readSpatialReference",null),o([y.property({type:d})],r.prototype,"fullExtent",void 0),o([y.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],r.prototype,"readFullExtent",null),o([y.property({readOnly:!0,type:c})],r.prototype,"heightModelInfo",void 0),o([y.property({type:Number,json:{read:{source:"layerDefinition.minScale"},write:{target:"layerDefinition.minScale"},origins:{service:{read:{source:"minScale"},write:!1}}}})],r.prototype,"minScale",void 0),o([y.property({type:Number,json:{read:{source:"layerDefinition.maxScale"},write:{target:"layerDefinition.maxScale"},origins:{service:{read:{source:"maxScale"},write:!1}}}})],r.prototype,"maxScale",void 0),o([y.property({readOnly:!0})],r.prototype,"version",void 0),o([y.reader("version",["store.version"])],r.prototype,"readVersion",null),o([y.property({type:String,json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([y.property({type:String,json:{read:!1}})],r.prototype,"sublayerTitleMode",void 0),o([y.property({type:String})],r.prototype,"title",void 0),o([y.reader("portal-item","title")],r.prototype,"readTitlePortalItem",null),o([y.reader("service","title",["name"])],r.prototype,"readTitleService",null),o([y.property({type:Number})],r.prototype,"layerId",void 0),o([y.reader("service","layerId",["id"])],r.prototype,"readLayerId",null),o([y.property(h.url)],r.prototype,"url",null),o([y.writer("url")],r.prototype,"writeUrl",null),o([y.property({dependsOn:["layerId"]})],r.prototype,"parsedUrl",null),o([y.property({readOnly:!0})],r.prototype,"store",void 0),o([y.property({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],r.prototype,"rootNode",void 0),o([y.subclass("esri.layers.mixins.SceneService")],r)}(y.declared(e))};var g=-1e38}.apply(null,o))||(e.exports=i)}}]);