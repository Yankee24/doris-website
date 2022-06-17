(window.webpackJsonp=window.webpackJsonp||[]).push([[1784],{2409:function(a,s,e){"use strict";e.r(s);var t=e(15),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"broker-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[a._v("#")]),a._v(" Broker Load")]),a._v(" "),e("p",[a._v("Broker load 是一个异步的导入方式，支持的数据源取决于 Broker 进程支持的数据源。")]),a._v(" "),e("p",[a._v("用户需要通过 MySQL 协议 创建 Broker load 导入，并通过查看导入命令检查导入结果。")]),a._v(" "),e("h2",{attrs:{id:"适用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[a._v("#")]),a._v(" 适用场景")]),a._v(" "),e("ul",[e("li",[a._v("源数据在 Broker 可以访问的存储系统中，如 HDFS。")]),a._v(" "),e("li",[a._v("数据量在 几十到百GB 级别。")])]),a._v(" "),e("h2",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[a._v("#")]),a._v(" 名词解释")]),a._v(" "),e("ol",[e("li",[a._v("Frontend（FE）：Doris 系统的元数据和调度节点。在导入流程中主要负责导入 plan 生成和导入任务的调度工作。")]),a._v(" "),e("li",[a._v("Backend（BE）：Doris 系统的计算和存储节点。在导入流程中主要负责数据的 ETL 和存储。")]),a._v(" "),e("li",[a._v("Broker：Broker 为一个独立的无状态进程。封装了文件系统接口，提供 Doris 读取远端存储系统中文件的能力。")]),a._v(" "),e("li",[a._v("Plan：导入执行计划，BE 会执行导入执行计划将数据导入到 Doris 系统中。")])]),a._v(" "),e("h2",{attrs:{id:"基本原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[a._v("#")]),a._v(" 基本原理")]),a._v(" "),e("p",[a._v("用户在提交导入任务后，FE 会生成对应的 Plan 并根据目前 BE 的个数和文件的大小，将 Plan 分给 多个 BE 执行，每个 BE 执行一部分导入数据。")]),a._v(" "),e("p",[a._v("BE 在执行的过程中会从 Broker 拉取数据，在对数据 transform 之后将数据导入系统。所有 BE 均完成导入，由 FE 最终决定导入是否成功。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("                 +\n                 | 1. user create broker load\n                 v\n            +----+----+\n            |         |\n            |   FE    |\n            |         |\n            +----+----+\n                 |\n                 | 2. BE etl and load the data\n    +--------------------------+\n    |            |             |\n+---v---+     +--v----+    +---v---+\n|       |     |       |    |       |\n|  BE   |     |  BE   |    |   BE  |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +--+-^--+\n    | |           | |         | |\n    | |           | |         | | 3. pull data from broker\n+---v-+-+     +---v-+-+    +--v-+--+\n|       |     |       |    |       |\n|Broker |     |Broker |    |Broker |\n|       |     |       |    |       |\n+---+-^-+     +---+-^-+    +---+-^-+\n    | |           | |          | |\n+---v-+-----------v-+----------v-+-+\n|       HDFS/BOS/AFS cluster       |\n|                                  |\n+----------------------------------+\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br")])]),e("h2",{attrs:{id:"基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[a._v("#")]),a._v(" 基本操作")]),a._v(" "),e("h3",{attrs:{id:"创建导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建导入"}},[a._v("#")]),a._v(" 创建导入")]),a._v(" "),e("p",[a._v("Broker load 创建导入语句")]),a._v(" "),e("p",[a._v("语法：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LOAD LABEL db_name.label_name \n(data_desc, ...)\nWITH BROKER broker_name broker_properties\n[PROPERTIES (key1=value1, ... )]\n\n* data_desc:\n\n    DATA INFILE ('file_path', ...)\n    [NEGATIVE]\n    INTO TABLE tbl_name\n    [PARTITION (p1, p2)]\n    [COLUMNS TERMINATED BY separator ]\n    [(col1, ...)]\n    [PRECEDING FILTER predicate]\n    [SET (k1=f1(xx), k2=f2(xx))]\n    [WHERE predicate]\n\n* broker_properties: \n\n    (key1=value1, ...)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br")])]),e("p",[a._v("示例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1\n    ),\n    DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file2")\n    INTO TABLE tbl2\n    COLUMNS TERMINATED BY ","\n    (col1, col2)\n    where col1 > 1\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br")])]),e("p",[a._v("创建导入的详细语法执行 "),e("code",[a._v("HELP BROKER LOAD")]),a._v(" 查看语法帮助。这里主要介绍 Broker load 的创建导入语法中参数意义和注意事项。")]),a._v(" "),e("h4",{attrs:{id:"label"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#label"}},[a._v("#")]),a._v(" Label")]),a._v(" "),e("p",[a._v("导入任务的标识。每个导入任务，都有一个在单 database 内部唯一的 Label。Label 是用户在导入命令中自定义的名称。通过这个 Label，用户可以查看对应导入任务的执行情况。")]),a._v(" "),e("p",[a._v("Label 的另一个作用，是防止用户重复导入相同的数据。"),e("strong",[a._v("强烈推荐用户同一批次数据使用相同的label。这样同一批次数据的重复请求只会被接受一次，保证了 At-Most-Once 语义")])]),a._v(" "),e("p",[a._v("当 Label 对应的导入作业状态为 CANCELLED 时，可以再次使用该 Label 提交导入作业。")]),a._v(" "),e("h4",{attrs:{id:"数据描述类参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据描述类参数"}},[a._v("#")]),a._v(" 数据描述类参数")]),a._v(" "),e("p",[a._v("数据描述类参数主要指的是 Broker load 创建导入语句中的属于 "),e("code",[a._v("data_desc")]),a._v(" 部分的参数。每组 "),e("code",[a._v("data_desc")]),a._v(" 主要表述了本次导入涉及到的数据源地址，ETL 函数，目标表及分区等信息。")]),a._v(" "),e("p",[a._v("下面主要对数据描述类的部分参数详细解释：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("多表导入")]),a._v(" "),e("p",[a._v("Broker load 支持一次导入任务涉及多张表，每个 Broker load 导入任务可在多个 "),e("code",[a._v("data_desc")]),a._v(" 声明多张表来实现多表导入。每个单独的 "),e("code",[a._v("data_desc")]),a._v(" 还可以指定属于该表的数据源地址。Broker load 保证了单次导入的多张表之间原子性成功或失败。")])]),a._v(" "),e("li",[e("p",[a._v("negative")]),a._v(" "),e("p",[e("code",[a._v("data_desc")]),a._v("中还可以设置数据取反导入。这个功能主要用于，当数据表中聚合列的类型都为 SUM 类型时。如果希望撤销某一批导入的数据。则可以通过 "),e("code",[a._v("negative")]),a._v(" 参数导入同一批数据。Doris 会自动为这一批数据在聚合列上数据取反，以达到消除同一批数据的功能。")])]),a._v(" "),e("li",[e("p",[a._v("partition")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("data_desc")]),a._v(" 中可以指定待导入表的 partition 信息，如果待导入数据不属于指定的 partition 则不会被导入。同时，不在指定 Partition 的数据会被认为是错误数据。")])]),a._v(" "),e("li",[e("p",[a._v("set column mapping")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("data_desc")]),a._v(" 中的 SET 语句负责设置列函数变换，这里的列函数变换支持所有查询的等值表达式变换。如果原始数据的列和表中的列不一一对应，就需要用到这个属性。")])]),a._v(" "),e("li",[e("p",[a._v("preceding filter predicate")]),a._v(" "),e("p",[a._v("用于过滤原始数据。原始数据是未经列映射、转换的数据。用户可以在对转换前的数据前进行一次过滤，选取期望的数据，再进行转换。")])]),a._v(" "),e("li",[e("p",[a._v("where predicate")]),a._v(" "),e("p",[a._v("在 "),e("code",[a._v("data_desc")]),a._v(" 中的 WHERE 语句中负责过滤已经完成 transform 的数据，被 filter 的数据不会进入容忍率的统计中。如果多个 data_desc 中声明了同一张表的多个条件的话，则会 merge 同一张表的多个条件，merge 策略是 AND 。")])])]),a._v(" "),e("h4",{attrs:{id:"导入作业参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导入作业参数"}},[a._v("#")]),a._v(" 导入作业参数")]),a._v(" "),e("p",[a._v("导入作业参数主要指的是 Broker load 创建导入语句中的属于 "),e("code",[a._v("opt_properties")]),a._v("部分的参数。导入作业参数是作用于整个导入作业的。")]),a._v(" "),e("p",[a._v("下面主要对导入作业参数的部分参数详细解释：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("timeout")]),a._v(" "),e("p",[a._v("导入作业的超时时间(以秒为单位)，用户可以在 "),e("code",[a._v("opt_properties")]),a._v(" 中自行设置每个导入的超时时间。导入任务在设定的 timeout 时间内未完成则会被系统取消，变成 CANCELLED。Broker load 的默认导入超时时间为4小时。")]),a._v(" "),e("p",[a._v("通常情况下，用户不需要手动设置导入任务的超时时间。当在默认超时时间内无法完成导入时，可以手动设置任务的超时时间。")]),a._v(" "),e("blockquote",[e("p",[a._v("推荐超时时间")]),a._v(" "),e("p",[a._v("总文件大小（MB） / 用户 Doris 集群最慢导入速度(MB/s)  > timeout > （（总文件大小(MB) * 待导入的表及相关 Roll up 表的个数） / (10 * 导入并发数） ）")])]),a._v(" "),e("blockquote",[e("p",[a._v("导入并发数见文档最后的导入系统配置说明，公式中的 10 为目前的导入限速 10MB/s。")])]),a._v(" "),e("blockquote",[e("p",[a._v("例如一个 1G 的待导入数据，待导入表包含3个 Rollup 表，当前的导入并发数为 3。则 timeout 的 最小值为 "),e("code",[a._v("(1 * 1024 * 3 ) / (10 * 3) = 102 秒")])])]),a._v(" "),e("p",[a._v("由于每个 Doris 集群的机器环境不同且集群并发的查询任务也不同，所以用户 Doris 集群的最慢导入速度需要用户自己根据历史的导入任务速度进行推测。")])]),a._v(" "),e("li",[e("p",[a._v("max_filter_ratio")]),a._v(" "),e("p",[a._v("导入任务的最大容忍率，默认为0容忍，取值范围是0~1。当导入的错误率超过该值，则导入失败。")]),a._v(" "),e("p",[a._v("如果用户希望忽略错误的行，可以通过设置这个参数大于 0，来保证导入可以成功。")]),a._v(" "),e("p",[a._v("计算公式为：")]),a._v(" "),e("p",[e("code",[a._v("max_filter_ratio = (dpp.abnorm.ALL / (dpp.abnorm.ALL + dpp.norm.ALL ) )")])]),a._v(" "),e("p",[e("code",[a._v("dpp.abnorm.ALL")]),a._v(" 表示数据质量不合格的行数。如类型不匹配，列数不匹配，长度不匹配等等。")]),a._v(" "),e("p",[e("code",[a._v("dpp.norm.ALL")]),a._v(" 指的是导入过程中正确数据的条数。可以通过 "),e("code",[a._v("SHOW LOAD")]),a._v(" 命令查询导入任务的正确数据量。")]),a._v(" "),e("p",[a._v("原始文件的行数 = "),e("code",[a._v("dpp.abnorm.ALL + dpp.norm.ALL")])])]),a._v(" "),e("li",[e("p",[a._v("exec_mem_limit")]),a._v(" "),e("p",[a._v("导入内存限制。默认是 2GB。单位为字节。")])]),a._v(" "),e("li",[e("p",[a._v("strict_mode")]),a._v(" "),e("p",[a._v("Broker load 导入可以开启 strict mode 模式。开启方式为 "),e("code",[a._v('properties ("strict_mode" = "true")')]),a._v(" 。默认的 strict mode 为关闭。")]),a._v(" "),e("p",[a._v("strict mode 模式的意思是：对于导入过程中的列类型转换进行严格过滤。严格过滤的策略如下：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("对于列类型转换来说，如果 strict mode 为true，则错误的数据将被 filter。这里的错误数据是指：原始数据并不为空值，在参与列类型转换后结果为空值的这一类数据。")])]),a._v(" "),e("li",[e("p",[a._v("对于导入的某列由函数变换生成时，strict mode 对其不产生影响。")])]),a._v(" "),e("li",[e("p",[a._v("对于导入的某列类型包含范围限制的，如果原始数据能正常通过类型转换，但无法通过范围限制的，strict mode 对其也不产生影响。例如：如果类型是 decimal(1,0), 原始数据为 10，则属于可以通过类型转换但不在列声明的范围内。这种数据 strict 对其不产生影响。")])])])]),a._v(" "),e("li",[e("p",[a._v("merge_type\n数据的合并类型，一共支持三种类型APPEND、DELETE、MERGE 其中，APPEND是默认值，表示这批数据全部需要追加到现有数据中，DELETE 表示删除与这批数据key相同的所有行，MERGE 语义 需要与delete 条件联合使用，表示满足delete 条件的数据按照DELETE 语义处理其余的按照APPEND 语义处理")])])]),a._v(" "),e("h4",{attrs:{id:"strict-mode-与-source-data-的导入关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#strict-mode-与-source-data-的导入关系"}},[a._v("#")]),a._v(" strict mode 与 source data 的导入关系")]),a._v(" "),e("p",[a._v("这里以列类型为 TinyInt 来举例")]),a._v(" "),e("blockquote",[e("p",[a._v("注：当表中的列允许导入空值时")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("source data")]),a._v(" "),e("th",[a._v("source data example")]),a._v(" "),e("th",[a._v("string to int")]),a._v(" "),e("th",[a._v("strict_mode")]),a._v(" "),e("th",[a._v("result")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("空值")]),a._v(" "),e("td",[a._v("\\N")]),a._v(" "),e("td",[a._v("N/A")]),a._v(" "),e("td",[a._v("true or false")]),a._v(" "),e("td",[a._v("NULL")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("aaa or 2000")]),a._v(" "),e("td",[a._v("NULL")]),a._v(" "),e("td",[a._v("true")]),a._v(" "),e("td",[a._v("invalid data(filtered)")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("aaa")]),a._v(" "),e("td",[a._v("NULL")]),a._v(" "),e("td",[a._v("false")]),a._v(" "),e("td",[a._v("NULL")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("true or false")]),a._v(" "),e("td",[a._v("correct data")])])])]),a._v(" "),e("p",[a._v("这里以列类型为 Decimal(1,0) 举例")]),a._v(" "),e("blockquote",[e("p",[a._v("注：当表中的列允许导入空值时")])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",[a._v("source data")]),a._v(" "),e("th",[a._v("source data example")]),a._v(" "),e("th",[a._v("string to int")]),a._v(" "),e("th",[a._v("strict_mode")]),a._v(" "),e("th",[a._v("result")])])]),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("空值")]),a._v(" "),e("td",[a._v("\\N")]),a._v(" "),e("td",[a._v("N/A")]),a._v(" "),e("td",[a._v("true or false")]),a._v(" "),e("td",[a._v("NULL")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("aaa")]),a._v(" "),e("td",[a._v("NULL")]),a._v(" "),e("td",[a._v("true")]),a._v(" "),e("td",[a._v("invalid data(filtered)")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("aaa")]),a._v(" "),e("td",[a._v("NULL")]),a._v(" "),e("td",[a._v("false")]),a._v(" "),e("td",[a._v("NULL")])]),a._v(" "),e("tr",[e("td",[a._v("not null")]),a._v(" "),e("td",[a._v("1 or 10")]),a._v(" "),e("td",[a._v("1")]),a._v(" "),e("td",[a._v("true or false")]),a._v(" "),e("td",[a._v("correct data")])])])]),a._v(" "),e("blockquote",[e("p",[a._v("注意：10 虽然是一个超过范围的值，但是因为其类型符合 decimal的要求，所以 strict mode对其不产生影响。10 最后会在其他 ETL 处理流程中被过滤。但不会被 strict mode 过滤。")])]),a._v(" "),e("h4",{attrs:{id:"broker-参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broker-参数"}},[a._v("#")]),a._v(" Broker 参数")]),a._v(" "),e("p",[a._v("Broker Load 需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/0.15/administrator-guide/broker.html"}},[a._v("Broker文档")])],1),a._v(" "),e("h3",{attrs:{id:"查看导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看导入"}},[a._v("#")]),a._v(" 查看导入")]),a._v(" "),e("p",[a._v("Broker load 导入方式由于是异步的，所以用户必须将创建导入的 Label 记录，并且在"),e("strong",[a._v("查看导入命令中使用 Label 来查看导入结果")]),a._v("。查看导入命令在所有导入方式中是通用的，具体语法可执行 "),e("code",[a._v("HELP SHOW LOAD")]),a._v(" 查看。")]),a._v(" "),e("p",[a._v("示例：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('mysql> show load order by createtime desc limit 1\\G\n*************************** 1. row ***************************\n         JobId: 76391\n         Label: label1\n         State: FINISHED\n      Progress: ETL:N/A; LOAD:100%\n          Type: BROKER\n       EtlInfo: unselected.rows=4; dpp.abnorm.ALL=15; dpp.norm.ALL=28133376\n      TaskInfo: cluster:N/A; timeout(s):10800; max_filter_ratio:5.0E-5\n      ErrorMsg: N/A\n    CreateTime: 2019-07-27 11:46:42\n  EtlStartTime: 2019-07-27 11:46:44\n EtlFinishTime: 2019-07-27 11:46:44\n LoadStartTime: 2019-07-27 11:46:44\nLoadFinishTime: 2019-07-27 11:50:16\n           URL: http://192.168.1.1:8040/api/_load_error_log?file=__shard_4/error_log_insert_stmt_4bb00753932c491a-a6da6e2725415317_4bb00753932c491a_a6da6e2725415317\n    JobDetails: {"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("p",[a._v("下面主要介绍了查看导入命令返回结果集中参数意义：")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("JobId")]),a._v(" "),e("p",[a._v("导入任务的唯一ID，每个导入任务的 JobId 都不同，由系统自动生成。与 Label 不同的是，JobId永远不会相同，而 Label 则可以在导入任务失败后被复用。")])]),a._v(" "),e("li",[e("p",[a._v("Label")]),a._v(" "),e("p",[a._v("导入任务的标识。")])]),a._v(" "),e("li",[e("p",[a._v("State")]),a._v(" "),e("p",[a._v("导入任务当前所处的阶段。在 Broker load 导入过程中主要会出现 PENDING 和 LOADING 这两个导入中的状态。如果 Broker load 处于 PENDING 状态，则说明当前导入任务正在等待被执行；LOADING 状态则表示正在执行中。")]),a._v(" "),e("p",[a._v("导入任务的最终阶段有两个：CANCELLED 和 FINISHED，当 Load job 处于这两个阶段时，导入完成。其中 CANCELLED 为导入失败，FINISHED 为导入成功。")])]),a._v(" "),e("li",[e("p",[a._v("Progress")]),a._v(" "),e("p",[a._v("导入任务的进度描述。分为两种进度：ETL 和 LOAD，对应了导入流程的两个阶段 ETL 和 LOADING。目前 Broker load 由于只有 LOADING 阶段，所以 ETL 则会永远显示为 "),e("code",[a._v("N/A")])]),a._v(" "),e("p",[a._v("LOAD 的进度范围为：0~100%。")]),a._v(" "),e("p",[e("code",[a._v("LOAD 进度 = 当前完成导入的表个数 / 本次导入任务设计的总表个数 * 100%")])]),a._v(" "),e("p",[e("strong",[a._v("如果所有导入表均完成导入，此时 LOAD 的进度为 99%")]),a._v(" 导入进入到最后生效阶段，整个导入完成后，LOAD 的进度才会改为 100%。")]),a._v(" "),e("p",[a._v("导入进度并不是线性的。所以如果一段时间内进度没有变化，并不代表导入没有在执行。")])]),a._v(" "),e("li",[e("p",[a._v("Type")]),a._v(" "),e("p",[a._v("导入任务的类型。Broker load 的 type 取值只有 BROKER。")])]),a._v(" "),e("li",[e("p",[a._v("EtlInfo")]),a._v(" "),e("p",[a._v("主要显示了导入的数据量指标 "),e("code",[a._v("unselected.rows")]),a._v(" , "),e("code",[a._v("dpp.norm.ALL")]),a._v(" 和 "),e("code",[a._v("dpp.abnorm.ALL")]),a._v("。用户可以根据第一个数值判断 where 条件过滤了多少行，后两个指标验证当前导入任务的错误率是否超过 "),e("code",[a._v("max_filter_ratio")]),a._v("。")]),a._v(" "),e("p",[a._v("三个指标之和就是原始数据量的总行数。")])]),a._v(" "),e("li",[e("p",[a._v("TaskInfo")]),a._v(" "),e("p",[a._v("主要显示了当前导入任务参数，也就是创建 Broker load 导入任务时用户指定的导入任务参数，包括："),e("code",[a._v("cluster")]),a._v("，"),e("code",[a._v("timeout")]),a._v(" 和"),e("code",[a._v("max_filter_ratio")]),a._v("。")])]),a._v(" "),e("li",[e("p",[a._v("ErrorMsg")]),a._v(" "),e("p",[a._v("在导入任务状态为CANCELLED，会显示失败的原因，显示分两部分：type 和 msg，如果导入任务成功则显示 "),e("code",[a._v("N/A")]),a._v("。")]),a._v(" "),e("p",[a._v("type的取值意义：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("USER_CANCEL: 用户取消的任务\nETL_RUN_FAIL：在ETL阶段失败的导入任务\nETL_QUALITY_UNSATISFIED：数据质量不合格，也就是错误数据率超过了 max_filter_ratio\nLOAD_RUN_FAIL：在LOADING阶段失败的导入任务\nTIMEOUT：导入任务没在超时时间内完成\nUNKNOWN：未知的导入错误\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("CreateTime/EtlStartTime/EtlFinishTime/LoadStartTime/LoadFinishTime")]),a._v(" "),e("p",[a._v("这几个值分别代表导入创建的时间，ETL阶段开始的时间，ETL阶段完成的时间，Loading阶段开始的时间和整个导入任务完成的时间。")]),a._v(" "),e("p",[a._v("Broker load 导入由于没有 ETL 阶段，所以其 EtlStartTime, EtlFinishTime, LoadStartTime 被设置为同一个值。")]),a._v(" "),e("p",[a._v("导入任务长时间停留在 CreateTime，而 LoadStartTime 为 N/A 则说明目前导入任务堆积严重。用户可减少导入提交的频率。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("LoadFinishTime - CreateTime = 整个导入任务所消耗时间\nLoadFinishTime - LoadStartTime = 整个 Broker load 导入任务执行时间 = 整个导入任务所消耗时间 - 导入任务等待的时间\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("URL")]),a._v(" "),e("p",[a._v("导入任务的错误数据样例，访问 URL 地址既可获取本次导入的错误数据样例。当本次导入不存在错误数据时，URL 字段则为 N/A。")])]),a._v(" "),e("li",[e("p",[a._v("JobDetails")]),a._v(" "),e("p",[a._v("显示一些作业的详细运行状态。包括导入文件的个数、总大小（字节）、子任务个数、已处理的原始行数，运行子任务的 BE 节点 Id，未完成的 BE 节点 Id。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{"Unfinished backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"ScannedRows":2390016,"TaskNumber":1,"All backends":{"9c3441027ff948a0-8287923329a2b6a7":[10002]},"FileNumber":1,"FileSize":1073741824}\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中已处理的原始行数，每 5 秒更新一次。该行数仅用于展示当前的进度，不代表最终实际的处理行数。实际处理行数以 EtlInfo 中显示的为准。")])])]),a._v(" "),e("h3",{attrs:{id:"取消导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消导入"}},[a._v("#")]),a._v(" 取消导入")]),a._v(" "),e("p",[a._v("当 Broker load 作业状态不为 CANCELLED 或 FINISHED 时，可以被用户手动取消。取消时需要指定待取消导入任务的 Label 。取消导入命令语法可执行 "),e("code",[a._v("HELP CANCEL LOAD")]),a._v("查看。")]),a._v(" "),e("h2",{attrs:{id:"相关系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关系统配置"}},[a._v("#")]),a._v(" 相关系统配置")]),a._v(" "),e("h3",{attrs:{id:"fe-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fe-配置"}},[a._v("#")]),a._v(" FE 配置")]),a._v(" "),e("p",[a._v("下面几个配置属于 Broker load 的系统级别配置，也就是作用于所有 Broker load 导入任务的配置。主要通过修改 "),e("code",[a._v("fe.conf")]),a._v("来调整配置值。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("min_bytes_per_broker_scanner/max_bytes_per_broker_scanner/max_broker_concurrency")]),a._v(" "),e("p",[a._v("前两个配置限制了单个 BE 处理的数据量的最小和最大值。第三个配置限制了一个作业的最大的导入并发数。最小处理的数据量，最大并发数，源文件的大小和当前集群 BE 的个数 "),e("strong",[a._v("共同决定了本次导入的并发数")]),a._v("。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("本次导入并发数 = Math.min(源文件大小/最小处理量，最大并发数，当前BE节点个数)\n本次导入单个BE的处理量 = 源文件大小/本次导入的并发数\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("通常一个导入作业支持的最大数据量为 "),e("code",[a._v("max_bytes_per_broker_scanner * BE 节点数")]),a._v("。如果需要导入更大数据量，则需要适当调整 "),e("code",[a._v("max_bytes_per_broker_scanner")]),a._v(" 参数的大小。")]),a._v(" "),e("p",[a._v("默认配置：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("参数名：min_bytes_per_broker_scanner， 默认 64MB，单位bytes。\n参数名：max_broker_concurrency， 默认 10。\n参数名：max_bytes_per_broker_scanner，默认 3G，单位bytes。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])])])]),a._v(" "),e("h2",{attrs:{id:"最佳实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#最佳实践"}},[a._v("#")]),a._v(" 最佳实践")]),a._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[a._v("#")]),a._v(" 应用场景")]),a._v(" "),e("p",[a._v("使用 Broker load 最适合的场景就是原始数据在文件系统（HDFS，BOS，AFS）中的场景。其次，由于 Broker load 是单次导入中唯一的一种异步导入的方式，所以如果用户在导入大文件中，需要使用异步接入，也可以考虑使用 Broker load。")]),a._v(" "),e("h3",{attrs:{id:"数据量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据量"}},[a._v("#")]),a._v(" 数据量")]),a._v(" "),e("p",[a._v("这里仅讨论单个 BE 的情况，如果用户集群有多个 BE 则下面标题中的数据量应该乘以 BE 个数来计算。比如：如果用户有3个 BE，则 3G 以下（包含）则应该乘以 3，也就是 9G 以下（包含）。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("3G 以下（包含）")]),a._v(" "),e("p",[a._v("用户可以直接提交 Broker load 创建导入请求。")])]),a._v(" "),e("li",[e("p",[a._v("3G 以上")]),a._v(" "),e("p",[a._v("由于单个导入 BE 最大的处理量为 3G，超过 3G 的待导入文件就需要通过调整 Broker load 的导入参数来实现大文件的导入。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("根据当前 BE 的个数和原始文件的大小修改单个 BE 的最大扫描量和最大并发数。")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("修改 fe.conf 中配置\n\nmax_broker_concurrency = BE 个数\n当前导入任务单个 BE 处理的数据量 = 原始文件大小 / max_broker_concurrency\nmax_bytes_per_broker_scanner >= 当前导入任务单个 BE 处理的数据量\n\n比如一个 100G 的文件，集群的 BE 个数为 10 个\nmax_broker_concurrency = 10\nmax_bytes_per_broker_scanner >= 10G = 100G / 10\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br")])]),e("p",[a._v("修改后，所有的 BE 会并发的处理导入任务，每个 BE 处理原始文件的一部分。")]),a._v(" "),e("p",[e("em",[a._v("注意：上述两个 FE 中的配置均为系统配置，也就是说其修改是作用于所有的 Broker load的任务的。")])])]),a._v(" "),e("li",[e("p",[a._v("在创建导入的时候自定义当前导入任务的 timeout 时间")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("当前导入任务单个 BE 处理的数据量 / 用户 Doris 集群最慢导入速度(MB/s) >= 当前导入任务的 timeout 时间 >= 当前导入任务单个 BE 处理的数据量 / 10M/s\n\n比如一个 100G 的文件，集群的 BE 个数为 10个\ntimeout >= 1000s = 10G / 10M/s\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("当用户发现第二步计算出的 timeout 时间超过系统默认的导入最大超时时间 4小时")]),a._v(" "),e("p",[a._v("这时候不推荐用户将导入最大超时时间直接改大来解决问题。单个导入时间如果超过默认的导入最大超时时间4小时，最好是通过切分待导入文件并且分多次导入来解决问题。主要原因是：单次导入超过4小时的话，导入失败后重试的时间成本很高。")]),a._v(" "),e("p",[a._v("可以通过如下公式计算出 Doris 集群期望最大导入文件数据量：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("期望最大导入文件数据量 = 14400s * 10M/s * BE 个数\n比如：集群的 BE 个数为 10个\n期望最大导入文件数据量 = 14400s * 10M/s * 10 = 1440000M ≈ 1440G\n\n注意：一般用户的环境可能达不到 10M/s 的速度，所以建议超过 500G 的文件都进行文件切分，再导入。\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])])])])])]),a._v(" "),e("h3",{attrs:{id:"性能分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能分析"}},[a._v("#")]),a._v(" 性能分析")]),a._v(" "),e("p",[a._v("可以在提交 LOAD 作业前，先执行 "),e("code",[a._v("set enable_profile=true")]),a._v(" 打开会话变量。然后提交导入作业。待导入作业完成后，可以在 FE 的 web 页面的 "),e("code",[a._v("Queris")]),a._v(" 标签中查看到导入作业的 Profile。")]),a._v(" "),e("p",[a._v("这个 Profile 可以帮助分析导入作业的运行状态。")]),a._v(" "),e("p",[a._v("当前只有作业成功执行后，才能查看 Profile。")]),a._v(" "),e("h3",{attrs:{id:"完整例子"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整例子"}},[a._v("#")]),a._v(" 完整例子")]),a._v(" "),e("p",[a._v("数据情况：用户数据在 HDFS 中，文件地址为 hdfs://abc.com:8888/store_sales, hdfs 的认证用户名为 root, 密码为 password, 数据量大小约为 30G，希望导入到数据库 bj_sales 的表 store_sales 中。")]),a._v(" "),e("p",[a._v("集群情况：集群的 BE 个数约为 3 个，Broker 名称均为 broker。")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("step1: 经过上述方法的计算，本次导入的单个 BE 导入量为 10G，则需要先修改 FE 的配置，将单个 BE 导入最大量修改为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("max_bytes_per_broker_scanner = 10737418240\n\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("step2: 经计算，本次导入的时间大约为 1000s，并未超过默认超时时间，可不配置导入自定义超时时间。")])]),a._v(" "),e("li",[e("p",[a._v("step3：创建导入语句")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('LOAD LABEL bj_sales.store_sales_broker_load_01\n(\n    DATA INFILE("hdfs://abc.com:8888/store_sales")\n    INTO TABLE store_sales\n)\nWITH BROKER \'broker\'\n("username"="root", "password"="password");\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])])])]),a._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[a._v("#")]),a._v(" 常见问题")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("导入报错："),e("code",[a._v("Scan bytes per broker scanner exceed limit:xxx")])]),a._v(" "),e("p",[a._v("请参照文档中最佳实践部分，修改 FE 配置项 "),e("code",[a._v("max_bytes_per_broker_scanner")]),a._v(" 和 "),e("code",[a._v("max_broker_concurrency")])])]),a._v(" "),e("li",[e("p",[a._v("导入报错："),e("code",[a._v("failed to send batch")]),a._v(" 或 "),e("code",[a._v("TabletWriter add batch with unknown id")])]),a._v(" "),e("p",[a._v("请参照 "),e("RouterLink",{attrs:{to:"/zh-CN/0.15/administrator-guide/load-data/load-manual.html"}},[a._v("导入手册")]),a._v(" 中 "),e("strong",[a._v("通用系统配置")]),a._v(" 中 "),e("strong",[a._v("BE 配置")]),a._v("，适当修改 "),e("code",[a._v("query_timeout")]),a._v(" 和 "),e("code",[a._v("streaming_load_rpc_max_alive_time_sec")]),a._v("。")],1)]),a._v(" "),e("li",[e("p",[a._v("导入报错："),e("code",[a._v("LOAD_RUN_FAIL; msg:Invalid Column Name:xxx")])]),a._v(" "),e("p",[a._v("如果是PARQUET或者ORC格式的数据,需要再文件头的列名与doris表中的列名一致，如 :")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(tmp_c1,tmp_c2)\nSET\n(\n    id=tmp_c2,\n    name=tmp_c1\n)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("p",[a._v("代表获取在parquet或orc中以(tmp_c1, tmp_c2)为列名的列，映射到doris表中的(id, name)列。如果没有设置set, 则以column中的列作为映射。")]),a._v(" "),e("p",[a._v("注：如果使用某些hive版本直接生成的orc文件，orc文件中的表头并非hive meta数据，而是（_col0, _col1, _col2, ...）, 可能导致Invalid Column Name错误，那么则需要使用set进行映射")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);