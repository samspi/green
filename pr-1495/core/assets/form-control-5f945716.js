import{n as c,G as u}from"./gds-element-54cd6e2a.js";import{w as v}from"./watch-c4961afe.js";var m=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(t,e,a,s)=>{for(var l=s>1?void 0:s?_(e,a):e,d=t.length-1,h;d>=0;d--)(h=t[d])&&(l=(s?h(e,a,l):h(l))||l);return s&&l&&m(e,a,l),l},p=(t,e,a)=>{if(!e.has(t))throw TypeError("Cannot "+a)},i=(t,e,a)=>(p(t,e,"read from private field"),a?a.call(t):e.get(t)),y=(t,e,a)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,a)},f=(t,e,a,s)=>(p(t,e,"write to private field"),s?s.call(t,a):e.set(t,a),a),r;class o extends u{constructor(){super(),y(this,r,void 0),this.invalid=!1,this.name="",this._handleFormReset=()=>{this.value=void 0};try{f(this,r,this.attachInternals())}catch{f(this,r,{form:this.closest("form"),setFormValue:a=>{this.value=a},setValidity:(a,s)=>{this.invalid=a.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}get form(){return i(this,r).form}get validity(){return i(this,r).validity}get validationMessage(){return i(this,r).validationMessage}get willValidate(){return i(this,r).willValidate}checkValidity(){return i(this,r).checkValidity()}reportValidity(){return i(this,r).reportValidity()}connectedCallback(){var e;super.connectedCallback(),(e=i(this,r).form)==null||e.addEventListener("reset",this._handleFormReset)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=i(this,r).form)==null||e.removeEventListener("reset",this._handleFormReset)}__handleValidityChange(){i(this,r).setValidity({badInput:!1,customError:this.invalid,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!this.invalid},this.validationMessage||"Error message")}__handleValueChange(){i(this,r).setFormValue(this.value)}}r=new WeakMap;o.formAssociated=!0;n([c({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:t=>t==null?void 0:t.toString()}})],o.prototype,"invalid",2);n([c()],o.prototype,"value",2);n([c({reflect:!0})],o.prototype,"name",2);n([v("invalid")],o.prototype,"__handleValidityChange",1);n([v("value")],o.prototype,"__handleValueChange",1);export{o as G};