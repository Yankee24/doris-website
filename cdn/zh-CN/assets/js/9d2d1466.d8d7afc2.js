"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[59685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>O});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),O=a,f=d["".concat(s,".").concat(O)]||d[O]||u[O]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"SHOW DYNAMIC PARTITION TABLES",language:"zh-CN"},l=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES",title:"SHOW DYNAMIC PARTITION TABLES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-DYNAMIC-PARTITION-TABLES",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW DYNAMIC PARTITION TABLES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW DELETE",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-DELETE"},next:{title:"SHOW EXPORT",permalink:"/zh-CN/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"show-dynamic-partition-tables"},"SHOW DYNAMIC PARTITION TABLES"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524ddb\u4e0b\u6240\u6709\u7684\u52a8\u6001\u5206\u533a\u8868\u72b6\u6001\n\u8bed\u6cd5\uff1a\n    SHOW DYNAMIC PARTITION TABLES [FROM db_name];\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u5c55\u793a\u6570\u636e\u5e93 database \u7684\u6240\u6709\u52a8\u6001\u5206\u533a\u8868\u72b6\u6001\n    SHOW DYNAMIC PARTITION TABLES FROM database;\n    \n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW,DYNAMIC,PARTITION,TABLES\n")))}u.isMDXComponent=!0}}]);