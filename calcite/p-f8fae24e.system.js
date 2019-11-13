System.register(["./p-2977e6f6.system.js"],(function(e){"use strict";var t;return{setters:[function(e){t=e.g}],execute:function(){e("g",r);function r(e,r){var n=["left","right"];if(t(e)==="rtl"){n.reverse()}return r.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}
/**!
             * @fileOverview Kickass library to create and place poppers near their reference elements.
             * @version 1.15.0
             * @license
             * Copyright (c) 2016 Federico Zivolo and contributors
             *
             * Permission is hereby granted, free of charge, to any person obtaining a copy
             * of this software and associated documentation files (the "Software"), to deal
             * in the Software without restriction, including without limitation the rights
             * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             * copies of the Software, and to permit persons to whom the Software is
             * furnished to do so, subject to the following conditions:
             *
             * The above copyright notice and this permission notice shall be included in all
             * copies or substantial portions of the Software.
             *
             * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
             * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
             * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
             * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
             * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
             * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
             * SOFTWARE.
             */var n=typeof window!=="undefined"&&typeof document!=="undefined";var i=["Edge","Trident","Firefox"];var o=0;for(var a=0;a<i.length;a+=1){if(n&&navigator.userAgent.indexOf(i[a])>=0){o=1;break}}function f(e){var t=false;return function(){if(t){return}t=true;window.Promise.resolve().then((function(){t=false;e()}))}}function s(e){var t=false;return function(){if(!t){t=true;setTimeout((function(){t=false;e()}),o)}}}var l=n&&window.Promise;var u=l?f:s;function p(e){var t={};return e&&t.toString.call(e)==="[object Function]"}function d(e,t){if(e.nodeType!==1){return[]}var r=e.ownerDocument.defaultView;var n=r.getComputedStyle(e,null);return t?n[t]:n}function c(e){if(e.nodeName==="HTML"){return e}return e.parentNode||e.host}function h(e){if(!e){return document.body}switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=d(e),r=t.overflow,n=t.overflowX,i=t.overflowY;if(/(auto|scroll|overlay)/.test(r+i+n)){return e}return h(c(e))}var v=n&&!!(window.MSInputMethodContext&&document.documentMode);var m=n&&/MSIE 10/.test(navigator.userAgent);function g(e){if(e===11){return v}if(e===10){return m}return v||m}function b(e){if(!e){return document.documentElement}var t=g(10)?document.body:null;var r=e.offsetParent||null;while(r===t&&e.nextElementSibling){r=(e=e.nextElementSibling).offsetParent}var n=r&&r.nodeName;if(!n||n==="BODY"||n==="HTML"){return e?e.ownerDocument.documentElement:document.documentElement}if(["TH","TD","TABLE"].indexOf(r.nodeName)!==-1&&d(r,"position")==="static"){return b(r)}return r}function w(e){var t=e.nodeName;if(t==="BODY"){return false}return t==="HTML"||b(e.firstElementChild)===e}function y(e){if(e.parentNode!==null){return y(e.parentNode)}return e}function E(e,t){if(!e||!e.nodeType||!t||!t.nodeType){return document.documentElement}var r=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING;var n=r?e:t;var i=r?t:e;var o=document.createRange();o.setStart(n,0);o.setEnd(i,0);var a=o.commonAncestorContainer;if(e!==a&&t!==a||n.contains(i)){if(w(a)){return a}return b(a)}var f=y(e);if(f.host){return E(f.host,t)}else{return E(e,y(t).host)}}function x(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"top";var r=t==="top"?"scrollTop":"scrollLeft";var n=e.nodeName;if(n==="BODY"||n==="HTML"){var i=e.ownerDocument.documentElement;var o=e.ownerDocument.scrollingElement||i;return o[r]}return e[r]}function O(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=x(t,"top");var i=x(t,"left");var o=r?-1:1;e.top+=n*o;e.bottom+=n*o;e.left+=i*o;e.right+=i*o;return e}function L(e,t){var r=t==="x"?"Left":"Top";var n=r==="Left"?"Right":"Bottom";return parseFloat(e["border"+r+"Width"],10)+parseFloat(e["border"+n+"Width"],10)}function T(e,t,r,n){return Math.max(t["offset"+e],t["scroll"+e],r["client"+e],r["offset"+e],r["scroll"+e],g(10)?parseInt(r["offset"+e])+parseInt(n["margin"+(e==="Height"?"Top":"Left")])+parseInt(n["margin"+(e==="Height"?"Bottom":"Right")]):0)}function C(e){var t=e.body;var r=e.documentElement;var n=g(10)&&getComputedStyle(r);return{height:T("Height",t,r,n),width:T("Width",t,r,n)}}var D=function(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}};var M=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var N=function(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e};var F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r){if(Object.prototype.hasOwnProperty.call(r,n)){e[n]=r[n]}}}return e};function S(e){return F({},e,{right:e.left+e.width,bottom:e.top+e.height})}function k(e){var t={};try{if(g(10)){t=e.getBoundingClientRect();var r=x(e,"top");var n=x(e,"left");t.top+=r;t.left+=n;t.bottom+=r;t.right+=n}else{t=e.getBoundingClientRect()}}catch(p){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top};var o=e.nodeName==="HTML"?C(e.ownerDocument):{};var a=o.width||e.clientWidth||i.right-i.left;var f=o.height||e.clientHeight||i.bottom-i.top;var s=e.offsetWidth-a;var l=e.offsetHeight-f;if(s||l){var u=d(e);s-=L(u,"x");l-=L(u,"y");i.width-=s;i.height-=l}return S(i)}function W(e,t){var r=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var n=g(10);var i=t.nodeName==="HTML";var o=k(e);var a=k(t);var f=h(e);var s=d(t);var l=parseFloat(s.borderTopWidth,10);var u=parseFloat(s.borderLeftWidth,10);if(r&&i){a.top=Math.max(a.top,0);a.left=Math.max(a.left,0)}var p=S({top:o.top-a.top-l,left:o.left-a.left-u,width:o.width,height:o.height});p.marginTop=0;p.marginLeft=0;if(!n&&i){var c=parseFloat(s.marginTop,10);var v=parseFloat(s.marginLeft,10);p.top-=l-c;p.bottom-=l-c;p.left-=u-v;p.right-=u-v;p.marginTop=c;p.marginLeft=v}if(n&&!r?t.contains(f):t===f&&f.nodeName!=="BODY"){p=O(p,t)}return p}function H(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var r=e.ownerDocument.documentElement;var n=W(e,r);var i=Math.max(r.clientWidth,window.innerWidth||0);var o=Math.max(r.clientHeight,window.innerHeight||0);var a=!t?x(r):0;var f=!t?x(r,"left"):0;var s={top:a-n.top+n.marginTop,left:f-n.left+n.marginLeft,width:i,height:o};return S(s)}function P(e){var t=e.nodeName;if(t==="BODY"||t==="HTML"){return false}if(d(e,"position")==="fixed"){return true}var r=c(e);if(!r){return false}return P(r)}function B(e){if(!e||!e.parentElement||g()){return document.documentElement}var t=e.parentElement;while(t&&d(t,"transform")==="none"){t=t.parentElement}return t||document.documentElement}function A(e,t,r,n){var i=arguments.length>4&&arguments[4]!==undefined?arguments[4]:false;var o={top:0,left:0};var a=i?B(e):E(e,t);if(n==="viewport"){o=H(a,i)}else{var f=void 0;if(n==="scrollParent"){f=h(c(t));if(f.nodeName==="BODY"){f=e.ownerDocument.documentElement}}else if(n==="window"){f=e.ownerDocument.documentElement}else{f=n}var s=W(f,a,i);if(f.nodeName==="HTML"&&!P(a)){var l=C(e.ownerDocument),u=l.height,p=l.width;o.top+=s.top-s.marginTop;o.bottom=u+s.top;o.left+=s.left-s.marginLeft;o.right=p+s.left}else{o=s}}r=r||0;var d=typeof r==="number";o.left+=d?r:r.left||0;o.top+=d?r:r.top||0;o.right-=d?r:r.right||0;o.bottom-=d?r:r.bottom||0;return o}function I(e){var t=e.width,r=e.height;return t*r}function j(e,t,r,n,i){var o=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(e.indexOf("auto")===-1){return e}var a=A(r,n,o,i);var f={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}};var s=Object.keys(f).map((function(e){return F({key:e},f[e],{area:I(f[e])})})).sort((function(e,t){return t.area-e.area}));var l=s.filter((function(e){var t=e.width,n=e.height;return t>=r.clientWidth&&n>=r.clientHeight}));var u=l.length>0?l[0].key:s[0].key;var p=e.split("-")[1];return u+(p?"-"+p:"")}function R(e,t,r){var n=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var i=n?B(t):E(t,r);return W(r,i,n)}function U(e){var t=e.ownerDocument.defaultView;var r=t.getComputedStyle(e);var n=parseFloat(r.marginTop||0)+parseFloat(r.marginBottom||0);var i=parseFloat(r.marginLeft||0)+parseFloat(r.marginRight||0);var o={width:e.offsetWidth+i,height:e.offsetHeight+n};return o}function Y(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,(function(e){return t[e]}))}function V(e,t,r){r=r.split("-")[0];var n=U(e);var i={width:n.width,height:n.height};var o=["right","left"].indexOf(r)!==-1;var a=o?"top":"left";var f=o?"left":"top";var s=o?"height":"width";var l=!o?"height":"width";i[a]=t[a]+t[s]/2-n[s]/2;if(r===f){i[f]=t[f]-n[l]}else{i[f]=t[Y(f)]}return i}function q(e,t){if(Array.prototype.find){return e.find(t)}return e.filter(t)[0]}function K(e,t,r){if(Array.prototype.findIndex){return e.findIndex((function(e){return e[t]===r}))}var n=q(e,(function(e){return e[t]===r}));return e.indexOf(n)}function z(e,t,r){var n=r===undefined?e:e.slice(0,K(e,"name",r));n.forEach((function(e){if(e["function"]){console.warn("`modifier.function` is deprecated, use `modifier.fn`!")}var r=e["function"]||e.fn;if(e.enabled&&p(r)){t.offsets.popper=S(t.offsets.popper);t.offsets.reference=S(t.offsets.reference);t=r(t,e)}}));return t}function G(){if(this.state.isDestroyed){return}var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};e.offsets.reference=R(this.state,this.popper,this.reference,this.options.positionFixed);e.placement=j(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);e.originalPlacement=e.placement;e.positionFixed=this.options.positionFixed;e.offsets.popper=V(this.popper,e.offsets.reference,e.placement);e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute";e=z(this.modifiers,e);if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(e)}else{this.options.onUpdate(e)}}function _(e,t){return e.some((function(e){var r=e.name,n=e.enabled;return n&&r===t}))}function X(e){var t=[false,"ms","Webkit","Moz","O"];var r=e.charAt(0).toUpperCase()+e.slice(1);for(var n=0;n<t.length;n++){var i=t[n];var o=i?""+i+r:e;if(typeof document.body.style[o]!=="undefined"){return o}}return null}function J(){this.state.isDestroyed=true;if(_(this.modifiers,"applyStyle")){this.popper.removeAttribute("x-placement");this.popper.style.position="";this.popper.style.top="";this.popper.style.left="";this.popper.style.right="";this.popper.style.bottom="";this.popper.style.willChange="";this.popper.style[X("transform")]=""}this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper)}return this}function Q(e){var t=e.ownerDocument;return t?t.defaultView:window}function Z(e,t,r,n){var i=e.nodeName==="BODY";var o=i?e.ownerDocument.defaultView:e;o.addEventListener(t,r,{passive:true});if(!i){Z(h(o.parentNode),t,r,n)}n.push(o)}function $(e,t,r,n){r.updateBound=n;Q(e).addEventListener("resize",r.updateBound,{passive:true});var i=h(e);Z(i,"scroll",r.updateBound,r.scrollParents);r.scrollElement=i;r.eventsEnabled=true;return r}function ee(){if(!this.state.eventsEnabled){this.state=$(this.reference,this.options,this.state,this.scheduleUpdate)}}function te(e,t){Q(e).removeEventListener("resize",t.updateBound);t.scrollParents.forEach((function(e){e.removeEventListener("scroll",t.updateBound)}));t.updateBound=null;t.scrollParents=[];t.scrollElement=null;t.eventsEnabled=false;return t}function re(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=te(this.reference,this.state)}}function ne(e){return e!==""&&!isNaN(parseFloat(e))&&isFinite(e)}function ie(e,t){Object.keys(t).forEach((function(r){var n="";if(["width","height","top","right","bottom","left"].indexOf(r)!==-1&&ne(t[r])){n="px"}e.style[r]=t[r]+n}))}function oe(e,t){Object.keys(t).forEach((function(r){var n=t[r];if(n!==false){e.setAttribute(r,t[r])}else{e.removeAttribute(r)}}))}function ae(e){ie(e.instance.popper,e.styles);oe(e.instance.popper,e.attributes);if(e.arrowElement&&Object.keys(e.arrowStyles).length){ie(e.arrowElement,e.arrowStyles)}return e}function fe(e,t,r,n,i){var o=R(i,t,e,r.positionFixed);var a=j(r.placement,o,t,e,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);t.setAttribute("x-placement",a);ie(t,{position:r.positionFixed?"fixed":"absolute"});return r}function se(e,t){var r=e.offsets,n=r.popper,i=r.reference;var o=Math.round,a=Math.floor;var f=function e(t){return t};var s=o(i.width);var l=o(n.width);var u=["left","right"].indexOf(e.placement)!==-1;var p=e.placement.indexOf("-")!==-1;var d=s%2===l%2;var c=s%2===1&&l%2===1;var h=!t?f:u||p||d?o:a;var v=!t?f:o;return{left:h(c&&!p&&t?n.left-1:n.left),top:v(n.top),bottom:v(n.bottom),right:h(n.right)}}var le=n&&/Firefox/i.test(navigator.userAgent);function ue(e,t){var r=t.x,n=t.y;var i=e.offsets.popper;var o=q(e.instance.modifiers,(function(e){return e.name==="applyStyle"})).gpuAcceleration;if(o!==undefined){console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")}var a=o!==undefined?o:t.gpuAcceleration;var f=b(e.instance.popper);var s=k(f);var l={position:i.position};var u=se(e,window.devicePixelRatio<2||!le);var p=r==="bottom"?"top":"bottom";var d=n==="right"?"left":"right";var c=X("transform");var h=void 0,v=void 0;if(p==="bottom"){if(f.nodeName==="HTML"){v=-f.clientHeight+u.bottom}else{v=-s.height+u.bottom}}else{v=u.top}if(d==="right"){if(f.nodeName==="HTML"){h=-f.clientWidth+u.right}else{h=-s.width+u.right}}else{h=u.left}if(a&&c){l[c]="translate3d("+h+"px, "+v+"px, 0)";l[p]=0;l[d]=0;l.willChange="transform"}else{var m=p==="bottom"?-1:1;var g=d==="right"?-1:1;l[p]=v*m;l[d]=h*g;l.willChange=p+", "+d}var w={"x-placement":e.placement};e.attributes=F({},w,e.attributes);e.styles=F({},l,e.styles);e.arrowStyles=F({},e.offsets.arrow,e.arrowStyles);return e}function pe(e,t,r){var n=q(e,(function(e){var r=e.name;return r===t}));var i=!!n&&e.some((function(e){return e.name===r&&e.enabled&&e.order<n.order}));if(!i){var o="`"+t+"`";var a="`"+r+"`";console.warn(a+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return i}function de(e,t){var r;if(!pe(e.instance.modifiers,"arrow","keepTogether")){return e}var n=t.element;if(typeof n==="string"){n=e.instance.popper.querySelector(n);if(!n){return e}}else{if(!e.instance.popper.contains(n)){console.warn("WARNING: `arrow.element` must be child of its popper element!");return e}}var i=e.placement.split("-")[0];var o=e.offsets,a=o.popper,f=o.reference;var s=["left","right"].indexOf(i)!==-1;var l=s?"height":"width";var u=s?"Top":"Left";var p=u.toLowerCase();var c=s?"left":"top";var h=s?"bottom":"right";var v=U(n)[l];if(f[h]-v<a[p]){e.offsets.popper[p]-=a[p]-(f[h]-v)}if(f[p]+v>a[h]){e.offsets.popper[p]+=f[p]+v-a[h]}e.offsets.popper=S(e.offsets.popper);var m=f[p]+f[l]/2-v/2;var g=d(e.instance.popper);var b=parseFloat(g["margin"+u],10);var w=parseFloat(g["border"+u+"Width"],10);var y=m-e.offsets.popper[p]-b-w;y=Math.max(Math.min(a[l]-v,y),0);e.arrowElement=n;e.offsets.arrow=(r={},N(r,p,Math.round(y)),N(r,c,""),r);return e}function ce(e){if(e==="end"){return"start"}else if(e==="start"){return"end"}return e}var he=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"];var ve=he.slice(3);function me(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var r=ve.indexOf(e);var n=ve.slice(r+1).concat(ve.slice(0,r));return t?n.reverse():n}var ge={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function be(e,t){if(_(e.instance.modifiers,"inner")){return e}if(e.flipped&&e.placement===e.originalPlacement){return e}var r=A(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed);var n=e.placement.split("-")[0];var i=Y(n);var o=e.placement.split("-")[1]||"";var a=[];switch(t.behavior){case ge.FLIP:a=[n,i];break;case ge.CLOCKWISE:a=me(n);break;case ge.COUNTERCLOCKWISE:a=me(n,true);break;default:a=t.behavior}a.forEach((function(f,s){if(n!==f||a.length===s+1){return e}n=e.placement.split("-")[0];i=Y(n);var l=e.offsets.popper;var u=e.offsets.reference;var p=Math.floor;var d=n==="left"&&p(l.right)>p(u.left)||n==="right"&&p(l.left)<p(u.right)||n==="top"&&p(l.bottom)>p(u.top)||n==="bottom"&&p(l.top)<p(u.bottom);var c=p(l.left)<p(r.left);var h=p(l.right)>p(r.right);var v=p(l.top)<p(r.top);var m=p(l.bottom)>p(r.bottom);var g=n==="left"&&c||n==="right"&&h||n==="top"&&v||n==="bottom"&&m;var b=["top","bottom"].indexOf(n)!==-1;var w=!!t.flipVariations&&(b&&o==="start"&&c||b&&o==="end"&&h||!b&&o==="start"&&v||!b&&o==="end"&&m);var y=!!t.flipVariationsByContent&&(b&&o==="start"&&h||b&&o==="end"&&c||!b&&o==="start"&&m||!b&&o==="end"&&v);var E=w||y;if(d||g||E){e.flipped=true;if(d||g){n=a[s+1]}if(E){o=ce(o)}e.placement=n+(o?"-"+o:"");e.offsets.popper=F({},e.offsets.popper,V(e.instance.popper,e.offsets.reference,e.placement));e=z(e.instance.modifiers,e,"flip")}}));return e}function we(e){var t=e.offsets,r=t.popper,n=t.reference;var i=e.placement.split("-")[0];var o=Math.floor;var a=["top","bottom"].indexOf(i)!==-1;var f=a?"right":"bottom";var s=a?"left":"top";var l=a?"width":"height";if(r[f]<o(n[s])){e.offsets.popper[s]=o(n[s])-r[l]}if(r[s]>o(n[f])){e.offsets.popper[s]=o(n[f])}return e}function ye(e,t,r,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var o=+i[1];var a=i[2];if(!o){return e}if(a.indexOf("%")===0){var f=void 0;switch(a){case"%p":f=r;break;case"%":case"%r":default:f=n}var s=S(f);return s[t]/100*o}else if(a==="vh"||a==="vw"){var l=void 0;if(a==="vh"){l=Math.max(document.documentElement.clientHeight,window.innerHeight||0)}else{l=Math.max(document.documentElement.clientWidth,window.innerWidth||0)}return l/100*o}else{return o}}function Ee(e,t,r,n){var i=[0,0];var o=["right","left"].indexOf(n)!==-1;var a=e.split(/(\+|\-)/).map((function(e){return e.trim()}));var f=a.indexOf(q(a,(function(e){return e.search(/,|\s/)!==-1})));if(a[f]&&a[f].indexOf(",")===-1){console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")}var s=/\s*,\s*|\s+/;var l=f!==-1?[a.slice(0,f).concat([a[f].split(s)[0]]),[a[f].split(s)[1]].concat(a.slice(f+1))]:[a];l=l.map((function(e,n){var i=(n===1?!o:o)?"height":"width";var a=false;return e.reduce((function(e,t){if(e[e.length-1]===""&&["+","-"].indexOf(t)!==-1){e[e.length-1]=t;a=true;return e}else if(a){e[e.length-1]+=t;a=false;return e}else{return e.concat(t)}}),[]).map((function(e){return ye(e,i,t,r)}))}));l.forEach((function(e,t){e.forEach((function(r,n){if(ne(r)){i[t]+=r*(e[n-1]==="-"?-1:1)}}))}));return i}function xe(e,t){var r=t.offset;var n=e.placement,i=e.offsets,o=i.popper,a=i.reference;var f=n.split("-")[0];var s=void 0;if(ne(+r)){s=[+r,0]}else{s=Ee(r,o,a,f)}if(f==="left"){o.top+=s[0];o.left-=s[1]}else if(f==="right"){o.top+=s[0];o.left+=s[1]}else if(f==="top"){o.left+=s[0];o.top-=s[1]}else if(f==="bottom"){o.left+=s[0];o.top+=s[1]}e.popper=o;return e}function Oe(e,t){var r=t.boundariesElement||b(e.instance.popper);if(e.instance.reference===r){r=b(r)}var n=X("transform");var i=e.instance.popper.style;var o=i.top,a=i.left,f=i[n];i.top="";i.left="";i[n]="";var s=A(e.instance.popper,e.instance.reference,t.padding,r,e.positionFixed);i.top=o;i.left=a;i[n]=f;t.boundaries=s;var l=t.priority;var u=e.offsets.popper;var p={primary:function e(r){var n=u[r];if(u[r]<s[r]&&!t.escapeWithReference){n=Math.max(u[r],s[r])}return N({},r,n)},secondary:function e(r){var n=r==="right"?"left":"top";var i=u[n];if(u[r]>s[r]&&!t.escapeWithReference){i=Math.min(u[n],s[r]-(r==="right"?u.width:u.height))}return N({},n,i)}};l.forEach((function(e){var t=["left","top"].indexOf(e)!==-1?"primary":"secondary";u=F({},u,p[t](e))}));e.offsets.popper=u;return e}function Le(e){var t=e.placement;var r=t.split("-")[0];var n=t.split("-")[1];if(n){var i=e.offsets,o=i.reference,a=i.popper;var f=["bottom","top"].indexOf(r)!==-1;var s=f?"left":"top";var l=f?"width":"height";var u={start:N({},s,o[s]),end:N({},s,o[s]+o[l]-a[l])};e.offsets.popper=F({},a,u[n])}return e}function Te(e){if(!pe(e.instance.modifiers,"hide","preventOverflow")){return e}var t=e.offsets.reference;var r=q(e.instance.modifiers,(function(e){return e.name==="preventOverflow"})).boundaries;if(t.bottom<r.top||t.left>r.right||t.top>r.bottom||t.right<r.left){if(e.hide===true){return e}e.hide=true;e.attributes["x-out-of-boundaries"]=""}else{if(e.hide===false){return e}e.hide=false;e.attributes["x-out-of-boundaries"]=false}return e}function Ce(e){var t=e.placement;var r=t.split("-")[0];var n=e.offsets,i=n.popper,o=n.reference;var a=["left","right"].indexOf(r)!==-1;var f=["top","left"].indexOf(r)===-1;i[a?"left":"top"]=o[r]-(f?i[a?"width":"height"]:0);e.placement=Y(t);e.offsets.popper=S(i);return e}var De={shift:{order:100,enabled:true,fn:Le},offset:{order:200,enabled:true,fn:xe,offset:0},preventOverflow:{order:300,enabled:true,fn:Oe,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:true,fn:we},arrow:{order:500,enabled:true,fn:de,element:"[x-arrow]"},flip:{order:600,enabled:true,fn:be,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:false,flipVariationsByContent:false},inner:{order:700,enabled:false,fn:Ce},hide:{order:800,enabled:true,fn:Te},computeStyle:{order:850,enabled:true,fn:ue,gpuAcceleration:true,x:"bottom",y:"right"},applyStyle:{order:900,enabled:true,fn:ae,onLoad:fe,gpuAcceleration:undefined}};var Me={placement:"bottom",positionFixed:false,eventsEnabled:true,removeOnDestroy:false,onCreate:function e(){},onUpdate:function e(){},modifiers:De};var Ne=function(){function e(t,r){var n=this;var i=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};D(this,e);this.scheduleUpdate=function(){return requestAnimationFrame(n.update)};this.update=u(this.update.bind(this));this.options=F({},e.Defaults,i);this.state={isDestroyed:false,isCreated:false,scrollParents:[]};this.reference=t&&t.jquery?t[0]:t;this.popper=r&&r.jquery?r[0]:r;this.options.modifiers={};Object.keys(F({},e.Defaults.modifiers,i.modifiers)).forEach((function(t){n.options.modifiers[t]=F({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}));this.modifiers=Object.keys(this.options.modifiers).map((function(e){return F({name:e},n.options.modifiers[e])})).sort((function(e,t){return e.order-t.order}));this.modifiers.forEach((function(e){if(e.enabled&&p(e.onLoad)){e.onLoad(n.reference,n.popper,n.options,e,n.state)}}));this.update();var o=this.options.eventsEnabled;if(o){this.enableEventListeners()}this.state.eventsEnabled=o}M(e,[{key:"update",value:function e(){return G.call(this)}},{key:"destroy",value:function e(){return J.call(this)}},{key:"enableEventListeners",value:function e(){return ee.call(this)}},{key:"disableEventListeners",value:function e(){return re.call(this)}}]);return e}();Ne.Utils=(typeof window!=="undefined"?window:global).PopperUtils;Ne.placements=he;Ne.Defaults=Me;e("P",Ne)}}}));