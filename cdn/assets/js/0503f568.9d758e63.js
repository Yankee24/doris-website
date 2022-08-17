"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[17021],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},69757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={title:"update",language:"en"},l=void 0,i={unversionedId:"data-operate/update-delete/update",id:"data-operate/update-delete/update",title:"update",description:"\x3c!--",source:"@site/docs/data-operate/update-delete/update.md",sourceDirName:"data-operate/update-delete",slug:"/data-operate/update-delete/update",permalink:"/docs/data-operate/update-delete/update",draft:!1,tags:[],version:"current",frontMatter:{title:"update",language:"en"},sidebar:"docs",previous:{title:"Use mysqldump data to export table structure or data",permalink:"/docs/data-operate/export/export_with_mysql_dump"},next:{title:"Sequence Column",permalink:"/docs/data-operate/update-delete/sequence-column-manual"}},s={},d=[{value:"Applicable scenarios",id:"applicable-scenarios",level:2},{value:"Fundamentals",id:"fundamentals",level:2},{value:"Synchronization",id:"synchronization",level:3},{value:"Performance",id:"performance",level:3},{value:"Concurrency Control",id:"concurrency-control",level:3},{value:"Risks of use",id:"risks-of-use",level:2},{value:"Usage example",id:"usage-example",level:2},{value:"More Help",id:"more-help",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"update"},"Update"),(0,r.kt)("p",null,"This article mainly describes how to use the UPDATE command to operate if we need to modify or update the data in Doris. The data update is limited to the version of Doris and can only be used in Doris ",(0,r.kt)("strong",{parentName:"p"},"Version 0.15.x +"),"."),(0,r.kt)("h2",{id:"applicable-scenarios"},"Applicable scenarios"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Modify its value for rows that meet certain conditions;"),(0,r.kt)("li",{parentName:"ul"},"Point update, small range update, the row to be updated is preferably a very small part of the entire table;"),(0,r.kt)("li",{parentName:"ul"},"The update command can only be executed on a table with a Unique data model.")),(0,r.kt)("h2",{id:"fundamentals"},"Fundamentals"),(0,r.kt)("p",null,"Use the query engine's own where filtering logic to filter the rows that need to be updated from the table to be updated. Then use the Unique model's own Value column replacement logic to change the rows to be updated and reinsert them into the table. This enables row-level updates."),(0,r.kt)("h3",{id:"synchronization"},"Synchronization"),(0,r.kt)("p",null,"The Update syntax is a synchronization syntax in Doris. If the Update statement succeeds, the update succeeds and the data is visible."),(0,r.kt)("h3",{id:"performance"},"Performance"),(0,r.kt)("p",null,"The performance of the Update statement is closely related to the number of rows to be updated and the retrieval efficiency of the condition."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Number of rows to be updated: The more rows to be updated, the slower the Update statement will be. This is consistent with the principle of importing.\nDoris updates are more suitable for occasional update scenarios, such as changing the values of individual rows.\nDoris is not suitable for large batches of data changes. Large modifications can make Update statements take a long time to run.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Condition retrieval efficiency: Doris Update implements the principle of reading the rows that satisfy the condition first, so if the condition retrieval efficiency is high, the Update will be faster.\nThe condition column should ideally be hit, indexed, or bucket clipped. This way Doris does not need to scan the entire table and can quickly locate the rows that need to be updated. This improves update efficiency.\nIt is strongly discouraged to include the UNIQUE model value column in the condition column."))),(0,r.kt)("h3",{id:"concurrency-control"},"Concurrency Control"),(0,r.kt)("p",null,"By default, multiple concurrent Update operations on the same table are not allowed at the same time."),(0,r.kt)("p",null,"The main reason for this is that Doris currently supports row updates, which means that even if the user declares ",(0,r.kt)("inlineCode",{parentName:"p"},"SET v2 = 1"),", virtually all other Value columns will be overwritten (even though the values are not changed)."),(0,r.kt)("p",null,"This presents a problem in that if two Update operations update the same row at the same time, the behavior may be indeterminate. That is, there may be dirty data."),(0,r.kt)("p",null,"However, in practice, the concurrency limit can be turned on manually if the user himself can guarantee that even if concurrent updates are performed, they will not operate on the same row at the same time. This is done by modifying the FE configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_concurrent_update"),". When the configuration value is true, there is no limit on concurrent updates."),(0,r.kt)("h2",{id:"risks-of-use"},"Risks of use"),(0,r.kt)("p",null,"Since Doris currently supports row updates and uses a two-step read-and-write operation, there is uncertainty about the outcome of an Update statement if it modifies the same row as another Import or Delete statement."),(0,r.kt)("p",null,"Therefore, when using Doris, you must be careful to control the concurrency of Update statements and other DML statements on the ",(0,r.kt)("strong",{parentName:"p"},"user side itself"),"."),(0,r.kt)("h2",{id:"usage-example"},"Usage example"),(0,r.kt)("p",null,"Suppose there is an order table in Doris, where the order id is the Key column, the order status and the order amount are the Value column. The data status is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order id"),(0,r.kt)("th",{parentName:"tr",align:null},"order amount"),(0,r.kt)("th",{parentName:"tr",align:null},"order status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending Payment")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5f85\u4ed8\u6b3e       |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n")),(0,r.kt)("p",null,"At this time, after the user clicks to pay, the Doris system needs to change the status of the order with the order id '1' to 'Pending Shipping', and the Update function needs to be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> UPDATE test_order SET order_status = 'Pending Shipping' WHERE order_id = 1;\nQuery OK, 1 row affected (0.11 sec)\n{'label':'update_20ae22daf0354fe0-b5aceeaaddc666c5', 'status':'VISIBLE', 'txnId':'33', 'queryId':'20ae22daf0354fe0-b5aceeaaddc666c5'}\n")),(0,r.kt)("p",null,"The result after the update is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"+----------+--------------+------------------+\n| order_id | order_amount | order_status     |\n+----------+--------------+------------------+\n| 1        |          100 | Pending Shipping |\n+----------+--------------+------------------+\n1 row in set (0.01 sec)\n")),(0,r.kt)("p",null,"After the user executes the UPDATE command, the system performs the following three steps."),(0,r.kt)("p",null," Step 1: Read the rows that satisfy WHERE order id=1 (1, 100, 'pending payment')\nStep 2: Change the order status of the row from 'Pending Payment' to 'Pending Shipping' (1, 100, 'Pending shipment')\nStep 3: Insert the updated row back into the table to achieve the updated effect. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order id"),(0,r.kt)("th",{parentName:"tr",align:null},"order amount"),(0,r.kt)("th",{parentName:"tr",align:null},"order status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending Payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending shipments")))),(0,r.kt)("p",null,"Since the table order is a UNIQUE model, the rows with the same Key, after which the latter will take effect, so the final effect is as follows. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"order id"),(0,r.kt)("th",{parentName:"tr",align:null},"order amount"),(0,r.kt)("th",{parentName:"tr",align:null},"order status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"Pending shipments")))),(0,r.kt)("h2",{id:"more-help"},"More Help"),(0,r.kt)("p",null,"For more detailed syntax used by ",(0,r.kt)("strong",{parentName:"p"},"data update"),", please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"},"update")," command manual , you can also enter ",(0,r.kt)("inlineCode",{parentName:"p"},"HELP UPDATE")," in the Mysql client command line to get more help information."))}u.isMDXComponent=!0}}]);