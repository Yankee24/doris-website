(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1174:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"show-create-materialized-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-create-materialized-view"}},[a._v("#")]),a._v(" SHOW-CREATE-MATERIALIZED-VIEW")]),a._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[a._v("#")]),a._v(" Name")]),a._v(" "),e("p",[a._v("SHOW CREATE MATERIALIZED VIEW")]),a._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("p",[a._v("This statement is used to query statements that create materialized views.")]),a._v(" "),e("p",[a._v("grammar：")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" MATERIALIZED "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VIEW")]),a._v(" mv_name "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" table_name\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",[e("li",[e("p",[a._v("mv_name:\nMaterialized view name. required.")])]),a._v(" "),e("li",[e("p",[a._v("table_name:\nThe table name of materialized view. required.")])])]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),e("p",[a._v("Create materialized view")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" materialized "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("view")]),a._v(" id_col1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("col1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Return after query")]),a._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[a._v("mysql"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("show")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" materialized "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("view")]),a._v(" id_col1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("on")]),a._v(" table3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-----------+----------+----------------------------------------------------------------+")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" TableName "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" ViewName "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" CreateStmt                                                     "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-----------+----------+----------------------------------------------------------------+")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" table3    "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" id_col1  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" materialized "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("view")]),a._v(" id_col1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("as")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("col1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" table3 "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("-----------+----------+----------------------------------------------------------------+")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("row")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("in")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("set")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.00")]),a._v(" sec"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" Keywords")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[a._v("SHOW, MATERIALIZED, VIEW\n")])])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[a._v("#")]),a._v(" Best Practice")])])}),[],!1,null,null,null);s.default=r.exports}}]);