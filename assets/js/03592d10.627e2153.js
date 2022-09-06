"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[87328],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,A=m["".concat(s,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(A,o(o({ref:t},d),{},{components:n})):a.createElement(A,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"ADMIN-CLEAN-TRASH",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH",id:"version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH",title:"ADMIN-CLEAN-TRASH",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH.md",sourceDirName:"sql-manual/sql-reference/Database-Administration-Statements",slug:"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CLEAN-TRASH.md",tags:[],version:"dev",frontMatter:{title:"ADMIN-CLEAN-TRASH",language:"en"},sidebar:"docs",previous:{title:"ADMIN-CHECK-TABLET",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CHECK-TABLET"},next:{title:"ENABLE-FEATURE",permalink:"/docs/dev/sql-manual/sql-reference/Database-Administration-Statements/ENABLE-FEATURE"}},s={},c=[{value:"ADMIN-CLEAN-TRASH",id:"admin-clean-trash",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"admin-clean-trash"},"ADMIN-CLEAN-TRASH"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ADMIN CLEAN TRASH"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to clean up garbage data in the backend"),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADMIN CLEAN TRASH [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n')),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use BackendHost:BackendHeartBeatPort to indicate the backend that needs to be cleaned up, and clean up all backends without adding the on limit.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clean up the junk data of all be nodes."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ADMIN CLEAN TRASH;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clean up the junk data of '192.168.0.1:9050' and '192.168.0.2:9050'."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'ADMIN CLEAN TRASH ON ("192.168.0.1:9050","192.168.0.2:9050");\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"))}p.isMDXComponent=!0}}]);