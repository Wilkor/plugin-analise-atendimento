(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[6,75],{103:function(t,i,e){"use strict";e.r(i),e.d(i,"bds_input_chips",(function(){return c}));var n=e(7),s=e(68),r=function(t,i,e,n){function s(t){return t instanceof e?t:new e((function(i){i(t)}))}return new(e||(e=Promise))((function(e,r){function o(t){try{c(n.next(t))}catch(i){r(i)}}function p(t){try{c(n.throw(t))}catch(i){r(i)}}function c(t){t.done?e(t.value):s(t.value).then(o,p)}c((n=n.apply(t,i||[])).next())}))},o=function(t,i){var e,n,s,r,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:p(0),throw:p(1),return:p(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function p(t){return function(i){return c([t,i])}}function c(p){if(e)throw new TypeError("Generator is already executing.");for(;r&&(r=0,p[0]&&(o=0)),o;)try{if(e=1,n&&(s=2&p[0]?n.return:p[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,p[1])).done)return s;switch(n=0,s&&(p=[2&p[0],s.value]),p[0]){case 0:case 1:s=p;break;case 4:return o.label++,{value:p[1],done:!1};case 5:o.label++,n=p[1],p=[0];continue;case 7:p=o.ops.pop(),o.trys.pop();continue;default:if(!(s=(s=o.trys).length>0&&s[s.length-1])&&(6===p[0]||2===p[0])){o=0;continue}if(3===p[0]&&(!s||p[1]>s[0]&&p[1]<s[3])){o.label=p[1];break}if(6===p[0]&&o.label<s[1]){o.label=s[1],s=p;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(p);break}s[2]&&o.ops.pop(),o.trys.pop();continue}p=i.call(t,o)}catch(c){p=[6,c],n=0}finally{e=s=0}if(5&p[0])throw p[1];return{value:p[0]?p[1]:void 0,done:!0}}},p=function(t,i,e){if(e||2===arguments.length)for(var n,s=0,r=i.length;s<r;s++)!n&&s in i||(n||(n=Array.prototype.slice.call(i,0,s)),n[s]=i[s]);return t.concat(n||Array.prototype.slice.call(i))},c=function(){function t(t){var i=this;Object(n.r)(this,t),this.bdsChange=Object(n.c)(this,"bdsChange",7),this.bdsChangeChips=Object(n.c)(this,"bdsChangeChips",7),this.bdsInputChipsFocus=Object(n.c)(this,"bdsInputChipsFocus",7),this.bdsBlur=Object(n.c)(this,"bdsBlur",7),this.bdsInputChipsInput=Object(n.c)(this,"bdsInputChipsInput",7),this.bdsSubmit=Object(n.c)(this,"bdsSubmit",7),this.onClickWrapper=function(){i.onFocus(),i.nativeInput&&i.nativeInput.focus()},this.onFocus=function(){i.bdsInputChipsFocus.emit(),i.isPressed=!0},this.onInput=function(t){var e=t.target;e&&(i.value=e.value||""),i.bdsInputChipsInput.emit(t)},this.keyPressWrapper=function(t){switch(t.key){case"Enter":i.handleDelimiters(),i.setChip(i.value),i.value="";break;case"Backspace":(null===i.value||i.value.length<=0)&&i.internalChips.length&&(i.removeLastChip(),i.bdsChangeChips.emit({data:i.internalChips}))}},this.InputSize=null,this.validationDanger=!1,this.isPressed=!1,this.validationMesage="",this.internalChips=[],this.chips=[],this.type="text",this.label="",this.maxlength=void 0,this.icon="",this.delimiters=/,|;/,this.errorMessage="",this.danger=!1,this.value="",this.duplicated=!1,this.disableSubmit=!1,this.disabled=!1,this.helperMessage="",this.inputName="",this.placeholder="",this.dataTest=null}return t.prototype.valueChanged=function(){if(this.chips)if("string"===typeof this.chips)try{this.internalChips=JSON.parse(this.chips)}catch(t){this.internalChips=[]}else this.internalChips=this.chips;else this.internalChips=[]},t.prototype.internalValueChanged=function(){this.bdsChangeChips.emit({data:this.internalChips,value:this.getLastChip()})},t.prototype.isValid=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.validateChips()]}))}))},t.prototype.get=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,this.internalChips]}))}))},t.prototype.clear=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.internalChips=[],this.value="",[2]}))}))},t.prototype.add=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(i){return this.handleDelimiters(),t?this.setChip(t):this.setChip(this.value),this.value="",[2]}))}))},t.prototype.setFocus=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.nativeInput.focus(),[2]}))}))},t.prototype.removeFocus=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return this.nativeInput.blur(),[2]}))}))},t.prototype.componentWillLoad=function(){this.valueChanged()},t.prototype.validateChips=function(){var t=this;return"email"!==this.type||!this.internalChips.some((function(i){return!t.validateChip(i)}))},t.prototype.handleOnBlur=function(){this.bdsBlur.emit(this.internalChips),this.isPressed=!1},t.prototype.getLastChip=function(){return this.internalChips[this.internalChips.length-1]},t.prototype.handleDelimiters=function(){var t=this,i=this.nativeInput.value;if((this.value=i?i.trim():"",0!==i.length)&&i.match(this.delimiters)){var e=this.verifyAndSubstituteDelimiters(i);if(e)e.split(this.delimiters).forEach((function(i){t.setChip(i)})),this.clearInputValues();else this.clearInputValues()}},t.prototype.verifyAndSubstituteDelimiters=function(t){if(1===t.length&&t[0].match(this.delimiters))return"";var i=t.replace(/;/g,",").replace(/\,+|;+/g,",");return i[0].match(this.delimiters)&&(i=i.substring(1)),i},t.prototype.handleChange=function(t){return r(this,void 0,void 0,(function(){var i,e,n=this;return o(this,(function(s){return i=t.detail.value,this.value=i?i.trim():"",0===i.length?[2]:i.match(this.delimiters)?(e=this.verifyAndSubstituteDelimiters(i))?(e.split(this.delimiters).forEach((function(t){n.setChip(t)})),this.clearInputValues(),[2]):(this.clearInputValues(),[2]):[2]}))}))},t.prototype.clearInputValues=function(t){void 0===t&&(t=""),this.nativeInput.value=t,this.value=t},t.prototype.setChip=function(t){if(!this.duplicated&&this.internalChips.some((function(i){return i.toLowerCase()===t.toLowerCase()})))return;Object(s.w)(t)&&(this.internalChips=p(p([],this.internalChips,!0),[t],!1))},t.prototype.validateChip=function(t){var i=t.trim();return"email"!==this.type||!Object(s.e)(i)},t.prototype.removeLastChip=function(){this.internalChips=this.internalChips.slice(0,this.internalChips.length-1)},t.prototype.removeChip=function(t){var i=t.detail.id;this.internalChips=this.internalChips.filter((function(t,e){return e.toString()!==i}))},t.prototype.renderChips=function(){var t=this;return this.internalChips.length?this.internalChips.map((function(i,e){var s=e.toString();return i.length<=30?Object(n.h)("bds-chip-clickable",{id:s,key:s,color:"default",close:!t.disabled,onChipClickableClose:function(i){return t.removeChip(i)}},i):Object(n.h)("bds-tooltip",{key:s,position:"top-center","tooltip-text":i},Object(n.h)("bds-chip-clickable",{id:s,key:s,color:"default",close:!t.disabled,onChipClickableClose:function(i){return t.removeChip(i)}},"".concat(i.slice(0,30)," ...")))})):[]},t.prototype.renderIcon=function(){return this.icon&&Object(n.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},Object(n.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},t.prototype.renderLabel=function(){return this.label&&Object(n.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},Object(n.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},t.prototype.renderMessage=function(){var t=this.danger?"error":"info",i=this.danger?this.errorMessage:this.helperMessage;!i&&this.validationDanger&&(i=this.validationMesage);var e=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(i)return Object(n.h)("div",{class:e,part:"input__message"},Object(n.h)("div",{class:"input__message__icon"},Object(n.h)("bds-icon",{size:"x-small",name:t,theme:"solid",color:"inherit"})),Object(n.h)("bds-typo",{variant:"fs-12"},i))},t.prototype.render=function(){var t=this,i=this.isPressed&&!this.disabled;return Object(n.h)(n.H,null,Object(n.h)("div",{class:{element_input:!0},"aria-disabled":this.disabled?"true":null},Object(n.h)("div",{class:{input:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":i},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper,part:"input-container"},this.renderIcon(),Object(n.h)("div",{class:"input__container"},this.renderLabel(),Object(n.h)("div",{class:{input__container__wrapper:!0}},this.internalChips.length>0&&Object(n.h)("span",{class:"inside-input-left"},this.renderChips()),Object(n.h)("input",{ref:function(i){return t.nativeInput=i},class:{input__container__text:!0},name:this.inputName,maxlength:this.maxlength,placeholder:this.placeholder,onInput:this.onInput,onFocus:this.onFocus,onBlur:function(){return t.handleOnBlur()},onChange:function(){return t.handleChange},value:this.value,disabled:this.disabled,"data-test":this.dataTest}))),Object(n.h)("slot",{name:"input-right"})),this.renderMessage()))},Object.defineProperty(t,"watchers",{get:function(){return{chips:["valueChanged"],internalChips:["internalValueChanged"]}},enumerable:!1,configurable:!0}),t}();c.style='.sc-bds-input-chips-h{display:display}.element_input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input.sc-bds-input-chips input.sc-bds-input-chips,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-webkit-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-moz-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-moz-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips:-ms-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips:-ms-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-ms-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-ms-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input.sc-bds-input-chips input.sc-bds-input-chips::-webkit-input-placeholder,.element_input.sc-bds-input-chips textarea.sc-bds-input-chips::-webkit-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.input.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #ffffff)}.input--state-primary.sc-bds-input-chips{border:1px solid var(--color-surface-3, #e7edf4);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.sc-bds-input-chips:hover{border:1px solid var(--color-primary, #3f7de8);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed.sc-bds-input-chips{border:1px solid var(--color-primary, #3f7de8);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:var(--color-primary, #3f7de8);background-color:var(--color-surface-3, #e7edf4)}.input--state-primary.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-content-default, #202c44)}.input--state-primary.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:var(--color-primary, #3f7de8)}.input--state-primary.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-primary, #3f7de8);color:var(--color-content-default, #202c44)}.input--state-danger.sc-bds-input-chips{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.sc-bds-input-chips:hover{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed.sc-bds-input-chips{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #ffa5a5);box-shadow:0 0 0 2px var(--color-error, #ffa5a5)}.input--state-danger.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:var(--color-delete, #ff4c4c);background-color:var(--color-error, #ffa5a5)}.input--state-danger.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-delete, #ff4c4c)}.input--state-danger.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:var(--color-delete, #ff4c4c)}.input--state-danger.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-delete, #ff4c4c);color:var(--color-delete, #ff4c4c)}.input--state-disabled.sc-bds-input-chips{cursor:not-allowed;border:1px solid var(--color-surface-3, #e7edf4);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:var(--color-surface-3, #e7edf4)}.input--state-disabled.sc-bds-input-chips:hover{border:1px solid var(--color-content-disable, #505f79);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-surface-3, #e7edf4);box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed.sc-bds-input-chips{border:1px solid var(--color-content-disable, #505f79);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #e7edf4);box-shadow:0 0 0 2px var(--color-surface-3, #e7edf4)}.input--state-disabled.sc-bds-input-chips .input__icon.sc-bds-input-chips{color:var(--color-content-disable, #505f79);background-color:var(--color-surface-3, #e7edf4)}.input--state-disabled.sc-bds-input-chips .input__container__label.sc-bds-input-chips{color:var(--color-content-disable, #505f79)}.input--state-disabled.sc-bds-input-chips .input__container__label--pressed.sc-bds-input-chips{color:var(--color-content-disable, #505f79)}.input--state-disabled.sc-bds-input-chips .input__container__text.sc-bds-input-chips{caret-color:var(--color-content-disable, #505f79);color:var(--color-content-disable, #505f79)}.input--label.sc-bds-input-chips{padding:7px 4px 8px 12px}.input__icon.sc-bds-input-chips{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large.sc-bds-input-chips{padding:4px}.input__container.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips.sc-bds-input-chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text.sc-bds-input-chips{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text.sc-bds-input-chips::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text.sc-bds-input-chips:focus{outline:0}.input__container__text[type=checkbox].sc-bds-input-chips,.input__container__text[type=radio].sc-bds-input-chips{width:13px;height:13px}.input__container__text[type=search].sc-bds-input-chips{-webkit-appearance:textfield;-webkit-box-sizing:content-box}.sc-bds-input-chips::-webkit-search-decoration{display:none}.input__container__text[type=reset].sc-bds-input-chips,.input__container__text[type=button].sc-bds-input-chips,.input__container__text[type=submit].sc-bds-input-chips{overflow:visible}.input__container__text.sc-bds-input-chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text.sc-bds-input-chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message.sc-bds-input-chips{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #505f79);word-break:break-word;height:auto;min-height:20px}.input__message.sc-bds-input-chips bds-typo.sc-bds-input-chips{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon.sc-bds-input-chips{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger.sc-bds-input-chips{color:var(--color-delete, #ff4c4c)}.inside-input-left.sc-bds-input-chips{position:relative;display:-ms-inline-flexbox;display:inline-flex;gap:8px;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:8px}.input-chips__chip.sc-bds-input-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-input-chips{-ms-flex:1;flex:1}'},68:function(t,i,e){"use strict";e.r(i),e.d(i,"d",(function(){return l})),e.d(i,"e",(function(){return p})),e.d(i,"m",(function(){return u})),e.d(i,"n",(function(){return c})),e.d(i,"w",(function(){return a}));var n=/^\w+([.+,-]\w+)*@\w+([.-]\w+)*\.\w{2,}$/,s=/\S/,r=/^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/,o=/^((0?[1-9]|[12][0-9]|3[01])[- /.](0?[1-9]|1[012])[- /.](19|20|21)?[0-9]{2})*$/,p=function(t){if(t&&!n.test(t))return!0},c=function(t){if(t&&!r.test(t))return!0},a=function(t){return s.test(t)},l=function(t){return o.test(t)},u=function(t){var i=t;return i=(i=(i=i.replace(/\D+/g,"")).replace(/^(\d{2})(\d)/,"$1/$2")).replace(/^(\d{2}\/\d{2})(\d)/,"$1/$2")}}}]);