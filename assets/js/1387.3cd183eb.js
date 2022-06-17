(window.webpackJsonp=window.webpackJsonp||[]).push([[1387],{2012:function(t,s,e){"use strict";e.r(s);var n=e(15),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"intersect-count"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#intersect-count"}},[t._v("#")]),t._v(" intersect_count")]),t._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),e("p",[e("code",[t._v("BITMAP INTERSECT_COUNT(bitmap_column, column_to_filter, filter_values)")]),t._v("\nCalculate the intersection of two or more bitmaps\nUsage: intersect_count(bitmap_column_to_count, filter_column, filter_values ...)\nExample: intersect_count(user_id, event, 'A', 'B', 'C'), meaning find the intersect count of user_id in all A/B/C 3 bitmaps")]),t._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("MySQL [test_query_qa]> select dt,bitmap_to_string(user_id) from pv_bitmap where dt in (3,4);\n+------+-----------------------------+\n| dt   | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n|    4 | 1,2,3                       |\n|    3 | 1,2,3,4,5                   |\n+------+-----------------------------+\n2 rows in set (0.012 sec)\n\nMySQL [test_query_qa]> select intersect_count(user_id,dt,3,4) from pv_bitmap;\n+----------------------------------------+\n| intersect_count(`user_id`, `dt`, 3, 4) |\n+----------------------------------------+\n|                                      3 |\n+----------------------------------------+\n1 row in set (0.014 sec)\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" keywords")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("INTERSECT_COUNT,BITMAP\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);