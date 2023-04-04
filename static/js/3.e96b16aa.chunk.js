/*! For license information please see 3.e96b16aa.chunk.js.LICENSE.txt */
(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[3],{38:function(t,e,n){"use strict";n.r(e),n.d(e,"scopeCss",(function(){return L}));var r=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,c=e.length;o<c;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))},o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("(-shadowcsshost"+o,"gim"),s=new RegExp("(-shadowcsscontext"+o,"gim"),a=new RegExp("(-shadowcssslotted"+o,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],l=/-shadowcsshost/gim,h=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,g=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=/(^.*?[^\\])??((:+)(.*)|$)/,x=function(t,e){var n=b(t),r=0;return n.escapedString.replace(m,(function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];var c=t[2],s="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(s=n.blocks[r++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:c,content:s},l=e(u);return"".concat(t[1]).concat(l.selector).concat(t[3]).concat(i).concat(l.content).concat(a)}))},b=function(t){for(var e=t.split(v),n=[],r=[],o=0,c=[],s=0;s<e.length;s++){var a=e[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(r.push(c.join("")),n.push("%BLOCK%"),c=[]),n.push(a)),"{"===a&&o++}return c.length>0&&(r.push(c.join("")),n.push("%BLOCK%")),{escapedString:n.join(""),blocks:r}},_=function(t,e,n){return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var r=t[2].split(","),o=[],c=0;c<r.length;c++){var s=r[c].trim();if(!s)break;o.push(n("-shadowcsshost-no-combinator",s,t[3]))}return o.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},O=function(t,e,n){return t+e.replace("-shadowcsshost","")+n},S=function(t,e,n){return e.indexOf("-shadowcsshost")>-1?O(t,e,n):t+e+n+", "+e+" "+t+n},W=function(t,e){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(e).test(t)},j=function(t,e){return t.replace(w,(function(t,n,r,o,c){return void 0===n&&(n=""),void 0===o&&(o=""),void 0===c&&(c=""),n+e+o+c}))},k=function(t,e,n){for(var r,o="."+(e=e.replace(/\[is=([^\]]*)\]/g,(function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e[0]}))),c=function(t){var r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=function(t,e,n){if(l.lastIndex=0,l.test(t)){var r=".".concat(n);return t.replace(i,(function(t,e){return j(e,r)})).replace(l,r+" ")}return e+" "+t}(t,e,n);else{var c=t.replace(l,"");c.length>0&&(r=j(c,o))}return r},s=function(t){var e=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var o="__ph-".concat(n,"__");return e.push(r),n++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,o){var c="__ph-".concat(n,"__");return e.push(o),n++,r+c})),placeholders:e}}(t),a="",u=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(r=h.exec(t));){var f=r[1],d=t.slice(u,r.index).trim(),g=(p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?c(d):d;a+="".concat(g," ").concat(f," "),u=h.lastIndex}var m=t.substring(u);return a+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?c(m):m,function(t,e){return e.replace(/__ph-(\d+)__/g,(function(e,n){return t[+n]}))}(s.placeholders,a)},C=function t(e,n,r,o,c){return x(e,(function(e){var c=e.selector,s=e.content;return"@"!==e.selector[0]?c=function(t,e,n,r){return t.split(",").map((function(t){return r&&t.indexOf("."+r)>-1?t.trim():W(t,e)?k(t,e,n).trim():t.trim()})).join(", ")}(e.selector,n,r,o):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(s=t(e.content,n,r,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}}))},E=function(t,e,n,r,o){var i=function(t,e){var n="."+e+" > ",r=[];return t=t.replace(a,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){for(var o=t[2].trim(),c=t[3],s=n+o+c,a="",i=t[4]-1;i>=0;i--){var u=t[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,h="".concat(a.trimRight()).concat(s.trim());if(l.trim()!==h.trim()){var p="".concat(h,", ").concat(l);r.push({orgSelector:l,updatedSelector:p})}return s}return"-shadowcsshost-no-combinator"+t[3]})),{selectors:r,cssText:t}}(t=function(t){return _(t,s,S)}(t=function(t){return _(t,c,O)}(t=function(t){return t=t.replace(f,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(p,"-shadowcssslotted")}(t))),r);return t=function(t){return u.reduce((function(t,e){return t.replace(e," ")}),t)}(t=i.cssText),e&&(t=C(t,e,n,r)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(n))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:i.selectors}},L=function(t,e,n){var o=e+"-h",c=e+"-s",s=function(t){return t.match(g)||[]}(t);t=function(t){return t.replace(d,"")}(t);var a=[];if(n){var i=function(t){var e="/*!@___".concat(a.length,"___*/"),n="/*!@".concat(t.selector,"*/");return a.push({placeholder:e,comment:n}),t.selector=e+t.selector,t};t=x(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=x(t.content,i),t):t}))}var u=E(t,e,o,c);return t=r([u.cssText],s,!0).join("\n"),n&&a.forEach((function(e){var n=e.placeholder,r=e.comment;t=t.replace(n,r)})),u.slottedSelectors.forEach((function(e){t=t.replace(e.orgSelector,e.updatedSelector)})),t}}}]);