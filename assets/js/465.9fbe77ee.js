(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{1089:function(s,a,t){"use strict";t.r(a);var e=t(15),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"create-materialized-view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-materialized-view"}},[s._v("#")]),s._v(" CREATE-MATERIALIZED-VIEW")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("CREATE MATERIALIZED VIEW")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("This statement is used to create a materialized view.")]),s._v(" "),t("p",[s._v("This operation is an asynchronous operation. After the submission is successful, you need to view the job progress through "),t("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.html"}},[s._v("SHOW ALTER TABLE MATERIALIZED VIEW")]),s._v(". After displaying FINISHED, you can use the "),t("code",[s._v("desc [table_name] all")]),s._v(" command to view the schema of the materialized view.")],1),s._v(" "),t("p",[s._v("grammar:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" MATERIALIZED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MV name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("query"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("PROPERTIES "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"key"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("illustrate:")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("MV name")]),s._v(": The name of the materialized view, required. Materialized view names for the same table cannot be repeated.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("query")]),s._v(": The query statement used to construct the materialized view, the result of the query statement is the data of the materialized view. Currently supported query formats are:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" select_expr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" select_expr "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Base "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" column_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" column_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("The syntax is the same as the query syntax.")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("select_expr")]),s._v(": All columns in the schema of the materialized view.\n"),t("ul",[t("li",[s._v("Only supports single column without expression calculation, aggregate column.")]),s._v(" "),t("li",[s._v("The aggregate function currently only supports three types of SUM, MIN, and MAX, and the parameter of the aggregate function can only be a single column without expression calculation.")]),s._v(" "),t("li",[s._v("Contains at least one single column.")]),s._v(" "),t("li",[s._v("All involved columns can only appear once.")])])]),s._v(" "),t("li",[t("code",[s._v("base view name")]),s._v(": The original table name of the materialized view, required.\n"),t("ul",[t("li",[s._v("Must be a single table and not a subquery")])])]),s._v(" "),t("li",[t("code",[s._v("group by")]),s._v(": The grouping column of the materialized view, optional.\n"),t("ul",[t("li",[s._v("If not filled, the data will not be grouped.")])])]),s._v(" "),t("li",[t("code",[s._v("order by")]),s._v(": the sorting column of the materialized view, optional.\n"),t("ul",[t("li",[s._v("The declaration order of the sort column must be the same as the column declaration order in select_expr.")]),s._v(" "),t("li",[s._v("If order by is not declared, the sorting column is automatically supplemented according to the rules. If the materialized view is an aggregate type, all grouping columns are automatically supplemented as sort columns. If the materialized view is of a non-aggregate type, the first 36 bytes are automatically supplemented as the sort column.")]),s._v(" "),t("li",[s._v("If the number of auto-supplemented sorts is less than 3, the first three are used as the sort sequence. If query contains a grouping column, the sorting column must be the same as the grouping column.")])])])])]),s._v(" "),t("li",[t("p",[s._v("properties")]),s._v(" "),t("p",[s._v("Declare some configuration of the materialized view, optional.")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('PROPERTIES ("key" = "value", "key" = "value" ...)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("The following configurations can be declared here:")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" short_key: The number of sorting columns.\n timeout: The timeout for materialized view construction.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("p",[s._v("Base table structure is")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" duplicate_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+--------+------+------+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+--------+------+------+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+--------+------+------+---------+-------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("table")]),s._v(" duplicate_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n\tk1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tk2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tk3 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\tk4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("bigint")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("duplicate")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("k4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("distributed")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" buckets "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\nproperties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_num"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("attention：The partition and distributed columns  must be key column in mv")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("Create a materialized view that contains only the columns of the original table (k1, k2)")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" k1_k2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" duplicate_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The schema of the materialized view is as follows, the materialized view contains only two columns k1, k2 without any aggregation")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------+-------+--------+------+------+ ---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------+ ---------+-------+\n| k1_k2 | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n+-------+-------+--------+------+------+ ---------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a materialized view with k2 as the sort column")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" k2_order "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" duplicate_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The schema of the materialized view is shown in the figure below. The materialized view contains only two columns k2, k1, where k2 is the sorting column without any aggregation.")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k2_order | k2 | INT | Yes | true | N/A | |\n| | k1 | INT | Yes | false | N/A | NONE |\n+-------+-------+--------+------+------- +---------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a materialized view with k1, k2 grouping and k3 column aggregated by SUM")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" k1_k2_sumk3 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" duplicate_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The schema of the materialized view is shown in the figure below. The materialized view contains two columns k1, k2, sum(k3) where k1, k2 are the grouping columns, and sum(k3) is the sum value of the k3 column grouped by k1, k2.")]),s._v(" "),t("p",[s._v("Since the materialized view does not declare a sorting column, and the materialized view has aggregated data, the system defaults to supplement the grouping columns k1 and k2 as sorting columns.")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| k1_k2_sumk3 | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | false | N/A | SUM |\n+-------+-------+--------+------+------- +---------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a materialized view that removes duplicate rows")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" deduplicate "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k4 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" duplicate_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" k1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The materialized view schema is as shown below. The materialized view contains columns k1, k2, k3, and k4, and there are no duplicate rows.")]),s._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------+-------+--------+------+------- +---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+-------+-------+--------+------+------- +---------+-------+\n| deduplicate | k1 | INT | Yes | true | N/A | |\n| | k2 | INT | Yes | true | N/A | |\n| | k3 | BIGINT | Yes | true | N/A | |\n| | k4 | BIGINT | Yes | true | N/A | |\n+-------+-------+--------+------+------- +---------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Create a non-aggregate materialized view that does not declare a sort column")]),s._v(" "),t("p",[s._v("The schema of all_type_table is as follows")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------+--------------+------+-------+---------+- ------+\n| Field | Type | Null | Key | Default | Extra |\n+-------+--------------+------+-------+---------+- ------+\n| k1 | TINYINT | Yes | true | N/A | |\n| k2 | SMALLINT | Yes | true | N/A | |\n| k3 | INT | Yes | true | N/A | |\n| k4 | BIGINT | Yes | true | N/A | |\n| k5 | DECIMAL(9,0) | Yes | true | N/A | |\n| k6 | DOUBLE | Yes | false | N/A | NONE |\n| k7 | VARCHAR(20) | Yes | false | N/A | NONE |\n+-------+--------------+------+-------+---------+- ------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("The materialized view contains k3, k4, k5, k6, k7 columns, and does not declare a sort column, the creation statement is as follows:")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" materialized "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("view")]),s._v(" mv_1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" k3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k6"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k7 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" all_type_table"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("The default added sorting column of the system is k3, k4, k5 three columns. The sum of the bytes of these three column types is 4(INT) + 8(BIGINT) + 16(DECIMAL) = 28 < 36. So the addition is that these three columns are used as sorting columns. The schema of the materialized view is as follows, you can see that the key field of the k3, k4, k5 columns is true, that is, the sorting column. The key field of the k6, k7 columns is false, which is a non-sorted column.")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+--------------+------+-- -----+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" IndexName "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Field "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("Null")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Key")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Extra "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+--------------+------+-- -----+---------+-------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" mv_1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k4 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k5 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DECIMAL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k6 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" k7 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Yes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" N"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" NONE "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----------------+-------+--------------+------+-- -----+---------+-------+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("CREATE, MATERIALIZED, VIEW\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=n.exports}}]);