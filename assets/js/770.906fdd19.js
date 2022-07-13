(window.webpackJsonp=window.webpackJsonp||[]).push([[770],{1396:function(e,_,s){"use strict";s.r(_);var a=s(15),t=Object(a.a)({},(function(){var e=this,_=e.$createElement,s=e._self._c||_;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[e._v("#")]),e._v(" 变量")]),e._v(" "),s("p",[e._v("本文档主要介绍当前支持的变量（variables）。")]),e._v(" "),s("p",[e._v("Doris 中的变量参考 MySQL 中的变量设置。但部分变量仅用于兼容一些 MySQL 客户端协议，并不产生其在 MySQL 数据库中的实际意义。")]),e._v(" "),s("h2",{attrs:{id:"变量设置与查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量设置与查看"}},[e._v("#")]),e._v(" 变量设置与查看")]),e._v(" "),s("h3",{attrs:{id:"查看"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看"}},[e._v("#")]),e._v(" 查看")]),e._v(" "),s("p",[e._v("可以通过 "),s("code",[e._v("SHOW VARIABLES [LIKE 'xxx'];")]),e._v(" 查看所有或指定的变量。如：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" VARIABLES"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" VARIABLES "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("LIKE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'%time_zone%'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[e._v("#")]),e._v(" 设置")]),e._v(" "),s("p",[e._v("部分变量可以设置全局生效或仅当前会话生效。")]),e._v(" "),s("p",[e._v("注意，在 1.1 版本之前，设置全局生效后，后续新的会话连接中会沿用设置值，但当前会话中的值不变。\n而在 1.1 版本（含）之后，设置全局生效后，后续新的会话连接中会沿用设置值，当前会话中的值也会改变。")]),e._v(" "),s("p",[e._v("仅当前会话生效，通过 "),s("code",[e._v("SET var_name=xxx;")]),e._v(" 语句来设置。如：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" exec_mem_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("137438953472")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" forward_to_master "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" time_zone "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Asia/Shanghai"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("全局生效，通过 "),s("code",[e._v("SET GLOBAL var_name=xxx;")]),e._v(" 设置。如：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("GLOBAL")]),e._v(" exec_mem_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("137438953472")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("blockquote",[s("p",[e._v("注1：只有 ADMIN 用户可以设置变量的全局生效。")])]),e._v(" "),s("p",[e._v("既支持当前会话生效又支持全局生效的变量包括：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("time_zone")])]),e._v(" "),s("li",[s("code",[e._v("wait_timeout")])]),e._v(" "),s("li",[s("code",[e._v("sql_mode")])]),e._v(" "),s("li",[s("code",[e._v("enable_profile")])]),e._v(" "),s("li",[s("code",[e._v("query_timeout")])]),e._v(" "),s("li",[s("code",[e._v("exec_mem_limit")])]),e._v(" "),s("li",[s("code",[e._v("batch_size")])]),e._v(" "),s("li",[s("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),s("li",[s("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),s("li",[s("code",[e._v("enable_fold_constant_by_be")])])]),e._v(" "),s("p",[e._v("只支持全局生效的变量包括：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("default_rowset_type")])])]),e._v(" "),s("p",[e._v("同时，变量设置也支持常量表达式。如：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" exec_mem_limit "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1024")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" forward_to_master "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" concat"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'tr'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'u'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'e'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"在查询语句中设置变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在查询语句中设置变量"}},[e._v("#")]),e._v(" 在查询语句中设置变量")]),e._v(" "),s("p",[e._v("在一些场景中，我们可能需要对某些查询有针对性的设置变量。 通过使用SET_VAR提示可以在查询中设置会话变量（在单个语句内生效）。例子：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*+ SET_VAR(exec_mem_limit = 8589934592) */")]),e._v(" name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" people "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("ORDER")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/*+ SET_VAR(query_timeout = 1, enable_partition_cache=true) */")]),e._v(" sleep"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("注意注释必须以/*+ 开头，并且只能跟随在SELECT之后。")]),e._v(" "),s("h2",{attrs:{id:"支持的变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持的变量"}},[e._v("#")]),e._v(" 支持的变量")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("SQL_AUTO_IS_NULL")])]),e._v(" "),s("p",[e._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("auto_increment_increment")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("autocommit")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("batch_size")])]),e._v(" "),s("p",[e._v("用于指定在查询执行过程中，各个节点传输的单个数据包的行数。默认一个数据包的行数为 1024 行，即源端节点每产生 1024 行数据后，打包发给目的节点。")]),e._v(" "),s("p",[e._v("较大的行数，会在扫描大数据量场景下提升查询的吞吐，但可能会在小查询场景下增加查询延迟。同时，也会增加查询的内存开销。建议设置范围 1024 至 4096。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("character_set_client")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("character_set_connection")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("character_set_results")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("character_set_server")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("codegen_level")])]),e._v(" "),s("p",[e._v("用于设置 LLVM codegen 的等级。（当前未生效）。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("collation_connection")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("collation_database")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("collation_server")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("delete_without_partition")])]),e._v(" "),s("p",[e._v("设置为 true 时。当使用 delete 命令删除分区表数据时，可以不指定分区。delete 操作将会自动应用到所有分区。")]),e._v(" "),s("p",[e._v("但注意，自动应用到所有分区可能到导致 delete 命令耗时触发大量子任务导致耗时较长。如无必要，不建议开启。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("disable_colocate_join")])]),e._v(" "),s("p",[e._v("控制是否启用 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/join-optimization/colocation-join.html"}},[e._v("Colocation Join")]),e._v(" 功能。默认为 false，表示启用该功能。true 表示禁用该功能。当该功能被禁用后，查询规划将不会尝试执行 Colocation Join。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_bucket_shuffle_join")])]),e._v(" "),s("p",[e._v("控制是否启用 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/join-optimization/bucket-shuffle-join.html"}},[e._v("Bucket Shuffle Join")]),e._v(" 功能。默认为 true，表示启用该功能。false 表示禁用该功能。当该功能被禁用后，查询规划将不会尝试执行 Bucket Shuffle Join。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("disable_streaming_preaggregations")])]),e._v(" "),s("p",[e._v("控制是否开启流式预聚合。默认为 false，即开启。当前不可设置，且默认开启。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_insert_strict")])]),e._v(" "),s("p",[e._v("用于设置通过 INSERT 语句进行数据导入时，是否开启 "),s("code",[e._v("strict")]),e._v(" 模式。默认为 false，即不开启 "),s("code",[e._v("strict")]),e._v(" 模式。关于该模式的介绍，可以参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/data-operate/import/import-way/insert-into-manual.html"}},[e._v("这里")]),e._v("。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_spilling")])]),e._v(" "),s("p",[e._v("用于设置是否开启大数据量落盘排序。默认为 false，即关闭该功能。当用户未指定 ORDER BY 子句的 LIMIT 条件，同时设置 "),s("code",[e._v("enable_spilling")]),e._v(" 为 true 时，才会开启落盘排序。该功能启用后，会使用 BE 数据目录下 "),s("code",[e._v("doris-scratch/")]),e._v(" 目录存放临时的落盘数据，并在查询结束后，清空临时数据。")]),e._v(" "),s("p",[e._v("该功能主要用于使用有限的内存进行大数据量的排序操作。")]),e._v(" "),s("p",[e._v("注意，该功能为实验性质，不保证稳定性，请谨慎开启。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("exec_mem_limit")])]),e._v(" "),s("p",[e._v("用于设置单个查询的内存限制。默认为 2GB，单位为B/K/KB/M/MB/G/GB/T/TB/P/PB, 默认为B。")]),e._v(" "),s("p",[e._v("该参数用于限制一个查询计划中，单个查询计划的实例所能使用的内存。一个查询计划可能有多个实例，一个 BE 节点可能执行一个或多个实例。所以该参数并不能准确限制一个查询在整个集群的内存使用，也不能准确限制一个查询在单一 BE 节点上的内存使用。具体需要根据生成的查询计划判断。")]),e._v(" "),s("p",[e._v("通常只有在一些阻塞节点（如排序节点、聚合节点、Join 节点）上才会消耗较多的内存，而其他节点（如扫描节点）中，数据为流式通过，并不会占用较多的内存。")]),e._v(" "),s("p",[e._v("当出现 "),s("code",[e._v("Memory Exceed Limit")]),e._v(" 错误时，可以尝试指数级增加该参数，如 4G、8G、16G 等。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("forward_to_master")])]),e._v(" "),s("p",[e._v("用户设置是否将一些show 类命令转发到 Master FE 节点执行。默认为 "),s("code",[e._v("true")]),e._v("，即转发。Doris 中存在多个 FE 节点，其中一个为 Master 节点。通常用户可以连接任意 FE 节点进行全功能操作。但部分信息查看指令，只有从 Master FE 节点才能获取详细信息。")]),e._v(" "),s("p",[e._v("如 "),s("code",[e._v("SHOW BACKENDS;")]),e._v(" 命令，如果不转发到 Master FE 节点，则仅能看到节点是否存活等一些基本信息，而转发到 Master FE 则可以获取包括节点启动时间、最后一次心跳时间等更详细的信息。")]),e._v(" "),s("p",[e._v("当前受该参数影响的命令如下：")]),e._v(" "),s("ol",[s("li",[s("p",[s("code",[e._v("SHOW FRONTENDS;")])]),e._v(" "),s("p",[e._v("转发到 Master 可以查看最后一次心跳信息。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SHOW BACKENDS;")])]),e._v(" "),s("p",[e._v("转发到 Master 可以查看启动时间、最后一次心跳信息、磁盘容量信息。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SHOW BROKER;")])]),e._v(" "),s("p",[e._v("转发到 Master 可以查看启动时间、最后一次心跳信息。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SHOW TABLET;")]),e._v("/"),s("code",[e._v("ADMIN SHOW REPLICA DISTRIBUTION;")]),e._v("/"),s("code",[e._v("ADMIN SHOW REPLICA STATUS;")])]),e._v(" "),s("p",[e._v("转发到 Master 可以查看 Master FE 元数据中存储的 tablet 信息。正常情况下，不同 FE 元数据中 tablet 信息应该是一致的。当出现问题时，可以通过这个方法比较当前 FE 和 Master FE 元数据的差异。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("SHOW PROC;")])]),e._v(" "),s("p",[e._v("转发到 Master 可以查看 Master FE 元数据中存储的相关 PROC 的信息。主要用于元数据比对。")])])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("init_connect")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("interactive_timeout")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_profile")])]),e._v(" "),s("p",[e._v("用于设置是否需要查看查询的 profile。默认为 false，即不需要 profile。")]),e._v(" "),s("p",[e._v("默认情况下，只有在查询发生错误时，BE 才会发送 profile 给 FE，用于查看错误。正常结束的查询不会发送 profile。发送 profile 会产生一定的网络开销，对高并发查询场景不利。 当用户希望对一个查询的 profile 进行分析时，可以将这个变量设为 true 后，发送查询。查询结束后，可以通过在当前连接的 FE 的 web 页面查看到 profile：")]),e._v(" "),s("p",[s("code",[e._v("fe_host:fe_http_port/query")])]),e._v(" "),s("p",[e._v("其中会显示最近100条，开启 "),s("code",[e._v("enable_profile")]),e._v(" 的查询的 profile。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("language")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("license")])]),e._v(" "),s("p",[e._v("显示 Doris 的 License。无其他作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("load_mem_limit")])]),e._v(" "),s("p",[e._v("用于指定导入操作的内存限制。默认为 0，即表示不使用该变量，而采用 "),s("code",[e._v("exec_mem_limit")]),e._v(" 作为导入操作的内存限制。")]),e._v(" "),s("p",[e._v("这个变量仅用于 INSERT 操作。因为 INSERT 操作设计查询和导入两个部分，如果用户不设置此变量，则查询和导入操作各自的内存限制均为 "),s("code",[e._v("exec_mem_limit")]),e._v("。否则，INSERT 的查询部分内存限制为 "),s("code",[e._v("exec_mem_limit")]),e._v("，而导入部分限制为 "),s("code",[e._v("load_mem_limit")]),e._v("。")]),e._v(" "),s("p",[e._v("其他导入方式，如 BROKER LOAD，STREAM LOAD 的内存限制依然使用 "),s("code",[e._v("exec_mem_limit")]),e._v("。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("lower_case_table_names")])]),e._v(" "),s("p",[e._v("用于控制用户表表名大小写是否敏感。")]),e._v(" "),s("p",[e._v("值为 0 时，表名大小写敏感。默认为0。")]),e._v(" "),s("p",[e._v("值为 1 时，表名大小写不敏感，doris在存储和查询时会将表名转换为小写。\n优点是在一条语句中可以使用表名的任意大小写形式，下面的sql是正确的：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("show")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("tables")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("  \n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------------+")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" Tables_in_testdb "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------------+")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" cost             "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("------------------+")]),e._v("\n\nmysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" COST "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" COst"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("order")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" cost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("缺点是建表后无法获得建表语句中指定的表名，"),s("code",[e._v("show tables")]),e._v(" 查看的表名为指定表名的小写。")]),e._v(" "),s("p",[e._v("值为 2 时，表名大小写不敏感，doris存储建表语句中指定的表名，查询时转换为小写进行比较。 优点是"),s("code",[e._v("show tables")]),e._v(" 查看的表名为建表语句中指定的表名；\n缺点是同一语句中只能使用表名的一种大小写形式，例如对"),s("code",[e._v("cost")]),e._v(" 表使用表名 "),s("code",[e._v("COST")]),e._v(" 进行查询：")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" COST "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" COST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("order")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("by")]),e._v(" COST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("该变量兼容MySQL。需在集群初始化时通过fe.conf 指定 "),s("code",[e._v("lower_case_table_names=")]),e._v("进行配置，集群初始化完成后无法通过"),s("code",[e._v("set")]),e._v(" 语句修改该变量，也无法通过重启、升级集群修改该变量。")]),e._v(" "),s("p",[e._v("information_schema中的系统视图表名不区分大小写，当"),s("code",[e._v("lower_case_table_names")]),e._v("值为 0 时，表现为 2。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("max_allowed_packet")])]),e._v(" "),s("p",[e._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("max_pushdown_conditions_per_column")])]),e._v(" "),s("p",[e._v("该变量的具体含义请参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/config/be-config.html"}},[e._v("BE 配置项")]),e._v(" 中 "),s("code",[e._v("max_pushdown_conditions_per_column")]),e._v(" 的说明。该变量默认置为 -1，表示使用 "),s("code",[e._v("be.conf")]),e._v(" 中的配置值。如果设置大于 0，则当前会话中的查询会使用该变量值，而忽略 "),s("code",[e._v("be.conf")]),e._v(" 中的配置值。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("max_scan_key_num")])]),e._v(" "),s("p",[e._v("该变量的具体含义请参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/config/be-config.html"}},[e._v("BE 配置项")]),e._v(" 中 "),s("code",[e._v("doris_max_scan_key_num")]),e._v(" 的说明。该变量默认置为 -1，表示使用 "),s("code",[e._v("be.conf")]),e._v(" 中的配置值。如果设置大于 0，则当前会话中的查询会使用该变量值，而忽略 "),s("code",[e._v("be.conf")]),e._v(" 中的配置值。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("net_buffer_length")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("net_read_timeout")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("net_write_timeout")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("parallel_exchange_instance_num")])]),e._v(" "),s("p",[e._v("用于设置执行计划中，一个上层节点接收下层节点数据所使用的 exchange node 数量。默认为 -1，即表示 exchange node 数量等于下层节点执行实例的个数（默认行为）。当设置大于0，并且小于下层节点执行实例的个数，则 exchange node 数量等于设置值。")]),e._v(" "),s("p",[e._v("在一个分布式的查询执行计划中，上层节点通常有一个或多个 exchange node 用于接收来自下层节点在不同 BE 上的执行实例的数据。通常 exchange node 数量等于下层节点执行实例数量。")]),e._v(" "),s("p",[e._v("在一些聚合查询场景下，如果底层需要扫描的数据量较大，但聚合之后的数据量很小，则可以尝试修改此变量为一个较小的值，可以降低此类查询的资源开销。如在 DUPLICATE KEY 明细模型上进行聚合查询的场景。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("parallel_fragment_exec_instance_num")])]),e._v(" "),s("p",[e._v("针对扫描节点，设置其在每个 BE 节点上，执行实例的个数。默认为 1。")]),e._v(" "),s("p",[e._v("一个查询计划通常会产生一组 scan range，即需要扫描的数据范围。这些数据分布在多个 BE 节点上。一个 BE 节点会有一个或多个 scan range。默认情况下，每个 BE 节点的一组 scan range 只由一个执行实例处理。当机器资源比较充裕时，可以将增加该变量，让更多的执行实例同时处理一组 scan range，从而提升查询效率。")]),e._v(" "),s("p",[e._v("而 scan 实例的数量决定了上层其他执行节点，如聚合节点，join 节点的数量。因此相当于增加了整个查询计划执行的并发度。修改该参数会对大查询效率提升有帮助，但较大数值会消耗更多的机器资源，如CPU、内存、磁盘IO。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("query_cache_size")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("query_cache_type")])]),e._v(" "),s("p",[e._v("用于兼容 JDBC 连接池 C3P0。 无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("query_timeout")])]),e._v(" "),s("p",[e._v("用于设置查询超时。该变量会作用于当前连接中所有的查询语句，以及 INSERT 语句。默认为 5 分钟，单位为秒。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("resource_group")])]),e._v(" "),s("p",[e._v("暂不使用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("send_batch_parallelism")])]),e._v(" "),s("p",[e._v("用于设置执行 InsertStmt 操作时发送批处理数据的默认并行度，如果并行度的值超过 BE 配置中的 "),s("code",[e._v("max_send_batch_parallelism_per_job")]),e._v("，那么作为协调点的 BE 将使用 "),s("code",[e._v("max_send_batch_parallelism_per_job")]),e._v(" 的值。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("sql_mode")])]),e._v(" "),s("p",[e._v("用于指定 SQL 模式，以适应某些 SQL 方言，关于 SQL 模式，可参阅"),s("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/sql-mode.html"}},[e._v("这里")]),e._v("。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("sql_safe_updates")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("sql_select_limit")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("system_time_zone")])]),e._v(" "),s("p",[e._v("显示当前系统时区。不可更改。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("time_zone")])]),e._v(" "),s("p",[e._v("用于设置当前会话的时区。时区会对某些时间函数的结果产生影响。关于时区，可以参阅 "),s("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/time-zone.html"}},[e._v("这里")]),e._v("。")],1)]),e._v(" "),s("li",[s("p",[s("code",[e._v("tx_isolation")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("tx_read_only")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("transaction_read_only")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("transaction_isolation")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("version")])]),e._v(" "),s("p",[e._v("用于兼容 MySQL 客户端。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("performance_schema")])]),e._v(" "),s("p",[e._v("用于兼容 8.0.16及以上版本的MySQL JDBC。无实际作用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("version_comment")])]),e._v(" "),s("p",[e._v("用于显示 Doris 的版本。不可更改。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("wait_timeout")])]),e._v(" "),s("p",[e._v("用于设置空闲连接的连接时长。当一个空闲连接在该时长内与 Doris 没有任何交互，则 Doris 会主动断开这个链接。默认为 8 小时，单位为秒。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("default_rowset_type")])]),e._v(" "),s("p",[e._v("用于设置计算节点存储引擎默认的存储格式。当前支持的存储格式包括：alpha/beta。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("use_v2_rollup")])]),e._v(" "),s("p",[e._v("用于控制查询使用segment v2存储格式的rollup索引获取数据。该变量用于上线segment v2的时候，进行验证使用；其他情况，不建议使用。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("rewrite_count_distinct_to_bitmap_hll")])]),e._v(" "),s("p",[e._v("是否将 bitmap 和 hll 类型的 count distinct 查询重写为 bitmap_union_count 和 hll_union_agg 。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("prefer_join_method")])]),e._v(" "),s("p",[e._v("在选择join的具体实现方式是broadcast join还是shuffle join时，如果broadcast join cost和shuffle join cost相等时，优先选择哪种join方式。")]),e._v(" "),s("p",[e._v('目前该变量的可选值为"broadcast" 或者 "shuffle"。')])]),e._v(" "),s("li",[s("p",[s("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),s("p",[e._v("建表时是否允许分区列为NULL。默认为true，表示允许为NULL。false 表示分区列必须被定义为NOT NULL")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),s("p",[e._v("在执行insert语句时，导入动作(查询和插入)完成后，还需要等待事务提交，使数据可见。此参数控制等待数据可见的超时时间，默认为10000，最小为1000。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_exchange_node_parallel_merge")])]),e._v(" "),s("p",[e._v("在一个排序的查询之中，一个上层节点接收下层节点有序数据时，会在exchange node上进行对应的排序来保证最终的数据是有序的。但是单线程进行多路数据归并时，如果数据量过大，会导致exchange node的单点的归并瓶颈。")]),e._v(" "),s("p",[e._v("Doris在这部分进行了优化处理，如果下层的数据节点过多。exchange node会启动多线程进行并行归并来加速排序过程。该参数默认为False，即表示 exchange node 不采取并行的归并排序，来减少额外的CPU和内存消耗。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("extract_wide_range_expr")])]),e._v(" "),s("p",[e._v("用于控制是否开启 「宽泛公因式提取」的优化。取值有两种：true 和 false 。默认情况下开启。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("enable_fold_constant_by_be")])]),e._v(" "),s("p",[e._v("用于控制常量折叠的计算方式。默认是 "),s("code",[e._v("false")]),e._v("，即在 "),s("code",[e._v("FE")]),e._v(" 进行计算；若设置为 "),s("code",[e._v("true")]),e._v("，则通过 "),s("code",[e._v("RPC")]),e._v(" 请求经 "),s("code",[e._v("BE")]),e._v(" 计算。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("cpu_resource_limit")])]),e._v(" "),s("p",[e._v("用于限制一个查询的资源开销。这是一个实验性质的功能。目前的实现是限制一个查询在单个节点上的scan线程数量。限制了scan线程数，从底层返回的数据速度变慢，从而限制了查询整体的计算资源开销。假设设置为 2，则一个查询在单节点上最多使用2个scan线程。")]),e._v(" "),s("p",[e._v("该参数会覆盖 "),s("code",[e._v("parallel_fragment_exec_instance_num")]),e._v(" 的效果。即假设 "),s("code",[e._v("parallel_fragment_exec_instance_num")]),e._v(" 设置为4，而该参数设置为2。则单个节点上的4个执行实例会共享最多2个扫描线程。")]),e._v(" "),s("p",[e._v("该参数会被 user property 中的 "),s("code",[e._v("cpu_resource_limit")]),e._v(" 配置覆盖。")]),e._v(" "),s("p",[e._v("默认 -1，即不限制。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("disable_join_reorder")])]),e._v(" "),s("p",[e._v("用于关闭所有系统自动的 join reorder 算法。取值有两种：true 和 false。默认行况下关闭，也就是采用系统自动的 join reorder 算法。设置为 true 后，系统会关闭所有自动排序的算法，采用 SQL 原始的表顺序，执行 join")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("return_object_data_as_binary")]),e._v(" 用于标识是否在select 结果中返回bitmap/hll 结果。在 select into outfile 语句中，如果导出文件格式为csv 则会将 bimap/hll 数据进行base64编码，如果是parquet 文件格式 将会把数据作为byte array 存储")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("block_encryption_mode")]),e._v(" 可以通过block_encryption_mode参数，控制块加密模式，默认值为：空。当使用AES算法加密时相当于"),s("code",[e._v("AES_128_ECB")]),e._v(", 当时用SM3算法加密时相当于"),s("code",[e._v("SM3_128_ECB")]),e._v(" 可选值：")])])]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("  AES_128_ECB,\n  AES_192_ECB,\n  AES_256_ECB,\n  AES_128_CBC,\n  AES_192_CBC,\n  AES_256_CBC,\n  AES_128_CFB,\n  AES_192_CFB,\n  AES_256_CFB,\n  AES_128_CFB1,\n  AES_192_CFB1,\n  AES_256_CFB1,\n  AES_128_CFB8,\n  AES_192_CFB8,\n  AES_256_CFB8,\n  AES_128_CFB128,\n  AES_192_CFB128,\n  AES_256_CFB128,\n  AES_128_CTR,\n  AES_192_CTR,\n  AES_256_CTR,\n  AES_128_OFB,\n  AES_192_OFB,\n  AES_256_OFB,\n  SM4_128_ECB,\n  SM4_128_CBC,\n  SM4_128_CFB128,\n  SM4_128_OFB,\n  SM4_128_CTR,\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br"),s("span",{staticClass:"line-number"},[e._v("27")]),s("br"),s("span",{staticClass:"line-number"},[e._v("28")]),s("br"),s("span",{staticClass:"line-number"},[e._v("29")]),s("br")])]),s("ul",[s("li",[s("p",[s("code",[e._v("enable_infer_predicate")])]),e._v(" "),s("p",[e._v("用于控制是否进行谓词推导。取值有两种：true 和 false。默认情况下关闭，系统不在进行谓词推导，采用原始的谓词进行相关操作。设置为 true 后，进行谓词扩展。")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("trim_tailing_spaces_for_external_table_query")])]),e._v(" "),s("p",[e._v("用于控制查询Hive外表时是否过滤掉字段末尾的空格。默认为false。")])])])])}),[],!1,null,null,null);_.default=t.exports}}]);