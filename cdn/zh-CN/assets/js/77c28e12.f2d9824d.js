"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[33214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"CONNECTION",language:"zh-CN"},c=void 0,a={unversionedId:"administrator-guide/http-actions/connection-action",id:"version-0.15/administrator-guide/http-actions/connection-action",title:"CONNECTION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/administrator-guide/http-actions/connection-action.md",sourceDirName:"administrator-guide/http-actions",slug:"/administrator-guide/http-actions/connection-action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/connection-action",draft:!1,tags:[],version:"0.15",frontMatter:{title:"CONNECTION",language:"zh-CN"},sidebar:"docs",previous:{title:"Compaction Action",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/compaction-action"},next:{title:"get\\_log\\_file",permalink:"/zh-CN/docs/0.15/administrator-guide/http-actions/fe-get-log-file"}},p={},l=[],u={toc:l};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connection"},"CONNECTION"),(0,o.kt)("p",null,"\u901a\u8fc7connection_id, \u83b7\u53d6\u5f53\u524d\u8fde\u63a5\u7684query_id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://fe_host:fe_http_port/api/connection?connection_id=123\n")),(0,o.kt)("p",null,"\u5982\u679cconnection_id\u4e0d\u5b58\u5728\uff0c\u76f4\u63a5\u8fd4\u56de404 NOT FOUND\u9519\u8bef"),(0,o.kt)("p",null,"\u5982\u679cconnection_id\u5b58\u5728\uff0c\u4f1a\u8fd4\u56de\u5f53\u524dconnection_id\u4e0a\u4e00\u4e2a\u8fdb\u884c\u7684query_id"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "query_id" : 9133b7efa92a44c8-8ed4b44772ec2a0c\n}\n')))}s.isMDXComponent=!0}}]);