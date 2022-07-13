(window.webpackJsonp=window.webpackJsonp||[]).push([[855],{1481:function(a,e,s){"use strict";s.r(e);var t=s(15),n=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"topn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#topn"}},[a._v("#")]),a._v(" TOPN")]),a._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("p",[s("code",[a._v("topn(expr, INT top_num[, INT space_expand_rate])")])]),a._v(" "),s("p",[a._v("该topn函数使用Space-Saving算法计算expr中的top_num个频繁项，结果为频繁项及其出现次数，该结果为近似值")]),a._v(" "),s("p",[a._v("space_expand_rate参数是可选项，该值用来设置Space-Saving算法中使用的counter个数")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("counter numbers = top_num * space_expand_rate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("space_expand_rate的值越大，结果越准确，默认值为50")]),a._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("MySQL [test]> select topn(keyword,10) from keyword_table where date>= '2020-06-01' and date <= '2020-06-19' ;\n+------------------------------------------------------------------------------------------------------------+\n| topn(`keyword`, 10)                                                                                        |\n+------------------------------------------------------------------------------------------------------------+\n| a:157, b:138, c:133, d:133, e:131, f:127, g:124, h:122, i:117, k:117                                       |\n+------------------------------------------------------------------------------------------------------------+\n\nMySQL [test]> select date,topn(keyword,10,100) from keyword_table where date>= '2020-06-17' and date <= '2020-06-19' group by date;\n+------------+-----------------------------------------------------------------------------------------------+\n| date       | topn(`keyword`, 10, 100)                                                                      |\n+------------+-----------------------------------------------------------------------------------------------+\n| 2020-06-19 | a:11, b:8, c:8, d:7, e:7, f:7, g:7, h:7, i:7, j:7                                             |\n| 2020-06-18 | a:10, b:8, c:7, f:7, g:7, i:7, k:7, l:7, m:6, d:6                                             |\n| 2020-06-17 | a:9, b:8, c:8, j:8, d:7, e:7, f:7, h:7, i:7, k:7                                              |\n+------------+-----------------------------------------------------------------------------------------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[a._v("#")]),a._v(" keywords")]),a._v(" "),s("p",[a._v("TOPN")])])}),[],!1,null,null,null);e.default=n.exports}}]);