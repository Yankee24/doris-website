"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3942],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,E=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?r.createElement(E,i(i({ref:t},p),{},{components:a})):r.createElement(E,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92546:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const l={title:"CREATE-DATABASE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",id:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",title:"CREATE-DATABASE",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-DATABASE",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-DATABASE",language:"en"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE"},next:{title:"CREATE-ENCRYPT-KEY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-ENCRYPT-KEY"}},s={},c=[{value:"CREATE-DATABASE",id:"create-database",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-database"},"CREATE-DATABASE"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"CREATE DATABASE"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to create a new database (database)"),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n')),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"PROPERTIES")," Additional information about the database, which can be defaulted."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you create an Iceberg database, you need to provide the following information in properties:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'PROPERTIES (\n  "iceberg.database" = "iceberg_db_name",\n  "iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n  "iceberg.catalog.type" = "HIVE_CATALOG"\n)\n')),(0,n.kt)("p",{parentName:"li"},"illustrate:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ceberg.database")," : the library name corresponding to Iceberg;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"iceberg.hive.metastore.uris")," : hive metastore service address;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"iceberg.catalog.type"),": The default is ",(0,n.kt)("inlineCode",{parentName:"li"},"HIVE_CATALOG"),"; currently only ",(0,n.kt)("inlineCode",{parentName:"li"},"HIVE_CATALOG")," is supported, and more Iceberg catalog types will be supported in the future.")))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new database db_test"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_test;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new Iceberg database iceberg_test"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE DATABASE `iceberg_test`\nPROPERTIES (\n"iceberg.database" = "doris",\n"iceberg.hive.metastore.uris" = "thrift://127.0.0.1:9083",\n"iceberg.catalog.type" = "HIVE_CATALOG"\n);\n')))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"CREATE, DATABASE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);