"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[49306],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),O=p(n),m=l,d=O["".concat(s,".").concat(m)]||O[m]||c[m]||a;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=O;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},12698:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),l=(n(67294),n(3905));const a={title:"SHOW ROUTINE LOAD",language:"en"},o=void 0,i={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD",title:"SHOW ROUTINE LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW ROUTINE LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW ROUTINE LOAD TASK",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-ROUTINE-LOAD-TASK"},next:{title:"SHOW SNAPSHOT",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-SNAPSHOT"}},s={},p=[{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"show-routine-load"},"SHOW ROUTINE LOAD"),(0,l.kt)("h2",{id:"example"},"example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Show all routine import jobs named test 1 (including stopped or cancelled jobs). The result is one or more lines.")),(0,l.kt)("p",null,"SHOW ALL ROUTINE LOAD FOR test1;"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Show the current running routine import job named test1")),(0,l.kt)("p",null,"SHOW ROUTINE LOAD FOR test1;"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Display all routine import jobs (including stopped or cancelled jobs) under example_db. The result is one or more lines.")),(0,l.kt)("p",null,"use example_db;\nSHOW ALL ROUTINE LOAD;"),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Display all running routine import jobs under example_db")),(0,l.kt)("p",null,"use example_db;\nSHOW ROUTINE LOAD;"),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Display the current running routine import job named test1 under example_db")),(0,l.kt)("p",null,"SHOW ROUTINE LOAD FOR example_db.test1;"),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Display all routine import jobs named test1 (including stopped or cancelled jobs) under example_db. The result is one or more lines.")),(0,l.kt)("p",null,"SHOW ALL ROUTINE LOAD FOR example_db.test1;"),(0,l.kt)("h2",{id:"keyword"},"keyword"),(0,l.kt)("p",null,"SHOW,ROUTINE,LOAD"))}c.isMDXComponent=!0}}]);