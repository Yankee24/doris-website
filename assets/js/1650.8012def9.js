(window.webpackJsonp=window.webpackJsonp||[]).push([[1650],{2274:function(a,e,s){"use strict";s.r(e);var t=s(15),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"show-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-data"}},[a._v("#")]),a._v(" SHOW-DATA")]),a._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),s("p",[a._v("SHOW DATA")]),a._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),s("p",[a._v("This statement is used to display the amount of data, the number of replicas, and the number of statistical rows.")]),a._v(" "),s("p",[a._v("grammar:")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATA")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("table_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ORDER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("illustrate:")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("If the FROM clause is not specified, the data volume and number of replicas subdivided into each table under the current db will be displayed. The data volume is the total data volume of all replicas. The number of replicas is the number of replicas for all partitions of the table and all materialized views.")])]),a._v(" "),s("li",[s("p",[a._v("If the FROM clause is specified, the data volume, number of copies and number of statistical rows subdivided into each materialized view under the table will be displayed. The data volume is the total data volume of all replicas. The number of replicas is the number of replicas for all partitions of the corresponding materialized view. The number of statistical rows is the number of statistical rows for all partitions of the corresponding materialized view.")])]),a._v(" "),s("li",[s("p",[a._v("When counting the number of rows, the one with the largest number of rows among the multiple copies shall prevail.")])]),a._v(" "),s("li",[s("p",[a._v("The "),s("code",[a._v("Total")]),a._v(" row in the result set represents the total row. The "),s("code",[a._v("Quota")]),a._v(" line represents the quota set by the current database. The "),s("code",[a._v("Left")]),a._v(" line indicates the remaining quota.")])]),a._v(" "),s("li",[s("p",[a._v("If you want to see the size of each Partition, see "),s("code",[a._v("help show partitions")]),a._v(".")])]),a._v(" "),s("li",[s("p",[a._v("You can use ORDER BY to sort on any combination of columns.")])])]),a._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("Display the data volume, replica number, aggregate data volume and aggregate replica number of each table in the default db.")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| tbl1      | 900.000 B   | 6            |\n| tbl2      | 500.000 B   | 3            |\n| Total     | 1.400 KB    | 9            |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1021.921 GB | 1073741815   |\n+-----------+-------------+--------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("Display the subdivided data volume, the number of replicas and the number of statistical rows of the specified table under the specified db")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATA")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" example_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-----------+-----------+-----------+--------------+----------+\n| TableName | IndexName | Size      | ReplicaCount | RowCount |\n+-----------+-----------+-----------+--------------+----------+\n| test      | r1        | 10.000MB  | 30           | 10000    |\n|           | r2        | 20.000MB  | 30           | 20000    |\n|           | test2     | 50.000MB  | 30           | 50000    |\n|           | Total     | 80.000    | 90           |          |\n+-----------+-----------+-----------+--------------+----------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("It can be combined and sorted according to the amount of data, the number of copies, the number of statistical rows, etc.")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("DATA")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ORDER")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BY")]),a._v(" ReplicaCount "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("desc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("Size "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("asc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+-----------+-------------+--------------+\n| TableName | Size        | ReplicaCount |\n+-----------+-------------+--------------+\n| table_c   | 3.102 KB    | 40           |\n| table_d   | .000        | 20           |\n| table_b   | 324.000 B   | 20           |\n| table_a   | 1.266 KB    | 10           |\n| Total     | 4.684 KB    | 90           |\n| Quota     | 1024.000 GB | 1073741824   |\n| Left      | 1024.000 GB | 1073741734   |\n+-----------+-------------+--------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])])])]),a._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("SHOW, DATA\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);e.default=n.exports}}]);