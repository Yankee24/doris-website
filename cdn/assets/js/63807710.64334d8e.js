"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=m(n),f=i,d=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var m=2;m<o;m++)a[m]=n[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),i=(n(67294),n(3905));const o={title:"from_unixtime",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from_unixtime",id:"sql-manual/sql-functions/date-time-functions/from_unixtime",title:"from_unixtime",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/from_unixtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from_unixtime",permalink:"/docs/sql-manual/sql-functions/date-time-functions/from_unixtime",draft:!1,tags:[],version:"current",frontMatter:{title:"from_unixtime",language:"en"},sidebar:"docs",previous:{title:"from_days",permalink:"/docs/sql-manual/sql-functions/date-time-functions/from_days"},next:{title:"hour",permalink:"/docs/sql-manual/sql-functions/date-time-functions/hour"}},s={},m=[{value:"from_unixtime",id:"from_unixtime",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"from_unixtime"},"from_unixtime"),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("h4",{id:"syntax"},"syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DATETIME FROM UNIXTIME (INT unix timestamp [, VARCHAR string format]")),(0,i.kt)("p",null,"Convert the UNIX timestamp to the corresponding time format of bits, and the format returned is specified by ",(0,i.kt)("inlineCode",{parentName:"p"},"string_format")),(0,i.kt)("p",null,"Input is an integer and return is a string type"),(0,i.kt)("p",null,"Support ",(0,i.kt)("inlineCode",{parentName:"p"},"date_format"),"'s format, and default is ",(0,i.kt)("inlineCode",{parentName:"p"},"%Y-%m-%d %H:%i:%s")),(0,i.kt)("p",null,"Other ",(0,i.kt)("inlineCode",{parentName:"p"},"string_format")," is illegal and will returns NULL."),(0,i.kt)("h3",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d')   |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n|From unixtime (1196440219,'%Y-%m-%d %H:%i:%s')    |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")),(0,i.kt)("h3",{id:"keywords"},"keywords"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FROM_UNIXTIME,FROM,UNIXTIME\n")))}c.isMDXComponent=!0}}]);