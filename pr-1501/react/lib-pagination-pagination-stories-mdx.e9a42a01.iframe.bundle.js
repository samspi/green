/*! For license information please see lib-pagination-pagination-stories-mdx.e9a42a01.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8272],{"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}__webpack_require__.d(__webpack_exports__,{A:()=>_iterableToArray})},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var iterableToArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/iterableToArray.js"),unsupportedIterableToArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.A)(arr)}(arr)||(0,iterableToArray.A)(arr)||(0,unsupportedIterableToArray.A)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(o,minLen):void 0}}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(9675).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./libs/react/src/lib/pagination/pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,pagination:()=>pagination,small:()=>small});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_pagination__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/pagination/pagination.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=props=>{const[pageIndex,setPageIndex]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_pagination__WEBPACK_IMPORTED_MODULE_2__.d,{...props,pageIndex,onClickPage:index=>setPageIndex(index)})};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h3:"h3"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Pagination"})," component allows users to navigate through large sets of items by dividing them into pages.\nIt provides controls to switch between pages and displays the current page number."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Pagination",component:_pagination__WEBPACK_IMPORTED_MODULE_2__.d}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Pagination",args:{length:40,pageSize:5},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.h3,{id:"small",children:"Small"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Small",args:{length:10,pageSize:1,small:!0},children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components.p,{children:["Here are the props available for the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components.code,{children:"Pagination"})," component:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.uY,{of:_pagination__WEBPACK_IMPORTED_MODULE_2__.d})]})}const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={length:40,pageSize:5},pagination.parameters={storySource:{source:"props => {\n  const [pageIndex, setPageIndex] = useState(1);\n  return <Pagination {...props} pageIndex={pageIndex} onClickPage={index => setPageIndex(index)} />;\n}"}};const small=Template.bind({});small.storyName="Small",small.args={length:10,pageSize:1,small:!0},small.parameters={storySource:{source:"props => {\n  const [pageIndex, setPageIndex] = useState(1);\n  return <Pagination {...props} pageIndex={pageIndex} onClickPage={index => setPageIndex(index)} />;\n}"}};const componentMeta={title:"Components/Pagination",component:_pagination__WEBPACK_IMPORTED_MODULE_2__.d,tags:["stories-mdx"],includeStories:["pagination","small"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","pagination","small"]},"./libs/react/src/lib/pagination/pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var _home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),chevronArrowLeft=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z"})}),chevronArrowRight=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("path",{d:"M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z"})}),DOTS="...",getPageRange=function getPageRange(start,end){var length=end-start+1;return Array.from({length},(function(_,idx){return idx+start}))},Pagination=function Pagination(_ref){var small=_ref.small,length=_ref.length,_ref$pageSize=_ref.pageSize,pageSize=void 0===_ref$pageSize?10:_ref$pageSize,_ref$pageIndex=_ref.pageIndex,pageIndex=void 0===_ref$pageIndex?1:_ref$pageIndex,_ref$offset=_ref.offset,offset=void 0===_ref$offset?1:_ref$offset,onClickPage=_ref.onClickPage,totalPageCount=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return Math.ceil(length/pageSize)}),[length,pageSize]),pageList=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){if(offset+5>=totalPageCount)return getPageRange(1,totalPageCount);var offsetPageCount=pageIndex+offset,leftSiblingIndex=Math.max(pageIndex-offset,1),rightSiblingIndex=Math.min(offsetPageCount,totalPageCount),showLeftDots=leftSiblingIndex>2,showRightDots=rightSiblingIndex<totalPageCount-2,itemCount=3+2*offset;return!showLeftDots&&showRightDots?[].concat((0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(getPageRange(1,itemCount)),[DOTS,totalPageCount]):showLeftDots&&!showRightDots?[1,DOTS].concat((0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(getPageRange(totalPageCount-itemCount+1,totalPageCount))):showLeftDots&&showRightDots?[1,DOTS].concat((0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(getPageRange(leftSiblingIndex,rightSiblingIndex)),[DOTS,totalPageCount]):void 0}),[offset,pageIndex,totalPageCount]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("nav",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("pagination",small?"small":"large"),role:"navigation","aria-label":"Pagination",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul",{className:"gds-reset",children:[1!==pageIndex&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{onClick:function onPrev(event){event.preventDefault(),onClickPage&&onClickPage(Math.max(pageIndex-1,1))},"aria-label":"Previous Page",className:"gds-reset",role:"button",children:chevronArrowLeft})}),(pageList||[]).map((function(page,index){return page===DOTS?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{"aria-hidden":"true",children:"..."},index):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{onClick:function onClick(e){e.preventDefault(),onClickPage&&onClickPage(page)},className:"gds-reset",role:"button","aria-current":page===pageIndex?"page":void 0,children:page})},index)})),!!totalPageCount&&pageIndex!==totalPageCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{onClick:function onNext(event){event.preventDefault(),onClickPage&&onClickPage(Math.min(pageIndex+1,totalPageCount))},role:"button","aria-label":"Next Page",className:"gds-reset",children:chevronArrowRight})})]})})};try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{small:{defaultValue:null,description:"Determines if the pagination buttons should be small",name:"small",required:!1,type:{name:"boolean"}},length:{defaultValue:null,description:"The total number of data items to paginate",name:"length",required:!0,type:{name:"number"}},pageSize:{defaultValue:{value:"10"},description:"The number of items to display per page, default 10",name:"pageSize",required:!1,type:{name:"number"}},pageIndex:{defaultValue:{value:"1"},description:"The current page index, start from 1",name:"pageIndex",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"1"},description:"The number of sibling pages to display around the current page, default 1",name:"offset",required:!1,type:{name:"number"}},onClickPage:{defaultValue:null,description:"Callback function to handle page changes",name:"onClickPage",required:!1,type:{name:"(pageIndex: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["libs/react/src/lib/pagination/pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"libs/react/src/lib/pagination/pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);