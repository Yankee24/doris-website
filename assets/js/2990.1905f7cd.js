(window.webpackJsonp=window.webpackJsonp||[]).push([[2990],{3618:function(t,s,a){"use strict";a.r(s);var e=a(15),_=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tpc-h-benchmark"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tpc-h-benchmark"}},[t._v("#")]),t._v(" TPC-H benchmark")]),t._v(" "),a("p",[t._v("TPC-H是一个决策支持基准（Decision Support Benchmark），它由一套面向业务的特别查询和并发数据修改组成。查询和填充数据库的数据具有广泛的行业相关性。这个基准测试演示了检查大量数据、执行高度复杂的查询并回答关键业务问题的决策支持系统。TPC-H报告的性能指标称为TPC-H每小时复合查询性能指标(QphH@Size)，反映了系统处理查询能力的多个方面。这些方面包括执行查询时所选择的数据库大小，由单个流提交查询时的查询处理能力，以及由多个并发用户提交查询时的查询吞吐量。")]),t._v(" "),a("p",[t._v("本文档主要介绍 Doris 在 TPC-H 测试集上的性能表现。")]),t._v(" "),a("blockquote",[a("p",[t._v("注1：包括 TPC-H 在内的标准测试集通常和实际业务场景差距较大，并且部分测试会针对测试集进行参数调优。所以标准测试集的测试结果仅能反映数据库在特定场景下的性能表现。建议用户使用实际业务数据进行进一步的测试。")]),t._v(" "),a("p",[t._v("注2：本文档涉及的操作都在 CentOS 7.x 上进行测试。")])]),t._v(" "),a("p",[t._v("在 TPC-H 标准测试数据集上的 22 个查询上，我们对即将发布的 Doris 1.1 版本和 Doris 0.15.0 RC04 版本进行了对别测试，整体性能提升了 3-4 倍。个别场景下达到十几倍的提升。")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/images/image-20220614114351241.png"),alt:"image-20220614114351241"}}),t._v(" "),a("h2",{attrs:{id:"_1-硬件环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-硬件环境"}},[t._v("#")]),t._v(" 1. 硬件环境")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("硬件")]),t._v(" "),a("th",[t._v("配置说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("机器数量")]),t._v(" "),a("td",[t._v("4 台腾讯云主机（1个FE，3个BE）")])]),t._v(" "),a("tr",[a("td",[t._v("CPU")]),t._v(" "),a("td",[t._v("Intel Xeon(Cascade Lake) Platinum 8269CY  16核  (2.5 GHz/3.2 GHz)")])]),t._v(" "),a("tr",[a("td",[t._v("内存")]),t._v(" "),a("td",[t._v("64G")])]),t._v(" "),a("tr",[a("td",[t._v("网络带宽")]),t._v(" "),a("td",[t._v("5Gbps")])]),t._v(" "),a("tr",[a("td",[t._v("磁盘")]),t._v(" "),a("td",[t._v("ESSD云硬盘")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-软件环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-软件环境"}},[t._v("#")]),t._v(" 2. 软件环境")]),t._v(" "),a("ul",[a("li",[t._v("Doris部署 3BE 1FE；")]),t._v(" "),a("li",[t._v("内核版本：Linux version 5.4.0-96-generic (buildd@lgw01-amd64-051)")]),t._v(" "),a("li",[t._v("操作系统版本：CentOS 7.8")]),t._v(" "),a("li",[t._v("Doris 软件版本：Apache Doris 1.1 、Apache Doris 0.15.0 RC04")]),t._v(" "),a("li",[t._v('JDK：openjdk version "11.0.14" 2022-01-18')])]),t._v(" "),a("h2",{attrs:{id:"_3-测试数据量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-测试数据量"}},[t._v("#")]),t._v(" 3. 测试数据量")]),t._v(" "),a("p",[t._v("整个测试模拟生成100G的数据分别导入到 Doris 0.15.0 RC04 和 Doris 1.1 版本进行测试，下面是表的相关说明及数据量。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("TPC-H表名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("行数")]),t._v(" "),a("th",[t._v("导入后大小")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("REGION")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5")]),t._v(" "),a("td",[t._v("400KB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("区域表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("NATION")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("25")]),t._v(" "),a("td",[t._v("7.714 KB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("国家表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("SUPPLIER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100万")]),t._v(" "),a("td",[t._v("85.528 MB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("供应商表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PART")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000万")]),t._v(" "),a("td",[t._v("752.330 MB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("零部件表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("PARTSUPP")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("8000万")]),t._v(" "),a("td",[t._v("4.375 GB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("零部件供应表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("CUSTOMER")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1500万")]),t._v(" "),a("td",[t._v("1.317 GB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("客户表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("ORDERS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.5亿")]),t._v(" "),a("td",[t._v("6.301 GB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("订单表")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("LINEITEM")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6亿")]),t._v(" "),a("td",[t._v("20.882 GB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("订单明细表")])])])]),t._v(" "),a("h2",{attrs:{id:"_4-测试sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试sql"}},[t._v("#")]),t._v(" 4. 测试SQL")]),t._v(" "),a("p",[t._v("TPCH 22个测试查询语句 ： "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/tpch-tools/queries",target:"_blank",rel:"noopener noreferrer"}},[t._v("TPCH-Query-SQL"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("p",[t._v("以上SQL中的以下四个参数在0.15.0 RC04中不存在，在0.15.0 RC04中执行的时候，去掉：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. enable_vectorized_engine=true,\n2. batch_size=4096,\n3. disable_join_reorder=false\n4. enable_projection=true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"_5-测试结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-测试结果"}},[t._v("#")]),t._v(" 5. 测试结果")]),t._v(" "),a("p",[t._v("这里我们使用即将发布的 Doris-1.1版本和 Doris-0.15.0 RC04 版本进行对比测试，测试结果如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Query")]),t._v(" "),a("th",[t._v("Doris-1.1(s)")]),t._v(" "),a("th",[t._v("0.15.0 RC04(s)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Q1")]),t._v(" "),a("td",[t._v("3.75")]),t._v(" "),a("td",[t._v("28.63")])]),t._v(" "),a("tr",[a("td",[t._v("Q2")]),t._v(" "),a("td",[t._v("4.22")]),t._v(" "),a("td",[t._v("7.88")])]),t._v(" "),a("tr",[a("td",[t._v("Q3")]),t._v(" "),a("td",[t._v("2.64")]),t._v(" "),a("td",[t._v("9.39")])]),t._v(" "),a("tr",[a("td",[t._v("Q4")]),t._v(" "),a("td",[t._v("1.5")]),t._v(" "),a("td",[t._v("9.3")])]),t._v(" "),a("tr",[a("td",[t._v("Q5")]),t._v(" "),a("td",[t._v("2.15")]),t._v(" "),a("td",[t._v("4.11")])]),t._v(" "),a("tr",[a("td",[t._v("Q6")]),t._v(" "),a("td",[t._v("0.19")]),t._v(" "),a("td",[t._v("0.43")])]),t._v(" "),a("tr",[a("td",[t._v("Q7")]),t._v(" "),a("td",[t._v("1.04")]),t._v(" "),a("td",[t._v("1.61")])]),t._v(" "),a("tr",[a("td",[t._v("Q8")]),t._v(" "),a("td",[t._v("1.75")]),t._v(" "),a("td",[t._v("50.35")])]),t._v(" "),a("tr",[a("td",[t._v("Q9")]),t._v(" "),a("td",[t._v("7.94")]),t._v(" "),a("td",[t._v("16.34")])]),t._v(" "),a("tr",[a("td",[t._v("Q10")]),t._v(" "),a("td",[t._v("1.41")]),t._v(" "),a("td",[t._v("5.21")])]),t._v(" "),a("tr",[a("td",[t._v("Q11")]),t._v(" "),a("td",[t._v("0.35")]),t._v(" "),a("td",[t._v("1.72")])]),t._v(" "),a("tr",[a("td",[t._v("Q12")]),t._v(" "),a("td",[t._v("0.57")]),t._v(" "),a("td",[t._v("5.39")])]),t._v(" "),a("tr",[a("td",[t._v("Q13")]),t._v(" "),a("td",[t._v("8.15")]),t._v(" "),a("td",[t._v("20.88")])]),t._v(" "),a("tr",[a("td",[t._v("Q14")]),t._v(" "),a("td",[t._v("0.3")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("Q15")]),t._v(" "),a("td",[t._v("0.66")]),t._v(" "),a("td",[t._v("1.86")])]),t._v(" "),a("tr",[a("td",[t._v("Q16")]),t._v(" "),a("td",[t._v("0.79")]),t._v(" "),a("td",[t._v("1.32")])]),t._v(" "),a("tr",[a("td",[t._v("Q17")]),t._v(" "),a("td",[t._v("1.51")]),t._v(" "),a("td",[t._v("26.67")])]),t._v(" "),a("tr",[a("td",[t._v("Q18")]),t._v(" "),a("td",[t._v("3.364")]),t._v(" "),a("td",[t._v("11.77")])]),t._v(" "),a("tr",[a("td",[t._v("Q19")]),t._v(" "),a("td",[t._v("0.829")]),t._v(" "),a("td",[t._v("1.71")])]),t._v(" "),a("tr",[a("td",[t._v("Q20")]),t._v(" "),a("td",[t._v("2.77")]),t._v(" "),a("td",[t._v("5.2")])]),t._v(" "),a("tr",[a("td",[t._v("Q21")]),t._v(" "),a("td",[t._v("4.47")]),t._v(" "),a("td",[t._v("10.34")])]),t._v(" "),a("tr",[a("td",[t._v("Q22")]),t._v(" "),a("td",[t._v("0.9")]),t._v(" "),a("td",[t._v("3.22")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("total")])]),t._v(" "),a("td",[a("strong",[t._v("51.253")])]),t._v(" "),a("td",[a("strong",[t._v("223.33")])])])])]),t._v(" "),a("p",[a("strong",[t._v("结果说明")])]),t._v(" "),a("ul",[a("li",[t._v("测试结果对应的数据集为scale 100, 约6亿条。")]),t._v(" "),a("li",[t._v("测试环境配置为用户常用配置，云服务器4台，16核 64G SSD，1 FE 3 BE 部署。")]),t._v(" "),a("li",[t._v("选用用户常见配置测试以降低用户选型评估成本，但整个测试过程中不会消耗如此多的硬件资源。")]),t._v(" "),a("li",[t._v("测试结果为3次执行取平均值。并且数据经过充分的 compaction（如果在刚导入数据后立刻测试，则查询延迟可能高于本测试结果，compaction的速度正在持续优化中，未来会显著降低）。")]),t._v(" "),a("li",[t._v("0.15 RC04 在 TPC-H 测试中 Q14 执行失败，无法完成查询。")])]),t._v(" "),a("h2",{attrs:{id:"_6-环境准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-环境准备"}},[t._v("#")]),t._v(" 6. 环境准备")]),t._v(" "),a("p",[t._v("请先参照 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/install/install-deploy.html"}},[t._v("官方文档")]),t._v(" 进行 Doris 的安装部署，以获得一个正常运行中的 Doris 集群（至少包含 1 FE 1 BE，推荐 1 FE 3 BE）。")],1),t._v(" "),a("h2",{attrs:{id:"_7-数据准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-数据准备"}},[t._v("#")]),t._v(" 7. 数据准备")]),t._v(" "),a("h3",{attrs:{id:"_7-1-下载安装-tpc-h-数据生成工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-下载安装-tpc-h-数据生成工具"}},[t._v("#")]),t._v(" 7.1 下载安装 TPC-H 数据生成工具")]),t._v(" "),a("p",[t._v("执行以下脚本下载并编译  "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/tools/tpch-tools",target:"_blank",rel:"noopener noreferrer"}},[t._v("tpch-tools"),a("OutboundLink")],1),t._v("  工具。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build-tpch-dbgen.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("安装成功后，将在 "),a("code",[t._v("TPC-H_Tools_v3.0.0/")]),t._v(" 目录下生成 "),a("code",[t._v("dbgen")]),t._v(" 二进制文件。")]),t._v(" "),a("h3",{attrs:{id:"_7-2-生成-tpc-h-测试集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-生成-tpc-h-测试集"}},[t._v("#")]),t._v(" 7.2 生成 TPC-H 测试集")]),t._v(" "),a("p",[t._v("执行以下脚本生成 TPC-H 数据集：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" gen-tpch-data.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("注1：通过 "),a("code",[t._v("sh gen-tpch-data.sh -h")]),t._v(" 查看脚本帮助。")]),t._v(" "),a("p",[t._v("注2：数据会以 "),a("code",[t._v(".tbl")]),t._v(" 为后缀生成在  "),a("code",[t._v("tpch-data/")]),t._v(" 目录下。文件总大小约100GB。生成时间可能在数分钟到1小时不等。")]),t._v(" "),a("p",[t._v("注3：默认生成 100G 的标准测试数据集")])]),t._v(" "),a("h3",{attrs:{id:"_7-3-建表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-建表"}},[t._v("#")]),t._v(" 7.3 建表")]),t._v(" "),a("h4",{attrs:{id:"_7-3-1-准备-doris-cluster-conf-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1-准备-doris-cluster-conf-文件"}},[t._v("#")]),t._v(" 7.3.1 准备 "),a("code",[t._v("doris-cluster.conf")]),t._v(" 文件")]),t._v(" "),a("p",[t._v("在调用导入脚本前，需要将 FE 的 ip 端口等信息写在 "),a("code",[t._v("doris-cluster.conf")]),t._v(" 文件中。")]),t._v(" "),a("p",[t._v("文件位置和 "),a("code",[t._v("load-tpch-data.sh")]),t._v(" 平级。")]),t._v(" "),a("p",[t._v("文件内容包括 FE 的 ip，HTTP 端口，用户名，密码以及待导入数据的 DB 名称：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any of FE host")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_HOST")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http_port in fe.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_HTTP_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8030")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# query_port in fe.conf")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FE_QUERY_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9030")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Doris username")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Doris password")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The database where TPC-H tables located")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tpch1'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"_7-3-2-执行以下脚本生成创建-tpc-h-表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-2-执行以下脚本生成创建-tpc-h-表"}},[t._v("#")]),t._v(" 7.3.2 执行以下脚本生成创建 TPC-H 表")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" create-tpch-tables.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者复制 "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/tools/tpch-tools/create-tpch-tables.sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("create-tpch-tables.sql"),a("OutboundLink")],1),t._v(" 中的建表语句，在 Doris 中执行。")]),t._v(" "),a("h3",{attrs:{id:"_7-4-导入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-导入数据"}},[t._v("#")]),t._v(" 7.4 导入数据")]),t._v(" "),a("p",[t._v("通过下面的命令执行数据导入：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" ./load-tpch-data.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"_7-5-检查导入数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-5-检查导入数据"}},[t._v("#")]),t._v(" 7.5 检查导入数据")]),t._v(" "),a("p",[t._v("执行下面的 SQL 语句检查导入的数据量上 上面的数据量是一致。")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  lineitem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  orders"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  partsupp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  part"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  supplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  nation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  region"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v("  revenue0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"_7-6-查询测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-6-查询测试"}},[t._v("#")]),t._v(" 7.6 查询测试")]),t._v(" "),a("p",[t._v("执行上面的测试 SQL 或者 执行下面的命令")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./run-tpch-queries.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("注意：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("目前Doris的查询优化器和统计信息功能还不完善，所以我们在TPC-H中重写了一些查询以适应Doris的执行框架，但不影响结果的正确性")])]),t._v(" "),a("li",[a("p",[t._v("Doris 新的查询优化器将在后续的版本中发布")])]),t._v(" "),a("li",[a("p",[t._v("执行查询之前设置 "),a("code",[t._v("set mem_exec_limit=8G")])])])])])])}),[],!1,null,null,null);s.default=_.exports}}]);