"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[63872],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>S});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),S=r,A=u["".concat(o,".").concat(S)]||u[S]||m[S]||l;return a?n.createElement(A,i(i({ref:t},p),{},{components:a})):n.createElement(A,i({ref:t},p))}));function S(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},82335:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"ADMIN-SHOW-REPLICA-STATUS",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",id:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",title:"ADMIN-SHOW-REPLICA-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-STATUS",draft:!1,tags:[],version:"current",frontMatter:{title:"ADMIN-SHOW-REPLICA-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"},next:{title:"ADMIN-DIAGNOSE-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-DIAGNOSE-TABLET"}},o={},c=[{value:"ADMIN-SHOW-REPLICA-STATUS",id:"admin-show-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-show-replica-status"},"ADMIN-SHOW-REPLICA-STATUS"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ADMIN SHOW REPLICA STATUS"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u4e00\u4e2a\u8868\u6216\u5206\u533a\u7684\u526f\u672c\u72b6\u6001\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"}," ADMIN SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[where_clause];\n")),(0,r.kt)("p",null,"\u8bf4\u660e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"where_clause:\nWHERE STATUS ","[!]",'= "replica_status"')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"replica_status:\nOK:                         replica \u5904\u4e8e\u5065\u5eb7\u72b6\u6001\nDEAD:                     replica \u6240\u5728 Backend \u4e0d\u53ef\u7528\nVERSION_ERROR:  replica \u6570\u636e\u7248\u672c\u6709\u7f3a\u5931\nSCHEMA_ERROR:   replica \u7684 schema hash \u4e0d\u6b63\u786e\nMISSING:                 replica \u4e0d\u5b58\u5728"))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u8868\u5168\u90e8\u7684\u526f\u672c\u72b6\u6001"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ADMIN SHOW REPLICA STATUS FROM db1.tbl1;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u8868\u67d0\u4e2a\u5206\u533a\u72b6\u6001\u4e3a VERSION_ERROR \u7684\u526f\u672c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u67e5\u770b\u8868\u6240\u6709\u72b6\u6001\u4e0d\u5065\u5eb7\u7684\u526f\u672c"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ADMIN, SHOW, REPLICA, STATUS, ADMIN SHOW\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);