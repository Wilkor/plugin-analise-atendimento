(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[29],{94:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_chip_selected",(function(){return s}));var o=t(7),s=function(){function e(e){Object(o.r)(this,e),this.chipClick=Object(o.c)(this,"chipClick",7),this.isSelected=!1,this.icon=void 0,this.color="default",this.size="standard",this.selected=!1,this.disabled=!1,this.dataTest=null}return e.prototype.handleKeyDown=function(e){if(" "===e.key&&!this.disabled)return e.preventDefault(),this.isSelected?this.isSelected=!1:this.isSelected=!0},e.prototype.handleClick=function(e){if(!this.disabled)return e.preventDefault(),this.isSelected?this.isSelected=!1:this.isSelected=!0},e.prototype.componentWillLoad=function(){this.el.focus(),this.isSelected=this.selected},e.prototype.getDisabledChip=function(){var e;return this.disabled?((e={chip_disabled:!0})["chip_disabled--".concat(this.size)]=!0,e):{}},e.prototype.getStyleChip=function(){var e,i;return this.isSelected?((e={chip_selected:!0})["chip_selected--".concat(this.size)]=!0,e):((i={})["chip--".concat(this.color)]=!0,i["chip--".concat(this.size)]=!0,i)},e.prototype.getStyleText=function(){if(this.isSelected){return{"chip_selected--text":!0}}},e.prototype.getSizeIconChip=function(){return"tall"===this.size?"medium":"x-small"},e.prototype.render=function(){return Object(o.h)(o.H,null,Object(o.h)("div",{class:Object.assign(Object.assign({chip:!0},this.getStyleChip()),this.getDisabledChip()),onClick:this.handleClick,"data-test":this.dataTest},!this.disabled&&Object(o.h)("div",{class:"chip_focus",onKeyDown:this.handleKeyDown.bind(this),tabindex:"0"}),!this.isSelected&&!this.disabled&&Object(o.h)("div",{class:"chip_darker"}),this.icon&&!this.isSelected&&Object(o.h)("div",{class:"chip--icon"},Object(o.h)("bds-icon",{size:this.getSizeIconChip(),name:this.icon})),this.isSelected&&Object(o.h)("div",{class:"chip_selected--icon"},Object(o.h)("bds-icon",{size:this.getSizeIconChip(),name:"checkball"})),Object(o.h)("bds-typo",{class:Object.assign({"chip--text":!0},this.getStyleText()),variant:"fs-12","no-wrap":!0,bold:"bold"},Object(o.h)("slot",null))))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),e}();s.style=':host{display:-ms-flexbox;display:flex;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;width:-webkit-max-content;width:-moz-max-content;width:max-content;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0}:host .chip .chip_focus:focus{position:absolute;width:100%;height:100%;padding:2px;border-radius:4px;outline:var(--color-focus, #c226fb) solid 2px}:host .chip .chip_darker{position:absolute;width:100%;height:100%;border-radius:inherit;z-index:1;-webkit-backdrop-filter:brightness(1);backdrop-filter:brightness(1);-webkit-box-sizing:border-box;box-sizing:border-box}:host .chip--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;height:20px;z-index:2}:host .chip--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip--tall{height:40px;border-radius:24px}:host .chip--default{background-color:var(--color-system, #b3d4ff);color:var(--color-content-din, #000)}:host .chip--info{background-color:var(--color-info, #80e3eb);color:var(--color-content-din, #000)}:host .chip--success{background-color:var(--color-success, #90e6bc);color:var(--color-content-din, #000)}:host .chip--warning{background-color:var(--color-warning, #fff6a8);color:var(--color-content-din, #000)}:host .chip--danger{background-color:var(--color-error, #ffa5a5);color:var(--color-content-din, #000)}:host .chip--outline{background-color:var(--color-surface-1, #ffffff);border:1px solid var(--color-surface-3, #e7edf4);color:var(--color-content-default, #202c44);padding:2px 3px}:host .chip--outline .chip_darker{height:calc(100% + 2px)}:host .chip:hover{cursor:pointer}:host .chip:hover .chip_darker{-webkit-backdrop-filter:brightness(0.9);backdrop-filter:brightness(0.9)}:host .chip:active{cursor:pointer}:host .chip:active .chip_darker{-webkit-backdrop-filter:brightness(0.8);backdrop-filter:brightness(0.8)}:host .chip:focus-visible{outline:none}:host .chip_selected{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--color-surface-1, #ffffff);border:2px solid var(--color-brand, #3f7de8)}:host .chip_selected--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;padding-left:4px;color:var(--color-brand, #3f7de8)}:host .chip_selected--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-brand, #3f7de8);font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_selected--tall{height:40px;border-radius:24px}:host .chip_selected:hover{opacity:38%;cursor:pointer}:host .chip_selected:active{opacity:38%}:host .chip_disabled{display:-ms-flexbox;display:flex;min-width:32px;width:-webkit-max-content;width:-moz-max-content;width:max-content;height:32px;border-radius:16px;padding:2px 4px;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-pack:center;justify-content:center;position:relative;z-index:0;background-color:var(--color-surface-3, #e7edf4)}:host .chip_disabled--icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:4px;width:16px;height:20px;color:var(--color-content-default, #202c44);z-index:2}:host .chip_disabled--text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:20px;z-index:2;margin:0 8px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;color:var(--color-content-default, #202c44);font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif}:host .chip_disabled--tall{height:40px;border-radius:24px}:host .chip_disabled:hover{cursor:default}'}}]);