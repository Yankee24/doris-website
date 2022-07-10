(window.webpackJsonp=window.webpackJsonp||[]).push([[679],{1304:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据恢复"}},[s._v("#")]),s._v(" 数据恢复")]),s._v(" "),a("p",[s._v("Doris 支持将当前数据以文件的形式，通过 broker 备份到远端存储系统中。之后可以通过 恢复 命令，从远端存储系统中将数据恢复到任意 Doris 集群。通过这个功能，Doris 可以支持将数据定期的进行快照备份。也可以通过这个功能，在不同集群间进行数据迁移。")]),s._v(" "),a("p",[s._v("该功能需要 Doris 版本 0.8.2+")]),s._v(" "),a("p",[s._v("使用该功能，需要部署对应远端存储的 broker。如 BOS、HDFS 等。可以通过 "),a("code",[s._v("SHOW BROKER;")]),s._v(" 查看当前部署的 broker。")]),s._v(" "),a("h2",{attrs:{id:"简要原理说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简要原理说明"}},[s._v("#")]),s._v(" 简要原理说明")]),s._v(" "),a("p",[s._v("恢复操作需要指定一个远端仓库中已存在的备份，然后将这个备份的内容恢复到本地集群中。当用户提交 Restore 请求后，系统内部会做如下操作：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("在本地创建对应的元数据")]),s._v(" "),a("p",[s._v("这一步首先会在本地集群中，创建恢复对应的表分区等结构。创建完成后，该表可见，但是不可访问。")])]),s._v(" "),a("li",[a("p",[s._v("本地snapshot")]),s._v(" "),a("p",[s._v("这一步是将上一步创建的表做一个快照。这其实是一个空快照（因为刚创建的表是没有数据的），其目的主要是在 Backend 上产生对应的快照目录，用于之后接收从远端仓库下载的快照文件。")])]),s._v(" "),a("li",[a("p",[s._v("下载快照")]),s._v(" "),a("p",[s._v("远端仓库中的快照文件，会被下载到对应的上一步生成的快照目录中。这一步由各个 Backend 并发完成。")])]),s._v(" "),a("li",[a("p",[s._v("生效快照")]),s._v(" "),a("p",[s._v("快照下载完成后，我们要将各个快照映射为当前本地表的元数据。然后重新加载这些快照，使之生效，完成最终的恢复作业。")])])]),s._v(" "),a("h2",{attrs:{id:"开始恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始恢复"}},[s._v("#")]),s._v(" 开始恢复")]),s._v(" "),a("ol",[a("li",[a("p",[s._v('从 example_repo 中恢复备份 snapshot_1 中的表 backup_tbl 到数据库 example_db1，时间版本为 "2018-05-04-16-45-08"。恢复为 1 个副本：')]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" example_db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("snapshot_1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("example_repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("backup_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-04-08-15-52-29"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replication_num"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v('从 example_repo 中恢复备份 snapshot_2 中的表 backup_tbl 的分区 p1,p2，以及表 backup_tbl2 到数据库 example_db1，并重命名为 new_tbl，时间版本为 "2018-05-04-17-11-01"。默认恢复为 3 个副本：')]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTORE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" example_db1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("snapshot_2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("example_repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("backup_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PARTITION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("backup_tbl2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("new_tbl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2022-04-08-15-55-43"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("查看 restore 作业的执行情况:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RESTORE")]),s._v("\\G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n               JobId: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17891851")]),s._v("\n               Label: snapshot_label1\n           "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Timestamp")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("52")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("\n              DbName: default_cluster:example_db1\n               State: FINISHED\n           AllowLoad: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n      ReplicationNum: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n         RestoreObjs: {\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"snapshot_label1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example_db"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_time"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1649404349050")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"content"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ALL"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"olap_table_list"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    {\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"backup_tbl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"partition_names"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"p2"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    }\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"view_list"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_table_list"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"odbc_resource_list"')]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n}\n          CreateTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("\n    MetaPreparedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("02")]),s._v("\nSnapshotFinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v("\nDownloadFinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("\n        FinishedTime: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("04")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Status")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n             Timeout: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])])])]),s._v(" "),a("p",[s._v("RESTORE的更多用法可参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.html"}},[s._v("这里")]),s._v("。")],1),s._v(" "),a("h2",{attrs:{id:"相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关命令"}},[s._v("#")]),s._v(" 相关命令")]),s._v(" "),a("p",[s._v("和备份恢复功能相关的命令如下。以下命令，都可以通过 mysql-client 连接 Doris 后，使用 "),a("code",[s._v("help cmd;")]),s._v(" 的方式查看详细帮助。")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("CREATE REPOSITORY")]),s._v(" "),a("p",[s._v("创建一个远端仓库路径，用于备份或恢复。该命令需要借助 Broker 进程访问远端存储，不同的 Broker 需要提供不同的参数，具体请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/advanced/broker.html"}},[s._v("Broker文档")]),s._v("，也可以直接通过S3 协议备份到支持AWS S3协议的远程存储上去，也可以直接备份到HDFS，具体参考 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.html"}},[s._v("创建远程仓库文档")])],1)]),s._v(" "),a("li",[a("p",[s._v("RESTORE")]),s._v(" "),a("p",[s._v("执行一次恢复操作。")])]),s._v(" "),a("li",[a("p",[s._v("SHOW RESTORE")]),s._v(" "),a("p",[s._v("查看最近一次 restore 作业的执行情况，包括：")]),s._v(" "),a("ul",[a("li",[s._v("JobId：本次恢复作业的 id。")]),s._v(" "),a("li",[s._v("Label：用户指定的仓库中备份的名称（Label）。")]),s._v(" "),a("li",[s._v("Timestamp：用户指定的仓库中备份的时间戳。")]),s._v(" "),a("li",[s._v("DbName：恢复作业对应的 Database。")]),s._v(" "),a("li",[s._v("State：恢复作业当前所在阶段：\n"),a("ul",[a("li",[s._v("PENDING：作业初始状态。")]),s._v(" "),a("li",[s._v("SNAPSHOTING：正在进行本地新建表的快照操作。")]),s._v(" "),a("li",[s._v("DOWNLOAD：正在发送下载快照任务。")]),s._v(" "),a("li",[s._v("DOWNLOADING：快照正在下载。")]),s._v(" "),a("li",[s._v("COMMIT：准备生效已下载的快照。")]),s._v(" "),a("li",[s._v("COMMITTING：正在生效已下载的快照。")]),s._v(" "),a("li",[s._v("FINISHED：恢复完成。")]),s._v(" "),a("li",[s._v("CANCELLED：恢复失败或被取消。")])])]),s._v(" "),a("li",[s._v("AllowLoad：恢复期间是否允许导入。")]),s._v(" "),a("li",[s._v("ReplicationNum：恢复指定的副本数。")]),s._v(" "),a("li",[s._v("RestoreObjs：本次恢复涉及的表和分区的清单。")]),s._v(" "),a("li",[s._v("CreateTime：作业创建时间。")]),s._v(" "),a("li",[s._v("MetaPreparedTime：本地元数据生成完成时间。")]),s._v(" "),a("li",[s._v("SnapshotFinishedTime：本地快照完成时间。")]),s._v(" "),a("li",[s._v("DownloadFinishedTime：远端快照下载完成时间。")]),s._v(" "),a("li",[s._v("FinishedTime：本次作业完成时间。")]),s._v(" "),a("li",[s._v("UnfinishedTasks：在 "),a("code",[s._v("SNAPSHOTTING")]),s._v("，"),a("code",[s._v("DOWNLOADING")]),s._v(", "),a("code",[s._v("COMMITTING")]),s._v(" 等阶段，会有多个子任务在同时进行，这里展示的当前阶段，未完成的子任务的 task id。")]),s._v(" "),a("li",[s._v("TaskErrMsg：如果有子任务执行出错，这里会显示对应子任务的错误信息。")]),s._v(" "),a("li",[s._v("Status：用于记录在整个作业过程中，可能出现的一些状态信息。")]),s._v(" "),a("li",[s._v("Timeout：作业的超时时间，单位是秒。")])])]),s._v(" "),a("li",[a("p",[s._v("CANCEL RESTORE")]),s._v(" "),a("p",[s._v("取消当前正在执行的恢复作业。")])]),s._v(" "),a("li",[a("p",[s._v("DROP REPOSITORY")]),s._v(" "),a("p",[s._v("删除已创建的远端仓库。删除仓库，仅仅是删除该仓库在 Doris 中的映射，不会删除实际的仓库数据。")])])]),s._v(" "),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[s._v("#")]),s._v(" 常见错误")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("RESTORE报错：[20181: invalid md5 of downloaded file:/data/doris.HDD/snapshot/20220607095111.862.86400/19962/668322732/19962.hdr, expected: f05b63cca5533ea0466f62a9897289b5, get: d41d8cd98f00b204e9800998ecf8427e]")]),s._v(" "),a("p",[s._v("备份和恢复的表的副本数不一致导致的，执行恢复命令时需指定副本个数，具体命令请参阅"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.html"}},[s._v("RESTORE")]),s._v(" 命令手册")],1)]),s._v(" "),a("li",[a("p",[s._v("RESTORE报错：[COMMON_ERROR, msg: Could not set meta version to 97 since it is lower than minimum required version 100]")]),s._v(" "),a("p",[s._v("备份和恢复不是同一个版本导致的，使用指定的 meta_version 来读取之前备份的元数据。注意，该参数作为临时方案，仅用于恢复老版本 Doris 备份的数据。最新版本的备份数据中已经包含 meta version，无需再指定，针对上述错误具体解决方案指定meta_version = 100，具体命令请参阅"),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.html"}},[s._v("RESTORE")]),s._v(" 命令手册")],1)])]),s._v(" "),a("h2",{attrs:{id:"更多帮助"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更多帮助"}},[s._v("#")]),s._v(" 更多帮助")]),s._v(" "),a("p",[s._v("关于 RESTORE 使用的更多详细语法及最佳实践，请参阅 "),a("RouterLink",{attrs:{to:"/zh-CN/docs/sql-manual/sql-reference/Data-Definition-Statements/Backup-and-Restore/RESTORE.html"}},[s._v("RESTORE")]),s._v(" 命令手册，你也可以在 MySql 客户端命令行下输入 "),a("code",[s._v("HELP RESTORE")]),s._v(" 获取更多帮助信息。")],1)])}),[],!1,null,null,null);t.default=e.exports}}]);