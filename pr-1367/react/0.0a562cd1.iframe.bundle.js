"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[0],{"./dist/libs/core/src/chunks/chunk.2ND5EWHE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>option_styles_default,z:()=>Focusable});var _templateObject,_t,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/inheritsLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__),option_styles_default=(__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: block;\n      padding: 1rem 1.5rem;\n      cursor: pointer;\n    }\n\n    :host(:not(:last-child)) {\n      border-bottom: 1px solid #e0e0e0;\n    }\n\n    :host(:hover) {\n      background-color: #ededed;\n    }\n\n    :host(:focus-visible) {\n      outline: auto;\n      outline-offset: -6px;\n      outline-color: #666;\n    }\n  }\n"]))))),Focusable=function Focusable(superClass){var HighlightableElement=function(_superClass){function HighlightableElement(){var _this;return(_this=_superClass.apply(this,arguments)||this).onblur=function(e){_this.setAttribute("tabindex","-1"),_this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this.onfocus=function(e){_this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this}return _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(HighlightableElement,_superClass),HighlightableElement.prototype.focus=function focus(options){this.setAttribute("tabindex","0"),_superClass.prototype.focus.call(this,options)},HighlightableElement}(superClass);return HighlightableElement}},"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){var resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.IA)({waitUntilFirstUpdate:!1},options);return function(proto,propertyKey,descriptor){var update=proto.update,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){var _this=this;watchedProperties.forEach((function(property){var _a,key=property;if(changedProps.has(key)){var oldValue=changedProps.get(key),newValue=_this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!_this.hasUpdated||null==(_a=descriptor.value)||_a.call(_this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.2X23R32H.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap,y:()=>ListboxKbNavController});__webpack_require__("./node_modules/core-js/modules/es.array.find.js"),__webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),__webpack_require__("./node_modules/core-js/modules/es.string.trim.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var _keyboardNavigationHandler,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),ListboxKbNavController=function(){function ListboxKbNavController(host){var _this=this;(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_11__.VK)(this,_keyboardNavigationHandler,(function(e){var _a,_b,targetItem=e.target;if(_this.host.navigableItems.includes(targetItem)){var handled=!1;if("ArrowDown"===e.key){var nextItemIndex=_this.host.navigableItems.indexOf(targetItem)+1,nextItem=_this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){var prevOptionIndex=_this.host.navigableItems.indexOf(targetItem)-1,prevItem=_this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key)null==(_a=_this.host.navigableItems[0])||_a.focus(),handled=!0;else if("End"===e.key)null==(_b=_this.host.navigableItems[_this.host.navigableItems.length-1])||_b.focus(),handled=!0;else{var key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){var firstMatch=_this.host.navigableItems.find((function(el){var _a2,text=null==(_a2=el.textContent)?void 0:_a2.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())}})),(this.host=host).addController(this)}var _proto=ListboxKbNavController.prototype;return _proto.hostConnected=function hostConnected(){this.host.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_11__.S7)(this,_keyboardNavigationHandler))},_proto.hostDisconnected=function hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_11__.S7)(this,_keyboardNavigationHandler))},ListboxKbNavController}();function unwrap(slotRef){for(var slot=slotRef;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/chunks/chunk.RH4MLBTZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GdsMenuHeading});var _templateObject,_templateObject2,_t,_t2,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/inheritsLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__),_chunk_WD3OOHSN_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WD3OOHSN.js"),_chunk_WJL43WU3_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WJL43WU3.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js"),menu_heading_styles_default=(0,lit__WEBPACK_IMPORTED_MODULE_6__.AH)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      padding: 0.5 1rem;\n      cursor: pointer;\n    }\n\n    :host(:hover) {\n      background-color: grey;\n    }\n  }\n"])))),GdsMenuHeading=function(_GdsElement){function GdsMenuHeading(){return _GdsElement.apply(this,arguments)||this}_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(GdsMenuHeading,_GdsElement);var _proto=GdsMenuHeading.prototype;return _proto.connectedCallback=function connectedCallback(){var _this=this;_GdsElement.prototype.connectedCallback.call(this),this.setAttribute("inert","true"),this.updateComplete.then((function(){return _chunk_WD3OOHSN_js__WEBPACK_IMPORTED_MODULE_2__.nD.instance.apply(_this,"gds-menu-heading")}))},_proto.render=function render(){return(0,lit__WEBPACK_IMPORTED_MODULE_6__.qy)(_t2||(_t2=_templateObject2||(_templateObject2=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default()(["<slot></slot>"]))))},GdsMenuHeading}(_chunk_WJL43WU3_js__WEBPACK_IMPORTED_MODULE_3__.j);GdsMenuHeading.styles=menu_heading_styles_default,GdsMenuHeading=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-menu-heading")],GdsMenuHeading)},"./dist/libs/core/src/chunks/chunk.TQSHXMZ7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _templateObject,_templateObject2,_t,_t2,_dialogElementRef,_autoPositionCleanupFn,_isMobileViewport,_dispatchUiStateEvent,_handleCloseButton,_registerTriggerEvents,registerTriggerEvents_fn,_unregisterTriggerEvents,unregisterTriggerEvents_fn,_registerAutoPositioning,registerAutoPositioning_fn,_triggerKeyDownListener,_focusFirstSlottedChild,_clickOutsideListener,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/inheritsLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1__),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_23__=(__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-map.js"),__webpack_require__("./node_modules/core-js/modules/es.weak-set.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js")),_chunk_WD3OOHSN_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WD3OOHSN.js"),_chunk_WJL43WU3_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WJL43WU3.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("./node_modules/lit/directives/ref.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),popover_styles_default=(0,lit__WEBPACK_IMPORTED_MODULE_16__.AH)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host([open]) dialog {\n      opacity: 1;\n      box-sizing: border-box;\n      transform: translate3d(0, 0, 0);\n      visibility: visible;\n    }\n\n    dialog {\n      inset: auto;\n      position: fixed;\n      overflow: hidden;\n      padding: 0px;\n      box-sizing: border-box;\n      right: 0;\n      margin: 0;\n      box-shadow:\n        0 0 0 1px rgba(0, 0, 0, 0.2),\n        0 1rem 28px rgba(0, 0, 0, 0.15);\n      border-width: 0;\n      border-radius: 0.5rem;\n    }\n\n    header {\n      display: none;\n    }\n\n    dialog::backdrop {\n      background-color: transparent;\n      display: block;\n      position: fixed;\n    }\n  }\n"])))),GdsPopover=function(_GdsElement){function GdsPopover(){var _this;return _this=_GdsElement.apply(this,arguments)||this,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_registerTriggerEvents),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_unregisterTriggerEvents),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_registerAutoPositioning),_this.open=!1,_this.triggerRef=Promise.resolve(void 0),_this.label=void 0,_this.placement="bottom-start",_this.calcMinWidth=function(referenceEl){return referenceEl.offsetWidth+"px"},_this.calcMaxWidth=function(_referenceEl){return"auto"},_this.calcMinHeight=function(referenceEl){return"auto"},_this.calcMaxHeight=function(_referenceEl){return"500px"},_this._trigger=void 0,_this._isVirtKbVisible=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_dialogElementRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__._)()),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_autoPositionCleanupFn,void 0),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_isMobileViewport,!1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_dispatchUiStateEvent,(function(reason){_this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:_this.open,reason},bubbles:!1,composed:!1}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_handleCloseButton,(function(e){e.stopPropagation(),e.preventDefault(),_this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this,_dispatchUiStateEvent).call(_this,"close"),setTimeout((function(){var _a;return null==(_a=_this._trigger)?void 0:_a.focus()}),250)})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_triggerKeyDownListener,(function(e){"ArrowDown"===e.key&&(e.preventDefault(),_this.open=!0,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this,_dispatchUiStateEvent).call(_this,"show")),"Escape"===e.key&&(_this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this,_dispatchUiStateEvent).call(_this,"cancel"))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_focusFirstSlottedChild,(function(){var _a,_b,firstSlottedChild=null==(_b=null==(_a=_this.shadowRoot)?void 0:_a.querySelector("slot"))?void 0:_b.assignedElements()[0];_this.updateComplete.then((function(){null==firstSlottedChild||firstSlottedChild.focus()}))})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.VK)(_this,_clickOutsideListener,(function(evt){var e=evt,dialog=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this,_dialogElementRef).value;if((e.clientX>0||e.clientY>0)&&dialog&&_this.open){var rect=dialog.getBoundingClientRect();rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width||(e.stopPropagation(),_this.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this,_dispatchUiStateEvent).call(_this,"close"))}})),_this}_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_inheritsLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(GdsPopover,_GdsElement);var _proto=GdsPopover.prototype;return _proto._handleTriggerRefChanged=function _handleTriggerRefChanged(){var _this2=this;this.triggerRef.then((function(el){el&&(_this2._trigger=el)}))},_proto._handleTriggerChanged=function _handleTriggerChanged(){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)},_proto.connectedCallback=function connectedCallback(){var _this3=this;_GdsElement.prototype.connectedCallback.call(this),_chunk_WD3OOHSN_js__WEBPACK_IMPORTED_MODULE_11__.nD.instance.apply(this,"gds-popover"),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(function(e){"Escape"===e.key&&(_this3.open=!1,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this3,_dispatchUiStateEvent).call(_this3,"cancel"),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(function(e){var t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?_this3._isVirtKbVisible=!0:_this3._isVirtKbVisible=!1})),this.addEventListener("blurin",(function(_){_this3._isVirtKbVisible=!1}))},_proto.disconnectedCallback=function disconnectedCallback(){_GdsElement.prototype.disconnectedCallback.call(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.jq)(this,_unregisterTriggerEvents,unregisterTriggerEvents_fn).call(this)},_proto.render=function render(){return(0,lit__WEBPACK_IMPORTED_MODULE_16__.qy)(_t2||(_t2=_templateObject2||(_templateObject2=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_1___default()(['<dialog\n      class="','"\n      ',"\n    >\n      <header>\n        <h2>",'</h2>\n        <button\n          class="close"\n          @click=','\n          aria-label="','"\n        >\n          <i></i>\n        </button>\n      </header>\n      <slot></slot>\n    </dialog>']))),(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_18__.H)({"v-kb-visible":this._isVirtKbVisible}),(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_20__.K)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_dialogElementRef)),this.label,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_handleCloseButton),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_19__.ab)("Close"))},_proto._handleOpenChange=function _handleOpenChange(){var _this4=this;this.setAttribute("aria-hidden",String(!this.open)),this.hidden=!this.open,this.updateComplete.then((function(){var _a,_b,_c;_this4.open?(null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_dialogElementRef).value)||_a.showModal(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_focusFirstSlottedChild).call(_this4),setTimeout((function(){var _a2;return null==(_a2=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_dialogElementRef).value)?void 0:_a2.addEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_clickOutsideListener))}),0)):(null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_dialogElementRef).value)||_b.close(),null==(_c=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_dialogElementRef).value)||_c.removeEventListener("click",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this4,_clickOutsideListener)))}))},_proto._handleMobileLayout=function _handleMobileLayout(matches){var _a,_b,_c,_d,_this5=this;(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.OV)(this,_isMobileViewport,matches),matches?(null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_autoPositionCleanupFn))||_a.call(this),null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_dialogElementRef).value)||_b.style.removeProperty("left"),null==(_c=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_dialogElementRef).value)||_c.style.removeProperty("top"),null==(_d=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_dialogElementRef).value)||_d.style.removeProperty("minWidth"),this.updateComplete.then((function(){var _a2;_this5.open&&(null==(_a2=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(_this5,_dialogElementRef).value)||_a2.showModal())}))):this.updateComplete.then((function(){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.jq)(_this5,_registerAutoPositioning,registerAutoPositioning_fn).call(_this5)}))},GdsPopover}(_chunk_WJL43WU3_js__WEBPACK_IMPORTED_MODULE_12__.j);_dialogElementRef=new WeakMap,_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,_registerTriggerEvents=new WeakSet,registerTriggerEvents_fn=function registerTriggerEvents_fn(){var _a;null==(_a=this._trigger)||_a.addEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_triggerKeyDownListener))},_unregisterTriggerEvents=new WeakSet,unregisterTriggerEvents_fn=function unregisterTriggerEvents_fn(){var _a,_b;null==(_a=this._trigger)||_a.removeEventListener("keydown",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_triggerKeyDownListener)),null==(_b=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_autoPositionCleanupFn))||_b.call(this)},_registerAutoPositioning=new WeakSet,registerAutoPositioning_fn=function registerAutoPositioning_fn(){var _this6=this,referenceEl=this._trigger,floatingEl=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_dialogElementRef).value;referenceEl&&floatingEl&&!(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_isMobileViewport)&&((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_autoPositionCleanupFn)&&(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.S7)(this,_autoPositionCleanupFn).call(this),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.OV)(this,_autoPositionCleanupFn,(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_21__.ll)(referenceEl,floatingEl,(function(){(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_21__.rD)(referenceEl,floatingEl,{placement:_this6.placement,middleware:[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_22__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_21__.UU)()],strategy:"fixed"}).then((function(_ref){var x=_ref.x,y=_ref.y;return Object.assign(floatingEl.style,{left:x+"px",top:y+"px",minWidth:_this6.calcMinWidth(referenceEl),maxWidth:_this6.calcMaxWidth(referenceEl),minHeight:_this6.calcMinHeight(referenceEl),maxHeight:_this6.calcMaxHeight(referenceEl)})}))}))))},_triggerKeyDownListener=new WeakMap,_focusFirstSlottedChild=new WeakMap,_clickOutsideListener=new WeakMap,GdsPopover.styles=(0,lit__WEBPACK_IMPORTED_MODULE_16__.iz)(popover_styles_default),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"triggerRef",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"label",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"placement",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"calcMinWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"calcMaxWidth",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"calcMinHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.MZ)()],GdsPopover.prototype,"calcMaxHeight",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.wk)()],GdsPopover.prototype,"_trigger",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_17__.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_13__.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_13__.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_13__.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_23__.M)("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_15__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_14__.Y$)("gds-popover")],GdsPopover)},"./dist/libs/core/src/chunks/chunk.WM7HBMMV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function observeLightDOM(observerConfig){return void 0===observerConfig&&(observerConfig={attributes:!0,childList:!0,subtree:!1,characterData:!0}),function(proto,_propertyKey,descriptor){var observer,connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this);(observer=new MutationObserver((function callback(_mutationList,_observer){var _a;null==(_a=descriptor.value)||_a.call(_this)}))).observe(this,observerConfig)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),observer.disconnect()}}}function watchMediaQuery(q){return function(proto,_propertyKey,descriptor){var mediaQuery=window.matchMedia(q),connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _a,_this2=this;null==connectedCallback||connectedCallback.call(this);var listener=function listener(e){var _a2;null==(_a2=descriptor.value)||_a2.call(_this2,e.matches)};mediaQuery.addEventListener("change",listener),this.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),mediaQuery.removeEventListener("change",listener)},null==(_a=descriptor.value)||_a.call(this,mediaQuery.matches)}}}__webpack_require__.d(__webpack_exports__,{L:()=>observeLightDOM,M:()=>watchMediaQuery})}}]);