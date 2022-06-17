(window.webpackJsonp=window.webpackJsonp||[]).push([[3309],{3937:function(s,a,t){"use strict";t.r(a);var e=t(15),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"delete"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[s._v("#")]),s._v(" DELETE")]),s._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),t("p",[s._v("DELETE")]),s._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),t("p",[s._v("该语句用于按条件删除指定 table（base index） partition 中的数据。")]),s._v(" "),t("p",[s._v("该操作会同时删除和此 base index 相关的 rollup index 的数据。")]),s._v(" "),t("p",[s._v("语法：")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" partition_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" PARTITIONS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\ncolumn_name1 op { "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" value_list } "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" column_name2 op { "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("value")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" value_list } "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[s._v("op 的可选类型包括：=, >, <, >=, <=, !=, in, not in")]),s._v(" "),t("li",[s._v("只能指定 key 列上的条件。")]),s._v(" "),t("li",[s._v("当选定的 key 列不存在于某个 rollup 中时，无法进行 delete。")]),s._v(" "),t("li",[s._v("条件之间只能是“与”的关系。若希望达成“或”的关系，需要将条件分写在两个 DELETE 语句中。")]),s._v(" "),t("li",[s._v("如果为分区表，可以指定分区，如不指定，且会话变量 delete_without_partition 为 true，则会应用到所有分区。如果是单分区表，可以不指定。")])]),s._v(" "),t("p",[s._v("注意：")]),s._v(" "),t("ol",[t("li",[s._v("该语句可能会降低执行后一段时间内的查询效率。")]),s._v(" "),t("li",[s._v("影响程度取决于语句中指定的删除条件的数量。")]),s._v(" "),t("li",[s._v("指定的条件越多，影响越大。")])]),s._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("删除 my_table partition p1 中 k1 列值为 3 的数据行")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p1\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v('删除 my_table partition p1 中 k1 列值大于等于 3 且 k2 列值为 "abc" 的数据行')]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my_table "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" p1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v('删除 my_table partition p1, p2 中 k1 列值大于等于 3 且 k2 列值为 "abc" 的数据行')]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" my_table PARTITIONS "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" p2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" k1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" k2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[s._v("DELETE\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);a.default=r.exports}}]);