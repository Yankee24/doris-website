(window.webpackJsonp=window.webpackJsonp||[]).push([[2840],{3468:function(t,a,i){"use strict";i.r(a);var o=i(15),p=Object(o.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("这是中国农历辛丑年牛年的最后一篇周报。在此先祝各位虎年大吉，万事如意！")]),t._v(" "),i("h2",{attrs:{id:"统计数据"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#统计数据"}},[t._v("#")]),t._v(" 统计数据")]),t._v(" "),i("p",[t._v("共 46 位作者提交了 67 个 Commit 。感谢以下作者的贡献（Github ID，按字母序）：")]),t._v(" "),i("p",[t._v("924060929, adonis0147, amosbird, anneji-dev, awakeljw, bingzxy, BiteTheDDDDt, blackstar-baba, caiconghui, Cui Kaifeng, emmymiao87, EmmyMiao87, freemandealer, Gabriel, HappenLee, Henry2SS, hf200012, htyoung, jackwener, JNSimba, luozenglin, luzhijing, morningman, obobj, Pxl, qidaye, qzsee, stdpain, steadyBoy, taberylyang, thinker, ucasfl, wangbo, WangShuo, weizuo93, xinghuayu007, yangzhg, yiguolei, zbtzbtzbt, zenoyang, zhangstar333, ZhengguoYang, zhengshengjun, zhengshiJ, zhoubintao, zuochunwei")]),t._v(" "),i("p",[t._v("最近 2 周，共修改新增代码行 339581 ，删除代码行 264318。")]),t._v(" "),i("h2",{attrs:{id:"主要进展"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#主要进展"}},[t._v("#")]),t._v(" 主要进展")]),t._v(" "),i("h3",{attrs:{id:"新增功能"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#新增功能"}},[t._v("#")]),t._v(" 新增功能")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7785")]),t._v(" "),i("p",[t._v("向量化引擎合入主干分支。感谢19位开发者在长达半年多的时间里，以开源协作的方式共同完成了如此庞大的工程。后续该功能会继续在主干分支进行完善和优化。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7521")]),t._v(" "),i("p",[t._v("新增 ADMIN COMPACT 语句支持触发指定分区的compaction任务。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7457")]),t._v(" "),i("p",[t._v("Flink Connector 增加对 delete flag 的支持，方便通过 Flink CDC 同步上游数据库的更新和删除操作。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7457")]),t._v(" "),i("p",[t._v("新增 "),i("code",[t._v('show proc "/current_query_stmts"')]),t._v(" 语句已查看当前正在进行的 SQL。")])])]),t._v(" "),i("h3",{attrs:{id:"work-in-progess"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progess"}},[t._v("#")]),t._v(" Work-in-Progess")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7391")]),t._v(" "),i("p",[t._v("新增对 Iceberg 外表的支持。")])])]),t._v(" "),i("h3",{attrs:{id:"功能改进"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#功能改进"}},[t._v("#")]),t._v(" 功能改进")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7656")]),t._v(" "),i("p",[t._v("新增 "),i("code",[t._v("colocate_group_relocate_delay_second")]),t._v(" 来延迟因BE短暂停机而可能触发的colocation 表副本重分布操作。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/6319")]),t._v(" "),i("p",[t._v("优化导入逻辑，在错误容忍度为0的情况下，当遇到错误数据行时快速取消导入任务，以方便快速定位问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7674")]),t._v(" "),i("p",[t._v("增强导入作业的错误容忍度，在少数节点写入失败的情况下，依然可以完成导入任务。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7821")]),t._v(" "),i("p",[i("code",[t._v('show proc "/statistic"')]),t._v(" 新增查看 compaction 较慢的副本以及数据量过大的副本。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7876")]),t._v(" "),i("p",[t._v("优化了 Datetime 类型的改写逻辑，使其和 MySQL 更加兼容。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7851")]),t._v(" "),i("p",[t._v("通过 EXPLAIN VERBOSE 语句查看 SQL 执行计划，可以查看隐式 cast 的改写情况。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7630")]),t._v(" "),i("p",[t._v("Routine Load 支持老版本的 kafka(< 0.10)")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7543")]),t._v(" "),i("p",[t._v("优化了 BE 端 RPC client cache 的锁逻辑。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7754")]),t._v(" "),i("p",[t._v("优化Routine Load 的执行逻辑，以降低 Routine Load执行过程中出现 RPC timeout 的频率。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7546")]),t._v(" "),i("p",[t._v("优化 Runtime Filter 逻辑，使其可以自适应的使用 IN 或 BloomFilter 类型。")])])]),t._v(" "),i("h3",{attrs:{id:"bug-修复"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-修复"}},[t._v("#")]),t._v(" Bug 修复")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7772")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7865")]),t._v(" "),i("p",[t._v("修复Lateral View 可能导致BE宕机或查询结果错误的bug。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7788")]),t._v(" "),i("p",[t._v("修复某些情况下，bitmap索引可能导致查询结果不正确的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7808")]),t._v(" "),i("p",[t._v("修复某些情况下，schema change 会返回 -102 错误的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7813")]),t._v(" "),i("p",[t._v("修复某些情况下，使用 export 语句导出 unique key 表时报错的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7888")]),t._v(" "),i("p",[t._v("修复 digital_masking 函数数值溢出的bug。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7804")]),t._v(" "),i("p",[t._v("修复 fe audit plugin 会因为某些异常情况而彻底退出的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7800")]),t._v(" "),i("p",[t._v("修复 grouping set 的相关错误。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7931")]),t._v(" "),i("p",[t._v("修复部分情况下，使用窗口函数并返回 empty set 时，会导致 BE 宕机的问题。")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7927")]),t._v(" "),i("p",[t._v("修复部分情况下，使用 OUTFILE 功能可能返回 Empty Partition Info 错误的问题。")])])]),t._v(" "),i("h3",{attrs:{id:"其他"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7712")]),t._v(" "),i("p",[t._v("编译方式更新为使用 ldb-toolchain 工具编译，以屏蔽在不同系统下的编译组件差异。")])])])])}),[],!1,null,null,null);a.default=p.exports}}]);