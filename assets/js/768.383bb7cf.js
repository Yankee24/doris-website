(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1394:function(s,t,a){"use strict";a.r(t);var r=a(15),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据导出"}},[s._v("#")]),s._v(" 数据导出")]),s._v(" "),a("p",[s._v("数据导出（Export）是 Doris 提供的一种将数据导出的功能。该功能可以将用户指定的表或分区的数据，以文本的格式，通过 Broker 进程导出到远端存储上，如 HDFS/BOS 等。")]),s._v(" "),a("p",[s._v("本文档主要介绍 Export 的基本原理、使用方式、最佳实践以及注意事项。")]),s._v(" "),a("h2",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[s._v("#")]),s._v(" 原理")]),s._v(" "),a("p",[s._v("用户提交一个 Export 作业后。Doris 会统计这个作业涉及的所有 Tablet。然后对这些 Tablet 进行分组，每组生成一个特殊的查询计划。该查询计划会读取所包含的 Tablet 上的数据，然后通过 Broker 将数据写到远端存储指定的路径中，也可以通过S3协议直接导出到支持S3协议的远端存储上。")]),s._v(" "),a("p",[s._v("总体的调度方式如下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+--------+\n| Client |\n+---+----+\n    |  1. Submit Job\n    |\n+---v--------------------+\n| FE                     |\n|                        |\n| +-------------------+  |\n| | ExportPendingTask |  |\n| +-------------------+  |\n|                        | 2. Generate Tasks\n| +--------------------+ |\n| | ExportExporingTask | |\n| +--------------------+ |\n|                        |\n| +-----------+          |     +----+   +------+   +---------+\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   | Remote  |\n| +-----------+          |     +----+   +------+   | Storage |\n| | QueryPlan +----------------\x3e BE +---\x3eBroker+---\x3e         |\n| +-----------+          |     +----+   +------+   +---------+\n+------------------------+         3. Execute Tasks\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("ol",[a("li",[s._v("用户提交一个 Export 作业到 FE。")]),s._v(" "),a("li",[s._v("FE 的 Export 调度器会通过两阶段来执行一个 Export 作业：")]),s._v(" "),a("li",[s._v("PENDING：FE 生成 ExportPendingTask，向 BE 发送 snapshot 命令，对所有涉及到的 Tablet 做一个快照。并生成多个查询计划。")]),s._v(" "),a("li",[s._v("EXPORTING：FE 生成 ExportExportingTask，开始执行查询计划。")])]),s._v(" "),a("h3",{attrs:{id:"查询计划拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询计划拆分"}},[s._v("#")]),s._v(" 查询计划拆分")]),s._v(" "),a("p",[s._v("Export 作业会生成多个查询计划，每个查询计划负责扫描一部分 Tablet。每个查询计划扫描的 Tablet 个数由 FE 配置参数 "),a("code",[s._v("export_tablet_num_per_task")]),s._v(" 指定，默认为 5。即假设一共 100 个 Tablet，则会生成 20 个查询计划。用户也可以在提交作业时，通过作业属性 "),a("code",[s._v("tablet_num_per_task")]),s._v(" 指定这个数值。")]),s._v(" "),a("p",[s._v("一个作业的多个查询计划顺序执行。")]),s._v(" "),a("h3",{attrs:{id:"查询计划执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询计划执行"}},[s._v("#")]),s._v(" 查询计划执行")]),s._v(" "),a("p",[s._v("一个查询计划扫描多个分片，将读取的数据以行的形式组织，每 1024 行为一个 batch，调用 Broker 写入到远端存储上。")]),s._v(" "),a("p",[s._v("查询计划遇到错误会整体自动重试 3 次。如果一个查询计划重试 3 次依然失败，则整个作业失败。")]),s._v(" "),a("p",[s._v("Doris 会首先在指定的远端存储的路径中，建立一个名为 "),a("code",[s._v("__doris_export_tmp_12345")]),s._v(" 的临时目录（其中 "),a("code",[s._v("12345")]),s._v(" 为作业 id）。导出的数据首先会写入这个临时目录。每个查询计划会生成一个文件，文件名示例：")]),s._v(" "),a("p",[a("code",[s._v("export-data-c69fcf2b6db5420f-a96b94c1ff8bccef-1561453713822")])]),s._v(" "),a("p",[s._v("其中 "),a("code",[s._v("c69fcf2b6db5420f-a96b94c1ff8bccef")]),s._v(" 为查询计划的 query id。"),a("code",[s._v("1561453713822")]),s._v(" 为文件生成的时间戳。")]),s._v(" "),a("p",[s._v("当所有数据都导出后，Doris 会将这些文件 rename 到用户指定的路径中。")]),s._v(" "),a("h3",{attrs:{id:"broker-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-参数"}},[s._v("#")]),s._v(" Broker 参数")]),s._v(" "),a("p",[s._v("Export 需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/broker.html"}},[s._v("Broker文档")])],1),s._v(" "),a("h2",{attrs:{id:"开始导出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始导出"}},[s._v("#")]),s._v(" 开始导出")]),s._v(" "),a("p",[s._v("Export 的详细用法可参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[s._v("SHOW EXPORT")]),s._v(" 。")],1),s._v(" "),a("h3",{attrs:{id:"导出到hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导出到hdfs"}},[s._v("#")]),s._v(" 导出到HDFS")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("EXPORT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tbl1 \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("expr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs://host/path/to/export/"')]),s._v(" \nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"label"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mylabel"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column_separator"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"columns"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"col1,col2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec_mem_limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2147483648"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timeout"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3600"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" BROKER "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"username"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"passwd"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("label")]),s._v("：本次导出作业的标识。后续可以使用这个标识查看作业状态。")]),s._v(" "),a("li",[a("code",[s._v("column_separator")]),s._v("：列分隔符。默认为 "),a("code",[s._v("\\t")]),s._v("。支持不可见字符，比如 '\\x07'。")]),s._v(" "),a("li",[a("code",[s._v("columns")]),s._v("：要导出的列，使用英文状态逗号隔开，如果不填这个参数默认是导出表的所有列。")]),s._v(" "),a("li",[a("code",[s._v("line_delimiter")]),s._v("：行分隔符。默认为 "),a("code",[s._v("\\n")]),s._v("。支持不可见字符，比如 '\\x07'。")]),s._v(" "),a("li",[a("code",[s._v("exec_mem_limit")]),s._v("： 表示 Export 作业中，一个查询计划在单个 BE 上的内存使用限制。默认 2GB。单位字节。")]),s._v(" "),a("li",[a("code",[s._v("timeout")]),s._v("：作业超时时间。默认 2小时。单位秒。")]),s._v(" "),a("li",[a("code",[s._v("tablet_num_per_task")]),s._v("：每个查询计划分配的最大分片数。默认为 5。")])]),s._v(" "),a("h3",{attrs:{id:"查看导出状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看导出状态"}},[s._v("#")]),s._v(" 查看导出状态")]),s._v(" "),a("p",[s._v("提交作业后，可以通过  "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[s._v("SHOW EXPORT")]),s._v(" 命令查询导入作业状态。结果举例如下：")],1),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" EXPORT\\G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n     JobId: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14008")]),s._v("\n     State: FINISHED\n  Progress: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("\n  TaskInfo: {"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"partitions"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"exec mem limit"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2147483648")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"column separator"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"line delimiter"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tablet num"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hdfs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"coord num"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default_cluster:db1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tbl"')]),s._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tbl3"')]),s._v("}\n      Path: bos:"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//bj-test-cmy/export/")]),s._v("\nCreateTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("\n StartTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("28")]),s._v("\nFinishTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("06")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("34")]),s._v("\n   Timeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3600")]),s._v("\n  ErrorMsg: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("JobId：作业的唯一 ID")]),s._v(" "),a("li",[s._v("State：作业状态：\n"),a("ul",[a("li",[s._v("PENDING：作业待调度")]),s._v(" "),a("li",[s._v("EXPORTING：数据导出中")]),s._v(" "),a("li",[s._v("FINISHED：作业成功")]),s._v(" "),a("li",[s._v("CANCELLED：作业失败")])])]),s._v(" "),a("li",[s._v("Progress：作业进度。该进度以查询计划为单位。假设一共 10 个查询计划，当前已完成 3 个，则进度为 30%。")]),s._v(" "),a("li",[s._v("TaskInfo：以 Json 格式展示的作业信息：\n"),a("ul",[a("li",[s._v("db：数据库名")]),s._v(" "),a("li",[s._v("tbl：表名")]),s._v(" "),a("li",[s._v("partitions：指定导出的分区。"),a("code",[s._v("*")]),s._v(" 表示所有分区。")]),s._v(" "),a("li",[s._v("exec mem limit：查询计划内存使用限制。单位字节。")]),s._v(" "),a("li",[s._v("column separator：导出文件的列分隔符。")]),s._v(" "),a("li",[s._v("line delimiter：导出文件的行分隔符。")]),s._v(" "),a("li",[s._v("tablet num：涉及的总 Tablet 数量。")]),s._v(" "),a("li",[s._v("broker：使用的 broker 的名称。")]),s._v(" "),a("li",[s._v("coord num：查询计划的个数。")])])]),s._v(" "),a("li",[s._v("Path：远端存储上的导出路径。")]),s._v(" "),a("li",[s._v("CreateTime/StartTime/FinishTime：作业的创建时间、开始调度时间和结束时间。")]),s._v(" "),a("li",[s._v("Timeout：作业超时时间。单位是秒。该时间从 CreateTime 开始计算。")]),s._v(" "),a("li",[s._v("ErrorMsg：如果作业出现错误，这里会显示错误原因。")])]),s._v(" "),a("h2",{attrs:{id:"最佳实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[s._v("#")]),s._v(" 最佳实践")]),s._v(" "),a("h3",{attrs:{id:"查询计划的拆分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询计划的拆分"}},[s._v("#")]),s._v(" 查询计划的拆分")]),s._v(" "),a("p",[s._v("一个 Export 作业有多少查询计划需要执行，取决于总共有多少 Tablet，以及一个查询计划最多可以分配多少个 Tablet。因为多个查询计划是串行执行的，所以如果让一个查询计划处理更多的分片，则可以减少作业的执行时间。但如果查询计划出错（比如调用 Broker 的 RPC 失败，远端存储出现抖动等），过多的 Tablet 会导致一个查询计划的重试成本变高。所以需要合理安排查询计划的个数以及每个查询计划所需要扫描的分片数，在执行时间和执行成功率之间做出平衡。一般建议一个查询计划扫描的数据量在 3-5 GB内（一个表的 Tablet 的大小以及个数可以通过 "),a("code",[s._v("SHOW TABLET FROM tbl_name;")]),s._v(" 语句查看。）。")]),s._v(" "),a("h3",{attrs:{id:"exec-mem-limit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec-mem-limit"}},[s._v("#")]),s._v(" exec_mem_limit")]),s._v(" "),a("p",[s._v("通常一个 Export 作业的查询计划只有 "),a("code",[s._v("扫描")]),s._v("-"),a("code",[s._v("导出")]),s._v(" 两部分，不涉及需要太多内存的计算逻辑。所以通常 2GB 的默认内存限制可以满足需求。但在某些场景下，比如一个查询计划，在同一个 BE 上需要扫描的 Tablet 过多，或者 Tablet 的数据版本过多时，可能会导致内存不足。此时需要通过这个参数设置更大的内存，比如 4GB、8GB 等。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("ul",[a("li",[s._v("不建议一次性导出大量数据。一个 Export 作业建议的导出数据量最大在几十 GB。过大的导出会导致更多的垃圾文件和更高的重试成本。")]),s._v(" "),a("li",[s._v("如果表数据量过大，建议按照分区导出。")]),s._v(" "),a("li",[s._v("在 Export 作业运行过程中，如果 FE 发生重启或切主，则 Export 作业会失败，需要用户重新提交。")]),s._v(" "),a("li",[s._v("如果 Export 作业运行失败，在远端存储中产生的 "),a("code",[s._v("__doris_export_tmp_xxx")]),s._v(" 临时目录，以及已经生成的文件不会被删除，需要用户手动删除。")]),s._v(" "),a("li",[s._v("如果 Export 作业运行成功，在远端存储中产生的 "),a("code",[s._v("__doris_export_tmp_xxx")]),s._v(" 目录，根据远端存储的文件系统语义，可能会保留，也可能会被清除。比如在百度对象存储（BOS）中，通过 rename 操作将一个目录中的最后一个文件移走后，该目录也会被删除。如果该目录没有被清除，用户可以手动清除。")]),s._v(" "),a("li",[s._v("当 Export 运行完成后（成功或失败），FE 发生重启或切主，则  "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[s._v("SHOW EXPORT")]),s._v(" 展示的作业的部分信息会丢失，无法查看。")],1),s._v(" "),a("li",[s._v("Export 作业只会导出 Base 表的数据，不会导出 Rollup Index 的数据。")]),s._v(" "),a("li",[s._v("Export 作业会扫描数据，占用 IO 资源，可能会影响系统的查询延迟。")])]),s._v(" "),a("h2",{attrs:{id:"相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关配置"}},[s._v("#")]),s._v(" 相关配置")]),s._v(" "),a("h3",{attrs:{id:"fe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fe"}},[s._v("#")]),s._v(" FE")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("export_checker_interval_second")]),s._v("：Export 作业调度器的调度间隔，默认为 5 秒。设置该参数需重启 FE。")]),s._v(" "),a("li",[a("code",[s._v("export_running_job_num_limit")]),s._v("：正在运行的 Export 作业数量限制。如果超过，则作业将等待并处于 PENDING 状态。默认为 5，可以运行时调整。")]),s._v(" "),a("li",[a("code",[s._v("export_task_default_timeout_second")]),s._v("：Export 作业默认超时时间。默认为 2 小时。可以运行时调整。")]),s._v(" "),a("li",[a("code",[s._v("export_tablet_num_per_task")]),s._v("：一个查询计划负责的最大分片数。默认为 5。")])]),s._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),a("p",[s._v("关于 Export 使用的更多详细语法及最佳实践，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.html"}},[s._v("Export")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),a("code",[s._v("HELP EXPORT")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);