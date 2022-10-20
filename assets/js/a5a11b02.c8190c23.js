"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[4880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=i.createContext({}),d=function(e){var t=i.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return i.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(a),k=n,h=u["".concat(m,".").concat(k)]||u[k]||s[k]||l;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var d=2;d<l;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4242:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var i=a(7462),n=(a(7294),a(3905));const l={id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},o=void 0,r={unversionedId:"api/LayoutAnimations/entryAnimations",id:"api/LayoutAnimations/entryAnimations",title:"Entering Animations",description:"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view.",source:"@site/docs/api/LayoutAnimations/EntryAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/entryAnimations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/entryAnimations",draft:!1,tags:[],version:"current",frontMatter:{id:"entryAnimations",title:"Entering Animations",sidebar_label:"Entering Animations"},sidebar:"docs",previous:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/customAnimations"},next:{title:"Exiting Animations",permalink:"/react-native-reanimated/docs/next/api/LayoutAnimations/exitAnimations"}},m={},d=[{value:"How to use predefined entering animation?",id:"how-to-use-predefined-entering-animation",level:2},{value:"1. Import chosen animation",id:"1-import-chosen-animation",level:3},{value:"2. Choose Animated Component which entering you want to animate",id:"2-choose-animated-component-which-entering-you-want-to-animate",level:3},{value:"3. Customize the animation",id:"3-customize-the-animation",level:3},{value:"Predefined Animations",id:"predefined-animations",level:2},{value:"Fade",id:"fade",level:3},{value:"Animations",id:"animations",level:4},{value:"Modifiers",id:"modifiers",level:4},{value:"Example",id:"example",level:4},{value:"Bounce",id:"bounce",level:3},{value:"Animations",id:"animations-1",level:4},{value:"Modifiers",id:"modifiers-1",level:4},{value:"Example",id:"example-1",level:4},{value:"Flip",id:"flip",level:3},{value:"Animations",id:"animations-2",level:4},{value:"Modifiers",id:"modifiers-2",level:4},{value:"Example",id:"example-2",level:4},{value:"Stretch",id:"stretch",level:3},{value:"Animations",id:"animations-3",level:4},{value:"Modifiers",id:"modifiers-3",level:4},{value:"Example",id:"example-3",level:4},{value:"Zoom",id:"zoom",level:3},{value:"Animations",id:"animations-4",level:4},{value:"Modifiers",id:"modifiers-4",level:4},{value:"Example",id:"example-4",level:4},{value:"Slide",id:"slide",level:3},{value:"Animations",id:"animations-5",level:4},{value:"Modifiers",id:"modifiers-5",level:4},{value:"Example",id:"example-5",level:4},{value:"LightSpeed",id:"lightspeed",level:3},{value:"Animations",id:"animations-6",level:4},{value:"Modifiers",id:"modifiers-6",level:4},{value:"Example",id:"example-6",level:4},{value:"Pinwheel",id:"pinwheel",level:3},{value:"Animations",id:"animations-7",level:4},{value:"Modifiers",id:"modifiers-7",level:4},{value:"Example",id:"example-7",level:4},{value:"Roll",id:"roll",level:3},{value:"Animations",id:"animations-8",level:4},{value:"Modifiers",id:"modifiers-8",level:4},{value:"Example",id:"example-8",level:4},{value:"Rotate",id:"rotate",level:3},{value:"Animations",id:"animations-9",level:4},{value:"Modifiers",id:"modifiers-9",level:4},{value:"Example",id:"example-9",level:4}],p={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In React Native every component appears instantly whenever you add it to the component hierarchy. It's not something we are used to in the real world. Layout Animations are here to address the problem and help you animate an appearance of any view."),(0,n.kt)("p",null,"We provide an easy API that allows you to code almost any animation you want. Because some of the animations are more frequently used than the others we coded them for you and provided in an accessible way. Below you can find an instruction step by step explaining how to use them. A little further down you will find a detailed description of all the predefined entering animations."),(0,n.kt)("p",null,"If you want to create more complex animation you can use ",(0,n.kt)("a",{parentName:"p",href:"keyframeAnimations"},"Keyframes"),"."),(0,n.kt)("h2",{id:"how-to-use-predefined-entering-animation"},"How to use predefined entering animation?"),(0,n.kt)("h3",{id:"1-import-chosen-animation"},"1. Import chosen animation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// AnimationName is just an example and should be replaced by real animation. For Instance FadeIn\nimport { AnimationName } from 'react-native-reanimated'; \n")),(0,n.kt)("h3",{id:"2-choose-animated-component-which-entering-you-want-to-animate"},"2. Choose Animated Component which entering you want to animate"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// AnimatedComponent - component created by createAnimatedComponent or imported from Reanimated\n<AnimatedComponent entering={AnimationName} > \n")),(0,n.kt)("h3",{id:"3-customize-the-animation"},"3. Customize the animation"),(0,n.kt)("p",null,"Different type of entering animations can be customized differently. For the complete list of option please refer to the paragraph specific to the particular animation type."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"<AnimatedComponent entering={AnimationName.duration(3000).otherModifier()} >\n")),(0,n.kt)("h2",{id:"predefined-animations"},"Predefined Animations"),(0,n.kt)("p",null,"Below we listed all of the currently available predefined entering animations grouped by their type. Each group contains all of its modifiers and a video presenting what it looks like when applied to a simple button."),(0,n.kt)("p",null,"If you cannot find an animation that suits you then you can create a custom one. If you think that the animation should be here, please open an issue or create a pull request. "),(0,n.kt)("h3",{id:"fade"},"Fade"),(0,n.kt)("p",null,"Simple animation based on changing of opacity."),(0,n.kt)("h4",{id:"animations"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FadeIn"),(0,n.kt)("li",{parentName:"ul"},"FadeInRight"),(0,n.kt)("li",{parentName:"ul"},"FadeInLeft"),(0,n.kt)("li",{parentName:"ul"},"FadeInUp"),(0,n.kt)("li",{parentName:"ul"},"FadeInDown")),(0,n.kt)("h4",{id:"modifiers"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317260-b3ccbe00-c2de-11eb-8434-8998b12dfa3c.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"bounce"},"Bounce"),(0,n.kt)("p",null,"Animation based on smoothly shaking of component."),(0,n.kt)("h4",{id:"animations-1"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"BounceIn"),(0,n.kt)("li",{parentName:"ul"},"BounceInRight"),(0,n.kt)("li",{parentName:"ul"},"BounceInLeft"),(0,n.kt)("li",{parentName:"ul"},"BounceInUp"),(0,n.kt)("li",{parentName:"ul"},"BounceInDown")),(0,n.kt)("h4",{id:"modifiers-1"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-1"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317341-cc3cd880-c2de-11eb-9d72-4065c740667e.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"flip"},"Flip"),(0,n.kt)("p",null,"3D animation based on flipping object over specific axis."),(0,n.kt)("h4",{id:"animations-2"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"FlipInYRight"),(0,n.kt)("li",{parentName:"ul"},"FlipInYLeft"),(0,n.kt)("li",{parentName:"ul"},"FlipInXUp"),(0,n.kt)("li",{parentName:"ul"},"FlipInXDown"),(0,n.kt)("li",{parentName:"ul"},"FlipInEasyX"),(0,n.kt)("li",{parentName:"ul"},"FlipInEasyY")),(0,n.kt)("h4",{id:"modifiers-2"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-2"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317406-deb71200-c2de-11eb-8dee-c658a4e1e47a.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"stretch"},"Stretch"),(0,n.kt)("p",null,"Animation based on changing width or height of object."),(0,n.kt)("h4",{id:"animations-3"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"StretchInX"),(0,n.kt)("li",{parentName:"ul"},"StretchInY")),(0,n.kt)("h4",{id:"modifiers-3"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-3"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317473-f42c3c00-c2de-11eb-8772-b366c2ddde7f.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"zoom"},"Zoom"),(0,n.kt)("p",null,"Animation based on changing scale of object."),(0,n.kt)("h4",{id:"animations-4"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ZoomIn"),(0,n.kt)("li",{parentName:"ul"},"ZoomInRotate"),(0,n.kt)("li",{parentName:"ul"},"ZoomInRight"),(0,n.kt)("li",{parentName:"ul"},"ZoomInLeft"),(0,n.kt)("li",{parentName:"ul"},"ZoomInUp"),(0,n.kt)("li",{parentName:"ul"},"ZoomInDown"),(0,n.kt)("li",{parentName:"ul"},"ZoomInEasyUp"),(0,n.kt)("li",{parentName:"ul"},"ZoomInEasyDown")),(0,n.kt)("h4",{id:"modifiers-4"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-4"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317529-04441b80-c2df-11eb-9627-c56e986e44c1.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"slide"},"Slide"),(0,n.kt)("p",null,"Animation based on horizontal or vertical moving of object."),(0,n.kt)("h4",{id:"animations-5"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SlideInRight"),(0,n.kt)("li",{parentName:"ul"},"SlideInLeft"),(0,n.kt)("li",{parentName:"ul"},"SlideInUp"),(0,n.kt)("li",{parentName:"ul"},"SlideInDown")),(0,n.kt)("h4",{id:"modifiers-5"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-5"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/36106620/120317587-1a51dc00-c2df-11eb-937a-c53a237afca2.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"lightspeed"},"LightSpeed"),(0,n.kt)("p",null,"Animation based on horizontal moving of object with changing of opacity and skew."),(0,n.kt)("h4",{id:"animations-6"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LightSpeedInRight"),(0,n.kt)("li",{parentName:"ul"},"LightSpeedInLeft")),(0,n.kt)("h4",{id:"modifiers-6"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 250"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-6"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125057634-c094bc80-e0a9-11eb-98d9-0c8eed1e63b0.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"pinwheel"},"Pinwheel"),(0,n.kt)("p",null,"Animation based on rotation with scale and opacity change."),(0,n.kt)("h4",{id:"animations-7"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PinwheelIn")),(0,n.kt)("h4",{id:"modifiers-7"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-7"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058126-40228b80-e0aa-11eb-8396-7f373af7fcbe.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"roll"},"Roll"),(0,n.kt)("p",null,"Animation based on horizontal moving of object with rotation."),(0,n.kt)("h4",{id:"animations-8"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RollInLeft"),(0,n.kt)("li",{parentName:"ul"},"RollInRight")),(0,n.kt)("h4",{id:"modifiers-8"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-8"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058243-60524a80-e0aa-11eb-94c8-79728688e2f3.mov",controls:"controls",muted:"muted"}),(0,n.kt)("h3",{id:"rotate"},"Rotate"),(0,n.kt)("p",null,"Animation based on rotation of object."),(0,n.kt)("h4",{id:"animations-9"},"Animations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RotateInDownLeft"),(0,n.kt)("li",{parentName:"ul"},"RotateInDownRight"),(0,n.kt)("li",{parentName:"ul"},"RotateInUpLeft"),(0,n.kt)("li",{parentName:"ul"},"RotateInUpRight")),(0,n.kt)("h4",{id:"modifiers-9"},"Modifiers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"duration")," (in ms) default: 300"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"delay")," (in ms) default: 0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"easing")," same easing worklet as with ",(0,n.kt)("inlineCode",{parentName:"li"},"withTiming")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"springify")," change animation to spring"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"damping ")," default: 10"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"mass")," default: 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"stiffness")," default: 100"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"overshootClamping")," default: false"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restDisplacementThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"restSpeedThreshold")," default: 0.001"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withCallback")," callback that will fire after the entry animation ends"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"withInitialValues")," sets the initial values"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"randomDelay")," randomize delay of the animation between 0 and provided delay ( or 1000ms if delay not provided )")),(0,n.kt)("h4",{id:"example-9"},"Example"),(0,n.kt)("video",{src:"https://user-images.githubusercontent.com/48885911/125058359-79f39200-e0aa-11eb-8c78-c31e461e3748.mov",controls:"controls",muted:"muted"}))}s.isMDXComponent=!0}}]);