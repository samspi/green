"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[6847],{"./libs/core/src/storybook-docs/concepts/architecture.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>architecture});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Mermaid=__webpack_require__("./node_modules/mdx-mermaid/lib/Mermaid.mjs"),SBMermaid=function SBMermaid(_ref){var chart=_ref.chart;return chart?react.createElement(Mermaid.K,{chart,config:{theme:{light:"neutral",dark:"dark"}}}):null};function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Concepts/Architecture"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"green-architecture",children:"Green architecture"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Green Core is the foundation of the Green Design System, and consists of a set of Web Components that underpins the React and Angular components that are typically used when building applications."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Web Components are themselves often composed of a hierarchy of smaller Web Componentes, called primitives, that defines the various atomic pieces that make up a component."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The Green architecture roughly looks something like this:"}),"\n",(0,jsx_runtime.jsx)(SBMermaid,{chart:"flowchart TD\n  subgraph Green Core\n    DT[Design Tokens]---AP\n    M[Markup]---AP\n    S[Styles]---AP\n    AP[Atomic Primitives]---|Composition|CP[Compound Primitives]---|Public API Boundry|WC[Web Components]\n  end\n  WC---A[Angular]\n  WC---R[React]\n"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Of course, design tokens, markup and styles can be used on all levels of composition, but are only drawn at the top here in order to simplify the diagram."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Public API Boundry before Web Components means that anything that is lower level than a complete component is considered internal to the framework and should not be used by consumers. We only guarantee semantic versioning for the public api. Anything that is considered internal could change in breaking ways in any release."})]})}const architecture=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);