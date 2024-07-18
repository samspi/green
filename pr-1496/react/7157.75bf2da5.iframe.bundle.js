"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7157],{"./libs/react/src/lib/segmented-control/segmented-control.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y4:()=>Segment,Iz:()=>SegmentedControl});var _templateObject,_t,objectWithoutProperties=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),classCallCheck=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),assertThisInitialized=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),get=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),toConsumableArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),chunk_UZLOEUQK=__webpack_require__("./dist/libs/core/src/chunks/chunk.UZLOEUQK.js"),chunk_6C4XZS2T=__webpack_require__("./dist/libs/core/src/chunks/chunk.6C4XZS2T.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),lit=__webpack_require__("./node_modules/lit/index.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsSegment=function(_GdsElement){(0,inherits.A)(GdsSegment,_GdsElement);var _super=_createSuper(GdsSegment);function GdsSegment(){var _this;return(0,classCallCheck.A)(this,GdsSegment),(_this=_super.apply(this,arguments)).selected=!1,_this.disabled=!1,_this}return(0,createClass.A)(GdsSegment,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsSegment.prototype),"connectedCallback",this).call(this),chunk_UZLOEUQK.nD.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}},{key:"render",value:function render(){return(0,chunk_VOYMQ322.qy)(_t||(_t=_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["<button\n      aria-current=",'\n      ?disabled="','"\n    >\n      <slot></slot>\n    </button>']))),String(this.selected),this.disabled)}}]),GdsSegment}(chunk_ZQ4D5K7J.j);GdsSegment.styles=[].concat((0,toConsumableArray.A)(chunk_6C4XZS2T.L),[(0,lit.iz)(":host {\n  display: flex;\n  transition: 0.2s;\n  z-index: 1;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  overflow: hidden;\n  padding: 0 1rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n}\n\n@media (pointer: fine) {\n  button:hover {\n    background-color: color-mix(\n      in srgb,\n      var(--gds-sys-color-state-layers-state-black-dim1),\n      transparent\n    );\n\n    &:disabled {\n      background-color: transparent;\n    }\n  }\n}\n\nbutton:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: -2px;\n}\n")]),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegment.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"disabled",2),GdsSegment=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segment")],GdsSegment);var chunk_INNMBBVL_templateObject,_templateObject2,_templateObject3,chunk_INNMBBVL_t,_t2,_t3,chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js");function chunk_INNMBBVL_createSuper(Derived){var hasNativeReflectConstruct=chunk_INNMBBVL_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_INNMBBVL_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_INNMBBVL_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _value,_firstVisibleIndex,_calculatedSegmentWidth,_segmentWidth,_segmentsContainerLeft,_focusedIndex,_dragStartX,_dragStartLeft,_isDragging,_startDrag,_drag,_endDrag,_calcVisibleAfterDrag,_calcLayout,_applySegmentsTransform,_handleSlotChange,handleSlotChange_fn,_scrollLeft,_scrollRight,_updateScrollBtnState,_updateIndicator,_handleSegmentClick,_updateSelectedFromValue,BTN_SIZE={small:36,medium:44},getSegmentGap=function getSegmentGap(transitionalStyles){return transitionalStyles?0:4},GdsSegmentedControl=function(_GdsElement){(0,inherits.A)(GdsSegmentedControl,_GdsElement);var _super=chunk_INNMBBVL_createSuper(GdsSegmentedControl);function GdsSegmentedControl(){var _this;return(0,classCallCheck.A)(this,GdsSegmentedControl),_this=_super.apply(this,arguments),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleSlotChange),_this.segMinWidth=100,_this.size="medium",(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_value,void 0),_this._showPrevButton=!1,_this._showNextButton=!1,(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_calculatedSegmentWidth,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_segmentWidth,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_focusedIndex,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_dragStartX,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_dragStartLeft,0),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_isDragging,!1),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_startDrag,(function(event){(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_dragStartX,event.clientX),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_dragStartLeft,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft)),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_isDragging,!0)})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_drag,(function(event){if((0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_isDragging)){event.preventDefault();var delta=event.clientX-(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_dragStartX);if(!(Math.abs(delta)<5))try{_this._elSegments.hasPointerCapture(event.pointerId)||_this._elSegments.setPointerCapture(event.pointerId),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_dragStartLeft)+delta),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_applySegmentsTransform).call((0,assertThisInitialized.A)(_this))}catch(e){}}})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_endDrag,(function(event){if((0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_isDragging)){(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_isDragging,!1);try{_this._elSegments.releasePointerCapture(event.pointerId),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calcVisibleAfterDrag).call((0,assertThisInitialized.A)(_this))}catch(e){}}})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_calcVisibleAfterDrag,(function(){(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,Math.round(-(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft)/(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calculatedSegmentWidth))),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calcLayout).call((0,assertThisInitialized.A)(_this))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_calcLayout,(function(){var followFocus=arguments.length>0&&void 0!==arguments[0]&&arguments[0],calcNumVisibleSegments=function calcNumVisibleSegments(){var numSegments=_this.segments.length,availableWidth=_this._elTrack.offsetWidth;if(availableWidth/numSegments>_this.segMinWidth)return{count:numSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(numSegments-1))/numSegments};var availableWidthIncBtns=_this.offsetWidth-2*BTN_SIZE[_this.size],maxVisibleSegments=Math.floor(availableWidthIncBtns/_this.segMinWidth);return{count:maxVisibleSegments,segmentWidth:(availableWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(maxVisibleSegments-1))/maxVisibleSegments}},count=calcNumVisibleSegments().count;followFocus&&((0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_focusedIndex)>=(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)+count&&(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_focusedIndex)-count+1),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_focusedIndex)<(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)&&(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_focusedIndex)));var endFirstIndex=_this.segments.length-count,hasReachedEnd=(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)>=endFirstIndex,isAtStart=(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)<=0;hasReachedEnd&&(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,endFirstIndex),isAtStart&&(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_firstVisibleIndex,0),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_updateScrollBtnState).call((0,assertThisInitialized.A)(_this),count),_this.updateComplete.then((function(){var _calcNumVisibleSegmen2=calcNumVisibleSegments(),segmentWidth=_calcNumVisibleSegmen2.segmentWidth;_calcNumVisibleSegmen2.count;_this.segments.forEach((function(segment){segment.style.width=segmentWidth+"px"})),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft,-(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)*segmentWidth-getSegmentGap(_this._isUsingTransitionalStyles)*(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_applySegmentsTransform).call((0,assertThisInitialized.A)(_this)),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_calculatedSegmentWidth,segmentWidth),(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_segmentWidth,segmentWidth),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_updateIndicator).call((0,assertThisInitialized.A)(_this))}))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_applySegmentsTransform,(function(){window.requestAnimationFrame((function(){_this._elSegments.style.transform="translateX(".concat((0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_segmentsContainerLeft),"px)")}))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_scrollLeft,(function(){(0,chunk_5VURDMKE.nT)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)._--,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calcLayout).call((0,assertThisInitialized.A)(_this))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_scrollRight,(function(){(0,chunk_5VURDMKE.nT)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)._++,(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calcLayout).call((0,assertThisInitialized.A)(_this))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_updateScrollBtnState,(function(numVisibleSegments){_this._showPrevButton=(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)>0,_this._showNextButton=(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_firstVisibleIndex)<_this.segments.length-numVisibleSegments})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_updateIndicator,(function(){var segment=_this.segments.find((function(s){return s.selected}));if(segment){var selectedSegmentIndex=_this.segments.indexOf(segment),offset=selectedSegmentIndex*(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_segmentWidth)+getSegmentGap(_this._isUsingTransitionalStyles)*selectedSegmentIndex;_this._elIndicator.style.transform="translateX(".concat(offset,"px)"),_this._elIndicator.style.width="".concat((0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_segmentWidth),"px")}else _this._elIndicator.style.transform="translateX(-100%)",_this._elIndicator.style.width="0px"})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleSegmentClick,(function(event){var selectedSegment=_this.segments.find((function(s){return s===event.target||s.contains(event.target)}));selectedSegment&&(_this.segments.forEach((function(s){return s.selected=!1})),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_value,selectedSegment.value),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_updateIndicator).call((0,assertThisInitialized.A)(_this)),_this.dispatchEvent(new CustomEvent("change",{detail:{segment:selectedSegment},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_updateSelectedFromValue,(function(){(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_value)&&_this.updateComplete.then((function(){var selectedSegment=_this.segments.find((function(s){return s.value===(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_value)}));selectedSegment&&(_this.segments.forEach((function(s){return s.selected=!1})),selectedSegment.selected=!0,(0,chunk_5VURDMKE.OV)((0,assertThisInitialized.A)(_this),_focusedIndex,_this.segments.indexOf(selectedSegment)),(0,chunk_5VURDMKE.S7)((0,assertThisInitialized.A)(_this),_calcLayout).call((0,assertThisInitialized.A)(_this),!0))}))})),_this}return(0,createClass.A)(GdsSegmentedControl,[{key:"value",get:function get(){return(0,chunk_5VURDMKE.S7)(this,_value)},set:function set(val){(0,chunk_5VURDMKE.OV)(this,_value,val),(0,chunk_5VURDMKE.S7)(this,_updateSelectedFromValue).call(this)}},{key:"segments",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;(0,get.A)((0,getPrototypeOf.A)(GdsSegmentedControl.prototype),"connectedCallback",this).call(this),chunk_UZLOEUQK.nD.instance.apply(this,"gds-segmented-control"),this.addEventListener("focusin",(function(e){e.target instanceof GdsSegment&&((0,chunk_5VURDMKE.OV)(_this2,_focusedIndex,_this2.segments.indexOf(e.target)),(0,chunk_5VURDMKE.S7)(_this2,_calcLayout).call(_this2,!0))}))}},{key:"render",value:function render(){var _this3=this;return(0,chunk_VOYMQ322.qy)(chunk_INNMBBVL_t||(chunk_INNMBBVL_t=chunk_INNMBBVL_templateObject||(chunk_INNMBBVL_templateObject=taggedTemplateLiteralLoose_default()(["",'\n      <div\n        id="track"\n        @scroll=','\n      >\n        <div\n          id="segments"\n          @pointerdown=',"\n          @pointermove=","\n          @touchmove=","\n          @pointerup=","\n          @pointercancel=",'\n          role="list"\n        >\n          <slot\n            gds-allow="gds-segment"\n            @click=',"\n            @slotchange=",'\n            role="none"\n          ></slot>\n          <div id="indicator" role="none"></div>\n        </div>\n      </div>\n      ',""]))),(0,when.z)(this._showPrevButton,(function(){return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['<button\n            id="btn-prev"\n            @click=',"\n            aria-label=","\n          >\n            <gds-icon-chevron-left />\n          </button>"]))),(0,chunk_5VURDMKE.S7)(_this3,_scrollLeft),(0,lit_localize.ab)("Scroll right"))})),(function(){_this3._elTrack.scrollLeft=0}),(0,chunk_5VURDMKE.S7)(this,_startDrag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_drag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_endDrag),(0,chunk_5VURDMKE.S7)(this,_handleSegmentClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn),(0,when.z)(this._showNextButton,(function(){return(0,chunk_VOYMQ322.qy)(_t3||(_t3=_templateObject3||(_templateObject3=taggedTemplateLiteralLoose_default()(['<button\n            id="btn-next"\n            @click=',"\n            aria-label=","\n          >\n            <gds-icon-chevron-right />\n          </button>"]))),(0,chunk_5VURDMKE.S7)(_this3,_scrollRight),(0,lit_localize.ab)("Scroll right"))})))}},{key:"_recalculateMinWidth",value:function _recalculateMinWidth(){var _this4=this;this.updateComplete.then((function(){return(0,chunk_5VURDMKE.S7)(_this4,_calcLayout).call(_this4)}))}}]),GdsSegmentedControl}(chunk_ZQ4D5K7J.j);_value=new WeakMap,_firstVisibleIndex=new WeakMap,_calculatedSegmentWidth=new WeakMap,_segmentWidth=new WeakMap,_segmentsContainerLeft=new WeakMap,_focusedIndex=new WeakMap,_dragStartX=new WeakMap,_dragStartLeft=new WeakMap,_isDragging=new WeakMap,_startDrag=new WeakMap,_drag=new WeakMap,_endDrag=new WeakMap,_calcVisibleAfterDrag=new WeakMap,_calcLayout=new WeakMap,_applySegmentsTransform=new WeakMap,_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selSegmentValue=null==(_a=this.segments.find((function(s){return s.selected})))?void 0:_a.value;selSegmentValue&&(0,chunk_5VURDMKE.OV)(this,_value,selSegmentValue),(0,chunk_5VURDMKE.S7)(this,_calcLayout).call(this)},_scrollLeft=new WeakMap,_scrollRight=new WeakMap,_updateScrollBtnState=new WeakMap,_updateIndicator=new WeakMap,_handleSegmentClick=new WeakMap,_updateSelectedFromValue=new WeakMap,GdsSegmentedControl.styles=[chunk_6C4XZS2T.L,(0,lit.iz)(":host {\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  box-sizing: border-box;\n  contain: layout;\n  display: inline-flex;\n  gap: 0.25rem;\n  height: 3rem;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n:host([size='small']) {\n  height: 2.5rem;\n}\n\n#track {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 0;\n  flex-shrink: 1;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n#segments {\n  box-sizing: border-box;\n  display: inline-flex;\n  gap: 0.25rem;\n  position: relative;\n  transition: 0.2s;\n  z-index: 1;\n}\n\n#btn-prev,\n#btn-next {\n  align-items: center;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  aspect-ratio: 1;\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  height: 100%;\n  justify-content: center;\n  width: 2.5rem;\n\n  @media (pointer: fine) {\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        var(--gds-sys-color-container-container-dim1)\n      );\n    }\n  }\n}\n\n:host([size='small']) #btn-prev,\n:host([size='small']) #btn-next {\n  width: 2rem;\n}\n\n::slotted(*) {\n  flex-grow: 1;\n  flex-shrink: 0;\n  z-index: 1;\n}\n\n#indicator {\n  background-color: var(--gds-sys-color-container-container-bright);\n  border-radius: calc(infinity * 1px);\n  height: 100%;\n  left: 0;\n  position: absolute;\n  transition:\n    transform 0.2s,\n    width 0.2s;\n  z-index: 0;\n}\n")],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Number,attribute:"seg-min-width"})],GdsSegmentedControl.prototype,"segMinWidth",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0})],GdsSegmentedControl.prototype,"size",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"value",1),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsSegmentedControl.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#indicator")],GdsSegmentedControl.prototype,"_elIndicator",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#track")],GdsSegmentedControl.prototype,"_elTrack",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("#segments")],GdsSegmentedControl.prototype,"_elSegments",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showPrevButton",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showNextButton",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)(),(0,chunk_2WO4NHJ2.w)("segMinWidth")],GdsSegmentedControl.prototype,"_recalculateMinWidth",1),GdsSegmentedControl=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-segmented-control")],GdsSegmentedControl);__webpack_require__("./dist/libs/core/src/chunks/chunk.AXXNOHYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.R45AGMZA.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TPR3GICT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onChange","className"],_excluded2=["className"];(0,transitional_styles.Y)();var CoreSegementedControl=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-segmented-control"),elementClass:GdsSegmentedControl,events:{onchange:"change"},react}),CoreSegment=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-segment"),elementClass:GdsSegment,react}),SegmentedControl=function SegmentedControl(_ref){var onChange=_ref.onChange,className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(CoreSegementedControl,Object.assign({onchange:onChange,className:classnames_default()(className)},props))},Segment=function Segment(_ref2){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(CoreSegment,Object.assign({className:classnames_default()(className)},props))}},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})}}]);