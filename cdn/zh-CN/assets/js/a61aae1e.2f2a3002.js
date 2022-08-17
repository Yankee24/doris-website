"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[89706],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"ADMIN-DIAGNOSE-TABLET",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",title:"ADMIN-DIAGNOSE-TABLET",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-DIAGNOSE-TABLET",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS"},next:{title:"ENABLE-FEATURE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ENABLE-FEATURE"}},s={},c=[{value:"description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"admin-diagnose-tablet"},"ADMIN DIAGNOSE TABLET"),(0,a.kt)("h2",{id:"description"},"description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bca\u65ad\u6307\u5b9a tablet\u3002\u7ed3\u679c\u4e2d\u5c06\u663e\u793a\u8fd9\u4e2a tablet \u7684\u4fe1\u606f\u548c\u4e00\u4e9b\u6f5c\u5728\u7684\u95ee\u9898\u3002\n\n\u8bed\u6cd5\uff1a\n\n    ADMIN DIAGNOSE TABLET tblet_id\n\n\u8bf4\u660e\uff1a\n\n    \u7ed3\u679c\u4e2d\u7684\u5404\u884c\u4fe1\u606f\u5982\u4e0b\uff1a\n    1. TabletExist:                         Tablet\u662f\u5426\u5b58\u5728\n    2. TabletId:                            Tablet ID\n    3. Database:                            Tablet \u6240\u5c5e DB \u548c\u5176 ID\n    4. Table:                               Tablet \u6240\u5c5e Table \u548c\u5176 ID\n    5. Partition:                           Tablet \u6240\u5c5e Partition \u548c\u5176 ID\n    6. MaterializedIndex:                   Tablet \u6240\u5c5e\u7269\u5316\u89c6\u56fe\u548c\u5176 ID\n    7. Replicas(ReplicaId -> BackendId):    Tablet \u5404\u526f\u672c\u548c\u5176\u6240\u5728 BE\u3002\n    8. ReplicasNum:                         \u526f\u672c\u6570\u91cf\u662f\u5426\u6b63\u786e\u3002\n    9. ReplicaBackendStatus:                \u526f\u672c\u6240\u5728 BE \u8282\u70b9\u662f\u5426\u6b63\u5e38\u3002\n    10.ReplicaVersionStatus:                \u526f\u672c\u7684\u7248\u672c\u53f7\u662f\u5426\u6b63\u5e38\u3002\n    11.ReplicaStatus:                       \u526f\u672c\u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n    12.ReplicaCompactionStatus:             \u526f\u672c Compaction \u72b6\u6001\u662f\u5426\u6b63\u5e38\u3002\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1. \u67e5\u770b Tablet 10001 \u7684\u8bca\u65ad\u7ed3\u679c\n\n    ADMIN DIAGNOSE TABLET 10001;\n")),(0,a.kt)("h2",{id:"keyword"},"keyword"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ADMIN,DIAGNOSE,TABLET\n")))}u.isMDXComponent=!0}}]);