"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[39183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"SHOW LOAD",language:"en"},o=void 0,l={unversionedId:"sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",id:"version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",title:"SHOW LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD.md",sourceDirName:"sql-reference/sql-statements/Data-Manipulation",slug:"/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-LOAD",draft:!1,tags:[],version:"0.15",frontMatter:{title:"SHOW LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW EXPORT",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-EXPORT"},next:{title:"SHOW PARTITIONS",permalink:"/docs/0.15/sql-reference/sql-statements/Data-Manipulation/SHOW-PARTITIONS"}},s={},p=[{value:"Description",id:"description",level:2},{value:"example",id:"example",level:2},{value:"keyword",id:"keyword",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"show-load"},"SHOW LOAD"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to show the execution of the specified import task\nGrammar:\nSHOW LOAD\n","[FROM both names]","\nWHERE\n[LABEL ",'[ = "your_label" | LIKE "label_matcher"]',"]\n[STATE = ",'["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]',"]\n]\n","[ORDER BY ...][LIMIT limit]","[OFFSET offset]",";"),(0,r.kt)("p",null,"Explain:\n1) If db_name is not specified, use the current default DB\n2) If you use LABEL LIKE, the label that matches the import task contains the import task of label_matcher\n3) If LABEL = is used, the specified label is matched accurately.\n4) If STATE is specified, the LOAD state is matched\n5) Arbitrary column combinations can be sorted using ORDER BY\n6) If LIMIT is specified, the limit bar matching record is displayed. Otherwise, all of them will be displayed.\n7) If OFFSET is specified, the query results are displayed from offset. By default, the offset is 0.\n8) If broker/mini load is used, the connection in the URL column can be viewed using the following command:"),(0,r.kt)("p",null,"SHOW LOAD WARNINGS ON 'url'"),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Show all import tasks of default DB\nSHOW LOAD;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Show the import task of the specified db. The label contains the string "2014_01_02", showing the oldest 10\nSHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Show the import task of the specified db, specify label as "load_example_db_20140102" and sort it in descending order by LoadStartTime\nSHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Show the import task of the specified db, specify label as "load_example_db_20140102" and state as "load", and sort it in descending order by LoadStartTime\nSHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Show the import task of the specified dB and sort it in descending order by LoadStartTime, and display 10 query results starting with offset 5\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Small batch import is a command to view the import status\ncurl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}"))),(0,r.kt)("h2",{id:"keyword"},"keyword"),(0,r.kt)("p",null,"SHOW,LOAD"))}d.isMDXComponent=!0}}]);