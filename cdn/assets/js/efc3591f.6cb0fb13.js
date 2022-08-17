"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[91284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(f,r(r({ref:t},s),{},{components:n})):a.createElement(f,r({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41310:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={title:"Bitmap Index",language:"en"},r=void 0,o={unversionedId:"data-table/index/bitmap-index",id:"version-dev/data-table/index/bitmap-index",title:"Bitmap Index",description:"\x3c!--",source:"@site/versioned_docs/version-dev/data-table/index/bitmap-index.md",sourceDirName:"data-table/index",slug:"/data-table/index/bitmap-index",permalink:"/docs/dev/data-table/index/bitmap-index",draft:!1,tags:[],version:"dev",frontMatter:{title:"Bitmap Index",language:"en"},sidebar:"docs",previous:{title:"prefix index",permalink:"/docs/dev/data-table/index/prefix-index"},next:{title:"Import Overview",permalink:"/docs/dev/data-operate/import/load-manual"}},d={},p=[{value:"Glossary",id:"glossary",level:2},{value:"Basic Principles",id:"basic-principles",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Create index",id:"create-index",level:3},{value:"View index",id:"view-index",level:3},{value:"Delete index",id:"delete-index",level:3},{value:"Notice",id:"notice",level:2},{value:"More Help",id:"more-help",level:3}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bitmap-index"},"Bitmap Index"),(0,i.kt)("p",null,"Users can speed up queries by creating a bitmap index\nThis document focuses on how to create an index job, as well as some considerations and frequently asked questions when creating an index."),(0,i.kt)("h2",{id:"glossary"},"Glossary"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bitmap index: a fast data structure that speeds up queries")),(0,i.kt)("h2",{id:"basic-principles"},"Basic Principles"),(0,i.kt)("p",null,"Creating and dropping index is essentially a schema change job. For details, please refer to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/dev/advanced/alter-table/schema-change"},"Schema Change"),"."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("h3",{id:"create-index"},"Create index"),(0,i.kt)("p",null,"Create a bitmap index for siteid on table1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE INDEX [IF NOT EXISTS] index_name ON table1 (siteid) USING BITMAP COMMENT 'balabala';\n")),(0,i.kt)("h3",{id:"view-index"},"View index"),(0,i.kt)("p",null,"Display the lower index of the specified table_name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW INDEX FROM example_db.table_name;\n")),(0,i.kt)("h3",{id:"delete-index"},"Delete index"),(0,i.kt)("p",null,"Delete the lower index of the specified table_name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DROP INDEX [IF EXISTS] index_name ON [db_name.]table_name;\n")),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Currently only index of bitmap type is supported."),(0,i.kt)("li",{parentName:"ul"},"The bitmap index is only created on a single column."),(0,i.kt)("li",{parentName:"ul"},"Bitmap indexes can be applied to all columns of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Duplicate")," , ",(0,i.kt)("inlineCode",{parentName:"li"},"Uniq"),"  data model and key columns of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Aggregate"),"  models."),(0,i.kt)("li",{parentName:"ul"},"The data types supported by bitmap indexes are as follows:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TINYINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SMALLINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"INT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UNSIGNEDINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIGINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CHAR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"VARCHAR")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DATETIME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LARGEINT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DECIMAL")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BOOL")))),(0,i.kt)("li",{parentName:"ul"},"The bitmap index takes effect only in segmentV2. The table's storage format will be converted to V2 automatically when creating index.")),(0,i.kt)("h3",{id:"more-help"},"More Help"),(0,i.kt)("p",null,"For more detailed syntax and best practices for using bitmap indexes, please refer to the  ",(0,i.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-INDEX"},"CREARE INDEX")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-INDEX"},"SHOW INDEX")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-INDEX"},"DROP INDEX"),"  command manual. You can also enter HELP CREATE INDEX / HELP SHOW INDEX / HELP DROP INDEX on the MySql client command line."))}c.isMDXComponent=!0}}]);