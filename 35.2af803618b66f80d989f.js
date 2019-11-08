(function(){(this||window).webpackJsonp.registerAbsMids({"esri/views/layers/LayerView":891,"esri/views/layers/GroupLayerView":1430})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1430:function(e,i,t){var r,n;r=[t.dj.c(e.i),i,t(1),t(0),t(17),t(94),t(21),t(2),t(891)],void 0===(n=function(e,i,t,r,n,s,a,l,o){return function(e){function i(i){var t=e.call(this,i)||this;return t.layerViews=new n,t}return t(i,e),i.prototype.initialize=function(){var e=this;this._watchHandles=new a,this._watchHandles.add(this.layerViews.on("change",(function(i){return e._layerViewsChangeHandler(i)}))),this._watchHandles.add(this.layerViews.on("after-changes",this._layerViewsAfterChangesHandler.bind(this))),this._watchHandles.add(this.layer.watch("visibilityMode",this._visibilityModeHandler.bind(this),!0)),this._watchHandles.add(this.watch("visible",this._visibleHandler.bind(this),!0)),this._layerViewsChangeHandler({target:null,added:this.layerViews.toArray(),removed:[],moved:[]}),this._layerViewsAfterChangesHandler()},i.prototype.destroy=function(){this._watchHandles&&(this._watchHandles.destroy(),this._watchHandles=null)},Object.defineProperty(i.prototype,"layerViews",{set:function(e){this._set("layerViews",s.referenceSetter(e,this._get("layerViews")))},enumerable:!0,configurable:!0}),i.prototype.isUpdating=function(){return this.layerViews.some((function(e){return e.updating}))},i.prototype._hasLayerViewVisibleOverrides=function(){return this.layerViews.some((function(e){return e._isOverridden("visible")}))},i.prototype._findLayerViewForLayer=function(e){return e&&this.layerViews.find((function(i){return i.layer===e}))},i.prototype._firstVisibleOnLayerOrder=function(){var e=this,i=this.layer.layers.find((function(i){var t=e._findLayerViewForLayer(i);return t&&t.visible}));return i&&this._findLayerViewForLayer(i)},i.prototype._enforceExclusiveVisibility=function(e){this._hasLayerViewVisibleOverrides()&&(e||!(e=this._firstVisibleOnLayerOrder())&&this.layerViews.length>0&&(e=this._findLayerViewForLayer(this.layer.layers.getItemAt(0))),this.layerViews.forEach((function(i){i.visible=i===e})))},i.prototype._layerViewsChangeHandler=function(e){var i=this;this._watchHandles.remove("visible"),this._watchHandles.add(this.layerViews.map((function(e){return e.watch("visible",i._layerViewVisibleHandler.bind(i),!0)})).toArray(),"visible");var t=e.added[e.added.length-1],r=null;t&&t.visible&&(r=t),this._enforceVisibility(r)},i.prototype._layerViewsAfterChangesHandler=function(){var e=this;this._watchHandles.remove("updating"),this._watchHandles.add(this.layerViews.map((function(i){return i.watch("updating",(function(){return e._updateUpdating()}),!0)})).toArray(),"updating"),this._updateUpdating()},i.prototype._enforceVisibility=function(e){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":var i=this.visible;this.layerViews.forEach((function(e){e.visible=i}));break;case"exclusive":this._enforceExclusiveVisibility(e)}},i.prototype._visibilityModeHandler=function(e){this._enforceVisibility()},i.prototype._layerViewVisibleHandler=function(e,i,t,r){if(this._hasLayerViewVisibleOverrides())switch(this.layer.visibilityMode){case"inherited":e!==this.visible&&(r.visible=this.visible);break;case"exclusive":this._enforceExclusiveVisibility(e&&r)}},i.prototype._visibleHandler=function(){this._hasLayerViewVisibleOverrides()&&"inherited"===this.layer.visibilityMode&&this._enforceVisibility()},i.prototype._updateUpdating=function(){this.notifyChange("updating")},r([l.property({cast:s.castForReferenceSetter})],i.prototype,"layerViews",null),r([l.subclass("esri.views.layers.GroupLayerView")],i)}(l.declared(o))}.apply(null,r))||(e.exports=n)},891:function(e,i,t){var r,n;r=[t.dj.c(e.i),i,t(1),t(0),t(10),t(49),t(116),t(175),t(9),t(91),t(4),t(2)],void 0===(n=function(e,i,t,r,n,s,a,l,o,d,y,p){return function(e){function i(i){var t=e.call(this)||this;return t.layer=null,t.parent=null,t}return t(i,e),i.prototype.initialize=function(){var e=this;this.addResolvingPromise(this.layer),this.when().catch((function(i){if("layerview:create-error"!==i.name){var t=e.layer&&e.layer.id||"no id",r=e.layer&&e.layer.title||"no title";return o.getLogger(e.declaredClass).error("#resolve()","Failed to resolve layer view (layer title: '"+r+"', id: '"+t+"')",i),y.reject(i)}}))},i.prototype.destroy=function(){this.layer=this.parent=null},Object.defineProperty(i.prototype,"fullOpacity",{get:function(){var e=function(e){return null==e?1:e};return e(this.get("layer.opacity"))*e(this.get("parent.fullOpacity"))},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"suspended",{get:function(){return!this.canResume()},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"updating",{get:function(){return!!(this.updatingHandles&&this.updatingHandles.updating||this.isUpdating())},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"visible",{get:function(){return!0===this.get("layer.visible")},set:function(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")},enumerable:!0,configurable:!0}),i.prototype.canResume=function(){return!this.get("parent.suspended")&&this.get("view.ready")&&this.get("layer.loaded")&&this.visible||!1},i.prototype.isUpdating=function(){return!1},r([p.property({dependsOn:["layer.opacity","parent.fullOpacity"]})],i.prototype,"fullOpacity",null),r([p.property()],i.prototype,"layer",void 0),r([p.property()],i.prototype,"parent",void 0),r([p.property({readOnly:!0,dependsOn:["visible","layer.loaded","parent.suspended"]})],i.prototype,"suspended",null),r([p.property({type:Boolean,dependsOn:["updatingHandles.updating"],readOnly:!0})],i.prototype,"updating",null),r([p.property({dependsOn:["layer.visible"]})],i.prototype,"visible",null),r([p.subclass("esri.views.layers.LayerView")],i)}(p.declared(a.HandleOwnerMixin(l.IdentifiableMixin(d.EsriPromiseMixin(s.EventedMixin(n))))))}.apply(null,r))||(e.exports=n)}}]);