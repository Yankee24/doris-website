"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[88130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>S});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(r),S=a,E=m["".concat(s,".").concat(S)]||m[S]||u[S]||l;return r?n.createElement(E,o(o({ref:t},p),{},{components:r})):n.createElement(E,o({ref:t},p))}));function S(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16272:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-RESOURCES",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",id:"sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",title:"SHOW-RESOURCES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-RESOURCES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-REPOSITORIES",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},next:{title:"SHOW-RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-RESTORE"}},s={},i=[{value:"SHOW-RESOURCES",id:"show-resources",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-resources"},"SHOW-RESOURCES"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW RESOURCES"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u7528\u6237\u6709\u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\u3002\u666e\u901a\u7528\u6237\u4ec5\u80fd\u5c55\u793a\u6709\u4f7f\u7528\u6743\u9650\u7684\u8d44\u6e90\uff0croot \u6216 admin \u7528\u6237\u4f1a\u5c55\u793a\u6240\u6709\u7684\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES\n[\n  WHERE\n  [NAME [ = "your_resource_name" | LIKE "name_matcher"]]\n  [RESOURCETYPE = ["SPARK"]]\n]\n[ORDER BY ...]\n[LIMIT limit][OFFSET offset];\n')),(0,a.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 NAME LIKE\uff0c\u5219\u4f1a\u5339\u914d RESOURCES \u7684 Name \u5305\u542b name_matcher \u7684Resource"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4f7f\u7528 NAME = \uff0c\u5219\u7cbe\u786e\u5339\u914d\u6307\u5b9a\u7684 Name"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 RESOURCETYPE\uff0c\u5219\u5339\u914d\u5bf9\u5e94\u7684 Resrouce \u7c7b\u578b"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u4f7f\u7528 ORDER BY \u5bf9\u4efb\u610f\u5217\u7ec4\u5408\u8fdb\u884c\u6392\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 LIMIT\uff0c\u5219\u663e\u793a limit \u6761\u5339\u914d\u8bb0\u5f55\u3002\u5426\u5219\u5168\u90e8\u663e\u793a"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a\u4e86 OFFSET\uff0c\u5219\u4ece\u504f\u79fb\u91cf offset \u5f00\u59cb\u663e\u793a\u67e5\u8be2\u7ed3\u679c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u504f\u79fb\u91cf\u4e3a0\u3002")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5c55\u793a\u5f53\u524d\u7528\u6237\u62e5\u6709\u6743\u9650\u7684\u6240\u6709 Resource"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW RESOURCES;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a Resource \uff0cNAME \u4e2d\u5305\u542b\u5b57\u7b26\u4e32 "20140102"\uff0c\u5c55\u793a10\u4e2a\u5c5e\u6027'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES WHERE NAME LIKE "2014_01_02" LIMIT 10;\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'\u5c55\u793a\u6307\u5b9a Resource \uff0c\u6307\u5b9a NAME \u4e3a "20140102" \u5e76\u6309 KEY \u964d\u5e8f\u6392\u5e8f'),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW RESOURCES WHERE NAME = "20140102" ORDER BY `KEY` DESC;\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, RESOURCES\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);