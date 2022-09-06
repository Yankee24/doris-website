"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[61589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,E=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return r?n.createElement(E,o(o({ref:t},p),{},{components:r})):n.createElement(E,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={title:"SHOW-CREATE-TABLE",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE",title:"SHOW-CREATE-TABLE",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Show-Statements/SHOW-CREATE-TABLE.md",tags:[],version:"dev",frontMatter:{title:"SHOW-CREATE-TABLE",language:"en"},sidebar:"docs",previous:{title:"SHOW-SMALL-FILES",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-SMALL-FILES"},next:{title:"SHOW-CHARSET",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-CHARSET"}},s={},c=[{value:"SHOW-CREATE-TABLE",id:"show-create-table",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"show-create-table"},"SHOW-CREATE-TABLE"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW CREATE TABLE"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to display the creation statement of the data table."),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE [DBNAME.]TABLE_NAME\n")),(0,a.kt)("p",null,"illustrate:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"DBNAMNE")," : database name"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"TABLE_NAME")," : table name")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"View the table creation statement of a table"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE demo.tb1\n")))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, CREATE, TABLE\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);