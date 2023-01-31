/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new WeakMap;class o{constructor(t,i,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const n=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((i,e,s)=>i+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[s+1]),t[0]);return new o(s,t,e)},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,e))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,a=h.trustedTypes,d=a?a.emptyScript:"",u=h.reactiveElementPolyfillSupport,c={toAttribute(t,i){switch(i){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let e=t;switch(i){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},p=(t,i)=>i!==t&&(i==i||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:p};class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,e)=>{const s=this._$Ep(e,i);void 0!==s&&(this._$Ev.set(s,e),t.push(s))})),t}static createProperty(t,i=v){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,e,i);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,i,e){return{get(){return this[i]},set(s){const o=this[t];this[i]=s,this.requestUpdate(t,o,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of i)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)i.unshift(r(t))}else void 0!==t&&i.push(r(t));return i}static _$Ep(t,i){const e=i.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,e;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{i?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),o=t.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,e){this._$AK(t,e)}_$EO(t,i,e=v){var s;const o=this.constructor._$Ep(t,e);if(void 0!==o&&!0===e.reflect){const n=(void 0!==(null===(s=e.converter)||void 0===s?void 0:s.toAttribute)?e.converter:c).toAttribute(i,e.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,i){var e;const s=this.constructor,o=s._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=s.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(e=t.converter)||void 0===e?void 0:e.fromAttribute)?t.converter:c;this._$El=o,this[o]=n.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,e){let s=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===e.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,e))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const e=this._$AL;try{i=this.shouldUpdate(e),i?(this.willUpdate(e),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(e)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(e)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:b}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.1");const g=window,m=g.trustedTypes,w=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,x="?"+y,$=`<${x}>`,S=document,k=(t="")=>S.createComment(t),z=t=>null===t||"object"!=typeof t&&"function"!=typeof t,A=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,_=/>/g,T=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),M=/'/g,j=/"/g,B=/^(?:script|style|textarea|title)$/i,U=(t=>(i,...e)=>({_$litType$:t,strings:i,values:e}))(1),O=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),W=new WeakMap,I=S.createTreeWalker(S,129,null,!1),N=(t,i)=>{const e=t.length-1,s=[];let o,n=2===i?"<svg>":"",r=C;for(let i=0;i<e;i++){const e=t[i];let l,h,a=-1,d=0;for(;d<e.length&&(r.lastIndex=d,h=r.exec(e),null!==h);)d=r.lastIndex,r===C?"!--"===h[1]?r=E:void 0!==h[1]?r=_:void 0!==h[2]?(B.test(h[2])&&(o=RegExp("</"+h[2],"g")),r=T):void 0!==h[3]&&(r=T):r===T?">"===h[0]?(r=null!=o?o:C,a=-1):void 0===h[1]?a=-2:(a=r.lastIndex-h[2].length,l=h[1],r=void 0===h[3]?T:'"'===h[3]?j:M):r===j||r===M?r=T:r===E||r===_?r=C:(r=T,o=void 0);const u=r===T&&t[i+1].startsWith("/>")?" ":"";n+=r===C?e+$:a>=0?(s.push(l),e.slice(0,a)+"$lit$"+e.slice(a)+y+u):e+y+(-2===a?(s.push(void 0),i):u)}const l=n+(t[e]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(l):l,s]};class L{constructor({strings:t,_$litType$:i},e){let s;this.parts=[];let o=0,n=0;const r=t.length-1,l=this.parts,[h,a]=N(t,i);if(this.el=L.createElement(h,e),I.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(s=I.nextNode())&&l.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const i of s.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(y)){const e=a[n++];if(t.push(i),void 0!==e){const t=s.getAttribute(e.toLowerCase()+"$lit$").split(y),i=/([.?@])?(.*)/.exec(e);l.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?Z:"?"===i[1]?V:"@"===i[1]?Y:H})}else l.push({type:6,index:o})}for(const i of t)s.removeAttribute(i)}if(B.test(s.tagName)){const t=s.textContent.split(y),i=t.length-1;if(i>0){s.textContent=m?m.emptyScript:"";for(let e=0;e<i;e++)s.append(t[e],k()),I.nextNode(),l.push({type:2,index:++o});s.append(t[i],k())}}}else if(8===s.nodeType)if(s.data===x)l.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:o}),t+=y.length-1}o++}}static createElement(t,i){const e=S.createElement("template");return e.innerHTML=t,e}}function q(t,i,e=t,s){var o,n,r,l;if(i===O)return i;let h=void 0!==s?null===(o=e._$Co)||void 0===o?void 0:o[s]:e._$Cl;const a=z(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,e,s)),void 0!==s?(null!==(r=(l=e)._$Co)&&void 0!==r?r:l._$Co=[])[s]=h:e._$Cl=h),void 0!==h&&(i=q(t,h._$AS(t,i.values),h,s)),i}class D{constructor(t,i){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var i;const{el:{content:e},parts:s}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:S).importNode(e,!0);I.currentNode=o;let n=I.nextNode(),r=0,l=0,h=s[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new P(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new F(n,this,t)),this.u.push(i),h=s[++l]}r!==(null==h?void 0:h.index)&&(n=I.nextNode(),r++)}return o}p(t){let i=0;for(const e of this.u)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,i),i+=e.strings.length-2):e._$AI(t[i])),i++}}class P{constructor(t,i,e,s){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=e,this.options=s,this._$Cm=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=q(this,t,i),z(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==O&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>A(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var i;const{values:e,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.p(e);else{const t=new D(o,this),i=t.v(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let i=W.get(t.strings);return void 0===i&&W.set(t.strings,i=new L(t)),i}k(t){A(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let e,s=0;for(const o of t)s===i.length?i.push(e=new P(this.O(k()),this.O(k()),this,this.options)):e=i[s],e._$AI(o),s++;s<i.length&&(this._$AR(e&&e._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cm=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class H{constructor(t,i,e,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=o,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,e,s){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,i,0),n=!z(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=q(this,s[e+r],i,r),l===O&&(l=this._$AH[r]),n||(n=!z(l)||l!==this._$AH[r]),l===R?t=R:t!==R&&(t+=(null!=l?l:"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=m?m.emptyScript:"";class V extends H{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class Y extends H{constructor(t,i,e,s,o){super(t,i,e,s,o),this.type=5}_$AI(t,i=this){var e;if((t=null!==(e=q(this,t,i,0))&&void 0!==e?e:R)===O)return;const s=this._$AH,o=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==R&&(s===R||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,i,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const G=g.litHtmlPolyfillSupport;null==G||G(L,P),(null!==(f=g.litHtmlVersions)&&void 0!==f?f:g.litHtmlVersions=[]).push("2.6.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var K,Q;class X extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;const e=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=e.firstChild),e}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,i,e)=>{var s,o;const n=null!==(s=null==e?void 0:e.renderBefore)&&void 0!==s?s:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==e?void 0:e.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new P(i.insertBefore(k(),t),t,void 0,null!=e?e:{})}return r._$AI(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}X.finalized=!0,X._$litElement$=!0,null===(K=globalThis.litElementHydrateSupport)||void 0===K||K.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it=1,et=2,st=t=>(...i)=>({_$litDirective$:t,values:i});class ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,e){this._$Ct=t,this._$AM=i,this._$Ci=e}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=st(class extends ot{constructor(t){var i;if(super(t),t.type!==it||"style"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((i,e)=>{const s=t[e];return null==s?i:i+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[i]){const{style:e}=t.element;if(void 0===this.vt){this.vt=new Set;for(const t in i)this.vt.add(t);return this.render(i)}this.vt.forEach((t=>{null==i[t]&&(this.vt.delete(t),t.includes("-")?e.removeProperty(t):e[t]="")}));for(const t in i){const s=i[t];null!=s&&(this.vt.add(t),t.includes("-")?e.setProperty(t,s):e[t]=s)}return O}});class rt extends X{static styles=n`
        :host {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            margin 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-image: url('./assets/images/fondo-video.jpg');
            z-index: 1000;
            transition: all .5s ease-in-out;
            align-items: center;
            overflow: scroll;
        }
        :host::-webkit-scrollbar {
            display: none;
        }
        .load-block {
            display: flex;
            position: absolute;
            background-color: rgba(0,0,0,0.6);
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
        }
        iframe {
        }
        p {
            color: white;
            font-family: openSansMedium;
            font-size: 2rem;
        }
    `;static properties={mover:{type:Boolean},videoSrc:{},videobSrc:{}};constructor(){super(),this.mover=!1}render(){return U`
        <div class="load-block">
            <img src="./assets/images/loader-puff.svg">
        </div>
        <p>En estudio:</p>
        <iframe
            @load=${this.iframeLoaded}
            loading="lazy" 
            width="100%" height="315" 
            src="${this.mover?this.videobSrc:null}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <p>Su vóz:</p>
        <iframe
            loading="lazy" 
            width="100%" height="315" 
            src="${this.mover?this.videoSrc:null}" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        `}updated(t){t.has("mover")&&this.move()}iframeLoaded(){this.mover&&setTimeout((()=>{this.shadowRoot.querySelector(".load-block").style.display="none"}),100)}move(){this.mover?window.matchMedia("(min-width: 600px)").matches?(console.log(this.getBoundingClientRect().width),setTimeout((()=>{console.log(this.getBoundingClientRect().width),this.style.transform="translate(25vw, 0px)",this.style.width="50vw"}),500)):setTimeout((()=>{this.style.transform="translate(0px, 15vh)",this.style.height="50vh"}),500):window.matchMedia("(min-width: 600px)").matches?setTimeout((()=>{this.style.transform="translate(0px, 0px)",this.style.width="100%",this.style.transition="all .3s ease-in-out"}),200):setTimeout((()=>{this.style.transform="translate(0px, 0px)",this.style.height="100%"}),200)}}customElements.define("video-container",rt);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class lt extends ot{constructor(t){if(super(t),this.it=R,t.type!==et)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this._t=void 0,this.it=t;if(t===O)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}lt.directiveName="unsafeHTML",lt.resultType=1;const ht=st(lt);class at extends X{static styles=n`
        :host {
            display: block;
            position: absolute;
            top: 0;
            margin 0;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: 999;
            transition: all .5s ease-in-out;
            overflow: scroll;
            font-family: sans-serif;
            padding: 30px;
            box-sizing: border-box;
        }
        :host::-webkit-scrollbar {
            display: none;
        }
        h1 {
            background-color: lightseagreen;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -30px; left: 0;
            text-align: center;
            font-family: openSansMedium;
            font-size: 2rem;
            color: white;
            width: 100%;
            box-sizing: border-box;
        }
        p {
            text-align: justify;
            box-sizing: border-box;
            font-family: LouisGeorgeCafe-Medium;
        }
    `;static properties={infoData:{state:!0},mover:{type:Boolean}};constructor(){super(),this.mover=!1}render(){const t={display:window.matchMedia("(min-width: 600px)").matches?"block":"none"},i={marginTop:window.matchMedia("(min-width: 600px)").matches?"120px":"3px",fontSize:window.matchMedia("(min-width: 600px)").matches?"2vw":"8vw",textAlign:window.matchMedia("(min-width: 600px)").matches?"left":"center"},e={fontSize:window.matchMedia("(min-width: 600px)").matches?"1.3rem":"2rem"};return U`
            <article>
                <h1 style="${nt(t)}">${this.infoData.nombre}</h1>
                <h4 style="${nt(i)}">Banda: ${this.infoData.banda}</h4>
            </article>
            <article style="${nt(e)}">
                ${ht(this.infoData.biografia)}
            </article>
        `}updated(t){t.has("mover")&&this.move()}move(){this.mover?window.matchMedia("(min-width: 600px)").matches?setTimeout((()=>{this.style.transform="translate(75vw, 0px)",this.style.width="25vw"}),700):setTimeout((()=>{this.style.transform="translate(0px, 65vh)",this.style.height="35vh"}),700):window.matchMedia("(min-width: 600px)").matches?(this.style.transform="translate(0px, 0px)",this.style.width="100%"):(this.style.transform="translate(0px, 0px)",this.style.height="100%")}}customElements.define("info-container",at);class dt extends X{static styles=n`
        :host {
            display: inline-block;
            position: relative;
            height: 450px;
            background: lightgray;
            width: 100%
        }
        .movible {
            display: inline-block;
            position: relative;
            height: 100%;
            width: 100%;
            transition: all .5s ease-in-out;
            overflow: hidden;
            box-sizing: border-box;
        }
        .sombra {
            background-color: rgba(19,30,33,0.4);
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            transition: all .5s ease-in-out;
            z-index: 1002;
        }
        .sombra:hover {
            background-color: rgba(19,30,33,0.0);
        }
        .bordes {
            position: absolute;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: 10px solid rgba(119, 136, 153,0);
            z-index: 1001;
            transition: all .5s ease-in-out;
            cursor: pointer;
        }
        .sombra:hover .bordes {
            border: 10px solid rgba(47, 79, 79,0.3);
        }
        .img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1001;
            transition: all .5s ease-in-out;
        }
        .titulo {
            position: absolute;
            text-transform: uppercase;
            font-family: openSansMedium;
            font-weight: 400;
            font-size: 1.2vw;
            padding: 10px;
            padding-left: 25px;
            box-sizing: border-box;
            top: 61%;
            color: #ffffff;
            width: 100%;
            right: -100%;
            transition: all .5s ease-in-out;
            z-index: 1002;
        }
        .sombra:hover .titulo {
            background-color: teal;
            right: 0;
        }
        .subtitulo {
            position: absolute;
            font-family: openSansMedium;
            font-weight: 100;
            font-size: 1vw;
            text-align: right;
            padding: 5px;
            padding-right: 25px;
            box-sizing: border-box;
            top: 69%;
            color: #ffffff;
            width: 100%;
            right: 100%;
            transition: all .5s ease-in-out;
            z-index: 1002;
        }
        .sombra:hover .subtitulo {
            background-color: lightseagreen;
            right: 0;
        }
        button {
            transition: all .3s ease-in-out;
            position: absolute;
            opacity: 0;
            border: none;
            box-sizing: border-box;
            padding: 10px;
            cursor: pointer;
        }
    `;static properties={data:{state:!0},wWidth:{state:!0},active:{type:Boolean},stylesActive:{type:Boolean},styles:{type:Object},bounding:{},elements:{type:Array},nodesString:{type:Array}};constructor(){super(),this.active=!1,this.newStylesActive=!1,this.styles={},this.elements=[],this.nodesString=[".titulo",".subtitulo",".movible",".img",".sombra",".bordes",".backButton"]}firstUpdated(){this.nodesString.forEach(((t,i)=>this.elements[i]=this.renderRoot.querySelector(t))),this.getStyles()}createRenderRoot(){const t=super.createRenderRoot();return t.addEventListener("click",(t=>this.move(t))),window.addEventListener("resize",(()=>{if(this.active){this.renderRoot.querySelector(".backButton").click()}this.getStyles()})),t}render(){return U`
            <div class="movible" style=${this.styles.movible}>
                <div class="sombra" style=${this.styles.sombra}>
                    <div class="bordes" style=${this.styles.bordes}></div>
                    <div class="titulo" style=${this.styles.titulo}>${this.data.nombre}</div>
                    <div class="subtitulo" style=${this.styles.subtitulo}>${this.data.rango}</div>
                    <button class="backButton" style=${this.styles.backButton}>
                        <img src="./assets/images/backArrow.svg">
                    </button>
                </div>
                <img class="img" src="./assets/images/${this.data.imagen}" style=${this.styles.img}>
                <video-container .mover=${this.active} .videoSrc=${this.data.video} .videobSrc=${this.data.videoB}></video-container>
                <info-container .mover=${this.active} .infoData=${this.data}></info-container>
            </div>
        `}move(t){if(console.log(`innerWidth ${innerWidth}`),console.log(`outherWidth ${outerWidth}`),console.log(window),t.target.matches(".bordes")&&!1===this.active){this.changeNewStylesActive(),this.changeActive(),this.getStyles();let t=this.renderRoot.querySelector(".backButton");t.onmouseover=()=>t.style.setProperty("background-color","royalblue"),t.onmouseout=()=>t.style.setProperty("background-color","teal"),this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active})),document.getElementsByTagName("html")[0].style.overflow="hidden"}else(t.target.matches(".backButton")||t.target.matches(".backButton img"))&&!0===this.active&&(console.log("back-button"),this.changeNewStylesActive(),this.changeActive(),setTimeout((()=>{this.getStyles()}),500),document.getElementsByTagName("html")[0].style.overflow="auto",this.dispatchEvent(new CustomEvent("bloqueo",{bubbles:!0,composed:!0,detail:this.active})))}getStyles(){this.windowWidth=window.innerWidth,this.nodesString.forEach(((t,i)=>{let e=".movible"===t?this.elements[i].getBoundingClientRect():null,s=t.split(".")[1],o=".sombra"===t?this.elements[i]:null;this.styles[s]=nt(function(t,i,e,s,o){const n="600",r="1000";if("titulo"===t&&i>r)return{backgroundColor:e?"teal":null,right:e?"0":null,top:e?"91%":null,fontSize:e?"2vw":null,textAlign:e?"center":null,padding:e?"10px":null};if("titulo"===t&&i>n&&i<r)return{backgroundColor:e?"teal":"transparent",right:"0",top:e?"95%":"84%",fontSize:e?"2vw":"2.5vw",textAlign:"center",padding:"0",color:"white"};if("titulo"===t&&i<n)return{backgroundColor:"transparent",left:e?"10%":"0",top:e?"35%":"84%",fontSize:e?"7vw":"5vw",textAlign:"center",padding:"0",color:e?"yellow":"white",fontFamily:e?"openSansBold":"openSansMedium",transform:e?"rotate(10deg)":"rotate(0deg)"};if("subtitulo"===t&&i>r)return{backgroundColor:e?"lightseagreen":null,right:e?"0":null,top:e?"95%":null,visibility:e?"hidden":null,fontSize:e?"1.4vw":null,textAlign:e?"center":null};if("subtitulo"===t&&i>n&&i<r)return{backgroundColor:"transparent",right:"0",top:"90%",fontSize:"2vw",textAlign:"center",padding:"0",color:"white",visibility:e?"hidden":"visible"};if("subtitulo"===t&&i<n)return{backgroundColor:"transparent",right:"0",top:"90%",fontSize:"2vw",textAlign:"center",padding:"0",color:"white",visibility:e?"hidden":"visible"};if("img"===t&&i<n)return{filter:e?"grayscale(100%)":"grayscale(0%)"};if("sombra"===t&&i>r)return{backgroundColor:e?"transparent":null};if("sombra"===t&&i>n&&i<r)return{backgroundColor:e?"rgba(19,30,33,0)":"rgba(19,30,33,0.4)"};if("sombra"===t&&i<n){let t=o,i={root:document,rootMargin:"0px",threshold:.75};return new IntersectionObserver((function(t){t.forEach((t=>{t.isIntersecting?innerWidth<n&&t.target.style.setProperty("background-color","rgba(19,30,33, 0)"):innerWidth<n&&t.target.style.setProperty("background-color","rgba(19,30,33, 0.5)")}))}),i).observe(t),{backgroundColor:e?"rgba(19,30,33, 0)":"rgba(19,30,33, 0.4)"}}if("bordes"===t&&i>r)return{visibility:e?"hidden":null,cursor:e?"default":null};if("bordes"===t&&i>n&&i<r)return{border:"10px solid rgba(119, 136, 153,0)"};if("bordes"===t&&i<n)return{border:"10px solid rgba(119, 136, 153,0)"};if("backButton"===t&&i>n)return{zIndex:e?"1100":null,opacity:e?"1":"0",top:"10px",left:"10px",borderRadius:e?"50%":null,backgroundColor:e?"teal":null};if("backButton"===t&&i<n)return{zIndex:e?"1100":"null",opacity:e?"1":"0",left:e?"10px":null,bottom:e?"12px":null,backgroundColor:e?"yellow":null,color:e?"white":null,fontSize:e?"0.5rem":null,borderRadius:e?"50%":null};let l=e&&s?s.width:null,h=e&&s?s.left:null,a=e&&s?s.top:null;if("movible"===t&&i>n)return{transform:e?`translate(${-h}px, ${-a}px)`:"translate(0px, 0px)",height:e?"100vh":"450px",width:e?"25vw":l,zIndex:e?"1003":"1001",overflow:e?"visible":"hidden"};if("movible"===t&&i<n)return{transform:e?`translate(0px, ${-a}px)`:null,height:e?"15vh":null,zIndex:e?"1003":null,overflow:e?"visible":null};return{}}(s,innerWidth,this.newStylesActive,e,o))})),this.requestUpdate()}changeActive(){this.active=!this.active}changeNewStylesActive(){this.newStylesActive=!this.newStylesActive}}customElements.define("cards-element",dt);class ut extends X{static styles=n`
        :host {
            position: relative;
            width: 100%;
            height: 100%;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
        .bloqueo {
            position: fixed;
            top:0;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, .4);
            z-index: 1003;
            display: none;
        }
    `;fetchData=async()=>{const t=await fetch("./assets/data.json");return(await t.json()).cantantes};static properties={content:{state:!0},childState:{type:Boolean}};constructor(){super(),this.childState=!1,this.fetchData().then((t=>{this.content=t})),document.addEventListener("bloqueo",(t=>{this.childState=t.detail}))}render(){const t={display:this.childState?"block":"none"};return U`
            <div class="bloqueo" style=${nt(t)}></div>
            ${
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function*(t,i){if(void 0!==t){let e=0;for(const s of t)yield i(s,e++)}}(this.content,(t=>U`<cards-element .data="${t}"></cards-element>`))}
        `}}customElements.define("cards-container",ut);class ct extends X{static styles=n`
        :host {
            top: 0px;
            margin 0px;
            display: block;
            width: 100%;
            text-align: center;
            font-family: OpenSansMedium;
            font-size: 2.7vw;
            position: fixed;
            z-index: 1003;
        }
        h1 {
            width: 100%;
            padding: 10px 0 10px 0;
            margin: 0px;
            transition: all .5s ease;
        }
    `;static properties={scroll:{},active:{type:String}};constructor(){super()}getScroll=window.onscroll=()=>{this.scroll=window.scrollY};getSize=window.onresize=()=>{console.log(innerWidth)};render(){return U`
            <h1 style=${nt(this.getStyles())}>Voces</h1>
        `}getStyles(){return{backgroundColor:this.scroll>176?"rgba(0, 0, 0, 0)":"white",color:this.scroll>176?"white":"black",padding:this.scroll>176?"0 0 0 0":"10px 0 10px 0"}}}customElements.define("page-title",ct);class pt extends X{static styles=n`
        .tope {
            width: 100%;
        }
    `;render(){const t={height:window.matchMedia("(min-width: 600px)").matches?"96px":"50px"};return U`
            <div class="tope" style=${nt(t)}></div>
        `}}customElements.define("tope-component",pt);
