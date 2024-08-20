/*! For license information please see lib-grouped-list-grouped-list-stories-mdx.f97e8c4c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4994],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_defineProperty});var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");function _defineProperty(obj,key,value){return(key=(0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__.A)(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(9675).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/react/src/lib/grouped-list/grouped-list.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_grouped_list__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/grouped-list/grouped-list.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Grouped list",component:_grouped_list__WEBPACK_IMPORTED_MODULE_2__.D}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"grouped-list",children:"Grouped List"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://github.com/sebgroup/green/tree/main/libs/react/src/lib/grouped-list",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"}),"\n | \n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/lists",target:"_blank",rel:"nofollow noopener noreferrer",children:"Usage guidelines"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"overview",children:"Overview"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.p,{children:"List are used to list many datapoints with labels in a structured way. They may be grouped under heading and they may have a link or button added to act on the data being displayed."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"importing-the-component",children:"Importing the component"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["To use the component, import ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"GroupedList"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"ListItem"})," like this:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import { GroupedList, ListItem } from '@sebgroup/green-react'\n\n// Use as JSX element in your app\nreturn (\n  <GroupedList label=\"List heading\">\n    <ListItem>Item 1</ListItem>\n    <ListItem>Item 2</ListItem>\n    <ListItem>Item 3</ListItem>\n  </GroupedList>\n)\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<GroupedList label="List heading"><ListItem>{"Item 1"}</ListItem><ListItem>{"Item 2"}</ListItem><ListItem>{"Item 3"}</ListItem></GroupedList>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_grouped_list__WEBPACK_IMPORTED_MODULE_2__.D,{label:"List heading",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grouped_list__WEBPACK_IMPORTED_MODULE_2__.c,{children:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grouped_list__WEBPACK_IMPORTED_MODULE_2__.c,{children:"Item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_grouped_list__WEBPACK_IMPORTED_MODULE_2__.c,{children:"Item 3"})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"register-transitional-styles",children:"Register transitional styles"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["This component does not need you to import styles from ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Chlorophyll"}),' it handles it with "transitional styles" that you need to register.']}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{className:"language-jsx",children:"import { registerTransitionalStyles } from '@sebgroup/green-react'\n// Register the styles once in your apps entrypoint (main.tsx, app.tsx) file\nregisterTransitionalStyles()\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["For various examples of how to use the component, head over to the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-grouped-list--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"Green Core storybook"})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Grouped list",component:_grouped_list__WEBPACK_IMPORTED_MODULE_2__.D,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["__page"]},"./libs/react/src/lib/grouped-list/grouped-list.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>GroupedList,c:()=>ListItem});var _templateObject,_templateObject2,_t,_t2,react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),classCallCheck=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),get=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_UZLOEUQK=__webpack_require__("./dist/libs/core/src/chunks/chunk.UZLOEUQK.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var chunk_73TOOYEY_templateObject,GdsGroupedList=function(_GdsElement){(0,inherits.A)(GdsGroupedList,_GdsElement);var _super=_createSuper(GdsGroupedList);function GdsGroupedList(){var _this;return(0,classCallCheck.A)(this,GdsGroupedList),(_this=_super.apply(this,arguments)).label="",_this}return(0,createClass.A)(GdsGroupedList,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsGroupedList.prototype),"connectedCallback",this).call(this),(0,chunk_KBYQYDL3.t)(this),chunk_UZLOEUQK.nD.instance.apply(this,"gds-grouped-list")}},{key:"render",value:function render(){var _this2=this;return(0,chunk_VOYMQ322.qy)(_t||(_t=_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["",'\n      <div role="list" aria-labelledby="label">\n        <slot gds-allow="gds-list-item"></slot>\n      </div>']))),(0,when.z)(this.label,(function(){return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['<div class="gds-list-heading" aria-hidden="true" id="label">\n            ',"\n          </div>"]))),_this2.label)})))}}]),GdsGroupedList}(chunk_ZQ4D5K7J.j);(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var chunk_73TOOYEY_t;function chunk_73TOOYEY_createSuper(Derived){var hasNativeReflectConstruct=chunk_73TOOYEY_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_73TOOYEY_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_73TOOYEY_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsListItem=function(_GdsElement){(0,inherits.A)(GdsListItem,_GdsElement);var _super=chunk_73TOOYEY_createSuper(GdsListItem);function GdsListItem(){return(0,classCallCheck.A)(this,GdsListItem),_super.apply(this,arguments)}return(0,createClass.A)(GdsListItem,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsListItem.prototype),"connectedCallback",this).call(this),this.setAttribute("role","listitem")}},{key:"render",value:function render(){return(0,chunk_VOYMQ322.qy)(chunk_73TOOYEY_t||(chunk_73TOOYEY_t=chunk_73TOOYEY_templateObject||(chunk_73TOOYEY_templateObject=taggedTemplateLiteralLoose_default()(["<slot></slot>"]))))}}]),GdsListItem}(chunk_ZQ4D5K7J.j);GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js");(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();var GroupedList=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-grouped-list"),elementClass:GdsGroupedList,react}),ListItem=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-list-item"),elementClass:GdsListItem,react})},"./dist/libs/core/src/chunks/chunk.KBYQYDL3.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>constrainSlots});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");function constrainSlots(self){self.updateComplete.then((function(){var _a,_b,_c,slots=null==(_a=self.shadowRoot)?void 0:_a.querySelectorAll("slot[gds-allow]");if(slots){for(var _i=0,_Array$from=Array.from(self.childNodes);_i<_Array$from.length;_i++){var node=_Array$from[_i];node.nodeType===Node.TEXT_NODE&&""===(null==(_b=node.textContent)?void 0:_b.trim())&&(null==(_c=node.parentNode)||_c.removeChild(node))}var constrain=function constrain(slot){for(var _a2,_b2,allowed=[].concat((0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__.A)((null==(_a2=slot.getAttribute("gds-allow"))?void 0:_a2.split(" "))||[]),["slot"]),_i2=0,_Array$from2=Array.from(slot.assignedNodes());_i2<_Array$from2.length;_i2++){var _node=_Array$from2[_i2];allowed.includes(_node.nodeName.toLowerCase())||null==(_b2=_node.parentNode)||_b2.removeChild(_node)}};slots.forEach((function(slot){constrain(slot),slot.addEventListener("slotchange",(function(){return constrain(slot)}))}))}}))}},"./dist/libs/core/src/transitional-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>_chunks_chunk_UZLOEUQK_js__WEBPACK_IMPORTED_MODULE_0__.YT});var _chunks_chunk_UZLOEUQK_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.UZLOEUQK.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js")},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);