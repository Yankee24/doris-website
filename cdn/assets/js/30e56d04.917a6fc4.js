"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[6671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),d=l,E=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(E,o(o({ref:t},s),{},{components:a})):n.createElement(E,o({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85834:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={title:"ALTER-TABLE-PROPERTY",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",id:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",title:"ALTER-TABLE-PROPERTY",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PROPERTY",draft:!1,tags:[],version:"current",frontMatter:{title:"ALTER-TABLE-PROPERTY",language:"en"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-TABLE-RENAME",permalink:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},p={},m=[{value:"ALTER-TABLE-PROPERTY",id:"alter-table-property",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],s={toc:m};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"alter-table-property"},"ALTER-TABLE-PROPERTY"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"ALTER TABLE PROPERTY"),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("p",null,"This statement is used to modify the properties of an existing table. This operation is synchronous, and the return of the command indicates the completion of the execution."),(0,l.kt)("p",null,"grammar:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,l.kt)("p",null,"The alter_clause of property supports the following modification methods"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Modify the bloom filter column of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.kt)("p",null,"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Modify the Colocate property of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Change the bucketing method of the table from Hash Distribution to Random Distribution")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n')),(0,l.kt)("p",null,"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition. buckets" = "32");\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Modify the in_memory attribute of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "true");\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Enable batch delete function")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Enable the function of ensuring the import order according to the value of the sequence column")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date");\n')),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Change the default number of buckets for the table to 50")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Change the bucketing mode of the table from Hash Distribution to Random Distribution")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Modify table comments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Modify column comments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"Modify the engine type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Modify the bloom filter column of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table SET ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.kt)("p",null,"Can also be incorporated into the schema change operation above (note that the syntax for multiple clauses is slightly different)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nDROP COLUMN col2\nPROPERTIES ("bloom_filter_columns"="k1,k2,k3");\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Modify the Colocate property of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("colocate_with" = "t1");\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Change the bucketing method of the table from Hash Distribution to Random Distribution")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("distribution_type" = "random");\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Modify the dynamic partition attribute of the table (support adding dynamic partition attribute to the table without dynamic partition attribute)")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "false");\n')),(0,l.kt)("p",null,"If you need to add dynamic partition attributes to tables without dynamic partition attributes, you need to specify all dynamic partition attributes\n(Note: adding dynamic partition attributes is not supported for non-partitioned tables)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("dynamic_partition.enable" = "true", "dynamic_partition.time_unit" = "DAY", "dynamic_partition.end" = "3", "dynamic_partition.prefix" = "p", "dynamic_partition. buckets" = "32");\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Modify the in_memory attribute of the table")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table set ("in_memory" = "true");\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"Enable batch delete function")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "BATCH_DELETE";\n')),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"Enable the function of ensuring the import order according to the value of the sequence column")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date");\n')),(0,l.kt)("ol",{start:8},(0,l.kt)("li",{parentName:"ol"},"Change the default number of buckets for the table to 50")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table MODIFY DISTRIBUTION DISTRIBUTED BY HASH(k1) BUCKETS 50;\n")),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},"Modify table comments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COMMENT "new comment";\n')),(0,l.kt)("ol",{start:10},(0,l.kt)("li",{parentName:"ol"},"Modify column comments")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table MODIFY COLUMN k1 COMMENT "k1", MODIFY COLUMN k2 COMMENT "k2";\n')),(0,l.kt)("ol",{start:11},(0,l.kt)("li",{parentName:"ol"},"Modify the engine type")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.mysql_table MODIFY ENGINE TO odbc PROPERTIES("driver" = "MySQL");\n')),(0,l.kt)("h3",{id:"keywords"},"Keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PROPERTY, ALTER TABLE\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);