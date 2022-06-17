(window.webpackJsonp=window.webpackJsonp||[]).push([[1282],{1907:function(e,t,s){"use strict";s.r(t);var a=s(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"export-query-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-query-result"}},[e._v("#")]),e._v(" Export Query Result")]),e._v(" "),s("p",[e._v("This document describes how to use the  "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[e._v("SELECT INTO OUTFILE")]),e._v("  command to export query results.")],1),e._v(" "),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("h3",{attrs:{id:"export-to-hdfs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-to-hdfs"}},[e._v("#")]),e._v(" Export to HDFS")]),e._v(" "),s("p",[e._v("Export simple query results to the file "),s("code",[e._v("hdfs://path/to/result.txt")]),e._v(", specifying the export format as CSV.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" tbl\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTFILE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hdfs://path/to/result_"')]),e._v("\nFORMAT "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("AS")]),e._v(" CSV\nPROPERTIES\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"broker.name"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my_broker"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"column_separator"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('","')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"line_delimiter"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"\\n"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h3",{attrs:{id:"export-to-local-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#export-to-local-file"}},[e._v("#")]),e._v(" Export to local file")]),e._v(" "),s("p",[e._v("When exporting to a local file, you need to configure "),s("code",[e._v("enable_outfile_to_local=true")]),e._v(" in fe.conf first")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" tbl1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("limit")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("INTO")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("OUTFILE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"file:///home/work/path/result_"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("For more usage, see "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[e._v("OUTFILE documentation")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"concurrent-export"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrent-export"}},[e._v("#")]),e._v(" Concurrent export")]),e._v(" "),s("p",[e._v("By default, the export of the query result set is non-concurrent, that is, a single point of export. If the user wants the query result set to be exported concurrently, the following conditions need to be met:")]),e._v(" "),s("ol",[s("li",[e._v("session variable 'enable_parallel_outfile' to enable concurrent export: "),s("code",[e._v("set enable_parallel_outfile = true;")])]),e._v(" "),s("li",[e._v("The export method is S3, HDFS instead of using a broker")]),e._v(" "),s("li",[e._v("The query can meet the needs of concurrent export, for example, the top level does not contain single point nodes such as sort. (I will give an example later, which is a query that does not export the result set concurrently)")])]),e._v(" "),s("p",[e._v("If the above three conditions are met, the concurrent export query result set can be triggered. Concurrency = "),s("code",[e._v("be_instacne_num * parallel_fragment_exec_instance_num")])]),e._v(" "),s("h3",{attrs:{id:"how-to-verify-that-the-result-set-is-exported-concurrently"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-verify-that-the-result-set-is-exported-concurrently"}},[e._v("#")]),e._v(" How to verify that the result set is exported concurrently")]),e._v(" "),s("p",[e._v("After the user enables concurrent export through the session variable setting, if you want to verify whether the current query can be exported concurrently, you can use the following method.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('explain select xxx from xxx where xxx into outfile "s3://xxx" format as csv properties ("AWS_ENDPOINT" = "xxx", ...);\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("After explaining the query, Doris will return the plan of the query. If you find that "),s("code",[e._v("RESULT FILE SINK")]),e._v(" appears in "),s("code",[e._v("PLAN FRAGMENT 1")]),e._v(", it means that the export concurrency has been opened successfully.\nIf "),s("code",[e._v("RESULT FILE SINK")]),e._v(" appears in "),s("code",[e._v("PLAN FRAGMENT 0")]),e._v(", it means that the current query cannot be exported concurrently (the current query does not satisfy the three conditions of concurrent export at the same time).")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Planning example for concurrent export:\n+-----------------------------------------------------------------------------+\n| Explain String                                                              |\n+-----------------------------------------------------------------------------+\n| PLAN FRAGMENT 0                                                             |\n|  OUTPUT EXPRS:<slot 2> | <slot 3> | <slot 4> | <slot 5>                     |\n|   PARTITION: UNPARTITIONED                                                  |\n|                                                                             |\n|   RESULT SINK                                                               |\n|                                                                             |\n|   1:EXCHANGE                                                                |\n|                                                                             |\n| PLAN FRAGMENT 1                                                             |\n|  OUTPUT EXPRS:`k1` + `k2`                                                   |\n|   PARTITION: HASH_PARTITIONED: `default_cluster:test`.`multi_tablet`.`k1`   |\n|                                                                             |\n|   RESULT FILE SINK                                                          |\n|   FILE PATH: s3://ml-bd-repo/bpit_test/outfile_1951_                        |\n|   STORAGE TYPE: S3                                                          |\n|                                                                             |\n|   0:OlapScanNode                                                            |\n|      TABLE: multi_tablet                                                    |\n+-----------------------------------------------------------------------------+\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br")])]),s("h2",{attrs:{id:"usage-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),s("p",[e._v("For details, please refer to "),s("RouterLink",{attrs:{to:"/docs/data-operate/sql-reference/sql-statements/Data Manipulation/OUTFILE.html"}},[e._v("OUTFILE Document")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"return-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-result"}},[e._v("#")]),e._v(" Return result")]),e._v(" "),s("p",[e._v("The command is a synchronization command. The command returns, which means the operation is over.\nAt the same time, a row of results will be returned to show the exported execution result.")]),e._v(" "),s("p",[e._v("If it exports and returns normally, the result is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('mysql> select * from tbl1 limit 10 into outfile "file:///home/work/path/result_";\n+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         2 |        8 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n1 row in set (0.05 sec)\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[e._v("FileNumber: The number of files finally generated.")]),e._v(" "),s("li",[e._v("TotalRows: The number of rows in the result set.")]),e._v(" "),s("li",[e._v("FileSize: The total size of the exported file. Unit byte.")]),e._v(" "),s("li",[e._v("URL: If it is exported to a local disk, the Compute Node to which it is exported is displayed here.")])]),e._v(" "),s("p",[e._v("If a concurrent export is performed, multiple rows of data will be returned.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------------+-----------+----------+--------------------------------------------------------------------+\n| FileNumber | TotalRows | FileSize | URL                                                                |\n+------------+-----------+----------+--------------------------------------------------------------------+\n|          1 |         3 |        7 | file:///192.168.1.10/home/work/path/result_{fragment_instance_id}_ |\n|          1 |         2 |        4 | file:///192.168.1.11/home/work/path/result_{fragment_instance_id}_ |\n+------------+-----------+----------+--------------------------------------------------------------------+\n2 rows in set (2.218 sec)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("If the execution is incorrect, an error message will be returned, such as:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mysql> SELECT * FROM tbl INTO OUTFILE ...\nERROR 1064 (HY000): errCode = 2, detailMessage = Open broker writer failed ...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"notice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#notice"}},[e._v("#")]),e._v(" Notice")]),e._v(" "),s("ul",[s("li",[e._v("The CSV format does not support exporting binary types, such as BITMAP and HLL types. These types will be output as "),s("code",[e._v("\\N")]),e._v(", which is null.")]),e._v(" "),s("li",[e._v("If you do not enable concurrent export, the query result is exported by a single BE node in a single thread. Therefore, the export time and the export result set size are positively correlated. Turning on concurrent export can reduce the export time.")]),e._v(" "),s("li",[e._v("The export command does not check whether the file and file path exist. Whether the path will be automatically created or whether the existing file will be overwritten is entirely determined by the semantics of the remote storage system.")]),e._v(" "),s("li",[e._v("If an error occurs during the export process, the exported file may remain on the remote storage system. Doris will not clean these files. The user needs to manually clean up.")]),e._v(" "),s("li",[e._v("The timeout of the export command is the same as the timeout of the query. It can be set by "),s("code",[e._v("SET query_timeout = xxx")]),e._v(".")]),e._v(" "),s("li",[e._v("For empty result query, there will be an empty file.")]),e._v(" "),s("li",[e._v("File spliting will ensure that a row of data is stored in a single file. Therefore, the size of the file is not strictly equal to "),s("code",[e._v("max_file_size")]),e._v(".")]),e._v(" "),s("li",[e._v("For functions whose output is invisible characters, such as BITMAP and HLL types, the output is "),s("code",[e._v("\\N")]),e._v(", which is NULL.")]),e._v(" "),s("li",[e._v("At present, the output type of some geo functions, such as "),s("code",[e._v("ST_Point")]),e._v(" is VARCHAR, but the actual output value is an encoded binary character. Currently these functions will output garbled characters. For geo functions, use "),s("code",[e._v("ST_AsText")]),e._v(" for output.")])]),e._v(" "),s("h2",{attrs:{id:"more-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),s("p",[e._v("For more detailed syntax and best practices for using OUTFILE, please refer to the "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/OUTFILE.html"}},[e._v("OUTFILE")]),e._v(" command manual, you can also More help information can be obtained by typing "),s("code",[e._v("HELP OUTFILE")]),e._v(" at the command line of the MySql client.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);