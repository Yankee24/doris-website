"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[66399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,h=c["".concat(d,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},33008:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const l={title:"Batch Delete",language:"en"},r=void 0,i={unversionedId:"administrator-guide/load-data/batch-delete-manual",id:"version-0.15/administrator-guide/load-data/batch-delete-manual",title:"Batch Delete",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/load-data/batch-delete-manual.md",sourceDirName:"administrator-guide/load-data",slug:"/administrator-guide/load-data/batch-delete-manual",permalink:"/docs/0.15/administrator-guide/load-data/batch-delete-manual",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Batch Delete",language:"en"},sidebar:"docs",previous:{title:"Introduction Overview",permalink:"/docs/0.15/administrator-guide/load-data/load-manual"},next:{title:"Binlog Load",permalink:"/docs/0.15/administrator-guide/load-data/binlog-load-manual"}},d={},s=[{value:"Principle",id:"principle",level:2},{value:"Import",id:"import",level:3},{value:"Read",id:"read",level:3},{value:"Cumulative Compaction",id:"cumulative-compaction",level:3},{value:"Base Compaction",id:"base-compaction",level:3},{value:"Syntax",id:"syntax",level:3},{value:"stream load",id:"stream-load",level:4},{value:"broker load",id:"broker-load",level:4},{value:"routine load",id:"routine-load",level:4},{value:"Enable bulk delete support",id:"enable-bulk-delete-support",level:2},{value:"Note",id:"note",level:2},{value:"Usage example",id:"usage-example",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"batch-delete"},"Batch Delete"),(0,o.kt)("p",null,"Currently, Doris supports multiple import methods such as broker load, routine load, stream load, etc. The data can only be deleted through the delete statement at present. When the delete statement is used to delete, a new data version will be generated every time delete is executed. Frequent deletion will seriously affect the query performance, and when using the delete method to delete, it is achieved by generating an empty rowset to record the deletion conditions. Each time you read, you must filter the deletion jump conditions. Also when there are many conditions, Performance affects. Compared with other systems, the implementation of greenplum is more like a traditional database product. Snowflake is implemented through the merge syntax."),(0,o.kt)("p",null,"For scenarios similar to the import of cdc data, insert and delete in the data data generally appear interspersed. In this scenario, our current import method is not enough, even if we can separate insert and delete, it can solve the import problem , But still cannot solve the problem of deletion. Use the batch delete function to solve the needs of these scenarios.\nThere are three ways to merge data import:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"APPEND: All data are appended to existing data"),(0,o.kt)("li",{parentName:"ol"},"DELETE: delete all rows with the same key column value as the imported data"),(0,o.kt)("li",{parentName:"ol"},"MERGE: APPEND or DELETE according to DELETE ON decision")),(0,o.kt)("h2",{id:"principle"},"Principle"),(0,o.kt)("p",null,"This is achieved by adding a hidden column ",(0,o.kt)("inlineCode",{parentName:"p"},"__DELETE_SIGN__"),", because we are only doing batch deletion on the unique model, so we only need to add a hidden column whose type is bool and the aggregate function is replace. In be, the various aggregation write processes are the same as normal columns, and there are two read schemes:"),(0,o.kt)("p",null,"Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"__DELETE_SIGN__")," when fe encounters extensions such as *, and add the condition of ",(0,o.kt)("inlineCode",{parentName:"p"},"__DELETE_SIGN__ != true")," by default\nWhen be reads, a column is added for judgment, and the condition is used to determine whether to delete."),(0,o.kt)("h3",{id:"import"},"Import"),(0,o.kt)("p",null,"When importing, set the value of the hidden column to the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DELETE ON")," expression during fe parsing. The other aggregation behaviors are the same as the replace aggregation column"),(0,o.kt)("h3",{id:"read"},"Read"),(0,o.kt)("p",null,"When reading, add the condition of ",(0,o.kt)("inlineCode",{parentName:"p"},"__DELETE_SIGN__ != true")," to all olapScanNodes with hidden columns, be does not perceive this process and executes normally"),(0,o.kt)("h3",{id:"cumulative-compaction"},"Cumulative Compaction"),(0,o.kt)("p",null,"In Cumulative Compaction, hidden columns are treated as normal columns, and the compaction logic remains unchanged"),(0,o.kt)("h3",{id:"base-compaction"},"Base Compaction"),(0,o.kt)("p",null,"In Base Compaction, delete the rows marked for deletion to reduce the space occupied by data"),(0,o.kt)("h3",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,"The import syntax design is mainly to add a column mapping that specifies the field of the delete mark column, and this column needs to be added to the imported data. The method of setting each import method is as follows"),(0,o.kt)("h4",{id:"stream-load"},"stream load"),(0,o.kt)("p",null,"The wording of stream load adds a field to set the delete mark column in the columns field in the header. Example\n",(0,o.kt)("inlineCode",{parentName:"p"},'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"')),(0,o.kt)("h4",{id:"broker-load"},"broker load"),(0,o.kt)("p",null,"Set the field to delete the mark column at ",(0,o.kt)("inlineCode",{parentName:"p"},"PROPERTIES")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label=true]\n\n)\nWITH BROKER\'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n    \n);\n\n')),(0,o.kt)("h4",{id:"routine-load"},"routine load"),(0,o.kt)("p",null,"Routine load adds a mapping to the ",(0,o.kt)("inlineCode",{parentName:"p"},"columns")," field. The mapping method is the same as above, the example is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'   CREATE ROUTINE LOAD example_db.test1 ON example_tbl\n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, k3, v1, v2, label),\n    WHERE k1> 100 and k2 like "%doris%"\n    [DELETE ON label=true]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')),(0,o.kt)("h2",{id:"enable-bulk-delete-support"},"Enable bulk delete support"),(0,o.kt)("p",null,"There are two ways of enabling batch delete support:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"By adding ",(0,o.kt)("inlineCode",{parentName:"p"},"enable_batch_delete_by_default=true")," in the fe configuration file, all newly created tables after restarting fe support batch deletion, this option defaults to false")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For tables that have not changed the above fe configuration or for existing tables that do not support the bulk delete function, you can use the following statement:\n",(0,o.kt)("inlineCode",{parentName:"p"},'ALTER TABLE tablename ENABLE FEATURE "BATCH_DELETE"')," to enable the batch delete."))),(0,o.kt)("p",null,"If you want to determine whether a table supports batch delete, you can set a session variable to display the hidden columns ",(0,o.kt)("inlineCode",{parentName:"p"},"SET show_hidden_columns=true"),", and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"desc tablename"),", if there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"__DELETE_SIGN__")," column in the output, it is supported, if not, it is not supported"),(0,o.kt)("h2",{id:"note"},"Note"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Since import operations other than stream load may be executed out of order inside doris, if it is not stream load when importing using the ",(0,o.kt)("inlineCode",{parentName:"li"},"MERGE")," method, it needs to be used with load sequence. For the specific syntax, please refer to the sequence column related documents"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"DELETE ON")," condition can only be used with MERGE")),(0,o.kt)("h2",{id:"usage-example"},"Usage example"),(0,o.kt)("p",null,"Let's take stream load as an example to show how to use it"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Import data normally:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: APPEND" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')),(0,o.kt)("p",null,"The APPEND condition can be omitted, which has the same effect as the following statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -T ~/table1_data http://127.0.0.1:8130/api/test/table1 /_stream_load\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Delete all data with the same key as the imported data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: DELETE" -T ~/table1_data http://127.0.0.1: 8130/api/test/table1/_stream_load\n')),(0,o.kt)("p",null,"Before load:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      3 |        2 | tom      |    2 |\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,o.kt)("p",null,"Load data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"3,2,tom,0\n")),(0,o.kt)("p",null,"After load:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Import the same row as the key column of the row with ",(0,o.kt)("inlineCode",{parentName:"li"},"site_id=1"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv" -H "merge_type: MERGE" -H "delete: siteid=1" -T ~/ table1_data http://127.0.0.1:8130/api/test/table1/_stream_load\n')),(0,o.kt)("p",null,"Before load:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      5 |        3 | helen    |    3 |\n|      1 |        1 | jim      |    2 |\n+--------+----------+----------+------+\n")),(0,o.kt)("p",null,"Load data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2,1,grace,2\n3,2,tom,2\n1,1,jim,2\n")),(0,o.kt)("p",null,"After load:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------+----------+----------+------+\n| siteid | citycode | username | pv   |\n+--------+----------+----------+------+\n|      4 |        3 | bush     |    3 |\n|      2 |        1 | grace    |    2 |\n|      3 |        2 | tom      |    2 |\n|      5 |        3 | helen    |    3 |\n+--------+----------+----------+------+\n")))}u.isMDXComponent=!0}}]);