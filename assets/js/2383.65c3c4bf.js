(window.webpackJsonp=window.webpackJsonp||[]).push([[2383],{3011:function(t,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spark-doris-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-doris-connector"}},[t._v("#")]),t._v(" Spark Doris Connector")]),t._v(" "),a("p",[t._v("Spark Doris Connector 可以支持通过 Spark 读取 Doris 中存储的数据，也支持通过Spark写入数据到Doris。")]),t._v(" "),a("ul",[a("li",[t._v("支持从"),a("code",[t._v("Doris")]),t._v("中读取数据")]),t._v(" "),a("li",[t._v("支持"),a("code",[t._v("Spark DataFrame")]),t._v("批量/流式 写入"),a("code",[t._v("Doris")])]),t._v(" "),a("li",[t._v("可以将"),a("code",[t._v("Doris")]),t._v("表映射为"),a("code",[t._v("DataFrame")]),t._v("或者"),a("code",[t._v("RDD")]),t._v("，推荐使用"),a("code",[t._v("DataFrame")]),t._v("。")]),t._v(" "),a("li",[t._v("支持在"),a("code",[t._v("Doris")]),t._v("端完成数据过滤，减少数据传输量。")])]),t._v(" "),a("h2",{attrs:{id:"版本兼容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本兼容"}},[t._v("#")]),t._v(" 版本兼容")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Connector")]),t._v(" "),a("th",[t._v("Spark")]),t._v(" "),a("th",[t._v("Doris")]),t._v(" "),a("th",[t._v("Java")]),t._v(" "),a("th",[t._v("Scala")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1.0.0")]),t._v(" "),a("td",[t._v("2.x")]),t._v(" "),a("td",[t._v("0.12+")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("2.11")])]),t._v(" "),a("tr",[a("td",[t._v("1.0.0")]),t._v(" "),a("td",[t._v("3.x")]),t._v(" "),a("td",[t._v("0.12.+")]),t._v(" "),a("td",[t._v("8")]),t._v(" "),a("td",[t._v("2.12")])])])]),t._v(" "),a("h2",{attrs:{id:"编译与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译与安装"}},[t._v("#")]),t._v(" 编译与安装")]),t._v(" "),a("p",[t._v("在 "),a("code",[t._v("extension/spark-doris-connector/")]),t._v(" 源码目录下执行：")]),t._v(" "),a("p",[a("strong",[t._v("注意：")])]),t._v(" "),a("ol",[a("li",[t._v("这里如果你没有整体编译过 doris 源码，需要首先编译一次 Doris 源码，不然会出现 thrift 命令找不到的情况，需要到 "),a("code",[t._v("incubator-doris")]),t._v(" 目录下执行 "),a("code",[t._v("sh build.sh")])]),t._v(" "),a("li",[t._v("建议在 doris 的 docker 编译环境 "),a("code",[t._v("apache/incubator-doris:build-env-1.2")]),t._v(" 下进行编译，因为 1.3 下面的JDK 版本是 11，会存在编译问题。")])]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build.sh "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## spark 3.x版本，默认是3.1.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" build.sh "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## spark 2.x版本，默认是2.3.4")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("编译成功后，会在 "),a("code",[t._v("output/")]),t._v(" 目录下生成文件 "),a("code",[t._v("doris-spark-1.0.0-SNAPSHOT.jar")]),t._v("。将此文件复制到 "),a("code",[t._v("Spark")]),t._v(" 的 "),a("code",[t._v("ClassPath")]),t._v(" 中即可使用 "),a("code",[t._v("Spark-Doris-Connector")]),t._v("。例如，"),a("code",[t._v("Local")]),t._v(" 模式运行的 "),a("code",[t._v("Spark")]),t._v("，将此文件放入 "),a("code",[t._v("jars/")]),t._v(" 文件夹下。"),a("code",[t._v("Yarn")]),t._v("集群模式运行的"),a("code",[t._v("Spark")]),t._v("，则将此文件放入预部署包中。")]),t._v(" "),a("h2",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),a("h3",{attrs:{id:"读取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读取"}},[t._v("#")]),t._v(" 读取")]),t._v(" "),a("h4",{attrs:{id:"sql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql"}},[t._v("#")]),t._v(" SQL")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEMPORARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VIEW")]),t._v(" spark_doris\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" doris\nOPTIONS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"table.identifier"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fenodes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" spark_doris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"dataframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataframe"}},[t._v("#")]),t._v(" DataFrame")]),t._v(" "),a("div",{staticClass:"language-scala line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" dorisSparkDF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.table.identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndorisSparkDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"rdd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdd"}},[t._v("#")]),t._v(" RDD")]),t._v(" "),a("div",{staticClass:"language-scala line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("org"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("apache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("doris"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")])]),t._v("_\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" dorisSparkRDD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" sc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dorisRDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  tableIdentifier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cfg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Some"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.request.auth.user"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.request.auth.password"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndorisSparkRDD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h3",{attrs:{id:"写入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入"}},[t._v("#")]),t._v(" 写入")]),t._v(" "),a("h4",{attrs:{id:"dataframe-batch-stream"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataframe-batch-stream"}},[t._v("#")]),t._v(" DataFrame(batch/stream)")]),t._v(" "),a("div",{staticClass:"language-scala line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-scala"}},[a("code",[t._v("## batch sink\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" mockDataDF "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" List"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"440403001005"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"21.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"4404030013005"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"22.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"23.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mi_code"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mi_name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmockDataDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmockDataDF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.table.identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n## stream sink"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("StructuredStreaming"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" kafkaSource "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" spark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readStream\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka.bootstrap.servers"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_KAFKA_SERVERS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"startingOffsets"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"latest"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subscribe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_KAFKA_TOPICS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("load"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nkafkaSource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("selectExpr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAST(key AS STRING)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CAST(value as STRING)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("writeStream\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"checkpointLocation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_CHECKPOINT_LOCATION"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.table.identifier"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_DATABASE_NAME.$YOUR_DORIS_TABLE_NAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"doris.fenodes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_FE_HOSTNAME:$YOUR_DORIS_FE_RESFUL_PORT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_USERNAME"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("option"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$YOUR_DORIS_PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("awaitTermination"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br")])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h3",{attrs:{id:"通用配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通用配置项"}},[t._v("#")]),t._v(" 通用配置项")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("doris.fenodes")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris FE http 地址，支持多个地址，使用逗号分隔")])]),t._v(" "),a("tr",[a("td",[t._v("doris.table.identifier")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("Doris 表名，如：db1.tbl1")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.retries")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("向Doris发送请求的重试次数")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.connect.timeout.ms")]),t._v(" "),a("td",[t._v("30000")]),t._v(" "),a("td",[t._v("向Doris发送请求的连接超时时间")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.read.timeout.ms")]),t._v(" "),a("td",[t._v("30000")]),t._v(" "),a("td",[t._v("向Doris发送请求的读取超时时间")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.query.timeout.s")]),t._v(" "),a("td",[t._v("3600")]),t._v(" "),a("td",[t._v("查询doris的超时时间，默认值为1小时，-1表示无超时限制")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.tablet.size")]),t._v(" "),a("td",[t._v("Integer.MAX_VALUE")]),t._v(" "),a("td",[t._v("一个RDD Partition对应的Doris Tablet个数。"),a("br"),t._v("此数值设置越小，则会生成越多的Partition。从而提升Spark侧的并行度，但同时会对Doris造成更大的压力。")])]),t._v(" "),a("tr",[a("td",[t._v("doris.batch.size")]),t._v(" "),a("td",[t._v("1024")]),t._v(" "),a("td",[t._v("一次从BE读取数据的最大行数。增大此数值可减少Spark与Doris之间建立连接的次数。"),a("br"),t._v("从而减轻网络延迟所带来的的额外时间开销。")])]),t._v(" "),a("tr",[a("td",[t._v("doris.exec.mem.limit")]),t._v(" "),a("td",[t._v("2147483648")]),t._v(" "),a("td",[t._v("单个查询的内存限制。默认为 2GB，单位为字节")])]),t._v(" "),a("tr",[a("td",[t._v("doris.deserialize.arrow.async")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否支持异步转换Arrow格式到spark-doris-connector迭代所需的RowBatch")])]),t._v(" "),a("tr",[a("td",[t._v("doris.deserialize.queue.size")]),t._v(" "),a("td",[t._v("64")]),t._v(" "),a("td",[t._v("异步转换Arrow格式的内部处理队列，当doris.deserialize.arrow.async为true时生效")])])])]),t._v(" "),a("h3",{attrs:{id:"sql-和-dataframe-专有配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-和-dataframe-专有配置"}},[t._v("#")]),t._v(" SQL 和 Dataframe 专有配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("user")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("访问Doris的用户名")])]),t._v(" "),a("tr",[a("td",[t._v("password")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("访问Doris的密码")])]),t._v(" "),a("tr",[a("td",[t._v("doris.filter.query.in.max.count")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("谓词下推中，in表达式value列表元素最大数量。超过此数量，则in表达式条件过滤在Spark侧处理。")])])])]),t._v(" "),a("h3",{attrs:{id:"rdd-专有配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdd-专有配置"}},[t._v("#")]),t._v(" RDD 专有配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Key")]),t._v(" "),a("th",[t._v("Default Value")]),t._v(" "),a("th",[t._v("Comment")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("doris.request.auth.user")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("访问Doris的用户名")])]),t._v(" "),a("tr",[a("td",[t._v("doris.request.auth.password")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("访问Doris的密码")])]),t._v(" "),a("tr",[a("td",[t._v("doris.read.field")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("读取Doris表的列名列表，多列之间使用逗号分隔")])]),t._v(" "),a("tr",[a("td",[t._v("doris.filter.query")]),t._v(" "),a("td",[t._v("--")]),t._v(" "),a("td",[t._v("过滤读取数据的表达式，此表达式透传给Doris。Doris使用此表达式完成源端数据过滤。")])])])]),t._v(" "),a("h2",{attrs:{id:"doris-和-spark-列类型映射关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doris-和-spark-列类型映射关系"}},[t._v("#")]),t._v(" Doris 和 Spark 列类型映射关系")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Doris Type")]),t._v(" "),a("th",[t._v("Spark Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("NULL_TYPE")]),t._v(" "),a("td",[t._v("DataTypes.NullType")])]),t._v(" "),a("tr",[a("td",[t._v("BOOLEAN")]),t._v(" "),a("td",[t._v("DataTypes.BooleanType")])]),t._v(" "),a("tr",[a("td",[t._v("TINYINT")]),t._v(" "),a("td",[t._v("DataTypes.ByteType")])]),t._v(" "),a("tr",[a("td",[t._v("SMALLINT")]),t._v(" "),a("td",[t._v("DataTypes.ShortType")])]),t._v(" "),a("tr",[a("td",[t._v("INT")]),t._v(" "),a("td",[t._v("DataTypes.IntegerType")])]),t._v(" "),a("tr",[a("td",[t._v("BIGINT")]),t._v(" "),a("td",[t._v("DataTypes.LongType")])]),t._v(" "),a("tr",[a("td",[t._v("FLOAT")]),t._v(" "),a("td",[t._v("DataTypes.FloatType")])]),t._v(" "),a("tr",[a("td",[t._v("DOUBLE")]),t._v(" "),a("td",[t._v("DataTypes.DoubleType")])]),t._v(" "),a("tr",[a("td",[t._v("DATE")]),t._v(" "),a("td",[t._v("DataTypes.StringType"),a("sup",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("DATETIME")]),t._v(" "),a("td",[t._v("DataTypes.StringType"),a("sup",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[t._v("BINARY")]),t._v(" "),a("td",[t._v("DataTypes.BinaryType")])]),t._v(" "),a("tr",[a("td",[t._v("DECIMAL")]),t._v(" "),a("td",[t._v("DecimalType")])]),t._v(" "),a("tr",[a("td",[t._v("CHAR")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("LARGEINT")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("VARCHAR")]),t._v(" "),a("td",[t._v("DataTypes.StringType")])]),t._v(" "),a("tr",[a("td",[t._v("DECIMALV2")]),t._v(" "),a("td",[t._v("DecimalType")])]),t._v(" "),a("tr",[a("td",[t._v("TIME")]),t._v(" "),a("td",[t._v("DataTypes.DoubleType")])]),t._v(" "),a("tr",[a("td",[t._v("HLL")]),t._v(" "),a("td",[t._v("Unsupported datatype")])])])]),t._v(" "),a("ul",[a("li",[t._v("注：Connector中，将"),a("code",[t._v("DATE")]),t._v("和"),a("code",[t._v("DATETIME")]),t._v("映射为"),a("code",[t._v("String")]),t._v("。由于"),a("code",[t._v("Doris")]),t._v("底层存储引擎处理逻辑，直接使用时间类型时，覆盖的时间范围无法满足需求。所以使用 "),a("code",[t._v("String")]),t._v(" 类型直接返回对应的时间可读文本。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);