"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[69674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,E=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(E,c(c({ref:t},u),{},{components:n})):r.createElement(E,c({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={title:"REVOKE",language:"zh-CN"},c=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/REVOKE",id:"version-dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE",title:"REVOKE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/REVOKE",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/REVOKE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/REVOKE.md",tags:[],version:"dev",frontMatter:{title:"REVOKE",language:"zh-CN"},sidebar:"docs",previous:{title:"SET-PROPERTY",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/SET-PROPERTY"},next:{title:"GRANT",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Account-Management-Statements/GRANT"}},i={},s=[{value:"REVOKE",id:"revoke",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"revoke"},"REVOKE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"REVOKE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"REVOKE \u547d\u4ee4\u7528\u4e8e\u64a4\u9500\u6307\u5b9a\u7528\u6237\u6216\u89d2\u8272\u6307\u5b9a\u7684\u6743\u9650\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE privilege_list ON db_name[.tbl_name] FROM user_identity [ROLE role_name]\n\nREVOKE privilege_list ON RESOURCE resource_name FROM user_identity [ROLE role_name]\n")),(0,a.kt)("p",null,"user_identity\uff1a"),(0,a.kt)("p",null,"\u8fd9\u91cc\u7684 user_identity \u8bed\u6cd5\u540c CREATE USER\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684host\u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u64a4\u9500\u65f6\u95f4\u53ef\u80fd\u4f1a\u67091\u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002"),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u64a4\u9500\u6307\u5b9a\u7684 ROLE \u7684\u6743\u9650\uff0c\u6267\u884c\u7684 ROLE \u5fc5\u987b\u5b58\u5728\u3002"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237 jack \u6570\u636e\u5e93 testDb \u7684\u6743\u9650"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u64a4\u9500\u7528\u6237 jack \u8d44\u6e90 spark_resource \u7684\u4f7f\u7528\u6743\u9650"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REVOKE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);