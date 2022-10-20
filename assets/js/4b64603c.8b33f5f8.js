"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[6296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),m=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(n),u=r,f=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},o=void 0,l={unversionedId:"fundamentals/migration",id:"version-2.3.x/fundamentals/migration",title:"Migrating from Reanimated 1.x",description:"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.",source:"@site/versioned_docs/version-2.3.x/fundamentals/migration.md",sourceDirName:"fundamentals",slug:"/fundamentals/migration",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/migration",draft:!1,tags:[],version:"2.3.x",frontMatter:{id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},sidebar:"version-2.3.x/docs",previous:{title:"Architecture",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/architecture"},next:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.3.x/fundamentals/web-support"}},d={},m=[{value:"Renamed methods:",id:"renamed-methods",level:3},{value:"1. <code>interpolate</code> renamed to <code>interpolateNode</code>",id:"1-interpolate-renamed-to-interpolatenode",level:4},{value:"2. <code>Easing</code> renamed to <code>EasingNode</code>",id:"2-easing-renamed-to-easingnode",level:4}],s={toc:m};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed their name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),(0,r.kt)("h3",{id:"renamed-methods"},"Renamed methods:"),(0,r.kt)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",(0,r.kt)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",(0,r.kt)("inlineCode",{parentName:"h4"},"interpolateNode")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",(0,r.kt)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),(0,r.kt)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",(0,r.kt)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",(0,r.kt)("inlineCode",{parentName:"h4"},"EasingNode")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"Easing")," imported from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,r.kt)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}c.isMDXComponent=!0}}]);