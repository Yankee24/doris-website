"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[85987],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),o=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),c=o(a),g=r,k=c["".concat(p,".").concat(g)]||c[g]||m[g]||l;return a?n.createElement(k,i(i({ref:e},d),{},{components:a})):n.createElement(k,i({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},98533:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"\u7cfb\u7edf\u8bbe\u7f6e",language:"zh-CN"},i=void 0,s={unversionedId:"ecosystem/doris-manager/system-settings",id:"version-dev/ecosystem/doris-manager/system-settings",title:"\u7cfb\u7edf\u8bbe\u7f6e",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/ecosystem/doris-manager/system-settings.md",sourceDirName:"ecosystem/doris-manager",slug:"/ecosystem/doris-manager/system-settings",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/system-settings",draft:!1,tags:[],version:"dev",frontMatter:{title:"\u7cfb\u7edf\u8bbe\u7f6e",language:"zh-CN"},sidebar:"docs",previous:{title:"\u7a7a\u95f4\u7ba1\u7406",permalink:"/zh-CN/docs/dev/ecosystem/doris-manager/space-management"},next:{title:"Seatunnel Connector Flink Doris",permalink:"/zh-CN/docs/dev/ecosystem/seatunnel/flink-sink"}},p={},o=[{value:"\u7528\u6237",id:"\u7528\u6237",level:2},{value:"\u672c\u5730\u8ba4\u8bc1\u4e0b\u7528\u6237\u7ba1\u7406",id:"\u672c\u5730\u8ba4\u8bc1\u4e0b\u7528\u6237\u7ba1\u7406",level:3},{value:"\u7f16\u8f91\u7528\u6237",id:"\u7f16\u8f91\u7528\u6237",level:3},{value:"\u7f16\u8f91\u7528\u6237\u4fe1\u606f",id:"\u7f16\u8f91\u7528\u6237\u4fe1\u606f",level:4},{value:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",id:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801",level:4},{value:"\u505c\u7528/\u6fc0\u6d3b\u7528\u6237",id:"\u505c\u7528\u6fc0\u6d3b\u7528\u6237",level:4},{value:"\u7528\u6237\u6743\u9650\u8bf4\u660e",id:"\u7528\u6237\u6743\u9650\u8bf4\u660e",level:2},{value:"\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650",id:"\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650",level:3},{value:"\u7a7a\u95f4\u7ba1\u7406\u5458\u6743\u9650",id:"\u7a7a\u95f4\u7ba1\u7406\u5458\u6743\u9650",level:3}],d={toc:o};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7cfb\u7edf\u8bbe\u7f6e"},"\u7cfb\u7edf\u8bbe\u7f6e"),(0,r.kt)("p",null,"\u8d85\u7ea7\u7ba1\u7406\u5458\u5728\u5e73\u53f0\u6a21\u5757\u4e0b\u4e3b\u8981\u53ef\u8fdb\u884c\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5e73\u53f0\u7528\u6237\u8fdb\u884c\u76f8\u5173\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u62e5\u6709\u5e73\u53f0\u6700\u9ad8\u7ea7\u6743\u9650")),(0,r.kt)("p",null,"\u7528\u6237\u6743\u9650\u8bf4\u660e"),(0,r.kt)("h2",{id:"\u7528\u6237"},"\u7528\u6237"),(0,r.kt)("h3",{id:"\u672c\u5730\u8ba4\u8bc1\u4e0b\u7528\u6237\u7ba1\u7406"},"\u672c\u5730\u8ba4\u8bc1\u4e0b\u7528\u6237\u7ba1\u7406"),(0,r.kt)("p",null,"\u5355\u51fb\u6dfb\u52a0\u7528\u6237\u6309\u94ae\uff0c\u53ef\u4ee5\u901a\u8fc7\u7528\u6237\u540d\u4e0e\u90ae\u7bb1\u4fe1\u606f\u521b\u5efa\u65b0\u7528\u6237\u3002"),(0,r.kt)("p",null," Doris Manger \u5c06\u4f1a\u4e3a\u65b0\u7528\u6237\u5206\u914d\u4e34\u65f6\u5bc6\u7801\uff0c\u65b0\u7528\u6237\u9700\u8981\u4f7f\u7528\u6240\u8bbe\u5b9a\u7684\u7528\u6237\u540d/\u90ae\u7bb1\u548c\u4e34\u65f6\u5bc6\u7801\u767b\u5f55\uff0c\u767b\u5f55\u540e\u53ef\u5728\u201c\u8d26\u6237\u8bbe\u7f6e\u201d\u4e2d\u521b\u5efa\u65b0\u5bc6\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(47558).Z,width:"2646",height:"930"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5026).Z,width:"2628",height:"672"})),(0,r.kt)("h3",{id:"\u7f16\u8f91\u7528\u6237"},"\u7f16\u8f91\u7528\u6237"),(0,r.kt)("p",null,"\u8d85\u7ea7\u7ba1\u7406\u5458\u53ef\u4ee5\u5bf9\u7528\u6237\u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ec\u7f16\u8f91\u7528\u6237\u4fe1\u606f\u3001\u91cd\u7f6e\u7528\u6237\u5bc6\u7801\u3001\u505c\u7528\u7528\u6237\u7b49\u64cd\u4f5c\u3002"),(0,r.kt)("h4",{id:"\u7f16\u8f91\u7528\u6237\u4fe1\u606f"},"\u7f16\u8f91\u7528\u6237\u4fe1\u606f"),(0,r.kt)("p",null,"\u70b9\u51fb\u9009\u62e9\u9009\u62e9\u201c\u7f16\u8f91\u201d\u53ef\u4ee5\u4fee\u6539\u7528\u6237\u540d\u3001\u90ae\u7bb1\u3002\u82e5\u66f4\u65b0\u7528\u6237\u90ae\u7bb1\uff0c\u5219\u7528\u6237\u9700\u8981\u4f7f\u7528\u66f4\u65b0\u540e\u7684\u90ae\u7bb1\u8fdb\u884c\u767b\u5f55\uff0c\u5bc6\u7801\u4e0d\u4f1a\u88ab\u66f4\u65b0\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(69733).Z,width:"2634",height:"658"})),(0,r.kt)("h4",{id:"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"},"\u91cd\u7f6e\u7528\u6237\u5bc6\u7801"),(0,r.kt)("p",null,"\u70b9\u51fb\u9009\u62e9\u201c\u91cd\u7f6e\u5bc6\u7801\u201d\uff0c\u786e\u8ba4\u6267\u884c\u6b64\u64cd\u4f5c\u540e\uff0c Doris Manger \u5c06\u4f1a\u4e3a\u8be5\u7528\u6237\u91cd\u65b0\u5206\u914d\u4e34\u65f6\u5bc6\u7801\uff0c\u7528\u6237\u9700\u8981\u4f7f\u7528\u6240\u8bbe\u5b9a\u7684\u90ae\u7bb1\u548c\u65b0\u7684\u4e34\u65f6\u5bc6\u7801\u767b\u5f55\uff0c\u767b\u5f55\u540e\u53ef\u5728\u201c\u8d26\u6237\u8bbe\u7f6e\u201d\u4e2d\u521b\u5efa\u65b0\u5bc6\u7801\u3002"),(0,r.kt)("h4",{id:"\u505c\u7528\u6fc0\u6d3b\u7528\u6237"},"\u505c\u7528/\u6fc0\u6d3b\u7528\u6237"),(0,r.kt)("p",null,"\u70b9\u51fb\u9009\u62e9\u505c\u7528\u7528\u6237\uff0c\u786e\u8ba4\u505c\u7528\u8be5\u7528\u6237\u540e\uff0c\u8be5\u7528\u6237\u72b6\u6001\u5c06\u7531\u542f\u7528\u53d8\u66f4\u4e3a\u505c\u7528\u3002\u5df2\u505c\u7528\u7528\u6237\u5c06\u65e0\u6cd5\u767b\u5f55 Doris Manger \u3002"),(0,r.kt)("p",null,"\u70b9\u51fb\u7528\u6237\u53f3\u4fa7\u7684\u6fc0\u6d3b\u7528\u6237\uff0c\u53ef\u4ee5\u91cd\u65b0\u6fc0\u6d3b\u8be5\u7528\u6237\u3002\u8be5\u7528\u6237\u72b6\u6001\u5c06\u91cd\u65b0\u53d8\u66f4\u4e3a\u542f\u7528\uff0c\u80fd\u591f\u518d\u6b21\u767b\u5f55 Doris Manger \u3002"),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u8d85\u7ea7\u7ba1\u7406\u5458\u4e0d\u80fd\u505c\u7528\u81ea\u5df1\u7684\u7528\u6237\u8d26\u6237\uff0c\u7cfb\u7edf\u5185\u81f3\u5c11\u8981\u6709\u4e00\u4f4d\u975e\u505c\u7528\u72b6\u6001\u7684\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(40575).Z,width:"2648",height:"906"})),(0,r.kt)("h2",{id:"\u7528\u6237\u6743\u9650\u8bf4\u660e"},"\u7528\u6237\u6743\u9650\u8bf4\u660e"),(0,r.kt)("h3",{id:"\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650"},"\u8d85\u7ea7\u7ba1\u7406\u5458\u6743\u9650"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u521b\u5efa"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u8f91"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5220\u9664"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u67e5\u770b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u95f4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713")))),(0,r.kt)("h3",{id:"\u7a7a\u95f4\u7ba1\u7406\u5458\u6743\u9650"},"\u7a7a\u95f4\u7ba1\u7406\u5458\u6743\u9650"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u521b\u5efa"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7f16\u8f91"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5220\u9664"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u67e5\u770b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u89d2\u8272"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u7a7a\u95f4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:"left"},"X"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2713")))))}m.isMDXComponent=!0},47558:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/systemsettings-1-a721344ca09032d28e2cf27db5367ab0.png"},5026:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/systemsettings-2-dd439f5627b03373190d5096e2139e1b.png"},69733:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/systemsettings-3-e99db0e2da144f4b55a3dc13d94417c2.png"},40575:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/systemsettings-4-7cab84c26ca48288b50142eb3a61d6ac.png"}}]);