"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[23335],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,S=d["".concat(s,".").concat(u)]||d[u]||m[u]||l;return n?r.createElement(S,o(o({ref:t},c),{},{components:n})):r.createElement(S,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={},o=void 0,i={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",title:"SHOW-TABLETS",description:"---",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS.md",tags:[],version:"dev",frontMatter:{},sidebar:"docs",previous:{title:"SHOW-OPEN-TABLES",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"},next:{title:"SHOW-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"}},s={},p=[{value:"}",id:"",level:2},{value:"SHOW-TABLETS",id:"show-tablets",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,'{\n"title": "SHOW-TABLETS",\n"language": "en"'),(0,a.kt)("h2",{id:""},"}"),(0,a.kt)("h2",{id:"show-tablets"},"SHOW-TABLETS"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,"SHOW TABLETS"),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("p",null,"This statement is used to list tablets of the specified table (only for administrators)"),(0,a.kt)("p",null,"grammar:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM [database.]table [PARTITIONS(p1,p2)]\n[WHERE where_condition]\n[ORDER BY col_name]\n[LIMIT [offset,] row_count]\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Syntax Description:"))),(0,a.kt)("p",null,"where_condition could be one of:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    Version = version\n    state = "NORMAL|ROLLUP|CLONE|DECOMMISSION"\n    BackendId = backend_id\n')),(0,a.kt)("p",null,"or compound them with operator ",(0,a.kt)("inlineCode",{parentName:"p"},"AND"),"."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"list all tablets of the specified table"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name;\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"list all tablets of the specified partitions"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLETS FROM example_db.table_name PARTITIONS(p1, p2);\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"list all DECOMMISSION tablets on the specified backend"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW TABLETS FROM example_db.table_name WHERE state="DECOMMISSION" AND BackendId=11003;\n')))),(0,a.kt)("h3",{id:"keywords"},"Keywords"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SHOW, TABLETS\n")),(0,a.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);