/*! For license information please see scss-components-modal-modal-stories-mdx.806043d2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1934],{"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./libs/chlorophyll/scss/components/modal/modal.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DialogueTemplate:()=>DialogueTemplate,SlideoutTemplate:()=>SlideoutTemplate,TakeoverTemplate:()=>TakeoverTemplate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,dialogue:()=>dialogue,slideOut:()=>slideOut,slideOut768:()=>slideOut768,slideOut960:()=>slideOut960,takeover:()=>takeover});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DialogueTemplate=({headline,body})=>`\n    <section role='dialog'\n           aria-modal="true"\n           aria-labelledby="modal_header"\n           aria-describedby="modal_body">\n    <header>\n      <div id="modal_header" class="heading-m">${headline}</div>\n      <button class='close'>\n        <span class='sr-only'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class='body' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </section>`,SlideoutTemplate=({headline,body,variant})=>`\n    <aside role='dialog'\n         role='dialog'\n         aria-modal="true"\n         aria-labelledby="modal_header"\n         aria-describedby="modal_body"\n         class="${"default"!==variant?`gds-slide-out--${variant}`:""}"\n         >\n    <header>\n      <h3 id="modal_header" class="heading-m">${headline}</h3>\n      <button class='close'>\n        <span class='sr-only'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class='body' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </aside>`,TakeoverTemplate=({headline,body})=>`\n    <main role='dialog'\n        aria-modal="true"\n        aria-labelledby="modal_header"\n        aria-describedby="modal_body">\n    <header>\n      <h3 id="modal_header">${headline}</h3>\n      <button class='close'>\n        <span class='sr-only'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class='body' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </main>`;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",h4:"h4"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Modal",argTypes:{headline:{control:"text"},body:{control:"text"}}}),"\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("style",{children:"\n    main {\n      position: relative !important;\n      max-height: 500px;\n      max-width: 100%;\n    }\n    section {\n      position: relative !important;\n      margin: auto;\n      max-height: 300px;\n    }\n    aside {\n      max-height: 500px;\n      margin-left: auto;\n    }\n    .backdrop {\n      position: absolute !important;\n      margin-bottom: 1.5rem;\n      z-index: -1 !important;\n    }\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"modals",children:"Modals"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{role:"alert",class:"info mb-7 mt-5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("main",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Missing JavaScript!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'Please note that the examples below just represent the html markup and\nthey won\'t work without JavaScript. Please checkout the framework\nimplementations for "working" examples.'})})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{target:"_blank",href:"./../angular/?path=/docs/components-modal",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"View Angular component"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{target:"_blank",href:"./../react/?path=/docs/components-modal",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"View React component"})})]})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"modal-variants",children:"Modal variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Green currently provides three different variants of the modal - ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"dialog"}),", ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"aside"})," (aka slide out) and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.strong,{children:"fullscreen"})," (aka take over)."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"dialogue",children:"Dialogue"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Dialog modals are typically used for confirming actions or displaying information that the user must act on before continuing with intended flow."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Dialogue",parameters:{componentIds:["component-dialogue"]},args:{headline:"Dialogue headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},children:DialogueTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"slide-out",children:"Slide-out"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Aside modals or slide out modals are typically used for displaying details regarding some information, i.e. transaction details in a list of transactions. It slides in from the right on desktop and from the bottom of the viewport on smaller screens like mobile devices."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Slide-out",parameters:{componentIds:["component-slideout"]},args:{headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},argTypes:{headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},children:SlideoutTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"slide-out-variants",children:"Slide-out variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"slide-out-768",children:"Slide-out 768"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Slide-out 768",parameters:{componentIds:["component-slideout"]},args:{headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>",variant:"768"},argTypes:{headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},children:SlideoutTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h4,{id:"slide-out-960",children:"Slide-out 960"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Slide-out 960",parameters:{componentIds:["component-slideout"]},args:{headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>",variant:"960"},argTypes:{headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},children:SlideoutTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h3,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Fullscreen modals or takeovers are typically used for wizards or for complex flows requiring a lot of screen estate."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Takeover",parameters:{componentIds:["component-takeover"]},args:{headline:"Takeover headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},children:TakeoverTemplate.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"scroll-body-content",children:"Scroll body content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components.p,{children:["Content placed inside modal body, ie. element with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("code",{children:".body"})," class will scroll horizontally if it overflows the height of the modal."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div><section role="dialog" aria-modal="true" aria-labelledby="modal_header" aria-describedby="modal_body"><header id="modal_header"><h3>{"Header"}</h3><button class="close"><span class="sr-only">{"Close"}</span><i /></button></header><div class="body" id="modal_body"><p><p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\\nfinibus sodales diam a semper. Nam vel enim ut purus lobortis\\nsagittis. Etiam ut egestas velit. Cras eu finibus turpis. Cras in nisi\\nsagittis, bibendum tortor vel, tristique enim. Praesent vestibulum\\nvolutpat eros, in cursus enim laoreet nec. Suspendisse aliquam ex eget\\nvelit feugiat, rhoncus auctor tortor egestas. Curabitur imperdiet\\nvelit nec hendrerit accumsan. Nam ut lacinia felis, non lacinia quam.\\nPellentesque placerat dolor malesuada, viverra nulla a, commodo ex.\\nPraesent vulputate sollicitudin enim, a elementum turpis."}</p></p></div><footer><button type="button">{"Secondary"}</button><button type="submit">{"Primary"}</button></footer></section></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section",{role:"dialog","aria-modal":"true","aria-labelledby":"modal_header","aria-describedby":"modal_body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{id:"modal_header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{class:"close",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Close"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"body",id:"modal_body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer\nfinibus sodales diam a semper. Nam vel enim ut purus lobortis\nsagittis. Etiam ut egestas velit. Cras eu finibus turpis. Cras in nisi\nsagittis, bibendum tortor vel, tristique enim. Praesent vestibulum\nvolutpat eros, in cursus enim laoreet nec. Suspendisse aliquam ex eget\nvelit feugiat, rhoncus auctor tortor egestas. Curabitur imperdiet\nvelit nec hendrerit accumsan. Nam ut lacinia felis, non lacinia quam.\nPellentesque placerat dolor malesuada, viverra nulla a, commodo ex.\nPraesent vulputate sollicitudin enim, a elementum turpis."})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"submit",children:"Primary"})]})]})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"backdrops",children:"Backdrops"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{mdxSource:'<div><section role="dialog" aria-modal="true" aria-labelledby="modal_header" aria-describedby="modal_body"><header id="modal_header"><h3>{"Header"}</h3><button class="close"><span class="sr-only">{"Close"}</span><i /></button></header><div class="body" id="modal_body"><p>{"Modal body"}</p></div><footer><button type="button">{"Secondary"}</button><button type="submit">{"Primary"}</button></footer></section><div class="backdrop" /></div>',children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("section",{role:"dialog","aria-modal":"true","aria-labelledby":"modal_header","aria-describedby":"modal_body",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",{id:"modal_header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:"Header"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button",{class:"close",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{class:"sr-only",children:"Close"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"body",id:"modal_body",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:"Modal body"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("footer",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"button",children:"Secondary"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{type:"submit",children:"Primary"})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{class:"backdrop"})]})})]})}const dialogue=DialogueTemplate.bind({});dialogue.storyName="Dialogue",dialogue.args={headline:"Dialogue headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},dialogue.parameters={storySource:{source:'({\n  headline,\n  body\n}) => {\n  return `\n    <section role=\'dialog\'\n           aria-modal="true"\n           aria-labelledby="modal_header"\n           aria-describedby="modal_body">\n    <header>\n      <div id="modal_header" class="heading-m">${headline}</div>\n      <button class=\'close\'>\n        <span class=\'sr-only\'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class=\'body\' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </section>`;\n}'},componentIds:["component-dialogue"]};const slideOut=SlideoutTemplate.bind({});slideOut.storyName="Slide-out",slideOut.argTypes={headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},slideOut.args={headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},slideOut.parameters={storySource:{source:'({\n  headline,\n  body,\n  variant\n}) => {\n  return `\n    <aside role=\'dialog\'\n         role=\'dialog\'\n         aria-modal="true"\n         aria-labelledby="modal_header"\n         aria-describedby="modal_body"\n         class="${variant !== "default" ? `gds-slide-out--${variant}` : ""}"\n         >\n    <header>\n      <h3 id="modal_header" class="heading-m">${headline}</h3>\n      <button class=\'close\'>\n        <span class=\'sr-only\'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class=\'body\' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </aside>`;\n}'},componentIds:["component-slideout"]};const slideOut768=SlideoutTemplate.bind({});slideOut768.storyName="Slide-out 768",slideOut768.argTypes={headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},slideOut768.args={headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>",variant:"768"},slideOut768.parameters={storySource:{source:'({\n  headline,\n  body,\n  variant\n}) => {\n  return `\n    <aside role=\'dialog\'\n         role=\'dialog\'\n         aria-modal="true"\n         aria-labelledby="modal_header"\n         aria-describedby="modal_body"\n         class="${variant !== "default" ? `gds-slide-out--${variant}` : ""}"\n         >\n    <header>\n      <h3 id="modal_header" class="heading-m">${headline}</h3>\n      <button class=\'close\'>\n        <span class=\'sr-only\'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class=\'body\' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </aside>`;\n}'},componentIds:["component-slideout"]};const slideOut960=SlideoutTemplate.bind({});slideOut960.storyName="Slide-out 960",slideOut960.argTypes={headline:{control:"text"},body:{control:"text"},variant:{control:"select",options:["default","768","960"]}},slideOut960.args={headline:"Slide-out headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>",variant:"960"},slideOut960.parameters={storySource:{source:'({\n  headline,\n  body,\n  variant\n}) => {\n  return `\n    <aside role=\'dialog\'\n         role=\'dialog\'\n         aria-modal="true"\n         aria-labelledby="modal_header"\n         aria-describedby="modal_body"\n         class="${variant !== "default" ? `gds-slide-out--${variant}` : ""}"\n         >\n    <header>\n      <h3 id="modal_header" class="heading-m">${headline}</h3>\n      <button class=\'close\'>\n        <span class=\'sr-only\'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class=\'body\' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </aside>`;\n}'},componentIds:["component-slideout"]};const takeover=TakeoverTemplate.bind({});takeover.storyName="Takeover",takeover.args={headline:"Takeover headline",body:"<p>Modal body text. Lorem ipsum dolor sit amet.</p>"},takeover.parameters={storySource:{source:'({\n  headline,\n  body\n}) => {\n  return `\n    <main role=\'dialog\'\n        aria-modal="true"\n        aria-labelledby="modal_header"\n        aria-describedby="modal_body">\n    <header>\n      <h3 id="modal_header">${headline}</h3>\n      <button class=\'close\'>\n        <span class=\'sr-only\'>Close</span>\n        <i></i>\n      </button>\n    </header>\n    <div class=\'body\' id="modal_body">\n      ${body}\n    </div>\n    <footer>\n      <button type="button">Secondary</button><button type="submit">Primary</button>\n    </footer>\n  </main>`;\n}'},componentIds:["component-takeover"]};const componentMeta={title:"Components/Modal",argTypes:{headline:{control:"text"},body:{control:"text"}},tags:["stories-mdx"],includeStories:["dialogue","slideOut","slideOut768","slideOut960","takeover"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["DialogueTemplate","SlideoutTemplate","TakeoverTemplate","dialogue","slideOut","slideOut768","slideOut960","takeover"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);