"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8391],{"./dist/libs/core/src/chunks/chunk.2ND5EWHE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject;__webpack_require__.d(__webpack_exports__,{l:()=>option_styles_default,z:()=>Focusable});var option_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: block;\n      padding: 1rem 1.5rem;\n      cursor: pointer;\n    }\n\n    :host(:not(:last-child)) {\n      border-bottom: 1px solid #e0e0e0;\n    }\n\n    :host(:hover) {\n      background-color: #ededed;\n    }\n\n    :host(:focus-visible) {\n      outline: auto;\n      outline-offset: -6px;\n      outline-color: #666;\n    }\n  }\n"]))),Focusable=superClass=>class HighlightableElement extends superClass{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(options){this.setAttribute("tabindex","0"),super.focus(options)}}},"./dist/libs/core/src/chunks/chunk.2X23R32H.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap,y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),ListboxKbNavController=class{constructor(host){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(e=>{var _a,_b,targetItem=e.target;if(this.host.navigableItems.includes(targetItem)){var handled=!1;if("ArrowDown"===e.key){var nextItemIndex=this.host.navigableItems.indexOf(targetItem)+1,nextItem=this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){var prevOptionIndex=this.host.navigableItems.indexOf(targetItem)-1,prevItem=this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key)null==(_a=this.host.navigableItems[0])||_a.focus(),handled=!0;else if("End"===e.key)null==(_b=this.host.navigableItems[this.host.navigableItems.length-1])||_b.focus(),handled=!0;else{var key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){var firstMatch=this.host.navigableItems.find((el=>{var _a2,text=null==(_a2=el.textContent)?void 0:_a2.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())}})),(this.host=host).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}};function unwrap(slotRef){for(var slot=slotRef;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/chunks/chunk.AB2OQWFX.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,_hidden,_emitSelect,emitSelect_fn,_chunk_2ND5EWHE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js"),_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/class-map.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var GdsOption=class extends((0,_chunk_2ND5EWHE_js__WEBPACK_IMPORTED_MODULE_0__.z)(_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_2__.j)){constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_emitSelect),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_hidden,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_emitSelect,emitSelect_fn)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_emitSelect,emitSelect_fn).call(this,e))}))}get hidden(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_hidden)}set hidden(value){this.isPlaceholder||((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_hidden,"true"===value||!0===value),this.setAttribute("aria-hidden",value.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")):((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_hidden,!1),this.setAttribute("aria-hidden","false"))}render(){var _a,isMultiple=null==(_a=this.parentElement)?void 0:_a.multiple,checkbox=(0,lit__WEBPACK_IMPORTED_MODULE_6__.qy)(_templateObject||(_templateObject=_taggedTemplateLiteral([' <span\n      class="checkbox ','"\n    ></span>'])),(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.H)({checked:this.selected}));return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),(0,lit__WEBPACK_IMPORTED_MODULE_6__.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["<div>"," <slot></slot></div>"])),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__.z)(isMultiple,(()=>checkbox)))}};_hidden=new WeakMap,_emitSelect=new WeakSet,emitSelect_fn=function emitSelect_fn(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},GdsOption.styles=_chunk_2ND5EWHE_js__WEBPACK_IMPORTED_MODULE_0__.l,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsOption.prototype,"value",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"aria-hidden",reflect:!0})],GdsOption.prototype,"hidden",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__.w)("isplaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-option")],GdsOption)},"./dist/libs/core/src/chunks/chunk.EOQOGT7K.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,_chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/ref.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _slotRef,_handleSelect,listbox_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: flex;\n      flex-direction: column;\n    }\n  }\n"]))),GdsListbox=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_2__.j{constructor(){super(),this.multiple=!1,this.compareWith=(a,b)=>a===b,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_slotRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__._)()),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelect,(e=>{var option=e.target;this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(this.options).forEach((el=>{el!==option&&(el.selected=!1)}))),this.ariaActiveDescendantElement=option,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new _chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value&&(0,_chunk_2X23R32H_js__WEBPACK_IMPORTED_MODULE_0__.o)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((el=>!el.hidden))}get visibleSelectedOptionElements(){return this.options.filter((el=>el.selected&&!el.hidden))}get selection(){return this.options.filter((el=>el.selected))}set selection(values){this.options.forEach((el=>{el.selected=values.some((v=>this.compareWith(v,el.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSelect))}focus(){var _a;null==(_a=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||_a.focus()}render(){return(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["<slot ","></slot>"])),(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__.K)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef)))}_rerenderOptions(){this.options.forEach((el=>{el.requestUpdate()}))}};_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:value=>value.toString()}})],GdsListbox.prototype,"multiple",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsListbox.prototype,"compareWith",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_3__.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-listbox")],GdsListbox)},"./dist/libs/core/src/chunks/chunk.KPUOGILQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var menu_heading_styles_default=(0,lit__WEBPACK_IMPORTED_MODULE_4__.AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      padding: 0.5 1rem;\n      cursor: pointer;\n    }\n\n    :host(:hover) {\n      background-color: grey;\n    }\n  }\n"]))),GdsMenuHeading=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-menu-heading")))}render(){return(0,lit__WEBPACK_IMPORTED_MODULE_4__.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["<slot></slot>"])))}};GdsMenuHeading.styles=menu_heading_styles_default,GdsMenuHeading=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-menu-heading")],GdsMenuHeading)},"./dist/libs/core/src/chunks/chunk.WG6B6ZGH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_chunk_MZSK66DN_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SCB55JEL.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var _optionElements,_handleSearchFieldKeyUp,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,_handleSelectionChange,handleSelectionChange_fn,_registerAutoCloseListener,registerAutoCloseListener_fn,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,dropdown_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  @layer base, reset, transitional-styles;\n\n  @layer base {\n    button {\n      appearance: none;\n      display: block;\n      background-color: black;\n      border-radius: 2rem;\n      border: none;\n      color: white;\n      padding: 0.7rem 2rem;\n      margin: 0.5rem 0;\n      box-sizing: border-box;\n    }\n  }\n"]))),GdsDropdown=class extends _chunk_MZSK66DN_js__WEBPACK_IMPORTED_MODULE_0__.S{constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSelectionChange),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerAutoCloseListener),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_unregisterAutoCloseListener),this.label="",this.open=!1,this.searchable=!1,this.multiple=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_optionElements,void 0),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSearchFieldKeyUp,(e=>{var input=this._elSearchInput,options=Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements));(options.forEach((o=>o.hidden=!1)),input.value)&&options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSearchFieldKeyDown,(e=>{var _a;null==(_a=this._elListbox)||_a.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleListboxKeyDown,(e=>{var _a;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(_a=this._elSearchInput)||_a.focus())})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleOptionFocusChange,(e=>{var triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_tabCloseListener,(e=>{var _a;"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,null==(_a=this._elTriggerBtn)||_a.focus())})),(0,_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_11__.t)(this),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.fA)(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_optionElements,this.getElementsByTagName((0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Eq)("gds-option")))}get type(){return"gds-dropdown"}get options(){return Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder")))}get placeholder(){return Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){var _a,_b;return(Array.isArray(this.value)?this.value.length>2?(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.ab)((0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.gx)(_templateObject2||(_templateObject2=_taggedTemplateLiteral([""," selected"])),this.value.length)):this.value.reduce(((acc,cur)=>{var _a2;return acc+(null==(_a2=this.options.find((v=>v.value===cur)))?void 0:_a2.innerHTML)+", "}),"").slice(0,-2):null==(_a=this.options.find((v=>v.selected)))?void 0:_a.innerHTML)||(null==(_b=this.placeholder)?void 0:_b.innerHTML)||""}connectedCallback(){super.connectedCallback(),_chunk_SCB55JEL_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-dropdown"),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.qy)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n      ",'\n\n      <span class="form-info"><slot name="sub-label"></slot></span>\n\n      <gds-popover\n        .label=',"\n        .open=","\n        .calcMaxWidth=","\n        .calcMaxHeight=","\n        .useModalInMobileView=","\n        @gds-ui-state=",'\n      >\n        <button\n          id="trigger"\n          slot="trigger"\n          aria-haspopup="listbox"\n          role="combobox"\n          aria-owns="listbox"\n          aria-controls="listbox"\n          aria-expanded="','"\n          aria-label="','"\n          class=','\n        >\n          <slot name="trigger">\n            <span>',"</span>\n          </slot>\n        </button>\n        ",'\n\n        <gds-listbox\n          id="listbox"\n          .multiple="','"\n          .compareWith="','"\n          @change="','"\n          @gds-focus="','"\n          @keydown=','\n        >\n          <slot gds-allow="gds-option gds-menu-heading"></slot>\n        </gds-listbox>\n      </gds-popover>\n\n      <span class="form-info"><slot name="message"></slot></span>\n    '])),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_12__.z)(this.label&&!this.hideLabel,(()=>(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.qy)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(['<label for="trigger">',"</label>"])),this.label))),this.label,this.open,(trigger=>this.syncPopoverWidth?"".concat(trigger.offsetWidth,"px"):"auto"),(_trigger=>"".concat(this.maxHeight,"px")),!0,(e=>this.open=e.detail.open),this.open,this.label,(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.H)({small:"small"===this.size}),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_6__._)(this.displayValue),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_12__.z)(this.searchable,(()=>(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.qy)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(['<input\n              id="searchinput"\n              type="text"\n              aria-label="','"\n              placeholder="','"\n              @keydown=',"\n              @keyup=","\n            />"])),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.ab)("Filter available options"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_9__.ab)("Search"),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSearchFieldKeyDown),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSearchFieldKeyUp)))),(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(this.multiple),this.compareWith,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_handleSelectionChange,handleSelectionChange_fn),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleOptionFocusChange),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleListboxKeyDown))}_handleLightDOMChange(){var _a,_b;this.requestUpdate(),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(_a=this.options[0])?void 0:_a.value:this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(_b=this.options[0])?void 0:_b.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_onOpenChange(){var open=this.open;Array.from((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)).forEach((o=>o.hidden=!open)),open?(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoCloseListener,registerAutoCloseListener_fn).call(this):((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value="")),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open},bubbles:!0,composed:!0}))}};_optionElements=new WeakMap,_handleSearchFieldKeyUp=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,_handleSelectionChange=new WeakSet,handleSelectionChange_fn=function handleSelectionChange_fn(){this._elListbox.then((listbox=>{var _a;this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=null==(_a=listbox.selection[0])?void 0:_a.value,this.open=!1,setTimeout((()=>{var _a2;return null==(_a2=this._elTriggerBtn)?void 0:_a2.focus()}),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},_registerAutoCloseListener=new WeakSet,registerAutoCloseListener_fn=function registerAutoCloseListener_fn(){this.addEventListener("blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_tabCloseListener))},_unregisterAutoCloseListener=new WeakSet,unregisterAutoCloseListener_fn=function unregisterAutoCloseListener_fn(){this.removeEventListener("blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=dropdown_styles_default,GdsDropdown.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsDropdown.prototype,"label",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsDropdown.prototype,"size",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_13__.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_2__.w)("open")],GdsDropdown.prototype,"_onOpenChange",1),GdsDropdown=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-dropdown")],GdsDropdown)}}]);