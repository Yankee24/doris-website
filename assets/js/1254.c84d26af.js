(window.webpackJsonp=window.webpackJsonp||[]).push([[1254],{1879:function(e,t,a){"use strict";a.r(t);var o=a(15),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"replace-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#replace-table"}},[e._v("#")]),e._v(" Replace Table")]),e._v(" "),a("p",[e._v("In version 0.14, Doris supports atomic replacement of two tables.\nThis operation only applies to OLAP tables.")]),e._v(" "),a("p",[e._v("For partition level replacement operations, please refer to "),a("RouterLink",{attrs:{to:"/docs/advanced/partition/table-temp-partition.html"}},[e._v("Temporary Partition Document")])],1),e._v(" "),a("h2",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ALTER TABLE [db.]tbl1 REPLACE WITH tbl2\n[PROPERTIES('swap' = 'true')];\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Replace table "),a("code",[e._v("tbl1")]),e._v(" with table "),a("code",[e._v("tbl2")]),e._v(".")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("swap")]),e._v(" parameter is "),a("code",[e._v("true")]),e._v(", after replacement, the data in the table named "),a("code",[e._v("tbl1")]),e._v(" is the data in the original "),a("code",[e._v("tbl2")]),e._v(" table. The data in the table named "),a("code",[e._v("tbl2")]),e._v(" is the data in the original table "),a("code",[e._v("tbl1")]),e._v(". That is, the data of the two tables are interchanged.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("swap")]),e._v(" parameter is "),a("code",[e._v("false")]),e._v(", after replacement, the data in the table named "),a("code",[e._v("tbl1")]),e._v(" is the data in the original "),a("code",[e._v("tbl2")]),e._v(" table. The table named "),a("code",[e._v("tbl2")]),e._v(" is dropped.")]),e._v(" "),a("h2",{attrs:{id:"principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),a("p",[e._v("The replacement table function actually turns the following set of operations into an atomic operation.")]),e._v(" "),a("p",[e._v("Suppose you want to replace table A with table B, and "),a("code",[e._v("swap")]),e._v(" is "),a("code",[e._v("true")]),e._v(", the operation is as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Rename table B to table A.")]),e._v(" "),a("li",[e._v("Rename table A to table B.")])]),e._v(" "),a("p",[e._v("If "),a("code",[e._v("swap")]),e._v(" is "),a("code",[e._v("false")]),e._v(", the operation is as follows:")]),e._v(" "),a("ol",[a("li",[e._v("Drop table A.")]),e._v(" "),a("li",[e._v("Rename table B to table A.")])]),e._v(" "),a("h2",{attrs:{id:"notice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),a("ol",[a("li",[e._v("The "),a("code",[e._v("swap")]),e._v(" parameter defaults to "),a("code",[e._v("true")]),e._v(". That is, the replacement table operation is equivalent to the exchange of two table data.")]),e._v(" "),a("li",[e._v("If the "),a("code",[e._v("swap")]),e._v(" parameter is set to "),a("code",[e._v("false")]),e._v(", the replaced table (table A) will be dropped and cannot be recovered.")]),e._v(" "),a("li",[e._v("The replacement operation can only occur between two OLAP tables, and the table structure of the two tables is not checked for consistency.")]),e._v(" "),a("li",[e._v("The replacement operation will not change the original permission settings. Because the permission check is based on the table name.")])]),e._v(" "),a("h2",{attrs:{id:"best-practices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best Practices")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Atomic Overwrite Operation")]),e._v(" "),a("p",[e._v("In some cases, the user wants to be able to rewrite the data of a certain table, but if it is dropped and then imported, there will be a period of time in which the data cannot be viewed. At this time, the user can first use the "),a("code",[e._v("CREATE TABLE LIKE")]),e._v(" statement to create a new table with the same structure, import the new data into the new table, and replace the old table atomically through the replacement operation to achieve the goal. For partition level atomic overwrite operation, please refer to "),a("RouterLink",{attrs:{to:"/docs/advanced/partition/table-temp-partition.html"}},[e._v("Temporary partition document")])],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);