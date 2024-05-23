const E=new Map,$={set(s,t,e){E.has(s)||E.set(s,new Map);const n=E.get(s);if(!n.has(t)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(t,e)},get(s,t){return E.has(s)&&E.get(s).get(t)||null},remove(s,t){if(!E.has(s))return;const e=E.get(s);e.delete(t),e.size===0&&E.delete(s)}},$t=1e3,K="transitionend",ht=s=>(s&&window.CSS&&window.CSS.escape&&(s=s.replace(/#([^\s"#']+)/g,(t,e)=>`#${CSS.escape(e)}`)),s),kt=s=>s==null?`${s}`:Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(),Lt=s=>{if(!s)return 0;let{transitionDuration:t,transitionDelay:e}=window.getComputedStyle(s);const n=Number.parseFloat(t),i=Number.parseFloat(e);return!n&&!i?0:(t=t.split(",")[0],e=e.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(e))*$t)},It=s=>{s.dispatchEvent(new Event(K))},N=s=>!s||typeof s!="object"?!1:(typeof s.jquery<"u"&&(s=s[0]),typeof s.nodeType<"u"),R=s=>N(s)?s.jquery?s[0]:s:typeof s=="string"&&s.length>0?document.querySelector(ht(s)):null,W=s=>{if(!N(s)||s.getClientRects().length===0)return!1;const t=getComputedStyle(s).getPropertyValue("visibility")==="visible",e=s.closest("details:not([open])");if(!e)return t;if(e!==s){const n=s.closest("summary");if(n&&n.parentNode!==e||n===null)return!1}return t},Y=s=>!s||s.nodeType!==Node.ELEMENT_NODE||s.classList.contains("disabled")?!0:typeof s.disabled<"u"?s.disabled:s.hasAttribute("disabled")&&s.getAttribute("disabled")!=="false",F=s=>{s.offsetHeight},ft=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],Mt=s=>{document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const t of k)t()}),k.push(s)):s()},Q=()=>document.documentElement.dir==="rtl",x=s=>{Mt(()=>{const t=ft();if(t){const e=s.NAME,n=t.fn[e];t.fn[e]=s.jQueryInterface,t.fn[e].Constructor=s,t.fn[e].noConflict=()=>(t.fn[e]=n,s.jQueryInterface)}})},b=(s,t=[],e=s)=>typeof s=="function"?s(...t):e,_t=(s,t,e=!0)=>{if(!e){b(s);return}const n=5,i=Lt(t)+n;let a=!1;const o=({target:c})=>{c===t&&(a=!0,t.removeEventListener(K,o),b(s))};t.addEventListener(K,o),setTimeout(()=>{a||It(t)},i)},Vt=/[^.]*(?=\..*)\.|.*/,Kt=/\..*/,Rt=/::\d+$/,L={};let G=1;const mt={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Et(s,t){return t&&`${t}::${G++}`||s.uidEvent||G++}function pt(s){const t=Et(s);return s.uidEvent=t,L[t]=L[t]||{},L[t]}function Pt(s,t){return function e(n){return B(n,{delegateTarget:s}),e.oneOff&&r.off(s,n.type,t),t.apply(s,[n])}}function Wt(s,t,e){return function n(i){const a=s.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const c of a)if(c===o)return B(i,{delegateTarget:o}),n.oneOff&&r.off(s,i.type,t,e),e.apply(o,[i])}}function gt(s,t,e=null){return Object.values(s).find(n=>n.callable===t&&n.delegationSelector===e)}function bt(s,t,e){const n=typeof t=="string",i=n?e:t||e;let a=At(s);return Ht.has(a)||(a=s),[n,i,a]}function J(s,t,e,n,i){if(typeof t!="string"||!s)return;let[a,o,c]=bt(t,e,n);t in mt&&(o=(Ot=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return Ot.call(this,y)})(o));const d=pt(s),m=d[c]||(d[c]={}),h=gt(m,o,a?e:null);if(h){h.oneOff=h.oneOff&&i;return}const A=Et(o,t.replace(Vt,"")),f=a?Wt(s,e,o):Pt(s,o);f.delegationSelector=a?e:null,f.callable=o,f.oneOff=i,f.uidEvent=A,m[A]=f,s.addEventListener(c,f,a)}function H(s,t,e,n,i){const a=gt(t[e],n,i);a&&(s.removeEventListener(e,a,!!i),delete t[e][a.uidEvent])}function Yt(s,t,e,n){const i=t[e]||{};for(const[a,o]of Object.entries(i))a.includes(n)&&H(s,t,e,o.callable,o.delegationSelector)}function At(s){return s=s.replace(Kt,""),mt[s]||s}const r={on(s,t,e,n){J(s,t,e,n,!1)},one(s,t,e,n){J(s,t,e,n,!0)},off(s,t,e,n){if(typeof t!="string"||!s)return;const[i,a,o]=bt(t,e,n),c=o!==t,d=pt(s),m=d[o]||{},h=t.startsWith(".");if(typeof a<"u"){if(!Object.keys(m).length)return;H(s,d,o,a,i?e:null);return}if(h)for(const A of Object.keys(d))Yt(s,d,A,t.slice(1));for(const[A,f]of Object.entries(m)){const U=A.replace(Rt,"");(!c||t.includes(U))&&H(s,d,o,f.callable,f.delegationSelector)}},trigger(s,t,e){if(typeof t!="string"||!s)return null;const n=ft(),i=At(t),a=t!==i;let o=null,c=!0,d=!0,m=!1;a&&n&&(o=n.Event(t,e),n(s).trigger(o),c=!o.isPropagationStopped(),d=!o.isImmediatePropagationStopped(),m=o.isDefaultPrevented());const h=B(new Event(t,{bubbles:c,cancelable:!0}),e);return m&&h.preventDefault(),d&&s.dispatchEvent(h),h.defaultPrevented&&o&&o.preventDefault(),h}};function B(s,t={}){for(const[e,n]of Object.entries(t))try{s[e]=n}catch{Object.defineProperty(s,e,{configurable:!0,get(){return n}})}return s}function Z(s){if(s==="true")return!0;if(s==="false")return!1;if(s===Number(s).toString())return Number(s);if(s===""||s==="null")return null;if(typeof s!="string")return s;try{return JSON.parse(decodeURIComponent(s))}catch{return s}}function I(s){return s.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}const S={setDataAttribute(s,t,e){s.setAttribute(`data-bs-${I(t)}`,e)},removeDataAttribute(s,t){s.removeAttribute(`data-bs-${I(t)}`)},getDataAttributes(s){if(!s)return{};const t={},e=Object.keys(s.dataset).filter(n=>n.startsWith("bs")&&!n.startsWith("bsConfig"));for(const n of e){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),t[i]=Z(s.dataset[n])}return t},getDataAttribute(s,t){return Z(s.getAttribute(`data-bs-${I(t)}`))}};class j{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const n=N(e)?S.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof n=="object"?n:{},...N(e)?S.getDataAttributes(e):{},...typeof t=="object"?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,i]of Object.entries(e)){const a=t[n],o=N(a)?"element":kt(a);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${i}".`)}}}const Ft="5.3.1";class z extends j{constructor(t,e){super(),t=R(t),t&&(this._element=t,this._config=this._getConfig(e),$.set(this._element,this.constructor.DATA_KEY,this))}dispose(){$.remove(this._element,this.constructor.DATA_KEY),r.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,n=!0){_t(t,e,n)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return $.get(R(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,typeof e=="object"?e:null)}static get VERSION(){return Ft}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const M=s=>{let t=s.getAttribute("data-bs-target");if(!t||t==="#"){let e=s.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),t=e&&e!=="#"?e.trim():null}return ht(t)},l={find(s,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,s))},findOne(s,t=document.documentElement){return Element.prototype.querySelector.call(t,s)},children(s,t){return[].concat(...s.children).filter(e=>e.matches(t))},parents(s,t){const e=[];let n=s.parentNode.closest(t);for(;n;)e.push(n),n=n.parentNode.closest(t);return e},prev(s,t){let e=s.previousElementSibling;for(;e;){if(e.matches(t))return[e];e=e.previousElementSibling}return[]},next(s,t){let e=s.nextElementSibling;for(;e;){if(e.matches(t))return[e];e=e.nextElementSibling}return[]},focusableChildren(s){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(t,s).filter(e=>!Y(e)&&W(e))},getSelectorFromElement(s){const t=M(s);return t&&l.findOne(t)?t:null},getElementFromSelector(s){const t=M(s);return t?l.findOne(t):null},getMultipleElementsFromSelector(s){const t=M(s);return t?l.find(t):[]}},yt="backdrop",xt="fade",X="show",tt=`mousedown.bs.${yt}`,Bt={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},jt={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Nt extends j{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Bt}static get DefaultType(){return jt}static get NAME(){return yt}show(t){if(!this._config.isVisible){b(t);return}this._append();const e=this._getElement();this._config.isAnimated&&F(e),e.classList.add(X),this._emulateAnimation(()=>{b(t)})}hide(t){if(!this._config.isVisible){b(t);return}this._getElement().classList.remove(X),this._emulateAnimation(()=>{this.dispose(),b(t)})}dispose(){this._isAppended&&(r.off(this._element,tt),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(xt),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=R(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),r.on(t,tt,()=>{b(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){_t(t,this._getElement(),this._config.isAnimated)}}const q=(s,t="hide")=>{const e=`click.dismiss${s.EVENT_KEY}`,n=s.NAME;r.on(document,e,`[data-bs-dismiss="${n}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Y(this))return;const a=l.getElementFromSelector(this)||this.closest(`.${n}`);s.getOrCreateInstance(a)[t]()})},zt="focustrap",qt="bs.focustrap",C=`.${qt}`,Ut=`focusin${C}`,Qt=`keydown.tab${C}`,Gt="Tab",Jt="forward",et="backward",Zt={autofocus:!0,trapElement:null},Xt={autofocus:"boolean",trapElement:"element"};class Tt extends j{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Zt}static get DefaultType(){return Xt}static get NAME(){return zt}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),r.off(document,C),r.on(document,Ut,t=>this._handleFocusin(t)),r.on(document,Qt,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,r.off(document,C))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const n=l.focusableChildren(e);n.length===0?e.focus():this._lastTabNavDirection===et?n[n.length-1].focus():n[0].focus()}_handleKeydown(t){t.key===Gt&&(this._lastTabNavDirection=t.shiftKey?et:Jt)}}const st=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",nt=".sticky-top",w="padding-right",it="margin-right";class P{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,w,e=>e+t),this._setElementAttributes(st,w,e=>e+t),this._setElementAttributes(nt,it,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,w),this._resetElementAttributes(st,w),this._resetElementAttributes(nt,it)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,n){const i=this.getWidth(),a=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,e);const c=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${n(Number.parseFloat(c))}px`)};this._applyManipulationCallback(t,a)}_saveInitialAttribute(t,e){const n=t.style.getPropertyValue(e);n&&S.setDataAttribute(t,e,n)}_resetElementAttributes(t,e){const n=i=>{const a=S.getDataAttribute(i,e);if(a===null){i.style.removeProperty(e);return}S.removeDataAttribute(i,e),i.style.setProperty(e,a)};this._applyManipulationCallback(t,n)}_applyManipulationCallback(t,e){if(N(t)){e(t);return}for(const n of l.find(t,this._element))e(n)}}const te="offcanvas",ee="bs.offcanvas",_=`.${ee}`,St=".data-api",se=`load${_}${St}`,ne="Escape",ot="show",rt="showing",at="hiding",ie="offcanvas-backdrop",wt=".offcanvas.show",oe=`show${_}`,re=`shown${_}`,ae=`hide${_}`,ct=`hidePrevented${_}`,Dt=`hidden${_}`,ce=`resize${_}`,le=`click${_}${St}`,ue=`keydown.dismiss${_}`,de='[data-bs-toggle="offcanvas"]',he={backdrop:!0,keyboard:!0,scroll:!1},fe={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class p extends z{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return he}static get DefaultType(){return fe}static get NAME(){return te}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||r.trigger(this._element,oe,{relatedTarget:t}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new P().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(rt);const n=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(ot),this._element.classList.remove(rt),r.trigger(this._element,re,{relatedTarget:t})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown||r.trigger(this._element,ae).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(at),this._backdrop.hide();const e=()=>{this._element.classList.remove(ot,at),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new P().reset(),r.trigger(this._element,Dt)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{if(this._config.backdrop==="static"){r.trigger(this._element,ct);return}this.hide()},e=!!this._config.backdrop;return new Nt({className:ie,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?t:null})}_initializeFocusTrap(){return new Tt({trapElement:this._element})}_addEventListeners(){r.on(this._element,ue,t=>{if(t.key===ne){if(this._config.keyboard){this.hide();return}r.trigger(this._element,ct)}})}static jQueryInterface(t){return this.each(function(){const e=p.getOrCreateInstance(this,t);if(typeof t=="string"){if(e[t]===void 0||t.startsWith("_")||t==="constructor")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}r.on(document,le,de,function(s){const t=l.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&s.preventDefault(),Y(this))return;r.one(t,Dt,()=>{W(this)&&this.focus()});const e=l.findOne(wt);e&&e!==t&&p.getInstance(e).hide(),p.getOrCreateInstance(t).toggle(this)});r.on(window,se,()=>{for(const s of l.find(wt))p.getOrCreateInstance(s).show()});r.on(window,ce,()=>{for(const s of l.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(s).position!=="fixed"&&p.getOrCreateInstance(s).hide()});q(p);x(p);const _e="toast",me="bs.toast",g=`.${me}`,Ee=`mouseover${g}`,pe=`mouseout${g}`,ge=`focusin${g}`,be=`focusout${g}`,Ae=`hide${g}`,ye=`hidden${g}`,Ne=`show${g}`,Te=`shown${g}`,Se="fade",lt="hide",D="show",v="showing",we={animation:"boolean",autohide:"boolean",delay:"number"},De={animation:!0,autohide:!0,delay:5e3};class O extends z{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return De}static get DefaultType(){return we}static get NAME(){return _e}show(){if(r.trigger(this._element,Ne).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Se);const e=()=>{this._element.classList.remove(v),r.trigger(this._element,Te),this._maybeScheduleHide()};this._element.classList.remove(lt),F(this._element),this._element.classList.add(D,v),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||r.trigger(this._element,Ae).defaultPrevented)return;const e=()=>{this._element.classList.add(lt),this._element.classList.remove(v,D),r.trigger(this._element,ye)};this._element.classList.add(v),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(D),super.dispose()}isShown(){return this._element.classList.contains(D)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const n=t.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){r.on(this._element,Ee,t=>this._onInteraction(t,!0)),r.on(this._element,pe,t=>this._onInteraction(t,!1)),r.on(this._element,ge,t=>this._onInteraction(t,!0)),r.on(this._element,be,t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each(function(){const e=O.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof e[t]>"u")throw new TypeError(`No method named "${t}"`);e[t](this)}})}}q(O);x(O);const ve="modal",Ce="bs.modal",u=`.${Ce}`,Oe=".data-api",$e="Escape",ke=`hide${u}`,Le=`hidePrevented${u}`,vt=`hidden${u}`,Ct=`show${u}`,Ie=`shown${u}`,Me=`resize${u}`,Ve=`click.dismiss${u}`,Ke=`mousedown.dismiss${u}`,Re=`keydown.dismiss${u}`,He=`click${u}${Oe}`,ut="modal-open",Pe="fade",dt="show",V="modal-static",We=".modal.show",Ye=".modal-dialog",Fe=".modal-body",xe='[data-bs-toggle="modal"]',Be={backdrop:!0,focus:!0,keyboard:!0},je={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class T extends z{constructor(t,e){super(t,e),this._dialog=l.findOne(Ye,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new P,this._addEventListeners()}static get Default(){return Be}static get DefaultType(){return je}static get NAME(){return ve}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||r.trigger(this._element,Ct,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(ut),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){!this._isShown||this._isTransitioning||r.trigger(this._element,ke).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(dt),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){r.off(window,u),r.off(this._dialog,u),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Nt({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Tt({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=l.findOne(Fe,this._dialog);e&&(e.scrollTop=0),F(this._element),this._element.classList.add(dt);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,r.trigger(this._element,Ie,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){r.on(this._element,Re,t=>{if(t.key===$e){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),r.on(window,Me,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),r.on(this._element,Ke,t=>{r.one(this._element,Ve,e=>{if(!(this._element!==t.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ut),this._resetAdjustments(),this._scrollBar.reset(),r.trigger(this._element,vt)})}_isAnimated(){return this._element.classList.contains(Pe)}_triggerBackdropTransition(){if(r.trigger(this._element,Le).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._element.style.overflowY;n==="hidden"||this._element.classList.contains(V)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(V),this._queueCallback(()=>{this._element.classList.remove(V),this._queueCallback(()=>{this._element.style.overflowY=n},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),n=e>0;if(n&&!t){const i=Q()?"paddingLeft":"paddingRight";this._element.style[i]=`${e}px`}if(!n&&t){const i=Q()?"paddingRight":"paddingLeft";this._element.style[i]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each(function(){const n=T.getOrCreateInstance(this,t);if(typeof t=="string"){if(typeof n[t]>"u")throw new TypeError(`No method named "${t}"`);n[t](e)}})}}r.on(document,He,xe,function(s){const t=l.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&s.preventDefault(),r.one(t,Ct,i=>{i.defaultPrevented||r.one(t,vt,()=>{W(this)&&this.focus()})});const e=l.findOne(We);e&&T.getInstance(e).hide(),T.getOrCreateInstance(t).toggle(this)});q(T);x(T);export{T as M,p as O,O as T};
//# sourceMappingURL=m3fc8d974e5d8216d.js.map
