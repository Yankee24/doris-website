"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[5741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u7a7a\u95f4\u7ba1\u7406",language:"zh-CN"},s=void 0,c={unversionedId:"ecosystem/doris-manager/space-management",id:"version-dev/ecosystem/doris-manager/space-management",title:"\u7a7a\u95f4\u7ba1\u7406",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/doris-manager/space-management.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/space-management",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/space-management",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/ecosystem/doris-manager/space-management.md",tags:[],version:"dev",frontMatter:{title:"\u7a7a\u95f4\u7ba1\u7406",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7a7a\u95f4\u5217\u8868",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/space-list"},next:{title:"\u7cfb\u7edf\u8bbe\u7f6e",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/system-settings"}},i={},l=[{value:"\u7a7a\u95f4",id:"\u7a7a\u95f4",level:2},{value:"\u7f16\u8f91\u7a7a\u95f4\u4fe1\u606f",id:"\u7f16\u8f91\u7a7a\u95f4\u4fe1\u606f",level:3},{value:"\u6210\u5458",id:"\u6210\u5458",level:2},{value:"\u89d2\u8272",id:"\u89d2\u8272",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7a7a\u95f4\u7ba1\u7406"},"\u7a7a\u95f4\u7ba1\u7406"),(0,a.kt)("p",null,"\u82e5\u60a8\u4e3a Doris Manger \u7684\u7a7a\u95f4\u7ba1\u7406\u5458\uff0c\u60a8\u5c06\u6709\u6743\u9650\u5bf9\u4e8e\u7a7a\u95f4\u3001\u7a7a\u95f4\u6210\u5458\u3001\u89d2\u8272\u7b49\u8fdb\u884c\u8bbe\u7f6e\u6216\u7ba1\u7406\u3002"),(0,a.kt)("h2",{id:"\u7a7a\u95f4"},"\u7a7a\u95f4"),(0,a.kt)("p",null,"\u7a7a\u95f4\u7ba1\u7406\u5458\u5728\u7a7a\u95f4\u6a21\u5757\u4e0b\u4e3b\u8981\u53ef\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u5df2\u7ecf\u4fdd\u5b58\u7684\u7a7a\u95f4\u4fe1\u606f")),(0,a.kt)("h3",{id:"\u7f16\u8f91\u7a7a\u95f4\u4fe1\u606f"},"\u7f16\u8f91\u7a7a\u95f4\u4fe1\u606f"),(0,a.kt)("p",null,"\u5982\u679c\u7a7a\u95f4\u4fe1\u606f\u5df2\u7ecf\u5b8c\u5907\uff0c\u7a7a\u95f4\u7ba1\u7406\u5458\u53ef\u4ee5\u5728\u6b64\u67e5\u770b\u5e76\u7f16\u8f91\u7a7a\u95f4\u76f8\u5173\u4fe1\u606f\uff0c\u5305\u62ec\u7a7a\u95f4\u540d\u79f0\u3001\u7a7a\u95f4\u7b80\u4ecb\u3001\u7a7a\u95f4\u7ba1\u7406\u5458\u7b49\u7b49\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(75259).Z,width:"2880",height:"978"})),(0,a.kt)("h2",{id:"\u6210\u5458"},"\u6210\u5458"),(0,a.kt)("p",null,"\u5728\u201c\u7a7a\u95f4\u7ba1\u7406\u201d\u754c\u9762\u7684\u4e8c\u7ea7\u5bfc\u822a\u680f\u4e2d\u9009\u62e9\u201c\u6210\u5458\u201d\uff0c\u8fdb\u5165\u6210\u5458\u7ba1\u7406\u9875\u9762\u3002\u6b64\u9875\u9762\u53ef\u4ee5\u67e5\u770b\u5f53\u524d\u7a7a\u95f4\u4e0b\u7684\u6240\u6709\u7528\u6237\uff0c\u60a8\u53ef\u4ee5\u5bf9\u6210\u5458\u8fdb\u884c\u79fb\u9664\u64cd\u4f5c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(369).Z,width:"2646",height:"712"})),(0,a.kt)("h2",{id:"\u89d2\u8272"},"\u89d2\u8272"),(0,a.kt)("p",null,'\u7a7a\u95f4\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u5bfc\u822a\u680f\u201c\u89d2\u8272\u201d\u6309\u94ae\uff0c\u67e5\u770b\u6240\u6709\u89d2\u8272\u548c\u89d2\u8272\u6210\u5458\u3002\u65b0\u6210\u5458\u9ed8\u8ba4\u5c5e\u4e8e"\u7a7a\u95f4\u6210\u5458"\u89d2\u8272\u548c"\u7a7a\u95f4\u7ba1\u7406\u5458"\u89d2\u8272\u3002\u9ed8\u8ba4\u89d2\u8272\u6709"\u7a7a\u95f4\u7ba1\u7406\u5458"\u548c"\u7a7a\u95f4\u6210\u5458"\u4e14\u4e0d\u53ef\u88ab\u5176\u4ed6\u7ba1\u7406\u5458\u66f4\u6539\u3002'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(99223).Z,width:"1792",height:"532"})))}m.isMDXComponent=!0},75259:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spacemanagement-1-c85f09fe7c6a872fd455170a5da95fec.png"},369:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spacemanagement-2-43f4f5d966a2c81dadf8819802640b64.png"},99223:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/spacemanagement-3-32234583aea5bda045436222e5c5789c.png"}}]);