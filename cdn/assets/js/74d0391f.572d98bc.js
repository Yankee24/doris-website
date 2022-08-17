"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[51748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),d=i,g=f["".concat(c,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"PERCENTILE",language:"en"},a=void 0,l={unversionedId:"sql-reference/sql-functions/aggregate-functions/percentile",id:"version-0.15/sql-reference/sql-functions/aggregate-functions/percentile",title:"PERCENTILE",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-functions/aggregate-functions/percentile.md",sourceDirName:"sql-reference/sql-functions/aggregate-functions",slug:"/sql-reference/sql-functions/aggregate-functions/percentile",permalink:"/docs/0.15/sql-reference/sql-functions/aggregate-functions/percentile",draft:!1,tags:[],version:"0.15",frontMatter:{title:"PERCENTILE",language:"en"},sidebar:"docs",previous:{title:"MIN",permalink:"/docs/0.15/sql-reference/sql-functions/aggregate-functions/min"},next:{title:"PERCENTILE_APPROX",permalink:"/docs/0.15/sql-reference/sql-functions/aggregate-functions/percentile_approx"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"percentile"},"PERCENTILE"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("h3",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PERCENTILE(expr, DOUBLE p)")),(0,i.kt)("p",null,"Calculate the exact percentile, suitable for small data volumes. Sort the specified column in descending order first, and then take the exact p-th percentile. The value of p is between 0 and 1"),(0,i.kt)("p",null,"Parameter Description:\nexpr: required. The value is an integer (bigint at most).\np: The exact percentile is required. The value is ","[0.0,1.0]"),(0,i.kt)("h2",{id:"example"},"example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"MySQL > select `table`, percentile(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    |         percentile(`cost_time`, 0.99)|\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n")),(0,i.kt)("h2",{id:"keyword"},"keyword"),(0,i.kt)("p",null,"PERCENTILE"))}u.isMDXComponent=!0}}]);