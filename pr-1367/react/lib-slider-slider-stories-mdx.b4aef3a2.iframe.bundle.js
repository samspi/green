(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8650],{"./libs/react/src/lib/slider/slider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,disabled:()=>disabled,error:()=>error,textbox:()=>textbox,unitTextbox:()=>unitTextbox});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/slider/slider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_slider__WEBPACK_IMPORTED_MODULE_2__.A,{...props});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"A slider to experiment and adjust values with."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The component allows for easy adjustments of a value and check the updated result immediately."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:'On pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"slider-options",children:"Slider Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["| Prop          | Type                                       | Description                                                                                                                        |\n| :------------ | :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |\n| name?         | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"}),"                                   | Name of the input element                                                                                                          |\n| value?        | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"number"}),"                                   | Value of the input element                                                                                                         |\n| min           | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"number"}),"                                   | The greatest value in the range of permitted values. Default is 0                                                                  |\n| max           | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"number"}),"                                   | The lowest value in the range of permitted values. Default is 100                                                                  |\n| showMinMax?   | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"boolean"}),"                                  | Whether or not to show min and max values. Default is false                                                                        |\n| minMaxFormat? | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"(value: string, unit?: string) => string"})," | Formatting function for min and max labels.                                                                                        |\n| step          | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"number"}),"                                   | The number that specifies the granularity that the value must adhere to. Default is 1                                              |\n| label?        | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"}),"                                   | Label for the input element                                                                                                        |\n| instruction?  | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"}),"                                   | Input element instruction                                                                                                          |\n| disabled      | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"boolean"}),"                                  | Whether or not the input is disabled. Default is false                                                                             |\n| hasTextbox    | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"boolean"}),"                                  | Whether or not should have input textbox along with the slider. Default is false                                                   |\n| unitLabel     | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"}),"                                   | Set this to a string, for example ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"kr"}),", to show a unit label next to the input field                                               |\n| errorMessage? | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"string"}),"                                   | Error message for invalid inputs                                                                                                   |\n| onChange?     | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"(value: number) => void"}),"                  | Callback function that is fired when the value changes. The new value is provided as a paramter to the callback function           |\n| onClamp?      | ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"(unclamped: number) => void"}),"              | Callback function that is fired when the value is clamped. The unclamped value is provided as a parameter to the callback function |"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Slider",component:_slider__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{name:{name:"name",control:{type:"text"}},value:{name:"value",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},showMinMax:{name:"showMinMax",defaultValue:!1,control:{type:"boolean"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Default",children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"with-textbox",children:"With textbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Textbox",args:{hasTextbox:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"with-textbox-with-unit-label-and-min-max-labels",children:"With textbox with unit label and min max labels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"UnitTextbox",args:{hasTextbox:!0,unitLabel:"kr",showMinMax:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"with-error-message",children:"With error message"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Error",args:{hasTextbox:!0,errorMessage:"Error text can be quite long"},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Disabled",args:{hasTextbox:!0,disabled:!0},children:Template.bind({})})})]})}const defaultStory=Template.bind({});defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"props => <Slider {...props} />"}};const textbox=Template.bind({});textbox.storyName="Textbox",textbox.args={hasTextbox:!0},textbox.parameters={storySource:{source:"props => <Slider {...props} />"}};const unitTextbox=Template.bind({});unitTextbox.storyName="UnitTextbox",unitTextbox.args={hasTextbox:!0,unitLabel:"kr",showMinMax:!0},unitTextbox.parameters={storySource:{source:"props => <Slider {...props} />"}};const error=Template.bind({});error.storyName="Error",error.args={hasTextbox:!0,errorMessage:"Error text can be quite long"},error.parameters={storySource:{source:"props => <Slider {...props} />"}};const disabled=Template.bind({});disabled.storyName="Disabled",disabled.args={hasTextbox:!0,disabled:!0},disabled.parameters={storySource:{source:"props => <Slider {...props} />"}};const componentMeta={title:"Components/Slider",component:_slider__WEBPACK_IMPORTED_MODULE_2__.A,argTypes:{name:{name:"name",control:{type:"text"}},value:{name:"value",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},showMinMax:{name:"showMinMax",defaultValue:!1,control:{type:"boolean"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["defaultStory","textbox","unitTextbox","error","disabled"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","defaultStory","textbox","unitTextbox","error","disabled"]},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sg:()=>debounce,cb:()=>delay,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors,ok:()=>validateClassName});__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js");var validateClassName=function validateClassName(value){switch(value){case"success":return"is-valid";case"error":return"is-invalid";default:return""}},debounce=function debounce(func,ms){var timeoutID;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timeoutID),timeoutID=window.setTimeout((function(){func.apply(undefined,args)}),ms)}},delay=function delay(ms){return new Promise((function(resolve){return setTimeout(resolve,ms)}))},randomId=(__webpack_require__("./node_modules/core-js/modules/es.error.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),function randomId(){return"gds-"+Math.random().toString(36).substring(2,9)}),sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=function getSliderTrackBackground(val){return"linear-gradient(\n        to right,\n        "+sliderColors.primary+" 0%,\n        "+sliderColors.primary+" "+val+"%,\n        "+sliderColors.disabled+" "+val+"%,\n        "+sliderColors.disabled+" 100%\n      )"}},"./libs/react/src/lib/slider/slider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>Slider});__webpack_require__("./node_modules/core-js/modules/es.error.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.number.is-nan.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js");var react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/index.js"),_sebgroup_extract__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./libs/extract/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/jsx-runtime.js"),InputWrapper=function InputWrapper(_ref){var children=_ref.children,unitLabel=_ref.unitLabel;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:unitLabel?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"group group-border group-focus",children:[children,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("span",{className:"form-text",children:unitLabel})]}):children})},minMaxFormatFn=function minMaxFormatFn(value,unit){return unit?value+" "+unit:value.toString()};function Slider(_ref2){var _ref2$name=_ref2.name,name=void 0===_ref2$name?(0,_sebgroup_extract__WEBPACK_IMPORTED_MODULE_10__.zE)()+"-slider":_ref2$name,value=_ref2.value,defaultValue=_ref2.defaultValue,_ref2$min=_ref2.min,min=void 0===_ref2$min?0:_ref2$min,_ref2$max=_ref2.max,max=void 0===_ref2$max?100:_ref2$max,_ref2$minMaxFormat=_ref2.minMaxFormat,minMaxFormat=void 0===_ref2$minMaxFormat?minMaxFormatFn:_ref2$minMaxFormat,_ref2$showMinMax=_ref2.showMinMax,showMinMax=void 0!==_ref2$showMinMax&&_ref2$showMinMax,_ref2$step=_ref2.step,step=void 0===_ref2$step?1:_ref2$step,label=_ref2.label,instruction=_ref2.instruction,errorMessage=_ref2.errorMessage,_ref2$hasTextbox=_ref2.hasTextbox,hasTextbox=void 0!==_ref2$hasTextbox&&_ref2$hasTextbox,unitLabel=_ref2.unitLabel,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,onChange=_ref2.onChange,_ref2$enableClamping=_ref2.enableClamping,enableClamping=void 0===_ref2$enableClamping||_ref2$enableClamping,onClamp=_ref2.onClamp,enterKeyHint=_ref2.enterKeyHint,_React$useState=react__WEBPACK_IMPORTED_MODULE_9__.useState(),background=_React$useState[0],setBackground=_React$useState[1],_React$useState2=react__WEBPACK_IMPORTED_MODULE_9__.useState(null!=value?value:defaultValue),sliderValue=_React$useState2[0],setSliderValue=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_9__.useState(sliderValue+""),inputFieldValue=_React$useState3[0],setInputFieldValue=_React$useState3[1];react__WEBPACK_IMPORTED_MODULE_9__.useLayoutEffect((function(){if(disabled)setBackground(_sebgroup_extract__WEBPACK_IMPORTED_MODULE_10__.SE.disabled);else{var percent=0;void 0!==sliderValue&&(percent=(sliderValue-min)/(max-min)*100),setBackground((0,_sebgroup_extract__WEBPACK_IMPORTED_MODULE_10__.jz)(percent))}}),[disabled,sliderValue]);var clamp=function clamp(unclamped){if(!enableClamping)return Number(unclamped);if("string"==typeof unclamped&&(unclamped=Number(unclamped)),!unclamped||Number.isNaN(unclamped))return min;var clamped=Math.min(Math.max(min,unclamped),max);return clamped!==unclamped&&onClamp&&onClamp(unclamped),clamped},setNumValue=function setNumValue(value){""===value&&(value=min);var unclamped=Number(value),clamped=clamp(unclamped);return setSliderValue(clamped),[unclamped,clamped]};react__WEBPACK_IMPORTED_MODULE_9__.useEffect((function(){setNumValue(value)}),[value]);var handleChange=function handleChange(value){var _setNumValue=setNumValue(value),unclamped=_setNumValue[0],clamped=_setNumValue[1];setInputFieldValue(unclamped+""),onChange&&onChange(clamped)},handleInputFieldChange=function handleInputFieldChange(value,shouldClamp){void 0===shouldClamp&&(shouldClamp=!1),handleChange(value),""===value?setInputFieldValue(""):shouldClamp&&setInputFieldValue(clamp(value)+"")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"gds-slider-label-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{children:label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("label",{htmlFor:name,id:name+"-label",children:label}),instruction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p",{children:instruction})]})}),hasTextbox&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(InputWrapper,{unitLabel,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input",{type:"text",inputMode:"numeric",pattern:"[0-9]*",value:inputFieldValue,id:name+"-textbox",name,"aria-labelledby":name+"-label",enterKeyHint,className:errorMessage?"is-invalid":"",disabled,onChange:function onChange(e){return handleInputFieldChange(e.currentTarget.value)},onKeyDown:function onKeyDown(e){return"Enter"===e.key&&handleInputFieldChange(e.currentTarget.value,!0)},onBlur:function onBlur(e){return handleInputFieldChange(e.currentTarget.value,!0)},min,max,onInvalid:function onInvalid(e){e.preventDefault()}})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("input",{type:"range",value:sliderValue||0,id:name,name,min,max,step,disabled,onChange:function onChange(e){return handleChange(e.currentTarget.value)},style:{background}}),showMinMax&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"gds-slider-min-max",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{children:minMaxFormat(min,unitLabel)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{children:minMaxFormat(max,unitLabel)})]}),errorMessage&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("p",{className:"gds-slider-error-info",children:errorMessage})]})}try{Slider.displayName="Slider",Slider.__docgenInfo={description:"",displayName:"Slider",props:{name:{defaultValue:{value:"`${randomId()}-slider`"},description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},showMinMax:{defaultValue:{value:"false"},description:"",name:"showMinMax",required:!1,type:{name:"boolean"}},minMaxFormat:{defaultValue:{value:"(value: number, unit?: string) => {\n  if (unit) return `${value} ${unit}`\n  return value.toString()\n}"},description:"",name:"minMaxFormat",required:!1,type:{name:"(value: number, unit?: string) => string"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},instruction:{defaultValue:null,description:"",name:"instruction",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},hasTextbox:{defaultValue:{value:"false"},description:"",name:"hasTextbox",required:!1,type:{name:"boolean"}},unitLabel:{defaultValue:null,description:"",name:"unitLabel",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(value: number) => void"}},enableClamping:{defaultValue:{value:"true"},description:"",name:"enableClamping",required:!1,type:{name:"boolean"}},onClamp:{defaultValue:null,description:"",name:"onClamp",required:!1,type:{name:"(value: number) => void"}},enterKeyHint:{defaultValue:null,description:"",name:"enterKeyHint",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"enter"'},{value:'"done"'},{value:'"go"'},{value:'"next"'},{value:'"previous"'},{value:'"send"'}]}},defaultValue:{defaultValue:null,description:"@deprecated Use `value` instead",name:"defaultValue",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/slider/slider.tsx#Slider"]={docgenInfo:Slider.__docgenInfo,name:"Slider",path:"libs/react/src/lib/slider/slider.tsx#Slider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);