import{b as T,r as w,s as P,x as W,T as O}from"./lit-element-71e04f06.js";import{s as f,n as A}from"./static-c6782857.js";import{g as x,n as d,h as L}from"./gds-element-54cd6e2a.js";import{a as $}from"./query-b9d3c2af.js";import{n as D}from"./when-cf7256a5.js";import{o as g}from"./if-defined-e4b5fcf9.js";import{e as M}from"./class-map-4ef1884f.js";import{c as R}from"./constrain-slots-08d8606c.js";import{e as B,i as G,t as N}from"./directive-12249aa5.js";import{T as F}from"./transitional-styles-c1ac9719.js";import{t as z}from"./tokens.style-880811e7.js";import{G as q}from"./form-control-5f945716.js";class U extends G{constructor(t){if(super(t),t.type!==N.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return T}update(t,[r]){var c;const o=t.element,s=(c=t.options)==null?void 0:c.host;Array.from(s.attributes).forEach(l=>{r(l)&&o.setAttribute(l.name.replace("gds-",""),l.value)})}}const j=B(U),X=`:host{--gds-ripple-motion-name: ripple;--gds-ripple-motion: var(--gds-ripple-motion-name) var(--gds-sys-motion-duration) var(--gds-sys-motion-timing-function) var(--gds-sys-motion-delay) var(--gds-sys-motion-iteration-count) var(--gds-sys-motion-direction) var(--gds-sys-motion-fill-mode) var(--gds-sys-motion-play-state);border-radius:var(--gds-space-max);contain:strict;display:flex;height:100%;top:0;right:0;bottom:0;left:0;overflow:hidden;position:absolute;width:100%}div{background-color:currentColor;border-radius:var(--gds-space-max);display:flex;height:20px;left:var(--gds-ripple-left, 50%);margin-left:-10px;margin-top:-10px;opacity:0;pointer-events:none;position:absolute;top:var(--gds-ripple-top, 50%);width:20px;will-change:transform}div.gds-ripple-effect{animation:var(--gds-ripple-motion)}@keyframes ripple{0%{opacity:.5;transform:scale(0)}to{opacity:0;transform:scale(calc(3 * var(--mt-ripple-spread, 4)))}}@media (prefers-reduced-motion: reduce){:host{--gds-ripple-motion-name: none !important}}
`;var Y=Object.defineProperty,H=Object.getOwnPropertyDescriptor,C=(e,t,r,o)=>{for(var s=o>1?void 0:o?H(t,r):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(s=(o?l(t,r,s):l(s))||s);return o&&s&&Y(t,r,s),s};let b=class extends P{constructor(){super(...arguments),this.onmousedown=e=>{const r=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-r.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-r.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return W`<div></div>`}};b.styles=[z,w(X)];C([$("div")],b.prototype,"_rippleEl",2);b=C([x("gds-ripple")],b);const I=`@layer tokens,a11y,core,ranks,sizes,variants,disabled;@layer tokens{:host{--_gap: var(--gds-space-m);--_transition: var(--gds-sys-transition);--_padding-inline: var(--gds-space-l);--_padding-block: var(--gds-space-m);--_border-radius: var(--gds-space-max);--_border-width: 1px;--_border-style: solid;--_color-bg: var(--gds-sys-color-content-content);--_color-text: var(--gds-sys-color-content-content-inverse);--_color-border: var(--gds-sys-color-stroke-stroke);--_color-outline-alpha: 60%;--_color-outline: var(--_color-border);--_state-layer-hover: var(--gds-sys-color-state-layers-state-black);--_state-layer-active: var(--gds-sys-color-state-layers-state-black-shade);--gds-sys-transition-properties: color;contain:layout;display:inline-block;isolation:isolate;max-width:100%}}@layer a11y{@media (prefers-reduced-motion: reduce){:host{--_transition: none}}}@layer core{.button{--gds-sys-transition-properties: color !important;align-items:center;background-color:var(--_color-bg);block-size:100%;border-color:var(--_color-border);border-radius:var(--_border-radius);border-style:var(--_border-style);border-width:var(--_border-width);box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;font-family:inherit;font-size:1rem;font-weight:400;gap:var(--_gap);height:var(--_size);inline-size:100%;justify-content:space-between;justify-items:center;line-height:1.25;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;text-decoration:none;transition:var(--_transition);transition-property:color,border-color}.button:focus{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha))}.button:focus:not(:focus-visible){outline-color:transparent}.button:hover{background-color:color-mix(in srgb,var(--_color-bg),var(--_state-layer-hover));border-color:color-mix(in srgb,var(--_color-border),var(--_state-layer-hover))}.button:active{background-color:color-mix(in srgb,var(--_color-bg),var(--_state-layer-active));border-color:color-mix(in srgb,var(--_color-border),var(--_state-layer-active))}.button slot:not([name]){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.button.icon slot{display:contents}}@layer ranks{:host([rank*="secondary"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content);--_color-border: var(--gds-sys-color-stroke-stroke)}:host([rank*="secondary"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank*="tertiary"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content);--_color-border: transparent}:host([rank*="tertiary"]) .button:hover{--_color-border: var(--gds-sys-color-stroke-stroke)}:host([rank*="tertiary"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim1);--_color-border: var(--gds-sys-color-stroke-stroke)}.button.circle{display:flex;height:var(--_size);width:var(--_size);aspect-ratio:1/1;justify-content:center;align-items:center;padding:0}}@layer sizes{:host([size="small"]) .button{--_padding-inline: var(--gds-space-l);--_padding-block: var(--gds-space-s);--_size: 2rem;font-size:.875rem}:host([size="medium"]) .button{--_padding-inline: var(--gds-space-l);--_padding-block: var(--gds-space-m);--_size: 2.5rem}:host([size="large"]) .button{--_padding-inline: var(--gds-space-xl);--_padding-block: var(--gds-space-m);--_size: 3rem}}@layer variants{:host([rank="primary"][variant="positive"]) .button{--_bg: var(--gds-sys-color-container-container-positive);--_color-bg: var(--_bg);--_color-border: var(--_bg)}:host([rank="primary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank="primary"][variant="positive"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2)}:host([rank="primary"][variant="positive"]) .button:focus{--_color-outline: var(--_bg)}:host([rank="secondary"][variant="positive"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content-positive);--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="secondary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-positive)}:host([rank="secondary"][variant="positive"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-positive-dim )}:host([rank="tertiary"][variant="positive"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content-positive);--_color-border: transparent}:host([rank="tertiary"][variant="positive"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-positive);--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="tertiary"][variant="positive"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-positive-dim );--_color-border: var(--gds-sys-color-stroke-stroke-positive)}:host([rank="primary"][variant="negative"]) .button{--_bg: var(--gds-sys-color-container-container-negative);--_color-bg: var(--_bg);--_color-text: var(--gds-sys-color-status-negative-on-negative);--_color-border: var(--_bg)}:host([rank="primary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-black-dim1)}:host([rank="primary"][variant="negative"]) .button:active{--_state-layer-active: var(--gds-sys-color-state-layers-state-black-dim2)}:host([rank="primary"][variant="negative"]) .button:focus{--_color-outline: var(--_bg)}:host([rank="secondary"][variant="negative"]) .button{--_color-bg: var(--gds-sys-color-content-content-inverse);--_color-text: var(--gds-sys-color-content-content-negative);--_color-border: var(--gds-sys-color-stroke-stroke-negative)}:host([rank="secondary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-negative)}:host([rank="secondary"][variant="negative"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-negative-dim )}:host([rank="tertiary"][variant="negative"]) .button{--_color-bg: transparent;--_color-text: var(--gds-sys-color-content-content-negative);--_color-border: transparent}:host([rank="tertiary"][variant="negative"]) .button:hover{--_state-layer-hover: var(--gds-sys-color-state-layers-state-negative);--_color-border: var(--gds-sys-color-stroke-stroke-negative)}:host([rank="tertiary"][variant="negative"]) .button:active{--_state-layer-active: var( --gds-sys-color-state-layers-state-negative-dim );--_color-border: var(--gds-sys-color-stroke-stroke-negative)}}@layer disabled{.button:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`,k=new WeakMap;function J(e){return(t,...r)=>{let o=k.get(t);return o||(o=t.map(s=>s.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,k.set(t,o)),e(o,...r)}}var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,n=(e,t,r,o)=>{for(var s=o>1?void 0:o?Q(t,r):t,c=e.length-1,l;c>=0;c--)(l=e[c])&&(s=(o?l(t,r,s):l(s))||s);return o&&s&&K(t,r,s),s},E=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},i=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},V=(e,t,r,o)=>(E(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r),h,v,p,u,S,m,_;const Z=J(L);let a=class extends q{constructor(){super(),y(this,v),y(this,u),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",y(this,h,!1),y(this,m,()=>{var t;const e=((t=this._mainSlot)==null?void 0:t.assignedNodes())??[];V(this,h,e.length===1&&e.some(r=>r.nodeName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),y(this,_,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!i(this,v,p)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),R(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),F.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:i(this,h),icon:i(this,h),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=i(this,v,p)?f`a`:f`button`;return A`
      <${t}
        class=${M(e)}
        type="${g(i(this,v,p)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||O}
        href=${g(i(this,v,p)?this.href:void 0)}
        target=${g(i(this,v,p)?this.target:void 0)}
        rel=${g(i(this,v,p)?this.rel||i(this,u,S):void 0)}
        download=${g(i(this,v,p)?this.download:void 0)}
        part="_button"
        @click="${i(this,_)}"
        ${j(r=>r.name.startsWith("gds-aria")||r.name==="gds-role")}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${i(this,m)}></slot>
        <slot name="trail"></slot>
        ${D(!this._isUsingTransitionalStyles,()=>Z`<gds-ripple></gds-ripple>`)}
      </${t}>
    `}};h=new WeakMap;v=new WeakSet;p=function(){return this.href.length>0};u=new WeakSet;S=function(){return this.target==="_blank"?"noreferrer noopener":void 0};m=new WeakMap;_=new WeakMap;a.styles=[z,w(I)];a.shadowRootOptions={mode:"open",delegatesFocus:!0};n([d({type:Boolean,reflect:!0})],a.prototype,"disabled",2);n([d({reflect:!0})],a.prototype,"type",2);n([d({reflect:!0})],a.prototype,"rank",2);n([d({reflect:!0})],a.prototype,"variant",2);n([d({reflect:!0})],a.prototype,"size",2);n([d()],a.prototype,"label",2);n([d()],a.prototype,"href",2);n([d()],a.prototype,"target",2);n([d()],a.prototype,"rel",2);n([d()],a.prototype,"download",2);n([$("slot:not([name])")],a.prototype,"_mainSlot",2);a=n([x("gds-button")],a);
