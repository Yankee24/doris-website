(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{735:function(e,s,t){"use strict";t.r(s);var a=t(15),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"export-query-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#export-query-result"}},[e._v("#")]),e._v(" Export Query Result")]),e._v(" "),t("p",[e._v("This document describes how to use the "),t("code",[e._v("SELECT INTO OUTFILE")]),e._v(" command to export query results.")]),e._v(" "),t("h2",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("SELECT INTO OUTFILE")]),e._v(" statement can export the query results to a file. Currently supports export to remote storage through Broker process, or directly through S3, HDFS  protocol such as HDFS, S3, BOS and COS(Tencent Cloud) through the Broker process. The syntax is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[e._v("file_path")])]),e._v(" "),t("p",[t("code",[e._v("file_path")]),e._v(" specify the file path and file name prefix. Like: "),t("code",[e._v("hdfs://path/to/my_file_")]),e._v(".")]),e._v(" "),t("p",[e._v("The final file name will be assembled as "),t("code",[e._v("my_file_")]),e._v(", file seq no and the format suffix. File seq no starts from 0, determined by the number of split.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("my_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("[format_as]")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("FORMAT AS CSV\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Specify the export format. The default is CSV.")])]),e._v(" "),t("li",[t("p",[t("code",[e._v("[properties]")])]),e._v(" "),t("p",[e._v("Specify the relevant attributes. Currently it supports exporting through the Broker process, or through the S3, HDFS protocol.")]),e._v(" "),t("ul",[t("li",[e._v("Broker related attributes need to be prefixed with "),t("code",[e._v("broker.")]),e._v(". For details, please refer to "),t("RouterLink",{attrs:{to:"/0.15/administrator-guide/broker.html"}},[e._v("Broker Document")]),e._v(".")],1),e._v(" "),t("li",[e._v("HDFS protocal can directly execute HDFS protocal configuration.")]),e._v(" "),t("li",[e._v("S3 protocol can directly execute S3 protocol configuration.")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PROPERTIES\n("broker.prop_key" = "broker.prop_val", ...)\nor \n("hdfs.fs.defaultFS" = "xxx", "hdfs.user" = "xxx")\nor\n("AWS_ENDPOINT" = "xxx", ...)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Other properties")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('PROPERTIES\n("key1" = "val1", "key2" = "val2", ...)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("currently supports the following properties:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("column_separator")]),e._v(": Column separator, only applicable to CSV format. The default is "),t("code",[e._v("\\t")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("line_delimiter")]),e._v(": Line delimiter, only applicable to CSV format. The default is "),t("code",[e._v("\\n")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("max_file_size")]),e._v(": The max size of a single file. Default is 1GB. Range from 5MB to 2GB. Files exceeding this size will be splitted.")]),e._v(" "),t("li",[t("code",[e._v("schema")]),e._v(": schema infomation for PARQUET, only applicable to PARQUET format. If the exported file format is PARQUET, "),t("code",[e._v("schema")]),e._v(" must be specified.")])])])]),e._v(" "),t("h2",{attrs:{id:"concurrent-export"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-export"}},[e._v("#")]),e._v(" Concurrent export")]),e._v(" "),t("p",[e._v("By default, the export of the query result set is non-concurrent, that is, a single point of export. If the user wants the query result set to be exported concurrently, the following conditions need to be met:")]),e._v(" "),t("ol",[t("li",[e._v("session variable 'enable_parallel_outfile' to enable concurrent export: "),t("code",[e._v("set enable_parallel_outfile = true;")])]),e._v(" "),t("li",[e._v("The export method is S3, HDFS instead of using a broker")]),e._v(" "),t("li",[e._v("The query can meet the needs of concurrent export, for example, the top level does not contain single point nodes such as sort. (I will give an example later, which is a query that does not export the result set concurrently)")])]),e._v(" "),t("p",[e._v("If the above three conditions are met, the concurrent export query result set can be triggered. Concurrency = "),t("code",[e._v("be_instacne_num * parallel_fragment_exec_instance_num")])]),e._v(" "),t("h3",{attrs:{id:"how-to-verify-that-the-result-set-is-exported-concurrently"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-verify-that-the-result-set-is-exported-concurrently"}},[e._v("#")]),e._v(" How to verify that the result set is exported concurrently")]),e._v(" "),t("p",[e._v("After the user enables concurrent export through the session variable setting, if you want to verify whether the current query can be exported concurrently, you can use the following method.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('explain select xxx from xxx where xxx into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("After explaining the query, Doris will return the plan of the query. If you find that "),t("code",[e._v("RESULT FILE SINK")]),e._v(" appears in "),t("code",[e._v("PLAN FRAGMENT 1")]),e._v(", it means that the export concurrency has been opened successfully.\nIf "),t("code",[e._v("RESULT FILE SINK")]),e._v(" appears in "),t("code",[e._v("PLAN FRAGMENT 0")]),e._v(", it means that the current query cannot be exported concurrently (the current query does not satisfy the three conditions of concurrent export at the same time).")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Planning example for concurrent export:\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br")])]),t("h2",{attrs:{id:"usage-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Example 1")]),e._v(" "),t("p",[e._v("Export simple query results to the file "),t("code",[e._v("hdfs:/path/to/result.txt")]),e._v(". Specify the export format as CSV. Use "),t("code",[e._v("my_broker")]),e._v(" and set kerberos authentication information. Specify the column separator as "),t("code",[e._v(",")]),e._v(" and the line delimiter as "),t("code",[e._v("\\n")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("If the result is less than 100MB, file will be: "),t("code",[e._v("result_0.csv")]),e._v(".")]),e._v(" "),t("p",[e._v("If larger than 100MB, may be: "),t("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Example 2")]),e._v(" "),t("p",[e._v("Export simple query results to the file "),t("code",[e._v("hdfs:/path/to/result.parquet")]),e._v(". Specify the export format as PARQUET. Use "),t("code",[e._v("my_broker")]),e._v(" and set kerberos authentication information.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs:/path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "schema"="required,int32,c1;required,byte_array,c2;required,byte_array,c2"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("If the exported file format is PARQUET, "),t("code",[e._v("schema")]),e._v(" must be specified.")])]),e._v(" "),t("li",[t("p",[e._v("Example 3")]),e._v(" "),t("p",[e._v("Export the query result of the CTE statement to the file "),t("code",[e._v("hdfs:/path/to/result.txt")]),e._v(". The default export format is CSV. Use "),t("code",[e._v("my_broker")]),e._v(" and set hdfs high availability information. Use the default column separators and line delimiter.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs:/path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])]),t("p",[e._v("If the result is less than 1GB, file will be: "),t("code",[e._v("result_0.csv")]),e._v(".")]),e._v(" "),t("p",[e._v("If larger than 1GB, may be: "),t("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v(".")])]),e._v(" "),t("li",[t("p",[e._v("Example 4")]),e._v(" "),t("p",[e._v("Export the query results of the UNION statement to the file "),t("code",[e._v("bos://bucket/result.parquet")]),e._v(". Specify the export format as PARQUET. Use "),t("code",[e._v("my_broker")]),e._v(" and set hdfs high availability information. PARQUET format does not need to specify the column separator and line delimiter.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy",\n    "schema"="required,int32,k1;required,byte_array,k2"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Example 5")]),e._v(" "),t("p",[e._v("Export simple query results to the file "),t("code",[e._v("cos://${bucket_name}/path/result.txt")]),e._v(". Specify the export format as CSV.\nAnd create a mark file after export finished.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n   "broker.name" = "hdfs_broker",\n   "broker.fs.s3a.access.key" = "xxx",\n   "broker.fs.s3a.secret.key" = "xxxx",\n   "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n   "column_separator" = ",",\n   "line_delimiter" = "\\n",\n   "max_file_size" = "1024MB",\n   "success_file_name" = "SUCCESS"\n)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br")])]),t("p",[e._v("If the result is less than 1GB, file will be: "),t("code",[e._v("my_file_0.csv")]),e._v(".")]),e._v(" "),t("p",[e._v("If larger than 1GB, may be: "),t("code",[e._v("my_file_0.csv, result_1.csv, ...")]),e._v(".")]),e._v(" "),t("p",[e._v("Please Note:")]),e._v(" "),t("ol",[t("li",[e._v("Paths that do not exist are automatically created.")]),e._v(" "),t("li",[e._v("These parameters(access.key/secret.key/endpointneed) need to be confirmed with "),t("code",[e._v("Tecent Cloud COS")]),e._v(". In particular, the value of endpoint does not need to be filled in bucket_name.")])])]),e._v(" "),t("li",[t("p",[e._v("Example 6")]),e._v(" "),t("p",[e._v("Use the s3 protocol to export to bos, and concurrent export is enabled.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("The final generated file prefix is "),t("code",[e._v("my_file_{fragment_instance_id}_")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("Example 7")]),e._v(" "),t("p",[e._v("Use the s3 protocol to export to bos, and enable concurrent export of session variables.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n    "AWS_ENDPOINT" = "http://s3.bd.bcebos.com",\n    "AWS_ACCESS_KEY" = "xxxx",\n    "AWS_SECRET_KEY" = "xxx",\n    "AWS_REGION" = "bd"\n)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[t("strong",[e._v("But because the query statement has a top-level sorting node, even if the query is enabled for concurrently exported session variables, it cannot be exported concurrently.")])])]),e._v(" "),t("li",[t("p",[e._v("Example 7")]),e._v(" "),t("p",[e._v("Export simple query results to the file "),t("code",[e._v("hdfs://path/to/result.txt")]),e._v(". Specify the export format as CSV. Use HDFS protocal directly and set kerberos authentication information.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "hdfs.fs.defaultFS" = "hdfs://namenode_ip:namenode_port",\n    "hdfs.hadoop.security.authentication" = "kerberos",\n    "hdfs.kerberos_principal" = "doris@YOUR.COM",\n    "hdfs.kerberos_keytab" = "/home/doris/my.keytab",\n    "max_file_size" = "100MB"\n);\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br")])]),t("p",[e._v("If the result is less than 100MB, file will be: "),t("code",[e._v("result_0.csv")]),e._v(".")]),e._v(" "),t("p",[e._v("If larger than 100MB, may be: "),t("code",[e._v("result_0.csv, result_1.csv, ...")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"return-result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#return-result"}},[e._v("#")]),e._v(" Return result")]),e._v(" "),t("p",[e._v("The command is a synchronization command. The command returns, which means the operation is over.\nAt the same time, a row of results will be returned to show the exported execution result.")]),e._v(" "),t("p",[e._v("If it exports and returns normally, the result is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("ul",[t("li",[e._v("FileNumber: The number of files finally generated.")]),e._v(" "),t("li",[e._v("TotalRows: The number of rows in the result set.")]),e._v(" "),t("li",[e._v("FileSize: The total size of the exported file. Unit byte.")]),e._v(" "),t("li",[e._v("URL: If it is exported to a local disk, the Compute Node to which it is exported is displayed here.")])]),e._v(" "),t("p",[e._v("If a concurrent export is performed, multiple rows of data will be returned.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("If the execution is incorrect, an error message will be returned, such as:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"notice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),t("ul",[t("li",[e._v("The CSV format does not support exporting binary types, such as BITMAP and HLL types. These types will be output as "),t("code",[e._v("\\N")]),e._v(", which is null.")]),e._v(" "),t("li",[e._v("If you do not enable concurrent export, the query result is exported by a single BE node in a single thread. Therefore, the export time and the export result set size are positively correlated. Turning on concurrent export can reduce the export time.")]),e._v(" "),t("li",[e._v("The export command does not check whether the file and file path exist. Whether the path will be automatically created or whether the existing file will be overwritten is entirely determined by the semantics of the remote storage system.")]),e._v(" "),t("li",[e._v("If an error occurs during the export process, the exported file may remain on the remote storage system. Doris will not clean these files. The user needs to manually clean up.")]),e._v(" "),t("li",[e._v("The timeout of the export command is the same as the timeout of the query. It can be set by "),t("code",[e._v("SET query_timeout = xxx")]),e._v(".")]),e._v(" "),t("li",[e._v("For empty result query, there will be an empty file.")]),e._v(" "),t("li",[e._v("File spliting will ensure that a row of data is stored in a single file. Therefore, the size of the file is not strictly equal to "),t("code",[e._v("max_file_size")]),e._v(".")]),e._v(" "),t("li",[e._v("For functions whose output is invisible characters, such as BITMAP and HLL types, the output is "),t("code",[e._v("\\N")]),e._v(", which is NULL.")]),e._v(" "),t("li",[e._v("At present, the output type of some geo functions, such as "),t("code",[e._v("ST_Point")]),e._v(" is VARCHAR, but the actual output value is an encoded binary character. Currently these functions will output garbled characters. For geo functions, use "),t("code",[e._v("ST_AsText")]),e._v(" for output.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);