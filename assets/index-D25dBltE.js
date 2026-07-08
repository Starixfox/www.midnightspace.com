(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Td={exports:{}},Ua={},wd={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function GE(){if(tv)return gt;tv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(U,$,Re){this.props=U,this.context=$,this.refs=A,this.updater=Re||y}S.prototype.isReactComponent={},S.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function b(U,$,Re){this.props=U,this.context=$,this.refs=A,this.updater=Re||y}var D=b.prototype=new x;D.constructor=b,M(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(U,$,Re){var Fe,Oe={},se=null,ve=null;if($!=null)for(Fe in $.ref!==void 0&&(ve=$.ref),$.key!==void 0&&(se=""+$.key),$)L.call($,Fe)&&!F.hasOwnProperty(Fe)&&(Oe[Fe]=$[Fe]);var he=arguments.length-2;if(he===1)Oe.children=Re;else if(1<he){for(var Ie=Array(he),ze=0;ze<he;ze++)Ie[ze]=arguments[ze+2];Oe.children=Ie}if(U&&U.defaultProps)for(Fe in he=U.defaultProps,he)Oe[Fe]===void 0&&(Oe[Fe]=he[Fe]);return{$$typeof:n,type:U,key:se,ref:ve,props:Oe,_owner:P.current}}function I(U,$){return{$$typeof:n,type:U.type,key:$,ref:U.ref,props:U.props,_owner:U._owner}}function B(U){return typeof U=="object"&&U!==null&&U.$$typeof===n}function k(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Re){return $[Re]})}var q=/\/+/g;function ue(U,$){return typeof U=="object"&&U!==null&&U.key!=null?k(""+U.key):$.toString(36)}function pe(U,$,Re,Fe,Oe){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var ve=!1;if(U===null)ve=!0;else switch(se){case"string":case"number":ve=!0;break;case"object":switch(U.$$typeof){case n:case e:ve=!0}}if(ve)return ve=U,Oe=Oe(ve),U=Fe===""?"."+ue(ve,0):Fe,C(Oe)?(Re="",U!=null&&(Re=U.replace(q,"$&/")+"/"),pe(Oe,$,Re,"",function(ze){return ze})):Oe!=null&&(B(Oe)&&(Oe=I(Oe,Re+(!Oe.key||ve&&ve.key===Oe.key?"":(""+Oe.key).replace(q,"$&/")+"/")+U)),$.push(Oe)),1;if(ve=0,Fe=Fe===""?".":Fe+":",C(U))for(var he=0;he<U.length;he++){se=U[he];var Ie=Fe+ue(se,he);ve+=pe(se,$,Re,Ie,Oe)}else if(Ie=m(U),typeof Ie=="function")for(U=Ie.call(U),he=0;!(se=U.next()).done;)se=se.value,Ie=Fe+ue(se,he++),ve+=pe(se,$,Re,Ie,Oe);else if(se==="object")throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(U,$,Re){if(U==null)return U;var Fe=[],Oe=0;return pe(U,Fe,"","",function(se){return $.call(Re,se,Oe++)}),Fe}function ce(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(Re){(U._status===0||U._status===-1)&&(U._status=1,U._result=Re)},function(Re){(U._status===0||U._status===-1)&&(U._status=2,U._result=Re)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var X={current:null},H={transition:null},ee={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:H,ReactCurrentOwner:P};function ie(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:J,forEach:function(U,$,Re){J(U,function(){$.apply(this,arguments)},Re)},count:function(U){var $=0;return J(U,function(){$++}),$},toArray:function(U){return J(U,function($){return $})||[]},only:function(U){if(!B(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},gt.Component=S,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=b,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,gt.act=ie,gt.cloneElement=function(U,$,Re){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Fe=M({},U.props),Oe=U.key,se=U.ref,ve=U._owner;if($!=null){if($.ref!==void 0&&(se=$.ref,ve=P.current),$.key!==void 0&&(Oe=""+$.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(Ie in $)L.call($,Ie)&&!F.hasOwnProperty(Ie)&&(Fe[Ie]=$[Ie]===void 0&&he!==void 0?he[Ie]:$[Ie])}var Ie=arguments.length-2;if(Ie===1)Fe.children=Re;else if(1<Ie){he=Array(Ie);for(var ze=0;ze<Ie;ze++)he[ze]=arguments[ze+2];Fe.children=he}return{$$typeof:n,type:U.type,key:Oe,ref:se,props:Fe,_owner:ve}},gt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},gt.createElement=E,gt.createFactory=function(U){var $=E.bind(null,U);return $.type=U,$},gt.createRef=function(){return{current:null}},gt.forwardRef=function(U){return{$$typeof:f,render:U}},gt.isValidElement=B,gt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ce}},gt.memo=function(U,$){return{$$typeof:h,type:U,compare:$===void 0?null:$}},gt.startTransition=function(U){var $=H.transition;H.transition={};try{U()}finally{H.transition=$}},gt.unstable_act=ie,gt.useCallback=function(U,$){return X.current.useCallback(U,$)},gt.useContext=function(U){return X.current.useContext(U)},gt.useDebugValue=function(){},gt.useDeferredValue=function(U){return X.current.useDeferredValue(U)},gt.useEffect=function(U,$){return X.current.useEffect(U,$)},gt.useId=function(){return X.current.useId()},gt.useImperativeHandle=function(U,$,Re){return X.current.useImperativeHandle(U,$,Re)},gt.useInsertionEffect=function(U,$){return X.current.useInsertionEffect(U,$)},gt.useLayoutEffect=function(U,$){return X.current.useLayoutEffect(U,$)},gt.useMemo=function(U,$){return X.current.useMemo(U,$)},gt.useReducer=function(U,$,Re){return X.current.useReducer(U,$,Re)},gt.useRef=function(U){return X.current.useRef(U)},gt.useState=function(U){return X.current.useState(U)},gt.useSyncExternalStore=function(U,$,Re){return X.current.useSyncExternalStore(U,$,Re)},gt.useTransition=function(){return X.current.useTransition()},gt.version="18.3.1",gt}var nv;function Np(){return nv||(nv=1,wd.exports=GE()),wd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function WE(){if(iv)return Ua;iv=1;var n=Np(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,v={},m=null,y=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)r.call(d,g)&&!a.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var rv;function XE(){return rv||(rv=1,Td.exports=WE()),Td.exports}var W=XE(),Je=Np(),Eu={},Ad={exports:{}},Jn={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function jE(){return sv||(sv=1,(function(n){function e(H,ee){var ie=H.length;H.push(ee);e:for(;0<ie;){var U=ie-1>>>1,$=H[U];if(0<o($,ee))H[U]=ee,H[ie]=$,ie=U;else break e}}function t(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ee=H[0],ie=H.pop();if(ie!==ee){H[0]=ie;e:for(var U=0,$=H.length,Re=$>>>1;U<Re;){var Fe=2*(U+1)-1,Oe=H[Fe],se=Fe+1,ve=H[se];if(0>o(Oe,ie))se<$&&0>o(ve,Oe)?(H[U]=ve,H[se]=ie,U=se):(H[U]=Oe,H[Fe]=ie,U=Fe);else if(se<$&&0>o(ve,ie))H[U]=ve,H[se]=ie,U=se;else break e}}return ee}function o(H,ee){var ie=H.sortIndex-ee.sortIndex;return ie!==0?ie:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,v=null,m=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(H){for(var ee=t(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=H)r(h),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=t(h)}}function C(H){if(A=!1,D(H),!M)if(t(d)!==null)M=!0,ce(L);else{var ee=t(h);ee!==null&&X(C,ee.startTime-H)}}function L(H,ee){M=!1,A&&(A=!1,x(E),E=-1),y=!0;var ie=m;try{for(D(ee),v=t(d);v!==null&&(!(v.expirationTime>ee)||H&&!k());){var U=v.callback;if(typeof U=="function"){v.callback=null,m=v.priorityLevel;var $=U(v.expirationTime<=ee);ee=n.unstable_now(),typeof $=="function"?v.callback=$:v===t(d)&&r(d),D(ee)}else r(d);v=t(d)}if(v!==null)var Re=!0;else{var Fe=t(h);Fe!==null&&X(C,Fe.startTime-ee),Re=!1}return Re}finally{v=null,m=ie,y=!1}}var P=!1,F=null,E=-1,I=5,B=-1;function k(){return!(n.unstable_now()-B<I)}function q(){if(F!==null){var H=n.unstable_now();B=H;var ee=!0;try{ee=F(!0,H)}finally{ee?ue():(P=!1,F=null)}}else P=!1}var ue;if(typeof b=="function")ue=function(){b(q)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,J=pe.port2;pe.port1.onmessage=q,ue=function(){J.postMessage(null)}}else ue=function(){S(q,0)};function ce(H){F=H,P||(P=!0,ue())}function X(H,ee){E=S(function(){H(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(H){H.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ce(L))},n.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<H?Math.floor(1e3/H):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var ie=m;m=ee;try{return H()}finally{m=ie}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ie=m;m=H;try{return ee()}finally{m=ie}},n.unstable_scheduleCallback=function(H,ee,ie){var U=n.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?U+ie:U):ie=U,H){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ie+$,H={id:g++,callback:ee,priorityLevel:H,startTime:ie,expirationTime:$,sortIndex:-1},ie>U?(H.sortIndex=ie,e(h,H),t(d)===null&&H===t(h)&&(A?(x(E),E=-1):A=!0,X(C,ie-U))):(H.sortIndex=$,e(d,H),M||y||(M=!0,ce(L))),H},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(H){var ee=m;return function(){var ie=m;m=ee;try{return H.apply(this,arguments)}finally{m=ie}}}})(Rd)),Rd}var ov;function YE(){return ov||(ov=1,Cd.exports=jE()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function qE(){if(av)return Jn;av=1;var n=Np(),e=YE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return d.call(v,i)?!0:d.call(g,i)?!1:h.test(i)?v[i]=!0:(g[i]=!0,!1)}function y(i,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,c){if(s===null||typeof s>"u"||y(i,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,b);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,b);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,b);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,l,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,c)&&(l=null),c||p===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,s,l):i.setAttribute(s,l))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),H=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=H&&i[H]||i["@@iterator"],typeof i=="function"?i:null)}var ie=Object.assign,U;function $(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var Re=!1;function Fe(i,s){if(!i||Re)return"";Re=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(le){var c=le}Reflect.construct(i,[],s)}else{try{s.call()}catch(le){c=le}i.call(s.prototype)}else{try{throw Error()}catch(le){c=le}i()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,O=_.length-1;1<=w&&0<=O&&p[w]!==_[O];)O--;for(;1<=w&&0<=O;w--,O--)if(p[w]!==_[O]){if(w!==1||O!==1)do if(w--,O--,0>O||p[w]!==_[O]){var z=`
`+p[w].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=w&&0<=O);break}}}finally{Re=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?$(i):""}function Oe(i){switch(i.tag){case 5:return $(i.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return i=Fe(i.type,!1),i;case 11:return i=Fe(i.type.render,!1),i;case 1:return i=Fe(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case P:return"Portal";case I:return"Profiler";case E:return"StrictMode";case ue:return"Suspense";case pe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:se(i.type)||"Memo";case ce:s=i._payload,i=i._init;try{return se(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function he(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function ze(i){var s=Ie(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ge(i){i._valueTracker||(i._valueTracker=ze(i))}function Tt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Ie(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function lt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Rt(i,s){var l=s.checked;return ie({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function yt(i,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=he(s.value!=null?s.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function vt(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function Gt(i,s){vt(i,s);var l=he(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?en(i,s.type,l):s.hasOwnProperty("defaultValue")&&en(i,s.type,he(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Qt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function en(i,s,l){(s!=="number"||lt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var qt=Array.isArray;function Lt(i,s,l,c){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+he(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Wt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function j(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(qt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:he(l)}}function yn(i,s){var l=he(s.value),c=he(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function wt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function N(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?N(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Z,oe=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Z.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function fe(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){be.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function de(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=de(l,s[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var De=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(i,s){if(s){if(De[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function et(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var tt=null,ot=null,V=null;function Ae(i){if(i=ya(i)){if(typeof tt!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Bl(s),tt(i.stateNode,i.type,s))}}function me(i){ot?V?V.push(i):V=[i]:ot=i}function Pe(){if(ot){var i=ot,s=V;if(V=ot=null,Ae(i),s)for(i=0;i<s.length;i++)Ae(s[i])}}function Ne(i,s){return i(s)}function _e(){}var je=!1;function We(i,s,l){if(je)return i(s,l);je=!0;try{return Ne(i,s,l)}finally{je=!1,(ot!==null||V!==null)&&(_e(),Pe())}}function Ot(i,s){var l=i.stateNode;if(l===null)return null;var c=Bl(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Pt=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Pt=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Pt=!1}function ui(i,s,l,c,p,_,w,O,z){var le=Array.prototype.slice.call(arguments,3);try{s.apply(l,le)}catch(ye){this.onError(ye)}}var rs=!1,Hs=null,ss=!1,os=null,jc={onError:function(i){rs=!0,Hs=i}};function yl(i,s,l,c,p,_,w,O,z){rs=!1,Hs=null,ui.apply(jc,arguments)}function Sl(i,s,l,c,p,_,w,O,z){if(yl.apply(this,arguments),rs){if(rs){var le=Hs;rs=!1,Hs=null}else throw Error(t(198));ss||(ss=!0,os=le)}}function On(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Gs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ea(i){if(On(i)!==i)throw Error(t(188))}function Ml(i){var s=i.alternate;if(!s){if(s=On(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,c=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return ea(p),i;if(_===c)return ea(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var w=!1,O=p.child;O;){if(O===l){w=!0,l=p,c=_;break}if(O===c){w=!0,c=p,l=_;break}O=O.sibling}if(!w){for(O=_.child;O;){if(O===l){w=!0,l=_,c=p;break}if(O===c){w=!0,c=_,l=p;break}O=O.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function as(i){return i=Ml(i),i!==null?ta(i):null}function ta(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ta(i);if(s!==null)return s;i=i.sibling}return null}var ls=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,El=e.unstable_shouldYield,Yc=e.unstable_requestPaint,$t=e.unstable_now,qc=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,ae=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,we=null;function Ve(i){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(te,i,void 0,(i.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:ut,Ye=Math.log,Qe=Math.LN2;function ut(i){return i>>>=0,i===0?32:31-(Ye(i)/Qe|0)|0}var ct=64,Ke=4194304;function St(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Bt(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var O=w&~p;O!==0?c=St(O):(_&=w,_!==0&&(c=St(_)))}else w=l&~p,w!==0?c=St(w):_!==0&&(c=St(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)l=31-Te(s),p=1<<l,c|=i[l],s&=~p;return c}function Xt(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-Te(_),O=1<<w,z=p[w];z===-1?((O&l)===0||(O&c)!==0)&&(p[w]=Xt(O,s)):z<=s&&(i.expiredLanes|=O),_&=~O}}function ln(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Be(){var i=ct;return ct<<=1,(ct&4194240)===0&&(ct=64),i}function Sn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function pt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Te(s),i[s]=l}function Xn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-Te(l),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function jn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-Te(l),p=1<<c;p&s|i[c]&s&&(i[c]|=s),l&=~p}}var mt=0;function nr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Dt,zt,Mi,Nt,Ei,Bi=!1,us=[],Ar=null,Cr=null,Rr=null,ra=new Map,sa=new Map,br=[],fM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bm(i,s){switch(i){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":ra.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(s.pointerId)}}function oa(i,s,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ya(s),s!==null&&zt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function dM(i,s,l,c,p){switch(s){case"focusin":return Ar=oa(Ar,i,s,l,c,p),!0;case"dragenter":return Cr=oa(Cr,i,s,l,c,p),!0;case"mouseover":return Rr=oa(Rr,i,s,l,c,p),!0;case"pointerover":var _=p.pointerId;return ra.set(_,oa(ra.get(_)||null,i,s,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,sa.set(_,oa(sa.get(_)||null,i,s,l,c,p)),!0}return!1}function km(i){var s=cs(i.target);if(s!==null){var l=On(s);if(l!==null){if(s=l.tag,s===13){if(s=Gs(l),s!==null){i.blockedOn=s,Ei(i.priority,function(){Mi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Tl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Kc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);Ce=c,l.target.dispatchEvent(c),Ce=null}else return s=ya(l),s!==null&&zt(s),i.blockedOn=l,!1;s.shift()}return!0}function zm(i,s,l){Tl(i)&&l.delete(s)}function hM(){Bi=!1,Ar!==null&&Tl(Ar)&&(Ar=null),Cr!==null&&Tl(Cr)&&(Cr=null),Rr!==null&&Tl(Rr)&&(Rr=null),ra.forEach(zm),sa.forEach(zm)}function aa(i,s){i.blockedOn===s&&(i.blockedOn=null,Bi||(Bi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,hM)))}function la(i){function s(p){return aa(p,i)}if(0<us.length){aa(us[0],i);for(var l=1;l<us.length;l++){var c=us[l];c.blockedOn===i&&(c.blockedOn=null)}}for(Ar!==null&&aa(Ar,i),Cr!==null&&aa(Cr,i),Rr!==null&&aa(Rr,i),ra.forEach(s),sa.forEach(s),l=0;l<br.length;l++)c=br[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)km(l),l.blockedOn===null&&br.shift()}var Ws=C.ReactCurrentBatchConfig,wl=!0;function pM(i,s,l,c){var p=mt,_=Ws.transition;Ws.transition=null;try{mt=1,$c(i,s,l,c)}finally{mt=p,Ws.transition=_}}function mM(i,s,l,c){var p=mt,_=Ws.transition;Ws.transition=null;try{mt=4,$c(i,s,l,c)}finally{mt=p,Ws.transition=_}}function $c(i,s,l,c){if(wl){var p=Kc(i,s,l,c);if(p===null)pf(i,s,c,Al,l),Bm(i,c);else if(dM(p,i,s,l,c))c.stopPropagation();else if(Bm(i,c),s&4&&-1<fM.indexOf(i)){for(;p!==null;){var _=ya(p);if(_!==null&&Dt(_),_=Kc(i,s,l,c),_===null&&pf(i,s,c,Al,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else pf(i,s,c,null,l)}}var Al=null;function Kc(i,s,l,c){if(Al=null,i=et(c),i=cs(i),i!==null)if(s=On(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Gs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Al=i,null}function Vm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case ia:return 1;case R:return 4;case Y:case ae:return 16;case ne:return 536870912;default:return 16}default:return 16}}var Pr=null,Zc=null,Cl=null;function Hm(){if(Cl)return Cl;var i,s=Zc,l=s.length,c,p="value"in Pr?Pr.value:Pr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var w=l-i;for(c=1;c<=w&&s[l-c]===p[_-c];c++);return Cl=p.slice(i,1<c?1-c:void 0)}function Rl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function bl(){return!0}function Gm(){return!1}function ei(i){function s(l,c,p,_,w){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var O in i)i.hasOwnProperty(O)&&(l=i[O],this[O]=l?l(_):_[O]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?bl:Gm,this.isPropagationStopped=Gm,this}return ie(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=bl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=bl)},persist:function(){},isPersistent:bl}),s}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=ei(Xs),ua=ie({},Xs,{view:0,detail:0}),gM=ei(ua),Qc,ef,ca,Pl=ie({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ca&&(ca&&i.type==="mousemove"?(Qc=i.screenX-ca.screenX,ef=i.screenY-ca.screenY):ef=Qc=0,ca=i),Qc)},movementY:function(i){return"movementY"in i?i.movementY:ef}}),Wm=ei(Pl),vM=ie({},Pl,{dataTransfer:0}),_M=ei(vM),xM=ie({},ua,{relatedTarget:0}),tf=ei(xM),yM=ie({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),SM=ei(yM),MM=ie({},Xs,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),EM=ei(MM),TM=ie({},Xs,{data:0}),Xm=ei(TM),wM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=CM[i])?!!s[i]:!1}function nf(){return RM}var bM=ie({},ua,{key:function(i){if(i.key){var s=wM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Rl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?AM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(i){return i.type==="keypress"?Rl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Rl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),PM=ei(bM),DM=ie({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jm=ei(DM),LM=ie({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),IM=ei(LM),NM=ie({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),UM=ei(NM),FM=ie({},Pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),OM=ei(FM),BM=[9,13,27,32],rf=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var kM=f&&"TextEvent"in window&&!fa,Ym=f&&(!rf||fa&&8<fa&&11>=fa),qm=" ",$m=!1;function Km(i,s){switch(i){case"keyup":return BM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var js=!1;function zM(i,s){switch(i){case"compositionend":return Zm(s);case"keypress":return s.which!==32?null:($m=!0,qm);case"textInput":return i=s.data,i===qm&&$m?null:i;default:return null}}function VM(i,s){if(js)return i==="compositionend"||!rf&&Km(i,s)?(i=Hm(),Cl=Zc=Pr=null,js=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ym&&s.locale!=="ko"?null:s.data;default:return null}}var HM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!HM[i.type]:s==="textarea"}function Qm(i,s,l,c){me(c),s=Ul(s,"onChange"),0<s.length&&(l=new Jc("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var da=null,ha=null;function GM(i){vg(i,0)}function Dl(i){var s=Zs(i);if(Tt(s))return i}function WM(i,s){if(i==="change")return s}var eg=!1;if(f){var sf;if(f){var of="oninput"in document;if(!of){var tg=document.createElement("div");tg.setAttribute("oninput","return;"),of=typeof tg.oninput=="function"}sf=of}else sf=!1;eg=sf&&(!document.documentMode||9<document.documentMode)}function ng(){da&&(da.detachEvent("onpropertychange",ig),ha=da=null)}function ig(i){if(i.propertyName==="value"&&Dl(ha)){var s=[];Qm(s,ha,i,et(i)),We(GM,s)}}function XM(i,s,l){i==="focusin"?(ng(),da=s,ha=l,da.attachEvent("onpropertychange",ig)):i==="focusout"&&ng()}function jM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Dl(ha)}function YM(i,s){if(i==="click")return Dl(s)}function qM(i,s){if(i==="input"||i==="change")return Dl(s)}function $M(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ti=typeof Object.is=="function"?Object.is:$M;function pa(i,s){if(Ti(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(s,p)||!Ti(i[p],s[p]))return!1}return!0}function rg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function sg(i,s){var l=rg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=rg(l)}}function og(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?og(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function ag(){for(var i=window,s=lt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=lt(i.document)}return s}function af(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function KM(i){var s=ag(),l=i.focusedElem,c=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&og(l.ownerDocument.documentElement,l)){if(c!==null&&af(l)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=sg(l,_);var w=sg(l,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var ZM=f&&"documentMode"in document&&11>=document.documentMode,Ys=null,lf=null,ma=null,uf=!1;function lg(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;uf||Ys==null||Ys!==lt(c)||(c=Ys,"selectionStart"in c&&af(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Ul(lf,"onSelect"),0<c.length&&(s=new Jc("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=Ys)))}function Ll(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var qs={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},cf={},ug={};f&&(ug=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Il(i){if(cf[i])return cf[i];if(!qs[i])return i;var s=qs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ug)return cf[i]=s[l];return i}var cg=Il("animationend"),fg=Il("animationiteration"),dg=Il("animationstart"),hg=Il("transitionend"),pg=new Map,mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(i,s){pg.set(i,s),a(s,[i])}for(var ff=0;ff<mg.length;ff++){var df=mg[ff],JM=df.toLowerCase(),QM=df[0].toUpperCase()+df.slice(1);Dr(JM,"on"+QM)}Dr(cg,"onAnimationEnd"),Dr(fg,"onAnimationIteration"),Dr(dg,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(hg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),eE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function gg(i,s,l){var c=i.type||"unknown-event";i.currentTarget=l,Sl(c,s,void 0,i),i.currentTarget=null}function vg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var O=c[w],z=O.instance,le=O.currentTarget;if(O=O.listener,z!==_&&p.isPropagationStopped())break e;gg(p,O,le),_=z}else for(w=0;w<c.length;w++){if(O=c[w],z=O.instance,le=O.currentTarget,O=O.listener,z!==_&&p.isPropagationStopped())break e;gg(p,O,le),_=z}}}if(ss)throw i=os,ss=!1,os=null,i}function Vt(i,s){var l=s[yf];l===void 0&&(l=s[yf]=new Set);var c=i+"__bubble";l.has(c)||(_g(s,i,2,!1),l.add(c))}function hf(i,s,l){var c=0;s&&(c|=4),_g(l,i,c,s)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function va(i){if(!i[Nl]){i[Nl]=!0,r.forEach(function(l){l!=="selectionchange"&&(eE.has(l)||hf(l,!1,i),hf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Nl]||(s[Nl]=!0,hf("selectionchange",!1,s))}}function _g(i,s,l,c){switch(Vm(s)){case 1:var p=pM;break;case 4:p=mM;break;default:p=$c}l=p.bind(null,s,l,i),p=void 0,!Pt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function pf(i,s,l,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var O=c.stateNode.containerInfo;if(O===p||O.nodeType===8&&O.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;w=w.return}for(;O!==null;){if(w=cs(O),w===null)return;if(z=w.tag,z===5||z===6){c=_=w;continue e}O=O.parentNode}}c=c.return}We(function(){var le=_,ye=et(l),Se=[];e:{var xe=pg.get(i);if(xe!==void 0){var ke=Jc,Xe=i;switch(i){case"keypress":if(Rl(l)===0)break e;case"keydown":case"keyup":ke=PM;break;case"focusin":Xe="focus",ke=tf;break;case"focusout":Xe="blur",ke=tf;break;case"beforeblur":case"afterblur":ke=tf;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Wm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=_M;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=IM;break;case cg:case fg:case dg:ke=SM;break;case hg:ke=UM;break;case"scroll":ke=gM;break;case"wheel":ke=OM;break;case"copy":case"cut":case"paste":ke=EM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=jm}var qe=(s&4)!==0,on=!qe&&i==="scroll",Q=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var G=le,re;G!==null;){re=G;var Ee=re.stateNode;if(re.tag===5&&Ee!==null&&(re=Ee,Q!==null&&(Ee=Ot(G,Q),Ee!=null&&qe.push(_a(G,Ee,re)))),on)break;G=G.return}0<qe.length&&(xe=new ke(xe,Xe,null,l,ye),Se.push({event:xe,listeners:qe}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",xe&&l!==Ce&&(Xe=l.relatedTarget||l.fromElement)&&(cs(Xe)||Xe[ir]))break e;if((ke||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(Xe=l.relatedTarget||l.toElement,ke=le,Xe=Xe?cs(Xe):null,Xe!==null&&(on=On(Xe),Xe!==on||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=le),ke!==Xe)){if(qe=Wm,Ee="onMouseLeave",Q="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(qe=jm,Ee="onPointerLeave",Q="onPointerEnter",G="pointer"),on=ke==null?xe:Zs(ke),re=Xe==null?xe:Zs(Xe),xe=new qe(Ee,G+"leave",ke,l,ye),xe.target=on,xe.relatedTarget=re,Ee=null,cs(ye)===le&&(qe=new qe(Q,G+"enter",Xe,l,ye),qe.target=re,qe.relatedTarget=on,Ee=qe),on=Ee,ke&&Xe)t:{for(qe=ke,Q=Xe,G=0,re=qe;re;re=$s(re))G++;for(re=0,Ee=Q;Ee;Ee=$s(Ee))re++;for(;0<G-re;)qe=$s(qe),G--;for(;0<re-G;)Q=$s(Q),re--;for(;G--;){if(qe===Q||Q!==null&&qe===Q.alternate)break t;qe=$s(qe),Q=$s(Q)}qe=null}else qe=null;ke!==null&&xg(Se,xe,ke,qe,!1),Xe!==null&&on!==null&&xg(Se,on,Xe,qe,!0)}}e:{if(xe=le?Zs(le):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var Ze=WM;else if(Jm(xe))if(eg)Ze=qM;else{Ze=jM;var nt=XM}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=YM);if(Ze&&(Ze=Ze(i,le))){Qm(Se,Ze,l,ye);break e}nt&&nt(i,xe,le),i==="focusout"&&(nt=xe._wrapperState)&&nt.controlled&&xe.type==="number"&&en(xe,"number",xe.value)}switch(nt=le?Zs(le):window,i){case"focusin":(Jm(nt)||nt.contentEditable==="true")&&(Ys=nt,lf=le,ma=null);break;case"focusout":ma=lf=Ys=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,lg(Se,l,ye);break;case"selectionchange":if(ZM)break;case"keydown":case"keyup":lg(Se,l,ye)}var it;if(rf)e:{switch(i){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else js?Km(i,l)&&(at="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Ym&&l.locale!=="ko"&&(js||at!=="onCompositionStart"?at==="onCompositionEnd"&&js&&(it=Hm()):(Pr=ye,Zc="value"in Pr?Pr.value:Pr.textContent,js=!0)),nt=Ul(le,at),0<nt.length&&(at=new Xm(at,i,null,l,ye),Se.push({event:at,listeners:nt}),it?at.data=it:(it=Zm(l),it!==null&&(at.data=it)))),(it=kM?zM(i,l):VM(i,l))&&(le=Ul(le,"onBeforeInput"),0<le.length&&(ye=new Xm("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:le}),ye.data=it))}vg(Se,s)})}function _a(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Ul(i,s){for(var l=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ot(i,l),_!=null&&c.unshift(_a(i,_,p)),_=Ot(i,s),_!=null&&c.push(_a(i,_,p))),i=i.return}return c}function $s(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function xg(i,s,l,c,p){for(var _=s._reactName,w=[];l!==null&&l!==c;){var O=l,z=O.alternate,le=O.stateNode;if(z!==null&&z===c)break;O.tag===5&&le!==null&&(O=le,p?(z=Ot(l,_),z!=null&&w.unshift(_a(l,z,O))):p||(z=Ot(l,_),z!=null&&w.push(_a(l,z,O)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var tE=/\r\n?/g,nE=/\u0000|\uFFFD/g;function yg(i){return(typeof i=="string"?i:""+i).replace(tE,`
`).replace(nE,"")}function Fl(i,s,l){if(s=yg(s),yg(i)!==s&&l)throw Error(t(425))}function Ol(){}var mf=null,gf=null;function vf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,iE=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,rE=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(i){return Sg.resolve(null).then(i).catch(sE)}:_f;function sE(i){setTimeout(function(){throw i})}function xf(i,s){var l=s,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),la(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);la(s)}function Lr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Mg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ki="__reactFiber$"+Ks,xa="__reactProps$"+Ks,ir="__reactContainer$"+Ks,yf="__reactEvents$"+Ks,oE="__reactListeners$"+Ks,aE="__reactHandles$"+Ks;function cs(i){var s=i[ki];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ir]||l[ki]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Mg(i);i!==null;){if(l=i[ki])return l;i=Mg(i)}return s}i=l,l=i.parentNode}return null}function ya(i){return i=i[ki]||i[ir],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Zs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Bl(i){return i[xa]||null}var Sf=[],Js=-1;function Ir(i){return{current:i}}function Ht(i){0>Js||(i.current=Sf[Js],Sf[Js]=null,Js--)}function kt(i,s){Js++,Sf[Js]=i.current,i.current=s}var Nr={},An=Ir(Nr),Yn=Ir(!1),fs=Nr;function Qs(i,s){var l=i.type.contextTypes;if(!l)return Nr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function qn(i){return i=i.childContextTypes,i!=null}function kl(){Ht(Yn),Ht(An)}function Eg(i,s,l){if(An.current!==Nr)throw Error(t(168));kt(An,s),kt(Yn,l)}function Tg(i,s,l){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,ve(i)||"Unknown",p));return ie({},l,c)}function zl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Nr,fs=An.current,kt(An,i),kt(Yn,Yn.current),!0}function wg(i,s,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=Tg(i,s,fs),c.__reactInternalMemoizedMergedChildContext=i,Ht(Yn),Ht(An),kt(An,i)):Ht(Yn),kt(Yn,l)}var rr=null,Vl=!1,Mf=!1;function Ag(i){rr===null?rr=[i]:rr.push(i)}function lE(i){Vl=!0,Ag(i)}function Ur(){if(!Mf&&rr!==null){Mf=!0;var i=0,s=mt;try{var l=rr;for(mt=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}rr=null,Vl=!1}catch(p){throw rr!==null&&(rr=rr.slice(i+1)),ls(ia,Ur),p}finally{mt=s,Mf=!1}}return null}var eo=[],to=0,Hl=null,Gl=0,ci=[],fi=0,ds=null,sr=1,or="";function hs(i,s){eo[to++]=Gl,eo[to++]=Hl,Hl=i,Gl=s}function Cg(i,s,l){ci[fi++]=sr,ci[fi++]=or,ci[fi++]=ds,ds=i;var c=sr;i=or;var p=32-Te(c)-1;c&=~(1<<p),l+=1;var _=32-Te(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,sr=1<<32-Te(s)+p|l<<p|c,or=_+i}else sr=1<<_|l<<p|c,or=i}function Ef(i){i.return!==null&&(hs(i,1),Cg(i,1,0))}function Tf(i){for(;i===Hl;)Hl=eo[--to],eo[to]=null,Gl=eo[--to],eo[to]=null;for(;i===ds;)ds=ci[--fi],ci[fi]=null,or=ci[--fi],ci[fi]=null,sr=ci[--fi],ci[fi]=null}var ti=null,ni=null,jt=!1,wi=null;function Rg(i,s){var l=mi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function bg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ti=i,ni=Lr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ti=i,ni=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ds!==null?{id:sr,overflow:or}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=mi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ti=i,ni=null,!0):!1;default:return!1}}function wf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Af(i){if(jt){var s=ni;if(s){var l=s;if(!bg(i,s)){if(wf(i))throw Error(t(418));s=Lr(l.nextSibling);var c=ti;s&&bg(i,s)?Rg(c,l):(i.flags=i.flags&-4097|2,jt=!1,ti=i)}}else{if(wf(i))throw Error(t(418));i.flags=i.flags&-4097|2,jt=!1,ti=i}}}function Pg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ti=i}function Wl(i){if(i!==ti)return!1;if(!jt)return Pg(i),jt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!vf(i.type,i.memoizedProps)),s&&(s=ni)){if(wf(i))throw Dg(),Error(t(418));for(;s;)Rg(i,s),s=Lr(s.nextSibling)}if(Pg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ni=Lr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ni=null}}else ni=ti?Lr(i.stateNode.nextSibling):null;return!0}function Dg(){for(var i=ni;i;)i=Lr(i.nextSibling)}function no(){ni=ti=null,jt=!1}function Cf(i){wi===null?wi=[i]:wi.push(i)}var uE=C.ReactCurrentBatchConfig;function Sa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var O=p.refs;w===null?delete O[_]:O[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Xl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lg(i){var s=i._init;return s(i._payload)}function Ig(i){function s(Q,G){if(i){var re=Q.deletions;re===null?(Q.deletions=[G],Q.flags|=16):re.push(G)}}function l(Q,G){if(!i)return null;for(;G!==null;)s(Q,G),G=G.sibling;return null}function c(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function p(Q,G){return Q=Gr(Q,G),Q.index=0,Q.sibling=null,Q}function _(Q,G,re){return Q.index=re,i?(re=Q.alternate,re!==null?(re=re.index,re<G?(Q.flags|=2,G):re):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function w(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function O(Q,G,re,Ee){return G===null||G.tag!==6?(G=_d(re,Q.mode,Ee),G.return=Q,G):(G=p(G,re),G.return=Q,G)}function z(Q,G,re,Ee){var Ze=re.type;return Ze===F?ye(Q,G,re.props.children,Ee,re.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&Lg(Ze)===G.type)?(Ee=p(G,re.props),Ee.ref=Sa(Q,G,re),Ee.return=Q,Ee):(Ee=mu(re.type,re.key,re.props,null,Q.mode,Ee),Ee.ref=Sa(Q,G,re),Ee.return=Q,Ee)}function le(Q,G,re,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==re.containerInfo||G.stateNode.implementation!==re.implementation?(G=xd(re,Q.mode,Ee),G.return=Q,G):(G=p(G,re.children||[]),G.return=Q,G)}function ye(Q,G,re,Ee,Ze){return G===null||G.tag!==7?(G=Ss(re,Q.mode,Ee,Ze),G.return=Q,G):(G=p(G,re),G.return=Q,G)}function Se(Q,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return G=_d(""+G,Q.mode,re),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return re=mu(G.type,G.key,G.props,null,Q.mode,re),re.ref=Sa(Q,null,G),re.return=Q,re;case P:return G=xd(G,Q.mode,re),G.return=Q,G;case ce:var Ee=G._init;return Se(Q,Ee(G._payload),re)}if(qt(G)||ee(G))return G=Ss(G,Q.mode,re,null),G.return=Q,G;Xl(Q,G)}return null}function xe(Q,G,re,Ee){var Ze=G!==null?G.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:O(Q,G,""+re,Ee);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case L:return re.key===Ze?z(Q,G,re,Ee):null;case P:return re.key===Ze?le(Q,G,re,Ee):null;case ce:return Ze=re._init,xe(Q,G,Ze(re._payload),Ee)}if(qt(re)||ee(re))return Ze!==null?null:ye(Q,G,re,Ee,null);Xl(Q,re)}return null}function ke(Q,G,re,Ee,Ze){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(re)||null,O(G,Q,""+Ee,Ze);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case L:return Q=Q.get(Ee.key===null?re:Ee.key)||null,z(G,Q,Ee,Ze);case P:return Q=Q.get(Ee.key===null?re:Ee.key)||null,le(G,Q,Ee,Ze);case ce:var nt=Ee._init;return ke(Q,G,re,nt(Ee._payload),Ze)}if(qt(Ee)||ee(Ee))return Q=Q.get(re)||null,ye(G,Q,Ee,Ze,null);Xl(G,Ee)}return null}function Xe(Q,G,re,Ee){for(var Ze=null,nt=null,it=G,at=G=0,vn=null;it!==null&&at<re.length;at++){it.index>at?(vn=it,it=null):vn=it.sibling;var At=xe(Q,it,re[at],Ee);if(At===null){it===null&&(it=vn);break}i&&it&&At.alternate===null&&s(Q,it),G=_(At,G,at),nt===null?Ze=At:nt.sibling=At,nt=At,it=vn}if(at===re.length)return l(Q,it),jt&&hs(Q,at),Ze;if(it===null){for(;at<re.length;at++)it=Se(Q,re[at],Ee),it!==null&&(G=_(it,G,at),nt===null?Ze=it:nt.sibling=it,nt=it);return jt&&hs(Q,at),Ze}for(it=c(Q,it);at<re.length;at++)vn=ke(it,Q,at,re[at],Ee),vn!==null&&(i&&vn.alternate!==null&&it.delete(vn.key===null?at:vn.key),G=_(vn,G,at),nt===null?Ze=vn:nt.sibling=vn,nt=vn);return i&&it.forEach(function(Wr){return s(Q,Wr)}),jt&&hs(Q,at),Ze}function qe(Q,G,re,Ee){var Ze=ee(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var nt=Ze=null,it=G,at=G=0,vn=null,At=re.next();it!==null&&!At.done;at++,At=re.next()){it.index>at?(vn=it,it=null):vn=it.sibling;var Wr=xe(Q,it,At.value,Ee);if(Wr===null){it===null&&(it=vn);break}i&&it&&Wr.alternate===null&&s(Q,it),G=_(Wr,G,at),nt===null?Ze=Wr:nt.sibling=Wr,nt=Wr,it=vn}if(At.done)return l(Q,it),jt&&hs(Q,at),Ze;if(it===null){for(;!At.done;at++,At=re.next())At=Se(Q,At.value,Ee),At!==null&&(G=_(At,G,at),nt===null?Ze=At:nt.sibling=At,nt=At);return jt&&hs(Q,at),Ze}for(it=c(Q,it);!At.done;at++,At=re.next())At=ke(it,Q,at,At.value,Ee),At!==null&&(i&&At.alternate!==null&&it.delete(At.key===null?at:At.key),G=_(At,G,at),nt===null?Ze=At:nt.sibling=At,nt=At);return i&&it.forEach(function(HE){return s(Q,HE)}),jt&&hs(Q,at),Ze}function on(Q,G,re,Ee){if(typeof re=="object"&&re!==null&&re.type===F&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case L:e:{for(var Ze=re.key,nt=G;nt!==null;){if(nt.key===Ze){if(Ze=re.type,Ze===F){if(nt.tag===7){l(Q,nt.sibling),G=p(nt,re.props.children),G.return=Q,Q=G;break e}}else if(nt.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ce&&Lg(Ze)===nt.type){l(Q,nt.sibling),G=p(nt,re.props),G.ref=Sa(Q,nt,re),G.return=Q,Q=G;break e}l(Q,nt);break}else s(Q,nt);nt=nt.sibling}re.type===F?(G=Ss(re.props.children,Q.mode,Ee,re.key),G.return=Q,Q=G):(Ee=mu(re.type,re.key,re.props,null,Q.mode,Ee),Ee.ref=Sa(Q,G,re),Ee.return=Q,Q=Ee)}return w(Q);case P:e:{for(nt=re.key;G!==null;){if(G.key===nt)if(G.tag===4&&G.stateNode.containerInfo===re.containerInfo&&G.stateNode.implementation===re.implementation){l(Q,G.sibling),G=p(G,re.children||[]),G.return=Q,Q=G;break e}else{l(Q,G);break}else s(Q,G);G=G.sibling}G=xd(re,Q.mode,Ee),G.return=Q,Q=G}return w(Q);case ce:return nt=re._init,on(Q,G,nt(re._payload),Ee)}if(qt(re))return Xe(Q,G,re,Ee);if(ee(re))return qe(Q,G,re,Ee);Xl(Q,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,G!==null&&G.tag===6?(l(Q,G.sibling),G=p(G,re),G.return=Q,Q=G):(l(Q,G),G=_d(re,Q.mode,Ee),G.return=Q,Q=G),w(Q)):l(Q,G)}return on}var io=Ig(!0),Ng=Ig(!1),jl=Ir(null),Yl=null,ro=null,Rf=null;function bf(){Rf=ro=Yl=null}function Pf(i){var s=jl.current;Ht(jl),i._currentValue=s}function Df(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function so(i,s){Yl=i,Rf=ro=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&($n=!0),i.firstContext=null)}function di(i){var s=i._currentValue;if(Rf!==i)if(i={context:i,memoizedValue:s,next:null},ro===null){if(Yl===null)throw Error(t(308));ro=i,Yl.dependencies={lanes:0,firstContext:i}}else ro=ro.next=i;return s}var ps=null;function Lf(i){ps===null?ps=[i]:ps.push(i)}function Ug(i,s,l,c){var p=s.interleaved;return p===null?(l.next=l,Lf(s)):(l.next=p.next,p.next=l),s.interleaved=l,ar(i,c)}function ar(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fr=!1;function If(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function lr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,ar(i,l)}return p=c.interleaved,p===null?(s.next=s,Lf(c)):(s.next=p.next,p.next=s),c.interleaved=s,ar(i,l)}function ql(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,jn(i,l)}}function Og(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function $l(i,s,l,c){var p=i.updateQueue;Fr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,O=p.shared.pending;if(O!==null){p.shared.pending=null;var z=O,le=z.next;z.next=null,w===null?_=le:w.next=le,w=z;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==w&&(O===null?ye.firstBaseUpdate=le:O.next=le,ye.lastBaseUpdate=z))}if(_!==null){var Se=p.baseState;w=0,ye=le=z=null,O=_;do{var xe=O.lane,ke=O.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Xe=i,qe=O;switch(xe=s,ke=l,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(ke,Se,xe);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,xe=typeof Xe=="function"?Xe.call(ke,Se,xe):Xe,xe==null)break e;Se=ie({},Se,xe);break e;case 2:Fr=!0}}O.callback!==null&&O.lane!==0&&(i.flags|=64,xe=p.effects,xe===null?p.effects=[O]:xe.push(O))}else ke={eventTime:ke,lane:xe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(le=ye=ke,z=Se):ye=ye.next=ke,w|=xe;if(O=O.next,O===null){if(O=p.shared.pending,O===null)break;xe=O,O=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(ye===null&&(z=Se),p.baseState=z,p.firstBaseUpdate=le,p.lastBaseUpdate=ye,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);vs|=w,i.lanes=w,i.memoizedState=Se}}function Bg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ma={},zi=Ir(Ma),Ea=Ir(Ma),Ta=Ir(Ma);function ms(i){if(i===Ma)throw Error(t(174));return i}function Nf(i,s){switch(kt(Ta,s),kt(Ea,i),kt(zi,Ma),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=T(s,i)}Ht(zi),kt(zi,s)}function oo(){Ht(zi),Ht(Ea),Ht(Ta)}function kg(i){ms(Ta.current);var s=ms(zi.current),l=T(s,i.type);s!==l&&(kt(Ea,i),kt(zi,l))}function Uf(i){Ea.current===i&&(Ht(zi),Ht(Ea))}var Kt=Ir(0);function Kl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ff=[];function Of(){for(var i=0;i<Ff.length;i++)Ff[i]._workInProgressVersionPrimary=null;Ff.length=0}var Zl=C.ReactCurrentDispatcher,Bf=C.ReactCurrentBatchConfig,gs=0,Zt=null,fn=null,mn=null,Jl=!1,wa=!1,Aa=0,cE=0;function Cn(){throw Error(t(321))}function kf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ti(i[l],s[l]))return!1;return!0}function zf(i,s,l,c,p,_){if(gs=_,Zt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Zl.current=i===null||i.memoizedState===null?pE:mE,i=l(c,p),wa){_=0;do{if(wa=!1,Aa=0,25<=_)throw Error(t(301));_+=1,mn=fn=null,s.updateQueue=null,Zl.current=gE,i=l(c,p)}while(wa)}if(Zl.current=tu,s=fn!==null&&fn.next!==null,gs=0,mn=fn=Zt=null,Jl=!1,s)throw Error(t(300));return i}function Vf(){var i=Aa!==0;return Aa=0,i}function Vi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Zt.memoizedState=mn=i:mn=mn.next=i,mn}function hi(){if(fn===null){var i=Zt.alternate;i=i!==null?i.memoizedState:null}else i=fn.next;var s=mn===null?Zt.memoizedState:mn.next;if(s!==null)mn=s,fn=i;else{if(i===null)throw Error(t(310));fn=i,i={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},mn===null?Zt.memoizedState=mn=i:mn=mn.next=i}return mn}function Ca(i,s){return typeof s=="function"?s(i):s}function Hf(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=fn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var O=w=null,z=null,le=_;do{var ye=le.lane;if((gs&ye)===ye)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:i(c,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(O=z=Se,w=c):z=z.next=Se,Zt.lanes|=ye,vs|=ye}le=le.next}while(le!==null&&le!==_);z===null?w=c:z.next=O,Ti(c,s.memoizedState)||($n=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=z,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,Zt.lanes|=_,vs|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Gf(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);Ti(_,s.memoizedState)||($n=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,c]}function zg(){}function Vg(i,s){var l=Zt,c=hi(),p=s(),_=!Ti(c.memoizedState,p);if(_&&(c.memoizedState=p,$n=!0),c=c.queue,Wf(Wg.bind(null,l,c,i),[i]),c.getSnapshot!==s||_||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Ra(9,Gg.bind(null,l,c,p,s),void 0,null),gn===null)throw Error(t(349));(gs&30)!==0||Hg(l,s,p)}return p}function Hg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Gg(i,s,l,c){s.value=l,s.getSnapshot=c,Xg(s)&&jg(i)}function Wg(i,s,l){return l(function(){Xg(s)&&jg(i)})}function Xg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ti(i,l)}catch{return!0}}function jg(i){var s=ar(i,1);s!==null&&bi(s,i,1,-1)}function Yg(i){var s=Vi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:i},s.queue=i,i=i.dispatch=hE.bind(null,Zt,i),[s.memoizedState,i]}function Ra(i,s,l,c){return i={tag:i,create:s,destroy:l,deps:c,next:null},s=Zt.updateQueue,s===null?(s={lastEffect:null,stores:null},Zt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i)),i}function qg(){return hi().memoizedState}function Ql(i,s,l,c){var p=Vi();Zt.flags|=i,p.memoizedState=Ra(1|s,l,void 0,c===void 0?null:c)}function eu(i,s,l,c){var p=hi();c=c===void 0?null:c;var _=void 0;if(fn!==null){var w=fn.memoizedState;if(_=w.destroy,c!==null&&kf(c,w.deps)){p.memoizedState=Ra(s,l,_,c);return}}Zt.flags|=i,p.memoizedState=Ra(1|s,l,_,c)}function $g(i,s){return Ql(8390656,8,i,s)}function Wf(i,s){return eu(2048,8,i,s)}function Kg(i,s){return eu(4,2,i,s)}function Zg(i,s){return eu(4,4,i,s)}function Jg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Qg(i,s,l){return l=l!=null?l.concat([i]):null,eu(4,4,Jg.bind(null,s,i),l)}function Xf(){}function e0(i,s){var l=hi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&kf(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function t0(i,s){var l=hi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&kf(s,c[1])?c[0]:(i=i(),l.memoizedState=[i,s],i)}function n0(i,s,l){return(gs&21)===0?(i.baseState&&(i.baseState=!1,$n=!0),i.memoizedState=l):(Ti(l,s)||(l=Be(),Zt.lanes|=l,vs|=l,i.baseState=!0),s)}function fE(i,s){var l=mt;mt=l!==0&&4>l?l:4,i(!0);var c=Bf.transition;Bf.transition={};try{i(!1),s()}finally{mt=l,Bf.transition=c}}function i0(){return hi().memoizedState}function dE(i,s,l){var c=Vr(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},r0(i))s0(s,l);else if(l=Ug(i,s,l,c),l!==null){var p=kn();bi(l,i,c,p),o0(l,s,c)}}function hE(i,s,l){var c=Vr(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(r0(i))s0(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,O=_(w,l);if(p.hasEagerState=!0,p.eagerState=O,Ti(O,w)){var z=s.interleaved;z===null?(p.next=p,Lf(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=Ug(i,s,p,c),l!==null&&(p=kn(),bi(l,i,c,p),o0(l,s,c))}}function r0(i){var s=i.alternate;return i===Zt||s!==null&&s===Zt}function s0(i,s){wa=Jl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function o0(i,s,l){if((l&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,jn(i,l)}}var tu={readContext:di,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},pE={readContext:di,useCallback:function(i,s){return Vi().memoizedState=[i,s===void 0?null:s],i},useContext:di,useEffect:$g,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Ql(4194308,4,Jg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ql(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ql(4,2,i,s)},useMemo:function(i,s){var l=Vi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var c=Vi();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=dE.bind(null,Zt,i),[c.memoizedState,i]},useRef:function(i){var s=Vi();return i={current:i},s.memoizedState=i},useState:Yg,useDebugValue:Xf,useDeferredValue:function(i){return Vi().memoizedState=i},useTransition:function(){var i=Yg(!1),s=i[0];return i=fE.bind(null,i[1]),Vi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var c=Zt,p=Vi();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),gn===null)throw Error(t(349));(gs&30)!==0||Hg(c,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,$g(Wg.bind(null,c,_,i),[i]),c.flags|=2048,Ra(9,Gg.bind(null,c,_,l,s),void 0,null),l},useId:function(){var i=Vi(),s=gn.identifierPrefix;if(jt){var l=or,c=sr;l=(c&~(1<<32-Te(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Aa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=cE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},mE={readContext:di,useCallback:e0,useContext:di,useEffect:Wf,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:Zg,useMemo:t0,useReducer:Hf,useRef:qg,useState:function(){return Hf(Ca)},useDebugValue:Xf,useDeferredValue:function(i){var s=hi();return n0(s,fn.memoizedState,i)},useTransition:function(){var i=Hf(Ca)[0],s=hi().memoizedState;return[i,s]},useMutableSource:zg,useSyncExternalStore:Vg,useId:i0,unstable_isNewReconciler:!1},gE={readContext:di,useCallback:e0,useContext:di,useEffect:Wf,useImperativeHandle:Qg,useInsertionEffect:Kg,useLayoutEffect:Zg,useMemo:t0,useReducer:Gf,useRef:qg,useState:function(){return Gf(Ca)},useDebugValue:Xf,useDeferredValue:function(i){var s=hi();return fn===null?s.memoizedState=i:n0(s,fn.memoizedState,i)},useTransition:function(){var i=Gf(Ca)[0],s=hi().memoizedState;return[i,s]},useMutableSource:zg,useSyncExternalStore:Vg,useId:i0,unstable_isNewReconciler:!1};function Ai(i,s){if(i&&i.defaultProps){s=ie({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function jf(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:ie({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var nu={isMounted:function(i){return(i=i._reactInternals)?On(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=kn(),p=Vr(i),_=lr(c,p);_.payload=s,l!=null&&(_.callback=l),s=Or(i,_,p),s!==null&&(bi(s,i,p,c),ql(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=kn(),p=Vr(i),_=lr(c,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Or(i,_,p),s!==null&&(bi(s,i,p,c),ql(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=kn(),c=Vr(i),p=lr(l,c);p.tag=2,s!=null&&(p.callback=s),s=Or(i,p,c),s!==null&&(bi(s,i,c,l),ql(s,i,c))}};function a0(i,s,l,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!pa(l,c)||!pa(p,_):!0}function l0(i,s,l){var c=!1,p=Nr,_=s.contextType;return typeof _=="object"&&_!==null?_=di(_):(p=qn(s)?fs:An.current,c=s.contextTypes,_=(c=c!=null)?Qs(i,p):Nr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=nu,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function u0(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&nu.enqueueReplaceState(s,s.state,null)}function Yf(i,s,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},If(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=di(_):(_=qn(s)?fs:An.current,p.context=Qs(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(jf(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&nu.enqueueReplaceState(p,p.state,null),$l(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function ao(i,s){try{var l="",c=s;do l+=Oe(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function qf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function $f(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var vE=typeof WeakMap=="function"?WeakMap:Map;function c0(i,s,l){l=lr(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){uu||(uu=!0,cd=c),$f(i,s)},l}function f0(i,s,l){l=lr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;l.payload=function(){return c(p)},l.callback=function(){$f(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){$f(i,s),typeof c!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function d0(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new vE;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(l)||(p.add(l),i=DE.bind(null,i,s,l),s.then(i,i))}function h0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function p0(i,s,l,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=lr(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var _E=C.ReactCurrentOwner,$n=!1;function Bn(i,s,l,c){s.child=i===null?Ng(s,null,l,c):io(s,i.child,l,c)}function m0(i,s,l,c,p){l=l.render;var _=s.ref;return so(s,p),c=zf(i,s,l,c,_,p),l=Vf(),i!==null&&!$n?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ur(i,s,p)):(jt&&l&&Ef(s),s.flags|=1,Bn(i,s,c,p),s.child)}function g0(i,s,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!vd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,v0(i,s,_,c,p)):(i=mu(l.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:pa,l(w,c)&&i.ref===s.ref)return ur(i,s,p)}return s.flags|=1,i=Gr(_,c),i.ref=s.ref,i.return=s,s.child=i}function v0(i,s,l,c,p){if(i!==null){var _=i.memoizedProps;if(pa(_,c)&&i.ref===s.ref)if($n=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&($n=!0);else return s.lanes=i.lanes,ur(i,s,p)}return Kf(i,s,l,c,p)}function _0(i,s,l){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(uo,ii),ii|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,kt(uo,ii),ii|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,kt(uo,ii),ii|=c}else _!==null?(c=_.baseLanes|l,s.memoizedState=null):c=l,kt(uo,ii),ii|=c;return Bn(i,s,p,l),s.child}function x0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Kf(i,s,l,c,p){var _=qn(l)?fs:An.current;return _=Qs(s,_),so(s,p),l=zf(i,s,l,c,_,p),c=Vf(),i!==null&&!$n?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,ur(i,s,p)):(jt&&c&&Ef(s),s.flags|=1,Bn(i,s,l,p),s.child)}function y0(i,s,l,c,p){if(qn(l)){var _=!0;zl(s)}else _=!1;if(so(s,p),s.stateNode===null)ru(i,s),l0(s,l,c),Yf(s,l,c,p),c=!0;else if(i===null){var w=s.stateNode,O=s.memoizedProps;w.props=O;var z=w.context,le=l.contextType;typeof le=="object"&&le!==null?le=di(le):(le=qn(l)?fs:An.current,le=Qs(s,le));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==c||z!==le)&&u0(s,w,c,le),Fr=!1;var xe=s.memoizedState;w.state=xe,$l(s,c,w,p),z=s.memoizedState,O!==c||xe!==z||Yn.current||Fr?(typeof ye=="function"&&(jf(s,l,ye,c),z=s.memoizedState),(O=Fr||a0(s,l,O,c,xe,z,le))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=z),w.props=c,w.state=z,w.context=le,c=O):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Fg(i,s),O=s.memoizedProps,le=s.type===s.elementType?O:Ai(s.type,O),w.props=le,Se=s.pendingProps,xe=w.context,z=l.contextType,typeof z=="object"&&z!==null?z=di(z):(z=qn(l)?fs:An.current,z=Qs(s,z));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(O!==Se||xe!==z)&&u0(s,w,c,z),Fr=!1,xe=s.memoizedState,w.state=xe,$l(s,c,w,p);var Xe=s.memoizedState;O!==Se||xe!==Xe||Yn.current||Fr?(typeof ke=="function"&&(jf(s,l,ke,c),Xe=s.memoizedState),(le=Fr||a0(s,l,le,c,xe,Xe,z)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,z)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Xe),w.props=c,w.state=Xe,w.context=z,c=le):(typeof w.componentDidUpdate!="function"||O===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||O===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),c=!1)}return Zf(i,s,l,c,_,p)}function Zf(i,s,l,c,p,_){x0(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&wg(s,l,!1),ur(i,s,_);c=s.stateNode,_E.current=s;var O=w&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=io(s,i.child,null,_),s.child=io(s,null,O,_)):Bn(i,s,O,_),s.memoizedState=c.state,p&&wg(s,l,!0),s.child}function S0(i){var s=i.stateNode;s.pendingContext?Eg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Eg(i,s.context,!1),Nf(i,s.containerInfo)}function M0(i,s,l,c,p){return no(),Cf(p),s.flags|=256,Bn(i,s,l,c),s.child}var Jf={dehydrated:null,treeContext:null,retryLane:0};function Qf(i){return{baseLanes:i,cachePool:null,transitions:null}}function E0(i,s,l){var c=s.pendingProps,p=Kt.current,_=!1,w=(s.flags&128)!==0,O;if((O=w)||(O=i!==null&&i.memoizedState===null?!1:(p&2)!==0),O?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),kt(Kt,p&1),i===null)return Af(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=gu(w,c,0,null),i=Ss(i,c,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=Qf(l),s.memoizedState=Jf,i):ed(s,w));if(p=i.memoizedState,p!==null&&(O=p.dehydrated,O!==null))return xE(i,s,w,c,O,p,l);if(_){_=c.fallback,w=s.mode,p=i.child,O=p.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=z,s.deletions=null):(c=Gr(p,z),c.subtreeFlags=p.subtreeFlags&14680064),O!==null?_=Gr(O,_):(_=Ss(_,w,l,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?Qf(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,s.memoizedState=Jf,c}return _=i.child,i=_.sibling,c=Gr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=l),c.return=s,c.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=c,s.memoizedState=null,c}function ed(i,s){return s=gu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function iu(i,s,l,c){return c!==null&&Cf(c),io(s,i.child,null,l),i=ed(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function xE(i,s,l,c,p,_,w){if(l)return s.flags&256?(s.flags&=-257,c=qf(Error(t(422))),iu(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=gu({mode:"visible",children:c.children},p,0,null),_=Ss(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&io(s,i.child,null,w),s.child.memoizedState=Qf(w),s.memoizedState=Jf,_);if((s.mode&1)===0)return iu(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var O=c.dgst;return c=O,_=Error(t(419)),c=qf(_,c,void 0),iu(i,s,w,c)}if(O=(w&i.childLanes)!==0,$n||O){if(c=gn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ar(i,p),bi(c,i,p,-1))}return gd(),c=qf(Error(t(421))),iu(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=LE.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ni=Lr(p.nextSibling),ti=s,jt=!0,wi=null,i!==null&&(ci[fi++]=sr,ci[fi++]=or,ci[fi++]=ds,sr=i.id,or=i.overflow,ds=s),s=ed(s,c.children),s.flags|=4096,s)}function T0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Df(i.return,s,l)}function td(i,s,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function w0(i,s,l){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(Bn(i,s,c.children,l),c=Kt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&T0(i,l,s);else if(i.tag===19)T0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(kt(Kt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Kl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),td(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Kl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}td(s,!0,l,null,_);break;case"together":td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ru(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ur(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),vs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Gr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Gr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function yE(i,s,l){switch(s.tag){case 3:S0(s),no();break;case 5:kg(s);break;case 1:qn(s.type)&&zl(s);break;case 4:Nf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;kt(jl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(kt(Kt,Kt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?E0(i,s,l):(kt(Kt,Kt.current&1),i=ur(i,s,l),i!==null?i.sibling:null);kt(Kt,Kt.current&1);break;case 19:if(c=(l&s.childLanes)!==0,(i.flags&128)!==0){if(c)return w0(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),kt(Kt,Kt.current),c)break;return null;case 22:case 23:return s.lanes=0,_0(i,s,l)}return ur(i,s,l)}var A0,nd,C0,R0;A0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},nd=function(){},C0=function(i,s,l,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,ms(zi.current);var _=null;switch(l){case"input":p=Rt(i,p),c=Rt(i,c),_=[];break;case"select":p=ie({},p,{value:void 0}),c=ie({},c,{value:void 0}),_=[];break;case"textarea":p=Wt(i,p),c=Wt(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Ol)}$e(l,c);var w;l=null;for(le in p)if(!c.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var O=p[le];for(w in O)O.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?_||(_=[]):(_=_||[]).push(le,null));for(le in c){var z=c[le];if(O=p!=null?p[le]:void 0,c.hasOwnProperty(le)&&z!==O&&(z!=null||O!=null))if(le==="style")if(O){for(w in O)!O.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in z)z.hasOwnProperty(w)&&O[w]!==z[w]&&(l||(l={}),l[w]=z[w])}else l||(_||(_=[]),_.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(_=_||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Vt("scroll",i),_||O===z||(_=[])):(_=_||[]).push(le,z))}l&&(_=_||[]).push("style",l);var le=_;(s.updateQueue=le)&&(s.flags|=4)}},R0=function(i,s,l,c){l!==c&&(s.flags|=4)};function ba(i,s){if(!jt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function SE(i,s,l){var c=s.pendingProps;switch(Tf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return qn(s.type)&&kl(),Rn(s),null;case 3:return c=s.stateNode,oo(),Ht(Yn),Ht(An),Of(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Wl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,wi!==null&&(hd(wi),wi=null))),nd(i,s),Rn(s),null;case 5:Uf(s);var p=ms(Ta.current);if(l=s.type,i!==null&&s.stateNode!=null)C0(i,s,l,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=ms(zi.current),Wl(s)){c=s.stateNode,l=s.type;var _=s.memoizedProps;switch(c[ki]=s,c[xa]=_,i=(s.mode&1)!==0,l){case"dialog":Vt("cancel",c),Vt("close",c);break;case"iframe":case"object":case"embed":Vt("load",c);break;case"video":case"audio":for(p=0;p<ga.length;p++)Vt(ga[p],c);break;case"source":Vt("error",c);break;case"img":case"image":case"link":Vt("error",c),Vt("load",c);break;case"details":Vt("toggle",c);break;case"input":yt(c,_),Vt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Vt("invalid",c);break;case"textarea":j(c,_),Vt("invalid",c)}$e(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var O=_[w];w==="children"?typeof O=="string"?c.textContent!==O&&(_.suppressHydrationWarning!==!0&&Fl(c.textContent,O,i),p=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(_.suppressHydrationWarning!==!0&&Fl(c.textContent,O,i),p=["children",""+O]):o.hasOwnProperty(w)&&O!=null&&w==="onScroll"&&Vt("scroll",c)}switch(l){case"input":Ge(c),Qt(c,_,!0);break;case"textarea":Ge(c),wt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Ol)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=N(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(l,{is:c.is}):(i=w.createElement(l),l==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,l),i[ki]=s,i[xa]=c,A0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Le(l,c),l){case"dialog":Vt("cancel",i),Vt("close",i),p=c;break;case"iframe":case"object":case"embed":Vt("load",i),p=c;break;case"video":case"audio":for(p=0;p<ga.length;p++)Vt(ga[p],i);p=c;break;case"source":Vt("error",i),p=c;break;case"img":case"image":case"link":Vt("error",i),Vt("load",i),p=c;break;case"details":Vt("toggle",i),p=c;break;case"input":yt(i,c),p=Rt(i,c),Vt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=ie({},c,{value:void 0}),Vt("invalid",i);break;case"textarea":j(i,c),p=Wt(i,c),Vt("invalid",i);break;default:p=c}$e(l,p),O=p;for(_ in O)if(O.hasOwnProperty(_)){var z=O[_];_==="style"?ge(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&oe(i,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&fe(i,z):typeof z=="number"&&fe(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Vt("scroll",i):z!=null&&D(i,_,z,w))}switch(l){case"input":Ge(i),Qt(i,c,!1);break;case"textarea":Ge(i),wt(i);break;case"option":c.value!=null&&i.setAttribute("value",""+he(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Lt(i,!!c.multiple,_,!1):c.defaultValue!=null&&Lt(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Ol)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)R0(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(l=ms(Ta.current),ms(zi.current),Wl(s)){if(c=s.stateNode,l=s.memoizedProps,c[ki]=s,(_=c.nodeValue!==l)&&(i=ti,i!==null))switch(i.tag){case 3:Fl(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Fl(c.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[ki]=s,s.stateNode=c}return Rn(s),null;case 13:if(Ht(Kt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(jt&&ni!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Dg(),no(),s.flags|=98560,_=!1;else if(_=Wl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[ki]=s}else no(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else wi!==null&&(hd(wi),wi=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Kt.current&1)!==0?dn===0&&(dn=3):gd())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return oo(),nd(i,s),i===null&&va(s.stateNode.containerInfo),Rn(s),null;case 10:return Pf(s.type._context),Rn(s),null;case 17:return qn(s.type)&&kl(),Rn(s),null;case 19:if(Ht(Kt),_=s.memoizedState,_===null)return Rn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)ba(_,!1);else{if(dn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Kl(i),w!==null){for(s.flags|=128,ba(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)_=l,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return kt(Kt,Kt.current&1|2),s.child}i=i.sibling}_.tail!==null&&$t()>co&&(s.flags|=128,c=!0,ba(_,!1),s.lanes=4194304)}else{if(!c)if(i=Kl(w),i!==null){if(s.flags|=128,c=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ba(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!jt)return Rn(s),null}else 2*$t()-_.renderingStartTime>co&&l!==1073741824&&(s.flags|=128,c=!0,ba(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(l=_.last,l!==null?l.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=$t(),s.sibling=null,l=Kt.current,kt(Kt,c?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return md(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(ii&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ME(i,s){switch(Tf(s),s.tag){case 1:return qn(s.type)&&kl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return oo(),Ht(Yn),Ht(An),Of(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Uf(s),null;case 13:if(Ht(Kt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));no()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ht(Kt),null;case 4:return oo(),null;case 10:return Pf(s.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var su=!1,bn=!1,EE=typeof WeakSet=="function"?WeakSet:Set,He=null;function lo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){tn(i,s,c)}else l.current=null}function id(i,s,l){try{l()}catch(c){tn(i,s,c)}}var b0=!1;function TE(i,s){if(mf=wl,i=ag(),af(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,O=-1,z=-1,le=0,ye=0,Se=i,xe=null;t:for(;;){for(var ke;Se!==l||p!==0&&Se.nodeType!==3||(O=w+p),Se!==_||c!==0&&Se.nodeType!==3||(z=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)xe=Se,Se=ke;for(;;){if(Se===i)break t;if(xe===l&&++le===p&&(O=w),xe===_&&++ye===c&&(z=w),(ke=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ke}l=O===-1||z===-1?null:{start:O,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(gf={focusedElem:i,selectionRange:l},wl=!1,He=s;He!==null;)if(s=He,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,He=i;else for(;He!==null;){s=He;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,on=Xe.memoizedState,Q=s.stateNode,G=Q.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Ai(s.type,qe),on);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){tn(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,He=i;break}He=s.return}return Xe=b0,b0=!1,Xe}function Pa(i,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&id(s,l,_)}p=p.next}while(p!==c)}}function ou(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function rd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function P0(i){var s=i.alternate;s!==null&&(i.alternate=null,P0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ki],delete s[xa],delete s[yf],delete s[oE],delete s[aE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function D0(i){return i.tag===5||i.tag===3||i.tag===4}function L0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||D0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function sd(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ol));else if(c!==4&&(i=i.child,i!==null))for(sd(i,s,l),i=i.sibling;i!==null;)sd(i,s,l),i=i.sibling}function od(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(od(i,s,l),i=i.sibling;i!==null;)od(i,s,l),i=i.sibling}var Mn=null,Ci=!1;function Br(i,s,l){for(l=l.child;l!==null;)I0(i,s,l),l=l.sibling}function I0(i,s,l){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(te,l)}catch{}switch(l.tag){case 5:bn||lo(l,s);case 6:var c=Mn,p=Ci;Mn=null,Br(i,s,l),Mn=c,Ci=p,Mn!==null&&(Ci?(i=Mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(Ci?(i=Mn,l=l.stateNode,i.nodeType===8?xf(i.parentNode,l):i.nodeType===1&&xf(i,l),la(i)):xf(Mn,l.stateNode));break;case 4:c=Mn,p=Ci,Mn=l.stateNode.containerInfo,Ci=!0,Br(i,s,l),Mn=c,Ci=p;break;case 0:case 11:case 14:case 15:if(!bn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&id(l,s,w),p=p.next}while(p!==c)}Br(i,s,l);break;case 1:if(!bn&&(lo(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(O){tn(l,s,O)}Br(i,s,l);break;case 21:Br(i,s,l);break;case 22:l.mode&1?(bn=(c=bn)||l.memoizedState!==null,Br(i,s,l),bn=c):Br(i,s,l);break;default:Br(i,s,l)}}function N0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new EE),s.forEach(function(c){var p=IE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Ri(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,w=s,O=w;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Ci=!1;break e;case 3:Mn=O.stateNode.containerInfo,Ci=!0;break e;case 4:Mn=O.stateNode.containerInfo,Ci=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));I0(_,w,p),Mn=null,Ci=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(le){tn(p,s,le)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)U0(s,i),s=s.sibling}function U0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ri(s,i),Hi(i),c&4){try{Pa(3,i,i.return),ou(3,i)}catch(qe){tn(i,i.return,qe)}try{Pa(5,i,i.return)}catch(qe){tn(i,i.return,qe)}}break;case 1:Ri(s,i),Hi(i),c&512&&l!==null&&lo(l,l.return);break;case 5:if(Ri(s,i),Hi(i),c&512&&l!==null&&lo(l,l.return),i.flags&32){var p=i.stateNode;try{fe(p,"")}catch(qe){tn(i,i.return,qe)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,O=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{O==="input"&&_.type==="radio"&&_.name!=null&&vt(p,_),Le(O,w);var le=Le(O,_);for(w=0;w<z.length;w+=2){var ye=z[w],Se=z[w+1];ye==="style"?ge(p,Se):ye==="dangerouslySetInnerHTML"?oe(p,Se):ye==="children"?fe(p,Se):D(p,ye,Se,le)}switch(O){case"input":Gt(p,_);break;case"textarea":yn(p,_);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ke=_.value;ke!=null?Lt(p,!!_.multiple,ke,!1):xe!==!!_.multiple&&(_.defaultValue!=null?Lt(p,!!_.multiple,_.defaultValue,!0):Lt(p,!!_.multiple,_.multiple?[]:"",!1))}p[xa]=_}catch(qe){tn(i,i.return,qe)}}break;case 6:if(Ri(s,i),Hi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){tn(i,i.return,qe)}}break;case 3:if(Ri(s,i),Hi(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{la(s.containerInfo)}catch(qe){tn(i,i.return,qe)}break;case 4:Ri(s,i),Hi(i);break;case 13:Ri(s,i),Hi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(ud=$t())),c&4&&N0(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(bn=(le=bn)||ye,Ri(s,i),bn=le):Ri(s,i),Hi(i),c&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!ye&&(i.mode&1)!==0)for(He=i,ye=i.child;ye!==null;){for(Se=He=ye;He!==null;){switch(xe=He,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:lo(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,l=xe.return;try{s=c,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(qe){tn(c,l,qe)}}break;case 5:lo(xe,xe.return);break;case 22:if(xe.memoizedState!==null){B0(Se);continue}}ke!==null?(ke.return=xe,He=ke):B0(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{p=Se.stateNode,le?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(O=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=de("display",w))}catch(qe){tn(i,i.return,qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(qe){tn(i,i.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ri(s,i),Hi(i),c&4&&N0(i);break;case 21:break;default:Ri(s,i),Hi(i)}}function Hi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(D0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(fe(p,""),c.flags&=-33);var _=L0(i);od(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,O=L0(i);sd(i,O,w);break;default:throw Error(t(161))}}catch(z){tn(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function wE(i,s,l){He=i,F0(i)}function F0(i,s,l){for(var c=(i.mode&1)!==0;He!==null;){var p=He,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||su;if(!w){var O=p.alternate,z=O!==null&&O.memoizedState!==null||bn;O=su;var le=bn;if(su=w,(bn=z)&&!le)for(He=p;He!==null;)w=He,z=w.child,w.tag===22&&w.memoizedState!==null?k0(p):z!==null?(z.return=w,He=z):k0(p);for(;_!==null;)He=_,F0(_),_=_.sibling;He=p,su=O,bn=le}O0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,He=_):O0(i)}}function O0(i){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:bn||ou(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!bn)if(l===null)c.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ai(s.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Bg(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Bg(s,w,l)}break;case 5:var O=s.stateNode;if(l===null&&s.flags&4){l=O;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var le=s.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&la(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||s.flags&512&&rd(s)}catch(xe){tn(s,s.return,xe)}}if(s===i){He=null;break}if(l=s.sibling,l!==null){l.return=s.return,He=l;break}He=s.return}}function B0(i){for(;He!==null;){var s=He;if(s===i){He=null;break}var l=s.sibling;if(l!==null){l.return=s.return,He=l;break}He=s.return}}function k0(i){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{ou(4,s)}catch(z){tn(s,l,z)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(z){tn(s,p,z)}}var _=s.return;try{rd(s)}catch(z){tn(s,_,z)}break;case 5:var w=s.return;try{rd(s)}catch(z){tn(s,w,z)}}}catch(z){tn(s,s.return,z)}if(s===i){He=null;break}var O=s.sibling;if(O!==null){O.return=s.return,He=O;break}He=s.return}}var AE=Math.ceil,au=C.ReactCurrentDispatcher,ad=C.ReactCurrentOwner,pi=C.ReactCurrentBatchConfig,Et=0,gn=null,un=null,En=0,ii=0,uo=Ir(0),dn=0,Da=null,vs=0,lu=0,ld=0,La=null,Kn=null,ud=0,co=1/0,cr=null,uu=!1,cd=null,kr=null,cu=!1,zr=null,fu=0,Ia=0,fd=null,du=-1,hu=0;function kn(){return(Et&6)!==0?$t():du!==-1?du:du=$t()}function Vr(i){return(i.mode&1)===0?1:(Et&2)!==0&&En!==0?En&-En:uE.transition!==null?(hu===0&&(hu=Be()),hu):(i=mt,i!==0||(i=window.event,i=i===void 0?16:Vm(i.type)),i)}function bi(i,s,l,c){if(50<Ia)throw Ia=0,fd=null,Error(t(185));pt(i,l,c),((Et&2)===0||i!==gn)&&(i===gn&&((Et&2)===0&&(lu|=l),dn===4&&Hr(i,En)),Zn(i,c),l===1&&Et===0&&(s.mode&1)===0&&(co=$t()+500,Vl&&Ur()))}function Zn(i,s){var l=i.callbackNode;It(i,s);var c=Bt(i,i===gn?En:0);if(c===0)l!==null&&na(l),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(l!=null&&na(l),s===1)i.tag===0?lE(V0.bind(null,i)):Ag(V0.bind(null,i)),rE(function(){(Et&6)===0&&Ur()}),l=null;else{switch(nr(c)){case 1:l=ia;break;case 4:l=R;break;case 16:l=Y;break;case 536870912:l=ne;break;default:l=Y}l=$0(l,z0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function z0(i,s){if(du=-1,hu=0,(Et&6)!==0)throw Error(t(327));var l=i.callbackNode;if(fo()&&i.callbackNode!==l)return null;var c=Bt(i,i===gn?En:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=pu(i,c);else{s=c;var p=Et;Et|=2;var _=G0();(gn!==i||En!==s)&&(cr=null,co=$t()+500,xs(i,s));do try{bE();break}catch(O){H0(i,O)}while(!0);bf(),au.current=_,Et=p,un!==null?s=0:(gn=null,En=0,s=dn)}if(s!==0){if(s===2&&(p=ln(i),p!==0&&(c=p,s=dd(i,p))),s===1)throw l=Da,xs(i,0),Hr(i,c),Zn(i,$t()),l;if(s===6)Hr(i,c);else{if(p=i.current.alternate,(c&30)===0&&!CE(p)&&(s=pu(i,c),s===2&&(_=ln(i),_!==0&&(c=_,s=dd(i,_))),s===1))throw l=Da,xs(i,0),Hr(i,c),Zn(i,$t()),l;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ys(i,Kn,cr);break;case 3:if(Hr(i,c),(c&130023424)===c&&(s=ud+500-$t(),10<s)){if(Bt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){kn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=_f(ys.bind(null,i,Kn,cr),s);break}ys(i,Kn,cr);break;case 4:if(Hr(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-Te(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*AE(c/1960))-c,10<c){i.timeoutHandle=_f(ys.bind(null,i,Kn,cr),c);break}ys(i,Kn,cr);break;case 5:ys(i,Kn,cr);break;default:throw Error(t(329))}}}return Zn(i,$t()),i.callbackNode===l?z0.bind(null,i):null}function dd(i,s){var l=La;return i.current.memoizedState.isDehydrated&&(xs(i,s).flags|=256),i=pu(i,s),i!==2&&(s=Kn,Kn=l,s!==null&&hd(s)),i}function hd(i){Kn===null?Kn=i:Kn.push.apply(Kn,i)}function CE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!Ti(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Hr(i,s){for(s&=~ld,s&=~lu,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Te(s),c=1<<l;i[l]=-1,s&=~c}}function V0(i){if((Et&6)!==0)throw Error(t(327));fo();var s=Bt(i,0);if((s&1)===0)return Zn(i,$t()),null;var l=pu(i,s);if(i.tag!==0&&l===2){var c=ln(i);c!==0&&(s=c,l=dd(i,c))}if(l===1)throw l=Da,xs(i,0),Hr(i,s),Zn(i,$t()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ys(i,Kn,cr),Zn(i,$t()),null}function pd(i,s){var l=Et;Et|=1;try{return i(s)}finally{Et=l,Et===0&&(co=$t()+500,Vl&&Ur())}}function _s(i){zr!==null&&zr.tag===0&&(Et&6)===0&&fo();var s=Et;Et|=1;var l=pi.transition,c=mt;try{if(pi.transition=null,mt=1,i)return i()}finally{mt=c,pi.transition=l,Et=s,(Et&6)===0&&Ur()}}function md(){ii=uo.current,Ht(uo)}function xs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,iE(l)),un!==null)for(l=un.return;l!==null;){var c=l;switch(Tf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&kl();break;case 3:oo(),Ht(Yn),Ht(An),Of();break;case 5:Uf(c);break;case 4:oo();break;case 13:Ht(Kt);break;case 19:Ht(Kt);break;case 10:Pf(c.type._context);break;case 22:case 23:md()}l=l.return}if(gn=i,un=i=Gr(i.current,null),En=ii=s,dn=0,Da=null,ld=lu=vs=0,Kn=La=null,ps!==null){for(s=0;s<ps.length;s++)if(l=ps[s],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}l.pending=c}ps=null}return i}function H0(i,s){do{var l=un;try{if(bf(),Zl.current=tu,Jl){for(var c=Zt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Jl=!1}if(gs=0,mn=fn=Zt=null,wa=!1,Aa=0,ad.current=null,l===null||l.return===null){dn=1,Da=s,un=null;break}e:{var _=i,w=l.return,O=l,z=s;if(s=En,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,ye=O,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=h0(w);if(ke!==null){ke.flags&=-257,p0(ke,w,O,_,s),ke.mode&1&&d0(_,le,s),s=ke,z=le;var Xe=s.updateQueue;if(Xe===null){var qe=new Set;qe.add(z),s.updateQueue=qe}else Xe.add(z);break e}else{if((s&1)===0){d0(_,le,s),gd();break e}z=Error(t(426))}}else if(jt&&O.mode&1){var on=h0(w);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),p0(on,w,O,_,s),Cf(ao(z,O));break e}}_=z=ao(z,O),dn!==4&&(dn=2),La===null?La=[_]:La.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Q=c0(_,z,s);Og(_,Q);break e;case 1:O=z;var G=_.type,re=_.stateNode;if((_.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(kr===null||!kr.has(re)))){_.flags|=65536,s&=-s,_.lanes|=s;var Ee=f0(_,O,s);Og(_,Ee);break e}}_=_.return}while(_!==null)}X0(l)}catch(Ze){s=Ze,un===l&&l!==null&&(un=l=l.return);continue}break}while(!0)}function G0(){var i=au.current;return au.current=tu,i===null?tu:i}function gd(){(dn===0||dn===3||dn===2)&&(dn=4),gn===null||(vs&268435455)===0&&(lu&268435455)===0||Hr(gn,En)}function pu(i,s){var l=Et;Et|=2;var c=G0();(gn!==i||En!==s)&&(cr=null,xs(i,s));do try{RE();break}catch(p){H0(i,p)}while(!0);if(bf(),Et=l,au.current=c,un!==null)throw Error(t(261));return gn=null,En=0,dn}function RE(){for(;un!==null;)W0(un)}function bE(){for(;un!==null&&!El();)W0(un)}function W0(i){var s=q0(i.alternate,i,ii);i.memoizedProps=i.pendingProps,s===null?X0(i):un=s,ad.current=null}function X0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=SE(l,s,ii),l!==null){un=l;return}}else{if(l=ME(l,s),l!==null){l.flags&=32767,un=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{dn=6,un=null;return}}if(s=s.sibling,s!==null){un=s;return}un=s=i}while(s!==null);dn===0&&(dn=5)}function ys(i,s,l){var c=mt,p=pi.transition;try{pi.transition=null,mt=1,PE(i,s,l,c)}finally{pi.transition=p,mt=c}return null}function PE(i,s,l,c){do fo();while(zr!==null);if((Et&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Xn(i,_),i===gn&&(un=gn=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||cu||(cu=!0,$0(Y,function(){return fo(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=pi.transition,pi.transition=null;var w=mt;mt=1;var O=Et;Et|=4,ad.current=null,TE(i,l),U0(l,i),KM(gf),wl=!!mf,gf=mf=null,i.current=l,wE(l),Yc(),Et=O,mt=w,pi.transition=_}else i.current=l;if(cu&&(cu=!1,zr=i,fu=p),_=i.pendingLanes,_===0&&(kr=null),Ve(l.stateNode),Zn(i,$t()),s!==null)for(c=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(uu)throw uu=!1,i=cd,cd=null,i;return(fu&1)!==0&&i.tag!==0&&fo(),_=i.pendingLanes,(_&1)!==0?i===fd?Ia++:(Ia=0,fd=i):Ia=0,Ur(),null}function fo(){if(zr!==null){var i=nr(fu),s=pi.transition,l=mt;try{if(pi.transition=null,mt=16>i?16:i,zr===null)var c=!1;else{if(i=zr,zr=null,fu=0,(Et&6)!==0)throw Error(t(331));var p=Et;for(Et|=4,He=i.current;He!==null;){var _=He,w=_.child;if((He.flags&16)!==0){var O=_.deletions;if(O!==null){for(var z=0;z<O.length;z++){var le=O[z];for(He=le;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:Pa(8,ye,_)}var Se=ye.child;if(Se!==null)Se.return=ye,He=Se;else for(;He!==null;){ye=He;var xe=ye.sibling,ke=ye.return;if(P0(ye),ye===le){He=null;break}if(xe!==null){xe.return=ke,He=xe;break}He=ke}}}var Xe=_.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var on=qe.sibling;qe.sibling=null,qe=on}while(qe!==null)}}He=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,He=w;else e:for(;He!==null;){if(_=He,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Pa(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,He=Q;break e}He=_.return}}var G=i.current;for(He=G;He!==null;){w=He;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,He=re;else e:for(w=G;He!==null;){if(O=He,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:ou(9,O)}}catch(Ze){tn(O,O.return,Ze)}if(O===w){He=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,He=Ee;break e}He=O.return}}if(Et=p,Ur(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(te,i)}catch{}c=!0}return c}finally{mt=l,pi.transition=s}}return!1}function j0(i,s,l){s=ao(l,s),s=c0(i,s,1),i=Or(i,s,1),s=kn(),i!==null&&(pt(i,1,s),Zn(i,s))}function tn(i,s,l){if(i.tag===3)j0(i,i,l);else for(;s!==null;){if(s.tag===3){j0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(kr===null||!kr.has(c))){i=ao(l,i),i=f0(s,i,1),s=Or(s,i,1),i=kn(),s!==null&&(pt(s,1,i),Zn(s,i));break}}s=s.return}}function DE(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),s=kn(),i.pingedLanes|=i.suspendedLanes&l,gn===i&&(En&l)===l&&(dn===4||dn===3&&(En&130023424)===En&&500>$t()-ud?xs(i,0):ld|=l),Zn(i,s)}function Y0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=kn();i=ar(i,s),i!==null&&(pt(i,s,l),Zn(i,l))}function LE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Y0(i,l)}function IE(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Y0(i,l)}var q0;q0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Yn.current)$n=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return $n=!1,yE(i,s,l);$n=(i.flags&131072)!==0}else $n=!1,jt&&(s.flags&1048576)!==0&&Cg(s,Gl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ru(i,s),i=s.pendingProps;var p=Qs(s,An.current);so(s,l),p=zf(null,s,c,i,p,l);var _=Vf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,qn(c)?(_=!0,zl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,If(s),p.updater=nu,s.stateNode=p,p._reactInternals=s,Yf(s,c,i,l),s=Zf(null,s,c,!0,_,l)):(s.tag=0,jt&&_&&Ef(s),Bn(null,s,p,l),s=s.child),s;case 16:c=s.elementType;e:{switch(ru(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=UE(c),i=Ai(c,i),p){case 0:s=Kf(null,s,c,i,l);break e;case 1:s=y0(null,s,c,i,l);break e;case 11:s=m0(null,s,c,i,l);break e;case 14:s=g0(null,s,c,Ai(c.type,i),l);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ai(c,p),Kf(i,s,c,p,l);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ai(c,p),y0(i,s,c,p,l);case 3:e:{if(S0(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Fg(i,s),$l(s,c,null,l);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=ao(Error(t(423)),s),s=M0(i,s,c,l,p);break e}else if(c!==p){p=ao(Error(t(424)),s),s=M0(i,s,c,l,p);break e}else for(ni=Lr(s.stateNode.containerInfo.firstChild),ti=s,jt=!0,wi=null,l=Ng(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(no(),c===p){s=ur(i,s,l);break e}Bn(i,s,c,l)}s=s.child}return s;case 5:return kg(s),i===null&&Af(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,vf(c,p)?w=null:_!==null&&vf(c,_)&&(s.flags|=32),x0(i,s),Bn(i,s,w,l),s.child;case 6:return i===null&&Af(s),null;case 13:return E0(i,s,l);case 4:return Nf(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=io(s,null,c,l):Bn(i,s,c,l),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ai(c,p),m0(i,s,c,p,l);case 7:return Bn(i,s,s.pendingProps,l),s.child;case 8:return Bn(i,s,s.pendingProps.children,l),s.child;case 12:return Bn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,kt(jl,c._currentValue),c._currentValue=w,_!==null)if(Ti(_.value,w)){if(_.children===p.children&&!Yn.current){s=ur(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var O=_.dependencies;if(O!==null){w=_.child;for(var z=O.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=lr(-1,l&-l),z.tag=2;var le=_.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),le.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),Df(_.return,l,s),O.lanes|=l;break}z=z.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,O=w.alternate,O!==null&&(O.lanes|=l),Df(w,l,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}Bn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,so(s,l),p=di(p),c=c(p),s.flags|=1,Bn(i,s,c,l),s.child;case 14:return c=s.type,p=Ai(c,s.pendingProps),p=Ai(c.type,p),g0(i,s,c,p,l);case 15:return v0(i,s,s.type,s.pendingProps,l);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ai(c,p),ru(i,s),s.tag=1,qn(c)?(i=!0,zl(s)):i=!1,so(s,l),l0(s,c,p),Yf(s,c,p,l),Zf(null,s,c,!0,i,l);case 19:return w0(i,s,l);case 22:return _0(i,s,l)}throw Error(t(156,s.tag))};function $0(i,s){return ls(i,s)}function NE(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(i,s,l,c){return new NE(i,s,l,c)}function vd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function UE(i){if(typeof i=="function")return vd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===q)return 11;if(i===J)return 14}return 2}function Gr(i,s){var l=i.alternate;return l===null?(l=mi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function mu(i,s,l,c,p,_){var w=2;if(c=i,typeof i=="function")vd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case F:return Ss(l.children,p,_,s);case E:w=8,p|=8;break;case I:return i=mi(12,l,s,p|2),i.elementType=I,i.lanes=_,i;case ue:return i=mi(13,l,s,p),i.elementType=ue,i.lanes=_,i;case pe:return i=mi(19,l,s,p),i.elementType=pe,i.lanes=_,i;case X:return gu(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:w=10;break e;case k:w=9;break e;case q:w=11;break e;case J:w=14;break e;case ce:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=mi(w,l,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function Ss(i,s,l,c){return i=mi(7,i,c,s),i.lanes=l,i}function gu(i,s,l,c){return i=mi(22,i,c,s),i.elementType=X,i.lanes=l,i.stateNode={isHidden:!1},i}function _d(i,s,l){return i=mi(6,i,null,s),i.lanes=l,i}function xd(i,s,l){return s=mi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function FE(i,s,l,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function yd(i,s,l,c,p,_,w,O,z){return i=new FE(i,s,l,O,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=mi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(_),i}function OE(i,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:i,containerInfo:s,implementation:l}}function K0(i){if(!i)return Nr;i=i._reactInternals;e:{if(On(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(qn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(qn(l))return Tg(i,l,s)}return s}function Z0(i,s,l,c,p,_,w,O,z){return i=yd(l,c,!0,i,p,_,w,O,z),i.context=K0(null),l=i.current,c=kn(),p=Vr(l),_=lr(c,p),_.callback=s??null,Or(l,_,p),i.current.lanes=p,pt(i,p,c),Zn(i,c),i}function vu(i,s,l,c){var p=s.current,_=kn(),w=Vr(p);return l=K0(l),s.context===null?s.context=l:s.pendingContext=l,s=lr(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Or(p,s,w),i!==null&&(bi(i,p,w,_),ql(i,p,w)),w}function _u(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function J0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Sd(i,s){J0(i,s),(i=i.alternate)&&J0(i,s)}function BE(){return null}var Q0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Md(i){this._internalRoot=i}xu.prototype.render=Md.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));vu(i,s,null,null)},xu.prototype.unmount=Md.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;_s(function(){vu(null,i,null,null)}),s[ir]=null}};function xu(i){this._internalRoot=i}xu.prototype.unstable_scheduleHydration=function(i){if(i){var s=Nt();i={blockedOn:null,target:i,priority:s};for(var l=0;l<br.length&&s!==0&&s<br[l].priority;l++);br.splice(l,0,i),l===0&&km(i)}};function Ed(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function yu(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ev(){}function kE(i,s,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var le=_u(w);_.call(le)}}var w=Z0(s,c,i,0,null,!1,!1,"",ev);return i._reactRootContainer=w,i[ir]=w.current,va(i.nodeType===8?i.parentNode:i),_s(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var O=c;c=function(){var le=_u(z);O.call(le)}}var z=yd(i,0,!1,null,null,!1,!1,"",ev);return i._reactRootContainer=z,i[ir]=z.current,va(i.nodeType===8?i.parentNode:i),_s(function(){vu(s,z,l,c)}),z}function Su(i,s,l,c,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var O=p;p=function(){var z=_u(w);O.call(z)}}vu(s,w,i,p)}else w=kE(l,s,i,p,c);return _u(w)}Dt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=St(s.pendingLanes);l!==0&&(jn(s,l|1),Zn(s,$t()),(Et&6)===0&&(co=$t()+500,Ur()))}break;case 13:_s(function(){var c=ar(i,1);if(c!==null){var p=kn();bi(c,i,1,p)}}),Sd(i,1)}},zt=function(i){if(i.tag===13){var s=ar(i,134217728);if(s!==null){var l=kn();bi(s,i,134217728,l)}Sd(i,134217728)}},Mi=function(i){if(i.tag===13){var s=Vr(i),l=ar(i,s);if(l!==null){var c=kn();bi(l,i,s,c)}Sd(i,s)}},Nt=function(){return mt},Ei=function(i,s){var l=mt;try{return mt=i,s()}finally{mt=l}},tt=function(i,s,l){switch(s){case"input":if(Gt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var p=Bl(c);if(!p)throw Error(t(90));Tt(c),Gt(c,p)}}}break;case"textarea":yn(i,l);break;case"select":s=l.value,s!=null&&Lt(i,!!l.multiple,s,!1)}},Ne=pd,_e=_s;var zE={usingClientEntryPoint:!1,Events:[ya,Zs,Bl,me,Pe,pd]},Na={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VE={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=as(i),i===null?null:i.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||BE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{te=Mu.inject(VE),we=Mu}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zE,Jn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return OE(i,s,null,l)},Jn.createRoot=function(i,s){if(!Ed(i))throw Error(t(299));var l=!1,c="",p=Q0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=yd(i,1,!1,null,null,l,!1,c,p),i[ir]=s.current,va(i.nodeType===8?i.parentNode:i),new Md(s)},Jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=as(s),i=i===null?null:i.stateNode,i},Jn.flushSync=function(i){return _s(i)},Jn.hydrate=function(i,s,l){if(!yu(s))throw Error(t(200));return Su(null,i,s,!0,l)},Jn.hydrateRoot=function(i,s,l){if(!Ed(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",w=Q0;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=Z0(s,null,i,1,l??null,p,!1,_,w),i[ir]=s.current,va(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new xu(s)},Jn.render=function(i,s,l){if(!yu(s))throw Error(t(200));return Su(null,i,s,!1,l)},Jn.unmountComponentAtNode=function(i){if(!yu(i))throw Error(t(40));return i._reactRootContainer?(_s(function(){Su(null,null,i,!1,function(){i._reactRootContainer=null,i[ir]=null})}),!0):!1},Jn.unstable_batchedUpdates=pd,Jn.unstable_renderSubtreeIntoContainer=function(i,s,l,c){if(!yu(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Su(i,s,l,!1,c)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var lv;function $E(){if(lv)return Ad.exports;lv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ad.exports=qE(),Ad.exports}var uv;function KE(){if(uv)return Eu;uv=1;var n=$E();return Eu.createRoot=n.createRoot,Eu.hydrateRoot=n.hydrateRoot,Eu}var ZE=KE();function mc(){const n=window.location.hash;return n.startsWith("#/")?n.slice(2).split("?")[0]:""}function Up(n){window.location.hash=n?`/${n}`:"/",requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}))}function wh(n){if(mc()!==""){Up(""),window.addEventListener("hashchange",()=>requestAnimationFrame(()=>Ah(n)),{once:!0});return}Ah(n)}function bd(n){return`#${n}`}function JE(){const n=window.location.hash;if(n&&!n.startsWith("#/")){const e=n.slice(1);requestAnimationFrame(()=>Ah(e))}}function Ah(n){const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function QE({routes:n}){const[e,t]=Je.useState(()=>typeof window>"u"?"":mc());return Je.useEffect(()=>{const r=()=>t(mc());return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),W.jsx(W.Fragment,{children:n[e]??n[""]})}const eT="./media/hero.mp4",ic=[{video:"./media/card1.mp4",title:"Herbouw van verouderde sites",text:"Je huidige website stamt uit een ander tijdperk? Ik teken hem opnieuw vanaf nul — sneller, mobielvriendelijk en klaar voor vandaag."},{video:"./media/card2.mp4",title:"Nieuwe websites op maat",text:"Geen sjablonen, geen thema’s. Elk ontwerp begint op een leeg blad en wordt getekend voor jouw zaak, jouw klanten en jouw verhaal."},{video:"./media/card3.mp4",title:"Eerst zien, dan beslissen",text:"Ik maak eerst een gratis proefontwerp van je homepage en mail het je. Je betaalt pas als je de volledige website wil."}],tT=[{client:"Autoschadebedrijf De Beule — Zele",outcome:"Conceptstudie: website uit 2012 herdacht als donker industrieel ontwerp met hun eigen slogan als kop.",tag:"Conceptstudie",image:"./media/debeule-hero.webp"},{client:"Schrijnwerkerij Michiels — Zele",outcome:"Conceptstudie: drie generaties vakmanschap eindelijk zichtbaar, met hun eigen realisaties als beeldmateriaal.",tag:"Conceptstudie",image:"./media/michiels-hero.webp"},{client:"Jimmy's Classic Cars — Buggenhout",outcome:"Conceptstudie: Mustang-specialist met eigen atelierfotografie als openingsbeeld. Passie voor Mustang, sinds 2011.",tag:"Conceptstudie",image:"./media/jimmys-hero.webp"}],nT=[{name:"Proefontwerp",price:"Gratis",period:"vooraf, zonder afspraak",features:["Homepage-concept voor je zaak","Gemaild als beelden","Geen verplichtingen"]},{name:"Volledige website",price:"Op maat",period:"pas na je akkoord",features:["Vanaf nul getekend","Mobiel eerst en snel","Jouw teksten en foto’s"],highlight:!0},{name:"Aanpassingen",price:"In overleg",period:"na oplevering",features:["Kleine wijzigingen","Nieuwe pagina’s","Rechtstreeks contact"]}],iT=[{name:"Jordan Guzman",role:"Ontwerper & bouwer",focus:"De persoon die je mailt, is de persoon die je site ontwerpt én bouwt. Niemand ertussen."}];function rT(){return W.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:eT,"aria-hidden":!0,style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",objectFit:"cover",zIndex:0}})}const Ux=Je.createContext({});function Uc(n){const e=Je.useRef(null);return e.current===null&&(e.current=n()),e.current}const Fp=Je.createContext(null),Op=Je.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function sT(n=!0){const e=Je.useContext(Fp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Je.useId();Je.useEffect(()=>{n&&o(a)},[n]);const u=Je.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,u]:[!0]}const Bp=typeof window<"u",kp=Bp?Je.useLayoutEffect:Je.useEffect,Hn=n=>n;let oT=Hn,Fx=Hn;function zp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Fs=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},_r=n=>n*1e3,xr=n=>n/1e3,aT={useManualTiming:!1};function lT(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){a.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,g=!1,v=!1)=>{const y=v&&r?e:t;return g&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Tu=["read","resolveKeyframes","update","preRender","render","postRender"],uT=40;function Ox(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=Tu.reduce((x,b)=>(x[b]=lT(a),x),{}),{read:f,resolveKeyframes:d,update:h,preRender:g,render:v,postRender:m}=u,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,uT),1),o.timestamp=x,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),g.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:Tu.reduce((x,b)=>{const D=u[b];return x[b]=(C,L=!1,P=!1)=>(t||M(),D.schedule(C,L,P)),x},{}),cancel:x=>{for(let b=0;b<Tu.length;b++)u[Tu[b]].cancel(x)},state:o,steps:u}}const{schedule:bt,cancel:Oi,state:xn,steps:Pd}=Ox(typeof requestAnimationFrame<"u"?requestAnimationFrame:Hn,!0),Bx=Je.createContext({strict:!1}),cv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ho={};for(const n in cv)Ho[n]={isEnabled:e=>cv[n].some(t=>!!e[t])};function cT(n){for(const e in n)Ho[e]={...Ho[e],...n[e]}}const fT=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function gc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||fT.has(n)}let kx=n=>!gc(n);function dT(n){n&&(kx=e=>e.startsWith("on")?!gc(e):n(e))}try{dT(require("@emotion/is-prop-valid").default)}catch{}function hT(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(kx(o)||t===!0&&gc(o)||!e&&!gc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function pT(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Fc=Je.createContext({});function al(n){return typeof n=="string"||Array.isArray(n)}function Oc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Vp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Hp=["initial",...Vp];function Bc(n){return Oc(n.animate)||Hp.some(e=>al(n[e]))}function zx(n){return!!(Bc(n)||n.variants)}function mT(n,e){if(Bc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||al(t)?t:void 0,animate:al(r)?r:void 0}}return n.inherit!==!1?e:{}}function gT(n){const{initial:e,animate:t}=mT(n,Je.useContext(Fc));return Je.useMemo(()=>({initial:e,animate:t}),[fv(e),fv(t)])}function fv(n){return Array.isArray(n)?n.join(" "):n}const vT=Symbol.for("motionComponentSymbol");function Do(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function _T(n,e,t){return Je.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Do(t)&&(t.current=r))},[e])}const Gp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),xT="framerAppearId",Vx="data-"+Gp(xT),{schedule:Wp}=Ox(queueMicrotask,!1),Hx=Je.createContext({});function yT(n,e,t,r,o){var a,u;const{visualElement:f}=Je.useContext(Fc),d=Je.useContext(Bx),h=Je.useContext(Fp),g=Je.useContext(Op).reducedMotion,v=Je.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const m=v.current,y=Je.useContext(Hx);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&ST(v.current,t,o,y);const M=Je.useRef(!1);Je.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const A=t[Vx],S=Je.useRef(!!A&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,A))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,A)));return kp(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),Wp.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),Je.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),m}function ST(n,e,t,r){const{layoutId:o,layout:a,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Gx(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||f&&Do(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function Gx(n){if(n)return n.options.allowProjection!==!1?n.projection:Gx(n.parent)}function MT({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,u;n&&cT(n);function f(h,g){let v;const m={...Je.useContext(Op),...h,layoutId:ET(h)},{isStatic:y}=m,M=gT(h),A=r(h,y);if(!y&&Bp){TT();const S=wT(m);v=S.MeasureLayout,M.visualElement=yT(o,A,m,e,S.ProjectionNode)}return W.jsxs(Fc.Provider,{value:M,children:[v&&M.visualElement?W.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,_T(A,M.visualElement,g),A,y,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&u!==void 0?u:""})`}`;const d=Je.forwardRef(f);return d[vT]=o,d}function ET({layoutId:n}){const e=Je.useContext(Ux).id;return e&&n!==void 0?e+"-"+n:n}function TT(n,e){Je.useContext(Bx).strict}function wT(n){const{drag:e,layout:t}=Ho;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const AT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Xp(n){return typeof n!="string"||n.includes("-")?!1:!!(AT.indexOf(n)>-1||/[A-Z]/u.test(n))}function dv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function jp(n,e,t,r){if(typeof e=="function"){const[o,a]=dv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=dv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const Ch=n=>Array.isArray(n),CT=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),RT=n=>Ch(n)?n[n.length-1]||0:n,Nn=n=>!!(n&&n.getVelocity);function rc(n){const e=Nn(n)?n.get():n;return CT(e)?e.toValue():e}function bT({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const u={latestValues:PT(r,o,a,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const Wx=n=>(e,t)=>{const r=Je.useContext(Fc),o=Je.useContext(Fp),a=()=>bT(n,e,r,o);return t?a():Uc(a)};function PT(n,e,t,r){const o={},a=r(n,{});for(const m in a)o[m]=rc(a[m]);let{initial:u,animate:f}=n;const d=Bc(n),h=zx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let g=t?t.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!Oc(v)){const m=Array.isArray(v)?v:[v];for(let y=0;y<m.length;y++){const M=jp(n,m[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const b in x){let D=x[b];if(Array.isArray(D)){const C=g?D.length-1:0;D=D[C]}D!==null&&(o[b]=D)}for(const b in A)o[b]=A[b]}}}return o}const qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set(qo),Xx=n=>e=>typeof e=="string"&&e.startsWith(n),jx=Xx("--"),DT=Xx("var(--"),Yp=n=>DT(n)?LT.test(n.split("/*")[0].trim()):!1,LT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Yx=(n,e)=>e&&typeof n=="number"?e.transform(n):n,Qi=(n,e,t)=>t>e?e:t<n?n:t,$o={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ll={...$o,transform:n=>Qi(0,1,n)},wu={...$o,default:1},pl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Zr=pl("deg"),$i=pl("%"),rt=pl("px"),IT=pl("vh"),NT=pl("vw"),hv={...$i,parse:n=>$i.parse(n)/100,transform:n=>$i.transform(n*100)},UT={borderWidth:rt,borderTopWidth:rt,borderRightWidth:rt,borderBottomWidth:rt,borderLeftWidth:rt,borderRadius:rt,radius:rt,borderTopLeftRadius:rt,borderTopRightRadius:rt,borderBottomRightRadius:rt,borderBottomLeftRadius:rt,width:rt,maxWidth:rt,height:rt,maxHeight:rt,top:rt,right:rt,bottom:rt,left:rt,padding:rt,paddingTop:rt,paddingRight:rt,paddingBottom:rt,paddingLeft:rt,margin:rt,marginTop:rt,marginRight:rt,marginBottom:rt,marginLeft:rt,backgroundPositionX:rt,backgroundPositionY:rt},FT={rotate:Zr,rotateX:Zr,rotateY:Zr,rotateZ:Zr,scale:wu,scaleX:wu,scaleY:wu,scaleZ:wu,skew:Zr,skewX:Zr,skewY:Zr,distance:rt,translateX:rt,translateY:rt,translateZ:rt,x:rt,y:rt,z:rt,perspective:rt,transformPerspective:rt,opacity:ll,originX:hv,originY:hv,originZ:rt},pv={...$o,transform:Math.round},qp={...UT,...FT,zIndex:pv,size:rt,fillOpacity:ll,strokeOpacity:ll,numOctaves:pv},OT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},BT=qo.length;function kT(n,e,t){let r="",o=!0;for(let a=0;a<BT;a++){const u=qo[a],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=Yx(f,qp[u]);if(!d){o=!1;const g=OT[u]||u;r+=`${g}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function $p(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(zs.has(d)){u=!0;continue}else if(jx(d)){o[d]=h;continue}else{const g=Yx(h,qp[d]);d.startsWith("origin")?(f=!0,a[d]=g):r[d]=g}}if(e.transform||(u||t?r.transform=kT(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:g=0}=a;r.transformOrigin=`${d} ${h} ${g}`}}const zT={offset:"stroke-dashoffset",array:"stroke-dasharray"},VT={offset:"strokeDashoffset",array:"strokeDasharray"};function HT(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?zT:VT;n[a.offset]=rt.transform(-r);const u=rt.transform(e),f=rt.transform(t);n[a.array]=`${u} ${f}`}function mv(n,e,t){return typeof n=="string"?n:rt.transform(e+t*n)}function GT(n,e,t){const r=mv(e,n.x,n.width),o=mv(t,n.y,n.height);return`${r} ${o}`}function Kp(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},g,v){if($p(n,h,v),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:y,dimensions:M}=n;m.transform&&(M&&(y.transform=m.transform),delete m.transform),M&&(o!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=GT(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),u!==void 0&&HT(m,u,f,d,!1)}const Zp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),qx=()=>({...Zp(),attrs:{}}),Jp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function $x(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const Kx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Zx(n,e,t,r){$x(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Kx.has(o)?o:Gp(o),e.attrs[o])}const vc={};function WT(n){Object.assign(vc,n)}function Jx(n,{layout:e,layoutId:t}){return zs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!vc[n]||n==="opacity")}function Qp(n,e,t){var r;const{style:o}=n,a={};for(const u in o)(Nn(o[u])||e.style&&Nn(e.style[u])||Jx(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[u]=o[u]);return a}function Qx(n,e,t){const r=Qp(n,e,t);for(const o in n)if(Nn(n[o])||Nn(e[o])){const a=qo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function XT(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const gv=["x","y","width","height","cx","cy","r"],jT={useVisualState:Wx({scrapeMotionValuesFromProps:Qx,createRenderState:qx,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const f in o)if(zs.has(f)){a=!0;break}}if(!a)return;let u=!e;if(e)for(let f=0;f<gv.length;f++){const d=gv[f];n[d]!==e[d]&&(u=!0)}u&&bt.read(()=>{XT(t,r),bt.render(()=>{Kp(r,o,Jp(t.tagName),n.transformTemplate),Zx(t,r)})})}})},YT={useVisualState:Wx({scrapeMotionValuesFromProps:Qp,createRenderState:Zp})};function ey(n,e,t){for(const r in e)!Nn(e[r])&&!Jx(r,t)&&(n[r]=e[r])}function qT({transformTemplate:n},e){return Je.useMemo(()=>{const t=Zp();return $p(t,e,n),Object.assign({},t.vars,t.style)},[e])}function $T(n,e){const t=n.style||{},r={};return ey(r,t,n),Object.assign(r,qT(n,e)),r}function KT(n,e){const t={},r=$T(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function ZT(n,e,t,r){const o=Je.useMemo(()=>{const a=qx();return Kp(a,e,Jp(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};ey(a,n.style,n),o.style={...a,...o.style}}return o}function JT(n=!1){return(t,r,o,{latestValues:a},u)=>{const d=(Xp(t)?ZT:KT)(r,a,u,t),h=hT(r,typeof t=="string",n),g=t!==Je.Fragment?{...h,...d,ref:o}:{},{children:v}=r,m=Je.useMemo(()=>Nn(v)?v.get():v,[v]);return Je.createElement(t,{...g,children:m})}}function QT(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Xp(r)?jT:YT,preloadedFeatures:n,useRender:JT(o),createVisualElement:e,Component:r};return MT(u)}}function ty(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function kc(n,e,t){const r=n.getProps();return jp(r,e,t!==void 0?t:r.custom,n)}const ny=zp(()=>window.ScrollTimeline!==void 0);class e1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(ny()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class t1 extends e1{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function em(n,e){return n?n[e]||n.default||n:void 0}const Rh=2e4;function iy(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Rh;)e+=t,r=n.next(e);return e>=Rh?1/0:e}function tm(n){return typeof n=="function"}function vv(n,e){n.timeline=e,n.onfinish=null}const nm=n=>Array.isArray(n)&&typeof n[0]=="number",n1={linearEasing:void 0};function i1(n,e){const t=zp(n);return()=>{var r;return(r=n1[e])!==null&&r!==void 0?r:t()}}const _c=i1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ry=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(Fs(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function sy(n){return!!(typeof n=="function"&&_c()||!n||typeof n=="string"&&(n in bh||_c())||nm(n)||Array.isArray(n)&&n.every(sy))}const qa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,bh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qa([0,.65,.55,1]),circOut:qa([.55,0,1,.45]),backIn:qa([.31,.01,.66,-.59]),backOut:qa([.33,1.53,.69,.99])};function oy(n,e){if(n)return typeof n=="function"&&_c()?ry(n,e):nm(n)?qa(n):Array.isArray(n)?n.map(t=>oy(t,e)||bh.easeOut):bh[n]}const Ii={x:!1,y:!1};function ay(){return Ii.x||Ii.y}function ly(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function uy(n,e){const t=ly(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function _v(n){return e=>{e.pointerType==="touch"||ay()||n(e)}}function r1(n,e,t={}){const[r,o,a]=uy(n,t),u=_v(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const g=_v(v=>{h(v),d.removeEventListener("pointerleave",g)});d.addEventListener("pointerleave",g,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),a}const cy=(n,e)=>e?n===e?!0:cy(n,e.parentElement):!1,im=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,s1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function o1(n){return s1.has(n.tagName)||n.tabIndex!==-1}const $a=new WeakSet;function xv(n){return e=>{e.key==="Enter"&&n(e)}}function Dd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const a1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=xv(()=>{if($a.has(t))return;Dd(t,"down");const o=xv(()=>{Dd(t,"up")}),a=()=>Dd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function yv(n){return im(n)&&!ay()}function l1(n,e,t={}){const[r,o,a]=uy(n,t),u=f=>{const d=f.currentTarget;if(!yv(f)||$a.has(d))return;$a.add(d);const h=e(f),g=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!yv(y)||!$a.has(d))&&($a.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{g(y,t.useGlobalTarget||cy(d,y.target))},m=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(f=>{!o1(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>a1(h,o),o)}),a}function u1(n){return n==="x"||n==="y"?Ii[n]?null:(Ii[n]=!0,()=>{Ii[n]=!1}):Ii.x||Ii.y?null:(Ii.x=Ii.y=!0,()=>{Ii.x=Ii.y=!1})}const fy=new Set(["width","height","top","left","right","bottom",...qo]);let sc;function c1(){sc=void 0}const Ki={now:()=>(sc===void 0&&Ki.set(xn.isProcessing||aT.useManualTiming?xn.timestamp:performance.now()),sc),set:n=>{sc=n,queueMicrotask(c1)}};function rm(n,e){n.indexOf(e)===-1&&n.push(e)}function sm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class om{constructor(){this.subscriptions=[]}add(e){return rm(this.subscriptions,e),()=>sm(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function am(n,e){return e?n*(1e3/e):0}const Sv=30,f1=n=>!isNaN(parseFloat(n)),el={current:void 0};class d1{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=Ki.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ki.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=f1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new om);const r=this.events[e].add(t);return e==="change"?()=>{r(),bt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return el.current&&el.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ki.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Sv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Sv);return am(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ji(n,e){return new d1(n,e)}function h1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ji(t))}function p1(n,e){const t=kc(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const u in a){const f=RT(a[u]);h1(n,u,f)}}function m1(n){return!!(Nn(n)&&n.add)}function Ph(n,e){const t=n.getValue("willChange");if(m1(t))return t.add(e)}function dy(n){return n.props[Vx]}const hy=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,g1=1e-7,v1=12;function _1(n,e,t,r,o){let a,u,f=0;do u=e+(t-e)/2,a=hy(u,r,o)-n,a>0?t=u:e=u;while(Math.abs(a)>g1&&++f<v1);return u}function ml(n,e,t,r){if(n===e&&t===r)return Hn;const o=a=>_1(a,0,1,n,t);return a=>a===0||a===1?a:hy(o(a),e,r)}const py=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,my=n=>e=>1-n(1-e),gy=ml(.33,1.53,.69,.99),lm=my(gy),vy=py(lm),_y=n=>(n*=2)<1?.5*lm(n):.5*(2-Math.pow(2,-10*(n-1))),um=n=>1-Math.sin(Math.acos(n)),xy=my(um),yy=py(um),Sy=n=>/^0[^.\s]+$/u.test(n);function x1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Sy(n):!0}const tl=n=>Math.round(n*1e5)/1e5,cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function y1(n){return n==null}const S1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,fm=(n,e)=>t=>!!(typeof t=="string"&&S1.test(t)&&t.startsWith(n)||e&&!y1(t)&&Object.prototype.hasOwnProperty.call(t,e)),My=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,u,f]=r.match(cm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},M1=n=>Qi(0,255,n),Ld={...$o,transform:n=>Math.round(M1(n))},Ls={test:fm("rgb","red"),parse:My("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Ld.transform(n)+", "+Ld.transform(e)+", "+Ld.transform(t)+", "+tl(ll.transform(r))+")"};function E1(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Dh={test:fm("#"),parse:E1,transform:Ls.transform},Lo={test:fm("hsl","hue"),parse:My("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+$i.transform(tl(e))+", "+$i.transform(tl(t))+", "+tl(ll.transform(r))+")"},Ln={test:n=>Ls.test(n)||Dh.test(n)||Lo.test(n),parse:n=>Ls.test(n)?Ls.parse(n):Lo.test(n)?Lo.parse(n):Dh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ls.transform(n):Lo.transform(n)},T1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function w1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(cm))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(T1))===null||t===void 0?void 0:t.length)||0)>0}const Ey="number",Ty="color",A1="var",C1="var(",Mv="${}",R1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ul(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(R1,d=>(Ln.test(d)?(r.color.push(a),o.push(Ty),t.push(Ln.parse(d))):d.startsWith(C1)?(r.var.push(a),o.push(A1),t.push(d)):(r.number.push(a),o.push(Ey),t.push(parseFloat(d))),++a,Mv)).split(Mv);return{values:t,split:f,indexes:r,types:o}}function wy(n){return ul(n).values}function Ay(n){const{split:e,types:t}=ul(n),r=e.length;return o=>{let a="";for(let u=0;u<r;u++)if(a+=e[u],o[u]!==void 0){const f=t[u];f===Ey?a+=tl(o[u]):f===Ty?a+=Ln.transform(o[u]):a+=o[u]}return a}}const b1=n=>typeof n=="number"?0:n;function P1(n){const e=wy(n);return Ay(n)(e.map(b1))}const ts={test:w1,parse:wy,createTransformer:Ay,getAnimatableNone:P1},D1=new Set(["brightness","contrast","saturate","opacity"]);function L1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(cm)||[];if(!r)return n;const o=t.replace(r,"");let a=D1.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const I1=/\b([a-z-]*)\(.*?\)/gu,Lh={...ts,getAnimatableNone:n=>{const e=n.match(I1);return e?e.map(L1).join(" "):n}},N1={...qp,color:Ln,backgroundColor:Ln,outlineColor:Ln,fill:Ln,stroke:Ln,borderColor:Ln,borderTopColor:Ln,borderRightColor:Ln,borderBottomColor:Ln,borderLeftColor:Ln,filter:Lh,WebkitFilter:Lh},dm=n=>N1[n];function Cy(n,e){let t=dm(n);return t!==Lh&&(t=ts),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const U1=new Set(["auto","none","0"]);function F1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!U1.has(a)&&ul(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Cy(t,o)}const Ev=n=>n===$o||n===rt,Tv=(n,e)=>parseFloat(n.split(", ")[e]),wv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Tv(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?Tv(a[1],n):0}},O1=new Set(["x","y","z"]),B1=qo.filter(n=>!O1.has(n));function k1(n){const e=[];return B1.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Go={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:wv(4,13),y:wv(5,14)};Go.translateX=Go.x;Go.translateY=Go.y;const Us=new Set;let Ih=!1,Nh=!1;function Ry(){if(Nh){const n=Array.from(Us).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=k1(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,u])=>{var f;(f=r.getValue(a))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Nh=!1,Ih=!1,Us.forEach(n=>n.complete()),Us.clear()}function by(){Us.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Nh=!0)})}function z1(){by(),Ry()}class hm{constructor(e,t,r,o,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Us.add(this),Ih||(Ih=!0,bt.read(by),bt.resolveKeyframes(Ry))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const u=o==null?void 0:o.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Us.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Us.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Py=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),V1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function H1(n){const e=V1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Dy(n,e,t=1){const[r,o]=H1(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const u=a.trim();return Py(u)?parseFloat(u):u}return Yp(o)?Dy(o,e,t+1):o}const Ly=n=>e=>e.test(n),G1={test:n=>n==="auto",parse:n=>n},Iy=[$o,rt,$i,Zr,NT,IT,G1],Av=n=>Iy.find(Ly(n));class Ny extends hm{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Yp(h))){const g=Dy(h,t.current);g!==void 0&&(e[d]=g),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!fy.has(r)||e.length!==2)return;const[o,a]=e,u=Av(o),f=Av(a);if(u!==f)if(Ev(u)&&Ev(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)x1(e[o])&&r.push(o);r.length&&F1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Go[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=Go[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Cv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ts.test(n)||n==="0")&&!n.startsWith("url("));function W1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function X1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=Cv(o,e),f=Cv(a,e);return!u||!f?!1:W1(n)||(t==="spring"||tm(t))&&r}const j1=n=>n!==null;function zc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(j1),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const Y1=40;class Uy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ki.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>Y1?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&z1(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ki.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!X1(e,r,o,a))if(u)this.options.duration=0;else{d&&d(zc(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Jt=(n,e,t)=>n+(e-n)*t;function Id(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function q1({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,u=0;if(!e)o=a=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=Id(d,f,n+1/3),a=Id(d,f,n),u=Id(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:r}}function xc(n,e){return t=>t>0?e:n}const Nd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},$1=[Dh,Ls,Lo],K1=n=>$1.find(e=>e.test(n));function Rv(n){const e=K1(n);if(!e)return!1;let t=e.parse(n);return e===Lo&&(t=q1(t)),t}const bv=(n,e)=>{const t=Rv(n),r=Rv(e);if(!t||!r)return xc(n,e);const o={...t};return a=>(o.red=Nd(t.red,r.red,a),o.green=Nd(t.green,r.green,a),o.blue=Nd(t.blue,r.blue,a),o.alpha=Jt(t.alpha,r.alpha,a),Ls.transform(o))},Z1=(n,e)=>t=>e(n(t)),gl=(...n)=>n.reduce(Z1),Uh=new Set(["none","hidden"]);function J1(n,e){return Uh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Q1(n,e){return t=>Jt(n,e,t)}function pm(n){return typeof n=="number"?Q1:typeof n=="string"?Yp(n)?xc:Ln.test(n)?bv:nw:Array.isArray(n)?Fy:typeof n=="object"?Ln.test(n)?bv:ew:xc}function Fy(n,e){const t=[...n],r=t.length,o=n.map((a,u)=>pm(a)(a,e[u]));return a=>{for(let u=0;u<r;u++)t[u]=o[u](a);return t}}function ew(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=pm(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function tw(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const u=e.types[a],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[a]=d,o[u]++}return r}const nw=(n,e)=>{const t=ts.createTransformer(e),r=ul(n),o=ul(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Uh.has(n)&&!o.values.length||Uh.has(e)&&!r.values.length?J1(n,e):gl(Fy(tw(r,o),o.values),t):xc(n,e)};function Oy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Jt(n,e,t):pm(n)(n,e)}const iw=5;function By(n,e,t){const r=Math.max(e-iw,0);return am(t-n(r),e-r)}const nn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ud=.001;function rw({duration:n=nn.duration,bounce:e=nn.bounce,velocity:t=nn.velocity,mass:r=nn.mass}){let o,a,u=1-e;u=Qi(nn.minDamping,nn.maxDamping,u),n=Qi(nn.minDuration,nn.maxDuration,xr(n)),u<1?(o=h=>{const g=h*u,v=g*n,m=g-t,y=Fh(h,u),M=Math.exp(-v);return Ud-m/y*M},a=h=>{const v=h*u*n,m=v*t+t,y=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=Fh(Math.pow(h,2),u);return(-o(h)+Ud>0?-1:1)*((m-y)*M)/A}):(o=h=>{const g=Math.exp(-h*n),v=(h-t)*n+1;return-Ud+g*v},a=h=>{const g=Math.exp(-h*n),v=(t-h)*(n*n);return g*v});const f=5/n,d=ow(o,a,f);if(n=_r(n),isNaN(d))return{stiffness:nn.stiffness,damping:nn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const sw=12;function ow(n,e,t){let r=t;for(let o=1;o<sw;o++)r=r-n(r)/e(r);return r}function Fh(n,e){return n*Math.sqrt(1-e*e)}const aw=["duration","bounce"],lw=["stiffness","damping","mass"];function Pv(n,e){return e.some(t=>n[t]!==void 0)}function uw(n){let e={velocity:nn.velocity,stiffness:nn.stiffness,damping:nn.damping,mass:nn.mass,isResolvedFromDuration:!1,...n};if(!Pv(n,lw)&&Pv(n,aw))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:nn.mass,stiffness:o,damping:a}}else{const t=rw(n);e={...e,...t,mass:nn.mass},e.isResolvedFromDuration=!0}return e}function ky(n=nn.visualDuration,e=nn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:d,damping:h,mass:g,duration:v,velocity:m,isResolvedFromDuration:y}=uw({...t,velocity:-xr(t.velocity||0)}),M=m||0,A=h/(2*Math.sqrt(d*g)),S=u-a,x=xr(Math.sqrt(d/g)),b=Math.abs(S)<5;r||(r=b?nn.restSpeed.granular:nn.restSpeed.default),o||(o=b?nn.restDelta.granular:nn.restDelta.default);let D;if(A<1){const L=Fh(x,A);D=P=>{const F=Math.exp(-A*x*P);return u-F*((M+A*x*S)/L*Math.sin(L*P)+S*Math.cos(L*P))}}else if(A===1)D=L=>u-Math.exp(-x*L)*(S+(M+x*S)*L);else{const L=x*Math.sqrt(A*A-1);D=P=>{const F=Math.exp(-A*x*P),E=Math.min(L*P,300);return u-F*((M+A*x*S)*Math.sinh(E)+L*S*Math.cosh(E))/L}}const C={calculatedDuration:y&&v||null,next:L=>{const P=D(L);if(y)f.done=L>=v;else{let F=0;A<1&&(F=L===0?_r(M):By(D,L,P));const E=Math.abs(F)<=r,I=Math.abs(u-P)<=o;f.done=E&&I}return f.value=f.done?u:P,f},toString:()=>{const L=Math.min(iy(C),Rh),P=ry(F=>C.next(L*F).value,L,30);return L+"ms "+P}};return C}function Dv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},y=E=>f!==void 0&&E<f||d!==void 0&&E>d,M=E=>f===void 0?d:d===void 0||Math.abs(f-E)<Math.abs(d-E)?f:d;let A=t*e;const S=v+A,x=u===void 0?S:u(S);x!==S&&(A=x-v);const b=E=>-A*Math.exp(-E/r),D=E=>x+b(E),C=E=>{const I=b(E),B=D(E);m.done=Math.abs(I)<=h,m.value=m.done?x:B};let L,P;const F=E=>{y(m.value)&&(L=E,P=ky({keyframes:[m.value,M(m.value)],velocity:By(D,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:g}))};return F(0),{calculatedDuration:null,next:E=>{let I=!1;return!P&&L===void 0&&(I=!0,C(E),F(E)),L!==void 0&&E>=L?P.next(E-L):(!I&&C(E),m)}}}const cw=ml(.42,0,1,1),fw=ml(0,0,.58,1),zy=ml(.42,0,.58,1),dw=n=>Array.isArray(n)&&typeof n[0]!="number",hw={linear:Hn,easeIn:cw,easeInOut:zy,easeOut:fw,circIn:um,circInOut:yy,circOut:xy,backIn:lm,backInOut:vy,backOut:gy,anticipate:_y},Lv=n=>{if(nm(n)){Fx(n.length===4);const[e,t,r,o]=n;return ml(e,t,r,o)}else if(typeof n=="string")return hw[n];return n};function pw(n,e,t){const r=[],o=t||Oy,a=n.length-1;for(let u=0;u<a;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Hn:e;f=gl(d,f)}r.push(f)}return r}function mm(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Fx(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=pw(e,r,o),d=f.length,h=g=>{if(u&&g<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=Fs(n[v],n[v+1],g);return f[v](m)};return t?g=>h(Qi(n[0],n[a-1],g)):h}function mw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Fs(0,e,r);n.push(Jt(t,1,o))}}function Vy(n){const e=[0];return mw(e,n.length-1),e}function gw(n,e){return n.map(t=>t*e)}function vw(n,e){return n.map(()=>e||zy).splice(0,n.length-1)}function yc({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=dw(r)?r.map(Lv):Lv(r),a={done:!1,value:e[0]},u=gw(t&&t.length===e.length?t:Vy(e),n),f=mm(u,e,{ease:Array.isArray(o)?o:vw(e,o)});return{calculatedDuration:n,next:d=>(a.value=f(d),a.done=d>=n,a)}}const _w=n=>{const e=({timestamp:t})=>n(t);return{start:()=>bt.update(e,!0),stop:()=>Oi(e),now:()=>xn.isProcessing?xn.timestamp:Ki.now()}},xw={decay:Dv,inertia:Dv,tween:yc,keyframes:yc,spring:ky},yw=n=>n/100;class gm extends Uy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,u=(o==null?void 0:o.KeyframeResolver)||hm,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(a,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=this.options,f=tm(t)?t:xw[t]||yc;let d,h;f!==yc&&typeof e[0]!="number"&&(d=gl(yw,Oy(e[0],e[1])),e=[0,100]);const g=f({...this.options,keyframes:e});a==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=iy(g));const{calculatedDuration:v}=g,m=v+o,y=m*(r+1)-o;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:m,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-m*(this.speed>=0?1:-1),b=this.speed>=0?x<0:x>g;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let D=this.currentTime,C=a;if(y){const E=Math.min(this.currentTime,g)/v;let I=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&I--,I=Math.min(I,y+1),!!(I%2)&&(M==="reverse"?(B=1-B,A&&(B-=A/v)):M==="mirror"&&(C=u)),D=Qi(0,1,B)*v}const L=b?{done:!1,value:d[0]}:C.next(D);f&&(L.value=f(L.value));let{done:P}=L;!b&&h!==null&&(P=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return F&&o!==void 0&&(L.value=zc(d,this.options,o)),S&&S(L.value),F&&this.finish(),L}get duration(){const{resolved:e}=this;return e?xr(e.calculatedDuration):0}get time(){return xr(this.currentTime)}set time(e){e=_r(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=xr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=_w,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Sw=new Set(["opacity","clipPath","filter","transform"]);function Mw(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const g=oy(f,o);return Array.isArray(g)&&(h.easing=g),n.animate(h,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}const Ew=zp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Sc=10,Tw=2e4;function ww(n){return tm(n.type)||n.type==="spring"||!sy(n.ease)}function Aw(n,e){const t=new gm({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<Tw;)r=t.sample(a),o.push(r.value),a+=Sc;return{times:void 0,keyframes:o,duration:a-Sc,ease:"linear"}}const Hy={anticipate:_y,backInOut:vy,circInOut:yy};function Cw(n){return n in Hy}class Iv extends Uy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new Ny(a,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof a=="string"&&_c()&&Cw(a)&&(a=Hy[a]),ww(this.options)){const{onComplete:v,onUpdate:m,motionValue:y,element:M,...A}=this.options,S=Aw(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,a=S.ease,u="keyframes"}const g=Mw(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:a});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(vv(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;f.set(zc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:u,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return xr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return xr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=_r(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Hn;const{animation:r}=t;vv(r,e)}return Hn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:v,element:m,...y}=this.options,M=new gm({...y,keyframes:r,duration:o,type:a,ease:u,times:f,isGenerator:!0}),A=_r(this.time);h.setWithVelocity(M.sample(A-Sc).value,M.sample(A).value,Sc)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return Ew()&&r&&Sw.has(r)&&!d&&!h&&!o&&a!=="mirror"&&u!==0&&f!=="inertia"}}const Rw={type:"spring",stiffness:500,damping:25,restSpeed:10},bw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Pw={type:"keyframes",duration:.8},Dw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Lw=(n,{keyframes:e})=>e.length>2?Pw:zs.has(n)?n.startsWith("scale")?bw(e[1]):Rw:Dw;function Iw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:f,from:d,elapsed:h,...g}){return!!Object.keys(g).length}const vm=(n,e,t,r={},o,a)=>u=>{const f=em(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-_r(d);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:m=>{e.set(m),f.onUpdate&&f.onUpdate(m)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};Iw(f)||(g={...g,...Lw(n,g)}),g.duration&&(g.duration=_r(g.duration)),g.repeatDelay&&(g.repeatDelay=_r(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const m=zc(g.keyframes,f);if(m!==void 0)return bt.update(()=>{g.onUpdate(m),g.onComplete()}),new t1([])}return!a&&Iv.supports(g)?new Iv(g):new gm(g)};function Nw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Gy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const m=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),y=d[v];if(y===void 0||g&&Nw(g,v))continue;const M={delay:t,...em(u||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=dy(n);if(x){const b=window.MotionHandoffAnimation(x,v,bt);b!==null&&(M.startTime=b,A=!0)}}Ph(n,v),m.start(vm(v,m,y,n.shouldReduceMotion&&fy.has(v)?{type:!1}:M,n,A));const S=m.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{bt.update(()=>{f&&p1(n,f)})}),h}function Oh(n,e,t={}){var r;const o=kc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const u=o?()=>Promise.all(Gy(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=a;return Uw(n,e,g+h,v,m,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,g]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>g())}else return Promise.all([u(),f(t.delay)])}function Uw(n,e,t=0,r=0,o=1,a){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(Fw).forEach((h,g)=>{h.notify("AnimationStart",e),u.push(Oh(h,e,{...a,delay:t+d(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function Fw(n,e){return n.sortNodePosition(e)}function Ow(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Oh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Oh(n,e,t);else{const o=typeof e=="function"?kc(n,e,t.custom):e;r=Promise.all(Gy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Bw=Hp.length;function Wy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Wy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Bw;t++){const r=Hp[t],o=n.props[r];(al(o)||o===!1)&&(e[r]=o)}return e}const kw=[...Vp].reverse(),zw=Vp.length;function Vw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Ow(n,t,r)))}function Hw(n){let e=Vw(n),t=Nv(),r=!0;const o=d=>(h,g)=>{var v;const m=kc(n,g,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:y,transitionEnd:M,...A}=m;h={...h,...A,...M}}return h};function a(d){e=d(n)}function u(d){const{props:h}=n,g=Wy(n.parent)||{},v=[],m=new Set;let y={},M=1/0;for(let S=0;S<zw;S++){const x=kw[S],b=t[x],D=h[x]!==void 0?h[x]:g[x],C=al(D),L=x===d?b.isActive:null;L===!1&&(M=S);let P=D===g[x]&&D!==h[x]&&C;if(P&&r&&n.manuallyAnimateOnMount&&(P=!1),b.protectedKeys={...y},!b.isActive&&L===null||!D&&!b.prevProp||Oc(D)||typeof D=="boolean")continue;const F=Gw(b.prevProp,D);let E=F||x===d&&b.isActive&&!P&&C||S>M&&C,I=!1;const B=Array.isArray(D)?D:[D];let k=B.reduce(o(x),{});L===!1&&(k={});const{prevResolvedValues:q={}}=b,ue={...q,...k},pe=X=>{E=!0,m.has(X)&&(I=!0,m.delete(X)),b.needsAnimating[X]=!0;const H=n.getValue(X);H&&(H.liveStyle=!1)};for(const X in ue){const H=k[X],ee=q[X];if(y.hasOwnProperty(X))continue;let ie=!1;Ch(H)&&Ch(ee)?ie=!ty(H,ee):ie=H!==ee,ie?H!=null?pe(X):m.add(X):H!==void 0&&m.has(X)?pe(X):b.protectedKeys[X]=!0}b.prevProp=D,b.prevResolvedValues=k,b.isActive&&(y={...y,...k}),r&&n.blockInitialAnimation&&(E=!1),E&&(!(P&&F)||I)&&v.push(...B.map(X=>({animation:X,options:{type:x}})))}if(m.size){const S={};m.forEach(x=>{const b=n.getBaseTarget(x),D=n.getValue(x);D&&(D.liveStyle=!0),S[x]=b??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function f(d,h){var g;if(t[d].isActive===h)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=u(d);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:a,getState:()=>t,reset:()=>{t=Nv(),r=!0}}}function Gw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!ty(e,n):!1}function Ms(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Nv(){return{animate:Ms(!0),whileInView:Ms(),whileHover:Ms(),whileTap:Ms(),whileDrag:Ms(),whileFocus:Ms(),exit:Ms()}}class is{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Ww extends is{constructor(e){super(e),e.animationState||(e.animationState=Hw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Oc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Xw=0;class jw extends is{constructor(){super(...arguments),this.id=Xw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Yw={animation:{Feature:Ww},exit:{Feature:jw}};function cl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function vl(n){return{point:{x:n.pageX,y:n.pageY}}}const qw=n=>e=>im(e)&&n(e,vl(e));function nl(n,e,t,r){return cl(n,e,qw(t),r)}const Uv=(n,e)=>Math.abs(n-e);function $w(n,e){const t=Uv(n.x,e.x),r=Uv(n.y,e.y);return Math.sqrt(t**2+r**2)}class Xy{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Od(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=$w(v.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:M}=v,{timestamp:A}=xn;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=Fd(m,this.transformPagePoint),bt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Od(v.type==="pointercancel"?this.lastMoveEventInfo:Fd(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!im(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=vl(e),f=Fd(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=xn;this.history=[{...d,timestamp:h}];const{onSessionStart:g}=t;g&&g(e,Od(f,this.history)),this.removeListeners=gl(nl(this.contextWindow,"pointermove",this.handlePointerMove),nl(this.contextWindow,"pointerup",this.handlePointerUp),nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Oi(this.updatePoint)}}function Fd(n,e){return e?{point:e(n.point)}:n}function Fv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Od({point:n},e){return{point:n,delta:Fv(n,jy(e)),offset:Fv(n,Kw(e)),velocity:Zw(e,.1)}}function Kw(n){return n[0]}function jy(n){return n[n.length-1]}function Zw(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=jy(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>_r(e)));)t--;if(!r)return{x:0,y:0};const a=xr(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const Yy=1e-4,Jw=1-Yy,Qw=1+Yy,qy=.01,eA=0-qy,tA=0+qy;function ai(n){return n.max-n.min}function nA(n,e,t){return Math.abs(n-e)<=t}function Ov(n,e,t,r=.5){n.origin=r,n.originPoint=Jt(e.min,e.max,n.origin),n.scale=ai(t)/ai(e),n.translate=Jt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Jw&&n.scale<=Qw||isNaN(n.scale))&&(n.scale=1),(n.translate>=eA&&n.translate<=tA||isNaN(n.translate))&&(n.translate=0)}function il(n,e,t,r){Ov(n.x,e.x,t.x,r?r.originX:void 0),Ov(n.y,e.y,t.y,r?r.originY:void 0)}function Bv(n,e,t){n.min=t.min+e.min,n.max=n.min+ai(e)}function iA(n,e,t){Bv(n.x,e.x,t.x),Bv(n.y,e.y,t.y)}function kv(n,e,t){n.min=e.min-t.min,n.max=n.min+ai(e)}function rl(n,e,t){kv(n.x,e.x,t.x),kv(n.y,e.y,t.y)}function rA(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Jt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Jt(t,n,r.max):Math.min(n,t)),n}function zv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function sA(n,{top:e,left:t,bottom:r,right:o}){return{x:zv(n.x,t,o),y:zv(n.y,e,r)}}function Vv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function oA(n,e){return{x:Vv(n.x,e.x),y:Vv(n.y,e.y)}}function aA(n,e){let t=.5;const r=ai(n),o=ai(e);return o>r?t=Fs(e.min,e.max-r,n.min):r>o&&(t=Fs(n.min,n.max-o,e.min)),Qi(0,1,t)}function lA(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Bh=.35;function uA(n=Bh){return n===!1?n=0:n===!0&&(n=Bh),{x:Hv(n,"left","right"),y:Hv(n,"top","bottom")}}function Hv(n,e,t){return{min:Gv(n,e),max:Gv(n,t)}}function Gv(n,e){return typeof n=="number"?n:n[e]||0}const Wv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Io=()=>({x:Wv(),y:Wv()}),Xv=()=>({min:0,max:0}),an=()=>({x:Xv(),y:Xv()});function _i(n){return[n("x"),n("y")]}function $y({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function cA({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function fA(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Bd(n){return n===void 0||n===1}function kh({scale:n,scaleX:e,scaleY:t}){return!Bd(n)||!Bd(e)||!Bd(t)}function Cs(n){return kh(n)||Ky(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Ky(n){return jv(n.x)||jv(n.y)}function jv(n){return n&&n!=="0%"}function Mc(n,e,t){const r=n-t,o=e*r;return t+o}function Yv(n,e,t,r,o){return o!==void 0&&(n=Mc(n,o,r)),Mc(n,t,r)+e}function zh(n,e=0,t=1,r,o){n.min=Yv(n.min,e,t,r,o),n.max=Yv(n.max,e,t,r,o)}function Zy(n,{x:e,y:t}){zh(n.x,e.translate,e.scale,e.originPoint),zh(n.y,t.translate,t.scale,t.originPoint)}const qv=.999999999999,$v=1.0000000000001;function dA(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,u;for(let f=0;f<o;f++){a=t[f],u=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Uo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,Zy(n,u)),r&&Cs(a.latestValues)&&Uo(n,a.latestValues))}e.x<$v&&e.x>qv&&(e.x=1),e.y<$v&&e.y>qv&&(e.y=1)}function No(n,e){n.min=n.min+e,n.max=n.max+e}function Kv(n,e,t,r,o=.5){const a=Jt(n.min,n.max,o);zh(n,e,t,a,r)}function Uo(n,e){Kv(n.x,e.x,e.scaleX,e.scale,e.originX),Kv(n.y,e.y,e.scaleY,e.scale,e.originY)}function Jy(n,e){return $y(fA(n.getBoundingClientRect(),e))}function hA(n,e,t){const r=Jy(n,t),{scroll:o}=e;return o&&(No(r.x,o.offset.x),No(r.y,o.offset.y)),r}const Qy=({current:n})=>n?n.ownerDocument.defaultView:null,pA=new WeakMap;class mA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=an(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vl(g).point)},a=(g,v)=>{const{drag:m,dragPropagation:y,onDragStart:M}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=u1(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),_i(S=>{let x=this.getAxisMotionValue(S).get()||0;if($i.test(x)){const{projection:b}=this.visualElement;if(b&&b.layout){const D=b.layout.layoutBox[S];D&&(x=ai(D)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&bt.postRender(()=>M(g,v)),Ph(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},u=(g,v)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=gA(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(g,v)},f=(g,v)=>this.stop(g,v),d=()=>_i(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new Xy(e,{onSessionStart:o,onStart:a,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:Qy(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&bt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Au(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=rA(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Do(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=sA(o.layoutBox,t):this.constraints=!1,this.elastic=uA(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&_i(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=lA(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Do(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=hA(r,o.root,this.visualElement.getTransformPagePoint());let u=oA(o.layout.layoutBox,a);if(t){const f=t(cA(u));this.hasMutatedConstraints=!!f,f&&(u=$y(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=_i(g=>{if(!Au(g,t,this.currentDirection))return;let v=d&&d[g]||{};u&&(v={min:0,max:0});const m=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(g,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Ph(this.visualElement,e),r.start(vm(e,r,0,t,this.visualElement,!1))}stopAnimation(){_i(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){_i(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){_i(t=>{const{drag:r}=this.getProps();if(!Au(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];a.set(e[t]-Jt(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Do(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};_i(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=aA({min:d,max:d},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),_i(u=>{if(!Au(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(Jt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;pA.set(this.visualElement,this);const e=this.visualElement.current,t=nl(e,"pointerdown",d=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Do(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),bt.read(r);const u=cl(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(_i(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=d[g].translate,v.set(v.get()+d[g].translate))}),this.visualElement.render())}));return()=>{u(),t(),a(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=Bh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:f}}}function Au(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function gA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class vA extends is{constructor(e){super(e),this.removeGroupControls=Hn,this.removeListeners=Hn,this.controls=new mA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Hn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Zv=n=>(e,t)=>{n&&bt.postRender(()=>n(e,t))};class _A extends is{constructor(){super(...arguments),this.removePointerDownListener=Hn}onPointerDown(e){this.session=new Xy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Qy(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Zv(e),onStart:Zv(t),onMove:r,onEnd:(a,u)=>{delete this.session,o&&bt.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=nl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const oc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Jv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Fa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(rt.test(n))n=parseFloat(n);else return n;const t=Jv(n,e.target.x),r=Jv(n,e.target.y);return`${t}% ${r}%`}},xA={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ts.parse(n);if(o.length>5)return r;const a=ts.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=Jt(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),a(o)}};class yA extends Je.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;WT(SA),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),oc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,u=r.projection;return u&&(u.isPresent=a,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||bt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Wp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function eS(n){const[e,t]=sT(),r=Je.useContext(Ux);return W.jsx(yA,{...n,layoutGroup:r,switchLayoutGroup:Je.useContext(Hx),isPresent:e,safeToRemove:t})}const SA={borderRadius:{...Fa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Fa,borderTopRightRadius:Fa,borderBottomLeftRadius:Fa,borderBottomRightRadius:Fa,boxShadow:xA};function MA(n,e,t){const r=Nn(n)?n:ji(n);return r.start(vm("",r,e,t)),r.animation}function EA(n){return n instanceof SVGElement&&n.tagName!=="svg"}const TA=(n,e)=>n.depth-e.depth;class wA{constructor(){this.children=[],this.isDirty=!1}add(e){rm(this.children,e),this.isDirty=!0}remove(e){sm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(TA),this.isDirty=!1,this.children.forEach(e)}}function AA(n,e){const t=Ki.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Oi(r),n(a-e))};return bt.read(r,!0),()=>Oi(r)}const tS=["TopLeft","TopRight","BottomLeft","BottomRight"],CA=tS.length,Qv=n=>typeof n=="string"?parseFloat(n):n,e_=n=>typeof n=="number"||rt.test(n);function RA(n,e,t,r,o,a){o?(n.opacity=Jt(0,t.opacity!==void 0?t.opacity:1,bA(r)),n.opacityExit=Jt(e.opacity!==void 0?e.opacity:1,0,PA(r))):a&&(n.opacity=Jt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<CA;u++){const f=`border${tS[u]}Radius`;let d=t_(e,f),h=t_(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||e_(d)===e_(h)?(n[f]=Math.max(Jt(Qv(d),Qv(h),r),0),($i.test(h)||$i.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Jt(e.rotate||0,t.rotate||0,r))}function t_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const bA=nS(0,.5,xy),PA=nS(.5,.95,Hn);function nS(n,e,t){return r=>r<n?0:r>e?1:t(Fs(n,e,r))}function n_(n,e){n.min=e.min,n.max=e.max}function gi(n,e){n_(n.x,e.x),n_(n.y,e.y)}function i_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function r_(n,e,t,r,o){return n-=e,n=Mc(n,1/t,r),o!==void 0&&(n=Mc(n,1/o,r)),n}function DA(n,e=0,t=1,r=.5,o,a=n,u=n){if($i.test(e)&&(e=parseFloat(e),e=Jt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=Jt(a.min,a.max,r);n===a&&(f-=e),n.min=r_(n.min,e,t,f,o),n.max=r_(n.max,e,t,f,o)}function s_(n,e,[t,r,o],a,u){DA(n,e[t],e[r],e[o],e.scale,a,u)}const LA=["x","scaleX","originX"],IA=["y","scaleY","originY"];function o_(n,e,t,r){s_(n.x,e,LA,t?t.x:void 0,r?r.x:void 0),s_(n.y,e,IA,t?t.y:void 0,r?r.y:void 0)}function a_(n){return n.translate===0&&n.scale===1}function iS(n){return a_(n.x)&&a_(n.y)}function l_(n,e){return n.min===e.min&&n.max===e.max}function NA(n,e){return l_(n.x,e.x)&&l_(n.y,e.y)}function u_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function rS(n,e){return u_(n.x,e.x)&&u_(n.y,e.y)}function c_(n){return ai(n.x)/ai(n.y)}function f_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class UA{constructor(){this.members=[]}add(e){rm(this.members,e),e.scheduleRender()}remove(e){if(sm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function FA(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||a||u)&&(r=`translate3d(${o}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:m,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const Rs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ka=typeof window<"u"&&window.MotionDebug!==void 0,kd=["","X","Y","Z"],OA={visibility:"hidden"},d_=1e3;let BA=0;function zd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function sS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=dy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",bt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&sS(r)}function oS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=BA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ka&&(Rs.totalNodes=Rs.resolvedTargetDeltas=Rs.recalculatedProjection=0),this.nodes.forEach(VA),this.nodes.forEach(jA),this.nodes.forEach(YA),this.nodes.forEach(HA),Ka&&window.MotionDebug.record(Rs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new wA)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new om),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=EA(u),this.instance=u;const{layoutId:d,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=AA(m,250),oc.hasAnimatedSinceResize&&(oc.hasAnimatedSinceResize=!1,this.nodes.forEach(p_))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&g&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||g.getDefaultTransition()||JA,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=g.getProps(),b=!this.targetLayout||!rS(this.targetLayout,M)||y,D=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||D||m&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,D);const C={...em(A,"layout"),onPlay:S,onComplete:x};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||p_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(qA),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(h_);return}this.isUpdating||this.nodes.forEach(WA),this.isUpdating=!1,this.nodes.forEach(XA),this.nodes.forEach(kA),this.nodes.forEach(zA),this.clearAllSnapshots();const f=Ki.now();xn.delta=Qi(0,1e3/60,f-xn.timestamp),xn.timestamp=f,xn.isProcessing=!0,Pd.update.process(xn),Pd.preRender.process(xn),Pd.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(GA),this.sharedNodes.forEach($A)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,bt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){bt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=an(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!iS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&(f||Cs(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),QA(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return an();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(eC))){const{scroll:g}=this.root;g&&(No(d.x,g.offset.x),No(d.y,g.offset.y))}return d}removeElementScroll(u){var f;const d=an();if(gi(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&gi(d,u),No(d.x,v.offset.x),No(d.y,v.offset.y))}return d}applyTransform(u,f=!1){const d=an();gi(d,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Uo(d,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Cs(g.latestValues)&&Uo(d,g.latestValues)}return Cs(this.latestValues)&&Uo(d,this.latestValues),d}removeTransform(u){const f=an();gi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Cs(h.latestValues))continue;kh(h.latestValues)&&h.updateSnapshot();const g=an(),v=h.measurePageBox();gi(g,v),o_(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Cs(this.latestValues)&&o_(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=xn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),rl(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=an(),this.targetWithTransforms=an()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),iA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):gi(this.target,this.layout.layoutBox),Zy(this.target,this.targetDelta)):gi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=an(),this.relativeTargetOrigin=an(),rl(this.relativeTargetOrigin,this.target,y.target),gi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ka&&Rs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||kh(this.parent.latestValues)||Ky(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(h=!1),h)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;gi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;dA(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=an());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(i_(this.prevProjectionDelta.x,this.projectionDelta.x),i_(this.prevProjectionDelta.y,this.projectionDelta.y)),il(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!f_(this.projectionDelta.x,this.prevProjectionDelta.x)||!f_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ka&&Rs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Io(),this.projectionDelta=Io(),this.projectionDeltaWithTransform=Io()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},g={...this.latestValues},v=Io();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const m=an(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,b=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(ZA));this.animationProgress=0;let D;this.mixTargetDelta=C=>{const L=C/1e3;m_(v.x,u.x,L),m_(v.y,u.y,L),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rl(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),KA(this.relativeTarget,this.relativeTargetOrigin,m,L),D&&NA(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=an()),gi(D,this.relativeTarget)),A&&(this.animationValues=g,RA(g,h,this.latestValues,L,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=bt.update(()=>{oc.hasAnimatedSinceResize=!0,this.currentAnimation=MA(0,d_,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(d_),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:g}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&aS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||an();const v=ai(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const m=ai(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+m}gi(f,d),Uo(f,g),il(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new UA),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&zd("z",u,h,this.animationValues);for(let g=0;g<kd.length;g++)zd(`rotate${kd[g]}`,u,h,this.animationValues),zd(`skew${kd[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return OA;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=rc(u==null?void 0:u.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=rc(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Cs(this.latestValues)&&(A.transform=g?g({},""):"none",this.hasProjected=!1),A}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=FA(this.projectionDeltaWithTransform,this.treeScale,m),g&&(h.transform=g(m,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=m.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const A in vc){if(m[A]===void 0)continue;const{correct:S,applyTo:x}=vc[A],b=h.transform==="none"?m[A]:S(m[A],v);if(x){const D=x.length;for(let C=0;C<D;C++)h[x[C]]=b}else h[A]=b}return this.options.layoutId&&(h.pointerEvents=v===this?rc(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(h_),this.root.sharedNodes.clear()}}}function kA(n){n.updateLayout()}function zA(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,u=t.source!==n.layout.source;a==="size"?_i(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=ai(m);m.min=r[v].min,m.max=m.min+y}):aS(a,t.layoutBox,r)&&_i(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=ai(r[v]);m.max=m.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const f=Io();il(f,r,t.layoutBox);const d=Io();u?il(d,n.applyTransform(o,!0),t.measuredBox):il(d,r,t.layoutBox);const h=!iS(f);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:y}=v;if(m&&y){const M=an();rl(M,t.layoutBox,m.layoutBox);const A=an();rl(A,r,y.layoutBox),rS(M,A)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function VA(n){Ka&&Rs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function HA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function GA(n){n.clearSnapshot()}function h_(n){n.clearMeasurements()}function WA(n){n.isLayoutDirty=!1}function XA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function p_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function jA(n){n.resolveTargetDelta()}function YA(n){n.calcProjection()}function qA(n){n.resetSkewAndRotation()}function $A(n){n.removeLeadSnapshot()}function m_(n,e,t){n.translate=Jt(e.translate,0,t),n.scale=Jt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function g_(n,e,t,r){n.min=Jt(e.min,t.min,r),n.max=Jt(e.max,t.max,r)}function KA(n,e,t,r){g_(n.x,e.x,t.x,r),g_(n.y,e.y,t.y,r)}function ZA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const JA={duration:.45,ease:[.4,0,.1,1]},v_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),__=v_("applewebkit/")&&!v_("chrome/")?Math.round:Hn;function x_(n){n.min=__(n.min),n.max=__(n.max)}function QA(n){x_(n.x),x_(n.y)}function aS(n,e,t){return n==="position"||n==="preserve-aspect"&&!nA(c_(e),c_(t),.2)}function eC(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const tC=oS({attachResizeListener:(n,e)=>cl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vd={current:void 0},lS=oS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Vd.current){const n=new tC({});n.mount(window),n.setOptions({layoutScroll:!0}),Vd.current=n}return Vd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),nC={pan:{Feature:_A},drag:{Feature:vA,ProjectionNode:lS,MeasureLayout:eS}};function y_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&bt.postRender(()=>a(e,vl(e)))}class iC extends is{mount(){const{current:e}=this.node;e&&(this.unmount=r1(e,t=>(y_(this.node,t,"Start"),r=>y_(this.node,r,"End"))))}unmount(){}}class rC extends is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gl(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function S_(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&bt.postRender(()=>a(e,vl(e)))}class sC extends is{mount(){const{current:e}=this.node;e&&(this.unmount=l1(e,t=>(S_(this.node,t,"Start"),(r,{success:o})=>S_(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Vh=new WeakMap,Hd=new WeakMap,oC=n=>{const e=Vh.get(n.target);e&&e(n)},aC=n=>{n.forEach(oC)};function lC({root:n,...e}){const t=n||document;Hd.has(t)||Hd.set(t,{});const r=Hd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(aC,{root:n,...e})),r[o]}function uC(n,e,t){const r=lC(e);return Vh.set(n,t),r.observe(n),()=>{Vh.delete(n),r.unobserve(n)}}const cC={some:0,all:1};class fC extends is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:cC[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),m=h?g:v;m&&m(d)};return uC(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(dC(e,t))&&this.startObserver()}unmount(){}}function dC({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const hC={inView:{Feature:fC},tap:{Feature:sC},focus:{Feature:rC},hover:{Feature:iC}},pC={layout:{ProjectionNode:lS,MeasureLayout:eS}},Ec={current:null},_m={current:!1};function uS(){if(_m.current=!0,!!Bp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ec.current=n.matches;n.addListener(e),e()}else Ec.current=!1}const mC=[...Iy,Ln,ts],gC=n=>mC.find(Ly(n)),M_=new WeakMap;function vC(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Nn(o))n.addValue(r,o);else if(Nn(a))n.addValue(r,ji(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,ji(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const E_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class _C{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=hm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ki.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,bt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:g}=u;this.onUpdate=g,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!a,this.isControllingVariants=Bc(t),this.isVariantNode=zx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in m){const M=m[y];d[y]!==void 0&&Nn(M)&&M.set(d[y],!1)}}mount(e){this.current=e,M_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),_m.current||uS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ec.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){M_.delete(this.current),this.projection&&this.projection.unmount(),Oi(this.notifyUpdate),Oi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=zs.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&bt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ho){const t=Ho[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):an()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<E_.length;r++){const o=E_[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=e[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=vC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=ji(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Py(o)||Sy(o))?o=parseFloat(o):!gC(o)&&ts.test(t)&&(o=Cy(e,t)),this.setBaseTarget(e,Nn(o)?o.get():o)),Nn(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=jp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Nn(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new om),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class cS extends _C{constructor(){super(...arguments),this.KeyframeResolver=Ny}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Nn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function xC(n){return window.getComputedStyle(n)}class yC extends cS{constructor(){super(...arguments),this.type="html",this.renderInstance=$x}readValueFromInstance(e,t){if(zs.has(t)){const r=dm(t);return r&&r.default||0}else{const r=xC(e),o=(jx(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Jy(e,t)}build(e,t,r){$p(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return Qp(e,t,r)}}class SC extends cS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=an}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zs.has(t)){const r=dm(t);return r&&r.default||0}return t=Kx.has(t)?t:Gp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Qx(e,t,r)}build(e,t,r){Kp(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){Zx(e,t,r,o)}mount(e){this.isSVGTag=Jp(e.tagName),super.mount(e)}}const MC=(n,e)=>Xp(n)?new SC(e):new yC(e,{allowProjection:n!==Je.Fragment}),EC=QT({...Yw,...hC,...nC,...pC},MC),In=pT(EC);function fS(n,e){let t;const r=()=>{const{currentTime:o}=e,u=(o===null?0:o.value)/100;t!==u&&n(u),t=u};return bt.update(r,!0),()=>Oi(r)}const ac=new WeakMap;let Jr;function TC(n,e){if(e){const{inlineSize:t,blockSize:r}=e[0];return{width:t,height:r}}else return n instanceof SVGElement&&"getBBox"in n?n.getBBox():{width:n.offsetWidth,height:n.offsetHeight}}function wC({target:n,contentRect:e,borderBoxSize:t}){var r;(r=ac.get(n))===null||r===void 0||r.forEach(o=>{o({target:n,contentSize:e,get size(){return TC(n,t)}})})}function AC(n){n.forEach(wC)}function CC(){typeof ResizeObserver>"u"||(Jr=new ResizeObserver(AC))}function RC(n,e){Jr||CC();const t=ly(n);return t.forEach(r=>{let o=ac.get(r);o||(o=new Set,ac.set(r,o)),o.add(e),Jr==null||Jr.observe(r)}),()=>{t.forEach(r=>{const o=ac.get(r);o==null||o.delete(e),o!=null&&o.size||Jr==null||Jr.unobserve(r)})}}const lc=new Set;let sl;function bC(){sl=()=>{const n={width:window.innerWidth,height:window.innerHeight},e={target:window,size:n,contentSize:n};lc.forEach(t=>t(e))},window.addEventListener("resize",sl)}function PC(n){return lc.add(n),sl||bC(),()=>{lc.delete(n),!lc.size&&sl&&(sl=void 0)}}function DC(n,e){return typeof n=="function"?PC(n):RC(n,e)}const LC=50,T_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),IC=()=>({time:0,x:T_(),y:T_()}),NC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function w_(n,e,t,r){const o=t[e],{length:a,position:u}=NC[e],f=o.current,d=t.time;o.current=n[`scroll${u}`],o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Fs(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>LC?0:am(o.current-f,h)}function UC(n,e,t){w_(n,"x",e,t),w_(n,"y",e,t),e.time=t}function FC(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(r instanceof HTMLElement)t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let u=null,f=r.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=r.parentNode;r=u}else break;return t}const Hh={start:0,center:.5,end:1};function A_(n,e,t=0){let r=0;if(n in Hh&&(n=Hh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const OC=[0,0];function BC(n,e,t,r){let o=Array.isArray(n)?n:OC,a=0,u=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,Hh[n]?n:"0"]),a=A_(o[0],t,r),u=A_(o[1],e),a-u}const kC={All:[[0,0],[1,1]]},zC={x:0,y:0};function VC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function HC(n,e,t){const{offset:r=kC.All}=t,{target:o=n,axis:a="y"}=t,u=a==="y"?"height":"width",f=o!==n?FC(o,n):zC,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:VC(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let g=!e[a].interpolate;const v=r.length;for(let m=0;m<v;m++){const y=BC(r[m],h[u],d[u],f[a]);!g&&y!==e[a].interpolatorOffsets[m]&&(g=!0),e[a].offset[m]=y}g&&(e[a].interpolate=mm(e[a].offset,Vy(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=Qi(0,1,e[a].interpolate(e[a].current))}function GC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function WC(n,e,t,r={}){return{measure:()=>GC(n,r.target,t),update:o=>{UC(n,t,o),(r.offset||r.target)&&HC(n,t,r)},notify:()=>e(t)}}const Oa=new WeakMap,C_=new WeakMap,Gd=new WeakMap,R_=n=>n===document.documentElement?window:n;function xm(n,{container:e=document.documentElement,...t}={}){let r=Gd.get(e);r||(r=new Set,Gd.set(e,r));const o=IC(),a=WC(e,n,o,t);if(r.add(a),!Oa.has(e)){const f=()=>{for(const m of r)m.measure()},d=()=>{for(const m of r)m.update(xn.timestamp)},h=()=>{for(const m of r)m.notify()},g=()=>{bt.read(f,!1,!0),bt.read(d,!1,!0),bt.update(h,!1,!0)};Oa.set(e,g);const v=R_(e);window.addEventListener("resize",g,{passive:!0}),e!==document.documentElement&&C_.set(e,DC(e,g)),v.addEventListener("scroll",g,{passive:!0})}const u=Oa.get(e);return bt.read(u,!1,!0),()=>{var f;Oi(u);const d=Gd.get(e);if(!d||(d.delete(a),d.size))return;const h=Oa.get(e);Oa.delete(e),h&&(R_(e).removeEventListener("scroll",h),(f=C_.get(e))===null||f===void 0||f(),window.removeEventListener("resize",h))}}function XC({source:n,container:e,axis:t="y"}){n&&(e=n);const r={value:0},o=xm(a=>{r.value=a[t].progress*100},{container:e,axis:t});return{currentTime:r,cancel:o}}const Wd=new Map;function dS({source:n,container:e=document.documentElement,axis:t="y"}={}){n&&(e=n),Wd.has(e)||Wd.set(e,{});const r=Wd.get(e);return r[t]||(r[t]=ny()?new ScrollTimeline({source:e,axis:t}):XC({source:e,axis:t})),r[t]}function jC(n){return n.length===2}function hS(n){return n&&(n.target||n.offset)}function YC(n,e){return jC(n)||hS(e)?xm(t=>{n(t[e.axis].progress,t)},e):fS(n,dS(e))}function qC(n,e){if(n.flatten(),hS(e))return n.pause(),xm(t=>{n.time=n.duration*t[e.axis].progress},e);{const t=dS(e);return n.attachTimeline?n.attachTimeline(t,r=>(r.pause(),fS(o=>{r.time=r.duration*o},t))):Hn}}function $C(n,{axis:e="y",...t}={}){const r={axis:e,...t};return typeof n=="function"?YC(n,r):qC(n,r)}function b_(n,e){oT(!!(!e||e.current))}const KC=()=>({scrollX:ji(0),scrollY:ji(0),scrollXProgress:ji(0),scrollYProgress:ji(0)});function ZC({container:n,target:e,layoutEffect:t=!0,...r}={}){const o=Uc(KC);return(t?kp:Je.useEffect)(()=>(b_("target",e),b_("container",n),$C((u,{x:f,y:d})=>{o.scrollX.set(f.current),o.scrollXProgress.set(f.progress),o.scrollY.set(d.current),o.scrollYProgress.set(d.progress)},{...r,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[n,e,JSON.stringify(r.offset)]),o}function JC(n){const e=Uc(()=>ji(n)),{isStatic:t}=Je.useContext(Op);if(t){const[,r]=Je.useState(n);Je.useEffect(()=>e.on("change",r),[])}return e}function pS(n,e){const t=JC(e()),r=()=>t.set(e());return r(),kp(()=>{const o=()=>bt.preRender(r,!1,!0),a=n.map(u=>u.on("change",o));return()=>{a.forEach(u=>u()),Oi(r)}}),t}const QC=n=>n&&typeof n=="object"&&n.mix,eR=n=>QC(n)?n.mix:void 0;function tR(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],u=n[3+t],f=mm(o,a,{mixer:eR(a[0]),...u});return e?f(r):f}function nR(n){el.current=[],n();const e=pS(el.current,n);return el.current=void 0,e}function Za(n,e,t,r){if(typeof n=="function")return nR(n);const o=typeof e=="function"?e:tR(e,t,r);return Array.isArray(n)?P_(n,o):P_([n],([a])=>o(a))}function P_(n,e){const t=Uc(()=>[]);return pS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function mS(){!_m.current&&uS();const[n]=Je.useState(Ec.current);return n}const iR={div:In.div,section:In.section,span:In.span,h1:In.h1,h2:In.h2,h3:In.h3,p:In.p,nav:In.nav};function Yt({children:n,delay:e=0,duration:t=.7,y:r=24,className:o,style:a,as:u="div",once:f=!0}){const d=iR[u]??In.div;return W.jsx(d,{initial:{opacity:0,y:r},whileInView:{opacity:1,y:0},viewport:{once:f,amount:.2},transition:{duration:t,delay:e,ease:[.22,1,.36,1]},className:o,style:a,children:n})}const rR=[{label:"START",section:"main"},{label:"DIENSTEN",section:"offering"},{label:"WERK",section:"case"},{label:"PRIJZEN",section:"rates"}],sR=[{label:"WIE",section:"crew"},{label:"CONTACT",section:"connect"}];function oR(n){if(mc()!==""){Up(""),window.addEventListener("hashchange",()=>{requestAnimationFrame(()=>wh(n))},{once:!0});return}wh(n)}function aR(){const n=e=>t=>{t.preventDefault(),oR(e)};return W.jsxs("nav",{className:"cognitra-nav",style:{position:"fixed",top:0,left:0,right:0,zIndex:10,background:"#C5C5C5",borderBottom:"1px solid rgba(0,0,0,0.18)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 32px"},children:[W.jsx(Yt,{delay:0,children:W.jsx("a",{href:bd("main"),onClick:n("main"),className:"cognitra-nav-brand cognitra-nav-link",style:{fontSize:13,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#1a1a1a",textDecoration:"none"},children:"MIDNIGHT SPACE"})}),W.jsx("div",{className:"cognitra-nav-links hidden sm:flex",style:{gap:48,alignItems:"center"},children:rR.map((e,t)=>W.jsx(Yt,{delay:.05+t*.05,children:W.jsx("a",{href:bd(e.section),onClick:n(e.section),className:"cognitra-nav-link",style:{fontSize:11,letterSpacing:"0.06em",color:"#1a1a1a",fontWeight:400,textDecoration:"none"},children:e.label})},e.section))}),W.jsx("div",{className:"cognitra-nav-links cognitra-nav-links-secondary flex",style:{gap:48,alignItems:"center"},children:sR.map((e,t)=>W.jsx(Yt,{delay:.3+t*.05,children:W.jsx("a",{href:bd(e.section),onClick:n(e.section),className:"cognitra-nav-link",style:{fontSize:11,letterSpacing:"0.06em",color:"#1a1a1a",fontWeight:400,textDecoration:"none"},children:e.label})},e.section))})]})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gS=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var uR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=Je.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...f},d)=>Je.createElement("svg",{ref:d,...uR,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:gS("lucide",o),...f},[...u.map(([h,g])=>Je.createElement(h,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=(n,e)=>{const t=Je.forwardRef(({className:r,...o},a)=>Je.createElement(cR,{ref:a,iconNode:e,className:gS(`lucide-${lR(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=vS("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=vS("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);function hR(){return W.jsxs("button",{type:"button",className:"cognitra-nav-link",style:{position:"fixed",bottom:32,right:32,zIndex:5,display:"flex",alignItems:"center",gap:6,color:"rgba(0,0,0,0.8)",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",background:"none",border:"none",fontFamily:"inherit"},onClick:()=>{typeof navigator<"u"&&navigator.share&&navigator.share({title:"Midnight Space",url:window.location.href})},children:[W.jsx(dR,{size:14,strokeWidth:2,"aria-hidden":!0}),"REPOST"]})}function pR(){return W.jsx("div",{"aria-hidden":!0,style:{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",zIndex:5},children:W.jsx("div",{style:{width:22,height:36,border:"1.5px solid rgba(0,0,0,0.75)",borderRadius:11,display:"flex",justifyContent:"center",paddingTop:6},children:W.jsx("div",{className:"cognitra-scroll-dot",style:{width:3,height:8,background:"rgba(0,0,0,0.85)",borderRadius:2}})})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ym="185",mR=0,D_=1,gR=2,uc=1,vR=2,Ja=3,ns=0,Qn=1,gr=2,yr=0,Oo=1,Gh=2,L_=3,I_=4,_R=5,Ps=100,xR=101,yR=102,SR=103,MR=104,ER=200,TR=201,wR=202,AR=203,Wh=204,Xh=205,CR=206,RR=207,bR=208,PR=209,DR=210,LR=211,IR=212,NR=213,UR=214,jh=0,Yh=1,qh=2,Wo=3,$h=4,Kh=5,Zh=6,Jh=7,_S=0,FR=1,OR=2,Zi=0,xS=1,yS=2,SS=3,MS=4,ES=5,TS=6,wS=7,AS=300,Os=301,Xo=302,Xd=303,jd=304,Vc=306,Qh=1e3,vr=1001,ep=1002,Tn=1003,BR=1004,Cu=1005,Un=1006,Yd=1007,Is=1008,Si=1009,CS=1010,RS=1011,fl=1012,Sm=1013,er=1014,Yi=1015,Er=1016,Mm=1017,Em=1018,dl=1020,bS=35902,PS=35899,DS=1021,LS=1022,Ui=1023,Tr=1026,Ns=1027,IS=1028,Tm=1029,Bs=1030,wm=1031,Am=1033,cc=33776,fc=33777,dc=33778,hc=33779,tp=35840,np=35841,ip=35842,rp=35843,sp=36196,op=37492,ap=37496,lp=37488,up=37489,Tc=37490,cp=37491,fp=37808,dp=37809,hp=37810,pp=37811,mp=37812,gp=37813,vp=37814,_p=37815,xp=37816,yp=37817,Sp=37818,Mp=37819,Ep=37820,Tp=37821,wp=36492,Ap=36494,Cp=36495,Rp=36283,bp=36284,wc=36285,Pp=36286,kR=3200,N_=0,zR=1,Qr="",xi="srgb",Ac="srgb-linear",Cc="linear",Ut="srgb",ho=7680,U_=519,VR=512,HR=513,GR=514,Cm=515,WR=516,XR=517,Rm=518,jR=519,Dp=35044,F_="300 es",qi=2e3,Rc=2001;function YR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function bc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qR(){const n=bc("canvas");return n.style.display="block",n}const O_={};function Pc(...n){const e="THREE."+n.shift();console.log(e,...n)}function NS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function st(...n){n=NS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Mt(...n){n=NS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Bo(...n){const e=n.join(" ");e in O_||(O_[e]=!0,st(...n))}function $R(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const KR={[jh]:Yh,[qh]:Zh,[$h]:Jh,[Wo]:Kh,[Yh]:jh,[Zh]:qh,[Jh]:$h,[Kh]:Wo};class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B_=1234567;const ko=Math.PI/180,hl=180/Math.PI;function Sr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function bm(n,e){return(n%e+e)%e}function ZR(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function JR(n,e,t){return n!==e?(t-n)/(e-n):0}function ol(n,e,t){return(1-t)*n+t*e}function QR(n,e,t,r){return ol(n,e,1-Math.exp(-t*r))}function eb(n,e=1){return e-Math.abs(bm(n,e*2)-e)}function tb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function nb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ib(n,e){return n+Math.floor(Math.random()*(e-n+1))}function rb(n,e){return n+Math.random()*(e-n)}function sb(n){return n*(.5-Math.random())}function ob(n){n!==void 0&&(B_=n);let e=B_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ab(n){return n*ko}function lb(n){return n*hl}function ub(n){return(n&n-1)===0&&n!==0}function cb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function db(n,e,t,r,o){const a=Math.cos,u=Math.sin,f=a(t/2),d=u(t/2),h=a((e+r)/2),g=u((e+r)/2),v=a((e-r)/2),m=u((e-r)/2),y=a((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(f*g,d*v,d*m,f*h);break;case"YZY":n.set(d*m,f*g,d*v,f*h);break;case"ZXZ":n.set(d*v,d*m,f*g,f*h);break;case"XZX":n.set(f*g,d*M,d*y,f*h);break;case"YXY":n.set(d*y,f*g,d*M,f*h);break;case"ZYZ":n.set(d*M,d*y,f*g,f*h);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ni(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const hb={DEG2RAD:ko,RAD2DEG:hl,generateUUID:Sr,clamp:_t,euclideanModulo:bm,mapLinear:ZR,inverseLerp:JR,lerp:ol,damp:QR,pingpong:eb,smoothstep:tb,smootherstep:nb,randInt:ib,randFloat:rb,randFloatSpread:sb,seededRandom:ob,degToRad:ab,radToDeg:lb,isPowerOfTwo:ub,ceilPowerOfTwo:cb,floorPowerOfTwo:fb,setQuaternionFromProperEuler:db,normalize:Ft,denormalize:Ni},Im=class Im{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Im.prototype.isVector2=!0;let dt=Im;class Ko{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,u,f){let d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],m=a[u+0],y=a[u+1],M=a[u+2],A=a[u+3];if(v!==A||d!==m||h!==y||g!==M){let S=d*m+h*y+g*M+v*A;S<0&&(m=-m,y=-y,M=-M,A=-A,S=-S);let x=1-f;if(S<.9995){const b=Math.acos(S),D=Math.sin(b);x=Math.sin(x*b)/D,f=Math.sin(f*b)/D,d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f}else{d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f;const b=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=b,h*=b,g*=b,v*=b}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,u){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],v=a[u],m=a[u+1],y=a[u+2],M=a[u+3];return e[t]=f*M+g*v+d*y-h*m,e[t+1]=d*M+g*m+h*v-f*y,e[t+2]=h*M+g*y+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),v=f(a/2),m=d(r/2),y=d(o/2),M=d(a/2);switch(u){case"XYZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"YXZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"ZXY":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"ZYX":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"YZX":this._x=m*g*v+h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v-m*y*M;break;case"XZY":this._x=m*g*v-h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v+m*y*M;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=r+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-h)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(a+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(a-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(a+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+u*f+o*h-a*d,this._y=o*g+u*d+a*f-r*h,this._z=a*g+u*h+r*d-o*f,this._w=u*g-r*f-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(k_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(k_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),g=2*(f*t-a*o),v=2*(a*r-u*t);return this.x=t+d*h+u*v-f*g,this.y=r+d*g+f*h-a*v,this.z=o+d*v+a*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-a*f,this.y=a*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qd.copy(this).projectOnVector(e),this.sub(qd)}reflect(e){return this.sub(qd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let K=Nm;const qd=new K,k_=new Ko,Um=class Um{constructor(e,t,r,o,a,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,f,d,h)}set(e,t,r,o,a,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=a,g[5]=d,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],g=r[4],v=r[7],m=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],b=o[1],D=o[4],C=o[7],L=o[2],P=o[5],F=o[8];return a[0]=u*A+f*b+d*L,a[3]=u*S+f*D+d*P,a[6]=u*x+f*C+d*F,a[1]=h*A+g*b+v*L,a[4]=h*S+g*D+v*P,a[7]=h*x+g*C+v*F,a[2]=m*A+y*b+M*L,a[5]=m*S+y*D+M*P,a[8]=m*x+y*C+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-r*a*g+r*f*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*u-f*h,m=f*d-g*a,y=h*a-u*d,M=t*v+r*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-g*r)*A,e[2]=(f*r-o*u)*A,e[3]=m*A,e[4]=(g*t-o*d)*A,e[5]=(o*a-f*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(u*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,u,f){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return Bo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($d.makeScale(e,t)),this}rotate(e){return Bo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($d.makeRotation(-e)),this}translate(e,t){return Bo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($d.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Um.prototype.isMatrix3=!0;let ft=Um;const $d=new ft,z_=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V_=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pb(){const n={enabled:!0,workingColorSpace:Ac,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===Ut&&(o.r=Mr(o.r),o.g=Mr(o.g),o.b=Mr(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ut&&(o.r=zo(o.r),o.g=zo(o.g),o.b=zo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?Cc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ac]:{primaries:e,whitePoint:r,transfer:Cc,toXYZ:z_,fromXYZ:V_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:z_,fromXYZ:V_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const xt=pb();function Mr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let po;class mb{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{po===void 0&&(po=bc("canvas")),po.width=e.width,po.height=e.height;const o=po.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=po}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Mr(a[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Mr(t[r]/255)*255):t[r]=Mr(t[r]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gb=0;class Pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=Sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?a.push(Kd(o[u].image)):a.push(Kd(o[u]))}else a=Kd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Kd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?mb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let vb=0;const Zd=new K;class Fn extends Vs{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=vr,o=vr,a=Un,u=Is,f=Ui,d=Si,h=Fn.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Sr(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zd).x}get height(){return this.source.getSize(Zd).y}get depth(){return this.source.getSize(Zd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==AS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qh:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qh:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=AS;Fn.DEFAULT_ANISOTROPY=1;const Fm=class Fm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,C=(y+1)/2,L=(x+1)/2,P=(g+m)/4,F=(v+A)/4,E=(M+S)/4;return D>C&&D>L?D<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(D),o=P/r,a=F/r):C>L?C<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(C),r=P/o,a=E/o):L<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),r=F/a,o=E/a),this.set(r,o,a,t),this}let b=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(m-g)*(m-g));return Math.abs(b)<.001&&(b=1),this.x=(S-M)/b,this.y=(v-A)/b,this.z=(m-g)/b,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fm.prototype.isVector4=!0;let rn=Fm;class _b extends Vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Fn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Pm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends _b{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class US extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xb extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nc=class Nc{constructor(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S)}set(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=a,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=g,x[10]=v,x[14]=m,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/mo.setFromMatrixColumn(e,0).length(),a=1/mo.setFromMatrixColumn(e,1).length(),u=1/mo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=m-A*h,t[9]=-f*d,t[2]=A-m*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m+A*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=y*f-M,t[6]=A+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m-A*f,t[4]=-u*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*g,t[9]=A-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=M*h-y,t[8]=m*h+A,t[1]=d*v,t[5]=A*h+m,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=A-m*v,t[8]=M*v+y,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=y*v+M,t[10]=m-A*v}else if(e.order==="XZY"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+A,t[5]=u*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*g,t[10]=A*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,Sb)}lookAt(e,t,r){const o=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Xr.crossVectors(r,ri),Xr.lengthSq()===0&&(Math.abs(r.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Xr.crossVectors(r,ri)),Xr.normalize(),Ru.crossVectors(ri,Xr),o[0]=Xr.x,o[4]=Ru.x,o[8]=ri.x,o[1]=Xr.y,o[5]=Ru.y,o[9]=ri.y,o[2]=Xr.z,o[6]=Ru.z,o[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],g=r[1],v=r[5],m=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],b=r[3],D=r[7],C=r[11],L=r[15],P=o[0],F=o[4],E=o[8],I=o[12],B=o[1],k=o[5],q=o[9],ue=o[13],pe=o[2],J=o[6],ce=o[10],X=o[14],H=o[3],ee=o[7],ie=o[11],U=o[15];return a[0]=u*P+f*B+d*pe+h*H,a[4]=u*F+f*k+d*J+h*ee,a[8]=u*E+f*q+d*ce+h*ie,a[12]=u*I+f*ue+d*X+h*U,a[1]=g*P+v*B+m*pe+y*H,a[5]=g*F+v*k+m*J+y*ee,a[9]=g*E+v*q+m*ce+y*ie,a[13]=g*I+v*ue+m*X+y*U,a[2]=M*P+A*B+S*pe+x*H,a[6]=M*F+A*k+S*J+x*ee,a[10]=M*E+A*q+S*ce+x*ie,a[14]=M*I+A*ue+S*X+x*U,a[3]=b*P+D*B+C*pe+L*H,a[7]=b*F+D*k+C*J+L*ee,a[11]=b*E+D*q+C*ce+L*ie,a[15]=b*I+D*ue+C*X+L*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],b=d*y-h*m,D=f*y-h*v,C=f*m-d*v,L=u*y-h*g,P=u*m-d*g,F=u*v-f*g;return t*(A*b-S*D+x*C)-r*(M*b-S*L+x*P)+o*(M*D-A*L+x*F)-a*(M*C-A*P+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],u=e[5],f=e[9],d=e[2],h=e[6],g=e[10];return t*(u*g-f*h)-r*(a*g-f*d)+o*(a*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],b=t*f-r*u,D=t*d-o*u,C=t*h-a*u,L=r*d-o*f,P=r*h-a*f,F=o*h-a*d,E=g*A-v*M,I=g*S-m*M,B=g*x-y*M,k=v*S-m*A,q=v*x-y*A,ue=m*x-y*S,pe=b*ue-D*q+C*k+L*B-P*I+F*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/pe;return e[0]=(f*ue-d*q+h*k)*J,e[1]=(o*q-r*ue-a*k)*J,e[2]=(A*F-S*P+x*L)*J,e[3]=(m*P-v*F-y*L)*J,e[4]=(d*B-u*ue-h*I)*J,e[5]=(t*ue-o*B+a*I)*J,e[6]=(S*C-M*F-x*D)*J,e[7]=(g*F-m*C+y*D)*J,e[8]=(u*q-f*B+h*E)*J,e[9]=(r*B-t*q-a*E)*J,e[10]=(M*P-A*C+x*b)*J,e[11]=(v*C-g*P-y*b)*J,e[12]=(f*I-u*k-d*E)*J,e[13]=(t*k-r*I+o*E)*J,e[14]=(A*D-M*L-S*b)*J,e[15]=(g*L-v*D+m*b)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,u=e.x,f=e.y,d=e.z,h=a*u,g=a*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*u,0,h*d-o*f,g*d+o*u,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,u=t._y,f=t._z,d=t._w,h=a+a,g=u+u,v=f+f,m=a*h,y=a*g,M=a*v,A=u*g,S=u*v,x=f*v,b=d*h,D=d*g,C=d*v,L=r.x,P=r.y,F=r.z;return o[0]=(1-(A+x))*L,o[1]=(y+C)*L,o[2]=(M-D)*L,o[3]=0,o[4]=(y-C)*P,o[5]=(1-(m+x))*P,o[6]=(S+b)*P,o[7]=0,o[8]=(M+D)*F,o[9]=(S-b)*F,o[10]=(1-(m+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let u=mo.set(o[0],o[1],o[2]).length();const f=mo.set(o[4],o[5],o[6]).length(),d=mo.set(o[8],o[9],o[10]).length();a<0&&(u=-u),Pi.copy(this);const h=1/u,g=1/f,v=1/d;return Pi.elements[0]*=h,Pi.elements[1]*=h,Pi.elements[2]*=h,Pi.elements[4]*=g,Pi.elements[5]*=g,Pi.elements[6]*=g,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,t.setFromRotationMatrix(Pi),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,a,u,f=qi,d=!1){const h=this.elements,g=2*a/(t-e),v=2*a/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(u-a),A=u*a/(u-a);else if(f===qi)M=-(u+a)/(u-a),A=-2*u*a/(u-a);else if(f===Rc)M=-u/(u-a),A=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,u,f=qi,d=!1){const h=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(u-a),A=u/(u-a);else if(f===qi)M=-2/(u-a),A=-(u+a)/(u-a);else if(f===Rc)M=-1/(u-a),A=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Nc.prototype.isMatrix4=!0;let sn=Nc;const mo=new K,Pi=new sn,yb=new K(0,0,0),Sb=new K(1,1,1),Xr=new K,Ru=new K,ri=new K,H_=new sn,G_=new Ko;class ks{constructor(e=0,t=0,r=0,o=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],f=o[8],d=o[1],h=o[5],g=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return H_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return G_.setFromEuler(this),this.setFromQuaternion(G_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class FS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const W_=new K,go=new Ko,fr=new sn,bu=new K,Ba=new K,Eb=new K,Tb=new Ko,X_=new K(1,0,0),j_=new K(0,1,0),Y_=new K(0,0,1),q_={type:"added"},wb={type:"removed"},vo={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Gn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new K,t=new ks,r=new Ko,o=new K(1,1,1);function a(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new sn},normalMatrix:{value:new ft}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new FS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(X_,e)}rotateY(e){return this.rotateOnAxis(j_,e)}rotateZ(e){return this.rotateOnAxis(Y_,e)}translateOnAxis(e,t){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X_,e)}translateY(e){return this.translateOnAxis(j_,e)}translateZ(e){return this.translateOnAxis(Y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?bu.copy(e):bu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Ba,bu,this.up):fr.lookAt(bu,Ba,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),go.setFromRotationMatrix(fr),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q_),vo.child=e,this.dispatchEvent(vo),vo.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wb),Jd.child=e,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q_),vo.child=e,this.dispatchEvent(vo),vo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Tb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),m=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Gn.DEFAULT_UP=new K(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fo extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ab={type:"move"};class Qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ab)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Fo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Pu={h:0,s:0,l:0};function eh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=xt.workingColorSpace){return this.r=e,this.g=t,this.b=r,xt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=xt.workingColorSpace){if(e=bm(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,u=2*r-a;this.r=eh(u,a,e+1/3),this.g=eh(u,a,e),this.b=eh(u,a,e-1/3)}return xt.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(a){a!==void 0&&parseFloat(a)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=OS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=zo(e.r),this.g=zo(e.g),this.b=zo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return xt.workingToColorSpace(Dn.copy(this),e),Math.round(_t(Dn.r*255,0,255))*65536+Math.round(_t(Dn.g*255,0,255))*256+Math.round(_t(Dn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,a=Dn.b,u=Math.max(r,o,a),f=Math.min(r,o,a);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xi){xt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Pu);const r=ol(jr.h,Pu.h,t),o=ol(jr.s,Pu.s,t),a=ol(jr.l,Pu.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ct;Ct.NAMES=OS;class Cb extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Di=new K,dr=new K,th=new K,hr=new K,_o=new K,xo=new K,$_=new K,nh=new K,ih=new K,rh=new K,sh=new rn,oh=new rn,ah=new rn;class oi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Di.subVectors(e,t),o.cross(Di);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Di.subVectors(o,t),dr.subVectors(r,t),th.subVectors(e,t);const u=Di.dot(Di),f=Di.dot(dr),d=Di.dot(th),h=dr.dot(dr),g=dr.dot(th),v=u*h-f*f;if(v===0)return a.set(0,0,0),null;const m=1/v,y=(h*d-f*g)*m,M=(u*g-f*d)*m;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,o,a,u,f,d){return this.getBarycoord(e,t,r,o,hr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,hr.x),d.addScaledVector(u,hr.y),d.addScaledVector(f,hr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,u){return sh.setScalar(0),oh.setScalar(0),ah.setScalar(0),sh.fromBufferAttribute(e,t),oh.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sh,a.x),u.addScaledVector(oh,a.y),u.addScaledVector(ah,a.z),u}static isFrontFacing(e,t,r,o){return Di.subVectors(r,t),dr.subVectors(e,t),Di.cross(dr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Di.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let u,f;_o.subVectors(o,r),xo.subVectors(a,r),nh.subVectors(e,r);const d=_o.dot(nh),h=xo.dot(nh);if(d<=0&&h<=0)return t.copy(r);ih.subVectors(e,o);const g=_o.dot(ih),v=xo.dot(ih);if(g>=0&&v<=g)return t.copy(o);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(_o,u);rh.subVectors(e,a);const y=_o.dot(rh),M=xo.dot(rh);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(xo,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return $_.subVectors(a,o),f=(v-g)/(v-g+(y-M)),t.copy(o).addScaledVector($_,f);const x=1/(S+A+m);return u=A*x,f=m*x,t.copy(r).addScaledVector(_o,u).addScaledVector(xo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=a.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Li):Li.fromBufferAttribute(a,u),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Du.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Du.copy(r.boundingBox)),Du.applyMatrix4(e.matrixWorld),this.union(Du)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Lu.subVectors(this.max,ka),yo.subVectors(e.a,ka),So.subVectors(e.b,ka),Mo.subVectors(e.c,ka),Yr.subVectors(So,yo),qr.subVectors(Mo,So),Es.subVectors(yo,Mo);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-Es.z,Es.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,Es.z,0,-Es.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-Es.y,Es.x,0];return!lh(t,yo,So,Mo,Lu)||(t=[1,0,0,0,1,0,0,0,1],!lh(t,yo,So,Mo,Lu))?!1:(Iu.crossVectors(Yr,qr),t=[Iu.x,Iu.y,Iu.z],lh(t,yo,So,Mo,Lu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new K,new K,new K,new K,new K,new K,new K,new K],Li=new K,Du=new _l,yo=new K,So=new K,Mo=new K,Yr=new K,qr=new K,Es=new K,ka=new K,Lu=new K,Iu=new K,Ts=new K;function lh(n,e,t,r,o){for(let a=0,u=n.length-3;a<=u;a+=3){Ts.fromArray(n,a);const f=o.x*Math.abs(Ts.x)+o.y*Math.abs(Ts.y)+o.z*Math.abs(Ts.z),d=e.dot(Ts),h=t.dot(Ts),g=r.dot(Ts);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const cn=new K,Nu=new dt;let Rb=0;class Fi extends Vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Dp,this.updateRanges=[],this.gpuType=Yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nu.fromBufferAttribute(this,t),Nu.applyMatrix3(e),this.setXY(t,Nu.x,Nu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ni(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class BS extends Fi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kS extends Fi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Wn extends Fi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const bb=new _l,za=new K,uh=new K;class Hc{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bb.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(za,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(uh)),this.expandByPoint(za.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Pb=0;const vi=new sn,ch=new Gn,Eo=new K,si=new _l,Va=new _l,_n=new K;class li extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pb++}),this.uuid=Sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(YR(e)?kS:BS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ft().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return ch.lookAt(e),ch.updateMatrix(),this.applyMatrix4(ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Eo).negate(),this.translate(Eo.x,Eo.y,Eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];si.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const f=t[a];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(si.min,Va.min),si.expandByPoint(_n),_n.addVectors(si.max,Va.max),si.expandByPoint(_n)):(si.expandByPoint(Va.min),si.expandByPoint(Va.max))}si.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(_n));if(t)for(let a=0,u=t.length;a<u;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)_n.fromBufferAttribute(f,h),d&&(Eo.fromBufferAttribute(e,h),_n.add(Eo)),o=Math.max(o,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Fi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new K,d[E]=new K;const h=new K,g=new K,v=new K,m=new dt,y=new dt,M=new dt,A=new K,S=new K;function x(E,I,B){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,B),m.fromBufferAttribute(a,E),y.fromBufferAttribute(a,I),M.fromBufferAttribute(a,B),g.sub(h),v.sub(h),y.sub(m),M.sub(m);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(k),f[E].add(A),f[I].add(A),f[B].add(A),d[E].add(S),d[I].add(S),d[B].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,I=b.length;E<I;++E){const B=b[E],k=B.start,q=B.count;for(let ue=k,pe=k+q;ue<pe;ue+=3)x(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const D=new K,C=new K,L=new K,P=new K;function F(E){L.fromBufferAttribute(o,E),P.copy(L);const I=f[E];D.copy(I),D.sub(L.multiplyScalar(L.dot(I))).normalize(),C.crossVectors(P,I);const k=C.dot(d[E])<0?-1:1;u.setXYZW(E,D.x,D.y,D.z,k)}for(let E=0,I=b.length;E<I;++E){const B=b[E],k=B.start,q=B.count;for(let ue=k,pe=k+q;ue<pe;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Fi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new K,a=new K,u=new K,f=new K,d=new K,h=new K,g=new K,v=new K;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),A=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),g.subVectors(u,a),v.subVectors(o,a),g.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),f.add(g),d.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,a),v.subVectors(o,a),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*g;for(let x=0;x<g;x++)m[M++]=h[y++]}return new Fi(m,g,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new li,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],y=e(m,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const y=h[v];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],v=a[h];for(let m=0,y=v.length;m<y;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Db{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Dp,this.updateRanges=[],this.version=0,this.uuid=Sr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zn=new K;class Dc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ni(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ft(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ni(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),r=Ft(r,this.array),o=Ft(o,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Pc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Dc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Lb=0;class Zo extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Sr(),this.name="",this.type="Material",this.blending=Oo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=Xh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ho,this.stencilZFail=ho,this.stencilZPass=ho,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Oo&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==Xh&&(r.blendDst=this.blendDst),this.blendEquation!==Ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ho&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ho&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ho&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const f in a){const d=a[f];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new dt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zS extends Zo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let To;const Ha=new K,wo=new K,Ao=new K,Co=new dt,Ga=new dt,VS=new sn,Uu=new K,Wa=new K,Fu=new K,K_=new dt,fh=new dt,Z_=new dt;class Ib extends Gn{constructor(e=new zS){if(super(),this.isSprite=!0,this.type="Sprite",To===void 0){To=new li;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Db(t,5);To.setIndex([0,1,2,0,2,3]),To.setAttribute("position",new Dc(r,3,0,!1)),To.setAttribute("uv",new Dc(r,2,3,!1))}this.geometry=To,this.material=e,this.center=new dt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wo.setFromMatrixScale(this.matrixWorld),VS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ao.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wo.multiplyScalar(-Ao.z);const r=this.material.rotation;let o,a;r!==0&&(a=Math.cos(r),o=Math.sin(r));const u=this.center;Ou(Uu.set(-.5,-.5,0),Ao,u,wo,o,a),Ou(Wa.set(.5,-.5,0),Ao,u,wo,o,a),Ou(Fu.set(.5,.5,0),Ao,u,wo,o,a),K_.set(0,0),fh.set(1,0),Z_.set(1,1);let f=e.ray.intersectTriangle(Uu,Wa,Fu,!1,Ha);if(f===null&&(Ou(Wa.set(-.5,.5,0),Ao,u,wo,o,a),fh.set(0,1),f=e.ray.intersectTriangle(Uu,Fu,Wa,!1,Ha),f===null))return;const d=e.ray.origin.distanceTo(Ha);d<e.near||d>e.far||t.push({distance:d,point:Ha.clone(),uv:oi.getInterpolation(Ha,Uu,Wa,Fu,K_,fh,Z_,new dt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ou(n,e,t,r,o,a){Co.subVectors(n,t).addScalar(.5).multiply(r),o!==void 0?(Ga.x=a*Co.x-o*Co.y,Ga.y=o*Co.x+a*Co.y):Ga.copy(Co),n.copy(e),n.x+=Ga.x,n.y+=Ga.y,n.applyMatrix4(VS)}const mr=new K,dh=new K,Bu=new K,$r=new K,hh=new K,ku=new K,ph=new K;class HS{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dh.copy(e).add(t).multiplyScalar(.5),Bu.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(dh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Bu),f=$r.dot(this.direction),d=-$r.dot(Bu),h=$r.lengthSq(),g=Math.abs(1-u*u);let v,m,y,M;if(g>0)if(v=u*d-f,m=u*f-d,M=a*g,v>=0)if(m>=-M)if(m<=M){const A=1/g;v*=A,m*=A,y=v*(v+u*m+2*f)+m*(u*v+m+2*d)+h}else m=a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*a+f)),m=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-d),a),y=m*(m+2*d)+h):(v=Math.max(0,-(u*a+f)),m=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h);else m=u>0?-a:a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(dh).addScaledVector(Bu,m),y}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),o=mr.dot(mr)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(a=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,r,o,a){hh.subVectors(t,e),ku.subVectors(r,e),ph.crossVectors(hh,ku);let u=this.direction.dot(ph),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;$r.subVectors(this.origin,e);const d=f*this.direction.dot(ku.crossVectors($r,ku));if(d<0)return null;const h=f*this.direction.dot(hh.cross($r));if(h<0||d+h>u)return null;const g=-f*$r.dot(ph);return g<0?null:this.at(g/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class GS extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=_S,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const J_=new sn,ws=new HS,zu=new Hc,Q_=new K,Vu=new K,Hu=new K,Gu=new K,mh=new K,Wu=new K,ex=new K,Xu=new K;class wr extends Gn{constructor(e=new li,t=new GS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Wu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const g=f[d],v=a[d];g!==0&&(mh.fromBufferAttribute(v,e),u?Wu.addScaledVector(mh,g):Wu.addScaledVector(mh.sub(t),g))}t.add(Wu)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),zu.copy(r.boundingSphere),zu.applyMatrix4(a),ws.copy(e.ray).recast(e.near),!(zu.containsPoint(ws.origin)===!1&&(ws.intersectSphere(zu,Q_)===null||ws.origin.distanceToSquared(Q_)>(e.far-e.near)**2))&&(J_.copy(a).invert(),ws.copy(e.ray).applyMatrix4(J_),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,r){let o;const a=this.geometry,u=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,m=a.groups,y=a.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],b=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=b,L=D;C<L;C+=3){const P=f.getX(C),F=f.getX(C+1),E=f.getX(C+2);o=ju(this,x,e,r,h,g,v,P,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const b=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);o=ju(this,u,e,r,h,g,v,b,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],b=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=b,L=D;C<L;C+=3){const P=C,F=C+1,E=C+2;o=ju(this,x,e,r,h,g,v,P,F,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const b=S,D=S+1,C=S+2;o=ju(this,u,e,r,h,g,v,b,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function Nb(n,e,t,r,o,a,u,f){let d;if(e.side===Qn?d=r.intersectTriangle(u,a,o,!0,f):d=r.intersectTriangle(o,a,u,e.side===ns,f),d===null)return null;Xu.copy(f),Xu.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Xu);return h<t.near||h>t.far?null:{distance:h,point:Xu.clone(),object:n}}function ju(n,e,t,r,o,a,u,f,d,h){n.getVertexPosition(f,Vu),n.getVertexPosition(d,Hu),n.getVertexPosition(h,Gu);const g=Nb(n,e,t,r,Vu,Hu,Gu,ex);if(g){const v=new K;oi.getBarycoord(ex,Vu,Hu,Gu,v),o&&(g.uv=oi.getInterpolatedAttribute(o,f,d,h,v,new dt)),a&&(g.uv1=oi.getInterpolatedAttribute(a,f,d,h,v,new dt)),u&&(g.normal=oi.getInterpolatedAttribute(u,f,d,h,v,new K),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new K,materialIndex:0};oi.getNormal(Vu,Hu,Gu,m.normal),g.face=m,g.barycoord=v}return g}class Ub extends Fn{constructor(e=null,t=1,r=1,o,a,u,f,d,h=Tn,g=Tn,v,m){super(null,u,f,d,h,g,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gh=new K,Fb=new K,Ob=new ft;class bs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gh.subVectors(r,t).cross(Fb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(gh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ob.getNormalMatrix(e),o=this.coplanarPoint(gh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Hc,Bb=new dt(.5,.5),Yu=new K;class WS{constructor(e=new bs,t=new bs,r=new bs,o=new bs,a=new bs,u=new bs){this.planes=[e,t,r,o,a,u]}set(e,t,r,o,a,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],g=a[4],v=a[5],m=a[6],y=a[7],M=a[8],A=a[9],S=a[10],x=a[11],b=a[12],D=a[13],C=a[14],L=a[15];if(o[0].setComponents(h-u,y-g,x-M,L-b).normalize(),o[1].setComponents(h+u,y+g,x+M,L+b).normalize(),o[2].setComponents(h+f,y+v,x+A,L+D).normalize(),o[3].setComponents(h-f,y-v,x-A,L-D).normalize(),r)o[4].setComponents(d,m,S,C).normalize(),o[5].setComponents(h-d,y-m,x-S,L-C).normalize();else if(o[4].setComponents(h-d,y-m,x-S,L-C).normalize(),t===qi)o[5].setComponents(h+d,y+m,x+S,L+C).normalize();else if(t===Rc)o[5].setComponents(d,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=Bb.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Yu.x=o.normal.x>0?e.max.x:e.min.x,Yu.y=o.normal.y>0?e.max.y:e.min.y,Yu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Yu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class XS extends Zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lc=new K,Ic=new K,tx=new sn,Xa=new HS,qu=new Hc,vh=new K,nx=new K;class kb extends Gn{constructor(e=new li,t=new XS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)Lc.fromBufferAttribute(t,o-1),Ic.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Lc.distanceTo(Ic);e.setAttribute("lineDistance",new Wn(r,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),qu.copy(r.boundingSphere),qu.applyMatrix4(o),qu.radius+=a,e.ray.intersectsSphere(qu)===!1)return;tx.copy(o).invert(),Xa.copy(e.ray).applyMatrix4(tx);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=g.getX(A),b=g.getX(A+1),D=$u(this,e,Xa,d,x,b,A);D&&t.push(D)}if(this.isLineLoop){const A=g.getX(M-1),S=g.getX(y),x=$u(this,e,Xa,d,A,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=$u(this,e,Xa,d,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=$u(this,e,Xa,d,M-1,y,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function $u(n,e,t,r,o,a,u){const f=n.geometry.attributes.position;if(Lc.fromBufferAttribute(f,o),Ic.fromBufferAttribute(f,a),t.distanceSqToSegment(Lc,Ic,vh,nx)>r)return;vh.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(vh);if(!(h<e.near||h>e.far))return{distance:h,point:nx.clone().applyMatrix4(n.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:n}}const ix=new K,rx=new K;class zb extends kb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)ix.fromBufferAttribute(t,o),rx.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ix.distanceTo(rx);e.setAttribute("lineDistance",new Wn(r,1))}else st("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jS extends Fn{constructor(e=[],t=Os,r,o,a,u,f,d,h,g){super(e,t,r,o,a,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vb extends Fn{constructor(e,t,r,o,a,u,f,d,h){super(e,t,r,o,a,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jo extends Fn{constructor(e,t,r=er,o,a,u,f=Tn,d=Tn,h,g=Tr,v=1){if(g!==Tr&&g!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,u,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hb extends jo{constructor(e,t=er,r=Os,o,a,u=Tn,f=Tn,d,h=Tr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,a,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class YS extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends li{constructor(e=1,t=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const f=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],g=[],v=[];let m=0,y=0;M("z","y","x",-1,-1,r,t,e,u,a,0),M("z","y","x",1,-1,r,t,-e,u,a,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Wn(h,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(v,2));function M(A,S,x,b,D,C,L,P,F,E,I){const B=C/F,k=L/E,q=C/2,ue=L/2,pe=P/2,J=F+1,ce=E+1;let X=0,H=0;const ee=new K;for(let ie=0;ie<ce;ie++){const U=ie*k-ue;for(let $=0;$<J;$++){const Re=$*B-q;ee[A]=Re*b,ee[S]=U*D,ee[x]=pe,h.push(ee.x,ee.y,ee.z),ee[A]=0,ee[S]=0,ee[x]=P>0?1:-1,g.push(ee.x,ee.y,ee.z),v.push($/F),v.push(1-ie/E),X+=1}}for(let ie=0;ie<E;ie++)for(let U=0;U<F;U++){const $=m+U+J*ie,Re=m+U+J*(ie+1),Fe=m+(U+1)+J*(ie+1),Oe=m+(U+1)+J*ie;d.push($,Re,Oe),d.push(Re,Fe,Oe),H+=6}f.addGroup(y,H,I),y+=H,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Dm extends li{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],u=[];f(o),h(r),g(),this.setAttribute("position",new Wn(a,3)),this.setAttribute("normal",new Wn(a.slice(),3)),this.setAttribute("uv",new Wn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(b){const D=new K,C=new K,L=new K;for(let P=0;P<t.length;P+=3)y(t[P+0],D),y(t[P+1],C),y(t[P+2],L),d(D,C,L,b)}function d(b,D,C,L){const P=L+1,F=[];for(let E=0;E<=P;E++){F[E]=[];const I=b.clone().lerp(C,E/P),B=D.clone().lerp(C,E/P),k=P-E;for(let q=0;q<=k;q++)q===0&&E===P?F[E][q]=I:F[E][q]=I.clone().lerp(B,q/k)}for(let E=0;E<P;E++)for(let I=0;I<2*(P-E)-1;I++){const B=Math.floor(I/2);I%2===0?(m(F[E][B+1]),m(F[E+1][B]),m(F[E][B])):(m(F[E][B+1]),m(F[E+1][B+1]),m(F[E+1][B]))}}function h(b){const D=new K;for(let C=0;C<a.length;C+=3)D.x=a[C+0],D.y=a[C+1],D.z=a[C+2],D.normalize().multiplyScalar(b),a[C+0]=D.x,a[C+1]=D.y,a[C+2]=D.z}function g(){const b=new K;for(let D=0;D<a.length;D+=3){b.x=a[D+0],b.y=a[D+1],b.z=a[D+2];const C=S(b)/2/Math.PI+.5,L=x(b)/Math.PI+.5;u.push(C,1-L)}M(),v()}function v(){for(let b=0;b<u.length;b+=6){const D=u[b+0],C=u[b+2],L=u[b+4],P=Math.max(D,C,L),F=Math.min(D,C,L);P>.9&&F<.1&&(D<.2&&(u[b+0]+=1),C<.2&&(u[b+2]+=1),L<.2&&(u[b+4]+=1))}}function m(b){a.push(b.x,b.y,b.z)}function y(b,D){const C=b*3;D.x=e[C+0],D.y=e[C+1],D.z=e[C+2]}function M(){const b=new K,D=new K,C=new K,L=new K,P=new dt,F=new dt,E=new dt;for(let I=0,B=0;I<a.length;I+=9,B+=6){b.set(a[I+0],a[I+1],a[I+2]),D.set(a[I+3],a[I+4],a[I+5]),C.set(a[I+6],a[I+7],a[I+8]),P.set(u[B+0],u[B+1]),F.set(u[B+2],u[B+3]),E.set(u[B+4],u[B+5]),L.copy(b).add(D).add(C).divideScalar(3);const k=S(L);A(P,B+0,b,k),A(F,B+2,D,k),A(E,B+4,C,k)}}function A(b,D,C,L){L<0&&b.x===1&&(u[D]=b.x-1),C.x===0&&C.z===0&&(u[D]=L/2/Math.PI+.5)}function S(b){return Math.atan2(b.z,-b.x)}function x(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dm(e.vertices,e.indices,e.radius,e.detail)}}const Ku=new K,Zu=new K,_h=new K,Ju=new oi;class Gb extends li{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(ko*t),u=e.getIndex(),f=e.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],g=["a","b","c"],v=new Array(3),m={},y=[];for(let M=0;M<d;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:A,b:S,c:x}=Ju;if(A.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),x.fromBufferAttribute(f,h[2]),Ju.getNormal(_h),v[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let b=0;b<3;b++){const D=(b+1)%3,C=v[b],L=v[D],P=Ju[g[b]],F=Ju[g[D]],E=`${C}_${L}`,I=`${L}_${C}`;I in m&&m[I]?(_h.dot(m[I].normal)<=a&&(y.push(P.x,P.y,P.z),y.push(F.x,F.y,F.z)),m[I]=null):E in m||(m[E]={index0:h[b],index1:h[D],normal:_h.clone()})}}for(const M in m)if(m[M]){const{index0:A,index1:S}=m[M];Ku.fromBufferAttribute(f,A),Zu.fromBufferAttribute(f,S),y.push(Ku.x,Ku.y,Ku.z),y.push(Zu.x,Zu.y,Zu.z)}this.setAttribute("position",new Wn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Lm extends Dm{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lm(e.radius,e.detail)}}class Gc extends li{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,v=e/f,m=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<g;x++){const b=x*m-u;for(let D=0;D<h;D++){const C=D*v-a;M.push(C,-b,0),A.push(0,0,1),S.push(D/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let b=0;b<f;b++){const D=b+h*x,C=b+h*(x+1),L=b+1+h*(x+1),P=b+1+h*x;y.push(D,C,P),y.push(C,L,P)}this.setIndex(y),this.setAttribute("position",new Wn(M,3)),this.setAttribute("normal",new Wn(A,3)),this.setAttribute("uv",new Wn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Yo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(sx(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(sx(o[0])){const a=[];for(let u=0,f=o.length;u<f;u++)a[u]=o[u].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const r=Yo(n[t]);for(const o in r)e[o]=r[o]}return e}function sx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Wb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function qS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const Xb={clone:Yo,merge:Vn};var jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jb,this.fragmentShader=Yb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yo(e.uniforms),this.uniformsGroups=Wb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[r].value=new dt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new K().fromArray(o.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new ft().fromArray(o.value);break;case"m4":this.uniforms[r].value=new sn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class qb extends tr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $b extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kb extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qu=new K,ec=new Ko,Gi=new K;class $S extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qu,ec,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,ec,Gi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Qu,ec,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qu,ec,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new K,ox=new dt,ax=new dt;class yi extends $S{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,ox,ax),t.subVectors(ax,ox)}setViewOffset(e,t,r,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ko*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class KS extends $S{constructor(e=-1,t=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=-90,bo=1;class Zb extends Gn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new yi(Ro,bo,e,t);o.layers=this.layers,this.add(o);const a=new yi(Ro,bo,e,t);a.layers=this.layers,this.add(a);const u=new yi(Ro,bo,e,t);u.layers=this.layers,this.add(u);const f=new yi(Ro,bo,e,t);f.layers=this.layers,this.add(f);const d=new yi(Ro,bo,e,t);d.layers=this.layers,this.add(d);const h=new yi(Ro,bo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,u,f,d]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Jb extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Om=class Om{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Om.prototype.isMatrix2=!0;let lx=Om;function ux(n,e,t,r){const o=Qb(r);switch(t){case DS:return n*e;case IS:return n*e/o.components*o.byteLength;case Tm:return n*e/o.components*o.byteLength;case Bs:return n*e*2/o.components*o.byteLength;case wm:return n*e*2/o.components*o.byteLength;case LS:return n*e*3/o.components*o.byteLength;case Ui:return n*e*4/o.components*o.byteLength;case Am:return n*e*4/o.components*o.byteLength;case cc:case fc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case dc:case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case np:case rp:return Math.max(n,16)*Math.max(e,8)/4;case tp:case ip:return Math.max(n,8)*Math.max(e,8)/2;case sp:case op:case lp:case up:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ap:case Tc:case cp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case hp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case vp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case xp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case wp:case Ap:case Cp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rp:case bp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case wc:case Pp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qb(n){switch(n){case Si:case CS:return{byteLength:1,components:1};case fl:case RS:case Er:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case er:case Sm:case Yi:return{byteLength:4,components:1};case bS:case PS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ym}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ym);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ZS(){let n=null,e=!1,t=null,r=null;function o(a,u){t(a,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function eP(n){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const g=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,g);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){const M=v[m],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,v[m]=A)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:u}}var tP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nP=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aP=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uP=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,cP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hP=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_P=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,SP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,AP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,CP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DP="gl_FragColor = linearToOutputTexel( gl_FragColor );",LP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,NP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,UP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$P=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,T2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,D2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const t3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,n3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,l3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,g3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,y3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,E3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,D3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,N3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:tP,alphahash_pars_fragment:nP,alphamap_fragment:iP,alphamap_pars_fragment:rP,alphatest_fragment:sP,alphatest_pars_fragment:oP,aomap_fragment:aP,aomap_pars_fragment:lP,batching_pars_vertex:uP,batching_vertex:cP,begin_vertex:fP,beginnormal_vertex:dP,bsdfs:hP,iridescence_fragment:pP,bumpmap_pars_fragment:mP,clipping_planes_fragment:gP,clipping_planes_pars_fragment:vP,clipping_planes_pars_vertex:_P,clipping_planes_vertex:xP,color_fragment:yP,color_pars_fragment:SP,color_pars_vertex:MP,color_vertex:EP,common:TP,cube_uv_reflection_fragment:wP,defaultnormal_vertex:AP,displacementmap_pars_vertex:CP,displacementmap_vertex:RP,emissivemap_fragment:bP,emissivemap_pars_fragment:PP,colorspace_fragment:DP,colorspace_pars_fragment:LP,envmap_fragment:IP,envmap_common_pars_fragment:NP,envmap_pars_fragment:UP,envmap_pars_vertex:FP,envmap_physical_pars_fragment:YP,envmap_vertex:OP,fog_vertex:BP,fog_pars_vertex:kP,fog_fragment:zP,fog_pars_fragment:VP,gradientmap_pars_fragment:HP,lightmap_pars_fragment:GP,lights_lambert_fragment:WP,lights_lambert_pars_fragment:XP,lights_pars_begin:jP,lights_toon_fragment:qP,lights_toon_pars_fragment:$P,lights_phong_fragment:KP,lights_phong_pars_fragment:ZP,lights_physical_fragment:JP,lights_physical_pars_fragment:QP,lights_fragment_begin:e2,lights_fragment_maps:t2,lights_fragment_end:n2,lightprobes_pars_fragment:i2,logdepthbuf_fragment:r2,logdepthbuf_pars_fragment:s2,logdepthbuf_pars_vertex:o2,logdepthbuf_vertex:a2,map_fragment:l2,map_pars_fragment:u2,map_particle_fragment:c2,map_particle_pars_fragment:f2,metalnessmap_fragment:d2,metalnessmap_pars_fragment:h2,morphinstance_vertex:p2,morphcolor_vertex:m2,morphnormal_vertex:g2,morphtarget_pars_vertex:v2,morphtarget_vertex:_2,normal_fragment_begin:x2,normal_fragment_maps:y2,normal_pars_fragment:S2,normal_pars_vertex:M2,normal_vertex:E2,normalmap_pars_fragment:T2,clearcoat_normal_fragment_begin:w2,clearcoat_normal_fragment_maps:A2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:R2,opaque_fragment:b2,packing:P2,premultiplied_alpha_fragment:D2,project_vertex:L2,dithering_fragment:I2,dithering_pars_fragment:N2,roughnessmap_fragment:U2,roughnessmap_pars_fragment:F2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:B2,shadowmap_vertex:k2,shadowmask_pars_fragment:z2,skinbase_vertex:V2,skinning_pars_vertex:H2,skinning_vertex:G2,skinnormal_vertex:W2,specularmap_fragment:X2,specularmap_pars_fragment:j2,tonemapping_fragment:Y2,tonemapping_pars_fragment:q2,transmission_fragment:$2,transmission_pars_fragment:K2,uv_pars_fragment:Z2,uv_pars_vertex:J2,uv_vertex:Q2,worldpos_vertex:e3,background_vert:t3,background_frag:n3,backgroundCube_vert:i3,backgroundCube_frag:r3,cube_vert:s3,cube_frag:o3,depth_vert:a3,depth_frag:l3,distance_vert:u3,distance_frag:c3,equirect_vert:f3,equirect_frag:d3,linedashed_vert:h3,linedashed_frag:p3,meshbasic_vert:m3,meshbasic_frag:g3,meshlambert_vert:v3,meshlambert_frag:_3,meshmatcap_vert:x3,meshmatcap_frag:y3,meshnormal_vert:S3,meshnormal_frag:M3,meshphong_vert:E3,meshphong_frag:T3,meshphysical_vert:w3,meshphysical_frag:A3,meshtoon_vert:C3,meshtoon_frag:R3,points_vert:b3,points_frag:P3,shadow_vert:D3,shadow_frag:L3,sprite_vert:I3,sprite_frag:N3},Ue={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new K},probesMax:{value:new K},probesResolution:{value:new K}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Xi={basic:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Vn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Vn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Vn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Vn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Vn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Vn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Vn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Vn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Vn([Ue.common,Ue.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Vn([Ue.lights,Ue.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Xi.physical={uniforms:Vn([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const tc={r:0,b:0,g:0},U3=new sn,JS=new ft;JS.set(-1,0,0,0,1,0,0,0,1);function F3(n,e,t,r,o,a){const u=new Ct(0);let f=o===!0?0:1,d,h,g=null,v=0,m=null;function y(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const C=b.backgroundBlurriness>0;D=e.get(D,C)}return D}function M(b){let D=!1;const C=y(b);C===null?S(u,f):C&&C.isColor&&(S(C,1),D=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(b,D){const C=y(D);C&&(C.isCubeTexture||C.mapping===Vc)?(h===void 0&&(h=new wr(new xl(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Yo(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(U3.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(JS),h.material.toneMapped=xt.getTransfer(C.colorSpace)!==Ut,(g!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new wr(new Gc(2,2),new tr({name:"BackgroundMaterial",uniforms:Yo(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=xt.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function S(b,D){b.getRGB(tc,qS(n)),t.buffers.color.setClear(tc.r,tc.g,tc.b,D,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,D=1){u.set(b),f=D,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(b){f=b,S(u,f)},render:M,addToRenderList:A,dispose:x}}function O3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let a=o,u=!1;function f(k,q,ue,pe,J){let ce=!1;const X=v(k,pe,ue,q);a!==X&&(a=X,h(a.object)),ce=y(k,pe,ue,J),ce&&M(k,pe,ue,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,C(k,q,ue,pe),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function g(k){return n.deleteVertexArray(k)}function v(k,q,ue,pe){const J=pe.wireframe===!0;let ce=r[q.id];ce===void 0&&(ce={},r[q.id]=ce);const X=k.isInstancedMesh===!0?k.id:0;let H=ce[X];H===void 0&&(H={},ce[X]=H);let ee=H[ue.id];ee===void 0&&(ee={},H[ue.id]=ee);let ie=ee[J];return ie===void 0&&(ie=m(d()),ee[J]=ie),ie}function m(k){const q=[],ue=[],pe=[];for(let J=0;J<t;J++)q[J]=0,ue[J]=0,pe[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ue,attributeDivisors:pe,object:k,attributes:{},index:null}}function y(k,q,ue,pe){const J=a.attributes,ce=q.attributes;let X=0;const H=ue.getAttributes();for(const ee in H)if(H[ee].location>=0){const U=J[ee];let $=ce[ee];if($===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&($=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&($=k.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;X++}return a.attributesNum!==X||a.index!==pe}function M(k,q,ue,pe){const J={},ce=q.attributes;let X=0;const H=ue.getAttributes();for(const ee in H)if(H[ee].location>=0){let U=ce[ee];U===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),J[ee]=$,X++}a.attributes=J,a.attributesNum=X,a.index=pe}function A(){const k=a.newAttributes;for(let q=0,ue=k.length;q<ue;q++)k[q]=0}function S(k){x(k,0)}function x(k,q){const ue=a.newAttributes,pe=a.enabledAttributes,J=a.attributeDivisors;ue[k]=1,pe[k]===0&&(n.enableVertexAttribArray(k),pe[k]=1),J[k]!==q&&(n.vertexAttribDivisor(k,q),J[k]=q)}function b(){const k=a.newAttributes,q=a.enabledAttributes;for(let ue=0,pe=q.length;ue<pe;ue++)q[ue]!==k[ue]&&(n.disableVertexAttribArray(ue),q[ue]=0)}function D(k,q,ue,pe,J,ce,X){X===!0?n.vertexAttribIPointer(k,q,ue,J,ce):n.vertexAttribPointer(k,q,ue,pe,J,ce)}function C(k,q,ue,pe){A();const J=pe.attributes,ce=ue.getAttributes(),X=q.defaultAttributeValues;for(const H in ce){const ee=ce[H];if(ee.location>=0){let ie=J[H];if(ie===void 0&&(H==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),H==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor)),ie!==void 0){const U=ie.normalized,$=ie.itemSize,Re=e.get(ie);if(Re===void 0)continue;const Fe=Re.buffer,Oe=Re.type,se=Re.bytesPerElement,ve=Oe===n.INT||Oe===n.UNSIGNED_INT||ie.gpuType===Sm;if(ie.isInterleavedBufferAttribute){const he=ie.data,Ie=he.stride,ze=ie.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ee.locationSize;Ge++)x(ee.location+Ge,he.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<ee.locationSize;Ge++)S(ee.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let Ge=0;Ge<ee.locationSize;Ge++)D(ee.location+Ge,$/ee.locationSize,Oe,U,Ie*se,(ze+$/ee.locationSize*Ge)*se,ve)}else{if(ie.isInstancedBufferAttribute){for(let he=0;he<ee.locationSize;he++)x(ee.location+he,ie.meshPerAttribute);k.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<ee.locationSize;he++)S(ee.location+he);n.bindBuffer(n.ARRAY_BUFFER,Fe);for(let he=0;he<ee.locationSize;he++)D(ee.location+he,$/ee.locationSize,Oe,U,$*se,$/ee.locationSize*he*se,ve)}}else if(X!==void 0){const U=X[H];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(ee.location,U);break;case 3:n.vertexAttrib3fv(ee.location,U);break;case 4:n.vertexAttrib4fv(ee.location,U);break;default:n.vertexAttrib1fv(ee.location,U)}}}}b()}function L(){I();for(const k in r){const q=r[k];for(const ue in q){const pe=q[ue];for(const J in pe){const ce=pe[J];for(const X in ce)g(ce[X].object),delete ce[X];delete pe[J]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const q=r[k.id];for(const ue in q){const pe=q[ue];for(const J in pe){const ce=pe[J];for(const X in ce)g(ce[X].object),delete ce[X];delete pe[J]}}delete r[k.id]}function F(k){for(const q in r){const ue=r[q];for(const pe in ue){const J=ue[pe];if(J[k.id]===void 0)continue;const ce=J[k.id];for(const X in ce)g(ce[X].object),delete ce[X];delete J[k.id]}}}function E(k){for(const q in r){const ue=r[q],pe=k.isInstancedMesh===!0?k.id:0,J=ue[pe];if(J!==void 0){for(const ce in J){const X=J[ce];for(const H in X)g(X[H].object),delete X[H];delete J[ce]}delete ue[pe],Object.keys(ue).length===0&&delete r[q]}}}function I(){B(),u=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:S,disableUnusedAttributes:b}}function B3(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,g){g!==0&&(n.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,r,1)}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=f}function k3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ui&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Si&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Yi&&!E)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(st("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:C,maxSamples:L,samples:P}}function z3(n){const e=this;let t=null,r=0,o=!1,a=!1;const u=new bs,f=new ft,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?g(null):h();else{const b=a?0:r,D=b*4;let C=x.clippingState||null;d.value=C,C=g(M,m,D,y);for(let L=0;L!==D;++L)C[L]=t[L];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,b=m.matrixWorldInverse;f.getNormalMatrix(b),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,C=y;D!==A;++D,C+=4)u.copy(v[D]).applyMatrix4(b,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const es=4,cx=[.125,.215,.35,.446,.526,.582],Ds=20,V3=256,ja=new KS,fx=new Ct;let xh=null,yh=0,Sh=0,Mh=!1;const H3=new K;class dx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:u=256,position:f=H3}=a;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,yh,Sh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:Er,format:Ui,colorSpace:Ac,depthBuffer:!1},o=hx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=G3(a)),this._blurMaterial=X3(a,e,t),this._ggxMaterial=W3(a,e,t)}return o}_compileMaterial(e){const t=new wr(new li,e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,r,o,a){const d=new yi(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(fx),v.toneMapping=Zi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wr(new xl,new GS({name:"PMREM.Background",side:Qn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,x=!0):(S.color.copy(fx),x=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[D],a.y,a.z)):C===1?(d.up.set(0,0,h[D]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[D],a.z)):(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[D]));const L=this._cubeSize;Po(o,C*L,D>2?L:0,L,L),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=m,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Os||e.mapping===Xo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=px());const a=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;Po(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,ja)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,y=v*m,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-es?r-M+es:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Po(a,S,x,3*A,2*A),o.setRenderTarget(a),o.render(f,ja),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Po(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(f,ja)}_blur(e,t,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const m=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),A=a/M,S=isFinite(a)?1+Math.floor(g*A):Ds;S>Ds&&st(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ds}`);const x=[];let b=0;for(let F=0;F<Ds;++F){const E=F/A,I=Math.exp(-E*E/2);x.push(I),F===0?b+=I:F<S&&(b+=2*I)}for(let F=0;F<x.length;F++)x[F]=x[F]/b;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=x,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:D}=this;m.dTheta.value=M,m.mipInt.value=D-r;const C=this._sizeLods[o],L=3*C*(o>D-es?o-D+es:0),P=4*(this._cubeSize-C);Po(t,L,P,3*C,2*C),d.setRenderTarget(t),d.render(v,ja)}}function G3(n){const e=[],t=[],r=[];let o=n;const a=n-es+1+cx.length;for(let u=0;u<a;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-es?d=cx[u-n+es-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,A=3,S=2,x=1,b=new Float32Array(A*M*y),D=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let P=0;P<y;P++){const F=P%3*2/3-1,E=P>2?0:-1,I=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];b.set(I,A*M*P),D.set(m,S*M*P);const B=[P,P,P,P,P,P];C.set(B,x*M*P)}const L=new li;L.setAttribute("position",new Fi(b,A)),L.setAttribute("uv",new Fi(D,S)),L.setAttribute("faceIndex",new Fi(C,x)),r.push(new wr(L,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function hx(n,e,t){const r=new Ji(n,e,t);return r.texture.mapping=Vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Po(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function W3(n,e,t){return new tr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:V3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function X3(n,e,t){const r=new Float32Array(Ds),o=new K(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function px(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function mx(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class QS extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new jS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new xl(5,5,5),a=new tr({name:"CubemapFromEquirect",uniforms:Yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qn,blending:yr});a.uniforms.tEquirect.value=t;const u=new wr(o,a),f=t.minFilter;return t.minFilter===Is&&(t.minFilter=Un),new Zb(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(a)}}function j3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?u(m):a(m)}function a(m){if(m&&m.isTexture){const y=m.mapping;if(y===Xd||y===jd)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new QS(M.height);return A.fromEquirectangularTexture(n,m),e.set(m,A),m.addEventListener("dispose",h),f(A.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,M=y===Xd||y===jd,A=y===Os||y===Xo;if(M||A){let S=t.get(m);const x=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return r===null&&(r=new dx(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const b=m.image;return M&&b&&b.height>0||A&&b&&d(b)?(r===null&&(r=new dx(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function f(m,y){return y===Xd?m.mapping=Os:y===jd&&(m.mapping=Xo),m}function d(m){let y=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function Y3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bo("WebGLRenderer: "+r+" extension not supported."),o}}}function q3(n,e,t,r){const o={},a=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete o[m.id];const y=a.get(m);y&&(e.remove(y),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER)}function h(v){const m=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const b=y.array;A=y.version;for(let D=0,C=b.length;D<C;D+=3){const L=b[D+0],P=b[D+1],F=b[D+2];m.push(L,P,P,F,F,L)}}else{const b=M.array;A=M.version;for(let D=0,C=b.length/3-1;D<C;D+=3){const L=D+0,P=D+1,F=D+2;m.push(L,P,P,F,F,L)}}const S=new(M.count>=65535?kS:BS)(m,1);S.version=A;const x=a.get(v);x&&e.remove(x),a.set(v,S)}function g(v){const m=a.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function $3(n,e,t){let r;function o(v){r=v}let a,u;function f(v){a=v.type,u=v.bytesPerElement}function d(v,m){n.drawElements(r,m,a,v*u),t.update(m,r,1)}function h(v,m,y){y!==0&&(n.drawElementsInstanced(r,m,a,v*u,y),t.update(m,r,y))}function g(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,v,0,y);let A=0;for(let S=0;S<y;S++)A+=m[S];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function K3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:Mt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function Z3(n,e,t){const r=new WeakMap,o=new rn;function a(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==v){let B=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var y=B;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let L=f.attributes.position.count*C,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*P*4*v),E=new US(F,L,P,v);E.type=Yi,E.needsUpdate=!0;const I=C*4;for(let k=0;k<v;k++){const q=x[k],ue=b[k],pe=D[k],J=L*P*4*k;for(let ce=0;ce<q.count;ce++){const X=ce*I;M===!0&&(o.fromBufferAttribute(q,ce),F[J+X+0]=o.x,F[J+X+1]=o.y,F[J+X+2]=o.z,F[J+X+3]=0),A===!0&&(o.fromBufferAttribute(ue,ce),F[J+X+4]=o.x,F[J+X+5]=o.y,F[J+X+6]=o.z,F[J+X+7]=0),S===!0&&(o.fromBufferAttribute(pe,ce),F[J+X+8]=o.x,F[J+X+9]=o.y,F[J+X+10]=o.z,F[J+X+11]=pe.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new dt(L,P)},r.set(f,m),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function J3(n,e,t,r,o){let a=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return m}function f(){a=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const Q3={[xS]:"LINEAR_TONE_MAPPING",[yS]:"REINHARD_TONE_MAPPING",[SS]:"CINEON_TONE_MAPPING",[MS]:"ACES_FILMIC_TONE_MAPPING",[TS]:"AGX_TONE_MAPPING",[wS]:"NEUTRAL_TONE_MAPPING",[ES]:"CUSTOM_TONE_MAPPING"};function eD(n,e,t,r,o,a){const u=new Ji(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,depthTexture:o?new jo(e,t):void 0}),f=new Ji(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),d=new li;d.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const h=new qb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new wr(d,h),v=new KS(-1,1,1,-1,0,1);let m=null,y=null,M=!1,A,S=null,x=[],b=!1;this.setSize=function(D,C){u.setSize(D,C),f.setSize(D,C);for(let L=0;L<x.length;L++){const P=x[L];P.setSize&&P.setSize(D,C)}},this.setEffects=function(D){x=D,b=x.length>0&&x[0].isRenderPass===!0;const C=u.width,L=u.height;for(let P=0;P<x.length;P++){const F=x[P];F.setSize&&F.setSize(C,L)}},this.begin=function(D,C){if(M||D.toneMapping===Zi&&x.length===0)return!1;if(S=C,C!==null){const L=C.width,P=C.height;(u.width!==L||u.height!==P)&&this.setSize(L,P)}return b===!1&&D.setRenderTarget(u),A=D.toneMapping,D.toneMapping=Zi,!0},this.hasRenderPass=function(){return b},this.end=function(D,C){D.toneMapping=A,M=!0;let L=u,P=f;for(let F=0;F<x.length;F++){const E=x[F];if(E.enabled!==!1&&(E.render(D,P,L,C),E.needsSwap!==!1)){const I=L;L=P,P=I}}if(m!==D.outputColorSpace||y!==D.toneMapping){m=D.outputColorSpace,y=D.toneMapping,h.defines={},xt.getTransfer(m)===Ut&&(h.defines.SRGB_TRANSFER="");const F=Q3[y];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(S),D.render(g,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),h.dispose()}}const eM=new Fn,Lp=new jo(1,1),tM=new US,nM=new xb,iM=new jS,gx=[],vx=[],_x=new Float32Array(16),xx=new Float32Array(9),yx=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=gx[o];if(a===void 0&&(a=new Float32Array(o),gx[o]=a),e!==0){r.toArray(a,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(a,f)}return a}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Xc(n,e){let t=vx[e];t===void 0&&(t=new Int32Array(e),vx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function tD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function iD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function rD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function sD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;yx.set(r),n.uniformMatrix2fv(this.addr,!1,yx),pn(t,r)}}function oD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;xx.set(r),n.uniformMatrix3fv(this.addr,!1,xx),pn(t,r)}}function aD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;_x.set(r),n.uniformMatrix4fv(this.addr,!1,_x),pn(t,r)}}function lD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function cD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function fD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function dD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function pD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function mD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function gD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Lp.compareFunction=t.isReversedDepthBuffer()?Rm:Cm,a=Lp):a=eM,t.setTexture2D(e||a,o)}function vD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||nM,o)}function _D(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||iM,o)}function xD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||tM,o)}function yD(n){switch(n){case 5126:return tD;case 35664:return nD;case 35665:return iD;case 35666:return rD;case 35674:return sD;case 35675:return oD;case 35676:return aD;case 5124:case 35670:return lD;case 35667:case 35671:return uD;case 35668:case 35672:return cD;case 35669:case 35673:return fD;case 5125:return dD;case 36294:return hD;case 36295:return pD;case 36296:return mD;case 35678:case 36198:case 36298:case 36306:case 35682:return gD;case 35679:case 36299:case 36307:return vD;case 35680:case 36300:case 36308:case 36293:return _D;case 36289:case 36303:case 36311:case 36292:return xD}}function SD(n,e){n.uniform1fv(this.addr,e)}function MD(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function ED(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function TD(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function wD(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AD(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CD(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RD(n,e){n.uniform1iv(this.addr,e)}function bD(n,e){n.uniform2iv(this.addr,e)}function PD(n,e){n.uniform3iv(this.addr,e)}function DD(n,e){n.uniform4iv(this.addr,e)}function LD(n,e){n.uniform1uiv(this.addr,e)}function ID(n,e){n.uniform2uiv(this.addr,e)}function ND(n,e){n.uniform3uiv(this.addr,e)}function UD(n,e){n.uniform4uiv(this.addr,e)}function FD(n,e,t){const r=this.cache,o=e.length,a=Xc(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));let u;this.type===n.SAMPLER_2D_SHADOW?u=Lp:u=eM;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,a[f])}function OD(n,e,t){const r=this.cache,o=e.length,a=Xc(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||nM,a[u])}function BD(n,e,t){const r=this.cache,o=e.length,a=Xc(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||iM,a[u])}function kD(n,e,t){const r=this.cache,o=e.length,a=Xc(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||tM,a[u])}function zD(n){switch(n){case 5126:return SD;case 35664:return MD;case 35665:return ED;case 35666:return TD;case 35674:return wD;case 35675:return AD;case 35676:return CD;case 5124:case 35670:return RD;case 35667:case 35671:return bD;case 35668:case 35672:return PD;case 35669:case 35673:return DD;case 5125:return LD;case 36294:return ID;case 36295:return ND;case 36296:return UD;case 35678:case 36198:case 36298:case 36306:case 35682:return FD;case 35679:case 36299:case 36307:return OD;case 35680:case 36300:case 36308:case 36293:return BD;case 36289:case 36303:case 36311:case 36292:return kD}}class VD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=yD(t.type)}}class HD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zD(t.type)}}class GD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function Sx(n,e){n.seq.push(e),n.map[e.id]=e}function WD(n,e,t){const r=n.name,o=r.length;for(Eh.lastIndex=0;;){const a=Eh.exec(r),u=Eh.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){Sx(t,h===void 0?new VD(f,n,e):new HD(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new GD(f),Sx(t,v)),t=v}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);WD(f,d,this)}const o=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):a.push(u);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,u=t.length;a!==u;++a){const f=t[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Mx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const XD=37297;let jD=0;function YD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ex=new ft;function qD(n){xt._getMatrix(Ex,xt.workingColorSpace,n);const e=`mat3( ${Ex.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case Cc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Tx(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+YD(n.getShaderSource(e),f)}else return a}function $D(n,e){const t=qD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const KD={[xS]:"Linear",[yS]:"Reinhard",[SS]:"Cineon",[MS]:"ACESFilmic",[TS]:"AgX",[wS]:"Neutral",[ES]:"Custom"};function ZD(n,e){const t=KD[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new K;function JD(){xt.getLuminanceCoefficients(nc);const n=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function eL(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function tL(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),u=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[u]={type:a.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Qa(n){return n!==""}function wx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ax(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(n){return n.replace(nL,rL)}const iL=new Map;function rL(n,e){let t=ht[e];if(t===void 0){const r=iL.get(e);if(r!==void 0)t=ht[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ip(t)}const sL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cx(n){return n.replace(sL,oL)}function oL(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Rx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aL={[uc]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function lL(n){return aL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uL={[Os]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function cL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":uL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const fL={[Xo]:"ENVMAP_MODE_REFRACTION"};function dL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":fL[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hL={[_S]:"ENVMAP_BLENDING_MULTIPLY",[FR]:"ENVMAP_BLENDING_MIX",[OR]:"ENVMAP_BLENDING_ADD"};function pL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":hL[n.combine]||"ENVMAP_BLENDING_NONE"}function mL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function gL(n,e,t,r){const o=n.getContext(),a=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=lL(t),h=cL(t),g=dL(t),v=pL(t),m=mL(t),y=QD(t),M=eL(a),A=o.createProgram();let S,x,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qa).join(`
`),x.length>0&&(x+=`
`)):(S=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),x=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Zi?ZD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,$D("linearToOutputTexel",t.outputColorSpace),JD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=Ip(u),u=wx(u,t),u=Ax(u,t),f=Ip(f),f=wx(f,t),f=Ax(f,t),u=Cx(u),f=Cx(f),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=b+S+u,C=b+x+f,L=Mx(o,o.VERTEX_SHADER,D),P=Mx(o,o.FRAGMENT_SHADER,C);o.attachShader(A,L),o.attachShader(A,P),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(k){if(n.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",ue=o.getShaderInfoLog(L)||"",pe=o.getShaderInfoLog(P)||"",J=q.trim(),ce=ue.trim(),X=pe.trim();let H=!0,ee=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,L,P);else{const ie=Tx(o,L,"vertex"),U=Tx(o,P,"fragment");Mt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+ie+`
`+U)}else J!==""?st("WebGLProgram: Program Info Log:",J):(ce===""||X==="")&&(ee=!1);ee&&(k.diagnostics={runnable:H,programLog:J,vertexShader:{log:ce,prefix:S},fragmentShader:{log:X,prefix:x}})}o.deleteShader(L),o.deleteShader(P),E=new pc(o,A),I=tL(o,A)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(A,XD)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jD++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=P,this}let vL=0;class _L{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xL(e),t.set(e,r)),r}}class xL{constructor(e){this.id=vL++,this.code=e,this.usedTimes=0}}function yL(n){return n===Bs||n===Tc||n===wc}function SL(n,e,t,r,o,a){const u=new FS,f=new _L,d=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,I,B,k,q,ue){const pe=k.fog,J=q.geometry,ce=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=e.get(E.envMap||ce,X),ee=H&&H.mapping===Vc?H.image.height:null,ie=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&st("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$=U!==void 0?U.length:0;let Re=0;J.morphAttributes.position!==void 0&&(Re=1),J.morphAttributes.normal!==void 0&&(Re=2),J.morphAttributes.color!==void 0&&(Re=3);let Fe,Oe,se,ve;if(ie){const We=Xi[ie];Fe=We.vertexShader,Oe=We.fragmentShader}else{Fe=E.vertexShader,Oe=E.fragmentShader;const We=f.getVertexShaderStage(E),Ot=f.getFragmentShaderStage(E);f.update(E,We,Ot),se=We.id,ve=Ot.id}const he=n.getRenderTarget(),Ie=n.state.buffers.depth.getReversed(),ze=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,Tt=!!E.map,lt=!!E.matcap,Rt=!!H,yt=!!E.aoMap,vt=!!E.lightMap,Gt=!!E.bumpMap&&E.wireframe===!1,Qt=!!E.normalMap,en=!!E.displacementMap,qt=!!E.emissiveMap,Lt=!!E.metalnessMap,Wt=!!E.roughnessMap,j=E.anisotropy>0,yn=E.clearcoat>0,wt=E.dispersion>0,N=E.iridescence>0,T=E.sheen>0,Z=E.transmission>0,oe=j&&!!E.anisotropyMap,fe=yn&&!!E.clearcoatMap,Me=yn&&!!E.clearcoatNormalMap,be=yn&&!!E.clearcoatRoughnessMap,de=N&&!!E.iridescenceMap,ge=N&&!!E.iridescenceThicknessMap,De=T&&!!E.sheenColorMap,$e=T&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Ce=!!E.specularColorMap,et=!!E.specularIntensityMap,tt=Z&&!!E.transmissionMap,ot=Z&&!!E.thicknessMap,V=!!E.gradientMap,Ae=!!E.alphaMap,me=E.alphaTest>0,Pe=!!E.alphaHash,Ne=!!E.extensions;let _e=Zi;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_e=n.toneMapping);const je={shaderID:ie,shaderType:E.type,shaderName:E.name,vertexShader:Fe,fragmentShader:Oe,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ge,batchingColor:Ge&&q._colorsTexture!==null,instancing:ze,instancingColor:ze&&q.instanceColor!==null,instancingMorph:ze&&q.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:xt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Tt,matcap:lt,envMap:Rt,envMapMode:Rt&&H.mapping,envMapCubeUVHeight:ee,aoMap:yt,lightMap:vt,bumpMap:Gt,normalMap:Qt,displacementMap:en,emissiveMap:qt,normalMapObjectSpace:Qt&&E.normalMapType===zR,normalMapTangentSpace:Qt&&E.normalMapType===N_,packedNormalMap:Qt&&E.normalMapType===N_&&yL(E.normalMap.format),metalnessMap:Lt,roughnessMap:Wt,anisotropy:j,anisotropyMap:oe,clearcoat:yn,clearcoatMap:fe,clearcoatNormalMap:Me,clearcoatRoughnessMap:be,dispersion:wt,iridescence:N,iridescenceMap:de,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:De,sheenRoughnessMap:$e,specularMap:Le,specularColorMap:Ce,specularIntensityMap:et,transmission:Z,transmissionMap:tt,thicknessMap:ot,gradientMap:V,opaque:E.transparent===!1&&E.blending===Oo&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:Pe,combine:E.combine,mapUv:Tt&&M(E.map.channel),aoMapUv:yt&&M(E.aoMap.channel),lightMapUv:vt&&M(E.lightMap.channel),bumpMapUv:Gt&&M(E.bumpMap.channel),normalMapUv:Qt&&M(E.normalMap.channel),displacementMapUv:en&&M(E.displacementMap.channel),emissiveMapUv:qt&&M(E.emissiveMap.channel),metalnessMapUv:Lt&&M(E.metalnessMap.channel),roughnessMapUv:Wt&&M(E.roughnessMap.channel),anisotropyMapUv:oe&&M(E.anisotropyMap.channel),clearcoatMapUv:fe&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Me&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(E.sheenRoughnessMap.channel),specularMapUv:Le&&M(E.specularMap.channel),specularColorMapUv:Ce&&M(E.specularColorMap.channel),specularIntensityMapUv:et&&M(E.specularIntensityMap.channel),transmissionMapUv:tt&&M(E.transmissionMap.channel),thicknessMapUv:ot&&M(E.thicknessMap.channel),alphaMapUv:Ae&&M(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Qt||j),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!J.attributes.uv&&(Tt||Ae),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&Qt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ie,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Re,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:Tt&&E.map.isVideoTexture===!0&&xt.getTransfer(E.map.colorSpace)===Ut,decodeVideoTextureEmissive:qt&&E.emissiveMap.isVideoTexture===!0&&xt.getTransfer(E.emissiveMap.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gr,flipSided:E.side===Qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function S(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)I.push(B),I.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(I,E),b(I,E),I.push(n.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function x(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function b(E,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function D(E){const I=y[E.type];let B;if(I){const k=Xi[I];B=Xb.clone(k.uniforms)}else B=E.uniforms;return B}function C(E,I){let B=g.get(I);return B!==void 0?++B.usedTimes:(B=new gL(n,I,E,o),h.push(B),g.set(I,B)),B}function L(E){if(--E.usedTimes===0){const I=h.indexOf(E);h[I]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function P(E){f.remove(E)}function F(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:F}}function ML(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function EL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function bx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Px(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,A,S,x){let b=n[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:M,materialVariant:u(m),groupOrder:A,renderOrder:m.renderOrder,z:S,group:x},n[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=M,b.materialVariant=u(m),b.groupOrder=A,b.renderOrder=m.renderOrder,b.z=S,b.group=x),e++,b}function d(m,y,M,A,S,x){const b=f(m,y,M,A,S,x);M.transmission>0?r.push(b):M.transparent===!0?o.push(b):t.push(b)}function h(m,y,M,A,S,x){const b=f(m,y,M,A,S,x);M.transmission>0?r.unshift(b):M.transparent===!0?o.unshift(b):t.unshift(b)}function g(m,y,M){t.length>1&&t.sort(m||EL),r.length>1&&r.sort(y||bx),o.length>1&&o.sort(y||bx),M&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let m=e,y=n.length;m<y;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:g}}function TL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let u;return a===void 0?(u=new Px,n.set(r,[u])):o>=a.length?(u=new Px,a.push(u)):u=a[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function wL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ct};break;case"SpotLight":t={position:new K,direction:new K,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function AL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CL=0;function RL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function bL(n){const e=new wL,t=AL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new K);const o=new K,a=new sn,u=new sn;function f(h){let g=0,v=0,m=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,b=0,D=0,C=0,L=0,P=0,F=0;h.sort(RL);for(let I=0,B=h.length;I<B;I++){const k=h[I],q=k.color,ue=k.intensity,pe=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Bs?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=q.r*ue,v+=q.g*ue,m+=q.b*ue;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(k.sh.coefficients[ce],ue);F++}else if(k.isDirectionalLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,H=t.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.directionalShadow[y]=H,r.directionalShadowMap[y]=J,r.directionalShadowMatrix[y]=k.shadow.matrix,b++}r.directional[y]=ce,y++}else if(k.isSpotLight){const ce=e.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(q).multiplyScalar(ue),ce.distance=pe,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,r.spot[A]=ce;const X=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,X.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[A]=X.matrix,k.castShadow){const H=t.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,r.spotShadow[A]=H,r.spotShadowMap[A]=J,C++}A++}else if(k.isRectAreaLight){const ce=e.get(k);ce.color.copy(q).multiplyScalar(ue),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=ce,S++}else if(k.isPointLight){const ce=e.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const X=k.shadow,H=t.get(k);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,r.pointShadow[M]=H,r.pointShadowMap[M]=J,r.pointShadowMatrix[M]=k.shadow.matrix,D++}r.point[M]=ce,M++}else if(k.isHemisphereLight){const ce=e.get(k);ce.skyColor.copy(k.color).multiplyScalar(ue),ce.groundColor.copy(k.groundColor).multiplyScalar(ue),r.hemi[x]=ce,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==y||E.pointLength!==M||E.spotLength!==A||E.rectAreaLength!==S||E.hemiLength!==x||E.numDirectionalShadows!==b||E.numPointShadows!==D||E.numSpotShadows!==C||E.numSpotMaps!==L||E.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,E.directionalLength=y,E.pointLength=M,E.spotLength=A,E.rectAreaLength=S,E.hemiLength=x,E.numDirectionalShadows=b,E.numPointShadows=D,E.numSpotShadows=C,E.numSpotMaps=L,E.numLightProbes=F,r.version=CL++)}function d(h,g){let v=0,m=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let x=0,b=h.length;x<b;x++){const D=h[x];if(D.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),a.copy(D.matrixWorld),a.premultiply(S),u.extractRotation(a),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),m++}else if(D.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:f,setupView:d,state:r}}function Dx(n){const e=new bL(n),t=[],r=[],o=[];function a(m){v.camera=m,t.length=0,r.length=0,o.length=0}function u(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function PL(n){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let f;return u===void 0?(f=new Dx(n),e.set(o,[f])):a>=u.length?(f=new Dx(n),u.push(f)):f=u[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const DL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IL=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],NL=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Lx=new sn,Ya=new K,Th=new K;function UL(n,e,t){let r=new WS;const o=new dt,a=new dt,u=new rn,f=new $b,d=new Kb,h={},g=t.maxTextureSize,v={[ns]:Qn,[Qn]:ns,[gr]:gr},m=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:DL,fragmentShader:LL}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new li;M.setAttribute("position",new Fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new wr(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let x=this.type;this.render=function(P,F,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===vR&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=uc);const I=n.getRenderTarget(),B=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),q=n.state;q.setBlending(yr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const ue=x!==this.type;ue&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(J=>J.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,J=P.length;pe<J;pe++){const ce=P[pe],X=ce.shadow;if(X===void 0){st("WebGLShadowMap:",ce,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const H=X.getFrameExtents();o.multiply(H),a.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/H.x),o.x=a.x*H.x,X.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/H.y),o.y=a.y*H.y,X.mapSize.y=a.y));const ee=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ee,X.map===null||ue===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ja){if(ce.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ji(o.x,o.y,{format:Bs,type:Er,minFilter:Un,magFilter:Un,generateMipmaps:!1}),X.map.texture.name=ce.name+".shadowMap",X.map.depthTexture=new jo(o.x,o.y,Yi),X.map.depthTexture.name=ce.name+".shadowMapDepth",X.map.depthTexture.format=Tr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn}else ce.isPointLight?(X.map=new QS(o.x),X.map.depthTexture=new Hb(o.x,er)):(X.map=new Ji(o.x,o.y),X.map.depthTexture=new jo(o.x,o.y,er)),X.map.depthTexture.name=ce.name+".shadowMap",X.map.depthTexture.format=Tr,this.type===uc?(X.map.depthTexture.compareFunction=ee?Rm:Cm,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn);X.camera.updateProjectionMatrix()}const ie=X.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ie;U++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,U),n.clear();else{U===0&&(n.setRenderTarget(X.map),n.clear());const $=X.getViewport(U);u.set(a.x*$.x,a.y*$.y,a.x*$.z,a.y*$.w),q.viewport(u)}if(ce.isPointLight){const $=X.camera,Re=X.matrix,Fe=ce.distance||$.far;Fe!==$.far&&($.far=Fe,$.updateProjectionMatrix()),Ya.setFromMatrixPosition(ce.matrixWorld),$.position.copy(Ya),Th.copy($.position),Th.add(IL[U]),$.up.copy(NL[U]),$.lookAt(Th),$.updateMatrixWorld(),Re.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Lx.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Lx,$.coordinateSystem,$.reversedDepth)}else X.updateMatrices(ce);r=X.getFrustum(),C(F,E,X.camera,ce,this.type)}X.isPointLightShadow!==!0&&this.type===Ja&&b(X,E),X.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(I,B,k)};function b(P,F){const E=e.update(A);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ji(o.x,o.y,{format:Bs,type:Er})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(F,null,E,m,A,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(F,null,E,y,A,null)}function D(P,F,E,I){let B=null;const k=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)B=k;else if(B=E.isPointLight===!0?d:f,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const q=B.uuid,ue=F.uuid;let pe=h[q];pe===void 0&&(pe={},h[q]=pe);let J=pe[ue];J===void 0&&(J=B.clone(),pe[ue]=J,F.addEventListener("dispose",L)),B=J}if(B.visible=F.visible,B.wireframe=F.wireframe,I===Ja?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:v[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const q=n.properties.get(B);q.light=E}return B}function C(P,F,E,I,B){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Ja)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),pe=P.material;if(Array.isArray(pe)){const J=ue.groups;for(let ce=0,X=J.length;ce<X;ce++){const H=J[ce],ee=pe[H.materialIndex];if(ee&&ee.visible){const ie=D(P,ee,I,B);P.onBeforeShadow(n,P,F,E,ue,ie,H),n.renderBufferDirect(E,null,ue,ie,P,H),P.onAfterShadow(n,P,F,E,ue,ie,H)}}}else if(pe.visible){const J=D(P,pe,I,B);P.onBeforeShadow(n,P,F,E,ue,J,null),n.renderBufferDirect(E,null,ue,J,P,null),P.onAfterShadow(n,P,F,E,ue,J,null)}}const q=P.children;for(let ue=0,pe=q.length;ue<pe;ue++)C(q[ue],F,E,I,B)}function L(P){P.target.removeEventListener("dispose",L);for(const E in h){const I=h[E],B=P.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function FL(n,e){function t(){let V=!1;const Ae=new rn;let me=null;const Pe=new rn(0,0,0,0);return{setMask:function(Ne){me!==Ne&&!V&&(n.colorMask(Ne,Ne,Ne,Ne),me=Ne)},setLocked:function(Ne){V=Ne},setClear:function(Ne,_e,je,We,Ot){Ot===!0&&(Ne*=We,_e*=We,je*=We),Ae.set(Ne,_e,je,We),Pe.equals(Ae)===!1&&(n.clearColor(Ne,_e,je,We),Pe.copy(Ae))},reset:function(){V=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,me=null,Pe=null,Ne=null;return{setReversed:function(_e){if(Ae!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const We=Ne;Ne=null,this.setClear(We)}},getReversed:function(){return Ae},setTest:function(_e){_e?he(n.DEPTH_TEST):Ie(n.DEPTH_TEST)},setMask:function(_e){me!==_e&&!V&&(n.depthMask(_e),me=_e)},setFunc:function(_e){if(Ae&&(_e=KR[_e]),Pe!==_e){switch(_e){case jh:n.depthFunc(n.NEVER);break;case Yh:n.depthFunc(n.ALWAYS);break;case qh:n.depthFunc(n.LESS);break;case Wo:n.depthFunc(n.LEQUAL);break;case $h:n.depthFunc(n.EQUAL);break;case Kh:n.depthFunc(n.GEQUAL);break;case Zh:n.depthFunc(n.GREATER);break;case Jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ne!==_e&&(Ne=_e,Ae&&(_e=1-_e),n.clearDepth(_e))},reset:function(){V=!1,me=null,Pe=null,Ne=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Pe=null,Ne=null,_e=null,je=null,We=null,Ot=null;return{setTest:function(Pt){V||(Pt?he(n.STENCIL_TEST):Ie(n.STENCIL_TEST))},setMask:function(Pt){Ae!==Pt&&!V&&(n.stencilMask(Pt),Ae=Pt)},setFunc:function(Pt,wn,ui){(me!==Pt||Pe!==wn||Ne!==ui)&&(n.stencilFunc(Pt,wn,ui),me=Pt,Pe=wn,Ne=ui)},setOp:function(Pt,wn,ui){(_e!==Pt||je!==wn||We!==ui)&&(n.stencilOp(Pt,wn,ui),_e=Pt,je=wn,We=ui)},setLocked:function(Pt){V=Pt},setClear:function(Pt){Ot!==Pt&&(n.clearStencil(Pt),Ot=Pt)},reset:function(){V=!1,Ae=null,me=null,Pe=null,Ne=null,_e=null,je=null,We=null,Ot=null}}}const a=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},v={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,b=null,D=null,C=null,L=null,P=null,F=null,E=new Ct(0,0,0),I=0,B=!1,k=null,q=null,ue=null,pe=null,J=null;const ce=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,H=0;const ee=n.getParameter(n.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),X=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),X=H>=2);let ie=null,U={};const $=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Fe=new rn().fromArray($),Oe=new rn().fromArray(Re);function se(V,Ae,me,Pe){const Ne=new Uint8Array(4),_e=n.createTexture();n.bindTexture(V,_e),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<me;je++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ae+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return _e}const ve={};ve[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(n.DEPTH_TEST),u.setFunc(Wo),Gt(!1),Qt(D_),he(n.CULL_FACE),yt(yr);function he(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Ie(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function ze(V,Ae){return m[V]!==Ae?(n.bindFramebuffer(V,Ae),m[V]=Ae,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ae),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ge(V,Ae){let me=M,Pe=!1;if(V){me=y.get(Ae),me===void 0&&(me=[],y.set(Ae,me));const Ne=V.textures;if(me.length!==Ne.length||me[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,je=Ne.length;_e<je;_e++)me[_e]=n.COLOR_ATTACHMENT0+_e;me.length=Ne.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function Tt(V){return A!==V?(n.useProgram(V),A=V,!0):!1}const lt={[Ps]:n.FUNC_ADD,[xR]:n.FUNC_SUBTRACT,[yR]:n.FUNC_REVERSE_SUBTRACT};lt[SR]=n.MIN,lt[MR]=n.MAX;const Rt={[ER]:n.ZERO,[TR]:n.ONE,[wR]:n.SRC_COLOR,[Wh]:n.SRC_ALPHA,[DR]:n.SRC_ALPHA_SATURATE,[bR]:n.DST_COLOR,[CR]:n.DST_ALPHA,[AR]:n.ONE_MINUS_SRC_COLOR,[Xh]:n.ONE_MINUS_SRC_ALPHA,[PR]:n.ONE_MINUS_DST_COLOR,[RR]:n.ONE_MINUS_DST_ALPHA,[LR]:n.CONSTANT_COLOR,[IR]:n.ONE_MINUS_CONSTANT_COLOR,[NR]:n.CONSTANT_ALPHA,[UR]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(V,Ae,me,Pe,Ne,_e,je,We,Ot,Pt){if(V===yr){S===!0&&(Ie(n.BLEND),S=!1);return}if(S===!1&&(he(n.BLEND),S=!0),V!==_R){if(V!==x||Pt!==B){if((b!==Ps||L!==Ps)&&(n.blendEquation(n.FUNC_ADD),b=Ps,L=Ps),Pt)switch(V){case Oo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gh:n.blendFunc(n.ONE,n.ONE);break;case L_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case I_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Mt("WebGLState: Invalid blending: ",V);break}else switch(V){case Oo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case L_:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",V);break}D=null,C=null,P=null,F=null,E.set(0,0,0),I=0,x=V,B=Pt}return}Ne=Ne||Ae,_e=_e||me,je=je||Pe,(Ae!==b||Ne!==L)&&(n.blendEquationSeparate(lt[Ae],lt[Ne]),b=Ae,L=Ne),(me!==D||Pe!==C||_e!==P||je!==F)&&(n.blendFuncSeparate(Rt[me],Rt[Pe],Rt[_e],Rt[je]),D=me,C=Pe,P=_e,F=je),(We.equals(E)===!1||Ot!==I)&&(n.blendColor(We.r,We.g,We.b,Ot),E.copy(We),I=Ot),x=V,B=!1}function vt(V,Ae){V.side===gr?Ie(n.CULL_FACE):he(n.CULL_FACE);let me=V.side===Qn;Ae&&(me=!me),Gt(me),V.blending===Oo&&V.transparent===!1?yt(yr):yt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const Pe=V.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),qt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(V){k!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),k=V)}function Qt(V){V!==mR?(he(n.CULL_FACE),V!==q&&(V===D_?n.cullFace(n.BACK):V===gR?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ie(n.CULL_FACE),q=V}function en(V){V!==ue&&(X&&n.lineWidth(V),ue=V)}function qt(V,Ae,me){V?(he(n.POLYGON_OFFSET_FILL),(pe!==Ae||J!==me)&&(pe=Ae,J=me,u.getReversed()&&(Ae=-Ae),n.polygonOffset(Ae,me))):Ie(n.POLYGON_OFFSET_FILL)}function Lt(V){V?he(n.SCISSOR_TEST):Ie(n.SCISSOR_TEST)}function Wt(V){V===void 0&&(V=n.TEXTURE0+ce-1),ie!==V&&(n.activeTexture(V),ie=V)}function j(V,Ae,me){me===void 0&&(ie===null?me=n.TEXTURE0+ce-1:me=ie);let Pe=U[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[me]=Pe),(Pe.type!==V||Pe.texture!==Ae)&&(ie!==me&&(n.activeTexture(me),ie=me),n.bindTexture(V,Ae||ve[V]),Pe.type=V,Pe.texture=Ae)}function yn(){const V=U[ie];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function wt(){try{n.compressedTexImage2D(...arguments)}catch(V){Mt("WebGLState:",V)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(V){Mt("WebGLState:",V)}}function T(){try{n.texSubImage2D(...arguments)}catch(V){Mt("WebGLState:",V)}}function Z(){try{n.texSubImage3D(...arguments)}catch(V){Mt("WebGLState:",V)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Mt("WebGLState:",V)}}function fe(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Mt("WebGLState:",V)}}function Me(){try{n.texStorage2D(...arguments)}catch(V){Mt("WebGLState:",V)}}function be(){try{n.texStorage3D(...arguments)}catch(V){Mt("WebGLState:",V)}}function de(){try{n.texImage2D(...arguments)}catch(V){Mt("WebGLState:",V)}}function ge(){try{n.texImage3D(...arguments)}catch(V){Mt("WebGLState:",V)}}function De(V){return v[V]!==void 0?v[V]:n.getParameter(V)}function $e(V,Ae){v[V]!==Ae&&(n.pixelStorei(V,Ae),v[V]=Ae)}function Le(V){Fe.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Fe.copy(V))}function Ce(V){Oe.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),Oe.copy(V))}function et(V,Ae){let me=h.get(Ae);me===void 0&&(me=new WeakMap,h.set(Ae,me));let Pe=me.get(V);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ae,V.name),me.set(V,Pe))}function tt(V,Ae){const Pe=h.get(Ae).get(V);d.get(Ae)!==Pe&&(n.uniformBlockBinding(Ae,Pe,V.__bindingPointIndex),d.set(Ae,Pe))}function ot(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},ie=null,U={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,b=null,D=null,C=null,L=null,P=null,F=null,E=new Ct(0,0,0),I=0,B=!1,k=null,q=null,ue=null,pe=null,J=null,Fe.set(0,0,n.canvas.width,n.canvas.height),Oe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:he,disable:Ie,bindFramebuffer:ze,drawBuffers:Ge,useProgram:Tt,setBlending:yt,setMaterial:vt,setFlipSided:Gt,setCullFace:Qt,setLineWidth:en,setPolygonOffset:qt,setScissorTest:Lt,activeTexture:Wt,bindTexture:j,unbindTexture:yn,compressedTexImage2D:wt,compressedTexImage3D:N,texImage2D:de,texImage3D:ge,pixelStorei:$e,getParameter:De,updateUBOMapping:et,uniformBlockBinding:tt,texStorage2D:Me,texStorage3D:be,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:Ce,reset:ot}}function OL(n,e,t,r,o,a,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new dt,g=new WeakMap,v=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return M?new OffscreenCanvas(N,T):bc("canvas")}function S(N,T,Z){let oe=1;const fe=wt(N);if((fe.width>Z||fe.height>Z)&&(oe=Z/Math.max(fe.width,fe.height)),oe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Me=Math.floor(oe*fe.width),be=Math.floor(oe*fe.height);m===void 0&&(m=A(Me,be));const de=T?A(Me,be):m;return de.width=Me,de.height=be,de.getContext("2d").drawImage(N,0,0,Me,be),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Me+"x"+be+")."),de}else return"data"in N&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),N;return N}function x(N){return N.generateMipmaps}function b(N){n.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(N,T,Z,oe,fe,Me=!1){if(N!==null){if(n[N]!==void 0)return n[N];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let be;oe&&(be=e.get("EXT_texture_norm16"),be||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=T;if(T===n.RED&&(Z===n.FLOAT&&(de=n.R32F),Z===n.HALF_FLOAT&&(de=n.R16F),Z===n.UNSIGNED_BYTE&&(de=n.R8),Z===n.UNSIGNED_SHORT&&be&&(de=be.R16_EXT),Z===n.SHORT&&be&&(de=be.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.R8UI),Z===n.UNSIGNED_SHORT&&(de=n.R16UI),Z===n.UNSIGNED_INT&&(de=n.R32UI),Z===n.BYTE&&(de=n.R8I),Z===n.SHORT&&(de=n.R16I),Z===n.INT&&(de=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(de=n.RG32F),Z===n.HALF_FLOAT&&(de=n.RG16F),Z===n.UNSIGNED_BYTE&&(de=n.RG8),Z===n.UNSIGNED_SHORT&&be&&(de=be.RG16_EXT),Z===n.SHORT&&be&&(de=be.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RG8UI),Z===n.UNSIGNED_SHORT&&(de=n.RG16UI),Z===n.UNSIGNED_INT&&(de=n.RG32UI),Z===n.BYTE&&(de=n.RG8I),Z===n.SHORT&&(de=n.RG16I),Z===n.INT&&(de=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Z===n.UNSIGNED_INT&&(de=n.RGB32UI),Z===n.BYTE&&(de=n.RGB8I),Z===n.SHORT&&(de=n.RGB16I),Z===n.INT&&(de=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Z===n.UNSIGNED_INT&&(de=n.RGBA32UI),Z===n.BYTE&&(de=n.RGBA8I),Z===n.SHORT&&(de=n.RGBA16I),Z===n.INT&&(de=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&be&&(de=be.RGB16_EXT),Z===n.SHORT&&be&&(de=be.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),T===n.RGBA){const ge=Me?Cc:xt.getTransfer(fe);Z===n.FLOAT&&(de=n.RGBA32F),Z===n.HALF_FLOAT&&(de=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(de=ge===Ut?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&be&&(de=be.RGBA16_EXT),Z===n.SHORT&&be&&(de=be.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(N,T){let Z;return N?T===null||T===er||T===dl?Z=n.DEPTH24_STENCIL8:T===Yi?Z=n.DEPTH32F_STENCIL8:T===fl&&(Z=n.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===dl?Z=n.DEPTH_COMPONENT24:T===Yi?Z=n.DEPTH_COMPONENT32F:T===fl&&(Z=n.DEPTH_COMPONENT16),Z}function P(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==Un?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function F(N){const T=N.target;T.removeEventListener("dispose",F),I(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&v.delete(T)}function E(N){const T=N.target;T.removeEventListener("dispose",E),k(T)}function I(N){const T=r.get(N);if(T.__webglInit===void 0)return;const Z=N.source,oe=y.get(Z);if(oe){const fe=oe[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&B(N),Object.keys(oe).length===0&&y.delete(Z)}r.remove(N)}function B(N){const T=r.get(N);n.deleteTexture(T.__webglTexture);const Z=N.source,oe=y.get(Z);delete oe[T.__cacheKey],u.memory.textures--}function k(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(T.__webglFramebuffer[oe]))for(let fe=0;fe<T.__webglFramebuffer[oe].length;fe++)n.deleteFramebuffer(T.__webglFramebuffer[oe][fe]);else n.deleteFramebuffer(T.__webglFramebuffer[oe]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[oe])}else{if(Array.isArray(T.__webglFramebuffer))for(let oe=0;oe<T.__webglFramebuffer.length;oe++)n.deleteFramebuffer(T.__webglFramebuffer[oe]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let oe=0;oe<T.__webglColorRenderbuffer.length;oe++)T.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[oe]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=N.textures;for(let oe=0,fe=Z.length;oe<fe;oe++){const Me=r.get(Z[oe]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(Z[oe])}r.remove(N)}let q=0;function ue(){q=0}function pe(){return q}function J(N){q=N}function ce(){const N=q;return N>=o.maxTextures&&st("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),q+=1,N}function X(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function H(N,T){const Z=r.get(N);if(N.isVideoTexture&&j(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Z.__version!==N.version){const oe=N.image;if(oe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Z,N,T);return}}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function ee(N,T){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ie(Z,N,T);return}else N.isExternalTexture&&(Z.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function ie(N,T){const Z=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){Ie(Z,N,T);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function U(N,T){const Z=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&Z.__version!==N.version){ze(Z,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}const $={[Qh]:n.REPEAT,[vr]:n.CLAMP_TO_EDGE,[ep]:n.MIRRORED_REPEAT},Re={[Tn]:n.NEAREST,[BR]:n.NEAREST_MIPMAP_NEAREST,[Cu]:n.NEAREST_MIPMAP_LINEAR,[Un]:n.LINEAR,[Yd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},Fe={[VR]:n.NEVER,[jR]:n.ALWAYS,[HR]:n.LESS,[Cm]:n.LEQUAL,[GR]:n.EQUAL,[Rm]:n.GEQUAL,[WR]:n.GREATER,[XR]:n.NOTEQUAL};function Oe(N,T){if(T.type===Yi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Un||T.magFilter===Yd||T.magFilter===Cu||T.magFilter===Is||T.minFilter===Un||T.minFilter===Yd||T.minFilter===Cu||T.minFilter===Is)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,$[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,$[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,$[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Re[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Fe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Tn||T.minFilter!==Cu&&T.minFilter!==Is||T.type===Yi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function se(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",F));const oe=T.source;let fe=y.get(oe);fe===void 0&&(fe={},y.set(oe,fe));const Me=X(T);if(Me!==N.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),fe[Me].usedTimes++;const be=fe[N.__cacheKey];be!==void 0&&(fe[N.__cacheKey].usedTimes--,be.usedTimes===0&&B(T)),N.__cacheKey=Me,N.__webglTexture=fe[Me].texture}return Z}function ve(N,T,Z){return Math.floor(Math.floor(N/Z)/T)}function he(N,T,Z,oe){const Me=N.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,oe,T.data);else{Me.sort(($e,Le)=>$e.start-Le.start);let be=0;for(let $e=1;$e<Me.length;$e++){const Le=Me[be],Ce=Me[$e],et=Le.start+Le.count,tt=ve(Ce.start,T.width,4),ot=ve(Le.start,T.width,4);Ce.start<=et+1&&tt===ot&&ve(Ce.start+Ce.count-1,T.width,4)===tt?Le.count=Math.max(Le.count,Ce.start+Ce.count-Le.start):(++be,Me[be]=Ce)}Me.length=be+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let $e=0,Le=Me.length;$e<Le;$e++){const Ce=Me[$e],et=Math.floor(Ce.start/4),tt=Math.ceil(Ce.count/4),ot=et%T.width,V=Math.floor(et/T.width),Ae=tt,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ot),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ot,V,Ae,me,Z,oe,T.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Ie(N,T,Z){let oe=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(oe=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(oe=n.TEXTURE_3D);const fe=se(N,T),Me=T.source;t.bindTexture(oe,N.__webglTexture,n.TEXTURE0+Z);const be=r.get(Me);if(Me.version!==be.__version||fe===!0){if(t.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const me=xt.getPrimaries(xt.workingColorSpace),Pe=T.colorSpace===Qr?null:xt.getPrimaries(T.colorSpace),Ne=T.colorSpace===Qr||me===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=S(T.image,!1,o.maxTextureSize);ge=yn(T,ge);const De=a.convert(T.format,T.colorSpace),$e=a.convert(T.type);let Le=C(T.internalFormat,De,$e,T.normalized,T.colorSpace,T.isVideoTexture);Oe(oe,T);let Ce;const et=T.mipmaps,tt=T.isVideoTexture!==!0,ot=be.__version===void 0||fe===!0,V=Me.dataReady,Ae=P(T,ge);if(T.isDepthTexture)Le=L(T.format===Ns,T.type),ot&&(tt?t.texStorage2D(n.TEXTURE_2D,1,Le,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,De,$e,null));else if(T.isDataTexture)if(et.length>0){tt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,et[0].width,et[0].height);for(let me=0,Pe=et.length;me<Pe;me++)Ce=et[me],tt?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,De,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,me,Le,Ce.width,Ce.height,0,De,$e,Ce.data);T.generateMipmaps=!1}else tt?(ot&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,ge.width,ge.height),V&&he(T,ge,De,$e)):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,De,$e,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){tt&&ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Le,et[0].width,et[0].height,ge.depth);for(let me=0,Pe=et.length;me<Pe;me++)if(Ce=et[me],T.format!==Ui)if(De!==null)if(tt){if(V)if(T.layerUpdates.size>0){const Ne=ux(Ce.width,Ce.height,T.format,T.type);for(const _e of T.layerUpdates){const je=Ce.data.subarray(_e*Ne/Ce.data.BYTES_PER_ELEMENT,(_e+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,_e,Ce.width,Ce.height,1,De,je)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ge.depth,De,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Le,Ce.width,Ce.height,ge.depth,0,Ce.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,ge.depth,De,$e,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Le,Ce.width,Ce.height,ge.depth,0,De,$e,Ce.data)}else{tt&&ot&&t.texStorage2D(n.TEXTURE_2D,Ae,Le,et[0].width,et[0].height);for(let me=0,Pe=et.length;me<Pe;me++)Ce=et[me],T.format!==Ui?De!==null?tt?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Le,Ce.width,Ce.height,0,Ce.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,Ce.width,Ce.height,De,$e,Ce.data):t.texImage2D(n.TEXTURE_2D,me,Le,Ce.width,Ce.height,0,De,$e,Ce.data)}else if(T.isDataArrayTexture)if(tt){if(ot&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Le,ge.width,ge.height,ge.depth),V)if(T.layerUpdates.size>0){const me=ux(ge.width,ge.height,T.format,T.type);for(const Pe of T.layerUpdates){const Ne=ge.data.subarray(Pe*me/ge.data.BYTES_PER_ELEMENT,(Pe+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,De,$e,Ne)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,$e,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,De,$e,ge.data);else if(T.isData3DTexture)tt?(ot&&t.texStorage3D(n.TEXTURE_3D,Ae,Le,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,$e,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,De,$e,ge.data);else if(T.isFramebufferTexture){if(ot)if(tt)t.texStorage2D(n.TEXTURE_2D,Ae,Le,ge.width,ge.height);else{let me=ge.width,Pe=ge.height;for(let Ne=0;Ne<Ae;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,Le,me,Pe,0,De,$e,null),me>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(T),me.onpaint=Pe=>{const Ne=Pe.changedElements;for(const _e of v)Ne.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Ne=n.RGBA,_e=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ne,_e,je,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(et.length>0){if(tt&&ot){const me=wt(et[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Le,me.width,me.height)}for(let me=0,Pe=et.length;me<Pe;me++)Ce=et[me],tt?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,De,$e,Ce):t.texImage2D(n.TEXTURE_2D,me,Le,De,$e,Ce);T.generateMipmaps=!1}else if(tt){if(ot){const me=wt(ge);t.texStorage2D(n.TEXTURE_2D,Ae,Le,me.width,me.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,$e,ge)}else t.texImage2D(n.TEXTURE_2D,0,Le,De,$e,ge);x(T)&&b(oe),be.__version=Me.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ze(N,T,Z){if(T.image.length!==6)return;const oe=se(N,T),fe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+Z);const Me=r.get(fe);if(fe.version!==Me.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z);const be=xt.getPrimaries(xt.workingColorSpace),de=T.colorSpace===Qr?null:xt.getPrimaries(T.colorSpace),ge=T.colorSpace===Qr||be===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,$e=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!De&&!$e?Le[_e]=S(T.image[_e],!0,o.maxCubemapSize):Le[_e]=$e?T.image[_e].image:T.image[_e],Le[_e]=yn(T,Le[_e]);const Ce=Le[0],et=a.convert(T.format,T.colorSpace),tt=a.convert(T.type),ot=C(T.internalFormat,et,tt,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,Ae=Me.__version===void 0||oe===!0,me=fe.dataReady;let Pe=P(T,Ce);Oe(n.TEXTURE_CUBE_MAP,T);let Ne;if(De){V&&Ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ot,Ce.width,Ce.height);for(let _e=0;_e<6;_e++){Ne=Le[_e].mipmaps;for(let je=0;je<Ne.length;je++){const We=Ne[je];T.format!==Ui?et!==null?V?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,We.width,We.height,et,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,ot,We.width,We.height,0,We.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,We.width,We.height,et,tt,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,ot,We.width,We.height,0,et,tt,We.data)}}}else{if(Ne=T.mipmaps,V&&Ae){Ne.length>0&&Pe++;const _e=wt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ot,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if($e){V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,et,tt,Le[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,Le[_e].width,Le[_e].height,0,et,tt,Le[_e].data);for(let je=0;je<Ne.length;je++){const Ot=Ne[je].image[_e].image;V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Ot.width,Ot.height,et,tt,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,ot,Ot.width,Ot.height,0,et,tt,Ot.data)}}else{V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,et,tt,Le[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ot,et,tt,Le[_e]);for(let je=0;je<Ne.length;je++){const We=Ne[je];V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,et,tt,We.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,ot,et,tt,We.image[_e])}}}x(T)&&b(n.TEXTURE_CUBE_MAP),Me.__version=fe.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ge(N,T,Z,oe,fe,Me){const be=a.convert(Z.format,Z.colorSpace),de=a.convert(Z.type),ge=C(Z.internalFormat,be,de,Z.normalized,Z.colorSpace),De=r.get(T),$e=r.get(Z);if($e.__renderTarget=T,!De.__hasExternalTextures){const Le=Math.max(1,T.width>>Me),Ce=Math.max(1,T.height>>Me);fe===n.TEXTURE_3D||fe===n.TEXTURE_2D_ARRAY?t.texImage3D(fe,Me,ge,Le,Ce,T.depth,0,be,de,null):t.texImage2D(fe,Me,ge,Le,Ce,0,be,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Wt(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,oe,fe,$e.__webglTexture,0,Lt(T)):(fe===n.TEXTURE_2D||fe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,oe,fe,$e.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Tt(N,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const oe=T.depthTexture,fe=oe&&oe.isDepthTexture?oe.type:null,Me=L(T.stencilBuffer,fe),be=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(T),Me,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(T),Me,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Me,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,be,n.RENDERBUFFER,N)}else{const oe=T.textures;for(let fe=0;fe<oe.length;fe++){const Me=oe[fe],be=a.convert(Me.format,Me.colorSpace),de=a.convert(Me.type),ge=C(Me.internalFormat,be,de,Me.normalized,Me.colorSpace);Wt(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(T),ge,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(T),ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function lt(N,T,Z){const oe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(T.depthTexture);if(fe.__renderTarget=T,(!fe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),oe){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,T.depthTexture.addEventListener("dispose",F)),fe.__webglTexture===void 0){fe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,fe.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,T.depthTexture);const De=a.convert(T.depthTexture.format),$e=a.convert(T.depthTexture.type);let Le;T.depthTexture.format===Tr?Le=n.DEPTH_COMPONENT24:T.depthTexture.format===Ns&&(Le=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Le,T.width,T.height,0,De,$e,null)}}else H(T.depthTexture,0);const Me=fe.__webglTexture,be=Lt(T),de=oe?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,ge=T.depthTexture.format===Ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Tr)Wt(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,de,Me,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,de,Me,0);else if(T.depthTexture.format===Ns)Wt(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,de,Me,0,be):n.framebufferTexture2D(n.FRAMEBUFFER,ge,de,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Rt(N){const T=r.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const oe=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),oe){const fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,oe.removeEventListener("dispose",fe)};oe.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=oe}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let oe=0;oe<6;oe++)lt(T.__webglFramebuffer[oe],N,oe);else{const oe=N.texture.mipmaps;oe&&oe.length>0?lt(T.__webglFramebuffer[0],N,0):lt(T.__webglFramebuffer,N,0)}else if(Z){T.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[oe]),T.__webglDepthbuffer[oe]===void 0)T.__webglDepthbuffer[oe]=n.createRenderbuffer(),Tt(T.__webglDepthbuffer[oe],N,!1);else{const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer[oe];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Me)}}else{const oe=N.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Tt(T.__webglDepthbuffer,N,!1);else{const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(N,T,Z){const oe=r.get(N);T!==void 0&&Ge(oe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Rt(N)}function vt(N){const T=N.texture,Z=r.get(N),oe=r.get(T);N.addEventListener("dispose",E);const fe=N.textures,Me=N.isWebGLCubeRenderTarget===!0,be=fe.length>1;if(be||(oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture()),oe.__version=T.version,u.memory.textures++),Me){Z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[de]=[];for(let ge=0;ge<T.mipmaps.length;ge++)Z.__webglFramebuffer[de][ge]=n.createFramebuffer()}else Z.__webglFramebuffer[de]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)Z.__webglFramebuffer[de]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(be)for(let de=0,ge=fe.length;de<ge;de++){const De=r.get(fe[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),u.memory.textures++)}if(N.samples>0&&Wt(N)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const ge=fe[de];Z.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[de]);const De=a.convert(ge.format,ge.colorSpace),$e=a.convert(ge.type),Le=C(ge.internalFormat,De,$e,ge.normalized,ge.colorSpace,N.isXRRenderTarget===!0),Ce=Lt(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Le,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Z.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),Tt(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),Oe(n.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Ge(Z.__webglFramebuffer[de][ge],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else Ge(Z.__webglFramebuffer[de],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(T)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,ge=fe.length;de<ge;de++){const De=fe[de],$e=r.get(De);let Le=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,$e.__webglTexture),Oe(Le,De),Ge(Z.__webglFramebuffer,N,De,n.COLOR_ATTACHMENT0+de,Le,0),x(De)&&b(Le)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,oe.__webglTexture),Oe(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Ge(Z.__webglFramebuffer[ge],N,T,n.COLOR_ATTACHMENT0,de,ge);else Ge(Z.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,de,0);x(T)&&b(de),t.unbindTexture()}N.depthBuffer&&Rt(N)}function Gt(N){const T=N.textures;for(let Z=0,oe=T.length;Z<oe;Z++){const fe=T[Z];if(x(fe)){const Me=D(N),be=r.get(fe).__webglTexture;t.bindTexture(Me,be),b(Me),t.unbindTexture()}}}const Qt=[],en=[];function qt(N){if(N.samples>0){if(Wt(N)===!1){const T=N.textures,Z=N.width,oe=N.height;let fe=n.COLOR_BUFFER_BIT;const Me=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,be=r.get(N),de=T.length>1;if(de)for(let De=0;De<T.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const ge=N.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let De=0;De<T.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(fe|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(fe|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const $e=r.get(T[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,fe,n.NEAREST),d===!0&&(Qt.length=0,en.length=0,Qt.push(n.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Qt.push(Me),en.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,en)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<T.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,be.__webglColorRenderbuffer[De]);const $e=r.get(T[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Lt(N){return Math.min(o.maxSamples,N.samples)}function Wt(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function yn(N,T){const Z=N.colorSpace,oe=N.format,fe=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Ac&&Z!==Qr&&(xt.getTransfer(Z)===Ut?(oe!==Ui||fe!==Si)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",Z)),T}function wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ce,this.resetTextureUnits=ue,this.getTextureUnits=pe,this.setTextureUnits=J,this.setTexture2D=H,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=U,this.rebindTextures=yt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BL(n,e){function t(r,o=Qr){let a;const u=xt.getTransfer(o);if(r===Si)return n.UNSIGNED_BYTE;if(r===Mm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Em)return n.UNSIGNED_SHORT_5_5_5_1;if(r===bS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===PS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===CS)return n.BYTE;if(r===RS)return n.SHORT;if(r===fl)return n.UNSIGNED_SHORT;if(r===Sm)return n.INT;if(r===er)return n.UNSIGNED_INT;if(r===Yi)return n.FLOAT;if(r===Er)return n.HALF_FLOAT;if(r===DS)return n.ALPHA;if(r===LS)return n.RGB;if(r===Ui)return n.RGBA;if(r===Tr)return n.DEPTH_COMPONENT;if(r===Ns)return n.DEPTH_STENCIL;if(r===IS)return n.RED;if(r===Tm)return n.RED_INTEGER;if(r===Bs)return n.RG;if(r===wm)return n.RG_INTEGER;if(r===Am)return n.RGBA_INTEGER;if(r===cc||r===fc||r===dc||r===hc)if(u===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===fc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===np||r===ip||r===rp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===tp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===np)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ip)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sp||r===op||r===ap||r===lp||r===up||r===Tc||r===cp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sp||r===op)return u===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ap)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===lp)return a.COMPRESSED_R11_EAC;if(r===up)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Tc)return a.COMPRESSED_RG11_EAC;if(r===cp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===fp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===dp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ep)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return u===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wp||r===Ap||r===Cp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===wp)return u===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===bp||r===wc||r===Pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Rp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===bp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===wc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const kL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new YS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new tr({vertexShader:kL,fragmentShader:zL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wr(new Gc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HL extends Vs{constructor(e,t){super();const r=this;let o=null,a=1,u=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new VL,x={},b=t.getContextAttributes();let D=null,C=null;const L=[],P=[],F=new dt;let E=null;const I=new yi;I.viewport=new rn;const B=new yi;B.viewport=new rn;const k=[I,B],q=new Jb;let ue=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ve=L[se];return ve===void 0&&(ve=new Qd,L[se]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(se){let ve=L[se];return ve===void 0&&(ve=new Qd,L[se]=ve),ve.getGripSpace()},this.getHand=function(se){let ve=L[se];return ve===void 0&&(ve=new Qd,L[se]=ve),ve.getHandSpace()};function J(se){const ve=P.indexOf(se.inputSource);if(ve===-1)return;const he=L[ve];he!==void 0&&(he.update(se.inputSource,se.frame,h||u),he.dispatchEvent({type:se.type,data:se.inputSource}))}function ce(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",X);for(let se=0;se<L.length;se++){const ve=P[se];ve!==null&&(P[se]=null,L[se].disconnect(ve))}ue=null,pe=null,S.reset();for(const se in x)delete x[se];e.setRenderTarget(D),y=null,m=null,v=null,o=null,C=null,Oe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){f=se,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ie=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=b.stencil?Ns:Tr,Ie=b.stencil?dl:er);const Ge={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(Ge),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new Ji(m.textureWidth,m.textureHeight,{format:Ui,type:Si,depthTexture:new jo(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const he={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,he),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new Ji(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),Oe.setContext(o),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(se){for(let ve=0;ve<se.removed.length;ve++){const he=se.removed[ve],Ie=P.indexOf(he);Ie>=0&&(P[Ie]=null,L[Ie].disconnect(he))}for(let ve=0;ve<se.added.length;ve++){const he=se.added[ve];let Ie=P.indexOf(he);if(Ie===-1){for(let Ge=0;Ge<L.length;Ge++)if(Ge>=P.length){P.push(he),Ie=Ge;break}else if(P[Ge]===null){P[Ge]=he,Ie=Ge;break}if(Ie===-1)break}const ze=L[Ie];ze&&ze.connect(he)}}const H=new K,ee=new K;function ie(se,ve,he){H.setFromMatrixPosition(ve.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const Ie=H.distanceTo(ee),ze=ve.projectionMatrix.elements,Ge=he.projectionMatrix.elements,Tt=ze[14]/(ze[10]-1),lt=ze[14]/(ze[10]+1),Rt=(ze[9]+1)/ze[5],yt=(ze[9]-1)/ze[5],vt=(ze[8]-1)/ze[0],Gt=(Ge[8]+1)/Ge[0],Qt=Tt*vt,en=Tt*Gt,qt=Ie/(-vt+Gt),Lt=qt*-vt;if(ve.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Lt),se.translateZ(qt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ze[10]===-1)se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Wt=Tt+qt,j=lt+qt,yn=Qt-Lt,wt=en+(Ie-Lt),N=Rt*lt/j*Wt,T=yt*lt/j*Wt;se.projectionMatrix.makePerspective(yn,wt,N,T,Wt,j),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,ve){ve===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ve.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ve=se.near,he=se.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(he=S.depthFar)),q.near=B.near=I.near=ve,q.far=B.far=I.far=he,(ue!==q.near||pe!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),ue=q.near,pe=q.far),q.layers.mask=se.layers.mask|6,I.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const Ie=se.parent,ze=q.cameras;U(q,Ie);for(let Ge=0;Ge<ze.length;Ge++)U(ze[Ge],Ie);ze.length===2?ie(q,I,B):q.projectionMatrix.copy(I.projectionMatrix),$(se,q,Ie)};function $(se,ve,he){he===null?se.matrix.copy(ve.matrixWorld):(se.matrix.copy(he.matrixWorld),se.matrix.invert(),se.matrix.multiply(ve.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ve.projectionMatrix),se.projectionMatrixInverse.copy(ve.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=hl*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(se){d=se,m!==null&&(m.fixedFoveation=se),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(q)},this.getCameraTexture=function(se){return x[se]};let Re=null;function Fe(se,ve){if(g=ve.getViewerPose(h||u),M=ve,g!==null){const he=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Ie=!1;he.length!==q.cameras.length&&(q.cameras.length=0,Ie=!0);for(let lt=0;lt<he.length;lt++){const Rt=he[lt];let yt=null;if(y!==null)yt=y.getViewport(Rt);else{const Gt=v.getViewSubImage(m,Rt);yt=Gt.viewport,lt===0&&(e.setRenderTargetTextures(C,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(C))}let vt=k[lt];vt===void 0&&(vt=new yi,vt.layers.enable(lt),vt.viewport=new rn,k[lt]=vt),vt.matrix.fromArray(Rt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Rt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(yt.x,yt.y,yt.width,yt.height),lt===0&&(q.matrix.copy(vt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ie===!0&&q.cameras.push(vt)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const lt=v.getDepthInformation(he[0]);lt&&lt.isValid&&lt.texture&&S.init(lt,o.renderState)}if(ze&&ze.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let lt=0;lt<he.length;lt++){const Rt=he[lt].camera;if(Rt){let yt=x[Rt];yt||(yt=new YS,x[Rt]=yt);const vt=v.getCameraImage(Rt);yt.sourceTexture=vt}}}}for(let he=0;he<L.length;he++){const Ie=P[he],ze=L[he];Ie!==null&&ze!==void 0&&ze.update(Ie,ve,h||u)}Re&&Re(se,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const Oe=new ZS;Oe.setAnimationLoop(Fe),this.setAnimationLoop=function(se){Re=se},this.dispose=function(){}}}const GL=new sn,rM=new ft;rM.set(-1,0,0,0,1,0,0,0,1);function WL(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,qS(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,b,D,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?a(S,x):x.isMeshLambertMaterial?(a(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(S,x),v(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(S,x),m(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),A(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,b,D):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Qn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Qn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const b=e.get(x),D=b.envMap,C=b.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(GL.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(rM),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,b,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*b,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function m(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,b){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Qn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const b=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function XL(n,e,t,r){let o={},a={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function h(C,L){let P=o[C.id];P===void 0&&(S(C),P=g(C),o[C.id]=P,C.addEventListener("dispose",b));const F=L.program;r.updateUBOMapping(C,F);const E=e.render.frame;a[C.id]!==E&&(m(C),a[C.id]=E)}function g(C){const L=v();C.__bindingPointIndex=L;const P=n.createBuffer(),F=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,F,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,P),P}function v(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const L=o[C.id],P=C.uniforms,F=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let E=0,I=P.length;E<I;E++){const B=P[E];if(Array.isArray(B))for(let k=0,q=B.length;k<q;k++)y(B[k],E,k,F);else y(B,E,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(C,L,P,F){if(A(C,L,P,F)===!0){const E=C.__offset,I=C.value;if(Array.isArray(I)){let B=0;for(let k=0;k<I.length;k++){const q=I[k],ue=x(q);M(q,C.__data,B),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(B+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(I,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,C.__data)}}function M(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function A(C,L,P,F){const E=C.value,I=L+"_"+P;if(F[I]===void 0)return typeof E=="number"||typeof E=="boolean"?F[I]=E:ArrayBuffer.isView(E)?F[I]=E.slice():F[I]=E.clone(),!0;{const B=F[I];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return F[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const L=C.uniforms;let P=0;const F=16;for(let I=0,B=L.length;I<B;I++){const k=Array.isArray(L[I])?L[I]:[L[I]];for(let q=0,ue=k.length;q<ue;q++){const pe=k[q],J=Array.isArray(pe.value)?pe.value:[pe.value];for(let ce=0,X=J.length;ce<X;ce++){const H=J[ce],ee=x(H),ie=P%F,U=ie%ee.boundary,$=ie+U;P+=U,$!==0&&F-$<ee.storage&&(P+=F-$),pe.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=ee.storage}}}const E=P%F;return E>0&&(P+=F-E),C.__size=P,C.__cache={},this}function x(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):st("WebGLRenderer: Unsupported uniform value type.",C),L}function b(C){const L=C.target;L.removeEventListener("dispose",b);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),n.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function D(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},a={}}return{bind:d,update:h,dispose:D}}const jL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function YL(){return Wi===null&&(Wi=new Ub(jL,16,16,Bs,Er),Wi.name="DFG_LUT",Wi.minFilter=Un,Wi.magFilter=Un,Wi.wrapS=vr,Wi.wrapT=vr,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class qL{constructor(e={}){const{canvas:t=qR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=Si}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,S=new Set([Am,wm,Tm]),x=new Set([Si,er,fl,dl,Mm,Em]),b=new Uint32Array(4),D=new Int32Array(4),C=new K;let L=null,P=null;const F=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let k=!1,q=null,ue=null,pe=null,J=null;this._outputColorSpace=xi;let ce=0,X=0,H=null,ee=-1,ie=null;const U=new rn,$=new rn;let Re=null;const Fe=new Ct(0);let Oe=0,se=t.width,ve=t.height,he=1,Ie=null,ze=null;const Ge=new rn(0,0,se,ve),Tt=new rn(0,0,se,ve);let lt=!1;const Rt=new WS;let yt=!1,vt=!1;const Gt=new sn,Qt=new K,en=new rn,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Wt(){return H===null?he:1}let j=r;function yn(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ym}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",wn,!1),j===null){const Y="webgl2";if(j=yn(Y,R),j===null)throw yn(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Mt("WebGLRenderer: "+R.message),R}let wt,N,T,Z,oe,fe,Me,be,de,ge,De,$e,Le,Ce,et,tt,ot,V,Ae,me,Pe,Ne,_e;function je(){wt=new Y3(j),wt.init(),Pe=new BL(j,wt),N=new k3(j,wt,e,Pe),T=new FL(j,wt),N.reversedDepthBuffer&&m&&T.buffers.depth.setReversed(!0),ue=j.createFramebuffer(),pe=j.createFramebuffer(),J=j.createFramebuffer(),Z=new K3(j),oe=new ML,fe=new OL(j,wt,T,oe,N,Pe,Z),Me=new j3(B),be=new eP(j),Ne=new O3(j,be),de=new q3(j,be,Z,Ne),ge=new J3(j,de,be,Ne,Z),V=new Z3(j,N,fe),et=new z3(oe),De=new SL(B,Me,wt,N,Ne,et),$e=new WL(B,oe),Le=new TL,Ce=new PL(wt),ot=new F3(B,Me,T,ge,M,d),tt=new UL(B,ge,N),_e=new XL(j,Z,N,T),Ae=new B3(j,wt,Z),me=new $3(j,wt,Z),Z.programs=De.programs,B.capabilities=N,B.extensions=wt,B.properties=oe,B.renderLists=Le,B.shadowMap=tt,B.state=T,B.info=Z}je(),A!==Si&&(I=new eD(A,t.width,t.height,f,o,a));const We=new HL(B,j);this.xr=We,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=wt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=wt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(se,ve,!1))},this.getSize=function(R){return R.set(se,ve)},this.setSize=function(R,Y,ae=!0){if(We.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}se=R,ve=Y,t.width=Math.floor(R*he),t.height=Math.floor(Y*he),ae===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(se*he,ve*he).floor()},this.setDrawingBufferSize=function(R,Y,ae){se=R,ve=Y,he=ae,t.width=Math.floor(R*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===Si){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(U)},this.getViewport=function(R){return R.copy(Ge)},this.setViewport=function(R,Y,ae,ne){R.isVector4?Ge.set(R.x,R.y,R.z,R.w):Ge.set(R,Y,ae,ne),T.viewport(U.copy(Ge).multiplyScalar(he).round())},this.getScissor=function(R){return R.copy(Tt)},this.setScissor=function(R,Y,ae,ne){R.isVector4?Tt.set(R.x,R.y,R.z,R.w):Tt.set(R,Y,ae,ne),T.scissor($.copy(Tt).multiplyScalar(he).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(R){T.setScissorTest(lt=R)},this.setOpaqueSort=function(R){Ie=R},this.setTransparentSort=function(R){ze=R},this.getClearColor=function(R){return R.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ae=!0){let ne=0;if(R){let te=!1;if(H!==null){const we=H.texture.format;te=S.has(we)}if(te){const we=H.texture.type,Ve=x.has(we),Te=ot.getClearColor(),Ye=ot.getClearAlpha(),Qe=Te.r,ut=Te.g,ct=Te.b;Ve?(b[0]=Qe,b[1]=ut,b[2]=ct,b[3]=Ye,j.clearBufferuiv(j.COLOR,0,b)):(D[0]=Qe,D[1]=ut,D[2]=ct,D[3]=Ye,j.clearBufferiv(j.COLOR,0,D))}else ne|=j.COLOR_BUFFER_BIT}Y&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),q=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",wn,!1),ot.dispose(),Le.dispose(),Ce.dispose(),oe.dispose(),Me.dispose(),ge.dispose(),Ne.dispose(),_e.dispose(),De.dispose(),We.dispose(),We.removeEventListener("sessionstart",yl),We.removeEventListener("sessionend",Sl),On.stop()};function Ot(R){R.preventDefault(),Pc("WebGLRenderer: Context Lost."),k=!0}function Pt(){Pc("WebGLRenderer: Context Restored."),k=!1;const R=Z.autoReset,Y=tt.enabled,ae=tt.autoUpdate,ne=tt.needsUpdate,te=tt.type;je(),Z.autoReset=R,tt.enabled=Y,tt.autoUpdate=ae,tt.needsUpdate=ne,tt.type=te}function wn(R){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ui(R){const Y=R.target;Y.removeEventListener("dispose",ui),rs(Y)}function rs(R){Hs(R),oe.remove(R)}function Hs(R){const Y=oe.get(R).programs;Y!==void 0&&(Y.forEach(function(ae){De.releaseProgram(ae)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ae,ne,te,we){Y===null&&(Y=qt);const Ve=te.isMesh&&te.matrixWorld.determinantAffine()<0,Te=$t(R,Y,ae,ne,te);T.setMaterial(ne,Ve);let Ye=ae.index,Qe=1;if(ne.wireframe===!0){if(Ye=de.getWireframeAttribute(ae),Ye===void 0)return;Qe=2}const ut=ae.drawRange,ct=ae.attributes.position;let Ke=ut.start*Qe,St=(ut.start+ut.count)*Qe;we!==null&&(Ke=Math.max(Ke,we.start*Qe),St=Math.min(St,(we.start+we.count)*Qe)),Ye!==null?(Ke=Math.max(Ke,0),St=Math.min(St,Ye.count)):ct!=null&&(Ke=Math.max(Ke,0),St=Math.min(St,ct.count));const Bt=St-Ke;if(Bt<0||Bt===1/0)return;Ne.setup(te,ne,Te,ae,Ye);let Xt,It=Ae;if(Ye!==null&&(Xt=be.get(Ye),It=me,It.setIndex(Xt)),te.isMesh)ne.wireframe===!0?(T.setLineWidth(ne.wireframeLinewidth*Wt()),It.setMode(j.LINES)):It.setMode(j.TRIANGLES);else if(te.isLine){let ln=ne.linewidth;ln===void 0&&(ln=1),T.setLineWidth(ln*Wt()),te.isLineSegments?It.setMode(j.LINES):te.isLineLoop?It.setMode(j.LINE_LOOP):It.setMode(j.LINE_STRIP)}else te.isPoints?It.setMode(j.POINTS):te.isSprite&&It.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const ln=te._multiDrawStarts,Be=te._multiDrawCounts,Sn=te._multiDrawCount,pt=Ye?be.get(Ye).bytesPerElement:1,Xn=oe.get(ne).currentProgram.getUniforms();for(let jn=0;jn<Sn;jn++)Xn.setValue(j,"_gl_DrawID",jn),It.render(ln[jn]/pt,Be[jn])}else if(te.isInstancedMesh)It.renderInstances(Ke,Bt,te.count);else if(ae.isInstancedBufferGeometry){const ln=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Be=Math.min(ae.instanceCount,ln);It.renderInstances(Ke,Bt,Be)}else It.render(Ke,Bt)};function ss(R,Y,ae){R.transparent===!0&&R.side===gr&&R.forceSinglePass===!1?(R.side=Qn,R.needsUpdate=!0,ls(R,Y,ae),R.side=ns,R.needsUpdate=!0,ls(R,Y,ae),R.side=gr):ls(R,Y,ae)}this.compile=function(R,Y,ae=null){ae===null&&(ae=R),P=Ce.get(ae),P.init(Y),E.push(P),ae.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),R!==ae&&R.traverseVisible(function(te){te.isLight&&te.layers.test(Y.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ne=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const we=te.material;if(we)if(Array.isArray(we))for(let Ve=0;Ve<we.length;Ve++){const Te=we[Ve];ss(Te,ae,te),ne.add(Te)}else ss(we,ae,te),ne.add(we)}),P=E.pop(),ne},this.compileAsync=function(R,Y,ae=null){const ne=this.compile(R,Y,ae);return new Promise(te=>{function we(){if(ne.forEach(function(Ve){oe.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){te(R);return}setTimeout(we,10)}wt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let os=null;function jc(R){os&&os(R)}function yl(){On.stop()}function Sl(){On.start()}const On=new ZS;On.setAnimationLoop(jc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(R){os=R,We.setAnimationLoop(R),R===null?On.stop():On.start()},We.addEventListener("sessionstart",yl),We.addEventListener("sessionend",Sl),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;q!==null&&q.renderStart(R,Y);const ae=We.enabled===!0&&We.isPresenting===!0,ne=I!==null&&(H===null||ae)&&I.begin(B,H);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,Y,H),P=Ce.get(R,E.length),P.init(Y),P.state.textureUnits=fe.getTextureUnits(),E.push(P),Gt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Rt.setFromProjectionMatrix(Gt,qi,Y.reversedDepth),vt=this.localClippingEnabled,yt=et.init(this.clippingPlanes,vt),L=Le.get(R,F.length),L.init(),F.push(L),We.enabled===!0&&We.isPresenting===!0){const Ve=B.xr.getDepthSensingMesh();Ve!==null&&Gs(Ve,Y,-1/0,B.sortObjects)}Gs(R,Y,0,B.sortObjects),L.finish(),B.sortObjects===!0&&L.sort(Ie,ze,Y.reversedDepth),Lt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Lt&&ot.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),yt===!0&&et.beginShadows();const te=P.state.shadowsArray;if(tt.render(te,R,Y),yt===!0&&et.endShadows(),(ne&&I.hasRenderPass())===!1){const Ve=L.opaque,Te=L.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Te.length>0)for(let Qe=0,ut=Ye.length;Qe<ut;Qe++){const ct=Ye[Qe];Ml(Ve,Te,R,ct)}Lt&&ot.render(R);for(let Qe=0,ut=Ye.length;Qe<ut;Qe++){const ct=Ye[Qe];ea(L,R,ct,ct.viewport)}}else Te.length>0&&Ml(Ve,Te,R,Y),Lt&&ot.render(R),ea(L,R,Y)}H!==null&&X===0&&(fe.updateMultisampleRenderTarget(H),fe.updateRenderTargetMipmap(H)),ne&&I.end(B),R.isScene===!0&&R.onAfterRender(B,R,Y),Ne.resetDefaultState(),ee=-1,ie=null,E.pop(),E.length>0?(P=E[E.length-1],fe.setTextureUnits(P.state.textureUnits),yt===!0&&et.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,q!==null&&q.renderEnd()};function Gs(R,Y,ae,ne){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Rt.intersectsSprite(R)){ne&&en.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Gt);const Ve=ge.update(R),Te=R.material;Te.visible&&L.push(R,Ve,Te,ae,en.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Rt.intersectsObject(R))){const Ve=ge.update(R),Te=R.material;if(ne&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),en.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),en.copy(Ve.boundingSphere.center)),en.applyMatrix4(R.matrixWorld).applyMatrix4(Gt)),Array.isArray(Te)){const Ye=Ve.groups;for(let Qe=0,ut=Ye.length;Qe<ut;Qe++){const ct=Ye[Qe],Ke=Te[ct.materialIndex];Ke&&Ke.visible&&L.push(R,Ve,Ke,ae,en.z,ct)}}else Te.visible&&L.push(R,Ve,Te,ae,en.z,null)}}const we=R.children;for(let Ve=0,Te=we.length;Ve<Te;Ve++)Gs(we[Ve],Y,ae,ne)}function ea(R,Y,ae,ne){const{opaque:te,transmissive:we,transparent:Ve}=R;P.setupLightsView(ae),yt===!0&&et.setGlobalState(B.clippingPlanes,ae),ne&&T.viewport(U.copy(ne)),te.length>0&&as(te,Y,ae),we.length>0&&as(we,Y,ae),Ve.length>0&&as(Ve,Y,ae),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Ml(R,Y,ae,ne){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const Ke=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Ji(1,1,{generateMipmaps:!0,type:Ke?Er:Si,minFilter:Is,samples:Math.max(4,N.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}const we=P.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||U;we.setSize(Ve.z*B.transmissionResolutionScale,Ve.w*B.transmissionResolutionScale);const Te=B.getRenderTarget(),Ye=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(we),B.getClearColor(Fe),Oe=B.getClearAlpha(),Oe<1&&B.setClearColor(16777215,.5),B.clear(),Lt&&ot.render(ae);const ut=B.toneMapping;B.toneMapping=Zi;const ct=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),yt===!0&&et.setGlobalState(B.clippingPlanes,ne),as(R,ae,ne),fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we),wt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let St=0,Bt=Y.length;St<Bt;St++){const Xt=Y[St],{object:It,geometry:ln,material:Be,group:Sn}=Xt;if(Be.side===gr&&It.layers.test(ne.layers)){const pt=Be.side;Be.side=Qn,Be.needsUpdate=!0,ta(It,ae,ne,ln,Be,Sn),Be.side=pt,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we))}B.setRenderTarget(Te,Ye,Qe),B.setClearColor(Fe,Oe),ct!==void 0&&(ne.viewport=ct),B.toneMapping=ut}function as(R,Y,ae){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let te=0,we=R.length;te<we;te++){const Ve=R[te],{object:Te,geometry:Ye,group:Qe}=Ve;let ut=Ve.material;ut.allowOverride===!0&&ne!==null&&(ut=ne),Te.layers.test(ae.layers)&&ta(Te,Y,ae,Ye,ut,Qe)}}function ta(R,Y,ae,ne,te,we){R.onBeforeRender(B,Y,ae,ne,te,we),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(B,Y,ae,ne,R,we),te.transparent===!0&&te.side===gr&&te.forceSinglePass===!1?(te.side=Qn,te.needsUpdate=!0,B.renderBufferDirect(ae,Y,ne,te,R,we),te.side=ns,te.needsUpdate=!0,B.renderBufferDirect(ae,Y,ne,te,R,we),te.side=gr):B.renderBufferDirect(ae,Y,ne,te,R,we),R.onAfterRender(B,Y,ae,ne,te,we)}function ls(R,Y,ae){Y.isScene!==!0&&(Y=qt);const ne=oe.get(R),te=P.state.lights,we=P.state.shadowsArray,Ve=te.state.version,Te=De.getParameters(R,te.state,we,Y,ae,P.state.lightProbeGridArray),Ye=De.getProgramCacheKey(Te);let Qe=ne.programs;ne.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ne.fog=Y.fog;const ut=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ne.envMap=Me.get(R.envMap||ne.environment,ut),ne.envMapRotation=ne.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",ui),Qe=new Map,ne.programs=Qe);let ct=Qe.get(Ye);if(ct!==void 0){if(ne.currentProgram===ct&&ne.lightsStateVersion===Ve)return El(R,Te),ct}else Te.uniforms=De.getUniforms(R),q!==null&&R.isNodeMaterial&&q.build(R,ae,Te),R.onBeforeCompile(Te,B),ct=De.acquireProgram(Te,Ye),Qe.set(Ye,ct),ne.uniforms=Te.uniforms;const Ke=ne.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=et.uniform),El(R,Te),ne.needsLights=ia(R),ne.lightsStateVersion=Ve,ne.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ct,ne.uniformsList=null,ct}function na(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=pc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function El(R,Y){const ae=oe.get(R);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Yc(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,ne=R.length;ae<ne;ae++){const te=R[ae];if(te.texture!==null&&te.boundingBox.containsPoint(C))return te}return null}function $t(R,Y,ae,ne,te){Y.isScene!==!0&&(Y=qt),fe.resetTextureUnits();const we=Y.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?Y.environment:null,Te=H===null?B.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:xt.workingColorSpace,Ye=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=Me.get(ne.envMap||Ve,Ye),ut=ne.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!ae.morphAttributes.position,St=!!ae.morphAttributes.normal,Bt=!!ae.morphAttributes.color;let Xt=Zi;ne.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xt=B.toneMapping);const It=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,ln=It!==void 0?It.length:0,Be=oe.get(ne),Sn=P.state.lights;if(yt===!0&&(vt===!0||R!==ie)){const Nt=R===ie&&ne.id===ee;et.setState(ne,R,Nt)}let pt=!1;ne.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Sn.state.version||Be.outputColorSpace!==Te||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==Qe||ne.fog===!0&&Be.fog!==we||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==et.numPlanes||Be.numIntersection!==et.numIntersection)||Be.vertexAlphas!==ut||Be.vertexTangents!==ct||Be.morphTargets!==Ke||Be.morphNormals!==St||Be.morphColors!==Bt||Be.toneMapping!==Xt||Be.morphTargetsCount!==ln||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Be.__version=ne.version);let Xn=Be.currentProgram;pt===!0&&(Xn=ls(ne,Y,te),q&&ne.isNodeMaterial&&q.onUpdateProgram(ne,Xn,Be));let jn=!1,mt=!1,nr=!1;const Dt=Xn.getUniforms(),zt=Be.uniforms;if(T.useProgram(Xn.program)&&(jn=!0,mt=!0,nr=!0),ne.id!==ee&&(ee=ne.id,mt=!0),Be.needsLights){const Nt=Yc(P.state.lightProbeGridArray,te);Be.lightProbeGrid!==Nt&&(Be.lightProbeGrid=Nt,mt=!0)}if(jn||ie!==R){T.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Dt.setValue(j,"projectionMatrix",R.projectionMatrix),Dt.setValue(j,"viewMatrix",R.matrixWorldInverse);const Ei=Dt.map.cameraPosition;Ei!==void 0&&Ei.setValue(j,Qt.setFromMatrixPosition(R.matrixWorld)),N.logarithmicDepthBuffer&&Dt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),ie!==R&&(ie=R,mt=!0,nr=!0)}if(Be.needsLights&&(Sn.state.directionalShadowMap.length>0&&Dt.setValue(j,"directionalShadowMap",Sn.state.directionalShadowMap,fe),Sn.state.spotShadowMap.length>0&&Dt.setValue(j,"spotShadowMap",Sn.state.spotShadowMap,fe),Sn.state.pointShadowMap.length>0&&Dt.setValue(j,"pointShadowMap",Sn.state.pointShadowMap,fe)),te.isSkinnedMesh){Dt.setOptional(j,te,"bindMatrix"),Dt.setOptional(j,te,"bindMatrixInverse");const Nt=te.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Dt.setValue(j,"boneTexture",Nt.boneTexture,fe))}te.isBatchedMesh&&(Dt.setOptional(j,te,"batchingTexture"),Dt.setValue(j,"batchingTexture",te._matricesTexture,fe),Dt.setOptional(j,te,"batchingIdTexture"),Dt.setValue(j,"batchingIdTexture",te._indirectTexture,fe),Dt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&Dt.setValue(j,"batchingColorTexture",te._colorsTexture,fe));const Mi=ae.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&V.update(te,ae,Xn),(mt||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,Dt.setValue(j,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&Y.environment!==null&&(zt.envMapIntensity.value=Y.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=YL()),mt){if(Dt.setValue(j,"toneMappingExposure",B.toneMappingExposure),Be.needsLights&&qc(zt,nr),we&&ne.fog===!0&&$e.refreshFogUniforms(zt,we),$e.refreshMaterialUniforms(zt,ne,he,ve,P.state.transmissionRenderTarget[R.id]),Be.needsLights&&Be.lightProbeGrid){const Nt=Be.lightProbeGrid;zt.probesSH.value=Nt.texture,zt.probesMin.value.copy(Nt.boundingBox.min),zt.probesMax.value.copy(Nt.boundingBox.max),zt.probesResolution.value.copy(Nt.resolution)}pc.upload(j,na(Be),zt,fe)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(pc.upload(j,na(Be),zt,fe),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(j,"center",te.center),Dt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Dt.setValue(j,"normalMatrix",te.normalMatrix),Dt.setValue(j,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Nt=ne.uniformsGroups;for(let Ei=0,Bi=Nt.length;Ei<Bi;Ei++){const us=Nt[Ei];_e.update(us,Xn),_e.bind(us,Xn)}}return Xn}function qc(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function ia(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(R,Y,ae){const ne=oe.get(R);ne.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),oe.get(R.texture).__webglTexture=Y,oe.get(R.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ae,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ae=oe.get(R);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,ae=0){H=R,ce=Y,X=ae;let ne=null,te=!1,we=!1;if(R){const Te=oe.get(R);if(Te.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(j.FRAMEBUFFER,Te.__webglFramebuffer),U.copy(R.viewport),$.copy(R.scissor),Re=R.scissorTest,T.viewport(U),T.scissor($),T.setScissorTest(Re),ee=-1;return}else if(Te.__webglFramebuffer===void 0)fe.setupRenderTarget(R);else if(Te.__hasExternalTextures)fe.rebindTextures(R,oe.get(R.texture).__webglTexture,oe.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ut=R.depthTexture;if(Te.__boundDepthTexture!==ut){if(ut!==null&&oe.has(ut)&&(R.width!==ut.image.width||R.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(R)}}const Ye=R.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(we=!0);const Qe=oe.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?ne=Qe[Y][ae]:ne=Qe[Y],te=!0):R.samples>0&&fe.useMultisampledRTT(R)===!1?ne=oe.get(R).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ae]:ne=Qe,U.copy(R.viewport),$.copy(R.scissor),Re=R.scissorTest}else U.copy(Ge).multiplyScalar(he).floor(),$.copy(Tt).multiplyScalar(he).floor(),Re=lt;if(ae!==0&&(ne=ue),T.bindFramebuffer(j.FRAMEBUFFER,ne)&&T.drawBuffers(R,ne),T.viewport(U),T.scissor($),T.setScissorTest(Re),te){const Te=oe.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Te.__webglTexture,ae)}else if(we){const Te=Y;for(let Ye=0;Ye<R.textures.length;Ye++){const Qe=oe.get(R.textures[Ye]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,ae,Te)}}else if(R!==null&&ae!==0){const Te=oe.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Te.__webglTexture,ae)}ee=-1},this.readRenderTargetPixels=function(R,Y,ae,ne,te,we,Ve,Te=0){if(!(R&&R.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){T.bindFramebuffer(j.FRAMEBUFFER,Ye);try{const Qe=R.textures[Te],ut=Qe.format,ct=Qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Te),!N.textureFormatReadable(ut)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(ct)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ne&&ae>=0&&ae<=R.height-te&&j.readPixels(Y,ae,ne,te,Pe.convert(ut),Pe.convert(ct),we)}finally{const Qe=H!==null?oe.get(H).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ae,ne,te,we,Ve,Te=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=oe.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(Y>=0&&Y<=R.width-ne&&ae>=0&&ae<=R.height-te){T.bindFramebuffer(j.FRAMEBUFFER,Ye);const Qe=R.textures[Te],ut=Qe.format,ct=Qe.type;if(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Te),!N.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ke),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(Y,ae,ne,te,Pe.convert(ut),Pe.convert(ct),0);const St=H!==null?oe.get(H).__webglFramebuffer:null;T.bindFramebuffer(j.FRAMEBUFFER,St);const Bt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await $R(j,Bt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ke),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer(Ke),j.deleteSync(Bt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ae=0){const ne=Math.pow(2,-ae),te=Math.floor(R.image.width*ne),we=Math.floor(R.image.height*ne),Ve=Y!==null?Y.x:0,Te=Y!==null?Y.y:0;fe.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ae,0,0,Ve,Te,te,we),T.unbindTexture()},this.copyTextureToTexture=function(R,Y,ae=null,ne=null,te=0,we=0){let Ve,Te,Ye,Qe,ut,ct,Ke,St,Bt;const Xt=R.isCompressedTexture?R.mipmaps[we]:R.image;if(ae!==null)Ve=ae.max.x-ae.min.x,Te=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,ut=ae.min.y,ct=ae.isBox3?ae.min.z:0;else{const zt=Math.pow(2,-te);Ve=Math.floor(Xt.width*zt),Te=Math.floor(Xt.height*zt),R.isDataArrayTexture?Ye=Xt.depth:R.isData3DTexture?Ye=Math.floor(Xt.depth*zt):Ye=1,Qe=0,ut=0,ct=0}ne!==null?(Ke=ne.x,St=ne.y,Bt=ne.z):(Ke=0,St=0,Bt=0);const It=Pe.convert(Y.format),ln=Pe.convert(Y.type);let Be;Y.isData3DTexture?(fe.setTexture3D(Y,0),Be=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(fe.setTexture2DArray(Y,0),Be=j.TEXTURE_2D_ARRAY):(fe.setTexture2D(Y,0),Be=j.TEXTURE_2D),T.activeTexture(j.TEXTURE0),T.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const Sn=T.getParameter(j.UNPACK_ROW_LENGTH),pt=T.getParameter(j.UNPACK_IMAGE_HEIGHT),Xn=T.getParameter(j.UNPACK_SKIP_PIXELS),jn=T.getParameter(j.UNPACK_SKIP_ROWS),mt=T.getParameter(j.UNPACK_SKIP_IMAGES);T.pixelStorei(j.UNPACK_ROW_LENGTH,Xt.width),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Xt.height),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),T.pixelStorei(j.UNPACK_SKIP_ROWS,ut),T.pixelStorei(j.UNPACK_SKIP_IMAGES,ct);const nr=R.isDataArrayTexture||R.isData3DTexture,Dt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const zt=oe.get(R),Mi=oe.get(Y),Nt=oe.get(zt.__renderTarget),Ei=oe.get(Mi.__renderTarget);T.bindFramebuffer(j.READ_FRAMEBUFFER,Nt.__webglFramebuffer),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Bi=0;Bi<Ye;Bi++)nr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(R).__webglTexture,te,ct+Bi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,oe.get(Y).__webglTexture,we,Bt+Bi)),j.blitFramebuffer(Qe,ut,Ve,Te,Ke,St,Ve,Te,j.DEPTH_BUFFER_BIT,j.NEAREST);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||oe.has(R)){const zt=oe.get(R),Mi=oe.get(Y);T.bindFramebuffer(j.READ_FRAMEBUFFER,pe),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,J);for(let Nt=0;Nt<Ye;Nt++)nr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,zt.__webglTexture,te,ct+Nt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,zt.__webglTexture,te),Dt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Mi.__webglTexture,we,Bt+Nt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Mi.__webglTexture,we),te!==0?j.blitFramebuffer(Qe,ut,Ve,Te,Ke,St,Ve,Te,j.COLOR_BUFFER_BIT,j.NEAREST):Dt?j.copyTexSubImage3D(Be,we,Ke,St,Bt+Nt,Qe,ut,Ve,Te):j.copyTexSubImage2D(Be,we,Ke,St,Qe,ut,Ve,Te);T.bindFramebuffer(j.READ_FRAMEBUFFER,null),T.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Dt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Be,we,Ke,St,Bt,Ve,Te,Ye,It,ln,Xt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Be,we,Ke,St,Bt,Ve,Te,Ye,It,Xt.data):j.texSubImage3D(Be,we,Ke,St,Bt,Ve,Te,Ye,It,ln,Xt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,we,Ke,St,Ve,Te,It,ln,Xt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,we,Ke,St,Xt.width,Xt.height,It,Xt.data):j.texSubImage2D(j.TEXTURE_2D,we,Ke,St,Ve,Te,It,ln,Xt);T.pixelStorei(j.UNPACK_ROW_LENGTH,Sn),T.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt),T.pixelStorei(j.UNPACK_SKIP_PIXELS,Xn),T.pixelStorei(j.UNPACK_SKIP_ROWS,jn),T.pixelStorei(j.UNPACK_SKIP_IMAGES,mt),we===0&&Y.generateMipmaps&&j.generateMipmap(Be),T.unbindTexture()},this.initRenderTarget=function(R){oe.get(R).__webglFramebuffer===void 0&&fe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?fe.setTextureCube(R,0):R.isData3DTexture?fe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?fe.setTexture2DArray(R,0):fe.setTexture2D(R,0),T.unbindTexture()},this.resetState=function(){ce=0,X=0,H=null,T.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const $L=n=>n*n*(3-2*n);function KL(){const n=Je.useRef(null),e=mS();return Je.useEffect(()=>{if(e)return;const t=n.current;if(!t)return;let r;try{r=new qL({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return}if(!r.getContext())return;const o=window.matchMedia("(max-width: 860px)").matches,a=Math.min(window.devicePixelRatio||1,o?1.5:2);r.setPixelRatio(a),r.setSize(window.innerWidth,window.innerHeight),r.setClearAlpha(0),t.appendChild(r.domElement);const u=new Cb,f=new yi(45,window.innerWidth/window.innerHeight,.1,60);f.position.z=9;const d=new Fo,h=new Fo;d.add(h),u.add(d);const g=new XS({color:2763312,transparent:!0,opacity:0}),v=new zb(new Gb(new Lm(1.05,1)),g);h.add(v);const m=document.createElement("canvas");m.width=m.height=128;const y=m.getContext("2d"),M=y.createRadialGradient(64,64,4,64,64,64);M.addColorStop(0,"rgba(255, 190, 110, 0.9)"),M.addColorStop(.35,"rgba(255, 140, 50, 0.45)"),M.addColorStop(1,"rgba(255, 120, 40, 0)"),y.fillStyle=M,y.fillRect(0,0,128,128);const A=new Vb(m),S=new Ib(new zS({map:A,transparent:!0,depthWrite:!1,blending:Gh}));S.scale.setScalar(1.4),h.add(S);function x(){const ee=2*Math.tan(hb.degToRad(f.fov)/2)*f.position.z;return{w:ee*f.aspect,h:ee}}let b=[],D=0;function C(){const ee=window.innerHeight,ie=Tt=>document.getElementById(Tt),U=ie("main");D=U?U.offsetTop+U.offsetHeight:0;const $=U?U.nextElementSibling:null,Re=ie("offering"),Fe=Re?Re.parentElement:null,Oe=ie("case"),se=ie("rates"),ve=ie("crew"),he=ie("connect"),Ie=(Tt,lt=.5)=>Tt?Tt.offsetTop+Tt.offsetHeight*lt:0,ze=o,Ge=[];$&&Ge.push({docY:Ie($),fx:ze?-.24:-.36,fy:.02,s:ze?.5:.72}),Fe&&(Ge.push({docY:Fe.offsetTop+ee*.5,fx:ze?.3:.44,fy:-.37,s:.3}),Ge.push({docY:Fe.offsetTop+Fe.offsetHeight-ee*.5,fx:ze?.3:.44,fy:-.37,s:.3})),Oe&&Ge.push({docY:Ie(Oe),fx:ze?.26:.37,fy:.02,s:ze?.45:.62}),se&&Ge.push({docY:Ie(se),fx:ze?-.26:-.4,fy:-.04,s:ze?.42:.52}),ve&&Ge.push({docY:Ie(ve),fx:ze?.26:.4,fy:0,s:ze?.45:.56}),he&&Ge.push({docY:Ie(he),fx:ze?0:-.34,fy:.04,s:ze?.55:.72}),b=Ge.sort((Tt,lt)=>Tt.docY-lt.docY)}function L(ee){if(!b.length)return{x:0,y:0,s:1};const ie=x();let U=b[0],$=b[0];for(let he=0;he<b.length;he++)b[he].docY<=ee&&(U=b[he],$=b[Math.min(he+1,b.length-1)]);ee<b[0].docY&&(U=b[0],$=b[0]);const Re=Math.max(1,$.docY-U.docY),Fe=$L(Math.min(1,Math.max(0,(ee-U.docY)/Re))),Oe=U.fx+($.fx-U.fx)*Fe,se=U.fy+($.fy-U.fy)*Fe,ve=U.s+($.s-U.s)*Fe;return{x:Oe*ie.w,y:se*ie.h,s:ve}}let P=!0,F=0,E=0,I=0,B=0,k=0,q=0,ue=performance.now();const pe=ee=>{E=(ee.clientX/window.innerWidth-.5)*2,I=(ee.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",pe,{passive:!0});function J(ee){if(!P)return;F=requestAnimationFrame(J);const ie=Math.min(.05,(ee-ue)/1e3);ue=ee;const U=ee/1e3,$=window.scrollY+window.innerHeight*.5,Re=L($),Fe=1-Math.exp(-5*ie),Oe=$>D+window.innerHeight*.05?1:0;q+=(Oe-q)*(1-Math.exp(-4*ie)),d.position.x+=(Re.x-d.position.x)*Fe,d.position.y+=(Re.y-d.position.y)*Fe;const se=d.scale.x+(Re.s-d.scale.x)*Fe;d.scale.setScalar(Math.max(.001,se*(.55+.45*q))),B+=(E-B)*.04,k+=(I-k)*.04,h.rotation.y=U*.18+window.scrollY*4e-4+B*.08,h.rotation.x=Math.sin(U*.22)*.12+k*.06,h.position.y=Math.sin(U*.6)*.05,g.opacity=.9*q,S.material.opacity=(.75+Math.sin(U*1.4)*.15)*q,q>.01||Oe===1?r.render(u,f):r.clear()}const ce=()=>{P=!document.hidden,P?(ue=performance.now(),F=requestAnimationFrame(J)):cancelAnimationFrame(F)};document.addEventListener("visibilitychange",ce);const X=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),C()};window.addEventListener("resize",X,{passive:!0}),r.domElement.addEventListener("webglcontextlost",()=>{P=!1,cancelAnimationFrame(F),t.style.display="none"}),C();const H=window.setTimeout(C,1200);return window.addEventListener("load",C),F=requestAnimationFrame(J),()=>{P=!1,cancelAnimationFrame(F),window.clearTimeout(H),window.removeEventListener("pointermove",pe),window.removeEventListener("resize",X),window.removeEventListener("load",C),document.removeEventListener("visibilitychange",ce),r.dispose(),t.innerHTML=""}},[e]),e?null:W.jsx("div",{ref:n,"aria-hidden":!0,style:{position:"fixed",inset:0,zIndex:5,pointerEvents:"none"}})}function ZL({children:n,showChrome:e=!0}){return W.jsxs("div",{style:{position:"relative"},children:[W.jsx(rT,{}),W.jsx(aR,{}),n,W.jsx(KL,{}),e&&W.jsxs(W.Fragment,{children:[W.jsx(pR,{}),W.jsx(hR,{})]})]})}function sM(){return W.jsxs(W.Fragment,{children:[W.jsx("section",{id:"privacy",style:{position:"relative",zIndex:2,background:"#C5C5C5",borderTop:"1px solid rgba(0,0,0,0.18)",padding:"70px 32px"},children:W.jsxs("div",{style:{maxWidth:720},children:[W.jsx("h2",{style:{fontSize:"clamp(22px, 2.5vw, 32px)",fontWeight:700,textTransform:"uppercase",color:"#1a1a1a",margin:0},children:"Privacy Policy"}),W.jsx("p",{style:{marginTop:16,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:560},children:"Midnight Space bewaart alleen wat je zelf mailt: je bericht en je contactgegevens. Niets wordt gedeeld of doorverkocht. Vragen? Mail j.guzman@midnightspaceconsultancy.com."})]})}),W.jsx("section",{id:"terms",style:{position:"relative",zIndex:2,background:"#b8b8b8",borderTop:"1px solid rgba(0,0,0,0.18)",padding:"70px 32px"},children:W.jsxs("div",{style:{maxWidth:720},children:[W.jsx("h2",{style:{fontSize:"clamp(22px, 2.5vw, 32px)",fontWeight:700,textTransform:"uppercase",color:"#1a1a1a",margin:0},children:"Terms of Service"}),W.jsx("p",{style:{marginTop:16,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:560},children:"Een proefontwerp is gratis en vrijblijvend. Je betaalt pas na akkoord over een volledige website. Alles verloopt per e-mail — zwart op wit, in je eigen tempo."})]})})]})}function Qo({counter:n,title:e,subtitle:t,children:r}){return W.jsxs("section",{style:{position:"relative",zIndex:2,background:"#C5C5C5",minHeight:"100vh",padding:"120px 32px 80px"},children:[W.jsx(Yt,{delay:0,children:W.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",margin:"0 0 20px"},children:n})}),W.jsx(Yt,{as:"h1",delay:.1,children:W.jsx("h1",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",maxWidth:520,margin:0},children:e})}),t&&W.jsx(Yt,{as:"p",delay:.25,children:W.jsx("p",{style:{marginTop:20,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:420},children:t})}),W.jsx("div",{style:{marginTop:48},children:r})]})}function oM({embedded:n=!1}){const e=W.jsx(Qo,{counter:"004 / 005",title:"Conceptstudies, eerst gemaakt",subtitle:"Elk ontwerp hieronder werd eerst gemaakt en dan pas voorgesteld — zo werk ik. Eigen beeldmateriaal van de zaak, eerlijk gelabeld.",children:W.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:640},children:tT.map((t,r)=>W.jsx(Yt,{delay:.15+r*.1,children:W.jsxs(In.div,{whileHover:{y:-4},transition:{type:"spring",stiffness:320,damping:26},style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.35)"},children:[W.jsx("div",{style:{width:"100%",aspectRatio:"21/9",overflow:"hidden"},children:W.jsx(In.img,{src:t.image,alt:t.client,loading:"lazy",whileHover:{scale:1.04},transition:{duration:.6,ease:[.22,1,.36,1]},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}})}),W.jsxs("div",{style:{padding:"20px 28px 24px"},children:[W.jsx("span",{style:{fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"#666"},children:t.tag}),W.jsx("h3",{style:{fontSize:18,fontWeight:600,color:"#1a1a1a",margin:"8px 0 6px"},children:t.client}),W.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"#3a3a3a",margin:0},children:t.outcome})]})]})},t.client))})});return e}function aM({embedded:n=!1}){const e=W.jsxs(Qo,{counter:"005 / 005",title:"Connect",subtitle:"Vertel over je zaak — alles staat zwart op wit, en je beslist in je eigen tempo.",children:[W.jsx(Yt,{delay:.2,children:W.jsxs("a",{href:"mailto:j.guzman@midnightspaceconsultancy.com",style:{display:"inline-flex",alignItems:"center",gap:10,fontSize:16,color:"#1a1a1a",textDecoration:"none"},children:[W.jsx(fR,{size:18,strokeWidth:1.5}),"j.guzman@midnightspaceconsultancy.com"]})}),W.jsx(Yt,{delay:.35,children:W.jsxs("form",{style:{marginTop:32,maxWidth:420,display:"flex",flexDirection:"column",gap:12},onSubmit:t=>t.preventDefault(),children:[W.jsx("input",{type:"text",placeholder:"Company","aria-label":"Company",style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:9999,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)"}}),W.jsx("input",{type:"email",placeholder:"Work email","aria-label":"Work email",style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:9999,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)"}}),W.jsx("textarea",{placeholder:"What should we automate?","aria-label":"Message",rows:4,style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)",resize:"vertical"}}),W.jsx("button",{type:"submit",className:"btn-cognitra-primary",style:{alignSelf:"flex-start"},children:"SEND MESSAGE"})]})})]});return e}function lM({embedded:n=!1}){const e=W.jsx(Qo,{counter:"002 / 005",title:"Wie er achter zit",subtitle:"Een kleine webstudio uit Oost-Vlaanderen. Je vindt hier geen klantenlogo’s of sterren — de studio is jong, en ik verzin er liever geen.",children:W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:16},children:iT.map((t,r)=>W.jsx(Yt,{delay:.1+r*.08,children:W.jsxs("div",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,padding:24,background:"rgba(255,255,255,0.35)"},children:[W.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 4px",color:"#1a1a1a"},children:t.name}),W.jsx("p",{style:{fontSize:12,letterSpacing:"0.06em",margin:"0 0 8px",color:"#666"},children:t.role}),W.jsx("p",{style:{fontSize:13,lineHeight:1.5,margin:0,color:"#3a3a3a"},children:t.focus})]})},t.name))})});return e}function JL(){const n=e=>t=>{t.preventDefault(),wh(e)};return W.jsxs("section",{id:"main",style:{position:"relative",zIndex:1,height:"100vh"},children:[W.jsx("div",{className:"cognitra-hero-overlay",style:{position:"absolute",top:0,left:0,right:0,height:"48%",background:"#C5C5C5",display:"flex",flexDirection:"column",paddingTop:70},children:W.jsx("div",{style:{flex:1,display:"flex",alignItems:"flex-end",padding:"0 32px 24px 32px"},children:W.jsxs("div",{className:"cognitra-hero-row",style:{display:"flex",alignItems:"stretch",width:"100%",gap:48},children:[W.jsxs("div",{className:"cognitra-hero-col-left",style:{width:"32%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:80},children:[W.jsx(Yt,{as:"h1",delay:.1,children:W.jsxs("h1",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",margin:0,whiteSpace:"pre-line"},children:["JE ZAAK GROEIDE.",`
`,"JE WEBSITE BLEEF STAAN."]})}),W.jsx(Yt,{delay:.5,children:W.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",margin:0},children:"001 / 005"})})]}),W.jsxs("div",{className:"cognitra-hero-col-right",style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:80},children:[W.jsx(Yt,{as:"p",delay:.25,children:W.jsx("p",{style:{fontSize:18,lineHeight:1.6,color:"#5a5a5a",maxWidth:340,margin:0},children:"Midnight Space herbouwt verouderde websites voor zaken in Oost-Vlaanderen — vanaf nul getekend, geen sjablonen."})}),W.jsx(Yt,{delay:.4,children:W.jsxs("div",{className:"cognitra-hero-buttons",style:{display:"flex",gap:10},children:[W.jsx("button",{type:"button",className:"btn-cognitra-primary",onClick:n("connect"),children:"VRAAG JE PROEFONTWERP"}),W.jsx("button",{type:"button",className:"btn-cognitra-secondary",onClick:n("case"),children:"BEKIJK HET WERK"})]})})]})]})})}),W.jsx(Yt,{delay:.6,className:"cognitra-hero-bottom-text",style:{position:"absolute",top:"74%",transform:"translateY(-50%)",left:32,maxWidth:260},children:W.jsx("p",{style:{fontSize:14,lineHeight:1.65,color:"rgba(255,255,255,0.9)",margin:0},children:"Eerst zien, dan beslissen: je krijgt een gratis proefontwerp van je homepage, en je beslist pas daarna. Geen telefoontjes, geen verplichtingen — één e-mail."})})]})}const QL="DIT IS WAT IK VOOR JE MAAK".split(" "),Vo=[{image:"./media/debeule-hero.webp",label:"Conceptstudie — Autoschadebedrijf De Beule, Zele"},{image:"./media/michiels-hero.webp",label:"Conceptstudie — Schrijnwerkerij Michiels, Zele"},{image:"./media/jimmys-hero.webp",label:"Conceptstudie — Jimmy's Classic Cars, Buggenhout"}];function uM(n){const e=.1+n*.28;return[e,e+.18]}function eI({video:n,idx:e,progress:t}){const[r,o]=uM(e),a=Za(t,[r,o],[1,0]),u=Za(t,[r,o],[0,1]),f=Za(t,[r,o],[1.06,1]),d=Za(t,[o-.04,o],[0,1]);return W.jsxs("div",{style:{width:"100%",aspectRatio:"4/3",position:"relative",overflow:"hidden"},children:[W.jsx(In.video,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:a}}),W.jsx(In.img,{src:Vo[e].image,alt:Vo[e].label,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",opacity:u,scale:f}}),W.jsx(In.span,{style:{position:"absolute",left:0,right:0,bottom:0,padding:"28px 14px 10px",background:"linear-gradient(transparent, rgba(0,0,0,0.55))",color:"rgba(255,255,255,0.92)",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",opacity:d},children:Vo[e].label})]})}function tI({idx:n,progress:e}){const[t,r]=uM(n),o=Za(e,[t,r],[.25,1]);return W.jsx(In.span,{style:{width:26,height:3,borderRadius:2,background:"#1a1a1a",opacity:o,display:"inline-block"}})}function Ix({title:n,text:e,children:t}){return W.jsxs(In.article,{whileHover:{y:-6},transition:{type:"spring",stiffness:320,damping:26},style:{background:"transparent",border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,overflow:"hidden",display:"flex",flexDirection:"column",paddingTop:16,height:"100%"},children:[t,W.jsxs("div",{style:{padding:"20px 24px 24px 24px"},children:[W.jsx("h3",{style:{fontSize:17,fontWeight:600,color:"#1a1a1a",marginBottom:10,marginTop:0},children:n}),W.jsx("p",{style:{fontSize:13,lineHeight:1.55,color:"#3a3a3a",margin:0},children:e})]})]})}function Nx({compact:n}){return W.jsxs(W.Fragment,{children:[W.jsx(Yt,{delay:0,children:W.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",marginBottom:n?12:20,marginTop:0},children:"003 / 005"})}),W.jsxs("div",{className:"cognitra-services-head-row",style:{display:"flex",gap:48,alignItems:"flex-start",marginBottom:n?20:32},children:[W.jsx("div",{className:"cognitra-services-head-col",style:{width:"32%"},children:W.jsx("h2",{style:{fontSize:"clamp(24px, 2.6vw, 38px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",maxWidth:320,display:"flex",flexWrap:"wrap",gap:"0.25em",margin:0},children:QL.map((e,t)=>W.jsx(Yt,{as:"span",delay:.1+t*.08,y:28,children:W.jsx("span",{children:e})},e+t))})}),W.jsx("div",{className:"cognitra-services-head-col",style:{flex:1,paddingTop:8},children:W.jsx(Yt,{as:"p",delay:.25,children:W.jsx("p",{style:{fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:320,margin:0},children:"Websites voor zelfstandigen en lokale bedrijven — van eerste schets tot lancering, door één persoon. Scroll verder en zie de voorbeelden verschijnen."})})})]})]})}function nI(){const n=Je.useRef(null),e=mS(),[t,r]=Je.useState(!1);Je.useEffect(()=>{const u=window.matchMedia("(max-width: 860px)"),f=()=>r(u.matches);return f(),u.addEventListener("change",f),()=>u.removeEventListener("change",f)},[]);const{scrollYProgress:o}=ZC({target:n,offset:["start start","end end"]});return!e&&!t?W.jsx("div",{ref:n,style:{position:"relative",zIndex:2,height:"340vh"},children:W.jsxs("section",{id:"offering",className:"cognitra-section-3",style:{position:"sticky",top:0,height:"100vh",background:"#C5C5C5",display:"flex",flexDirection:"column",justifyContent:"center",padding:"84px 32px 28px 32px",boxSizing:"border-box"},children:[W.jsx(Nx,{compact:!0}),W.jsx("div",{className:"cognitra-cards-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,gridAutoRows:"1fr"},children:ic.map((u,f)=>W.jsx(Ix,{title:u.title,text:u.text,children:W.jsx(eI,{video:u.video,idx:f,progress:o})},u.title))}),W.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:22},children:ic.map((u,f)=>W.jsx(tI,{idx:f,progress:o},f))})]})}):W.jsxs("section",{id:"offering",className:"cognitra-section-3 cognitra-section-pad-lg",style:{position:"relative",zIndex:2,background:"#C5C5C5",display:"flex",flexDirection:"column",padding:"70px 32px 80px 32px",minHeight:"auto"},children:[W.jsx(Nx,{}),W.jsx("div",{className:"cognitra-cards-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,gridAutoRows:"1fr"},children:ic.map((u,f)=>W.jsx(Yt,{delay:.3+f*.12,children:W.jsx(Ix,{title:u.title,text:u.text,children:W.jsxs("div",{style:{width:"100%",aspectRatio:"4/3",position:"relative",overflow:"hidden"},children:[W.jsx("img",{src:Vo[f].image,alt:Vo[f].label,loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}),W.jsx("span",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"28px 14px 10px",background:"linear-gradient(transparent, rgba(0,0,0,0.55))",color:"rgba(255,255,255,0.92)",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase"},children:Vo[f].label})]})})},u.title))})]})}const iI="EERST ZIEN. DAN BESLISSEN. ZO SIMPEL IS HET.".split(" ");function rI(){return W.jsx("section",{className:"cognitra-section-pad",style:{position:"relative",zIndex:1,height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"70px 32px 32px 32px"},children:W.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:720,padding:"80px 0"},children:[W.jsx("h2",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.08,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#fff",display:"flex",flexWrap:"wrap",gap:"0.25em",margin:0},children:iI.map((n,e)=>W.jsx(Yt,{as:"span",delay:.15+e*.08,y:32,children:W.jsx("span",{children:n})},n+e))}),W.jsx(Yt,{as:"p",delay:.9,children:W.jsx("p",{style:{marginTop:24,fontSize:14,lineHeight:1.65,color:"rgba(255,255,255,0.85)",maxWidth:260},children:"We provide all-in-one AI automation services in one place."})})]})})}function cM({embedded:n=!1}){const e=W.jsxs(Qo,{counter:"005 / 005",title:"Hoe het werkt",subtitle:"Geen offerte vol beloftes: het eerste ontwerp bestaat al voor jij iets beslist.",children:[W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:20},children:nT.map((t,r)=>{const o="highlight"in t&&t.highlight;return W.jsx(Yt,{delay:.15+r*.1,children:W.jsxs("div",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,padding:28,background:o?"#1a1a1a":"rgba(255,255,255,0.35)",color:o?"#fff":"#1a1a1a"},children:[W.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",margin:0,opacity:.7},children:t.period}),W.jsx("h3",{style:{fontSize:22,fontWeight:700,margin:"8px 0 4px"},children:t.name}),W.jsx("p",{style:{fontSize:28,fontWeight:700,margin:"0 0 16px"},children:t.price}),W.jsx("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7},children:t.features.map(a=>W.jsx("li",{children:a},a))})]})},t.name)})}),W.jsx(Yt,{delay:.5,children:W.jsx("button",{type:"button",className:"btn-cognitra-primary",style:{marginTop:32},onClick:()=>Up("connect"),children:"VRAAG JE PROEFONTWERP"})})]});return e}function sI(){return W.jsxs(W.Fragment,{children:[W.jsx(JL,{}),W.jsx(rI,{}),W.jsx(nI,{}),W.jsx("div",{id:"case",className:"scroll-mt-8",children:W.jsx(oM,{embedded:!0})}),W.jsx("div",{id:"rates",className:"scroll-mt-8",children:W.jsx(cM,{embedded:!0})}),W.jsx("div",{id:"crew",className:"scroll-mt-8",children:W.jsx(lM,{embedded:!0})}),W.jsx("div",{id:"connect",className:"scroll-mt-8",children:W.jsx(aM,{embedded:!0})})]})}function oI({embedded:n=!1}){const e=W.jsx(Qo,{counter:"003 / 005",title:"Explore what we offer",subtitle:"End-to-end AI automation — advisory, engineering, and process design under one roof.",children:W.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20},children:ic.map((t,r)=>W.jsx(Yt,{delay:.2+r*.1,children:W.jsxs("article",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,overflow:"hidden",background:"rgba(255,255,255,0.35)"},children:[W.jsx("div",{style:{aspectRatio:"4/3",position:"relative"},children:W.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:t.video,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})}),W.jsxs("div",{style:{padding:24},children:[W.jsx("h3",{style:{fontSize:18,fontWeight:600,color:"#1a1a1a",margin:"0 0 10px"},children:t.title}),W.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"#3a3a3a",margin:0},children:t.text})]})]})},t.title))})});return e}function aI(){return W.jsxs(W.Fragment,{children:[W.jsx(Qo,{counter:"LEGAL",title:"Policies",subtitle:"Privacy en voorwaarden — kort en eerlijk, zoals de rest van de site.",children:W.jsx(W.Fragment,{})}),W.jsx(sM,{})]})}function lI(){return Je.useEffect(()=>{JE()},[]),W.jsxs(ZL,{children:[W.jsx(QE,{routes:{"":W.jsx(sI,{}),offering:W.jsx(oI,{}),case:W.jsx(oM,{}),rates:W.jsx(cM,{}),crew:W.jsx(lM,{}),connect:W.jsx(aM,{}),privacy:W.jsx(aI,{})}}),W.jsx(sM,{}),W.jsx("footer",{style:{position:"relative",zIndex:2,background:"#1a1a1a",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"24px 32px",fontSize:11,letterSpacing:"0.06em"},children:"© 2026 MIDNIGHT SPACE · OOST-VLAANDEREN"})]})}ZE.createRoot(document.getElementById("root")).render(W.jsx(Je.StrictMode,{children:W.jsx(lI,{})}));
