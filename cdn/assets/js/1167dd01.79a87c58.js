"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[12954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={title:"INSERT",language:"en"},i=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/insert",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/insert",title:"INSERT",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/insert.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/insert",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/insert",draft:!1,tags:[],version:"0.15",frontMatter:{title:"INSERT",language:"en"},sidebar:"docs",previous:{title:"ALTER ROUTINE LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/alter-routine-load"},next:{title:"UPDATE",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/UPDATE"}},s={},p=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Parameters",id:"parameters",level:3},{value:"Note",id:"note",level:3},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"insert"},"INSERT"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("h3",{id:"syntax"},"Syntax"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO table_name\n[ PARTITION (p1, ...)]\n[ WITH LABEL label]\n[ (column [, ...]) ]\n[ [ hint [, ...] ] ]\n{ VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n")),(0,r.kt)("h3",{id:"parameters"},"Parameters"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"tablet_name: Target table for loading data. It can be in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"db_name.table_name"),"."),(0,r.kt)("p",{parentName:"blockquote"},"partitions: Specifies the partitions to be loaded, with multiple partition names separated by commas. The partitions must exist in ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name"),", "),(0,r.kt)("p",{parentName:"blockquote"},"label: Specifies a label for Insert job."),(0,r.kt)("p",{parentName:"blockquote"},"column_name: The specified destination columns must be columns that exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"table_name"),"."),(0,r.kt)("p",{parentName:"blockquote"},"expression: The corresponding expression that needs to be assigned to a column."),(0,r.kt)("p",{parentName:"blockquote"},"DEFAULT: Let the corresponding columns use default values"),(0,r.kt)("p",{parentName:"blockquote"},"query: A common query whose results are written to the target"),(0,r.kt)("p",{parentName:"blockquote"},"hint: Indicators used to indicate ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," execution. ",(0,r.kt)("inlineCode",{parentName:"p"},"Both streaming"),"and default non ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming'methods use synchronization to complete "),"INSERT' statement execution\nThe non ",(0,r.kt)("inlineCode",{parentName:"p"},"streaming'mode returns a label after execution to facilitate users to query the imported status through "),"SHOW LOAD'.")),(0,r.kt)("h3",{id:"note"},"Note"),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT'statement is currently executed, the default behavior for data that does not conform to the target table is filtering, such as string length. However, for business scenarios where data is not filtered, the session variable "),"enable_insert_strict'can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true' to ensure that "),"INSERT` will not be successfully executed when data is filtered out."),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"The test"),"table contains two columns ",(0,r.kt)("inlineCode",{parentName:"p"},"c1', "),"c2'."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Import a row of data into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, 2);\nINSERT INTO test (c1, c2) VALUES (1, DEFAULT);\nINSERT INTO test (c1) VALUES (1);\n")),(0,r.kt)("p",null,"The first and second sentences have the same effect. When the target column is not specified, the column order in the table is used as the default target column.\nThe third and fourth statements express the same meaning, using the default value of `c2'column to complete data import."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Import multiline data into the ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," table at one time")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test VALUES (1, 2), (3, 2 + 2)\nINSERT INTO test (c1, c2) VALUES (1, 2), (3, 2 * 2)\nINSERT INTO test (c1) VALUES (1), (3)\nInsert in test (C1, C2) values (1, Default), (3, Default)\n")),(0,r.kt)("p",null,"The effect of the first and second statements is the same, and two data are imported into the ",(0,r.kt)("inlineCode",{parentName:"p"},"test'table at one time.\nThe effect of the third and fourth statements is known, using the default value of the "),"c2'column to import two data into the `test' table."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Insert into table ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," with a query stmt.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test SELECT * FROM test2\nINSERT INTO test (c1, c2) SELECT * from test2\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Insert into table ",(0,r.kt)("inlineCode",{parentName:"li"},"test")," with specified partition and label")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"INSERT INTO test PARTITION(p1, p2) WITH LABEL `label1` SELECT * FROM test2;\nINSERT INTO test WITH LABEL `label1` (c1, c2) SELECT * from test2;\n")),(0,r.kt)("p",null,"Asynchronous imports are, in fact, encapsulated asynchronously by a synchronous import. Filling in streaming is as efficient as not filling in * execution."),(0,r.kt)("p",null,"Since Doris used to import asynchronously, in order to be compatible with the old usage habits, the ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT'statement without streaming will still return a label. Users need to view the status of the "),"label' import job through the `SHOW LOAD command."),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"INSERT"))}u.isMDXComponent=!0}}]);