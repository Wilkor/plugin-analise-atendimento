(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[12],{74:function(t,e,o){"use strict";o.r(e),o.d(e,"bds_accordion_header",(function(){return a}));var n=o(7),r=function(t,e,o,n){function r(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function a(t){try{l(n.next(t))}catch(e){i(e)}}function c(t){try{l(n.throw(t))}catch(e){i(e)}}function l(t){t.done?o(t.value):r(t.value).then(a,c)}l((n=n.apply(t,e||[])).next())}))},i=function(t,e){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(t){return function(e){return l([t,e])}}function l(c){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(o=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,n=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){a.label=c[1];break}if(6===c[0]&&a.label<r[1]){a.label=r[1],r=c;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(c);break}r[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(l){c=[6,l],n=0}finally{o=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},a=function(){function t(t){var e=this;Object(n.r)(this,t),this.accordionElement=null,this.toggleHeader=function(){var t;null===(t=e.accordionElement)||void 0===t||t.toggle()},this.isOpen=!1,this.btToggleIsfocus=!1,this.numberElement=null,this.accordionTitle=null,this.icon=null,this.avatarName=null,this.avatarThumb=null}return t.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.close=function(){return r(this,void 0,void 0,(function(){return i(this,(function(t){return this.isOpen=!1,[2]}))}))},t.prototype.componentWillRender=function(){this.accordionElement=this.element.parentElement},t.prototype.handleKeyDown=function(t){var e;"Enter"==t.key&&(null===(e=this.accordionElement)||void 0===e||e.toggle())},t.prototype.render=function(){return Object(n.h)("div",{onClick:this.toggleHeader,class:{accordion_header:!0}},this.avatarName||this.avatarThumb?Object(n.h)("bds-avatar",{name:this.avatarName,thumbnail:this.avatarThumb,size:"extra-small"}):this.icon&&Object(n.h)("bds-icon",{size:"x-large",name:this.icon,color:"inherit"}),this.accordionTitle&&Object(n.h)("bds-typo",{bold:"bold",variant:"fs-16","line-height":"double"},this.accordionTitle),Object(n.h)("slot",null),Object(n.h)("bds-icon",{class:{accButton:!0,accButton__isopen:this.isOpen,accButton__isfocus:this.btToggleIsfocus},size:"x-large",name:"arrow-down",color:"inherit",tabindex:"0",onKeyDown:this.handleKeyDown.bind(this)}))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),t}();a.style='.accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #202c44);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #202c44);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #ffffff)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #ffffff)}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid var(--color-surface-3, #e7edf4);-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #202c44)}'}}]);