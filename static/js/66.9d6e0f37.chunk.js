(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[66],{134:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_table",(function(){return c}));var i=n(7),a=function(t,e,n,i){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,o){function r(t){try{s(i.next(t))}catch(e){o(e)}}function c(t){try{s(i.throw(t))}catch(e){o(e)}}function s(t){t.done?n(t.value):a(t.value).then(r,c)}s((i=i.apply(t,e||[])).next())}))},o=function(t,e){var n,i,a,o,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return s([t,e])}}function s(c){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,c[0]&&(r=0)),r;)try{if(n=1,i&&(a=2&c[0]?i.return:c[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,c[1])).done)return a;switch(i=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,i=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){r.label=c[1];break}if(6===c[0]&&r.label<a[1]){r.label=a[1],a=c;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(c);break}a[2]&&r.ops.pop(),r.trys.pop();continue}c=e.call(t,r)}catch(s){c=[6,s],i=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},r=function(t,e,n){if(n||2===arguments.length)for(var i,a=0,o=e.length;a<o;a++)!i&&a in e||(i||(i=Array.prototype.slice.call(e,0,a)),i[a]=e[a]);return t.concat(i||Array.prototype.slice.call(e))},c=function(){function t(t){Object(i.r)(this,t),this.bdsTableClick=Object(i.c)(this,"bdsTableClick",7),this.bdsTableDelete=Object(i.c)(this,"bdsTableDelete",7),this.bdsTableChange=Object(i.c)(this,"bdsTableChange",7),this.newTable=[],this.headerData=[],this.tableData=[],this.sortAscending=void 0,this.headerActive=void 0,this.options=void 0,this.column=void 0,this.avatar=!1,this.chips=!1,this.actionArea=void 0,this.sorting=!1}return t.prototype.componentWillLoad=function(){this.getDataFromProprety()},t.prototype.getDataFromProprety=function(){this.headerData=JSON.parse(this.column),this.tableData=JSON.parse(this.options)},t.prototype.renderArrow=function(t){return t?Object(i.h)("bds-icon",{name:"arrow-up",size:"small"}):null},t.prototype.deleteItem=function(t){return a(this,void 0,void 0,(function(){var e;return o(this,(function(n){return e=this.tableData.filter((function(e,n){return n===t&&e})),this.bdsTableDelete.emit(e[0]),this.tableData.splice(t,1),this.tableData=r([],this.tableData,!0),this.bdsTableChange.emit(this.tableData),[2]}))}))},t.prototype.clickButton=function(t,e,n){this.bdsTableClick.emit({item:t,index:e,nameButton:n})},t.prototype.orderColumn=function(t){this.headerActive=t,this.sortAscending=!this.sortAscending,!1===this.sortAscending?this.tableData.sort((function(e,n){return e[t]>n[t]?1:-1})):this.tableData.sort((function(e,n){return e[t]>n[t]?-1:1}))},t.prototype.render=function(){var t=this;return Object(i.h)(i.H,null,Object(i.h)("table",{class:"table"},Object(i.h)("thead",{class:"thead"},Object(i.h)("tr",{class:"header"},this.headerData.map((function(e,n){return Object(i.h)("th",{class:"header-title",key:n},t.sorting?Object(i.h)("bds-typo",{class:"title-click",onClick:function(){return t.orderColumn(e.value)},variant:"fs-14",bold:t.headerActive==="".concat(e.value)?"bold":"regular"},e.heading):Object(i.h)("bds-typo",{variant:"fs-14",bold:"regular"},e.heading),!0===t.sortAscending&&!0===t.sorting&&t.headerActive==="".concat(e.value)?Object(i.h)("bds-icon",{class:"header-icon",name:"arrow-up",size:"small"}):!1===t.sortAscending&&!0===t.sorting&&t.headerActive==="".concat(e.value)?Object(i.h)("bds-icon",{name:"arrow-down",size:"small"}):"")})))),Object(i.h)("tbody",null,this.tableData.map((function(e,n){return Object(i.h)("tr",{class:"body-row",key:n},t.headerData.map((function(a,o){return Object(i.h)("td",{class:"body-item",key:o},t.actionArea&&a.editAction?Object(i.h)("bds-button-icon",{onClick:function(){return t.clickButton(e,n,a.editAction)},variant:"secondary",icon:e["".concat(a.editAction)],size:"short"}):"",t.actionArea&&a.deleteAction?Object(i.h)("bds-button-icon",{onClick:function(){return t.clickButton(e,n,a.deleteAction)},variant:"secondary",icon:e["".concat(a.deleteAction)],size:"short"}):"",t.actionArea&&a.customAction?Object(i.h)("bds-button-icon",{onClick:function(){return t.clickButton(e,n,a.customAction)},variant:"secondary",icon:e["".concat(a.customAction)],size:"short"}):"",t.chips&&a.chips?Object(i.h)("bds-chip-tag",{color:e["".concat(a.chips)]?e["".concat(a.chips)]:"default"},e["".concat(a.value)]):"",t.avatar&&a.img?Object(i.h)("bds-avatar",{size:"extra-small",thumbnail:e["".concat(a.img)],name:e["".concat(a.value)]}):"",a.chips?"":Object(i.h)("bds-typo",{variant:"fs-14",bold:t.headerActive==="".concat(a.value)?"bold":"regular"},e["".concat(a.value)]))})))})))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i.g)(this)},enumerable:!1,configurable:!0}),t}();c.style=':host{display:block}:host .table{display:grid;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;color:#202c44;width:100%;border:1px solid #d2dfe6;border-radius:8px;overflow-x:auto;padding:16px;background-color:#ffffff}:host .table .thead{border-bottom:2px solid #d2dfe6;padding:8px 16px}:host .table .thead .header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;text-align:left;-ms-flex-align:center;align-items:center;height:64px;gap:16px}:host .table .thead .header .header-title{height:48px;width:100%;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;gap:8px}:host .table .thead .header .header-title .title-click{cursor:pointer}:host .table .body-row{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;height:64px;padding:0px 8px;gap:16px;border-bottom:1px solid #e7edf4}:host .table .body-row .body-item{height:48px;width:100%;gap:8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start}'}}]);