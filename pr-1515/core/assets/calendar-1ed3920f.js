import{x as w,i as A}from"./lit-element-71e04f06.js";import{e as P}from"./class-map-4ef1884f.js";import{o as E}from"./if-defined-e4b5fcf9.js";import{n as W}from"./when-cf7256a5.js";import{n as v,g as j,G}from"./gds-element-54cd6e2a.js";import{a as z}from"./query-b9d3c2af.js";import{m as b}from"./lit-localize-87611c26.js";import{T as K}from"./transitional-styles-73ecf23d.js";import{w as U}from"./watch-c4961afe.js";function M(t){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(t)}function k(t){if(t===null||t===!0||t===!1)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function c(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function f(t){c(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||M(t)==="object"&&e==="[object Date]"?new Date(t.getTime()):typeof t=="number"||e==="[object Number]"?new Date(t):((typeof t=="string"||e==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(new Error().stack)),new Date(NaN))}function _(t,e){c(2,arguments);var a=f(t),r=k(e);return isNaN(r)?new Date(NaN):(r&&a.setDate(a.getDate()+r),a)}function R(t,e){c(2,arguments);var a=f(t),r=k(e);if(isNaN(r))return new Date(NaN);if(!r)return a;var o=a.getDate(),s=new Date(a.getTime());s.setMonth(a.getMonth()+r+1,0);var n=s.getDate();return o>=n?s:(a.setFullYear(s.getFullYear(),s.getMonth(),o),a)}var q={};function N(){return q}function $(t,e){var a,r,o,s,n,d,i,l;c(1,arguments);var p=N(),m=k((a=(r=(o=(s=e==null?void 0:e.weekStartsOn)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.weekStartsOn)!==null&&o!==void 0?o:p.weekStartsOn)!==null&&r!==void 0?r:(i=p.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.weekStartsOn)!==null&&a!==void 0?a:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=f(t),D=g.getDay(),y=(D<m?7:0)+D-m;return g.setDate(g.getDate()-y),g.setHours(0,0,0,0),g}function H(t){c(1,arguments);var e=f(t);return e.setHours(0,0,0,0),e}function V(t,e){c(2,arguments);var a=k(e),r=a*7;return _(t,r)}function O(t,e){c(2,arguments);var a=H(t),r=H(e);return a.getTime()===r.getTime()}function J(t){c(1,arguments);var e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(23,59,59,999),e}function Q(t,e){var a;c(1,arguments);var r=t||{},o=f(r.start),s=f(r.end),n=s.getTime();if(!(o.getTime()<=n))throw new RangeError("Invalid interval");var d=[],i=o;i.setHours(0,0,0,0);var l=Number((a=e==null?void 0:e.step)!==null&&a!==void 0?a:1);if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;i.getTime()<=n;)d.push(f(i)),i.setDate(i.getDate()+l),i.setHours(0,0,0,0);return d}function X(t,e){c(1,arguments);var a=t||{},r=f(a.start),o=f(a.end),s=o.getTime();if(!(r.getTime()<=s))throw new RangeError("Invalid interval");var n=$(r,e),d=$(o,e);n.setHours(15),d.setHours(15),s=d.getTime();for(var i=[],l=n;l.getTime()<=s;)l.setHours(0),i.push(f(l)),l=V(l,1),l.setHours(15);return i}function Z(t){c(1,arguments);var e=f(t);return e.setDate(1),e.setHours(0,0,0,0),e}function ee(t,e){var a,r,o,s,n,d,i,l;c(1,arguments);var p=f(t),m=p.getFullYear(),g=N(),D=k((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:g.firstWeekContainsDate)!==null&&r!==void 0?r:(i=g.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1);if(!(D>=1&&D<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setFullYear(m+1,0,D),y.setHours(0,0,0,0);var B=$(y,e),S=new Date(0);S.setFullYear(m,0,D),S.setHours(0,0,0,0);var L=$(S,e);return p.getTime()>=B.getTime()?m+1:p.getTime()>=L.getTime()?m:m-1}function te(t,e){var a,r,o,s,n,d,i,l;c(1,arguments);var p=N(),m=k((a=(r=(o=(s=e==null?void 0:e.firstWeekContainsDate)!==null&&s!==void 0?s:e==null||(n=e.locale)===null||n===void 0||(d=n.options)===null||d===void 0?void 0:d.firstWeekContainsDate)!==null&&o!==void 0?o:p.firstWeekContainsDate)!==null&&r!==void 0?r:(i=p.locale)===null||i===void 0||(l=i.options)===null||l===void 0?void 0:l.firstWeekContainsDate)!==null&&a!==void 0?a:1),g=ee(t,e),D=new Date(0);D.setFullYear(g,0,m),D.setHours(0,0,0,0);var y=$(D,e);return y}var ae=6048e5;function re(t,e){c(1,arguments);var a=f(t),r=$(a,e).getTime()-te(a,e).getTime();return Math.round(r/ae)+1}function se(t){c(1,arguments);var e=f(t),a=e.getMonth();return e.setFullYear(e.getFullYear(),a+1,0),e.setHours(0,0,0,0),e}function oe(t,e){c(2,arguments);var a=f(t),r=f(e);return a.getFullYear()===r.getFullYear()&&a.getMonth()===r.getMonth()}function ne(t,e){c(2,arguments);var a=k(e);return R(t,-a)}function ie(t,e){const a=Z(t),r=J(t),o=X({start:a,end:r},{weekStartsOn:1});return w`${e(o.map(s=>({days:Q({start:s,end:_(s,6)})})))}`}const le=A`
  @layer base, reset, transitional-styles;
  @layer base {
    td.disabled {
      color: #555;
      cursor: default;
    }
    td.today {
      background-color: #eee;
    }
  }
`;var ue=Object.defineProperty,de=Object.getOwnPropertyDescriptor,h=(t,e,a,r)=>{for(var o=r>1?void 0:r?de(e,a):e,s=t.length-1,n;s>=0;s--)(n=t[s])&&(o=(r?n(e,a,o):n(o))||o);return r&&o&&ue(e,a,o),o},fe=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},x=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},Y=(t,e,a)=>(fe(t,e,"access private method"),a),C,F,T,I;let u=class extends G{constructor(){super(...arguments),x(this,C),x(this,T),this.min=new Date(new Date().getFullYear()-10,0,1),this.max=new Date(new Date().getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=t=>t.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(t){const e=se(new Date(this.focusedYear,t,1)),a=new Date(this.focusedDate);a.setDate(Math.min(this.focusedDate.getDate(),e.getDate())),a.setMonth(t),a.setHours(12,0,0,0),this.focusedDate=a}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(t){this.focusedDate=new Date(this.focusedDate.setFullYear(t))}getDateCell(t){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector(`#dateCell-${t}`)}connectedCallback(){super.connectedCallback(),K.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",Y(this,T,I))}focus(){var t;super.focus(),(t=this._elFocusedCell)==null||t.focus()}render(){const t=new Date;return w`<table role="grid" aria-label="${E(this.label)}">
      ${W(!this.hideDayNames,()=>w`<thead role="rowgroup">
            <tr role="row">
              ${W(this.showWeekNumbers,()=>w`<th></th>`)}
              <th>${b("Mon")}</th>
              <th>${b("Tue")}</th>
              <th>${b("Wed")}</th>
              <th>${b("Thu")}</th>
              <th>${b("Fri")}</th>
              <th>${b("Sat")}</th>
              <th>${b("Sun")}</th>
            </tr>
          </thead>`)}
      <tbody role="rowgroup">
        ${ie(this.focusedDate,e=>w`
            ${e.map(a=>w`
                <tr role="row">
                  ${W(this.showWeekNumbers,()=>w`<td class="week-number" scope="row">
                        ${re(a.days[0])}
                      </td>`)}
                  ${a.days.map(r=>{const o=this.customizedDates&&this.customizedDates.find(p=>O(p.date,r)),s={color:"currentColor",disabled:!!(this.disabledDates&&this.disabledDates.some(p=>O(p,r))),...o},n=!oe(this.focusedDate,r)||r<this.min||r>this.max,d=r.getDay()===0||r.getDay()===6,i=s.disabled||n||this.disabledWeekends&&d;return this.hideExtraneousDays&&n?w`<td inert></td>`:w`
                          <td
                            role="${E(i?void 0:"gridcell")}"
                            class="${P({"custom-date":!!o,disabled:!!i,today:O(t,r)})}"
                            ?disabled=${i}
                            tabindex="${O(this.focusedDate,r)?0:-1}"
                            aria-selected="${this.value&&O(this.value,r)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(r)}"
                            @click=${()=>i?null:Y(this,C,F).call(this,r)}
                            id="dateCell-${r.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${s?s==null?void 0:s.color:""}"
                              >${r.getDate()}</span
                            >

                            ${W(s.indicator,()=>w`<span
                                  class="indicator-${s==null?void 0:s.indicator}"
                                  style="--_color: ${s==null?void 0:s.color}"
                                ></span>`)}
                          </td>
                        `})}
                </tr>
              `)}
          `)}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};C=new WeakSet;F=function(t){this.value=t,this.dispatchEvent(new CustomEvent("change",{detail:t,bubbles:!1,composed:!1}))};T=new WeakSet;I=function(t){var r;let e=!1,a=new Date(this.focusedDate);t.key==="ArrowLeft"?(a=_(this.focusedDate,-1),e=!0):t.key==="ArrowRight"?(a=_(this.focusedDate,1),e=!0):t.key==="ArrowUp"?(a=_(this.focusedDate,-7),e=!0):t.key==="ArrowDown"?(a=_(this.focusedDate,7),e=!0):t.key==="Enter"||t.key===" "?((r=this._elFocusedCell)!=null&&r.hasAttribute("disabled")||Y(this,C,F).call(this,this.focusedDate),e=!0):t.key==="Home"?(a=new Date(this.focusedYear,this.focusedMonth,1),e=!0):t.key==="End"?(a=new Date(this.focusedYear,this.focusedMonth+1,0),e=!0):t.key==="PageUp"?(a=ne(this.focusedDate,1),e=!0):t.key==="PageDown"&&(a=R(this.focusedDate,1),e=!0),a.getFullYear()>=this.min.getFullYear()&&a.getFullYear()<=this.max.getFullYear()&&this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:a,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=a),e&&(t.preventDefault(),t.stopPropagation(),this.updateComplete.then(()=>{var o;(o=this._elFocusedCell)==null||o.focus()}))};u.styles=[le];u.shadowRootOptions={mode:"open",delegatesFocus:!0};h([v()],u.prototype,"value",2);h([v({type:Date})],u.prototype,"min",2);h([v({type:Date})],u.prototype,"max",2);h([v()],u.prototype,"focusedDate",2);h([v({type:Boolean,attribute:"disabled-weekends"})],u.prototype,"disabledWeekends",2);h([v({type:Array,attribute:"disabled-dates"})],u.prototype,"disabledDates",2);h([v({type:Number})],u.prototype,"focusedMonth",1);h([v({type:Number})],u.prototype,"focusedYear",1);h([v({type:Boolean})],u.prototype,"showWeekNumbers",2);h([v({type:Boolean})],u.prototype,"hideExtraneousDays",2);h([v({type:Boolean})],u.prototype,"hideDayNames",2);h([v({attribute:!1})],u.prototype,"customizedDates",2);h([v()],u.prototype,"label",2);h([v({attribute:!1})],u.prototype,"dateLabelTemplate",2);h([z('td[tabindex="0"]')],u.prototype,"_elFocusedCell",2);h([U("value")],u.prototype,"_valueChanged",1);u=h([j("gds-calendar")],u);export{O as i};
