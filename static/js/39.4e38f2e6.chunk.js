(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[39],{104:function(e,t,i){"use strict";i.r(t),i.d(t,"bds_input_editable",(function(){return a}));var n=i(7),o=function(e,t,i,n){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function a(e){try{s(n.next(e))}catch(t){r(t)}}function l(e){try{s(n.throw(e))}catch(t){r(t)}}function s(e){e.done?i(e.value):o(e.value).then(a,l)}s((n=n.apply(e,t||[])).next())}))},r=function(e,t){var i,n,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(e){return function(t){return s([e,t])}}function s(l){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(a=0)),a;)try{if(i=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(s){l=[6,s],n=0}finally{i=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},a=function(){function e(e){var t=this;Object(n.r)(this,e),this.bdsInputEditableSave=Object(n.c)(this,"bdsInputEditableSave",7),this.bdsChange=Object(n.c)(this,"bdsChange",7),this.bdsInput=Object(n.c)(this,"bdsInput",7),this.bdsCancel=Object(n.c)(this,"bdsCancel",7),this.bdsFocus=Object(n.c)(this,"bdsFocus",7),this.bdsBlur=Object(n.c)(this,"bdsBlur",7),this.handleEditing=function(){t.toggleEditing()},this.toggleEditing=function(){t.isEditing=!t.isEditing},this.handleSaveText=function(){var e=t.nativeInput.value;e.length>0&&e.length>=t.minlength&&!t.danger&&(t.bdsInputEditableSave.emit({value:e,oldValue:t.oldValue}),t.oldValue=e,t.value=e,t.toggleEditing())},this.changedInputValue=function(e){return o(t,void 0,void 0,(function(){var t;return r(this,(function(i){return t=e.target,this.checkValidity(),t&&(t.value.length<Number(this.minlength)?this.isValid=!1:this.isValid=!0),this.bdsInput.emit(e),this.bdsChange.emit({value:this.nativeInput.value,oldValue:this.oldValue}),[2]}))}))},this.onFocus=function(){t.isFocused=!0,t.isPressed=!0,t.bdsFocus.emit()},this.onBlur=function(){t.onBlurValidations(),t.bdsBlur.emit(),t.isPressed=!1},this.onClickWrapper=function(){t.onFocus(),t.nativeInput&&t.nativeInput.focus()},this.getExpand=function(){return t.expand?"expanded":"fixed"},this.oldValue=void 0,this.isEditing=!1,this.isValid=!0,this.isPressed=!1,this.isFocused=!1,this.validationMesage="",this.validationDanger=!1,this.size="standard",this.expand=!1,this.dataTest=null,this.inputName="",this.value="",this.requiredErrorMessage=void 0,this.minlength=0,this.minlengthErrorMessage=void 0,this.maxlength=void 0,this.errorMessage="",this.helperMessage="",this.placeholder="",this.danger=!1}return e.prototype.componentWillLoad=function(){this.oldValue=this.value},e.prototype.onBlurValidations=function(){this.requiredValidation(),(this.minlength||this.maxlength)&&this.lengthValidation(),this.checkValidity()},e.prototype.requiredValidation=function(){this.nativeInput.validity.valueMissing&&(this.validationMesage=this.requiredErrorMessage,this.validationDanger=!0)},e.prototype.lengthValidation=function(){if(this.nativeInput.validity.tooShort)return this.validationMesage=this.minlengthErrorMessage,void(this.validationDanger=!0);this.nativeInput.validity.tooLong&&(this.validationDanger=!0)},e.prototype.checkValidity=function(){this.nativeInput.validity.valid&&(this.validationDanger=!1)},e.prototype.getFontSizeClass=function(){return"short"==this.size?"fs-16":"standard"==this.size?"fs-24":"tall"==this.size?"fs-40":"fs-24"},e.prototype.renderMessage=function(){var e=this.danger?"error":"info",t=this.danger?this.errorMessage:this.helperMessage;!t&&this.validationDanger&&(t=this.validationMesage);var i=this.danger||this.validationDanger?"input__message input__message--danger":"input__message";if(t)return Object(n.h)("div",{class:i,part:"input__message"},Object(n.h)("div",{class:"input__message__icon"},Object(n.h)("bds-icon",{size:"x-small",name:e,theme:"solid",color:"inherit"})),Object(n.h)("bds-typo",{variant:"fs-12"},t))},e.prototype.render=function(){var e,t=this,i=this.getFontSizeClass(),o=this.getExpand();return Object(n.h)(n.H,null,Object(n.h)("div",{class:"input__editable"},Object(n.h)("div",{class:{"input__editable--static":!0,"input__editable--hidden":this.isEditing},onClick:this.handleEditing},Object(n.h)("bds-typo",{tag:"span",part:"input__editable--static__typo",class:"input__editable--static__typo",variant:i},this.value),Object(n.h)("bds-icon",{key:"edit-icon",class:"input__editable--static__icon",name:"edit"})),Object(n.h)("div",{class:{"input__editable--active":!0,"input__editable--hidden":!this.isEditing}},Object(n.h)("div",{class:(e={element_input:!0},e[o]=!0,e[this.size]=!0,e)},Object(n.h)("div",{class:{input:!0,select:!0,"input--state-primary":!this.danger&&!this.validationDanger,"input--state-danger":this.danger||this.validationDanger,"input--pressed":this.isPressed},onClick:this.onClickWrapper},Object(n.h)("div",{class:"input__container",tabindex:"0"},Object(n.h)("input",{class:{input__container__text:!0},ref:function(e){return t.nativeInput=e},minLength:this.minlength,maxLength:this.maxlength,name:this.inputName,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.changedInputValue,placeholder:this.placeholder,value:this.value,required:!0,part:"input","data-test":this.dataTest}))),this.renderMessage()),Object(n.h)("div",{class:"input__editable--active__icon"},Object(n.h)("bds-icon",{key:"error-icon",class:"input__editable--active__icon--error",theme:"solid",name:"error",onClick:this.handleEditing}),Object(n.h)("bds-icon",{key:"checkball-icon",class:{"input__editable--active__icon--checkball":!0,"input__editable--active__icon--checkball--error":!this.isValid},theme:"solid",name:"checkball",onClick:this.handleSaveText})))))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.g)(this)},enumerable:!1,configurable:!0}),e}();a.style='.element_input{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}.element_input input,.element_input textarea{-webkit-box-shadow:inherit;box-shadow:inherit}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input input::-moz-placeholder,.element_input textarea::-moz-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input input:-ms-input-placeholder,.element_input textarea:-ms-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input input::-ms-input-placeholder,.element_input textarea::-ms-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input input::placeholder,.element_input textarea::placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.element_input input::-webkit-input-placeholder,.element_input textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #6e7b91);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #ffffff)}.input--state-primary{border:1px solid var(--color-surface-3, #e7edf4);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #3f7de8);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #3f7de8);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary .input__icon{color:var(--color-primary, #3f7de8);background-color:var(--color-surface-3, #e7edf4)}.input--state-primary .input__container__label{color:var(--color-content-default, #202c44)}.input--state-primary .input__container__label--pressed{color:var(--color-primary, #3f7de8)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #3f7de8);color:var(--color-content-default, #202c44)}.input--state-danger{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-delete, #ff4c4c);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #ffa5a5);box-shadow:0 0 0 2px var(--color-error, #ffa5a5)}.input--state-danger .input__icon{color:var(--color-delete, #ff4c4c);background-color:var(--color-error, #ffa5a5)}.input--state-danger .input__container__label{color:var(--color-delete, #ff4c4c)}.input--state-danger .input__container__label--pressed{color:var(--color-delete, #ff4c4c)}.input--state-danger .input__container__text{caret-color:var(--color-delete, #ff4c4c);color:var(--color-delete, #ff4c4c)}.input--state-disabled{cursor:not-allowed;border:1px solid var(--color-surface-3, #e7edf4);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;background:var(--color-surface-3, #e7edf4)}.input--state-disabled:hover{border:1px solid var(--color-content-disable, #505f79);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;border:1px solid var(--color-surface-3, #e7edf4);box-sizing:border-box;border-radius:8px}.input--state-disabled.input--pressed{border:1px solid var(--color-content-disable, #505f79);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-surface-3, #e7edf4);box-shadow:0 0 0 2px var(--color-surface-3, #e7edf4)}.input--state-disabled .input__icon{color:var(--color-content-disable, #505f79);background-color:var(--color-surface-3, #e7edf4)}.input--state-disabled .input__container__label{color:var(--color-content-disable, #505f79)}.input--state-disabled .input__container__label--pressed{color:var(--color-content-disable, #505f79)}.input--state-disabled .input__container__text{caret-color:var(--color-content-disable, #505f79);color:var(--color-content-disable, #505f79)}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #505f79);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger{color:var(--color-delete, #ff4c4c)}.input__editable{display:block}.input__editable--static{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.input__editable--static:hover .input__editable--static__typo{border:1px solid var(--color-primary, #3f7de8)}.input__editable--static:hover .input__editable--static__icon{color:var(--color-primary, #3f7de8)}.input__editable--static__typo{border:1px solid transparent;margin:0;padding:8px;border-radius:8px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;max-width:80%;color:var(--color-content-default, #202c44)}.input__editable--static__icon{margin-left:8px;color:var(--color-content-ghost, #6e7b91)}.input__editable--active{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.input__editable--active .element_input{min-width:120px;margin-right:4px}.input__editable--active .element_input.expanded{max-width:100%}.input__editable--active .element_input.fixed{max-width:140px}.input__editable--active .element_input.short input{font-size:1rem;line-height:0px}.input__editable--active .element_input.standard input{font-size:1.5rem;line-height:0px}.input__editable--active .element_input.tall input{font-size:2.5rem;line-height:0px}.input__editable--active .element_input::part(input-container){padding:4px 4px 5px 12px}.input__editable--active .element_input::part(input__message){min-width:180px}.input__editable--active bds-icon{cursor:pointer}.input__editable--active__icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:auto 0}.input__editable--active__icon--error{color:var(--color-delete, #ff4c4c)}.input__editable--active__icon--error:hover{color:var(--color-delete, #ff4c4c)}.input__editable--active__icon--checkball{color:var(--color-primary, #3f7de8)}.input__editable--active__icon--checkball:hover{color:var(--color-primary, #3f7de8)}.input__editable--active__icon--checkball--error{color:var(--color-content-ghost, #6e7b91)}.input__editable--active__icon--checkball--error:hover{color:var(--color-content-ghost, #6e7b91)}.input__editable--hidden{display:none}'}}]);