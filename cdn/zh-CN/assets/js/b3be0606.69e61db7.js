"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[38395],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,g=f["".concat(i,".").concat(d)]||f[d]||p[d]||c;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6732:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const c={title:"group_concat",language:"zh-CN"},a=void 0,s={unversionedId:"sql-reference/sql-functions/string-functions/group_concat",id:"version-0.15/sql-reference/sql-functions/string-functions/group_concat",title:"group_concat",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/group_concat.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/group_concat",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/group_concat",draft:!1,tags:[],version:"0.15",frontMatter:{title:"group_concat",language:"zh-CN"},sidebar:"docs",previous:{title:"get_json_string",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/get_json_string"},next:{title:"instr",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/instr"}},i={},l=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"group_concat"},"group_concat"),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"VARCHAR group_concat(VARCHAR str[, VARCHAR sep])")),(0,o.kt)("p",null,"\u8be5\u51fd\u6570\u662f\u7c7b\u4f3c\u4e8e sum() \u7684\u805a\u5408\u51fd\u6570\uff0cgroup_concat \u5c06\u7ed3\u679c\u96c6\u4e2d\u7684\u591a\u884c\u7ed3\u679c\u8fde\u63a5\u6210\u4e00\u4e2a\u5b57\u7b26\u4e32\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570 sep \u4e3a\u5b57\u7b26\u4e32\u4e4b\u95f4\u7684\u8fde\u63a5\u7b26\u53f7\uff0c\u8be5\u53c2\u6570\u53ef\u4ee5\u7701\u7565\u3002\u8be5\u51fd\u6570\u901a\u5e38\u9700\u8981\u548c group by \u8bed\u53e5\u4e00\u8d77\u4f7f\u7528\u3002"),(0,o.kt)("h2",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select value from test;\n+-------+\n| value |\n+-------+\n| a     |\n| b     |\n| c     |\n+-------+\n\nmysql> select group_concat(value) from test;\n+-----------------------+\n| group_concat(`value`) |\n+-----------------------+\n| a, b, c               |\n+-----------------------+\n\nmysql> select group_concat(value, \" \") from test;\n+----------------------------+\n| group_concat(`value`, ' ') |\n+----------------------------+\n| a b c                      |\n+----------------------------+\n")),(0,o.kt)("h2",{id:"keyword"},"keyword"),(0,o.kt)("p",null,"GROUP_CONCAT,GROUP,CONCAT"))}p.isMDXComponent=!0}}]);