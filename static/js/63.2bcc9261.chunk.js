(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[63],{153:function(t,n,e){"use strict";e.r(n),e.d(n,"bds_tab_item",(function(){return u}));var r=e(8),o=function(t,n,e,r){function o(t){return t instanceof e?t:new e((function(n){n(t)}))}return new(e||(e=Promise))((function(e,i){function u(t){try{c(r.next(t))}catch(n){i(n)}}function l(t){try{c(r.throw(t))}catch(n){i(n)}}function c(t){t.done?e(t.value):o(t.value).then(u,l)}c((r=r.apply(t,n||[])).next())}))},i=function(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(t){return function(n){return c([t,n])}}function c(l){if(e)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(u=0)),u;)try{if(e=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return u.label++,{value:l[1],done:!1};case 5:u.label++,r=l[1],l=[0];continue;case 7:l=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){u=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){u.label=l[1];break}if(6===l[0]&&u.label<o[1]){u.label=o[1],o=l;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(l);break}o[2]&&u.ops.pop(),u.trys.pop();continue}l=n.call(t,u)}catch(c){l=[6,c],r=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},u=function(){function t(t){Object(r.r)(this,t),this.numberElement=null,this.label=null,this.open=!1}return t.prototype.reciveNumber=function(t){return o(this,void 0,void 0,(function(){return i(this,(function(n){return this.numberElement=t,[2]}))}))},t.prototype.render=function(){var t;return Object(r.h)(r.H,null,Object(r.h)("div",{class:{tab_item:!0}},Object(r.h)("div",{class:(t={tab_item_content:!0},t["tab_item_content--open"]=this.open,t)},Object(r.h)("slot",null))))},t}();u.style=".tab_item_content{display:none}.tab_item_content--open{display:block}"}}]);