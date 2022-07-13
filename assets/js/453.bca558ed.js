(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1078:function(t,e,a){"use strict";a.r(e);var s=a(15),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"alter-table-replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alter-table-replace"}},[t._v("#")]),t._v(" ALTER-TABLE-REPLACE")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("ALTER TABLE REPLACE")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("Atomic substitution of two tables. This operation applies only to OLAP tables.")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl2\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swap'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("Replace table tbl1 with table tbl2.")]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("swap")]),t._v(" parameter is "),a("code",[t._v("true")]),t._v(", the data in the table named "),a("code",[t._v("tbl1")]),t._v(" will be the data in the original table named "),a("code",[t._v("tbl2")]),t._v(" after the replacement. The data in the table named "),a("code",[t._v("tbl2")]),t._v(" is the data in the original "),a("code",[t._v("tbl1")]),t._v(" table. That is, two tables of data have been swapped.")]),t._v(" "),a("p",[t._v("If the "),a("code",[t._v("swap")]),t._v(" parameter is "),a("code",[t._v("false")]),t._v(", the data in the "),a("code",[t._v("tbl1")]),t._v(" table will be the data in the "),a("code",[t._v("tbl2")]),t._v(" table after the replacement. The table named "),a("code",[t._v("tbl2")]),t._v(" is deleted.")]),t._v(" "),a("h4",{attrs:{id:"theory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#theory"}},[t._v("#")]),t._v(" Theory")]),t._v(" "),a("p",[t._v("The replace table function actually turns the following set of operations into an atomic operation.")]),t._v(" "),a("p",[t._v("If you want to replace table A with table B and "),a("code",[t._v("swap")]),t._v(" is "),a("code",[t._v("true")]),t._v(", do the following:")]),t._v(" "),a("ol",[a("li",[t._v("Rename table B as table A.")]),t._v(" "),a("li",[t._v("Rename table A as table B.")])]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("swap")]),t._v(" is "),a("code",[t._v("false")]),t._v(", do as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Delete table A.")]),t._v(" "),a("li",[t._v("Rename table B as table A.")])]),t._v(" "),a("h4",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[t._v("#")]),t._v(" Notice")]),t._v(" "),a("ol",[a("li",[t._v("The default "),a("code",[t._v("swap")]),t._v(" parameter is "),a("code",[t._v("true")]),t._v(". That is, a table replacement operation is equivalent to an exchange of data between two tables.")]),t._v(" "),a("li",[t._v("If the "),a("code",[t._v("swap")]),t._v(" parameter is set to false, the replaced table (table A) will be deleted and cannot be restored.")]),t._v(" "),a("li",[t._v("The replacement operation can only occur between two OLAP tables and does not check whether the table structure of the two tables is consistent.")]),t._v(" "),a("li",[t._v("The original permission Settings are not changed. Because the permission check is based on the table name.")])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[t._v("Swap "),a("code",[t._v("tbl1")]),t._v(" with "),a("code",[t._v("tbl2")]),t._v(" without deleting the "),a("code",[t._v("tbl1")]),t._v(" table")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REPLACE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tbl2\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swap'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ALTER, TABLE, REPLACE, ALTER TABLE\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Atomic overlay write operations")]),t._v(" "),a("p",[t._v("In some cases, the user wants to be able to rewrite the data of a table, but if the deletion and then import method is used, the data cannot be viewed for a period of time. In this case, you can use the "),a("code",[t._v("CREATE TABLE LIKE")]),t._v(" statement to CREATE a new TABLE with the same structure. After importing the new data into the new TABLE, you can replace the old TABLE atomic to achieve the purpose.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);