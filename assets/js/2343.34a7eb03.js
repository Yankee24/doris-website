(window.webpackJsonp=window.webpackJsonp||[]).push([[2343],{2968:function(a,t,s){"use strict";s.r(t);var e=s(15),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"正交的bitmap计算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正交的bitmap计算"}},[a._v("#")]),a._v(" 正交的BITMAP计算")]),a._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),s("p",[a._v("Doris原有的Bitmap聚合函数设计比较通用，但对亿级别以上bitmap大基数的交并集计算性能较差。排查后端be的bitmap聚合函数逻辑，发现主要有两个原因。一是当bitmap基数较大时，如bitmap大小超过1g，网络/磁盘IO处理时间比较长；二是后端be实例在scan数据后全部传输到顶层节点进行求交和并运算，给顶层单节点带来压力，成为处理瓶颈。")]),a._v(" "),s("p",[a._v("解决思路是将bitmap列的值按照range划分，不同range的值存储在不同的分桶中，保证了不同分桶的bitmap值是正交的。当查询时，先分别对不同分桶中的正交bitmap进行聚合计算，然后顶层节点直接将聚合计算后的值合并汇总，并输出。如此会大大提高计算效率，解决了顶层单节点计算瓶颈问题。")]),a._v(" "),s("h2",{attrs:{id:"使用指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用指南"}},[a._v("#")]),a._v(" 使用指南")]),a._v(" "),s("ol",[s("li",[a._v("建表，增加hid列，表示bitmap列值id范围, 作为hash分桶列")]),a._v(" "),s("li",[a._v("使用场景")])]),a._v(" "),s("h3",{attrs:{id:"create-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[a._v("#")]),a._v(" Create table")]),a._v(" "),s("p",[a._v("建表时需要使用聚合模型，数据类型是 bitmap , 聚合函数是 bitmap_union")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CREATE TABLE `user_tag_bitmap` (\n  `tag` bigint(20) NULL COMMENT "用户标签",\n  `hid` smallint(6) NULL COMMENT "分桶id",\n  `user_id` bitmap BITMAP_UNION NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`tag`, `hid`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH(`hid`) BUCKETS 3\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("表schema增加hid列，表示id范围, 作为hash分桶列。")]),a._v(" "),s("p",[a._v("注：hid数和BUCKETS要设置合理，hid数设置至少是BUCKETS的5倍以上，以使数据hash分桶尽量均衡")]),a._v(" "),s("h3",{attrs:{id:"data-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-load"}},[a._v("#")]),a._v(" Data Load")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("LOAD LABEL user_tag_bitmap_test\n(\nDATA INFILE('hdfs://abc')\nINTO TABLE user_tag_bitmap\nCOLUMNS TERMINATED BY ','\n(tmp_tag, tmp_user_id)\nSET (\ntag = tmp_tag,\nhid = ceil(tmp_user_id/5000000),\nuser_id = to_bitmap(tmp_user_id)\n)\n)\n注意：5000000这个数不固定，可按需调整\n...\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br")])]),s("p",[a._v("数据格式：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("11111111,1\n11111112,2\n11111113,3\n11111114,4\n...\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("注：第一列代表用户标签，由中文转换成数字")]),a._v(" "),s("p",[a._v("load数据时，对用户bitmap值range范围纵向切割，例如，用户id在1-5000000范围内的hid值相同，hid值相同的行会分配到一个分桶内，如此每个分桶内到的bitmap都是正交的。可以利用桶内bitmap值正交特性，进行交并集计算，计算结果会被shuffle至top节点聚合。")]),a._v(" "),s("h4",{attrs:{id:"bitmap-orthogonal-intersect"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-orthogonal-intersect"}},[a._v("#")]),a._v(" bitmap_orthogonal_intersect")]),a._v(" "),s("p",[a._v("求bitmap交集函数")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("p",[a._v("orthogonal_bitmap_intersect(bitmap_column, column_to_filter, filter_values)")]),a._v(" "),s("p",[a._v("参数：")]),a._v(" "),s("p",[a._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数是变长参数，含义是过滤维度列的不同取值")]),a._v(" "),s("p",[a._v("说明：")]),a._v(" "),s("p",[a._v("查询规划上聚合分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，结果序列化后发送至第二层be节点(merge、finalize)，在第二层be节点对所有来源于第一层节点的bitmap值循环求并集")]),a._v(" "),s("p",[a._v("样例：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select BITMAP_COUNT(orthogonal_bitmap_intersect(user_id, tag, 13080800, 11110200)) from user_tag_bitmap  where tag in (13080800, 11110200);\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"orthogonal-bitmap-intersect-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-intersect-count"}},[a._v("#")]),a._v(" orthogonal_bitmap_intersect_count")]),a._v(" "),s("p",[a._v("求bitmap交集count函数,语法同原版intersect_count，但实现不同")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("p",[a._v("orthogonal_bitmap_intersect_count(bitmap_column, column_to_filter, filter_values)")]),a._v(" "),s("p",[a._v("参数：")]),a._v(" "),s("p",[a._v("第一个参数是Bitmap列，第二个参数是用来过滤的维度列，第三个参数开始是变长参数，含义是过滤维度列的不同取值")]),a._v(" "),s("p",[a._v("说明：")]),a._v(" "),s("p",[a._v("查询规划聚合上分2层，在第一层be节点（update、serialize）先按filter_values为key进行hash聚合，然后对所有key的bitmap求交集，再对交集结果求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),a._v(" "),s("h4",{attrs:{id:"orthogonal-bitmap-union-count"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#orthogonal-bitmap-union-count"}},[a._v("#")]),a._v(" orthogonal_bitmap_union_count")]),a._v(" "),s("p",[a._v("求bitmap并集count函数，语法同原版bitmap_union_count，但实现不同。")]),a._v(" "),s("p",[a._v("语法：")]),a._v(" "),s("p",[a._v("orthogonal_bitmap_union_count(bitmap_column)")]),a._v(" "),s("p",[a._v("参数：")]),a._v(" "),s("p",[a._v("参数类型是bitmap，是待求并集count的列")]),a._v(" "),s("p",[a._v("说明：")]),a._v(" "),s("p",[a._v("查询规划上分2层，在第一层be节点（update、serialize）对所有bitmap求并集，再对并集的结果bitmap求count，count值序列化后发送至第二层be节点（merge、finalize），在第二层be节点对所有来源于第一层节点的count值循环求sum")]),a._v(" "),s("h3",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[a._v("#")]),a._v(" 使用场景")]),a._v(" "),s("p",[a._v("符合对bitmap进行正交计算的场景，如在用户行为分析中，计算留存，漏斗，用户画像等。")]),a._v(" "),s("p",[a._v("人群圈选：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v(" select orthogonal_bitmap_intersect_count(user_id, tag, 13080800, 11110200) from user_tag_bitmap where tag in (13080800, 11110200);\n 注：13080800、11110200代表用户标签\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("计算user_id的去重值：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("select orthogonal_bitmap_union_count(user_id) from user_tag_bitmap where tag in (13080800, 11110200);\n\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);