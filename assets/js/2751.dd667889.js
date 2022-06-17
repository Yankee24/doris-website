(window.webpackJsonp=window.webpackJsonp||[]).push([[2751],{3379:function(t,e,n){"use strict";n.r(e);var s=n(15),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"hll"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hll"}},[t._v("#")]),t._v(" HLL")]),t._v(" "),n("h2",{attrs:{id:"description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" description")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("HLL是基于HyperLogLog算法的工程实现，用于保存HyperLogLog计算过程的中间结果，它只能作为表的value列类型\n通过聚合来不断的减少数据量，以此来实现加快查询的目的，基于它到的是一个估算结果，误差大概在1%左右\nhll列是通过其它列或者导入数据里面的数据生成的，导入的时候通过hll_hash函数来指定数据中哪一列用于生成hll列\n它常用于替代count distinct，通过结合rollup在业务上用于快速计算uv等\n\n  相关函数:\n\n  HLL_UNION_AGG(hll)\n  此函数为聚合函数，用于计算满足条件的所有数据的基数估算。此函数还可用于分析函数，只支持默认窗口，不支持window从句。\n\n  HLL_RAW_AGG(hll)\n  此函数为聚合函数，用于聚合hll类型字段，并且返回的还是hll类型。\n\n  HLL_CARDINALITY(hll)\n  此函数用于计算单条hll列的基数估算\n\n  HLL_HASH(column_name)\n  生成HLL列类型，用于insert或导入的时候，导入的使用见相关说明\n  \n  EMPTY_HLL()\n  生成空HLL列，用于insert或导入的时候补充默认值，导入的使用见相关说明\n")])])]),n("h2",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" example")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('1. 首先创建一张含有hll列的表\n    create table test(\n    dt date,\n    id int, \n    name char(10), \n    province char(10),\n    os char(1),\n    set1 hll hll_union, \n    set2 hll hll_union) \n    distributed by hash(id) buckets 32;\n    \n2. 导入数据，导入的方式见相关help curl\n\n  a. 使用表中的列生成hll列\n    curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, os, set1=hll_hash(id), set2=hll_hash(name)"\n        http://host/api/test_db/test/_stream_load\n  b. 使用数据中的某一列生成hll列\n    curl --location-trusted -uname:password -T data -H "label:load_1" -H "columns:dt, id, name, province, sex, cuid, os, set1=hll_hash(cuid), set2=hll_hash(os)"\n        http://host/api/test_db/test/_stream_load\n\n3. 聚合数据，常用方式3种：（如果不聚合直接对base表查询，速度可能跟直接使用approx_count_distinct速度差不多）\n\n  a. 创建一个rollup，让hll列产生聚合，\n    alter table test add rollup test_rollup(dt, set1);\n    \n  b. 创建另外一张专门计算uv的表，然后insert数据）\n\n    create table test_uv(\n    dt date,\n    uv_set hll hll_union)\n    distributed by hash(dt) buckets 32;\n\n    insert into test_uv select dt, set1 from test;\n    \n  c. 创建另外一张专门计算uv的表，然后insert并通过hll_hash根据test其它非hll列生成hll列\n  \n    create table test_uv(\n    dt date,\n    id_set hll hll_union)\n    distributed by hash(dt) buckets 32;\n    \n    insert into test_uv select dt, hll_hash(id) from test;\n        \n4. 查询，hll列不允许直接查询它的原始值，可以通过配套的函数进行查询\n\n  a. 求总uv\n    select HLL_UNION_AGG(uv_set) from test_uv;\n        \n  b. 求每一天的uv\n    select dt, HLL_CARDINALITY(uv_set) from test_uv;\n\n  c. 求test表中set1的聚合值\n    select dt, HLL_CARDINALITY(uv) from (select dt, HLL_RAW_AGG(set1) as uv from test group by dt) tmp;\n    select dt, HLL_UNION_AGG(set1) as uv from test group by dt;\n')])])]),n("h2",{attrs:{id:"keyword"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[t._v("#")]),t._v(" keyword")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("HLL\n")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);