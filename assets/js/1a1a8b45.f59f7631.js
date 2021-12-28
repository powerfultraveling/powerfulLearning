"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[563],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var c=2;c<i;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1753:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),u=["components"],a={},l="\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",c={unversionedId:"Vue/\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",id:"Vue/\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",title:"\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",description:"\u524d\u8a00",source:"@site/docs\\Vue\\\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6.md",sourceDirName:"Vue",slug:"/Vue/\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",permalink:"/powerfulLearning/docs/Vue/\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Vue\\\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u521d\u5b78 Tailwind \u554f\u984c\u96c6",permalink:"/powerfulLearning/docs/Tailwind/\u521d\u5b78 Tailwind \u554f\u984c\u96c6"}},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[],level:2},{value:"\u554f\u984c\u958b\u59cb\u56c9!",id:"\u554f\u984c\u958b\u59cb\u56c9",children:[{value:"(\u4e00) coding style \u76f8\u95dc",id:"\u4e00-coding-style-\u76f8\u95dc",children:[{value:"1. \u76f8\u5c0d\u65bc React\uff0cVue \u6709\u5f88\u591a\u908f\u8f2f\u90fd\u5f88 inline\uff0c\u8981\u600e\u9ebc\u63d0\u5347\u57ce\u5e02\u7684\u53ef\u8b80\u6027?",id:"1-\u76f8\u5c0d\u65bc-reactvue-\u6709\u5f88\u591a\u908f\u8f2f\u90fd\u5f88-inline\u8981\u600e\u9ebc\u63d0\u5347\u57ce\u5e02\u7684\u53ef\u8b80\u6027",children:[],level:4},{value:"2. \u5728 React\uff0cmethod \u53ca props \u90fd\u662f\u7531\u4e0a\u5230\u4e0b\u50b3\u905e\uff0c\u5728 Vue props \u662f\u5411\u4e0b\u50b3\u905e\u6c92\u932f\uff0cmethod \u537b\u8981\u5f9e child component emit\u3002\u5c0d\u65bc\u4e8b\u5f8c\u7dad\u8b77\u5176\u5be6\u6bd4\u8f03\u96e3\u6293\u5230\u6574\u500b\u5c08\u6848\u7684 data flow\uff0c\u8981\u600e\u9ebc\u89e3\u6c7a\u9019\u500b\u554f\u984c?",id:"2-\u5728-reactmethod-\u53ca-props-\u90fd\u662f\u7531\u4e0a\u5230\u4e0b\u50b3\u905e\u5728-vue-props-\u662f\u5411\u4e0b\u50b3\u905e\u6c92\u932fmethod-\u537b\u8981\u5f9e-child-component-emit\u5c0d\u65bc\u4e8b\u5f8c\u7dad\u8b77\u5176\u5be6\u6bd4\u8f03\u96e3\u6293\u5230\u6574\u500b\u5c08\u6848\u7684-data-flow\u8981\u600e\u9ebc\u89e3\u6c7a\u9019\u500b\u554f\u984c",children:[],level:4},{value:"3. \u5982\u4f55\u5728 Vue \u88e1\u9762\u7dad\u6301\u4e7e\u6de8\u7684\u7a0b\u5f0f\u78bc?",id:"3-\u5982\u4f55\u5728-vue-\u88e1\u9762\u7dad\u6301\u4e7e\u6de8\u7684\u7a0b\u5f0f\u78bc",children:[],level:4}],level:3}],level:2}],d={toc:p};function s(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u521d\u5b78-vue-\u7684\u554f\u984c\u96c6"},"\u521d\u5b78 Vue \u7684\u554f\u984c\u96c6"),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"\u5728\u525b\u5b78\u7fd2\u4e00\u500b\u65b0\u7684\u6280\u8853\u6642\uff0c\u5e38\u6703\u9047\u5230\u5f88\u591a\u5c0f\u554f\u984c\uff0c\u9019\u4e9b\u554f\u984c\u53ef\u80fd\u5f88\u57fa\u672c\u53ef\u80fd\u9084\u6015\u770b\u8d77\u4f86\u5f88\u7b28\uff0c\u537b\u5f88\u53ef\u80fd\u78b0\u89f8\u5230\u9019\u9805\u65b0\u6280\u8853\u7684\u6838\u5fc3\u6982\u5ff5\u3001\u89e3\u6c7a\u7684\u6838\u5fc3\u75db\u9ede\uff1b\u751a\u81f3\u662f\u9019\u500b\u6280\u8853\u7684\u5f31\u9ede\u3002\u4e00\u500b\u500b\u7406\u89e3\u9019\u4e9b\u5c0f\u554f\u984c\u5f8c\uff0c\u4e0d\u55ae\u662f\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\u672c\u8eab\uff0c\u4e5f\u8b93\u6211\u5011\u5c0d\u9019\u9805\u6280\u8853\u6709\u66f4\u900f\u5fb9\u7684\u4e86\u89e3\uff0c\u5960\u5b9a\u624e\u5be6\u7684\u57fa\u790e\u3002"),(0,i.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u6c7a\u5b9a\u5728\u672a\u4f86\u5b78\u7fd2\u65b0\u6280\u8853\u6642\uff0c\u8a18\u9304\u4e0b\u6211\u5728\u5b78\u7fd2\u904e\u7a0b\u4e2d\u9047\u5230\u7684\u554f\u984c\u53ca\u89e3\u7b54\uff0c\u4e0d\u55ae\u5e6b\u52a9\u81ea\u5df1\uff0c\u4e5f\u5e6b\u52a9\u540c\u6a23\u525b\u63a5\u89f8\u9019\u500b\u6280\u8853\u7684\u4eba\u5011 !"),(0,i.kt)("h2",{id:"\u554f\u984c\u958b\u59cb\u56c9"},"\u554f\u984c\u958b\u59cb\u56c9!"),(0,i.kt)("h3",{id:"\u4e00-coding-style-\u76f8\u95dc"},"(\u4e00) coding style \u76f8\u95dc"),(0,i.kt)("h4",{id:"1-\u76f8\u5c0d\u65bc-reactvue-\u6709\u5f88\u591a\u908f\u8f2f\u90fd\u5f88-inline\u8981\u600e\u9ebc\u63d0\u5347\u57ce\u5e02\u7684\u53ef\u8b80\u6027"},"1. \u76f8\u5c0d\u65bc React\uff0cVue \u6709\u5f88\u591a\u908f\u8f2f\u90fd\u5f88 inline\uff0c\u8981\u600e\u9ebc\u63d0\u5347\u57ce\u5e02\u7684\u53ef\u8b80\u6027?"),(0,i.kt)("h4",{id:"2-\u5728-reactmethod-\u53ca-props-\u90fd\u662f\u7531\u4e0a\u5230\u4e0b\u50b3\u905e\u5728-vue-props-\u662f\u5411\u4e0b\u50b3\u905e\u6c92\u932fmethod-\u537b\u8981\u5f9e-child-component-emit\u5c0d\u65bc\u4e8b\u5f8c\u7dad\u8b77\u5176\u5be6\u6bd4\u8f03\u96e3\u6293\u5230\u6574\u500b\u5c08\u6848\u7684-data-flow\u8981\u600e\u9ebc\u89e3\u6c7a\u9019\u500b\u554f\u984c"},"2. \u5728 React\uff0cmethod \u53ca props \u90fd\u662f\u7531\u4e0a\u5230\u4e0b\u50b3\u905e\uff0c\u5728 Vue props \u662f\u5411\u4e0b\u50b3\u905e\u6c92\u932f\uff0cmethod \u537b\u8981\u5f9e child component emit\u3002\u5c0d\u65bc\u4e8b\u5f8c\u7dad\u8b77\u5176\u5be6\u6bd4\u8f03\u96e3\u6293\u5230\u6574\u500b\u5c08\u6848\u7684 data flow\uff0c\u8981\u600e\u9ebc\u89e3\u6c7a\u9019\u500b\u554f\u984c?"),(0,i.kt)("h4",{id:"3-\u5982\u4f55\u5728-vue-\u88e1\u9762\u7dad\u6301\u4e7e\u6de8\u7684\u7a0b\u5f0f\u78bc"},"3. \u5982\u4f55\u5728 Vue \u88e1\u9762\u7dad\u6301\u4e7e\u6de8\u7684\u7a0b\u5f0f\u78bc?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"%22https://itnext.io/https-medium-com-manuustenko-how-to-avoid-solid-principles-violations-in-vue-js-application-1121a0df6197%22"},"SOLID in Vue")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"%22https://markus.oberlehner.net/blog/reusable-functional-vue-components-with-tailwind-css/"},"create reusable component in Vue with Tailand")),(0,i.kt)("p",null,"\u5169\u7bc7\u6587\u7ae0\u63d0\u4f9b\u4e86\u5f88\u597d\u7684\u5207\u5165\u9ede\uff0c\u8b93\u6211\u5011\u601d\u8003\u8a72\u600e\u9ebc\u53bb\u5beb\u4e00\u500b\u4e7e\u6de8\u597d\u7dad\u8b77\u7684 code\u3002\u4f46\u662f\u9019\u5169\u7bc7\u90fd\u63d0\u5230\u4e86\u4e00\u500b\u9084\u4e0d\u719f\u6089\u7684\u6982\u5ff5\u53eb\u505a functional component\uff0c\u4e0b\u4e00\u500b\u4efb\u52d9\u5c31\u662f\u7814\u7a76\u9019\u500b\u6280\u8853\u3002"),(0,i.kt)("p",null,"\u53e6\u5916"))}s.isMDXComponent=!0}}]);