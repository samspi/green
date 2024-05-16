/*! For license information please see components-grouped-list-grouped-list-stories-mdx.fb8fe12c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[393],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./libs/core/src/components/grouped-list/grouped-list.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>grouped_list_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),chunk_6NM7ENKA=__webpack_require__("./dist/libs/core/src/chunks/chunk.6NM7ENKA.js"),chunk_WD3OOHSN=__webpack_require__("./dist/libs/core/src/chunks/chunk.WD3OOHSN.js"),chunk_EDHNUUZW=__webpack_require__("./dist/libs/core/src/chunks/chunk.EDHNUUZW.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var chunk_64WYGLNW_templateObject,GdsGroupedList=class extends chunk_EDHNUUZW.j{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),(0,chunk_6NM7ENKA.t)(this),chunk_WD3OOHSN.nD.instance.apply(this,"gds-grouped-list")}render(){return(0,chunk_VOYMQ322.qy)(_templateObject||(_templateObject=_taggedTemplateLiteral(["",'\n      <div role="list" aria-labelledby="label">\n        <slot gds-allow="gds-list-item"></slot>\n      </div>'])),(0,when.z)(this.label,(()=>(0,chunk_VOYMQ322.qy)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['<div class="gds-list-heading" aria-hidden="true" id="label">\n            ',"\n          </div>"])),this.label))))}};(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-grouped-list")],GdsGroupedList);var GdsListItem=class extends chunk_EDHNUUZW.j{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return(0,chunk_VOYMQ322.qy)(chunk_64WYGLNW_templateObject||(chunk_64WYGLNW_templateObject=function chunk_64WYGLNW_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["<slot></slot>"])))}};GdsListItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-list-item")],GdsListItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",code:"code"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Grouped List"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouped-list",children:"Grouped list"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"<gds-grouped-list>"})," element accepts ",(0,jsx_runtime.jsx)(_components.code,{children:"<gds-list-item>"})," elements as children."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<div style={{ dummy: registerTransitionalStyles() }}><gds-grouped-list label="Example of a basic list of items"><gds-list-item>{"Item 1"}</gds-list-item><gds-list-item>{"Item 2"}</gds-list-item><gds-list-item>{"Item 3"}</gds-list-item><gds-list-item>{"Item 4"}</gds-list-item><gds-list-item>{"Item 5"}</gds-list-item></gds-grouped-list></div>',children:(0,jsx_runtime.jsx)("div",{style:{dummy:(0,transitional_styles.Y)()},children:(0,jsx_runtime.jsxs)("gds-grouped-list",{label:"Example of a basic list of items",children:[(0,jsx_runtime.jsx)("gds-list-item",{children:"Item 1"}),(0,jsx_runtime.jsx)("gds-list-item",{children:"Item 2"}),(0,jsx_runtime.jsx)("gds-list-item",{children:"Item 3"}),(0,jsx_runtime.jsx)("gds-list-item",{children:"Item 4"}),(0,jsx_runtime.jsx)("gds-list-item",{children:"Item 5"})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouped-list-with-values",children:"Grouped list with values"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, the list items are displayed as ",(0,jsx_runtime.jsx)(_components.code,{children:"flex"})," containers with ",(0,jsx_runtime.jsx)(_components.code,{children:"space-between"})," alignment."]}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<div style={{ dummy: registerTransitionalStyles() }}><gds-grouped-list label="Example with values"><gds-list-item><div>{"Key 1"}</div><strong>{"Value 1"}</strong></gds-list-item><gds-list-item><div>{"Key 2"}</div><strong>{"Value 2"}</strong></gds-list-item><gds-list-item><div>{"Key 3"}</div><strong>{"Value 3"}</strong></gds-list-item><gds-list-item><div>{"Key 4"}</div><strong>{"Value 4"}</strong></gds-list-item><gds-list-item><div>{"Key 5"}</div><strong>{"Value 5"}</strong></gds-list-item></gds-grouped-list></div>',children:(0,jsx_runtime.jsx)("div",{style:{dummy:(0,transitional_styles.Y)()},children:(0,jsx_runtime.jsxs)("gds-grouped-list",{label:"Example with values",children:[(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 1"}),(0,jsx_runtime.jsx)("strong",{children:"Value 1"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 2"}),(0,jsx_runtime.jsx)("strong",{children:"Value 2"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 3"}),(0,jsx_runtime.jsx)("strong",{children:"Value 3"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 4"}),(0,jsx_runtime.jsx)("strong",{children:"Value 4"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 5"}),(0,jsx_runtime.jsx)("strong",{children:"Value 5"})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"grouped-list-with-values-and-action",children:"Grouped list with values and action"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<div style={{ dummy: registerTransitionalStyles() }}><gds-grouped-list label="Example with links"><gds-list-item><div>{"Key 1"}</div><strong>{"Value 1"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item><div>{"Key 2"}</div><strong>{"Value 2"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item><div>{"Key 3"}</div><strong>{"Value 3"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item><div>{"Key 4"}</div><strong>{"Value 4"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item><div>{"Key 5"}</div><strong>{"Value 5"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item></gds-grouped-list></div>',children:(0,jsx_runtime.jsx)("div",{style:{dummy:(0,transitional_styles.Y)()},children:(0,jsx_runtime.jsxs)("gds-grouped-list",{label:"Example with links",children:[(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 1"}),(0,jsx_runtime.jsx)("strong",{children:"Value 1"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 2"}),(0,jsx_runtime.jsx)("strong",{children:"Value 2"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 3"}),(0,jsx_runtime.jsx)("strong",{children:"Value 3"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 4"}),(0,jsx_runtime.jsx)("strong",{children:"Value 4"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{children:[(0,jsx_runtime.jsx)("div",{children:"Key 5"}),(0,jsx_runtime.jsx)("strong",{children:"Value 5"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"adjusting-apparence",children:"Adjusting apparence"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The slotted elements can be styled using inline styles or CSS classes."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<div style={{ dummy: registerTransitionalStyles() }}><gds-grouped-list label="Example of left aligned list"><gds-list-item style={{ justifyContent: "left" }}><div>{"Key 1"}</div><strong>{"Value 1"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item style={{ justifyContent: "left" }}><div>{"Key 2"}</div><strong>{"Value 2"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item><gds-list-item style={{ justifyContent: "left" }}><div>{"Key 3"}</div><strong>{"Value 3"}</strong><div><a href="#">{"Link"}</a></div></gds-list-item></gds-grouped-list></div>',children:(0,jsx_runtime.jsx)("div",{style:{dummy:(0,transitional_styles.Y)()},children:(0,jsx_runtime.jsxs)("gds-grouped-list",{label:"Example of left aligned list",children:[(0,jsx_runtime.jsxs)("gds-list-item",{style:{justifyContent:"left"},children:[(0,jsx_runtime.jsx)("div",{children:"Key 1"}),(0,jsx_runtime.jsx)("strong",{children:"Value 1"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{style:{justifyContent:"left"},children:[(0,jsx_runtime.jsx)("div",{children:"Key 2"}),(0,jsx_runtime.jsx)("strong",{children:"Value 2"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]}),(0,jsx_runtime.jsxs)("gds-list-item",{style:{justifyContent:"left"},children:[(0,jsx_runtime.jsx)("div",{children:"Key 3"}),(0,jsx_runtime.jsx)("strong",{children:"Value 3"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("a",{href:"#",children:"Link"})})]})]})})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The slotted elements can be styled using inline styles or CSS classes."}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<div style={{ dummy: registerTransitionalStyles() }}><gds-grouped-list label="Example of vertical list"><gds-list-item style={{ flexDirection: "column", borderWidth: 0 }}><div>{"Key 1"}</div><strong>{"Value 1"}</strong></gds-list-item><gds-list-item style={{ flexDirection: "column", borderWidth: 0 }}><div>{"Key 2"}</div><strong>{"Value 2"}</strong></gds-list-item><gds-list-item style={{ flexDirection: "column", borderWidth: 0 }}><div>{"Key 3"}</div><strong>{"Value 3"}</strong></gds-list-item></gds-grouped-list></div>',children:(0,jsx_runtime.jsx)("div",{style:{dummy:(0,transitional_styles.Y)()},children:(0,jsx_runtime.jsxs)("gds-grouped-list",{label:"Example of vertical list",children:[(0,jsx_runtime.jsxs)("gds-list-item",{style:{flexDirection:"column",borderWidth:0},children:[(0,jsx_runtime.jsx)("div",{children:"Key 1"}),(0,jsx_runtime.jsx)("strong",{children:"Value 1"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{style:{flexDirection:"column",borderWidth:0},children:[(0,jsx_runtime.jsx)("div",{children:"Key 2"}),(0,jsx_runtime.jsx)("strong",{children:"Value 2"})]}),(0,jsx_runtime.jsxs)("gds-list-item",{style:{flexDirection:"column",borderWidth:0},children:[(0,jsx_runtime.jsx)("div",{children:"Key 3"}),(0,jsx_runtime.jsx)("strong",{children:"Value 3"})]})]})})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Grouped List",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const grouped_list_stories=componentMeta,__namedExportsOrder=["__page"]},"./dist/libs/core/src/chunks/chunk.6NM7ENKA.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function constrainSlots(self){self.updateComplete.then((()=>{var _a,_b,_c,slots=null==(_a=self.shadowRoot)?void 0:_a.querySelectorAll("slot[gds-allow]");if(slots){for(var node of Array.from(self.childNodes))node.nodeType===Node.TEXT_NODE&&""===(null==(_b=node.textContent)?void 0:_b.trim())&&(null==(_c=node.parentNode)||_c.removeChild(node));var constrain=slot=>{var _a2,_b2,allowed=(null==(_a2=slot.getAttribute("gds-allow"))?void 0:_a2.split(" "))||[];for(var _node of Array.from(slot.assignedNodes()))allowed.includes(_node.nodeName.toLowerCase())||null==(_b2=_node.parentNode)||_b2.removeChild(_node)};slots.forEach((slot=>{constrain(slot),slot.addEventListener("slotchange",(()=>constrain(slot)))}))}}))}__webpack_require__.d(__webpack_exports__,{t:()=>constrainSlots})},"./dist/libs/core/src/chunks/chunk.EDHNUUZW.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{j:()=>GdsElement});var _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),lit__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/index.js"),GdsElement=(__webpack_require__("./node_modules/reflect-metadata/Reflect.js"),class extends lit__WEBPACK_IMPORTED_MODULE_2__.WF{constructor(){super(),this.gdsElementName="",this._isUsingTransitionalStyles=!1,this._dynamicStylesController=new _chunk_W7CV3QYI_js__WEBPACK_IMPORTED_MODULE_0__.Q(this)}connectedCallback(){super.connectedCallback(),this.gdsElementName=(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.zu)(this.tagName.toLowerCase())||this.gdsElementName,this.setAttribute("gds-element",this.gdsElementName)}})},"./node_modules/lit/node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function n(n,r,t){return n?r(n):null==t?void 0:t(n)}__webpack_require__.d(__webpack_exports__,{z:()=>n})},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);