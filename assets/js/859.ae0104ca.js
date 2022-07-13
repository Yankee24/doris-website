(window.webpackJsonp=window.webpackJsonp||[]).push([[859],{1485:function(a,s,r){"use strict";r.r(s);var t=r(15),e=Object(t.a)({},(function(){var a=this,s=a.$createElement,r=a._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"array-contains"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#array-contains"}},[a._v("#")]),a._v(" array_contains")]),a._v(" "),r("h3",{attrs:{id:"description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),r("h4",{attrs:{id:"syntax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),r("p",[r("code",[a._v("BOOLEAN array_contains(ARRAY<T> arr, T value)")])]),a._v(" "),r("p",[a._v("判断数组中是否包含value。返回结果如下：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("1    - value在数组arr中存在；\n0    - value不存在数组arr中；\nNULL - arr为NULL时。\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br")])]),r("h3",{attrs:{id:"notice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[a._v("#")]),a._v(" notice")]),a._v(" "),r("p",[r("code",[a._v("仅支持向量化引擎中使用")])]),a._v(" "),r("h3",{attrs:{id:"example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("mysql> set enable_vectorized_engine=true;\n\nmysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br"),r("span",{staticClass:"line-number"},[a._v("6")]),r("br"),r("span",{staticClass:"line-number"},[a._v("7")]),r("br"),r("span",{staticClass:"line-number"},[a._v("8")]),r("br"),r("span",{staticClass:"line-number"},[a._v("9")]),r("br"),r("span",{staticClass:"line-number"},[a._v("10")]),r("br"),r("span",{staticClass:"line-number"},[a._v("11")]),r("br")])]),r("h3",{attrs:{id:"keywords"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),r("p",[a._v("ARRAY,CONTAIN,CONTAINS,ARRAY_CONTAINS")])])}),[],!1,null,null,null);s.default=e.exports}}]);