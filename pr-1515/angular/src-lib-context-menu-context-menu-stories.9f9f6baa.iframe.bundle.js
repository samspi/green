"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2565],{"./libs/angular/src/lib/context-menu/context-menu.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>NggContextMenuComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _handleItemClick,handleItemClick_fn,core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chunk_KBYQYDL3=__webpack_require__("./dist/libs/core/src/chunks/chunk.KBYQYDL3.js"),chunk_UZLOEUQK=__webpack_require__("./dist/libs/core/src/chunks/chunk.UZLOEUQK.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit=__webpack_require__("./node_modules/lit/index.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),context_menu_styles_default=lit.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`,GdsContextMenu=class extends chunk_ZQ4D5K7J.j{constructor(){super(),(0,chunk_5VURDMKE.VK)(this,_handleItemClick),this.open=!1,this.buttonLabel=(0,lit_localize.ab)("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",(0,chunk_KBYQYDL3.t)(this)}connectedCallback(){super.connectedCallback(),chunk_UZLOEUQK.nD.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(e=>{this.open&&"Tab"==e.key&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then((el=>el.focus())))}))}render(){var _a,_b,_c;return chunk_VOYMQ322.qy`<button
        id="trigger"
        class="icon border-0 small ${(0,class_map.H)({highlighted:this.open})}"
        aria-label=${null!=(_a=this.buttonLabel)?_a:this.label}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
      >
        <slot name="trigger">
          ${this.showLabel?null!=(_b=this.buttonLabel)?_b:this.label:lit.s6}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${this.open}
        .triggerRef=${this.elTriggerBtn}
        .anchorRef=${this.elTriggerBtn}
        .label=${this.label}
        .placement=${this.placement}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-menu
          aria-label=${null!=(_c=this.label)?_c:this.buttonLabel}
          @gds-menu-item-click=${(0,chunk_5VURDMKE.jq)(this,_handleItemClick,handleItemClick_fn)}
        >
          <slot allow="gds-menu-item gds-menu-heading"></slot>
        </gds-menu>
      </gds-popover>`}};_handleItemClick=new WeakSet,handleItemClick_fn=function(){this.open=!1},GdsContextMenu.styles=[context_menu_styles_default],GdsContextMenu.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsContextMenu.prototype,"open",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:"button-label"})],GdsContextMenu.prototype,"buttonLabel",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({attribute:"show-label",type:Boolean})],GdsContextMenu.prototype,"showLabel",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"placement",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)("#trigger")],GdsContextMenu.prototype,"elTriggerBtn",2),GdsContextMenu=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-context-menu")],GdsContextMenu);var _slotRef,chunk_2X23R32H=__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),GdsMenu=class extends chunk_ZQ4D5K7J.j{constructor(){super(),(0,chunk_5VURDMKE.VK)(this,_slotRef,(0,ref._)()),new chunk_2X23R32H.y(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),chunk_UZLOEUQK.nD.instance.apply(this,"gds-listbox")}get navigableItems(){return(0,chunk_5VURDMKE.S7)(this,_slotRef).value&&(0,chunk_2X23R32H.o)((0,chunk_5VURDMKE.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-menu-item"===o.gdsElementName))||[]}focus(){var _a;null==(_a=this.navigableItems[0])||_a.focus()}render(){return chunk_VOYMQ322.qy`<slot ${(0,ref.K)((0,chunk_5VURDMKE.S7)(this,_slotRef))}></slot>`}};_slotRef=new WeakMap,GdsMenu=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-menu")],GdsMenu);var _handleOnClick,chunk_2ND5EWHE=__webpack_require__("./dist/libs/core/src/chunks/chunk.2ND5EWHE.js"),GdsMenuItem=class extends((0,chunk_2ND5EWHE.z)(chunk_ZQ4D5K7J.j)){constructor(){super(...arguments),(0,chunk_5VURDMKE.VK)(this,_handleOnClick,(()=>{this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())})),this.addEventListener("click",(0,chunk_5VURDMKE.S7)(this,_handleOnClick)),chunk_UZLOEUQK.nD.instance.apply(this,"gds-option")}render(){return chunk_VOYMQ322.qy`<div><slot></slot></div>`}};_handleOnClick=new WeakMap,GdsMenuItem.styles=[chunk_2ND5EWHE.l],GdsMenuItem=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-menu-item")],GdsMenuItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.LRCIIA5E.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IZ4S7TBG.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RJLDOSCI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.66SPUJDA.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TPR3GICT.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");let NggContextMenuComponent=class NggContextMenuComponent{constructor(elementRef){this.elementRef=elementRef,this.direction="ltr",this.menuItems=[],this.menuItemTemplate=null,this.menuAnchorTemplate=null,this.closeOnScroll=!1,this.contextMenuItemClicked=new core.EventEmitter,this.isActive=!1,chunk_UZLOEUQK.ag()}get placement(){return"ltr"===this.direction?"bottom-start":"bottom-end"}open(){this.isActive?this.close():this.isActive=!0}close(){this.isActive=!1}onItemClick(item){this.contextMenuItemClicked.emit(item),this.close()}static#_=this.ctorParameters=()=>[{type:core.ElementRef}];static#_2=this.propDecorators={direction:[{type:core.Input}],menuItems:[{type:core.Input}],menuItemTemplate:[{type:core.Input}],menuAnchorTemplate:[{type:core.Input}],closeOnScroll:[{type:core.Input}],contextMenuItemClicked:[{type:core.Output}],popover:[{type:core.ViewChild,args:["contextMenuPopover"]}],anchor:[{type:core.ViewChild,args:["contextMenuAnchor"]}]}};NggContextMenuComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-context-menu",template:'<gds-context-menu\n  *nggCoreElement\n  data-testid="context-menu"\n  [placement]="placement"\n  [open]="isActive"\n>\n  <div style="display: contents" slot="trigger">\n    <ng-container\n      [ngTemplateOutlet]="menuAnchorTemplate ?? defaultButtonTemplate"\n    >\n    </ng-container>\n  </div>\n  <ng-container *ngFor="let menuItem of menuItems">\n    <gds-menu-item *nggCoreElement (click)="onItemClick(menuItem)">\n      <ng-container\n        [ngTemplateOutlet]="menuItemTemplate ?? defaultMenuItemTemplate"\n        [ngTemplateOutletContext]="{ $implicit: menuItem }"\n      >\n      </ng-container>\n    </gds-menu-item>\n  </ng-container>\n</gds-context-menu>\n\n<ng-template #defaultMenuItemTemplate let-menuItem>\n  <span>{{ menuItem.label }}</span>\n</ng-template>\n\n<ng-template #defaultButtonTemplate>\n  <i class="sg-icon sg-icon-ellipsis">Open context menu</i>\n</ng-template>\n'}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],NggContextMenuComponent)},"./libs/angular/src/lib/context-menu/context-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomTemplateDefault:()=>CustomTemplateDefault,Default:()=>Default,PositionRelative:()=>PositionRelative,RightToLeft:()=>RightToLeft,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>context_menu_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),context_menu_component=__webpack_require__("./libs/angular/src/lib/context-menu/context-menu.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),shared=__webpack_require__("./libs/angular/src/lib/shared/index.ts");let NggContextMenuModule=class NggContextMenuModule{};NggContextMenuModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[context_menu_component.s],imports:[common.CommonModule,shared.$M],exports:[context_menu_component.s],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],NggContextMenuModule);const context_menu_stories={title:"Components/Context Menu",component:context_menu_component.s,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,platform_browser.BrowserModule,animations.BrowserAnimationsModule,NggContextMenuModule]})],parameters:{componentIds:["component-context-menu"]}},Template=args=>({component:context_menu_component.s,props:args,template:'\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  '}),Default=Template.bind({});Default.args={direction:"ltr",menuItems:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]};const WithLabel=(args=>({component:context_menu_component.s,props:args,template:'\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n        Menu\n        <i class="sg-icon sg-icon-ellipsis"></i>\n    </ng-template>\n    '})).bind({});WithLabel.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Key 3",value:"option3"}]};const RightToLeft=Template.bind({});RightToLeft.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Key 3",value:"option3"}]};const CustomTemplateDefault=(args=>({component:context_menu_component.s,props:args,template:'\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n      <div>\n        <span>Click me!</span>\n      </div>\n    </ng-template>\n\n    <ng-template #menuItemTemplate let-menuItem>\n      <div\n        style="display: flex; justify-content: space-between; align-items: center; min-width: 7rem;"\n        [style.color]="(menuItem.value === \'delete\') ? \'#9F000A\' : \'inherit\'"\n      >\n        {{ menuItem.label }}\n        <svg *ngIf="menuItem.value === \'delete\'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z" fill="#9F000A"/>\n        </svg>\n      </div>\n    </ng-template>\n    '})).bind({});CustomTemplateDefault.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Delete",value:"delete"}]};const PositionRelative=(args=>({component:context_menu_component.s,props:args,template:'\n  <div style="position: relative; width: 50%; margin: 20px auto;">\n    <div style="display:flex;justify-content:space-between;">\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    </div>\n  </div>\n  '})).bind({});PositionRelative.args={direction:"ltr",menuItems:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  `\n})',...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n        Menu\n        <i class="sg-icon sg-icon-ellipsis"></i>\n    </ng-template>\n    `\n})',...WithLabel.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  `\n})',...RightToLeft.parameters?.docs?.source}}},CustomTemplateDefault.parameters={...CustomTemplateDefault.parameters,docs:{...CustomTemplateDefault.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n      <div>\n        <span>Click me!</span>\n      </div>\n    </ng-template>\n\n    <ng-template #menuItemTemplate let-menuItem>\n      <div\n        style="display: flex; justify-content: space-between; align-items: center; min-width: 7rem;"\n        [style.color]="(menuItem.value === \'delete\') ? \'#9F000A\' : \'inherit\'"\n      >\n        {{ menuItem.label }}\n        <svg *ngIf="menuItem.value === \'delete\'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z" fill="#9F000A"/>\n        </svg>\n      </div>\n    </ng-template>\n    `\n})',...CustomTemplateDefault.parameters?.docs?.source}}},PositionRelative.parameters={...PositionRelative.parameters,docs:{...PositionRelative.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="position: relative; width: 50%; margin: 20px auto;">\n    <div style="display:flex;justify-content:space-between;">\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    </div>\n  </div>\n  `\n})',...PositionRelative.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","RightToLeft","CustomTemplateDefault","PositionRelative"]}}]);
//# sourceMappingURL=src-lib-context-menu-context-menu-stories.9f9f6baa.iframe.bundle.js.map