"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"DROP FUNCTION",language:"zh-CN"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Definition/drop-function",id:"version-0.15/sql-reference/sql-statements/Data-Definition/drop-function",title:"DROP FUNCTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Definition/drop-function.md",sourceDirName:"sql-reference/sql-statements/Data-Definition",slug:"/sql-reference/sql-statements/Data-Definition/drop-function",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/drop-function",draft:!1,tags:[],version:"0.15",frontMatter:{title:"DROP FUNCTION",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE FUNCTION",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/create-function"},next:{title:"SHOW FUNCTIONS",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Definition/show-functions"}},c={},s=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"drop-function"},"DROP FUNCTION"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("h3",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP FUNCTION function_name\n    (arg_type [, ...])\n")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"function_name"),": \u8981\u5220\u9664\u51fd\u6570\u7684\u540d\u5b57"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"arg_type"),": \u8981\u5220\u9664\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868")),(0,a.kt)("p",null,"\u5220\u9664\u4e00\u4e2a\u81ea\u5b9a\u4e49\u51fd\u6570\u3002\u51fd\u6570\u7684\u540d\u5b57\u3001\u53c2\u6570\u7c7b\u578b\u5b8c\u5168\u4e00\u81f4\u624d\u80fd\u591f\u88ab\u5220\u9664"),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664\u6389\u4e00\u4e2a\u51fd\u6570")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP FUNCTION my_add(INT, INT)\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"DROP,FUNCTION\n")))}u.isMDXComponent=!0}}]);