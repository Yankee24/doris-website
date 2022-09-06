"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[4734],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,S=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(S,i(i({ref:t},p),{},{components:a})):n.createElement(S,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44022:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const l={title:"ADMIN-SET-REPLICA-STATUS",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",title:"ADMIN-SET-REPLICA-STATUS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md",tags:[],version:"dev",frontMatter:{title:"ADMIN-SET-REPLICA-STATUS",language:"zh-CN"},sidebar:"docs",previous:{title:"UNINSTALL-PLUGIN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN"},next:{title:"ADMIN-SHOW-REPLICA-DISTRIBUTION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"}},s={},c=[{value:"ADMIN-SET-REPLICA-STATUS",id:"admin-set-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-set-replica-status"},"ADMIN-SET-REPLICA-STATUS"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ADMIN SET REPLICA STATUS"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u8bbe\u7f6e\u6307\u5b9a\u526f\u672c\u7684\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u8be5\u547d\u4ee4\u76ee\u524d\u4ec5\u7528\u4e8e\u624b\u52a8\u5c06\u67d0\u4e9b\u526f\u672c\u72b6\u6001\u8bbe\u7f6e\u4e3a BAD \u6216 OK\uff0c\u4ece\u800c\u4f7f\u5f97\u7cfb\u7edf\u80fd\u591f\u81ea\u52a8\u4fee\u590d\u8fd9\u4e9b\u526f\u672c"),(0,r.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS\n        PROPERTIES ("key" = "value", ...);\n')),(0,r.kt)("p",null," \u76ee\u524d\u652f\u6301\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"tablet_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u4e00\u4e2a Tablet Id.'),(0,r.kt)("li",{parentName:"ol"},'"backend_id"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a Backend Id.'),(0,r.kt)("li",{parentName:"ol"},'"status"\uff1a\u5fc5\u9700\u3002\u6307\u5b9a\u72b6\u6001\u3002\u5f53\u524d\u4ec5\u652f\u6301 "bad" \u6216 "ok"')),(0,r.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u7684\u526f\u672c\u4e0d\u5b58\u5728\uff0c\u6216\u72b6\u6001\u5df2\u7ecf\u662f bad\uff0c\u5219\u4f1a\u88ab\u5ffd\u7565\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.kt)("p",{parentName:"blockquote"}," \u8bbe\u7f6e\u4e3a Bad \u72b6\u6001\u7684\u526f\u672c\u53ef\u80fd\u7acb\u523b\u88ab\u5220\u9664\uff0c\u8bf7\u8c28\u614e\u64cd\u4f5c\u3002")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a bad\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e tablet 10003 \u5728 BE 10001 \u4e0a\u7684\u526f\u672c\u72b6\u6001\u4e3a ok\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ADMIN, SET, REPLICA, STATUS\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);