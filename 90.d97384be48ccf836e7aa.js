(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/sources/support/CSVSourceWorker":584,"dstore/Csv":858})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{584:function(e,i,t){var n,r;n=[t.dj.c(e.i),i,t(6),t(8),t(773),t(858),t(20),t(41),t(11),t(15),t(5),t(4),t(23),t(842),t(38),t(28),t(619),t(612),t(673),t(621),t(674),t(859),t(277)],void 0===(r=function(e,i,t,n,r,l,o,a,s,u,d,f,c,p,m,h,y,g,v,F,N,I,w){Object.defineProperty(i,"__esModule",{value:!0});var _=I.createDrawingInfo("esriGeometryPoint"),b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"];i.csvLatitudeFieldNames=["lat","latitude","y","ycenter","latitude83","latdecdeg","point-y"],i.csvLongitudeFieldNames=["lon","lng","long","longitude","x","xcenter","longitude83","longdecdeg","point-x"],i.csvDetectedDelimiters=[","," ",";","|","\t"];var x=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,T=[0,0],D=function(e,i){this.x=e,this.y=i},E=function(){var e=r._parseInfo(),i=new RegExp("^"+e.regexp+"$"),t=new RegExp("["+e.group+"\\s\\xa0]","g"),n=e.factor;return function(r){var l=i.exec(r);if(e.factor=n,!l)return NaN;var o=l[1];if(!l[1]){if(!l[2])return NaN;o=l[2],e.factor*=-1}return+(o=o.replace(t,"").replace(e.decimal,"."))*e.factor}}(),S="isInteger"in Number?Number.isInteger:function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},O=function(){function e(){this._fieldsIndex=null,this._queryEngine=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null},e.prototype.load=function(e,i){return void 0===i&&(i={}),n(this,void 0,void 0,(function(){var n,r,l,o,a;return t(this,(function(t){switch(t.label){case 0:return[4,f.all([this._fetch(e.url,i),this._checkProjection(i&&e.parsing&&e.parsing.spatialReference)])];case 1:return n=t.sent()[0],r=this._parse(n,e.parsing),this._queryEngine=this._createQueryEngine(n,r),r.layerDefinition.extent=this._queryEngine.fullExtent,r.layerDefinition.timeInfo&&(l=this._queryEngine.timeExtent,o=l.start,a=l.end,r.layerDefinition.timeInfo.timeExtent=[o,a]),[2,r]}}))}))},e.prototype.applyEdits=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(e){throw new s("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}))}))},e.prototype.queryFeatures=function(e,i){return void 0===e&&(e={}),void 0===i&&(i={}),n(this,void 0,void 0,(function(){return t(this,(function(t){return[2,this._queryEngine.executeQuery(e,i.signal)]}))}))},e.prototype.queryFeatureCount=function(e,i){return void 0===e&&(e={}),void 0===i&&(i={}),n(this,void 0,void 0,(function(){return t(this,(function(t){return[2,this._queryEngine.executeQueryForCount(e,i.signal)]}))}))},e.prototype.queryObjectIds=function(e,i){return void 0===e&&(e={}),void 0===i&&(i={}),n(this,void 0,void 0,(function(){return t(this,(function(t){return[2,this._queryEngine.executeQueryForIds(e,i.signal)]}))}))},e.prototype.queryExtent=function(e,i){return void 0===e&&(e={}),void 0===i&&(i={}),n(this,void 0,void 0,(function(){return t(this,(function(t){return[2,this._queryEngine.executeQueryForExtent(e,i.signal)]}))}))},e.prototype._fetch=function(e,i){return n(this,void 0,void 0,(function(){var n;return t(this,(function(t){switch(t.label){case 0:if(!e)throw new s("csv-source:invalid-source","url not defined");return n=c.urlToObject(e),[4,a(n.path,{query:n.query,responseType:"text",signal:i.signal})];case 1:return[2,t.sent().data]}}))}))},e.prototype._parse=function(e,i){void 0===i&&(i={});for(var t={columnDelimiter:i.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:i.latitudeField,longitudeFieldName:i.longitudeField}};e&&"\n"===e[0];)e=e.slice(1);"\n"!==e[e.length-1]&&(e+="\n");var n=this._readFirstLine(e);if(!n)throw new s("csv","CSV is empty",{csv:e});if(!i.columnDelimiter){var r=this._inferDelimiter(n);if(!r)throw new s("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");t.columnDelimiter=r}var l=n.split(t.columnDelimiter),o=t.layerDefinition={name:"csv",drawingInfo:_,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:i.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:i.spatialReference||{wkid:102100}}};if(!i.latitudeField||!i.longitudeField){var a=this._inferLocationInfo(l);if(!i.longitudeField&&!a.longitudeFieldName||!i.latitudeField&&!a.latitudeFieldName)throw new s("csv","Unable to identify latitudeField and/or longitudeField from CSV");t.locationInfo={longitudeFieldName:i.longitudeField||a.longitudeFieldName,latitudeFieldName:i.latitudeField||a.latitudeFieldName}}var u=this._inferFields(e,t.columnDelimiter,l,t.locationInfo);if(i.fields&&i.fields.length){for(var f=new Map,c=0,p=i.fields;c<p.length;c++){var m=p[c];f.set(m.name.toLowerCase(),m)}for(var h=0,y=u;h<y.length;h++){m=y[h];var g=f.get(m.name.toLowerCase());if(g){var v=m.name;d.mixin(m,g),m.name=v}}}if(o.fields=u,!o.fields.some((function(e){return"esriFieldTypeOID"===e.type&&(o.objectIdField=e.name,!0)}))){m={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};o.objectIdField=m.name,o.fields.unshift(m)}if(this._fieldsIndex=new w(o.fields),o.timeInfo){var F=o.timeInfo;if(F.startTimeField){var N=this._fieldsIndex.get(F.startTimeField);N?(F.startTimeField=N.name,N.type="esriFieldTypeDate"):F.startTimeField=null}if(F.endTimeField){var I=this._fieldsIndex.get(F.endTimeField);I?(F.endTimeField=I.name,I.type="esriFieldTypeDate"):F.endTimeField=null}if(F.trackIdField){var b=this._fieldsIndex.get(F.trackIdField);F.trackIdField=b?b.name:null}F.startTimeField||F.endTimeField||(o.timeInfo=null)}return t},e.prototype._inferLocationInfo=function(e){var t=null,n=null;return e.forEach((function(e){var r=e.toLowerCase();-1===i.csvLatitudeFieldNames.indexOf(r)||n||(n=e),-1===i.csvLongitudeFieldNames.indexOf(r)||t||(t=e)})),{longitudeFieldName:t,latitudeFieldName:n}},e.prototype._inferFields=function(e,i,t,n){for(var r=[],l=this._sampleLines(e).map((function(e){return e.split(i).map((function(e){return e.trim()}))})),o=this,a=0;a<t.length;a++)!function(e){var i=t[e];if(i===n.longitudeFieldName||i===n.latitudeFieldName)r.push({name:i,type:"esriFieldTypeDouble",alias:i});else{var a=l.map((function(i){return i[e]})),s=o._inferFieldType(a),u={name:i.replace(/[\s\'’‘\.\-\/\(\)]+/g,"_"),type:null,alias:i};switch(s){case"integer":u.type="esriFieldTypeInteger";break;case"double":u.type="esriFieldTypeDouble";break;case"date":u.type="esriFieldTypeDate",u.length=36;break;default:u.type="esriFieldTypeString",u.length=255}r.push(u)}}(a);return r},e.prototype._inferFieldType=function(e){var i=this;if(!e.length)return"string";var t=/[^+-.,0-9]/;return e.map((function(e){var n=!1;if(""===e||t.test(e))n=!0;else{var r=E(e);if(!isNaN(r))return/[.,]/.test(e)?"double":!S(r)||r>214783647||r<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(r=Number(e),!isNaN(r))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),r=Number(e),!isNaN(r))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){var l=new Date(e);return i._isValidDate(l,e)?"date":"string"}return"string"}return"string"})).reduce((function(e,i){return e===i?i:"string"===e||"string"===i?"string":"double"===e||"double"===i?"double":void 0}))},e.prototype._isValidDate=function(e,i){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;var t=!0;if(u("chrome")&&/\d+\W*$/.test(i)){var n=i.match(/[a-zA-Z]{2,}/);if(n){for(var r=!1,l=0;!r&&l<=n.length;)r=!x.test(n[l]),l++;t=!r}}return t},e.prototype._readFirstLine=function(e){return e.substring(0,e.indexOf("\n")).trim()},e.prototype._sampleLines=function(e,i){void 0===i&&(i=10);for(var t=!1,n=[],r=e.indexOf("\n")+1;!t&&n.length<i;){var l=e.indexOf("\n",r);if(-1!==l){var o;(o=-1===l&&r<e.length-1?e.substring(r).trim():e.substring(r,l).trim())&&n.push(o),r=l+1}else t=!0}return n},e.prototype._inferDelimiter=function(e){var t=0,n="";return i.csvDetectedDelimiters.forEach((function(i){var r=e.split(i).length;r>t&&(t=r,n=i)})),""===n?null:n},e.prototype._createQueryEngine=function(e,i){for(var t,n=i.locationInfo,r=n.latitudeFieldName,a=n.longitudeFieldName,s=i.layerDefinition,u=s.objectIdField,d=s.fields,f=s.extent,c=s.timeInfo,F=[],I=[],w=new Set,_=new Set,x=[],S=0,O=d;S<O.length;S++){var j=O[S],q=j.name,C=j.type;"esriFieldTypeDate"===C?w.add(q):b.indexOf(C)>-1&&_.add(q),q!==u&&x.push(q)}var k=new l;k.delimiter=i.columnDelimiter,k.fieldNames=x,k.newline="\n";var L=k.parse(e),V=0;L.shift();for(var P=0,R=L;P<R.length;P++){var M=R[P],G=this._parseCoordinateValue(M[r]),Q=this._parseCoordinateValue(M[a]);if(null!=Q&&null!=G&&!isNaN(G)&&!isNaN(Q)){for(var J in M[r]=G,M[a]=Q,M)if(J!==r&&J!==a)if(w.has(J)){var W=new Date(M[J]);M[J]=this._isValidDate(W,M[J])?W.getTime():null}else if(_.has(J)){var Y=E(M[J]);isNaN(Y)?M[J]=null:M[J]=Y}M[u]=V,V++,F.push(new D(Q,G)),I.push(M)}}if(!m.equals({wkid:4326},f.spatialReference))if(m.isWebMercator(f.spatialReference))for(var $=0,A=F;$<A.length;$++){var Z=A[$];t=h.lngLatToXY(Z.x,Z.y,T),Z.x=t[0],Z.y=t[1]}else F=p.projectMany(F,o.SpatialReference.WGS84,f.spatialReference,null,!0);for(var B=new v.default({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),U=new N.default({fields:i.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:c,objectIdField:u,spatialReference:f.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:B}),z=[],X=0;X<F.length;X++){var H=F[X],K=H.x,ee=H.y,ie=I[X];ie[u]=X+1,z.push(new y.default(new g.default([],[K,ee]),ie,null,ie[u]))}return B.addMany(z),U},e.prototype._parseCoordinateValue=function(e){if(null==e||""===e)return null;var i=E(e);return(isNaN(i)||Math.abs(i)>181)&&(i=parseFloat(e)),i},e.prototype._checkProjection=function(e){return n(this,void 0,void 0,(function(){return t(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,F.checkProjectionSupport(m.WGS84,e)];case 1:return i.sent(),[3,3];case 2:throw i.sent(),new s("csv-layer","Projection not supported");case 3:return[2]}}))}))},e}();i.default=O}.apply(null,n))||(e.exports=r)},858:function(e,i,t){var n,r;n=[t(22),t(273)],void 0===(r=function(e,i){var t=/^\s*"([\S\s]*)"\s*$/,n=/""/g,r=/"/g;function l(e,i){var t,n={},r=e.length;for(t=0;t<r;t++)n[e[t]]=i[t];return n}return i(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(i){var r,o,a,s,u,d,f,c,p=[],m=i.split(this.newline),h=this.fieldNames,y=0,g=[],v="",F="";e:for(d=0,a=m.length;d<a;d++)if(e.trim(m[d])){for(f=0,s=(r=m[d].split(this.delimiter)).length;f<s;f++){for(c=-1,v+=F+(o=r[f]),F="";(c=o.indexOf('"',c+1))>=0;)y++;if(y%2==0){if(y>0){if(!(u=t.exec(v))){console.warn("Csv: discarding row with invalid value: "+v),g=[],v="",y=0;continue e}g.push(u[1].replace(n,'"'))}else g.push(this.trim||!h?e.trim(v):v);v="",y=0}else F=this.delimiter}0===y?(h?p.push(l(h,g)):h=this.fieldNames=g,g=[]):F=this.newline}return p},toCsv:function(e){return this.stringify(this.data,e)},stringify:function(e,i){var t,n,l,o=(i=i||{}).alwaysQuote,a=this.fieldNames,s=this.delimiter,u=this.newline,d="";for(t=-1;t<e.length;t++)for(t>-1&&(d+=u),n=0;n<a.length;n++)null==(l=t<0?a[n]:e[t][a[n]])&&(l=""),"string"!=typeof l&&(l=l.toString()),d+=(n>0?s:"")+(o||l.indexOf('"')>=0||l.indexOf(s)>=0?'"'+l.replace(r,'""')+'"':l);return i.trailingNewline&&(d+=u),d}})}.apply(null,n))||(e.exports=r)}}]);