"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[61530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?l.createElement(f,a(a({ref:t},c),{},{components:n})):l.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const o={title:"explode_split",language:"en"},a=void 0,i={unversionedId:"sql-manual/sql-functions/table-functions/explode-split",id:"version-dev/sql-manual/sql-functions/table-functions/explode-split",title:"explode_split",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-functions/table-functions/explode-split.md",sourceDirName:"sql-manual/sql-functions/table-functions",slug:"/sql-manual/sql-functions/table-functions/explode-split",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-split",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-functions/table-functions/explode-split.md",tags:[],version:"dev",frontMatter:{title:"explode_split",language:"en"},sidebar:"docs",previous:{title:"explode",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode"},next:{title:"explode_bitmap",permalink:"/docs/dev/sql-manual/sql-functions/table-functions/explode-bitmap"}},s={},p=[{value:"explode_split",id:"explode_split",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explode_split"},"explode_split"),(0,r.kt)("h3",{id:"description"},"description"),(0,r.kt)("p",null,"Table functions must be used in conjunction with Lateral View."),(0,r.kt)("p",null,"Split a string into multiple substrings according to the specified delimiter."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"explode_split(str, delimiter)\n")),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("p",null,"Original table data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select * from example1 order by k1;\n+------+---------+\n| k1   | k2      |\n+------+---------+\n|    1 |         |\n|    2 | NULL    |\n|    3 | ,       |\n|    4 | 1       |\n|    5 | 1,2,3   |\n|    6 | a, b, c |\n+------+---------+\n")),(0,r.kt)("p",null,"Lateral View:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 2 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    2 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 3 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    3 |      |\n|    3 |      |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 4 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    4 | 1    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 5 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    5 | 1    |\n|    5 | 2    |\n|    5 | 3    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_split(k2, ',') tmp1 as e1 where k1 = 6 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    6 |  b   |\n|    6 |  c   |\n|    6 | a    |\n+------+------+\n")),(0,r.kt)("h3",{id:"keywords"},"keywords"),(0,r.kt)("p",null,"explode,split,explode_split"))}d.isMDXComponent=!0}}]);