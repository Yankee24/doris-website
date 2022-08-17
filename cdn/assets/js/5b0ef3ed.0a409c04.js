"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[245],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},39294:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-SYNC-JOB",language:"en"},o=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",title:"CREATE-SYNC-JOB",description:"\x3c!--",source:"@site/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Load",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB",draft:!1,tags:[],version:"current",frontMatter:{title:"CREATE-SYNC-JOB",language:"en"},sidebar:"docs",previous:{title:"STOP-SYNC-JOB",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-SYNC-JOB"},next:{title:"DELETE",permalink:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE"}},p={},s=[{value:"CREATE-SYNC-JOB",id:"create-sync-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-sync-job"},"CREATE-SYNC-JOB"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE SYNC JOB"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"The data synchronization (Sync Job) function supports users to submit a resident data synchronization job, and incrementally synchronizes the CDC (Change Data Capture) of the user's data update operation in the Mysql database by reading the Binlog log from the specified remote address. Features."),(0,r.kt)("p",null,"Currently, the data synchronization job only supports connecting to Canal, obtaining the parsed Binlog data from the Canal Server and importing it into Doris."),(0,r.kt)("p",null,"Users can view the data synchronization job status through ",(0,r.kt)("a",{parentName:"p",href:"../../../sql-manual/sql-reference/Show-Statements/SHOW-SYNC-JOB.md"},"SHOW SYNC JOB"),"."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE SYNC [db.]job_name\n (\n channel_desc,\n channel_desc\n ...\n )\nbinlog_desc\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"job_name")),(0,r.kt)("p",{parentName:"li"},"The synchronization job name is the unique identifier of the job in the current database. Only one job with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"job_name")," can be running.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"channel_desc")),(0,r.kt)("p",{parentName:"li"},"The data channel under the job is used to describe the mapping relationship between the mysql source table and the doris target table."),(0,r.kt)("p",{parentName:"li"},"grammar:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"FROM mysql_db.src_tbl INTO des_tbl\n[columns_mapping]\n")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db.src_tbl")),(0,r.kt)("p",{parentName:"li"},"Specify the database and source table on the mysql side.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"des_tbl")),(0,r.kt)("p",{parentName:"li"},"Specify the target table on the doris side. Only unique tables are supported, and the batch delete function of the table needs to be enabled (see the 'batch delete function' of help alter table for how to enable it).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"column_mapping")),(0,r.kt)("p",{parentName:"li"},"Specifies the mapping relationship between the columns of the mysql source table and the doris target table. If not specified, FE will default the columns of the source table and the target table to one-to-one correspondence in order."),(0,r.kt)("p",{parentName:"li"},"The form col_name = expr is not supported for columns."),(0,r.kt)("p",{parentName:"li"},"Example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Suppose the target table column is (k1, k2, v1),\n\nChange the order of columns k1 and k2\n(k2, k1, v1)\n\nIgnore the fourth column of the source data\n(k2, k1, v1, dummy_column)\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"binlog_desc")),(0,r.kt)("p",{parentName:"li"},"Used to describe the remote data source, currently only one canal is supported."),(0,r.kt)("p",{parentName:"li"},"grammar:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'FROM BINLOG\n(\n    "key1" = "value1",\n    "key2" = "value2"\n)\n')),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The properties corresponding to the Canal data source, prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"canal.")),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"canal.server.ip: address of canal server"),(0,r.kt)("li",{parentName:"ol"},"canal.server.port: the port of the canal server"),(0,r.kt)("li",{parentName:"ol"},"canal.destination: the identity of the instance"),(0,r.kt)("li",{parentName:"ol"},"canal.batchSize: The maximum batch size obtained, the default is 8192"),(0,r.kt)("li",{parentName:"ol"},"canal.username: username of instance"),(0,r.kt)("li",{parentName:"ol"},"canal.password: the password of the instance"),(0,r.kt)("li",{parentName:"ol"},"canal.debug: optional, when set to true, the batch and details of each row of data will be printed out")))))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Simply create a data synchronization job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"test_tbl")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db"),", connect to the local Canal server, corresponding to the Mysql source table ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql_db1.tbl1"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE SYNC `test_db`.`job1`\n(\nFROM `mysql_db1`.`tbl1` INTO `test_tbl`\n)\nFROM BINLOG\n(\n"type" = "canal",\n"canal.server.ip" = "127.0.0.1",\n"canal.server.port" = "11111",\n"canal.destination" = "example",\n"canal.username" = "",\n"canal.password" = ""\n);\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a data synchronization job named ",(0,r.kt)("inlineCode",{parentName:"p"},"job1")," for multiple tables of ",(0,r.kt)("inlineCode",{parentName:"p"},"test_db"),", corresponding to multiple Mysql source tables one-to-one, and explicitly specify the column mapping."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE SYNC `test_db`.`job1`\n(\nFROM `mysql_db`.`t1` INTO `test1` (k1, k2, v1) ,\nFROM `mysql_db`.`t2` INTO `test2` (k3, k4, v2) \n)\nFROM BINLOG\n(\n"type" = "canal",\n"canal.server.ip" = "xx.xxx.xxx.xx",\n"canal.server.port" = "12111",\n"canal.destination" = "example",\n"canal.username" = "username",\n"canal.password" = "password"\n);\n')))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, SYNC, JOB\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);