(window.webpackJsonp=window.webpackJsonp||[]).push([[1128],{1753:function(t,e,i){"use strict";i.r(e);var a=i(15),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("This is the last Doris weekly for the Year of the Ox in the Chinese lunar year Xin Jiu. We would like to wish you all the best of luck in the Year of the Tiger!")]),t._v(" "),i("h2",{attrs:{id:"statistics"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#statistics"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),i("p",[t._v("A total of 46 authors have submitted 67 Commits. Thanks to the following authors for their contributions (Github IDs, in alphabetical order).")]),t._v(" "),i("p",[t._v("924060929, adonis0147, amosbird, anneji-dev, awakeljw, bingzxy, BiteTheDDDDt, blackstar-baba, caiconghui, Cui Kaifeng, emmymiao87, EmmyMiao87, freemandealer, Gabriel, HappenLee, Henry2SS, hf200012, htyoung, jackwener, JNSimba, luozenglin, luzhijing, morningman, obobj, Pxl, qidaye, qzsee, stdpain, steadyBoy, taberylyang, thinker, ucasfl, wangbo, WangShuo, weizuo93, xinghuayu007, yangzhg, yiguolei, zbtzbtzbt, zenoyang, zhangstar333, ZhengguoYang, zhengshengjun, zhengshiJ, zhoubintao, zuochunwei")]),t._v(" "),i("p",[t._v("In the last 2 weeks, 339581 new lines of code were added and 264318 lines of code were deleted.")]),t._v(" "),i("h2",{attrs:{id:"main-progress"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#main-progress"}},[t._v("#")]),t._v(" Main progress")]),t._v(" "),i("h3",{attrs:{id:"new-features"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[t._v("#")]),t._v(" New features")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7785")]),t._v(" "),i("p",[t._v("The vectorization engine was merged into the main branch. Thanks to the 19 developers who worked together in open source collaboration for more than half a year to complete such a huge project. The feature will continue to be improved and optimized in the main branch.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7521")]),t._v(" "),i("p",[t._v("Added "),i("code",[t._v("ADMIN COMPACT")]),t._v(" statement to support triggering compaction tasks for specified partitions.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7457")]),t._v(" "),i("p",[t._v("Flink Connector adds support for delete flag to facilitate synchronization of update and delete operations of upstream database via Flink CDC.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7457")]),t._v(" "),i("p",[t._v("Added "),i("code",[t._v('show proc "/current_query_stmts"')]),t._v(" statement to view the current SQL in progress.")])])]),t._v(" "),i("h3",{attrs:{id:"work-in-progess"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#work-in-progess"}},[t._v("#")]),t._v(" Work-in-Progess")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7391")]),t._v(" "),i("p",[t._v("Added support for the Iceberg external table.")])])]),t._v(" "),i("h3",{attrs:{id:"feature-improvements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#feature-improvements"}},[t._v("#")]),t._v(" Feature improvements")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7656")]),t._v(" "),i("p",[t._v("Added "),i("code",[t._v("colocate_group_relocate_delay_second")]),t._v(" to delay the colocation table replica redistribution operation that may be triggered by a brief BE downtime.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/6319")]),t._v(" "),i("p",[t._v("Optimize the import logic to quickly cancel the import task when unqualified data row is encountered with an error tolerance of 0 to facilitate quick problem location.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7674")]),t._v(" "),i("p",[t._v("Enhance the error tolerance of the import job to complete the import task even if a few nodes fail to write.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7821")]),t._v(" "),i("p",[i("code",[t._v('show proc "/statistic"')]),t._v(" Added the ability to view copies with slower compaction and replicas with too much data.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7876")]),t._v(" "),i("p",[t._v("Optimized the Datetime type rewrite logic to make it more compatible with MySQL.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7851")]),t._v(" "),i("p",[t._v("View SQL execution plan with EXPLAIN VERBOSE statement to see implicit cast rewrites.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7630")]),t._v(" "),i("p",[t._v("Routine Load supports older versions of kafka (< 0.10)")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7543")]),t._v(" "),i("p",[t._v("Optimized locking logic for BE-side RPC client cache.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7754")]),t._v(" "),i("p",[t._v("Optimize the execution logic of Routine Load to reduce the frequency of RPC timeout during Routine Load execution.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7546")]),t._v(" "),i("p",[t._v("Optimized Runtime Filter logic to adaptively use IN or BloomFilter types.")])])]),t._v(" "),i("h3",{attrs:{id:"bug-fixes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[t._v("#")]),t._v(" Bug Fixes")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7772")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7865")]),t._v(" "),i("p",[t._v("Fix a bug in Lateral View that may cause BE crash or have wrong query results.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7788")]),t._v(" "),i("p",[t._v("Fix a bug where bitmap indexing may lead to incorrect query results in some cases.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7808")]),t._v(" "),i("p",[t._v("Fix a bug that schema change returns -102 error in some cases.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7813")]),t._v(" "),i("p",[t._v("Fix an error when exporting unique key table with export statement in some cases.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7888")]),t._v(" "),i("p",[t._v("Fix a bug that digital_masking function overflows.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7804")]),t._v(" "),i("p",[t._v("Fix a bug in fe audit plugin that causes it to exit completely due to some exceptions.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7800")]),t._v(" "),i("p",[t._v("Fix a bug in grouping set.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7931")]),t._v(" "),i("p",[t._v("Fix a bug that causes BE to go down in some cases when using window functions and returning an empty set.")])]),t._v(" "),i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7927")]),t._v(" "),i("p",[t._v("Fix an issue where using OUTFILE function may return Empty Partition Info error in some cases.")])])]),t._v(" "),i("h3",{attrs:{id:"other"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#other"}},[t._v("#")]),t._v(" Other")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("https://github.com/apache/incubator-doris/pull/7712")]),t._v(" "),i("p",[t._v("The compilation method has been updated to compile with the ldb-toolchain tool to shield the compiled components from differences under different systems.")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);