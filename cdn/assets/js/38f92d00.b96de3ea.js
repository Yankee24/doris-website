"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[3166],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10193:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"Synchronize data through external table",language:"en"},l=void 0,i={unversionedId:"data-operate/import/import-scenes/external-table-load",id:"version-dev/data-operate/import/import-scenes/external-table-load",title:"Synchronize data through external table",description:"\x3c!--",source:"@site/versioned_docs/version-dev/data-operate/import/import-scenes/external-table-load.md",sourceDirName:"data-operate/import/import-scenes",slug:"/data-operate/import/import-scenes/external-table-load",permalink:"/docs/dev/data-operate/import/import-scenes/external-table-load",draft:!1,tags:[],version:"dev",frontMatter:{title:"Synchronize data through external table",language:"en"},sidebar:"docs",previous:{title:"Kafka Data Subscription",permalink:"/docs/dev/data-operate/import/import-scenes/kafka-load"},next:{title:"Synchronize data using JDBC",permalink:"/docs/dev/data-operate/import/import-scenes/jdbc-load"}},c={},s=[{value:"create external table",id:"create-external-table",level:2},{value:"Import Data",id:"import-data",level:2},{value:"Precautions",id:"precautions",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"synchronize-data-through-external-table"},"Synchronize data through external table"),(0,n.kt)("p",null,"Doris can create external tables that are accessed through the ODBC protocol. After the creation is complete, you can directly query the data of the external table through the SELECT statement, or import the data of the external table through ",(0,n.kt)("inlineCode",{parentName:"p"},"INSERT INTO SELECT"),"."),(0,n.kt)("p",null,"This document describes how to create external tables accessed through the ODBC protocol, and how to import data from these external tables. Currently supported data sources include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"MySQL"),(0,n.kt)("li",{parentName:"ul"},"Oracle"),(0,n.kt)("li",{parentName:"ul"},"PostgreSQL"),(0,n.kt)("li",{parentName:"ul"},"SQL Server"),(0,n.kt)("li",{parentName:"ul"},"Hive (supported in version 1.0)")),(0,n.kt)("h2",{id:"create-external-table"},"create external table"),(0,n.kt)("p",null,"For a detailed introduction to creating ODBC external tables, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"},"CREATE ODBC TABLE")," syntax help manual."),(0,n.kt)("p",null,"Here is just an example of how to use it."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create an ODBC Resource"),(0,n.kt)("p",{parentName:"li"},"The purpose of ODBC Resource is to manage the connection information of external tables uniformly."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL RESOURCE `oracle_test_odbc`\nPROPERTIES (\n    "type" = "odbc_catalog",\n    "host" = "192.168.0.1",\n    "port" = "8086",\n    "user" = "oracle",\n    "password" = "oracle",\n    "database" = "oracle",\n    "odbc_type" = "oracle",\n    "driver" = "Oracle"\n);\n')))),(0,n.kt)("p",null,"Here we have created a Resource named ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle_test_odbc"),", whose type is ",(0,n.kt)("inlineCode",{parentName:"p"},"odbc_catalog"),", indicating that this is a Resource used to store ODBC information. ",(0,n.kt)("inlineCode",{parentName:"p"},"odbc_type")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle"),", indicating that this OBDC Resource is used to connect to the Oracle database. For other types of resources, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/advanced/resource"},"resource management")," documentation for details."),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Create an external table")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE EXTERNAL TABLE `ext_oracle_demo` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n) ENGINE=ODBC\nCOMMENT "ODBC"\nPROPERTIES (\n    "odbc_catalog_resource" = "oracle_test_odbc",\n    "database" = "oracle",\n    "table" = "baseall"\n);\n')),(0,n.kt)("p",null,"Here we create an ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo")," external table and reference the ",(0,n.kt)("inlineCode",{parentName:"p"},"oracle_test_odbc")," Resource created earlier"),(0,n.kt)("h2",{id:"import-data"},"Import Data"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create the Doris table"),(0,n.kt)("p",{parentName:"li"},"Here we create a Doris table with the same column information as the external table ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo")," created in the previous step:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE `doris_oralce_tbl` (\n  `k1` decimal(9, 3) NOT NULL COMMENT "",\n  `k2` char(10) NOT NULL COMMENT "",\n  `k3` datetime NOT NULL COMMENT "",\n  `k5` varchar(20) NOT NULL COMMENT "",\n  `k6` double NOT NULL COMMENT ""\n)\nCOMMENT "Doris Table"\nDISTRIBUTED BY HASH(k1) BUCKETS 2;\nPROPERTIES (\n    "replication_num" = "1"\n);\n')),(0,n.kt)("p",{parentName:"li"},"For detailed instructions on creating Doris tables, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE-TABLE")," syntax help.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import data (from ",(0,n.kt)("inlineCode",{parentName:"p"},"ext_oracle_demo")," table to ",(0,n.kt)("inlineCode",{parentName:"p"},"doris_oralce_tbl")," table)"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO doris_oralce_tbl SELECT k1,k2,k3 FROM ext_oracle_demo limit 200\n")),(0,n.kt)("p",{parentName:"li"},"The INSERT command is a synchronous command, and a successful return indicates that the import was successful."))),(0,n.kt)("h2",{id:"precautions"},"Precautions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It must be ensured that the external data source and the Doris cluster can communicate with each other, including the network between the BE node and the external data source."),(0,n.kt)("li",{parentName:"ul"},"ODBC external tables essentially access the data source through a single ODBC client, so it is not suitable to import a large amount of data at one time. It is recommended to import multiple times in batches.")))}d.isMDXComponent=!0}}]);