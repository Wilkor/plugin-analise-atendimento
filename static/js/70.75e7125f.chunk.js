(this["webpackJsonpblip-plugin-example"]=this["webpackJsonpblip-plugin-example"]||[]).push([[70],{160:function(e,i,t){"use strict";t.r(i),t.d(i,"bds_upload",(function(){return d}));var o=t(8),a=function(e,i,t){if(t||2===arguments.length)for(var o,a=0,r=i.length;a<r;a++)!o&&a in i||(o||(o=Array.prototype.slice.call(i,0,a)),o[a]=i[a]);return e.concat(o||Array.prototype.slice.call(i))},r=[{uploaded:"Arquivos enviados",dropHere:"Solte aqui para anexar o arquivo",dropOrClick:"Arraste e solte seus arquivos aqui ou clique para fazer upload do arquivo"}],l=[{uploaded:"Archivos subidos",dropHere:"Soltar aqu\xed para adjuntar archivo",dropOrClick:"Arrastre y suelte sus archivos aqu\xed o haga clic para cargar el archivo"}],s=[{uploaded:"Files uploaded",dropHere:"Drop here to attach file",dropOrClick:"Drag and drop your files here or click to upload file"}],n=function(e,i){var t;switch(e){case"pt_BR":t=r.map((function(e){return e[i]}));break;case"es_ES":t=l.map((function(e){return e[i]}));break;case"en_US":t=s.map((function(e){return e[i]}));break;default:t=r.map((function(e){return e[i]}))}return t},d=function(){function e(e){var i=this;Object(o.r)(this,e),this.bdsUploadDelete=Object(o.c)(this,"bdsUploadDelete",7),this.bdsUploadChange=Object(o.c)(this,"bdsUploadChange",7),this.handleDrop=function(e){i.haveFiles=!0;var t=e.dataTransfer.files;i.handleFiles(t)},this.handleFiles=function(e){i.multiple?i.files=a(a([],i.files,!0),e,!0):i.files=[e[0]],i.bdsUploadChange.emit({value:i.files})},this.files=[],this.haveFiles=!1,this.hover=!1,this.background=void 0,this.size=[],this.language="pt_BR",this.titleName=void 0,this.subtitle=void 0,this.error=void 0,this.multiple=void 0,this.accept=void 0}return e.prototype.componentDidLoad=function(){var e=this;["dragenter","dragover","dragleave","drop"].forEach((function(i){e.dropArea.shadowRoot.addEventListener(i,e.preventDefaults,!1),e.dropArea.shadowRoot.addEventListener(i,(function(){return e.hoverFile(!0)}),!1)})),["dragenter","dragover"].forEach((function(i){e.dropArea.shadowRoot.addEventListener(i,(function(){return e.preventDefaults}),!1),e.dropArea.shadowRoot.addEventListener(i,(function(){return e.hoverFile(!0)}),!1)})),["dragleave","drop"].forEach((function(i){e.dropArea.shadowRoot.addEventListener(i,(function(){return e.preventDefaults}),!1),e.dropArea.shadowRoot.addEventListener(i,(function(){return e.hoverFile(!1)}),!1)})),this.dropArea.shadowRoot.addEventListener("drop",this.handleDrop,!1)},e.prototype.preventDefaults=function(e){e.preventDefault(),e.stopPropagation()},e.prototype.hoverFile=function(e){this.hover=e},e.prototype.onUploadClick=function(e){if(!(e.length>0))return!1;this.multiple?this.files=a(a([],this.files,!0),e,!0):this.files=[e[0]],this.haveFiles=!0,this.getSize(),this.bdsUploadChange.emit({value:this.files})},e.prototype.getSize=function(){var e=this;this.files.map((function(i){var t=i.size;e.size.push(t)}))},e.prototype.deleteFile=function(e){var i=this.files.filter((function(i,t){return t==e&&i}));this.bdsUploadDelete.emit({value:i}),this.files.splice(e,1),this.files=a([],this.files,!0),0===this.files.length?this.haveFiles=!1:this.haveFiles=!0,this.bdsUploadChange.emit({value:this.files})},e.prototype.render=function(){var e=this;return Object(o.h)("div",{class:"upload"},Object(o.h)("div",{class:"upload-header"},Object(o.h)("bds-icon",{size:"xxx-large",name:"upload"}),Object(o.h)("div",{class:"upload-header_text"},Object(o.h)("bds-typo",{variant:"fs-16",bold:"bold"},this.titleName),Object(o.h)("bds-typo",{variant:"fs-14",bold:"regular"},this.subtitle))),this.error?Object(o.h)("bds-banner",{context:"inside",variant:"error"},this.error):"",this.haveFiles?Object(o.h)("div",null,Object(o.h)("div",{class:"list-preview"},this.files.map((function(i,t){return Object(o.h)("div",{class:"upload__preview",key:t,id:"drop-area"},Object(o.h)("div",{class:"preview",id:"preview"},Object(o.h)("bds-icon",{size:"x-small",name:"attach"}),Object(o.h)("p",{class:"preview-text",id:"preview-text"},i.name),Object(o.h)("bds-button-icon",{class:"preview-icon",size:"short",icon:"trash",variant:"secondary",onClick:function(){return e.deleteFile(t)}})))}))),this.multiple?Object(o.h)("bds-typo",{variant:"fs-14",italic:!0,class:"preview-length"},this.files.length>1?"".concat(this.files.length," ").concat(n(this.language,"uploaded")):""):""):"",Object(o.h)("div",{class:{upload__edit:!0}},Object(o.h)("label",{class:{"upload__edit--label":!0,"upload__edit--hover":this.hover},id:"file-label",htmlFor:"file"},Object(o.h)("div",{class:{"text-box":!0,"text-box--hover":this.hover},id:"file-text_box"},this.hover?Object(o.h)("bds-typo",{class:"text",variant:"fs-14",bold:"regular"},n(this.language,"dropHere")):Object(o.h)("bds-typo",{class:"text",variant:"fs-14",bold:"regular"},n(this.language,"dropOrClick"))),Object(o.h)("img",{class:{"upload__img--invisible":!0,"upload__img--visible":this.hover},src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMzg0IDgwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMzc4OF8yMTU2NDApIj4KPGxpbmUgeDE9Ii0xMC45NzY3IiB5MT0iNzQuMzg0MyIgeDI9IjIyLjc3NzgiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjIyLjc3NzciIHkxPSI3NC4zODQzIiB4Mj0iNTYuNTMyMiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iNTYuNTMyIiB5MT0iNzQuMzg0MyIgeDI9IjkwLjI4NjYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjkwLjI4NjkiIHkxPSI3NC4zODQzIiB4Mj0iMTI0LjA0MiIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMTI0LjA0MSIgeTE9Ijc0LjM4NDMiIHgyPSIxNTcuNzk2IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIxNTcuNzk2IiB5MT0iNzQuMzg0MyIgeDI9IjE5MS41NTEiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjE5MS41NTEiIHkxPSI3NC4zODQzIiB4Mj0iMjI1LjMwNSIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMjI1LjMwNSIgeTE9Ijc0LjM4NDMiIHgyPSIyNTkuMDYiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjI1OS4wNiIgeTE9Ijc0LjM4NDMiIHgyPSIyOTIuODE0IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjxsaW5lIHgxPSIyOTIuODE0IiB5MT0iNzQuMzg0MyIgeDI9IjMyNi41NjkiIHkyPSI1LjE3NzE5IiBzdHJva2U9IiNFN0VERjQiLz4KPGxpbmUgeDE9IjMyNi41NjkiIHkxPSI3NC4zODQzIiB4Mj0iMzYwLjMyMyIgeTI9IjUuMTc3MTkiIHN0cm9rZT0iI0U3RURGNCIvPgo8bGluZSB4MT0iMzYwLjMyNCIgeTE9Ijc0LjM4NDMiIHgyPSIzOTQuMDc4IiB5Mj0iNS4xNzcxOSIgc3Ryb2tlPSIjRTdFREY0Ii8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzc4OF8yMTU2NDAiPgo8cmVjdCB3aWR0aD0iMzg0IiBoZWlnaHQ9IjgwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="})),Object(o.h)("input",{type:"file",name:"files[]",id:"file",class:"upload__input",multiple:this.multiple,accept:this.accept,onChange:function(i){return e.onUploadClick(i.target.files)}})))},Object.defineProperty(e.prototype,"dropArea",{get:function(){return Object(o.g)(this)},enumerable:!1,configurable:!0}),e}();d.style='.upload{min-width:400px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;gap:16px}.upload .upload-header{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:center;align-items:center;gap:8px}.upload .upload-header_text{color:var(--color-content-default, #202c44);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.upload__edit--label{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:1px solid var(--color-surface-4, #202c44);border-radius:8px;cursor:pointer;font-weight:normal;-webkit-box-sizing:border-box;box-sizing:border-box;padding:23px 16px;position:relative}.upload__edit--label .upload__img--visible{display:-ms-flexbox;display:flex;width:100%;height:100%;border-radius:8px;position:absolute;background-color:var(--color-surface-2, #f3f6fa);z-index:1}.upload__edit--label .text-box{display:-ms-flexbox;display:flex;padding:8px;width:100%;text-align:center;z-index:2}.upload__edit--label .text-box .text{color:var(--color-content-default, #202c44);width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap}.upload__edit--label .text-box--hover{background-color:var(--color-surface-2, #f3f6fa)}.upload__edit--label:hover{border:2px solid var(--color-brand, #3f7de8);-webkit-box-sizing:border-box;box-sizing:border-box;padding:22px 16px;cursor:pointer;-webkit-text-decoration:underline var(--color-brand, #3f7de8);text-decoration:underline var(--color-brand, #3f7de8);color:var(--color-brand, #3f7de8)}.upload__edit--hover{background-size:cover;border:1px dashed var(--color-surface-4, #202c44);color:var(--color-brand, #3f7de8);font-weight:bold;border-radius:8px}.upload__img--invisible{display:none}.list-preview{border-top:1px solid var(--color-surface-3, #e7edf4);border-bottom:1px solid var(--color-surface-3, #e7edf4);max-height:200px;overflow-y:auto}.upload__preview{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:16px 0}.upload__preview .preview{display:-ms-flexbox;display:flex;padding:0 16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;gap:8px}.upload__preview .preview-text{font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:700;margin:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:100%}.upload__preview .preview-icon:hover{cursor:pointer}.preview-length{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end;padding-top:16px;text-align:end}.upload__edit input{position:absolute;left:0;top:0;right:0;bottom:0;opacity:0;width:0;height:100%}'}}]);