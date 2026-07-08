(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var bd={exports:{}},Ua={},Rd={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function KE(){if(av)return Mt;av=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function S(O,Z,Ie){this.props=O,this.context=Z,this.refs=A,this.updater=Ie||y}S.prototype.isReactComponent={},S.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=S.prototype;function R(O,Z,Ie){this.props=O,this.context=Z,this.refs=A,this.updater=Ie||y}var D=R.prototype=new x;D.constructor=R,M(D,S.prototype),D.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function E(O,Z,Ie){var Ge,ze={},oe=null,ve=null;if(Z!=null)for(Ge in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(oe=""+Z.key),Z)L.call(Z,Ge)&&!U.hasOwnProperty(Ge)&&(ze[Ge]=Z[Ge]);var pe=arguments.length-2;if(pe===1)ze.children=Ie;else if(1<pe){for(var Oe=Array(pe),et=0;et<pe;et++)Oe[et]=arguments[et+2];ze.children=Oe}if(O&&O.defaultProps)for(Ge in pe=O.defaultProps,pe)ze[Ge]===void 0&&(ze[Ge]=pe[Ge]);return{$$typeof:n,type:O,key:oe,ref:ve,props:ze,_owner:P.current}}function I(O,Z){return{$$typeof:n,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function B(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ie){return Z[Ie]})}var $=/\/+/g;function fe(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):Z.toString(36)}function he(O,Z,Ie,Ge,ze){var oe=typeof O;(oe==="undefined"||oe==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(oe){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case n:case e:ve=!0}}if(ve)return ve=O,ze=ze(ve),O=Ge===""?"."+fe(ve,0):Ge,C(ze)?(Ie="",O!=null&&(Ie=O.replace($,"$&/")+"/"),he(ze,Z,Ie,"",function(et){return et})):ze!=null&&(B(ze)&&(ze=I(ze,Ie+(!ze.key||ve&&ve.key===ze.key?"":(""+ze.key).replace($,"$&/")+"/")+O)),Z.push(ze)),1;if(ve=0,Ge=Ge===""?".":Ge+":",C(O))for(var pe=0;pe<O.length;pe++){oe=O[pe];var Oe=Ge+fe(oe,pe);ve+=he(oe,Z,Ie,Oe,ze)}else if(Oe=m(O),typeof Oe=="function")for(O=Oe.call(O),pe=0;!(oe=O.next()).done;)oe=oe.value,Oe=Ge+fe(oe,pe++),ve+=he(oe,Z,Ie,Oe,ze);else if(oe==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(O,Z,Ie){if(O==null)return O;var Ge=[],ze=0;return he(O,Ge,"","",function(oe){return Z.call(Ie,oe,ze++)}),Ge}function ue(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ie){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ie)},function(Ie){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ie)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var X={current:null},G={transition:null},re={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:G,ReactCurrentOwner:P};function se(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:J,forEach:function(O,Z,Ie){J(O,function(){Z.apply(this,arguments)},Ie)},count:function(O){var Z=0;return J(O,function(){Z++}),Z},toArray:function(O){return J(O,function(Z){return Z})||[]},only:function(O){if(!B(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Mt.Component=S,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=R,Mt.StrictMode=r,Mt.Suspense=d,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Mt.act=se,Mt.cloneElement=function(O,Z,Ie){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=M({},O.props),ze=O.key,oe=O.ref,ve=O._owner;if(Z!=null){if(Z.ref!==void 0&&(oe=Z.ref,ve=P.current),Z.key!==void 0&&(ze=""+Z.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Oe in Z)L.call(Z,Oe)&&!U.hasOwnProperty(Oe)&&(Ge[Oe]=Z[Oe]===void 0&&pe!==void 0?pe[Oe]:Z[Oe])}var Oe=arguments.length-2;if(Oe===1)Ge.children=Ie;else if(1<Oe){pe=Array(Oe);for(var et=0;et<Oe;et++)pe[et]=arguments[et+2];Ge.children=pe}return{$$typeof:n,type:O.type,key:ze,ref:oe,props:Ge,_owner:ve}},Mt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},Mt.createElement=E,Mt.createFactory=function(O){var Z=E.bind(null,O);return Z.type=O,Z},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(O){return{$$typeof:f,render:O}},Mt.isValidElement=B,Mt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:ue}},Mt.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},Mt.startTransition=function(O){var Z=G.transition;G.transition={};try{O()}finally{G.transition=Z}},Mt.unstable_act=se,Mt.useCallback=function(O,Z){return X.current.useCallback(O,Z)},Mt.useContext=function(O){return X.current.useContext(O)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(O){return X.current.useDeferredValue(O)},Mt.useEffect=function(O,Z){return X.current.useEffect(O,Z)},Mt.useId=function(){return X.current.useId()},Mt.useImperativeHandle=function(O,Z,Ie){return X.current.useImperativeHandle(O,Z,Ie)},Mt.useInsertionEffect=function(O,Z){return X.current.useInsertionEffect(O,Z)},Mt.useLayoutEffect=function(O,Z){return X.current.useLayoutEffect(O,Z)},Mt.useMemo=function(O,Z){return X.current.useMemo(O,Z)},Mt.useReducer=function(O,Z,Ie){return X.current.useReducer(O,Z,Ie)},Mt.useRef=function(O){return X.current.useRef(O)},Mt.useState=function(O){return X.current.useState(O)},Mt.useSyncExternalStore=function(O,Z,Ie){return X.current.useSyncExternalStore(O,Z,Ie)},Mt.useTransition=function(){return X.current.useTransition()},Mt.version="18.3.1",Mt}var lv;function kp(){return lv||(lv=1,Rd.exports=KE()),Rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function ZE(){if(uv)return Ua;uv=1;var n=kp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(f,d,h){var g,v={},m=null,y=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(y=d.ref);for(g in d)r.call(d,g)&&!a.hasOwnProperty(g)&&(v[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)v[g]===void 0&&(v[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:y,props:v,_owner:o.current}}return Ua.Fragment=t,Ua.jsx=u,Ua.jsxs=u,Ua}var cv;function JE(){return cv||(cv=1,bd.exports=ZE()),bd.exports}var j=JE(),Je=kp(),Tu={},Pd={exports:{}},ei={},Dd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function QE(){return fv||(fv=1,(function(n){function e(G,re){var se=G.length;G.push(re);e:for(;0<se;){var O=se-1>>>1,Z=G[O];if(0<o(Z,re))G[O]=re,G[se]=Z,se=O;else break e}}function t(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var re=G[0],se=G.pop();if(se!==re){G[0]=se;e:for(var O=0,Z=G.length,Ie=Z>>>1;O<Ie;){var Ge=2*(O+1)-1,ze=G[Ge],oe=Ge+1,ve=G[oe];if(0>o(ze,se))oe<Z&&0>o(ve,ze)?(G[O]=ve,G[oe]=se,O=oe):(G[O]=ze,G[Ge]=se,O=Ge);else if(oe<Z&&0>o(ve,se))G[O]=ve,G[oe]=se,O=oe;else break e}}return re}function o(G,re){var se=G.sortIndex-re.sortIndex;return se!==0?se:G.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var d=[],h=[],g=1,v=null,m=3,y=!1,M=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(G){for(var re=t(h);re!==null;){if(re.callback===null)r(h);else if(re.startTime<=G)r(h),re.sortIndex=re.expirationTime,e(d,re);else break;re=t(h)}}function C(G){if(A=!1,D(G),!M)if(t(d)!==null)M=!0,ue(L);else{var re=t(h);re!==null&&X(C,re.startTime-G)}}function L(G,re){M=!1,A&&(A=!1,x(E),E=-1),y=!0;var se=m;try{for(D(re),v=t(d);v!==null&&(!(v.expirationTime>re)||G&&!k());){var O=v.callback;if(typeof O=="function"){v.callback=null,m=v.priorityLevel;var Z=O(v.expirationTime<=re);re=n.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(d)&&r(d),D(re)}else r(d);v=t(d)}if(v!==null)var Ie=!0;else{var Ge=t(h);Ge!==null&&X(C,Ge.startTime-re),Ie=!1}return Ie}finally{v=null,m=se,y=!1}}var P=!1,U=null,E=-1,I=5,B=-1;function k(){return!(n.unstable_now()-B<I)}function $(){if(U!==null){var G=n.unstable_now();B=G;var re=!0;try{re=U(!0,G)}finally{re?fe():(P=!1,U=null)}}else P=!1}var fe;if(typeof R=="function")fe=function(){R($)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,J=he.port2;he.port1.onmessage=$,fe=function(){J.postMessage(null)}}else fe=function(){S($,0)};function ue(G){U=G,P||(P=!0,fe())}function X(G,re){E=S(function(){G(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_continueExecution=function(){M||y||(M=!0,ue(L))},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return m},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(G){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var se=m;m=re;try{return G()}finally{m=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(G,re){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var se=m;m=G;try{return re()}finally{m=se}},n.unstable_scheduleCallback=function(G,re,se){var O=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,G){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=se+Z,G={id:g++,callback:re,priorityLevel:G,startTime:se,expirationTime:Z,sortIndex:-1},se>O?(G.sortIndex=se,e(h,G),t(d)===null&&G===t(h)&&(A?(x(E),E=-1):A=!0,X(C,se-O))):(G.sortIndex=Z,e(d,G),M||y||(M=!0,ue(L))),G},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(G){var re=m;return function(){var se=m;m=re;try{return G.apply(this,arguments)}finally{m=se}}}})(Ld)),Ld}var dv;function eT(){return dv||(dv=1,Dd.exports=QE()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hv;function tT(){if(hv)return ei;hv=1;var n=kp(),e=eT();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function m(i){return d.call(v,i)?!0:d.call(g,i)?!1:h.test(i)?v[i]=!0:(g[i]=!0,!1)}function y(i,s,l,c){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,c){if(s===null||typeof s>"u"||y(i,s,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(i,s,l,c,p,_,w){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=_,this.removeEmptyString=w}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new A(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new A(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new A(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new A(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new A(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new A(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new A(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new A(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new A(i,5,!1,i.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function R(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(x,R);S[s]=new A(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(x,R);S[s]=new A(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(x,R);S[s]=new A(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new A(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,l,c){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,p,c)&&(l=null),c||p===null?m(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,c=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?i.setAttributeNS(c,s,l):i.setAttribute(s,l))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),fe=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),G=Symbol.iterator;function re(i){return i===null||typeof i!="object"?null:(i=G&&i[G]||i["@@iterator"],typeof i=="function"?i:null)}var se=Object.assign,O;function Z(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ie=!1;function Ge(i,s){if(!i||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(le){var c=le}Reflect.construct(i,[],s)}else{try{s.call()}catch(le){c=le}i.call(s.prototype)}else{try{throw Error()}catch(le){c=le}i()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),_=c.stack.split(`
`),w=p.length-1,F=_.length-1;1<=w&&0<=F&&p[w]!==_[F];)F--;for(;1<=w&&0<=F;w--,F--)if(p[w]!==_[F]){if(w!==1||F!==1)do if(w--,F--,0>F||p[w]!==_[F]){var z=`
`+p[w].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=w&&0<=F);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Z(i):""}function ze(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=Ge(i.type,!1),i;case 11:return i=Ge(i.type.render,!1),i;case 1:return i=Ge(i.type,!0),i;default:return""}}function oe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case P:return"Portal";case I:return"Profiler";case E:return"StrictMode";case fe:return"Suspense";case he:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case J:return s=i.displayName||null,s!==null?s:oe(i.type)||"Memo";case ue:s=i._payload,i=i._init;try{return oe(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function pe(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(i){var s=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),c=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,_=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(w){c=""+w,_.call(this,w)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Me(i){i._valueTracker||(i._valueTracker=et(i))}function ct(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),c="";return i&&(c=Oe(i)?i.checked?"true":"false":i.value),i=c,i!==l?(s.setValue(i),!0):!1}function Ne(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function nt(i,s){var l=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function st(i,s){var l=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;l=pe(s.value!=null?s.value:l),i._wrapperState={initialChecked:c,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function rt(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function yt(i,s){rt(i,s);var l=pe(s.value),c=s.type;if(l!=null)c==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(c==="submit"||c==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ot(i,s.type,l):s.hasOwnProperty("defaultValue")&&Ot(i,s.type,pe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Et(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ot(i,s,l){(s!=="number"||Ne(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var At=Array.isArray;function Ct(i,s,l,c){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&c&&(i[l].defaultSelected=!0)}else{for(l=""+pe(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,c&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function _t(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function H(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(At(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:pe(l)}}function Xt(i,s){var l=pe(s.value),c=pe(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),c!=null&&(i.defaultValue=""+c)}function Tt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function N(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function T(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?N(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var K,ie=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,c,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,c,p)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=K.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ce(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(i){Re.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Ee[s]=Ee[i]})});function de(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ee.hasOwnProperty(i)&&Ee[i]?(""+s).trim():s+"px"}function ge(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=de(l,s[l],c);l==="float"&&(l="cssFloat"),c?i.setProperty(l,p):i[l]=p}}var De=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(i,s){if(s){if(De[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function tt(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var it=null,ft=null,V=null;function Ce(i){if(i=ya(i)){if(typeof it!="function")throw Error(t(280));var s=i.stateNode;s&&(s=kl(s),it(i.stateNode,i.type,s))}}function me(i){ft?V?V.push(i):V=[i]:ft=i}function Pe(){if(ft){var i=ft,s=V;if(V=ft=null,Ce(i),s)for(i=0;i<s.length;i++)Ce(s[i])}}function Ue(i,s){return i(s)}function _e(){}var je=!1;function We(i,s,l){if(je)return i(s,l);je=!0;try{return Ue(i,s,l)}finally{je=!1,(ft!==null||V!==null)&&(_e(),Pe())}}function Ht(i,s){var l=i.stateNode;if(l===null)return null;var c=kl(l);if(c===null)return null;l=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(i=i.type,c=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!c;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ut=!1;if(f)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ut=!1}function ci(i,s,l,c,p,_,w,F,z){var le=Array.prototype.slice.call(arguments,3);try{s.apply(l,le)}catch(ye){this.onError(ye)}}var rs=!1,Gs=null,ss=!1,os=null,Kc={onError:function(i){rs=!0,Gs=i}};function Sl(i,s,l,c,p,_,w,F,z){rs=!1,Gs=null,ci.apply(Kc,arguments)}function Ml(i,s,l,c,p,_,w,F,z){if(Sl.apply(this,arguments),rs){if(rs){var le=Gs;rs=!1,Gs=null}else throw Error(t(198));ss||(ss=!0,os=le)}}function kn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Ws(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ea(i){if(kn(i)!==i)throw Error(t(188))}function El(i){var s=i.alternate;if(!s){if(s=kn(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,c=s;;){var p=l.return;if(p===null)break;var _=p.alternate;if(_===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===_.child){for(_=p.child;_;){if(_===l)return ea(p),i;if(_===c)return ea(p),s;_=_.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=_;else{for(var w=!1,F=p.child;F;){if(F===l){w=!0,l=p,c=_;break}if(F===c){w=!0,c=p,l=_;break}F=F.sibling}if(!w){for(F=_.child;F;){if(F===l){w=!0,l=_,c=p;break}if(F===c){w=!0,c=_,l=p;break}F=F.sibling}if(!w)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function as(i){return i=El(i),i!==null?ta(i):null}function ta(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=ta(i);if(s!==null)return s;i=i.sibling}return null}var ls=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,Tl=e.unstable_shouldYield,Zc=e.unstable_requestPaint,Jt=e.unstable_now,Jc=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,b=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,ae=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,Ae=null;function Ve(i){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ee,i,void 0,(i.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:ht,Ye=Math.log,Qe=Math.LN2;function ht(i){return i>>>=0,i===0?32:31-(Ye(i)/Qe|0)|0}var pt=64,Ke=4194304;function Rt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Gt(i,s){var l=i.pendingLanes;if(l===0)return 0;var c=0,p=i.suspendedLanes,_=i.pingedLanes,w=l&268435455;if(w!==0){var F=w&~p;F!==0?c=Rt(F):(_&=w,_!==0&&(c=Rt(_)))}else w=l&~p,w!==0?c=Rt(w):_!==0&&(c=Rt(_));if(c===0)return 0;if(s!==0&&s!==c&&(s&p)===0&&(p=c&-c,_=s&-s,p>=_||p===16&&(_&4194240)!==0))return s;if((c&4)!==0&&(c|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=c;0<s;)l=31-we(s),p=1<<l,c|=i[l],s&=~p;return c}function $t(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(i,s){for(var l=i.suspendedLanes,c=i.pingedLanes,p=i.expirationTimes,_=i.pendingLanes;0<_;){var w=31-we(_),F=1<<w,z=p[w];z===-1?((F&l)===0||(F&c)!==0)&&(p[w]=$t(F,s)):z<=s&&(i.expiredLanes|=F),_&=~F}}function un(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Be(){var i=pt;return pt<<=1,(pt&4194240)===0&&(pt=64),i}function Sn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function xt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-we(s),i[s]=l}function Yn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var c=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-we(l),_=1<<p;s[p]=0,c[p]=-1,i[p]=-1,l&=~_}}function qn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var c=31-we(l),p=1<<c;p&s|i[c]&s&&(i[c]|=s),l&=~p}}var St=0;function rr(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ft,jt,Ei,kt,Ti,ki=!1,us=[],Ar=null,Cr=null,br=null,ra=new Map,sa=new Map,Rr=[],_M="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wm(i,s){switch(i){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":ra.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(s.pointerId)}}function oa(i,s,l,c,p,_){return i===null||i.nativeEvent!==_?(i={blockedOn:s,domEventName:l,eventSystemFlags:c,nativeEvent:_,targetContainers:[p]},s!==null&&(s=ya(s),s!==null&&jt(s)),i):(i.eventSystemFlags|=c,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function xM(i,s,l,c,p){switch(s){case"focusin":return Ar=oa(Ar,i,s,l,c,p),!0;case"dragenter":return Cr=oa(Cr,i,s,l,c,p),!0;case"mouseover":return br=oa(br,i,s,l,c,p),!0;case"pointerover":var _=p.pointerId;return ra.set(_,oa(ra.get(_)||null,i,s,l,c,p)),!0;case"gotpointercapture":return _=p.pointerId,sa.set(_,oa(sa.get(_)||null,i,s,l,c,p)),!0}return!1}function Xm(i){var s=cs(i.target);if(s!==null){var l=kn(s);if(l!==null){if(s=l.tag,s===13){if(s=Ws(l),s!==null){i.blockedOn=s,Ti(i.priority,function(){Ei(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function wl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=ef(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var c=new l.constructor(l.type,l);be=c,l.target.dispatchEvent(c),be=null}else return s=ya(l),s!==null&&jt(s),i.blockedOn=l,!1;s.shift()}return!0}function jm(i,s,l){wl(i)&&l.delete(s)}function yM(){ki=!1,Ar!==null&&wl(Ar)&&(Ar=null),Cr!==null&&wl(Cr)&&(Cr=null),br!==null&&wl(br)&&(br=null),ra.forEach(jm),sa.forEach(jm)}function aa(i,s){i.blockedOn===s&&(i.blockedOn=null,ki||(ki=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yM)))}function la(i){function s(p){return aa(p,i)}if(0<us.length){aa(us[0],i);for(var l=1;l<us.length;l++){var c=us[l];c.blockedOn===i&&(c.blockedOn=null)}}for(Ar!==null&&aa(Ar,i),Cr!==null&&aa(Cr,i),br!==null&&aa(br,i),ra.forEach(s),sa.forEach(s),l=0;l<Rr.length;l++)c=Rr[l],c.blockedOn===i&&(c.blockedOn=null);for(;0<Rr.length&&(l=Rr[0],l.blockedOn===null);)Xm(l),l.blockedOn===null&&Rr.shift()}var Xs=C.ReactCurrentBatchConfig,Al=!0;function SM(i,s,l,c){var p=St,_=Xs.transition;Xs.transition=null;try{St=1,Qc(i,s,l,c)}finally{St=p,Xs.transition=_}}function MM(i,s,l,c){var p=St,_=Xs.transition;Xs.transition=null;try{St=4,Qc(i,s,l,c)}finally{St=p,Xs.transition=_}}function Qc(i,s,l,c){if(Al){var p=ef(i,s,l,c);if(p===null)_f(i,s,c,Cl,l),Wm(i,c);else if(xM(p,i,s,l,c))c.stopPropagation();else if(Wm(i,c),s&4&&-1<_M.indexOf(i)){for(;p!==null;){var _=ya(p);if(_!==null&&Ft(_),_=ef(i,s,l,c),_===null&&_f(i,s,c,Cl,l),_===p)break;p=_}p!==null&&c.stopPropagation()}else _f(i,s,c,null,l)}}var Cl=null;function ef(i,s,l,c){if(Cl=null,i=tt(c),i=cs(i),i!==null)if(s=kn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Ws(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Cl=i,null}function Ym(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jc()){case ia:return 1;case b:return 4;case Y:case ae:return 16;case te:return 536870912;default:return 16}default:return 16}}var Pr=null,tf=null,bl=null;function qm(){if(bl)return bl;var i,s=tf,l=s.length,c,p="value"in Pr?Pr.value:Pr.textContent,_=p.length;for(i=0;i<l&&s[i]===p[i];i++);var w=l-i;for(c=1;c<=w&&s[l-c]===p[_-c];c++);return bl=p.slice(i,1<c?1-c:void 0)}function Rl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Pl(){return!0}function $m(){return!1}function ni(i){function s(l,c,p,_,w){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=_,this.target=w,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(_):_[F]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?Pl:$m,this.isPropagationStopped=$m,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),s}var js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=ni(js),ua=se({},js,{view:0,detail:0}),EM=ni(ua),rf,sf,ca,Dl=se({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==ca&&(ca&&i.type==="mousemove"?(rf=i.screenX-ca.screenX,sf=i.screenY-ca.screenY):sf=rf=0,ca=i),rf)},movementY:function(i){return"movementY"in i?i.movementY:sf}}),Km=ni(Dl),TM=se({},Dl,{dataTransfer:0}),wM=ni(TM),AM=se({},ua,{relatedTarget:0}),of=ni(AM),CM=se({},js,{animationName:0,elapsedTime:0,pseudoElement:0}),bM=ni(CM),RM=se({},js,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),PM=ni(RM),DM=se({},js,{data:0}),Zm=ni(DM),LM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},NM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=NM[i])?!!s[i]:!1}function af(){return UM}var FM=se({},ua,{key:function(i){if(i.key){var s=LM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Rl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?IM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(i){return i.type==="keypress"?Rl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Rl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),OM=ni(FM),BM=se({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=ni(BM),kM=se({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),zM=ni(kM),VM=se({},js,{propertyName:0,elapsedTime:0,pseudoElement:0}),HM=ni(VM),GM=se({},Dl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),WM=ni(GM),XM=[9,13,27,32],lf=f&&"CompositionEvent"in window,fa=null;f&&"documentMode"in document&&(fa=document.documentMode);var jM=f&&"TextEvent"in window&&!fa,Qm=f&&(!lf||fa&&8<fa&&11>=fa),eg=" ",tg=!1;function ng(i,s){switch(i){case"keyup":return XM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ys=!1;function YM(i,s){switch(i){case"compositionend":return ig(s);case"keypress":return s.which!==32?null:(tg=!0,eg);case"textInput":return i=s.data,i===eg&&tg?null:i;default:return null}}function qM(i,s){if(Ys)return i==="compositionend"||!lf&&ng(i,s)?(i=qm(),bl=tf=Pr=null,Ys=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Qm&&s.locale!=="ko"?null:s.data;default:return null}}var $M={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!$M[i.type]:s==="textarea"}function sg(i,s,l,c){me(c),s=Fl(s,"onChange"),0<s.length&&(l=new nf("onChange","change",null,l,c),i.push({event:l,listeners:s}))}var da=null,ha=null;function KM(i){Eg(i,0)}function Ll(i){var s=Js(i);if(ct(s))return i}function ZM(i,s){if(i==="change")return s}var og=!1;if(f){var uf;if(f){var cf="oninput"in document;if(!cf){var ag=document.createElement("div");ag.setAttribute("oninput","return;"),cf=typeof ag.oninput=="function"}uf=cf}else uf=!1;og=uf&&(!document.documentMode||9<document.documentMode)}function lg(){da&&(da.detachEvent("onpropertychange",ug),ha=da=null)}function ug(i){if(i.propertyName==="value"&&Ll(ha)){var s=[];sg(s,ha,i,tt(i)),We(KM,s)}}function JM(i,s,l){i==="focusin"?(lg(),da=s,ha=l,da.attachEvent("onpropertychange",ug)):i==="focusout"&&lg()}function QM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Ll(ha)}function eE(i,s){if(i==="click")return Ll(s)}function tE(i,s){if(i==="input"||i==="change")return Ll(s)}function nE(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var wi=typeof Object.is=="function"?Object.is:nE;function pa(i,s){if(wi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),c=Object.keys(s);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!d.call(s,p)||!wi(i[p],s[p]))return!1}return!0}function cg(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function fg(i,s){var l=cg(i);i=0;for(var c;l;){if(l.nodeType===3){if(c=i+l.textContent.length,i<=s&&c>=s)return{node:l,offset:s-i};i=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=cg(l)}}function dg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?dg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function hg(){for(var i=window,s=Ne();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Ne(i.document)}return s}function ff(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function iE(i){var s=hg(),l=i.focusedElem,c=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&dg(l.ownerDocument.documentElement,l)){if(c!==null&&ff(l)){if(s=c.start,i=c.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,_=Math.min(c.start,p);c=c.end===void 0?_:Math.min(c.end,p),!i.extend&&_>c&&(p=c,c=_,_=p),p=fg(l,_);var w=fg(l,c);p&&w&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==w.node||i.focusOffset!==w.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),_>c?(i.addRange(s),i.extend(w.node,w.offset)):(s.setEnd(w.node,w.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var rE=f&&"documentMode"in document&&11>=document.documentMode,qs=null,df=null,ma=null,hf=!1;function pg(i,s,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hf||qs==null||qs!==Ne(c)||(c=qs,"selectionStart"in c&&ff(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ma&&pa(ma,c)||(ma=c,c=Fl(df,"onSelect"),0<c.length&&(s=new nf("onSelect","select",null,s,l),i.push({event:s,listeners:c}),s.target=qs)))}function Il(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var $s={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},pf={},mg={};f&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Nl(i){if(pf[i])return pf[i];if(!$s[i])return i;var s=$s[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in mg)return pf[i]=s[l];return i}var gg=Nl("animationend"),vg=Nl("animationiteration"),_g=Nl("animationstart"),xg=Nl("transitionend"),yg=new Map,Sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(i,s){yg.set(i,s),a(s,[i])}for(var mf=0;mf<Sg.length;mf++){var gf=Sg[mf],sE=gf.toLowerCase(),oE=gf[0].toUpperCase()+gf.slice(1);Dr(sE,"on"+oE)}Dr(gg,"onAnimationEnd"),Dr(vg,"onAnimationIteration"),Dr(_g,"onAnimationStart"),Dr("dblclick","onDoubleClick"),Dr("focusin","onFocus"),Dr("focusout","onBlur"),Dr(xg,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Mg(i,s,l){var c=i.type||"unknown-event";i.currentTarget=l,Ml(c,s,void 0,i),i.currentTarget=null}function Eg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var c=i[l],p=c.event;c=c.listeners;e:{var _=void 0;if(s)for(var w=c.length-1;0<=w;w--){var F=c[w],z=F.instance,le=F.currentTarget;if(F=F.listener,z!==_&&p.isPropagationStopped())break e;Mg(p,F,le),_=z}else for(w=0;w<c.length;w++){if(F=c[w],z=F.instance,le=F.currentTarget,F=F.listener,z!==_&&p.isPropagationStopped())break e;Mg(p,F,le),_=z}}}if(ss)throw i=os,ss=!1,os=null,i}function Yt(i,s){var l=s[Tf];l===void 0&&(l=s[Tf]=new Set);var c=i+"__bubble";l.has(c)||(Tg(s,i,2,!1),l.add(c))}function vf(i,s,l){var c=0;s&&(c|=4),Tg(l,i,c,s)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function va(i){if(!i[Ul]){i[Ul]=!0,r.forEach(function(l){l!=="selectionchange"&&(aE.has(l)||vf(l,!1,i),vf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Ul]||(s[Ul]=!0,vf("selectionchange",!1,s))}}function Tg(i,s,l,c){switch(Ym(s)){case 1:var p=SM;break;case 4:p=MM;break;default:p=Qc}l=p.bind(null,s,l,i),p=void 0,!Ut||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),c?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function _f(i,s,l,c,p){var _=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(w===4)for(w=c.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;w=w.return}for(;F!==null;){if(w=cs(F),w===null)return;if(z=w.tag,z===5||z===6){c=_=w;continue e}F=F.parentNode}}c=c.return}We(function(){var le=_,ye=tt(l),Se=[];e:{var xe=yg.get(i);if(xe!==void 0){var ke=nf,Xe=i;switch(i){case"keypress":if(Rl(l)===0)break e;case"keydown":case"keyup":ke=OM;break;case"focusin":Xe="focus",ke=of;break;case"focusout":Xe="blur",ke=of;break;case"beforeblur":case"afterblur":ke=of;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=wM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=zM;break;case gg:case vg:case _g:ke=bM;break;case xg:ke=HM;break;case"scroll":ke=EM;break;case"wheel":ke=WM;break;case"copy":case"cut":case"paste":ke=PM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Jm}var qe=(s&4)!==0,an=!qe&&i==="scroll",Q=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var W=le,ne;W!==null;){ne=W;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,Q!==null&&(Te=Ht(W,Q),Te!=null&&qe.push(_a(W,Te,ne)))),an)break;W=W.return}0<qe.length&&(xe=new ke(xe,Xe,null,l,ye),Se.push({event:xe,listeners:qe}))}}if((s&7)===0){e:{if(xe=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",xe&&l!==be&&(Xe=l.relatedTarget||l.fromElement)&&(cs(Xe)||Xe[sr]))break e;if((ke||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,ke?(Xe=l.relatedTarget||l.toElement,ke=le,Xe=Xe?cs(Xe):null,Xe!==null&&(an=kn(Xe),Xe!==an||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(ke=null,Xe=le),ke!==Xe)){if(qe=Km,Te="onMouseLeave",Q="onMouseEnter",W="mouse",(i==="pointerout"||i==="pointerover")&&(qe=Jm,Te="onPointerLeave",Q="onPointerEnter",W="pointer"),an=ke==null?xe:Js(ke),ne=Xe==null?xe:Js(Xe),xe=new qe(Te,W+"leave",ke,l,ye),xe.target=an,xe.relatedTarget=ne,Te=null,cs(ye)===le&&(qe=new qe(Q,W+"enter",Xe,l,ye),qe.target=ne,qe.relatedTarget=an,Te=qe),an=Te,ke&&Xe)t:{for(qe=ke,Q=Xe,W=0,ne=qe;ne;ne=Ks(ne))W++;for(ne=0,Te=Q;Te;Te=Ks(Te))ne++;for(;0<W-ne;)qe=Ks(qe),W--;for(;0<ne-W;)Q=Ks(Q),ne--;for(;W--;){if(qe===Q||Q!==null&&qe===Q.alternate)break t;qe=Ks(qe),Q=Ks(Q)}qe=null}else qe=null;ke!==null&&wg(Se,xe,ke,qe,!1),Xe!==null&&an!==null&&wg(Se,an,Xe,qe,!0)}}e:{if(xe=le?Js(le):window,ke=xe.nodeName&&xe.nodeName.toLowerCase(),ke==="select"||ke==="input"&&xe.type==="file")var Ze=ZM;else if(rg(xe))if(og)Ze=tE;else{Ze=QM;var ot=JM}else(ke=xe.nodeName)&&ke.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=eE);if(Ze&&(Ze=Ze(i,le))){sg(Se,Ze,l,ye);break e}ot&&ot(i,xe,le),i==="focusout"&&(ot=xe._wrapperState)&&ot.controlled&&xe.type==="number"&&Ot(xe,"number",xe.value)}switch(ot=le?Js(le):window,i){case"focusin":(rg(ot)||ot.contentEditable==="true")&&(qs=ot,df=le,ma=null);break;case"focusout":ma=df=qs=null;break;case"mousedown":hf=!0;break;case"contextmenu":case"mouseup":case"dragend":hf=!1,pg(Se,l,ye);break;case"selectionchange":if(rE)break;case"keydown":case"keyup":pg(Se,l,ye)}var at;if(lf)e:{switch(i){case"compositionstart":var dt="onCompositionStart";break e;case"compositionend":dt="onCompositionEnd";break e;case"compositionupdate":dt="onCompositionUpdate";break e}dt=void 0}else Ys?ng(i,l)&&(dt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(dt="onCompositionStart");dt&&(Qm&&l.locale!=="ko"&&(Ys||dt!=="onCompositionStart"?dt==="onCompositionEnd"&&Ys&&(at=qm()):(Pr=ye,tf="value"in Pr?Pr.value:Pr.textContent,Ys=!0)),ot=Fl(le,dt),0<ot.length&&(dt=new Zm(dt,i,null,l,ye),Se.push({event:dt,listeners:ot}),at?dt.data=at:(at=ig(l),at!==null&&(dt.data=at)))),(at=jM?YM(i,l):qM(i,l))&&(le=Fl(le,"onBeforeInput"),0<le.length&&(ye=new Zm("onBeforeInput","beforeinput",null,l,ye),Se.push({event:ye,listeners:le}),ye.data=at))}Eg(Se,s)})}function _a(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Fl(i,s){for(var l=s+"Capture",c=[];i!==null;){var p=i,_=p.stateNode;p.tag===5&&_!==null&&(p=_,_=Ht(i,l),_!=null&&c.unshift(_a(i,_,p)),_=Ht(i,s),_!=null&&c.push(_a(i,_,p))),i=i.return}return c}function Ks(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function wg(i,s,l,c,p){for(var _=s._reactName,w=[];l!==null&&l!==c;){var F=l,z=F.alternate,le=F.stateNode;if(z!==null&&z===c)break;F.tag===5&&le!==null&&(F=le,p?(z=Ht(l,_),z!=null&&w.unshift(_a(l,z,F))):p||(z=Ht(l,_),z!=null&&w.push(_a(l,z,F)))),l=l.return}w.length!==0&&i.push({event:s,listeners:w})}var lE=/\r\n?/g,uE=/\u0000|\uFFFD/g;function Ag(i){return(typeof i=="string"?i:""+i).replace(lE,`
`).replace(uE,"")}function Ol(i,s,l){if(s=Ag(s),Ag(i)!==s&&l)throw Error(t(425))}function Bl(){}var xf=null,yf=null;function Sf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Mf=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,Cg=typeof Promise=="function"?Promise:void 0,fE=typeof queueMicrotask=="function"?queueMicrotask:typeof Cg<"u"?function(i){return Cg.resolve(null).then(i).catch(dE)}:Mf;function dE(i){setTimeout(function(){throw i})}function Ef(i,s){var l=s,c=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){i.removeChild(p),la(s);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);la(s)}function Lr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function bg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Zs=Math.random().toString(36).slice(2),zi="__reactFiber$"+Zs,xa="__reactProps$"+Zs,sr="__reactContainer$"+Zs,Tf="__reactEvents$"+Zs,hE="__reactListeners$"+Zs,pE="__reactHandles$"+Zs;function cs(i){var s=i[zi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[sr]||l[zi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=bg(i);i!==null;){if(l=i[zi])return l;i=bg(i)}return s}i=l,l=i.parentNode}return null}function ya(i){return i=i[zi]||i[sr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function kl(i){return i[xa]||null}var wf=[],Qs=-1;function Ir(i){return{current:i}}function qt(i){0>Qs||(i.current=wf[Qs],wf[Qs]=null,Qs--)}function Wt(i,s){Qs++,wf[Qs]=i.current,i.current=s}var Nr={},Cn=Ir(Nr),$n=Ir(!1),fs=Nr;function eo(i,s){var l=i.type.contextTypes;if(!l)return Nr;var c=i.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var p={},_;for(_ in l)p[_]=s[_];return c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Kn(i){return i=i.childContextTypes,i!=null}function zl(){qt($n),qt(Cn)}function Rg(i,s,l){if(Cn.current!==Nr)throw Error(t(168));Wt(Cn,s),Wt($n,l)}function Pg(i,s,l){var c=i.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in s))throw Error(t(108,ve(i)||"Unknown",p));return se({},l,c)}function Vl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Nr,fs=Cn.current,Wt(Cn,i),Wt($n,$n.current),!0}function Dg(i,s,l){var c=i.stateNode;if(!c)throw Error(t(169));l?(i=Pg(i,s,fs),c.__reactInternalMemoizedMergedChildContext=i,qt($n),qt(Cn),Wt(Cn,i)):qt($n),Wt($n,l)}var or=null,Hl=!1,Af=!1;function Lg(i){or===null?or=[i]:or.push(i)}function mE(i){Hl=!0,Lg(i)}function Ur(){if(!Af&&or!==null){Af=!0;var i=0,s=St;try{var l=or;for(St=1;i<l.length;i++){var c=l[i];do c=c(!0);while(c!==null)}or=null,Hl=!1}catch(p){throw or!==null&&(or=or.slice(i+1)),ls(ia,Ur),p}finally{St=s,Af=!1}}return null}var to=[],no=0,Gl=null,Wl=0,fi=[],di=0,ds=null,ar=1,lr="";function hs(i,s){to[no++]=Wl,to[no++]=Gl,Gl=i,Wl=s}function Ig(i,s,l){fi[di++]=ar,fi[di++]=lr,fi[di++]=ds,ds=i;var c=ar;i=lr;var p=32-we(c)-1;c&=~(1<<p),l+=1;var _=32-we(s)+p;if(30<_){var w=p-p%5;_=(c&(1<<w)-1).toString(32),c>>=w,p-=w,ar=1<<32-we(s)+p|l<<p|c,lr=_+i}else ar=1<<_|l<<p|c,lr=i}function Cf(i){i.return!==null&&(hs(i,1),Ig(i,1,0))}function bf(i){for(;i===Gl;)Gl=to[--no],to[no]=null,Wl=to[--no],to[no]=null;for(;i===ds;)ds=fi[--di],fi[di]=null,lr=fi[--di],fi[di]=null,ar=fi[--di],fi[di]=null}var ii=null,ri=null,Kt=!1,Ai=null;function Ng(i,s){var l=gi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Ug(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,ii=i,ri=Lr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,ii=i,ri=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ds!==null?{id:ar,overflow:lr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=gi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,ii=i,ri=null,!0):!1;default:return!1}}function Rf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Pf(i){if(Kt){var s=ri;if(s){var l=s;if(!Ug(i,s)){if(Rf(i))throw Error(t(418));s=Lr(l.nextSibling);var c=ii;s&&Ug(i,s)?Ng(c,l):(i.flags=i.flags&-4097|2,Kt=!1,ii=i)}}else{if(Rf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Kt=!1,ii=i}}}function Fg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;ii=i}function Xl(i){if(i!==ii)return!1;if(!Kt)return Fg(i),Kt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Sf(i.type,i.memoizedProps)),s&&(s=ri)){if(Rf(i))throw Og(),Error(t(418));for(;s;)Ng(i,s),s=Lr(s.nextSibling)}if(Fg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ri=Lr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ri=null}}else ri=ii?Lr(i.stateNode.nextSibling):null;return!0}function Og(){for(var i=ri;i;)i=Lr(i.nextSibling)}function io(){ri=ii=null,Kt=!1}function Df(i){Ai===null?Ai=[i]:Ai.push(i)}var gE=C.ReactCurrentBatchConfig;function Sa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,i));var p=c,_=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===_?s.ref:(s=function(w){var F=p.refs;w===null?delete F[_]:F[_]=w},s._stringRef=_,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function jl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Bg(i){var s=i._init;return s(i._payload)}function kg(i){function s(Q,W){if(i){var ne=Q.deletions;ne===null?(Q.deletions=[W],Q.flags|=16):ne.push(W)}}function l(Q,W){if(!i)return null;for(;W!==null;)s(Q,W),W=W.sibling;return null}function c(Q,W){for(Q=new Map;W!==null;)W.key!==null?Q.set(W.key,W):Q.set(W.index,W),W=W.sibling;return Q}function p(Q,W){return Q=Gr(Q,W),Q.index=0,Q.sibling=null,Q}function _(Q,W,ne){return Q.index=ne,i?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<W?(Q.flags|=2,W):ne):(Q.flags|=2,W)):(Q.flags|=1048576,W)}function w(Q){return i&&Q.alternate===null&&(Q.flags|=2),Q}function F(Q,W,ne,Te){return W===null||W.tag!==6?(W=Md(ne,Q.mode,Te),W.return=Q,W):(W=p(W,ne),W.return=Q,W)}function z(Q,W,ne,Te){var Ze=ne.type;return Ze===U?ye(Q,W,ne.props.children,Te,ne.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Bg(Ze)===W.type)?(Te=p(W,ne.props),Te.ref=Sa(Q,W,ne),Te.return=Q,Te):(Te=gu(ne.type,ne.key,ne.props,null,Q.mode,Te),Te.ref=Sa(Q,W,ne),Te.return=Q,Te)}function le(Q,W,ne,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Ed(ne,Q.mode,Te),W.return=Q,W):(W=p(W,ne.children||[]),W.return=Q,W)}function ye(Q,W,ne,Te,Ze){return W===null||W.tag!==7?(W=Ss(ne,Q.mode,Te,Ze),W.return=Q,W):(W=p(W,ne),W.return=Q,W)}function Se(Q,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Md(""+W,Q.mode,ne),W.return=Q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case L:return ne=gu(W.type,W.key,W.props,null,Q.mode,ne),ne.ref=Sa(Q,null,W),ne.return=Q,ne;case P:return W=Ed(W,Q.mode,ne),W.return=Q,W;case ue:var Te=W._init;return Se(Q,Te(W._payload),ne)}if(At(W)||re(W))return W=Ss(W,Q.mode,ne,null),W.return=Q,W;jl(Q,W)}return null}function xe(Q,W,ne,Te){var Ze=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ze!==null?null:F(Q,W,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case L:return ne.key===Ze?z(Q,W,ne,Te):null;case P:return ne.key===Ze?le(Q,W,ne,Te):null;case ue:return Ze=ne._init,xe(Q,W,Ze(ne._payload),Te)}if(At(ne)||re(ne))return Ze!==null?null:ye(Q,W,ne,Te,null);jl(Q,ne)}return null}function ke(Q,W,ne,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Q=Q.get(ne)||null,F(W,Q,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return Q=Q.get(Te.key===null?ne:Te.key)||null,z(W,Q,Te,Ze);case P:return Q=Q.get(Te.key===null?ne:Te.key)||null,le(W,Q,Te,Ze);case ue:var ot=Te._init;return ke(Q,W,ne,ot(Te._payload),Ze)}if(At(Te)||re(Te))return Q=Q.get(ne)||null,ye(W,Q,Te,Ze,null);jl(W,Te)}return null}function Xe(Q,W,ne,Te){for(var Ze=null,ot=null,at=W,dt=W=0,_n=null;at!==null&&dt<ne.length;dt++){at.index>dt?(_n=at,at=null):_n=at.sibling;var It=xe(Q,at,ne[dt],Te);if(It===null){at===null&&(at=_n);break}i&&at&&It.alternate===null&&s(Q,at),W=_(It,W,dt),ot===null?Ze=It:ot.sibling=It,ot=It,at=_n}if(dt===ne.length)return l(Q,at),Kt&&hs(Q,dt),Ze;if(at===null){for(;dt<ne.length;dt++)at=Se(Q,ne[dt],Te),at!==null&&(W=_(at,W,dt),ot===null?Ze=at:ot.sibling=at,ot=at);return Kt&&hs(Q,dt),Ze}for(at=c(Q,at);dt<ne.length;dt++)_n=ke(at,Q,dt,ne[dt],Te),_n!==null&&(i&&_n.alternate!==null&&at.delete(_n.key===null?dt:_n.key),W=_(_n,W,dt),ot===null?Ze=_n:ot.sibling=_n,ot=_n);return i&&at.forEach(function(Wr){return s(Q,Wr)}),Kt&&hs(Q,dt),Ze}function qe(Q,W,ne,Te){var Ze=re(ne);if(typeof Ze!="function")throw Error(t(150));if(ne=Ze.call(ne),ne==null)throw Error(t(151));for(var ot=Ze=null,at=W,dt=W=0,_n=null,It=ne.next();at!==null&&!It.done;dt++,It=ne.next()){at.index>dt?(_n=at,at=null):_n=at.sibling;var Wr=xe(Q,at,It.value,Te);if(Wr===null){at===null&&(at=_n);break}i&&at&&Wr.alternate===null&&s(Q,at),W=_(Wr,W,dt),ot===null?Ze=Wr:ot.sibling=Wr,ot=Wr,at=_n}if(It.done)return l(Q,at),Kt&&hs(Q,dt),Ze;if(at===null){for(;!It.done;dt++,It=ne.next())It=Se(Q,It.value,Te),It!==null&&(W=_(It,W,dt),ot===null?Ze=It:ot.sibling=It,ot=It);return Kt&&hs(Q,dt),Ze}for(at=c(Q,at);!It.done;dt++,It=ne.next())It=ke(at,Q,dt,It.value,Te),It!==null&&(i&&It.alternate!==null&&at.delete(It.key===null?dt:It.key),W=_(It,W,dt),ot===null?Ze=It:ot.sibling=It,ot=It);return i&&at.forEach(function($E){return s(Q,$E)}),Kt&&hs(Q,dt),Ze}function an(Q,W,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===U&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case L:e:{for(var Ze=ne.key,ot=W;ot!==null;){if(ot.key===Ze){if(Ze=ne.type,Ze===U){if(ot.tag===7){l(Q,ot.sibling),W=p(ot,ne.props.children),W.return=Q,Q=W;break e}}else if(ot.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===ue&&Bg(Ze)===ot.type){l(Q,ot.sibling),W=p(ot,ne.props),W.ref=Sa(Q,ot,ne),W.return=Q,Q=W;break e}l(Q,ot);break}else s(Q,ot);ot=ot.sibling}ne.type===U?(W=Ss(ne.props.children,Q.mode,Te,ne.key),W.return=Q,Q=W):(Te=gu(ne.type,ne.key,ne.props,null,Q.mode,Te),Te.ref=Sa(Q,W,ne),Te.return=Q,Q=Te)}return w(Q);case P:e:{for(ot=ne.key;W!==null;){if(W.key===ot)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){l(Q,W.sibling),W=p(W,ne.children||[]),W.return=Q,Q=W;break e}else{l(Q,W);break}else s(Q,W);W=W.sibling}W=Ed(ne,Q.mode,Te),W.return=Q,Q=W}return w(Q);case ue:return ot=ne._init,an(Q,W,ot(ne._payload),Te)}if(At(ne))return Xe(Q,W,ne,Te);if(re(ne))return qe(Q,W,ne,Te);jl(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(l(Q,W.sibling),W=p(W,ne),W.return=Q,Q=W):(l(Q,W),W=Md(ne,Q.mode,Te),W.return=Q,Q=W),w(Q)):l(Q,W)}return an}var ro=kg(!0),zg=kg(!1),Yl=Ir(null),ql=null,so=null,Lf=null;function If(){Lf=so=ql=null}function Nf(i){var s=Yl.current;qt(Yl),i._currentValue=s}function Uf(i,s,l){for(;i!==null;){var c=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),i===l)break;i=i.return}}function oo(i,s){ql=i,Lf=so=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Zn=!0),i.firstContext=null)}function hi(i){var s=i._currentValue;if(Lf!==i)if(i={context:i,memoizedValue:s,next:null},so===null){if(ql===null)throw Error(t(308));so=i,ql.dependencies={lanes:0,firstContext:i}}else so=so.next=i;return s}var ps=null;function Ff(i){ps===null?ps=[i]:ps.push(i)}function Vg(i,s,l,c){var p=s.interleaved;return p===null?(l.next=l,Ff(s)):(l.next=p.next,p.next=l),s.interleaved=l,ur(i,c)}function ur(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Fr=!1;function Of(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function cr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Or(i,s,l){var c=i.updateQueue;if(c===null)return null;if(c=c.shared,(Dt&2)!==0){var p=c.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),c.pending=s,ur(i,l)}return p=c.interleaved,p===null?(s.next=s,Ff(c)):(s.next=p.next,p.next=s),c.interleaved=s,ur(i,l)}function $l(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,qn(i,l)}}function Gg(i,s){var l=i.updateQueue,c=i.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,_=null;if(l=l.firstBaseUpdate,l!==null){do{var w={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};_===null?p=_=w:_=_.next=w,l=l.next}while(l!==null);_===null?p=_=s:_=_.next=s}else p=_=s;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:_,shared:c.shared,effects:c.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Kl(i,s,l,c){var p=i.updateQueue;Fr=!1;var _=p.firstBaseUpdate,w=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var z=F,le=z.next;z.next=null,w===null?_=le:w.next=le,w=z;var ye=i.alternate;ye!==null&&(ye=ye.updateQueue,F=ye.lastBaseUpdate,F!==w&&(F===null?ye.firstBaseUpdate=le:F.next=le,ye.lastBaseUpdate=z))}if(_!==null){var Se=p.baseState;w=0,ye=le=z=null,F=_;do{var xe=F.lane,ke=F.eventTime;if((c&xe)===xe){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=i,qe=F;switch(xe=s,ke=l,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){Se=Xe.call(ke,Se,xe);break e}Se=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,xe=typeof Xe=="function"?Xe.call(ke,Se,xe):Xe,xe==null)break e;Se=se({},Se,xe);break e;case 2:Fr=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,xe=p.effects,xe===null?p.effects=[F]:xe.push(F))}else ke={eventTime:ke,lane:xe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ye===null?(le=ye=ke,z=Se):ye=ye.next=ke,w|=xe;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;xe=F,F=xe.next,xe.next=null,p.lastBaseUpdate=xe,p.shared.pending=null}}while(!0);if(ye===null&&(z=Se),p.baseState=z,p.firstBaseUpdate=le,p.lastBaseUpdate=ye,s=p.shared.interleaved,s!==null){p=s;do w|=p.lane,p=p.next;while(p!==s)}else _===null&&(p.shared.lanes=0);vs|=w,i.lanes=w,i.memoizedState=Se}}function Wg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var c=i[s],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Ma={},Vi=Ir(Ma),Ea=Ir(Ma),Ta=Ir(Ma);function ms(i){if(i===Ma)throw Error(t(174));return i}function Bf(i,s){switch(Wt(Ta,s),Wt(Ea,i),Wt(Vi,Ma),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:T(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=T(s,i)}qt(Vi),Wt(Vi,s)}function ao(){qt(Vi),qt(Ea),qt(Ta)}function Xg(i){ms(Ta.current);var s=ms(Vi.current),l=T(s,i.type);s!==l&&(Wt(Ea,i),Wt(Vi,l))}function kf(i){Ea.current===i&&(qt(Vi),qt(Ea))}var Qt=Ir(0);function Zl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var zf=[];function Vf(){for(var i=0;i<zf.length;i++)zf[i]._workInProgressVersionPrimary=null;zf.length=0}var Jl=C.ReactCurrentDispatcher,Hf=C.ReactCurrentBatchConfig,gs=0,en=null,dn=null,gn=null,Ql=!1,wa=!1,Aa=0,vE=0;function bn(){throw Error(t(321))}function Gf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!wi(i[l],s[l]))return!1;return!0}function Wf(i,s,l,c,p,_){if(gs=_,en=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Jl.current=i===null||i.memoizedState===null?SE:ME,i=l(c,p),wa){_=0;do{if(wa=!1,Aa=0,25<=_)throw Error(t(301));_+=1,gn=dn=null,s.updateQueue=null,Jl.current=EE,i=l(c,p)}while(wa)}if(Jl.current=nu,s=dn!==null&&dn.next!==null,gs=0,gn=dn=en=null,Ql=!1,s)throw Error(t(300));return i}function Xf(){var i=Aa!==0;return Aa=0,i}function Hi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?en.memoizedState=gn=i:gn=gn.next=i,gn}function pi(){if(dn===null){var i=en.alternate;i=i!==null?i.memoizedState:null}else i=dn.next;var s=gn===null?en.memoizedState:gn.next;if(s!==null)gn=s,dn=i;else{if(i===null)throw Error(t(310));dn=i,i={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},gn===null?en.memoizedState=gn=i:gn=gn.next=i}return gn}function Ca(i,s){return typeof s=="function"?s(i):s}function jf(i){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=dn,p=c.baseQueue,_=l.pending;if(_!==null){if(p!==null){var w=p.next;p.next=_.next,_.next=w}c.baseQueue=p=_,l.pending=null}if(p!==null){_=p.next,c=c.baseState;var F=w=null,z=null,le=_;do{var ye=le.lane;if((gs&ye)===ye)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:i(c,le.action);else{var Se={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(F=z=Se,w=c):z=z.next=Se,en.lanes|=ye,vs|=ye}le=le.next}while(le!==null&&le!==_);z===null?w=c:z.next=F,wi(c,s.memoizedState)||(Zn=!0),s.memoizedState=c,s.baseState=w,s.baseQueue=z,l.lastRenderedState=c}if(i=l.interleaved,i!==null){p=i;do _=p.lane,en.lanes|=_,vs|=_,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Yf(i){var s=pi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var c=l.dispatch,p=l.pending,_=s.memoizedState;if(p!==null){l.pending=null;var w=p=p.next;do _=i(_,w.action),w=w.next;while(w!==p);wi(_,s.memoizedState)||(Zn=!0),s.memoizedState=_,s.baseQueue===null&&(s.baseState=_),l.lastRenderedState=_}return[_,c]}function jg(){}function Yg(i,s){var l=en,c=pi(),p=s(),_=!wi(c.memoizedState,p);if(_&&(c.memoizedState=p,Zn=!0),c=c.queue,qf(Kg.bind(null,l,c,i),[i]),c.getSnapshot!==s||_||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,ba(9,$g.bind(null,l,c,p,s),void 0,null),vn===null)throw Error(t(349));(gs&30)!==0||qg(l,s,p)}return p}function qg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function $g(i,s,l,c){s.value=l,s.getSnapshot=c,Zg(s)&&Jg(i)}function Kg(i,s,l){return l(function(){Zg(s)&&Jg(i)})}function Zg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!wi(i,l)}catch{return!0}}function Jg(i){var s=ur(i,1);s!==null&&Pi(s,i,1,-1)}function Qg(i){var s=Hi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:i},s.queue=i,i=i.dispatch=yE.bind(null,en,i),[s.memoizedState,i]}function ba(i,s,l,c){return i={tag:i,create:s,destroy:l,deps:c,next:null},s=en.updateQueue,s===null?(s={lastEffect:null,stores:null},en.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(c=l.next,l.next=i,i.next=c,s.lastEffect=i)),i}function e0(){return pi().memoizedState}function eu(i,s,l,c){var p=Hi();en.flags|=i,p.memoizedState=ba(1|s,l,void 0,c===void 0?null:c)}function tu(i,s,l,c){var p=pi();c=c===void 0?null:c;var _=void 0;if(dn!==null){var w=dn.memoizedState;if(_=w.destroy,c!==null&&Gf(c,w.deps)){p.memoizedState=ba(s,l,_,c);return}}en.flags|=i,p.memoizedState=ba(1|s,l,_,c)}function t0(i,s){return eu(8390656,8,i,s)}function qf(i,s){return tu(2048,8,i,s)}function n0(i,s){return tu(4,2,i,s)}function i0(i,s){return tu(4,4,i,s)}function r0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function s0(i,s,l){return l=l!=null?l.concat([i]):null,tu(4,4,r0.bind(null,s,i),l)}function $f(){}function o0(i,s){var l=pi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Gf(s,c[1])?c[0]:(l.memoizedState=[i,s],i)}function a0(i,s){var l=pi();s=s===void 0?null:s;var c=l.memoizedState;return c!==null&&s!==null&&Gf(s,c[1])?c[0]:(i=i(),l.memoizedState=[i,s],i)}function l0(i,s,l){return(gs&21)===0?(i.baseState&&(i.baseState=!1,Zn=!0),i.memoizedState=l):(wi(l,s)||(l=Be(),en.lanes|=l,vs|=l,i.baseState=!0),s)}function _E(i,s){var l=St;St=l!==0&&4>l?l:4,i(!0);var c=Hf.transition;Hf.transition={};try{i(!1),s()}finally{St=l,Hf.transition=c}}function u0(){return pi().memoizedState}function xE(i,s,l){var c=Vr(i);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},c0(i))f0(s,l);else if(l=Vg(i,s,l,c),l!==null){var p=Vn();Pi(l,i,c,p),d0(l,s,c)}}function yE(i,s,l){var c=Vr(i),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(c0(i))f0(s,p);else{var _=i.alternate;if(i.lanes===0&&(_===null||_.lanes===0)&&(_=s.lastRenderedReducer,_!==null))try{var w=s.lastRenderedState,F=_(w,l);if(p.hasEagerState=!0,p.eagerState=F,wi(F,w)){var z=s.interleaved;z===null?(p.next=p,Ff(s)):(p.next=z.next,z.next=p),s.interleaved=p;return}}catch{}finally{}l=Vg(i,s,p,c),l!==null&&(p=Vn(),Pi(l,i,c,p),d0(l,s,c))}}function c0(i){var s=i.alternate;return i===en||s!==null&&s===en}function f0(i,s){wa=Ql=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function d0(i,s,l){if((l&4194240)!==0){var c=s.lanes;c&=i.pendingLanes,l|=c,s.lanes=l,qn(i,l)}}var nu={readContext:hi,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},SE={readContext:hi,useCallback:function(i,s){return Hi().memoizedState=[i,s===void 0?null:s],i},useContext:hi,useEffect:t0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,eu(4194308,4,r0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return eu(4194308,4,i,s)},useInsertionEffect:function(i,s){return eu(4,2,i,s)},useMemo:function(i,s){var l=Hi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var c=Hi();return s=l!==void 0?l(s):s,c.memoizedState=c.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},c.queue=i,i=i.dispatch=xE.bind(null,en,i),[c.memoizedState,i]},useRef:function(i){var s=Hi();return i={current:i},s.memoizedState=i},useState:Qg,useDebugValue:$f,useDeferredValue:function(i){return Hi().memoizedState=i},useTransition:function(){var i=Qg(!1),s=i[0];return i=_E.bind(null,i[1]),Hi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var c=en,p=Hi();if(Kt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),vn===null)throw Error(t(349));(gs&30)!==0||qg(c,s,l)}p.memoizedState=l;var _={value:l,getSnapshot:s};return p.queue=_,t0(Kg.bind(null,c,_,i),[i]),c.flags|=2048,ba(9,$g.bind(null,c,_,l,s),void 0,null),l},useId:function(){var i=Hi(),s=vn.identifierPrefix;if(Kt){var l=lr,c=ar;l=(c&~(1<<32-we(c)-1)).toString(32)+l,s=":"+s+"R"+l,l=Aa++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=vE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},ME={readContext:hi,useCallback:o0,useContext:hi,useEffect:qf,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:a0,useReducer:jf,useRef:e0,useState:function(){return jf(Ca)},useDebugValue:$f,useDeferredValue:function(i){var s=pi();return l0(s,dn.memoizedState,i)},useTransition:function(){var i=jf(Ca)[0],s=pi().memoizedState;return[i,s]},useMutableSource:jg,useSyncExternalStore:Yg,useId:u0,unstable_isNewReconciler:!1},EE={readContext:hi,useCallback:o0,useContext:hi,useEffect:qf,useImperativeHandle:s0,useInsertionEffect:n0,useLayoutEffect:i0,useMemo:a0,useReducer:Yf,useRef:e0,useState:function(){return Yf(Ca)},useDebugValue:$f,useDeferredValue:function(i){var s=pi();return dn===null?s.memoizedState=i:l0(s,dn.memoizedState,i)},useTransition:function(){var i=Yf(Ca)[0],s=pi().memoizedState;return[i,s]},useMutableSource:jg,useSyncExternalStore:Yg,useId:u0,unstable_isNewReconciler:!1};function Ci(i,s){if(i&&i.defaultProps){s=se({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Kf(i,s,l,c){s=i.memoizedState,l=l(c,s),l=l==null?s:se({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var iu={isMounted:function(i){return(i=i._reactInternals)?kn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var c=Vn(),p=Vr(i),_=cr(c,p);_.payload=s,l!=null&&(_.callback=l),s=Or(i,_,p),s!==null&&(Pi(s,i,p,c),$l(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var c=Vn(),p=Vr(i),_=cr(c,p);_.tag=1,_.payload=s,l!=null&&(_.callback=l),s=Or(i,_,p),s!==null&&(Pi(s,i,p,c),$l(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Vn(),c=Vr(i),p=cr(l,c);p.tag=2,s!=null&&(p.callback=s),s=Or(i,p,c),s!==null&&(Pi(s,i,c,l),$l(s,i,c))}};function h0(i,s,l,c,p,_,w){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(c,_,w):s.prototype&&s.prototype.isPureReactComponent?!pa(l,c)||!pa(p,_):!0}function p0(i,s,l){var c=!1,p=Nr,_=s.contextType;return typeof _=="object"&&_!==null?_=hi(_):(p=Kn(s)?fs:Cn.current,c=s.contextTypes,_=(c=c!=null)?eo(i,p):Nr),s=new s(l,_),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=iu,i.stateNode=s,s._reactInternals=i,c&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=_),s}function m0(i,s,l,c){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,c),s.state!==i&&iu.enqueueReplaceState(s,s.state,null)}function Zf(i,s,l,c){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},Of(i);var _=s.contextType;typeof _=="object"&&_!==null?p.context=hi(_):(_=Kn(s)?fs:Cn.current,p.context=eo(i,_)),p.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Kf(i,s,_,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&iu.enqueueReplaceState(p,p.state,null),Kl(i,l,p,c),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function lo(i,s){try{var l="",c=s;do l+=ze(c),c=c.return;while(c);var p=l}catch(_){p=`
Error generating stack: `+_.message+`
`+_.stack}return{value:i,source:s,stack:p,digest:null}}function Jf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Qf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var TE=typeof WeakMap=="function"?WeakMap:Map;function g0(i,s,l){l=cr(-1,l),l.tag=3,l.payload={element:null};var c=s.value;return l.callback=function(){cu||(cu=!0,pd=c),Qf(i,s)},l}function v0(i,s,l){l=cr(-1,l),l.tag=3;var c=i.type.getDerivedStateFromError;if(typeof c=="function"){var p=s.value;l.payload=function(){return c(p)},l.callback=function(){Qf(i,s)}}var _=i.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(l.callback=function(){Qf(i,s),typeof c!="function"&&(kr===null?kr=new Set([this]):kr.add(this));var w=s.stack;this.componentDidCatch(s.value,{componentStack:w!==null?w:""})}),l}function _0(i,s,l){var c=i.pingCache;if(c===null){c=i.pingCache=new TE;var p=new Set;c.set(s,p)}else p=c.get(s),p===void 0&&(p=new Set,c.set(s,p));p.has(l)||(p.add(l),i=BE.bind(null,i,s,l),s.then(i,i))}function x0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function y0(i,s,l,c,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=cr(-1,1),s.tag=2,Or(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var wE=C.ReactCurrentOwner,Zn=!1;function zn(i,s,l,c){s.child=i===null?zg(s,null,l,c):ro(s,i.child,l,c)}function S0(i,s,l,c,p){l=l.render;var _=s.ref;return oo(s,p),c=Wf(i,s,l,c,_,p),l=Xf(),i!==null&&!Zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,fr(i,s,p)):(Kt&&l&&Cf(s),s.flags|=1,zn(i,s,c,p),s.child)}function M0(i,s,l,c,p){if(i===null){var _=l.type;return typeof _=="function"&&!Sd(_)&&_.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=_,E0(i,s,_,c,p)):(i=gu(l.type,null,c,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(_=i.child,(i.lanes&p)===0){var w=_.memoizedProps;if(l=l.compare,l=l!==null?l:pa,l(w,c)&&i.ref===s.ref)return fr(i,s,p)}return s.flags|=1,i=Gr(_,c),i.ref=s.ref,i.return=s,s.child=i}function E0(i,s,l,c,p){if(i!==null){var _=i.memoizedProps;if(pa(_,c)&&i.ref===s.ref)if(Zn=!1,s.pendingProps=c=_,(i.lanes&p)!==0)(i.flags&131072)!==0&&(Zn=!0);else return s.lanes=i.lanes,fr(i,s,p)}return ed(i,s,l,c,p)}function T0(i,s,l){var c=s.pendingProps,p=c.children,_=i!==null?i.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(co,si),si|=l;else{if((l&1073741824)===0)return i=_!==null?_.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Wt(co,si),si|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:l,Wt(co,si),si|=c}else _!==null?(c=_.baseLanes|l,s.memoizedState=null):c=l,Wt(co,si),si|=c;return zn(i,s,p,l),s.child}function w0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function ed(i,s,l,c,p){var _=Kn(l)?fs:Cn.current;return _=eo(s,_),oo(s,p),l=Wf(i,s,l,c,_,p),c=Xf(),i!==null&&!Zn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,fr(i,s,p)):(Kt&&c&&Cf(s),s.flags|=1,zn(i,s,l,p),s.child)}function A0(i,s,l,c,p){if(Kn(l)){var _=!0;Vl(s)}else _=!1;if(oo(s,p),s.stateNode===null)su(i,s),p0(s,l,c),Zf(s,l,c,p),c=!0;else if(i===null){var w=s.stateNode,F=s.memoizedProps;w.props=F;var z=w.context,le=l.contextType;typeof le=="object"&&le!==null?le=hi(le):(le=Kn(l)?fs:Cn.current,le=eo(s,le));var ye=l.getDerivedStateFromProps,Se=typeof ye=="function"||typeof w.getSnapshotBeforeUpdate=="function";Se||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||z!==le)&&m0(s,w,c,le),Fr=!1;var xe=s.memoizedState;w.state=xe,Kl(s,c,w,p),z=s.memoizedState,F!==c||xe!==z||$n.current||Fr?(typeof ye=="function"&&(Kf(s,l,ye,c),z=s.memoizedState),(F=Fr||h0(s,l,F,c,xe,z,le))?(Se||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(s.flags|=4194308)):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=z),w.props=c,w.state=z,w.context=le,c=F):(typeof w.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{w=s.stateNode,Hg(i,s),F=s.memoizedProps,le=s.type===s.elementType?F:Ci(s.type,F),w.props=le,Se=s.pendingProps,xe=w.context,z=l.contextType,typeof z=="object"&&z!==null?z=hi(z):(z=Kn(l)?fs:Cn.current,z=eo(s,z));var ke=l.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==Se||xe!==z)&&m0(s,w,c,z),Fr=!1,xe=s.memoizedState,w.state=xe,Kl(s,c,w,p);var Xe=s.memoizedState;F!==Se||xe!==Xe||$n.current||Fr?(typeof ke=="function"&&(Kf(s,l,ke,c),Xe=s.memoizedState),(le=Fr||h0(s,l,le,c,xe,Xe,z)||!1)?(ye||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,z)),typeof w.componentDidUpdate=="function"&&(s.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=Xe),w.props=c,w.state=Xe,w.context=z,c=le):(typeof w.componentDidUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&xe===i.memoizedState||(s.flags|=1024),c=!1)}return td(i,s,l,c,_,p)}function td(i,s,l,c,p,_){w0(i,s);var w=(s.flags&128)!==0;if(!c&&!w)return p&&Dg(s,l,!1),fr(i,s,_);c=s.stateNode,wE.current=s;var F=w&&typeof l.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,i!==null&&w?(s.child=ro(s,i.child,null,_),s.child=ro(s,null,F,_)):zn(i,s,F,_),s.memoizedState=c.state,p&&Dg(s,l,!0),s.child}function C0(i){var s=i.stateNode;s.pendingContext?Rg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Rg(i,s.context,!1),Bf(i,s.containerInfo)}function b0(i,s,l,c,p){return io(),Df(p),s.flags|=256,zn(i,s,l,c),s.child}var nd={dehydrated:null,treeContext:null,retryLane:0};function id(i){return{baseLanes:i,cachePool:null,transitions:null}}function R0(i,s,l){var c=s.pendingProps,p=Qt.current,_=!1,w=(s.flags&128)!==0,F;if((F=w)||(F=i!==null&&i.memoizedState===null?!1:(p&2)!==0),F?(_=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Wt(Qt,p&1),i===null)return Pf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(w=c.children,i=c.fallback,_?(c=s.mode,_=s.child,w={mode:"hidden",children:w},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=w):_=vu(w,c,0,null),i=Ss(i,c,l,null),_.return=s,i.return=s,_.sibling=i,s.child=_,s.child.memoizedState=id(l),s.memoizedState=nd,i):rd(s,w));if(p=i.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return AE(i,s,w,c,F,p,l);if(_){_=c.fallback,w=s.mode,p=i.child,F=p.sibling;var z={mode:"hidden",children:c.children};return(w&1)===0&&s.child!==p?(c=s.child,c.childLanes=0,c.pendingProps=z,s.deletions=null):(c=Gr(p,z),c.subtreeFlags=p.subtreeFlags&14680064),F!==null?_=Gr(F,_):(_=Ss(_,w,l,null),_.flags|=2),_.return=s,c.return=s,c.sibling=_,s.child=c,c=_,_=s.child,w=i.child.memoizedState,w=w===null?id(l):{baseLanes:w.baseLanes|l,cachePool:null,transitions:w.transitions},_.memoizedState=w,_.childLanes=i.childLanes&~l,s.memoizedState=nd,c}return _=i.child,i=_.sibling,c=Gr(_,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=l),c.return=s,c.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=c,s.memoizedState=null,c}function rd(i,s){return s=vu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function ru(i,s,l,c){return c!==null&&Df(c),ro(s,i.child,null,l),i=rd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function AE(i,s,l,c,p,_,w){if(l)return s.flags&256?(s.flags&=-257,c=Jf(Error(t(422))),ru(i,s,w,c)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(_=c.fallback,p=s.mode,c=vu({mode:"visible",children:c.children},p,0,null),_=Ss(_,p,w,null),_.flags|=2,c.return=s,_.return=s,c.sibling=_,s.child=c,(s.mode&1)!==0&&ro(s,i.child,null,w),s.child.memoizedState=id(w),s.memoizedState=nd,_);if((s.mode&1)===0)return ru(i,s,w,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var F=c.dgst;return c=F,_=Error(t(419)),c=Jf(_,c,void 0),ru(i,s,w,c)}if(F=(w&i.childLanes)!==0,Zn||F){if(c=vn,c!==null){switch(w&-w){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|w))!==0?0:p,p!==0&&p!==_.retryLane&&(_.retryLane=p,ur(i,p),Pi(c,i,p,-1))}return yd(),c=Jf(Error(t(421))),ru(i,s,w,c)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=kE.bind(null,i),p._reactRetry=s,null):(i=_.treeContext,ri=Lr(p.nextSibling),ii=s,Kt=!0,Ai=null,i!==null&&(fi[di++]=ar,fi[di++]=lr,fi[di++]=ds,ar=i.id,lr=i.overflow,ds=s),s=rd(s,c.children),s.flags|=4096,s)}function P0(i,s,l){i.lanes|=s;var c=i.alternate;c!==null&&(c.lanes|=s),Uf(i.return,s,l)}function sd(i,s,l,c,p){var _=i.memoizedState;_===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(_.isBackwards=s,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=l,_.tailMode=p)}function D0(i,s,l){var c=s.pendingProps,p=c.revealOrder,_=c.tail;if(zn(i,s,c.children,l),c=Qt.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&P0(i,l,s);else if(i.tag===19)P0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}c&=1}if(Wt(Qt,c),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Zl(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),sd(s,!1,p,l,_);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Zl(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}sd(s,!0,l,null,_);break;case"together":sd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function su(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function fr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),vs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Gr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Gr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function CE(i,s,l){switch(s.tag){case 3:C0(s),io();break;case 5:Xg(s);break;case 1:Kn(s.type)&&Vl(s);break;case 4:Bf(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,p=s.memoizedProps.value;Wt(Yl,c._currentValue),c._currentValue=p;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Wt(Qt,Qt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?R0(i,s,l):(Wt(Qt,Qt.current&1),i=fr(i,s,l),i!==null?i.sibling:null);Wt(Qt,Qt.current&1);break;case 19:if(c=(l&s.childLanes)!==0,(i.flags&128)!==0){if(c)return D0(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Wt(Qt,Qt.current),c)break;return null;case 22:case 23:return s.lanes=0,T0(i,s,l)}return fr(i,s,l)}var L0,od,I0,N0;L0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},od=function(){},I0=function(i,s,l,c){var p=i.memoizedProps;if(p!==c){i=s.stateNode,ms(Vi.current);var _=null;switch(l){case"input":p=nt(i,p),c=nt(i,c),_=[];break;case"select":p=se({},p,{value:void 0}),c=se({},c,{value:void 0}),_=[];break;case"textarea":p=_t(i,p),c=_t(i,c),_=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(i.onclick=Bl)}$e(l,c);var w;l=null;for(le in p)if(!c.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var F=p[le];for(w in F)F.hasOwnProperty(w)&&(l||(l={}),l[w]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?_||(_=[]):(_=_||[]).push(le,null));for(le in c){var z=c[le];if(F=p!=null?p[le]:void 0,c.hasOwnProperty(le)&&z!==F&&(z!=null||F!=null))if(le==="style")if(F){for(w in F)!F.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(l||(l={}),l[w]="");for(w in z)z.hasOwnProperty(w)&&F[w]!==z[w]&&(l||(l={}),l[w]=z[w])}else l||(_||(_=[]),_.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(_=_||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Yt("scroll",i),_||F===z||(_=[])):(_=_||[]).push(le,z))}l&&(_=_||[]).push("style",l);var le=_;(s.updateQueue=le)&&(s.flags|=4)}},N0=function(i,s,l,c){l!==c&&(s.flags|=4)};function Ra(i,s){if(!Kt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:c.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,c=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=c,i.childLanes=l,s}function bE(i,s,l){var c=s.pendingProps;switch(bf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Kn(s.type)&&zl(),Rn(s),null;case 3:return c=s.stateNode,ao(),qt($n),qt(Cn),Vf(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(i===null||i.child===null)&&(Xl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ai!==null&&(vd(Ai),Ai=null))),od(i,s),Rn(s),null;case 5:kf(s);var p=ms(Ta.current);if(l=s.type,i!==null&&s.stateNode!=null)I0(i,s,l,c,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=ms(Vi.current),Xl(s)){c=s.stateNode,l=s.type;var _=s.memoizedProps;switch(c[zi]=s,c[xa]=_,i=(s.mode&1)!==0,l){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(p=0;p<ga.length;p++)Yt(ga[p],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":st(c,_),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Yt("invalid",c);break;case"textarea":H(c,_),Yt("invalid",c)}$e(l,_),p=null;for(var w in _)if(_.hasOwnProperty(w)){var F=_[w];w==="children"?typeof F=="string"?c.textContent!==F&&(_.suppressHydrationWarning!==!0&&Ol(c.textContent,F,i),p=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(_.suppressHydrationWarning!==!0&&Ol(c.textContent,F,i),p=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Yt("scroll",c)}switch(l){case"input":Me(c),Et(c,_,!0);break;case"textarea":Me(c),Tt(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=Bl)}c=p,s.updateQueue=c,c!==null&&(s.flags|=4)}else{w=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=N(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=w.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof c.is=="string"?i=w.createElement(l,{is:c.is}):(i=w.createElement(l),l==="select"&&(w=i,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):i=w.createElementNS(i,l),i[zi]=s,i[xa]=c,L0(i,s,!1,!1),s.stateNode=i;e:{switch(w=Le(l,c),l){case"dialog":Yt("cancel",i),Yt("close",i),p=c;break;case"iframe":case"object":case"embed":Yt("load",i),p=c;break;case"video":case"audio":for(p=0;p<ga.length;p++)Yt(ga[p],i);p=c;break;case"source":Yt("error",i),p=c;break;case"img":case"image":case"link":Yt("error",i),Yt("load",i),p=c;break;case"details":Yt("toggle",i),p=c;break;case"input":st(i,c),p=nt(i,c),Yt("invalid",i);break;case"option":p=c;break;case"select":i._wrapperState={wasMultiple:!!c.multiple},p=se({},c,{value:void 0}),Yt("invalid",i);break;case"textarea":H(i,c),p=_t(i,c),Yt("invalid",i);break;default:p=c}$e(l,p),F=p;for(_ in F)if(F.hasOwnProperty(_)){var z=F[_];_==="style"?ge(i,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ie(i,z)):_==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&ce(i,z):typeof z=="number"&&ce(i,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(o.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Yt("scroll",i):z!=null&&D(i,_,z,w))}switch(l){case"input":Me(i),Et(i,c,!1);break;case"textarea":Me(i),Tt(i);break;case"option":c.value!=null&&i.setAttribute("value",""+pe(c.value));break;case"select":i.multiple=!!c.multiple,_=c.value,_!=null?Ct(i,!!c.multiple,_,!1):c.defaultValue!=null&&Ct(i,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Bl)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)N0(i,s,i.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(l=ms(Ta.current),ms(Vi.current),Xl(s)){if(c=s.stateNode,l=s.memoizedProps,c[zi]=s,(_=c.nodeValue!==l)&&(i=ii,i!==null))switch(i.tag){case 3:Ol(c.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ol(c.nodeValue,l,(i.mode&1)!==0)}_&&(s.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[zi]=s,s.stateNode=c}return Rn(s),null;case 13:if(qt(Qt),c=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Kt&&ri!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Og(),io(),s.flags|=98560,_=!1;else if(_=Xl(s),c!==null&&c.dehydrated!==null){if(i===null){if(!_)throw Error(t(318));if(_=s.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[zi]=s}else io(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),_=!1}else Ai!==null&&(vd(Ai),Ai=null),_=!0;if(!_)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(c=c!==null,c!==(i!==null&&i.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Qt.current&1)!==0?hn===0&&(hn=3):yd())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return ao(),od(i,s),i===null&&va(s.stateNode.containerInfo),Rn(s),null;case 10:return Nf(s.type._context),Rn(s),null;case 17:return Kn(s.type)&&zl(),Rn(s),null;case 19:if(qt(Qt),_=s.memoizedState,_===null)return Rn(s),null;if(c=(s.flags&128)!==0,w=_.rendering,w===null)if(c)Ra(_,!1);else{if(hn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(w=Zl(i),w!==null){for(s.flags|=128,Ra(_,!1),c=w.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=l,l=s.child;l!==null;)_=l,i=c,_.flags&=14680066,w=_.alternate,w===null?(_.childLanes=0,_.lanes=i,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=w.childLanes,_.lanes=w.lanes,_.child=w.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=w.memoizedProps,_.memoizedState=w.memoizedState,_.updateQueue=w.updateQueue,_.type=w.type,i=w.dependencies,_.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Wt(Qt,Qt.current&1|2),s.child}i=i.sibling}_.tail!==null&&Jt()>fo&&(s.flags|=128,c=!0,Ra(_,!1),s.lanes=4194304)}else{if(!c)if(i=Zl(w),i!==null){if(s.flags|=128,c=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ra(_,!0),_.tail===null&&_.tailMode==="hidden"&&!w.alternate&&!Kt)return Rn(s),null}else 2*Jt()-_.renderingStartTime>fo&&l!==1073741824&&(s.flags|=128,c=!0,Ra(_,!1),s.lanes=4194304);_.isBackwards?(w.sibling=s.child,s.child=w):(l=_.last,l!==null?l.sibling=w:s.child=w,_.last=w)}return _.tail!==null?(s=_.tail,_.rendering=s,_.tail=s.sibling,_.renderingStartTime=Jt(),s.sibling=null,l=Qt.current,Wt(Qt,c?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return xd(),c=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(si&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function RE(i,s){switch(bf(s),s.tag){case 1:return Kn(s.type)&&zl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ao(),qt($n),qt(Cn),Vf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return kf(s),null;case 13:if(qt(Qt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));io()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return qt(Qt),null;case 4:return ao(),null;case 10:return Nf(s.type._context),null;case 22:case 23:return xd(),null;case 24:return null;default:return null}}var ou=!1,Pn=!1,PE=typeof WeakSet=="function"?WeakSet:Set,He=null;function uo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){rn(i,s,c)}else l.current=null}function ad(i,s,l){try{l()}catch(c){rn(i,s,c)}}var U0=!1;function DE(i,s){if(xf=Al,i=hg(),ff(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{l.nodeType,_.nodeType}catch{l=null;break e}var w=0,F=-1,z=-1,le=0,ye=0,Se=i,xe=null;t:for(;;){for(var ke;Se!==l||p!==0&&Se.nodeType!==3||(F=w+p),Se!==_||c!==0&&Se.nodeType!==3||(z=w+c),Se.nodeType===3&&(w+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)xe=Se,Se=ke;for(;;){if(Se===i)break t;if(xe===l&&++le===p&&(F=w),xe===_&&++ye===c&&(z=w),(ke=Se.nextSibling)!==null)break;Se=xe,xe=Se.parentNode}Se=ke}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(yf={focusedElem:i,selectionRange:l},Al=!1,He=s;He!==null;)if(s=He,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,He=i;else for(;He!==null;){s=He;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,an=Xe.memoizedState,Q=s.stateNode,W=Q.getSnapshotBeforeUpdate(s.elementType===s.type?qe:Ci(s.type,qe),an);Q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=s.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){rn(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,He=i;break}He=s.return}return Xe=U0,U0=!1,Xe}function Pa(i,s,l){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&i)===i){var _=p.destroy;p.destroy=void 0,_!==void 0&&ad(s,l,_)}p=p.next}while(p!==c)}}function au(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var c=l.create;l.destroy=c()}l=l.next}while(l!==s)}}function ld(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function F0(i){var s=i.alternate;s!==null&&(i.alternate=null,F0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[zi],delete s[xa],delete s[Tf],delete s[hE],delete s[pE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function O0(i){return i.tag===5||i.tag===3||i.tag===4}function B0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||O0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function ud(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Bl));else if(c!==4&&(i=i.child,i!==null))for(ud(i,s,l),i=i.sibling;i!==null;)ud(i,s,l),i=i.sibling}function cd(i,s,l){var c=i.tag;if(c===5||c===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(c!==4&&(i=i.child,i!==null))for(cd(i,s,l),i=i.sibling;i!==null;)cd(i,s,l),i=i.sibling}var Mn=null,bi=!1;function Br(i,s,l){for(l=l.child;l!==null;)k0(i,s,l),l=l.sibling}function k0(i,s,l){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ee,l)}catch{}switch(l.tag){case 5:Pn||uo(l,s);case 6:var c=Mn,p=bi;Mn=null,Br(i,s,l),Mn=c,bi=p,Mn!==null&&(bi?(i=Mn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Mn.removeChild(l.stateNode));break;case 18:Mn!==null&&(bi?(i=Mn,l=l.stateNode,i.nodeType===8?Ef(i.parentNode,l):i.nodeType===1&&Ef(i,l),la(i)):Ef(Mn,l.stateNode));break;case 4:c=Mn,p=bi,Mn=l.stateNode.containerInfo,bi=!0,Br(i,s,l),Mn=c,bi=p;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var _=p,w=_.destroy;_=_.tag,w!==void 0&&((_&2)!==0||(_&4)!==0)&&ad(l,s,w),p=p.next}while(p!==c)}Br(i,s,l);break;case 1:if(!Pn&&(uo(l,s),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(F){rn(l,s,F)}Br(i,s,l);break;case 21:Br(i,s,l);break;case 22:l.mode&1?(Pn=(c=Pn)||l.memoizedState!==null,Br(i,s,l),Pn=c):Br(i,s,l);break;default:Br(i,s,l)}}function z0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new PE),s.forEach(function(c){var p=zE.bind(null,i,c);l.has(c)||(l.add(c),c.then(p,p))})}}function Ri(i,s){var l=s.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var _=i,w=s,F=w;e:for(;F!==null;){switch(F.tag){case 5:Mn=F.stateNode,bi=!1;break e;case 3:Mn=F.stateNode.containerInfo,bi=!0;break e;case 4:Mn=F.stateNode.containerInfo,bi=!0;break e}F=F.return}if(Mn===null)throw Error(t(160));k0(_,w,p),Mn=null,bi=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(le){rn(p,s,le)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)V0(s,i),s=s.sibling}function V0(i,s){var l=i.alternate,c=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ri(s,i),Gi(i),c&4){try{Pa(3,i,i.return),au(3,i)}catch(qe){rn(i,i.return,qe)}try{Pa(5,i,i.return)}catch(qe){rn(i,i.return,qe)}}break;case 1:Ri(s,i),Gi(i),c&512&&l!==null&&uo(l,l.return);break;case 5:if(Ri(s,i),Gi(i),c&512&&l!==null&&uo(l,l.return),i.flags&32){var p=i.stateNode;try{ce(p,"")}catch(qe){rn(i,i.return,qe)}}if(c&4&&(p=i.stateNode,p!=null)){var _=i.memoizedProps,w=l!==null?l.memoizedProps:_,F=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{F==="input"&&_.type==="radio"&&_.name!=null&&rt(p,_),Le(F,w);var le=Le(F,_);for(w=0;w<z.length;w+=2){var ye=z[w],Se=z[w+1];ye==="style"?ge(p,Se):ye==="dangerouslySetInnerHTML"?ie(p,Se):ye==="children"?ce(p,Se):D(p,ye,Se,le)}switch(F){case"input":yt(p,_);break;case"textarea":Xt(p,_);break;case"select":var xe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!_.multiple;var ke=_.value;ke!=null?Ct(p,!!_.multiple,ke,!1):xe!==!!_.multiple&&(_.defaultValue!=null?Ct(p,!!_.multiple,_.defaultValue,!0):Ct(p,!!_.multiple,_.multiple?[]:"",!1))}p[xa]=_}catch(qe){rn(i,i.return,qe)}}break;case 6:if(Ri(s,i),Gi(i),c&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,_=i.memoizedProps;try{p.nodeValue=_}catch(qe){rn(i,i.return,qe)}}break;case 3:if(Ri(s,i),Gi(i),c&4&&l!==null&&l.memoizedState.isDehydrated)try{la(s.containerInfo)}catch(qe){rn(i,i.return,qe)}break;case 4:Ri(s,i),Gi(i);break;case 13:Ri(s,i),Gi(i),p=i.child,p.flags&8192&&(_=p.memoizedState!==null,p.stateNode.isHidden=_,!_||p.alternate!==null&&p.alternate.memoizedState!==null||(hd=Jt())),c&4&&z0(i);break;case 22:if(ye=l!==null&&l.memoizedState!==null,i.mode&1?(Pn=(le=Pn)||ye,Ri(s,i),Pn=le):Ri(s,i),Gi(i),c&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!ye&&(i.mode&1)!==0)for(He=i,ye=i.child;ye!==null;){for(Se=He=ye;He!==null;){switch(xe=He,ke=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:uo(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,l=xe.return;try{s=c,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(qe){rn(c,l,qe)}}break;case 5:uo(xe,xe.return);break;case 22:if(xe.memoizedState!==null){W0(Se);continue}}ke!==null?(ke.return=xe,He=ke):W0(Se)}ye=ye.sibling}e:for(ye=null,Se=i;;){if(Se.tag===5){if(ye===null){ye=Se;try{p=Se.stateNode,le?(_=p.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(F=Se.stateNode,z=Se.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=de("display",w))}catch(qe){rn(i,i.return,qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(qe){rn(i,i.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ri(s,i),Gi(i),c&4&&z0(i);break;case 21:break;default:Ri(s,i),Gi(i)}}function Gi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(O0(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(ce(p,""),c.flags&=-33);var _=B0(i);cd(i,_,p);break;case 3:case 4:var w=c.stateNode.containerInfo,F=B0(i);ud(i,F,w);break;default:throw Error(t(161))}}catch(z){rn(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function LE(i,s,l){He=i,H0(i)}function H0(i,s,l){for(var c=(i.mode&1)!==0;He!==null;){var p=He,_=p.child;if(p.tag===22&&c){var w=p.memoizedState!==null||ou;if(!w){var F=p.alternate,z=F!==null&&F.memoizedState!==null||Pn;F=ou;var le=Pn;if(ou=w,(Pn=z)&&!le)for(He=p;He!==null;)w=He,z=w.child,w.tag===22&&w.memoizedState!==null?X0(p):z!==null?(z.return=w,He=z):X0(p);for(;_!==null;)He=_,H0(_),_=_.sibling;He=p,ou=F,Pn=le}G0(i)}else(p.subtreeFlags&8772)!==0&&_!==null?(_.return=p,He=_):G0(i)}}function G0(i){for(;He!==null;){var s=He;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Pn||au(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Pn)if(l===null)c.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:Ci(s.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=s.updateQueue;_!==null&&Wg(s,_,c);break;case 3:var w=s.updateQueue;if(w!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Wg(s,w,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var le=s.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&la(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||s.flags&512&&ld(s)}catch(xe){rn(s,s.return,xe)}}if(s===i){He=null;break}if(l=s.sibling,l!==null){l.return=s.return,He=l;break}He=s.return}}function W0(i){for(;He!==null;){var s=He;if(s===i){He=null;break}var l=s.sibling;if(l!==null){l.return=s.return,He=l;break}He=s.return}}function X0(i){for(;He!==null;){var s=He;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{au(4,s)}catch(z){rn(s,l,z)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var p=s.return;try{c.componentDidMount()}catch(z){rn(s,p,z)}}var _=s.return;try{ld(s)}catch(z){rn(s,_,z)}break;case 5:var w=s.return;try{ld(s)}catch(z){rn(s,w,z)}}}catch(z){rn(s,s.return,z)}if(s===i){He=null;break}var F=s.sibling;if(F!==null){F.return=s.return,He=F;break}He=s.return}}var IE=Math.ceil,lu=C.ReactCurrentDispatcher,fd=C.ReactCurrentOwner,mi=C.ReactCurrentBatchConfig,Dt=0,vn=null,cn=null,En=0,si=0,co=Ir(0),hn=0,Da=null,vs=0,uu=0,dd=0,La=null,Jn=null,hd=0,fo=1/0,dr=null,cu=!1,pd=null,kr=null,fu=!1,zr=null,du=0,Ia=0,md=null,hu=-1,pu=0;function Vn(){return(Dt&6)!==0?Jt():hu!==-1?hu:hu=Jt()}function Vr(i){return(i.mode&1)===0?1:(Dt&2)!==0&&En!==0?En&-En:gE.transition!==null?(pu===0&&(pu=Be()),pu):(i=St,i!==0||(i=window.event,i=i===void 0?16:Ym(i.type)),i)}function Pi(i,s,l,c){if(50<Ia)throw Ia=0,md=null,Error(t(185));xt(i,l,c),((Dt&2)===0||i!==vn)&&(i===vn&&((Dt&2)===0&&(uu|=l),hn===4&&Hr(i,En)),Qn(i,c),l===1&&Dt===0&&(s.mode&1)===0&&(fo=Jt()+500,Hl&&Ur()))}function Qn(i,s){var l=i.callbackNode;Bt(i,s);var c=Gt(i,i===vn?En:0);if(c===0)l!==null&&na(l),i.callbackNode=null,i.callbackPriority=0;else if(s=c&-c,i.callbackPriority!==s){if(l!=null&&na(l),s===1)i.tag===0?mE(Y0.bind(null,i)):Lg(Y0.bind(null,i)),fE(function(){(Dt&6)===0&&Ur()}),l=null;else{switch(rr(c)){case 1:l=ia;break;case 4:l=b;break;case 16:l=Y;break;case 536870912:l=te;break;default:l=Y}l=tv(l,j0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function j0(i,s){if(hu=-1,pu=0,(Dt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(ho()&&i.callbackNode!==l)return null;var c=Gt(i,i===vn?En:0);if(c===0)return null;if((c&30)!==0||(c&i.expiredLanes)!==0||s)s=mu(i,c);else{s=c;var p=Dt;Dt|=2;var _=$0();(vn!==i||En!==s)&&(dr=null,fo=Jt()+500,xs(i,s));do try{FE();break}catch(F){q0(i,F)}while(!0);If(),lu.current=_,Dt=p,cn!==null?s=0:(vn=null,En=0,s=hn)}if(s!==0){if(s===2&&(p=un(i),p!==0&&(c=p,s=gd(i,p))),s===1)throw l=Da,xs(i,0),Hr(i,c),Qn(i,Jt()),l;if(s===6)Hr(i,c);else{if(p=i.current.alternate,(c&30)===0&&!NE(p)&&(s=mu(i,c),s===2&&(_=un(i),_!==0&&(c=_,s=gd(i,_))),s===1))throw l=Da,xs(i,0),Hr(i,c),Qn(i,Jt()),l;switch(i.finishedWork=p,i.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ys(i,Jn,dr);break;case 3:if(Hr(i,c),(c&130023424)===c&&(s=hd+500-Jt(),10<s)){if(Gt(i,0)!==0)break;if(p=i.suspendedLanes,(p&c)!==c){Vn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Mf(ys.bind(null,i,Jn,dr),s);break}ys(i,Jn,dr);break;case 4:if(Hr(i,c),(c&4194240)===c)break;for(s=i.eventTimes,p=-1;0<c;){var w=31-we(c);_=1<<w,w=s[w],w>p&&(p=w),c&=~_}if(c=p,c=Jt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*IE(c/1960))-c,10<c){i.timeoutHandle=Mf(ys.bind(null,i,Jn,dr),c);break}ys(i,Jn,dr);break;case 5:ys(i,Jn,dr);break;default:throw Error(t(329))}}}return Qn(i,Jt()),i.callbackNode===l?j0.bind(null,i):null}function gd(i,s){var l=La;return i.current.memoizedState.isDehydrated&&(xs(i,s).flags|=256),i=mu(i,s),i!==2&&(s=Jn,Jn=l,s!==null&&vd(s)),i}function vd(i){Jn===null?Jn=i:Jn.push.apply(Jn,i)}function NE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],_=p.getSnapshot;p=p.value;try{if(!wi(_(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Hr(i,s){for(s&=~dd,s&=~uu,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-we(s),c=1<<l;i[l]=-1,s&=~c}}function Y0(i){if((Dt&6)!==0)throw Error(t(327));ho();var s=Gt(i,0);if((s&1)===0)return Qn(i,Jt()),null;var l=mu(i,s);if(i.tag!==0&&l===2){var c=un(i);c!==0&&(s=c,l=gd(i,c))}if(l===1)throw l=Da,xs(i,0),Hr(i,s),Qn(i,Jt()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ys(i,Jn,dr),Qn(i,Jt()),null}function _d(i,s){var l=Dt;Dt|=1;try{return i(s)}finally{Dt=l,Dt===0&&(fo=Jt()+500,Hl&&Ur())}}function _s(i){zr!==null&&zr.tag===0&&(Dt&6)===0&&ho();var s=Dt;Dt|=1;var l=mi.transition,c=St;try{if(mi.transition=null,St=1,i)return i()}finally{St=c,mi.transition=l,Dt=s,(Dt&6)===0&&Ur()}}function xd(){si=co.current,qt(co)}function xs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,cE(l)),cn!==null)for(l=cn.return;l!==null;){var c=l;switch(bf(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&zl();break;case 3:ao(),qt($n),qt(Cn),Vf();break;case 5:kf(c);break;case 4:ao();break;case 13:qt(Qt);break;case 19:qt(Qt);break;case 10:Nf(c.type._context);break;case 22:case 23:xd()}l=l.return}if(vn=i,cn=i=Gr(i.current,null),En=si=s,hn=0,Da=null,dd=uu=vs=0,Jn=La=null,ps!==null){for(s=0;s<ps.length;s++)if(l=ps[s],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,_=l.pending;if(_!==null){var w=_.next;_.next=p,c.next=w}l.pending=c}ps=null}return i}function q0(i,s){do{var l=cn;try{if(If(),Jl.current=nu,Ql){for(var c=en.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Ql=!1}if(gs=0,gn=dn=en=null,wa=!1,Aa=0,fd.current=null,l===null||l.return===null){hn=1,Da=s,cn=null;break}e:{var _=i,w=l.return,F=l,z=s;if(s=En,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,ye=F,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=x0(w);if(ke!==null){ke.flags&=-257,y0(ke,w,F,_,s),ke.mode&1&&_0(_,le,s),s=ke,z=le;var Xe=s.updateQueue;if(Xe===null){var qe=new Set;qe.add(z),s.updateQueue=qe}else Xe.add(z);break e}else{if((s&1)===0){_0(_,le,s),yd();break e}z=Error(t(426))}}else if(Kt&&F.mode&1){var an=x0(w);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),y0(an,w,F,_,s),Df(lo(z,F));break e}}_=z=lo(z,F),hn!==4&&(hn=2),La===null?La=[_]:La.push(_),_=w;do{switch(_.tag){case 3:_.flags|=65536,s&=-s,_.lanes|=s;var Q=g0(_,z,s);Gg(_,Q);break e;case 1:F=z;var W=_.type,ne=_.stateNode;if((_.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(kr===null||!kr.has(ne)))){_.flags|=65536,s&=-s,_.lanes|=s;var Te=v0(_,F,s);Gg(_,Te);break e}}_=_.return}while(_!==null)}Z0(l)}catch(Ze){s=Ze,cn===l&&l!==null&&(cn=l=l.return);continue}break}while(!0)}function $0(){var i=lu.current;return lu.current=nu,i===null?nu:i}function yd(){(hn===0||hn===3||hn===2)&&(hn=4),vn===null||(vs&268435455)===0&&(uu&268435455)===0||Hr(vn,En)}function mu(i,s){var l=Dt;Dt|=2;var c=$0();(vn!==i||En!==s)&&(dr=null,xs(i,s));do try{UE();break}catch(p){q0(i,p)}while(!0);if(If(),Dt=l,lu.current=c,cn!==null)throw Error(t(261));return vn=null,En=0,hn}function UE(){for(;cn!==null;)K0(cn)}function FE(){for(;cn!==null&&!Tl();)K0(cn)}function K0(i){var s=ev(i.alternate,i,si);i.memoizedProps=i.pendingProps,s===null?Z0(i):cn=s,fd.current=null}function Z0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=bE(l,s,si),l!==null){cn=l;return}}else{if(l=RE(l,s),l!==null){l.flags&=32767,cn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{hn=6,cn=null;return}}if(s=s.sibling,s!==null){cn=s;return}cn=s=i}while(s!==null);hn===0&&(hn=5)}function ys(i,s,l){var c=St,p=mi.transition;try{mi.transition=null,St=1,OE(i,s,l,c)}finally{mi.transition=p,St=c}return null}function OE(i,s,l,c){do ho();while(zr!==null);if((Dt&6)!==0)throw Error(t(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var _=l.lanes|l.childLanes;if(Yn(i,_),i===vn&&(cn=vn=null,En=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||fu||(fu=!0,tv(Y,function(){return ho(),null})),_=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||_){_=mi.transition,mi.transition=null;var w=St;St=1;var F=Dt;Dt|=4,fd.current=null,DE(i,l),V0(l,i),iE(yf),Al=!!xf,yf=xf=null,i.current=l,LE(l),Zc(),Dt=F,St=w,mi.transition=_}else i.current=l;if(fu&&(fu=!1,zr=i,du=p),_=i.pendingLanes,_===0&&(kr=null),Ve(l.stateNode),Qn(i,Jt()),s!==null)for(c=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(cu)throw cu=!1,i=pd,pd=null,i;return(du&1)!==0&&i.tag!==0&&ho(),_=i.pendingLanes,(_&1)!==0?i===md?Ia++:(Ia=0,md=i):Ia=0,Ur(),null}function ho(){if(zr!==null){var i=rr(du),s=mi.transition,l=St;try{if(mi.transition=null,St=16>i?16:i,zr===null)var c=!1;else{if(i=zr,zr=null,du=0,(Dt&6)!==0)throw Error(t(331));var p=Dt;for(Dt|=4,He=i.current;He!==null;){var _=He,w=_.child;if((He.flags&16)!==0){var F=_.deletions;if(F!==null){for(var z=0;z<F.length;z++){var le=F[z];for(He=le;He!==null;){var ye=He;switch(ye.tag){case 0:case 11:case 15:Pa(8,ye,_)}var Se=ye.child;if(Se!==null)Se.return=ye,He=Se;else for(;He!==null;){ye=He;var xe=ye.sibling,ke=ye.return;if(F0(ye),ye===le){He=null;break}if(xe!==null){xe.return=ke,He=xe;break}He=ke}}}var Xe=_.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var an=qe.sibling;qe.sibling=null,qe=an}while(qe!==null)}}He=_}}if((_.subtreeFlags&2064)!==0&&w!==null)w.return=_,He=w;else e:for(;He!==null;){if(_=He,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:Pa(9,_,_.return)}var Q=_.sibling;if(Q!==null){Q.return=_.return,He=Q;break e}He=_.return}}var W=i.current;for(He=W;He!==null;){w=He;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,He=ne;else e:for(w=W;He!==null;){if(F=He,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:au(9,F)}}catch(Ze){rn(F,F.return,Ze)}if(F===w){He=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,He=Te;break e}He=F.return}}if(Dt=p,Ur(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ee,i)}catch{}c=!0}return c}finally{St=l,mi.transition=s}}return!1}function J0(i,s,l){s=lo(l,s),s=g0(i,s,1),i=Or(i,s,1),s=Vn(),i!==null&&(xt(i,1,s),Qn(i,s))}function rn(i,s,l){if(i.tag===3)J0(i,i,l);else for(;s!==null;){if(s.tag===3){J0(s,i,l);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(kr===null||!kr.has(c))){i=lo(l,i),i=v0(s,i,1),s=Or(s,i,1),i=Vn(),s!==null&&(xt(s,1,i),Qn(s,i));break}}s=s.return}}function BE(i,s,l){var c=i.pingCache;c!==null&&c.delete(s),s=Vn(),i.pingedLanes|=i.suspendedLanes&l,vn===i&&(En&l)===l&&(hn===4||hn===3&&(En&130023424)===En&&500>Jt()-hd?xs(i,0):dd|=l),Qn(i,s)}function Q0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ke,Ke<<=1,(Ke&130023424)===0&&(Ke=4194304)));var l=Vn();i=ur(i,s),i!==null&&(xt(i,s,l),Qn(i,l))}function kE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Q0(i,l)}function zE(i,s){var l=0;switch(i.tag){case 13:var c=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=i.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Q0(i,l)}var ev;ev=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||$n.current)Zn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Zn=!1,CE(i,s,l);Zn=(i.flags&131072)!==0}else Zn=!1,Kt&&(s.flags&1048576)!==0&&Ig(s,Wl,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;su(i,s),i=s.pendingProps;var p=eo(s,Cn.current);oo(s,l),p=Wf(null,s,c,i,p,l);var _=Xf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kn(c)?(_=!0,Vl(s)):_=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Of(s),p.updater=iu,s.stateNode=p,p._reactInternals=s,Zf(s,c,i,l),s=td(null,s,c,!0,_,l)):(s.tag=0,Kt&&_&&Cf(s),zn(null,s,p,l),s=s.child),s;case 16:c=s.elementType;e:{switch(su(i,s),i=s.pendingProps,p=c._init,c=p(c._payload),s.type=c,p=s.tag=HE(c),i=Ci(c,i),p){case 0:s=ed(null,s,c,i,l);break e;case 1:s=A0(null,s,c,i,l);break e;case 11:s=S0(null,s,c,i,l);break e;case 14:s=M0(null,s,c,Ci(c.type,i),l);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ci(c,p),ed(i,s,c,p,l);case 1:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ci(c,p),A0(i,s,c,p,l);case 3:e:{if(C0(s),i===null)throw Error(t(387));c=s.pendingProps,_=s.memoizedState,p=_.element,Hg(i,s),Kl(s,c,null,l);var w=s.memoizedState;if(c=w.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},s.updateQueue.baseState=_,s.memoizedState=_,s.flags&256){p=lo(Error(t(423)),s),s=b0(i,s,c,l,p);break e}else if(c!==p){p=lo(Error(t(424)),s),s=b0(i,s,c,l,p);break e}else for(ri=Lr(s.stateNode.containerInfo.firstChild),ii=s,Kt=!0,Ai=null,l=zg(s,null,c,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(io(),c===p){s=fr(i,s,l);break e}zn(i,s,c,l)}s=s.child}return s;case 5:return Xg(s),i===null&&Pf(s),c=s.type,p=s.pendingProps,_=i!==null?i.memoizedProps:null,w=p.children,Sf(c,p)?w=null:_!==null&&Sf(c,_)&&(s.flags|=32),w0(i,s),zn(i,s,w,l),s.child;case 6:return i===null&&Pf(s),null;case 13:return R0(i,s,l);case 4:return Bf(s,s.stateNode.containerInfo),c=s.pendingProps,i===null?s.child=ro(s,null,c,l):zn(i,s,c,l),s.child;case 11:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ci(c,p),S0(i,s,c,p,l);case 7:return zn(i,s,s.pendingProps,l),s.child;case 8:return zn(i,s,s.pendingProps.children,l),s.child;case 12:return zn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(c=s.type._context,p=s.pendingProps,_=s.memoizedProps,w=p.value,Wt(Yl,c._currentValue),c._currentValue=w,_!==null)if(wi(_.value,w)){if(_.children===p.children&&!$n.current){s=fr(i,s,l);break e}}else for(_=s.child,_!==null&&(_.return=s);_!==null;){var F=_.dependencies;if(F!==null){w=_.child;for(var z=F.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=cr(-1,l&-l),z.tag=2;var le=_.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),le.pending=z}}_.lanes|=l,z=_.alternate,z!==null&&(z.lanes|=l),Uf(_.return,l,s),F.lanes|=l;break}z=z.next}}else if(_.tag===10)w=_.type===s.type?null:_.child;else if(_.tag===18){if(w=_.return,w===null)throw Error(t(341));w.lanes|=l,F=w.alternate,F!==null&&(F.lanes|=l),Uf(w,l,s),w=_.sibling}else w=_.child;if(w!==null)w.return=_;else for(w=_;w!==null;){if(w===s){w=null;break}if(_=w.sibling,_!==null){_.return=w.return,w=_;break}w=w.return}_=w}zn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,c=s.pendingProps.children,oo(s,l),p=hi(p),c=c(p),s.flags|=1,zn(i,s,c,l),s.child;case 14:return c=s.type,p=Ci(c,s.pendingProps),p=Ci(c.type,p),M0(i,s,c,p,l);case 15:return E0(i,s,s.type,s.pendingProps,l);case 17:return c=s.type,p=s.pendingProps,p=s.elementType===c?p:Ci(c,p),su(i,s),s.tag=1,Kn(c)?(i=!0,Vl(s)):i=!1,oo(s,l),p0(s,c,p),Zf(s,c,p,l),td(null,s,c,!0,i,l);case 19:return D0(i,s,l);case 22:return T0(i,s,l)}throw Error(t(156,s.tag))};function tv(i,s){return ls(i,s)}function VE(i,s,l,c){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(i,s,l,c){return new VE(i,s,l,c)}function Sd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function HE(i){if(typeof i=="function")return Sd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===J)return 14}return 2}function Gr(i,s){var l=i.alternate;return l===null?(l=gi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function gu(i,s,l,c,p,_){var w=2;if(c=i,typeof i=="function")Sd(i)&&(w=1);else if(typeof i=="string")w=5;else e:switch(i){case U:return Ss(l.children,p,_,s);case E:w=8,p|=8;break;case I:return i=gi(12,l,s,p|2),i.elementType=I,i.lanes=_,i;case fe:return i=gi(13,l,s,p),i.elementType=fe,i.lanes=_,i;case he:return i=gi(19,l,s,p),i.elementType=he,i.lanes=_,i;case X:return vu(l,p,_,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:w=10;break e;case k:w=9;break e;case $:w=11;break e;case J:w=14;break e;case ue:w=16,c=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=gi(w,l,s,p),s.elementType=i,s.type=c,s.lanes=_,s}function Ss(i,s,l,c){return i=gi(7,i,c,s),i.lanes=l,i}function vu(i,s,l,c){return i=gi(22,i,c,s),i.elementType=X,i.lanes=l,i.stateNode={isHidden:!1},i}function Md(i,s,l){return i=gi(6,i,null,s),i.lanes=l,i}function Ed(i,s,l){return s=gi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function GE(i,s,l,c,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Td(i,s,l,c,p,_,w,F,z){return i=new GE(i,s,l,F,z),s===1?(s=1,_===!0&&(s|=8)):s=0,_=gi(3,null,null,s),i.current=_,_.stateNode=i,_.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Of(_),i}function WE(i,s,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:i,containerInfo:s,implementation:l}}function nv(i){if(!i)return Nr;i=i._reactInternals;e:{if(kn(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Kn(l))return Pg(i,l,s)}return s}function iv(i,s,l,c,p,_,w,F,z){return i=Td(l,c,!0,i,p,_,w,F,z),i.context=nv(null),l=i.current,c=Vn(),p=Vr(l),_=cr(c,p),_.callback=s??null,Or(l,_,p),i.current.lanes=p,xt(i,p,c),Qn(i,c),i}function _u(i,s,l,c){var p=s.current,_=Vn(),w=Vr(p);return l=nv(l),s.context===null?s.context=l:s.pendingContext=l,s=cr(_,w),s.payload={element:i},c=c===void 0?null:c,c!==null&&(s.callback=c),i=Or(p,s,w),i!==null&&(Pi(i,p,w,_),$l(i,p,w)),w}function xu(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function rv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function wd(i,s){rv(i,s),(i=i.alternate)&&rv(i,s)}function XE(){return null}var sv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Ad(i){this._internalRoot=i}yu.prototype.render=Ad.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));_u(i,s,null,null)},yu.prototype.unmount=Ad.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;_s(function(){_u(null,i,null,null)}),s[sr]=null}};function yu(i){this._internalRoot=i}yu.prototype.unstable_scheduleHydration=function(i){if(i){var s=kt();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Rr.length&&s!==0&&s<Rr[l].priority;l++);Rr.splice(l,0,i),l===0&&Xm(i)}};function Cd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Su(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function ov(){}function jE(i,s,l,c,p){if(p){if(typeof c=="function"){var _=c;c=function(){var le=xu(w);_.call(le)}}var w=iv(s,c,i,0,null,!1,!1,"",ov);return i._reactRootContainer=w,i[sr]=w.current,va(i.nodeType===8?i.parentNode:i),_s(),w}for(;p=i.lastChild;)i.removeChild(p);if(typeof c=="function"){var F=c;c=function(){var le=xu(z);F.call(le)}}var z=Td(i,0,!1,null,null,!1,!1,"",ov);return i._reactRootContainer=z,i[sr]=z.current,va(i.nodeType===8?i.parentNode:i),_s(function(){_u(s,z,l,c)}),z}function Mu(i,s,l,c,p){var _=l._reactRootContainer;if(_){var w=_;if(typeof p=="function"){var F=p;p=function(){var z=xu(w);F.call(z)}}_u(s,w,i,p)}else w=jE(l,s,i,p,c);return xu(w)}Ft=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Rt(s.pendingLanes);l!==0&&(qn(s,l|1),Qn(s,Jt()),(Dt&6)===0&&(fo=Jt()+500,Ur()))}break;case 13:_s(function(){var c=ur(i,1);if(c!==null){var p=Vn();Pi(c,i,1,p)}}),wd(i,1)}},jt=function(i){if(i.tag===13){var s=ur(i,134217728);if(s!==null){var l=Vn();Pi(s,i,134217728,l)}wd(i,134217728)}},Ei=function(i){if(i.tag===13){var s=Vr(i),l=ur(i,s);if(l!==null){var c=Vn();Pi(l,i,s,c)}wd(i,s)}},kt=function(){return St},Ti=function(i,s){var l=St;try{return St=i,s()}finally{St=l}},it=function(i,s,l){switch(s){case"input":if(yt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var c=l[s];if(c!==i&&c.form===i.form){var p=kl(c);if(!p)throw Error(t(90));ct(c),yt(c,p)}}}break;case"textarea":Xt(i,l);break;case"select":s=l.value,s!=null&&Ct(i,!!l.multiple,s,!1)}},Ue=_d,_e=_s;var YE={usingClientEntryPoint:!1,Events:[ya,Js,kl,me,Pe,_d]},Na={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qE={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=as(i),i===null?null:i.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||XE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eu.isDisabled&&Eu.supportsFiber)try{ee=Eu.inject(qE),Ae=Eu}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YE,ei.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cd(s))throw Error(t(200));return WE(i,s,null,l)},ei.createRoot=function(i,s){if(!Cd(i))throw Error(t(299));var l=!1,c="",p=sv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Td(i,1,!1,null,null,l,!1,c,p),i[sr]=s.current,va(i.nodeType===8?i.parentNode:i),new Ad(s)},ei.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=as(s),i=i===null?null:i.stateNode,i},ei.flushSync=function(i){return _s(i)},ei.hydrate=function(i,s,l){if(!Su(s))throw Error(t(200));return Mu(null,i,s,!0,l)},ei.hydrateRoot=function(i,s,l){if(!Cd(i))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,_="",w=sv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(_=l.identifierPrefix),l.onRecoverableError!==void 0&&(w=l.onRecoverableError)),s=iv(s,null,i,1,l??null,p,!1,_,w),i[sr]=s.current,va(i),c)for(i=0;i<c.length;i++)l=c[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new yu(s)},ei.render=function(i,s,l){if(!Su(s))throw Error(t(200));return Mu(null,i,s,!1,l)},ei.unmountComponentAtNode=function(i){if(!Su(i))throw Error(t(40));return i._reactRootContainer?(_s(function(){Mu(null,null,i,!1,function(){i._reactRootContainer=null,i[sr]=null})}),!0):!1},ei.unstable_batchedUpdates=_d,ei.unstable_renderSubtreeIntoContainer=function(i,s,l,c){if(!Su(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Mu(i,s,l,!1,c)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var pv;function nT(){if(pv)return Pd.exports;pv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pd.exports=tT(),Pd.exports}var mv;function iT(){if(mv)return Tu;mv=1;var n=nT();return Tu.createRoot=n.createRoot,Tu.hydrateRoot=n.hydrateRoot,Tu}var rT=iT();function _c(){const n=window.location.hash;return n.startsWith("#/")?n.slice(2).split("?")[0]:""}function zp(n){window.location.hash=n?`/${n}`:"/",requestAnimationFrame(()=>window.scrollTo({top:0,behavior:"auto"}))}function Rh(n){if(_c()!==""){zp(""),window.addEventListener("hashchange",()=>requestAnimationFrame(()=>Ph(n)),{once:!0});return}Ph(n)}function Id(n){return`#${n}`}function sT(){const n=window.location.hash;if(n&&!n.startsWith("#/")){const e=n.slice(1);requestAnimationFrame(()=>Ph(e))}}function Ph(n){const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function oT({routes:n}){const[e,t]=Je.useState(()=>typeof window>"u"?"":_c());return Je.useEffect(()=>{const r=()=>t(_c());return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),j.jsx(j.Fragment,{children:n[e]??n[""]})}const aT="./media/hero.mp4",oc=[{video:"./media/card1.mp4",title:"Herbouw van verouderde sites",text:"Je huidige website stamt uit een ander tijdperk? Ik teken hem opnieuw vanaf nul — sneller, mobielvriendelijk en klaar voor vandaag."},{video:"./media/card2.mp4",title:"Nieuwe websites op maat",text:"Geen sjablonen, geen thema’s. Elk ontwerp begint op een leeg blad en wordt getekend voor jouw zaak, jouw klanten en jouw verhaal."},{video:"./media/card3.mp4",title:"Eerst zien, dan beslissen",text:"Ik maak eerst een gratis proefontwerp van je homepage en mail het je. Je betaalt pas als je de volledige website wil."}],lT=[{client:"Autoschadebedrijf De Beule — Zele",outcome:"Conceptstudie: website uit 2012 herdacht als donker industrieel ontwerp met hun eigen slogan als kop.",tag:"Conceptstudie",image:"./media/debeule-hero.webp"},{client:"Schrijnwerkerij Michiels — Zele",outcome:"Conceptstudie: drie generaties vakmanschap eindelijk zichtbaar, met hun eigen realisaties als beeldmateriaal.",tag:"Conceptstudie",image:"./media/michiels-hero.webp"},{client:"Jimmy's Classic Cars — Buggenhout",outcome:"Conceptstudie: Mustang-specialist met eigen atelierfotografie als openingsbeeld. Passie voor Mustang, sinds 2011.",tag:"Conceptstudie",image:"./media/jimmys-hero.webp"}],uT=[{name:"Proefontwerp",price:"Gratis",period:"vooraf, zonder afspraak",features:["Homepage-concept voor je zaak","Gemaild als beelden","Geen verplichtingen"]},{name:"Volledige website",price:"Op maat",period:"pas na je akkoord",features:["Vanaf nul getekend","Mobiel eerst en snel","Jouw teksten en foto’s"],highlight:!0},{name:"Aanpassingen",price:"In overleg",period:"na oplevering",features:["Kleine wijzigingen","Nieuwe pagina’s","Rechtstreeks contact"]}],cT=[{name:"Jordan Guzman",role:"Ontwerper & bouwer",focus:"De persoon die je mailt, is de persoon die je site ontwerpt én bouwt. Niemand ertussen."}];function fT(){return j.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:aT,"aria-hidden":!0,style:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",objectFit:"cover",zIndex:0}})}const Xx=Je.createContext({});function zc(n){const e=Je.useRef(null);return e.current===null&&(e.current=n()),e.current}const Vp=Je.createContext(null),Hp=Je.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function dT(n=!0){const e=Je.useContext(Vp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=Je.useId();Je.useEffect(()=>{n&&o(a)},[n]);const u=Je.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,u]:[!0]}const Gp=typeof window<"u",Wp=Gp?Je.useLayoutEffect:Je.useEffect,Xn=n=>n;let hT=Xn,jx=Xn;function Xp(n){let e;return()=>(e===void 0&&(e=n()),e)}const Fs=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},xr=n=>n*1e3,yr=n=>n/1e3,pT={useManualTiming:!1};function mT(n){let e=new Set,t=new Set,r=!1,o=!1;const a=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){a.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,g=!1,v=!1)=>{const y=v&&r?e:t;return g&&a.add(h),y.has(h)||y.add(h),h},cancel:h=>{t.delete(h),a.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(f),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const wu=["read","resolveKeyframes","update","preRender","render","postRender"],gT=40;function Yx(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,u=wu.reduce((x,R)=>(x[R]=mT(a),x),{}),{read:f,resolveKeyframes:d,update:h,preRender:g,render:v,postRender:m}=u,y=()=>{const x=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(x-o.timestamp,gT),1),o.timestamp=x,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),g.process(o),v.process(o),m.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(y))},M=()=>{t=!0,r=!0,o.isProcessing||n(y)};return{schedule:wu.reduce((x,R)=>{const D=u[R];return x[R]=(C,L=!1,P=!1)=>(t||M(),D.schedule(C,L,P)),x},{}),cancel:x=>{for(let R=0;R<wu.length;R++)u[wu[R]].cancel(x)},state:o,steps:u}}const{schedule:Nt,cancel:Oi,state:yn,steps:Nd}=Yx(typeof requestAnimationFrame<"u"?requestAnimationFrame:Xn,!0),qx=Je.createContext({strict:!1}),gv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Go={};for(const n in gv)Go[n]={isEnabled:e=>gv[n].some(t=>!!e[t])};function vT(n){for(const e in n)Go[e]={...Go[e],...n[e]}}const _T=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function xc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||_T.has(n)}let $x=n=>!xc(n);function xT(n){n&&($x=e=>e.startsWith("on")?!xc(e):n(e))}try{xT(require("@emotion/is-prop-valid").default)}catch{}function yT(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||($x(o)||t===!0&&xc(o)||!e&&!xc(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function ST(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Vc=Je.createContext({});function al(n){return typeof n=="string"||Array.isArray(n)}function Hc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const jp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Yp=["initial",...jp];function Gc(n){return Hc(n.animate)||Yp.some(e=>al(n[e]))}function Kx(n){return!!(Gc(n)||n.variants)}function MT(n,e){if(Gc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||al(t)?t:void 0,animate:al(r)?r:void 0}}return n.inherit!==!1?e:{}}function ET(n){const{initial:e,animate:t}=MT(n,Je.useContext(Vc));return Je.useMemo(()=>({initial:e,animate:t}),[vv(e),vv(t)])}function vv(n){return Array.isArray(n)?n.join(" "):n}const TT=Symbol.for("motionComponentSymbol");function Lo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function wT(n,e,t){return Je.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):Lo(t)&&(t.current=r))},[e])}const qp=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),AT="framerAppearId",Zx="data-"+qp(AT),{schedule:$p}=Yx(queueMicrotask,!1),Jx=Je.createContext({});function CT(n,e,t,r,o){var a,u;const{visualElement:f}=Je.useContext(Vc),d=Je.useContext(qx),h=Je.useContext(Vp),g=Je.useContext(Hp).reducedMotion,v=Je.useRef(null);r=r||d.renderer,!v.current&&r&&(v.current=r(n,{visualState:e,parent:f,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const m=v.current,y=Je.useContext(Jx);m&&!m.projection&&o&&(m.type==="html"||m.type==="svg")&&bT(v.current,t,o,y);const M=Je.useRef(!1);Je.useInsertionEffect(()=>{m&&M.current&&m.update(t,h)});const A=t[Zx],S=Je.useRef(!!A&&!(!((a=window.MotionHandoffIsComplete)===null||a===void 0)&&a.call(window,A))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,A)));return Wp(()=>{m&&(M.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),$p.render(m.render),S.current&&m.animationState&&m.animationState.animateChanges())}),Je.useEffect(()=>{m&&(!S.current&&m.animationState&&m.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var x;(x=window.MotionHandoffMarkAsComplete)===null||x===void 0||x.call(window,A)}),S.current=!1))}),m}function bT(n,e,t,r){const{layoutId:o,layout:a,drag:u,dragConstraints:f,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:Qx(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!u||f&&Lo(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function Qx(n){if(n)return n.options.allowProjection!==!1?n.projection:Qx(n.parent)}function RT({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var a,u;n&&vT(n);function f(h,g){let v;const m={...Je.useContext(Hp),...h,layoutId:PT(h)},{isStatic:y}=m,M=ET(h),A=r(h,y);if(!y&&Gp){DT();const S=LT(m);v=S.MeasureLayout,M.visualElement=CT(o,A,m,e,S.ProjectionNode)}return j.jsxs(Vc.Provider,{value:M,children:[v&&M.visualElement?j.jsx(v,{visualElement:M.visualElement,...m}):null,t(o,h,wT(A,M.visualElement,g),A,y,M.visualElement)]})}f.displayName=`motion.${typeof o=="string"?o:`create(${(u=(a=o.displayName)!==null&&a!==void 0?a:o.name)!==null&&u!==void 0?u:""})`}`;const d=Je.forwardRef(f);return d[TT]=o,d}function PT({layoutId:n}){const e=Je.useContext(Xx).id;return e&&n!==void 0?e+"-"+n:n}function DT(n,e){Je.useContext(qx).strict}function LT(n){const{drag:e,layout:t}=Go;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const IT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Kp(n){return typeof n!="string"||n.includes("-")?!1:!!(IT.indexOf(n)>-1||/[A-Z]/u.test(n))}function _v(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Zp(n,e,t,r){if(typeof e=="function"){const[o,a]=_v(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=_v(r);e=e(t!==void 0?t:n.custom,o,a)}return e}const Dh=n=>Array.isArray(n),NT=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),UT=n=>Dh(n)?n[n.length-1]||0:n,Un=n=>!!(n&&n.getVelocity);function ac(n){const e=Un(n)?n.get():n;return NT(e)?e.toValue():e}function FT({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,a){const u={latestValues:OT(r,o,a,n),renderState:e()};return t&&(u.onMount=f=>t({props:r,current:f,...u}),u.onUpdate=f=>t(f)),u}const ey=n=>(e,t)=>{const r=Je.useContext(Vc),o=Je.useContext(Vp),a=()=>FT(n,e,r,o);return t?a():zc(a)};function OT(n,e,t,r){const o={},a=r(n,{});for(const m in a)o[m]=ac(a[m]);let{initial:u,animate:f}=n;const d=Gc(n),h=Kx(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let g=t?t.initial===!1:!1;g=g||u===!1;const v=g?f:u;if(v&&typeof v!="boolean"&&!Hc(v)){const m=Array.isArray(v)?v:[v];for(let y=0;y<m.length;y++){const M=Zp(n,m[y]);if(M){const{transitionEnd:A,transition:S,...x}=M;for(const R in x){let D=x[R];if(Array.isArray(D)){const C=g?D.length-1:0;D=D[C]}D!==null&&(o[R]=D)}for(const R in A)o[R]=A[R]}}}return o}const $o=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set($o),ty=n=>e=>typeof e=="string"&&e.startsWith(n),ny=ty("--"),BT=ty("var(--"),Jp=n=>BT(n)?kT.test(n.split("/*")[0].trim()):!1,kT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,iy=(n,e)=>e&&typeof n=="number"?e.transform(n):n,tr=(n,e,t)=>t>e?e:t<n?n:t,Ko={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},ll={...Ko,transform:n=>tr(0,1,n)},Au={...Ko,default:1},pl=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Zr=pl("deg"),Zi=pl("%"),lt=pl("px"),zT=pl("vh"),VT=pl("vw"),xv={...Zi,parse:n=>Zi.parse(n)/100,transform:n=>Zi.transform(n*100)},HT={borderWidth:lt,borderTopWidth:lt,borderRightWidth:lt,borderBottomWidth:lt,borderLeftWidth:lt,borderRadius:lt,radius:lt,borderTopLeftRadius:lt,borderTopRightRadius:lt,borderBottomRightRadius:lt,borderBottomLeftRadius:lt,width:lt,maxWidth:lt,height:lt,maxHeight:lt,top:lt,right:lt,bottom:lt,left:lt,padding:lt,paddingTop:lt,paddingRight:lt,paddingBottom:lt,paddingLeft:lt,margin:lt,marginTop:lt,marginRight:lt,marginBottom:lt,marginLeft:lt,backgroundPositionX:lt,backgroundPositionY:lt},GT={rotate:Zr,rotateX:Zr,rotateY:Zr,rotateZ:Zr,scale:Au,scaleX:Au,scaleY:Au,scaleZ:Au,skew:Zr,skewX:Zr,skewY:Zr,distance:lt,translateX:lt,translateY:lt,translateZ:lt,x:lt,y:lt,z:lt,perspective:lt,transformPerspective:lt,opacity:ll,originX:xv,originY:xv,originZ:lt},yv={...Ko,transform:Math.round},Qp={...HT,...GT,zIndex:yv,size:lt,fillOpacity:ll,strokeOpacity:ll,numOctaves:yv},WT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},XT=$o.length;function jT(n,e,t){let r="",o=!0;for(let a=0;a<XT;a++){const u=$o[a],f=n[u];if(f===void 0)continue;let d=!0;if(typeof f=="number"?d=f===(u.startsWith("scale")?1:0):d=parseFloat(f)===0,!d||t){const h=iy(f,Qp[u]);if(!d){o=!1;const g=WT[u]||u;r+=`${g}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function em(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let u=!1,f=!1;for(const d in e){const h=e[d];if(zs.has(d)){u=!0;continue}else if(ny(d)){o[d]=h;continue}else{const g=iy(h,Qp[d]);d.startsWith("origin")?(f=!0,a[d]=g):r[d]=g}}if(e.transform||(u||t?r.transform=jT(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:g=0}=a;r.transformOrigin=`${d} ${h} ${g}`}}const YT={offset:"stroke-dashoffset",array:"stroke-dasharray"},qT={offset:"strokeDashoffset",array:"strokeDasharray"};function $T(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?YT:qT;n[a.offset]=lt.transform(-r);const u=lt.transform(e),f=lt.transform(t);n[a.array]=`${u} ${f}`}function Sv(n,e,t){return typeof n=="string"?n:lt.transform(e+t*n)}function KT(n,e,t){const r=Sv(e,n.x,n.width),o=Sv(t,n.y,n.height);return`${r} ${o}`}function tm(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:a,pathLength:u,pathSpacing:f=1,pathOffset:d=0,...h},g,v){if(em(n,h,v),g){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:m,style:y,dimensions:M}=n;m.transform&&(M&&(y.transform=m.transform),delete m.transform),M&&(o!==void 0||a!==void 0||y.transform)&&(y.transformOrigin=KT(M,o!==void 0?o:.5,a!==void 0?a:.5)),e!==void 0&&(m.x=e),t!==void 0&&(m.y=t),r!==void 0&&(m.scale=r),u!==void 0&&$T(m,u,f,d,!1)}const nm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),ry=()=>({...nm(),attrs:{}}),im=n=>typeof n=="string"&&n.toLowerCase()==="svg";function sy(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const a in t)n.style.setProperty(a,t[a])}const oy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ay(n,e,t,r){sy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(oy.has(o)?o:qp(o),e.attrs[o])}const yc={};function ZT(n){Object.assign(yc,n)}function ly(n,{layout:e,layoutId:t}){return zs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!yc[n]||n==="opacity")}function rm(n,e,t){var r;const{style:o}=n,a={};for(const u in o)(Un(o[u])||e.style&&Un(e.style[u])||ly(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(a[u]=o[u]);return a}function uy(n,e,t){const r=rm(n,e,t);for(const o in n)if(Un(n[o])||Un(e[o])){const a=$o.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}function JT(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const Mv=["x","y","width","height","cx","cy","r"],QT={useVisualState:ey({scrapeMotionValuesFromProps:uy,createRenderState:ry,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let a=!!n.drag;if(!a){for(const f in o)if(zs.has(f)){a=!0;break}}if(!a)return;let u=!e;if(e)for(let f=0;f<Mv.length;f++){const d=Mv[f];n[d]!==e[d]&&(u=!0)}u&&Nt.read(()=>{JT(t,r),Nt.render(()=>{tm(r,o,im(t.tagName),n.transformTemplate),ay(t,r)})})}})},e1={useVisualState:ey({scrapeMotionValuesFromProps:rm,createRenderState:nm})};function cy(n,e,t){for(const r in e)!Un(e[r])&&!ly(r,t)&&(n[r]=e[r])}function t1({transformTemplate:n},e){return Je.useMemo(()=>{const t=nm();return em(t,e,n),Object.assign({},t.vars,t.style)},[e])}function n1(n,e){const t=n.style||{},r={};return cy(r,t,n),Object.assign(r,t1(n,e)),r}function i1(n,e){const t={},r=n1(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function r1(n,e,t,r){const o=Je.useMemo(()=>{const a=ry();return tm(a,e,im(r),n.transformTemplate),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};cy(a,n.style,n),o.style={...a,...o.style}}return o}function s1(n=!1){return(t,r,o,{latestValues:a},u)=>{const d=(Kp(t)?r1:i1)(r,a,u,t),h=yT(r,typeof t=="string",n),g=t!==Je.Fragment?{...h,...d,ref:o}:{},{children:v}=r,m=Je.useMemo(()=>Un(v)?v.get():v,[v]);return Je.createElement(t,{...g,children:m})}}function o1(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Kp(r)?QT:e1,preloadedFeatures:n,useRender:s1(o),createVisualElement:e,Component:r};return RT(u)}}function fy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function Wc(n,e,t){const r=n.getProps();return Zp(r,e,t!==void 0?t:r.custom,n)}const dy=Xp(()=>window.ScrollTimeline!==void 0);class a1{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(dy()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,a)=>{o&&o(),this.animations[a].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class l1 extends a1{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function sm(n,e){return n?n[e]||n.default||n:void 0}const Lh=2e4;function hy(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<Lh;)e+=t,r=n.next(e);return e>=Lh?1/0:e}function om(n){return typeof n=="function"}function Ev(n,e){n.timeline=e,n.onfinish=null}const am=n=>Array.isArray(n)&&typeof n[0]=="number",u1={linearEasing:void 0};function c1(n,e){const t=Xp(n);return()=>{var r;return(r=u1[e])!==null&&r!==void 0?r:t()}}const Sc=c1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),py=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=n(Fs(0,o-1,a))+", ";return`linear(${r.substring(0,r.length-2)})`};function my(n){return!!(typeof n=="function"&&Sc()||!n||typeof n=="string"&&(n in Ih||Sc())||am(n)||Array.isArray(n)&&n.every(my))}const qa=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,Ih={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qa([0,.65,.55,1]),circOut:qa([.55,0,1,.45]),backIn:qa([.31,.01,.66,-.59]),backOut:qa([.33,1.53,.69,.99])};function gy(n,e){if(n)return typeof n=="function"&&Sc()?py(n,e):am(n)?qa(n):Array.isArray(n)?n.map(t=>gy(t,e)||Ih.easeOut):Ih[n]}const Ni={x:!1,y:!1};function vy(){return Ni.x||Ni.y}function _y(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const a=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return a?Array.from(a):[]}return Array.from(n)}function xy(n,e){const t=_y(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function Tv(n){return e=>{e.pointerType==="touch"||vy()||n(e)}}function f1(n,e,t={}){const[r,o,a]=xy(n,t),u=Tv(f=>{const{target:d}=f,h=e(f);if(typeof h!="function"||!d)return;const g=Tv(v=>{h(v),d.removeEventListener("pointerleave",g)});d.addEventListener("pointerleave",g,o)});return r.forEach(f=>{f.addEventListener("pointerenter",u,o)}),a}const yy=(n,e)=>e?n===e?!0:yy(n,e.parentElement):!1,lm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,d1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function h1(n){return d1.has(n.tagName)||n.tabIndex!==-1}const $a=new WeakSet;function wv(n){return e=>{e.key==="Enter"&&n(e)}}function Ud(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const p1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=wv(()=>{if($a.has(t))return;Ud(t,"down");const o=wv(()=>{Ud(t,"up")}),a=()=>Ud(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function Av(n){return lm(n)&&!vy()}function m1(n,e,t={}){const[r,o,a]=xy(n,t),u=f=>{const d=f.currentTarget;if(!Av(f)||$a.has(d))return;$a.add(d);const h=e(f),g=(y,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",m),!(!Av(y)||!$a.has(d))&&($a.delete(d),typeof h=="function"&&h(y,{success:M}))},v=y=>{g(y,t.useGlobalTarget||yy(d,y.target))},m=y=>{g(y,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",m,o)};return r.forEach(f=>{!h1(f)&&f.getAttribute("tabindex")===null&&(f.tabIndex=0),(t.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),f.addEventListener("focus",h=>p1(h,o),o)}),a}function g1(n){return n==="x"||n==="y"?Ni[n]?null:(Ni[n]=!0,()=>{Ni[n]=!1}):Ni.x||Ni.y?null:(Ni.x=Ni.y=!0,()=>{Ni.x=Ni.y=!1})}const Sy=new Set(["width","height","top","left","right","bottom",...$o]);let lc;function v1(){lc=void 0}const Ji={now:()=>(lc===void 0&&Ji.set(yn.isProcessing||pT.useManualTiming?yn.timestamp:performance.now()),lc),set:n=>{lc=n,queueMicrotask(v1)}};function um(n,e){n.indexOf(e)===-1&&n.push(e)}function cm(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class fm{constructor(){this.subscriptions=[]}add(e){return um(this.subscriptions,e),()=>cm(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const u=this.subscriptions[a];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function dm(n,e){return e?n*(1e3/e):0}const Cv=30,_1=n=>!isNaN(parseFloat(n)),el={current:void 0};class x1{constructor(e,t={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const a=Ji.now();this.updatedAt!==a&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ji.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=_1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new fm);const r=this.events[e].add(t);return e==="change"?()=>{r(),Nt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return el.current&&el.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ji.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Cv);return dm(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function qi(n,e){return new x1(n,e)}function y1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,qi(t))}function S1(n,e){const t=Wc(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const u in a){const f=UT(a[u]);y1(n,u,f)}}function M1(n){return!!(Un(n)&&n.add)}function Nh(n,e){const t=n.getValue("willChange");if(M1(t))return t.add(e)}function My(n){return n.props[Zx]}const Ey=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,E1=1e-7,T1=12;function w1(n,e,t,r,o){let a,u,f=0;do u=e+(t-e)/2,a=Ey(u,r,o)-n,a>0?t=u:e=u;while(Math.abs(a)>E1&&++f<T1);return u}function ml(n,e,t,r){if(n===e&&t===r)return Xn;const o=a=>w1(a,0,1,n,t);return a=>a===0||a===1?a:Ey(o(a),e,r)}const Ty=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,wy=n=>e=>1-n(1-e),Ay=ml(.33,1.53,.69,.99),hm=wy(Ay),Cy=Ty(hm),by=n=>(n*=2)<1?.5*hm(n):.5*(2-Math.pow(2,-10*(n-1))),pm=n=>1-Math.sin(Math.acos(n)),Ry=wy(pm),Py=Ty(pm),Dy=n=>/^0[^.\s]+$/u.test(n);function A1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Dy(n):!0}const tl=n=>Math.round(n*1e5)/1e5,mm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function C1(n){return n==null}const b1=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gm=(n,e)=>t=>!!(typeof t=="string"&&b1.test(t)&&t.startsWith(n)||e&&!C1(t)&&Object.prototype.hasOwnProperty.call(t,e)),Ly=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,u,f]=r.match(mm);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},R1=n=>tr(0,255,n),Fd={...Ko,transform:n=>Math.round(R1(n))},Ls={test:gm("rgb","red"),parse:Ly("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Fd.transform(n)+", "+Fd.transform(e)+", "+Fd.transform(t)+", "+tl(ll.transform(r))+")"};function P1(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Uh={test:gm("#"),parse:P1,transform:Ls.transform},Io={test:gm("hsl","hue"),parse:Ly("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Zi.transform(tl(e))+", "+Zi.transform(tl(t))+", "+tl(ll.transform(r))+")"},In={test:n=>Ls.test(n)||Uh.test(n)||Io.test(n),parse:n=>Ls.test(n)?Ls.parse(n):Io.test(n)?Io.parse(n):Uh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ls.transform(n):Io.transform(n)},D1=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function L1(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(mm))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(D1))===null||t===void 0?void 0:t.length)||0)>0}const Iy="number",Ny="color",I1="var",N1="var(",bv="${}",U1=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ul(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(U1,d=>(In.test(d)?(r.color.push(a),o.push(Ny),t.push(In.parse(d))):d.startsWith(N1)?(r.var.push(a),o.push(I1),t.push(d)):(r.number.push(a),o.push(Iy),t.push(parseFloat(d))),++a,bv)).split(bv);return{values:t,split:f,indexes:r,types:o}}function Uy(n){return ul(n).values}function Fy(n){const{split:e,types:t}=ul(n),r=e.length;return o=>{let a="";for(let u=0;u<r;u++)if(a+=e[u],o[u]!==void 0){const f=t[u];f===Iy?a+=tl(o[u]):f===Ny?a+=In.transform(o[u]):a+=o[u]}return a}}const F1=n=>typeof n=="number"?0:n;function O1(n){const e=Uy(n);return Fy(n)(e.map(F1))}const ts={test:L1,parse:Uy,createTransformer:Fy,getAnimatableNone:O1},B1=new Set(["brightness","contrast","saturate","opacity"]);function k1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(mm)||[];if(!r)return n;const o=t.replace(r,"");let a=B1.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const z1=/\b([a-z-]*)\(.*?\)/gu,Fh={...ts,getAnimatableNone:n=>{const e=n.match(z1);return e?e.map(k1).join(" "):n}},V1={...Qp,color:In,backgroundColor:In,outlineColor:In,fill:In,stroke:In,borderColor:In,borderTopColor:In,borderRightColor:In,borderBottomColor:In,borderLeftColor:In,filter:Fh,WebkitFilter:Fh},vm=n=>V1[n];function Oy(n,e){let t=vm(n);return t!==Fh&&(t=ts),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const H1=new Set(["auto","none","0"]);function G1(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!H1.has(a)&&ul(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Oy(t,o)}const Rv=n=>n===Ko||n===lt,Pv=(n,e)=>parseFloat(n.split(", ")[e]),Dv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return Pv(o[1],e);{const a=r.match(/^matrix\((.+)\)$/u);return a?Pv(a[1],n):0}},W1=new Set(["x","y","z"]),X1=$o.filter(n=>!W1.has(n));function j1(n){const e=[];return X1.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Wo={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:Dv(4,13),y:Dv(5,14)};Wo.translateX=Wo.x;Wo.translateY=Wo.y;const Us=new Set;let Oh=!1,Bh=!1;function By(){if(Bh){const n=Array.from(Us).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=j1(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,u])=>{var f;(f=r.getValue(a))===null||f===void 0||f.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Bh=!1,Oh=!1,Us.forEach(n=>n.complete()),Us.clear()}function ky(){Us.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Bh=!0)})}function Y1(){ky(),By()}class _m{constructor(e,t,r,o,a,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Us.add(this),Oh||(Oh=!0,Nt.read(ky),Nt.resolveKeyframes(By))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let a=0;a<e.length;a++)if(e[a]===null)if(a===0){const u=o==null?void 0:o.get(),f=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,f);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=f),o&&u===void 0&&o.set(e[0])}else e[a]=e[a-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Us.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Us.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const zy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),q1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $1(n){const e=q1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Vy(n,e,t=1){const[r,o]=$1(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const u=a.trim();return zy(u)?parseFloat(u):u}return Jp(o)?Vy(o,e,t+1):o}const Hy=n=>e=>e.test(n),K1={test:n=>n==="auto",parse:n=>n},Gy=[Ko,lt,Zi,Zr,VT,zT,K1],Lv=n=>Gy.find(Hy(n));class Wy extends _m{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Jp(h))){const g=Vy(h,t.current);g!==void 0&&(e[d]=g),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Sy.has(r)||e.length!==2)return;const[o,a]=e,u=Lv(o),f=Lv(a);if(u!==f)if(Rv(u)&&Rv(f))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)A1(e[o])&&r.push(o);r.length&&G1(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Wo[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const a=t.getValue(r);a&&a.jump(this.measuredOrigin,!1);const u=o.length-1,f=o[u];o[u]=Wo[r](t.measureViewportBox(),window.getComputedStyle(t.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const Iv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(ts.test(n)||n==="0")&&!n.startsWith("url("));function Z1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function J1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],u=Iv(o,e),f=Iv(a,e);return!u||!f?!1:Z1(n)||(t==="spring"||om(t))&&r}const Q1=n=>n!==null;function Xc(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(Q1),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const ew=40;class Xy{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ji.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>ew?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&Y1(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ji.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:a,delay:u,onComplete:f,onUpdate:d,isGenerator:h}=this.options;if(!h&&!J1(e,r,o,a))if(u)this.options.duration=0;else{d&&d(Xc(e,this.options,t)),f&&f(),this.resolveFinishedPromise();return}const g=this.initPlayback(e,t);g!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...g},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const tn=(n,e,t)=>n+(e-n)*t;function Od(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function tw({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,u=0;if(!e)o=a=u=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=Od(d,f,n+1/3),a=Od(d,f,n),u=Od(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(u*255),alpha:r}}function Mc(n,e){return t=>t>0?e:n}const Bd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},nw=[Uh,Ls,Io],iw=n=>nw.find(e=>e.test(n));function Nv(n){const e=iw(n);if(!e)return!1;let t=e.parse(n);return e===Io&&(t=tw(t)),t}const Uv=(n,e)=>{const t=Nv(n),r=Nv(e);if(!t||!r)return Mc(n,e);const o={...t};return a=>(o.red=Bd(t.red,r.red,a),o.green=Bd(t.green,r.green,a),o.blue=Bd(t.blue,r.blue,a),o.alpha=tn(t.alpha,r.alpha,a),Ls.transform(o))},rw=(n,e)=>t=>e(n(t)),gl=(...n)=>n.reduce(rw),kh=new Set(["none","hidden"]);function sw(n,e){return kh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function ow(n,e){return t=>tn(n,e,t)}function xm(n){return typeof n=="number"?ow:typeof n=="string"?Jp(n)?Mc:In.test(n)?Uv:uw:Array.isArray(n)?jy:typeof n=="object"?In.test(n)?Uv:aw:Mc}function jy(n,e){const t=[...n],r=t.length,o=n.map((a,u)=>xm(a)(a,e[u]));return a=>{for(let u=0;u<r;u++)t[u]=o[u](a);return t}}function aw(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=xm(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function lw(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let a=0;a<e.values.length;a++){const u=e.types[a],f=n.indexes[u][o[u]],d=(t=n.values[f])!==null&&t!==void 0?t:0;r[a]=d,o[u]++}return r}const uw=(n,e)=>{const t=ts.createTransformer(e),r=ul(n),o=ul(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?kh.has(n)&&!o.values.length||kh.has(e)&&!r.values.length?sw(n,e):gl(jy(lw(r,o),o.values),t):Mc(n,e)};function Yy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?tn(n,e,t):xm(n)(n,e)}const cw=5;function qy(n,e,t){const r=Math.max(e-cw,0);return dm(t-n(r),e-r)}const sn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},kd=.001;function fw({duration:n=sn.duration,bounce:e=sn.bounce,velocity:t=sn.velocity,mass:r=sn.mass}){let o,a,u=1-e;u=tr(sn.minDamping,sn.maxDamping,u),n=tr(sn.minDuration,sn.maxDuration,yr(n)),u<1?(o=h=>{const g=h*u,v=g*n,m=g-t,y=zh(h,u),M=Math.exp(-v);return kd-m/y*M},a=h=>{const v=h*u*n,m=v*t+t,y=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-v),A=zh(Math.pow(h,2),u);return(-o(h)+kd>0?-1:1)*((m-y)*M)/A}):(o=h=>{const g=Math.exp(-h*n),v=(h-t)*n+1;return-kd+g*v},a=h=>{const g=Math.exp(-h*n),v=(t-h)*(n*n);return g*v});const f=5/n,d=hw(o,a,f);if(n=xr(n),isNaN(d))return{stiffness:sn.stiffness,damping:sn.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const dw=12;function hw(n,e,t){let r=t;for(let o=1;o<dw;o++)r=r-n(r)/e(r);return r}function zh(n,e){return n*Math.sqrt(1-e*e)}const pw=["duration","bounce"],mw=["stiffness","damping","mass"];function Fv(n,e){return e.some(t=>n[t]!==void 0)}function gw(n){let e={velocity:sn.velocity,stiffness:sn.stiffness,damping:sn.damping,mass:sn.mass,isResolvedFromDuration:!1,...n};if(!Fv(n,mw)&&Fv(n,pw))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*tr(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:sn.mass,stiffness:o,damping:a}}else{const t=fw(n);e={...e,...t,mass:sn.mass},e.isResolvedFromDuration=!0}return e}function $y(n=sn.visualDuration,e=sn.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:d,damping:h,mass:g,duration:v,velocity:m,isResolvedFromDuration:y}=gw({...t,velocity:-yr(t.velocity||0)}),M=m||0,A=h/(2*Math.sqrt(d*g)),S=u-a,x=yr(Math.sqrt(d/g)),R=Math.abs(S)<5;r||(r=R?sn.restSpeed.granular:sn.restSpeed.default),o||(o=R?sn.restDelta.granular:sn.restDelta.default);let D;if(A<1){const L=zh(x,A);D=P=>{const U=Math.exp(-A*x*P);return u-U*((M+A*x*S)/L*Math.sin(L*P)+S*Math.cos(L*P))}}else if(A===1)D=L=>u-Math.exp(-x*L)*(S+(M+x*S)*L);else{const L=x*Math.sqrt(A*A-1);D=P=>{const U=Math.exp(-A*x*P),E=Math.min(L*P,300);return u-U*((M+A*x*S)*Math.sinh(E)+L*S*Math.cosh(E))/L}}const C={calculatedDuration:y&&v||null,next:L=>{const P=D(L);if(y)f.done=L>=v;else{let U=0;A<1&&(U=L===0?xr(M):qy(D,L,P));const E=Math.abs(U)<=r,I=Math.abs(u-P)<=o;f.done=E&&I}return f.value=f.done?u:P,f},toString:()=>{const L=Math.min(hy(C),Lh),P=py(U=>C.next(L*U).value,L,30);return L+"ms "+P}};return C}function Ov({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:u,min:f,max:d,restDelta:h=.5,restSpeed:g}){const v=n[0],m={done:!1,value:v},y=E=>f!==void 0&&E<f||d!==void 0&&E>d,M=E=>f===void 0?d:d===void 0||Math.abs(f-E)<Math.abs(d-E)?f:d;let A=t*e;const S=v+A,x=u===void 0?S:u(S);x!==S&&(A=x-v);const R=E=>-A*Math.exp(-E/r),D=E=>x+R(E),C=E=>{const I=R(E),B=D(E);m.done=Math.abs(I)<=h,m.value=m.done?x:B};let L,P;const U=E=>{y(m.value)&&(L=E,P=$y({keyframes:[m.value,M(m.value)],velocity:qy(D,E,m.value),damping:o,stiffness:a,restDelta:h,restSpeed:g}))};return U(0),{calculatedDuration:null,next:E=>{let I=!1;return!P&&L===void 0&&(I=!0,C(E),U(E)),L!==void 0&&E>=L?P.next(E-L):(!I&&C(E),m)}}}const vw=ml(.42,0,1,1),_w=ml(0,0,.58,1),Ky=ml(.42,0,.58,1),xw=n=>Array.isArray(n)&&typeof n[0]!="number",yw={linear:Xn,easeIn:vw,easeInOut:Ky,easeOut:_w,circIn:pm,circInOut:Py,circOut:Ry,backIn:hm,backInOut:Cy,backOut:Ay,anticipate:by},Bv=n=>{if(am(n)){jx(n.length===4);const[e,t,r,o]=n;return ml(e,t,r,o)}else if(typeof n=="string")return yw[n];return n};function Sw(n,e,t){const r=[],o=t||Yy,a=n.length-1;for(let u=0;u<a;u++){let f=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Xn:e;f=gl(d,f)}r.push(f)}return r}function ym(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(jx(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=Sw(e,r,o),d=f.length,h=g=>{if(u&&g<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(g<n[v+1]);v++);const m=Fs(n[v],n[v+1],g);return f[v](m)};return t?g=>h(tr(n[0],n[a-1],g)):h}function Mw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Fs(0,e,r);n.push(tn(t,1,o))}}function Zy(n){const e=[0];return Mw(e,n.length-1),e}function Ew(n,e){return n.map(t=>t*e)}function Tw(n,e){return n.map(()=>e||Ky).splice(0,n.length-1)}function Ec({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=xw(r)?r.map(Bv):Bv(r),a={done:!1,value:e[0]},u=Ew(t&&t.length===e.length?t:Zy(e),n),f=ym(u,e,{ease:Array.isArray(o)?o:Tw(e,o)});return{calculatedDuration:n,next:d=>(a.value=f(d),a.done=d>=n,a)}}const ww=n=>{const e=({timestamp:t})=>n(t);return{start:()=>Nt.update(e,!0),stop:()=>Oi(e),now:()=>yn.isProcessing?yn.timestamp:Ji.now()}},Aw={decay:Ov,inertia:Ov,tween:Ec,keyframes:Ec,spring:$y},Cw=n=>n/100;class Sm extends Xy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:a}=this.options,u=(o==null?void 0:o.KeyframeResolver)||_m,f=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(a,f,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:u=0}=this.options,f=om(t)?t:Aw[t]||Ec;let d,h;f!==Ec&&typeof e[0]!="number"&&(d=gl(Cw,Yy(e[0],e[1])),e=[0,100]);const g=f({...this.options,keyframes:e});a==="mirror"&&(h=f({...this.options,keyframes:[...e].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=hy(g));const{calculatedDuration:v}=g,m=v+o,y=m*(r+1)-o;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:v,resolvedDuration:m,totalDuration:y}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:E}=this.options;return{done:!0,value:E[E.length-1]}}const{finalKeyframe:o,generator:a,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:d,calculatedDuration:h,totalDuration:g,resolvedDuration:v}=r;if(this.startTime===null)return a.next(0);const{delay:m,repeat:y,repeatType:M,repeatDelay:A,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-g/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-m*(this.speed>=0?1:-1),R=this.speed>=0?x<0:x>g;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let D=this.currentTime,C=a;if(y){const E=Math.min(this.currentTime,g)/v;let I=Math.floor(E),B=E%1;!B&&E>=1&&(B=1),B===1&&I--,I=Math.min(I,y+1),!!(I%2)&&(M==="reverse"?(B=1-B,A&&(B-=A/v)):M==="mirror"&&(C=u)),D=tr(0,1,B)*v}const L=R?{done:!1,value:d[0]}:C.next(D);f&&(L.value=f(L.value));let{done:P}=L;!R&&h!==null&&(P=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return U&&o!==void 0&&(L.value=Xc(d,this.options,o)),S&&S(L.value),U&&this.finish(),L}get duration(){const{resolved:e}=this;return e?yr(e.calculatedDuration):0}get time(){return yr(this.currentTime)}set time(e){e=xr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=yr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ww,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(a=>this.tick(a))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const bw=new Set(["opacity","clipPath","filter","transform"]);function Rw(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:u="loop",ease:f="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const g=gy(f,o);return Array.isArray(g)&&(h.easing=g),n.animate(h,{delay:r,duration:o,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:a+1,direction:u==="reverse"?"alternate":"normal"})}const Pw=Xp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Tc=10,Dw=2e4;function Lw(n){return om(n.type)||n.type==="spring"||!my(n.ease)}function Iw(n,e){const t=new Sm({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let a=0;for(;!r.done&&a<Dw;)r=t.sample(a),o.push(r.value),a+=Tc;return{times:void 0,keyframes:o,duration:a-Tc,ease:"linear"}}const Jy={anticipate:by,backInOut:Cy,circInOut:Py};function Nw(n){return n in Jy}class kv extends Xy{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:a}=this.options;this.resolver=new Wy(a,(u,f)=>this.onKeyframesResolved(u,f),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:a,type:u,motionValue:f,name:d,startTime:h}=this.options;if(!f.owner||!f.owner.current)return!1;if(typeof a=="string"&&Sc()&&Nw(a)&&(a=Jy[a]),Lw(this.options)){const{onComplete:v,onUpdate:m,motionValue:y,element:M,...A}=this.options,S=Iw(e,A);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,a=S.ease,u="keyframes"}const g=Rw(f.owner.current,d,e,{...this.options,duration:r,times:o,ease:a});return g.startTime=h??this.calcStartTime(),this.pendingTimeline?(Ev(g,this.pendingTimeline),this.pendingTimeline=void 0):g.onfinish=()=>{const{onComplete:v}=this.options;f.set(Xc(e,this.options,t)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:g,duration:r,times:o,type:u,ease:a,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return yr(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return yr(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=xr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Xn;const{animation:r}=t;Ev(r,e)}return Xn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:a,ease:u,times:f}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:v,element:m,...y}=this.options,M=new Sm({...y,keyframes:r,duration:o,type:a,ease:u,times:f,isGenerator:!0}),A=xr(this.time);h.setWithVelocity(M.sample(A-Tc).value,M.sample(A).value,Tc)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:a,damping:u,type:f}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return Pw()&&r&&bw.has(r)&&!d&&!h&&!o&&a!=="mirror"&&u!==0&&f!=="inertia"}}const Uw={type:"spring",stiffness:500,damping:25,restSpeed:10},Fw=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Ow={type:"keyframes",duration:.8},Bw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},kw=(n,{keyframes:e})=>e.length>2?Ow:zs.has(n)?n.startsWith("scale")?Fw(e[1]):Uw:Bw;function zw({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:u,repeatDelay:f,from:d,elapsed:h,...g}){return!!Object.keys(g).length}const Mm=(n,e,t,r={},o,a)=>u=>{const f=sm(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-xr(d);let g={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:m=>{e.set(m),f.onUpdate&&f.onUpdate(m)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};zw(f)||(g={...g,...kw(n,g)}),g.duration&&(g.duration=xr(g.duration)),g.repeatDelay&&(g.repeatDelay=xr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let v=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(v=!0)),v&&!a&&e.get()!==void 0){const m=Xc(g.keyframes,f);if(m!==void 0)return Nt.update(()=>{g.onUpdate(m),g.onComplete()}),new l1([])}return!a&&kv.supports(g)?new kv(g):new Sm(g)};function Vw({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function Qy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var a;let{transition:u=n.getDefaultTransition(),transitionEnd:f,...d}=e;r&&(u=r);const h=[],g=o&&n.animationState&&n.animationState.getState()[o];for(const v in d){const m=n.getValue(v,(a=n.latestValues[v])!==null&&a!==void 0?a:null),y=d[v];if(y===void 0||g&&Vw(g,v))continue;const M={delay:t,...sm(u||{},v)};let A=!1;if(window.MotionHandoffAnimation){const x=My(n);if(x){const R=window.MotionHandoffAnimation(x,v,Nt);R!==null&&(M.startTime=R,A=!0)}}Nh(n,v),m.start(Mm(v,m,y,n.shouldReduceMotion&&Sy.has(v)?{type:!1}:M,n,A));const S=m.animation;S&&h.push(S)}return f&&Promise.all(h).then(()=>{Nt.update(()=>{f&&S1(n,f)})}),h}function Vh(n,e,t={}){var r;const o=Wc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:a=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(a=t.transitionOverride);const u=o?()=>Promise.all(Qy(n,o,t)):()=>Promise.resolve(),f=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:v,staggerDirection:m}=a;return Hw(n,e,g+h,v,m,t)}:()=>Promise.resolve(),{when:d}=a;if(d){const[h,g]=d==="beforeChildren"?[u,f]:[f,u];return h().then(()=>g())}else return Promise.all([u(),f(t.delay)])}function Hw(n,e,t=0,r=0,o=1,a){const u=[],f=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>f-h*r;return Array.from(n.variantChildren).sort(Gw).forEach((h,g)=>{h.notify("AnimationStart",e),u.push(Vh(h,e,{...a,delay:t+d(g)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function Gw(n,e){return n.sortNodePosition(e)}function Ww(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Vh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Vh(n,e,t);else{const o=typeof e=="function"?Wc(n,e,t.custom):e;r=Promise.all(Qy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Xw=Yp.length;function eS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?eS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Xw;t++){const r=Yp[t],o=n.props[r];(al(o)||o===!1)&&(e[r]=o)}return e}const jw=[...jp].reverse(),Yw=jp.length;function qw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>Ww(n,t,r)))}function $w(n){let e=qw(n),t=zv(),r=!0;const o=d=>(h,g)=>{var v;const m=Wc(n,g,d==="exit"?(v=n.presenceContext)===null||v===void 0?void 0:v.custom:void 0);if(m){const{transition:y,transitionEnd:M,...A}=m;h={...h,...A,...M}}return h};function a(d){e=d(n)}function u(d){const{props:h}=n,g=eS(n.parent)||{},v=[],m=new Set;let y={},M=1/0;for(let S=0;S<Yw;S++){const x=jw[S],R=t[x],D=h[x]!==void 0?h[x]:g[x],C=al(D),L=x===d?R.isActive:null;L===!1&&(M=S);let P=D===g[x]&&D!==h[x]&&C;if(P&&r&&n.manuallyAnimateOnMount&&(P=!1),R.protectedKeys={...y},!R.isActive&&L===null||!D&&!R.prevProp||Hc(D)||typeof D=="boolean")continue;const U=Kw(R.prevProp,D);let E=U||x===d&&R.isActive&&!P&&C||S>M&&C,I=!1;const B=Array.isArray(D)?D:[D];let k=B.reduce(o(x),{});L===!1&&(k={});const{prevResolvedValues:$={}}=R,fe={...$,...k},he=X=>{E=!0,m.has(X)&&(I=!0,m.delete(X)),R.needsAnimating[X]=!0;const G=n.getValue(X);G&&(G.liveStyle=!1)};for(const X in fe){const G=k[X],re=$[X];if(y.hasOwnProperty(X))continue;let se=!1;Dh(G)&&Dh(re)?se=!fy(G,re):se=G!==re,se?G!=null?he(X):m.add(X):G!==void 0&&m.has(X)?he(X):R.protectedKeys[X]=!0}R.prevProp=D,R.prevResolvedValues=k,R.isActive&&(y={...y,...k}),r&&n.blockInitialAnimation&&(E=!1),E&&(!(P&&U)||I)&&v.push(...B.map(X=>({animation:X,options:{type:x}})))}if(m.size){const S={};m.forEach(x=>{const R=n.getBaseTarget(x),D=n.getValue(x);D&&(D.liveStyle=!0),S[x]=R??null}),v.push({animation:S})}let A=!!v.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(A=!1),r=!1,A?e(v):Promise.resolve()}function f(d,h){var g;if(t[d].isActive===h)return Promise.resolve();(g=n.variantChildren)===null||g===void 0||g.forEach(m=>{var y;return(y=m.animationState)===null||y===void 0?void 0:y.setActive(d,h)}),t[d].isActive=h;const v=u(d);for(const m in t)t[m].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:a,getState:()=>t,reset:()=>{t=zv(),r=!0}}}function Kw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!fy(e,n):!1}function Ms(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function zv(){return{animate:Ms(!0),whileInView:Ms(),whileHover:Ms(),whileTap:Ms(),whileDrag:Ms(),whileFocus:Ms(),exit:Ms()}}class is{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Zw extends is{constructor(e){super(e),e.animationState||(e.animationState=$w(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Hc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Jw=0;class Qw extends is{constructor(){super(...arguments),this.id=Jw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const eA={animation:{Feature:Zw},exit:{Feature:Qw}};function cl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function vl(n){return{point:{x:n.pageX,y:n.pageY}}}const tA=n=>e=>lm(e)&&n(e,vl(e));function nl(n,e,t,r){return cl(n,e,tA(t),r)}const Vv=(n,e)=>Math.abs(n-e);function nA(n,e){const t=Vv(n.x,e.x),r=Vv(n.y,e.y);return Math.sqrt(t**2+r**2)}class tS{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Vd(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,y=nA(v.offset,{x:0,y:0})>=3;if(!m&&!y)return;const{point:M}=v,{timestamp:A}=yn;this.history.push({...M,timestamp:A});const{onStart:S,onMove:x}=this.handlers;m||(S&&S(this.lastMoveEvent,v),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,v)},this.handlePointerMove=(v,m)=>{this.lastMoveEvent=v,this.lastMoveEventInfo=zd(m,this.transformPagePoint),Nt.update(this.updatePoint,!0)},this.handlePointerUp=(v,m)=>{this.end();const{onEnd:y,onSessionEnd:M,resumeAnimation:A}=this.handlers;if(this.dragSnapToOrigin&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Vd(v.type==="pointercancel"?this.lastMoveEventInfo:zd(m,this.transformPagePoint),this.history);this.startEvent&&y&&y(v,S),M&&M(v,S)},!lm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=vl(e),f=zd(u,this.transformPagePoint),{point:d}=f,{timestamp:h}=yn;this.history=[{...d,timestamp:h}];const{onSessionStart:g}=t;g&&g(e,Vd(f,this.history)),this.removeListeners=gl(nl(this.contextWindow,"pointermove",this.handlePointerMove),nl(this.contextWindow,"pointerup",this.handlePointerUp),nl(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Oi(this.updatePoint)}}function zd(n,e){return e?{point:e(n.point)}:n}function Hv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Vd({point:n},e){return{point:n,delta:Hv(n,nS(e)),offset:Hv(n,iA(e)),velocity:rA(e,.1)}}function iA(n){return n[0]}function nS(n){return n[n.length-1]}function rA(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=nS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>xr(e)));)t--;if(!r)return{x:0,y:0};const a=yr(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const u={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const iS=1e-4,sA=1-iS,oA=1+iS,rS=.01,aA=0-rS,lA=0+rS;function ui(n){return n.max-n.min}function uA(n,e,t){return Math.abs(n-e)<=t}function Gv(n,e,t,r=.5){n.origin=r,n.originPoint=tn(e.min,e.max,n.origin),n.scale=ui(t)/ui(e),n.translate=tn(t.min,t.max,n.origin)-n.originPoint,(n.scale>=sA&&n.scale<=oA||isNaN(n.scale))&&(n.scale=1),(n.translate>=aA&&n.translate<=lA||isNaN(n.translate))&&(n.translate=0)}function il(n,e,t,r){Gv(n.x,e.x,t.x,r?r.originX:void 0),Gv(n.y,e.y,t.y,r?r.originY:void 0)}function Wv(n,e,t){n.min=t.min+e.min,n.max=n.min+ui(e)}function cA(n,e,t){Wv(n.x,e.x,t.x),Wv(n.y,e.y,t.y)}function Xv(n,e,t){n.min=e.min-t.min,n.max=n.min+ui(e)}function rl(n,e,t){Xv(n.x,e.x,t.x),Xv(n.y,e.y,t.y)}function fA(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?tn(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?tn(t,n,r.max):Math.min(n,t)),n}function jv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function dA(n,{top:e,left:t,bottom:r,right:o}){return{x:jv(n.x,t,o),y:jv(n.y,e,r)}}function Yv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function hA(n,e){return{x:Yv(n.x,e.x),y:Yv(n.y,e.y)}}function pA(n,e){let t=.5;const r=ui(n),o=ui(e);return o>r?t=Fs(e.min,e.max-r,n.min):r>o&&(t=Fs(n.min,n.max-o,e.min)),tr(0,1,t)}function mA(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Hh=.35;function gA(n=Hh){return n===!1?n=0:n===!0&&(n=Hh),{x:qv(n,"left","right"),y:qv(n,"top","bottom")}}function qv(n,e,t){return{min:$v(n,e),max:$v(n,t)}}function $v(n,e){return typeof n=="number"?n:n[e]||0}const Kv=()=>({translate:0,scale:1,origin:0,originPoint:0}),No=()=>({x:Kv(),y:Kv()}),Zv=()=>({min:0,max:0}),ln=()=>({x:Zv(),y:Zv()});function xi(n){return[n("x"),n("y")]}function sS({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function vA({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function _A(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Hd(n){return n===void 0||n===1}function Gh({scale:n,scaleX:e,scaleY:t}){return!Hd(n)||!Hd(e)||!Hd(t)}function Cs(n){return Gh(n)||oS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function oS(n){return Jv(n.x)||Jv(n.y)}function Jv(n){return n&&n!=="0%"}function wc(n,e,t){const r=n-t,o=e*r;return t+o}function Qv(n,e,t,r,o){return o!==void 0&&(n=wc(n,o,r)),wc(n,t,r)+e}function Wh(n,e=0,t=1,r,o){n.min=Qv(n.min,e,t,r,o),n.max=Qv(n.max,e,t,r,o)}function aS(n,{x:e,y:t}){Wh(n.x,e.translate,e.scale,e.originPoint),Wh(n.y,t.translate,t.scale,t.originPoint)}const e_=.999999999999,t_=1.0000000000001;function xA(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,u;for(let f=0;f<o;f++){a=t[f],u=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Fo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,aS(n,u)),r&&Cs(a.latestValues)&&Fo(n,a.latestValues))}e.x<t_&&e.x>e_&&(e.x=1),e.y<t_&&e.y>e_&&(e.y=1)}function Uo(n,e){n.min=n.min+e,n.max=n.max+e}function n_(n,e,t,r,o=.5){const a=tn(n.min,n.max,o);Wh(n,e,t,a,r)}function Fo(n,e){n_(n.x,e.x,e.scaleX,e.scale,e.originX),n_(n.y,e.y,e.scaleY,e.scale,e.originY)}function lS(n,e){return sS(_A(n.getBoundingClientRect(),e))}function yA(n,e,t){const r=lS(n,t),{scroll:o}=e;return o&&(Uo(r.x,o.offset.x),Uo(r.y,o.offset.y)),r}const uS=({current:n})=>n?n.ownerDocument.defaultView:null,SA=new WeakMap;class MA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ln(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=g=>{const{dragSnapToOrigin:v}=this.getProps();v?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(vl(g).point)},a=(g,v)=>{const{drag:m,dragPropagation:y,onDragStart:M}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=g1(m),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xi(S=>{let x=this.getAxisMotionValue(S).get()||0;if(Zi.test(x)){const{projection:R}=this.visualElement;if(R&&R.layout){const D=R.layout.layoutBox[S];D&&(x=ui(D)*(parseFloat(x)/100))}}this.originPoint[S]=x}),M&&Nt.postRender(()=>M(g,v)),Nh(this.visualElement,"transform");const{animationState:A}=this.visualElement;A&&A.setActive("whileDrag",!0)},u=(g,v)=>{const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:M,onDrag:A}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:S}=v;if(y&&this.currentDirection===null){this.currentDirection=EA(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",v.point,S),this.updateAxis("y",v.point,S),this.visualElement.render(),A&&A(g,v)},f=(g,v)=>this.stop(g,v),d=()=>xi(g=>{var v;return this.getAnimationState(g)==="paused"&&((v=this.getAxisMotionValue(g).animation)===null||v===void 0?void 0:v.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new tS(e,{onSessionStart:o,onStart:a,onMove:u,onSessionEnd:f,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:uS(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&Nt.postRender(()=>a(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Cu(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=fA(u,this.constraints[e],this.elastic[e])),a.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,a=this.constraints;t&&Lo(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=dA(o.layoutBox,t):this.constraints=!1,this.elastic=gA(r),a!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&xi(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=mA(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Lo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=yA(r,o.root,this.visualElement.getTransformPagePoint());let u=hA(o.layout.layoutBox,a);if(t){const f=t(vA(u));this.hasMutatedConstraints=!!f,f&&(u=sS(f))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=xi(g=>{if(!Cu(g,t,this.currentDirection))return;let v=d&&d[g]||{};u&&(v={min:0,max:0});const m=o?200:1e6,y=o?40:1e7,M={type:"inertia",velocity:r?e[g]:0,bounceStiffness:m,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(g,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Nh(this.visualElement,e),r.start(Mm(e,r,0,t,this.visualElement,!1))}stopAnimation(){xi(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){xi(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){xi(t=>{const{drag:r}=this.getProps();if(!Cu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[t];a.set(e[t]-tn(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Lo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};xi(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const d=f.get();o[u]=pA({min:d,max:d},this.constraints[u])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),xi(u=>{if(!Cu(u,e,null))return;const f=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];f.set(tn(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;SA.set(this.visualElement,this);const e=this.visualElement.current,t=nl(e,"pointerdown",d=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();Lo(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,a=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),Nt.read(r);const u=cl(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(xi(g=>{const v=this.getAxisMotionValue(g);v&&(this.originPoint[g]+=d[g].translate,v.set(v.get()+d[g].translate))}),this.visualElement.render())}));return()=>{u(),t(),a(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:u=Hh,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:u,dragMomentum:f}}}function Cu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function EA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class TA extends is{constructor(e){super(e),this.removeGroupControls=Xn,this.removeListeners=Xn,this.controls=new MA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Xn}unmount(){this.removeGroupControls(),this.removeListeners()}}const i_=n=>(e,t)=>{n&&Nt.postRender(()=>n(e,t))};class wA extends is{constructor(){super(...arguments),this.removePointerDownListener=Xn}onPointerDown(e){this.session=new tS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:i_(e),onStart:i_(t),onMove:r,onEnd:(a,u)=>{delete this.session,o&&Nt.postRender(()=>o(a,u))}}}mount(){this.removePointerDownListener=nl(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const uc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function r_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Fa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(lt.test(n))n=parseFloat(n);else return n;const t=r_(n,e.target.x),r=r_(n,e.target.y);return`${t}% ${r}%`}},AA={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=ts.parse(n);if(o.length>5)return r;const a=ts.createTransformer(n),u=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=f,o[1+u]/=d;const h=tn(f,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),a(o)}};class CA extends Je.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;ZT(bA),a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),uc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,u=r.projection;return u&&(u.isPresent=a,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?u.promote():u.relegate()||Nt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$p.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function cS(n){const[e,t]=dT(),r=Je.useContext(Xx);return j.jsx(CA,{...n,layoutGroup:r,switchLayoutGroup:Je.useContext(Jx),isPresent:e,safeToRemove:t})}const bA={borderRadius:{...Fa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Fa,borderTopRightRadius:Fa,borderBottomLeftRadius:Fa,borderBottomRightRadius:Fa,boxShadow:AA};function RA(n,e,t){const r=Un(n)?n:qi(n);return r.start(Mm("",r,e,t)),r.animation}function PA(n){return n instanceof SVGElement&&n.tagName!=="svg"}const DA=(n,e)=>n.depth-e.depth;class LA{constructor(){this.children=[],this.isDirty=!1}add(e){um(this.children,e),this.isDirty=!0}remove(e){cm(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(DA),this.isDirty=!1,this.children.forEach(e)}}function IA(n,e){const t=Ji.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Oi(r),n(a-e))};return Nt.read(r,!0),()=>Oi(r)}const fS=["TopLeft","TopRight","BottomLeft","BottomRight"],NA=fS.length,s_=n=>typeof n=="string"?parseFloat(n):n,o_=n=>typeof n=="number"||lt.test(n);function UA(n,e,t,r,o,a){o?(n.opacity=tn(0,t.opacity!==void 0?t.opacity:1,FA(r)),n.opacityExit=tn(e.opacity!==void 0?e.opacity:1,0,OA(r))):a&&(n.opacity=tn(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<NA;u++){const f=`border${fS[u]}Radius`;let d=a_(e,f),h=a_(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||o_(d)===o_(h)?(n[f]=Math.max(tn(s_(d),s_(h),r),0),(Zi.test(h)||Zi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=tn(e.rotate||0,t.rotate||0,r))}function a_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const FA=dS(0,.5,Ry),OA=dS(.5,.95,Xn);function dS(n,e,t){return r=>r<n?0:r>e?1:t(Fs(n,e,r))}function l_(n,e){n.min=e.min,n.max=e.max}function vi(n,e){l_(n.x,e.x),l_(n.y,e.y)}function u_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function c_(n,e,t,r,o){return n-=e,n=wc(n,1/t,r),o!==void 0&&(n=wc(n,1/o,r)),n}function BA(n,e=0,t=1,r=.5,o,a=n,u=n){if(Zi.test(e)&&(e=parseFloat(e),e=tn(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=tn(a.min,a.max,r);n===a&&(f-=e),n.min=c_(n.min,e,t,f,o),n.max=c_(n.max,e,t,f,o)}function f_(n,e,[t,r,o],a,u){BA(n,e[t],e[r],e[o],e.scale,a,u)}const kA=["x","scaleX","originX"],zA=["y","scaleY","originY"];function d_(n,e,t,r){f_(n.x,e,kA,t?t.x:void 0,r?r.x:void 0),f_(n.y,e,zA,t?t.y:void 0,r?r.y:void 0)}function h_(n){return n.translate===0&&n.scale===1}function hS(n){return h_(n.x)&&h_(n.y)}function p_(n,e){return n.min===e.min&&n.max===e.max}function VA(n,e){return p_(n.x,e.x)&&p_(n.y,e.y)}function m_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function pS(n,e){return m_(n.x,e.x)&&m_(n.y,e.y)}function g_(n){return ui(n.x)/ui(n.y)}function v_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class HA{constructor(){this.members=[]}add(e){um(this.members,e),e.scheduleRender()}remove(e){if(cm(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function GA(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||a||u)&&(r=`translate3d(${o}px, ${a}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:g,rotateX:v,rotateY:m,skewX:y,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),g&&(r+=`rotate(${g}deg) `),v&&(r+=`rotateX(${v}deg) `),m&&(r+=`rotateY(${m}deg) `),y&&(r+=`skewX(${y}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const bs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ka=typeof window<"u"&&window.MotionDebug!==void 0,Gd=["","X","Y","Z"],WA={visibility:"hidden"},__=1e3;let XA=0;function Wd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function mS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=My(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Nt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&mS(r)}function gS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=XA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ka&&(bs.totalNodes=bs.resolvedTargetDeltas=bs.recalculatedProjection=0),this.nodes.forEach(qA),this.nodes.forEach(QA),this.nodes.forEach(eC),this.nodes.forEach($A),Ka&&window.MotionDebug.record(bs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new LA)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new fm),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const d=this.eventHandlers.get(u);d&&d.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=PA(u),this.instance=u;const{layoutId:d,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||d)&&(this.isLayoutDirty=!0),n){let v;const m=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=IA(m,250),uc.hasAnimatedSinceResize&&(uc.hasAnimatedSinceResize=!1,this.nodes.forEach(y_))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&g&&(d||h)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:m,hasRelativeTargetChanged:y,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const A=this.options.transition||g.getDefaultTransition()||sC,{onLayoutAnimationStart:S,onLayoutAnimationComplete:x}=g.getProps(),R=!this.targetLayout||!pS(this.targetLayout,M)||y,D=!m&&y;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||D||m&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(v,D);const C={...sm(A,"layout"),onPlay:S,onComplete:x};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else m||y_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Oi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(tC),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&mS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const v=this.path[g];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(x_);return}this.isUpdating||this.nodes.forEach(ZA),this.isUpdating=!1,this.nodes.forEach(JA),this.nodes.forEach(jA),this.nodes.forEach(YA),this.clearAllSnapshots();const f=Ji.now();yn.delta=tr(0,1e3/60,f-yn.timestamp),yn.timestamp=f,yn.isProcessing=!0,Nd.update.process(yn),Nd.preRender.process(yn),Nd.render.process(yn),yn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$p.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(KA),this.sharedNodes.forEach(nC)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Nt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Nt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ln(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!hS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&(f||Cs(this.latestValues)||g)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return u&&(d=this.removeTransform(d)),oC(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return ln();const d=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(aC))){const{scroll:g}=this.root;g&&(Uo(d.x,g.offset.x),Uo(d.y,g.offset.y))}return d}removeElementScroll(u){var f;const d=ln();if(vi(d,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return d;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:v,options:m}=g;g!==this.root&&v&&m.layoutScroll&&(v.wasRoot&&vi(d,u),Uo(d.x,v.offset.x),Uo(d.y,v.offset.y))}return d}applyTransform(u,f=!1){const d=ln();vi(d,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Fo(d,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Cs(g.latestValues)&&Fo(d,g.latestValues)}return Cs(this.latestValues)&&Fo(d,this.latestValues),d}removeTransform(u){const f=ln();vi(f,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!Cs(h.latestValues))continue;Gh(h.latestValues)&&h.updateSnapshot();const g=ln(),v=h.measurePageBox();vi(g,v),d_(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Cs(this.latestValues)&&d_(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==yn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:m}=this.options;if(!(!this.layout||!(v||m))){if(this.resolvedRelativeTargetAt=yn.timestamp,!this.targetDelta&&!this.relativeTarget){const y=this.getClosestProjectingParent();y&&y.layout&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),rl(this.relativeTargetOrigin,this.layout.layoutBox,y.layout.layoutBox),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ln(),this.targetWithTransforms=ln()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),cA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):vi(this.target,this.layout.layoutBox),aS(this.target,this.targetDelta)):vi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const y=this.getClosestProjectingParent();y&&!!y.resumingFrom==!!this.resumingFrom&&!y.options.layoutScroll&&y.target&&this.animationProgress!==1?(this.relativeParent=y,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ln(),this.relativeTargetOrigin=ln(),rl(this.relativeTargetOrigin,this.target,y.target),vi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ka&&bs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Gh(this.parent.latestValues)||oS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),d=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===yn.timestamp&&(h=!1),h)return;const{layout:g,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||v))return;vi(this.layoutCorrected,this.layout.layoutBox);const m=this.treeScale.x,y=this.treeScale.y;xA(this.layoutCorrected,this.treeScale,this.path,d),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=ln());const{target:M}=f;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(u_(this.prevProjectionDelta.x,this.projectionDelta.x),u_(this.prevProjectionDelta.y,this.projectionDelta.y)),il(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==m||this.treeScale.y!==y||!v_(this.projectionDelta.x,this.prevProjectionDelta.x)||!v_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Ka&&bs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=No(),this.projectionDelta=No(),this.projectionDeltaWithTransform=No()}setAnimationOrigin(u,f=!1){const d=this.snapshot,h=d?d.latestValues:{},g={...this.latestValues},v=No();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const m=ln(),y=d?d.source:void 0,M=this.layout?this.layout.source:void 0,A=y!==M,S=this.getStack(),x=!S||S.members.length<=1,R=!!(A&&!x&&this.options.crossfade===!0&&!this.path.some(rC));this.animationProgress=0;let D;this.mixTargetDelta=C=>{const L=C/1e3;S_(v.x,u.x,L),S_(v.y,u.y,L),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(rl(m,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iC(this.relativeTarget,this.relativeTargetOrigin,m,L),D&&VA(this.relativeTarget,D)&&(this.isProjectionDirty=!1),D||(D=ln()),vi(D,this.relativeTarget)),A&&(this.animationValues=g,UA(g,h,this.latestValues,L,R,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Oi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Nt.update(()=>{uc.hasAnimatedSinceResize=!0,this.currentAnimation=RA(0,__,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(__),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:g}=u;if(!(!f||!d||!h)){if(this!==u&&this.layout&&h&&vS(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||ln();const v=ui(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+v;const m=ui(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+m}vi(f,d),Fo(f,g),il(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new HA),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Wd("z",u,h,this.animationValues);for(let g=0;g<Gd.length;g++)Wd(`rotate${Gd[g]}`,u,h,this.animationValues),Wd(`skew${Gd[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}getProjectionStyles(u){var f,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return WA;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=ac(u==null?void 0:u.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){const A={};return this.options.layoutId&&(A.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,A.pointerEvents=ac(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Cs(this.latestValues)&&(A.transform=g?g({},""):"none",this.hasProjected=!1),A}const m=v.animationValues||v.latestValues;this.applyTransformsToTarget(),h.transform=GA(this.projectionDeltaWithTransform,this.treeScale,m),g&&(h.transform=g(m,h.transform));const{x:y,y:M}=this.projectionDelta;h.transformOrigin=`${y.origin*100}% ${M.origin*100}% 0`,v.animationValues?h.opacity=v===this?(d=(f=m.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:h.opacity=v===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const A in yc){if(m[A]===void 0)continue;const{correct:S,applyTo:x}=yc[A],R=h.transform==="none"?m[A]:S(m[A],v);if(x){const D=x.length;for(let C=0;C<D;C++)h[x[C]]=R}else h[A]=R}return this.options.layoutId&&(h.pointerEvents=v===this?ac(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(x_),this.root.sharedNodes.clear()}}}function jA(n){n.updateLayout()}function YA(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,u=t.source!==n.layout.source;a==="size"?xi(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=ui(m);m.min=r[v].min,m.max=m.min+y}):vS(a,t.layoutBox,r)&&xi(v=>{const m=u?t.measuredBox[v]:t.layoutBox[v],y=ui(r[v]);m.max=m.min+y,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+y)});const f=No();il(f,r,t.layoutBox);const d=No();u?il(d,n.applyTransform(o,!0),t.measuredBox):il(d,r,t.layoutBox);const h=!hS(f);let g=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:m,layout:y}=v;if(m&&y){const M=ln();rl(M,t.layoutBox,m.layoutBox);const A=ln();rl(A,r,y.layoutBox),pS(M,A)||(g=!0),v.options.layoutRoot&&(n.relativeTarget=A,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function qA(n){Ka&&bs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function $A(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function KA(n){n.clearSnapshot()}function x_(n){n.clearMeasurements()}function ZA(n){n.isLayoutDirty=!1}function JA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function y_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function QA(n){n.resolveTargetDelta()}function eC(n){n.calcProjection()}function tC(n){n.resetSkewAndRotation()}function nC(n){n.removeLeadSnapshot()}function S_(n,e,t){n.translate=tn(e.translate,0,t),n.scale=tn(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function M_(n,e,t,r){n.min=tn(e.min,t.min,r),n.max=tn(e.max,t.max,r)}function iC(n,e,t,r){M_(n.x,e.x,t.x,r),M_(n.y,e.y,t.y,r)}function rC(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const sC={duration:.45,ease:[.4,0,.1,1]},E_=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),T_=E_("applewebkit/")&&!E_("chrome/")?Math.round:Xn;function w_(n){n.min=T_(n.min),n.max=T_(n.max)}function oC(n){w_(n.x),w_(n.y)}function vS(n,e,t){return n==="position"||n==="preserve-aspect"&&!uA(g_(e),g_(t),.2)}function aC(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const lC=gS({attachResizeListener:(n,e)=>cl(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xd={current:void 0},_S=gS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Xd.current){const n=new lC({});n.mount(window),n.setOptions({layoutScroll:!0}),Xd.current=n}return Xd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),uC={pan:{Feature:wA},drag:{Feature:TA,ProjectionNode:_S,MeasureLayout:cS}};function A_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Nt.postRender(()=>a(e,vl(e)))}class cC extends is{mount(){const{current:e}=this.node;e&&(this.unmount=f1(e,t=>(A_(this.node,t,"Start"),r=>A_(this.node,r,"End"))))}unmount(){}}class fC extends is{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gl(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function C_(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Nt.postRender(()=>a(e,vl(e)))}class dC extends is{mount(){const{current:e}=this.node;e&&(this.unmount=m1(e,t=>(C_(this.node,t,"Start"),(r,{success:o})=>C_(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Xh=new WeakMap,jd=new WeakMap,hC=n=>{const e=Xh.get(n.target);e&&e(n)},pC=n=>{n.forEach(hC)};function mC({root:n,...e}){const t=n||document;jd.has(t)||jd.set(t,{});const r=jd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(pC,{root:n,...e})),r[o]}function gC(n,e,t){const r=mC(e);return Xh.set(n,t),r.observe(n),()=>{Xh.delete(n),r.unobserve(n)}}const vC={some:0,all:1};class _C extends is{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:vC[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:v}=this.node.getProps(),m=h?g:v;m&&m(d)};return gC(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(xC(e,t))&&this.startObserver()}unmount(){}}function xC({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const yC={inView:{Feature:_C},tap:{Feature:dC},focus:{Feature:fC},hover:{Feature:cC}},SC={layout:{ProjectionNode:_S,MeasureLayout:cS}},Ac={current:null},Em={current:!1};function xS(){if(Em.current=!0,!!Gp)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Ac.current=n.matches;n.addListener(e),e()}else Ac.current=!1}const MC=[...Gy,In,ts],EC=n=>MC.find(Hy(n)),b_=new WeakMap;function TC(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Un(o))n.addValue(r,o);else if(Un(a))n.addValue(r,qi(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,qi(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const R_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class wC{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:a,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=_m,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=Ji.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,Nt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:g}=u;this.onUpdate=g,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!a,this.isControllingVariants=Gc(t),this.isVariantNode=Kx(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...m}=this.scrapeMotionValuesFromProps(t,{},this);for(const y in m){const M=m[y];d[y]!==void 0&&Un(M)&&M.set(d[y],!1)}}mount(e){this.current=e,b_.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Em.current||xS(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ac.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){b_.delete(this.current),this.projection&&this.projection.unmount(),Oi(this.notifyUpdate),Oi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=zs.has(e),o=t.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&Nt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Go){const t=Go[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ln()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<R_.length;r++){const o=R_[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,u=e[a];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=TC(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=qi(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(zy(o)||Dy(o))?o=parseFloat(o):!EC(o)&&ts.test(t)&&(o=Oy(e,t)),this.setBaseTarget(e,Un(o)?o.get():o)),Un(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Zp(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,e);return a!==void 0&&!Un(a)?a:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new fm),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class yS extends wC{constructor(){super(...arguments),this.KeyframeResolver=Wy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Un(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function AC(n){return window.getComputedStyle(n)}class CC extends yS{constructor(){super(...arguments),this.type="html",this.renderInstance=sy}readValueFromInstance(e,t){if(zs.has(t)){const r=vm(t);return r&&r.default||0}else{const r=AC(e),o=(ny(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return lS(e,t)}build(e,t,r){em(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return rm(e,t,r)}}class bC extends yS{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ln}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(zs.has(t)){const r=vm(t);return r&&r.default||0}return t=oy.has(t)?t:qp(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return uy(e,t,r)}build(e,t,r){tm(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){ay(e,t,r,o)}mount(e){this.isSVGTag=im(e.tagName),super.mount(e)}}const RC=(n,e)=>Kp(n)?new bC(e):new CC(e,{allowProjection:n!==Je.Fragment}),PC=o1({...eA,...yC,...uC,...SC},RC),Nn=ST(PC);function SS(n,e){let t;const r=()=>{const{currentTime:o}=e,u=(o===null?0:o.value)/100;t!==u&&n(u),t=u};return Nt.update(r,!0),()=>Oi(r)}const cc=new WeakMap;let Jr;function DC(n,e){if(e){const{inlineSize:t,blockSize:r}=e[0];return{width:t,height:r}}else return n instanceof SVGElement&&"getBBox"in n?n.getBBox():{width:n.offsetWidth,height:n.offsetHeight}}function LC({target:n,contentRect:e,borderBoxSize:t}){var r;(r=cc.get(n))===null||r===void 0||r.forEach(o=>{o({target:n,contentSize:e,get size(){return DC(n,t)}})})}function IC(n){n.forEach(LC)}function NC(){typeof ResizeObserver>"u"||(Jr=new ResizeObserver(IC))}function UC(n,e){Jr||NC();const t=_y(n);return t.forEach(r=>{let o=cc.get(r);o||(o=new Set,cc.set(r,o)),o.add(e),Jr==null||Jr.observe(r)}),()=>{t.forEach(r=>{const o=cc.get(r);o==null||o.delete(e),o!=null&&o.size||Jr==null||Jr.unobserve(r)})}}const fc=new Set;let sl;function FC(){sl=()=>{const n={width:window.innerWidth,height:window.innerHeight},e={target:window,size:n,contentSize:n};fc.forEach(t=>t(e))},window.addEventListener("resize",sl)}function OC(n){return fc.add(n),sl||FC(),()=>{fc.delete(n),!fc.size&&sl&&(sl=void 0)}}function BC(n,e){return typeof n=="function"?OC(n):UC(n,e)}const kC=50,P_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),zC=()=>({time:0,x:P_(),y:P_()}),VC={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function D_(n,e,t,r){const o=t[e],{length:a,position:u}=VC[e],f=o.current,d=t.time;o.current=n[`scroll${u}`],o.scrollLength=n[`scroll${a}`]-n[`client${a}`],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=Fs(0,o.scrollLength,o.current);const h=r-d;o.velocity=h>kC?0:dm(o.current-f,h)}function HC(n,e,t){D_(n,"x",e,t),D_(n,"y",e,t),e.time=t}function GC(n,e){const t={x:0,y:0};let r=n;for(;r&&r!==e;)if(r instanceof HTMLElement)t.x+=r.offsetLeft,t.y+=r.offsetTop,r=r.offsetParent;else if(r.tagName==="svg"){const o=r.getBoundingClientRect();r=r.parentElement;const a=r.getBoundingClientRect();t.x+=o.left-a.left,t.y+=o.top-a.top}else if(r instanceof SVGGraphicsElement){const{x:o,y:a}=r.getBBox();t.x+=o,t.y+=a;let u=null,f=r.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=r.parentNode;r=u}else break;return t}const jh={start:0,center:.5,end:1};function L_(n,e,t=0){let r=0;if(n in jh&&(n=jh[n]),typeof n=="string"){const o=parseFloat(n);n.endsWith("px")?r=o:n.endsWith("%")?n=o/100:n.endsWith("vw")?r=o/100*document.documentElement.clientWidth:n.endsWith("vh")?r=o/100*document.documentElement.clientHeight:n=o}return typeof n=="number"&&(r=e*n),t+r}const WC=[0,0];function XC(n,e,t,r){let o=Array.isArray(n)?n:WC,a=0,u=0;return typeof n=="number"?o=[n,n]:typeof n=="string"&&(n=n.trim(),n.includes(" ")?o=n.split(" "):o=[n,jh[n]?n:"0"]),a=L_(o[0],t,r),u=L_(o[1],e),a-u}const jC={All:[[0,0],[1,1]]},YC={x:0,y:0};function qC(n){return"getBBox"in n&&n.tagName!=="svg"?n.getBBox():{width:n.clientWidth,height:n.clientHeight}}function $C(n,e,t){const{offset:r=jC.All}=t,{target:o=n,axis:a="y"}=t,u=a==="y"?"height":"width",f=o!==n?GC(o,n):YC,d=o===n?{width:n.scrollWidth,height:n.scrollHeight}:qC(o),h={width:n.clientWidth,height:n.clientHeight};e[a].offset.length=0;let g=!e[a].interpolate;const v=r.length;for(let m=0;m<v;m++){const y=XC(r[m],h[u],d[u],f[a]);!g&&y!==e[a].interpolatorOffsets[m]&&(g=!0),e[a].offset[m]=y}g&&(e[a].interpolate=ym(e[a].offset,Zy(r),{clamp:!1}),e[a].interpolatorOffsets=[...e[a].offset]),e[a].progress=tr(0,1,e[a].interpolate(e[a].current))}function KC(n,e=n,t){if(t.x.targetOffset=0,t.y.targetOffset=0,e!==n){let r=e;for(;r&&r!==n;)t.x.targetOffset+=r.offsetLeft,t.y.targetOffset+=r.offsetTop,r=r.offsetParent}t.x.targetLength=e===n?e.scrollWidth:e.clientWidth,t.y.targetLength=e===n?e.scrollHeight:e.clientHeight,t.x.containerLength=n.clientWidth,t.y.containerLength=n.clientHeight}function ZC(n,e,t,r={}){return{measure:()=>KC(n,r.target,t),update:o=>{HC(n,t,o),(r.offset||r.target)&&$C(n,t,r)},notify:()=>e(t)}}const Oa=new WeakMap,I_=new WeakMap,Yd=new WeakMap,N_=n=>n===document.documentElement?window:n;function Tm(n,{container:e=document.documentElement,...t}={}){let r=Yd.get(e);r||(r=new Set,Yd.set(e,r));const o=zC(),a=ZC(e,n,o,t);if(r.add(a),!Oa.has(e)){const f=()=>{for(const m of r)m.measure()},d=()=>{for(const m of r)m.update(yn.timestamp)},h=()=>{for(const m of r)m.notify()},g=()=>{Nt.read(f,!1,!0),Nt.read(d,!1,!0),Nt.update(h,!1,!0)};Oa.set(e,g);const v=N_(e);window.addEventListener("resize",g,{passive:!0}),e!==document.documentElement&&I_.set(e,BC(e,g)),v.addEventListener("scroll",g,{passive:!0})}const u=Oa.get(e);return Nt.read(u,!1,!0),()=>{var f;Oi(u);const d=Yd.get(e);if(!d||(d.delete(a),d.size))return;const h=Oa.get(e);Oa.delete(e),h&&(N_(e).removeEventListener("scroll",h),(f=I_.get(e))===null||f===void 0||f(),window.removeEventListener("resize",h))}}function JC({source:n,container:e,axis:t="y"}){n&&(e=n);const r={value:0},o=Tm(a=>{r.value=a[t].progress*100},{container:e,axis:t});return{currentTime:r,cancel:o}}const qd=new Map;function MS({source:n,container:e=document.documentElement,axis:t="y"}={}){n&&(e=n),qd.has(e)||qd.set(e,{});const r=qd.get(e);return r[t]||(r[t]=dy()?new ScrollTimeline({source:e,axis:t}):JC({source:e,axis:t})),r[t]}function QC(n){return n.length===2}function ES(n){return n&&(n.target||n.offset)}function eb(n,e){return QC(n)||ES(e)?Tm(t=>{n(t[e.axis].progress,t)},e):SS(n,MS(e))}function tb(n,e){if(n.flatten(),ES(e))return n.pause(),Tm(t=>{n.time=n.duration*t[e.axis].progress},e);{const t=MS(e);return n.attachTimeline?n.attachTimeline(t,r=>(r.pause(),SS(o=>{r.time=r.duration*o},t))):Xn}}function nb(n,{axis:e="y",...t}={}){const r={axis:e,...t};return typeof n=="function"?eb(n,r):tb(n,r)}function U_(n,e){hT(!!(!e||e.current))}const ib=()=>({scrollX:qi(0),scrollY:qi(0),scrollXProgress:qi(0),scrollYProgress:qi(0)});function rb({container:n,target:e,layoutEffect:t=!0,...r}={}){const o=zc(ib);return(t?Wp:Je.useEffect)(()=>(U_("target",e),U_("container",n),nb((u,{x:f,y:d})=>{o.scrollX.set(f.current),o.scrollXProgress.set(f.progress),o.scrollY.set(d.current),o.scrollYProgress.set(d.progress)},{...r,container:(n==null?void 0:n.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[n,e,JSON.stringify(r.offset)]),o}function sb(n){const e=zc(()=>qi(n)),{isStatic:t}=Je.useContext(Hp);if(t){const[,r]=Je.useState(n);Je.useEffect(()=>e.on("change",r),[])}return e}function TS(n,e){const t=sb(e()),r=()=>t.set(e());return r(),Wp(()=>{const o=()=>Nt.preRender(r,!1,!0),a=n.map(u=>u.on("change",o));return()=>{a.forEach(u=>u()),Oi(r)}}),t}const ob=n=>n&&typeof n=="object"&&n.mix,ab=n=>ob(n)?n.mix:void 0;function lb(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],u=n[3+t],f=ym(o,a,{mixer:ab(a[0]),...u});return e?f(r):f}function ub(n){el.current=[],n();const e=TS(el.current,n);return el.current=void 0,e}function Za(n,e,t,r){if(typeof n=="function")return ub(n);const o=typeof e=="function"?e:lb(e,t,r);return Array.isArray(n)?F_(n,o):F_([n],([a])=>o(a))}function F_(n,e){const t=zc(()=>[]);return TS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function wS(){!Em.current&&xS();const[n]=Je.useState(Ac.current);return n}const cb={div:Nn.div,section:Nn.section,span:Nn.span,h1:Nn.h1,h2:Nn.h2,h3:Nn.h3,p:Nn.p,nav:Nn.nav};function Zt({children:n,delay:e=0,duration:t=.7,y:r=24,className:o,style:a,as:u="div",once:f=!0}){const d=cb[u]??Nn.div;return j.jsx(d,{initial:{opacity:0,y:r},whileInView:{opacity:1,y:0},viewport:{once:f,amount:.2},transition:{duration:t,delay:e,ease:[.22,1,.36,1]},className:o,style:a,children:n})}const fb=[{label:"START",section:"main"},{label:"DIENSTEN",section:"offering"},{label:"WERK",section:"case"},{label:"PRIJZEN",section:"rates"}],db=[{label:"WIE",section:"crew"},{label:"CONTACT",section:"connect"}];function hb(n){if(_c()!==""){zp(""),window.addEventListener("hashchange",()=>{requestAnimationFrame(()=>Rh(n))},{once:!0});return}Rh(n)}function pb(){const n=e=>t=>{t.preventDefault(),hb(e)};return j.jsxs("nav",{className:"cognitra-nav",style:{position:"fixed",top:0,left:0,right:0,zIndex:10,background:"#C5C5C5",borderBottom:"1px solid rgba(0,0,0,0.18)",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"20px 32px"},children:[j.jsx(Zt,{delay:0,children:j.jsx("a",{href:Id("main"),onClick:n("main"),className:"cognitra-nav-brand cognitra-nav-link",style:{fontSize:13,fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#1a1a1a",textDecoration:"none"},children:"MIDNIGHT SPACE"})}),j.jsx("div",{className:"cognitra-nav-links hidden sm:flex",style:{gap:48,alignItems:"center"},children:fb.map((e,t)=>j.jsx(Zt,{delay:.05+t*.05,children:j.jsx("a",{href:Id(e.section),onClick:n(e.section),className:"cognitra-nav-link",style:{fontSize:11,letterSpacing:"0.06em",color:"#1a1a1a",fontWeight:400,textDecoration:"none"},children:e.label})},e.section))}),j.jsx("div",{className:"cognitra-nav-links cognitra-nav-links-secondary flex",style:{gap:48,alignItems:"center"},children:db.map((e,t)=>j.jsx(Zt,{delay:.3+t*.05,children:j.jsx("a",{href:Id(e.section),onClick:n(e.section),className:"cognitra-nav-link",style:{fontSize:11,letterSpacing:"0.06em",color:"#1a1a1a",fontWeight:400,textDecoration:"none"},children:e.label})},e.section))})]})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AS=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=Je.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:u,...f},d)=>Je.createElement("svg",{ref:d,...gb,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:AS("lucide",o),...f},[...u.map(([h,g])=>Je.createElement(h,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CS=(n,e)=>{const t=Je.forwardRef(({className:r,...o},a)=>Je.createElement(vb,{ref:a,iconNode:e,className:AS(`lucide-${mb(n)}`,r),...o}));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=CS("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=CS("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);function yb(){return j.jsxs("button",{type:"button",className:"cognitra-nav-link",style:{position:"fixed",bottom:32,right:32,zIndex:5,display:"flex",alignItems:"center",gap:6,color:"rgba(0,0,0,0.8)",fontSize:11,letterSpacing:"0.08em",textTransform:"uppercase",cursor:"pointer",background:"none",border:"none",fontFamily:"inherit"},onClick:()=>{typeof navigator<"u"&&navigator.share&&navigator.share({title:"Midnight Space",url:window.location.href})},children:[j.jsx(xb,{size:14,strokeWidth:2,"aria-hidden":!0}),"REPOST"]})}function Sb(){return j.jsx("div",{"aria-hidden":!0,style:{position:"fixed",bottom:32,left:"50%",transform:"translateX(-50%)",zIndex:5},children:j.jsx("div",{style:{width:22,height:36,border:"1.5px solid rgba(0,0,0,0.75)",borderRadius:11,display:"flex",justifyContent:"center",paddingTop:6},children:j.jsx("div",{className:"cognitra-scroll-dot",style:{width:3,height:8,background:"rgba(0,0,0,0.85)",borderRadius:2}})})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="185",Mb=0,O_=1,Eb=2,dc=1,Tb=2,Ja=3,ns=0,ti=1,Yi=2,Sr=0,Bo=1,Cc=2,B_=3,k_=4,wb=5,Ps=100,Ab=101,Cb=102,bb=103,Rb=104,Pb=200,Db=201,Lb=202,Ib=203,Yh=204,qh=205,Nb=206,Ub=207,Fb=208,Ob=209,Bb=210,kb=211,zb=212,Vb=213,Hb=214,$h=0,Kh=1,Zh=2,Xo=3,Jh=4,Qh=5,ep=6,tp=7,bS=0,Gb=1,Wb=2,Qi=0,RS=1,PS=2,DS=3,LS=4,IS=5,NS=6,US=7,FS=300,Os=301,jo=302,$d=303,Kd=304,jc=306,np=1e3,_r=1001,ip=1002,Tn=1003,Xb=1004,bu=1005,Fn=1006,Zd=1007,Is=1008,Mi=1009,OS=1010,BS=1011,fl=1012,Am=1013,nr=1014,$i=1015,Tr=1016,Cm=1017,bm=1018,dl=1020,kS=35902,zS=35899,VS=1021,HS=1022,Fi=1023,wr=1026,Ns=1027,GS=1028,Rm=1029,Bs=1030,Pm=1031,Dm=1033,hc=33776,pc=33777,mc=33778,gc=33779,rp=35840,sp=35841,op=35842,ap=35843,lp=36196,up=37492,cp=37496,fp=37488,dp=37489,bc=37490,hp=37491,pp=37808,mp=37809,gp=37810,vp=37811,_p=37812,xp=37813,yp=37814,Sp=37815,Mp=37816,Ep=37817,Tp=37818,wp=37819,Ap=37820,Cp=37821,bp=36492,Rp=36494,Pp=36495,Dp=36283,Lp=36284,Rc=36285,Ip=36286,jb=3200,z_=0,Yb=1,Qr="",yi="srgb",Pc="srgb-linear",Dc="linear",zt="srgb",po=7680,V_=519,qb=512,$b=513,Kb=514,Lm=515,Zb=516,Jb=517,Im=518,Qb=519,Np=35044,H_="300 es",Ki=2e3,Lc=2001;function eR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ic(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tR(){const n=Ic("canvas");return n.style.display="block",n}const G_={};function Nc(...n){const e="THREE."+n.shift();console.log(e,...n)}function WS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ut(...n){n=WS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pt(...n){n=WS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function ko(...n){const e=n.join(" ");e in G_||(G_[e]=!0,ut(...n))}function nR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const iR={[$h]:Kh,[Zh]:ep,[Jh]:tp,[Xo]:Qh,[Kh]:$h,[ep]:Zh,[tp]:Jh,[Qh]:Xo};class Vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let W_=1234567;const zo=Math.PI/180,hl=180/Math.PI;function Mr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function Nm(n,e){return(n%e+e)%e}function rR(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function sR(n,e,t){return n!==e?(t-n)/(e-n):0}function ol(n,e,t){return(1-t)*n+t*e}function oR(n,e,t,r){return ol(n,e,1-Math.exp(-t*r))}function aR(n,e=1){return e-Math.abs(Nm(n,e*2)-e)}function lR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function uR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function cR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function fR(n,e){return n+Math.random()*(e-n)}function dR(n){return n*(.5-Math.random())}function hR(n){n!==void 0&&(W_=n);let e=W_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pR(n){return n*zo}function mR(n){return n*hl}function gR(n){return(n&n-1)===0&&n!==0}function vR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _R(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xR(n,e,t,r,o){const a=Math.cos,u=Math.sin,f=a(t/2),d=u(t/2),h=a((e+r)/2),g=u((e+r)/2),v=a((e-r)/2),m=u((e-r)/2),y=a((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(f*g,d*v,d*m,f*h);break;case"YZY":n.set(d*m,f*g,d*v,f*h);break;case"ZXZ":n.set(d*v,d*m,f*g,f*h);break;case"XZX":n.set(f*g,d*M,d*y,f*h);break;case"YXY":n.set(d*y,f*g,d*M,f*h);break;case"ZYZ":n.set(d*M,d*y,f*g,f*h);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ui(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yR={DEG2RAD:zo,RAD2DEG:hl,generateUUID:Mr,clamp:wt,euclideanModulo:Nm,mapLinear:rR,inverseLerp:sR,lerp:ol,damp:oR,pingpong:aR,smoothstep:lR,smootherstep:uR,randInt:cR,randFloat:fR,randFloatSpread:dR,seededRandom:hR,degToRad:pR,radToDeg:mR,isPowerOfTwo:gR,ceilPowerOfTwo:vR,floorPowerOfTwo:_R,setQuaternionFromProperEuler:xR,normalize:Vt,denormalize:Ui},km=class km{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*r-u*o+e.x,this.y=a*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};km.prototype.isVector2=!0;let gt=km;class Zo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,u,f){let d=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3],m=a[u+0],y=a[u+1],M=a[u+2],A=a[u+3];if(v!==A||d!==m||h!==y||g!==M){let S=d*m+h*y+g*M+v*A;S<0&&(m=-m,y=-y,M=-M,A=-A,S=-S);let x=1-f;if(S<.9995){const R=Math.acos(S),D=Math.sin(R);x=Math.sin(x*R)/D,f=Math.sin(f*R)/D,d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f}else{d=d*x+m*f,h=h*x+y*f,g=g*x+M*f,v=v*x+A*f;const R=1/Math.sqrt(d*d+h*h+g*g+v*v);d*=R,h*=R,g*=R,v*=R}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,u){const f=r[o],d=r[o+1],h=r[o+2],g=r[o+3],v=a[u],m=a[u+1],y=a[u+2],M=a[u+3];return e[t]=f*M+g*v+d*y-h*m,e[t+1]=d*M+g*m+h*v-f*y,e[t+2]=h*M+g*y+f*m-d*v,e[t+3]=g*M-f*v-d*m-h*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,u=e._order,f=Math.cos,d=Math.sin,h=f(r/2),g=f(o/2),v=f(a/2),m=d(r/2),y=d(o/2),M=d(a/2);switch(u){case"XYZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"YXZ":this._x=m*g*v+h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"ZXY":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v-m*y*M;break;case"ZYX":this._x=m*g*v-h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v+m*y*M;break;case"YZX":this._x=m*g*v+h*y*M,this._y=h*y*v+m*g*M,this._z=h*g*M-m*y*v,this._w=h*g*v-m*y*M;break;case"XZY":this._x=m*g*v-h*y*M,this._y=h*y*v-m*g*M,this._z=h*g*M+m*y*v,this._w=h*g*v+m*y*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],u=t[1],f=t[5],d=t[9],h=t[2],g=t[6],v=t[10],m=r+f+v;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(g-d)*y,this._y=(a-h)*y,this._z=(u-o)*y}else if(r>f&&r>v){const y=2*Math.sqrt(1+r-f-v);this._w=(g-d)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(a+h)/y}else if(f>v){const y=2*Math.sqrt(1+f-r-v);this._w=(a-h)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(d+g)/y}else{const y=2*Math.sqrt(1+v-r-f);this._w=(u-o)/y,this._x=(a+h)/y,this._y=(d+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,u=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=r*g+u*f+o*h-a*d,this._y=o*g+u*d+a*f-r*h,this._z=a*g+u*h+r*d-o*f,this._w=u*g-r*f-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,u=-u,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const zm=class zm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(X_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(X_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,u=e.y,f=e.z,d=e.w,h=2*(u*o-f*r),g=2*(f*t-a*o),v=2*(a*r-u*t);return this.x=t+d*h+u*v-f*g,this.y=r+d*g+f*h-a*v,this.z=o+d*v+a*g-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,u=t.x,f=t.y,d=t.z;return this.x=o*d-a*f,this.y=a*u-r*d,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Jd.copy(this).projectOnVector(e),this.sub(Jd)}reflect(e){return this.sub(Jd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};zm.prototype.isVector3=!0;let q=zm;const Jd=new q,X_=new Zo,Vm=class Vm{constructor(e,t,r,o,a,u,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,f,d,h)}set(e,t,r,o,a,u,f,d,h){const g=this.elements;return g[0]=e,g[1]=o,g[2]=f,g[3]=t,g[4]=a,g[5]=d,g[6]=r,g[7]=u,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],f=r[3],d=r[6],h=r[1],g=r[4],v=r[7],m=r[2],y=r[5],M=r[8],A=o[0],S=o[3],x=o[6],R=o[1],D=o[4],C=o[7],L=o[2],P=o[5],U=o[8];return a[0]=u*A+f*R+d*L,a[3]=u*S+f*D+d*P,a[6]=u*x+f*C+d*U,a[1]=h*A+g*R+v*L,a[4]=h*S+g*D+v*P,a[7]=h*x+g*C+v*U,a[2]=m*A+y*R+M*L,a[5]=m*S+y*D+M*P,a[8]=m*x+y*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*u*g-t*f*h-r*a*g+r*f*d+o*a*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=g*u-f*h,m=f*d-g*a,y=h*a-u*d,M=t*v+r*m+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=v*A,e[1]=(o*h-g*r)*A,e[2]=(f*r-o*u)*A,e[3]=m*A,e[4]=(g*t-o*d)*A,e[5]=(o*a-f*t)*A,e[6]=y*A,e[7]=(r*d-h*t)*A,e[8]=(u*t-r*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,u,f){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*u+h*f)+u+e,-o*h,o*d,-o*(-h*u+d*f)+f+t,0,0,1),this}scale(e,t){return ko("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qd.makeScale(e,t)),this}rotate(e){return ko("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qd.makeRotation(-e)),this}translate(e,t){return ko("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vm.prototype.isMatrix3=!0;let mt=Vm;const Qd=new mt,j_=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function SR(){const n={enabled:!0,workingColorSpace:Pc,spaces:{},convert:function(o,a,u){return this.enabled===!1||a===u||!a||!u||(this.spaces[a].transfer===zt&&(o.r=Er(o.r),o.g=Er(o.g),o.b=Er(o.b)),this.spaces[a].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===zt&&(o.r=Vo(o.r),o.g=Vo(o.g),o.b=Vo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Qr?Dc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,u){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Pc]:{primaries:e,whitePoint:r,transfer:Dc,toXYZ:j_,fromXYZ:Y_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:j_,fromXYZ:Y_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),n}const bt=SR();function Er(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Vo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let mo;class MR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{mo===void 0&&(mo=Ic("canvas")),mo.width=e.width,mo.height=e.height;const o=mo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=mo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=Er(a[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Er(t[r]/255)*255):t[r]=Er(t[r]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ER=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ER++}),this.uuid=Mr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?a.push(eh(o[u].image)):a.push(eh(o[u]))}else a=eh(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function eh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?MR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let TR=0;const th=new q;class On extends Vs{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=_r,o=_r,a=Fn,u=Is,f=Fi,d=Mi,h=On.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=Mr(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(th).x}get height(){return this.source.getSize(th).y}get depth(){return this.source.getSize(th).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==FS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case np:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case ip:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case np:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case ip:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=FS;On.DEFAULT_ANISOTROPY=1;const Hm=class Hm{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],g=d[4],v=d[8],m=d[1],y=d[5],M=d[9],A=d[2],S=d[6],x=d[10];if(Math.abs(g-m)<.01&&Math.abs(v-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+m)<.1&&Math.abs(v+A)<.1&&Math.abs(M+S)<.1&&Math.abs(h+y+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,C=(y+1)/2,L=(x+1)/2,P=(g+m)/4,U=(v+A)/4,E=(M+S)/4;return D>C&&D>L?D<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(D),o=P/r,a=U/r):C>L?C<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(C),r=P/o,a=E/o):L<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),r=U/a,o=E/a),this.set(r,o,a,t),this}let R=Math.sqrt((S-M)*(S-M)+(v-A)*(v-A)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(S-M)/R,this.y=(v-A)/R,this.z=(m-g)/R,this.w=Math.acos((h+y+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Hm.prototype.isVector4=!0;let on=Hm;class wR extends Vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new On(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Um(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class er extends wR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class XS extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class AR extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=class kc{constructor(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S)}set(e,t,r,o,a,u,f,d,h,g,v,m,y,M,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=a,x[5]=u,x[9]=f,x[13]=d,x[2]=h,x[6]=g,x[10]=v,x[14]=m,x[3]=y,x[7]=M,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/go.setFromMatrixColumn(e,0).length(),a=1/go.setFromMatrixColumn(e,1).length(),u=1/go.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,u=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=-d*v,t[8]=h,t[1]=y+M*h,t[5]=m-A*h,t[9]=-f*d,t[2]=A-m*h,t[6]=M+y*h,t[10]=u*d}else if(e.order==="YXZ"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m+A*f,t[4]=M*f-y,t[8]=u*h,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=y*f-M,t[6]=A+m*f,t[10]=u*d}else if(e.order==="ZXY"){const m=d*g,y=d*v,M=h*g,A=h*v;t[0]=m-A*f,t[4]=-u*v,t[8]=M+y*f,t[1]=y+M*f,t[5]=u*g,t[9]=A-m*f,t[2]=-u*h,t[6]=f,t[10]=u*d}else if(e.order==="ZYX"){const m=u*g,y=u*v,M=f*g,A=f*v;t[0]=d*g,t[4]=M*h-y,t[8]=m*h+A,t[1]=d*v,t[5]=A*h+m,t[9]=y*h-M,t[2]=-h,t[6]=f*d,t[10]=u*d}else if(e.order==="YZX"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=A-m*v,t[8]=M*v+y,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-h*g,t[6]=y*v+M,t[10]=m-A*v}else if(e.order==="XZY"){const m=u*d,y=u*h,M=f*d,A=f*h;t[0]=d*g,t[4]=-v,t[8]=h*g,t[1]=m*v+A,t[5]=u*g,t[9]=y*v-M,t[2]=M*v-y,t[6]=f*g,t[10]=A*v+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(CR,e,bR)}lookAt(e,t,r){const o=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Xr.crossVectors(r,oi),Xr.lengthSq()===0&&(Math.abs(r.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Xr.crossVectors(r,oi)),Xr.normalize(),Ru.crossVectors(oi,Xr),o[0]=Xr.x,o[4]=Ru.x,o[8]=oi.x,o[1]=Xr.y,o[5]=Ru.y,o[9]=oi.y,o[2]=Xr.z,o[6]=Ru.z,o[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,u=r[0],f=r[4],d=r[8],h=r[12],g=r[1],v=r[5],m=r[9],y=r[13],M=r[2],A=r[6],S=r[10],x=r[14],R=r[3],D=r[7],C=r[11],L=r[15],P=o[0],U=o[4],E=o[8],I=o[12],B=o[1],k=o[5],$=o[9],fe=o[13],he=o[2],J=o[6],ue=o[10],X=o[14],G=o[3],re=o[7],se=o[11],O=o[15];return a[0]=u*P+f*B+d*he+h*G,a[4]=u*U+f*k+d*J+h*re,a[8]=u*E+f*$+d*ue+h*se,a[12]=u*I+f*fe+d*X+h*O,a[1]=g*P+v*B+m*he+y*G,a[5]=g*U+v*k+m*J+y*re,a[9]=g*E+v*$+m*ue+y*se,a[13]=g*I+v*fe+m*X+y*O,a[2]=M*P+A*B+S*he+x*G,a[6]=M*U+A*k+S*J+x*re,a[10]=M*E+A*$+S*ue+x*se,a[14]=M*I+A*fe+S*X+x*O,a[3]=R*P+D*B+C*he+L*G,a[7]=R*U+D*k+C*J+L*re,a[11]=R*E+D*$+C*ue+L*se,a[15]=R*I+D*fe+C*X+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],u=e[1],f=e[5],d=e[9],h=e[13],g=e[2],v=e[6],m=e[10],y=e[14],M=e[3],A=e[7],S=e[11],x=e[15],R=d*y-h*m,D=f*y-h*v,C=f*m-d*v,L=u*y-h*g,P=u*m-d*g,U=u*v-f*g;return t*(A*R-S*D+x*C)-r*(M*R-S*L+x*P)+o*(M*D-A*L+x*U)-a*(M*C-A*P+S*U)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[1],u=e[5],f=e[9],d=e[2],h=e[6],g=e[10];return t*(u*g-f*h)-r*(a*g-f*d)+o*(a*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],u=e[4],f=e[5],d=e[6],h=e[7],g=e[8],v=e[9],m=e[10],y=e[11],M=e[12],A=e[13],S=e[14],x=e[15],R=t*f-r*u,D=t*d-o*u,C=t*h-a*u,L=r*d-o*f,P=r*h-a*f,U=o*h-a*d,E=g*A-v*M,I=g*S-m*M,B=g*x-y*M,k=v*S-m*A,$=v*x-y*A,fe=m*x-y*S,he=R*fe-D*$+C*k+L*B-P*I+U*E;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/he;return e[0]=(f*fe-d*$+h*k)*J,e[1]=(o*$-r*fe-a*k)*J,e[2]=(A*U-S*P+x*L)*J,e[3]=(m*P-v*U-y*L)*J,e[4]=(d*B-u*fe-h*I)*J,e[5]=(t*fe-o*B+a*I)*J,e[6]=(S*C-M*U-x*D)*J,e[7]=(g*U-m*C+y*D)*J,e[8]=(u*$-f*B+h*E)*J,e[9]=(r*B-t*$-a*E)*J,e[10]=(M*P-A*C+x*R)*J,e[11]=(v*C-g*P-y*R)*J,e[12]=(f*I-u*k-d*E)*J,e[13]=(t*k-r*I+o*E)*J,e[14]=(A*D-M*L-S*R)*J,e[15]=(g*L-v*D+m*R)*J,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,u=e.x,f=e.y,d=e.z,h=a*u,g=a*f;return this.set(h*u+r,h*f-o*d,h*d+o*f,0,h*f+o*d,g*f+r,g*d-o*u,0,h*d-o*f,g*d+o*u,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,u){return this.set(1,r,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,u=t._y,f=t._z,d=t._w,h=a+a,g=u+u,v=f+f,m=a*h,y=a*g,M=a*v,A=u*g,S=u*v,x=f*v,R=d*h,D=d*g,C=d*v,L=r.x,P=r.y,U=r.z;return o[0]=(1-(A+x))*L,o[1]=(y+C)*L,o[2]=(M-D)*L,o[3]=0,o[4]=(y-C)*P,o[5]=(1-(m+x))*P,o[6]=(S+R)*P,o[7]=0,o[8]=(M+D)*U,o[9]=(S-R)*U,o[10]=(1-(m+A))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinantAffine();if(a===0)return r.set(1,1,1),t.identity(),this;let u=go.set(o[0],o[1],o[2]).length();const f=go.set(o[4],o[5],o[6]).length(),d=go.set(o[8],o[9],o[10]).length();a<0&&(u=-u),Di.copy(this);const h=1/u,g=1/f,v=1/d;return Di.elements[0]*=h,Di.elements[1]*=h,Di.elements[2]*=h,Di.elements[4]*=g,Di.elements[5]*=g,Di.elements[6]*=g,Di.elements[8]*=v,Di.elements[9]*=v,Di.elements[10]*=v,t.setFromRotationMatrix(Di),r.x=u,r.y=f,r.z=d,this}makePerspective(e,t,r,o,a,u,f=Ki,d=!1){const h=this.elements,g=2*a/(t-e),v=2*a/(r-o),m=(t+e)/(t-e),y=(r+o)/(r-o);let M,A;if(d)M=a/(u-a),A=u*a/(u-a);else if(f===Ki)M=-(u+a)/(u-a),A=-2*u*a/(u-a);else if(f===Lc)M=-u/(u-a),A=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=v,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,u,f=Ki,d=!1){const h=this.elements,g=2/(t-e),v=2/(r-o),m=-(t+e)/(t-e),y=-(r+o)/(r-o);let M,A;if(d)M=1/(u-a),A=u/(u-a);else if(f===Ki)M=-2/(u-a),A=-(u+a)/(u-a);else if(f===Lc)M=-1/(u-a),A=-a/(u-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=v,h[9]=0,h[13]=y,h[2]=0,h[6]=0,h[10]=M,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};kc.prototype.isMatrix4=!0;let nn=kc;const go=new q,Di=new nn,CR=new q(0,0,0),bR=new q(1,1,1),Xr=new q,Ru=new q,oi=new q,q_=new nn,$_=new Zo;class ks{constructor(e=0,t=0,r=0,o=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],u=o[4],f=o[8],d=o[1],h=o[5],g=o[9],v=o[2],m=o[6],y=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $_.setFromEuler(this),this.setFromQuaternion($_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class jS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RR=0;const K_=new q,vo=new Zo,hr=new nn,Pu=new q,Ba=new q,PR=new q,DR=new Zo,Z_=new q(1,0,0),J_=new q(0,1,0),Q_=new q(0,0,1),ex={type:"added"},LR={type:"removed"},_o={type:"childadded",child:null},nh={type:"childremoved",child:null};class Bn extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new q,t=new ks,r=new Zo,o=new q(1,1,1);function a(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new mt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,t){return vo.setFromAxisAngle(e,t),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(Z_,e)}rotateY(e){return this.rotateOnAxis(J_,e)}rotateZ(e){return this.rotateOnAxis(Q_,e)}translateOnAxis(e,t){return K_.copy(e).applyQuaternion(this.quaternion),this.position.add(K_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Z_,e)}translateY(e){return this.translateOnAxis(J_,e)}translateZ(e){return this.translateOnAxis(Q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pu.copy(e):Pu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Ba,Pu,this.up):hr.lookAt(Pu,Ba,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),vo.setFromRotationMatrix(hr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ex),_o.child=e,this.dispatchEvent(_o),_o.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LR),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ex),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,PR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,DR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(t){const f=u(e.geometries),d=u(e.materials),h=u(e.textures),g=u(e.images),v=u(e.shapes),m=u(e.skeletons),y=u(e.animations),M=u(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),m.length>0&&(r.skeletons=m),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Bn.DEFAULT_UP=new q(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oo extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IR={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),x=this._getHandJoint(h,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],m=g.position.distanceTo(v.position),y=.02,M=.005;h.inputState.pinching&&m>y+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=y-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(IR)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Oo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const YS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Du={h:0,s:0,l:0};function rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=Nm(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,u=2*r-a;this.r=rh(u,a,e+1/3),this.g=rh(u,a,e),this.b=rh(u,a,e-1/3)}return bt.colorSpaceToWorking(this,o),this}setStyle(e,t=yi){function r(a){a!==void 0&&parseFloat(a)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const r=YS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=Vo(e.r),this.g=Vo(e.g),this.b=Vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return bt.workingToColorSpace(Ln.copy(this),e),Math.round(wt(Ln.r*255,0,255))*65536+Math.round(wt(Ln.g*255,0,255))*256+Math.round(wt(Ln.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,a=Ln.b,u=Math.max(r,o,a),f=Math.min(r,o,a);let d,h;const g=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=g<=.5?v/(u+f):v/(2-u-f),u){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=bt.workingColorSpace){return bt.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=yi){bt.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Du);const r=ol(jr.h,Du.h,t),o=ol(jr.s,Du.s,t),a=ol(jr.l,Du.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Lt;Lt.NAMES=YS;class NR extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new q,pr=new q,sh=new q,mr=new q,xo=new q,yo=new q,tx=new q,oh=new q,ah=new q,lh=new q,uh=new on,ch=new on,fh=new on;class li{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Li.subVectors(e,t),o.cross(Li);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Li.subVectors(o,t),pr.subVectors(r,t),sh.subVectors(e,t);const u=Li.dot(Li),f=Li.dot(pr),d=Li.dot(sh),h=pr.dot(pr),g=pr.dot(sh),v=u*h-f*f;if(v===0)return a.set(0,0,0),null;const m=1/v,y=(h*d-f*g)*m,M=(u*g-f*d)*m;return a.set(1-y-M,M,y)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,r,o,a,u,f,d){return this.getBarycoord(e,t,r,o,mr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,mr.x),d.addScaledVector(u,mr.y),d.addScaledVector(f,mr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,u){return uh.setScalar(0),ch.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,r),fh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(uh,a.x),u.addScaledVector(ch,a.y),u.addScaledVector(fh,a.z),u}static isFrontFacing(e,t,r,o){return Li.subVectors(r,t),pr.subVectors(e,t),Li.cross(pr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Li.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return li.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let u,f;xo.subVectors(o,r),yo.subVectors(a,r),oh.subVectors(e,r);const d=xo.dot(oh),h=yo.dot(oh);if(d<=0&&h<=0)return t.copy(r);ah.subVectors(e,o);const g=xo.dot(ah),v=yo.dot(ah);if(g>=0&&v<=g)return t.copy(o);const m=d*v-g*h;if(m<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(xo,u);lh.subVectors(e,a);const y=xo.dot(lh),M=yo.dot(lh);if(M>=0&&y<=M)return t.copy(a);const A=y*h-d*M;if(A<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(yo,f);const S=g*M-y*v;if(S<=0&&v-g>=0&&y-M>=0)return tx.subVectors(a,o),f=(v-g)/(v-g+(y-M)),t.copy(o).addScaledVector(tx,f);const x=1/(S+A+m);return u=A*x,f=m*x,t.copy(r).addScaledVector(xo,u).addScaledVector(yo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class _l{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=a.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(a,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Lu.copy(r.boundingBox)),Lu.applyMatrix4(e.matrixWorld),this.union(Lu)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Iu.subVectors(this.max,ka),So.subVectors(e.a,ka),Mo.subVectors(e.b,ka),Eo.subVectors(e.c,ka),Yr.subVectors(Mo,So),qr.subVectors(Eo,Mo),Es.subVectors(So,Eo);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-Es.z,Es.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,Es.z,0,-Es.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-Es.y,Es.x,0];return!dh(t,So,Mo,Eo,Iu)||(t=[1,0,0,0,1,0,0,0,1],!dh(t,So,Mo,Eo,Iu))?!1:(Nu.crossVectors(Yr,qr),t=[Nu.x,Nu.y,Nu.z],dh(t,So,Mo,Eo,Iu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new q,new q,new q,new q,new q,new q,new q,new q],Ii=new q,Lu=new _l,So=new q,Mo=new q,Eo=new q,Yr=new q,qr=new q,Es=new q,ka=new q,Iu=new q,Nu=new q,Ts=new q;function dh(n,e,t,r,o){for(let a=0,u=n.length-3;a<=u;a+=3){Ts.fromArray(n,a);const f=o.x*Math.abs(Ts.x)+o.y*Math.abs(Ts.y)+o.z*Math.abs(Ts.z),d=e.dot(Ts),h=t.dot(Ts),g=r.dot(Ts);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const fn=new q,Uu=new gt;let UR=0;class Wn extends Vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Uu.fromBufferAttribute(this,t),Uu.applyMatrix3(e),this.setXY(t,Uu.x,Uu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),a=Vt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class qS extends Wn{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class $S extends Wn{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class jn extends Wn{constructor(e,t,r){super(new Float32Array(e),t,r)}}const FR=new _l,za=new q,hh=new q;class xl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):FR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(za,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(hh)),this.expandByPoint(za.copy(e.center).sub(hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let OR=0;const _i=new nn,ph=new Bn,To=new q,ai=new _l,Va=new _l,xn=new q;class wn extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eR(e)?$S:qS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new mt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,r){return _i.makeTranslation(e,t,r),this.applyMatrix4(_i),this}scale(e,t,r){return _i.makeScale(e,t,r),this.applyMatrix4(_i),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(To).negate(),this.translate(To.x,To.y,To.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new jn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _l);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ai.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const f=t[a];Va.setFromBufferAttribute(f),this.morphTargetsRelative?(xn.addVectors(ai.min,Va.min),ai.expandByPoint(xn),xn.addVectors(ai.max,Va.max),ai.expandByPoint(xn)):(ai.expandByPoint(Va.min),ai.expandByPoint(Va.max))}ai.getCenter(r);let o=0;for(let a=0,u=e.count;a<u;a++)xn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(xn));if(t)for(let a=0,u=t.length;a<u;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)xn.fromBufferAttribute(f,h),d&&(To.fromBufferAttribute(e,h),xn.add(To)),o=Math.max(o,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Wn(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new q,d[E]=new q;const h=new q,g=new q,v=new q,m=new gt,y=new gt,M=new gt,A=new q,S=new q;function x(E,I,B){h.fromBufferAttribute(r,E),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,B),m.fromBufferAttribute(a,E),y.fromBufferAttribute(a,I),M.fromBufferAttribute(a,B),g.sub(h),v.sub(h),y.sub(m),M.sub(m);const k=1/(y.x*M.y-M.x*y.y);isFinite(k)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(v,-y.y).multiplyScalar(k),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(k),f[E].add(A),f[I].add(A),f[B].add(A),d[E].add(S),d[I].add(S),d[B].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let E=0,I=R.length;E<I;++E){const B=R[E],k=B.start,$=B.count;for(let fe=k,he=k+$;fe<he;fe+=3)x(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const D=new q,C=new q,L=new q,P=new q;function U(E){L.fromBufferAttribute(o,E),P.copy(L);const I=f[E];D.copy(I),D.sub(L.multiplyScalar(L.dot(I))).normalize(),C.crossVectors(P,I);const k=C.dot(d[E])<0?-1:1;u.setXYZW(E,D.x,D.y,D.z,k)}for(let E=0,I=R.length;E<I;++E){const B=R[E],k=B.start,$=B.count;for(let fe=k,he=k+$;fe<he;fe+=3)U(e.getX(fe+0)),U(e.getX(fe+1)),U(e.getX(fe+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let m=0,y=r.count;m<y;m++)r.setXYZ(m,0,0,0);const o=new q,a=new q,u=new q,f=new q,d=new q,h=new q,g=new q,v=new q;if(e)for(let m=0,y=e.count;m<y;m+=3){const M=e.getX(m+0),A=e.getX(m+1),S=e.getX(m+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),g.subVectors(u,a),v.subVectors(o,a),g.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,A),h.fromBufferAttribute(r,S),f.add(g),d.add(g),h.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let m=0,y=t.count;m<y;m+=3)o.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),u.fromBufferAttribute(t,m+2),g.subVectors(u,a),v.subVectors(o,a),g.cross(v),r.setXYZ(m+0,g.x,g.y,g.z),r.setXYZ(m+1,g.x,g.y,g.z),r.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,v=f.normalized,m=new h.constructor(d.length*g);let y=0,M=0;for(let A=0,S=d.length;A<S;A++){f.isInterleavedBufferAttribute?y=d[A]*f.data.stride+f.offset:y=d[A]*g;for(let x=0;x<g;x++)m[M++]=h[y++]}return new Wn(m,g,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let g=0,v=h.length;g<v;g++){const m=h[g],y=e(m,r);d.push(y)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let v=0,m=h.length;v<m;v++){const y=h[v];g.push(y.toJSON(e.data))}g.length>0&&(o[d]=g,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const g=o[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],v=a[h];for(let m=0,y=v.length;m<y;m++)g.push(v[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,g=u.length;h<g;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class BR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Np,this.updateRanges=[],this.version=0,this.uuid=Mr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let o=0,a=this.stride;o<a;o++)this.array[e+o]=t.array[r+o];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new q;class Uc{constructor(e,t,r,o=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=o}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=Ui(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Vt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ui(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Vt(t,this.array),r=Vt(r,this.array),o=Vt(o,this.array),a=Vt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=o,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Nc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Nc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const o=r*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[o+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let kR=0;class Hs extends Vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kR++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Bo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=qh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=po,this.stencilZFail=po,this.stencilZPass=po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(r.blending=this.blending),this.side!==ns&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yh&&(r.blendSrc=this.blendSrc),this.blendDst!==qh&&(r.blendDst=this.blendDst),this.blendEquation!==Ps&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==V_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==po&&(r.stencilFail=this.stencilFail),this.stencilZFail!==po&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==po&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const u=[];for(const f in a){const d=a[f];delete d.metadata,u.push(d)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(r.textures=a),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class KS extends Hs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let wo;const Ha=new q,Ao=new q,Co=new q,bo=new gt,Ga=new gt,ZS=new nn,Fu=new q,Wa=new q,Ou=new q,nx=new gt,mh=new gt,ix=new gt;class zR extends Bn{constructor(e=new KS){if(super(),this.isSprite=!0,this.type="Sprite",wo===void 0){wo=new wn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new BR(t,5);wo.setIndex([0,1,2,0,2,3]),wo.setAttribute("position",new Uc(r,3,0,!1)),wo.setAttribute("uv",new Uc(r,2,3,!1))}this.geometry=wo,this.material=e,this.center=new gt(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Pt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ao.setFromMatrixScale(this.matrixWorld),ZS.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Co.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ao.multiplyScalar(-Co.z);const r=this.material.rotation;let o,a;r!==0&&(a=Math.cos(r),o=Math.sin(r));const u=this.center;Bu(Fu.set(-.5,-.5,0),Co,u,Ao,o,a),Bu(Wa.set(.5,-.5,0),Co,u,Ao,o,a),Bu(Ou.set(.5,.5,0),Co,u,Ao,o,a),nx.set(0,0),mh.set(1,0),ix.set(1,1);let f=e.ray.intersectTriangle(Fu,Wa,Ou,!1,Ha);if(f===null&&(Bu(Wa.set(-.5,.5,0),Co,u,Ao,o,a),mh.set(0,1),f=e.ray.intersectTriangle(Fu,Ou,Wa,!1,Ha),f===null))return;const d=e.ray.origin.distanceTo(Ha);d<e.near||d>e.far||t.push({distance:d,point:Ha.clone(),uv:li.getInterpolation(Ha,Fu,Wa,Ou,nx,mh,ix,new gt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Bu(n,e,t,r,o,a){bo.subVectors(n,t).addScalar(.5).multiply(r),o!==void 0?(Ga.x=a*bo.x-o*bo.y,Ga.y=o*bo.x+a*bo.y):Ga.copy(bo),n.copy(e),n.x+=Ga.x,n.y+=Ga.y,n.applyMatrix4(ZS)}const vr=new q,gh=new q,ku=new q,$r=new q,vh=new q,zu=new q,_h=new q;class Fm{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){gh.copy(e).add(t).multiplyScalar(.5),ku.copy(t).sub(e).normalize(),$r.copy(this.origin).sub(gh);const a=e.distanceTo(t)*.5,u=-this.direction.dot(ku),f=$r.dot(this.direction),d=-$r.dot(ku),h=$r.lengthSq(),g=Math.abs(1-u*u);let v,m,y,M;if(g>0)if(v=u*d-f,m=u*f-d,M=a*g,v>=0)if(m>=-M)if(m<=M){const A=1/g;v*=A,m*=A,y=v*(v+u*m+2*f)+m*(u*v+m+2*d)+h}else m=a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m=-a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;else m<=-M?(v=Math.max(0,-(-u*a+f)),m=v>0?-a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h):m<=M?(v=0,m=Math.min(Math.max(-a,-d),a),y=m*(m+2*d)+h):(v=Math.max(0,-(u*a+f)),m=v>0?a:Math.min(Math.max(-a,-d),a),y=-v*v+m*(m+2*d)+h);else m=u>0?-a:a,v=Math.max(0,-(u*m+f)),y=-v*v+m*(m+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(gh).addScaledVector(ku,m),y}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const r=vr.dot(this.direction),o=vr.dot(vr)-r*r,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),f=r-u,d=r+u;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,u,f,d;const h=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,m=this.origin;return h>=0?(r=(e.min.x-m.x)*h,o=(e.max.x-m.x)*h):(r=(e.max.x-m.x)*h,o=(e.min.x-m.x)*h),g>=0?(a=(e.min.y-m.y)*g,u=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,u=(e.min.y-m.y)*g),r>u||a>o||((a>r||isNaN(r))&&(r=a),(u<o||isNaN(o))&&(o=u),v>=0?(f=(e.min.z-m.z)*v,d=(e.max.z-m.z)*v):(f=(e.max.z-m.z)*v,d=(e.min.z-m.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,r,o,a){vh.subVectors(t,e),zu.subVectors(r,e),_h.crossVectors(vh,zu);let u=this.direction.dot(_h),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;$r.subVectors(this.origin,e);const d=f*this.direction.dot(zu.crossVectors($r,zu));if(d<0)return null;const h=f*this.direction.dot(vh.cross($r));if(h<0||d+h>u)return null;const g=-f*$r.dot(_h);return g<0?null:this.at(g/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Om extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=bS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rx=new nn,ws=new Fm,Vu=new xl,sx=new q,Hu=new q,Gu=new q,Wu=new q,xh=new q,Xu=new q,ox=new q,ju=new q;class ir extends Bn{constructor(e=new wn,t=new Om){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Xu.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const g=f[d],v=a[d];g!==0&&(xh.fromBufferAttribute(v,e),u?Xu.addScaledVector(xh,g):Xu.addScaledVector(xh.sub(t),g))}t.add(Xu)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vu.copy(r.boundingSphere),Vu.applyMatrix4(a),ws.copy(e.ray).recast(e.near),!(Vu.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Vu,sx)===null||ws.origin.distanceToSquared(sx)>(e.far-e.near)**2))&&(rx.copy(a).invert(),ws.copy(e.ray).applyMatrix4(rx),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,r){let o;const a=this.geometry,u=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,m=a.groups,y=a.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],R=Math.max(S.start,y.start),D=Math.min(f.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,L=D;C<L;C+=3){const P=f.getX(C),U=f.getX(C+1),E=f.getX(C+2);o=Yu(this,x,e,r,h,g,v,P,U,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(f.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const R=f.getX(S),D=f.getX(S+1),C=f.getX(S+2);o=Yu(this,u,e,r,h,g,v,R,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,A=m.length;M<A;M++){const S=m[M],x=u[S.materialIndex],R=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let C=R,L=D;C<L;C+=3){const P=C,U=C+1,E=C+2;o=Yu(this,x,e,r,h,g,v,P,U,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,x=A;S<x;S+=3){const R=S,D=S+1,C=S+2;o=Yu(this,u,e,r,h,g,v,R,D,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function VR(n,e,t,r,o,a,u,f){let d;if(e.side===ti?d=r.intersectTriangle(u,a,o,!0,f):d=r.intersectTriangle(o,a,u,e.side===ns,f),d===null)return null;ju.copy(f),ju.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(ju);return h<t.near||h>t.far?null:{distance:h,point:ju.clone(),object:n}}function Yu(n,e,t,r,o,a,u,f,d,h){n.getVertexPosition(f,Hu),n.getVertexPosition(d,Gu),n.getVertexPosition(h,Wu);const g=VR(n,e,t,r,Hu,Gu,Wu,ox);if(g){const v=new q;li.getBarycoord(ox,Hu,Gu,Wu,v),o&&(g.uv=li.getInterpolatedAttribute(o,f,d,h,v,new gt)),a&&(g.uv1=li.getInterpolatedAttribute(a,f,d,h,v,new gt)),u&&(g.normal=li.getInterpolatedAttribute(u,f,d,h,v,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new q,materialIndex:0};li.getNormal(Hu,Gu,Wu,m.normal),g.face=m,g.barycoord=v}return g}class HR extends On{constructor(e=null,t=1,r=1,o,a,u,f,d,h=Tn,g=Tn,v,m){super(null,u,f,d,h,g,o,a,v,m),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yh=new q,GR=new q,WR=new mt;class Rs{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=yh.subVectors(r,t).cross(GR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(yh),a=this.normal.dot(o);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||WR.getNormalMatrix(e),o=this.coplanarPoint(yh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new xl,XR=new gt(.5,.5),qu=new q;class JS{constructor(e=new Rs,t=new Rs,r=new Rs,o=new Rs,a=new Rs,u=new Rs){this.planes=[e,t,r,o,a,u]}set(e,t,r,o,a,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ki,r=!1){const o=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],h=a[3],g=a[4],v=a[5],m=a[6],y=a[7],M=a[8],A=a[9],S=a[10],x=a[11],R=a[12],D=a[13],C=a[14],L=a[15];if(o[0].setComponents(h-u,y-g,x-M,L-R).normalize(),o[1].setComponents(h+u,y+g,x+M,L+R).normalize(),o[2].setComponents(h+f,y+v,x+A,L+D).normalize(),o[3].setComponents(h-f,y-v,x-A,L-D).normalize(),r)o[4].setComponents(d,m,S,C).normalize(),o[5].setComponents(h-d,y-m,x-S,L-C).normalize();else if(o[4].setComponents(h-d,y-m,x-S,L-C).normalize(),t===Ki)o[5].setComponents(h+d,y+m,x+S,L+C).normalize();else if(t===Lc)o[5].setComponents(d,m,S,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=XR.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(qu.x=o.normal.x>0?e.max.x:e.min.x,qu.y=o.normal.y>0?e.max.y:e.min.y,qu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(qu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Up extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fc=new q,Oc=new q,ax=new nn,Xa=new Fm,$u=new xl,Sh=new q,lx=new q;class jR extends Bn{constructor(e=new wn,t=new Up){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)Fc.fromBufferAttribute(t,o-1),Oc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new jn(r,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$u.copy(r.boundingSphere),$u.applyMatrix4(o),$u.radius+=a,e.ray.intersectsSphere($u)===!1)return;ax.copy(o).invert(),Xa.copy(e.ray).applyMatrix4(ax);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=r.index,m=r.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=g.getX(A),R=g.getX(A+1),D=Ku(this,e,Xa,d,x,R,A);D&&t.push(D)}if(this.isLineLoop){const A=g.getX(M-1),S=g.getX(y),x=Ku(this,e,Xa,d,A,S,M-1);x&&t.push(x)}}else{const y=Math.max(0,u.start),M=Math.min(m.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=h){const x=Ku(this,e,Xa,d,A,A+1,A);x&&t.push(x)}if(this.isLineLoop){const A=Ku(this,e,Xa,d,M-1,y,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Ku(n,e,t,r,o,a,u){const f=n.geometry.attributes.position;if(Fc.fromBufferAttribute(f,o),Oc.fromBufferAttribute(f,a),t.distanceSqToSegment(Fc,Oc,Sh,lx)>r)return;Sh.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Sh);if(!(h<e.near||h>e.far))return{distance:h,point:lx.clone().applyMatrix4(n.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:n}}const ux=new q,cx=new q;class fx extends jR{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)ux.fromBufferAttribute(t,o),cx.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ux.distanceTo(cx);e.setAttribute("lineDistance",new jn(r,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class YR extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dx=new nn,Fp=new Fm,Zu=new xl,Ju=new q;class qR extends Bn{constructor(e=new wn,t=new YR){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zu.copy(r.boundingSphere),Zu.applyMatrix4(o),Zu.radius+=a,e.ray.intersectsSphere(Zu)===!1)return;dx.copy(o).invert(),Fp.copy(e.ray).applyMatrix4(dx);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,v=r.attributes.position;if(h!==null){const m=Math.max(0,u.start),y=Math.min(h.count,u.start+u.count);for(let M=m,A=y;M<A;M++){const S=h.getX(M);Ju.fromBufferAttribute(v,S),hx(Ju,S,d,o,e,t,this)}}else{const m=Math.max(0,u.start),y=Math.min(v.count,u.start+u.count);for(let M=m,A=y;M<A;M++)Ju.fromBufferAttribute(v,M),hx(Ju,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function hx(n,e,t,r,o,a,u){const f=Fp.distanceSqToPoint(n);if(f<t){const d=new q;Fp.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class QS extends On{constructor(e=[],t=Os,r,o,a,u,f,d,h,g){super(e,t,r,o,a,u,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $R extends On{constructor(e,t,r,o,a,u,f,d,h){super(e,t,r,o,a,u,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yo extends On{constructor(e,t,r=nr,o,a,u,f=Tn,d=Tn,h,g=wr,v=1){if(g!==wr&&g!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:v};super(m,o,a,u,f,d,g,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Um(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class KR extends Yo{constructor(e,t=nr,r=Os,o,a,u=Tn,f=Tn,d,h=wr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,o,a,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eM extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends wn{constructor(e=1,t=1,r=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:u};const f=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const d=[],h=[],g=[],v=[];let m=0,y=0;M("z","y","x",-1,-1,r,t,e,u,a,0),M("z","y","x",1,-1,r,t,-e,u,a,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new jn(h,3)),this.setAttribute("normal",new jn(g,3)),this.setAttribute("uv",new jn(v,2));function M(A,S,x,R,D,C,L,P,U,E,I){const B=C/U,k=L/E,$=C/2,fe=L/2,he=P/2,J=U+1,ue=E+1;let X=0,G=0;const re=new q;for(let se=0;se<ue;se++){const O=se*k-fe;for(let Z=0;Z<J;Z++){const Ie=Z*B-$;re[A]=Ie*R,re[S]=O*D,re[x]=he,h.push(re.x,re.y,re.z),re[A]=0,re[S]=0,re[x]=P>0?1:-1,g.push(re.x,re.y,re.z),v.push(Z/U),v.push(1-se/E),X+=1}}for(let se=0;se<E;se++)for(let O=0;O<U;O++){const Z=m+O+J*se,Ie=m+O+J*(se+1),Ge=m+(O+1)+J*(se+1),ze=m+(O+1)+J*se;d.push(Z,Ie,ze),d.push(Ie,Ge,ze),G+=6}f.addGroup(y,G,I),y+=G,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bm extends wn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],u=[];f(o),h(r),g(),this.setAttribute("position",new jn(a,3)),this.setAttribute("normal",new jn(a.slice(),3)),this.setAttribute("uv",new jn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const D=new q,C=new q,L=new q;for(let P=0;P<t.length;P+=3)y(t[P+0],D),y(t[P+1],C),y(t[P+2],L),d(D,C,L,R)}function d(R,D,C,L){const P=L+1,U=[];for(let E=0;E<=P;E++){U[E]=[];const I=R.clone().lerp(C,E/P),B=D.clone().lerp(C,E/P),k=P-E;for(let $=0;$<=k;$++)$===0&&E===P?U[E][$]=I:U[E][$]=I.clone().lerp(B,$/k)}for(let E=0;E<P;E++)for(let I=0;I<2*(P-E)-1;I++){const B=Math.floor(I/2);I%2===0?(m(U[E][B+1]),m(U[E+1][B]),m(U[E][B])):(m(U[E][B+1]),m(U[E+1][B+1]),m(U[E+1][B]))}}function h(R){const D=new q;for(let C=0;C<a.length;C+=3)D.x=a[C+0],D.y=a[C+1],D.z=a[C+2],D.normalize().multiplyScalar(R),a[C+0]=D.x,a[C+1]=D.y,a[C+2]=D.z}function g(){const R=new q;for(let D=0;D<a.length;D+=3){R.x=a[D+0],R.y=a[D+1],R.z=a[D+2];const C=S(R)/2/Math.PI+.5,L=x(R)/Math.PI+.5;u.push(C,1-L)}M(),v()}function v(){for(let R=0;R<u.length;R+=6){const D=u[R+0],C=u[R+2],L=u[R+4],P=Math.max(D,C,L),U=Math.min(D,C,L);P>.9&&U<.1&&(D<.2&&(u[R+0]+=1),C<.2&&(u[R+2]+=1),L<.2&&(u[R+4]+=1))}}function m(R){a.push(R.x,R.y,R.z)}function y(R,D){const C=R*3;D.x=e[C+0],D.y=e[C+1],D.z=e[C+2]}function M(){const R=new q,D=new q,C=new q,L=new q,P=new gt,U=new gt,E=new gt;for(let I=0,B=0;I<a.length;I+=9,B+=6){R.set(a[I+0],a[I+1],a[I+2]),D.set(a[I+3],a[I+4],a[I+5]),C.set(a[I+6],a[I+7],a[I+8]),P.set(u[B+0],u[B+1]),U.set(u[B+2],u[B+3]),E.set(u[B+4],u[B+5]),L.copy(R).add(D).add(C).divideScalar(3);const k=S(L);A(P,B+0,R,k),A(U,B+2,D,k),A(E,B+4,C,k)}}function A(R,D,C,L){L<0&&R.x===1&&(u[D]=R.x-1),C.x===0&&C.z===0&&(u[D]=L/2/Math.PI+.5)}function S(R){return Math.atan2(R.z,-R.x)}function x(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bm(e.vertices,e.indices,e.radius,e.detail)}}const Qu=new q,ec=new q,Mh=new q,tc=new li;class px extends wn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(zo*t),u=e.getIndex(),f=e.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],g=["a","b","c"],v=new Array(3),m={},y=[];for(let M=0;M<d;M+=3){u?(h[0]=u.getX(M),h[1]=u.getX(M+1),h[2]=u.getX(M+2)):(h[0]=M,h[1]=M+1,h[2]=M+2);const{a:A,b:S,c:x}=tc;if(A.fromBufferAttribute(f,h[0]),S.fromBufferAttribute(f,h[1]),x.fromBufferAttribute(f,h[2]),tc.getNormal(Mh),v[0]=`${Math.round(A.x*o)},${Math.round(A.y*o)},${Math.round(A.z*o)}`,v[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,v[2]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let R=0;R<3;R++){const D=(R+1)%3,C=v[R],L=v[D],P=tc[g[R]],U=tc[g[D]],E=`${C}_${L}`,I=`${L}_${C}`;I in m&&m[I]?(Mh.dot(m[I].normal)<=a&&(y.push(P.x,P.y,P.z),y.push(U.x,U.y,U.z)),m[I]=null):E in m||(m[E]={index0:h[R],index1:h[D],normal:Mh.clone()})}}for(const M in m)if(m[M]){const{index0:A,index1:S}=m[M];Qu.fromBufferAttribute(f,A),ec.fromBufferAttribute(f,S),y.push(Qu.x,Qu.y,Qu.z),y.push(ec.x,ec.y,ec.z)}this.setAttribute("position",new jn(y,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Bc extends Bm{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bc(e.radius,e.detail)}}class Yc extends wn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,u=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,g=d+1,v=e/f,m=t/d,y=[],M=[],A=[],S=[];for(let x=0;x<g;x++){const R=x*m-u;for(let D=0;D<h;D++){const C=D*v-a;M.push(C,-R,0),A.push(0,0,1),S.push(D/f),S.push(1-x/d)}}for(let x=0;x<d;x++)for(let R=0;R<f;R++){const D=R+h*x,C=R+h*(x+1),L=R+1+h*(x+1),P=R+1+h*x;y.push(D,C,P),y.push(C,L,P)}this.setIndex(y),this.setAttribute("position",new jn(M,3)),this.setAttribute("normal",new jn(A,3)),this.setAttribute("uv",new jn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.width,e.height,e.widthSegments,e.heightSegments)}}function qo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];if(mx(o))o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(mx(o[0])){const a=[];for(let u=0,f=o.length;u<f;u++)a[u]=o[u].clone();e[t][r]=a}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Gn(n){const e={};for(let t=0;t<n.length;t++){const r=qo(n[t]);for(const o in r)e[o]=r[o]}return e}function mx(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function ZR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const JR={clone:qo,merge:Gn};var QR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QR,this.fragmentShader=eP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=ZR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Lt().setHex(o.value);break;case"v2":this.uniforms[r].value=new gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new q().fromArray(o.value);break;case"v4":this.uniforms[r].value=new on().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class tP extends Bi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nP extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iP extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nc=new q,ic=new Zo,Wi=new q;class nM extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(nc,ic,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(nc,ic,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nc,ic,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Kr=new q,gx=new gt,vx=new gt;class Si extends nM{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Kr.x,Kr.y).multiplyScalar(-e/Kr.z)}getViewSize(e,t){return this.getViewBounds(e,gx,vx),t.subVectors(vx,gx)}setViewOffset(e,t,r,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;a+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class iM extends nM{constructor(e=-1,t=1,r=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,u=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,u=a+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ro=-90,Po=1;class rP extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Si(Ro,Po,e,t);o.layers=this.layers,this.add(o);const a=new Si(Ro,Po,e,t);a.layers=this.layers,this.add(a);const u=new Si(Ro,Po,e,t);u.layers=this.layers,this.add(u);const f=new Si(Ro,Po,e,t);f.layers=this.layers,this.add(f);const d=new Si(Ro,Po,e,t);d.layers=this.layers,this.add(d);const h=new Si(Ro,Po,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,u,f,d]=t;for(const h of t)this.remove(h);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,f,d,h,g]=this.children,v=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,m,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class sP extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gm=class Gm{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const a=this.elements;return a[0]=e,a[2]=t,a[1]=r,a[3]=o,this}};Gm.prototype.isMatrix2=!0;let _x=Gm;function xx(n,e,t,r){const o=oP(r);switch(t){case VS:return n*e;case GS:return n*e/o.components*o.byteLength;case Rm:return n*e/o.components*o.byteLength;case Bs:return n*e*2/o.components*o.byteLength;case Pm:return n*e*2/o.components*o.byteLength;case HS:return n*e*3/o.components*o.byteLength;case Fi:return n*e*4/o.components*o.byteLength;case Dm:return n*e*4/o.components*o.byteLength;case hc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sp:case ap:return Math.max(n,16)*Math.max(e,8)/4;case rp:case op:return Math.max(n,8)*Math.max(e,8)/2;case lp:case up:case fp:case dp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case cp:case bc:case hp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case gp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case vp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _p:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case xp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case yp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Sp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Mp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ap:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bp:case Rp:case Pp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Dp:case Lp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Rc:case Ip:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oP(n){switch(n){case Mi:case OS:return{byteLength:1,components:1};case fl:case BS:case Tr:return{byteLength:2,components:1};case Cm:case bm:return{byteLength:2,components:4};case nr:case Am:case $i:return{byteLength:4,components:1};case kS:case zS:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rM(){let n=null,e=!1,t=null,r=null;function o(a,u){t(a,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function aP(n){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,v=h.byteLength,m=n.createBuffer();n.bindBuffer(d,m),n.bufferData(d,h,g),f.onUploadCallback();let y;if(h instanceof Float32Array)y=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)y=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?y=n.HALF_FLOAT:y=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=n.SHORT;else if(h instanceof Uint32Array)y=n.UNSIGNED_INT;else if(h instanceof Int32Array)y=n.INT;else if(h instanceof Int8Array)y=n.BYTE;else if(h instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const g=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,g);else{v.sort((y,M)=>y.start-M.start);let m=0;for(let y=1;y<v.length;y++){const M=v[m],A=v[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,v[m]=A)}v.length=m+1;for(let y=0,M=v.length;y<M;y++){const A=v[y];n.bufferSubData(h,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:u}}var lP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uP=`#ifdef USE_ALPHAHASH
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
#endif`,cP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pP=`#ifdef USE_AOMAP
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
#endif`,mP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gP=`#ifdef USE_BATCHING
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
#endif`,vP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_P=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SP=`#ifdef USE_IRIDESCENCE
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
#endif`,MP=`#ifdef USE_BUMPMAP
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
#endif`,EP=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DP=`#define PI 3.141592653589793
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
} // validated`,LP=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IP=`vec3 transformedNormal = objectNormal;
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
#endif`,NP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BP="gl_FragColor = linearToOutputTexel( gl_FragColor );",kP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zP=`#ifdef USE_ENVMAP
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
#endif`,VP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HP=`#ifdef USE_ENVMAP
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
#endif`,GP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WP=`#ifdef USE_ENVMAP
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
#endif`,XP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$P=`#ifdef USE_GRADIENTMAP
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
}`,KP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QP=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,e2=`#ifdef USE_ENVMAP
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
#endif`,t2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,r2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,s2=`PhysicalMaterial material;
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
#endif`,o2=`uniform sampler2D dfgLUT;
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
}`,a2=`
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
#endif`,l2=`#if defined( RE_IndirectDiffuse )
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
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,c2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_2=`#if defined( USE_POINTS_UV )
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
#endif`,x2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`#ifdef USE_MORPHTARGETS
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
#endif`,w2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,D2=`#ifdef USE_NORMALMAP
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
#endif`,L2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,I2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,H2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,G2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,W2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Y2=`float getShadowMask() {
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
}`,q2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$2=`#ifdef USE_SKINNING
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
#endif`,K2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Z2=`#ifdef USE_SKINNING
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
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,n3=`#ifdef USE_TRANSMISSION
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
#endif`,i3=`#ifdef USE_TRANSMISSION
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
#endif`,r3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const l3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u3=`uniform sampler2D t2D;
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
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,d3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p3=`#include <common>
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
}`,m3=`#if DEPTH_PACKING == 3200
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
}`,g3=`#define DISTANCE
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
}`,v3=`#define DISTANCE
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
}`,_3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,x3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y3=`uniform float scale;
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
}`,S3=`uniform vec3 diffuse;
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
}`,M3=`#include <common>
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
}`,E3=`uniform vec3 diffuse;
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
}`,T3=`#define LAMBERT
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
}`,w3=`#define LAMBERT
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
}`,A3=`#define MATCAP
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
}`,C3=`#define MATCAP
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
}`,b3=`#define NORMAL
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
}`,R3=`#define NORMAL
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
}`,P3=`#define PHONG
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
}`,D3=`#define PHONG
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
}`,L3=`#define STANDARD
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
}`,I3=`#define STANDARD
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
}`,N3=`#define TOON
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
}`,U3=`#define TOON
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
}`,F3=`uniform float size;
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
}`,O3=`uniform vec3 diffuse;
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
}`,B3=`#include <common>
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
}`,k3=`uniform vec3 color;
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
}`,z3=`uniform float rotation;
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
}`,V3=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:lP,alphahash_pars_fragment:uP,alphamap_fragment:cP,alphamap_pars_fragment:fP,alphatest_fragment:dP,alphatest_pars_fragment:hP,aomap_fragment:pP,aomap_pars_fragment:mP,batching_pars_vertex:gP,batching_vertex:vP,begin_vertex:_P,beginnormal_vertex:xP,bsdfs:yP,iridescence_fragment:SP,bumpmap_pars_fragment:MP,clipping_planes_fragment:EP,clipping_planes_pars_fragment:TP,clipping_planes_pars_vertex:wP,clipping_planes_vertex:AP,color_fragment:CP,color_pars_fragment:bP,color_pars_vertex:RP,color_vertex:PP,common:DP,cube_uv_reflection_fragment:LP,defaultnormal_vertex:IP,displacementmap_pars_vertex:NP,displacementmap_vertex:UP,emissivemap_fragment:FP,emissivemap_pars_fragment:OP,colorspace_fragment:BP,colorspace_pars_fragment:kP,envmap_fragment:zP,envmap_common_pars_fragment:VP,envmap_pars_fragment:HP,envmap_pars_vertex:GP,envmap_physical_pars_fragment:e2,envmap_vertex:WP,fog_vertex:XP,fog_pars_vertex:jP,fog_fragment:YP,fog_pars_fragment:qP,gradientmap_pars_fragment:$P,lightmap_pars_fragment:KP,lights_lambert_fragment:ZP,lights_lambert_pars_fragment:JP,lights_pars_begin:QP,lights_toon_fragment:t2,lights_toon_pars_fragment:n2,lights_phong_fragment:i2,lights_phong_pars_fragment:r2,lights_physical_fragment:s2,lights_physical_pars_fragment:o2,lights_fragment_begin:a2,lights_fragment_maps:l2,lights_fragment_end:u2,lightprobes_pars_fragment:c2,logdepthbuf_fragment:f2,logdepthbuf_pars_fragment:d2,logdepthbuf_pars_vertex:h2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:v2,map_particle_pars_fragment:_2,metalnessmap_fragment:x2,metalnessmap_pars_fragment:y2,morphinstance_vertex:S2,morphcolor_vertex:M2,morphnormal_vertex:E2,morphtarget_pars_vertex:T2,morphtarget_vertex:w2,normal_fragment_begin:A2,normal_fragment_maps:C2,normal_pars_fragment:b2,normal_pars_vertex:R2,normal_vertex:P2,normalmap_pars_fragment:D2,clearcoat_normal_fragment_begin:L2,clearcoat_normal_fragment_maps:I2,clearcoat_pars_fragment:N2,iridescence_pars_fragment:U2,opaque_fragment:F2,packing:O2,premultiplied_alpha_fragment:B2,project_vertex:k2,dithering_fragment:z2,dithering_pars_fragment:V2,roughnessmap_fragment:H2,roughnessmap_pars_fragment:G2,shadowmap_pars_fragment:W2,shadowmap_pars_vertex:X2,shadowmap_vertex:j2,shadowmask_pars_fragment:Y2,skinbase_vertex:q2,skinning_pars_vertex:$2,skinning_vertex:K2,skinnormal_vertex:Z2,specularmap_fragment:J2,specularmap_pars_fragment:Q2,tonemapping_fragment:e3,tonemapping_pars_fragment:t3,transmission_fragment:n3,transmission_pars_fragment:i3,uv_pars_fragment:r3,uv_pars_vertex:s3,uv_vertex:o3,worldpos_vertex:a3,background_vert:l3,background_frag:u3,backgroundCube_vert:c3,backgroundCube_frag:f3,cube_vert:d3,cube_frag:h3,depth_vert:p3,depth_frag:m3,distance_vert:g3,distance_frag:v3,equirect_vert:_3,equirect_frag:x3,linedashed_vert:y3,linedashed_frag:S3,meshbasic_vert:M3,meshbasic_frag:E3,meshlambert_vert:T3,meshlambert_frag:w3,meshmatcap_vert:A3,meshmatcap_frag:C3,meshnormal_vert:b3,meshnormal_frag:R3,meshphong_vert:P3,meshphong_frag:D3,meshphysical_vert:L3,meshphysical_frag:I3,meshtoon_vert:N3,meshtoon_frag:U3,points_vert:F3,points_frag:O3,shadow_vert:B3,shadow_frag:k3,sprite_vert:z3,sprite_frag:V3},Fe={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ji={basic:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:Gn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:Gn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:Gn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new Lt(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:Gn([Fe.points,Fe.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:Gn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:Gn([Fe.common,Fe.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:Gn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:Gn([Fe.sprite,Fe.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:Gn([Fe.common,Fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:Gn([Fe.lights,Fe.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};ji.physical={uniforms:Gn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const rc={r:0,b:0,g:0},H3=new nn,sM=new mt;sM.set(-1,0,0,0,1,0,0,0,1);function G3(n,e,t,r,o,a){const u=new Lt(0);let f=o===!0?0:1,d,h,g=null,v=0,m=null;function y(R){let D=R.isScene===!0?R.background:null;if(D&&D.isTexture){const C=R.backgroundBlurriness>0;D=e.get(D,C)}return D}function M(R){let D=!1;const C=y(R);C===null?S(u,f):C&&C.isColor&&(S(C,1),D=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(R,D){const C=y(D);C&&(C.isCubeTexture||C.mapping===jc)?(h===void 0&&(h=new ir(new yl(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:qo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=C,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(H3.makeRotationFromEuler(D.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(sM),h.material.toneMapped=bt.getTransfer(C.colorSpace)!==zt,(g!==C||v!==C.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new ir(new Yc(2,2),new Bi({name:"BackgroundMaterial",uniforms:qo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=bt.getTransfer(C.colorSpace)!==zt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||m!==n.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,m=n.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function S(R,D){R.getRGB(rc,tM(n)),t.buffers.color.setClear(rc.r,rc.g,rc.b,D,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,D=1){u.set(R),f=D,S(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,S(u,f)},render:M,addToRenderList:A,dispose:x}}function W3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=m(null);let a=o,u=!1;function f(k,$,fe,he,J){let ue=!1;const X=v(k,he,fe,$);a!==X&&(a=X,h(a.object)),ue=y(k,he,fe,J),ue&&M(k,he,fe,J),J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(ue||u)&&(u=!1,C(k,$,fe,he),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function g(k){return n.deleteVertexArray(k)}function v(k,$,fe,he){const J=he.wireframe===!0;let ue=r[$.id];ue===void 0&&(ue={},r[$.id]=ue);const X=k.isInstancedMesh===!0?k.id:0;let G=ue[X];G===void 0&&(G={},ue[X]=G);let re=G[fe.id];re===void 0&&(re={},G[fe.id]=re);let se=re[J];return se===void 0&&(se=m(d()),re[J]=se),se}function m(k){const $=[],fe=[],he=[];for(let J=0;J<t;J++)$[J]=0,fe[J]=0,he[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:fe,attributeDivisors:he,object:k,attributes:{},index:null}}function y(k,$,fe,he){const J=a.attributes,ue=$.attributes;let X=0;const G=fe.getAttributes();for(const re in G)if(G[re].location>=0){const O=J[re];let Z=ue[re];if(Z===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;X++}return a.attributesNum!==X||a.index!==he}function M(k,$,fe,he){const J={},ue=$.attributes;let X=0;const G=fe.getAttributes();for(const re in G)if(G[re].location>=0){let O=ue[re];O===void 0&&(re==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),re==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),J[re]=Z,X++}a.attributes=J,a.attributesNum=X,a.index=he}function A(){const k=a.newAttributes;for(let $=0,fe=k.length;$<fe;$++)k[$]=0}function S(k){x(k,0)}function x(k,$){const fe=a.newAttributes,he=a.enabledAttributes,J=a.attributeDivisors;fe[k]=1,he[k]===0&&(n.enableVertexAttribArray(k),he[k]=1),J[k]!==$&&(n.vertexAttribDivisor(k,$),J[k]=$)}function R(){const k=a.newAttributes,$=a.enabledAttributes;for(let fe=0,he=$.length;fe<he;fe++)$[fe]!==k[fe]&&(n.disableVertexAttribArray(fe),$[fe]=0)}function D(k,$,fe,he,J,ue,X){X===!0?n.vertexAttribIPointer(k,$,fe,J,ue):n.vertexAttribPointer(k,$,fe,he,J,ue)}function C(k,$,fe,he){A();const J=he.attributes,ue=fe.getAttributes(),X=$.defaultAttributeValues;for(const G in ue){const re=ue[G];if(re.location>=0){let se=J[G];if(se===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(se=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(se=k.instanceColor)),se!==void 0){const O=se.normalized,Z=se.itemSize,Ie=e.get(se);if(Ie===void 0)continue;const Ge=Ie.buffer,ze=Ie.type,oe=Ie.bytesPerElement,ve=ze===n.INT||ze===n.UNSIGNED_INT||se.gpuType===Am;if(se.isInterleavedBufferAttribute){const pe=se.data,Oe=pe.stride,et=se.offset;if(pe.isInstancedInterleavedBuffer){for(let Me=0;Me<re.locationSize;Me++)x(re.location+Me,pe.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Me=0;Me<re.locationSize;Me++)S(re.location+Me);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Me=0;Me<re.locationSize;Me++)D(re.location+Me,Z/re.locationSize,ze,O,Oe*oe,(et+Z/re.locationSize*Me)*oe,ve)}else{if(se.isInstancedBufferAttribute){for(let pe=0;pe<re.locationSize;pe++)x(re.location+pe,se.meshPerAttribute);k.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let pe=0;pe<re.locationSize;pe++)S(re.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let pe=0;pe<re.locationSize;pe++)D(re.location+pe,Z/re.locationSize,ze,O,Z*oe,Z/re.locationSize*pe*oe,ve)}}else if(X!==void 0){const O=X[G];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(re.location,O);break;case 3:n.vertexAttrib3fv(re.location,O);break;case 4:n.vertexAttrib4fv(re.location,O);break;default:n.vertexAttrib1fv(re.location,O)}}}}R()}function L(){I();for(const k in r){const $=r[k];for(const fe in $){const he=$[fe];for(const J in he){const ue=he[J];for(const X in ue)g(ue[X].object),delete ue[X];delete he[J]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const $=r[k.id];for(const fe in $){const he=$[fe];for(const J in he){const ue=he[J];for(const X in ue)g(ue[X].object),delete ue[X];delete he[J]}}delete r[k.id]}function U(k){for(const $ in r){const fe=r[$];for(const he in fe){const J=fe[he];if(J[k.id]===void 0)continue;const ue=J[k.id];for(const X in ue)g(ue[X].object),delete ue[X];delete J[k.id]}}}function E(k){for(const $ in r){const fe=r[$],he=k.isInstancedMesh===!0?k.id:0,J=fe[he];if(J!==void 0){for(const ue in J){const X=J[ue];for(const G in X)g(X[G].object),delete X[G];delete J[ue]}delete fe[he],Object.keys(fe).length===0&&delete r[$]}}}function I(){B(),u=!0,a!==o&&(a=o,h(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:R}}function X3(n,e,t){let r;function o(d){r=d}function a(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function u(d,h,g){g!==0&&(n.drawArraysInstanced(r,d,h,g),t.update(h,r,g))}function f(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,g);let m=0;for(let y=0;y<g;y++)m+=h[y];t.update(m,r,1)}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=f}function j3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Fi&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const E=U===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Mi&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==$i&&!E)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(ut("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const v=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:R,maxVaryings:D,maxFragmentUniforms:C,maxSamples:L,samples:P}}function Y3(n){const e=this;let t=null,r=0,o=!1,a=!1;const u=new Rs,f=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,m){const y=v.length!==0||m||r!==0||o;return o=m,r=v.length,y},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,m){t=g(v,m,0)},this.setState=function(v,m,y){const M=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,x=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?g(null):h();else{const R=a?0:r,D=R*4;let C=x.clippingState||null;d.value=C,C=g(M,m,D,y);for(let L=0;L!==D;++L)C[L]=t[L];x.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,m,y,M){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=d.value,M!==!0||S===null){const x=y+A*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(S===null||S.length<x)&&(S=new Float32Array(x));for(let D=0,C=y;D!==A;++D,C+=4)u.copy(v[D]).applyMatrix4(R,f),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}const es=4,yx=[.125,.215,.35,.446,.526,.582],Ds=20,q3=256,ja=new iM,Sx=new Lt;let Eh=null,Th=0,wh=0,Ah=!1;const $3=new q;class Mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:u=256,position:f=$3}=a;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,wh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Do(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Tr,format:Fi,colorSpace:Pc,depthBuffer:!1},o=Ex(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=K3(a)),this._blurMaterial=J3(a,e,t),this._ggxMaterial=Z3(a,e,t)}return o}_compileMaterial(e){const t=new ir(new wn,e);this._renderer.compile(t,ja)}_sceneToCubeUV(e,t,r,o,a){const d=new Si(90,1,t,r),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,m=v.autoClear,y=v.toneMapping;v.getClearColor(Sx),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ir(new yl,new Om({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let x=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,x=!0):(S.color.copy(Sx),x=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[D],a.y,a.z)):C===1?(d.up.set(0,0,h[D]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[D],a.z)):(d.up.set(0,h[D],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[D]));const L=this._cubeSize;Do(o,C*L,D>2?L:0,L,L),v.setRenderTarget(o),x&&v.render(A,d),v.render(e,d)}v.toneMapping=y,v.autoClear=m,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Os||e.mapping===jo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tx());const a=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;Do(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,ja)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-g*g),m=0+h*1.25,y=v*m,{_lodMax:M}=this,A=this._sizeLods[r],S=3*A*(r>M-es?r-M+es:0),x=4*(this._cubeSize-A);d.envMap.value=e.texture,d.roughness.value=y,d.mipInt.value=M-t,Do(a,S,x,3*A,2*A),o.setRenderTarget(a),o.render(f,ja),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Do(e,S,x,3*A,2*A),o.setRenderTarget(e),o.render(f,ja)}_blur(e,t,r,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",a),this._halfBlur(u,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[o];v.material=h;const m=h.uniforms,y=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*y):2*Math.PI/(2*Ds-1),A=a/M,S=isFinite(a)?1+Math.floor(g*A):Ds;S>Ds&&ut(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ds}`);const x=[];let R=0;for(let U=0;U<Ds;++U){const E=U/A,I=Math.exp(-E*E/2);x.push(I),U===0?R+=I:U<S&&(R+=2*I)}for(let U=0;U<x.length;U++)x[U]=x[U]/R;m.envMap.value=e.texture,m.samples.value=S,m.weights.value=x,m.latitudinal.value=u==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:D}=this;m.dTheta.value=M,m.mipInt.value=D-r;const C=this._sizeLods[o],L=3*C*(o>D-es?o-D+es:0),P=4*(this._cubeSize-C);Do(t,L,P,3*C,2*C),d.setRenderTarget(t),d.render(v,ja)}}function K3(n){const e=[],t=[],r=[];let o=n;const a=n-es+1+yx.length;for(let u=0;u<a;u++){const f=Math.pow(2,o);e.push(f);let d=1/f;u>n-es?d=yx[u-n+es-1]:u===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,v=1+h,m=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,M=6,A=3,S=2,x=1,R=new Float32Array(A*M*y),D=new Float32Array(S*M*y),C=new Float32Array(x*M*y);for(let P=0;P<y;P++){const U=P%3*2/3-1,E=P>2?0:-1,I=[U,E,0,U+2/3,E,0,U+2/3,E+1,0,U,E,0,U+2/3,E+1,0,U,E+1,0];R.set(I,A*M*P),D.set(m,S*M*P);const B=[P,P,P,P,P,P];C.set(B,x*M*P)}const L=new wn;L.setAttribute("position",new Wn(R,A)),L.setAttribute("uv",new Wn(D,S)),L.setAttribute("faceIndex",new Wn(C,x)),r.push(new ir(L,null)),o>es&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Ex(n,e,t){const r=new er(n,e,t);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Do(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function Z3(n,e,t){return new Bi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function J3(n,e,t){const r=new Float32Array(Ds),o=new q(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function Tx(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function wx(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}class oM extends er{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new QS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new yl(5,5,5),a=new Bi({name:"CubemapFromEquirect",uniforms:qo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:Sr});a.uniforms.tEquirect.value=t;const u=new ir(o,a),f=t.minFilter;return t.minFilter===Is&&(t.minFilter=Fn),new rP(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(a)}}function Q3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(m,y=!1){return m==null?null:y?u(m):a(m)}function a(m){if(m&&m.isTexture){const y=m.mapping;if(y===$d||y===Kd)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new oM(M.height);return A.fromEquirectangularTexture(n,m),e.set(m,A),m.addEventListener("dispose",h),f(A.texture,m.mapping)}else return null}}return m}function u(m){if(m&&m.isTexture){const y=m.mapping,M=y===$d||y===Kd,A=y===Os||y===jo;if(M||A){let S=t.get(m);const x=S!==void 0?S.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==x)return r===null&&(r=new Mx(n)),S=M?r.fromEquirectangular(m,S):r.fromCubemap(m,S),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),S.texture;if(S!==void 0)return S.texture;{const R=m.image;return M&&R&&R.height>0||A&&R&&d(R)?(r===null&&(r=new Mx(n)),S=M?r.fromEquirectangular(m):r.fromCubemap(m),S.texture.pmremVersion=m.pmremVersion,t.set(m,S),m.addEventListener("dispose",g),S.texture):null}}}return m}function f(m,y){return y===$d?m.mapping=Os:y===Kd&&(m.mapping=jo),m}function d(m){let y=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&y++;return y===M}function h(m){const y=m.target;y.removeEventListener("dispose",h);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function g(m){const y=m.target;y.removeEventListener("dispose",g);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function eD(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ko("WebGLRenderer: "+r+" extension not supported."),o}}}function tD(n,e,t,r){const o={},a=new WeakMap;function u(v){const m=v.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",u),delete o[m.id];const y=a.get(m);y&&(e.remove(y),a.delete(m)),r.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(v,m){return o[m.id]===!0||(m.addEventListener("dispose",u),o[m.id]=!0,t.memory.geometries++),m}function d(v){const m=v.attributes;for(const y in m)e.update(m[y],n.ARRAY_BUFFER)}function h(v){const m=[],y=v.index,M=v.attributes.position;let A=0;if(M===void 0)return;if(y!==null){const R=y.array;A=y.version;for(let D=0,C=R.length;D<C;D+=3){const L=R[D+0],P=R[D+1],U=R[D+2];m.push(L,P,P,U,U,L)}}else{const R=M.array;A=M.version;for(let D=0,C=R.length/3-1;D<C;D+=3){const L=D+0,P=D+1,U=D+2;m.push(L,P,P,U,U,L)}}const S=new(M.count>=65535?$S:qS)(m,1);S.version=A;const x=a.get(v);x&&e.remove(x),a.set(v,S)}function g(v){const m=a.get(v);if(m){const y=v.index;y!==null&&m.version<y.version&&h(v)}else h(v);return a.get(v)}return{get:f,update:d,getWireframeAttribute:g}}function nD(n,e,t){let r;function o(v){r=v}let a,u;function f(v){a=v.type,u=v.bytesPerElement}function d(v,m){n.drawElements(r,m,a,v*u),t.update(m,r,1)}function h(v,m,y){y!==0&&(n.drawElementsInstanced(r,m,a,v*u,y),t.update(m,r,y))}function g(v,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,v,0,y);let A=0;for(let S=0;S<y;S++)A+=m[S];t.update(A,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g}function iD(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,u,f){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function rD(n,e,t){const r=new WeakMap,o=new on;function a(u,f,d){const h=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let m=r.get(f);if(m===void 0||m.count!==v){let B=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var y=B;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,S=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),S===!0&&(C=3);let L=f.attributes.position.count*C,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const U=new Float32Array(L*P*4*v),E=new XS(U,L,P,v);E.type=$i,E.needsUpdate=!0;const I=C*4;for(let k=0;k<v;k++){const $=x[k],fe=R[k],he=D[k],J=L*P*4*k;for(let ue=0;ue<$.count;ue++){const X=ue*I;M===!0&&(o.fromBufferAttribute($,ue),U[J+X+0]=o.x,U[J+X+1]=o.y,U[J+X+2]=o.z,U[J+X+3]=0),A===!0&&(o.fromBufferAttribute(fe,ue),U[J+X+4]=o.x,U[J+X+5]=o.y,U[J+X+6]=o.z,U[J+X+7]=0),S===!0&&(o.fromBufferAttribute(he,ue),U[J+X+8]=o.x,U[J+X+9]=o.y,U[J+X+10]=o.z,U[J+X+11]=he.itemSize===4?o.w:1)}}m={count:v,texture:E,size:new gt(L,P)},r.set(f,m),f.addEventListener("dispose",B)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const A=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",A),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:a}}function sD(n,e,t,r,o){let a=new WeakMap;function u(h){const g=o.render.frame,v=h.geometry,m=e.get(h,v);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==g&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const y=h.skeleton;a.get(y)!==g&&(y.update(),a.set(y,g))}return m}function f(){a=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:u,dispose:f}}const oD={[RS]:"LINEAR_TONE_MAPPING",[PS]:"REINHARD_TONE_MAPPING",[DS]:"CINEON_TONE_MAPPING",[LS]:"ACES_FILMIC_TONE_MAPPING",[NS]:"AGX_TONE_MAPPING",[US]:"NEUTRAL_TONE_MAPPING",[IS]:"CUSTOM_TONE_MAPPING"};function aD(n,e,t,r,o,a){const u=new er(e,t,{type:n,depthBuffer:o,stencilBuffer:a,samples:r?4:0,depthTexture:o?new Yo(e,t):void 0}),f=new er(e,t,{type:Tr,depthBuffer:!1,stencilBuffer:!1}),d=new wn;d.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new jn([0,2,0,0,2,0],2));const h=new tP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ir(d,h),v=new iM(-1,1,1,-1,0,1);let m=null,y=null,M=!1,A,S=null,x=[],R=!1;this.setSize=function(D,C){u.setSize(D,C),f.setSize(D,C);for(let L=0;L<x.length;L++){const P=x[L];P.setSize&&P.setSize(D,C)}},this.setEffects=function(D){x=D,R=x.length>0&&x[0].isRenderPass===!0;const C=u.width,L=u.height;for(let P=0;P<x.length;P++){const U=x[P];U.setSize&&U.setSize(C,L)}},this.begin=function(D,C){if(M||D.toneMapping===Qi&&x.length===0)return!1;if(S=C,C!==null){const L=C.width,P=C.height;(u.width!==L||u.height!==P)&&this.setSize(L,P)}return R===!1&&D.setRenderTarget(u),A=D.toneMapping,D.toneMapping=Qi,!0},this.hasRenderPass=function(){return R},this.end=function(D,C){D.toneMapping=A,M=!0;let L=u,P=f;for(let U=0;U<x.length;U++){const E=x[U];if(E.enabled!==!1&&(E.render(D,P,L,C),E.needsSwap!==!1)){const I=L;L=P,P=I}}if(m!==D.outputColorSpace||y!==D.toneMapping){m=D.outputColorSpace,y=D.toneMapping,h.defines={},bt.getTransfer(m)===zt&&(h.defines.SRGB_TRANSFER="");const U=oD[y];U&&(h.defines[U]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,D.setRenderTarget(S),D.render(g,v),S=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),d.dispose(),h.dispose()}}const aM=new On,Op=new Yo(1,1),lM=new XS,uM=new AR,cM=new QS,Ax=[],Cx=[],bx=new Float32Array(16),Rx=new Float32Array(9),Px=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Ax[o];if(a===void 0&&(a=new Float32Array(o),Ax[o]=a),e!==0){r.toArray(a,0);for(let u=1,f=0;u!==e;++u)f+=t,n[u].toArray(a,f)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function $c(n,e){let t=Cx[e];t===void 0&&(t=new Int32Array(e),Cx[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function lD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function uD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function cD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function fD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function dD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;Px.set(r),n.uniformMatrix2fv(this.addr,!1,Px),mn(t,r)}}function hD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;Rx.set(r),n.uniformMatrix3fv(this.addr,!1,Rx),mn(t,r)}}function pD(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;bx.set(r),n.uniformMatrix4fv(this.addr,!1,bx),mn(t,r)}}function mD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function vD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function _D(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function xD(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function yD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function SD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function MD(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function ED(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Op.compareFunction=t.isReversedDepthBuffer()?Im:Lm,a=Op):a=aM,t.setTexture2D(e||a,o)}function TD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||uM,o)}function wD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||cM,o)}function AD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||lM,o)}function CD(n){switch(n){case 5126:return lD;case 35664:return uD;case 35665:return cD;case 35666:return fD;case 35674:return dD;case 35675:return hD;case 35676:return pD;case 5124:case 35670:return mD;case 35667:case 35671:return gD;case 35668:case 35672:return vD;case 35669:case 35673:return _D;case 5125:return xD;case 36294:return yD;case 36295:return SD;case 36296:return MD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return wD;case 36289:case 36303:case 36311:case 36292:return AD}}function bD(n,e){n.uniform1fv(this.addr,e)}function RD(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function PD(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function DD(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function LD(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ID(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function ND(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UD(n,e){n.uniform1iv(this.addr,e)}function FD(n,e){n.uniform2iv(this.addr,e)}function OD(n,e){n.uniform3iv(this.addr,e)}function BD(n,e){n.uniform4iv(this.addr,e)}function kD(n,e){n.uniform1uiv(this.addr,e)}function zD(n,e){n.uniform2uiv(this.addr,e)}function VD(n,e){n.uniform3uiv(this.addr,e)}function HD(n,e){n.uniform4uiv(this.addr,e)}function GD(n,e,t){const r=this.cache,o=e.length,a=$c(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));let u;this.type===n.SAMPLER_2D_SHADOW?u=Op:u=aM;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,a[f])}function WD(n,e,t){const r=this.cache,o=e.length,a=$c(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||uM,a[u])}function XD(n,e,t){const r=this.cache,o=e.length,a=$c(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||cM,a[u])}function jD(n,e,t){const r=this.cache,o=e.length,a=$c(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||lM,a[u])}function YD(n){switch(n){case 5126:return bD;case 35664:return RD;case 35665:return PD;case 35666:return DD;case 35674:return LD;case 35675:return ID;case 35676:return ND;case 5124:case 35670:return UD;case 35667:case 35671:return FD;case 35668:case 35672:return OD;case 35669:case 35673:return BD;case 5125:return kD;case 36294:return zD;case 36295:return VD;case 36296:return HD;case 35678:case 36198:case 36298:case 36306:case 35682:return GD;case 35679:case 36299:case 36307:return WD;case 35680:case 36300:case 36308:case 36293:return XD;case 36289:case 36303:case 36311:case 36292:return jD}}class qD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CD(t.type)}}class $D{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=YD(t.type)}}class KD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function Dx(n,e){n.seq.push(e),n.map[e.id]=e}function ZD(n,e,t){const r=n.name,o=r.length;for(Ch.lastIndex=0;;){const a=Ch.exec(r),u=Ch.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===o){Dx(t,h===void 0?new qD(f,n,e):new $D(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new KD(f),Dx(t,v)),t=v}}}class vc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),d=e.getUniformLocation(t,f.name);ZD(f,d,this)}const o=[],a=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):a.push(u);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,u=t.length;a!==u;++a){const f=t[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function Lx(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const JD=37297;let QD=0;function eL(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const Ix=new mt;function tL(n){bt._getMatrix(Ix,bt.workingColorSpace,n);const e=`mat3( ${Ix.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case Dc:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Nx(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+a+`

`+eL(n.getShaderSource(e),f)}else return a}function nL(n,e){const t=tL(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iL={[RS]:"Linear",[PS]:"Reinhard",[DS]:"Cineon",[LS]:"ACESFilmic",[NS]:"AgX",[US]:"Neutral",[IS]:"Custom"};function rL(n,e){const t=iL[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new q;function sL(){bt.getLuminanceCoefficients(sc);const n=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function aL(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function lL(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),u=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[u]={type:a.type,location:n.getAttribLocation(e,u),locationSize:f}}return t}function Qa(n){return n!==""}function Ux(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(n){return n.replace(uL,fL)}const cL=new Map;function fL(n,e){let t=vt[e];if(t===void 0){const r=cL.get(e);if(r!==void 0)t=vt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bp(t)}const dL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ox(n){return n.replace(dL,hL)}function hL(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Bx(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}const pL={[dc]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function mL(n){return pL[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gL={[Os]:"ENVMAP_TYPE_CUBE",[jo]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function vL(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gL[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _L={[jo]:"ENVMAP_MODE_REFRACTION"};function xL(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_L[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yL={[bS]:"ENVMAP_BLENDING_MULTIPLY",[Gb]:"ENVMAP_BLENDING_MIX",[Wb]:"ENVMAP_BLENDING_ADD"};function SL(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yL[n.combine]||"ENVMAP_BLENDING_NONE"}function ML(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function EL(n,e,t,r){const o=n.getContext(),a=t.defines;let u=t.vertexShader,f=t.fragmentShader;const d=mL(t),h=vL(t),g=xL(t),v=SL(t),m=ML(t),y=oL(t),M=aL(a),A=o.createProgram();let S,x,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Qa).join(`
`),x.length>0&&(x+=`
`)):(S=[Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),x=[Bx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?rL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,nL("linearToOutputTexel",t.outputColorSpace),sL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=Bp(u),u=Ux(u,t),u=Fx(u,t),f=Bp(f),f=Ux(f,t),f=Fx(f,t),u=Ox(u),f=Ox(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const D=R+S+u,C=R+x+f,L=Lx(o,o.VERTEX_SHADER,D),P=Lx(o,o.FRAGMENT_SHADER,C);o.attachShader(A,L),o.attachShader(A,P),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function U(k){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",fe=o.getShaderInfoLog(L)||"",he=o.getShaderInfoLog(P)||"",J=$.trim(),ue=fe.trim(),X=he.trim();let G=!0,re=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,A,L,P);else{const se=Nx(o,L,"vertex"),O=Nx(o,P,"fragment");Pt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+J+`
`+se+`
`+O)}else J!==""?ut("WebGLProgram: Program Info Log:",J):(ue===""||X==="")&&(re=!1);re&&(k.diagnostics={runnable:G,programLog:J,vertexShader:{log:ue,prefix:S},fragmentShader:{log:X,prefix:x}})}o.deleteShader(L),o.deleteShader(P),E=new vc(o,A),I=lL(o,A)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let I;this.getAttributes=function(){return I===void 0&&U(this),I};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(A,JD)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QD++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=L,this.fragmentShader=P,this}let TL=0;class wL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new AL(e),t.set(e,r)),r}}class AL{constructor(e){this.id=TL++,this.code=e,this.usedTimes=0}}function CL(n){return n===Bs||n===bc||n===Rc}function bL(n,e,t,r,o,a){const u=new jS,f=new wL,d=new Set,h=[],g=new Map,v=r.logarithmicDepthBuffer;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function A(E,I,B,k,$,fe){const he=k.fog,J=$.geometry,ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,G=e.get(E.envMap||ue,X),re=G&&G.mapping===jc?G.image.height:null,se=y[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&ut("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const O=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Z=O!==void 0?O.length:0;let Ie=0;J.morphAttributes.position!==void 0&&(Ie=1),J.morphAttributes.normal!==void 0&&(Ie=2),J.morphAttributes.color!==void 0&&(Ie=3);let Ge,ze,oe,ve;if(se){const We=ji[se];Ge=We.vertexShader,ze=We.fragmentShader}else{Ge=E.vertexShader,ze=E.fragmentShader;const We=f.getVertexShaderStage(E),Ht=f.getFragmentShaderStage(E);f.update(E,We,Ht),oe=We.id,ve=Ht.id}const pe=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),et=$.isInstancedMesh===!0,Me=$.isBatchedMesh===!0,ct=!!E.map,Ne=!!E.matcap,nt=!!G,st=!!E.aoMap,rt=!!E.lightMap,yt=!!E.bumpMap&&E.wireframe===!1,Et=!!E.normalMap,Ot=!!E.displacementMap,At=!!E.emissiveMap,Ct=!!E.metalnessMap,_t=!!E.roughnessMap,H=E.anisotropy>0,Xt=E.clearcoat>0,Tt=E.dispersion>0,N=E.iridescence>0,T=E.sheen>0,K=E.transmission>0,ie=H&&!!E.anisotropyMap,ce=Xt&&!!E.clearcoatMap,Ee=Xt&&!!E.clearcoatNormalMap,Re=Xt&&!!E.clearcoatRoughnessMap,de=N&&!!E.iridescenceMap,ge=N&&!!E.iridescenceThicknessMap,De=T&&!!E.sheenColorMap,$e=T&&!!E.sheenRoughnessMap,Le=!!E.specularMap,be=!!E.specularColorMap,tt=!!E.specularIntensityMap,it=K&&!!E.transmissionMap,ft=K&&!!E.thicknessMap,V=!!E.gradientMap,Ce=!!E.alphaMap,me=E.alphaTest>0,Pe=!!E.alphaHash,Ue=!!E.extensions;let _e=Qi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(_e=n.toneMapping);const je={shaderID:se,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:ze,defines:E.defines,customVertexShaderID:oe,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Me,batchingColor:Me&&$._colorsTexture!==null,instancing:et,instancingColor:et&&$.instanceColor!==null,instancingMorph:et&&$.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:Ne,envMap:nt,envMapMode:nt&&G.mapping,envMapCubeUVHeight:re,aoMap:st,lightMap:rt,bumpMap:yt,normalMap:Et,displacementMap:Ot,emissiveMap:At,normalMapObjectSpace:Et&&E.normalMapType===Yb,normalMapTangentSpace:Et&&E.normalMapType===z_,packedNormalMap:Et&&E.normalMapType===z_&&CL(E.normalMap.format),metalnessMap:Ct,roughnessMap:_t,anisotropy:H,anisotropyMap:ie,clearcoat:Xt,clearcoatMap:ce,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:Tt,iridescence:N,iridescenceMap:de,iridescenceThicknessMap:ge,sheen:T,sheenColorMap:De,sheenRoughnessMap:$e,specularMap:Le,specularColorMap:be,specularIntensityMap:tt,transmission:K,transmissionMap:it,thicknessMap:ft,gradientMap:V,opaque:E.transparent===!1&&E.blending===Bo&&E.alphaToCoverage===!1,alphaMap:Ce,alphaTest:me,alphaHash:Pe,combine:E.combine,mapUv:ct&&M(E.map.channel),aoMapUv:st&&M(E.aoMap.channel),lightMapUv:rt&&M(E.lightMap.channel),bumpMapUv:yt&&M(E.bumpMap.channel),normalMapUv:Et&&M(E.normalMap.channel),displacementMapUv:Ot&&M(E.displacementMap.channel),emissiveMapUv:At&&M(E.emissiveMap.channel),metalnessMapUv:Ct&&M(E.metalnessMap.channel),roughnessMapUv:_t&&M(E.roughnessMap.channel),anisotropyMapUv:ie&&M(E.anisotropyMap.channel),clearcoatMapUv:ce&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:$e&&M(E.sheenRoughnessMap.channel),specularMapUv:Le&&M(E.specularMap.channel),specularColorMapUv:be&&M(E.specularColorMap.channel),specularIntensityMapUv:tt&&M(E.specularIntensityMap.channel),transmissionMapUv:it&&M(E.transmissionMap.channel),thicknessMapUv:ft&&M(E.thicknessMap.channel),alphaMapUv:Ce&&M(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Et||H),vertexNormals:!!J.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!J.attributes.uv&&(ct||Ce),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||J.attributes.normal===void 0&&Et===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Oe,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ie,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&bt.getTransfer(E.map.colorSpace)===zt,decodeVideoTextureEmissive:At&&E.emissiveMap.isVideoTexture===!0&&bt.getTransfer(E.emissiveMap.colorSpace)===zt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Yi,flipSided:E.side===ti,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Me)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=d.has(1),je.vertexUv2s=d.has(2),je.vertexUv3s=d.has(3),d.clear(),je}function S(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)I.push(B),I.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(x(I,E),R(I,E),I.push(n.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function x(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function R(E,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function D(E){const I=y[E.type];let B;if(I){const k=ji[I];B=JR.clone(k.uniforms)}else B=E.uniforms;return B}function C(E,I){let B=g.get(I);return B!==void 0?++B.usedTimes:(B=new EL(n,I,E,o),h.push(B),g.set(I,B)),B}function L(E){if(--E.usedTimes===0){const I=h.indexOf(E);h[I]=h[h.length-1],h.pop(),g.delete(E.cacheKey),E.destroy()}}function P(E){f.remove(E)}function U(){f.dispose()}return{getParameters:A,getProgramCacheKey:S,getUniforms:D,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:h,dispose:U}}function RL(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let f=n.get(u);return f===void 0&&(f={},n.set(u,f)),f}function r(u){n.delete(u)}function o(u,f,d){n.get(u)[f]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function PL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function kx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zx(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function u(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function f(m,y,M,A,S,x){let R=n[e];return R===void 0?(R={id:m.id,object:m,geometry:y,material:M,materialVariant:u(m),groupOrder:A,renderOrder:m.renderOrder,z:S,group:x},n[e]=R):(R.id=m.id,R.object=m,R.geometry=y,R.material=M,R.materialVariant=u(m),R.groupOrder=A,R.renderOrder=m.renderOrder,R.z=S,R.group=x),e++,R}function d(m,y,M,A,S,x){const R=f(m,y,M,A,S,x);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function h(m,y,M,A,S,x){const R=f(m,y,M,A,S,x);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function g(m,y,M){t.length>1&&t.sort(m||PL),r.length>1&&r.sort(y||kx),o.length>1&&o.sort(y||kx),M&&(t.reverse(),r.reverse(),o.reverse())}function v(){for(let m=e,y=n.length;m<y;m++){const M=n[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:g}}function DL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let u;return a===void 0?(u=new zx,n.set(r,[u])):o>=a.length?(u=new zx,a.push(u)):u=a[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function LL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Lt};break;case"SpotLight":t={position:new q,direction:new q,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new q,halfWidth:new q,halfHeight:new q};break}return n[e.id]=t,t}}}function IL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NL=0;function UL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FL(n){const e=new LL,t=IL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new q);const o=new q,a=new nn,u=new nn;function f(h){let g=0,v=0,m=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let y=0,M=0,A=0,S=0,x=0,R=0,D=0,C=0,L=0,P=0,U=0;h.sort(UL);for(let I=0,B=h.length;I<B;I++){const k=h[I],$=k.color,fe=k.intensity,he=k.distance;let J=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Bs?J=k.shadow.map.texture:J=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=$.r*fe,v+=$.g*fe,m+=$.b*fe;else if(k.isLightProbe){for(let ue=0;ue<9;ue++)r.probe[ue].addScaledVector(k.sh.coefficients[ue],fe);U++}else if(k.isDirectionalLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,G=t.get(k);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.directionalShadow[y]=G,r.directionalShadowMap[y]=J,r.directionalShadowMatrix[y]=k.shadow.matrix,R++}r.directional[y]=ue,y++}else if(k.isSpotLight){const ue=e.get(k);ue.position.setFromMatrixPosition(k.matrixWorld),ue.color.copy($).multiplyScalar(fe),ue.distance=he,ue.coneCos=Math.cos(k.angle),ue.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ue.decay=k.decay,r.spot[A]=ue;const X=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,X.updateMatrices(k),k.castShadow&&P++),r.spotLightMatrix[A]=X.matrix,k.castShadow){const G=t.get(k);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.spotShadow[A]=G,r.spotShadowMap[A]=J,C++}A++}else if(k.isRectAreaLight){const ue=e.get(k);ue.color.copy($).multiplyScalar(fe),ue.halfWidth.set(k.width*.5,0,0),ue.halfHeight.set(0,k.height*.5,0),r.rectArea[S]=ue,S++}else if(k.isPointLight){const ue=e.get(k);if(ue.color.copy(k.color).multiplyScalar(k.intensity),ue.distance=k.distance,ue.decay=k.decay,k.castShadow){const X=k.shadow,G=t.get(k);G.shadowIntensity=X.intensity,G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,r.pointShadow[M]=G,r.pointShadowMap[M]=J,r.pointShadowMatrix[M]=k.shadow.matrix,D++}r.point[M]=ue,M++}else if(k.isHemisphereLight){const ue=e.get(k);ue.skyColor.copy(k.color).multiplyScalar(fe),ue.groundColor.copy(k.groundColor).multiplyScalar(fe),r.hemi[x]=ue,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Fe.LTC_FLOAT_1,r.rectAreaLTC2=Fe.LTC_FLOAT_2):(r.rectAreaLTC1=Fe.LTC_HALF_1,r.rectAreaLTC2=Fe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=m;const E=r.hash;(E.directionalLength!==y||E.pointLength!==M||E.spotLength!==A||E.rectAreaLength!==S||E.hemiLength!==x||E.numDirectionalShadows!==R||E.numPointShadows!==D||E.numSpotShadows!==C||E.numSpotMaps!==L||E.numLightProbes!==U)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+L-P,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=U,E.directionalLength=y,E.pointLength=M,E.spotLength=A,E.rectAreaLength=S,E.hemiLength=x,E.numDirectionalShadows=R,E.numPointShadows=D,E.numSpotShadows=C,E.numSpotMaps=L,E.numLightProbes=U,r.version=NL++)}function d(h,g){let v=0,m=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let x=0,R=h.length;x<R;x++){const D=h[x];if(D.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),v++}else if(D.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),u.identity(),a.copy(D.matrixWorld),a.premultiply(S),u.extractRotation(a),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(S),m++}else if(D.isHemisphereLight){const C=r.hemi[A];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(S),A++}}}return{setup:f,setupView:d,state:r}}function Vx(n){const e=new FL(n),t=[],r=[],o=[];function a(m){v.camera=m,t.length=0,r.length=0,o.length=0}function u(m){t.push(m)}function f(m){r.push(m)}function d(m){o.push(m)}function h(){e.setup(t)}function g(m){e.setupView(t,m)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:g,pushLight:u,pushShadow:f,pushLightProbeGrid:d}}function OL(n){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let f;return u===void 0?(f=new Vx(n),e.set(o,[f])):a>=u.length?(f=new Vx(n),u.push(f)):f=u[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const BL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kL=`uniform sampler2D shadow_pass;
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
}`,zL=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],VL=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Hx=new nn,Ya=new q,bh=new q;function HL(n,e,t){let r=new JS;const o=new gt,a=new gt,u=new on,f=new nP,d=new iP,h={},g=t.maxTextureSize,v={[ns]:ti,[ti]:ns,[Yi]:Yi},m=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:BL,fragmentShader:kL}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const M=new wn;M.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ir(M,m),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dc;let x=this.type;this.render=function(P,U,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===Tb&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=dc);const I=n.getRenderTarget(),B=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Sr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const fe=x!==this.type;fe&&U.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(J=>J.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,J=P.length;he<J;he++){const ue=P[he],X=ue.shadow;if(X===void 0){ut("WebGLShadowMap:",ue,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const G=X.getFrameExtents();o.multiply(G),a.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(a.x=Math.floor(g/G.x),o.x=a.x*G.x,X.mapSize.x=a.x),o.y>g&&(a.y=Math.floor(g/G.y),o.y=a.y*G.y,X.mapSize.y=a.y));const re=n.state.buffers.depth.getReversed();if(X.camera._reversedDepth=re,X.map===null||fe===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ja){if(ue.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new er(o.x,o.y,{format:Bs,type:Tr,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),X.map.texture.name=ue.name+".shadowMap",X.map.depthTexture=new Yo(o.x,o.y,$i),X.map.depthTexture.name=ue.name+".shadowMapDepth",X.map.depthTexture.format=wr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn}else ue.isPointLight?(X.map=new oM(o.x),X.map.depthTexture=new KR(o.x,nr)):(X.map=new er(o.x,o.y),X.map.depthTexture=new Yo(o.x,o.y,nr)),X.map.depthTexture.name=ue.name+".shadowMap",X.map.depthTexture.format=wr,this.type===dc?(X.map.depthTexture.compareFunction=re?Im:Lm,X.map.depthTexture.minFilter=Fn,X.map.depthTexture.magFilter=Fn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Tn,X.map.depthTexture.magFilter=Tn);X.camera.updateProjectionMatrix()}const se=X.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if(X.map.isWebGLCubeRenderTarget)n.setRenderTarget(X.map,O),n.clear();else{O===0&&(n.setRenderTarget(X.map),n.clear());const Z=X.getViewport(O);u.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),$.viewport(u)}if(ue.isPointLight){const Z=X.camera,Ie=X.matrix,Ge=ue.distance||Z.far;Ge!==Z.far&&(Z.far=Ge,Z.updateProjectionMatrix()),Ya.setFromMatrixPosition(ue.matrixWorld),Z.position.copy(Ya),bh.copy(Z.position),bh.add(zL[O]),Z.up.copy(VL[O]),Z.lookAt(bh),Z.updateMatrixWorld(),Ie.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Hx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Hx,Z.coordinateSystem,Z.reversedDepth)}else X.updateMatrices(ue);r=X.getFrustum(),C(U,E,X.camera,ue,this.type)}X.isPointLightShadow!==!0&&this.type===Ja&&R(X,E),X.needsUpdate=!1}x=this.type,S.needsUpdate=!1,n.setRenderTarget(I,B,k)};function R(P,U){const E=e.update(A);m.defines.VSM_SAMPLES!==P.blurSamples&&(m.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new er(o.x,o.y,{format:Bs,type:Tr})),m.uniforms.shadow_pass.value=P.map.depthTexture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(U,null,E,m,A,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(U,null,E,y,A,null)}function D(P,U,E,I){let B=null;const k=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)B=k;else if(B=E.isPointLight===!0?d:f,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const $=B.uuid,fe=U.uuid;let he=h[$];he===void 0&&(he={},h[$]=he);let J=he[fe];J===void 0&&(J=B.clone(),he[fe]=J,U.addEventListener("dispose",L)),B=J}if(B.visible=U.visible,B.wireframe=U.wireframe,I===Ja?B.side=U.shadowSide!==null?U.shadowSide:U.side:B.side=U.shadowSide!==null?U.shadowSide:v[U.side],B.alphaMap=U.alphaMap,B.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,B.map=U.map,B.clipShadows=U.clipShadows,B.clippingPlanes=U.clippingPlanes,B.clipIntersection=U.clipIntersection,B.displacementMap=U.displacementMap,B.displacementScale=U.displacementScale,B.displacementBias=U.displacementBias,B.wireframeLinewidth=U.wireframeLinewidth,B.linewidth=U.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=n.properties.get(B);$.light=E}return B}function C(P,U,E,I,B){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===Ja)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const fe=e.update(P),he=P.material;if(Array.isArray(he)){const J=fe.groups;for(let ue=0,X=J.length;ue<X;ue++){const G=J[ue],re=he[G.materialIndex];if(re&&re.visible){const se=D(P,re,I,B);P.onBeforeShadow(n,P,U,E,fe,se,G),n.renderBufferDirect(E,null,fe,se,P,G),P.onAfterShadow(n,P,U,E,fe,se,G)}}}else if(he.visible){const J=D(P,he,I,B);P.onBeforeShadow(n,P,U,E,fe,J,null),n.renderBufferDirect(E,null,fe,J,P,null),P.onAfterShadow(n,P,U,E,fe,J,null)}}const $=P.children;for(let fe=0,he=$.length;fe<he;fe++)C($[fe],U,E,I,B)}function L(P){P.target.removeEventListener("dispose",L);for(const E in h){const I=h[E],B=P.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function GL(n,e){function t(){let V=!1;const Ce=new on;let me=null;const Pe=new on(0,0,0,0);return{setMask:function(Ue){me!==Ue&&!V&&(n.colorMask(Ue,Ue,Ue,Ue),me=Ue)},setLocked:function(Ue){V=Ue},setClear:function(Ue,_e,je,We,Ht){Ht===!0&&(Ue*=We,_e*=We,je*=We),Ce.set(Ue,_e,je,We),Pe.equals(Ce)===!1&&(n.clearColor(Ue,_e,je,We),Pe.copy(Ce))},reset:function(){V=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,me=null,Pe=null,Ue=null;return{setReversed:function(_e){if(Ce!==_e){const je=e.get("EXT_clip_control");_e?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ce=_e;const We=Ue;Ue=null,this.setClear(We)}},getReversed:function(){return Ce},setTest:function(_e){_e?pe(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(_e){me!==_e&&!V&&(n.depthMask(_e),me=_e)},setFunc:function(_e){if(Ce&&(_e=iR[_e]),Pe!==_e){switch(_e){case $h:n.depthFunc(n.NEVER);break;case Kh:n.depthFunc(n.ALWAYS);break;case Zh:n.depthFunc(n.LESS);break;case Xo:n.depthFunc(n.LEQUAL);break;case Jh:n.depthFunc(n.EQUAL);break;case Qh:n.depthFunc(n.GEQUAL);break;case ep:n.depthFunc(n.GREATER);break;case tp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Pe=_e}},setLocked:function(_e){V=_e},setClear:function(_e){Ue!==_e&&(Ue=_e,Ce&&(_e=1-_e),n.clearDepth(_e))},reset:function(){V=!1,me=null,Pe=null,Ue=null,Ce=!1}}}function o(){let V=!1,Ce=null,me=null,Pe=null,Ue=null,_e=null,je=null,We=null,Ht=null;return{setTest:function(Ut){V||(Ut?pe(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(Ut){Ce!==Ut&&!V&&(n.stencilMask(Ut),Ce=Ut)},setFunc:function(Ut,An,ci){(me!==Ut||Pe!==An||Ue!==ci)&&(n.stencilFunc(Ut,An,ci),me=Ut,Pe=An,Ue=ci)},setOp:function(Ut,An,ci){(_e!==Ut||je!==An||We!==ci)&&(n.stencilOp(Ut,An,ci),_e=Ut,je=An,We=ci)},setLocked:function(Ut){V=Ut},setClear:function(Ut){Ht!==Ut&&(n.clearStencil(Ut),Ht=Ut)},reset:function(){V=!1,Ce=null,me=null,Pe=null,Ue=null,_e=null,je=null,We=null,Ht=null}}}const a=new t,u=new r,f=new o,d=new WeakMap,h=new WeakMap;let g={},v={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,R=null,D=null,C=null,L=null,P=null,U=null,E=new Lt(0,0,0),I=0,B=!1,k=null,$=null,fe=null,he=null,J=null;const ue=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(re)[1]),X=G>=1):re.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),X=G>=2);let se=null,O={};const Z=n.getParameter(n.SCISSOR_BOX),Ie=n.getParameter(n.VIEWPORT),Ge=new on().fromArray(Z),ze=new on().fromArray(Ie);function oe(V,Ce,me,Pe){const Ue=new Uint8Array(4),_e=n.createTexture();n.bindTexture(V,_e),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<me;je++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Pe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(Ce+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return _e}const ve={};ve[n.TEXTURE_2D]=oe(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=oe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[n.TEXTURE_2D_ARRAY]=oe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=oe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),pe(n.DEPTH_TEST),u.setFunc(Xo),yt(!1),Et(O_),pe(n.CULL_FACE),st(Sr);function pe(V){g[V]!==!0&&(n.enable(V),g[V]=!0)}function Oe(V){g[V]!==!1&&(n.disable(V),g[V]=!1)}function et(V,Ce){return m[V]!==Ce?(n.bindFramebuffer(V,Ce),m[V]=Ce,V===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ce),V===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Me(V,Ce){let me=M,Pe=!1;if(V){me=y.get(Ce),me===void 0&&(me=[],y.set(Ce,me));const Ue=V.textures;if(me.length!==Ue.length||me[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,je=Ue.length;_e<je;_e++)me[_e]=n.COLOR_ATTACHMENT0+_e;me.length=Ue.length,Pe=!0}}else me[0]!==n.BACK&&(me[0]=n.BACK,Pe=!0);Pe&&n.drawBuffers(me)}function ct(V){return A!==V?(n.useProgram(V),A=V,!0):!1}const Ne={[Ps]:n.FUNC_ADD,[Ab]:n.FUNC_SUBTRACT,[Cb]:n.FUNC_REVERSE_SUBTRACT};Ne[bb]=n.MIN,Ne[Rb]=n.MAX;const nt={[Pb]:n.ZERO,[Db]:n.ONE,[Lb]:n.SRC_COLOR,[Yh]:n.SRC_ALPHA,[Bb]:n.SRC_ALPHA_SATURATE,[Fb]:n.DST_COLOR,[Nb]:n.DST_ALPHA,[Ib]:n.ONE_MINUS_SRC_COLOR,[qh]:n.ONE_MINUS_SRC_ALPHA,[Ob]:n.ONE_MINUS_DST_COLOR,[Ub]:n.ONE_MINUS_DST_ALPHA,[kb]:n.CONSTANT_COLOR,[zb]:n.ONE_MINUS_CONSTANT_COLOR,[Vb]:n.CONSTANT_ALPHA,[Hb]:n.ONE_MINUS_CONSTANT_ALPHA};function st(V,Ce,me,Pe,Ue,_e,je,We,Ht,Ut){if(V===Sr){S===!0&&(Oe(n.BLEND),S=!1);return}if(S===!1&&(pe(n.BLEND),S=!0),V!==wb){if(V!==x||Ut!==B){if((R!==Ps||L!==Ps)&&(n.blendEquation(n.FUNC_ADD),R=Ps,L=Ps),Ut)switch(V){case Bo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFunc(n.ONE,n.ONE);break;case B_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case k_:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",V);break}else switch(V){case Bo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case B_:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k_:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",V);break}D=null,C=null,P=null,U=null,E.set(0,0,0),I=0,x=V,B=Ut}return}Ue=Ue||Ce,_e=_e||me,je=je||Pe,(Ce!==R||Ue!==L)&&(n.blendEquationSeparate(Ne[Ce],Ne[Ue]),R=Ce,L=Ue),(me!==D||Pe!==C||_e!==P||je!==U)&&(n.blendFuncSeparate(nt[me],nt[Pe],nt[_e],nt[je]),D=me,C=Pe,P=_e,U=je),(We.equals(E)===!1||Ht!==I)&&(n.blendColor(We.r,We.g,We.b,Ht),E.copy(We),I=Ht),x=V,B=!1}function rt(V,Ce){V.side===Yi?Oe(n.CULL_FACE):pe(n.CULL_FACE);let me=V.side===ti;Ce&&(me=!me),yt(me),V.blending===Bo&&V.transparent===!1?st(Sr):st(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const Pe=V.stencilWrite;f.setTest(Pe),Pe&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),At(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function yt(V){k!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),k=V)}function Et(V){V!==Mb?(pe(n.CULL_FACE),V!==$&&(V===O_?n.cullFace(n.BACK):V===Eb?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),$=V}function Ot(V){V!==fe&&(X&&n.lineWidth(V),fe=V)}function At(V,Ce,me){V?(pe(n.POLYGON_OFFSET_FILL),(he!==Ce||J!==me)&&(he=Ce,J=me,u.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,me))):Oe(n.POLYGON_OFFSET_FILL)}function Ct(V){V?pe(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function _t(V){V===void 0&&(V=n.TEXTURE0+ue-1),se!==V&&(n.activeTexture(V),se=V)}function H(V,Ce,me){me===void 0&&(se===null?me=n.TEXTURE0+ue-1:me=se);let Pe=O[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},O[me]=Pe),(Pe.type!==V||Pe.texture!==Ce)&&(se!==me&&(n.activeTexture(me),se=me),n.bindTexture(V,Ce||ve[V]),Pe.type=V,Pe.texture=Ce)}function Xt(){const V=O[se];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Tt(){try{n.compressedTexImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function T(){try{n.texSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function K(){try{n.texSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function ie(){try{n.compressedTexSubImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function ce(){try{n.compressedTexSubImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Ee(){try{n.texStorage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function Re(){try{n.texStorage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function de(){try{n.texImage2D(...arguments)}catch(V){Pt("WebGLState:",V)}}function ge(){try{n.texImage3D(...arguments)}catch(V){Pt("WebGLState:",V)}}function De(V){return v[V]!==void 0?v[V]:n.getParameter(V)}function $e(V,Ce){v[V]!==Ce&&(n.pixelStorei(V,Ce),v[V]=Ce)}function Le(V){Ge.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function be(V){ze.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),ze.copy(V))}function tt(V,Ce){let me=h.get(Ce);me===void 0&&(me=new WeakMap,h.set(Ce,me));let Pe=me.get(V);Pe===void 0&&(Pe=n.getUniformBlockIndex(Ce,V.name),me.set(V,Pe))}function it(V,Ce){const Pe=h.get(Ce).get(V);d.get(Ce)!==Pe&&(n.uniformBlockBinding(Ce,Pe,V.__bindingPointIndex),d.set(Ce,Pe))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),g={},v={},se=null,O={},m={},y=new WeakMap,M=[],A=null,S=!1,x=null,R=null,D=null,C=null,L=null,P=null,U=null,E=new Lt(0,0,0),I=0,B=!1,k=null,$=null,fe=null,he=null,J=null,Ge.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:pe,disable:Oe,bindFramebuffer:et,drawBuffers:Me,useProgram:ct,setBlending:st,setMaterial:rt,setFlipSided:yt,setCullFace:Et,setLineWidth:Ot,setPolygonOffset:At,setScissorTest:Ct,activeTexture:_t,bindTexture:H,unbindTexture:Xt,compressedTexImage2D:Tt,compressedTexImage3D:N,texImage2D:de,texImage3D:ge,pixelStorei:$e,getParameter:De,updateUBOMapping:tt,uniformBlockBinding:it,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:T,texSubImage3D:K,compressedTexSubImage2D:ie,compressedTexSubImage3D:ce,scissor:Le,viewport:be,reset:ft}}function WL(n,e,t,r,o,a,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new gt,g=new WeakMap,v=new Set;let m;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,T){return M?new OffscreenCanvas(N,T):Ic("canvas")}function S(N,T,K){let ie=1;const ce=Tt(N);if((ce.width>K||ce.height>K)&&(ie=K/Math.max(ce.width,ce.height)),ie<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Ee=Math.floor(ie*ce.width),Re=Math.floor(ie*ce.height);m===void 0&&(m=A(Ee,Re));const de=T?A(Ee,Re):m;return de.width=Ee,de.height=Re,de.getContext("2d").drawImage(N,0,0,Ee,Re),ut("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ee+"x"+Re+")."),de}else return"data"in N&&ut("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),N;return N}function x(N){return N.generateMipmaps}function R(N){n.generateMipmap(N)}function D(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(N,T,K,ie,ce,Ee=!1){if(N!==null){if(n[N]!==void 0)return n[N];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Re;ie&&(Re=e.get("EXT_texture_norm16"),Re||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=T;if(T===n.RED&&(K===n.FLOAT&&(de=n.R32F),K===n.HALF_FLOAT&&(de=n.R16F),K===n.UNSIGNED_BYTE&&(de=n.R8),K===n.UNSIGNED_SHORT&&Re&&(de=Re.R16_EXT),K===n.SHORT&&Re&&(de=Re.R16_SNORM_EXT)),T===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(de=n.R8UI),K===n.UNSIGNED_SHORT&&(de=n.R16UI),K===n.UNSIGNED_INT&&(de=n.R32UI),K===n.BYTE&&(de=n.R8I),K===n.SHORT&&(de=n.R16I),K===n.INT&&(de=n.R32I)),T===n.RG&&(K===n.FLOAT&&(de=n.RG32F),K===n.HALF_FLOAT&&(de=n.RG16F),K===n.UNSIGNED_BYTE&&(de=n.RG8),K===n.UNSIGNED_SHORT&&Re&&(de=Re.RG16_EXT),K===n.SHORT&&Re&&(de=Re.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(de=n.RG8UI),K===n.UNSIGNED_SHORT&&(de=n.RG16UI),K===n.UNSIGNED_INT&&(de=n.RG32UI),K===n.BYTE&&(de=n.RG8I),K===n.SHORT&&(de=n.RG16I),K===n.INT&&(de=n.RG32I)),T===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(de=n.RGB8UI),K===n.UNSIGNED_SHORT&&(de=n.RGB16UI),K===n.UNSIGNED_INT&&(de=n.RGB32UI),K===n.BYTE&&(de=n.RGB8I),K===n.SHORT&&(de=n.RGB16I),K===n.INT&&(de=n.RGB32I)),T===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),K===n.UNSIGNED_INT&&(de=n.RGBA32UI),K===n.BYTE&&(de=n.RGBA8I),K===n.SHORT&&(de=n.RGBA16I),K===n.INT&&(de=n.RGBA32I)),T===n.RGB&&(K===n.UNSIGNED_SHORT&&Re&&(de=Re.RGB16_EXT),K===n.SHORT&&Re&&(de=Re.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),T===n.RGBA){const ge=Ee?Dc:bt.getTransfer(ce);K===n.FLOAT&&(de=n.RGBA32F),K===n.HALF_FLOAT&&(de=n.RGBA16F),K===n.UNSIGNED_BYTE&&(de=ge===zt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Re&&(de=Re.RGBA16_EXT),K===n.SHORT&&Re&&(de=Re.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(N,T){let K;return N?T===null||T===nr||T===dl?K=n.DEPTH24_STENCIL8:T===$i?K=n.DEPTH32F_STENCIL8:T===fl&&(K=n.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===nr||T===dl?K=n.DEPTH_COMPONENT24:T===$i?K=n.DEPTH_COMPONENT32F:T===fl&&(K=n.DEPTH_COMPONENT16),K}function P(N,T){return x(N)===!0||N.isFramebufferTexture&&N.minFilter!==Tn&&N.minFilter!==Fn?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function U(N){const T=N.target;T.removeEventListener("dispose",U),I(T),T.isVideoTexture&&g.delete(T),T.isHTMLTexture&&v.delete(T)}function E(N){const T=N.target;T.removeEventListener("dispose",E),k(T)}function I(N){const T=r.get(N);if(T.__webglInit===void 0)return;const K=N.source,ie=y.get(K);if(ie){const ce=ie[T.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(N),Object.keys(ie).length===0&&y.delete(K)}r.remove(N)}function B(N){const T=r.get(N);n.deleteTexture(T.__webglTexture);const K=N.source,ie=y.get(K);delete ie[T.__cacheKey],u.memory.textures--}function k(N){const T=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let ce=0;ce<T.__webglFramebuffer[ie].length;ce++)n.deleteFramebuffer(T.__webglFramebuffer[ie][ce]);else n.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)n.deleteFramebuffer(T.__webglFramebuffer[ie]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=N.textures;for(let ie=0,ce=K.length;ie<ce;ie++){const Ee=r.get(K[ie]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),u.memory.textures--),r.remove(K[ie])}r.remove(N)}let $=0;function fe(){$=0}function he(){return $}function J(N){$=N}function ue(){const N=$;return N>=o.maxTextures&&ut("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),$+=1,N}function X(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function G(N,T){const K=r.get(N);if(N.isVideoTexture&&H(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&K.__version!==N.version){const ie=N.image;if(ie===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(K,N,T);return}}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+T)}function re(N,T){const K=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Oe(K,N,T);return}else N.isExternalTexture&&(K.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+T)}function se(N,T){const K=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){Oe(K,N,T);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+T)}function O(N,T){const K=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&K.__version!==N.version){et(K,N,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+T)}const Z={[np]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[ip]:n.MIRRORED_REPEAT},Ie={[Tn]:n.NEAREST,[Xb]:n.NEAREST_MIPMAP_NEAREST,[bu]:n.NEAREST_MIPMAP_LINEAR,[Fn]:n.LINEAR,[Zd]:n.LINEAR_MIPMAP_NEAREST,[Is]:n.LINEAR_MIPMAP_LINEAR},Ge={[qb]:n.NEVER,[Qb]:n.ALWAYS,[$b]:n.LESS,[Lm]:n.LEQUAL,[Kb]:n.EQUAL,[Im]:n.GEQUAL,[Zb]:n.GREATER,[Jb]:n.NOTEQUAL};function ze(N,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Fn||T.magFilter===Zd||T.magFilter===bu||T.magFilter===Is||T.minFilter===Fn||T.minFilter===Zd||T.minFilter===bu||T.minFilter===Is)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,Z[T.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,Z[T.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,Z[T.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,Ie[T.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,Ie[T.minFilter]),T.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,Ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Tn||T.minFilter!==bu&&T.minFilter!==Is||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function oe(N,T){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",U));const ie=T.source;let ce=y.get(ie);ce===void 0&&(ce={},y.set(ie,ce));const Ee=X(T);if(Ee!==N.__cacheKey){ce[Ee]===void 0&&(ce[Ee]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ce[Ee].usedTimes++;const Re=ce[N.__cacheKey];Re!==void 0&&(ce[N.__cacheKey].usedTimes--,Re.usedTimes===0&&B(T)),N.__cacheKey=Ee,N.__webglTexture=ce[Ee].texture}return K}function ve(N,T,K){return Math.floor(Math.floor(N/K)/T)}function pe(N,T,K,ie){const Ee=N.updateRanges;if(Ee.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,K,ie,T.data);else{Ee.sort(($e,Le)=>$e.start-Le.start);let Re=0;for(let $e=1;$e<Ee.length;$e++){const Le=Ee[Re],be=Ee[$e],tt=Le.start+Le.count,it=ve(be.start,T.width,4),ft=ve(Le.start,T.width,4);be.start<=tt+1&&it===ft&&ve(be.start+be.count-1,T.width,4)===it?Le.count=Math.max(Le.count,be.start+be.count-Le.start):(++Re,Ee[Re]=be)}Ee.length=Re+1;const de=t.getParameter(n.UNPACK_ROW_LENGTH),ge=t.getParameter(n.UNPACK_SKIP_PIXELS),De=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let $e=0,Le=Ee.length;$e<Le;$e++){const be=Ee[$e],tt=Math.floor(be.start/4),it=Math.ceil(be.count/4),ft=tt%T.width,V=Math.floor(tt/T.width),Ce=it,me=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(n.UNPACK_SKIP_ROWS,V),t.texSubImage2D(n.TEXTURE_2D,0,ft,V,Ce,me,K,ie,T.data)}N.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,de),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function Oe(N,T,K){let ie=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=n.TEXTURE_3D);const ce=oe(N,T),Ee=T.source;t.bindTexture(ie,N.__webglTexture,n.TEXTURE0+K);const Re=r.get(Ee);if(Ee.version!==Re.__version||ce===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const me=bt.getPrimaries(bt.workingColorSpace),Pe=T.colorSpace===Qr?null:bt.getPrimaries(T.colorSpace),Ue=T.colorSpace===Qr||me===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue)}t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let ge=S(T.image,!1,o.maxTextureSize);ge=Xt(T,ge);const De=a.convert(T.format,T.colorSpace),$e=a.convert(T.type);let Le=C(T.internalFormat,De,$e,T.normalized,T.colorSpace,T.isVideoTexture);ze(ie,T);let be;const tt=T.mipmaps,it=T.isVideoTexture!==!0,ft=Re.__version===void 0||ce===!0,V=Ee.dataReady,Ce=P(T,ge);if(T.isDepthTexture)Le=L(T.format===Ns,T.type),ft&&(it?t.texStorage2D(n.TEXTURE_2D,1,Le,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,De,$e,null));else if(T.isDataTexture)if(tt.length>0){it&&ft&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,tt[0].width,tt[0].height);for(let me=0,Pe=tt.length;me<Pe;me++)be=tt[me],it?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,De,$e,be.data):t.texImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,De,$e,be.data);T.generateMipmaps=!1}else it?(ft&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,ge.width,ge.height),V&&pe(T,ge,De,$e)):t.texImage2D(n.TEXTURE_2D,0,Le,ge.width,ge.height,0,De,$e,ge.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,tt[0].width,tt[0].height,ge.depth);for(let me=0,Pe=tt.length;me<Pe;me++)if(be=tt[me],T.format!==Fi)if(De!==null)if(it){if(V)if(T.layerUpdates.size>0){const Ue=xx(be.width,be.height,T.format,T.type);for(const _e of T.layerUpdates){const je=be.data.subarray(_e*Ue/be.data.BYTES_PER_ELEMENT,(_e+1)*Ue/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,_e,be.width,be.height,1,De,je)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,De,be.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,ge.depth,0,be.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?V&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,ge.depth,De,$e,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,ge.depth,0,De,$e,be.data)}else{it&&ft&&t.texStorage2D(n.TEXTURE_2D,Ce,Le,tt[0].width,tt[0].height);for(let me=0,Pe=tt.length;me<Pe;me++)be=tt[me],T.format!==Fi?De!==null?it?V&&t.compressedTexSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,De,be.data):t.compressedTexImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,be.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,be.width,be.height,De,$e,be.data):t.texImage2D(n.TEXTURE_2D,me,Le,be.width,be.height,0,De,$e,be.data)}else if(T.isDataArrayTexture)if(it){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ce,Le,ge.width,ge.height,ge.depth),V)if(T.layerUpdates.size>0){const me=xx(ge.width,ge.height,T.format,T.type);for(const Pe of T.layerUpdates){const Ue=ge.data.subarray(Pe*me/ge.data.BYTES_PER_ELEMENT,(Pe+1)*me/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Pe,ge.width,ge.height,1,De,$e,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,$e,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,De,$e,ge.data);else if(T.isData3DTexture)it?(ft&&t.texStorage3D(n.TEXTURE_3D,Ce,Le,ge.width,ge.height,ge.depth),V&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,$e,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,De,$e,ge.data);else if(T.isFramebufferTexture){if(ft)if(it)t.texStorage2D(n.TEXTURE_2D,Ce,Le,ge.width,ge.height);else{let me=ge.width,Pe=ge.height;for(let Ue=0;Ue<Ce;Ue++)t.texImage2D(n.TEXTURE_2D,Ue,Le,me,Pe,0,De,$e,null),me>>=1,Pe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const me=n.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),ge.parentNode!==me){me.appendChild(ge),v.add(T),me.onpaint=Pe=>{const Ue=Pe.changedElements;for(const _e of v)Ue.includes(_e.image)&&(_e.needsUpdate=!0)},me.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ge);else{const Ue=n.RGBA,_e=n.RGBA,je=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ue,_e,je,ge)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(tt.length>0){if(it&&ft){const me=Tt(tt[0]);t.texStorage2D(n.TEXTURE_2D,Ce,Le,me.width,me.height)}for(let me=0,Pe=tt.length;me<Pe;me++)be=tt[me],it?V&&t.texSubImage2D(n.TEXTURE_2D,me,0,0,De,$e,be):t.texImage2D(n.TEXTURE_2D,me,Le,De,$e,be);T.generateMipmaps=!1}else if(it){if(ft){const me=Tt(ge);t.texStorage2D(n.TEXTURE_2D,Ce,Le,me.width,me.height)}V&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,$e,ge)}else t.texImage2D(n.TEXTURE_2D,0,Le,De,$e,ge);x(T)&&R(ie),Re.__version=Ee.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function et(N,T,K){if(T.image.length!==6)return;const ie=oe(N,T),ce=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+K);const Ee=r.get(ce);if(ce.version!==Ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+K);const Re=bt.getPrimaries(bt.workingColorSpace),de=T.colorSpace===Qr?null:bt.getPrimaries(T.colorSpace),ge=T.colorSpace===Qr||Re===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,$e=T.image[0]&&T.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!De&&!$e?Le[_e]=S(T.image[_e],!0,o.maxCubemapSize):Le[_e]=$e?T.image[_e].image:T.image[_e],Le[_e]=Xt(T,Le[_e]);const be=Le[0],tt=a.convert(T.format,T.colorSpace),it=a.convert(T.type),ft=C(T.internalFormat,tt,it,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,Ce=Ee.__version===void 0||ie===!0,me=ce.dataReady;let Pe=P(T,be);ze(n.TEXTURE_CUBE_MAP,T);let Ue;if(De){V&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ft,be.width,be.height);for(let _e=0;_e<6;_e++){Ue=Le[_e].mipmaps;for(let je=0;je<Ue.length;je++){const We=Ue[je];T.format!==Fi?tt!==null?V?me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,We.width,We.height,tt,We.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,ft,We.width,We.height,0,We.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,0,0,We.width,We.height,tt,it,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je,ft,We.width,We.height,0,tt,it,We.data)}}}else{if(Ue=T.mipmaps,V&&Ce){Ue.length>0&&Pe++;const _e=Tt(Le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,ft,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if($e){V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,tt,it,Le[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,Le[_e].width,Le[_e].height,0,tt,it,Le[_e].data);for(let je=0;je<Ue.length;je++){const Ht=Ue[je].image[_e].image;V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,Ht.width,Ht.height,tt,it,Ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,ft,Ht.width,Ht.height,0,tt,it,Ht.data)}}else{V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,tt,it,Le[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ft,tt,it,Le[_e]);for(let je=0;je<Ue.length;je++){const We=Ue[je];V?me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,0,0,tt,it,We.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,je+1,ft,tt,it,We.image[_e])}}}x(T)&&R(n.TEXTURE_CUBE_MAP),Ee.__version=ce.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Me(N,T,K,ie,ce,Ee){const Re=a.convert(K.format,K.colorSpace),de=a.convert(K.type),ge=C(K.internalFormat,Re,de,K.normalized,K.colorSpace),De=r.get(T),$e=r.get(K);if($e.__renderTarget=T,!De.__hasExternalTextures){const Le=Math.max(1,T.width>>Ee),be=Math.max(1,T.height>>Ee);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,Ee,ge,Le,be,T.depth,0,Re,de,null):t.texImage2D(ce,Ee,ge,Le,be,0,Re,de,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),_t(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ce,$e.__webglTexture,0,Ct(T)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ce,$e.__webglTexture,Ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(N,T,K){if(n.bindRenderbuffer(n.RENDERBUFFER,N),T.depthBuffer){const ie=T.depthTexture,ce=ie&&ie.isDepthTexture?ie.type:null,Ee=L(T.stencilBuffer,ce),Re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_t(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(T),Ee,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(T),Ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,N)}else{const ie=T.textures;for(let ce=0;ce<ie.length;ce++){const Ee=ie[ce],Re=a.convert(Ee.format,Ee.colorSpace),de=a.convert(Ee.type),ge=C(Ee.internalFormat,Re,de,Ee.normalized,Ee.colorSpace);_t(T)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ct(T),ge,T.width,T.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ct(T),ge,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ge,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(N,T,K){const ie=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=r.get(T.depthTexture);if(ce.__renderTarget=T,(!ce.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),ce.__webglTexture===void 0){ce.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),ze(n.TEXTURE_CUBE_MAP,T.depthTexture);const De=a.convert(T.depthTexture.format),$e=a.convert(T.depthTexture.type);let Le;T.depthTexture.format===wr?Le=n.DEPTH_COMPONENT24:T.depthTexture.format===Ns&&(Le=n.DEPTH24_STENCIL8);for(let be=0;be<6;be++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,T.width,T.height,0,De,$e,null)}}else G(T.depthTexture,0);const Ee=ce.__webglTexture,Re=Ct(T),de=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,ge=T.depthTexture.format===Ns?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===wr)_t(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,de,Ee,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ge,de,Ee,0);else if(T.depthTexture.format===Ns)_t(T)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ge,de,Ee,0,Re):n.framebufferTexture2D(n.FRAMEBUFFER,ge,de,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(N){const T=r.get(N),K=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const ie=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const ce=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",ce)};ie.addEventListener("dispose",ce),T.__depthDisposeCallback=ce}T.__boundDepthTexture=ie}if(N.depthTexture&&!T.__autoAllocateDepthBuffer)if(K)for(let ie=0;ie<6;ie++)Ne(T.__webglFramebuffer[ie],N,ie);else{const ie=N.texture.mipmaps;ie&&ie.length>0?Ne(T.__webglFramebuffer[0],N,0):Ne(T.__webglFramebuffer,N,0)}else if(K){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=n.createRenderbuffer(),ct(T.__webglDepthbuffer[ie],N,!1);else{const ce=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Ee)}}else{const ie=N.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ct(T.__webglDepthbuffer,N,!1);else{const ce=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,Ee)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function st(N,T,K){const ie=r.get(N);T!==void 0&&Me(ie.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&nt(N)}function rt(N){const T=N.texture,K=r.get(N),ie=r.get(T);N.addEventListener("dispose",E);const ce=N.textures,Ee=N.isWebGLCubeRenderTarget===!0,Re=ce.length>1;if(Re||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=T.version,u.memory.textures++),Ee){K.__webglFramebuffer=[];for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[de]=[];for(let ge=0;ge<T.mipmaps.length;ge++)K.__webglFramebuffer[de][ge]=n.createFramebuffer()}else K.__webglFramebuffer[de]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let de=0;de<T.mipmaps.length;de++)K.__webglFramebuffer[de]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Re)for(let de=0,ge=ce.length;de<ge;de++){const De=r.get(ce[de]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),u.memory.textures++)}if(N.samples>0&&_t(N)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const ge=ce[de];K.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[de]);const De=a.convert(ge.format,ge.colorSpace),$e=a.convert(ge.type),Le=C(ge.internalFormat,De,$e,ge.normalized,ge.colorSpace,N.isXRRenderTarget===!0),be=Ct(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,be,Le,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,K.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),ct(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ze(n.TEXTURE_CUBE_MAP,T);for(let de=0;de<6;de++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Me(K.__webglFramebuffer[de][ge],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else Me(K.__webglFramebuffer[de],N,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(T)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,ge=ce.length;de<ge;de++){const De=ce[de],$e=r.get(De);let Le=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Le=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Le,$e.__webglTexture),ze(Le,De),Me(K.__webglFramebuffer,N,De,n.COLOR_ATTACHMENT0+de,Le,0),x(De)&&R(Le)}t.unbindTexture()}else{let de=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(de=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,ie.__webglTexture),ze(de,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Me(K.__webglFramebuffer[ge],N,T,n.COLOR_ATTACHMENT0,de,ge);else Me(K.__webglFramebuffer,N,T,n.COLOR_ATTACHMENT0,de,0);x(T)&&R(de),t.unbindTexture()}N.depthBuffer&&nt(N)}function yt(N){const T=N.textures;for(let K=0,ie=T.length;K<ie;K++){const ce=T[K];if(x(ce)){const Ee=D(N),Re=r.get(ce).__webglTexture;t.bindTexture(Ee,Re),R(Ee),t.unbindTexture()}}}const Et=[],Ot=[];function At(N){if(N.samples>0){if(_t(N)===!1){const T=N.textures,K=N.width,ie=N.height;let ce=n.COLOR_BUFFER_BIT;const Ee=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=r.get(N),de=T.length>1;if(de)for(let De=0;De<T.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const ge=N.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<T.length;De++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),de){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const $e=r.get(T[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,K,ie,0,0,K,ie,ce,n.NEAREST),d===!0&&(Et.length=0,Ot.length=0,Et.push(n.COLOR_ATTACHMENT0+De),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Et.push(Ee),Ot.push(Ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ot)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let De=0;De<T.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const $e=r.get(T[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const T=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ct(N){return Math.min(o.maxSamples,N.samples)}function _t(N){const T=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function H(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Xt(N,T){const K=N.colorSpace,ie=N.format,ce=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==Pc&&K!==Qr&&(bt.getTransfer(K)===zt?(ie!==Fi||ce!==Mi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",K)),T}function Tt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ue,this.resetTextureUnits=fe,this.getTextureUnits=he,this.setTextureUnits=J,this.setTexture2D=G,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XL(n,e){function t(r,o=Qr){let a;const u=bt.getTransfer(o);if(r===Mi)return n.UNSIGNED_BYTE;if(r===Cm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===bm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===kS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===zS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===OS)return n.BYTE;if(r===BS)return n.SHORT;if(r===fl)return n.UNSIGNED_SHORT;if(r===Am)return n.INT;if(r===nr)return n.UNSIGNED_INT;if(r===$i)return n.FLOAT;if(r===Tr)return n.HALF_FLOAT;if(r===VS)return n.ALPHA;if(r===HS)return n.RGB;if(r===Fi)return n.RGBA;if(r===wr)return n.DEPTH_COMPONENT;if(r===Ns)return n.DEPTH_STENCIL;if(r===GS)return n.RED;if(r===Rm)return n.RED_INTEGER;if(r===Bs)return n.RG;if(r===Pm)return n.RG_INTEGER;if(r===Dm)return n.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(u===zt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rp||r===sp||r===op||r===ap)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===rp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sp)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===op)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ap)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lp||r===up||r===cp||r===fp||r===dp||r===bc||r===hp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===lp||r===up)return u===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===cp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===fp)return a.COMPRESSED_R11_EAC;if(r===dp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===bc)return a.COMPRESSED_RG11_EAC;if(r===hp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===Tp||r===wp||r===Ap||r===Cp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===pp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===_p)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===xp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ep)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ap)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cp)return u===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bp||r===Rp||r===Pp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bp)return u===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Rp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Dp||r===Lp||r===Rc||r===Ip)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Dp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Lp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Rc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ip)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===dl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const jL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,YL=`
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

}`;class qL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new eM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Bi({vertexShader:jL,fragmentShader:YL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ir(new Yc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $L extends Vs{constructor(e,t){super();const r=this;let o=null,a=1,u=null,f="local-floor",d=1,h=null,g=null,v=null,m=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new qL,x={},R=t.getContextAttributes();let D=null,C=null;const L=[],P=[],U=new gt;let E=null;const I=new Si;I.viewport=new on;const B=new Si;B.viewport=new on;const k=[I,B],$=new sP;let fe=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=L[oe];return ve===void 0&&(ve=new ih,L[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=L[oe];return ve===void 0&&(ve=new ih,L[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=L[oe];return ve===void 0&&(ve=new ih,L[oe]=ve),ve.getHandSpace()};function J(oe){const ve=P.indexOf(oe.inputSource);if(ve===-1)return;const pe=L[ve];pe!==void 0&&(pe.update(oe.inputSource,oe.frame,h||u),pe.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ue(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",X);for(let oe=0;oe<L.length;oe++){const ve=P[oe];ve!==null&&(P[oe]=null,L[oe].disconnect(ve))}fe=null,he=null,S.reset();for(const oe in x)delete x[oe];e.setRenderTarget(D),y=null,m=null,v=null,o=null,C=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(U.width,U.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(U),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Oe=null,et=null;R.depth&&(et=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?Ns:wr,Oe=R.stencil?dl:nr);const Me={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:a};v=this.getBinding(),m=v.createProjectionLayer(Me),o.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new er(m.textureWidth,m.textureHeight,{format:Fi,type:Mi,depthTexture:new Yo(m.textureWidth,m.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};y=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new er(y.framebufferWidth,y.framebufferHeight,{format:Fi,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(f),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(oe){for(let ve=0;ve<oe.removed.length;ve++){const pe=oe.removed[ve],Oe=P.indexOf(pe);Oe>=0&&(P[Oe]=null,L[Oe].disconnect(pe))}for(let ve=0;ve<oe.added.length;ve++){const pe=oe.added[ve];let Oe=P.indexOf(pe);if(Oe===-1){for(let Me=0;Me<L.length;Me++)if(Me>=P.length){P.push(pe),Oe=Me;break}else if(P[Me]===null){P[Me]=pe,Oe=Me;break}if(Oe===-1)break}const et=L[Oe];et&&et.connect(pe)}}const G=new q,re=new q;function se(oe,ve,pe){G.setFromMatrixPosition(ve.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Oe=G.distanceTo(re),et=ve.projectionMatrix.elements,Me=pe.projectionMatrix.elements,ct=et[14]/(et[10]-1),Ne=et[14]/(et[10]+1),nt=(et[9]+1)/et[5],st=(et[9]-1)/et[5],rt=(et[8]-1)/et[0],yt=(Me[8]+1)/Me[0],Et=ct*rt,Ot=ct*yt,At=Oe/(-rt+yt),Ct=At*-rt;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Ct),oe.translateZ(At),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),et[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const _t=ct+At,H=Ne+At,Xt=Et-Ct,Tt=Ot+(Oe-Ct),N=nt*Ne/H*_t,T=st*Ne/H*_t;oe.projectionMatrix.makePerspective(Xt,Tt,N,T,_t,H),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function O(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ve=oe.near,pe=oe.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(pe=S.depthFar)),$.near=B.near=I.near=ve,$.far=B.far=I.far=pe,(fe!==$.near||he!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),fe=$.near,he=$.far),$.layers.mask=oe.layers.mask|6,I.layers.mask=$.layers.mask&-5,B.layers.mask=$.layers.mask&-3;const Oe=oe.parent,et=$.cameras;O($,Oe);for(let Me=0;Me<et.length;Me++)O(et[Me],Oe);et.length===2?se($,I,B):$.projectionMatrix.copy(I.projectionMatrix),Z(oe,$,Oe)};function Z(oe,ve,pe){pe===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(pe.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=hl*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(m===null&&y===null))return d},this.setFoveation=function(oe){d=oe,m!==null&&(m.fixedFoveation=oe),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh($)},this.getCameraTexture=function(oe){return x[oe]};let Ie=null;function Ge(oe,ve){if(g=ve.getViewerPose(h||u),M=ve,g!==null){const pe=g.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Oe=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Oe=!0);for(let Ne=0;Ne<pe.length;Ne++){const nt=pe[Ne];let st=null;if(y!==null)st=y.getViewport(nt);else{const yt=v.getViewSubImage(m,nt);st=yt.viewport,Ne===0&&(e.setRenderTargetTextures(C,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(C))}let rt=k[Ne];rt===void 0&&(rt=new Si,rt.layers.enable(Ne),rt.viewport=new on,k[Ne]=rt),rt.matrix.fromArray(nt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(nt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(st.x,st.y,st.width,st.height),Ne===0&&($.matrix.copy(rt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Oe===!0&&$.cameras.push(rt)}const et=o.enabledFeatures;if(et&&et.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const Ne=v.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&S.init(Ne,o.renderState)}if(et&&et.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let Ne=0;Ne<pe.length;Ne++){const nt=pe[Ne].camera;if(nt){let st=x[nt];st||(st=new eM,x[nt]=st);const rt=v.getCameraImage(nt);st.sourceTexture=rt}}}}for(let pe=0;pe<L.length;pe++){const Oe=P[pe],et=L[pe];Oe!==null&&et!==void 0&&et.update(Oe,ve,h||u)}Ie&&Ie(oe,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),M=null}const ze=new rM;ze.setAnimationLoop(Ge),this.setAnimationLoop=function(oe){Ie=oe},this.dispose=function(){}}}const KL=new nn,fM=new mt;fM.set(-1,0,0,0,1,0,0,0,1);function ZL(n,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,tM(n)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,R,D,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?a(S,x):x.isMeshLambertMaterial?(a(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(S,x),v(S,x)):x.isMeshPhongMaterial?(a(S,x),g(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(S,x),m(S,x),x.isMeshPhysicalMaterial&&y(S,x,C)):x.isMeshMatcapMaterial?(a(S,x),M(S,x)):x.isMeshDepthMaterial?a(S,x):x.isMeshDistanceMaterial?(a(S,x),A(S,x)):x.isMeshNormalMaterial?a(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&f(S,x)):x.isPointsMaterial?d(S,x,R,D):x.isSpriteMaterial?h(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===ti&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===ti&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const R=e.get(x),D=R.envMap,C=R.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(KL.makeRotationFromEuler(C)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(fM),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function f(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function d(S,x,R,D){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*R,S.scale.value=D*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function h(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function v(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function m(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function y(S,x,R){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ti&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const R=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function JL(n,e,t,r){let o={},a={},u=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function h(C,L){let P=o[C.id];P===void 0&&(S(C),P=g(C),o[C.id]=P,C.addEventListener("dispose",R));const U=L.program;r.updateUBOMapping(C,U);const E=e.render.frame;a[C.id]!==E&&(m(C),a[C.id]=E)}function g(C){const L=v();C.__bindingPointIndex=L;const P=n.createBuffer(),U=C.__size,E=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,U,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,P),P}function v(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(C){const L=o[C.id],P=C.uniforms,U=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let E=0,I=P.length;E<I;E++){const B=P[E];if(Array.isArray(B))for(let k=0,$=B.length;k<$;k++)y(B[k],E,k,U);else y(B,E,0,U)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(C,L,P,U){if(A(C,L,P,U)===!0){const E=C.__offset,I=C.value;if(Array.isArray(I)){let B=0;for(let k=0;k<I.length;k++){const $=I[k],fe=x($);M($,C.__data,B),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(B+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}}else M(I,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,C.__data)}}function M(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function A(C,L,P,U){const E=C.value,I=L+"_"+P;if(U[I]===void 0)return typeof E=="number"||typeof E=="boolean"?U[I]=E:ArrayBuffer.isView(E)?U[I]=E.slice():U[I]=E.clone(),!0;{const B=U[I];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return U[I]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(C){const L=C.uniforms;let P=0;const U=16;for(let I=0,B=L.length;I<B;I++){const k=Array.isArray(L[I])?L[I]:[L[I]];for(let $=0,fe=k.length;$<fe;$++){const he=k[$],J=Array.isArray(he.value)?he.value:[he.value];for(let ue=0,X=J.length;ue<X;ue++){const G=J[ue],re=x(G),se=P%U,O=se%re.boundary,Z=se+O;P+=O,Z!==0&&U-Z<re.storage&&(P+=U-Z),he.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=P,P+=re.storage}}}const E=P%U;return E>0&&(P+=U-E),C.__size=P,C.__cache={},this}function x(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",C),L}function R(C){const L=C.target;L.removeEventListener("dispose",R);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),n.deleteBuffer(o[L.id]),delete o[L.id],delete a[L.id]}function D(){for(const C in o)n.deleteBuffer(o[C]);u=[],o={},a={}}return{bind:d,update:h,dispose:D}}const QL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function eI(){return Xi===null&&(Xi=new HR(QL,16,16,Bs,Tr),Xi.name="DFG_LUT",Xi.minFilter=Fn,Xi.magFilter=Fn,Xi.wrapS=_r,Xi.wrapT=_r,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class tI{constructor(e={}){const{canvas:t=tR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:m=!1,outputBufferType:y=Mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=u;const A=y,S=new Set([Dm,Pm,Rm]),x=new Set([Mi,nr,fl,dl,Cm,bm]),R=new Uint32Array(4),D=new Int32Array(4),C=new q;let L=null,P=null;const U=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let k=!1,$=null,fe=null,he=null,J=null;this._outputColorSpace=yi;let ue=0,X=0,G=null,re=-1,se=null;const O=new on,Z=new on;let Ie=null;const Ge=new Lt(0);let ze=0,oe=t.width,ve=t.height,pe=1,Oe=null,et=null;const Me=new on(0,0,oe,ve),ct=new on(0,0,oe,ve);let Ne=!1;const nt=new JS;let st=!1,rt=!1;const yt=new nn,Et=new q,Ot=new on,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function _t(){return G===null?pe:1}let H=r;function Xt(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wm}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",An,!1),H===null){const Y="webgl2";if(H=Xt(Y,b),H===null)throw Xt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw Pt("WebGLRenderer: "+b.message),b}let Tt,N,T,K,ie,ce,Ee,Re,de,ge,De,$e,Le,be,tt,it,ft,V,Ce,me,Pe,Ue,_e;function je(){Tt=new eD(H),Tt.init(),Pe=new XL(H,Tt),N=new j3(H,Tt,e,Pe),T=new GL(H,Tt),N.reversedDepthBuffer&&m&&T.buffers.depth.setReversed(!0),fe=H.createFramebuffer(),he=H.createFramebuffer(),J=H.createFramebuffer(),K=new iD(H),ie=new RL,ce=new WL(H,Tt,T,ie,N,Pe,K),Ee=new Q3(B),Re=new aP(H),Ue=new W3(H,Re),de=new tD(H,Re,K,Ue),ge=new sD(H,de,Re,Ue,K),V=new rD(H,N,ce),tt=new Y3(ie),De=new bL(B,Ee,Tt,N,Ue,tt),$e=new ZL(B,ie),Le=new DL,be=new OL(Tt),ft=new G3(B,Ee,T,ge,M,d),it=new HL(B,ge,N),_e=new JL(H,K,N,T),Ce=new X3(H,Tt,K),me=new nD(H,Tt,K),K.programs=De.programs,B.capabilities=N,B.extensions=Tt,B.properties=ie,B.renderLists=Le,B.shadowMap=it,B.state=T,B.info=K}je(),A!==Mi&&(I=new aD(A,t.width,t.height,f,o,a));const We=new $L(B,H);this.xr=We,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const b=Tt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Tt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(b){b!==void 0&&(pe=b,this.setSize(oe,ve,!1))},this.getSize=function(b){return b.set(oe,ve)},this.setSize=function(b,Y,ae=!0){if(We.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=b,ve=Y,t.width=Math.floor(b*pe),t.height=Math.floor(Y*pe),ae===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(oe*pe,ve*pe).floor()},this.setDrawingBufferSize=function(b,Y,ae){oe=b,ve=Y,pe=ae,t.width=Math.floor(b*ae),t.height=Math.floor(Y*ae),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(A===Mi){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(O)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,Y,ae,te){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,Y,ae,te),T.viewport(O.copy(Me).multiplyScalar(pe).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,Y,ae,te){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,Y,ae,te),T.scissor(Z.copy(ct).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){T.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){Oe=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,ae=!0){let te=0;if(b){let ee=!1;if(G!==null){const Ae=G.texture.format;ee=S.has(Ae)}if(ee){const Ae=G.texture.type,Ve=x.has(Ae),we=ft.getClearColor(),Ye=ft.getClearAlpha(),Qe=we.r,ht=we.g,pt=we.b;Ve?(R[0]=Qe,R[1]=ht,R[2]=pt,R[3]=Ye,H.clearBufferuiv(H.COLOR,0,R)):(D[0]=Qe,D[1]=ht,D[2]=pt,D[3]=Ye,H.clearBufferiv(H.COLOR,0,D))}else te|=H.COLOR_BUFFER_BIT}Y&&(te|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),$=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",An,!1),ft.dispose(),Le.dispose(),be.dispose(),ie.dispose(),Ee.dispose(),ge.dispose(),Ue.dispose(),_e.dispose(),De.dispose(),We.dispose(),We.removeEventListener("sessionstart",Sl),We.removeEventListener("sessionend",Ml),kn.stop()};function Ht(b){b.preventDefault(),Nc("WebGLRenderer: Context Lost."),k=!0}function Ut(){Nc("WebGLRenderer: Context Restored."),k=!1;const b=K.autoReset,Y=it.enabled,ae=it.autoUpdate,te=it.needsUpdate,ee=it.type;je(),K.autoReset=b,it.enabled=Y,it.autoUpdate=ae,it.needsUpdate=te,it.type=ee}function An(b){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ci(b){const Y=b.target;Y.removeEventListener("dispose",ci),rs(Y)}function rs(b){Gs(b),ie.remove(b)}function Gs(b){const Y=ie.get(b).programs;Y!==void 0&&(Y.forEach(function(ae){De.releaseProgram(ae)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,ae,te,ee,Ae){Y===null&&(Y=At);const Ve=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,we=Jt(b,Y,ae,te,ee);T.setMaterial(te,Ve);let Ye=ae.index,Qe=1;if(te.wireframe===!0){if(Ye=de.getWireframeAttribute(ae),Ye===void 0)return;Qe=2}const ht=ae.drawRange,pt=ae.attributes.position;let Ke=ht.start*Qe,Rt=(ht.start+ht.count)*Qe;Ae!==null&&(Ke=Math.max(Ke,Ae.start*Qe),Rt=Math.min(Rt,(Ae.start+Ae.count)*Qe)),Ye!==null?(Ke=Math.max(Ke,0),Rt=Math.min(Rt,Ye.count)):pt!=null&&(Ke=Math.max(Ke,0),Rt=Math.min(Rt,pt.count));const Gt=Rt-Ke;if(Gt<0||Gt===1/0)return;Ue.setup(ee,te,we,ae,Ye);let $t,Bt=Ce;if(Ye!==null&&($t=Re.get(Ye),Bt=me,Bt.setIndex($t)),ee.isMesh)te.wireframe===!0?(T.setLineWidth(te.wireframeLinewidth*_t()),Bt.setMode(H.LINES)):Bt.setMode(H.TRIANGLES);else if(ee.isLine){let un=te.linewidth;un===void 0&&(un=1),T.setLineWidth(un*_t()),ee.isLineSegments?Bt.setMode(H.LINES):ee.isLineLoop?Bt.setMode(H.LINE_LOOP):Bt.setMode(H.LINE_STRIP)}else ee.isPoints?Bt.setMode(H.POINTS):ee.isSprite&&Bt.setMode(H.TRIANGLES);if(ee.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const un=ee._multiDrawStarts,Be=ee._multiDrawCounts,Sn=ee._multiDrawCount,xt=Ye?Re.get(Ye).bytesPerElement:1,Yn=ie.get(te).currentProgram.getUniforms();for(let qn=0;qn<Sn;qn++)Yn.setValue(H,"_gl_DrawID",qn),Bt.render(un[qn]/xt,Be[qn])}else if(ee.isInstancedMesh)Bt.renderInstances(Ke,Gt,ee.count);else if(ae.isInstancedBufferGeometry){const un=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Be=Math.min(ae.instanceCount,un);Bt.renderInstances(Ke,Gt,Be)}else Bt.render(Ke,Gt)};function ss(b,Y,ae){b.transparent===!0&&b.side===Yi&&b.forceSinglePass===!1?(b.side=ti,b.needsUpdate=!0,ls(b,Y,ae),b.side=ns,b.needsUpdate=!0,ls(b,Y,ae),b.side=Yi):ls(b,Y,ae)}this.compile=function(b,Y,ae=null){ae===null&&(ae=b),P=be.get(ae),P.init(Y),E.push(P),ae.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),b!==ae&&b.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(P.pushLight(ee),ee.castShadow&&P.pushShadow(ee))}),P.setupLights();const te=new Set;return b.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ae=ee.material;if(Ae)if(Array.isArray(Ae))for(let Ve=0;Ve<Ae.length;Ve++){const we=Ae[Ve];ss(we,ae,ee),te.add(we)}else ss(Ae,ae,ee),te.add(Ae)}),P=E.pop(),te},this.compileAsync=function(b,Y,ae=null){const te=this.compile(b,Y,ae);return new Promise(ee=>{function Ae(){if(te.forEach(function(Ve){ie.get(Ve).currentProgram.isReady()&&te.delete(Ve)}),te.size===0){ee(b);return}setTimeout(Ae,10)}Tt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let os=null;function Kc(b){os&&os(b)}function Sl(){kn.stop()}function Ml(){kn.start()}const kn=new rM;kn.setAnimationLoop(Kc),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(b){os=b,We.setAnimationLoop(b),b===null?kn.stop():kn.start()},We.addEventListener("sessionstart",Sl),We.addEventListener("sessionend",Ml),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;$!==null&&$.renderStart(b,Y);const ae=We.enabled===!0&&We.isPresenting===!0,te=I!==null&&(G===null||ae)&&I.begin(B,G);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(Y),Y=We.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,Y,G),P=be.get(b,E.length),P.init(Y),P.state.textureUnits=ce.getTextureUnits(),E.push(P),yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),nt.setFromProjectionMatrix(yt,Ki,Y.reversedDepth),rt=this.localClippingEnabled,st=tt.init(this.clippingPlanes,rt),L=Le.get(b,U.length),L.init(),U.push(L),We.enabled===!0&&We.isPresenting===!0){const Ve=B.xr.getDepthSensingMesh();Ve!==null&&Ws(Ve,Y,-1/0,B.sortObjects)}Ws(b,Y,0,B.sortObjects),L.finish(),B.sortObjects===!0&&L.sort(Oe,et,Y.reversedDepth),Ct=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,Ct&&ft.addToRenderList(L,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&tt.beginShadows();const ee=P.state.shadowsArray;if(it.render(ee,b,Y),st===!0&&tt.endShadows(),(te&&I.hasRenderPass())===!1){const Ve=L.opaque,we=L.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(we.length>0)for(let Qe=0,ht=Ye.length;Qe<ht;Qe++){const pt=Ye[Qe];El(Ve,we,b,pt)}Ct&&ft.render(b);for(let Qe=0,ht=Ye.length;Qe<ht;Qe++){const pt=Ye[Qe];ea(L,b,pt,pt.viewport)}}else we.length>0&&El(Ve,we,b,Y),Ct&&ft.render(b),ea(L,b,Y)}G!==null&&X===0&&(ce.updateMultisampleRenderTarget(G),ce.updateRenderTargetMipmap(G)),te&&I.end(B),b.isScene===!0&&b.onAfterRender(B,b,Y),Ue.resetDefaultState(),re=-1,se=null,E.pop(),E.length>0?(P=E[E.length-1],ce.setTextureUnits(P.state.textureUnits),st===!0&&tt.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?L=U[U.length-1]:L=null,$!==null&&$.renderEnd()};function Ws(b,Y,ae,te){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)ae=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||nt.intersectsSprite(b)){te&&Ot.setFromMatrixPosition(b.matrixWorld).applyMatrix4(yt);const Ve=ge.update(b),we=b.material;we.visible&&L.push(b,Ve,we,ae,Ot.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||nt.intersectsObject(b))){const Ve=ge.update(b),we=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ot.copy(b.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ot.copy(Ve.boundingSphere.center)),Ot.applyMatrix4(b.matrixWorld).applyMatrix4(yt)),Array.isArray(we)){const Ye=Ve.groups;for(let Qe=0,ht=Ye.length;Qe<ht;Qe++){const pt=Ye[Qe],Ke=we[pt.materialIndex];Ke&&Ke.visible&&L.push(b,Ve,Ke,ae,Ot.z,pt)}}else we.visible&&L.push(b,Ve,we,ae,Ot.z,null)}}const Ae=b.children;for(let Ve=0,we=Ae.length;Ve<we;Ve++)Ws(Ae[Ve],Y,ae,te)}function ea(b,Y,ae,te){const{opaque:ee,transmissive:Ae,transparent:Ve}=b;P.setupLightsView(ae),st===!0&&tt.setGlobalState(B.clippingPlanes,ae),te&&T.viewport(O.copy(te)),ee.length>0&&as(ee,Y,ae),Ae.length>0&&as(Ae,Y,ae),Ve.length>0&&as(Ve,Y,ae),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function El(b,Y,ae,te){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const Ke=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new er(1,1,{generateMipmaps:!0,type:Ke?Tr:Mi,minFilter:Is,samples:Math.max(4,N.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[te.id],Ve=te.viewport||O;Ae.setSize(Ve.z*B.transmissionResolutionScale,Ve.w*B.transmissionResolutionScale);const we=B.getRenderTarget(),Ye=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(Ae),B.getClearColor(Ge),ze=B.getClearAlpha(),ze<1&&B.setClearColor(16777215,.5),B.clear(),Ct&&ft.render(ae);const ht=B.toneMapping;B.toneMapping=Qi;const pt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),st===!0&&tt.setGlobalState(B.clippingPlanes,te),as(b,ae,te),ce.updateMultisampleRenderTarget(Ae),ce.updateRenderTargetMipmap(Ae),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Rt=0,Gt=Y.length;Rt<Gt;Rt++){const $t=Y[Rt],{object:Bt,geometry:un,material:Be,group:Sn}=$t;if(Be.side===Yi&&Bt.layers.test(te.layers)){const xt=Be.side;Be.side=ti,Be.needsUpdate=!0,ta(Bt,ae,te,un,Be,Sn),Be.side=xt,Be.needsUpdate=!0,Ke=!0}}Ke===!0&&(ce.updateMultisampleRenderTarget(Ae),ce.updateRenderTargetMipmap(Ae))}B.setRenderTarget(we,Ye,Qe),B.setClearColor(Ge,ze),pt!==void 0&&(te.viewport=pt),B.toneMapping=ht}function as(b,Y,ae){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Ae=b.length;ee<Ae;ee++){const Ve=b[ee],{object:we,geometry:Ye,group:Qe}=Ve;let ht=Ve.material;ht.allowOverride===!0&&te!==null&&(ht=te),we.layers.test(ae.layers)&&ta(we,Y,ae,Ye,ht,Qe)}}function ta(b,Y,ae,te,ee,Ae){b.onBeforeRender(B,Y,ae,te,ee,Ae),b.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ee.onBeforeRender(B,Y,ae,te,b,Ae),ee.transparent===!0&&ee.side===Yi&&ee.forceSinglePass===!1?(ee.side=ti,ee.needsUpdate=!0,B.renderBufferDirect(ae,Y,te,ee,b,Ae),ee.side=ns,ee.needsUpdate=!0,B.renderBufferDirect(ae,Y,te,ee,b,Ae),ee.side=Yi):B.renderBufferDirect(ae,Y,te,ee,b,Ae),b.onAfterRender(B,Y,ae,te,ee,Ae)}function ls(b,Y,ae){Y.isScene!==!0&&(Y=At);const te=ie.get(b),ee=P.state.lights,Ae=P.state.shadowsArray,Ve=ee.state.version,we=De.getParameters(b,ee.state,Ae,Y,ae,P.state.lightProbeGridArray),Ye=De.getProgramCacheKey(we);let Qe=te.programs;te.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const ht=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;te.envMap=Ee.get(b.envMap||te.environment,ht),te.envMapRotation=te.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",ci),Qe=new Map,te.programs=Qe);let pt=Qe.get(Ye);if(pt!==void 0){if(te.currentProgram===pt&&te.lightsStateVersion===Ve)return Tl(b,we),pt}else we.uniforms=De.getUniforms(b),$!==null&&b.isNodeMaterial&&$.build(b,ae,we),b.onBeforeCompile(we,B),pt=De.acquireProgram(we,Ye),Qe.set(Ye,pt),te.uniforms=we.uniforms;const Ke=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ke.clippingPlanes=tt.uniform),Tl(b,we),te.needsLights=ia(b),te.lightsStateVersion=Ve,te.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=pt,te.uniformsList=null,pt}function na(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=vc.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Tl(b,Y){const ae=ie.get(b);ae.outputColorSpace=Y.outputColorSpace,ae.batching=Y.batching,ae.batchingColor=Y.batchingColor,ae.instancing=Y.instancing,ae.instancingColor=Y.instancingColor,ae.instancingMorph=Y.instancingMorph,ae.skinning=Y.skinning,ae.morphTargets=Y.morphTargets,ae.morphNormals=Y.morphNormals,ae.morphColors=Y.morphColors,ae.morphTargetsCount=Y.morphTargetsCount,ae.numClippingPlanes=Y.numClippingPlanes,ae.numIntersection=Y.numClipIntersection,ae.vertexAlphas=Y.vertexAlphas,ae.vertexTangents=Y.vertexTangents,ae.toneMapping=Y.toneMapping}function Zc(b,Y){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;C.setFromMatrixPosition(Y.matrixWorld);for(let ae=0,te=b.length;ae<te;ae++){const ee=b[ae];if(ee.texture!==null&&ee.boundingBox.containsPoint(C))return ee}return null}function Jt(b,Y,ae,te,ee){Y.isScene!==!0&&(Y=At),ce.resetTextureUnits();const Ae=Y.fog,Ve=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,we=G===null?B.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:bt.workingColorSpace,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Qe=Ee.get(te.envMap||Ve,Ye),ht=te.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pt=!!ae.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!ae.morphAttributes.position,Rt=!!ae.morphAttributes.normal,Gt=!!ae.morphAttributes.color;let $t=Qi;te.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&($t=B.toneMapping);const Bt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,un=Bt!==void 0?Bt.length:0,Be=ie.get(te),Sn=P.state.lights;if(st===!0&&(rt===!0||b!==se)){const kt=b===se&&te.id===re;tt.setState(te,b,kt)}let xt=!1;te.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Sn.state.version||Be.outputColorSpace!==we||ee.isBatchedMesh&&Be.batching===!1||!ee.isBatchedMesh&&Be.batching===!0||ee.isBatchedMesh&&Be.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Be.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Be.instancing===!1||!ee.isInstancedMesh&&Be.instancing===!0||ee.isSkinnedMesh&&Be.skinning===!1||!ee.isSkinnedMesh&&Be.skinning===!0||ee.isInstancedMesh&&Be.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Be.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Be.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Be.instancingMorph===!1&&ee.morphTexture!==null||Be.envMap!==Qe||te.fog===!0&&Be.fog!==Ae||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==tt.numPlanes||Be.numIntersection!==tt.numIntersection)||Be.vertexAlphas!==ht||Be.vertexTangents!==pt||Be.morphTargets!==Ke||Be.morphNormals!==Rt||Be.morphColors!==Gt||Be.toneMapping!==$t||Be.morphTargetsCount!==un||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(xt=!0):(xt=!0,Be.__version=te.version);let Yn=Be.currentProgram;xt===!0&&(Yn=ls(te,Y,ee),$&&te.isNodeMaterial&&$.onUpdateProgram(te,Yn,Be));let qn=!1,St=!1,rr=!1;const Ft=Yn.getUniforms(),jt=Be.uniforms;if(T.useProgram(Yn.program)&&(qn=!0,St=!0,rr=!0),te.id!==re&&(re=te.id,St=!0),Be.needsLights){const kt=Zc(P.state.lightProbeGridArray,ee);Be.lightProbeGrid!==kt&&(Be.lightProbeGrid=kt,St=!0)}if(qn||se!==b){T.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ft.setValue(H,"projectionMatrix",b.projectionMatrix),Ft.setValue(H,"viewMatrix",b.matrixWorldInverse);const Ti=Ft.map.cameraPosition;Ti!==void 0&&Ti.setValue(H,Et.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&Ft.setValue(H,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ft.setValue(H,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,St=!0,rr=!0)}if(Be.needsLights&&(Sn.state.directionalShadowMap.length>0&&Ft.setValue(H,"directionalShadowMap",Sn.state.directionalShadowMap,ce),Sn.state.spotShadowMap.length>0&&Ft.setValue(H,"spotShadowMap",Sn.state.spotShadowMap,ce),Sn.state.pointShadowMap.length>0&&Ft.setValue(H,"pointShadowMap",Sn.state.pointShadowMap,ce)),ee.isSkinnedMesh){Ft.setOptional(H,ee,"bindMatrix"),Ft.setOptional(H,ee,"bindMatrixInverse");const kt=ee.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),Ft.setValue(H,"boneTexture",kt.boneTexture,ce))}ee.isBatchedMesh&&(Ft.setOptional(H,ee,"batchingTexture"),Ft.setValue(H,"batchingTexture",ee._matricesTexture,ce),Ft.setOptional(H,ee,"batchingIdTexture"),Ft.setValue(H,"batchingIdTexture",ee._indirectTexture,ce),Ft.setOptional(H,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ft.setValue(H,"batchingColorTexture",ee._colorsTexture,ce));const Ei=ae.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&V.update(ee,ae,Yn),(St||Be.receiveShadow!==ee.receiveShadow)&&(Be.receiveShadow=ee.receiveShadow,Ft.setValue(H,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(jt.envMapIntensity.value=Y.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=eI()),St){if(Ft.setValue(H,"toneMappingExposure",B.toneMappingExposure),Be.needsLights&&Jc(jt,rr),Ae&&te.fog===!0&&$e.refreshFogUniforms(jt,Ae),$e.refreshMaterialUniforms(jt,te,pe,ve,P.state.transmissionRenderTarget[b.id]),Be.needsLights&&Be.lightProbeGrid){const kt=Be.lightProbeGrid;jt.probesSH.value=kt.texture,jt.probesMin.value.copy(kt.boundingBox.min),jt.probesMax.value.copy(kt.boundingBox.max),jt.probesResolution.value.copy(kt.resolution)}vc.upload(H,na(Be),jt,ce)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(vc.upload(H,na(Be),jt,ce),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ft.setValue(H,"center",ee.center),Ft.setValue(H,"modelViewMatrix",ee.modelViewMatrix),Ft.setValue(H,"normalMatrix",ee.normalMatrix),Ft.setValue(H,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const kt=te.uniformsGroups;for(let Ti=0,ki=kt.length;Ti<ki;Ti++){const us=kt[Ti];_e.update(us,Yn),_e.bind(us,Yn)}}return Yn}function Jc(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function ia(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,Y,ae){const te=ie.get(b);te.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ie.get(b.texture).__webglTexture=Y,ie.get(b.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ae,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const ae=ie.get(b);ae.__webglFramebuffer=Y,ae.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(b,Y=0,ae=0){G=b,ue=Y,X=ae;let te=null,ee=!1,Ae=!1;if(b){const we=ie.get(b);if(we.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(H.FRAMEBUFFER,we.__webglFramebuffer),O.copy(b.viewport),Z.copy(b.scissor),Ie=b.scissorTest,T.viewport(O),T.scissor(Z),T.setScissorTest(Ie),re=-1;return}else if(we.__webglFramebuffer===void 0)ce.setupRenderTarget(b);else if(we.__hasExternalTextures)ce.rebindTextures(b,ie.get(b.texture).__webglTexture,ie.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ht=b.depthTexture;if(we.__boundDepthTexture!==ht){if(ht!==null&&ie.has(ht)&&(b.width!==ht.image.width||b.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(b)}}const Ye=b.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ae=!0);const Qe=ie.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[Y])?te=Qe[Y][ae]:te=Qe[Y],ee=!0):b.samples>0&&ce.useMultisampledRTT(b)===!1?te=ie.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?te=Qe[ae]:te=Qe,O.copy(b.viewport),Z.copy(b.scissor),Ie=b.scissorTest}else O.copy(Me).multiplyScalar(pe).floor(),Z.copy(ct).multiplyScalar(pe).floor(),Ie=Ne;if(ae!==0&&(te=fe),T.bindFramebuffer(H.FRAMEBUFFER,te)&&T.drawBuffers(b,te),T.viewport(O),T.scissor(Z),T.setScissorTest(Ie),ee){const we=ie.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,we.__webglTexture,ae)}else if(Ae){const we=Y;for(let Ye=0;Ye<b.textures.length;Ye++){const Qe=ie.get(b.textures[Ye]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ye,Qe.__webglTexture,ae,we)}}else if(b!==null&&ae!==0){const we=ie.get(b.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,we.__webglTexture,ae)}re=-1},this.readRenderTargetPixels=function(b,Y,ae,te,ee,Ae,Ve,we=0){if(!(b&&b.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye){T.bindFramebuffer(H.FRAMEBUFFER,Ye);try{const Qe=b.textures[we],ht=Qe.format,pt=Qe.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(ht)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(pt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-te&&ae>=0&&ae<=b.height-ee&&H.readPixels(Y,ae,te,ee,Pe.convert(ht),Pe.convert(pt),Ae)}finally{const Qe=G!==null?ie.get(G).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,Y,ae,te,ee,Ae,Ve,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ie.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ye=Ye[Ve]),Ye)if(Y>=0&&Y<=b.width-te&&ae>=0&&ae<=b.height-ee){T.bindFramebuffer(H.FRAMEBUFFER,Ye);const Qe=b.textures[we],ht=Qe.format,pt=Qe.type;if(b.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+we),!N.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.bufferData(H.PIXEL_PACK_BUFFER,Ae.byteLength,H.STREAM_READ),H.readPixels(Y,ae,te,ee,Pe.convert(ht),Pe.convert(pt),0);const Rt=G!==null?ie.get(G).__webglFramebuffer:null;T.bindFramebuffer(H.FRAMEBUFFER,Rt);const Gt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await nR(H,Gt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ke),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ae),H.deleteBuffer(Ke),H.deleteSync(Gt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,ae=0){const te=Math.pow(2,-ae),ee=Math.floor(b.image.width*te),Ae=Math.floor(b.image.height*te),Ve=Y!==null?Y.x:0,we=Y!==null?Y.y:0;ce.setTexture2D(b,0),H.copyTexSubImage2D(H.TEXTURE_2D,ae,0,0,Ve,we,ee,Ae),T.unbindTexture()},this.copyTextureToTexture=function(b,Y,ae=null,te=null,ee=0,Ae=0){let Ve,we,Ye,Qe,ht,pt,Ke,Rt,Gt;const $t=b.isCompressedTexture?b.mipmaps[Ae]:b.image;if(ae!==null)Ve=ae.max.x-ae.min.x,we=ae.max.y-ae.min.y,Ye=ae.isBox3?ae.max.z-ae.min.z:1,Qe=ae.min.x,ht=ae.min.y,pt=ae.isBox3?ae.min.z:0;else{const jt=Math.pow(2,-ee);Ve=Math.floor($t.width*jt),we=Math.floor($t.height*jt),b.isDataArrayTexture?Ye=$t.depth:b.isData3DTexture?Ye=Math.floor($t.depth*jt):Ye=1,Qe=0,ht=0,pt=0}te!==null?(Ke=te.x,Rt=te.y,Gt=te.z):(Ke=0,Rt=0,Gt=0);const Bt=Pe.convert(Y.format),un=Pe.convert(Y.type);let Be;Y.isData3DTexture?(ce.setTexture3D(Y,0),Be=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ce.setTexture2DArray(Y,0),Be=H.TEXTURE_2D_ARRAY):(ce.setTexture2D(Y,0),Be=H.TEXTURE_2D),T.activeTexture(H.TEXTURE0),T.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),T.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),T.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);const Sn=T.getParameter(H.UNPACK_ROW_LENGTH),xt=T.getParameter(H.UNPACK_IMAGE_HEIGHT),Yn=T.getParameter(H.UNPACK_SKIP_PIXELS),qn=T.getParameter(H.UNPACK_SKIP_ROWS),St=T.getParameter(H.UNPACK_SKIP_IMAGES);T.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height),T.pixelStorei(H.UNPACK_SKIP_PIXELS,Qe),T.pixelStorei(H.UNPACK_SKIP_ROWS,ht),T.pixelStorei(H.UNPACK_SKIP_IMAGES,pt);const rr=b.isDataArrayTexture||b.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const jt=ie.get(b),Ei=ie.get(Y),kt=ie.get(jt.__renderTarget),Ti=ie.get(Ei.__renderTarget);T.bindFramebuffer(H.READ_FRAMEBUFFER,kt.__webglFramebuffer),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let ki=0;ki<Ye;ki++)rr&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(b).__webglTexture,ee,pt+ki),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ie.get(Y).__webglTexture,Ae,Gt+ki)),H.blitFramebuffer(Qe,ht,Ve,we,Ke,Rt,Ve,we,H.DEPTH_BUFFER_BIT,H.NEAREST);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ee!==0||b.isRenderTargetTexture||ie.has(b)){const jt=ie.get(b),Ei=ie.get(Y);T.bindFramebuffer(H.READ_FRAMEBUFFER,he),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,J);for(let kt=0;kt<Ye;kt++)rr?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,jt.__webglTexture,ee,pt+kt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,jt.__webglTexture,ee),Ft?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ei.__webglTexture,Ae,Gt+kt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ei.__webglTexture,Ae),ee!==0?H.blitFramebuffer(Qe,ht,Ve,we,Ke,Rt,Ve,we,H.COLOR_BUFFER_BIT,H.NEAREST):Ft?H.copyTexSubImage3D(Be,Ae,Ke,Rt,Gt+kt,Qe,ht,Ve,we):H.copyTexSubImage2D(Be,Ae,Ke,Rt,Qe,ht,Ve,we);T.bindFramebuffer(H.READ_FRAMEBUFFER,null),T.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ft?b.isDataTexture||b.isData3DTexture?H.texSubImage3D(Be,Ae,Ke,Rt,Gt,Ve,we,Ye,Bt,un,$t.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,Ae,Ke,Rt,Gt,Ve,we,Ye,Bt,$t.data):H.texSubImage3D(Be,Ae,Ke,Rt,Gt,Ve,we,Ye,Bt,un,$t):b.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ae,Ke,Rt,Ve,we,Bt,un,$t.data):b.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ae,Ke,Rt,$t.width,$t.height,Bt,$t.data):H.texSubImage2D(H.TEXTURE_2D,Ae,Ke,Rt,Ve,we,Bt,un,$t);T.pixelStorei(H.UNPACK_ROW_LENGTH,Sn),T.pixelStorei(H.UNPACK_IMAGE_HEIGHT,xt),T.pixelStorei(H.UNPACK_SKIP_PIXELS,Yn),T.pixelStorei(H.UNPACK_SKIP_ROWS,qn),T.pixelStorei(H.UNPACK_SKIP_IMAGES,St),Ae===0&&Y.generateMipmaps&&H.generateMipmap(Be),T.unbindTexture()},this.initRenderTarget=function(b){ie.get(b).__webglFramebuffer===void 0&&ce.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?ce.setTextureCube(b,0):b.isData3DTexture?ce.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?ce.setTexture2DArray(b,0):ce.setTexture2D(b,0),T.unbindTexture()},this.resetState=function(){ue=0,X=0,G=null,T.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const nI=n=>n*n*(3-2*n);function iI(){const n=Je.useRef(null),e=wS();return Je.useEffect(()=>{if(e)return;const t=n.current;if(!t)return;let r;try{r=new tI({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{return}if(!r.getContext())return;const o=window.matchMedia("(max-width: 860px)").matches,a=Math.min(window.devicePixelRatio||1,o?1.5:2);r.setPixelRatio(a),r.setSize(window.innerWidth,window.innerHeight),r.setClearAlpha(0),t.appendChild(r.domElement);const u=new NR,f=new Si(45,window.innerWidth/window.innerHeight,.1,60);f.position.z=9;const d=new Oo,h=new Oo;d.add(h),u.add(d);const g=new fx(new px(new Bc(.94,1)),new Up({color:2500139,transparent:!0,opacity:.85}));h.add(g);const m=new Bc(1.12,2).toNonIndexed().getAttribute("position"),y=[],M=[],A=new q(.55,.62,.56).normalize();for(let Me=0;Me<m.count;Me+=3){const ct=new q().fromBufferAttribute(m,Me),Ne=new q().fromBufferAttribute(m,Me+1),nt=new q().fromBufferAttribute(m,Me+2),st=ct.clone().add(Ne).add(nt).divideScalar(3).normalize(),rt=st.dot(A),yt=Math.sin(st.x*12.9898+st.y*78.233+st.z*37.719)*.5+.5;rt<.25+yt*.3?y.push(Me,Me+1,Me+2):yt>.55&&M.length<14&&M.push([ct,Ne,nt])}const S=new wn,x=new Float32Array(y.length*3);y.forEach((Me,ct)=>{x[ct*3]=m.getX(Me),x[ct*3+1]=m.getY(Me),x[ct*3+2]=m.getZ(Me)}),S.setAttribute("position",new Wn(x,3)),S.computeVertexNormals();const R=new fx(new px(S),new Up({color:1973795,transparent:!0,opacity:.95}));h.add(R);const D=new Om({color:2302760,side:Yi,transparent:!0,opacity:.9}),C=[];M.forEach((Me,ct)=>{const Ne=new wn,nt=new Float32Array(9);Me.forEach((rt,yt)=>{const Et=rt.clone().multiplyScalar(1.18+ct%4*.09);nt[yt*3]=Et.x,nt[yt*3+1]=Et.y,nt[yt*3+2]=Et.z}),Ne.setAttribute("position",new Wn(nt,3)),Ne.computeVertexNormals();const st=new ir(Ne,D);st.seed=Math.random()*Math.PI*2,C.push(st),h.add(st)});const L=o?220:420,P=new Float32Array(L*3),U=new Float32Array(L);for(let Me=0;Me<L;Me++){const ct=Math.pow(Math.random(),1.8)*.62,Ne=Math.random()*Math.PI*2,nt=Math.acos(2*Math.random()-1);P[Me*3]=ct*Math.sin(nt)*Math.cos(Ne),P[Me*3+1]=ct*Math.sin(nt)*Math.sin(Ne),P[Me*3+2]=ct*Math.cos(nt),U[Me]=Math.random()}const E=new wn;E.setAttribute("position",new Wn(P,3)),E.setAttribute("aSeed",new Wn(U,1));const I=new Bi({transparent:!0,depthWrite:!1,blending:Cc,uniforms:{uTime:{value:0},uPixelRatio:{value:a}},vertexShader:["attribute float aSeed;","uniform float uTime; uniform float uPixelRatio;","varying float vA; varying float vHot;","void main() {","  vec3 p = position;","  p += normalize(position + 0.0001) * sin(uTime * (0.5 + aSeed) + aSeed * 20.0) * 0.05;","  p.y += sin(uTime * 0.7 + aSeed * 6.28) * 0.04;","  vec4 mv = modelViewMatrix * vec4(p, 1.0);","  gl_Position = projectionMatrix * mv;","  float tw = 0.55 + 0.45 * sin(uTime * (1.2 + aSeed * 2.0) + aSeed * 40.0);","  vA = tw * (0.3 + aSeed * 0.7);","  vHot = aSeed;","  gl_PointSize = (0.9 + aSeed * 2.4) * uPixelRatio * (30.0 / -mv.z);","}"].join(`
`),fragmentShader:["varying float vA; varying float vHot;","void main() {","  float d = length(gl_PointCoord - 0.5);","  if (d > 0.5) discard;","  vec3 amber = vec3(1.0, 0.62, 0.22);","  vec3 gold  = vec3(1.0, 0.85, 0.55);","  vec3 col = mix(amber, gold, step(0.6, vHot));","  gl_FragColor = vec4(col, smoothstep(0.5, 0.0, d) * vA);","}"].join(`
`)});h.add(new qR(E,I));const B=document.createElement("canvas");B.width=B.height=128;const k=B.getContext("2d"),$=k.createRadialGradient(64,64,4,64,64,64);$.addColorStop(0,"rgba(255, 190, 110, 0.9)"),$.addColorStop(.35,"rgba(255, 140, 50, 0.45)"),$.addColorStop(1,"rgba(255, 120, 40, 0)"),k.fillStyle=$,k.fillRect(0,0,128,128);const fe=new $R(B),he=new zR(new KS({map:fe,transparent:!0,depthWrite:!1,blending:Cc}));he.scale.setScalar(1.5),h.add(he);function J(){const Me=2*Math.tan(yR.degToRad(f.fov)/2)*f.position.z;return{w:Me*f.aspect,h:Me}}let ue=[];function X(){const Me=window.innerHeight,ct=Xt=>document.getElementById(Xt),Ne=ct("main"),nt=Ne?Ne.nextElementSibling:null,st=ct("offering"),rt=st?st.parentElement:null,yt=ct("case"),Et=ct("rates"),Ot=ct("crew"),At=ct("connect"),Ct=(Xt,Tt=.5)=>Xt?Xt.offsetTop+Xt.offsetHeight*Tt:0,_t=o,H=[];Ne&&H.push({docY:Ne.offsetTop+Me*.45,fx:_t?.22:.34,fy:.04,s:_t?.62:1}),nt&&H.push({docY:Ct(nt),fx:_t?-.24:-.36,fy:.02,s:_t?.5:.72}),rt&&(H.push({docY:rt.offsetTop+Me*.5,fx:_t?.3:.44,fy:-.37,s:.3}),H.push({docY:rt.offsetTop+rt.offsetHeight-Me*.5,fx:_t?.3:.44,fy:-.37,s:.3})),yt&&H.push({docY:Ct(yt),fx:_t?.26:.37,fy:.02,s:_t?.45:.62}),Et&&H.push({docY:Ct(Et),fx:_t?-.26:-.4,fy:-.04,s:_t?.42:.52}),Ot&&H.push({docY:Ct(Ot),fx:_t?.26:.4,fy:0,s:_t?.45:.56}),At&&H.push({docY:Ct(At),fx:_t?0:-.34,fy:.04,s:_t?.55:.72}),ue=H.sort((Xt,Tt)=>Xt.docY-Tt.docY)}function G(Me){if(!ue.length)return{x:0,y:0,s:1};const ct=J();let Ne=ue[0],nt=ue[0];for(let At=0;At<ue.length;At++)ue[At].docY<=Me&&(Ne=ue[At],nt=ue[Math.min(At+1,ue.length-1)]);Me<ue[0].docY&&(Ne=ue[0],nt=ue[0]);const st=Math.max(1,nt.docY-Ne.docY),rt=nI(Math.min(1,Math.max(0,(Me-Ne.docY)/st))),yt=Ne.fx+(nt.fx-Ne.fx)*rt,Et=Ne.fy+(nt.fy-Ne.fy)*rt,Ot=Ne.s+(nt.s-Ne.s)*rt;return{x:yt*ct.w,y:Et*ct.h,s:Ot}}let re=!0,se=0,O=0,Z=0,Ie=0,Ge=0,ze=performance.now();const oe=Me=>{O=(Me.clientX/window.innerWidth-.5)*2,Z=(Me.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",oe,{passive:!0});function ve(Me){if(!re)return;se=requestAnimationFrame(ve);const ct=Math.min(.05,(Me-ze)/1e3);ze=Me;const Ne=Me/1e3,nt=window.scrollY+window.innerHeight*.5,st=G(nt),rt=1-Math.exp(-5*ct);d.position.x+=(st.x-d.position.x)*rt,d.position.y+=(st.y-d.position.y)*rt;const yt=d.scale.x+(st.s-d.scale.x)*rt;d.scale.setScalar(yt),Ie+=(O-Ie)*.04,Ge+=(Z-Ge)*.04,h.rotation.y=Ne*.16+window.scrollY*4e-4+Ie*.08,h.rotation.x=Math.sin(Ne*.22)*.12+Ge*.06,h.position.y=Math.sin(Ne*.6)*.05,C.forEach((Et,Ot)=>{const At=Et.seed;Et.position.setScalar(0),Et.position.y=Math.sin(Ne*.5+At)*.03,Et.rotation.z=Math.sin(Ne*.3+At)*.06*(Ot%2?1:-1)}),I.uniforms.uTime.value=Ne,he.material.opacity=.75+Math.sin(Ne*1.4)*.15,r.render(u,f)}const pe=()=>{re=!document.hidden,re?(ze=performance.now(),se=requestAnimationFrame(ve)):cancelAnimationFrame(se)};document.addEventListener("visibilitychange",pe);const Oe=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),r.setSize(window.innerWidth,window.innerHeight),X()};window.addEventListener("resize",Oe,{passive:!0}),r.domElement.addEventListener("webglcontextlost",()=>{re=!1,cancelAnimationFrame(se),t.style.display="none"}),X();const et=window.setTimeout(X,1200);return window.addEventListener("load",X),se=requestAnimationFrame(ve),()=>{re=!1,cancelAnimationFrame(se),window.clearTimeout(et),window.removeEventListener("pointermove",oe),window.removeEventListener("resize",Oe),window.removeEventListener("load",X),document.removeEventListener("visibilitychange",pe),r.dispose(),t.innerHTML=""}},[e]),e?null:j.jsx("div",{ref:n,"aria-hidden":!0,style:{position:"fixed",inset:0,zIndex:5,pointerEvents:"none"}})}function rI({children:n,showChrome:e=!0}){return j.jsxs("div",{style:{position:"relative"},children:[j.jsx(fT,{}),j.jsx(pb,{}),n,j.jsx(iI,{}),e&&j.jsxs(j.Fragment,{children:[j.jsx(Sb,{}),j.jsx(yb,{})]})]})}function dM(){return j.jsxs(j.Fragment,{children:[j.jsx("section",{id:"privacy",style:{position:"relative",zIndex:2,background:"#C5C5C5",borderTop:"1px solid rgba(0,0,0,0.18)",padding:"70px 32px"},children:j.jsxs("div",{style:{maxWidth:720},children:[j.jsx("h2",{style:{fontSize:"clamp(22px, 2.5vw, 32px)",fontWeight:700,textTransform:"uppercase",color:"#1a1a1a",margin:0},children:"Privacy Policy"}),j.jsx("p",{style:{marginTop:16,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:560},children:"Midnight Space bewaart alleen wat je zelf mailt: je bericht en je contactgegevens. Niets wordt gedeeld of doorverkocht. Vragen? Mail j.guzman@midnightspaceconsultancy.com."})]})}),j.jsx("section",{id:"terms",style:{position:"relative",zIndex:2,background:"#b8b8b8",borderTop:"1px solid rgba(0,0,0,0.18)",padding:"70px 32px"},children:j.jsxs("div",{style:{maxWidth:720},children:[j.jsx("h2",{style:{fontSize:"clamp(22px, 2.5vw, 32px)",fontWeight:700,textTransform:"uppercase",color:"#1a1a1a",margin:0},children:"Terms of Service"}),j.jsx("p",{style:{marginTop:16,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:560},children:"Een proefontwerp is gratis en vrijblijvend. Je betaalt pas na akkoord over een volledige website. Alles verloopt per e-mail — zwart op wit, in je eigen tempo."})]})})]})}function Qo({counter:n,title:e,subtitle:t,children:r}){return j.jsxs("section",{style:{position:"relative",zIndex:2,background:"#C5C5C5",minHeight:"100vh",padding:"120px 32px 80px"},children:[j.jsx(Zt,{delay:0,children:j.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",margin:"0 0 20px"},children:n})}),j.jsx(Zt,{as:"h1",delay:.1,children:j.jsx("h1",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",maxWidth:520,margin:0},children:e})}),t&&j.jsx(Zt,{as:"p",delay:.25,children:j.jsx("p",{style:{marginTop:20,fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:420},children:t})}),j.jsx("div",{style:{marginTop:48},children:r})]})}function hM({embedded:n=!1}){const e=j.jsx(Qo,{counter:"004 / 005",title:"Conceptstudies, eerst gemaakt",subtitle:"Elk ontwerp hieronder werd eerst gemaakt en dan pas voorgesteld — zo werk ik. Eigen beeldmateriaal van de zaak, eerlijk gelabeld.",children:j.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:640},children:lT.map((t,r)=>j.jsx(Zt,{delay:.15+r*.1,children:j.jsxs(Nn.div,{whileHover:{y:-4},transition:{type:"spring",stiffness:320,damping:26},style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,overflow:"hidden",background:"rgba(255,255,255,0.35)"},children:[j.jsx("div",{style:{width:"100%",aspectRatio:"21/9",overflow:"hidden"},children:j.jsx(Nn.img,{src:t.image,alt:t.client,loading:"lazy",whileHover:{scale:1.04},transition:{duration:.6,ease:[.22,1,.36,1]},style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",display:"block"}})}),j.jsxs("div",{style:{padding:"20px 28px 24px"},children:[j.jsx("span",{style:{fontSize:10,letterSpacing:"0.1em",textTransform:"uppercase",color:"#666"},children:t.tag}),j.jsx("h3",{style:{fontSize:18,fontWeight:600,color:"#1a1a1a",margin:"8px 0 6px"},children:t.client}),j.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"#3a3a3a",margin:0},children:t.outcome})]})]})},t.client))})});return e}function pM({embedded:n=!1}){const e=j.jsxs(Qo,{counter:"005 / 005",title:"Connect",subtitle:"Vertel over je zaak — alles staat zwart op wit, en je beslist in je eigen tempo.",children:[j.jsx(Zt,{delay:.2,children:j.jsxs("a",{href:"mailto:j.guzman@midnightspaceconsultancy.com",style:{display:"inline-flex",alignItems:"center",gap:10,fontSize:16,color:"#1a1a1a",textDecoration:"none"},children:[j.jsx(_b,{size:18,strokeWidth:1.5}),"j.guzman@midnightspaceconsultancy.com"]})}),j.jsx(Zt,{delay:.35,children:j.jsxs("form",{style:{marginTop:32,maxWidth:420,display:"flex",flexDirection:"column",gap:12},onSubmit:t=>t.preventDefault(),children:[j.jsx("input",{type:"text",placeholder:"Company","aria-label":"Company",style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:9999,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)"}}),j.jsx("input",{type:"email",placeholder:"Work email","aria-label":"Work email",style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:9999,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)"}}),j.jsx("textarea",{placeholder:"What should we automate?","aria-label":"Message",rows:4,style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,padding:"12px 20px",fontSize:13,background:"rgba(255,255,255,0.5)",resize:"vertical"}}),j.jsx("button",{type:"submit",className:"btn-cognitra-primary",style:{alignSelf:"flex-start"},children:"SEND MESSAGE"})]})})]});return e}function mM({embedded:n=!1}){const e=j.jsx(Qo,{counter:"002 / 005",title:"Wie er achter zit",subtitle:"Een kleine webstudio uit Oost-Vlaanderen. Je vindt hier geen klantenlogo’s of sterren — de studio is jong, en ik verzin er liever geen.",children:j.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:16},children:cT.map((t,r)=>j.jsx(Zt,{delay:.1+r*.08,children:j.jsxs("div",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:16,padding:24,background:"rgba(255,255,255,0.35)"},children:[j.jsx("h3",{style:{fontSize:16,fontWeight:600,margin:"0 0 4px",color:"#1a1a1a"},children:t.name}),j.jsx("p",{style:{fontSize:12,letterSpacing:"0.06em",margin:"0 0 8px",color:"#666"},children:t.role}),j.jsx("p",{style:{fontSize:13,lineHeight:1.5,margin:0,color:"#3a3a3a"},children:t.focus})]})},t.name))})});return e}function sI(){const n=e=>t=>{t.preventDefault(),Rh(e)};return j.jsxs("section",{id:"main",style:{position:"relative",zIndex:1,height:"100vh"},children:[j.jsx("div",{className:"cognitra-hero-overlay",style:{position:"absolute",top:0,left:0,right:0,height:"48%",background:"#C5C5C5",display:"flex",flexDirection:"column",paddingTop:70},children:j.jsx("div",{style:{flex:1,display:"flex",alignItems:"flex-end",padding:"0 32px 24px 32px"},children:j.jsxs("div",{className:"cognitra-hero-row",style:{display:"flex",alignItems:"stretch",width:"100%",gap:48},children:[j.jsxs("div",{className:"cognitra-hero-col-left",style:{width:"32%",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:80},children:[j.jsx(Zt,{as:"h1",delay:.1,children:j.jsxs("h1",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",margin:0,whiteSpace:"pre-line"},children:["JE ZAAK GROEIDE.",`
`,"JE WEBSITE BLEEF STAAN."]})}),j.jsx(Zt,{delay:.5,children:j.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",margin:0},children:"001 / 005"})})]}),j.jsxs("div",{className:"cognitra-hero-col-right",style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:80},children:[j.jsx(Zt,{as:"p",delay:.25,children:j.jsx("p",{style:{fontSize:18,lineHeight:1.6,color:"#5a5a5a",maxWidth:340,margin:0},children:"Midnight Space herbouwt verouderde websites voor zaken in Oost-Vlaanderen — vanaf nul getekend, geen sjablonen."})}),j.jsx(Zt,{delay:.4,children:j.jsxs("div",{className:"cognitra-hero-buttons",style:{display:"flex",gap:10},children:[j.jsx("button",{type:"button",className:"btn-cognitra-primary",onClick:n("connect"),children:"VRAAG JE PROEFONTWERP"}),j.jsx("button",{type:"button",className:"btn-cognitra-secondary",onClick:n("case"),children:"BEKIJK HET WERK"})]})})]})]})})}),j.jsx(Zt,{delay:.6,className:"cognitra-hero-bottom-text",style:{position:"absolute",top:"74%",transform:"translateY(-50%)",left:32,maxWidth:260},children:j.jsx("p",{style:{fontSize:14,lineHeight:1.65,color:"rgba(255,255,255,0.9)",margin:0},children:"Eerst zien, dan beslissen: je krijgt een gratis proefontwerp van je homepage, en je beslist pas daarna. Geen telefoontjes, geen verplichtingen — één e-mail."})})]})}const oI="DIT IS WAT IK VOOR JE MAAK".split(" "),Ho=[{image:"./media/debeule-hero.webp",label:"Conceptstudie — Autoschadebedrijf De Beule, Zele"},{image:"./media/michiels-hero.webp",label:"Conceptstudie — Schrijnwerkerij Michiels, Zele"},{image:"./media/jimmys-hero.webp",label:"Conceptstudie — Jimmy's Classic Cars, Buggenhout"}];function gM(n){const e=.1+n*.28;return[e,e+.18]}function aI({video:n,idx:e,progress:t}){const[r,o]=gM(e),a=Za(t,[r,o],[1,0]),u=Za(t,[r,o],[0,1]),f=Za(t,[r,o],[1.06,1]),d=Za(t,[o-.04,o],[0,1]);return j.jsxs("div",{style:{width:"100%",aspectRatio:"4/3",position:"relative",overflow:"hidden"},children:[j.jsx(Nn.video,{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:n,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:a}}),j.jsx(Nn.img,{src:Ho[e].image,alt:Ho[e].label,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top",opacity:u,scale:f}}),j.jsx(Nn.span,{style:{position:"absolute",left:0,right:0,bottom:0,padding:"28px 14px 10px",background:"linear-gradient(transparent, rgba(0,0,0,0.55))",color:"rgba(255,255,255,0.92)",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase",opacity:d},children:Ho[e].label})]})}function lI({idx:n,progress:e}){const[t,r]=gM(n),o=Za(e,[t,r],[.25,1]);return j.jsx(Nn.span,{style:{width:26,height:3,borderRadius:2,background:"#1a1a1a",opacity:o,display:"inline-block"}})}function Gx({title:n,text:e,children:t}){return j.jsxs(Nn.article,{whileHover:{y:-6},transition:{type:"spring",stiffness:320,damping:26},style:{background:"transparent",border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,overflow:"hidden",display:"flex",flexDirection:"column",paddingTop:16,height:"100%"},children:[t,j.jsxs("div",{style:{padding:"20px 24px 24px 24px"},children:[j.jsx("h3",{style:{fontSize:17,fontWeight:600,color:"#1a1a1a",marginBottom:10,marginTop:0},children:n}),j.jsx("p",{style:{fontSize:13,lineHeight:1.55,color:"#3a3a3a",margin:0},children:e})]})]})}function Wx({compact:n}){return j.jsxs(j.Fragment,{children:[j.jsx(Zt,{delay:0,children:j.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",color:"#666",marginBottom:n?12:20,marginTop:0},children:"003 / 005"})}),j.jsxs("div",{className:"cognitra-services-head-row",style:{display:"flex",gap:48,alignItems:"flex-start",marginBottom:n?20:32},children:[j.jsx("div",{className:"cognitra-services-head-col",style:{width:"32%"},children:j.jsx("h2",{style:{fontSize:"clamp(24px, 2.6vw, 38px)",fontWeight:700,lineHeight:1.05,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#1a1a1a",maxWidth:320,display:"flex",flexWrap:"wrap",gap:"0.25em",margin:0},children:oI.map((e,t)=>j.jsx(Zt,{as:"span",delay:.1+t*.08,y:28,children:j.jsx("span",{children:e})},e+t))})}),j.jsx("div",{className:"cognitra-services-head-col",style:{flex:1,paddingTop:8},children:j.jsx(Zt,{as:"p",delay:.25,children:j.jsx("p",{style:{fontSize:14,lineHeight:1.65,color:"#3a3a3a",maxWidth:320,margin:0},children:"Websites voor zelfstandigen en lokale bedrijven — van eerste schets tot lancering, door één persoon. Scroll verder en zie de voorbeelden verschijnen."})})})]})]})}function uI(){const n=Je.useRef(null),e=wS(),[t,r]=Je.useState(!1);Je.useEffect(()=>{const u=window.matchMedia("(max-width: 860px)"),f=()=>r(u.matches);return f(),u.addEventListener("change",f),()=>u.removeEventListener("change",f)},[]);const{scrollYProgress:o}=rb({target:n,offset:["start start","end end"]});return!e&&!t?j.jsx("div",{ref:n,style:{position:"relative",zIndex:2,height:"340vh"},children:j.jsxs("section",{id:"offering",className:"cognitra-section-3",style:{position:"sticky",top:0,height:"100vh",background:"#C5C5C5",display:"flex",flexDirection:"column",justifyContent:"center",padding:"84px 32px 28px 32px",boxSizing:"border-box"},children:[j.jsx(Wx,{compact:!0}),j.jsx("div",{className:"cognitra-cards-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,gridAutoRows:"1fr"},children:oc.map((u,f)=>j.jsx(Gx,{title:u.title,text:u.text,children:j.jsx(aI,{video:u.video,idx:f,progress:o})},u.title))}),j.jsx("div",{style:{display:"flex",gap:8,justifyContent:"center",marginTop:22},children:oc.map((u,f)=>j.jsx(lI,{idx:f,progress:o},f))})]})}):j.jsxs("section",{id:"offering",className:"cognitra-section-3 cognitra-section-pad-lg",style:{position:"relative",zIndex:2,background:"#C5C5C5",display:"flex",flexDirection:"column",padding:"70px 32px 80px 32px",minHeight:"auto"},children:[j.jsx(Wx,{}),j.jsx("div",{className:"cognitra-cards-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20,gridAutoRows:"1fr"},children:oc.map((u,f)=>j.jsx(Zt,{delay:.3+f*.12,children:j.jsx(Gx,{title:u.title,text:u.text,children:j.jsxs("div",{style:{width:"100%",aspectRatio:"4/3",position:"relative",overflow:"hidden"},children:[j.jsx("img",{src:Ho[f].image,alt:Ho[f].label,loading:"lazy",style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"top"}}),j.jsx("span",{style:{position:"absolute",left:0,right:0,bottom:0,padding:"28px 14px 10px",background:"linear-gradient(transparent, rgba(0,0,0,0.55))",color:"rgba(255,255,255,0.92)",fontSize:10,letterSpacing:"0.08em",textTransform:"uppercase"},children:Ho[f].label})]})})},u.title))})]})}const cI="EERST ZIEN. DAN BESLISSEN. ZO SIMPEL IS HET.".split(" ");function fI(){return j.jsx("section",{className:"cognitra-section-pad",style:{position:"relative",zIndex:1,height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"70px 32px 32px 32px"},children:j.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start",maxWidth:720,padding:"80px 0"},children:[j.jsx("h2",{style:{fontSize:"clamp(26px, 3vw, 42px)",fontWeight:700,lineHeight:1.08,letterSpacing:"-0.01em",textTransform:"uppercase",color:"#fff",display:"flex",flexWrap:"wrap",gap:"0.25em",margin:0},children:cI.map((n,e)=>j.jsx(Zt,{as:"span",delay:.15+e*.08,y:32,children:j.jsx("span",{children:n})},n+e))}),j.jsx(Zt,{as:"p",delay:.9,children:j.jsx("p",{style:{marginTop:24,fontSize:14,lineHeight:1.65,color:"rgba(255,255,255,0.85)",maxWidth:260},children:"We provide all-in-one AI automation services in one place."})})]})})}function vM({embedded:n=!1}){const e=j.jsxs(Qo,{counter:"005 / 005",title:"Hoe het werkt",subtitle:"Geen offerte vol beloftes: het eerste ontwerp bestaat al voor jij iets beslist.",children:[j.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:20},children:uT.map((t,r)=>{const o="highlight"in t&&t.highlight;return j.jsx(Zt,{delay:.15+r*.1,children:j.jsxs("div",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,padding:28,background:o?"#1a1a1a":"rgba(255,255,255,0.35)",color:o?"#fff":"#1a1a1a"},children:[j.jsx("p",{style:{fontSize:11,letterSpacing:"0.08em",margin:0,opacity:.7},children:t.period}),j.jsx("h3",{style:{fontSize:22,fontWeight:700,margin:"8px 0 4px"},children:t.name}),j.jsx("p",{style:{fontSize:28,fontWeight:700,margin:"0 0 16px"},children:t.price}),j.jsx("ul",{style:{margin:0,paddingLeft:18,fontSize:13,lineHeight:1.7},children:t.features.map(a=>j.jsx("li",{children:a},a))})]})},t.name)})}),j.jsx(Zt,{delay:.5,children:j.jsx("button",{type:"button",className:"btn-cognitra-primary",style:{marginTop:32},onClick:()=>zp("connect"),children:"VRAAG JE PROEFONTWERP"})})]});return e}function dI(){return j.jsxs(j.Fragment,{children:[j.jsx(sI,{}),j.jsx(fI,{}),j.jsx(uI,{}),j.jsx("div",{id:"case",className:"scroll-mt-8",children:j.jsx(hM,{embedded:!0})}),j.jsx("div",{id:"rates",className:"scroll-mt-8",children:j.jsx(vM,{embedded:!0})}),j.jsx("div",{id:"crew",className:"scroll-mt-8",children:j.jsx(mM,{embedded:!0})}),j.jsx("div",{id:"connect",className:"scroll-mt-8",children:j.jsx(pM,{embedded:!0})})]})}function hI({embedded:n=!1}){const e=j.jsx(Qo,{counter:"003 / 005",title:"Explore what we offer",subtitle:"End-to-end AI automation — advisory, engineering, and process design under one roof.",children:j.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:20},children:oc.map((t,r)=>j.jsx(Zt,{delay:.2+r*.1,children:j.jsxs("article",{style:{border:"1px solid rgba(0,0,0,0.18)",borderRadius:20,overflow:"hidden",background:"rgba(255,255,255,0.35)"},children:[j.jsx("div",{style:{aspectRatio:"4/3",position:"relative"},children:j.jsx("video",{autoPlay:!0,muted:!0,loop:!0,playsInline:!0,src:t.video,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})}),j.jsxs("div",{style:{padding:24},children:[j.jsx("h3",{style:{fontSize:18,fontWeight:600,color:"#1a1a1a",margin:"0 0 10px"},children:t.title}),j.jsx("p",{style:{fontSize:13,lineHeight:1.6,color:"#3a3a3a",margin:0},children:t.text})]})]})},t.title))})});return e}function pI(){return j.jsxs(j.Fragment,{children:[j.jsx(Qo,{counter:"LEGAL",title:"Policies",subtitle:"Privacy en voorwaarden — kort en eerlijk, zoals de rest van de site.",children:j.jsx(j.Fragment,{})}),j.jsx(dM,{})]})}function mI(){return Je.useEffect(()=>{sT()},[]),j.jsxs(rI,{children:[j.jsx(oT,{routes:{"":j.jsx(dI,{}),offering:j.jsx(hI,{}),case:j.jsx(hM,{}),rates:j.jsx(vM,{}),crew:j.jsx(mM,{}),connect:j.jsx(pM,{}),privacy:j.jsx(pI,{})}}),j.jsx(dM,{}),j.jsx("footer",{style:{position:"relative",zIndex:2,background:"#1a1a1a",color:"rgba(255,255,255,0.5)",textAlign:"center",padding:"24px 32px",fontSize:11,letterSpacing:"0.06em"},children:"© 2026 MIDNIGHT SPACE · OOST-VLAANDEREN"})]})}rT.createRoot(document.getElementById("root")).render(j.jsx(Je.StrictMode,{children:j.jsx(mI,{})}));
