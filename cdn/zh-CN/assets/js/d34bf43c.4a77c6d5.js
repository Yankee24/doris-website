"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[54075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>s});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),N=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=N(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=N(a),s=l,u=k["".concat(o,".").concat(s)]||k[s]||c[s]||r;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var N=2;N<r;N++)p[N]=a[N];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7590:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>N});var n=a(87462),l=(a(67294),a(3905));const r={title:"SELECT",language:"zh-CN"},p=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",id:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",title:"SELECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT.md",sourceDirName:"sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/SELECT",draft:!1,tags:[],version:"current",frontMatter:{title:"SELECT",language:"zh-CN"},sidebar:"docs",previous:{title:"UPDATE",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE"},next:{title:"EXPORT",permalink:"/zh-CN/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/EXPORT"}},o={},N=[{value:"SELECT",id:"select",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:N};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"select"},"SELECT"),(0,l.kt)("h3",{id:"name"},"Name"),(0,l.kt)("p",null,"SELECT"),(0,l.kt)("h3",{id:"description"},"description"),(0,l.kt)("p",null,"\u4e3b\u8981\u4ecb\u7ecdSelect\u8bed\u6cd5\u4f7f\u7528"),(0,l.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    [ALL | DISTINCT | DISTINCTROW ]\n    select_expr [, select_expr ...]\n    [FROM table_references\n      [PARTITION partition_list]\n    [WHERE where_condition]\n    [GROUP BY {col_name | expr | position}\n      [ASC | DESC], ... [WITH ROLLUP]]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [INTO OUTFILE 'file_name']\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\u8bf4\u660e\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"select_expr, ...  \u68c0\u7d22\u5e76\u5728\u7ed3\u679c\u4e2d\u663e\u793a\u7684\u5217\uff0c\u4f7f\u7528\u522b\u540d\u65f6\uff0cas\u4e3a\u81ea\u9009\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"select_expr, ...  \u68c0\u7d22\u7684\u76ee\u6807\u8868\uff08\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8868\uff08\u5305\u62ec\u5b50\u67e5\u8be2\u4ea7\u751f\u7684\u4e34\u65f6\u8868\uff09")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"where_definition \u68c0\u7d22\u6761\u4ef6\uff08\u8868\u8fbe\u5f0f\uff09\uff0c\u5982\u679c\u5b58\u5728WHERE\u5b50\u53e5\uff0c\u5176\u4e2d\u7684\u6761\u4ef6\u5bf9\u884c\u6570\u636e\u8fdb\u884c\u7b5b\u9009\u3002where_condition\u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u5bf9\u4e8e\u8981\u9009\u62e9\u7684\u6bcf\u4e00\u884c\uff0c\u5176\u8ba1\u7b97\u7ed3\u679c\u4e3atrue\u3002\u5982\u679c\u6ca1\u6709WHERE\u5b50\u53e5\uff0c\u8be5\u8bed\u53e5\u5c06\u9009\u62e9\u6240\u6709\u884c\u3002\u5728WHERE\u8868\u8fbe\u5f0f\u4e2d\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u9664\u805a\u5408\u51fd\u6570\u4e4b\u5916\u7684\u4efb\u4f55MySQL\u652f\u6301\u7684\u51fd\u6570\u548c\u8fd0\u7b97\u7b26")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ALL | DISTINCT ")," \uff1a\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u5237\u9009\uff0call \u4e3a\u5168\u90e8\uff0cdistinct/distinctrow \u5c06\u5237\u9009\u51fa\u91cd\u590d\u5217\uff0c\u9ed8\u8ba4\u4e3aall")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE 'file_name' ")," \uff1a\u4fdd\u5b58\u7ed3\u679c\u81f3\u65b0\u6587\u4ef6\uff08\u4e4b\u524d\u4e0d\u5b58\u5728\uff09\u4e2d\uff0c\u533a\u522b\u5728\u4e8e\u4fdd\u5b58\u7684\u683c\u5f0f\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Group [asc/desc]by having"),"\uff1a\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u5206\u7ec4\uff0chaving \u51fa\u73b0\u5219\u5bf9 group by \u7684\u7ed3\u679c\u8fdb\u884c\u5237\u9009\uff0c")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Order by "),": \u5bf9\u6700\u540e\u7684\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\uff0cOrder by \u901a\u8fc7\u6bd4\u8f83\u4e00\u5217\u6216\u8005\u591a\u5217\u7684\u5927\u5c0f\u6765\u5bf9\u7ed3\u679c\u96c6\u8fdb\u884c\u6392\u5e8f\u3002"),(0,l.kt)("p",{parentName:"li"},"Order by \u662f\u6bd4\u8f83\u8017\u65f6\u8017\u8d44\u6e90\u7684\u64cd\u4f5c\uff0c\u56e0\u4e3a\u6240\u6709\u6570\u636e\u90fd\u9700\u8981\u53d1\u9001\u5230 1 \u4e2a\u8282\u70b9\u540e\u624d\u80fd\u6392\u5e8f\uff0c\u6392\u5e8f\u64cd\u4f5c\u76f8\u6bd4\u4e0d\u6392\u5e8f\u64cd\u4f5c\u9700\u8981\u66f4\u591a\u7684\u5185\u5b58\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u9700\u8981\u8fd4\u56de\u524d N \u4e2a\u6392\u5e8f\u7ed3\u679c\uff0c\u9700\u8981\u4f7f\u7528 LIMIT \u4ece\u53e5\uff1b\u4e3a\u4e86\u9650\u5236\u5185\u5b58\u7684\u4f7f\u7528\uff0c\u5982\u679c\u7528\u6237\u6ca1\u6709\u6307\u5b9a LIMIT \u4ece\u53e5\uff0c\u5219\u9ed8\u8ba4\u8fd4\u56de\u524d 65535 \u4e2a\u6392\u5e8f\u7ed3\u679c\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Limit n"),": \u9650\u5236\u8f93\u51fa\u7ed3\u679c\u4e2d\u7684\u884c\u6570\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"limit m,n")," \u8868\u793a\u4ece\u7b2cm\u884c\u5f00\u59cb\u8f93\u51fan\u6761\u8bb0\u5f55\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Having")," \u4ece\u53e5\u4e0d\u662f\u8fc7\u6ee4\u8868\u4e2d\u7684\u884c\u6570\u636e\uff0c\u800c\u662f\u8fc7\u6ee4\u805a\u5408\u51fd\u6570\u4ea7\u51fa\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",{parentName:"li"},"\u901a\u5e38\u6765\u8bf4 ",(0,l.kt)("inlineCode",{parentName:"p"},"having")," \u8981\u548c\u805a\u5408\u51fd\u6570\uff08\u4f8b\u5982 :",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT(), SUM(), AVG(), MIN(), MAX()"),"\uff09\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"group by")," \u4ece\u53e5\u4e00\u8d77\u4f7f\u7528\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"SELECT \u652f\u6301\u4f7f\u7528 PARTITION \u663e\u5f0f\u5206\u533a\u9009\u62e9\uff0c\u5176\u4e2d\u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"table_reference")," \u4e2d\u8868\u7684\u540d\u79f0\u540e\u9762\u7684\u5206\u533a\u6216\u5b50\u5206\u533a\uff08\u6216\u4e24\u8005\uff09\u5217\u8868"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bed\u6cd5\u7ea6\u675f\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"SELECT\u4e5f\u53ef\u7528\u4e8e\u68c0\u7d22\u8ba1\u7b97\u7684\u884c\u800c\u4e0d\u5f15\u7528\u4efb\u4f55\u8868\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6240\u6709\u7684\u5b57\u53e5\u5fc5\u987b\u4e25\u683c\u5730\u6309\u7167\u4e0a\u9762\u683c\u5f0f\u6392\u5e8f\uff0c\u4e00\u4e2a HAVING \u5b50\u53e5\u5fc5\u987b\u4f4d\u4e8e GROUP BY \u5b50\u53e5\u4e4b\u540e\uff0c\u5e76\u4f4d\u4e8e ORDER BY \u5b50\u53e5\u4e4b\u524d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u522b\u540d\u5173\u952e\u8bcd AS \u81ea\u9009\u3002\u522b\u540d\u53ef\u7528\u4e8e group by\uff0corder by \u548c having"),(0,l.kt)("li",{parentName:"ol"},"Where \u5b50\u53e5\uff1a\u6267\u884c WHERE \u8bed\u53e5\u4ee5\u786e\u5b9a\u54ea\u4e9b\u884c\u5e94\u88ab\u5305\u542b\u5728 GROUP BY \u90e8\u5206\u4e2d\uff0c\u800c HAVING \u7528\u4e8e\u786e\u5b9a\u5e94\u4f7f\u7528\u7ed3\u679c\u96c6\u4e2d\u7684\u54ea\u4e9b\u884c\u3002"),(0,l.kt)("li",{parentName:"ol"},"HAVING \u5b50\u53e5\u53ef\u4ee5\u5f15\u7528\u603b\u8ba1\u51fd\u6570\uff0c\u800cWHERE\u5b50\u53e5\u4e0d\u80fd\u5f15\u7528,\u5982 count,sum,max,min,avg\uff0c\u540c\u65f6\uff0cwhere \u5b50\u53e5\u53ef\u4ee5\u5f15\u7528\u9664\u603b\u8ba1\u51fd\u6570\u5916\u7684\u5176\u4ed6\u51fd\u6570\u3002Where \u5b50\u53e5\u4e2d\u4e0d\u80fd\u4f7f\u7528\u5217\u522b\u540d\u6765\u5b9a\u4e49\u6761\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},"Group by \u540e\u8ddf with rollup \u53ef\u4ee5\u5bf9\u7ed3\u679c\u8fdb\u884c\u4e00\u6b21\u6216\u8005\u591a\u6b21\u7edf\u8ba1\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8054\u63a5\u67e5\u8be2\uff1a")),(0,l.kt)("p",null,"Doris \u652f\u6301\u4e00\u4e0bJOIN\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"JION\ntable_references:\n    table_reference [, table_reference] \u2026\ntable_reference:\n    table_factor\n  | join_table\ntable_factor:\n    tbl_name [[AS] alias]\n        [{USE|IGNORE|FORCE} INDEX (key_list)]\n  | ( table_references )\n  | { OJ table_reference LEFT OUTER JOIN table_reference\n        ON conditional_expr }\njoin_table:\n    table_reference [INNER | CROSS] JOIN table_factor [join_condition]\n  | table_reference STRAIGHT_JOIN table_factor\n  | table_reference STRAIGHT_JOIN table_factor ON condition\n  | table_reference LEFT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [LEFT [OUTER]] JOIN table_factor\n  | table_reference RIGHT [OUTER] JOIN table_reference join_condition\n  | table_reference NATURAL [RIGHT [OUTER]] JOIN table_factor\njoin_condition:\n    ON conditional_expr\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"UNION\u8bed\u6cd5\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ...\nUNION [ALL| DISTINCT] SELECT ......\n[UNION [ALL| DISTINCT] SELECT ...]\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION")," \u7528\u4e8e\u5c06\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5 \u7684\u7ed3\u679c\u7ec4\u5408 \u5230\u5355\u4e2a\u7ed3\u679c\u96c6\u4e2d\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u4e2d\u7684\u5217\u540d\u79f0\u7528\u4f5c\u8fd4\u56de\u7ed3\u679c\u7684\u5217\u540d\u79f0\u3002 \u5728\u6bcf\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u8bed\u53e5\u7684 \u76f8\u5e94\u4f4d\u7f6e\u5217\u51fa\u7684\u9009\u5b9a\u5217 \u5e94\u5177\u6709\u76f8\u540c\u7684\u6570\u636e\u7c7b\u578b\u3002 \uff08\u4f8b\u5982\uff0c\u7b2c\u4e00\u4e2a\u8bed\u53e5\u9009\u62e9\u7684\u7b2c\u4e00\u5217\u5e94\u8be5\u4e0e\u5176\u4ed6\u8bed\u53e5\u9009\u62e9\u7684\u7b2c\u4e00\u5217\u5177\u6709\u76f8\u540c\u7684\u7c7b\u578b\u3002\uff09"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u884c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"UNION"),"\u662f\u4ece\u7ed3\u679c\u4e2d\u5220\u9664\u91cd\u590d\u7684\u884c\u3002 \u53ef\u9009 ",(0,l.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u5173\u952e\u5b57\u9664\u4e86\u9ed8\u8ba4\u503c\u4e4b\u5916\u6ca1\u6709\u4efb\u4f55\u6548\u679c\uff0c\u56e0\u4e3a\u5b83\u8fd8\u6307\u5b9a\u4e86\u91cd\u590d\u884c\u5220\u9664\u3002 \u4f7f\u7528\u53ef\u9009 ",(0,l.kt)("inlineCode",{parentName:"p"},"ALL")," \u5173\u952e\u5b57\uff0c\u4e0d\u4f1a\u53d1\u751f\u91cd\u590d\u884c\u5220\u9664\uff0c\u7ed3\u679c\u5305\u62ec\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u8bed\u53e5\u4e2d\u7684 \u6240\u6709\u5339\u914d\u884c "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"WITH\u8bed\u53e5"),"\uff1a"),(0,l.kt)("p",null,"\u8981\u6307\u5b9a\u516c\u7528\u8868\u8868\u8fbe\u5f0f\uff0c\u8bf7\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," \u5177\u6709\u4e00\u4e2a\u6216\u591a\u4e2a\u9017\u53f7\u5206\u9694\u5b50\u53e5\u7684\u5b50\u53e5\u3002 \u6bcf\u4e2a\u5b50\u6761\u6b3e\u90fd\u63d0\u4f9b\u4e00\u4e2a\u5b50\u67e5\u8be2\uff0c\u7528\u4e8e\u751f\u6210\u7ed3\u679c\u96c6\uff0c\u5e76\u5c06\u540d\u79f0\u4e0e\u5b50\u67e5\u8be2\u76f8\u5173\u8054\u3002 \u4e0b\u9762\u7684\u793a\u4f8b\u5b9a\u4e49\u540d\u4e3a\u7684CTE ",(0,l.kt)("inlineCode",{parentName:"p"},"cte1")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"cte2")," \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," \u5b50\u53e5\uff0c\u5e76\u4e14\u662f\u6307\u5728\u5b83\u4eec\u7684\u9876\u5c42 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4e0b\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH")," \u5b50\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n  cte1 AS\uff08SELECT a\uff0cb FROM table1\uff09\uff0c\n  cte2 AS\uff08SELECT c\uff0cd FROM table2\uff09\nSELECT b\uff0cd FROM cte1 JOIN cte2\nWHERE cte1.a = cte2.c;\n")),(0,l.kt)("p",null,"\u5728\u5305\u542b\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"WITH"),"\u5b50\u53e5 \u7684\u8bed\u53e5\u4e2d \uff0c\u53ef\u4ee5\u5f15\u7528\u6bcf\u4e2a CTE \u540d\u79f0\u4ee5\u8bbf\u95ee\u76f8\u5e94\u7684 CTE \u7ed3\u679c\u96c6\u3002"),(0,l.kt)("p",null,"CTE \u540d\u79f0\u53ef\u4ee5\u5728\u5176\u4ed6 CTE \u4e2d\u5f15\u7528\uff0c\u4ece\u800c\u53ef\u4ee5\u57fa\u4e8e\u5176\u4ed6 CTE \u5b9a\u4e49 CTE\u3002"),(0,l.kt)("p",null,"CTE \u53ef\u4ee5\u5f15\u7528\u81ea\u8eab\u6765\u5b9a\u4e49\u9012\u5f52 CTE \u3002 \u9012\u5f52 CTE \u7684\u5e38\u89c1\u5e94\u7528\u5305\u62ec\u5206\u5c42\u6216\u6811\u72b6\u7ed3\u6784\u6570\u636e\u7684\u5e8f\u5217\u751f\u6210\u548c\u904d\u5386\u3002"),(0,l.kt)("h3",{id:"example"},"example"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u67e5\u8be2\u5e74\u9f84\u5206\u522b\u662f 18,20,25 \u7684\u5b66\u751f\u59d3\u540d"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select Name from student where age in (18,20,25);\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"GROUP BY \u793a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u8be2tb_book\u8868\uff0c\u6309\u7167type\u5206\u7ec4\uff0c\u6c42\u6bcf\u7c7b\u56fe\u4e66\u7684\u5e73\u5747\u4ef7\u683c,\nselect type,avg(price) from tb_book group by type;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"DISTINCT \u4f7f\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"--\u67e5\u8be2tb_book\u8868\uff0c\u9664\u53bb\u91cd\u590d\u7684type\u6570\u636e\nselect distinct type from tb_book;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"ORDER BY \u793a\u4f8b"),(0,l.kt)("p",{parentName:"li"},"\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u5347\u5e8f\uff08\u9ed8\u8ba4\uff09\u6216\u964d\u5e8f\uff08DESC\uff09\u6392\u5217\u3002\u5347\u5e8fNULL\u5728\u6700\u524d\u9762\uff0c\u964d\u5e8fNULL\u5728\u6700\u540e\u9762"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--\u67e5\u8be2tb_book\u8868\u4e2d\u7684\u6240\u6709\u8bb0\u5f55\uff0c\u6309\u7167id\u964d\u5e8f\u6392\u5217\uff0c\u663e\u793a\u4e09\u6761\u8bb0\u5f55\nselect * from tb_book order by id desc limit 3;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"LIKE\u6a21\u7cca\u67e5\u8be2"),(0,l.kt)("p",{parentName:"li"},"\u53ef\u5b9e\u73b0\u6a21\u7cca\u67e5\u8be2\uff0c\u5b83\u6709\u4e24\u79cd\u901a\u914d\u7b26\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"%"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"_"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"%"),"\u53ef\u4ee5\u5339\u914d\u4e00\u4e2a\u6216\u591a\u4e2a\u5b57\u7b26\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"_"),"\u53ef\u4ee5\u5339\u914d\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"--\u67e5\u627e\u6240\u6709\u7b2c\u4e8c\u4e2a\u5b57\u7b26\u662fh\u7684\u56fe\u4e66\nselect * from tb_book where name like('_h%');\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"LIMIT\u9650\u5b9a\u7ed3\u679c\u884c\u6570"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"--1.\u964d\u5e8f\u663e\u793a3\u6761\u8bb0\u5f55\nselect * from tb_book order by price desc limit 3;\n\n--2.\u4eceid=1\u663e\u793a4\u6761\u8bb0\u5f55\nselect * from tb_book where id limit 1,4;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"CONCAT\u8054\u5408\u591a\u5217"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'--\u628aname\u548cprice\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684\u5b57\u7b26\u4e32\u8f93\u51fa\nselect id,concat(name,":",price) as info,type from tb_book;\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528\u51fd\u6570\u548c\u8868\u8fbe\u5f0f"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},'--\u8ba1\u7b97tb_book\u8868\u4e2d\u5404\u7c7b\u56fe\u4e66\u7684\u603b\u4ef7\u683c\nselect sum(price) as total,type from tb_book group by type;\n--price\u6253\u516b\u6298\nselect *,(price * 0.8) as "\u516b\u6298" from tb_book;\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"UNION \u793a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a FROM t1 WHERE a = 10 AND B = 1 ORDER by LIMIT 10\nUNION\nSELECT a FROM t2 WHERE a = 11 AND B = 2 ORDER by LIMIT 10;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"WITH \u5b50\u53e5\u793a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"WITH cte AS\n(\n  SELECT 1 AS col1, 2 AS col2\n  UNION ALL\n  SELECT 3, 4\n)\nSELECT col1, col2 FROM cte;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"JOIN \u793a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t1 LEFT JOIN (t2, t3, t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n")),(0,l.kt)("p",{parentName:"li"},"\u7b49\u540c\u4e8e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM t1 LEFT JOIN (t2 CROSS JOIN t3 CROSS JOIN t4)\n                 ON (t2.a = t1.a AND t3.b = t1.b AND t4.c = t1.c)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"INNER JOIN"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT t1.name, t2.salary\n  FROM employee AS t1 INNER JOIN info AS t2 ON t1.name = t2.name;\n\nSELECT t1.name, t2.salary\n  FROM employee t1 INNER JOIN info t2 ON t1.name = t2.name;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"LEFT JOIN"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT left_tbl.*\n  FROM left_tbl LEFT JOIN right_tbl ON left_tbl.id = right_tbl.id\n  WHERE right_tbl.id IS NULL;\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"RIGHT JOIN"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT * FROM t1 RIGHT JOIN t2 ON (t1.a = t2.a);\n+------+------+------+------+\n| a    | b    | a    | c    |\n+------+------+------+------+\n|    2 | y    |    2 | z    |\n| NULL | NULL |    3 | w    |\n+------+------+------+------+\n")))),(0,l.kt)("h3",{id:"keywords"},"keywords"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT\n")),(0,l.kt)("h3",{id:"best-practice"},"Best Practice"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5173\u4e8eSELECT\u5b50\u53e5\u7684\u4e00\u4e9b\u9644\u52a0\u77e5\u8bc6"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528AS alias_name\u4e3aselect_expr\u6307\u5b9a\u522b\u540d\u3002\u522b\u540d\u7528\u4f5c\u8868\u8fbe\u5f0f\u7684\u5217\u540d\uff0c\u53ef\u7528\u4e8eGROUP BY\uff0cORDER BY\u6216HAVING\u5b50\u53e5\u3002AS\u5173\u952e\u5b57\u662f\u5728\u6307\u5b9a\u5217\u7684\u522b\u540d\u65f6\u517b\u6210\u4f7f\u7528AS\u662f\u4e00\u79cd\u597d\u4e60\u60ef\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"FROM\u540e\u7684table_references\u6307\u793a\u53c2\u4e0e\u67e5\u8be2\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u8868\u3002\u5982\u679c\u5217\u51fa\u4e86\u591a\u4e2a\u8868\uff0c\u5c31\u4f1a\u6267\u884cJOIN\u64cd\u4f5c\u3002\u800c\u5bf9\u4e8e\u6bcf\u4e00\u4e2a\u6307\u5b9a\u8868\uff0c\u90fd\u53ef\u4ee5\u4e3a\u5176\u5b9a\u4e49\u522b\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SELECT\u540e\u88ab\u9009\u62e9\u7684\u5217\uff0c\u53ef\u4ee5\u5728ORDER IN\u548cGROUP BY\u4e2d\uff0c\u901a\u8fc7\u5217\u540d\u3001\u5217\u522b\u540d\u6216\u8005\u4ee3\u8868\u5217\u4f4d\u7f6e\u7684\u6574\u6570\uff08\u4ece1\u5f00\u59cb\uff09\u6765\u5f15\u7528"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT college, region, seed FROM tournament\n  ORDER BY region, seed;\n\nSELECT college, region AS r, seed AS s FROM tournament\n  ORDER BY r, s;\n\nSELECT college, region, seed FROM tournament\n  ORDER BY 2, 3;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679cORDER BY\u51fa\u73b0\u5728\u5b50\u67e5\u8be2\u4e2d\uff0c\u5e76\u4e14\u4e5f\u5e94\u7528\u4e8e\u5916\u90e8\u67e5\u8be2\uff0c\u5219\u6700\u5916\u5c42\u7684ORDER BY\u4f18\u5148\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528\u4e86GROUP BY\uff0c\u88ab\u5206\u7ec4\u7684\u5217\u4f1a\u81ea\u52a8\u6309\u5347\u5e8f\u6392\u5217\uff08\u5c31\u597d\u50cf\u6709\u4e00\u4e2aORDER BY\u8bed\u53e5\u540e\u9762\u8ddf\u4e86\u540c\u6837\u7684\u5217\uff09\u3002\u5982\u679c\u8981\u907f\u514dGROUP BY\u56e0\u4e3a\u81ea\u52a8\u6392\u5e8f\u751f\u6210\u7684\u5f00\u9500\uff0c\u6dfb\u52a0ORDER BY NULL\u53ef\u4ee5\u89e3\u51b3\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a, COUNT(b) FROM test_table GROUP BY a ORDER BY NULL;\n")))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u4f7f\u7528ORDER BY\u6216GROUP BY\u5bf9SELECT\u4e2d\u7684\u5217\u8fdb\u884c\u6392\u5e8f\u65f6\uff0c\u670d\u52a1\u5668\u4ec5\u4f7f\u7528max_sort_length\u7cfb\u7edf\u53d8\u91cf\u6307\u793a\u7684\u521d\u59cb\u5b57\u8282\u6570\u5bf9\u503c\u8fdb\u884c\u6392\u5e8f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Having\u5b50\u53e5\u4e00\u822c\u5e94\u7528\u5728\u6700\u540e\uff0c\u6070\u597d\u5728\u7ed3\u679c\u96c6\u88ab\u8fd4\u56de\u7ed9MySQL\u5ba2\u6237\u7aef\u524d\uff0c\u4e14\u6ca1\u6709\u8fdb\u884c\u4f18\u5316\u3002\uff08\u800cLIMIT\u5e94\u7528\u5728HAVING\u540e\uff09"),(0,l.kt)("p",{parentName:"li"},"SQL\u6807\u51c6\u8981\u6c42\uff1aHAVING\u5fc5\u987b\u5f15\u7528\u5728GROUP BY\u5217\u8868\u4e2d\u6216\u8005\u805a\u5408\u51fd\u6570\u4f7f\u7528\u7684\u5217\u3002\u7136\u800c\uff0cMySQL\u5bf9\u6b64\u8fdb\u884c\u4e86\u6269\u5c55\uff0c\u5b83\u5141\u8bb8HAVING\u5f15\u7528Select\u5b50\u53e5\u5217\u8868\u4e2d\u7684\u5217\uff0c\u8fd8\u6709\u5916\u90e8\u5b50\u67e5\u8be2\u7684\u5217\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679cHAVING\u5f15\u7528\u7684\u5217\u5177\u6709\u6b67\u4e49\uff0c\u4f1a\u6709\u8b66\u544a\u4ea7\u751f\u3002\u4e0b\u9762\u7684\u8bed\u53e5\u4e2d\uff0ccol2\u5177\u6709\u6b67\u4e49\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COUNT(col1) AS col2 FROM t GROUP BY col2 HAVING col2 = 2;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5207\u8bb0\u4e0d\u8981\u5728\u8be5\u4f7f\u7528WHERE\u7684\u5730\u65b9\u4f7f\u7528HAVING\u3002HAVING\u662f\u548cGROUP BY\u642d\u914d\u7684\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"HAVING\u5b50\u53e5\u53ef\u4ee5\u5f15\u7528\u805a\u5408\u51fd\u6570\uff0c\u800cWHERE\u4e0d\u80fd\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT user, MAX(salary) FROM users\n  GROUP BY user HAVING MAX(salary) > 10;\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"LIMIT\u5b50\u53e5\u53ef\u7528\u4e8e\u7ea6\u675fSELECT\u8bed\u53e5\u8fd4\u56de\u7684\u884c\u6570\u3002LIMIT\u53ef\u4ee5\u6709\u4e00\u4e2a\u6216\u8005\u4e24\u4e2a\u53c2\u6570\uff0c\u90fd\u5fc5\u987b\u4e3a\u975e\u8d1f\u6574\u6570\u3002"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"/*\u53d6\u56de\u7ed3\u679c\u96c6\u4e2d\u76846~15\u884c*/\nSELECT * FROM tbl LIMIT 5,10;\n/*\u90a3\u5982\u679c\u8981\u53d6\u56de\u4e00\u4e2a\u8bbe\u5b9a\u67d0\u4e2a\u504f\u79fb\u91cf\u4e4b\u540e\u7684\u6240\u6709\u884c\uff0c\u53ef\u4ee5\u4e3a\u7b2c\u4e8c\u53c2\u6570\u8bbe\u5b9a\u4e00\u4e2a\u975e\u5e38\u5927\u7684\u5e38\u91cf\u3002\u4ee5\u4e0b\u67e5\u8be2\u53d6\u56de\u4ece\u7b2c96\u884c\u8d77\u7684\u6240\u6709\u6570\u636e*/\nSELECT * FROM tbl LIMIT 95,18446744073709551615;\n/*\u82e5LIMIT\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u5219\u53c2\u6570\u6307\u5b9a\u5e94\u8be5\u53d6\u56de\u7684\u884c\u6570\uff0c\u504f\u79fb\u91cf\u9ed8\u8ba4\u4e3a0\uff0c\u5373\u4ece\u7b2c\u4e00\u884c\u8d77*/\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SELECT...INTO\u53ef\u4ee5\u8ba9\u67e5\u8be2\u7ed3\u679c\u5199\u5165\u5230\u6587\u4ef6\u4e2d"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"SELECT\u5173\u952e\u5b57\u7684\u4fee\u9970\u7b26"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53bb\u91cd"),(0,l.kt)("p",{parentName:"li"},"ALL\u548cDISTINCT\u4fee\u9970\u7b26\u6307\u5b9a\u662f\u5426\u5bf9\u7ed3\u679c\u96c6\u4e2d\u7684\u884c\uff08\u5e94\u8be5\u4e0d\u662f\u67d0\u4e2a\u5217\uff09\u53bb\u91cd\u3002"),(0,l.kt)("p",{parentName:"li"},"ALL\u662f\u9ed8\u8ba4\u4fee\u9970\u7b26\uff0c\u5373\u6ee1\u8db3\u8981\u6c42\u7684\u6240\u6709\u884c\u90fd\u8981\u88ab\u53d6\u56de\u6765\u3002"),(0,l.kt)("p",{parentName:"li"},"DISTINCT\u5220\u9664\u91cd\u590d\u7684\u884c\u3002")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5b50\u67e5\u8be2\u7684\u4e3b\u8981\u4f18\u52bf"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b50\u67e5\u8be2\u5141\u8bb8\u7ed3\u6784\u5316\u7684\u67e5\u8be2\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u628a\u4e00\u4e2a\u8bed\u53e5\u7684\u6bcf\u4e2a\u90e8\u5206\u9694\u79bb\u5f00\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u4e9b\u64cd\u4f5c\u9700\u8981\u590d\u6742\u7684\u8054\u5408\u548c\u5173\u8054\u3002\u5b50\u67e5\u8be2\u63d0\u4f9b\u4e86\u5176\u5b83\u7684\u65b9\u6cd5\u6765\u6267\u884c\u8fd9\u4e9b\u64cd\u4f5c"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u52a0\u901f\u67e5\u8be2"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u5229\u7528Doris\u7684\u5206\u533a\u5206\u6876\u4f5c\u4e3a\u6570\u636e\u8fc7\u6ee4\u6761\u4ef6\uff0c\u51cf\u5c11\u6570\u636e\u626b\u63cf\u8303\u56f4"),(0,l.kt)("li",{parentName:"ul"},"\u5145\u5206\u5229\u7528Doris\u7684\u524d\u7f00\u7d22\u5f15\u5b57\u6bb5\u4f5c\u4e3a\u6570\u636e\u8fc7\u6ee4\u6761\u4ef6\u52a0\u901f\u67e5\u8be2\u901f\u5ea6"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"UNION"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u4f7f\u7528 union \u5173\u952e\u8bcd\u548c\u4f7f\u7528 union disitnct \u7684\u6548\u679c\u662f\u76f8\u540c\u7684\u3002\u7531\u4e8e\u53bb\u91cd\u5de5\u4f5c\u662f\u6bd4\u8f83\u8017\u8d39\u5185\u5b58\u7684\uff0c\u56e0\u6b64\u4f7f\u7528 union all \u64cd\u4f5c\u67e5\u8be2\u901f\u5ea6\u4f1a\u5feb\u4e9b\uff0c\u8017\u8d39\u5185\u5b58\u4f1a\u5c11\u4e9b\u3002\u5982\u679c\u7528\u6237\u60f3\u5bf9\u8fd4\u56de\u7ed3\u679c\u96c6\u8fdb\u884c order by \u548c limit \u64cd\u4f5c\uff0c\u9700\u8981\u5c06 union \u64cd\u4f5c\u653e\u5728\u5b50\u67e5\u8be2\u4e2d\uff0c\u7136\u540e select from subquery\uff0c\u6700\u540e\u628a subquery \u548c order by \u653e\u5728\u5b50\u67e5\u8be2\u5916\u9762\u3002")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select * from (select age from student_01 union all select age from student_02) as t1 \norder by age limit 4;\n\n+-------------+\n|     age     |\n+-------------+\n|      18     |\n|      19     |\n|      20     |\n|      21     |\n+-------------+\n4 rows in set (0.01 sec)\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"JOIN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5728 inner join \u6761\u4ef6\u91cc\u9664\u4e86\u652f\u6301\u7b49\u503c join\uff0c\u8fd8\u652f\u6301\u4e0d\u7b49\u503c join\uff0c\u4e3a\u4e86\u6027\u80fd\u8003\u8651\uff0c\u63a8\u8350\u4f7f\u7528\u7b49\u503c join\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5176\u5b83 join \u53ea\u652f\u6301\u7b49\u503c join")))))}c.isMDXComponent=!0}}]);