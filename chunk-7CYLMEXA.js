import{a as yn,d as Mi,g as Ii,i as Se,j as Ai}from"./chunk-3ELDVMG2.js";import{Aa as yi,Ab as Yt,B as lt,Ba as wi,C as Tt,Ca as xi,Cb as Y,D as fn,E as gn,Eb as ft,F as bi,Fb as A,Gb as d,Hb as Et,Ib as gt,J as _i,Jb as S,Kb as F,L as Ce,M as Rt,Na as mt,O as V,Oa as ut,Ob as vn,Pb as Xt,Q as Ot,Qb as f,R as kt,Rb as Jt,Sb as Nt,T as rt,Ta as Ct,U as u,V as b,Va as Dt,Vb as B,Wa as it,X as m,Xa as C,Y as Wt,Yb as X,Z as s,Zb as bt,_b as Ci,a as g,aa as vi,b as H,bb as p,ca as $t,cb as _,d as xt,da as qt,db as l,dc as _t,f as ct,fb as y,fc as U,g as h,ga as N,gc as Di,h as mi,ha as E,ia as Vt,ib as bn,ic as Ei,jb as ki,k as ui,ka as L,l as nt,la as w,lb as Ie,m as hi,ma as De,mb as j,nb as ht,ob as pt,p as M,pa as I,q as pi,s as fi,sa as Ee,sb as _n,ta as dt,tb as O,u as xe,ua as G,ub as P,va as k,vb as Ae,w as ke,wa as Zt,wb as Kt,x as K,xb as Qt,y as pn,ya as Me,yb as Q,z as gi}from"./chunk-GSGINMDV.js";var wn;try{wn=typeof Intl<"u"&&Intl.v8BreakIterator}catch{wn=!1}var D=(()=>{class n{_platformId=s(yi);isBrowser=this._platformId?Mi(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||wn)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xn(n){return Array.isArray(n)?n:[n]}var Si=new Set,Mt,Fe=(()=>{class n{_platform=s(D);_nonce=s(xi,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):fo}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&po(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function po(n,i){if(!Si.has(n))try{Mt||(Mt=document.createElement("style"),i&&Mt.setAttribute("nonce",i),Mt.setAttribute("type","text/css"),document.head.appendChild(Mt)),Mt.sheet&&(Mt.sheet.insertRule(`@media ${n} {body{ }}`,0),Si.add(n))}catch(t){console.error(t)}}function fo(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var te=(()=>{class n{_mediaMatcher=s(Fe);_zone=s(w);_queries=new Map;_destroySubject=new h;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Fi(xn(t)).some(r=>this._registerQuery(r).mql.matches)}observe(t){let r=Fi(xn(t)).map(a=>this._registerQuery(a).observable),o=pi(r);return o=fi(o.pipe(Tt(1)),o.pipe(Ce(1),lt(0))),o.pipe(M(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:v,query:z})=>{c.matches=c.matches||v,c.breakpoints[z]=v}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),o={observable:new ct(a=>{let c=v=>this._zone.run(()=>a.next(v));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(Rt(e),M(({matches:a})=>({query:t,matches:a})),V(this._destroySubject)),mql:e};return this._queries.set(t,o),o}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Fi(n){return n.map(i=>i.split(",")).reduce((i,t)=>i.concat(t)).map(i=>i.trim())}var kn={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function ee(n){return n.buttons===0||n.detail===0}function ne(n){let i=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Cn;function Ti(){if(Cn==null){let n=typeof document<"u"?document.head:null;Cn=!!(n&&(n.createShadowRoot||n.attachShadow))}return Cn}function Dn(n){if(Ti()){let i=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function Ri(){let n=typeof document<"u"&&document?document.activeElement:null;for(;n&&n.shadowRoot;){let i=n.shadowRoot.activeElement;if(i===n)break;n=i}return n}function J(n){return n.composedPath?n.composedPath()[0]:n.target}var ie;function Oi(){if(ie==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>ie=!0}))}finally{ie=ie||!1}return ie}function Lt(n){return Oi()?n:!!n.capture}function ot(n,i=0){return Vi(n)?Number(n):arguments.length===2?i:0}function Vi(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function $(n){return n instanceof k?n.nativeElement:n}var Ni=new m("cdk-input-modality-detector-options"),Li={ignoreKeys:[18,17,224,91,16]},Pi=650,En={passive:!0,capture:!0},Bi=(()=>{class n{_platform=s(D);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new mi(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=J(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Pi||(this._modality.next(ee(t)?"keyboard":"mouse"),this._mostRecentTarget=J(t))};_onTouchstart=t=>{if(ne(t)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=J(t)};constructor(){let t=s(w),e=s(E),r=s(Ni,{optional:!0});if(this._options=g(g({},Li),r),this.modalityDetected=this._modality.pipe(Ce(1)),this.modalityChanged=this.modalityDetected.pipe(gn()),this._platform.isBrowser){let o=s(Dt).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[o.listen(e,"keydown",this._onKeydown,En),o.listen(e,"mousedown",this._onMousedown,En),o.listen(e,"touchstart",this._onTouchstart,En)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),re=(function(n){return n[n.IMMEDIATE=0]="IMMEDIATE",n[n.EVENTUAL=1]="EVENTUAL",n})(re||{}),zi=new m("cdk-focus-monitor-default-options"),Te=Lt({passive:!0,capture:!0}),oe=(()=>{class n{_ngZone=s(w);_platform=s(D);_inputModalityDetector=s(Bi);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s(E);_stopInputModalityDetector=new h;constructor(){let t=s(zi,{optional:!0});this._detectionMode=t?.detectionMode||re.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=J(t);for(let r=e;r;r=r.parentElement)t.type==="focus"?this._onFocus(t,r):this._onBlur(t,r)};monitor(t,e=!1){let r=$(t);if(!this._platform.isBrowser||r.nodeType!==1)return nt();let o=Dn(r)||this._document,a=this._elementInfo.get(r);if(a)return e&&(a.checkChildren=!0),a.subject;let c={checkChildren:e,subject:new h,rootNode:o};return this._elementInfo.set(r,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=$(t),r=this._elementInfo.get(e);r&&(r.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(r))}focusVia(t,e,r){let o=$(t),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([c,v])=>this._originChanged(c,e,v)):(this._setOrigin(e),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===re.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle("cdk-focused",!!e),t.classList.toggle("cdk-touch-focused",e==="touch"),t.classList.toggle("cdk-keyboard-focused",e==="keyboard"),t.classList.toggle("cdk-mouse-focused",e==="mouse"),t.classList.toggle("cdk-program-focused",e==="program")}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&e,this._detectionMode===re.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Pi:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(t,e){let r=this._elementInfo.get(e),o=J(t);!r||!r.checkChildren&&e!==o||this._originChanged(e,this._getFocusOrigin(o),r)}_onBlur(t,e){let r=this._elementInfo.get(e);!r||r.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(r,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,r=this._rootNodeFocusListenerCount.get(e)||0;r||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,Te),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,Te)}),this._rootNodeFocusListenerCount.set(e,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(V(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let r=this._rootNodeFocusListenerCount.get(e);r>1?this._rootNodeFocusListenerCount.set(e,r-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Te),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Te),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,r){this._setClasses(t,e),this._emitOrigin(r,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((r,o)=>{(o===t||r.checkChildren&&o.contains(t))&&e.push([o,r])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!e||e===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let o=t.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(e))return!0}return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Re=new WeakMap,tt=(()=>{class n{_appRef;_injector=s(N);_environmentInjector=s(vi);load(t){let e=this._appRef=this._appRef||this._injector.get(Ie),r=Re.get(e);r||(r={loaders:new Set,refs:[]},Re.set(e,r),e.onDestroy(()=>{Re.get(e)?.refs.forEach(o=>o.destroy()),Re.delete(e)})),r.loaders.has(t)||(r.loaders.add(t),r.refs.push(Ei(t,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ve=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(e,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return n})(),Oe;function go(){if(Oe===void 0&&(Oe=null,typeof window<"u")){let n=window;n.trustedTypes!==void 0&&(Oe=n.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Oe}function It(n){return go()?.createHTML(n)||n}function ji(n,i,t){let e=t.sanitize(mt.HTML,i);n.innerHTML=It(e||"")}function bo(n){if(n.type==="characterData"&&n.target instanceof Comment)return!0;if(n.type==="childList"){for(let i=0;i<n.addedNodes.length;i++)if(!(n.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<n.removedNodes.length;i++)if(!(n.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var Ui=(()=>{class n{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Hi=(()=>{class n{_mutationObserverFactory=s(Ui);_observedElements=new Map;_ngZone=s(w);constructor(){}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){let e=$(t);return new ct(r=>{let a=this._observeElement(e).pipe(M(c=>c.filter(v=>!bo(v))),K(c=>!!c.length)).subscribe(c=>{this._ngZone.run(()=>{r.next(c)})});return()=>{a.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(t))this._observedElements.get(t).count++;else{let e=new h,r=this._mutationObserverFactory.create(o=>e.next(o));r&&r.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:r,stream:e,count:1})}return this._observedElements.get(t).stream})}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){let{observer:e,stream:r}=this._observedElements.get(t);e&&e.disconnect(),r.complete(),this._observedElements.delete(t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Gi=(()=>{class n{_contentObserver=s(Hi);_elementRef=s(k);event=new L;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(t){this._debounce=ot(t),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let t=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?t.pipe(lt(this.debounce)):t).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",U],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return n})(),Ne=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({providers:[Ui]})}return n})();var Pe=(()=>{class n{_platform=s(D);constructor(){}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return vo(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=_o(Mo(t));if(e&&(Wi(e)===-1||!this.isVisible(e)))return!1;let r=t.nodeName.toLowerCase(),o=Wi(t);return t.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Do(t)?!1:r==="audio"?t.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,e){return Eo(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function _o(n){try{return n.frameElement}catch{return null}}function vo(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects=="function"&&n.getClientRects().length)}function yo(n){let i=n.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function wo(n){return ko(n)&&n.type=="hidden"}function xo(n){return Co(n)&&n.hasAttribute("href")}function ko(n){return n.nodeName.toLowerCase()=="input"}function Co(n){return n.nodeName.toLowerCase()=="a"}function Zi(n){if(!n.hasAttribute("tabindex")||n.tabIndex===void 0)return!1;let i=n.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function Wi(n){if(!Zi(n))return null;let i=parseInt(n.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Do(n){let i=n.nodeName.toLowerCase(),t=i==="input"&&n.type;return t==="text"||t==="password"||i==="select"||i==="textarea"}function Eo(n){return wo(n)?!1:yo(n)||xo(n)||n.hasAttribute("contenteditable")||Zi(n)}function Mo(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Le=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,t,e,r,o=!1,a){this._element=i,this._checker=t,this._ngZone=e,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,t=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),t&&(t.removeEventListener("focus",this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let t=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let t=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(t){if(!this._checker.isFocusable(t)){let e=this._getFirstTabbableElement(t);return e?.focus(i),!!e}return t.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let t=this._getRegionBoundary("start");return t&&t.focus(i),!!t}focusLastTabbableElement(i){let t=this._getRegionBoundary("end");return t&&t.focus(i),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=0;e<t.length;e++){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[e]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let t=i.children;for(let e=t.length-1;e>=0;e--){let r=t[e].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[e]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,t){i?t.setAttribute("tabindex","0"):t.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?Ct(i,{injector:this._injector}):setTimeout(i)}},In=(()=>{class n{_checker=s(Pe);_ngZone=s(w);_document=s(E);_injector=s(N);constructor(){s(tt).load(Ve)}create(t,e=!1){return new Le(t,this._checker,this._ngZone,this._document,e,this._injector)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ki=new m("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Qi=new m("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Io=0,Ao=(()=>{class n{_ngZone=s(w);_defaultOptions=s(Qi,{optional:!0});_liveElement;_document=s(E);_sanitizer=s(Se);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=s(Ki,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let r=this._defaultOptions,o,a;return e.length===1&&typeof e[0]=="number"?a=e[0]:[o,a]=e,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t=="string"?this._liveElement.textContent=t:ji(this._liveElement,t,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t="cdk-live-announcer-element",e=this._document.getElementsByClassName(t),r=this._document.createElement("div");for(let o=0;o<e.length;o++)e[o].remove();return r.classList.add(t),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Io++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<e.length;r++){let o=e[r],a=o.getAttribute("aria-owns");a?a.indexOf(t)===-1&&o.setAttribute("aria-owns",a+" "+t):o.setAttribute("aria-owns",t)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var vt=(function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n})(vt||{}),$i="cdk-high-contrast-black-on-white",qi="cdk-high-contrast-white-on-black",Mn="cdk-high-contrast-active",Yi=(()=>{class n{_platform=s(D);_hasCheckedHighContrastMode=!1;_document=s(E);_breakpointSubscription;constructor(){this._breakpointSubscription=s(te).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return vt.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,r=e&&e.getComputedStyle?e.getComputedStyle(t):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(t.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return vt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return vt.BLACK_ON_WHITE}return vt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Mn,$i,qi),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===vt.BLACK_ON_WHITE?t.add(Mn,$i):e===vt.WHITE_ON_BLACK&&t.add(Mn,qi)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),So=(()=>{class n{constructor(){s(Yi)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[Ne]})}return n})();var Fo=200,Be=class{_letterKeyStream=new h;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new h;selectedItem=this._selectedItem;constructor(i,t){let e=typeof t?.debounceInterval=="number"?t.debounceInterval:Fo;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(i),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(i){this._selectedItemIndex=i}setItems(i){this._items=i}handleKey(i){let t=i.keyCode;i.key&&i.key.length===1?this._letterKeyStream.next(i.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(i){this._letterKeyStream.pipe(Ot(t=>this._pressedLetters.push(t)),lt(i),K(()=>this._pressedLetters.length>0),M(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let r=(this._selectedItemIndex+e)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ze(n,...i){return i.length?i.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var je=class{_items;_activeItemIndex=I(-1);_activeItem=I(null);_wrap=!1;_typeaheadSubscription=xt.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=i=>i.disabled;constructor(i,t){this._items=i,i instanceof Zt?this._itemChangesSubscription=i.changes.subscribe(e=>this._itemsChanged(e.toArray())):bn(i)&&(this._effectRef=Ee(()=>this._itemsChanged(i()),{injector:t}))}tabOut=new h;change=new h;skipPredicate(i){return this._skipPredicateFn=i,this}withWrap(i=!0){return this._wrap=i,this}withVerticalOrientation(i=!0){return this._vertical=i,this}withHorizontalOrientation(i){return this._horizontal=i,this}withAllowedModifierKeys(i){return this._allowedModifierKeys=i,this}withTypeAhead(i=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new Be(t,{debounceInterval:typeof i=="number"?i:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(i=!0){return this._homeAndEnd=i,this}withPageUpDown(i=!0,t=10){return this._pageUpAndDown={enabled:i,delta:t},this}setActiveItem(i){let t=this._activeItem();this.updateActiveItem(i),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(i){let t=i.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!i[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break}else return;default:(r||ze(i,"shiftKey"))&&this._typeahead?.handleKey(i);return}this._typeahead?.reset(),i.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(i){let t=this._getItemsArray(),e=typeof i=="number"?i:t.indexOf(i),r=t[e];this._activeItem.set(r??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(i){this._wrap?this._setActiveInWrapMode(i):this._setActiveInDefaultMode(i)}_setActiveInWrapMode(i){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let r=(this._activeItemIndex()+i*e+t.length)%t.length,o=t[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return}}}_setActiveInDefaultMode(i){this._setActiveItemByIndex(this._activeItemIndex()+i,i)}_setActiveItemByIndex(i,t){let e=this._getItemsArray();if(e[i]){for(;this._skipPredicateFn(e[i]);)if(i+=t,!e[i])return;this.setActiveItem(i)}}_getItemsArray(){return bn(this._items)?this._items():this._items instanceof Zt?this._items.toArray():this._items}_itemsChanged(i){this._typeahead?.setItems(i);let t=this._activeItem();if(t){let e=i.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var An=class extends je{setActiveItem(i){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(i),this.activeItem&&this.activeItem.setActiveStyles()}};var Sn={},Fn=class n{_appId=s(Me);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,t=!1){return this._appId!=="ng"&&(i+=this._appId),Sn.hasOwnProperty(i)||(Sn[i]=0),`${i}${t?n._infix+"-":""}${Sn[i]++}`}static \u0275fac=function(t){return new(t||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})};var Ji=" ";function To(n,i,t){let e=He(n,i);t=t.trim(),!e.some(r=>r.trim()===t)&&(e.push(t),n.setAttribute(i,e.join(Ji)))}function Ro(n,i,t){let e=He(n,i);t=t.trim();let r=e.filter(o=>o!==t);r.length?n.setAttribute(i,r.join(Ji)):n.removeAttribute(i)}function He(n,i){return n.getAttribute(i)?.match(/\S+/g)??[]}var tr="cdk-describedby-message",Ue="cdk-describedby-host",Rn=0,gl=(()=>{class n{_platform=s(D);_document=s(E);_messageRegistry=new Map;_messagesContainer=null;_id=`${Rn++}`;constructor(){s(tt).load(Ve),this._id=s(Me)+"-"+Rn++}describe(t,e,r){if(!this._canBeDescribed(t,e))return;let o=Tn(e,r);typeof e!="string"?(Xi(e,this._id),this._messageRegistry.set(o,{messageElement:e,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(e,r),this._isElementDescribedByMessage(t,o)||this._addMessageReference(t,o)}removeDescription(t,e,r){if(!e||!this._isElementNode(t))return;let o=Tn(e,r);if(this._isElementDescribedByMessage(t,o)&&this._removeMessageReference(t,o),typeof e=="string"){let a=this._messageRegistry.get(o);a&&a.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${Ue}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(Ue);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let r=this._document.createElement("div");Xi(r,this._id),r.textContent=t,e&&r.setAttribute("role",e),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Tn(t,e),{messageElement:r,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t="cdk-describedby-message-container",e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let o=0;o<e.length;o++)e[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(t),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(t){let e=He(t,"aria-describedby").filter(r=>r.indexOf(tr)!=0);t.setAttribute("aria-describedby",e.join(" "))}_addMessageReference(t,e){let r=this._messageRegistry.get(e);To(t,"aria-describedby",r.messageElement.id),t.setAttribute(Ue,this._id),r.referenceCount++}_removeMessageReference(t,e){let r=this._messageRegistry.get(e);r.referenceCount--,Ro(t,"aria-describedby",r.messageElement.id),t.removeAttribute(Ue)}_isElementDescribedByMessage(t,e){let r=He(t,"aria-describedby"),o=this._messageRegistry.get(e),a=o&&o.messageElement.id;return!!a&&r.indexOf(a)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e=="object")return!0;let r=e==null?"":`${e}`.trim(),o=t.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tn(n,i){return typeof n=="string"?`${i||""}/${n}`:n}function Xi(n,i){n.id||(n.id=`${tr}-${i}-${Rn++}`)}var Oo=new m("cdk-dir-doc",{providedIn:"root",factory:()=>s(E)}),Vo=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function er(n){let i=n?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?Vo.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var ae=(()=>{class n{get value(){return this.valueSignal()}valueSignal=I("ltr");change=new L;constructor(){let t=s(Oo,{optional:!0});if(t){let e=t.body?t.body.dir:null,r=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(er(e||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var T=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({})}return n})();function Il(n){return n==null?"":typeof n=="string"?n:`${n}px`}function W(n){return n!=null&&`${n}`!="false"}var et=(function(n){return n[n.NORMAL=0]="NORMAL",n[n.NEGATED=1]="NEGATED",n[n.INVERTED=2]="INVERTED",n})(et||{}),Ge,At;function nr(){if(At==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return At=!1,At;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)At=!0;else{let n=Element.prototype.scrollTo;n?At=!/\{\s*\[native code\]\s*\}/.test(n.toString()):At=!1}}return At}function Pt(){if(typeof document!="object"||!document)return et.NORMAL;if(Ge==null){let n=document.createElement("div"),i=n.style;n.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let t=document.createElement("div"),e=t.style;e.width="2px",e.height="1px",n.appendChild(t),document.body.appendChild(n),Ge=et.NORMAL,n.scrollLeft===0&&(n.scrollLeft=1,Ge=n.scrollLeft===0?et.NEGATED:et.INVERTED),n.remove()}return Ge}function Rl(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var Bt,ir=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Vl(){if(Bt)return Bt;if(typeof document!="object"||!document)return Bt=new Set(ir),Bt;let n=document.createElement("input");return Bt=new Set(ir.filter(i=>(n.setAttribute("type",i),n.type===i))),Bt}var No=20,On=(()=>{class n{_ngZone=s(w);_platform=s(D);_renderer=s(Dt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new h;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let e=this.scrollContainers.get(t);e&&(e.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=No){return this._platform.isBrowser?new ct(e=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=t>0?this._scrolled.pipe(pn(t)).subscribe(e):this._scrolled.subscribe(e);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):nt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,e)=>this.deregister(e)),this._scrolled.complete()}ancestorScrolled(t,e){let r=this.getAncestorScrollContainers(t);return this.scrolled(e).pipe(K(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(t){let e=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,t)&&e.push(o)}),e}_scrollableContainsElement(t,e){let r=$(e),o=t.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),zt=(()=>{class n{elementRef=s(k);scrollDispatcher=s(On);ngZone=s(w);dir=s(ae,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new h;_renderer=s(it);_cleanupScroll;_elementScrolled=new h;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",t=>this._elementScrolled.next(t))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(t){let e=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";t.left==null&&(t.left=r?t.end:t.start),t.right==null&&(t.right=r?t.start:t.end),t.bottom!=null&&(t.top=e.scrollHeight-e.clientHeight-t.bottom),r&&Pt()!=et.NORMAL?(t.left!=null&&(t.right=e.scrollWidth-e.clientWidth-t.left),Pt()==et.INVERTED?t.left=t.right:Pt()==et.NEGATED&&(t.left=t.right?-t.right:t.right)):t.right!=null&&(t.left=e.scrollWidth-e.clientWidth-t.right),this._applyScrollToOptions(t)}_applyScrollToOptions(t){let e=this.elementRef.nativeElement;nr()?e.scrollTo(t):(t.top!=null&&(e.scrollTop=t.top),t.left!=null&&(e.scrollLeft=t.left))}measureScrollOffset(t){let e="left",r="right",o=this.elementRef.nativeElement;if(t=="top")return o.scrollTop;if(t=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return t=="start"?t=a?r:e:t=="end"&&(t=a?e:r),a&&Pt()==et.INVERTED?t==e?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Pt()==et.NEGATED?t==e?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:t==e?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),Lo=20,rr=(()=>{class n{_platform=s(D);_listeners;_viewportSize=null;_change=new h;_document=s(E);constructor(){let t=s(w),e=s(Dt).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[e.listen("window","resize",r),e.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:e,height:r}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+r,right:t.left+e,height:r,width:e}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,e=this._getWindow(),r=t.documentElement,o=r.getBoundingClientRect(),a=-o.top||t.body?.scrollTop||e.scrollY||r.scrollTop||0,c=-o.left||t.body?.scrollLeft||e.scrollX||r.scrollLeft||0;return{top:a,left:c}}change(t=Lo){return t>0?this._change.pipe(pn(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var se=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({})}return n})(),ud=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T,se,T,se]})}return n})();var Po=new m("MATERIAL_ANIMATIONS"),or=null;function Bo(){return s(Po,{optional:!0})?.animationsDisabled||s(wi,{optional:!0})==="NoopAnimations"?"di-disabled":(or??=s(Fe).matchMedia("(prefers-reduced-motion)").matches,or?"reduced-motion":"enabled")}function q(){return Bo()!=="enabled"}var qe=["*"],jo=["content"],Uo=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Ho=["mat-drawer","mat-drawer-content","*"];function Go(n,i){if(n&1){let t=Yt();O(0,"div",1),Y("click",function(){$t(t);let r=ft();return qt(r._onBackdropClicked())}),P()}if(n&2){let t=ft();f("mat-drawer-shown",t._isShowingBackdrop())}}function Wo(n,i){n&1&&(O(0,"mat-drawer-content"),d(1,2),P())}var $o=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],qo=["mat-sidenav","mat-sidenav-content","*"];function Zo(n,i){if(n&1){let t=Yt();O(0,"div",1),Y("click",function(){$t(t);let r=ft();return qt(r._onBackdropClicked())}),P()}if(n&2){let t=ft();f("mat-drawer-shown",t._isShowingBackdrop())}}function Ko(n,i){n&1&&(O(0,"mat-sidenav-content"),d(1,2),P())}var Qo=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Yo=new m("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Ln=new m("MAT_DRAWER_CONTAINER"),We=(()=>{class n extends zt{_platform=s(D);_changeDetectorRef=s(_t);_container=s(Nn);constructor(){let t=s(k),e=s(On),r=s(w);super(t,e,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:e}=this._container;return t!=null&&t.mode!=="over"&&t.opened||e!=null&&e.mode!=="over"&&e.opened}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(e,r){e&2&&(Xt("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),f("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[B([{provide:zt,useExisting:n}]),y],ngContentSelectors:qe,decls:1,vars:0,template:function(e,r){e&1&&(A(),d(0))},encapsulation:2,changeDetection:0})}return n})(),Vn=(()=>{class n{_elementRef=s(k);_focusTrapFactory=s(In);_focusMonitor=s(oe);_platform=s(D);_ngZone=s(w);_renderer=s(it);_interactivityChecker=s(Pe);_doc=s(E);_container=s(Ln,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=W(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=W(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(W(t))}_opened=I(!1);_openedVia=null;_animationStarted=new h;_animationEnd=new h;openedChange=new L(!0);_openedStream=this.openedChange.pipe(K(t=>t),M(()=>{}));openedStart=this._animationStarted.pipe(K(()=>this.opened),fn(void 0));_closedStream=this.openedChange.pipe(K(t=>!t),M(()=>{}));closedStart=this._animationStarted.pipe(K(()=>!this.opened),fn(void 0));_destroyed=new h;onPositionChanged=new L;_content;_modeChanged=new h;_injector=s(N);_changeDetectorRef=s(_t);constructor(){this.openedChange.pipe(V(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,e=this._elementRef.nativeElement;return[t.listen(e,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!ze(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(e,"transitionend",this._handleTransitionEvent),t.listen(e,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,e){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",r),a=this._renderer.listen(t,"mousedown",r)})),t.focus(e)}_focusByCssSelector(t,e){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,e)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Ct(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,e){t&&e&&(this._openedVia=e);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,e,r){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&e&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Tt(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let e=this._elementRef.nativeElement,r=e.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,e)),r.appendChild(e)):this._anchor&&this._anchor.parentNode.insertBefore(e,this._anchor)}_handleTransitionEvent=t=>{let e=this._elementRef.nativeElement;t.target===e&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer"]],viewQuery:function(e,r){if(e&1&&gt(jo,5),e&2){let o;S(o=F())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(e,r){e&2&&(j("align",null)("tabIndex",r.mode!=="side"?"-1":null),Xt("visibility",!r._container&&!r.opened?"hidden":null),f("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:qe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,r){e&1&&(A(),O(0,"div",1,0),d(2),P())},dependencies:[zt],encapsulation:2,changeDetection:0})}return n})(),Nn=(()=>{class n{_dir=s(ae,{optional:!0});_element=s(k);_ngZone=s(w);_changeDetectorRef=s(_t);_animationDisabled=q();_transitionsEnabled=!1;_allDrawers;_drawers=new Zt;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=W(t)}_autosize=s(Yo);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:W(t)}_backdropOverride=null;backdropClick=new L;_start=null;_end=null;_left=null;_right=null;_destroyed=new h;_doCheckSubject=new h;_contentMargins={left:null,right:null};_contentMarginChanges=new h;get scrollable(){return this._userContent||this._content}_injector=s(N);constructor(){let t=s(D),e=s(rr);this._dir?.change.pipe(V(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),e.change().pipe(V(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(Rt(this._allDrawers),V(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(e=>!e._container||e._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(Rt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(lt(10),V(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,e=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();t+=r,e-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")e+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();e+=r,t-=r}}t=t||null,e=e||null,(t!==this._contentMargins.left||e!==this._contentMargins.right)&&(this._contentMargins={left:t,right:e},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(V(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(V(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(V(this._drawers.changes)).subscribe(()=>{Ct({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(V(ke(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let e=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?e.add(r):e.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-drawer-container"]],contentQueries:function(e,r,o){if(e&1&&Et(o,We,5)(o,Vn,5),e&2){let a;S(a=F())&&(r._content=a.first),S(a=F())&&(r._allDrawers=a)}},viewQuery:function(e,r){if(e&1&&gt(We,5),e&2){let o;S(o=F())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(e,r){e&2&&f("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[B([{provide:Ln,useExisting:n}])],ngContentSelectors:Ho,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,r){e&1&&(A(Uo),ht(0,Go,1,2,"div",0),d(1),d(2,1),ht(3,Wo,2,0,"mat-drawer-content")),e&2&&(pt(r.hasBackdrop?0:-1),ut(3),pt(r._content?-1:3))},dependencies:[We],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return n})(),$e=(()=>{class n extends We{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[B([{provide:zt,useExisting:n}]),y],ngContentSelectors:qe,decls:1,vars:0,template:function(e,r){e&1&&(A(),d(0))},encapsulation:2,changeDetection:0})}return n})(),Pn=(()=>{class n extends Vn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=W(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ot(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ot(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(e,r){e&2&&(j("tabIndex",r.mode!=="side"?"-1":null)("align",null),Xt("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),f("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[B([{provide:Vn,useExisting:n}]),y],ngContentSelectors:qe,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(e,r){e&1&&(A(),O(0,"div",1,0),d(2),P())},dependencies:[zt],encapsulation:2,changeDetection:0})}return n})(),ar=(()=>{class n extends Nn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-sidenav-container"]],contentQueries:function(e,r,o){if(e&1&&Et(o,$e,5)(o,Pn,5),e&2){let a;S(a=F())&&(r._content=a.first),S(a=F())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(e,r){e&2&&f("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[B([{provide:Ln,useExisting:n},{provide:Nn,useExisting:n}]),y],ngContentSelectors:qo,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(e,r){e&1&&(A($o),ht(0,Zo,1,2,"div",0),d(1),d(2,1),ht(3,Ko,2,0,"mat-sidenav-content")),e&2&&(pt(r.hasBackdrop?0:-1),ut(3),pt(r._content?-1:3))},dependencies:[$e],styles:[Qo],encapsulation:2,changeDetection:0})}return n})(),sr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[se,T,se]})}return n})();var cr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T]})}return n})();function lr(n){return Error(`Unable to find icon with the name "${n}"`)}function Jo(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function dr(n){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`)}function mr(n){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`)}var at=class{url;svgText;options;svgElement=null;constructor(i,t,e){this.url=i,this.svgText=t,this.options=e}},hr=(()=>{class n{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(t,e,r,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=r}addSvgIcon(t,e,r){return this.addSvgIconInNamespace("",t,e,r)}addSvgIconLiteral(t,e,r){return this.addSvgIconLiteralInNamespace("",t,e,r)}addSvgIconInNamespace(t,e,r,o){return this._addSvgIconConfig(t,e,new at(r,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,r,o){let a=this._sanitizer.sanitize(mt.HTML,r);if(!a)throw mr(r);let c=It(a);return this._addSvgIconConfig(t,e,new at("",c,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,r){return this._addSvgIconSetConfig(t,new at(e,null,r))}addSvgIconSetLiteralInNamespace(t,e,r){let o=this._sanitizer.sanitize(mt.HTML,e);if(!o)throw mr(e);let a=It(o);return this._addSvgIconSetConfig(t,new at("",a,r))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(mt.RESOURCE_URL,t);if(!e)throw dr(t);let r=this._cachedIconsByUrl.get(e);return r?nt(Ze(r)):this._loadSvgIconFromConfig(new at(t,null)).pipe(Ot(o=>this._cachedIconsByUrl.set(e,o)),M(o=>Ze(o)))}getNamedSvgIcon(t,e=""){let r=ur(e,t),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(e);return a?this._getSvgFromIconSetConfigs(t,a):hi(lr(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?nt(Ze(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(M(e=>Ze(e)))}_getSvgFromIconSetConfigs(t,e){let r=this._extractIconWithNameFromAnySet(t,e);if(r)return nt(r);let o=e.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(gi(c=>{let z=`Loading icon set URL: ${this._sanitizer.sanitize(mt.RESOURCE_URL,a.url)} failed: ${c.message}`;return this._errorHandler.handleError(new Error(z)),nt(null)})));return xe(o).pipe(M(()=>{let a=this._extractIconWithNameFromAnySet(t,e);if(!a)throw lr(t);return a}))}_extractIconWithNameFromAnySet(t,e){for(let r=e.length-1;r>=0;r--){let o=e[r];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let a=this._svgElementFromConfig(o),c=this._extractSvgIconFromSet(a,t,o.options);if(c)return c}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Ot(e=>t.svgText=e),M(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?nt(null):this._fetchIcon(t).pipe(Ot(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,r){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let c=this._svgElementFromString(It("<svg></svg>"));return c.appendChild(a),this._setSvgAttributes(c,r)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let r=e.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(t){let e=this._svgElementFromString(It("<svg></svg>")),r=t.attributes;for(let o=0;o<r.length;o++){let{name:a,value:c}=r[o];a!=="id"&&e.setAttribute(a,c)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:r}=t,o=r?.withCredentials??!1;if(!this._httpClient)throw Jo();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let a=this._sanitizer.sanitize(mt.RESOURCE_URL,e);if(!a)throw dr(e);let c=this._inProgressUrlFetches.get(a);if(c)return c;let v=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(M(z=>It(z)),bi(()=>this._inProgressUrlFetches.delete(a)),_i());return this._inProgressUrlFetches.set(a,v),v}_addSvgIconConfig(t,e,r){return this._svgIconConfigs.set(ur(t,e),r),this}_addSvgIconSetConfig(t,e){let r=this._iconSetConfigs.get(t);return r?r.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](e,t);if(o)return ta(o)?new at(o.url,null,o.options):new at(o,null)}}static \u0275fac=function(e){return new(e||n)(Wt(Ii,8),Wt(Se),Wt(E,8),Wt(De))};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ze(n){return n.cloneNode(!0)}function ur(n,i){return n+":"+i}function ta(n){return!!(n.url&&n.options)}var ea=["*"],na=new m("MAT_ICON_DEFAULT_OPTIONS"),ia=new m("mat-icon-location",{providedIn:"root",factory:()=>{let n=s(E),i=n?n.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),pr=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ra=pr.map(n=>`[${n}]`).join(", "),oa=/^url\(['"]?#(.*?)['"]?\)$/,fr=(()=>{class n{_elementRef=s(k);_iconRegistry=s(hr);_location=s(ia);_errorHandler=s(De);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=xt.EMPTY;constructor(){let t=s(new Ci("aria-hidden"),{optional:!0}),e=s(na,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let r=t.childNodes[e];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>t.classList.remove(r)),e.forEach(r=>t.classList.add(r)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${t}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(ra),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)pr.forEach(a=>{let c=e[o],v=c.getAttribute(a),z=v?v.match(oa):null;if(z){let R=r.get(c);R||(R=[],r.set(c,R)),R.push({name:a,value:z[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,r]=this._splitIconName(t);e&&(this._svgNamespace=e),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,e).pipe(Tt(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${e}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,r){e&2&&(j("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Jt(r.color?"mat-"+r.color:""),f("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",U],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ea,decls:1,vars:0,template:function(e,r){e&1&&(A(),d(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return n})(),gr=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T]})}return n})();var Z=(function(n){return n[n.FADING_IN=0]="FADING_IN",n[n.VISIBLE=1]="VISIBLE",n[n.FADING_OUT=2]="FADING_OUT",n[n.HIDDEN=3]="HIDDEN",n})(Z||{}),Bn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Z.HIDDEN;constructor(i,t,e,r=!1){this._renderer=i,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},br=Lt({passive:!0,capture:!0}),zn=class{_events=new Map;addHandler(i,t,e,r){let o=this._events.get(t);if(o){let a=o.get(e);a?a.add(r):o.set(e,new Set([r]))}else this._events.set(t,new Map([[e,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,br)})}removeHandler(i,t,e){let r=this._events.get(i);if(!r)return;let o=r.get(t);o&&(o.delete(e),o.size===0&&r.delete(t),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,br)))}_delegateEventHandler=i=>{let t=J(i);t&&this._events.get(i.type)?.forEach((e,r)=>{(r===t||r.contains(t))&&e.forEach(o=>o.handleEvent(i))})}},ce={enterDuration:225,exitDuration:150},sa=800,_r=Lt({passive:!0,capture:!0}),vr=["mousedown","touchstart"],yr=["mouseup","mouseleave","touchend","touchcancel"],ca=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(e,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return n})(),St=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new zn;constructor(i,t,e,r,o){this._target=i,this._ngZone=t,this._platform=r,r.isBrowser&&(this._containerElement=$(e)),o&&o.get(tt).load(ca)}fadeInRipple(i,t,e={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},ce),e.animation);e.centered&&(i=r.left+r.width/2,t=r.top+r.height/2);let a=e.radius||la(i,t,r),c=i-r.left,v=t-r.top,z=o.enterDuration,R=document.createElement("div");R.classList.add("mat-ripple-element"),R.style.left=`${c-a}px`,R.style.top=`${v-a}px`,R.style.height=`${a*2}px`,R.style.width=`${a*2}px`,e.color!=null&&(R.style.backgroundColor=e.color),R.style.transitionDuration=`${z}ms`,this._containerElement.appendChild(R);let si=window.getComputedStyle(R),ho=si.transitionProperty,ci=si.transitionDuration,un=ho==="none"||ci==="0s"||ci==="0s, 0s"||r.width===0&&r.height===0,wt=new Bn(this,R,e,un);R.style.transform="scale3d(1, 1, 1)",wt.state=Z.FADING_IN,e.persistent||(this._mostRecentTransientRipple=wt);let we=null;return!un&&(z||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let li=()=>{we&&(we.fallbackTimer=null),clearTimeout(di),this._finishRippleTransition(wt)},hn=()=>this._destroyRipple(wt),di=setTimeout(hn,z+100);R.addEventListener("transitionend",li),R.addEventListener("transitioncancel",hn),we={onTransitionEnd:li,onTransitionCancel:hn,fallbackTimer:di}}),this._activeRipples.set(wt,we),(un||!z)&&this._finishRippleTransition(wt),wt}fadeOutRipple(i){if(i.state===Z.FADING_OUT||i.state===Z.HIDDEN)return;let t=i.element,e=g(g({},ce),i.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity="0",i.state=Z.FADING_OUT,(i._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let t=$(i);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,vr.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yr.forEach(t=>{this._triggerElement.addEventListener(t,this,_r)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Z.FADING_IN?this._startFadeOutTransition(i):i.state===Z.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let t=i===this._mostRecentTransientRipple,{persistent:e}=i.config;i.state=Z.VISIBLE,!e&&(!t||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let t=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Z.HIDDEN,t!==null&&(i.element.removeEventListener("transitionend",t.onTransitionEnd),i.element.removeEventListener("transitioncancel",t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),i.element.remove()}_onMousedown(i){let t=ee(i),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+sa;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!ne(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=i.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let t=i.state===Z.VISIBLE||i.config.terminateOnPointerUp&&i.state===Z.FADING_IN;!i.config.persistent&&t&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(vr.forEach(t=>n._eventManager.removeHandler(t,i,this)),this._pointerUpEventsRegistered&&(yr.forEach(t=>i.removeEventListener(t,this,_r)),this._pointerUpEventsRegistered=!1))}};function la(n,i,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),r=Math.max(Math.abs(i-t.top),Math.abs(i-t.bottom));return Math.sqrt(e*e+r*r)}var le=new m("mat-ripple-global-options"),fm=(()=>{class n{_elementRef=s(k);_animationsDisabled=q();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=s(w),e=s(D),r=s(le,{optional:!0}),o=s(N);this._globalOptions=r||{},this._rippleRenderer=new St(this,t,this._elementRef,e,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:g(g(g({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,r){return typeof t=="number"?this._rippleRenderer.fadeInRipple(t,e,g(g({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,g(g({},this.rippleConfig),t))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(e,r){e&2&&f("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return n})();var da={capture:!0},ma=["focus","mousedown","mouseenter","touchstart"],jn="mat-ripple-loader-uninitialized",Un="mat-ripple-loader-class-name",wr="mat-ripple-loader-centered",Ke="mat-ripple-loader-disabled",xr=(()=>{class n{_document=s(E);_animationsDisabled=q();_globalRippleOptions=s(le,{optional:!0});_platform=s(D);_ngZone=s(w);_injector=s(N);_eventCleanups;_hosts=new Map;constructor(){let t=s(Dt).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ma.map(e=>t.listen(this._document,e,this._onInteraction,da)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(jn,this._globalRippleOptions?.namespace??""),(e.className||!t.hasAttribute(Un))&&t.setAttribute(Un,e.className||""),e.centered&&t.setAttribute(wr,""),e.disabled&&t.setAttribute(Ke,"")}setDisabled(t,e){let r=this._hosts.get(t);r?(r.target.rippleDisabled=e,!e&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(t))):e?t.setAttribute(Ke,""):t.removeAttribute(Ke)}_onInteraction=t=>{let e=J(t);if(e instanceof HTMLElement){let r=e.closest(`[${jn}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(".mat-ripple")?.remove();let e=this._document.createElement("span");e.classList.add("mat-ripple",t.getAttribute(Un)),t.append(e);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??ce.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??ce.exitDuration,c={rippleDisabled:this._animationsDisabled||r?.disabled||t.hasAttribute(Ke),rippleConfig:{centered:t.hasAttribute(wr),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},v=new St(c,this._ngZone,e,this._platform,this._injector),z=!c.rippleDisabled;z&&v.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:v,hasSetUpEvents:z}),t.removeAttribute(jn)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Qe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["structural-styles"]],decls:0,vars:0,template:function(e,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var ua=["mat-icon-button",""],ha=["*"],pa=new m("MAT_BUTTON_CONFIG");function kr(n){return n==null?void 0:Di(n)}var de=(()=>{class n{_elementRef=s(k);_ngZone=s(w);_animationsDisabled=q();_config=s(pa,{optional:!0});_focusMonitor=s(oe);_cleanupClick;_renderer=s(it);_rippleLoader=s(xr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}constructor(){s(tt).load(Qe);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t="program",e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(e,r){e&2&&(j("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Jt(r.color?"mat-"+r.color:""),f("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",U],disabled:[2,"disabled","disabled",U],ariaDisabled:[2,"aria-disabled","ariaDisabled",U],disabledInteractive:[2,"disabledInteractive","disabledInteractive",U],tabIndex:[2,"tabIndex","tabIndex",kr],_tabindex:[2,"tabindex","_tabindex",kr]}})}return n})(),Hn=(()=>{class n extends de{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[y],attrs:ua,ngContentSelectors:ha,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,r){e&1&&(A(),Q(0,"span",0),d(1),Q(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();var Ye=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T]})}return n})();var fa=["matButton",""],Gn=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Wn=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],ga=["mat-fab",""],ba=["mat-mini-fab",""],_a=`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`,Cr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Zm=(()=>{class n extends de{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let t=va(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,r=this._appearance?Cr.get(this._appearance):null,o=Cr.get(t);r&&e.remove(...r),e.add(...o),this._appearance=t}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[y],attrs:fa,ngContentSelectors:Wn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,r){e&1&&(A(Gn),Q(0,"span",0),d(1),Kt(2,"span",1),d(3,1),Qt(),d(4,2),Q(5,"span",2)(6,"span",3)),e&2&&f("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return n})();function va(n){return n.hasAttribute("mat-raised-button")?"elevated":n.hasAttribute("mat-stroked-button")?"outlined":n.hasAttribute("mat-flat-button")?"filled":n.hasAttribute("mat-button")?"text":null}var Dr=new m("mat-mdc-fab-default-options",{providedIn:"root",factory:()=>me}),me={color:"accent"},Km=(()=>{class n extends de{_options=s(Dr,{optional:!0});_isFab=!0;extended=!1;constructor(){super(),this._options=this._options||me,this.color=this._options.color||me.color}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","mat-fab",""],["a","mat-fab",""],["button","matFab",""],["a","matFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mat-mdc-fab"],hostVars:4,hostBindings:function(e,r){e&2&&f("mdc-fab--extended",r.extended)("mat-mdc-extended-fab",r.extended)},inputs:{extended:[2,"extended","extended",U]},exportAs:["matButton","matAnchor"],features:[y],attrs:ga,ngContentSelectors:Wn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,r){e&1&&(A(Gn),Q(0,"span",0),d(1),Kt(2,"span",1),d(3,1),Qt(),d(4,2),Q(5,"span",2)(6,"span",3)),e&2&&f("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-fab-base {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  -moz-appearance: none;
  -webkit-appearance: none;
  overflow: visible;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-fab-base .mat-mdc-button-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple,
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-fab-base .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-fab-base .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-fab-base .mdc-button__label,
.mat-mdc-fab-base .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-fab-base .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-mdc-fab-base:focus-visible > .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-fab-base._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-fab-base::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mat-mdc-fab-base[hidden] {
  display: none;
}
.mat-mdc-fab-base::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mat-mdc-fab-base:active, .mat-mdc-fab-base:focus {
  outline: none;
}
.mat-mdc-fab-base:hover {
  cursor: pointer;
}
.mat-mdc-fab-base > svg {
  width: 100%;
}
.mat-mdc-fab-base .mat-icon, .mat-mdc-fab-base .material-icons {
  transition: transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);
  fill: currentColor;
  will-change: transform;
}
.mat-mdc-fab-base .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-fab-base[disabled], .mat-mdc-fab-base[disabled]:focus, .mat-mdc-fab-base.mat-mdc-button-disabled, .mat-mdc-fab-base.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-fab-base.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-fab {
  background-color: var(--mat-fab-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-container-shape, var(--mat-sys-corner-large));
  color: var(--mat-fab-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-fab:hover {
    box-shadow: var(--mat-fab-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-fab:focus {
  box-shadow: var(--mat-fab-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab:active, .mat-mdc-fab:focus:active {
  box-shadow: var(--mat-fab-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-fab[disabled], .mat-mdc-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-touch-target-size, 48px);
  display: var(--mat-fab-touch-target-display, block);
  left: 50%;
  width: var(--mat-fab-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-fab .mat-ripple-element {
  background-color: var(--mat-fab-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-disabled-state-layer-color);
}
.mat-mdc-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-mini-fab {
  width: 40px;
  height: 40px;
  background-color: var(--mat-fab-small-container-color, var(--mat-sys-primary-container));
  border-radius: var(--mat-fab-small-container-shape, var(--mat-sys-corner-medium));
  color: var(--mat-fab-small-foreground-color, var(--mat-sys-on-primary-container, inherit));
  box-shadow: var(--mat-fab-small-container-elevation-shadow, var(--mat-sys-level3));
}
@media (hover: hover) {
  .mat-mdc-mini-fab:hover {
    box-shadow: var(--mat-fab-small-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-mini-fab:focus {
  box-shadow: var(--mat-fab-small-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab:active, .mat-mdc-mini-fab:focus:active {
  box-shadow: var(--mat-fab-small-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-mini-fab[disabled], .mat-mdc-mini-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-fab-small-disabled-state-foreground-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-fab-small-disabled-state-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-mini-fab .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-fab-small-touch-target-size, 48px);
  display: var(--mat-fab-small-touch-target-display);
  left: 50%;
  width: var(--mat-fab-small-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-mini-fab .mat-ripple-element {
  background-color: var(--mat-fab-small-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-mini-fab .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-state-layer-color, var(--mat-sys-on-primary-container));
}
.mat-mdc-mini-fab.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-fab-small-disabled-state-layer-color);
}
.mat-mdc-mini-fab:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-mini-fab.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-mini-fab.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-mini-fab:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-fab-small-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}

.mat-mdc-extended-fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  padding-left: 20px;
  padding-right: 20px;
  width: auto;
  max-width: 100%;
  line-height: normal;
  box-shadow: var(--mat-fab-extended-container-elevation-shadow, var(--mat-sys-level3));
  height: var(--mat-fab-extended-container-height, 56px);
  border-radius: var(--mat-fab-extended-container-shape, var(--mat-sys-corner-large));
  font-family: var(--mat-fab-extended-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-fab-extended-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-fab-extended-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-fab-extended-label-text-tracking, var(--mat-sys-label-large-tracking));
}
@media (hover: hover) {
  .mat-mdc-extended-fab:hover {
    box-shadow: var(--mat-fab-extended-hover-container-elevation-shadow, var(--mat-sys-level4));
  }
}
.mat-mdc-extended-fab:focus {
  box-shadow: var(--mat-fab-extended-focus-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab:active, .mat-mdc-extended-fab:focus:active {
  box-shadow: var(--mat-fab-extended-pressed-container-elevation-shadow, var(--mat-sys-level3));
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-extended-fab[disabled], .mat-mdc-extended-fab[disabled]:focus, .mat-mdc-extended-fab.mat-mdc-button-disabled, .mat-mdc-extended-fab.mat-mdc-button-disabled:focus {
  box-shadow: none;
}
.mat-mdc-extended-fab.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
[dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .mat-icon, [dir=rtl] .mat-mdc-extended-fab .mdc-button__label + .material-icons,
.mat-mdc-extended-fab > .mat-icon,
.mat-mdc-extended-fab > .material-icons {
  margin-left: -8px;
  margin-right: 12px;
}
.mat-mdc-extended-fab .mdc-button__label + .mat-icon,
.mat-mdc-extended-fab .mdc-button__label + .material-icons, [dir=rtl] .mat-mdc-extended-fab > .mat-icon, [dir=rtl] .mat-mdc-extended-fab > .material-icons {
  margin-left: 12px;
  margin-right: -8px;
}
.mat-mdc-extended-fab .mat-mdc-button-touch-target {
  width: 100%;
}
`],encapsulation:2,changeDetection:0})}return n})(),Qm=(()=>{class n extends de{_options=s(Dr,{optional:!0});_isFab=!0;constructor(){super(),this._options=this._options||me,this.color=this._options.color||me.color}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["button","mat-mini-fab",""],["a","mat-mini-fab",""],["button","matMiniFab",""],["a","matMiniFab",""]],hostAttrs:[1,"mdc-fab","mat-mdc-fab-base","mdc-fab--mini","mat-mdc-mini-fab"],exportAs:["matButton","matAnchor"],features:[y],attrs:ba,ngContentSelectors:Wn,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(e,r){e&1&&(A(Gn),Q(0,"span",0),d(1),Kt(2,"span",1),d(3,1),Qt(),d(4,2),Q(5,"span",2)(6,"span",3)),e&2&&f("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[_a],encapsulation:2,changeDetection:0})}return n})();var Er=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[Ye,T]})}return n})();var $n=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new h;constructor(i=!1,t,e=!0,r){this._multiple=i,this._emitChanges=e,this.compareWith=r,t&&t.length&&(i?t.forEach(o=>this._markSelected(o)):this._markSelected(t[0]),this._selectedToEmit.length=0)}select(...i){this._verifyValueAssignment(i),i.forEach(e=>this._markSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}deselect(...i){this._verifyValueAssignment(i),i.forEach(e=>this._unmarkSelected(e));let t=this._hasQueuedChanges();return this._emitChangeEvent(),t}setSelection(...i){this._verifyValueAssignment(i);let t=this.selected,e=new Set(i.map(o=>this._getConcreteValue(o)));i.forEach(o=>this._markSelected(o)),t.filter(o=>!e.has(this._getConcreteValue(o,e))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(i){return this.isSelected(i)?this.deselect(i):this.select(i)}clear(i=!0){this._unmarkAll();let t=this._hasQueuedChanges();return i&&this._emitChangeEvent(),t}isSelected(i){return this._selection.has(this._getConcreteValue(i))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(i){this._multiple&&this.selected&&this._selected.sort(i)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(i){i=this._getConcreteValue(i),this.isSelected(i)||(this._multiple||this._unmarkAll(),this.isSelected(i)||this._selection.add(i),this._emitChanges&&this._selectedToEmit.push(i))}_unmarkSelected(i){i=this._getConcreteValue(i),this.isSelected(i)&&(this._selection.delete(i),this._emitChanges&&this._deselectedToEmit.push(i))}_unmarkAll(){this.isEmpty()||this._selection.forEach(i=>this._unmarkSelected(i))}_verifyValueAssignment(i){i.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(i,t){if(this.compareWith){t=t??this._selection;for(let e of t)if(this.compareWith(i,e))return e;return i}else return i}};var Nr=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,e){this._renderer=t,this._elementRef=e}setProperty(t,e){this._renderer.setProperty(this._elementRef.nativeElement,t,e)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(e){return new(e||n)(C(it),C(k))};static \u0275dir=l({type:n})}return n})(),wa=(()=>{class n extends Nr{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275dir=l({type:n,features:[y]})}return n})(),Qn=new m("");var xa={provide:Qn,useExisting:rt(()=>Lr),multi:!0};function ka(){let n=yn()?yn().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ca=new m(""),Lr=(()=>{class n extends Nr{_compositionMode;_composing=!1;constructor(t,e,r){super(t,e),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!ka())}writeValue(t){let e=t??"";this.setProperty("value",e)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(e){return new(e||n)(C(it),C(k),C(Ca,8))};static \u0275dir=l({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){e&1&&Y("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[B([xa]),y]})}return n})();function Yn(n){return n==null||Xn(n)===0}function Xn(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var ve=new m(""),ln=new m(""),Da=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Mr=class{static min(i){return Ea(i)}static max(i){return Ma(i)}static required(i){return Ia(i)}static requiredTrue(i){return Aa(i)}static email(i){return Sa(i)}static minLength(i){return Fa(i)}static maxLength(i){return Pr(i)}static pattern(i){return Ta(i)}static nullValidator(i){return Je()}static compose(i){return Gr(i)}static composeAsync(i){return Wr(i)}};function Ea(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t<n?{min:{min:n,actual:i.value}}:null}}function Ma(n){return i=>{if(i.value==null||n==null)return null;let t=parseFloat(i.value);return!isNaN(t)&&t>n?{max:{max:n,actual:i.value}}:null}}function Ia(n){return Yn(n.value)?{required:!0}:null}function Aa(n){return n.value===!0?null:{required:!0}}function Sa(n){return Yn(n.value)||Da.test(n.value)?null:{email:!0}}function Fa(n){return i=>{let t=i.value?.length??Xn(i.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Pr(n){return i=>{let t=i.value?.length??Xn(i.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function Ta(n){if(!n)return Je;let i,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),i=new RegExp(t)):(t=n.toString(),i=n),e=>{if(Yn(e.value))return null;let r=e.value;return i.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Je(n){return null}function Br(n){return n!=null}function zr(n){return ki(n)?ui(n):n}function jr(n){let i={};return n.forEach(t=>{i=t!=null?g(g({},i),t):i}),Object.keys(i).length===0?null:i}function Ur(n,i){return i.map(t=>t(n))}function Ra(n){return!n.validate}function Hr(n){return n.map(i=>Ra(i)?i:t=>i.validate(t))}function Gr(n){if(!n)return null;let i=n.filter(Br);return i.length==0?null:function(t){return jr(Ur(t,i))}}function Jn(n){return n!=null?Gr(Hr(n)):null}function Wr(n){if(!n)return null;let i=n.filter(Br);return i.length==0?null:function(t){let e=Ur(t,i).map(zr);return xe(e).pipe(M(jr))}}function ti(n){return n!=null?Wr(Hr(n)):null}function Ir(n,i){return n===null?[i]:Array.isArray(n)?[...n,i]:[n,i]}function $r(n){return n._rawValidators}function qr(n){return n._rawAsyncValidators}function qn(n){return n?Array.isArray(n)?n:[n]:[]}function tn(n,i){return Array.isArray(n)?n.includes(i):n===i}function Ar(n,i){let t=qn(i);return qn(n).forEach(r=>{tn(t,r)||t.push(r)}),t}function Sr(n,i){return qn(i).filter(t=>!tn(n,t))}var en=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Jn(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=ti(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,t){return this.control?this.control.hasError(i,t):!1}getError(i,t){return this.control?this.control.getError(i,t):null}},st=class extends en{name;get formDirective(){return null}get path(){return null}},Ft=class extends en{_parent=null;name=null;valueAccessor=null},nn=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var _u=(()=>{class n extends nn{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(C(Ft,2))};static \u0275dir=l({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){e&2&&f("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[y]})}return n})(),vu=(()=>{class n extends nn{constructor(t){super(t)}static \u0275fac=function(e){return new(e||n)(C(st,10))};static \u0275dir=l({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){e&2&&f("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[y]})}return n})();var ue="VALID",Xe="INVALID",jt="PENDING",he="DISABLED",yt=class{},rn=class extends yt{value;source;constructor(i,t){super(),this.value=i,this.source=t}},fe=class extends yt{pristine;source;constructor(i,t){super(),this.pristine=i,this.source=t}},ge=class extends yt{touched;source;constructor(i,t){super(),this.touched=i,this.source=t}},Ut=class extends yt{status;source;constructor(i,t){super(),this.status=i,this.source=t}},on=class extends yt{source;constructor(i){super(),this.source=i}},_e=class extends yt{source;constructor(i){super(),this.source=i}};function ei(n){return(dn(n)?n.validators:n)||null}function Oa(n){return Array.isArray(n)?Jn(n):n||null}function ni(n,i){return(dn(i)?i.asyncValidators:n)||null}function Va(n){return Array.isArray(n)?ti(n):n||null}function dn(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Zr(n,i,t){let e=n.controls;if(!(i?Object.keys(e):e).length)throw new kt(1e3,"");if(!e[t])throw new kt(1001,"")}function Kr(n,i,t){n._forEachChild((e,r)=>{if(t[r]===void 0)throw new kt(1002,"")})}var Ht=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,t){this._assignValidators(i),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return X(this.statusReactive)}set status(i){X(()=>this.statusReactive.set(i))}_status=bt(()=>this.statusReactive());statusReactive=I(void 0);get valid(){return this.status===ue}get invalid(){return this.status===Xe}get pending(){return this.status===jt}get disabled(){return this.status===he}get enabled(){return this.status!==he}errors;get pristine(){return X(this.pristineReactive)}set pristine(i){X(()=>this.pristineReactive.set(i))}_pristine=bt(()=>this.pristineReactive());pristineReactive=I(!0);get dirty(){return!this.pristine}get touched(){return X(this.touchedReactive)}set touched(i){X(()=>this.touchedReactive.set(i))}_touched=bt(()=>this.touchedReactive());touchedReactive=I(!1);get untouched(){return!this.touched}_events=new h;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Ar(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Ar(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(Sr(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(Sr(i,this._rawAsyncValidators))}hasValidator(i){return tn(this._rawValidators,i)}hasAsyncValidator(i){return tn(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let t=this.touched===!1;this.touched=!0;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(H(g({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new ge(!0,e))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(i))}markAsUntouched(i={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let e=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:e})}),i.onlySelf||this._parent?._updateTouched(i,e),t&&i.emitEvent!==!1&&this._events.next(new ge(!1,e))}markAsDirty(i={}){let t=this.pristine===!0;this.pristine=!1;let e=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(H(g({},i),{sourceControl:e})),t&&i.emitEvent!==!1&&this._events.next(new fe(!1,e))}markAsPristine(i={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let e=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,e),t&&i.emitEvent!==!1&&this._events.next(new fe(!0,e))}markAsPending(i={}){this.status=jt;let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Ut(this.status,t)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(H(g({},i),{sourceControl:t}))}disable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=he,this.errors=null,this._forEachChild(r=>{r.disable(H(g({},i),{onlySelf:!0}))}),this._updateValue();let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new rn(this.value,e)),this._events.next(new Ut(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(H(g({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let t=this._parentMarkedDirty(i.onlySelf);this.status=ue,this._forEachChild(e=>{e.enable(H(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(H(g({},i),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(i,t){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},t),this._parent?._updateTouched({},t))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let e=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ue||this.status===jt)&&this._runAsyncValidator(e,i.emitEvent)}let t=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new rn(this.value,t)),this._events.next(new Ut(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(H(g({},i),{sourceControl:t}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?he:ue}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,t){if(this.asyncValidator){this.status=jt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1,shouldHaveEmitted:i!==!1};let e=zr(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,t={}){this.errors=i,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(i){let t=i;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((e,r)=>e&&e._find(r),this)}getError(i,t){let e=t?this.get(t):this;return e?.errors?e.errors[i]:null}hasError(i,t){return!!this.getError(i,t)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,t,e){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||e)&&this._events.next(new Ut(this.status,t)),this._parent&&this._parent._updateControlsErrors(i,t,e)}_initObservables(){this.valueChanges=new L,this.statusChanges=new L}_calculateStatus(){return this._allControlsDisabled()?he:this.errors?Xe:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(jt)?jt:this._anyControlsHaveStatus(Xe)?Xe:ue}_anyControlsHaveStatus(i){return this._anyControls(t=>t.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,t){let e=!this._anyControlsDirty(),r=this.pristine!==e;this.pristine=e,i.onlySelf||this._parent?._updatePristine(i,t),r&&this._events.next(new fe(this.pristine,t))}_updateTouched(i={},t){this.touched=this._anyControlsTouched(),this._events.next(new ge(this.touched,t)),i.onlySelf||this._parent?._updateTouched(i,t)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){dn(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=Oa(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=Va(this._rawAsyncValidators)}},Gt=class extends Ht{constructor(i,t,e){super(ei(t),ni(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,t){return this.controls[i]?this.controls[i]:(this.controls[i]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(i,t,e={}){this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}removeControl(i,t={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(i,t,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],t&&this.registerControl(i,t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,t={}){Kr(this,!0,i),Object.keys(i).forEach(e=>{Zr(this,!0,e),this.controls[e].setValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(Object.keys(i).forEach(e=>{let r=this.controls[e];r&&r.patchValue(i[e],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i={},t={}){this._forEachChild((e,r)=>{e.reset(i?i[r]:null,H(g({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new _e(this))}getRawValue(){return this._reduceChildren({},(i,t,e)=>(i[e]=t.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(t,e)=>e._syncPendingControls()?!0:t);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(t=>{let e=this.controls[t];e&&i(e,t)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[t,e]of Object.entries(this.controls))if(this.contains(t)&&i(e))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(t,e,r)=>((e.enabled||this.disabled)&&(t[r]=e.value),t))}_reduceChildren(i,t){let e=i;return this._forEachChild((r,o)=>{e=t(e,r,o)}),e}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Zn=class extends Gt{};var ye=new m("",{factory:()=>mn}),mn="always";function Qr(n,i){return[...i.path,n]}function an(n,i,t=mn){ii(n,i),i.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&i.valueAccessor.setDisabledState?.(n.disabled),La(n,i),Ba(n,i),Pa(n,i),Na(n,i)}function Fr(n,i,t=!0){let e=()=>{};i?.valueAccessor?.registerOnChange(e),i?.valueAccessor?.registerOnTouched(e),cn(n,i),n&&(i._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function sn(n,i){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(i)})}function Na(n,i){if(i.valueAccessor.setDisabledState){let t=e=>{i.valueAccessor.setDisabledState(e)};n.registerOnDisabledChange(t),i._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ii(n,i){let t=$r(n);i.validator!==null?n.setValidators(Ir(t,i.validator)):typeof t=="function"&&n.setValidators([t]);let e=qr(n);i.asyncValidator!==null?n.setAsyncValidators(Ir(e,i.asyncValidator)):typeof e=="function"&&n.setAsyncValidators([e]);let r=()=>n.updateValueAndValidity();sn(i._rawValidators,r),sn(i._rawAsyncValidators,r)}function cn(n,i){let t=!1;if(n!==null){if(i.validator!==null){let r=$r(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(i.asyncValidator!==null){let r=qr(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let e=()=>{};return sn(i._rawValidators,e),sn(i._rawAsyncValidators,e),t}function La(n,i){i.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Yr(n,i)})}function Pa(n,i){i.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Yr(n,i),n.updateOn!=="submit"&&n.markAsTouched()})}function Yr(n,i){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ba(n,i){let t=(e,r)=>{i.valueAccessor.writeValue(e),r&&i.viewToModelUpdate(e)};n.registerOnChange(t),i._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Xr(n,i){n==null,ii(n,i)}function za(n,i){return cn(n,i)}function Jr(n,i){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(i,t.currentValue)}function ja(n){return Object.getPrototypeOf(n.constructor)===wa}function to(n,i){n._syncPendingControls(),i.forEach(t=>{let e=t.control;e.updateOn==="submit"&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)})}function eo(n,i){if(!i)return null;Array.isArray(i);let t,e,r;return i.forEach(o=>{o.constructor===Lr?t=o:ja(o)?e=o:r=o}),r||e||t||null}function Ua(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}var Ha={provide:st,useExisting:rt(()=>Ga)},pe=Promise.resolve(),Ga=(()=>{class n extends st{callSetDisabledState;get submitted(){return X(this.submittedReactive)}_submitted=bt(()=>this.submittedReactive());submittedReactive=I(!1);_directives=new Set;form;ngSubmit=new L;options;constructor(t,e,r){super(),this.callSetDisabledState=r,this.form=new Gt({},Jn(t),ti(e))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){pe.then(()=>{let e=this._findContainer(t.path);t.control=e.registerControl(t.name,t.control),an(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){pe.then(()=>{this._findContainer(t.path)?.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){pe.then(()=>{let e=this._findContainer(t.path),r=new Gt({});Xr(r,t),e.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){pe.then(()=>{this._findContainer(t.path)?.removeControl?.(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,e){pe.then(()=>{this.form.get(t.path).setValue(e)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),to(this.form,this._directives),this.ngSubmit.emit(t),this.form._events.next(new on(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static \u0275fac=function(e){return new(e||n)(C(ve,10),C(ln,10),C(ye,8))};static \u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(e,r){e&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[B([Ha]),y]})}return n})();function Tr(n,i){let t=n.indexOf(i);t>-1&&n.splice(t,1)}function Rr(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var be=class extends Ht{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,t,e){super(ei(t),ni(e,t)),this._applyFormState(i),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),dn(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Rr(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,t={}){this.value=this._pendingValue=i,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(i,t={}){this.setValue(i,t)}reset(i=this.defaultValue,t={}){this._applyFormState(i),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),t.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,t?.emitEvent!==!1&&this._events.next(new _e(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Tr(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Tr(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Rr(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Wa=n=>n instanceof be;var $a={provide:Ft,useExisting:rt(()=>qa)},Or=Promise.resolve(),qa=(()=>{class n extends Ft{_changeDetectorRef;callSetDisabledState;control=new be;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new L;constructor(t,e,r,o,a,c){super(),this._changeDetectorRef=a,this.callSetDisabledState=c,this._parent=t,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=eo(this,o)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let e=t.name.previousValue;this.formDirective.removeControl({name:e,path:this._getPath(e)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Jr(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){an(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Or.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let e=t.isDisabled.currentValue,r=e!==0&&U(e);Or.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Qr(t,this._parent):[t]}static \u0275fac=function(e){return new(e||n)(C(st,9),C(ve,10),C(ln,10),C(Qn,10),C(_t,8),C(ye,8))};static \u0275dir=l({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[B([$a]),y,dt]})}return n})();var wu=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Kn=class extends Ht{constructor(i,t,e){super(ei(t),ni(e,t)),this.controls=i,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,t={}){Array.isArray(i)?i.forEach(e=>{this.controls.push(e),this._registerControl(e)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(i,t,e={}){this.controls.splice(i,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent})}removeAt(i,t={}){let e=this._adjustIndex(i);e<0&&(e=0),this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),this.controls.splice(e,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(i,t,e={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,t={}){Kr(this,!1,i),i.forEach((e,r)=>{Zr(this,!1,r),this.at(r).setValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(i,t={}){i!=null&&(i.forEach((e,r)=>{this.at(r)&&this.at(r).patchValue(e,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(i=[],t={}){this._forEachChild((e,r)=>{e.reset(i[r],H(g({},t),{onlySelf:!0}))}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t),t?.emitEvent!==!1&&this._events.next(new _e(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((t,e)=>e._syncPendingControls()?!0:t,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((t,e)=>{i(t,e)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(t=>t.enabled&&i(t))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Za=(()=>{class n extends st{callSetDisabledState;get submitted(){return X(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=bt(()=>this._submittedReactive());_submittedReactive=I(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(t,e,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this.onChanges(t)}ngOnDestroy(){this.onDestroy()}onChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(cn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(t){let e=this.form.get(t.path);return an(e,t,this.callSetDisabledState),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){Fr(t.control||null,t,!1),Ua(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}getFormArray(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}updateModel(t,e){this.form.get(t.path).setValue(e)}onReset(){this.resetForm()}resetForm(t=void 0,e={}){this.form.reset(t,e),this._submittedReactive.set(!1)}onSubmit(t){return this.submitted=!0,to(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new on(this.control)),t?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(t=>{let e=t.control,r=this.form.get(t.path);e!==r&&(Fr(e||null,t),Wa(r)&&(an(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let e=this.form.get(t.path);Xr(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){let e=this.form?.get(t.path);e&&za(e,t)&&e.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){ii(this.form,this),this._oldForm&&cn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(e){return new(e||n)(C(ve,10),C(ln,10),C(ye,8))};static \u0275dir=l({type:n,features:[y,dt]})}return n})();var no=new m("");var Ka={provide:Ft,useExisting:rt(()=>Qa)},Qa=(()=>{class n extends Ft{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new L;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,e,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=t,this._setValidators(e),this._setAsyncValidators(r),this.valueAccessor=eo(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Jr(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Qr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(e){return new(e||n)(C(st,13),C(ve,10),C(ln,10),C(Qn,10),C(no,8))};static \u0275dir=l({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[B([Ka]),y,dt]})}return n})();var Ya={provide:st,useExisting:rt(()=>Xa)},Xa=(()=>{class n extends Za{form=null;ngSubmit=new L;get control(){return this.form}static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){e&1&&Y("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[B([Ya]),y]})}return n})();function Ja(n){return typeof n=="number"?n:parseInt(n,10)}var ts=(()=>{class n{_validator=Je;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let e=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(e),this._validator=this._enabled?this.createValidator(e):Je,this._onChange?.()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,features:[dt]})}return n})();var es={provide:ve,useExisting:rt(()=>ns),multi:!0},ns=(()=>{class n extends ts{maxlength;inputName="maxlength";normalizeInput=t=>Ja(t);createValidator=t=>Pr(t);static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["","maxlength","","formControlName",""],["","maxlength","","formControl",""],["","maxlength","","ngModel",""]],hostVars:1,hostBindings:function(e,r){e&2&&j("maxlength",r._enabled?r.maxlength:null)},inputs:{maxlength:"maxlength"},standalone:!1,features:[B([es]),y]})}return n})();var io=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({})}return n})();function Vr(n){return!!n&&(n.asyncValidators!==void 0||n.validators!==void 0||n.updateOn!==void 0)}var xu=(()=>{class n{useNonNullable=!1;get nonNullable(){let t=new n;return t.useNonNullable=!0,t}group(t,e=null){let r=this._reduceControls(t),o={};return Vr(e)?o=e:e!==null&&(o.validators=e.validator,o.asyncValidators=e.asyncValidator),new Gt(r,o)}record(t,e=null){let r=this._reduceControls(t);return new Zn(r,e)}control(t,e,r){let o={};return this.useNonNullable?(Vr(e)?o=e:(o.validators=e,o.asyncValidators=r),new be(t,H(g({},o),{nonNullable:!0}))):new be(t,e,r)}array(t,e,r){let o=t.map(a=>this._createControl(a));return new Kn(o,e,r)}_reduceControls(t){let e={};return Object.keys(t).forEach(r=>{e[r]=this._createControl(t[r])}),e}_createControl(t){if(t instanceof be)return t;if(t instanceof Ht)return t;if(Array.isArray(t)){let e=t[0],r=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(e,r,o)}else return this.control(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ku=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:ye,useValue:t.callSetDisabledState??mn}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[io]})}return n})(),Cu=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:no,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:ye,useValue:t.callSetDisabledState??mn}]}}static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[io]})}return n})();var ro=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T]})}return n})();var Su=(()=>{class n{_animationsDisabled=q();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=p({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(e,r){e&2&&f("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(e,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var oo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[T]})}return n})();var is=["*"],rs=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,os=["unscopedContent"],as=["text"],ss=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],cs=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ls=new m("ListOption"),oi=(()=>{class n{_elementRef=s(k);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return n})(),ds=(()=>{class n{_elementRef=s(k);constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return n})(),ms=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return n})(),ao=(()=>{class n{_listOption=s(ls,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,hostVars:4,hostBindings:function(e,r){e&2&&f("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return n})(),us=(()=>{class n extends ao{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[y]})}return n})(),ai=(()=>{class n extends ao{static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275dir=l({type:n,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[y]})}return n})(),hs=new m("MAT_LIST_CONFIG"),ri=(()=>{class n{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=W(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(W(t))}_disabled=I(!1);_defaultOptions=s(hs,{optional:!0});static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,hostVars:1,hostBindings:function(e,r){e&2&&j("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return n})(),ps=(()=>{class n{_elementRef=s(k);_ngZone=s(w);_listBase=s(ri,{optional:!0});_platform=s(D);_hostElement;_isButtonElement;_noopAnimations=q();_avatars;_icons;set lines(t){this._explicitLines=ot(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=W(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(W(t))}_disabled=I(!1);_subscriptions=new xt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){s(tt).load(Qe);let t=s(le,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new St(this,this._ngZone,this._hostElement,this._platform,s(N)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(ke(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let e=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",e<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",e===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",e===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&e===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(e){return new(e||n)};static \u0275dir=l({type:n,contentQueries:function(e,r,o){if(e&1&&Et(o,us,4)(o,ai,4),e&2){let a;S(a=F())&&(r._avatars=a),S(a=F())&&(r._icons=a)}},hostVars:4,hostBindings:function(e,r){e&2&&(j("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),f("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return n})();var so=(()=>{class n extends ps{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=W(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(e,r,o){if(e&1&&Et(o,ds,5)(o,oi,5)(o,ms,5),e&2){let a;S(a=F())&&(r._lines=a),S(a=F())&&(r._titles=a),S(a=F())&&(r._meta=a)}},viewQuery:function(e,r){if(e&1&&gt(os,5)(as,5),e&2){let o;S(o=F())&&(r._unscopedContent=o.first),S(o=F())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(e,r){e&2&&(j("aria-current",r._getAriaCurrent()),f("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[y],ngContentSelectors:cs,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(e,r){e&1&&(A(ss),d(0),O(1,"span",1),d(2,1),d(3,2),O(4,"span",2,0),Y("cdkObserveContent",function(){return r._updateItemLines(!0)}),d(6,3),P()(),d(7,4),d(8,5),Ae(9,"div",3))},dependencies:[Gi],encapsulation:2,changeDetection:0})}return n})();var co=(()=>{class n extends ri{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=G(n)))(r||n)}})();static \u0275cmp=p({type:n,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[B([{provide:ri,useExisting:n}]),y],ngContentSelectors:is,decls:1,vars:0,template:function(e,r){e&1&&(A(),d(0))},styles:[rs],encapsulation:2,changeDetection:0})}return n})();var lo=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=_({type:n});static \u0275inj=b({imports:[Ne,Ye,oo,T,ro]})}return n})();function bh(n){n||(n=s(Vt));let i=new ct(t=>{if(n.destroyed){t.next();return}return n.onDestroy(t.next.bind(t))});return t=>t.pipe(V(i))}function mo(n,i){let e=!i?.manualCleanup?i?.injector?.get(Vt)??s(Vt):null,r=gs(i?.equal),o;i?.requireSync?o=I({kind:0},{equal:r}):o=I({kind:1,value:i?.initialValue},{equal:r});let a,c=n.subscribe({next:v=>o.set({kind:1,value:v}),error:v=>{o.set({kind:2,error:v}),a?.()},complete:()=>{a?.()}});if(i?.requireSync&&o().kind===0)throw new kt(601,!1);return a=e?.onDestroy(c.unsubscribe.bind(c)),bt(()=>{let v=o();switch(v.kind){case 1:return v.value;case 2:throw v.error;case 0:throw new kt(601,!1)}},{equal:i?.equal})}function gs(n=Object.is){return(i,t)=>i.kind===1&&t.kind===1&&n(i.value,t.value)}var bs=["sidenav"];function _s(n,i){if(n&1){let t=Yt();O(0,"button",12),Y("click",function(){$t(t),ft();let r=vn(2);return qt(r.close())}),O(1,"mat-icon"),Nt(2,"close"),P()()}}var uo=class n{sidenav;breakpointObserver=s(te);isMobile=mo(this.breakpointObserver.observe([kn.Handset,kn.TabletPortrait]).pipe(M(i=>i.matches)),{initialValue:!1});toggleSidenav(){this.sidenav.toggle()}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=p({type:n,selectors:[["app-shell"]],viewQuery:function(t,e){if(t&1&&gt(bs,5),t&2){let r;S(r=F())&&(e.sidenav=r.first)}},decls:18,vars:4,consts:[["sidenav",""],[1,"shell"],[1,"shell__sidenav",3,"mode","opened","fixedInViewport"],[1,"sidenav__header"],[1,"sidenav__brand"],[1,"sidenav__title"],[1,"sidenav__subtitle"],["mat-icon-button","","aria-label","Fechar menu"],["mat-list-item","",1,"sidenav__item","sidenav__item--active"],["matListItemIcon",""],["matListItemTitle",""],[1,"shell__content"],["mat-icon-button","","aria-label","Fechar menu",3,"click"]],template:function(t,e){t&1&&(O(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"div",4)(5,"span",5),Nt(6,"Desafio Attus"),P(),O(7,"span",6),Nt(8,"Front-End Angular"),P()(),ht(9,_s,3,0,"button",7),P(),O(10,"mat-nav-list")(11,"a",8)(12,"mat-icon",9),Nt(13,"people"),P(),O(14,"span",10),Nt(15,"App Usu\xE1rios"),P()()()(),O(16,"mat-sidenav-content",11),Ae(17,"router-outlet"),P()()),t&2&&(ut(),_n("mode",e.isMobile()?"over":"side")("opened",!e.isMobile())("fixedInViewport",e.isMobile()),ut(8),pt(e.isMobile()?9:-1))},dependencies:[Ai,sr,Pn,ar,$e,cr,gr,fr,Er,Hn,lo,co,so,ai,oi],styles:[".shell[_ngcontent-%COMP%]{height:100%}.shell__sidenav[_ngcontent-%COMP%]{width:280px;border-right:1px solid var(--mat-sys-outline-variant);overflow-x:hidden!important}.sidenav__header[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:space-between;padding:24px 16px 16px}.sidenav__brand[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.sidenav__title[_ngcontent-%COMP%]{font-size:22px;font-weight:500;color:var(--mat-sys-primary);line-height:1.3}.sidenav__subtitle[_ngcontent-%COMP%]{font:var(--mat-sys-body-small);color:var(--mat-sys-on-surface-variant)}.sidenav__item--active[_ngcontent-%COMP%]{background-color:var(--mat-sys-secondary-container)!important;border-radius:28px;margin:0 12px}.shell__content[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}"],changeDetection:0})};export{D as a,xn as b,Fe as c,te as d,kn as e,Ri as f,J as g,ot as h,$ as i,oe as j,tt as k,Ve as l,Ne as m,Pe as n,In as o,Ao as p,So as q,ze as r,An as s,Fn as t,To as u,Ro as v,gl as w,ae as x,T as y,Il as z,W as A,nr as B,Rl as C,Vl as D,On as E,zt as F,rr as G,se as H,ud as I,Bo as J,q as K,fr as L,gr as M,fm as N,Qe as O,Hn as P,Ye as Q,Zm as R,Km as S,Qm as T,Er as U,$n as V,Lr as W,Mr as X,Ft as Y,_u as Z,vu as _,Ga as $,qa as aa,wu as ba,Qa as ca,Xa as da,ns as ea,xu as fa,ku as ga,Cu as ha,Su as ia,oo as ja,bh as ka,uo as la};
