"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[38650],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"KILL",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/KILL",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/KILL",title:"KILL",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/KILL.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/KILL",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/KILL",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Database-Administration-Statements/KILL.md",tags:[],version:"dev",frontMatter:{title:"KILL",language:"en"},sidebar:"docs",previous:{title:"ADMIN-SHOW-CONFIG",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG"},next:{title:"ADMIN-CHECK-TABLET",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"}},s={},c=[{value:"KILL",id:"kill",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"kill"},"KILL"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"KILL"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"Each Doris connection runs in a separate thread. You can kill a thread with the KILL processlist_id statement."),(0,a.kt)("p",null,"The thread process list identifier can be determined from the ID column of the INFORMATION_SCHEMA PROCESSLIST table, the Id column of the SHOW PROCESSLIST output, and the PROCESSLIST_ID column of the Performance Schema thread table."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"KILL [CONNECTION | QUERY] processlist_id\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"KILL\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);