"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[83270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13459:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"curdate,current_date",language:"en"},c=void 0,i={unversionedId:"sql-manual/sql-functions/date-time-functions/curdate",id:"version-dev/sql-manual/sql-functions/date-time-functions/curdate",title:"curdate,current_date",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/date-time-functions/curdate.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/curdate",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/curdate",draft:!1,tags:[],version:"dev",frontMatter:{title:"curdate,current_date",language:"en"},sidebar:"docs",previous:{title:"date_add",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/date_add"},next:{title:"current_timestamp",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/current_timestamp"}},l={},u=[{value:"curdate,current_date",id:"curdatecurrent_date",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"curdatecurrent_date"},"curdate,current_date"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DATE CURDATE()")),(0,a.kt)("p",null,"Get the current date and return it in Date type"),(0,a.kt)("h3",{id:"example"},"example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mysql> SELECT CURDATE();\n+------------+\n| CURDATE()  |\n+------------+\n| 2019-12-20 |\n+------------+\n\nmysql> SELECT CURDATE() + 0;\n+---------------+\n| CURDATE() + 0 |\n+---------------+\n|      20191220 |\n+---------------+\n")),(0,a.kt)("h3",{id:"keywords"},"keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CURDATE,CURRENT_DATE\n")))}d.isMDXComponent=!0}}]);