"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98444],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=s,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(b,a(a({ref:n},u),{},{components:t})):r.createElement(b,a({ref:n},u))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(87462),s=(t(67294),t(3905));const i={title:"substring",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/substring",id:"version-dev/sql-manual/sql-functions/string-functions/substring",title:"substring",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-functions/string-functions/substring.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/substring",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/substring",draft:!1,tags:[],version:"dev",frontMatter:{title:"substring",language:"zh-CN"},sidebar:"docs",previous:{title:"lpad",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/lpad"},next:{title:"instr",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/instr"}},o={},c=[{value:"substring",id:"substring",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"substring"},"substring"),(0,s.kt)("h3",{id:"description"},"description"),(0,s.kt)("h4",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"VARCHAR substring(VARCHAR str, INT pos[, INT len])")),(0,s.kt)("p",null,"\u6ca1\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u53c2\u6570\u65f6\u8fd4\u56de\u4ece\u4f4d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u7684\u4e00\u4e2a\u5b50\u5b57\u7b26\u4e32\uff0c\n\u5728\u6709 ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u53c2\u6570\u65f6\u8fd4\u56de\u4ece\u4f4d\u7f6e ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u5f00\u59cb\u7684\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u7684\u4e00\u4e2a\u957f\u5ea6\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"len")," \u5b50\u5b57\u7b26\u4e32\uff0c\n",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u53c2\u6570\u53ef\u4ee5\u4f7f\u7528\u8d1f\u503c\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5b50\u5b57\u7b26\u4e32\u662f\u4ee5\u5b57\u7b26\u4e32 ",(0,s.kt)("inlineCode",{parentName:"p"},"str")," \u672b\u5c3e\u5f00\u59cb\u8ba1\u7b97 ",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u4e2a\u5b57\u7b26\uff0c\u800c\u4e0d\u662f\u5f00\u5934,\n",(0,s.kt)("inlineCode",{parentName:"p"},"pos")," \u7684\u503c\u4e3a 0 \u8fd4\u56de\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u6240\u6709\u5f62\u5f0f\u7684 SUBSTRING()\uff0c\u8981\u4ece\u4e2d\u63d0\u53d6\u5b50\u5b57\u7b26\u4e32\u7684\u5b57\u7b26\u4e32\u4e2d\u7b2c\u4e00\u4e2a\u5b57\u7b26\u7684\u4f4d\u7f6e\u4e3a1\u3002"),(0,s.kt)("h3",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select substring('abc1', 2);\n+-----------------------------+\n| substring('abc1', 2)        |\n+-----------------------------+\n| bc1                         |\n+-----------------------------+\n\nmysql> select substring('abc1', -2);\n+-----------------------------+\n| substring('abc1', -2)       |\n+-----------------------------+\n| c1                          |\n+-----------------------------+\n\nmysql> select substring('abc1', 0);\n+----------------------+\n| substring('abc1', 0) |\n+----------------------+\n|                      |\n+----------------------+\n\nmysql> select substring('abc1', 5);\n+-----------------------------+\n| substring('abc1', 5)        |\n+-----------------------------+\n| NULL                        |\n+-----------------------------+\n\nmysql> select substring('abc1def', 2, 2);\n+-----------------------------+\n| substring('abc1def', 2, 2)  |\n+-----------------------------+\n| bc                          |\n+-----------------------------+\n")),(0,s.kt)("h3",{id:"keywords"},"keywords"),(0,s.kt)("p",null,"SUBSTRING, STRING"))}p.isMDXComponent=!0}}]);