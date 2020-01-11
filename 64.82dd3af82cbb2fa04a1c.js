(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/2d/engine/webgl/definitions":611,"esri/views/layers/support/ClipArea":613,"esri/views/2d/engine/vectorTiles/GeometryUtils":616,"esri/views/layers/LayerView":627,"esri/views/2d/layers/LayerView2D":637,"esri/views/layers/support/ClipRect":645,"esri/views/layers/support/Geometry":646,"esri/views/layers/support/Path":647,"esri/views/layers/support/popupUtils":757,"esri/views/2d/layers/BitmapLayerView2D":762,"esri/views/2d/layers/support/ExportStrategy":763,"esri/views/2d/viewStateUtils":764,"esri/views/2d/layers/ImageryLayerView2D":1494,"esri/views/layers/ImageryLayerView":1495})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1494:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(6),r(8),r(58),r(9),r(4),r(19),r(14),r(2),r(976),r(914),r(762),r(637),r(763),r(1495),r(627),r(293)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l,d,c,y,h,f,v,g,_,m){var T=p.getLogger("esri.views.2d.layers.ImageryLayerView2D");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._exportImageVersion=-1,t}return r(t,e),Object.defineProperty(t.prototype,"pixelData",{get:function(){if(this.updating)return null;var e=this.strategy.container.children;if(1===e.length&&e[0].source)return{extent:e[0].source.extent,pixelBlock:e[0].source.originalPixelBlock};if(e.length>1){var t=this.view.extent,r=e.map((function(e){return e.source})).filter((function(e){return e.extent&&e.extent.intersects(t)})).map((function(e){return{extent:e.extent,pixelBlock:e.originalPixelBlock}})),i=c.mosaicPixelData(r,t);return i?{extent:i.extent,pixelBlock:i.pixelBlock}:null}return null},enumerable:!0,configurable:!0}),t.prototype.hitTest=function(e,t){if(this.suspended)return s.resolve(null);var r=this.view.toMap(u.createScreenPoint(e,t));return s.resolve(new a({attributes:{},geometry:r}))},t.prototype.update=function(e){this.strategy.update(e)},t.prototype.attach=function(){var e=this;this.layer.increaseRasterJobHandlerUsage();var t=this.layer.version>=10,r=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,i=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new v({container:this.container,imageNormalizationSupported:t,imageMaxHeight:r,imageMaxWidth:i,fetchSource:this.fetchImage.bind(this),requestUpdate:function(){return e.requestUpdate()}}),this.handles.add([l.init(this,"layer.exportImageServiceParameters.version",(function(t){e._exportImageVersion!==t&&(e._exportImageVersion=t,e.requestUpdate())})),this.watch("timeExtent",(function(){return e.requestUpdate()})),this.layer.on("redraw",(function(){e.strategy.updateExports((function(t){t.source instanceof HTMLImageElement?t.requestRender():e.layer.applyRenderer({pixelBlock:t.source.pixelBlock}).then((function(r){var i=t.source;i.pixelBlock=r.pixelBlock,i.filter=function(t){return e.layer.applyFilter(t)},e.container.requestRender()}))}))}))],"imagerylayerview-update")},t.prototype.detach=function(){this.layer.decreaseRasterJobHandlerUsage(),this.strategy.destroy(),this.container.removeAllChildren(),this.handles.remove("imagerylayerview-update"),this._exportImageVersion=-1},t.prototype.moveStart=function(){},t.prototype.viewChange=function(){},t.prototype.moveEnd=function(){this.requestUpdate()},t.prototype.doRefresh=function(e){return o(this,void 0,void 0,(function(){return n(this,(function(e){return this.requestUpdate(),[2]}))}))},t.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)},t.prototype.fetchImage=function(e,t,r,i){var n=this;return this._exportImageVersion=this.get("layer.exportImageServiceParameters.version"),(i=i||{}).timeExtent=this.timeExtent,i.requestAsImageElement=!0,this.layer.fetchImage(e,t,r,i).then((function(e){return e.imageElement?e.imageElement:n.layer.applyRenderer(e.pixelData,{signal:i.signal}).then((function(t){var r=new y.default(t.pixelBlock,t.extent.clone(),e.pixelData.pixelBlock);return r.filter=function(e){return n.layer.applyFilter(e)},r}))})).catch((function(e){throw s.isAbortError(e)||T.error(e),e}))},i([d.property({dependsOn:["updating"]})],t.prototype,"pixelData",null),i([d.property()],t.prototype,"strategy",void 0),i([d.property({dependsOn:["strategy.updating"]})],t.prototype,"updating",void 0),i([d.subclass("esri.views.2d.layers.ImageryLayerView2D")],t)}(d.declared(g.ImageryLayerView(m.RefreshableLayerView(h.BitmapLayerView2D(f.LayerView2D(_))))))}.apply(null,i))||(e.exports=n)},1495:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(6),r(8),r(11),r(16),r(4),r(2),r(31),r(132),r(275),r(757)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l,d,c,y){Object.defineProperty(t,"__esModule",{value:!0}),t.ImageryLayerView=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.view=null,t}return r(t,e),t.prototype.fetchPopupFeatures=function(e,t){return o(this,void 0,void 0,(function(){var r,i,o,u,d,h,f,v,g,_,m;return n(this,(function(n){switch(n.label){case 0:if(r=this.layer,!e)return[2,s.reject(new a("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:r}))];if(i=r.popupEnabled,o=y.getFetchPopupTemplate(r,t),!i||!p.isSome(o))throw new a("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:o});return[4,o.getRequiredFields()];case 1:return u=n.sent(),(d=new c).geometry=e,d.outFields=u,d.outSpatialReference=e.spatialReference,h=this.view.resolution,f="2d"===this.view.type?new l(h,h,this.view.spatialReference):new l(.5*h,.5*h,this.view.spatialReference),v=o.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},g=v.returnTopmostRaster,_=v.showNoDataRecords,m={returnDomainValues:!0,returnTopmostRaster:g,pixelSize:f,showNoDataRecords:_},[2,r.queryVisibleRasters(d,m).then((function(e){return e}))]}}))}))},i([u.property()],t.prototype,"layer",void 0),i([u.property()],t.prototype,"view",void 0),i([u.property(d.combinedViewLayerTimeExtentProperty)],t.prototype,"timeExtent",void 0),i([u.subclass("esri.views.layers.ImageryLayerView")],t)}(u.declared(e))}}.apply(null,i))||(e.exports=n)},611:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.WEBGL_MAX_STOPS=8,t.WEBGL_MAX_INNER_STOPS=t.WEBGL_MAX_STOPS-2,t.NAN_MAGIC_NUMBER=1e-30,t.EXTRUDE_SCALE=64,t.PICTURE_FILL_COLOR=4294967295,t.TILE_SIZE=512,t.RASTER_TILE_SIZE=256,t.ANGLE_FACTOR_256=256/360,t.DEBUG_LABELS=!1,t.COLLISION_BUCKET_SIZE=128,t.DOT_DENSITY_MAX_FIELDS=8,t.COLLISION_MAX_ZOOM_DELTA=3,t.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,t.COLLISION_BOX_PADDING=16,t.COLLISION_TILE_BOX_SIZE=t.TILE_SIZE/t.COLLISION_BUCKET_SIZE,t.COLLISION_PLACEMENT_PADDING=8,t.HEURISTIC_GLYPHS_PER_LINE=50,t.HEURISTIC_GLYPHS_PER_FEATURE=10,t.GLYPH_SIZE=24,t.TEXT_LINE_HEIGHT=1.2*t.GLYPH_SIZE,t.TEXT_MAX_WIDTH=10*t.GLYPH_SIZE,t.TEXT_SPACING=0,t.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},t.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,t.TEXTURE_BINDING_SPRITE_ATLAS=0,t.TEXTURE_BINDING_GLYPH_ATLAS=0,t.TEXTURE_BINDING_BITMAP=0,t.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,t.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,t.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,t.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,t.TEXTURE_BINDING_HIGHLIGHT_0=5,t.TEXTURE_BINDING_HIGHLIGHT_1=6,t.TEXTURE_BINDING_RENDERER_0=5,t.TEXTURE_BINDING_RENDERER_1=6,t.ATTRIBUTE_DATA_FILTER_FLAGS=0,t.ATTRIBUTE_DATA_ANIMATION=1,t.ATTRIBUTE_DATA_VV=2,t.ATTRIBUTE_DATA_DD0=3,t.ATTRIBUTE_DATA_DD1=3,t.MAX_FILTERS=2,t.HIGHLIGHT_FLAG=1,t.FILTER_FLAG_0=2,t.EFFECT_FLAG_0=4,t.THIN_LINE_THRESHOLD=2.5,t.HITTEST_SEARCH_SIZE=24,t.MAX_ANIMATION_TIME_MS=2e3}.apply(null,i))||(e.exports=n)},613:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(3),r(2)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),r([o.subclass("esri.views.layers.support.ClipArea")],t)}(o.declared(n.JSONSupport))}.apply(null,i))||(e.exports=n)},616:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e,t){return(e%=t)>=0?e:e+t}Object.defineProperty(t,"__esModule",{value:!0}),t.C_INFINITY=Number.POSITIVE_INFINITY,t.C_PI=Math.PI,t.C_2PI=2*t.C_PI,t.C_PI_BY_2=t.C_PI/2,t.C_RAD_TO_256=128/t.C_PI,t.C_256_TO_RAD=t.C_PI/128,t.C_DEG_TO_256=256/360,t.C_DEG_TO_RAD=t.C_PI/180,t.C_SQRT2=1.414213562,t.C_SQRT2_INV=1/t.C_SQRT2;var i=1/Math.LN2;t.positiveMod=r,t.radToByte=function(e){return r(e*t.C_RAD_TO_256,256)},t.degToByte=function(e){return r(e*t.C_DEG_TO_256,256)},t.log2=function(e){return Math.log(e)*i},t.sqr=function(e){return e*e},t.interpolate=function(e,t,r){return e*(1-r)+t*r},t.between=function(e,t,r){return e>=t&&e<=r||e>=r&&e<=t}}.apply(null,i))||(e.exports=n)},627:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(10),r(50),r(118),r(177),r(9),r(93),r(4),r(2)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l,d){return function(e){function t(t){var r=e.call(this)||this;return r.layer=null,r.parent=null,r}return r(t,e),t.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch((function(t){if("layerview:create-error"!==t.name){var r=e.layer&&e.layer.id||"no id",i=e.layer&&e.layer.title||"no title";return s.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+i+"', id: '"+r+"')",t),l.reject(t)}}))},t.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(t.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),t.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},t.prototype.isUpdating=function(){return!1},i([d.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],t.prototype,"fullOpacity",null),i([d.property()],t.prototype,"layer",void 0),i([d.property()],t.prototype,"parent",void 0),i([d.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],t.prototype,"suspended",null),i([d.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],t.prototype,"updating",null),i([d.property({dependsOn:["layer.visible"]})],t.prototype,"visible",null),i([d.subclass("esri.views.layers.LayerView")],t)}(d.declared(a.HandleOwnerMixin(p.IdentifiableMixin(u.EsriPromiseMixin(o.EventedMixin(n))))))}.apply(null,i))||(e.exports=n)},637:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(1),r(0),r(17),r(96),r(14),r(2),r(613),r(645),r(646),r(647)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l,d){Object.defineProperty(t,"__esModule",{value:!0});var c=n.ofType({key:"type",base:s,typeMap:{rect:u,path:d,geometry:l}});t.LayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.clips=new c,t.moving=!1,t.attached=!1,t.lastUpdateId=-1,t.updateRequested=!1,t}return r(t,e),t.prototype.initialize=function(){var e=this;this.when((function(){e.requestUpdate()}),(function(){}));var t=function(){return e.notifyChange("rendering")};this.handles.add([a.init(this,"suspended",(function(t){e.container&&(e.container.visible=!t),e.view&&!t&&e.updateRequested&&e.view.requestLayerViewUpdate(e)}),!0),a.init(this,"fullOpacity",(function(t){e.container&&(e.container.opacity=t)}),!0),a.on(this,"container","post-render",t),a.on(this,"container","will-render",t)])},t.prototype.destroy=function(){this.attached&&(this.attached=!1,this.detach()),this.handles.remove("initialize"),this.updateRequested=!1,this.layer=null,this.view=null},Object.defineProperty(t.prototype,"rendering",{get:function(){return this.attached&&!this.suspended&&(this.moving||this.container.renderRequested||this.isRendering())},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.suspended&&(!this.attached||this.updateRequested||this.isUpdating())},enumerable:!0,configurable:!0}),t.prototype.isVisibleAtScale=function(e){var t=!0,r=this.layer,i=r.minScale,n=r.maxScale;if(null!=i&&null!=n){var o=!i,a=!n;!o&&e<=i&&(o=!0),!a&&e>=n&&(a=!0),t=o&&a}return t},t.prototype.requestUpdate=function(){this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestLayerViewUpdate(this))},t.prototype.processUpdate=function(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1},t.prototype.isUpdating=function(){return!1},t.prototype.isRendering=function(){return!1},t.prototype.canResume=function(){var e=this.inherited(arguments);return e&&(e=this.isVisibleAtScale(this.view.scale)),e},i([p.property({type:c,set:function(e){var t=o.referenceSetter(e,this._get("clips"),c);this._set("clips",t)}})],t.prototype,"clips",void 0),i([p.property()],t.prototype,"moving",void 0),i([p.property({dependsOn:["attached","suspended","moving"]})],t.prototype,"rendering",null),i([p.property()],t.prototype,"attached",void 0),i([p.property()],t.prototype,"container",void 0),i([p.property({dependsOn:["view.scale","layer.minScale","layer.maxScale"]})],t.prototype,"suspended",void 0),i([p.property({readOnly:!0})],t.prototype,"updateParameters",void 0),i([p.property()],t.prototype,"updateRequested",void 0),i([p.property({dependsOn:["updateRequested","attached","suspended"]})],t.prototype,"updating",null),i([p.property()],t.prototype,"view",void 0),i([p.subclass("esri.views.2d.layers.LayerView2D")],t)}(p.declared(e))}}.apply(null,i))||(e.exports=n)},645:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(613)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="rect",t.left=null,t.right=null,t.top=null,t.bottom=null,t}var o;return i(t,e),o=t,t.prototype.clone=function(){return new o({left:this.left,right:this.right,top:this.top,bottom:this.bottom})},Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"left",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"right",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"top",void 0),r([n.property({type:[Number,String],json:{write:!0}})],t.prototype,"bottom",void 0),r([n.property({readOnly:!0,dependsOn:["left","right","top","bottom"]})],t.prototype,"version",null),o=r([n.subclass("esri.views.layers.support.ClipRect")],t)}(n.declared(o))}.apply(null,i))||(e.exports=n)},646:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(20),r(2),r(46),r(56),r(613)],void 0===(n=function(e,t,r,i,n,o,a,p,s){var u={base:a,key:"type",typeMap:{extent:n.Extent,polygon:n.Polygon}};return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="geometry",t.geometry=null,t}var n;return i(t,e),n=t,Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({geometry:this.geometry.clone()})},r([o.property({types:u,json:{read:p.fromJSON,write:!0}})],t.prototype,"geometry",void 0),r([o.property({readOnly:!0,dependsOn:["geometry"]})],t.prototype,"version",null),n=r([o.subclass("esri.views.layers.support.Geometry")],t)}(o.declared(s))}.apply(null,i))||(e.exports=n)},647:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(613)],void 0===(n=function(e,t,r,i,n,o){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="path",t.path=[],t}return i(t,e),Object.defineProperty(t.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),r([n.property({type:[[[Number]]],json:{write:!0}})],t.prototype,"path",void 0),r([n.property({readOnly:!0,dependsOn:["path"]})],t.prototype,"version",null),r([n.subclass("esri.views.layers.support.Path")],t)}(n.declared(o))}.apply(null,i))||(e.exports=n)},757:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(6),r(8),r(81),r(16),r(36)],void 0===(n=function(e,t,r,i,n,o,a){Object.defineProperty(t,"__esModule",{value:!0}),t.getRequiredFields=function(e,t){return void 0===t&&(t=e.popupTemplate),i(this,void 0,void 0,(function(){var i,p,s,u,l,d,c,y,h,f,v;return r(this,(function(r){switch(r.label){case 0:return o.isSome(t)?[4,t.getRequiredFields(e.fields)]:[2,[]];case 1:return i=r.sent(),p=t.lastEditInfoEnabled,s=e.objectIdField,u=e.typeIdField,n.includes(i,"*")?[2,["*"]]:(d=a.fixFields,c=[e.fields],h=(y=i).concat,f=[[u]],(v=p)?[4,a.getFeatureEditFields(e)]:[3,3]);case 2:v=r.sent(),r.label=3;case 3:return(l=d.apply(void 0,c.concat([h.apply(y,f.concat([v||null]))])))&&s&&a.hasField(e.fields,s)&&-1===l.indexOf(s)&&l.push(s),[2,l]}}))}))},t.getFetchPopupTemplate=function(e,t){return e.popupTemplate?e.popupTemplate:o.isSome(t)&&t.defaultPopupTemplateEnabled&&o.isSome(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}}.apply(null,i))||(e.exports=n)},762:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(0),r(1),r(2),r(777)],void 0===(n=function(e,t,r,i,n,o){Object.defineProperty(t,"__esModule",{value:!0}),t.BitmapLayerView2D=function(e){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.container=new o.BitmapContainer(t.clips),t}return i(t,e),t.prototype.initialize=function(){var e=this;this.handles.add(this.clips.on("change",(function(){return e.container.setClips(e.clips)})))},r([n.subclass("esri.views.2d.layers.BitmapLayerView2D")],t)}(n.declared(e))}}.apply(null,i))||(e.exports=n)},763:function(e,t,r){var i,n;i=[r.dj.c(e.i),t,r(7),r(6),r(8),r(1),r(0),r(10),r(4),r(2),r(30),r(170),r(38),r(176),r(561),r(764),r(294),r(91)],void 0===(n=function(e,t,r,i,n,o,a,p,s,u,l,d,c,y,h,f,v,g){var _=d.create(),m=[0,0],T=new g(0,0,0,0),E={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};return function(e){function t(t){var r=e.call(this,t)||this;return r._imagePromise=null,r.hidpi=E.hidpi,r.imageMaxWidth=E.imageMaxWidth,r.imageMaxHeight=E.imageMaxHeight,r.imageRotationSupported=E.imageRotationSupported,r.imageNormalizationSupported=E.imageNormalizationSupported,r.update=s.debounce((function(e){return n(r,void 0,void 0,(function(){var t,r,n,o,a,p,u,l,d,y=this;return i(this,(function(i){return t=e.state,r=c.getInfo(t.spatialReference),n=this.hidpi?e.pixelRatio:1,!e.stationary||this.destroyed?[2]:(this.imageRotationSupported?(m[0]=t.size[0],m[1]=t.size[1]):f.getOuterSize(m,t),o=Math.floor(m[0]*n)>this.imageMaxWidth||Math.floor(m[1]*n)>this.imageMaxHeight,a=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),p=!this.imageNormalizationSupported&&a,u=!o&&!p,l=this.imageRotationSupported?t.rotation:0,u?this._imagePromise=this._singleExport(t,m,l,n):(d=Math.min(this.imageMaxWidth,this.imageMaxHeight),p&&(d=Math.min(t.worldScreenWidth,d)),this._imagePromise=this._tiledExport(t,d,l,n)),[2,this._imagePromise.then((function(e){y._imagePromise=null;var t=y.container.children.slice();y.container.removeAllChildren(),e.forEach(y.container.addChild,y.container),y.disposeSource&&t.forEach((function(e){y.disposeSource(e.source)}),y)})).catch((function(e){if(y._imagePromise=null,!s.isAbortError(e))throw e}))])}))}))})),r}return o(t,e),t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var i=r[t];if(!i.visible||!i.attached)return;e(i)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(i.invalidateTexture(),i.requestRender())}},t.prototype._export=function(e,t,r,i,n){var o=this;return s.resolve().then((function(){return o.fetchSource(e,Math.floor(t*n),Math.floor(r*n),{rotation:i,pixelRatio:n})})).then((function(r){var o=new h.Bitmap(r);return o.x=e.xmin,o.y=e.ymax,o.resolution=e.width/t,o.rotation=i,o.pixelRatio=n,o}))},t.prototype._singleExport=function(e,t,r,i){f.getBBox(_,e.center,e.resolution,t);var n=new l(_[0],_[1],_[2],_[3],e.spatialReference);return this._export(n,t[0],t[1],r,i).then((function(e){return[e]}))},t.prototype._tiledExport=function(e,t,r,i){var n=this,o=y.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),a=new v(o),p=a.getTileCoverage(e);if(!p)return null;var u=[];return p.forEach((function(o,p,s,d){T.set(o,p,s,d),a.getTileBounds(_,T);var c=new l(_[0],_[1],_[2],_[3],e.spatialReference);u.push(n._export(c,t,t,r,i))})),s.all(u)},a([u.property()],t.prototype,"_imagePromise",void 0),a([u.property()],t.prototype,"container",void 0),a([u.property()],t.prototype,"disposeSource",void 0),a([u.property()],t.prototype,"fetchSource",void 0),a([u.property()],t.prototype,"hidpi",void 0),a([u.property()],t.prototype,"imageMaxWidth",void 0),a([u.property()],t.prototype,"imageMaxHeight",void 0),a([u.property()],t.prototype,"imageRotationSupported",void 0),a([u.property()],t.prototype,"imageNormalizationSupported",void 0),a([u.property()],t.prototype,"requestUpdate",void 0),a([u.property({dependsOn:["_imagePromise"]})],t.prototype,"updating",null),a([u.subclass("esri.views.2d.layers.support.ExportStrategy")],t)}(u.declared(p))}.apply(null,i))||(e.exports=n)},764:function(e,t,r){var i,n;i=[r.dj.c(e.i),t],void 0===(n=function(e,t){function r(e){return e*i}Object.defineProperty(t,"__esModule",{value:!0});var i=Math.PI/180;t.snapToPixel=function(e,t,r){var i=r.resolution,n=r.size;return e[0]=i*(Math.round(t[0]/i)+n[0]%2*.5),e[1]=i*(Math.round(t[1]/i)+n[1]%2*.5),e},t.getOuterSize=function(e,t){var i=r(t.rotation),n=Math.abs(Math.cos(i)),o=Math.abs(Math.sin(i)),a=t.size,p=a[0],s=a[1];return e[0]=Math.round(s*o+p*n),e[1]=Math.round(s*n+p*o),e},t.getBBox=function(e,t,r,i){var n=t[0],o=t[1],a=i[0],p=i[1],s=.5*r;return e[0]=n-s*a,e[1]=o-s*p,e[2]=n+s*a,e[3]=o+s*p,e},t.bboxIntersects=function(e,t){var r=e[0],i=e[1],n=e[2],o=e[3],a=t[0],p=t[1],s=t[2],u=t[3];return!(r>s||n<a||i>u||o<p)}}.apply(null,i))||(e.exports=n)}}]);