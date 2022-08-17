"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[2117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,T=c["".concat(p,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(T,i(i({ref:t},m),{},{components:a})):n.createElement(T,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},28507:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"ALTER-TABLE-PARTITION",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",title:"ALTER-TABLE-PARTITION",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",draft:!1,tags:[],version:"dev",frontMatter:{title:"ALTER-TABLE-PARTITION",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-BITMAP",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"},next:{title:"ALTER-TABLE-COLUMN",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}},p={},s=[{value:"ALTER-TABLE-PARTITION",id:"alter-table-partition",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"alter-table-partition"},"ALTER-TABLE-PARTITION"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"ALTER TABLE PARTITION"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to modify the partition of an existing table."),(0,r.kt)("p",null,"This operation is synchronous, and the return of the command indicates the completion of the execution."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,r.kt)("p",null,"The alter_clause of partition supports the following modification methods"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add partition")),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ADD PARTITION [IF NOT EXISTS] partition_name\npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n')),(0,r.kt)("p",null,"Notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"partition_desc supports the following two ways of writing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"VALUES LESS THAN ",'[MAXVALUE|("value1", ...)]'),(0,r.kt)("li",{parentName:"ul"},'VALUES [("value1", ...), ("value1", ...))'))),(0,r.kt)("li",{parentName:"ul"},"The partition is left closed and right open. If the user only specifies the right boundary, the system will automatically determine the left boundary"),(0,r.kt)("li",{parentName:"ul"},"If the bucketing method is not specified, the bucketing method used for creating the table is automatically used"),(0,r.kt)("li",{parentName:"ul"},"If the bucketing method is specified, only the number of buckets can be modified, not the bucketing method or the bucketing column"),(0,r.kt)("li",{parentName:"ul"},"The ",'["key"="value"]'," section can set some attributes of the partition, see ",(0,r.kt)("a",{parentName:"li",href:"./sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.md"},"CREATE TABLE")),(0,r.kt)("li",{parentName:"ul"},"If the user does not explicitly create a partition when creating a table, adding a partition by ALTER is not supported")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Delete the partition")),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n")),(0,r.kt)("p",null," Notice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At least one partition must be reserved for tables using partitioning."),(0,r.kt)("li",{parentName:"ul"},"After executing DROP PARTITION for a period of time, the deleted partition can be recovered through the RECOVER statement. For details, see SQL Manual - Database Management - RECOVER Statement"),(0,r.kt)("li",{parentName:"ul"},"If you execute DROP PARTITION FORCE, the system will not check whether there are unfinished transactions in the partition, the partition will be deleted directly and cannot be recovered, this operation is generally not recommended")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the partition properties"),(0,r.kt)("p",{parentName:"li"},"grammar:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n')),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Currently supports modifying the following properties of partitions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"storage_medium\n-storage_cooldown_time"),(0,r.kt)("li",{parentName:"ul"},"replication_num"),(0,r.kt)("li",{parentName:"ul"},"in_memory"))),(0,r.kt)("li",{parentName:"ul"},"For single-partition tables, partition_name is the same as the table name.")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add partition, existing partition [MIN, 2013-01-01), add partition [2013-01-01, 2014-01-01), use default bucketing method")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Increase the partition and use the new number of buckets")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Increase the partition and use the new number of replicas")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Modify the number of partition replicas")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Batch modify the specified partition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("in_memory"="true");\n')),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Batch modify all partitions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n')),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Delete partition")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Add a partition specifying upper and lower bounds")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01"));\n')),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PARTITION, ALTER TABLE\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);