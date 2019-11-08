(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/graphics/featureConversionUtils":879,"dojo/regexp":914,"dojo/string":1035,"dojo/number":1037,"dojo/i18n!dojo/cldr/nls/number":1662,"dojo/cldr/nls/ar/number":1663,"dojo/cldr/nls/bs/number":1664,"dojo/cldr/nls/ca/number":1665,"dojo/cldr/nls/cs/number":1666,"dojo/cldr/nls/da/number":1667,"dojo/cldr/nls/de/number":1668,"dojo/cldr/nls/el/number":1669,"dojo/cldr/nls/en/number":1670,"dojo/cldr/nls/en-au/number":1671,"dojo/cldr/nls/es/number":1672,"dojo/cldr/nls/et/number":1673,"dojo/cldr/nls/es-mx/number":1674,"dojo/cldr/nls/fi/number":1675,"dojo/cldr/nls/fr/number":1676,"dojo/cldr/nls/fr-ch/number":1677,"dojo/cldr/nls/he/number":1678,"dojo/cldr/nls/hi/number":1679,"dojo/cldr/nls/hr/number":1680,"dojo/cldr/nls/hu/number":1681,"dojo/cldr/nls/id/number":1682,"dojo/cldr/nls/it/number":1683,"dojo/cldr/nls/ja/number":1684,"dojo/cldr/nls/ko/number":1685,"dojo/cldr/nls/mk/number":1686,"dojo/cldr/nls/lt/number":1687,"dojo/cldr/nls/lv/number":1688,"dojo/cldr/nls/nb/number":1689,"dojo/cldr/nls/nl/number":1690,"dojo/cldr/nls/pl/number":1691,"dojo/cldr/nls/pt/number":1692,"dojo/cldr/nls/pt-pt/number":1693,"dojo/cldr/nls/ro/number":1694,"dojo/cldr/nls/ru/number":1695,"dojo/cldr/nls/sk/number":1696,"dojo/cldr/nls/sl/number":1697,"dojo/cldr/nls/sr/number":1698,"dojo/cldr/nls/sv/number":1699,"dojo/cldr/nls/th/number":1700,"dojo/cldr/nls/tr/number":1701,"dojo/cldr/nls/uk/number":1702,"dojo/cldr/nls/vi/number":1703,"dojo/cldr/nls/zh/number":1704,"dojo/cldr/nls/zh-hant/number":1705,"dojo/cldr/nls/zh-hk/number":1706,"dojo/cldr/nls/zh-tw/number":1707,"dojo/cldr/nls/number":1708})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[7,38],{1035:function(e,n,r){var t,i;t=[r(24),r(22)],void 0===(i=function(e,n){var r=/[&<>'"\/]/g,t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"},i={};return n.setObject("dojo.string",i),i.escape=function(e){return e?e.replace(r,(function(e){return t[e]})):""},i.rep=function(e,n){if(n<=0||!e)return"";for(var r=[];1&n&&r.push(e),n>>=1;)e+=e;return r.join("")},i.pad=function(e,n,r,t){r||(r="0");var o=String(e),a=i.rep(r,Math.ceil((n-o.length)/r.length));return t?o+a:a+o},i.substitute=function(r,t,i,o){return o=o||e.global,i=i?n.hitch(o,i):function(e){return e},r.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,r,a){if(""==r)return"$";var l=n.getObject(r,!1,t);a&&(l=n.getObject(a,!1,o).call(o,l,r));var c=i(l,r);if(void 0===c)throw new Error('string.substitute could not find key "'+r+'" in template');return c.toString()}))},i.trim=String.prototype.trim?n.trim:function(e){for(var n=(e=e.replace(/^\s+/,"")).length-1;n>=0;n--)if(/\S/.test(e.charAt(n))){e=e.substring(0,n+1);break}return e},i}.apply(null,t))||(e.exports=i)},1037:function(e,n,r){var t,i;t=[r(22),r(59),r(1662),r(1035),r(914)],void 0===(i=function(e,n,r,t,i){var o={};if(e.setObject("dojo.number",o),o.format=function(r,t){t=e.mixin({},t||{});var i=n.normalizeLocale(t.locale),a=n.getLocalization("dojo.cldr","number",i);t.customs=a;var l=t.pattern||a[(t.type||"decimal")+"Format"];return isNaN(r)||Math.abs(r)==1/0?null:o._applyPattern(r,l,t)},o._numberPatternRE=/[#0,]*[#0](?:\.0*#*)?/,o._applyPattern=function(e,n,r){var t=(r=r||{}).customs.group,i=r.customs.decimal,a=n.split(";"),l=a[0];if(-1!=(n=a[e<0?1:0]||"-"+l).indexOf("%"))e*=100;else if(-1!=n.indexOf("‰"))e*=1e3;else if(-1!=n.indexOf("¤"))t=r.customs.currencyGroup||t,i=r.customs.currencyDecimal||i,n=n.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/,(function(e,n,t,i){var o=["symbol","currency","displayName"][t.length-1],a=r[o]||r.currency||"";return a?n+a+i:""}));else if(-1!=n.indexOf("E"))throw new Error("exponential notation not supported");var c=o._numberPatternRE,s=l.match(c);if(!s)throw new Error("unable to find a number expression in pattern: "+n);return!1===r.fractional&&(r.places=0),n.replace(c,o._formatAbsolute(e,s[0],{decimal:i,group:t,places:r.places,round:r.round}))},o.round=function(e,n,r){var t=10/(r||10);return(t*+e).toFixed(n)/t},0==.9.toFixed()){var a=o.round;o.round=function(e,n,r){var t=Math.pow(10,-n||0),i=Math.abs(e);return!e||i>=t?t=0:((i/=t)<.5||i>=.95)&&(t=0),a(e,n,r)+(e>0?t:-t)}}return o._formatAbsolute=function(e,n,r){!0===(r=r||{}).places&&(r.places=0),r.places===1/0&&(r.places=6);var i=n.split("."),a="string"==typeof r.places&&r.places.indexOf(","),l=r.places;a?l=r.places.substring(a+1):l>=0||(l=(i[1]||[]).length),r.round<0||(e=o.round(e,l,r.round));var c=String(Math.abs(e)).split("."),s=c[1]||"";if(i[1]||r.places){a&&(r.places=r.places.substring(0,a));var u=void 0!==r.places?r.places:i[1]&&i[1].lastIndexOf("0")+1;u>s.length&&(c[1]=t.pad(s,u,"0",!0)),l<s.length&&(c[1]=s.substr(0,l))}else c[1]&&c.pop();var m=i[0].replace(",","");-1!=(u=m.indexOf("0"))&&((u=m.length-u)>c[0].length&&(c[0]=t.pad(c[0],u)),-1==m.indexOf("#")&&(c[0]=c[0].substr(c[0].length-u)));var p,d,g=i[0].lastIndexOf(",");if(-1!=g){p=i[0].length-g-1;var f=i[0].substr(0,g);-1!=(g=f.lastIndexOf(","))&&(d=f.length-g-1)}for(var h=[],F=c[0];F;){var y=F.length-p;h.push(y>0?F.substr(y):F),F=y>0?F.slice(0,y):"",d&&(p=d,d=void 0)}return c[0]=h.reverse().join(r.group||","),c.join(r.decimal||".")},o.regexp=function(e){return o._parseInfo(e).regexp},o._parseInfo=function(e){e=e||{};var r=n.normalizeLocale(e.locale),t=n.getLocalization("dojo.cldr","number",r),a=e.pattern||t[(e.type||"decimal")+"Format"],l=t.group,c=t.decimal,s=1;if(-1!=a.indexOf("%"))s/=100;else if(-1!=a.indexOf("‰"))s/=1e3;else{var u=-1!=a.indexOf("¤");u&&(l=t.currencyGroup||l,c=t.currencyDecimal||c)}var m=a.split(";");1==m.length&&m.push("-"+m[0]);var p=i.buildGroupRE(m,(function(n){return(n="(?:"+i.escapeString(n,".")+")").replace(o._numberPatternRE,(function(n){var r={signed:!1,separator:e.strict?l:[l,""],fractional:e.fractional,decimal:c,exponent:!1},t=n.split("."),i=e.places;1==t.length&&1!=s&&(t[1]="###"),1==t.length||0===i?r.fractional=!1:(void 0===i&&(i=e.pattern?t[1].lastIndexOf("0")+1:1/0),i&&null==e.fractional&&(r.fractional=!0),!e.places&&i<t[1].length&&(i+=","+t[1].length),r.places=i);var a=t[0].split(",");return a.length>1&&(r.groupSize=a.pop().length,a.length>1&&(r.groupSize2=a.pop().length)),"("+o._realNumberRegexp(r)+")"}))}),!0);return u&&(p=p.replace(/([\s\xa0]*)(\u00a4{1,3})([\s\xa0]*)/g,(function(n,r,t,o){var a=["symbol","currency","displayName"][t.length-1],l=i.escapeString(e[a]||e.currency||"");return l?(r=r?"[\\s\\xa0]":"",o=o?"[\\s\\xa0]":"",e.strict?r+l+o:(r&&(r+="*"),o&&(o+="*"),"(?:"+r+l+o+")?")):""}))),{regexp:p.replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:l,decimal:c,factor:s}},o.parse=function(e,n){var r=o._parseInfo(n),t=new RegExp("^"+r.regexp+"$").exec(e);if(!t)return NaN;var i=t[1];if(!t[1]){if(!t[2])return NaN;i=t[2],r.factor*=-1}return(i=i.replace(new RegExp("["+r.group+"\\s\\xa0]","g"),"").replace(r.decimal,"."))*r.factor},o._realNumberRegexp=function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(e.places)||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);var n=o._integerRegexp(e),r=i.buildGroupRE(e.fractional,(function(n){var r="";return n&&0!==e.places&&(r="\\"+e.decimal,e.places==1/0?r="(?:"+r+"\\d+)?":r+="\\d{"+e.places+"}"),r}),!0),t=n+r;return r&&(t="(?:(?:"+t+")|(?:"+r+"))"),t+i.buildGroupRE(e.exponent,(function(n){return n?"([eE]"+o._integerRegexp({signed:e.eSigned})+")":""}))},o._integerRegexp=function(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",i.buildGroupRE(e.signed,(function(e){return e?"[-+]":""}),!0)+i.buildGroupRE(e.separator,(function(n){if(!n)return"(?:\\d+)";" "==(n=i.escapeString(n))?n="\\s":" "==n&&(n="\\s\\xa0");var r=e.groupSize,t=e.groupSize2;if(t){var o="(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+n+"]\\d{"+t+"})*["+n+"]\\d{"+r+"})";return r-t>0?"(?:"+o+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":o}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*)"}),!0)},o}.apply(null,t))||(e.exports=i)},1662:function(e,n,r){var t,i;t=[r(59),r(61),r(1663),r(1664),r(1665),r(1666),r(1667),r(1668),r(1669),r(1670),r(1671),r(1672),r(1673),r(1674),r(1675),r(1676),r(1677),r(1678),r(1679),r(1680),r(1681),r(1682),r(1683),r(1684),r(1685),r(1686),r(1687),r(1688),r(1689),r(1690),r(1691),r(1692),r(1693),r(1694),r(1695),r(1696),r(1697),r(1698),r(1699),r(1700),r(1701),r(1702),r(1703),r(1704),r(1705),r(1706),r(1707),r(1708)],void 0===(i=function(e,n){return n(e,"dojo/cldr/nls/number",r.dj.c(),!1)}.apply(null,t))||(e.exports=i)},1663:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"‎-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"‎+","decimalFormat-long":"000 تريليون","decimalFormat-short":"000 ترليو"}},1664:function(e,n,r){e.exports={group:".",decimal:","}},1665:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 bilions","decimalFormat-short":"000 B"}},1666:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 bilionů","decimalFormat-short":"000 bil'.'"}},1667:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 billioner","decimalFormat-short":"000 bill"}},1668:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"·",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 Billionen","decimalFormat-short":"000 Bio'.'"}},1669:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"e",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000 τρισεκατομμύρια","decimalFormat-short":"000 τρισ'.'"}},1670:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000 trillion","decimalFormat-short":"000T"}},1671:function(e,n,r){e.exports={currencyFormat:"¤#,##0.00"}},1672:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 billones","decimalFormat-short":"000 B"}},1673:function(e,n,r){e.exports={scientificFormat:"#E0",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"−","decimalFormat-short":"000 trl",nan:"NaN",plusSign:"+",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",perMille:"‰",group:" ",percentFormat:"#,##0%","decimalFormat-long":"000 triljonit",decimalFormat:"#,##0.###","currencyFormat-short":"000 trl ¤",timeSeparator:":",decimal:",",exponential:"×10^"}},1674:function(e,n,r){e.exports={decimal:".",group:",",list:";",percentSign:"%",plusSign:"+",minusSign:"-",exponential:"E",superscriptingExponent:"×",perMille:"‰",infinity:"∞",nan:"NaN",timeSeparator:":",percentFormat:"#,##0%"}},1675:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"−",decimal:",",superscriptingExponent:"×",nan:"epäluku",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 biljoonaa","decimalFormat-short":"000 bilj'.'"}},1676:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 billions","decimalFormat-short":"000 Bn"}},1677:function(e,n,r){e.exports={currencyFormat:"¤ #,##0.00;¤-#,##0.00",group:"'",decimal:"."}},1678:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"‎-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"‎+","decimalFormat-long":"‏000 טריליון","decimalFormat-short":"‏000 ביל׳"}},1679:function(e,n,r){e.exports={decimal:".",group:",",list:";",percentSign:"%",plusSign:"+",minusSign:"-",exponential:"E",superscriptingExponent:"×",perMille:"‰",infinity:"∞",nan:"NaN",decimalFormat:"#,##,##0.###","decimalFormat-long":"0000 खरब","decimalFormat-short":"000T",scientificFormat:"#E0",percentFormat:"#,##,##0%",currencyFormat:"¤#,##,##0.00"}},1680:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 bilijuna","decimalFormat-short":"000 bil'.'"}},1681:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 billió","decimalFormat-short":"000 B"}},1682:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00",plusSign:"+","decimalFormat-long":"000 triliun","decimalFormat-short":"000 T"}},1683:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 mila di miliardi","decimalFormat-short":"000 Bln"}},1684:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000兆","decimalFormat-short":"000兆"}},1685:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000조","decimalFormat-short":"000조"}},1686:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤ #,##0.00",plusSign:"+","decimalFormat-long":"000 трилиони","decimalFormat-short":"000 трил'.'"}},1687:function(e,n,r){e.exports={scientificFormat:"#E0",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"−","decimalFormat-short":"000 trln'.'",nan:"NaN",plusSign:"+",currencyFormat:"#,##0.00 ¤",perMille:"‰",group:" ",percentFormat:"#,##0 %","decimalFormat-long":"000 trilijonų",decimalFormat:"#,##0.###","currencyFormat-short":"000 trln'.' ¤",timeSeparator:":",decimal:",",exponential:"×10^"}},1688:function(e,n,r){e.exports={scientificFormat:"#E0",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","decimalFormat-short":"000 trilj'.'",nan:"NS",plusSign:"+",currencyFormat:"#,##0.00 ¤",perMille:"‰",group:" ",percentFormat:"#,##0%","decimalFormat-long":"000 triljoni",decimalFormat:"#,##0.###","currencyFormat-short":"¤000 trilj'.'",timeSeparator:":",decimal:",",exponential:"E"}},1689:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"−",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤ #,##0.00",plusSign:"+","decimalFormat-long":"000 billioner","decimalFormat-short":"000 bill"}},1690:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤ #,##0.00;(¤ #,##0.00)",plusSign:"+","decimalFormat-long":"000 biljoen","decimalFormat-short":"000 bln'.'"}},1691:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 biliona","decimalFormat-short":"000 bln"}},1692:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000 trilhões","decimalFormat-short":"000 tri"}},1693:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 biliões","decimalFormat-short":"000 Bi"}},1694:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 de trilioane","decimalFormat-short":"000 tril'.'"}},1695:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"не число",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 триллиона","decimalFormat-short":"000 трлн"}},1696:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 biliónov","decimalFormat-short":"000 bil'.'"}},1697:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"e",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 bilijonov","decimalFormat-short":"000 bil'.'"}},1698:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 трилиона","decimalFormat-short":"000 бил'.'"}},1699:function(e,n,r){e.exports={group:" ",percentSign:"%",exponential:"×10^",scientificFormat:"#E0",percentFormat:"#,##0 %",list:";",infinity:"∞",minusSign:"−",decimal:",",superscriptingExponent:"·",nan:"¤¤¤",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤",plusSign:"+","decimalFormat-long":"000 biljoner","decimalFormat-short":"000 bn"}},1700:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000 ล้านล้าน","decimalFormat-short":"000 ล'.'ล'.'"}},1701:function(e,n,r){e.exports={group:".",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"%#,##0",list:";",infinity:"∞",minusSign:"-",decimal:",",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"#,##0.00 ¤;(#,##0.00 ¤)",plusSign:"+","decimalFormat-long":"000 trilyon","decimalFormat-short":"000 Tn"}},1702:function(e,n,r){e.exports={decimal:",",group:" ",list:";",percentSign:"%",plusSign:"+",minusSign:"-",exponential:"Е",superscriptingExponent:"×",perMille:"‰",infinity:"∞",nan:"NaN",timeSeparator:":",decimalFormat:"#,##0.###","decimalFormat-long":"000 трильйона","decimalFormat-short":"000 трлн",scientificFormat:"#E0",percentFormat:"#,##0%",currencyFormat:"#,##0.00¤;(#,##0.00¤)","currencyFormat-short":"000 трлн ¤"}},1703:function(e,n,r){e.exports={scientificFormat:"#E0",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","decimalFormat-short":"000 NT",nan:"NaN",plusSign:"+",currencyFormat:"#,##0.00 ¤",perMille:"‰",group:".",percentFormat:"#,##0%","decimalFormat-long":"000 nghìn tỷ",decimalFormat:"#,##0.###","currencyFormat-short":"000 NT ¤",timeSeparator:":",decimal:",",exponential:"E"}},1704:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"NaN",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000兆","decimalFormat-short":"000兆"}},1705:function(e,n,r){e.exports={group:",",percentSign:"%",exponential:"E",scientificFormat:"#E0",percentFormat:"#,##0%",list:";",infinity:"∞",minusSign:"-",decimal:".",superscriptingExponent:"×",nan:"非數值",perMille:"‰",decimalFormat:"#,##0.###",currencyFormat:"¤#,##0.00;(¤#,##0.00)",plusSign:"+","decimalFormat-long":"000兆","decimalFormat-short":"000T"}},1706:function(e,n,r){e.exports={$locale:"zh-hant-hk","decimalFormat-short":"000T",nan:"非數值"}},1707:function(e,n,r){e.exports={$locale:"zh-hant-tw","decimalFormat-short":"000T",nan:"非數值"}},1708:function(e,n,r){e.exports={root:{scientificFormat:"#E0","currencySpacing-afterCurrency-currencyMatch":"[:^S:]",infinity:"∞",superscriptingExponent:"×",list:";",percentSign:"%",minusSign:"-","currencySpacing-beforeCurrency-surroundingMatch":"[:digit:]","decimalFormat-short":"000T","currencySpacing-afterCurrency-insertBetween":" ",nan:"NaN",plusSign:"+","currencySpacing-afterCurrency-surroundingMatch":"[:digit:]","currencySpacing-beforeCurrency-currencyMatch":"[:^S:]",currencyFormat:"¤ #,##0.00",perMille:"‰",group:",",percentFormat:"#,##0%","decimalFormat-long":"000T",decimalFormat:"#,##0.###",decimal:".","currencySpacing-beforeCurrency-insertBetween":" ",exponential:"E"},ar:!0,bs:!0,ca:!0,cs:!0,da:!0,de:!0,el:!0,en:!0,"en-au":!0,es:!0,et:!0,"es-mx":!0,fi:!0,fr:!0,"fr-ch":!0,he:!0,hi:!0,hr:!0,hu:!0,id:!0,it:!0,ja:!0,ko:!0,mk:!0,lt:!0,lv:!0,nb:!0,nl:!0,pl:!0,pt:!0,"pt-pt":!0,ro:!0,ru:!0,sk:!0,sl:!0,sr:!0,sv:!0,th:!0,tr:!0,uk:!0,vi:!0,zh:!0,"zh-hant":!0,"zh-hk":!0,"zh-tw":!0}},879:function(e,n,r){var t,i;t=[r.dj.c(e.i),n,r(11),r(9),r(55),r(883),r(892),r(876)],void 0===(i=function(e,n,r,t,i,o,a,l){function c(e,n){return e?n?4:3:n?3:2}function s(e,n){var r=e.scale,t=e.translate;return Math.round((n-t[0])/r[0])}function u(e,n){var r=e.scale,t=e.translate;return Math.round((t[1]-n)/r[1])}function m(e,n){var r=e.scale,t=e.translate;return n*r[0]+t[0]}function p(e,n){var r=e.scale;return e.translate[1]-n*r[1]}function d(e){var n=e.coords;return{x:n[0],y:n[1]}}function g(e,n){return e.coords[0]=n.x,e.coords[1]=n.y,e}function f(e){var n=e.coords;return{x:n[0],y:n[1],z:n[2]}}function h(e,n){return e.coords[0]=n.x,e.coords[1]=n.y,e.coords[2]=n.z,e}function F(e){var n=e.coords;return{x:n[0],y:n[1],m:n[2]}}function y(e,n){return e.coords[0]=n.x,e.coords[1]=n.y,e.coords[2]=n.m,e}function x(e){var n=e.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function v(e,n){return e.coords[0]=n.x,e.coords[1]=n.y,e.coords[2]=n.z,e.coords[3]=n.m,e}function S(e,n){return e&&n?v:e?h:n?y:g}function b(e,n,r,t,i){for(var a=S(r,t),c=0,s=n;c<s.length;c++){var u=s[c],m=u.geometry,p=u.attributes,d=void 0;m&&(d=a(new l.default,m)),e.push(new o.default(d,p,null,p[i]))}return e}function E(e,n,r){if(!e)return null;for(var t=c(n,r),i=[],o=0;o<e.coords.length;o+=t){for(var a=[],l=0;l<t;l++)a.push(e.coords[o+l]);i.push(a)}return n?r?{points:i,hasZ:n,hasM:r}:{points:i,hasZ:n}:r?{points:i,hasM:r}:{points:i}}function N(e,n,r,t,i){for(var a=c(r,t),s=0,u=n;s<u.length;s++){var m=u[s],p=m.geometry,d=m.attributes,g=void 0;p&&(g=M(new l.default,p,a)),e.push(new o.default(g,d,null,d[i]))}return e}function M(e,n,r){void 0===r&&(r=c(n.hasZ,n.hasM)),e.lengths[0]=n.points.length;for(var t=e.coords,i=0,o=0,a=n.points;o<a.length;o++)for(var l=a[o],s=0;s<r;s++)t[i++]=l[s];return e}function j(e,n,r){if(!e)return null;for(var t=c(n,r),i=e.coords,o=[],a=0,l=0,s=e.lengths;l<s.length;l++){for(var u=s[l],m=[],p=0;p<u;p++){for(var d=[],g=0;g<t;g++)d.push(i[a++]);m.push(d)}o.push(m)}return n?r?{paths:o,hasZ:n,hasM:r}:{paths:o,hasZ:n}:r?{paths:o,hasM:r}:{paths:o}}function w(e,n,r,t,i){for(var a=c(r,t),s=0,u=n;s<u.length;s++){var m=u[s],p=m.geometry,d=m.attributes,g=void 0;p&&(g=I(new l.default,p,a)),e.push(new o.default(g,d,null,d[i]))}return e}function I(e,n,r){void 0===r&&(r=c(n.hasZ,n.hasM));for(var t=e.lengths,i=e.coords,o=0,a=0,l=n.paths;a<l.length;a++){for(var s=l[a],u=0,m=s;u<m.length;u++)for(var p=m[u],d=0;d<r;d++)i[o++]=p[d];t.push(s.length)}return e}function T(e,n,r){if(!e)return null;for(var t=c(n,r),i=e.coords,o=[],a=0,l=0,s=e.lengths;l<s.length;l++){for(var u=s[l],m=[],p=0;p<u;p++){for(var d=[],g=0;g<t;g++)d.push(i[a++]);m.push(d)}o.push(m)}return n?r?{rings:o,hasZ:n,hasM:r}:{rings:o,hasZ:n}:r?{rings:o,hasM:r}:{rings:o}}function z(e,n,r,t,i){for(var a=0,c=n;a<c.length;a++){var s=c[a],u=s.geometry,m=s.centroid,p=s.attributes,d=void 0;u&&(d=G(new l.default,u,r,t)),m?e.push(new o.default(d,p,g(new l.default,m),p[i])):e.push(new o.default(d,p,null,p[i]))}return e}function G(e,n,r,t){return void 0===r&&(r=n.hasZ),void 0===t&&(t=n.hasM),O(e,n.rings,r,t),e}function O(e,n,r,t){var i=c(r,t),o=e.lengths,a=e.coords,l=0;o.length=a.length=0;for(var s=0,u=n;s<u.length;s++){for(var m=u[s],p=0,d=m;p<d.length;p++)for(var g=d[p],f=0;f<i;f++)a[l++]=g[f];o.push(m.length)}return e}function P(e,n,t,i,a,l){if(e.length=0,!t){for(var c=0,s=n;c<s.length;c++){var u=s[c],m=u.attributes[l];e.push(new o.default(null,u.attributes,null,m))}return e}switch(t){case"esriGeometryPoint":return b(e,n,i,a,l);case"esriGeometryMultipoint":return N(e,n,i,a,l);case"esriGeometryPolyline":return w(e,n,i,a,l);case"esriGeometryPolygon":return z(e,n,i,a,l);default:A.error("convertToFeatureSet:unknown-geometry",new r("Unable to parse unknown geometry type '"+t+"'")),e.length=0}return e}function k(e,n,t,i,o){switch(e.length=0,t){case"esriGeometryPoint":return function(e,n,r,t){var i=d;r&&t?i=x:r?i=f:t&&(i=F);for(var o=0,a=n;o<a.length;o++){var l=a[o],c=l.geometry,s=l.attributes,u=c?i(c):null;e.push({attributes:s,geometry:u})}return e}(e,n,i,o);case"esriGeometryMultipoint":return function(e,n,r,t){for(var i=0,o=n;i<o.length;i++){var a=o[i],l=a.geometry,c=a.attributes,s=void 0;l&&(s=E(l,r,t)),e.push({attributes:c,geometry:s})}return e}(e,n,i,o);case"esriGeometryPolyline":return function(e,n,r,t){for(var i=0,o=n;i<o.length;i++){var a=o[i],l=a.geometry,c=a.attributes,s=void 0;l&&(s=j(l,r,t)),e.push({attributes:c,geometry:s})}return e}(e,n,i,o);case"esriGeometryPolygon":return function(e,n,r,t){for(var i=0,o=n;i<o.length;i++){var a=o[i],l=a.geometry,c=a.attributes,s=a.centroid,u=void 0;if(l&&(u=T(l,r,t)),s){var m=d(s);e.push({attributes:c,centroid:m,geometry:u})}else e.push({attributes:c,geometry:u})}return e}(e,n,i,o);default:A.error("convertToFeatureSet:unknown-geometry",new r("Unable to parse unknown geometry type '"+t+"'"))}return e}function _(e,n,r,t,i,o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!n||!n.coords.length)return null;var a=Y[i],l=n.coords,m=n.lengths,p=c(r,t),d=r?t?V:C:t?C:L;if(!m.length)return d(e.coords,l,0,0,s(o,l[0]),u(o,l[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=p,e;for(var g,f,h,F,y=0,x=0,v=x,S=0,b=m;S<b.length;S++){var E=b[S];if(!(E<a)){var N=0;x=v,h=g=s(o,l[y]),F=f=u(o,l[y+1]),d(e.coords,l,x,y,h,F),N++,y+=p,x+=p;for(var M=1;M<E;M++,y+=p)h=s(o,l[y]),F=u(o,l[y+1]),h===g&&F===f||(d(e.coords,l,x,y,h-g,F-f),x+=p,N++,g=h,f=F);N>=a&&(e.lengths.push(N),v=x)}}return e.coords.length=v,e.coords.length?e:null}function R(e,n,r,t){var i=e[n],o=e[n+1],a=e[r],l=e[r+1],c=e[t],s=e[t+1];if(a===c)return Math.abs(i-a);var u=(s-l)/(c-a),m=l-u*a;return Math.abs(u*i-o+m)/Math.sqrt(u*u+1)}function Z(e,n,r,t,i,o,a){for(var l,c=o,s=a-r,u=0,m=0,p=o+r;p<a-r;p+=r)(l=R(n,p,c,s))>u&&(m=p,u=l);u>t?(Z(e,n,r,t,i,o,m+r),Z(e,n,r,t,i,m,a)):(i(e,n,e.length,c,n[c],n[c+1]),i(e,n,e.length,s,n[s],n[s+1]))}function B(e,n,r,t,i){var o=n.coords,a=n.lengths,l=r?t?V:C:t?C:L,s=c(r,t);if(!o.length)return e!==n&&(e.lengths.length=0,e.coords.length=0),e;if(!a.length)return l(e.coords,o,0,0,m(i,o[0]),p(i,o[1])),e!==n&&(e.lengths.length=0,e.coords.length=s),e;for(var u=i.scale,d=u[0],g=u[1],f=0,h=0;h<a.length;h++){var F=a[h];e.lengths[h]=F;var y=m(i,o[f]),x=p(i,o[f+1]);l(e.coords,o,f,f,y,x),f+=s;for(var v=1;v<F;v++,f+=s)y+=o[f]*d,x-=o[f+1]*g,l(e.coords,o,f,f,y,x)}return e!==n&&(e.lengths.length=a.length,e.coords.length=o.length),e}Object.defineProperty(n,"__esModule",{value:!0});var A=t.getLogger("esri.tasks.support.optimizedFeatureSet"),Y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0},L=function(e,n,r,t,i,o){e[r]=i,e[r+1]=o},C=function(e,n,r,t,i,o){e[r]=i,e[r+1]=o,e[r+2]=n[t+2]},V=function(e,n,r,t,i,o){e[r]=i,e[r+1]=o,e[r+2]=n[t+2],e[r+3]=n[t+3]};n.quantizeX=s,n.quantizeY=u,n.hydrateX=m,n.hydrateY=p,n.convertToPoint=function(e,n,r){return e?n?r?x(e):f(e):r?F(e):d(e):null},n.convertFromPoint=function(e,n,r){return void 0===r&&(r=S(null!=n.z,null!=n.m)),r(e,n)},n.convertToMultipoint=E,n.convertFromMultipoint=M,n.convertToPolyline=j,n.convertFromPolyline=I,n.convertToPolygon=T,n.convertFromPolygon=G,n.convertFromNestedArray=O;var q=[],$=[];n.convertFromFeature=function(e,n,r,t,i){q[0]=e;var o=P($,q,n,r,t,i)[0];return q.length=$.length=0,o},n.convertFromFeatures=P,n.convertToFeature=function(e,n,r,t){$[0]=e,k(q,$,n,r,t);var i=q[0];return q.length=$.length=0,i},n.convertFromGeometry=function(e,n,t){if(!e)return null;var o=new l.default;return"hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==t&&(t=e.hasM),i.isPoint(e)?S(null!=n?n:null!=e.z,null!=t?t:null!=e.m)(o,e):i.isPolygon(e)?G(o,e,n,t):i.isPolyline(e)?I(o,e,c(n,t)):i.isMultipoint(e)?M(o,e,c(n,t)):void A.error("convertFromGeometry:unknown-geometry",new r("Unable to parse unknown geometry type '"+e+"'"))},n.convertToGeometry=function(e,n,t,i){var o=e&&("coords"in e?e:e.geometry);if(!o)return null;switch(n){case"esriGeometryPoint":var a=d;return t&&i?a=x:t?a=f:i&&(a=F),a(o);case"esriGeometryMultipoint":return E(o,t,i);case"esriGeometryPolyline":return j(o,t,i);case"esriGeometryPolygon":return T(o,t,i);default:return void A.error("convertToGeometry:unknown-geometry",new r("Unable to parse unknown geometry type '"+n+"'"))}},n.convertToFeatures=k,n.convertToFeatureSet=function(e){var n=e.objectIdFieldName,r=e.spatialReference,t=e.transform,i=e.fields,o=e.hasM,a=e.hasZ,l=e.features,c=e.geometryType,s=e.exceededTransferLimit,u={features:k([],l,c,a,o),fields:i,geometryType:c,objectIdFieldName:n,spatialReference:r};return t&&(u.transform=t),s&&(u.exceededTransferLimit=s),o&&(u.hasM=o),a&&(u.hasZ=a),u},n.convertFromFeatureSet=function(e,n){var t=new a.default,i=e.hasM,o=e.hasZ,l=e.features,c=e.objectIdFieldName,s=e.spatialReference,u=e.geometryType,m=e.exceededTransferLimit,p=e.transform;return t.fields=e.fields,t.geometryType=u,t.objectIdFieldName=c||n,t.spatialReference=s,t.objectIdFieldName?(l&&P(t.features,l,u,o,i,t.objectIdFieldName),m&&(t.exceededTransferLimit=m),i&&(t.hasM=i),o&&(t.hasZ=o),p&&(t.transform=p),t):(A.error(new r("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),t)},n.hydrateOptimizedFeatureSet=function(e){var n=e.transform,r=e.features,t=e.hasM,i=e.hasZ;if(!n)return e;for(var o=0,a=r;o<a.length;o++){var l=a[o];l.geometry&&B(l.geometry,l.geometry,t,i,n),l.centroid&&B(l.centroid,l.centroid,t,i,n)}return e.transform=null,e},n.quantizeOptimizedFeatureSet=function(e,n){var r=n.geometryType,t=n.features,i=n.hasM,a=n.hasZ;if(!e)return n;for(var c=0;c<t.length;c++){var s=t[c],u=new o.default(new l.default,s.attributes);_(u.geometry,s.geometry,i,a,r,e),s.centroid&&(u.centroid=new l.default,_(u.centroid,s.centroid,i,a,"esriGeometryPoint",e)),t[c]=u}return n.transform=e,n},n.quantizeOptimizedGeometry=_,n.quantizeOptimizedGeometryRemoveCollinear=function(e,n,r,t,i,o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!n||!n.coords.length)return null;var a=Y[i],l=n.coords,m=n.lengths,p=c(r,t),d=r?t?V:C:t?C:L;if(!m.length)return d(e.coords,l,0,0,s(o,l[0]),u(o,l[1])),e.lengths.length&&(e.lengths.length=0),e.coords.length=p,e;for(var g,f,h,F,y=0,x=0,v=x,S=0,b=m;S<b.length;S++){var E=b[S];if(!(E<a)){var N=0;x=v,h=g=s(o,l[y]),F=f=u(o,l[y+1]),d(e.coords,l,x,y,h,F),N++,y+=p;for(var M=!1,j=0,w=0,I=1;I<E;I++,y+=p)if(h=s(o,l[y]),F=u(o,l[y+1]),h!==g||F!==f){var T=h-g,z=F-f;M&&(0===j&&0===T||0===w&&0===z)?(j+=T,w+=z,d(e.coords,l,x,y,j,w)):(M=!0,j=T,w=z,x+=p,N++,d(e.coords,l,x,y,j,w)),g=h,f=F}M&&(x+=p,d(e.coords,l,x,y,j,w)),N>=a&&(e.lengths.push(N),v=x)}}return e.coords.length!==v&&(e.coords.length=v),e.coords.length?e:null},n.generalizeOptimizedGeometry=function(e,n,r,t,i,o){if(e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0),!n||!n.coords.length)return null;var a=Y[i],l=n.coords,s=n.lengths,u=c(r,t),m=r?t?V:C:t?C:L;if(!s.length)return m(e.coords,l,0,0,l[0],l[1]),e.lengths.length&&(e.lengths.length=0),e.coords.length=u,e;for(var p=0,d=0,g=s;d<g.length;d++){var f=g[d];if(f<a)p+=f*u;else{var h=e.coords.length/u;Z(e.coords,l,u,o,m,p,p+f*u);var F=e.coords.length/u-h;F>=a?e.lengths.push(F):e.coords.length=h*u,p+=f*u}}return e.coords.length?e:null},n.getBoundsOptimizedGeometry=function(e,n,r,t){var i=c(r,t),o=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(n&&n.coords)for(var u=n.coords,m=0;m<u.length;m+=i){var p=u[m],d=u[m+1];o=Math.min(o,p),l=Math.max(l,p),a=Math.min(a,d),s=Math.max(s,d)}return e[0]=o,e[1]=a,e[2]=l,e[3]=s,e},n.getQuantizedBoundsOptimizedGeometry=function(e,n,r,t){for(var i=c(r,t),o=n.lengths,a=n.coords,l=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,u=Number.NEGATIVE_INFINITY,m=Number.NEGATIVE_INFINITY,p=0,d=0,g=o;d<g.length;d++){var f=g[d],h=a[p],F=a[p+1];l=Math.min(h,l),s=Math.min(F,s),u=Math.max(h,u),m=Math.max(F,m),p+=i;for(var y=1;y<f;y++,p+=i){var x=a[p],v=a[p+1];h+=x,F+=v,x<0&&(l=Math.min(l,h)),x>0&&(u=Math.max(u,h)),v<0?s=Math.min(s,F):v>0&&(m=Math.max(m,F))}}return e[0]=l,e[1]=s,e[2]=u,e[3]=m,e},n.hydrateOptimizedGeometry=B}.apply(null,t))||(e.exports=i)},914:function(e,n,r){var t,i;t=[r(24),r(22)],void 0===(i=function(e,n){var r={};return n.setObject("dojo.regexp",r),r.escapeString=function(e,n){return e.replace(/([\.$?*|{}\(\)\[\]\\\/\+\-^])/g,(function(e){return n&&-1!=n.indexOf(e)?e:"\\"+e}))},r.buildGroupRE=function(e,n,t){if(!(e instanceof Array))return n(e);for(var i=[],o=0;o<e.length;o++)i.push(n(e[o]));return r.group(i.join("|"),t)},r.group=function(e,n){return"("+(n?"?:":"")+e+")"},r}.apply(null,t))||(e.exports=i)}}]);