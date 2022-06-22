(window.webpackJsonp=window.webpackJsonp||[]).push([[824],{1450:function(e,t,a){"use strict";a.r(t);var r=a(15),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"数据操作问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据操作问题"}},[e._v("#")]),e._v(" 数据操作问题")]),e._v(" "),a("p",[e._v("本文档主要用于记录 Doris 使用过程中的数据操作常见问题。会不定期更新。")]),e._v(" "),a("h3",{attrs:{id:"q1-使用-stream-load-访问-fe-的公网地址导入数据-被重定向到内网-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q1-使用-stream-load-访问-fe-的公网地址导入数据-被重定向到内网-ip"}},[e._v("#")]),e._v(" Q1. 使用 Stream Load 访问 FE 的公网地址导入数据，被重定向到内网 IP？")]),e._v(" "),a("p",[e._v("当 stream load 的连接目标为FE的http端口时，FE仅会随机选择一台BE节点做http 307 redirect 操作，因此用户的请求实际是发送给FE指派的某一个BE的。而redirect返回的是BE的ip，也即内网IP。所以如果你是通过FE的公网IP发送的请求，很有可能因为redirect到内网地址而无法连接。")]),e._v(" "),a("p",[e._v("通常的做法，一种是确保自己能够访问内网IP地址，或者是给所有BE上层架设一个负载均衡，然后直接将 stream load 请求发送到负载均衡器上，由负载均衡将请求透传到BE节点。")]),e._v(" "),a("h3",{attrs:{id:"q2-doris-是否支持修改列名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q2-doris-是否支持修改列名"}},[e._v("#")]),e._v(" Q2. Doris 是否支持修改列名？")]),e._v(" "),a("p",[e._v("不支持修改列名。")]),e._v(" "),a("p",[e._v("Doris支持修改数据库名、表名、分区名、物化视图（Rollup）名称，以及列的类型、注释、默认值等等。但遗憾的是，目前不支持修改列名。")]),e._v(" "),a("p",[e._v("因为一些历史原因，目前列名称是直接写入到数据文件中的。Doris在查询时，也是通过类名查找到对应的列的。所以修改列名不仅是简单的元数据修改，还会涉及到数据的重写，是一个非常重的操作。")]),e._v(" "),a("p",[e._v("我们不排除后续通过一些兼容手段来支持轻量化的列名修改操作。")]),e._v(" "),a("h3",{attrs:{id:"q3-unique-key模型的表是否支持创建物化视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q3-unique-key模型的表是否支持创建物化视图"}},[e._v("#")]),e._v(" Q3. Unique Key模型的表是否支持创建物化视图？")]),e._v(" "),a("p",[e._v("不支持。")]),e._v(" "),a("p",[e._v("Unique Key模型的表是一个对业务比较友好的表，因为其特有的按照主键去重的功能，能够很方便的同步数据频繁变更的业务数据库。因此，很多用户在将数据接入到Doris时，会首先考虑使用Unique Key模型。")]),e._v(" "),a("p",[e._v("但遗憾的是，Unique Key模型的表是无法建立物化视图的。原因在于，物化视图的本质，是通过预计算来将数据“预先算好”，这样在查询时直接返回已经计算好的数据，来加速查询。在物化视图中，“预计算”的数据通常是一些聚合指标，比如求和、求count。这时，如果数据发生变更，如udpate或delete，因为预计算的数据已经丢失了明细信息，因此无法同步的进行更新。比如一个求和值5，可能是 1+4，也可能是2+3。因为明细信息的丢失，我们无法区分这个求和值是如何计算出来的，因此也就无法满足更新的需求。")]),e._v(" "),a("h3",{attrs:{id:"q4-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q4-tablet-writer-write-failed-tablet-id-27306172-txn-id-28573520-err-235-or-215-or-238"}},[e._v("#")]),e._v(" Q4. tablet writer write failed, tablet_id=27306172, txn_id=28573520, err=-235 or -215 or -238")]),e._v(" "),a("p",[e._v("这个错误通常发生在数据导入操作中。新版错误码为 -235，老版本错误码可能是 -215。这个错误的含义是，对应tablet的数据版本超过了最大限制（默认500，由 BE 参数 "),a("code",[e._v("max_tablet_version_num")]),e._v(" 控制），后续写入将被拒绝。比如问题中这个错误，即表示 27306172 这个tablet的数据版本超过了限制。")]),e._v(" "),a("p",[e._v("这个错误通常是因为导入的频率过高，大于后台数据的compaction速度，导致版本堆积并最终超过了限制。此时，我们可以先通过show tablet 27306172 语句，然后执行结果中的 show proc 语句，查看tablet各个副本的情况。结果中的 versionCount即表示版本数量。如果发现某个副本的版本数量过多，则需要降低导入频率或停止导入，并观察版本数是否有下降。如果停止导入后，版本数依然没有下降，则需要去对应的BE节点查看be.INFO日志，搜索tablet id以及 compaction关键词，检查compaction是否正常运行。关于compaction调优相关，可以参阅 ApacheDoris 公众号文章：Doris 最佳实践-Compaction调优(3)")]),e._v(" "),a("p",[e._v("-238 错误通常出现在同一批导入数据量过大的情况，从而导致某一个 tablet 的 Segment 文件过多（默认是 200，由 BE 参数 "),a("code",[e._v("max_segment_num_per_rowset")]),e._v(" 控制）。此时建议减少一批次导入的数据量，或者适当提高 BE 配置参数值来解决。")]),e._v(" "),a("h3",{attrs:{id:"q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q5-tablet-110309738-has-few-replicas-1-alive-backends-10003"}},[e._v("#")]),e._v(" Q5. tablet 110309738 has few replicas: 1, alive backends: [10003]")]),e._v(" "),a("p",[e._v("这个错误可能发生在查询或者导入操作中。通常意味着对应tablet的副本出现了异常。")]),e._v(" "),a("p",[e._v("此时，可以先通过 show backends 命令检查BE节点是否有宕机，如 isAlive 字段为false，或者 LastStartTime 是最近的某个时间（表示最近重启过）。如果BE有宕机，则需要去BE对应的节点，查看be.out日志。如果BE是因为异常原因宕机，通常be.out中会打印异常堆栈，帮助排查问题。如果be.out中没有错误堆栈。则可以通过linux命令dmesg -T 检查是否是因为OOM导致进程被系统kill掉。")]),e._v(" "),a("p",[e._v("如果没有BE节点宕机，则需要通过show tablet 110309738 语句，然后执行结果中的 show proc 语句，查看tablet各个副本的情况，进一步排查。")]),e._v(" "),a("h3",{attrs:{id:"q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q6-disk-xxxxx-on-backend-xxx-exceed-limit-usage"}},[e._v("#")]),e._v(" Q6. disk xxxxx on backend xxx exceed limit usage")]),e._v(" "),a("p",[e._v("通常出现在导入、Alter等操作中。这个错误意味着对应BE的对应磁盘的使用量超过了阈值（默认95%）此时可以先通过 show backends 命令，其中MaxDiskUsedPct展示的是对应BE上，使用率最高的那块磁盘的使用率，如果超过95%，则会报这个错误。")]),e._v(" "),a("p",[e._v("此时需要前往对应BE节点，查看数据目录下的使用量情况。其中trash目录和snapshot目录可以手动清理以释放空间。如果是data目录占用较大，则需要考虑删除部分数据以释放空间了。具体可以参阅"),a("RouterLink",{attrs:{to:"/zh-CN/docs/admin-manual/maint-monitor/disk-capacity.html"}},[e._v("磁盘空间管理")]),e._v("。")],1),e._v(" "),a("h3",{attrs:{id:"q7-通过-java-程序调用-stream-load-导入数据-在一批次数据量较大时-可能会报错-broken-pipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q7-通过-java-程序调用-stream-load-导入数据-在一批次数据量较大时-可能会报错-broken-pipe"}},[e._v("#")]),e._v(" Q7. 通过 Java 程序调用 stream load 导入数据，在一批次数据量较大时，可能会报错 Broken Pipe")]),e._v(" "),a("p",[e._v("除了 Broken Pipe 外，还可能出现一些其他的奇怪的错误。")]),e._v(" "),a("p",[e._v("这个情况通常出现在开启httpv2后。因为httpv2是使用spring boot实现的http 服务，并且使用tomcat作为默认内置容器。但是tomcat对307转发的处理似乎有些问题，所以后面将内置容器修改为了jetty。此外，在java程序中的 apache http client的版本需要使用4.5.13以后的版本。之前的版本，对转发的处理也存在一些问题。")]),e._v(" "),a("p",[e._v("所以这个问题可以有两种解决方式：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("关闭httpv2")]),e._v(" "),a("p",[e._v("在fe.conf中添加 enable_http_server_v2=false后重启FE。但是这样无法再使用新版UI界面，并且之后的一些基于httpv2的新接口也无法使用。（正常的导入查询不受影响）。")])]),e._v(" "),a("li",[a("p",[e._v("升级")]),e._v(" "),a("p",[e._v("可以升级到 Doris 0.15 及之后的版本，已修复这个问题。")])])]),e._v(" "),a("h3",{attrs:{id:"q8-执行导入、查询时报错-214"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q8-执行导入、查询时报错-214"}},[e._v("#")]),e._v(" Q8. 执行导入、查询时报错-214")]),e._v(" "),a("p",[e._v("在执行导入、查询等操作时，可能会遇到如下错误：")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("failed to initialize storage reader. tablet=63416.1050661139.aa4d304e7a7aff9c-f0fa7579928c85a0, res=-214, backend=192.168.100.10\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("-214 错误意味着对应 tablet 的数据版本缺失。比如如上错误，表示 tablet 63416 在 192.168.100.10 这个 BE 上的副本的数据版本有缺失。（可能还有其他类似错误码，都可以用如下方式进行排查和修复）。")]),e._v(" "),a("p",[e._v("通常情况下，如果你的数据是多副本的，那么系统会自动修复这些有问题的副本。可以通过以下步骤进行排查：")]),e._v(" "),a("p",[e._v("首先通过 "),a("code",[e._v("show tablet 63416")]),e._v(" 语句并执行结果中的 "),a("code",[e._v("show proc xxx")]),e._v(" 语句来查看对应 tablet 的各个副本情况。通常我们需要关心 "),a("code",[e._v("Version")]),e._v(" 这一列的数据。")]),e._v(" "),a("p",[e._v("正常情况下，一个 tablet 的多个副本的 Version 应该是相同的。并且和对应分区的 VisibleVersion 版本相同。")]),e._v(" "),a("p",[e._v("你可以通过 "),a("code",[e._v("show partitions from tblx")]),e._v(" 来查看对应的分区版本（tablet 对应的分区可以在 "),a("code",[e._v("show tablet")]),e._v(" 语句中获取。）")]),e._v(" "),a("p",[e._v("同时，你也可以访问 "),a("code",[e._v("show proc")]),e._v(" 语句中的 CompactionStatus 列中的 URL（在浏览器打开即可）来查看更具体的版本信息，来检查具体丢失的是哪些版本。")]),e._v(" "),a("p",[e._v("如果长时间没有自动修复，则需要通过 "),a("code",[e._v('show proc "/cluster_balance"')]),e._v(" 语句，查看当前系统正在执行的 tablet 修复和调度任务。可能是因为有大量的 tablet 在等待被调度，导致修复时间较长。可以关注 "),a("code",[e._v("pending_tablets")]),e._v(" 和 "),a("code",[e._v("running_tablets")]),e._v(" 中的记录。")]),e._v(" "),a("p",[e._v("更进一步的，可以通过 "),a("code",[e._v("admin repair")]),e._v(" 语句来指定优先修复某个表或分区，具体可以参阅 "),a("code",[e._v("help admin repair")]),e._v(";")]),e._v(" "),a("p",[e._v("如果依然无法修复，那么在多副本的情况下，我们使用 "),a("code",[e._v("admin set replica status")]),e._v(" 命令强制将有问题的副本下线。具体可参阅 "),a("code",[e._v("help admin set replica status")]),e._v(" 中将副本状态置为 bad 的示例。（置为 bad 后，副本将不会再被访问。并且会后续自动修复。但在操作前，应先确保其他副本是正常的）")]),e._v(" "),a("h3",{attrs:{id:"q9-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q9-not-connected-to-192-168-100-1-8060-yet-server-id-384"}},[e._v("#")]),e._v(" Q9. Not connected to 192.168.100.1:8060 yet, server_id=384")]),e._v(" "),a("p",[e._v("在导入或者查询时，我们可能遇到这个错误。如果你去对应的 BE 日志中查看，也可能会找到类似错误。")]),e._v(" "),a("p",[e._v("这是一个 RPC 错误，通常有两种可能：1. 对应的 BE 节点宕机。2. rpc 拥塞或其他错误。")]),e._v(" "),a("p",[e._v("如果是 BE 节点宕机，则需要查看具体的宕机原因。这里只讨论 rpc 拥塞的问题。")]),e._v(" "),a("p",[e._v("一种情况是 OVERCROWDED，即表示 rpc 源端有大量未发送的数据超过了阈值。BE 有两个参数与之相关：")]),e._v(" "),a("ol",[a("li",[a("code",[e._v("brpc_socket_max_unwritten_bytes")]),e._v("：默认 1GB，如果未发送数据超过这个值，则会报错。可以适当修改这个值以避免 OVERCROWDED 错误。（但这个治标不治本，本质上还是有拥塞发生）。")]),e._v(" "),a("li",[a("code",[e._v("tablet_writer_ignore_eovercrowded")]),e._v("：默认为 false。如果设为true，则 Doris 会忽略导入过程中出现的 OVERCROWDED 错误。这个参数主要为了避免导入失败，以提高导入的稳定性。")])]),e._v(" "),a("p",[e._v("第二种是 rpc 的包大小超过 max_body_size。如果查询中带有超大 String 类型，或者 bitmap 类型时，可能出现这个问题。可以通过修改以下 BE 参数规避：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("brpc_max_body_size：默认 3GB.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=s.exports}}]);