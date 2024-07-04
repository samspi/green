"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2717],{"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:value=>new Date(value),toAttribute:value=>value.toISOString()},dateArrayConverter={fromAttribute:value=>value.split(",").map((d=>new Date(d.trim()))),toAttribute:value=>JSON.stringify(value.map((d=>d.toISOString())))},stringArrayConverter={fromAttribute:value=>value.split(","),toAttribute:value=>Array.isArray(value)?value.join(","):value}},"./dist/libs/core/src/chunks/chunk.FR3LYRMG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_MZSK66DN_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MZSK66DN.js"),_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),_chunk_HNQ5BESO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.HNQ5BESO.js"),_chunk_XXI4FS4C_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.XXI4FS4C.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/static-html.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/lit/node_modules/lit-html/directives/when.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directive_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/lit/directive.js"),lit_html_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/lit/html.js"),ForwardAttributesDirective=class extends lit_directive_js__WEBPACK_IMPORTED_MODULE_10__.WL{constructor(partInfo){if(super(partInfo),partInfo.type!==lit_directive_js__WEBPACK_IMPORTED_MODULE_10__.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(_filter){return lit_html_js__WEBPACK_IMPORTED_MODULE_11__.s6}update(part,[filter]){var _a;const element=part.element,host=null==(_a=part.options)?void 0:_a.host;Array.from(host.attributes).forEach((attr=>{filter(attr)&&element.setAttribute(attr.name.replace("gds-",""),attr.value)}))}},forwardAttributes=(0,lit_directive_js__WEBPACK_IMPORTED_MODULE_10__.u$)(ForwardAttributesDirective),templateCache=new WeakMap;var _isIconButton,_isLink,isLink_get,_defaultRel,defaultRel_get,_mainSlotChange,_handleClick,html2=function stripWhitespace(extendedTag){return(strings,...values)=>{let modstrings=templateCache.get(strings);return modstrings||(modstrings=strings.map((s=>s.replace(/\n[\s]+</gm,"<"))),modstrings.raw=strings.raw,templateCache.set(strings,modstrings)),extendedTag(modstrings,...values)}}(_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.qy),GdsButton=class extends _chunk_MZSK66DN_js__WEBPACK_IMPORTED_MODULE_0__.S{constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_isLink),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_defaultRel),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_isIconButton,!1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_mainSlotChange,(()=>{var _a,_b;const assignedNodes=null!=(_b=null==(_a=this._mainSlot)?void 0:_a.assignedNodes())?_b:[];(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_isIconButton,1===assignedNodes.length&&assignedNodes.some((node=>node.nodeName.toLowerCase().startsWith("gds-icon")))),this.requestUpdate()})),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleClick,(e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())})),(0,_chunk_KBYQYDL3_js__WEBPACK_IMPORTED_MODULE_12__.t)(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),_chunk_HNQ5BESO_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-button")}render(){const buttonClasses={button:!0,circle:(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isIconButton),icon:(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isIconButton),small:"small"===this.size,large:"large"===this.size,positive:"positive"===this.variant,negative:"negative"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},tag=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`a`:lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.eu`button`;return lit_static_html_js__WEBPACK_IMPORTED_MODULE_6__.qy`
      <${tag}
        class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__.H)(buttonClasses)}
        type="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||lit__WEBPACK_IMPORTED_MODULE_5__.s6}
        href=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?this.href:void 0)}
        target=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?this.target:void 0)}
        rel=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?this.rel||(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_defaultRel,defaultRel_get):void 0)}
        download=${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)((0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isLink,isLink_get)?this.download:void 0)}
        part="_button"
        @click="${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleClick)}"
        ${forwardAttributes((attr=>attr.name.startsWith("gds-aria")||"gds-role"===attr.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_mainSlotChange)}></slot>
        <slot name="trail"></slot>
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_13__.z)(!this._isUsingTransitionalStyles,(()=>html2`<gds-ripple></gds-ripple>`))}
      </${tag}>
    `}};_isIconButton=new WeakMap,_isLink=new WeakSet,isLink_get=function(){return this.href.length>0},_defaultRel=new WeakSet,defaultRel_get=function(){return"_blank"===this.target?"noreferrer noopener":void 0},_mainSlotChange=new WeakMap,_handleClick=new WeakMap,GdsButton.styles=[_chunk_XXI4FS4C_js__WEBPACK_IMPORTED_MODULE_2__.L,(0,lit__WEBPACK_IMPORTED_MODULE_5__.iz)("@layer tokens, a11y, core, ranks, sizes, variants, disabled;\n\n@layer tokens {\n  :host {\n    --_gap: var(--gds-space-m);\n\n    --_transition: var(--gds-sys-transition);\n\n    --_padding-inline: var(--gds-space-l);\n    --_padding-block: var(--gds-space-m);\n\n    --_border-radius: var(--gds-space-max);\n    --_border-width: 1px;\n    --_border-style: solid;\n\n    --_color-bg: var(--gds-sys-color-content-content);\n    --_color-text: var(--gds-sys-color-content-content-inverse);\n    --_color-border: var(--gds-sys-color-stroke-stroke);\n\n    --_color-outline-alpha: 60%;\n    --_color-outline: var(--_color-border);\n\n    /* These state layer variables can be variant to the correct state layer token in\n    * the rank and variant specific styles. It will be blended with `--_color-bg`\n    * for the `background-color` rule. */\n    --_state-layer-hover: var(--gds-sys-color-state-layers-state-black);\n    --_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);\n\n    --gds-sys-transition-properties: color;\n\n    contain: layout;\n    display: inline-block;\n    isolation: isolate;\n    max-width: 100%;\n  }\n}\n\n@layer a11y {\n  @media (prefers-color-scheme: dark) {\n    /* TODO */\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :host {\n      --_transition: none;\n    }\n  }\n}\n\n@layer core {\n  .button {\n    --gds-sys-transition-properties: color !important;\n\n    align-items: center;\n    background-color: var(--_color-bg);\n    block-size: 100%;\n    border-color: var(--_color-border);\n    border-radius: var(--_border-radius);\n    border-style: var(--_border-style);\n    border-width: var(--_border-width);\n    box-sizing: border-box;\n    color: var(--_color-text);\n    color-scheme: dark light;\n    cursor: pointer;\n    display: inline-flex;\n    font-family: inherit;\n    font-size: 1rem;\n    font-weight: 400;\n    gap: var(--_gap);\n    height: var(--_size);\n    inline-size: 100%;\n    justify-content: space-between;\n    justify-items: center;\n    line-height: 1.25;\n    outline-color: transparent;\n    outline-offset: 2px;\n    outline-style: solid;\n    outline-width: 2px;\n    padding-block: var(--_padding-block);\n    padding-inline: var(--_padding-inline);\n    position: relative;\n    text-decoration: none;\n    transition: var(--_transition);\n    transition-property: color, border-color;\n\n    &:focus {\n      outline-color: color-mix(\n        in srgb,\n        var(--_color-outline),\n        transparent var(--_color-outline-alpha)\n      );\n\n      &:not(:focus-visible) {\n        outline-color: transparent;\n      }\n    }\n\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--_color-bg),\n        var(--_state-layer-hover)\n      );\n      border-color: color-mix(\n        in srgb,\n        var(--_color-border),\n        var(--_state-layer-hover)\n      );\n    }\n\n    &:active {\n      background-color: color-mix(\n        in srgb,\n        var(--_color-bg),\n        var(--_state-layer-active)\n      );\n      border-color: color-mix(\n        in srgb,\n        var(--_color-border),\n        var(--_state-layer-active)\n      );\n    }\n  }\n\n  .button slot:not([name]) {\n    display: inline-block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .button.icon slot {\n    display: contents;\n  }\n}\n\n@layer ranks {\n  :host([rank*='secondary']) .button {\n    --_color-bg: var(--gds-sys-color-content-content-inverse);\n    --_color-text: var(--gds-sys-color-content-content);\n    --_color-border: var(--gds-sys-color-stroke-stroke);\n\n    &:active {\n      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);\n    }\n  }\n\n  :host([rank*='tertiary']) .button {\n    --_color-bg: transparent;\n    --_color-text: var(--gds-sys-color-content-content);\n    --_color-border: transparent;\n\n    &:hover {\n      --_color-border: var(--gds-sys-color-stroke-stroke);\n    }\n\n    &:active {\n      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);\n      --_color-border: var(--gds-sys-color-stroke-stroke);\n    }\n  }\n\n  .button.circle {\n    display: flex;\n    align-items: center;\n    height: var(--_size);\n    width: var(--_size);\n    aspect-ratio: 1/1;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n  }\n}\n\n@layer sizes {\n  :host([size='small']) .button {\n    --_padding-inline: var(--gds-space-l);\n    --_padding-block: var(--gds-space-s);\n    --_size: 2rem;\n    font-size: 0.875rem;\n  }\n\n  :host([size='medium']) .button {\n    --_padding-inline: var(--gds-space-l);\n    --_padding-block: var(--gds-space-m);\n    --_size: 2.5rem;\n  }\n\n  :host([size='large']) .button {\n    --_padding-inline: var(--gds-space-xl);\n    --_padding-block: var(--gds-space-m);\n    --_size: 3rem;\n  }\n}\n\n@layer variants {\n  :host([rank='primary'][variant='positive']) .button {\n    --_bg: var(--gds-sys-color-container-container-positive);\n    --_color-bg: var(--_bg);\n    --_color-border: var(--_bg);\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);\n    }\n\n    &:active {\n      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);\n    }\n\n    &:focus {\n      --_color-outline: var(--_bg);\n    }\n  }\n\n  :host([rank='secondary'][variant='positive']) .button {\n    --_color-bg: var(--gds-sys-color-content-content-inverse);\n    --_color-text: var(--gds-sys-color-content-content-positive);\n    --_color-border: var(--gds-sys-color-stroke-stroke-positive);\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);\n    }\n\n    &:active {\n      --_state-layer-active: var(\n        --gds-sys-color-state-layers-state-positive-dim\n      );\n    }\n  }\n\n  :host([rank='tertiary'][variant='positive']) .button {\n    --_color-bg: transparent;\n    --_color-text: var(--gds-sys-color-content-content-positive);\n    --_color-border: transparent;\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);\n      --_color-border: var(--gds-sys-color-stroke-stroke-positive);\n    }\n\n    &:active {\n      --_state-layer-active: var(\n        --gds-sys-color-state-layers-state-positive-dim\n      );\n      --_color-border: var(--gds-sys-color-stroke-stroke-positive);\n    }\n  }\n\n  :host([rank='primary'][variant='negative']) .button {\n    --_bg: var(--gds-sys-color-container-container-negative);\n    --_color-bg: var(--_bg);\n    --_color-text: var(--gds-sys-color-status-negative-on-negative);\n    --_color-border: var(--_bg);\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1);\n    }\n\n    &:active {\n      --_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2);\n    }\n\n    &:focus {\n      --_color-outline: var(--_bg);\n    }\n  }\n\n  :host([rank='secondary'][variant='negative']) .button {\n    --_color-bg: var(--gds-sys-color-content-content-inverse);\n    --_color-text: var(--gds-sys-color-content-content-negative);\n    --_color-border: var(--gds-sys-color-stroke-stroke-negative);\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);\n    }\n\n    &:active {\n      --_state-layer-active: var(\n        --gds-sys-color-state-layers-state-negative-dim\n      );\n    }\n  }\n\n  :host([rank='tertiary'][variant='negative']) .button {\n    --_color-bg: transparent;\n    --_color-text: var(--gds-sys-color-content-content-negative);\n    --_color-border: transparent;\n\n    &:hover {\n      --_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);\n      --_color-border: var(--gds-sys-color-stroke-stroke-negative);\n    }\n\n    &:active {\n      --_state-layer-active: var(\n        --gds-sys-color-state-layers-state-negative-dim\n      );\n      --_color-border: var(--gds-sys-color-stroke-stroke-negative);\n    }\n  }\n}\n\n@layer disabled {\n  .button:disabled {\n    --_color-bg: var(--gds-sys-color-container-container-disabled);\n    border-color: var(--_color-bg);\n    color: var(--gds-sys-color-content-content-disabled);\n    pointer-events: none;\n  }\n}\n")],GdsButton.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsButton.prototype,"disabled",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({reflect:!0})],GdsButton.prototype,"type",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({reflect:!0})],GdsButton.prototype,"rank",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({reflect:!0})],GdsButton.prototype,"variant",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({reflect:!0})],GdsButton.prototype,"size",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsButton.prototype,"label",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsButton.prototype,"href",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsButton.prototype,"target",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsButton.prototype,"rel",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsButton.prototype,"download",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("slot:not([name])")],GdsButton.prototype,"_mainSlot",2),GdsButton=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-button")],GdsButton)},"./dist/libs/core/src/chunks/chunk.FWL5O7LY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_XXI4FS4C_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.XXI4FS4C.js"),_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),Ripple=class extends lit__WEBPACK_IMPORTED_MODULE_3__.WF{constructor(){super(...arguments),this.onmousedown=e=>{const rect=e.target.getBoundingClientRect(),rippleEl=this._rippleEl;rippleEl&&(rippleEl.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",e.clientY-rect.top+"px"),this.style.setProperty("--gds-ripple-left",e.clientX-rect.left+"px"),setTimeout((()=>{rippleEl.classList.add("gds-ripple-effect")}),20))}}render(){return lit__WEBPACK_IMPORTED_MODULE_3__.qy`<div></div>`}};Ripple.styles=[_chunk_XXI4FS4C_js__WEBPACK_IMPORTED_MODULE_0__.L,(0,lit__WEBPACK_IMPORTED_MODULE_3__.iz)(":host {\n  --gds-ripple-motion-name: ripple;\n  --gds-ripple-motion: var(--gds-ripple-motion-name)\n    var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function)\n    var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count)\n    var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode)\n    var(--gds-sys-motion-play-state);\n  border-radius: var(--gds-space-max);\n  contain: strict;\n  display: flex;\n  height: 100%;\n  inset: 0;\n  overflow: hidden;\n  position: absolute;\n  width: 100%;\n}\n\ndiv {\n  background-color: currentColor;\n  border-radius: var(--gds-space-max);\n  display: flex;\n  height: 20px;\n  left: var(--gds-ripple-left, 50%);\n  margin-left: -10px;\n  margin-top: -10px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: var(--gds-ripple-top, 50%);\n  width: 20px;\n  will-change: transform;\n}\n\ndiv.gds-ripple-effect {\n  animation: var(--gds-ripple-motion);\n}\n\n@keyframes ripple {\n  from {\n    opacity: 0.5;\n    transform: scale(0);\n  }\n  to {\n    opacity: 0;\n    transform: scale(calc(3 * var(--mt-ripple-spread, 4)));\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  :host {\n    --gds-ripple-motion-name: none !important;\n  }\n}")],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.P)("div")],Ripple.prototype,"_rippleEl",2),Ripple=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_VOYMQ322_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-ripple")],Ripple)},"./dist/libs/core/src/chunks/chunk.MZSK66DN.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>GdsFormControlElement});var _internals,_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/decorators.js"),GdsFormControlElement=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_internals,void 0),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.OV)(this,_internals,this.attachInternals())}catch(e){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.OV)(this,_internals,{form:this.closest("form"),setFormValue:value=>{this.value=value},setValidity:(validity,validationMessage)=>{this.invalid=validity.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}get form(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).form}get validity(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).validity}get validationMessage(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).validationMessage}get willValidate(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).willValidate}checkValidity(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).checkValidity()}reportValidity(){return(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).reportValidity()}connectedCallback(){var _a;super.connectedCallback(),null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).form)||_a.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){var _a;super.disconnectedCallback(),null==(_a=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).form)||_a.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_internals).setFormValue(this.value)}};_internals=new WeakMap,GdsFormControlElement.formAssociated=!0,(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:value=>null==value?void 0:value.toString()}})],GdsFormControlElement.prototype,"invalid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)()],GdsFormControlElement.prototype,"value",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)({reflect:!0})],GdsFormControlElement.prototype,"name",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_1__.w)("invalid")],GdsFormControlElement.prototype,"__handleValidityChange",1),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_2WO4NHJ2_js__WEBPACK_IMPORTED_MODULE_1__.w)("value")],GdsFormControlElement.prototype,"__handleValueChange",1)},"./dist/libs/core/src/chunks/chunk.XXI4FS4C.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>tokens});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),tokens=[(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Thu, 04 Jul 2024 12:05:23 GMT\n */\n\n:host {\n  --gds-ref-color-neutral000: #ffffff;\n  --gds-ref-color-neutral050: #f8f8f8;\n  --gds-ref-color-neutral100: #e9e9e9;\n  --gds-ref-color-neutral150: #eeeeee;\n  --gds-ref-color-neutral200: #dedede;\n  --gds-ref-color-neutral250: #cecece;\n  --gds-ref-color-neutral300: #ababab;\n  --gds-ref-color-neutral350: #adadad;\n  --gds-ref-color-neutral400: #868686;\n  --gds-ref-color-neutral450: #757575;\n  --gds-ref-color-neutral500: #494949;\n  --gds-ref-color-neutral525: #464646;\n  --gds-ref-color-neutral550: #333333;\n  --gds-ref-color-neutral600: #2c2c2c;\n  --gds-ref-color-neutral650: #272727;\n  --gds-ref-color-neutral700: #222222;\n  --gds-ref-color-neutral750: #1a1a1a;\n  --gds-ref-color-neutral800: #121212;\n  --gds-ref-color-blue100: #58b8ee;\n  --gds-ref-color-blue200: #41b0ee;\n  --gds-ref-color-blue300: #00adff;\n  --gds-ref-color-blue400: #2c9cd9;\n  --gds-ref-color-blue500: #0092e1;\n  --gds-ref-color-blue600: #007ac7;\n  --gds-ref-color-blue700: #0062bc;\n  --gds-ref-color-green100: #75b44a;\n  --gds-ref-color-green200: #60cd18;\n  --gds-ref-color-green300: #45b400;\n  --gds-ref-color-green400: #308800;\n  --gds-ref-color-red100: #f7706d;\n  --gds-ref-color-red200: #ff594f;\n  --gds-ref-color-red300: #f03529;\n  --gds-ref-color-red400: #d81a1a;\n  --gds-ref-color-red500: #c82a29;\n  --gds-ref-color-red600: #bb000c;\n  --gds-ref-color-red700: #9f000a;\n  --gds-ref-color-red800: #9e2120;\n  --gds-ref-color-purple100: #ad91dc;\n  --gds-ref-color-purple200: #7e52cc;\n  --gds-ref-color-purple300: #673ab6;\n  --gds-ref-color-purple400: #4f2C99;\n  --gds-ref-color-purple500: #4a328f;\n  --gds-ref-color-purple600: #3f2587;\n  --gds-ref-color-yellow100: #ffe182;\n  --gds-ref-color-yellow200: #ffc500;\n  --gds-ref-color-yellow300: #ffb400;\n  --gds-ref-color-yellow400: #f8a000;\n  --gds-ref-color-yellow500: #f0be47;\n  --gds-ref-color-yellow600: #ebab39;\n  --gds-ref-color-blue-5: #001127;\n  --gds-ref-color-blue-10: #001C39;\n  --gds-ref-color-blue-15: #00264B;\n  --gds-ref-color-blue-20: #00315D;\n  --gds-ref-color-blue-25: #003C70;\n  --gds-ref-color-blue-30: #004883;\n  --gds-ref-color-blue-35: #005397;\n  --gds-ref-color-blue-40: #005FAC;\n  --gds-ref-color-blue-45: #006CC1;\n  --gds-ref-color-blue-50: #0078D7;\n  --gds-ref-color-blue-55: #0085EC;\n  --gds-ref-color-blue-60: #1992FF;\n  --gds-ref-color-blue-65: #4EA0FF;\n  --gds-ref-color-blue-70: #6FAEFF;\n  --gds-ref-color-blue-75: #8ABBFF;\n  --gds-ref-color-blue-80: #A4C9FF;\n  --gds-ref-color-blue-85: #BCD6FF;\n  --gds-ref-color-blue-90: #D4E3FF;\n  --gds-ref-color-blue-95: #EBF1FF;\n  --gds-ref-color-blue-98: #F8F9FF;\n  --gds-ref-color-green-5: #001505;\n  --gds-ref-color-green-10: #00210E;\n  --gds-ref-color-green-15: #002D10;\n  --gds-ref-color-green-20: #003916;\n  --gds-ref-color-green-25: #00461D;\n  --gds-ref-color-green-30: #005323;\n  --gds-ref-color-green-35: #00602A;\n  --gds-ref-color-green-40: #006D31;\n  --gds-ref-color-green-45: #007B38;\n  --gds-ref-color-green-50: #138942;\n  --gds-ref-color-green-55: #29964D;\n  --gds-ref-color-green-60: #39A459;\n  --gds-ref-color-green-65: #48B265;\n  --gds-ref-color-green-70: #57C071;\n  --gds-ref-color-green-75: #65CE7E;\n  --gds-ref-color-green-80: #73DC8A;\n  --gds-ref-color-green-85: #81EA97;\n  --gds-ref-color-green-90: #8FF9A4;\n  --gds-ref-color-green-95: #C5FFCA;\n  --gds-ref-color-green-98: #EAFFE8;\n  --gds-ref-color-black: #000000;\n  --gds-ref-color-white: #FFFFFF;\n  --gds-ref-color-grey-5: #0D0D0C;\n  --gds-ref-color-grey-10: #1B1B18;\n  --gds-ref-color-grey-15: #282825;\n  --gds-ref-color-grey-20: #353531;\n  --gds-ref-color-grey-25: #42423D;\n  --gds-ref-color-grey-30: #505049;\n  --gds-ref-color-grey-35: #5D5D56;\n  --gds-ref-color-grey-40: #6A6A62;\n  --gds-ref-color-grey-45: #77776E;\n  --gds-ref-color-grey-50: #85857A;\n  --gds-ref-color-grey-55: #919188;\n  --gds-ref-color-grey-60: #9D9D95;\n  --gds-ref-color-grey-65: #A9A9A2;\n  --gds-ref-color-grey-70: #B6B6AF;\n  --gds-ref-color-grey-75: #C2C2BD;\n  --gds-ref-color-grey-80: #CECECA;\n  --gds-ref-color-grey-85: #DADAD7;\n  --gds-ref-color-grey-90: #E7E7E4;\n  --gds-ref-color-grey-95: #F3F3F2;\n  --gds-ref-color-grey-98: #F9F9F9;\n  --gds-ref-color-orange-5: #1A0F00;\n  --gds-ref-color-orange-10: #271900;\n  --gds-ref-color-orange-15: #352200;\n  --gds-ref-color-orange-20: #422C00;\n  --gds-ref-color-orange-25: #503700;\n  --gds-ref-color-orange-30: #503700;\n  --gds-ref-color-orange-35: #6E4C00;\n  --gds-ref-color-orange-40: #7D5700;\n  --gds-ref-color-orange-45: #8D6300;\n  --gds-ref-color-orange-50: #9D6E00;\n  --gds-ref-color-orange-55: #AE7A00;\n  --gds-ref-color-orange-60: #BE8600;\n  --gds-ref-color-orange-65: #CF9300;\n  --gds-ref-color-orange-70: #E19F00;\n  --gds-ref-color-orange-75: #F2AC00;\n  --gds-ref-color-orange-80: #FFBA30;\n  --gds-ref-color-orange-85: #FFCC77;\n  --gds-ref-color-orange-90: #FFDEAB;\n  --gds-ref-color-orange-95: #FFEED9;\n  --gds-ref-color-orange-98: #FFF8F3;\n  --gds-ref-color-red-5: #2B0200;\n  --gds-ref-color-red-10: #3E0400;\n  --gds-ref-color-red-15: #510700;\n  --gds-ref-color-red-20: #650B00;\n  --gds-ref-color-red-25: #790F00;\n  --gds-ref-color-red-30: #8E1400;\n  --gds-ref-color-red-35: #A31800;\n  --gds-ref-color-red-40: #BA1D00;\n  --gds-ref-color-red-45: #D02200;\n  --gds-ref-color-red-50: #E23010;\n  --gds-ref-color-red-55: #F53E1D;\n  --gds-ref-color-red-60: #FF5636;\n  --gds-ref-color-red-65: #FF7257;\n  --gds-ref-color-red-70: #FF8A73;\n  --gds-ref-color-red-75: #FFA08D;\n  --gds-ref-color-red-80: #FFB4A5;\n  --gds-ref-color-red-85: #FFC8BC;\n  --gds-ref-color-red-90: #FFDAD3;\n  --gds-ref-color-red-95: #FFEDE9;\n  --gds-ref-color-red-98: #FFF8F6;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Thu, 04 Jul 2024 12:05:23 GMT\n */\n\n:host {\n  color-scheme: light;\n  --gds-sys-color-blue: #41b0ee;\n  --gds-sys-color-dark-blue-1: #41b0ee;\n  --gds-sys-color-dark-blue-2: #007ac7;\n  --gds-sys-color-green: #60cd18;\n  --gds-sys-color-dark-green-1: #45b400;\n  --gds-sys-color-dark-green-2: #308800;\n  --gds-sys-color-yellow: #ffc500;\n  --gds-sys-color-dark-yellow-1: #ffb400;\n  --gds-sys-color-dark-yellow-2: #f8a000;\n  --gds-sys-color-primary-text: #333333;\n  --gds-sys-color-secondary-text: #ababab;\n  --gds-sys-color-white-text: #ffffff;\n  --gds-sys-color-link-text: #0062bc;\n  --gds-sys-color-error-text: #9f000a;\n  --gds-sys-color-disabled-text: #adadad;\n  --gds-sys-color-red: #f03529;\n  --gds-sys-color-dark-red-1: #d81a1a;\n  --gds-sys-color-dark-red-2: #bb000c;\n  --gds-sys-color-purple: #673ab6;\n  --gds-sys-color-dark-purple-1: #4f2C99;\n  --gds-sys-color-dark-purple-2: #3f2587;\n  --gds-sys-color-base-white: #ffffff;\n  --gds-sys-color-base100: #f8f8f8;\n  --gds-sys-color-base200: #e9e9e9;\n  --gds-sys-color-base300: #dedede;\n  --gds-sys-color-base400: #cecece;\n  --gds-sys-color-base500: #adadad;\n  --gds-sys-color-base600: #868686;\n  --gds-sys-color-base700: #494949;\n  --gds-sys-color-base800: #333333;\n  --gds-sys-color-base900: #1a1a1a;\n  --gds-sys-color-accent-accent-green: #006D31;\n  --gds-sys-color-accent-on-accent-green: #FFFFFF;\n  --gds-sys-color-accent-accent-orange: #FFBA30;\n  --gds-sys-color-accent-on-accent-orange: #353531;\n  --gds-sys-color-background-background: #FFFFFF;\n  --gds-sys-color-background-background-dim: #F3F3F2;\n  --gds-sys-color-container-container: #F3F3F2;\n  --gds-sys-color-container-container-dim1: #E7E7E4;\n  --gds-sys-color-container-container-dim2: #DADAD7;\n  --gds-sys-color-container-container-bright: #FFFFFF;\n  --gds-sys-color-container-container-shade1: #353531;\n  --gds-sys-color-container-container-shade2: #1B1B18;\n  --gds-sys-color-container-container-shade3: #353531;\n  --gds-sys-color-container-container-disabled: #F9F9F9;\n  --gds-sys-color-container-container-positive: #006D31;\n  --gds-sys-color-container-container-negative: #BA1D00;\n  --gds-sys-color-container-container-negative-bright: #FFEDE9;\n  --gds-sys-color-content-content: #353531;\n  --gds-sys-color-content-content-inverse: #FFFFFF;\n  --gds-sys-color-content-content-secondary: #6A6A62;\n  --gds-sys-color-content-content-positive: #006D31;\n  --gds-sys-color-content-content-positive-bright: #EAFFE8;\n  --gds-sys-color-content-content-negative: #BA1D00;\n  --gds-sys-color-content-content-negative-bright: #FFF8F6;\n  --gds-sys-color-content-content-custom-blue-bright: #F8F9FF;\n  --gds-sys-color-content-content-disabled: #9D9D95;\n  --gds-sys-color-custom-custom-blue: #005FAC;\n  --gds-sys-color-custom-on-custom-blue: #D4E3FF;\n  --gds-sys-color-custom-custom-blue-bright: #D4E3FF;\n  --gds-sys-color-custom-on-custom-blue-bright: #00315D;\n  --gds-sys-color-custom-custom-green: #003916;\n  --gds-sys-color-custom-on-custom-green: #EAFFE8;\n  --gds-sys-color-custom-custom-green-bright: #EAFFE8;\n  --gds-sys-color-custom-on-custom-green-bright: #003916;\n  --gds-sys-color-custom-custom-grey: #353531;\n  --gds-sys-color-custom-on-custom-grey: #E7E7E4;\n  --gds-sys-color-custom-custom-grey-bright: #E7E7E4;\n  --gds-sys-color-custom-on-custom-grey-bright: #353531;\n  --gds-sys-color-primary-primary: #353531;\n  --gds-sys-color-state-layers-state-black: #000000 10%;\n  --gds-sys-color-state-layers-state-black-dim1: #000000 20%;\n  --gds-sys-color-state-layers-state-black-dim2: #000000 40%;\n  --gds-sys-color-state-layers-state-black-shade: #000000 60%;\n  --gds-sys-color-state-layers-state-positive: #006d31 10%;\n  --gds-sys-color-state-layers-state-positive-dim: #006d31 20%;\n  --gds-sys-color-state-layers-state-negative: #ba1d00 10%;\n  --gds-sys-color-state-layers-state-negative-dim: #ba1d00 20%;\n  --gds-sys-color-state-layers-state-custom-blue: #005fac 20%;\n  --gds-sys-color-status-information-information: #353531;\n  --gds-sys-color-status-information-on-information: #FFFFFF;\n  --gds-sys-color-status-information-information-bright: #F3F3F2;\n  --gds-sys-color-status-information-on-information-bright: #353531;\n  --gds-sys-color-status-negative-negative: #BA1D00;\n  --gds-sys-color-status-negative-on-negative: #FFFFFF;\n  --gds-sys-color-status-negative-negative-bright: #FFEDE9;\n  --gds-sys-color-status-negative-on-negative-bright: #BA1D00;\n  --gds-sys-color-status-warning-warning: #9D6E00;\n  --gds-sys-color-status-warning-on-warning: #FFFFFF;\n  --gds-sys-color-status-warning-warning-bright: #FFEED9;\n  --gds-sys-color-status-warning-on-warning-bright: #7D5700;\n  --gds-sys-color-status-positive-positive: #006D31;\n  --gds-sys-color-status-positive-on-positive: #FFFFFF;\n  --gds-sys-color-status-positive-positive-bright: #EAFFE8;\n  --gds-sys-color-status-positive-on-positive-bright: #006D31;\n  --gds-sys-color-status-notice-notice: #005FAC;\n  --gds-sys-color-status-notice-on-notice: #FFFFFF;\n  --gds-sys-color-status-notice-notice-bright: #EBF1FF;\n  --gds-sys-color-status-notice-on-notice-bright: #005FAC;\n  --gds-sys-color-stroke-stroke: #353531;\n  --gds-sys-color-stroke-stroke-variant1: #85857A;\n  --gds-sys-color-stroke-stroke-variant2: #CECECA;\n  --gds-sys-color-stroke-stroke-disabled: #9D9D95;\n  --gds-sys-color-stroke-stroke-notice: #005FAC;\n  --gds-sys-color-stroke-stroke-positive: #006D31;\n  --gds-sys-color-stroke-stroke-warning: #7D5700;\n  --gds-sys-color-stroke-stroke-negative: #BA1D00;\n  --gds-sys-color-stroke-stroke-custom-blue: #005FAC;\n  --gds-sys-color-stroke-stroke-custom-blue-bright: #6FAEFF;\n  --gds-sys-color-stroke-stroke-inversed: #FFFFFF;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Thu, 04 Jul 2024 12:05:23 GMT\n */\n\n:host {\n  --gds-space-max: 999px;\n  --gds-space-8xl: 120px;\n  --gds-space-7xl: 112px;\n  --gds-space-6xl: 96px;\n  --gds-space-5xl: 80px;\n  --gds-space-4xl: 64px;\n  --gds-space-3xl: 48px;\n  --gds-space-2xl: 40px;\n  --gds-space-xl: 32px;\n  --gds-space-l: 24px;\n  --gds-space-m: 16px;\n  --gds-space-s: 12px;\n  --gds-space-xs: 8px;\n  --gds-space-2xs: 4px;\n  --gds-space-3xs: 2px;\n  --gds-space-4xs: 1px;\n  --gds-space-0: 0px;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Thu, 04 Jul 2024 12:05:23 GMT\n */\n\n:host {\n  --gds-text-weight-bold: 700;\n  --gds-text-weight-medium: 500;\n  --gds-text-weight-book: 450;\n  --gds-text-weight-regular: 400;\n  --gds-text-weight-light: 300;\n  --gds-text-size-label-overline: 14px;\n  --gds-text-size-label-input-medium: 14px;\n  --gds-text-size-label-input-large: 16px;\n  --gds-text-size-label-information-medium: 14px;\n  --gds-text-size-label-information-large: 16px;\n  --gds-text-size-label-small: 12px;\n  --gds-text-size-label-medium: 14px;\n  --gds-text-size-label-large: 16px;\n  --gds-text-size-body-small: 12px;\n  --gds-text-size-body-medium: 14px;\n  --gds-text-size-body-large: 16px;\n  --gds-text-size-title-small: 14px;\n  --gds-text-size-title-medium: 16px;\n  --gds-text-size-title-large: 22px;\n  --gds-text-size-headline-small: 24px;\n  --gds-text-size-headline-medium: 28px;\n  --gds-text-size-headline-large: 32px;\n  --gds-text-size-display-small: 40px;\n  --gds-text-size-display-medium: 64px;\n  --gds-text-size-display-large: 82px;\n  --gds-text-line-height-label-overline: 18px;\n  --gds-text-line-height-label-input-medium: 20px;\n  --gds-text-line-height-label-input-large: 20px;\n  --gds-text-line-height-label-information-medium: 20px;\n  --gds-text-line-height-label-information-large: 20px;\n  --gds-text-line-height-label-small: 16px;\n  --gds-text-line-height-label-medium: 20px;\n  --gds-text-line-height-label-large: 20px;\n  --gds-text-line-height-body-small: 16px;\n  --gds-text-line-height-body-medium: 20px;\n  --gds-text-line-height-body-large: 20px;\n  --gds-text-line-height-title-small: 20px;\n  --gds-text-line-height-title-medium: 24px;\n  --gds-text-line-height-title-large: 28px;\n  --gds-text-line-height-headline-small: 30px;\n  --gds-text-line-height-headline-medium: 36px;\n  --gds-text-line-height-headline-large: 40px;\n  --gds-text-line-height-display-small: 52px;\n  --gds-text-line-height-display-medium: 80px;\n  --gds-text-line-height-display-large: 98px;\n}\n"),(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)("/**\n * Do not edit directly\n * Generated on Thu, 04 Jul 2024 12:05:23 GMT\n */\n\n:host {\n  --gds-sys-motion-play-state: running;\n  --gds-sys-motion-fill-mode: none;\n  --gds-sys-motion-direction: normal;\n  --gds-sys-motion-iteration-count: 1;\n  --gds-sys-motion-delay: 0s;\n  --gds-sys-motion-timing-function: ease;\n  --gds-sys-motion-duration: 1.2s;\n  --gds-sys-motion-easing: cubic-bezier(0.46, 0.03, 0.52, 0.96);\n}\n")]}}]);
//# sourceMappingURL=2717.a91f1d58.iframe.bundle.js.map