"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2565],{"./libs/angular/src/lib/shared/core-element/core-element.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>NggCoreElementDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");let NggCoreElementDirective=class NggCoreElementDirective{constructor(){this.viewRef=null,this.document=(0,core.inject)(common.DOCUMENT),this.renderer=(0,core.inject)(core.Renderer2),this.vcr=(0,core.inject)(core.ViewContainerRef),this.cdr=(0,core.inject)(core.ChangeDetectorRef),this.template=(0,core.inject)(core.TemplateRef)}ngOnInit(){this.vcr.clear();const originalCreateElement=this.renderer.createElement;this.renderer.createElement=(name,_namespace)=>this.document.createElement((0,chunk_VOYMQ322.Eq)(name)),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=originalCreateElement,this.cdr.markForCheck()}};NggCoreElementDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggCoreElement]"})],NggCoreElementDirective)},"./libs/angular/src/lib/shared/core-element/core-element.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>NggCoreWrapperModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_core_element_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");let NggCoreWrapperModule=class NggCoreWrapperModule{};NggCoreWrapperModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L]})],NggCoreWrapperModule)},"./libs/angular/src/lib/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$M:()=>core_element_module.$});var NggOnScrollDirective_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/_esm5/internal/Subject.js"),fromEvent=__webpack_require__("./node_modules/rxjs/_esm5/internal/observable/fromEvent.js"),interval=__webpack_require__("./node_modules/rxjs/_esm5/internal/observable/interval.js"),takeUntil=__webpack_require__("./node_modules/rxjs/_esm5/internal/operators/takeUntil.js"),throttle=__webpack_require__("./node_modules/rxjs/_esm5/internal/operators/throttle.js");const ON_SCROLL_TOKEN=new core.InjectionToken("ON_SCROLL_TOKEN");let NggOnScrollDirective=class NggOnScrollDirective{static#_=NggOnScrollDirective_1=this;constructor(elementRef){this.elementRef=elementRef,this.onScroll$=new Subject.B7,this.destroy$=new Subject.B7}ngAfterViewInit(){this.elementRef&&(0,fromEvent.R)(this.elementRef?.nativeElement,"scroll").pipe((0,takeUntil.Q)(this.destroy$),(0,throttle.n)((()=>(0,interval.Y)(30)))).subscribe((()=>{this.onScroll$.next()}))}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}static#_2=this.ctorParameters=()=>[{type:core.ElementRef}]};NggOnScrollDirective=NggOnScrollDirective_1=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggOnScroll]",providers:[{provide:ON_SCROLL_TOKEN,useFactory:component=>component?.onScroll$,deps:[NggOnScrollDirective_1]}]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],NggOnScrollDirective);let NggSharedModule=class NggSharedModule{};NggSharedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NggOnScrollDirective],imports:[common.CommonModule],exports:[NggOnScrollDirective]})],NggSharedModule);__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts")},"./libs/angular/src/lib/context-menu/context-menu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomTemplateDefault:()=>CustomTemplateDefault,Default:()=>Default,PositionRelative:()=>PositionRelative,RightToLeft:()=>RightToLeft,WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>context_menu_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),platform_browser=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),context_menu_component=__webpack_require__("./libs/angular/src/lib/context-menu/context-menu.component.ts"),documentation=__webpack_require__("./libs/angular/src/lib/context-menu/documentation.mdx"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),shared=__webpack_require__("./libs/angular/src/lib/shared/index.ts");let NggContextMenuModule=class NggContextMenuModule{};NggContextMenuModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[context_menu_component.s],imports:[common.CommonModule,shared.$M],exports:[context_menu_component.s],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],NggContextMenuModule);const context_menu_stories={title:"Components/Context Menu",component:context_menu_component.s,decorators:[(0,dist.moduleMetadata)({imports:[common.CommonModule,platform_browser.BrowserModule,animations.BrowserAnimationsModule,NggContextMenuModule]})],parameters:{docs:{page:documentation.default},componentIds:["component-context-menu"]}},Template=args=>({component:context_menu_component.s,props:args,template:'\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  '}),Default=Template.bind({});Default.args={direction:"ltr",menuItems:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]};const WithLabel=(args=>({component:context_menu_component.s,props:args,template:'\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n        Menu\n        <i class="sg-icon sg-icon-ellipsis"></i>\n    </ng-template>\n    '})).bind({});WithLabel.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Key 3",value:"option3"}]};const RightToLeft=Template.bind({});RightToLeft.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Key 3",value:"option3"}]};const CustomTemplateDefault=(args=>({component:context_menu_component.s,props:args,template:'\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n      <div>\n        <span>Click me!</span>\n      </div>\n    </ng-template>\n\n    <ng-template #menuItemTemplate let-menuItem>\n      <div \n        style="display: flex; justify-content: space-between; align-items: center; min-width: 7rem;"\n        [style.color]="(menuItem.value === \'delete\') ? \'#9F000A\' : \'inherit\'"\n      >\n        {{ menuItem.label }}\n        <svg *ngIf="menuItem.value === \'delete\'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z" fill="#9F000A"/>\n        </svg>\n      </div>\n    </ng-template>\n    '})).bind({});CustomTemplateDefault.args={direction:"rtl",menuItems:[{label:"Key 1",value:"option1"},{label:"Key 2",value:"option2"},{label:"Delete",value:"delete"}]};const PositionRelative=(args=>({component:context_menu_component.s,props:args,template:'\n  <div style="position: relative; width: 50%; margin: 20px auto;">\n    <div style="display:flex;justify-content:space-between;">\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    </div>\n  </div>\n  '})).bind({});PositionRelative.args={direction:"ltr",menuItems:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"},{label:"Option 3",value:"option3"}]},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  `\n})',...Default.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n        Menu\n        <i class="sg-icon sg-icon-ellipsis"></i>\n    </ng-template>\n    `\n})',...WithLabel.parameters?.docs?.source}}},RightToLeft.parameters={...RightToLeft.parameters,docs:{...RightToLeft.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="display:flex;justify-content:space-between">\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n  </div>\n  `\n})',...RightToLeft.parameters?.docs?.source}}},CustomTemplateDefault.parameters={...CustomTemplateDefault.parameters,docs:{...CustomTemplateDefault.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n    <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems" [menuItemTemplate]="menuItemTemplate" [menuAnchorTemplate]="menuAnchorTemplate">\n    </ngg-context-menu>\n\n    <ng-template #menuAnchorTemplate>\n      <div>\n        <span>Click me!</span>\n      </div>\n    </ng-template>\n\n    <ng-template #menuItemTemplate let-menuItem>\n      <div \n        style="display: flex; justify-content: space-between; align-items: center; min-width: 7rem;"\n        [style.color]="(menuItem.value === \'delete\') ? \'#9F000A\' : \'inherit\'"\n      >\n        {{ menuItem.label }}\n        <svg *ngIf="menuItem.value === \'delete\'" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M13.375 17.5H14.125C14.2245 17.5 14.3198 17.4605 14.3902 17.3902C14.4605 17.3198 14.5 17.2245 14.5 17.125V10.375C14.5 10.2755 14.4605 10.1802 14.3902 10.1098C14.3198 10.0395 14.2245 10 14.125 10H13.375C13.2755 10 13.1802 10.0395 13.1098 10.1098C13.0395 10.1802 13 10.2755 13 10.375V17.125C13 17.2245 13.0395 17.3198 13.1098 17.3902C13.1802 17.4605 13.2755 17.5 13.375 17.5ZM18.5 7H15.9247L14.8622 5.22813C14.7288 5.00594 14.5402 4.82209 14.3147 4.69449C14.0892 4.56688 13.8344 4.49988 13.5753 4.5H10.4247C10.1657 4.49998 9.91106 4.56704 9.68566 4.69464C9.46025 4.82224 9.27172 5.00603 9.13844 5.22813L8.07531 7H5.5C5.36739 7 5.24021 7.05268 5.14645 7.14645C5.05268 7.24022 5 7.36739 5 7.5V8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H6V19C6 19.3978 6.15804 19.7794 6.43934 20.0607C6.72064 20.342 7.10218 20.5 7.5 20.5H16.5C16.8978 20.5 17.2794 20.342 17.5607 20.0607C17.842 19.7794 18 19.3978 18 19V8.5H18.5C18.6326 8.5 18.7598 8.44732 18.8536 8.35355C18.9473 8.25979 19 8.13261 19 8V7.5C19 7.36739 18.9473 7.24022 18.8536 7.14645C18.7598 7.05268 18.6326 7 18.5 7ZM10.37 6.09094C10.3867 6.06312 10.4104 6.04012 10.4386 6.02418C10.4669 6.00824 10.4988 5.99991 10.5312 6H13.4688C13.5011 5.99996 13.533 6.00832 13.5612 6.02426C13.5894 6.04019 13.613 6.06317 13.6297 6.09094L14.1753 7H9.82469L10.37 6.09094ZM16.5 19H7.5V8.5H16.5V19ZM9.875 17.5H10.625C10.7245 17.5 10.8198 17.4605 10.8902 17.3902C10.9605 17.3198 11 17.2245 11 17.125V10.375C11 10.2755 10.9605 10.1802 10.8902 10.1098C10.8198 10.0395 10.7245 10 10.625 10H9.875C9.77554 10 9.68016 10.0395 9.60984 10.1098C9.53951 10.1802 9.5 10.2755 9.5 10.375V17.125C9.5 17.2245 9.53951 17.3198 9.60984 17.3902C9.68016 17.4605 9.77554 17.5 9.875 17.5Z" fill="#9F000A"/>\n        </svg>\n      </div>\n    </ng-template>\n    `\n})',...CustomTemplateDefault.parameters?.docs?.source}}},PositionRelative.parameters={...PositionRelative.parameters,docs:{...PositionRelative.parameters?.docs,source:{originalSource:'(args: NggContextMenuComponent) => ({\n  component: NggContextMenuComponent,\n  props: args,\n  template: `\n  <div style="position: relative; width: 50%; margin: 20px auto;">\n    <div style="display:flex;justify-content:space-between;">\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n      <ngg-context-menu #ctx [direction]="direction" [menuItems]="menuItems"></ngg-context-menu>\n    </div>\n  </div>\n  `\n})',...PositionRelative.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithLabel","RightToLeft","CustomTemplateDefault","PositionRelative"]}}]);