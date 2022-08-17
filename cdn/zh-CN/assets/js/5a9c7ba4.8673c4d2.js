"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[92341],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=r.createContext({}),a=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=a(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=a(t),d=s,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(y,o(o({ref:n},u),{},{components:t})):r.createElement(y,o({ref:n},u))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var a=2;a<i;a++)o[a]=t[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var r=t(87462),s=(t(67294),t(3905));const i={title:"instr",language:"zh-CN"},o=void 0,c={unversionedId:"sql-reference/sql-functions/string-functions/instr",id:"version-0.15/sql-reference/sql-functions/string-functions/instr",title:"instr",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.15/sql-reference/sql-functions/string-functions/instr.md",sourceDirName:"sql-reference/sql-functions/string-functions",slug:"/sql-reference/sql-functions/string-functions/instr",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/instr",draft:!1,tags:[],version:"0.15",frontMatter:{title:"instr",language:"zh-CN"},sidebar:"docs",previous:{title:"group_concat",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/group_concat"},next:{title:"lcase",permalink:"/zh-CN/docs/0.15/sql-reference/sql-functions/string-functions/lcase"}},l={},a=[{value:"description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:a};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"instr"},"instr"),(0,s.kt)("h2",{id:"description"},"description"),(0,s.kt)("h3",{id:"syntax"},"Syntax"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"INT instr(VARCHAR str, VARCHAR substr)")),(0,s.kt)("p",null,"\u8fd4\u56de substr \u5728 str \u4e2d\u7b2c\u4e00\u6b21\u51fa\u73b0\u7684\u4f4d\u7f6e\uff08\u4ece1\u5f00\u59cb\u8ba1\u6570\uff09\u3002\u5982\u679c substr \u4e0d\u5728 str \u4e2d\u51fa\u73b0\uff0c\u5219\u8fd4\u56de0\u3002"),(0,s.kt)("h2",{id:"example"},"example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"mysql> select instr(\"abc\", \"b\");\n+-------------------+\n| instr('abc', 'b') |\n+-------------------+\n|                 2 |\n+-------------------+\n\nmysql> select instr(\"abc\", \"d\");\n+-------------------+\n| instr('abc', 'd') |\n+-------------------+\n|                 0 |\n+-------------------+\n")),(0,s.kt)("h2",{id:"keyword"},"keyword"),(0,s.kt)("p",null,"INSTR"))}p.isMDXComponent=!0}}]);