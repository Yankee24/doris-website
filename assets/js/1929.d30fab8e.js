(window.webpackJsonp=window.webpackJsonp||[]).push([[1929],{2556:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"bitmap-intersect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-intersect"}},[e._v("#")]),e._v(" bitmap_intersect")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("p",[e._v("Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios such as: calculating user retention rate.")]),e._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("p",[a("code",[e._v("BITMAP BITMAP_INTERSECT(BITMAP value)")])]),e._v(" "),a("p",[e._v("Enter a set of bitmap values, find the intersection of the set of bitmap values, and return.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("p",[e._v("Table schema")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Find the retention of users between 2020-05-18 and 2020-05-19 under different tags.\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Used in combination with the bitmap_to_string function to obtain the specific data of the intersection")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Who are the users retained under different tags between 2020-05-18 and 2020-05-19?\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" keywords")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("BITMAP_INTERSECT, BITMAP\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);