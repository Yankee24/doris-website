(window.webpackJsonp=window.webpackJsonp||[]).push([[655],{1281:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"grouping-sets-设计文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grouping-sets-设计文档"}},[s._v("#")]),s._v(" GROUPING SETS 设计文档")]),s._v(" "),a("h2",{attrs:{id:"_1-grouping-sets-相关背景知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-grouping-sets-相关背景知识"}},[s._v("#")]),s._v(" 1. GROUPING SETS 相关背景知识")]),s._v(" "),a("h3",{attrs:{id:"_1-1-grouping-sets-子句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-grouping-sets-子句"}},[s._v("#")]),s._v(" 1.1 GROUPING SETS 子句")]),s._v(" "),a("p",[s._v("GROUP BY GROUPING SETS 是对 GROUP BY 子句的扩展，它能够在一个 GROUP BY 子句中一次实现多个集合的分组。其结果等价于将多个相应 GROUP BY 子句进行 UNION 操作。")]),s._v(" "),a("p",[s._v("特别地，一个空的子集意味着将所有的行聚集到一个分组。\nGROUP BY 子句是只含有一个元素的 GROUP BY GROUPING SETS 的特例。")]),s._v(" "),a("p",[s._v("例如，GROUPING SETS 语句：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT k1, k2, SUM( k3 ) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k1), (k2), ( ) );\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其查询结果等价于：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT k1, k2, SUM( k3 ) FROM t GROUP BY k1, k2\nUNION\nSELECT k1, null, SUM( k3 ) FROM t GROUP BY k1\nUNION\nSELECT null, k2, SUM( k3 ) FROM t GROUP BY k2\nUNION\nSELECT null, null, SUM( k3 ) FROM t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("下面是一个实际数据的例子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT * FROM t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\nmysql> SELECT k1, k2, SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| a    | B    |         4 |\n| a    | A    |         3 |\n| b    | A    |         5 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("h3",{attrs:{id:"_1-2-rollup-子句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-rollup-子句"}},[s._v("#")]),s._v(" 1.2 ROLLUP 子句")]),s._v(" "),a("p",[s._v("ROLLUP 是对 GROUPING SETS 的扩展。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT a, b,c, SUM( d ) FROM tab1 GROUP BY ROLLUP(a,b,c)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个 ROLLUP 等价于下面的 GROUPING SETS：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GROUPING SETS (\n(a,b,c),\n( a, b ),\n( a),\n( )\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_1-3-cube-子句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-cube-子句"}},[s._v("#")]),s._v(" 1.3 CUBE 子句")]),s._v(" "),a("p",[s._v("CUBE 也是对 GROUPING SETS 的扩展。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("CUBE ( e1, e2, e3, ... )\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其含义是 GROUPING SETS 后面列表中的所有子集。")]),s._v(" "),a("p",[s._v("例如，CUBE ( a, b, c ) 等价于下面的 GROUPING SETS：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GROUPING SETS (\n( a, b, c ),\n( a, b ),\n( a,    c ),\n( a       ),\n(    b, c ),\n(    b    ),\n(       c ),\n(         )\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"_1-4-grouping-和-grouping-id-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-grouping-和-grouping-id-函数"}},[s._v("#")]),s._v(" 1.4 GROUPING 和 GROUPING_ID 函数")]),s._v(" "),a("p",[s._v("当我们没有统计某一列时，它的值显示为 NULL，这也可能是列本身就有 NULL 值，这就需要一种方法区分是没有统计还是值本来就是 NULL。为此引入 GROUPING 和 GROUPING_ID 函数。\nGROUPING(column:Column) 函数用于区分分组后的单个列是普通列和聚合列。如果是聚合列，则返回1，反之，则是0. GROUPING() 只能有一个参数列。")]),s._v(" "),a("p",[s._v("GROUPING_ID(column1, column2) 则根据指定的column 顺序，否则根据聚合的时候给的集合的元素顺序，计算出一个列列表的 bitmap 值，一个列如果是聚合列为0，否则为1. GROUPING_ID()函数返回位向量的十进制值。\n比如 [0 1 0] ->2 从下列第三个查询可以看到这种对应关系")]),s._v(" "),a("p",[s._v("例如，对于下面的表：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("grouping sets 的结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> SELECT k1, k2, GROUPING(k1), GROUPING(k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+----------------+----------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | sum(`k3`) |\n+------+------+----------------+----------------+-----------+\n| a    | A    |              0 |              0 |         3 |\n| a    | B    |              0 |              0 |         4 |\n| a    | NULL |              0 |              1 |         7 |\n| b    | A    |              0 |              0 |         5 |\n| b    | B    |              0 |              0 |         6 |\n| b    | NULL |              0 |              1 |        11 |\n| NULL | A    |              1 |              0 |         8 |\n| NULL | B    |              1 |              0 |        10 |\n| NULL | NULL |              1 |              1 |        18 |\n+------+------+----------------+----------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) );\n+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\nmysql> SELECT k1, k2, grouping(k1), grouping(k2), GROUPING_ID(k1,k2), SUM(k4) FROM t GROUP BY GROUPING SETS ( (k1, k2), (k2), (k1), ( ) ) order by k1, k2;\n+------+------+----------------+----------------+-------------------------+-----------+\n| k1   | k2   | grouping(`k1`) | grouping(`k2`) | grouping_id(`k1`, `k2`) | sum(`k4`) |\n+------+------+----------------+----------------+-------------------------+-----------+\n| a    | A    |              0 |              0 |                       0 |         3 |\n| a    | B    |              0 |              0 |                       0 |         4 |\n| a    | NULL |              0 |              1 |                       1 |         7 |\n| b    | A    |              0 |              0 |                       0 |         5 |\n| b    | B    |              0 |              0 |                       0 |         6 |\n| b    | NULL |              0 |              1 |                       1 |        11 |\n| NULL | A    |              1 |              0 |                       2 |         8 |\n| NULL | B    |              1 |              0 |                       2 |        10 |\n| NULL | NULL |              1 |              1 |                       3 |        18 |\n+------+------+----------------+----------------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br")])]),a("h3",{attrs:{id:"_1-5-grouping-sets-的组合与嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-grouping-sets-的组合与嵌套"}},[s._v("#")]),s._v(" 1.5 GROUPING SETS 的组合与嵌套")]),s._v(" "),a("p",[s._v("首先，一个 GROUP BY 子句本质上是一个 GROUPING SETS 的特例, 例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("   GROUP BY a\n等同于\n   GROUP BY GROUPING SETS((a))\n同样地，\n   GROUP BY a,b,c\n等同于\n   GROUP BY GROUPING SETS((a,b,c))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("同样的，CUBE 和 ROLLUP 也可以展开成 GROUPING SETS，因此 GROUP BY, CUBE, ROLLUP, GROUPING SETS 的各种组合和嵌套本质上就是 GROUPING SETS 的组合与嵌套。")]),s._v(" "),a("p",[s._v("对于 GROUPING SETS 的嵌套，语义上等价于将嵌套内的语句直接写到外面。（参考："),a("a",{attrs:{href:"https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.brytlyt.com/documentation/data-manipulation-dml/grouping-sets-rollup-cube/"),a("OutboundLink")],1),s._v("），其中写道：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("The CUBE and ROLLUP constructs can be used either directly in the GROUP BY clause, or nested inside a GROUPING SETS clause. If one GROUPING SETS clause is nested inside another, the effect is the same as if all the elements of the inner clause had been written directly in the outer clause.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于多个 GROUPING SETS 的组合列表，很多数据库认为是叉乘（cross product）的关系。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("GROUP BY a, CUBE (b, c), GROUPING SETS ((d), (e))\n\n等同于：\n\nGROUP BY GROUPING SETS (\n(a, b, c, d), (a, b, c, e),\n(a, b, d),    (a, b, e),\n(a, c, d),    (a, c, e),\n(a, d),       (a, e)\n)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("对于 GROUPING SETS 的组合与嵌套，各个数据库支持不太一样。例如 snowflake 不支持任何的组合和嵌套。\n（"),a("a",{attrs:{href:"https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.snowflake.net/manuals/sql-reference/constructs/group-by.html"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("p",[s._v("Oracle 既支持组合，也支持嵌套。\n（"),a("a",{attrs:{href:"https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.oracle.com/cd/B19306_01/server.102/b14223/aggreg.htm#i1006842"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("p",[s._v("Presto 支持组合，但不支持嵌套。\n（"),a("a",{attrs:{href:"https://prestodb.github.io/docs/current/sql/select.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://prestodb.github.io/docs/current/sql/select.html"),a("OutboundLink")],1),s._v("）")]),s._v(" "),a("h2",{attrs:{id:"_2-设计目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-设计目标"}},[s._v("#")]),s._v(" 2. 设计目标")]),s._v(" "),a("p",[s._v("从语法上支持 GROUPING SETS， ROLLUP 和 CUBE。实现上述所述的1.1, 1.2, 1.3 1.4.")]),s._v(" "),a("p",[s._v("对于1.6 GROUPING SETS 的组合与嵌套 先不实现。")]),s._v(" "),a("p",[s._v("具体语法列出如下：")]),s._v(" "),a("h3",{attrs:{id:"_2-1-grouping-sets-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-grouping-sets-语法"}},[s._v("#")]),s._v(" 2.1 GROUPING SETS 语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY GROUPING SETS ( groupSet [ , groupSet [ , ... ] ] )\n[ ... ]\n\ngroupSet ::= { ( expr  [ , expr [ , ... ] ] )}\n\n<expr>\n各种表达式，包括列名.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_2-2-rollup-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-rollup-语法"}},[s._v("#")]),s._v(" 2.2 ROLLUP 语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY ROLLUP ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\n各种表达式，包括列名.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"_2-3-cube-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-cube-语法"}},[s._v("#")]),s._v(" 2.3 CUBE 语法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT ...\nFROM ...\n[ ... ]\nGROUP BY CUBE ( expr  [ , expr [ , ... ] ] )\n[ ... ]\n\n<expr>\n各种表达式，包括列名.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_3-实现方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-实现方案"}},[s._v("#")]),s._v(" 3. 实现方案")]),s._v(" "),a("h3",{attrs:{id:"_3-1-整体思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-整体思路"}},[s._v("#")]),s._v(" 3.1 整体思路")]),s._v(" "),a("p",[s._v("既然 GROUPING SET 子句逻辑上等价于多个相应 GROUP BY 子句的 UNION，可以通过扩展输入行(此输入行已经是通过下推条件过滤和投影后的), 在此基础上进行一个单一的 GROUP BY 操作来达到目的。")]),s._v(" "),a("p",[s._v("关键是怎样扩展输入行呢？下面举例说明：")]),s._v(" "),a("p",[s._v("例如，对应下面的语句：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT a, b FROM src GROUP BY a, b GROUPING SETS ((a, b), (a), (b), ());\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("假定 src 表的数据如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1, 2\n3, 4\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("根据 GROUPING SETS 子句给出的列表，可以将输入行扩展为下面的 8 行 （GROUPING SETS集合数 * 行数, 同时为每行生成对应的 全列的GROUPING_ID: 和其他grouping 函数的值")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1, 2       (GROUPING_ID: a, b -> 00->0)\n1, null    (GUPING_ID: a, null -> 01 -> 1)\nnull, 2    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n3, 4       (GROUPING_ID: a, b -> 00 -> 0)\n3, null    (GROUPING_ID: a, null -> 01 -> 1)\nnull, 4    (GROUPING_ID: null, b -> 10 -> 2)\nnull, null (GROUPING_ID: null, null -> 11 -> 3)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("然后，将上面的 8 行数据作为输入，对 a, b, GROUPING_ID 进行 GROUP BY 操作即可。")]),s._v(" "),a("h3",{attrs:{id:"_3-2-具体例子验证说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-具体例子验证说明"}},[s._v("#")]),s._v(" 3.2 具体例子验证说明")]),s._v(" "),a("p",[s._v("假设有一个 t 表，包含如下列和数据：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select * from t;\n+------+------+------+\n| k1   | k2   | k3   |\n+------+------+------+\n| a    | A    |    1 |\n| a    | A    |    2 |\n| a    | B    |    1 |\n| a    | B    |    3 |\n| b    | A    |    1 |\n| b    | A    |    4 |\n| b    | B    |    1 |\n| b    | B    |    5 |\n+------+------+------+\n8 rows in set (0.01 sec)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("对于如下的查询：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT k1, k2, GROUPING_ID(k1,k2), SUM(k3) FROM t GROUP BY GROUPING SETS ((k1, k2), (k1), (k2), ());\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("首先，对输入行进行扩展，每行数据扩展成 4 行 (GROUPING SETS子句的集合数目)，同时增加 GROUPING_ID() 列 ：")]),s._v(" "),a("p",[s._v("例如 a, A, 1 扩展后变成下面的 4 行：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | NULL |    1 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | NULL |    1 |                       3 |\n+------+------+------+-------------------------+\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("最终， 全部扩展后的输入行如下（总共 32 行）：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------+------+------+-------------------------+\n| k1   | k2   | k3   | GROUPING_ID(`k1`, `k2`) |\n+------+------+------+-------------------------+\n| a    | A    |    1 |                       0 |\n| a    | A    |    2 |                       0 |\n| a    | B    |    1 |                       0 |\n| a    | B    |    3 |                       0 |\n| b    | A    |    1 |                       0 |\n| b    | A    |    4 |                       0 |\n| b    | B    |    1 |                       0 |\n| b    | B    |    5 |                       0 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    1 |                       1 |\n| a    | NULL |    2 |                       1 |\n| a    | NULL |    3 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    1 |                       1 |\n| b    | NULL |    4 |                       1 |\n| b    | NULL |    5 |                       1 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    1 |                       2 |\n| NULL | A    |    2 |                       2 |\n| NULL | A    |    4 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    1 |                       2 |\n| NULL | B    |    3 |                       2 |\n| NULL | B    |    5 |                       2 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    1 |                       3 |\n| NULL | NULL |    2 |                       3 |\n| NULL | NULL |    3 |                       3 |\n| NULL | NULL |    4 |                       3 |\n| NULL | NULL |    5 |                       3 |\n+------+------+------+-------------------------+\n32 rows in set.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("现在对k1, k2, GROUPING_ID("),a("code",[s._v("k1")]),s._v(", "),a("code",[s._v("k2")]),s._v(") 进行 GROUP BY：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------+------+-------------------------+-----------+\n| k1   | k2   | grouping_id(`k1`, `k2`) | sum(`k3`) |\n+------+------+-------------------------+-----------+\n| a    | A    |                       0 |         3 |\n| a    | B    |                       0 |         4 |\n| a    | NULL |                       1 |         7 |\n| b    | A    |                       0 |         5 |\n| b    | B    |                       0 |         6 |\n| b    | NULL |                       1 |        11 |\n| NULL | A    |                       2 |         8 |\n| NULL | B    |                       2 |        10 |\n| NULL | NULL |                       3 |        18 |\n+------+------+-------------------------+-----------+\n9 rows in set (0.02 sec)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("可以看到，其结果与对 GROUPING SETS 子句后每个子集进行 GROUP BY 后再进行 UNION 的结果一致。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("select k1, k2, sum(k3) from t group by k1, k2\nUNION ALL\nselect NULL, k2, sum(k3) from t group by k2\nUNION ALL\nselect k1, NULL, sum(k3) from t group by k1\nUNION ALL\nselect NULL, NULL, sum(k3) from t;\n\n+------+------+-----------+\n| k1   | k2   | sum(`k3`) |\n+------+------+-----------+\n| b    | B    |         6 |\n| b    | A    |         5 |\n| a    | A    |         3 |\n| a    | B    |         4 |\n| a    | NULL |         7 |\n| b    | NULL |        11 |\n| NULL | B    |        10 |\n| NULL | A    |         8 |\n| NULL | NULL |        18 |\n+------+------+-----------+\n9 rows in set (0.06 sec)\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h3",{attrs:{id:"_3-3-fe-规划阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-fe-规划阶段"}},[s._v("#")]),s._v(" 3.3 FE 规划阶段")]),s._v(" "),a("h4",{attrs:{id:"_3-3-1-主要任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-主要任务"}},[s._v("#")]),s._v(" 3.3.1 主要任务")]),s._v(" "),a("ol",[a("li",[s._v("引入 GroupByClause 类，封装 Group By 相关信息，替换原有的 groupingExprs.")]),s._v(" "),a("li",[s._v("增加 Grouping Sets, Cube 和 RollUp 的语法支持和语法检查、错误处理和错误信息；")]),s._v(" "),a("li",[s._v("在 SelectStmt 类中增加 GroupByClause 成员；")]),s._v(" "),a("li",[s._v("引入 GroupingFunctionCallExpr 类，封装grouping 和grouping_id 函数调用")]),s._v(" "),a("li",[s._v("引入 VirtualSlot 类，封装grouping，grouping_id  生成的虚拟列和实际列的对应关系")]),s._v(" "),a("li",[s._v("增加虚拟列 GROUPING_ID 和其他grouping，grouping_id 函数对应的虚拟列，并将此列加入到原有的 groupingExprs 表达式列表中；")]),s._v(" "),a("li",[s._v("增加一个 PlanNode，考虑更通用的功能，命名为 RepeatNode。对于 GroupingSets 的聚合，在执行计划中插入 RepeatNode。")])]),s._v(" "),a("h4",{attrs:{id:"_3-3-2-tuple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-tuple"}},[s._v("#")]),s._v(" 3.3.2 Tuple")]),s._v(" "),a("p",[s._v("在 GroupByClause 类中为了将 GROUPING_ID 加到 groupingExprs 表达式列表中，需要创建 virtual SlotRef, 相应的，需要对这个 slot 创建一个 tuple, 叫 GROUPING_ID Tuple。")]),s._v(" "),a("p",[s._v("对于 RepeatNode 这个执行计划，其输入是子节点的所有 tuple， 输出的 tuple 除了 repeat 子节点的数据外，还需要填写 GROUPING_ID 和其他grouping，grouping_id 对应的虚拟列，因此。")]),s._v(" "),a("h3",{attrs:{id:"_3-4-be-查询执行阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-be-查询执行阶段"}},[s._v("#")]),s._v(" 3.4 BE 查询执行阶段")]),s._v(" "),a("p",[s._v("主要任务：")]),s._v(" "),a("ol",[a("li",[s._v("通过 RepeatNode 的执行类，增加扩展输入行的逻辑，其功能是在聚合之前将原有数据进行 repeat：对每行增加一列 GROUPING_ID， 然后按照 GroupingSets 中的集合数进行 repeat，并对对应列置为 null。根据grouping list设置新增虚拟列的值")]),s._v(" "),a("li",[s._v("实现 grouping_id() 和grouping() 函数。")])])])}),[],!1,null,null,null);n.default=t.exports}}]);