(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[45],{134:function(t,e,n){"use strict";n.r(e),n.d(e,"bds_menu_action",(function(){return i}));var o=n(8),i=function(){function t(t){var e=this;Object(o.r)(this,t),this.onCloseSubMenu=function(){e.stateSubMenu="close"},this.onChangeOpenParent=function(t){e.openParentMenu=t.detail.value},this.openParentMenu=!1,this.openSubMenu=!1,this.positionSubMenu="right",this.stateSubMenu="close",this.delaySubMenu=!1,this.zIndex=0,this.delay=null,this.buttonText="",this.subMenu=!1,this.iconLeft=null,this.subtitle=null,this.description=null,this.lipstick=!1,this.disabled=!1}return t.prototype.componentWillLoad=function(){var t=this;this.subMenu&&(this.menuElement=this.element.parentElement,this.menuElement.addEventListener("bdsOpenMenu",(function(e){t.onChangeOpenParent(e)})))},t.prototype.openParentMenuChanged=function(t){if(t){var e=this.menuElement.shadowRoot.querySelectorAll("div")[0];this.positionSubMenu=e.offsetLeft+e.offsetWidth+196>=window.innerWidth?"left":"right"}},t.prototype.openSubMenuChanged=function(t){0==t&&(this.stateSubMenu="pending",this.delay=setTimeout(this.onCloseSubMenu,1e3)),1==t&&(clearTimeout(this.delay),this.delay=null,this.stateSubMenu="open")},t.prototype.stateSubMenuChanged=function(t){switch(t){case"open":case"pending":this.delaySubMenu=!0;break;case"close":this.delaySubMenu=!1}},t.prototype.render=function(){var t,e,n=this,i=this.iconLeft&&!this.subMenu,u=this.subMenu&&!this.iconLeft,s=this.iconLeft&&this.subMenu,a={zIndex:"".concat(this.zIndex)};return Object(o.h)("div",{class:(t={menuaction:!0},t["position-".concat(this.positionSubMenu)]=!0,t),onMouseOver:function(){1==n.subMenu&&(n.zIndex=1,n.openSubMenu=!0)},onMouseOut:function(){1==n.subMenu&&(n.zIndex=0,n.openSubMenu=!1)}},Object(o.h)("button",{class:(e={menuaction__button:!0},e.menuaction__button__activeicleft=i,e.menuaction__button__activeicright=u,e.menuaction__button__activeicleftright=s,e.menuaction__button__lipstick=this.lipstick,e.menuaction__button__disabled=this.disabled,e)},this.iconLeft&&Object(o.h)("bds-icon",{class:"icon-item",name:this.iconLeft,theme:"outline",size:"small"}),Object(o.h)("div",{class:"content-item"},this.buttonText&&Object(o.h)("bds-typo",{class:"title-item",variant:"fs-16",tag:"span"},this.buttonText),this.subtitle&&Object(o.h)("bds-typo",{class:"subtitle-item",variant:"fs-10",tag:"span"},this.subtitle),this.description&&Object(o.h)("bds-typo",{class:"description-item",variant:"fs-10",tag:"span"},this.description)),this.subMenu&&Object(o.h)("bds-icon",{class:{arrow:!0},name:"arrow-".concat(this.positionSubMenu),theme:"outline",size:"small"})),this.subMenu&&Object(o.h)("div",{class:{menuaction__submenu:!0,menuaction__submenu__open:this.delaySubMenu},style:a},Object(o.h)("slot",null)))},Object.defineProperty(t.prototype,"element",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{openParentMenu:["openParentMenuChanged"],openSubMenu:["openSubMenuChanged"],stateSubMenu:["stateSubMenuChanged"]}},enumerable:!1,configurable:!0}),t}();i.style=".menuaction{position:relative}.menuaction__button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;gap:8px;-ms-flex-align:center;align-items:center;background-color:var(--color-surface-1, #ffffff);border:0;border-radius:8px;padding:16px;width:100%;text-align:left;cursor:pointer}.menuaction__button__activeicleft{grid-template-columns:auto 1fr}.menuaction__button__activeicright{grid-template-columns:1fr auto}.menuaction__button__activeicleftright{grid-template-columns:auto 1fr auto}.menuaction__button .icon-item{color:var(--color-content-default, #202c44)}.menuaction__button .content-item{width:100%;color:var(--color-content-default, #202c44);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.menuaction__button .arrow{color:var(--color-content-default, #202c44)}.menuaction__button__lipstick .icon-item{color:#a01c2c}.menuaction__button__lipstick .content-item{color:#a01c2c}.menuaction__button__lipstick .arrow{color:#a01c2c}.menuaction__button__disabled{opacity:0.5;cursor:no-drop}.menuaction__button:hover{background-color:var(--color-surface-2, #f3f6fa)}.menuaction__submenu{position:absolute;pointer-events:none;display:block;padding:2px;background-color:var(--color-surface-1, #ffffff);border-radius:8px;-webkit-box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);box-shadow:0px 4px 16px rgba(7, 71, 166, 0.12);min-width:196px;opacity:0;-webkit-transition:opacity 0.5s;-moz-transition:opacity 0.5s;transition:opacity 0.5s}.menuaction__submenu__open{pointer-events:auto;opacity:1}.menuaction.position-right .menuaction__button .icon-item{-ms-flex-order:0;order:0}.menuaction.position-right .menuaction__button .content-item{-ms-flex-order:1;order:1}.menuaction.position-right .menuaction__button .arrow{-ms-flex-order:2;order:2}.menuaction.position-right .menuaction__submenu{top:-2px;left:100%}.menuaction.position-left .menuaction__button .icon-item{-ms-flex-order:1;order:1}.menuaction.position-left .menuaction__button .content-item{-ms-flex-order:2;order:2}.menuaction.position-left .menuaction__button .arrow{-ms-flex-order:0;order:0}.menuaction.position-left .menuaction__submenu{top:-2px;right:100%}"}}]);