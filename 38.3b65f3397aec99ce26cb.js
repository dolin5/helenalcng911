(function(){(this||window).webpackJsonp.registerAbsMids({"dojo/regexp":915})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{915:function(n,r,e){var o,t;o=[e(24),e(22)],void 0===(t=function(n,r){var e={};return r.setObject("dojo.regexp",e),e.escapeString=function(n,r){return n.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(function(n){return r&&-1!=r.indexOf(n)?n:"\\"+n}))},e.buildGroupRE=function(n,r,o){if(!(n instanceof Array))return r(n);for(var t=[],i=0;i<n.length;i++)t.push(r(n[i]));return e.group(t.join("|"),o)},e.group=function(n,r){return"("+(r?"?:":"")+n+")"},e}.apply(null,o))||(n.exports=t)}}]);