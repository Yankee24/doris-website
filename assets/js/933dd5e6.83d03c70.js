"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[9699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,d=c["".concat(o,".").concat(k)]||c[k]||p[k]||l;return a?n.createElement(d,i(i({ref:t},u),{},{components:a})):n.createElement(d,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},15370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={title:"CREATE-MATERIALIZED-VIEW",language:"en"},i=void 0,s={unversionedId:"sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",id:"version-dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",title:"CREATE-MATERIALIZED-VIEW",description:"\x3c!--",source:"@site/versioned_docs/version-dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md",sourceDirName:"sql-manual/sql-reference/Data-Definition-Statements/Create",slug:"/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",draft:!1,editUrl:"https://github.com/apache/doris/edit/master/docs/en/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW.md",tags:[],version:"dev",frontMatter:{title:"CREATE-MATERIALIZED-VIEW",language:"en"},sidebar:"docs",previous:{title:"CREATE-TABLE-LIKE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE-LIKE"},next:{title:"CREATE-EXTERNAL-TABLE",permalink:"/docs/dev/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-EXTERNAL-TABLE"}},o={},m=[{value:"CREATE-MATERIALIZED-VIEW",id:"create-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"create-materialized-view"},"CREATE-MATERIALIZED-VIEW"),(0,r.kt)("h3",{id:"name"},"Name"),(0,r.kt)("p",null,"CREATE MATERIALIZED VIEW"),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"This statement is used to create a materialized view."),(0,r.kt)("p",null,"This operation is an asynchronous operation. After the submission is successful, you need to view the job progress through ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"},"SHOW ALTER TABLE MATERIALIZED VIEW"),". After displaying FINISHED, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"desc [table_name] all")," command to view the schema of the materialized view."),(0,r.kt)("p",null,"grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE MATERIALIZED VIEW [MV name] as [query]\n[PROPERTIES ("key" = "value")]\n')),(0,r.kt)("p",null,"illustrate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MV name"),": The name of the materialized view, required. Materialized view names for the same table cannot be repeated.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"query"),": The query statement used to construct the materialized view, the result of the query statement is the data of the materialized view. Currently supported query formats are:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT select_expr[, select_expr ...]\nFROM [Base view name]\nGROUP BY column_name[, column_name ...]\nORDER BY column_name[, column_name ...]\n")),(0,r.kt)("p",{parentName:"li"},"The syntax is the same as the query syntax."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"select_expr"),": All columns in the schema of the materialized view.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Only supports single column without expression calculation, aggregate column."),(0,r.kt)("li",{parentName:"ul"},"The aggregate function currently only supports three types of SUM, MIN, and MAX, and the parameter of the aggregate function can only be a single column without expression calculation."),(0,r.kt)("li",{parentName:"ul"},"Contains at least one single column."),(0,r.kt)("li",{parentName:"ul"},"All involved columns can only appear once."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"base view name"),": The original table name of the materialized view, required.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Must be a single table and not a subquery"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"group by"),": The grouping column of the materialized view, optional.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If not filled, the data will not be grouped."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"order by"),": the sorting column of the materialized view, optional.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The declaration order of the sort column must be the same as the column declaration order in select_expr."),(0,r.kt)("li",{parentName:"ul"},"If order by is not declared, the sorting column is automatically supplemented according to the rules. If the materialized view is an aggregate type, all grouping columns are automatically supplemented as sort columns. If the materialized view is of a non-aggregate type, the first 36 bytes are automatically supplemented as the sort column."),(0,r.kt)("li",{parentName:"ul"},"If the number of auto-supplemented sorts is less than 3, the first three are used as the sort sequence. If query contains a grouping column, the sorting column must be the same as the grouping column."))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"properties"),(0,r.kt)("p",{parentName:"li"},"Declare some configuration of the materialized view, optional."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},'PROPERTIES ("key" = "value", "key" = "value" ...)\n')),(0,r.kt)("p",{parentName:"li"},"The following configurations can be declared here:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"}," short_key: The number of sorting columns.\n timeout: The timeout for materialized view construction.\n")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"Base table structure is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> desc duplicate_table;\n+-------+--------+------+------+---------+-------+\n| Field | Type | Null | Key | Default | Extra |\n+-------+--------+------+------+---------+-------+\n| k1 | INT | Yes | true | N/A | |\n| k2 | INT | Yes | true | N/A | |\n| k3 | BIGINT | Yes | true | N/A | |\n| k4 | BIGINT | Yes | true | N/A | |\n+-------+--------+------+------+---------+-------+\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'create table duplicate_table(\n    k1 int null,\n    k2 int null,\n    k3 bigint null,\n    k4 bigint null\n)\nduplicate key (k1,k2,k3,k4)\ndistributed BY hash(k4) buckets 3\nproperties("replication_num" = "1");\n')),(0,r.kt)("p",null,"attention\uff1aThe partition and distributed columns  must be key column in mv"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a materialized view that contains only the columns of the original table (k1, k2)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k1_k2 as\nselect k1, k2 from duplicate_table;\n")),(0,r.kt)("p",{parentName:"li"},"The schema of the materialized view is as follows, the materialized view contains only two columns k1, k2 without any aggregation"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------+ ---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------+ ---------+-------+\n| k1_k2 | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n+-------+-------+--------+------+------+ ---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a materialized view with k2 as the sort column"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k2_order as\nselect k2, k1 from duplicate_table order by k2;\n")),(0,r.kt)("p",{parentName:"li"},"The schema of the materialized view is shown in the figure below. The materialized view contains only two columns k2, k1, where k2 is the sorting column without any aggregation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k2_order | k2 | INT | Yes | true | N/A | |\n| | k1 | INT | Yes | false | N/A | NONE |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a materialized view with k1, k2 grouping and k3 column aggregated by SUM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view k1_k2_sumk3 as\nselect k1, k2, sum(k3) from duplicate_table group by k1, k2;\n")),(0,r.kt)("p",{parentName:"li"},"The schema of the materialized view is shown in the figure below. The materialized view contains two columns k1, k2, sum(k3) where k1, k2 are the grouping columns, and sum(k3) is the sum value of the k3 column grouped by k1, k2."),(0,r.kt)("p",{parentName:"li"},"Since the materialized view does not declare a sorting column, and the materialized view has aggregated data, the system defaults to supplement the grouping columns k1 and k2 as sorting columns."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k1_k2_sumk3 | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | false | N/A | SUM |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a materialized view that removes duplicate rows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view deduplicate as\nselect k1, k2, k3, k4 from duplicate_table group by k1, k2, k3, k4;\n")),(0,r.kt)("p",{parentName:"li"},"The materialized view schema is as shown below. The materialized view contains columns k1, k2, k3, and k4, and there are no duplicate rows."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| deduplicate | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | true | N/A | |\n| | k4 | BIGINT | Yes | true | N/A | |\n+-------+-------+--------+------+------- +---------+-------+\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a non-aggregate materialized view that does not declare a sort column"),(0,r.kt)("p",{parentName:"li"},"The schema of all_type_table is as follows"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"+-------+--------------+------+-------+---------+- ------+\n| Field | Type | Null | Key | Default | Extra |\n+-------+--------------+------+-------+---------+- ------+\n| k1 | TINYINT | Yes | true | N/A | |\n| k2 | SMALLINT | Yes | true | N/A | |\n| k3 | INT | Yes | true | N/A | |\n| k4 | BIGINT | Yes | true | N/A | |\n| k5 | DECIMAL(9,0) | Yes | true | N/A | |\n| k6 | DOUBLE | Yes | false | N/A | NONE |\n| k7 | VARCHAR(20) | Yes | false | N/A | NONE |\n+-------+--------------+------+-------+---------+- ------+\n")),(0,r.kt)("p",{parentName:"li"},"The materialized view contains k3, k4, k5, k6, k7 columns, and does not declare a sort column, the creation statement is as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create materialized view mv_1 as\nselect k3, k4, k5, k6, k7 from all_type_table;\n")),(0,r.kt)("p",{parentName:"li"},"The default added sorting column of the system is k3, k4, k5 three columns. The sum of the bytes of these three column types is 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36. So the addition is that these three columns are used as sorting columns. The schema of the materialized view is as follows, you can see that the key field of the k3, k4, k5 columns is true, that is, the sorting column. The key field of the k6, k7 columns is false, which is a non-sorted column."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"+----------------+-------+--------------+------+-- -----+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+--------------+------+-- -----+---------+-------+\n| mv_1 | k3 | INT | Yes | true | N/A | |\n| | k4 | BIGINT | Yes | true | N/A | |\n| | k5 | DECIMAL(9,0) | Yes | true | N/A | |\n| | k6 | DOUBLE | Yes | false | N/A | NONE |\n| | k7 | VARCHAR(20) | Yes | false | N/A | NONE |\n+----------------+-------+--------------+------+-- -----+---------+-------+\n")))),(0,r.kt)("h3",{id:"keywords"},"Keywords"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE, MATERIALIZED, VIEW\n")),(0,r.kt)("h3",{id:"best-practice"},"Best Practice"))}p.isMDXComponent=!0}}]);