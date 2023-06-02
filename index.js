/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let o=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const a=window,h=a.trustedTypes,d=h?h.emptyScript:"",c=a.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:g}),(null!==(l=a.reactiveElementVersions)&&void 0!==l?l:a.reactiveElementVersions=[]).push("1.4.1");const b=window,f=b.trustedTypes,y=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,x=`<${w}>`,_=document,A=(t="")=>_.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,z=/>/g,M=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),R=/'/g,T=/"/g,N=/^(?:script|style|textarea|title)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),O=new WeakMap,H=_.createTreeWalker(_,129,null,!1),L=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(r.lastIndex=d,a=r.exec(i),null!==a);)d=r.lastIndex,r===k?"!--"===a[1]?r=C:void 0!==a[1]?r=z:void 0!==a[2]?(N.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=M):void 0!==a[3]&&(r=M):r===M?">"===a[0]?(r=null!=o?o:k,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?M:'"'===a[3]?T:R):r===T||r===R?r=M:r===C||r===z?r=k:(r=M,o=void 0);const c=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===k?i+x:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+$+c):i+$+(-2===h?(s.push(void 0),e):c)}const l=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]};class q{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[a,h]=L(t,e);if(this.el=q.createElement(a,i),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=H.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=h[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?Z:"@"===e[1]?J:W})}else l.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(N.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],A()),H.nextNode(),l.push({type:2,index:++o});s.append(t[e],A())}}}else if(8===s.nodeType)if(s.data===w)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)l.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function D(t,e,i=t,s){var o,n,r,l;if(e===U)return e;let a=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=S(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(r=(l=i)._$Cl)&&void 0!==r?r:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=D(t,a._$AS(t,e.values),a,s)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);H.currentNode=o;let n=H.nextNode(),r=0,l=0,a=s[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new I(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new K(n,this,t)),this.v.push(e),a=s[++l]}r!==(null==a?void 0:a.index)&&(n=H.nextNode(),r++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,s){var o;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$C_=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),S(t)?t===B||null==t||""===t?(this._$AH!==B&&this._$AR(),this._$AH=B):t!==this._$AH&&t!==U&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.O(t):this.$(t)}S(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==B&&S(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=q.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new j(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new q(t)),e}O(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new I(this.S(A()),this.S(A()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,s,o){this.type=1,this._$AH=B,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=D(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=D(this,s[i+r],e,r),l===U&&(l=this._$AH[r]),n||(n=!S(l)||l!==this._$AH[r]),l===B?t=B:t!==B&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.P(t)}P(t){t===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends W{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===B?void 0:t}}const Y=f?f.emptyScript:"";class Z extends W{constructor(){super(...arguments),this.type=4}P(t){t&&t!==B?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class J extends W{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=D(this,t,e,0))&&void 0!==i?i:B)===U)return;const s=this._$AH,o=t===B&&s!==B||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==B&&(s===B||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class K{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const F=b.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var G,Q;null==F||F(q,I),(null!==(v=b.litHtmlVersions)&&void 0!==v?v:b.litHtmlVersions=[]).push("2.3.1");class X extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,o;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new I(e.insertBefore(A(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}X.finalized=!0,X._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=1,it=2,st=t=>(...e)=>({_$litDirective$:t,values:e});let ot=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=st(class extends ot{constructor(t){var e;if(super(t),t.type!==et||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in e)this.vt.add(t);return this.render(e)}this.vt.forEach((t=>{null==e[t]&&(this.vt.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.vt.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return U}});class rt extends X{static styles=n`:host{display:flex;flex-direction:column;position:absolute;top:0;width:100%;height:100%;background-image:url(assets/images/fondo-video.jpg);z-index:1000;transition:all .5s ease-in-out;align-items:center;overflow:scroll}:host::-webkit-scrollbar{display:none}.load-block{display:flex;position:absolute;background-color:rgba(0,0,0,.6);width:100%;height:100%;justify-content:center;align-items:center}p{color:#1f2124;font-family:openSansMedium;font-size:1rem}`;static properties={mover:{type:Boolean},videoSrc:{},videobSrc:{}};constructor(){super(),this.mover=!1}render(){return P`<div class="load-block"><img src="assets/images/loader-puff.svg"></div><p>En estudio</p><iframe @load="${this.iframeLoaded}" loading="lazy" width="100%" height="315" src="${this.mover?this.videobSrc:null}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe><p>En vivo</p><iframe loading="lazy" width="100%" height="315" src="${this.mover?this.videoSrc:null}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>`}updated(t){t.has("mover")&&this.move()}iframeLoaded(){this.mover&&setTimeout((()=>{this.shadowRoot.querySelector(".load-block").style.display="none"}),100)}move(){this.mover?window.matchMedia("(min-width: 600px)").matches?(console.log(this.getBoundingClientRect().width),setTimeout((()=>{console.log(this.getBoundingClientRect().width),this.style.transform="translate(25vw, 0px)",this.style.width="50vw"}),500)):setTimeout((()=>{this.style.transform="translate(0px, 15vh)",this.style.height="45vh"}),500):window.matchMedia("(min-width: 600px)").matches?setTimeout((()=>{this.style.transform="translate(0px, 0px)",this.style.width="100%",this.style.transition="all .3s ease-in-out"}),200):setTimeout((()=>{this.style.transform="translate(0px, 0px)",this.style.height="100%"}),200)}}customElements.define("video-container",rt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class lt extends ot{constructor(t){if(super(t),this.it=B,t.type!==it)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===B||null==t)return this._t=void 0,this.it=t;if(t===U)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const at=st(lt);class ht extends X{static styles=n`:host{display:block;position:absolute;top:0;height:100%;background-color:#1f2124;z-index:999;transition:all .5s ease-in-out;overflow:scroll;font-family:sans-serif;padding:30px;box-sizing:border-box}:host::-webkit-scrollbar{display:none}h1{display:flex;align-items:center;justify-content:center;position:absolute;top:50px;left:0;text-align:center;font-family:openSansMedium;font-size:1.5rem;color:#fff;width:100%;box-sizing:border-box}h4{color:gold;font-size:.7rem;font-family:openSansMedium}p{color:#dcdcdc;font-size:5vmin;text-align:justify;-moz-hyphens:auto;-ms-hyphens:auto;-webkit-hyphens:auto;-o-hyphens:auto;hyphens:auto;word-wrap:break-word;box-sizing:border-box;font-family:LouisGeorgeCafe-Medium}`;static properties={infoData:{state:!0},mover:{type:Boolean}};constructor(){super(),this.mover=!1}firstUpdated(){let t=this.renderRoot.querySelectorAll("p");window.innerWidth>1e3&&t.forEach((t=>{t.style.fontSize="3vmin"}))}render(){const t={display:window.matchMedia("(min-width: 600px)").matches?"block":"none"},e={marginTop:window.matchMedia("(min-width: 600px)").matches?"120px":"3px",fontSize:window.matchMedia("(min-width: 600px)").matches?"3vmin":"8vw",textAlign:window.matchMedia("(min-width: 600px)").matches?"left":"center"},i={fontSize:window.matchMedia("(min-width: 600px)").matches?"3vmin":"5vmin"};return P`<article><h1 style="${nt(t)}">${this.infoData.nombre}</h1><h4 style="${nt(e)}">Banda: ${this.infoData.banda}</h4><p>${this.infoData.genero}</p></article><article style="${nt(i)}">${at(this.infoData.biografia)}</article>`}updated(t){t.has("mover")&&this.move()}move(){this.mover?window.matchMedia("(min-width: 600px)").matches?setTimeout((()=>{this.style.transform="translate(75vw, 0px)",this.style.width="25vw"}),700):setTimeout((()=>{this.style.transform="translate(0px, 60vh)",this.style.height="40vh"}),700):window.matchMedia("(min-width: 600px)").matches?(this.style.transform="translate(0px, 0px)",this.style.width="100%"):(this.style.transform="translate(0px, 0px)",this.style.height="100%")}}customElements.define("info-container",ht);class dt extends X{static styles=n`:host{display:inline-block;position:relative;height:450px;background:#d3d3d3;width:100%}.movible{display:inline-block;position:relative;height:100%;width:100%;transition:all .5s ease-in-out;overflow:hidden;box-sizing:border-box}.sombra{background-color:rgba(19,30,33,.4);position:absolute;top:0;right:0;bottom:0;left:0;transition:all .5s ease-in-out;z-index:1002}.sombra:hover{background-color:rgba(19,30,33,0)}.bordes{position:absolute;width:100%;height:100%;box-sizing:border-box;border:2px solid rgba(119,136,153,0);z-index:1001;transition:all .5s ease-in-out;cursor:pointer}.sombra:hover .bordes{border:10px solid rgba(255,215,0,.3)}.img{position:absolute;width:100%;height:100%;object-fit:cover;z-index:1001;transition:all .5s ease-in-out}.titulo{position:absolute;text-transform:uppercase;font-family:openSansMedium;font-weight:400;font-size:1.2vw;padding:10px;padding-left:25px;box-sizing:border-box;top:61%;color:#1f2124;width:100%;right:-100%;transition:all .5s ease-in-out;z-index:1002}.sombra:hover .titulo{background-color:gold;right:0}.subtitulo{position:absolute;font-family:openSansMedium;font-weight:100;font-size:1vw;text-align:right;padding:5px;padding-right:25px;box-sizing:border-box;top:69%;color:#1f2124;width:100%;right:100%;transition:all .5s ease-in-out;z-index:1002}.sombra:hover .subtitulo{background-color:#ff0;right:0}button{transition:all .3s ease-in-out;position:absolute;opacity:0;border:none;box-sizing:border-box;padding:10px;cursor:pointer}`;static properties={data:{state:!0},wWidth:{state:!0},active:{type:Boolean},stylesActive:{type:Boolean},styles:{type:Object},bounding:{},elements:{type:Array},nodesString:{type:Array}};constructor(){super(),this.active=!1,this.newStylesActive=!1,this.styles={},this.elements=[],this.nodesString=[".titulo",".subtitulo",".movible",".img",".sombra",".bordes",".backButton"]}firstUpdated(){this.nodesString.forEach(((t,e)=>this.elements[e]=this.renderRoot.querySelector(t))),this.getStyles()}createRenderRoot(){const t=super.createRenderRoot();return t.addEventListener("click",(t=>this.move(t))),window.addEventListener("resize",(()=>{if(this.active){this.renderRoot.querySelector(".backButton").click()}this.getStyles()})),t}render(){return P`<div class="movible" style="${this.styles.movible}"><div class="sombra" style="${this.styles.sombra}" id="${this.data.id}"><div class="bordes" style="${this.styles.bordes}"></div><div class="titulo" style="${this.styles.titulo}">${this.data.nombre}</div><div class="subtitulo" style="${this.styles.subtitulo}">${this.data.genero}</div><button class="backButton" style="${this.styles.backButton}"><img src="assets/images/backArrow.svg"></button></div><img class="img" src="assets/images/${this.data.imagen}" style="${this.styles.img}"><video-container .mover="${this.active}" .videoSrc="${this.data.video}" .videobSrc="${this.data.videoB}"></video-container><info-container .mover="${this.active}" .infoData="${this.data}"></info-container></div>`}move(t){if(t.target.matches(".bordes")&&!1===this.active){this.changeNewStylesActive(),this.changeActive(),this.getStyles();let t=this.renderRoot.querySelector(".backButton");t.onmouseover=()=>t.style.setProperty("background-color","yellow"),t.onmouseout=()=>t.style.setProperty("background-color","gold"),this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active})),document.getElementsByTagName("html")[0].style.overflow="hidden"}else(t.target.matches(".backButton")||t.target.matches(".backButton img"))&&!0===this.active&&(console.log("back-button"),this.changeNewStylesActive(),this.changeActive(),setTimeout((()=>{this.getStyles()}),500),document.getElementsByTagName("html")[0].style.overflow="auto",this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active})))}getStyles(){this.windowWidth=window.innerWidth,this.nodesString.forEach(((t,e)=>{let i=".movible"===t?this.elements[e].getBoundingClientRect():null,s=t.split(".")[1],o=".sombra"===t?this.elements[e]:null;this.styles[s]=nt(function(t,e,i,s,o){const n="600",r="1000";if("titulo"===t&&e>r)return{backgroundColor:i?"gold":null,right:i?"0":null,top:i?"91%":null,fontSize:i?"2vw":null,textAlign:i?"center":null,padding:i?"10px":null};if("titulo"===t&&e>n&&e<r)return{backgroundColor:i?"teal":"transparent",right:"0",top:i?"95%":"84%",fontSize:i?"2vw":"2.5vw",textAlign:"center",padding:"0",color:"white"};if("titulo"===t&&e<n)return{backgroundColor:i?"transparent":"#1f2124",top:i?"35%":"83%",fontSize:"7vw",textAlign:"center",padding:"5px 0 0 0",color:"gold",fontFamily:i?"openSansBold":"openSansMedium",transition:"all 1s ease-in-out"};if("subtitulo"===t&&e>r)return{backgroundColor:i?"gold":null,right:i?"0":null,top:i?"95%":null,visibility:i?"hidden":null,fontSize:i?"1.4vw":null,textAlign:i?"center":null};if("subtitulo"===t&&e>n&&e<r)return{backgroundColor:"transparent",right:"0",top:"90%",fontSize:"2vw",textAlign:"center",padding:"0",color:"white",visibility:i?"hidden":"visible"};if("subtitulo"===t&&e<n)return{backgroundColor:"#1f2124",top:"90%",fontSize:"5vw",textAlign:"center",padding:"0 0 5px 0",color:"yellow",visibility:i?"hidden":"visible",transition:"all 1s ease-in-out"};if("img"===t&&e<n)return{filter:i?"grayscale(100%) brightness(50%)":"grayscale(0%) brightness(100%)"};if("sombra"===t&&e>r)return{backgroundColor:i?"transparent":null};if("sombra"===t&&e>n&&e<r)return{backgroundColor:i?"rgba(19,30,33,0)":"rgba(19,30,33,0.4)"};if("sombra"===t&&e<n){let t=o,e={root:document,rootMargin:"0px",threshold:.75};return new IntersectionObserver((function(t){t.forEach(((t,e)=>{t.isIntersecting?(innerWidth<n&&t.target.style.setProperty("background-color","rgba(19,30,33, 0)"),t.target.querySelector(".titulo").style.right="0px",t.target.querySelector(".subtitulo").style.right="0px"):(innerWidth<n&&t.target.style.setProperty("background-color","rgba(19,30,33, 0.5)"),t.target.querySelector(".titulo").style.right="-100%",t.target.querySelector(".subtitulo").style.right="100%")}))}),e).observe(t),{backgroundColor:i?"rgba(19,30,33, 0)":"rgba(19,30,33, 0.4)"}}if("bordes"===t&&e>r)return{visibility:i?"hidden":null,cursor:i?"default":null};if("bordes"===t&&e>n&&e<r)return{border:"10px solid rgba(119, 136, 153,0)"};if("bordes"===t&&e<n)return{border:"10px solid rgba(119, 136, 153,0)"};if("backButton"===t&&e>n)return{zIndex:i?"1100":null,opacity:i?"1":"0",top:"10px",left:"10px",borderRadius:i?"50%":null,backgroundColor:i?"gold":null};if("backButton"===t&&e<n)return{zIndex:i?"1100":"null",opacity:i?".5":"0",left:i?"10px":null,bottom:i?"12px":null,backgroundColor:i?"gold":null,color:i?"white":null,fontSize:i?"0.5rem":null,borderRadius:i?"50%":null};let l=i&&s?s.width:null,a=i&&s?s.left:null,h=i&&s?s.top:null;if("movible"===t&&e>n)return{transform:i?`translate(${-a}px, ${-h}px)`:"translate(0px, 0px)",height:i?"100vh":"450px",width:i?"25vw":l,zIndex:i?"1003":"1001",overflow:i?"visible":"hidden"};if("movible"===t&&e<n)return{transform:i?`translate(0px, ${-h}px)`:null,height:i?"15vh":null,zIndex:i?"1003":null,overflow:i?"visible":null};return{}}(s,innerWidth,this.newStylesActive,i,o))})),this.requestUpdate()}changeActive(){this.active=!this.active}changeNewStylesActive(){this.newStylesActive=!this.newStylesActive}}customElements.define("cards-element",dt);class ct extends X{static styles=n`:host{position:fixed;top:0;right:0;z-index:1003;box-sizing:border-box}:host *{box-sizing:border-box}#menu-container{position:absolute;right:20px;display:flex;box-sizing:border-box;padding:0 15px;flex-direction:column;align-items:center;justify-content:space-between;height:80px;width:80px;transition:all .2s ease-out .3s;box-sizing:border-box}.hamburger{position:fixed;bottom:3vh;width:80px;height:80px;padding:15px 15px;display:inline-block;cursor:pointer;transition-property:opacity,filter;transition-duration:.15s;transition-timing-function:linear;font:inherit;color:inherit;text-transform:none;background-color:#03060f;border-radius:50%;border:0;margin:0;overflow:visible;opacity:.7;box-sizing:border-box}.hamburger:hover{opacity:.7}.hamburger.is-active:hover{opacity:.7}.hamburger.is-active .hamburger-inner,.hamburger.is-active .hamburger-inner::after,.hamburger.is-active .hamburger-inner::before{background-color:gold}.hamburger-box{width:40px;height:24px;display:inline-block;position:relative}.hamburger-inner{display:block;top:50%;margin-top:-2px}.hamburger-inner,.hamburger-inner::after,.hamburger-inner::before{width:40px;height:4px;background-color:gold;border-radius:4px;position:absolute;transition-property:transform;transition-duration:.15s;transition-timing-function:ease}.hamburger-inner::after,.hamburger-inner::before{content:"";display:block}.hamburger-inner::before{top:-10px}.hamburger-inner::after{bottom:-10px}.hamburger--collapse .hamburger-inner{top:auto;bottom:0;transition-duration:.13s;transition-delay:.13s;transition-timing-function:cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse .hamburger-inner::after{top:-20px;transition:top .2s .2s cubic-bezier(.33333,.66667,.66667,1),opacity .1s linear}.hamburger--collapse .hamburger-inner::before{transition:top .12s .2s cubic-bezier(.33333,.66667,.66667,1),transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse.is-active .hamburger-inner{transform:translate3d(0,-10px,0) rotate(-45deg);transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1)}.hamburger--collapse.is-active .hamburger-inner::after{top:0;opacity:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s .22s linear}.hamburger--collapse.is-active .hamburger-inner::before{top:0;transform:rotate(-90deg);transition:top .1s .16s cubic-bezier(.33333,0,.66667,.33333),transform .13s .25s cubic-bezier(.215,.61,.355,1)}.menu-lateral{position:absolute;top:0;margin:0;padding:15px 0 30px 0;box-sizing:border-box;width:70vw;height:100vh;background-color:#03060f;opacity:.7;transition:all ease-in-out .5s;overflow:scroll}.item-menu{display:flex;align-items:center;justify-content:center;list-style:none;color:#ccc;font-family:renogare;font-size:5vmin;padding-top:5px;padding-bottom:5px;text-align:center;box-sizing:border-box}.is-active-panel{transform:translate(-70vw,0)}.bloqueo{position:absolute;width:100vw;height:100vh;background-color:rgba(0,0,0,.4);z-index:20;display:block}.is-active-block{display:block}.img-lateral{width:7vw;height:auto;margin-right:10px;box-sizing:border-box}`;fetchData=async()=>{const t=await fetch("assets/data.json");return(await t.json()).cantantes};static properties={data:{state:!0},menuScroll:{},itemMenuScroll:{},buttonNode:{},panelNode:{},activeButton:{},active:{},desktopMode:{},fetchData:{}};constructor(){super(),this.activeButton=!1,this.active=!1,this.data=[],this.fetchData().then((t=>{this.data=t})),window.innerWidth>1e3&&(document.querySelector("menu-item").style.display="none")}render(){return P`<ul class="menu-lateral">${this.data.map((t=>P`<li class="item-menu"><span id="${t.id}" class="text-lateral" @click="${this.itemClick}">${t.nombre}</span></li>`))}</ul><div id="menu-container" class="menu-item_container"><button class="hamburger hamburger--collapse" type="button" @click="${this.hamburgueClick}"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button></div>`}firstUpdated(){this.buttonNode=this.renderRoot.querySelector(".hamburger"),this.panelNode=this.renderRoot.querySelector(".menu-lateral")}hamburgueClick(){const t=super.createRenderRoot();this.buttonNode.classList.toggle("is-active"),this.panelNode.classList.toggle("is-active-panel"),this.active=!this.active,this.active?t.host.style.zIndex=3e3:t.host.style.zIndex=1003,document.getElementsByTagName("html")[0].style.overflow="hidden",this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active}))}itemClick(t){const e=super.createRenderRoot();this.active=!this.active,this.active?e.host.style.zIndex=3e3:e.host.style.zIndex=1003,document.getElementsByTagName("html")[0].style.overflow="scroll",this.buttonNode.classList.toggle("is-active"),this.panelNode.classList.remove("is-active-panel");let i=document.querySelector("cards-container").renderRoot.children[`${t.target.id}`],s=i.getBoundingClientRect().top,o=i.getBoundingClientRect().height,n=window.pageYOffset+s+o;window.scroll(0,n),this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active}))}}customElements.define("menu-item",ct);class ut extends X{static styles=n`:host{position:relative;width:100%;height:100%;display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));scroll-behavior:smooth}.bloqueo{position:fixed;top:0;width:100vw;height:100vh;background-color:rgba(0,0,0,.4);z-index:1003;display:none}`;fetchData=async()=>{const t=await fetch("assets/data.json");return(await t.json()).cantantes};static properties={content:{state:!0},childState:{type:Boolean}};constructor(){super(),this.childState=!1,this.fetchData().then((t=>{this.content=t})),document.addEventListener("bloqueo",(t=>{this.childState=t.detail}))}render(){const t={display:this.childState?"block":"none"};return P`<div class="bloqueo" style="${nt(t)}"></div>${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(t,e){if(void 0!==t){let i=0;for(const s of t)yield e(s,i++)}}(this.content,((t,e)=>P`<cards-element .data="${t}" id="${e}"></cards-element>`))}`}}customElements.define("cards-container",ut);class pt extends X{static styles=n`:host{position:fixed;bottom:2vw;left:4vw}p{color:gold;font-family:OpenSansMedium}span{font-family:providence}`;render(){return P`<p class="pie"><span class="logo">Bebopcat<span> dev</span></span></p>`}}customElements.define("footer-component",pt);class mt extends X{static styles=n`:host{top:0;margin:0;display:block;width:100%;text-align:center;font-family:OpenSansMedium;font-size:4.5vmin;position:fixed;z-index:1003;color:#1f2124}h1{width:100%;padding:10px 0 10px 0;margin:0;transition:all .5s ease}`;static properties={scroll:{},active:{type:String}};constructor(){super()}getScroll=window.onscroll=()=>{this.scroll=window.scrollY};getSize=window.onresize=()=>{console.log(innerWidth)};render(){return P`<h1 style="${nt(this.getStyles())}">Voces</h1><footer-component></footer-component>`}getStyles(){return{backgroundColor:this.scroll>176?"rgba(0, 0, 0, 0)":"gold",color:this.scroll>176?"gold":"black",padding:this.scroll>176?"0 0 0 0":"10px 0 10px 0",fontSize:this.scroll>176?"12vmin":null}}}customElements.define("page-title",mt);class gt extends X{static styles=n`.tope{width:100%}`;render(){const t={height:window.matchMedia("(min-width: 600px)").matches?"10vh":"50px"};return P`<div class="tope" style="${nt(t)}"></div>`}}customElements.define("tope-component",gt);
