/*! For license information please see lib-dropdown-dropdown-stories-mdx.83df21ef.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6854],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js");const o=o=>o??lit_html.s6},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>o});var lit_html=__webpack_require__("./node_modules/lit/node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit/node_modules/lit-html/directive.js");class e extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===lit_html.s6||null==r)return this._t=void 0,this.it=r;if(r===lit_html.c0)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}e.directiveName="unsafeHTML",e.resultType=1;const o=(0,directive.u$)(e)},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./libs/react/src/lib/dropdown/dropdown.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,dropdown:()=>dropdown});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_dropdown__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/dropdown/dropdown.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({align,...props})=>{const _components=Object.assign({div:"div"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)());return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.div,{style:{paddingBottom:"150px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{...props})})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"dropdown",children:"Dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"Dropdown Component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:{options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:value=>{console.log("OnChange",value)},label:"Dropdown label",syncPopoverWidth:!1},children:Template.bind({})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"The dropdown options should be provided as an array of objects with label and value. When a user chooses an option the value will be selected and emitted to onChange."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-typescript",children:"const options = [\n  { label: 'Select', value: null },\n  { label: 'Tacos', value: 'tacos' },\n  { label: 'Pizza', value: 'pizza' },\n  { label: 'Sushi', value: 'sushi' },\n]\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Set the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"value"})," prop to set the selected option/options. In multiple select mode, the value should be an array of values."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"By default, the dropdown will look for a label and value pair for the data. The following inputs can be set to alter the options if neccesary."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Input (attribute) | Description                                                          | Default |\n| :---------------- | :------------------------------------------------------------------- | :------ |\n| useValue          | Which key to use as value.                                           | `value` |\n| display           | Which key to use as display value when selected and in options list. | `label` |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"value-object",children:"Value Object"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Dropdown option values can even be an object, but note that it requires a ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"compareWith"})," function to uniquely identify each object. Eg:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Complex values" options={[{ label: "Tacos", value: { id: "tacos", kitchen: "mexican" } }, { label: "Pizza", value: { id: "pizza", kitchen: "italian" } }, { label: "Sushi", value: { id: "sushi", kitchen: "japanese" } }]} compareWith={(meal1, meal2) => meal1.id === meal2.id} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Complex values",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(meal1,meal2)=>meal1.id===meal2.id,onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"texts-and-placeholder",children:"Texts and placeholder"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Custom texts can be set using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"texts"})," prop which takes an object with the following keys:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.oz,{children:"\n| Key           | Type     | Description                                 |\n| :------------ | :------- | :------------------------------------------ |\n| `placeholder` | `string` | Text to display when no option is selected. |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Awesome label!!" informationLabel="Awesome informationLabel!!" texts={{ placeholder: "Select me please!" }} options={[{ label: "Tacos", value: { id: "tacos", kitchen: "mexican" } }, { label: "Pizza", value: { id: "pizza", kitchen: "italian" } }, { label: "Sushi", value: { id: "sushi", kitchen: "japanese" } }]} compareWith={(meal1, meal2) => meal1.id === meal2.id} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",texts:{placeholder:"Select me please!"},options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:(meal1,meal2)=>meal1.id===meal2.id,onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"option-headings",children:"Option headings"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["You can add an option heading by adding the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"heading"})," property to the to the option object and set it to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"true"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<Dropdown label="Option headings" options={[{ label: "Lunch", heading: true }, { label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }, { label: "Dinner", heading: true }, { label: "Burger", value: "burger" }, { label: "Pasta", value: "pasta" }, { label: "Ramen", value: "ramen" }]} />',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"multi-select",children:"Multi select"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Multi select" multiSelect options={[{ label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }]} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Multi select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"small-dropdown",children:"Small dropdown"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Size can be controlled using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"size"})," prop. The default size is ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"medium"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Optionally, the label can also be hidden using the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"hideLabel"})," prop."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div style={{ height: "200px" }}><Dropdown label="Small dropdown" size="small" hideLabel options={[{ label: "Tacos", value: "tacos" }, { label: "Pizza", value: "pizza" }, { label: "Sushi", value: "sushi" }]} onChange={value => console.log("OnChange", value)} /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{height:"200px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],onChange:value=>console.log("OnChange",value)})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"available-props",children:"Available props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms})]})}const dropdown=Template.bind({});dropdown.storyName="Dropdown",dropdown.args={options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:value=>{console.log("OnChange",value)},label:"Dropdown label",syncPopoverWidth:!1},dropdown.parameters={storySource:{source:'({\n  align,\n  ...props\n}) => <div style={{\n  paddingBottom: "150px"\n}}>\n    <Dropdown {...props}></Dropdown>\n  </div>'},componentIds:["component-dropdown"]};const componentMeta={title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_2__.ms,tags:["stories-mdx"],includeStories:["dropdown"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","dropdown"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);