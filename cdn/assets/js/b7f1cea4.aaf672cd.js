"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[98848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(i,".").concat(u)]||m[u]||d[u]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const l={title:"SHOW-STREAM-LOAD",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",id:"version-dev/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",title:"SHOW-STREAM-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD",draft:!1,tags:[],version:"dev",frontMatter:{title:"SHOW-STREAM-LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW-FILE",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-FILE"},next:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-STATUS"}},i={},p=[{value:"SHOW-STREAM-LOAD",id:"show-stream-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"show-stream-load"},"SHOW-STREAM-LOAD"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"SHOW STREAM LOAD"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"This statement is used to display the execution of the specified Stream Load task"),(0,n.kt)("p",null,"grammar:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD\n[FROM db_name]\n[\n  WHERE\n  [LABEL [ = "your_label" | LIKE "label_matcher"]]\n  [STATUS = ["SUCCESS"|"FAIL"]]\n]\n[ORDER BY...]\n[LIMIT limit][OFFSET offset];\n')),(0,n.kt)("p",null,"illustrate:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"By default, BE does not record Stream Load records. If you want to view records that need to be enabled on BE, the configuration parameter is: ",(0,n.kt)("inlineCode",{parentName:"li"},"enable_stream_load_record=true"),". For details, please refer to ","[BE Configuration Items]","(",(0,n.kt)("a",{parentName:"li",href:"https://doris.apache."},"https://doris.apache.")," org/zh-CN/docs/admin-manual/config/be-config)"),(0,n.kt)("li",{parentName:"ol"},"If db_name is not specified, the current default db is used"),(0,n.kt)("li",{parentName:"ol"},"If LABEL LIKE is used, it will match the tasks whose label of the Stream Load task contains label_matcher"),(0,n.kt)("li",{parentName:"ol"},"If LABEL = is used, it will match the specified label exactly"),(0,n.kt)("li",{parentName:"ol"},"If STATUS is specified, matches STREAM LOAD status"),(0,n.kt)("li",{parentName:"ol"},"You can use ORDER BY to sort on any combination of columns"),(0,n.kt)("li",{parentName:"ol"},"If LIMIT is specified, limit matching records are displayed. Otherwise show all"),(0,n.kt)("li",{parentName:"ol"},"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0.")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Show all Stream Load tasks of the default db"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"  SHOW STREAM LOAD;\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Display the Stream Load task of the specified db, the label contains the string "2014_01_02", and display the oldest 10'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Display the Stream Load task of the specified db and specify the label as "load_example_db_20140102"'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Display the Stream Load task of the specified db, specify the status as "success", and sort by StartTime in descending order'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY StartTime DESC;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Display the import tasks of the specified db and sort them in descending order of StartTime, and display 10 query results starting from offset 5"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 5,10;\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 10 offset 5;\n")))),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SHOW, STREAM, LOAD\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);