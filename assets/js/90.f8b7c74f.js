(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{718:function(e,a,t){"use strict";t.r(a);var s=t(15),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sequence-column"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sequence-column"}},[e._v("#")]),e._v(" Sequence Column")]),e._v(" "),t("p",[e._v("The Sequence Column currently only supports the Uniq model. The Uniq model is mainly for scenarios requiring a unique primary key, which can guarantee the uniqueness constraint of the primary key. However, due to the use of REPLACE aggregation, the replacement sequence is not guaranteed for data imported in the same batch, which can be described in detail "),t("RouterLink",{attrs:{to:"/0.15/getting-started/data-model-rollup.html"}},[e._v("here")]),e._v(". If the order of substitution is not guaranteed, then the specific data that is finally imported into the table cannot be determined, and there is uncertainty.")],1),e._v(" "),t("p",[e._v("To solve this problem, Doris supported a sequence column by allowing the user to specify the sequence column when importing. Under the same key column, columns of the REPLACE aggregate type will be replaced according to the value of the sequence column, larger values can be replaced with smaller values, and vice versa. In this method, the order is determined by the user, and the user controls the replacement order.")]),e._v(" "),t("h2",{attrs:{id:"principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" Principle")]),e._v(" "),t("p",[e._v("Implemented by adding a hidden column "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(", the type of the column is specified by the user while create the table, determines the specific value of the column on import, and replaces the REPLACE column with that value.")]),e._v(" "),t("h3",{attrs:{id:"create-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-table"}},[e._v("#")]),e._v(" Create Table")]),e._v(" "),t("p",[e._v("When you create the Uniq table, a hidden column "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(" is automatically added, depending on the type specified by the user")]),e._v(" "),t("h3",{attrs:{id:"import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[e._v("#")]),e._v(" Import")]),e._v(" "),t("p",[e._v("When importing, fe sets the value of the hidden column during parsing to the value of the 'order by' expression (Broker Load and routine Load), or the value of the 'function_column.sequence_col' expression (stream load), and the value column will be replaced according to this value. The value of the hidden column "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(" can be set as a column in the source data or in the table structure.")]),e._v(" "),t("h3",{attrs:{id:"read"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[e._v("#")]),e._v(" Read")]),e._v(" "),t("p",[e._v("The request with the value column needs to read the additional column of "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(", which is used as a basis for the order of replacement aggregation function replacement under the same key column, with the larger value replacing the smaller value and not the reverse.")]),e._v(" "),t("h3",{attrs:{id:"cumulative-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cumulative-compaction"}},[e._v("#")]),e._v(" Cumulative Compaction")]),e._v(" "),t("p",[e._v("Cumulative Compaction works in the same way as the reading process")]),e._v(" "),t("h3",{attrs:{id:"base-compaction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base-compaction"}},[e._v("#")]),e._v(" Base Compaction")]),e._v(" "),t("p",[e._v("Base Compaction works in the same way as the reading process")]),e._v(" "),t("h3",{attrs:{id:"syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),t("p",[e._v("The syntax aspect of the table construction adds a property to the property identifying the type of "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(".\nThe syntax design aspect of the import is primarily the addition of a mapping from the sequence column to other columns, the settings of each import mode are described below")]),e._v(" "),t("h4",{attrs:{id:"create-table-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-table-2"}},[e._v("#")]),e._v(" Create Table")]),e._v(" "),t("p",[e._v("When you create the Uniq table, you can specify the sequence column type")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("PROPERTIES (\n    \"function_column.sequence_type\" = 'Date',\n);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("The sequence_type is used to specify the type of the sequence column, which can be integral and time")]),e._v(" "),t("h4",{attrs:{id:"stream-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[e._v("#")]),e._v(" stream load")]),e._v(" "),t("p",[e._v("The syntax of the stream load is to add the mapping of hidden columns corresponding to source_sequence in the 'function_column.sequence_col' field in the header, for example")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h4",{attrs:{id:"broker-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broker-load"}},[e._v("#")]),e._v(" broker load")]),e._v(" "),t("p",[e._v("Set the source_sequence field for the hidden column map at "),t("code",[e._v("ORDER BY")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('LOAD LABEL db1.label1\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl1`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br")])]),t("h4",{attrs:{id:"routine-load"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#routine-load"}},[e._v("#")]),e._v(" routine load")]),e._v(" "),t("p",[e._v("The mapping method is the same as above, as shown below")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n    [WITH MERGE|APPEND|DELETE]\n    COLUMNS(k1, k2, source_sequence, v1, v2),\n    WHERE k1 > 100 and k2 like "%doris%"\n    [ORDER BY source_sequence]\n    PROPERTIES\n    (\n        "desired_concurrent_number"="3",\n        "max_batch_interval" = "20",\n        "max_batch_rows" = "300000",\n        "max_batch_size" = "209715200",\n        "strict_mode" = "false"\n    )\n    FROM KAFKA\n    (\n        "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n        "kafka_topic" = "my_topic",\n        "kafka_partitions" = "0,1,2,3",\n        "kafka_offsets" = "101,0,0,200"\n    );\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br")])]),t("h2",{attrs:{id:"enable-sequence-column-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-sequence-column-support"}},[e._v("#")]),e._v(" Enable sequence column support")]),e._v(" "),t("p",[e._v("If "),t("code",[e._v("function_column.sequence_type")]),e._v(" is set when creating a new table, then the sequence column will be supported.\nFor a table that does not support sequence column, use the following statement if you would like to use this feature:\n"),t("code",[e._v('ALTER TABLE example_db.my_table ENABLE FEATURE "SEQUENCE_LOAD" WITH PROPERTIES ("function_column.sequence_type" = "Date")')]),e._v(" to enable.\nIf you want to determine if a table supports sequence column, you can set the session variable to display the hidden column "),t("code",[e._v("SET show_hidden_columns=true")]),e._v(", followed by "),t("code",[e._v("desc Tablename")]),e._v(", if the output contains the column "),t("code",[e._v("__DORIS_SEQUENCE_COL__")]),e._v(", it is supported, if not, it is not supported")]),e._v(" "),t("h2",{attrs:{id:"usage-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),t("p",[e._v("Let's take the stream Load as an example to show how to use it")]),e._v(" "),t("ol",[t("li",[e._v("Create a table that supports sequence column.")])]),e._v(" "),t("p",[e._v("The table structure is shown below")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL > desc test_table;\n+-------------+--------------+------+-------+---------+---------+\n| Field       | Type         | Null | Key   | Default | Extra   |\n+-------------+--------------+------+-------+---------+---------+\n| user_id     | BIGINT       | No   | true  | NULL    |         |\n| date        | DATE         | No   | true  | NULL    |         |\n| group_id    | BIGINT       | No   | true  | NULL    |         |\n| modify_date | DATE         | No   | false | NULL    | REPLACE |\n| keyword     | VARCHAR(128) | No   | false | NULL    | REPLACE |\n+-------------+--------------+------+-------+---------+---------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Import data normally:")])]),e._v(" "),t("p",[e._v("Import the following data")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-22      b\n1       2020-02-22      1       2020-03-05      c\n1       2020-02-22      1       2020-02-26      d\n1       2020-02-22      1       2020-02-22      e\n1       2020-02-22      1       2020-02-22      b\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Take the Stream Load as an example here and map the sequence column to the modify_date column")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('curl --location-trusted -u root: -H "function_column.sequence_col: modify_date" -T testData http://host:port/api/test/test_table/_stream_load\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("The results is")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL > select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("In this import, the c is eventually retained in the keyword column because the value of the sequence column (the value in modify_date) is the maximum value: '2020-03-05'.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Guarantee of substitution order")])]),e._v(" "),t("p",[e._v("After the above steps are completed, import the following data")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-02-23      b\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Query data")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-05  | c       |\n+---------+------------+----------+-------------+---------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Because the sequence column for the newly imported data are all smaller than the values already in the table, they cannot be replaced\nTry importing the following data again")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1       2020-02-22      1       2020-02-22      a\n1       2020-02-22      1       2020-03-23      w\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Query data")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("MySQL [test]> select * from test_table;\n+---------+------------+----------+-------------+---------+\n| user_id | date       | group_id | modify_date | keyword |\n+---------+------------+----------+-------------+---------+\n|       1 | 2020-02-22 |        1 | 2020-03-23  | w       |\n+---------+------------+----------+-------------+---------+\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("At this point, you can replace the original data in the table")])])}),[],!1,null,null,null);a.default=n.exports}}]);