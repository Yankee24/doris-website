"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[72135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=o,m=f["".concat(s,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"dayofmonth",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/dayofmonth",id:"version-dev/sql-manual/sql-functions/date-time-functions/dayofmonth",title:"dayofmonth",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/date-time-functions/dayofmonth.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/dayofmonth",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/dayofmonth",draft:!1,tags:[],version:"dev",frontMatter:{title:"dayofmonth",language:"en"},sidebar:"docs",previous:{title:"timestampdiff",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampdiff"},next:{title:"dayofyear",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/dayofyear"}},s={},c=[{value:"dayofmonth",id:"dayofmonth",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dayofmonth"},"dayofmonth"),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"INT DAYOFMONTH (DATETIME date)")),(0,o.kt)("p",null,"Get the day information in the date, and return values range from 1 to 31."),(0,o.kt)("p",null,"The parameter is Date or Datetime type"),(0,o.kt)("h3",{id:"example"},"example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mysql> select dayofmonth('1987-01-31');\n+-----------------------------------+\n| dayofmonth('1987-01-31 00:00:00') |\n+-----------------------------------+\n|                                31 |\n+-----------------------------------+\n")),(0,o.kt)("h3",{id:"keywords"},"keywords"),(0,o.kt)("p",null,"DAYOFMONTH"))}d.isMDXComponent=!0}}]);