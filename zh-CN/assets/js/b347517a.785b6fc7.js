"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[14263],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>T});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=m(a),T=n,A=c["".concat(o,".").concat(T)]||c[T]||s[T]||r;return a?l.createElement(A,i(i({ref:t},u),{},{components:a})):l.createElement(A,i({ref:t},u))}));function T(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(87462),n=(a(67294),a(3905));const r={title:"ALTER-TABLE-PARTITION",language:"zh-CN"},i=void 0,p={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",title:"ALTER-TABLE-PARTITION",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION",draft:!1,tags:[],version:"dev",frontMatter:{title:"ALTER-TABLE-PARTITION",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-BITMAP",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-BITMAP"},next:{title:"ALTER-TABLE-COLUMN",permalink:"/zh-CN/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Alter/ALTER-TABLE-COLUMN"}},o={},m=[{value:"ALTER-TABLE-PARTITION",id:"alter-table-partition",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:m};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"alter-table-partition"},"ALTER-TABLE-PARTITION"),(0,n.kt)("h3",{id:"name"},"Name"),(0,n.kt)("p",null,"ALTER TABLE PARTITION"),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u7684 partition \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u64cd\u4f5c\u662f\u540c\u6b65\u7684\uff0c\u547d\u4ee4\u8fd4\u56de\u8868\u793a\u6267\u884c\u5b8c\u6bd5\u3002"),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,n.kt)("p",null,"partition \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u4fee\u6539\u65b9\u5f0f"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ADD PARTITION [IF NOT EXISTS] partition_name \npartition_desc ["key"="value"]\n[DISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num]]\n')),(0,n.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"partition_desc \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"VALUES LESS THAN ",'[MAXVALUE|("value1", ...)]'),(0,n.kt)("li",{parentName:"ul"},'VALUES [("value1", ...), ("value1", ...))'))),(0,n.kt)("li",{parentName:"ul"},"\u5206\u533a\u4e3a\u5de6\u95ed\u53f3\u5f00\u533a\u95f4\uff0c\u5982\u679c\u7528\u6237\u4ec5\u6307\u5b9a\u53f3\u8fb9\u754c\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u786e\u5b9a\u5de6\u8fb9\u754c"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5206\u6876\u65b9\u5f0f\uff0c\u5219\u81ea\u52a8\u4f7f\u7528\u5efa\u8868\u4f7f\u7528\u7684\u5206\u6876\u65b9\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u6307\u5b9a\u5206\u6876\u65b9\u5f0f\uff0c\u53ea\u80fd\u4fee\u6539\u5206\u6876\u6570\uff0c\u4e0d\u53ef\u4fee\u6539\u5206\u6876\u65b9\u5f0f\u6216\u5206\u6876\u5217"),(0,n.kt)("li",{parentName:"ul"},'["key"="value"]'," \u90e8\u5206\u53ef\u4ee5\u8bbe\u7f6e\u5206\u533a\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u5177\u4f53\u8bf4\u660e\u89c1 ",(0,n.kt)("a",{parentName:"li",href:"./sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE.md"},"CREATE TABLE")),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5efa\u8868\u65f6\u7528\u6237\u672a\u663e\u5f0f\u521b\u5efaPartition,\u5219\u4e0d\u652f\u6301\u901a\u8fc7ALTER\u7684\u65b9\u5f0f\u589e\u52a0\u5206\u533a")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5220\u9664\u5206\u533a")),(0,n.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"DROP PARTITION [IF EXISTS] partition_name [FORCE]\n")),(0,n.kt)("p",null," \u6ce8\u610f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5206\u533a\u65b9\u5f0f\u7684\u8868\u81f3\u5c11\u8981\u4fdd\u7559\u4e00\u4e2a\u5206\u533a\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c DROP PARTITION \u4e00\u6bb5\u65f6\u95f4\u5185\uff0c\u53ef\u4ee5\u901a\u8fc7 RECOVER \u8bed\u53e5\u6062\u590d\u88ab\u5220\u9664\u7684\u5206\u533a\u3002\u8be6\u89c1 SQL\u624b\u518c-\u6570\u636e\u5e93\u7ba1\u7406-RECOVER \u8bed\u53e5"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u6267\u884c DROP PARTITION FORCE\uff0c\u5219\u7cfb\u7edf\u4e0d\u4f1a\u68c0\u67e5\u8be5\u5206\u533a\u662f\u5426\u5b58\u5728\u672a\u5b8c\u6210\u7684\u4e8b\u52a1\uff0c\u5206\u533a\u5c06\u76f4\u63a5\u88ab\u5220\u9664\u5e76\u4e14\u4e0d\u80fd\u88ab\u6062\u590d\uff0c\u4e00\u822c\u4e0d\u5efa\u8bae\u6267\u884c\u6b64\u64cd\u4f5c")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u6539\u5206\u533a\u5c5e\u6027"),(0,n.kt)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'MODIFY PARTITION p1|(p1[, p2, ...]) SET ("key" = "value", ...)\n')),(0,n.kt)("p",null,"\u8bf4\u660e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5f53\u524d\u652f\u6301\u4fee\u6539\u5206\u533a\u7684\u4e0b\u5217\u5c5e\u6027\uff1a",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"storage_medium"),(0,n.kt)("li",{parentName:"ul"},"storage_cooldown_time"),(0,n.kt)("li",{parentName:"ul"},"replication_num "),(0,n.kt)("li",{parentName:"ul"},"in_memory"))),(0,n.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u5355\u5206\u533a\u8868\uff0cpartition_name \u540c\u8868\u540d\u3002")),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a, \u73b0\u6709\u5206\u533a [MIN, 2013-01-01)\uff0c\u589e\u52a0\u5206\u533a [2013-01-01, 2014-01-01)\uff0c\u4f7f\u7528\u9ed8\u8ba4\u5206\u6876\u65b9\u5f0f")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2014-01-01");\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a\uff0c\u4f7f\u7528\u65b0\u7684\u5206\u6876\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\nDISTRIBUTED BY HASH(k1) BUCKETS 20;\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u5206\u533a\uff0c\u4f7f\u7528\u65b0\u7684\u526f\u672c\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES LESS THAN ("2015-01-01")\n("replication_num"="1");\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u4fee\u6539\u5206\u533a\u526f\u672c\u6570")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION p1 SET("replication_num"="1");\n')),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u6279\u91cf\u4fee\u6539\u6307\u5b9a\u5206\u533a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (p1, p2, p4) SET("in_memory"="true");\n')),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u6279\u91cf\u4fee\u6539\u6240\u6709\u5206\u533a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nMODIFY PARTITION (*) SET("storage_medium"="HDD");\n')),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"\u5220\u9664\u5206\u533a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP PARTITION p1;\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"\u589e\u52a0\u4e00\u4e2a\u6307\u5b9a\u4e0a\u4e0b\u754c\u7684\u5206\u533a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD PARTITION p1 VALUES [("2014-01-01"), ("2014-02-01")); \n')),(0,n.kt)("h3",{id:"keywords"},"Keywords"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, PARTITION, ALTER TABLE\n")),(0,n.kt)("h3",{id:"best-practice"},"Best Practice"))}s.isMDXComponent=!0}}]);