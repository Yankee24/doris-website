"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[55686],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>E});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),E=r,d=u["".concat(s,".").concat(E)]||u[E]||m[E]||l;return n?a.createElement(d,o(o({ref:t},p),{},{components:n})):a.createElement(d,o({ref:t},p))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22740:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={title:"CREATE-USER",language:"zh-CN"},o=void 0,c={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",id:"sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",title:"CREATE-USER",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/CREATE-USER",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-USER",language:"zh-CN"},sidebar:"docs",previous:{title:"DIGITAL-MASKING",permalink:"/zh-CN/docs/sql-manual/sql-functions/digital-masking"},next:{title:"CREATE-ROLE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"}},s={},i=[{value:"CREATE USER",id:"create-user",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:i};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-user"},"CREATE USER"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE USER"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"CREATE USER \u547d\u4ee4\u7528\u4e8e\u521b\u5efa\u4e00\u4e2a Doris \u7528\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER user_identity [IDENTIFIED BY 'password'] [DEFAULT ROLE 'role_name']\n\n    user_identity:\n        'user_name'@'host'\n")),(0,r.kt)("p",null,"\u5728 Doris \u4e2d\uff0c\u4e00\u4e2a user_identity \u552f\u4e00\u6807\u8bc6\u4e00\u4e2a\u7528\u6237\u3002user_identity \u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff0cuser_name \u548c host\uff0c\u5176\u4e2d username \u4e3a\u7528\u6237\u540d\u3002host \u6807\u8bc6\u7528\u6237\u7aef\u8fde\u63a5\u6240\u5728\u7684\u4e3b\u673a\u5730\u5740\u3002host \u90e8\u5206\u53ef\u4ee5\u4f7f\u7528 % \u8fdb\u884c\u6a21\u7cca\u5339\u914d\u3002\u5982\u679c\u4e0d\u6307\u5b9a host\uff0c\u9ed8\u8ba4\u4e3a '%'\uff0c\u5373\u8868\u793a\u8be5\u7528\u6237\u53ef\u4ee5\u4ece\u4efb\u610f host \u8fde\u63a5\u5230 Doris\u3002"),(0,r.kt)("p",null,"host \u90e8\u5206\u4e5f\u53ef\u6307\u5b9a\u4e3a domain\uff0c\u8bed\u6cd5\u4e3a\uff1a'user_name'@","['domain']","\uff0c\u5373\u4f7f\u7528\u4e2d\u62ec\u53f7\u5305\u56f4\uff0c\u5219 Doris \u4f1a\u8ba4\u4e3a\u8fd9\u4e2a\u662f\u4e00\u4e2a domain\uff0c\u5e76\u5c1d\u8bd5\u89e3\u6790\u5176 ip \u5730\u5740\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6307\u5b9a\u4e86\u89d2\u8272\uff08ROLE\uff09\uff0c\u5219\u4f1a\u81ea\u52a8\u5c06\u8be5\u89d2\u8272\u6240\u62e5\u6709\u7684\u6743\u9650\u8d4b\u4e88\u65b0\u521b\u5efa\u7684\u8fd9\u4e2a\u7528\u6237\u3002\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u5219\u8be5\u7528\u6237\u9ed8\u8ba4\u6ca1\u6709\u4efb\u4f55\u6743\u9650\u3002\u6307\u5b9a\u7684 ROLE \u5fc5\u987b\u5df2\u7ecf\u5b58\u5728\u3002"),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u65e0\u5bc6\u7801\u7528\u6237\uff08\u4e0d\u6307\u5b9a host\uff0c\u5219\u7b49\u4ef7\u4e8e jack@'%'\uff09"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u6709\u5bc6\u7801\u7528\u6237\uff0c\u5141\u8bb8\u4ece '172.10.1.10' \u767b\u9646"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY '123456';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4e86\u907f\u514d\u4f20\u9012\u660e\u6587\uff0c\u7528\u4f8b2\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u521b\u5efa"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER jack@'172.10.1.10' IDENTIFIED BY PASSWORD '*6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9';\n\u540e\u9762\u52a0\u5bc6\u7684\u5185\u5bb9\u53ef\u4ee5\u901a\u8fc7PASSWORD()\u83b7\u5f97\u5230,\u4f8b\u5982\uff1a\nSELECT PASSWORD('123456');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece '192.168' \u5b50\u7f51\u767b\u9646\u7684\u7528\u6237\uff0c\u540c\u65f6\u6307\u5b9a\u5176\u89d2\u8272\u4e3a example_role"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'192.168.%' DEFAULT ROLE 'example_role';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u5141\u8bb8\u4ece\u57df\u540d 'example_domain' \u767b\u9646\u7684\u7528\u6237"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@['example_domain'] IDENTIFIED BY '12345';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u7528\u6237\uff0c\u5e76\u6307\u5b9a\u4e00\u4e2a\u89d2\u8272"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER 'jack'@'%' IDENTIFIED BY '12345' DEFAULT ROLE 'my_role';\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, USER\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);