(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[13],{74:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_accordion",(function(){return c}));var o=n(7),i=function(t,e,n,o){function i(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,r){function c(t){try{a(o.next(t))}catch(e){r(e)}}function s(t){try{a(o.throw(t))}catch(e){r(e)}}function a(t){t.done?n(t.value):i(t.value).then(c,s)}a((o=o.apply(t,e||[])).next())}))},r=function(t,e){var n,o,i,r,c={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(t){return function(e){return a([t,e])}}function a(s){if(n)throw new TypeError("Generator is already executing.");for(;r&&(r=0,s[0]&&(c=0)),c;)try{if(n=1,o&&(i=2&s[0]?o.return:s[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;switch(o=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,o=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!(i=(i=c.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){c=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){c.label=s[1];break}if(6===s[0]&&c.label<i[1]){c.label=i[1],i=s;break}if(i&&c.label<i[2]){c.label=i[2],c.ops.push(s);break}i[2]&&c.ops.pop(),c.trys.pop();continue}s=e.call(t,c)}catch(a){s=[6,a],o=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},c=function(){function t(t){Object(o.r)(this,t),this.bdsToggle=Object(o.c)(this,"bdsToggle",7),this.bdsAccordionOpen=Object(o.c)(this,"bdsAccordionOpen",7),this.bdsAccordionClose=Object(o.c)(this,"bdsAccordionClose",7),this.accGroup=null,this.accheaders=null,this.accBodies=null,this.isOpen=!1,this.numberElement=null,this.condition=!1,this.startOpen=!1}return t.prototype.toggle=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!this.isOpen,[2]}))}))},t.prototype.open=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.isOpen=!0,[2]}))}))},t.prototype.close=function(){return i(this,void 0,void 0,(function(){var t,e;return r(this,(function(n){return null===(t=this.accheaders)||void 0===t||t.close(),null===(e=this.accBodies)||void 0===e||e.close(),[2]}))}))},t.prototype.notStart=function(){return i(this,void 0,void 0,(function(){return r(this,(function(t){return this.startOpen=!1,[2]}))}))},t.prototype.reciveNumber=function(t){return i(this,void 0,void 0,(function(){return r(this,(function(e){return this.numberElement=t,[2]}))}))},t.prototype.isOpenChanged=function(t){var e,n,o;null===(e=this.accheaders)||void 0===e||e.toggle(),null===(n=this.accBodies)||void 0===n||n.toggle(),this.bdsToggle.emit({value:t}),t?this.bdsAccordionOpen.emit():this.bdsAccordionClose.emit(),"single"==this.accGroup.collapse&&!1===this.condition&&(null===(o=this.accGroup)||void 0===o||o.closeAll(this.numberElement)),this.condition=!1},t.prototype.componentWillLoad=function(){this.accGroup="BDS-ACCORDION-GROUP"==this.element.parentElement.tagName&&this.element.parentElement,this.accheaders=this.element.children[0],this.accBodies=this.element.children[1],!0===this.startOpen&&(this.condition=!0,this.isOpen=!0)},t.prototype.render=function(){return Object(o.h)("div",{class:"accordion_group"},Object(o.h)("slot",null))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),t}();c.style='.accordion_header{display:grid;grid-auto-flow:column;gap:24px;-ms-flex-pack:start;justify-content:start;-ms-flex-align:center;align-items:center;padding:24px;padding-right:56px;position:relative;color:var(--color-content-default, #202c44);cursor:pointer}.accordion_header::before{content:"";position:absolute;inset:0;z-index:0}.accordion_header *{position:relative;z-index:1}.accordion_header:hover::before{background-color:var(--color-content-default, #202c44);opacity:0.08}.accordion_header .accButton{position:absolute;right:24px;top:calc(50% - 16px);border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1}.accordion_header .accButton__isopen{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.accordion_header .accButton::before{content:"";position:absolute;inset:-4px;border:2px solid transparent;border-radius:4px}.accordion_header .accButton:focus-visible{outline:none}.accordion_header .accButton:focus-visible::before{border-color:var(--color-focus, #c226fb)}.accordion_header .accButton:hover{background-color:var(--color-surface-1, #ffffff)}.accordion_header .accButton:active{background-color:var(--color-surface-1, #ffffff)}.accordion_body{height:0;overflow:hidden;border-bottom:1px solid var(--color-surface-3, #e7edf4);-webkit-transition:all 0.5s;-moz-transition:all 0.5s;transition:all 0.5s}.accordion_body .container{padding:8px 24px 48px;position:relative;color:var(--color-content-default, #202c44)}'}}]);