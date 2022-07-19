(window.webpackJsonp=window.webpackJsonp||[]).push([[2008],{2635:function(s,a,n){"use strict";n.r(a);var t=n(15),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"conv"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conv"}},[s._v("#")]),s._v(" conv")]),s._v(" "),n("h3",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" description")]),s._v(" "),n("h4",{attrs:{id:"syntax"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),n("p",[n("code",[s._v("VARCHAR CONV(VARCHAR input, TINYINT from_base, TINYINT to_base)")]),s._v(" "),n("code",[s._v("VARCHAR CONV(BIGINT input, TINYINT from_base, TINYINT to_base)")]),s._v("\nConvert the input number to the target base. The input base range should be within "),n("code",[s._v("[2,36]")]),s._v(".")]),s._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("MySQL [test]> SELECT CONV(15,10,2);\n+-----------------+\n| conv(15, 10, 2) |\n+-----------------+\n| 1111            |\n+-----------------+\n\nMySQL [test]> SELECT CONV('ff',16,10);\n+--------------------+\n| conv('ff', 16, 10) |\n+--------------------+\n| 255                |\n+--------------------+\n\nMySQL [test]> SELECT CONV(230,10,16);\n+-------------------+\n| conv(230, 10, 16) |\n+-------------------+\n| E6                |\n+-------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h3",{attrs:{id:"keywords"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[s._v("CONV\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);