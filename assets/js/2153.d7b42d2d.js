(window.webpackJsonp=window.webpackJsonp||[]).push([[2153],{2781:function(t,e,a){"use strict";a.r(e);var s=a(15),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"stream-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stream-load"}},[t._v("#")]),t._v(" STREAM-LOAD")]),t._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" Name")]),t._v(" "),a("p",[t._v("STREAM LOAD")]),t._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),a("p",[t._v("stream-load: load data to table in streaming")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u user:passwd [-H ""...] -T data.file -XPUT http://fe_host:http_port/api/{db}/{table}/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("This statement is used to import data into the specified table. The difference from ordinary Load is that this import method is synchronous import.")]),t._v(" "),a("p",[t._v("This import method can still ensure the atomicity of a batch of import tasks, either all data is imported successfully or all of them fail.")]),t._v(" "),a("p",[t._v("This operation will update the data of the rollup table related to this base table at the same time.")]),t._v(" "),a("p",[t._v("This is a synchronous operation. After the entire data import work is completed, the import result is returned to the user.")]),t._v(" "),a("p",[t._v("Currently, HTTP chunked and non-chunked uploads are supported. For non-chunked methods, Content-Length must be used to indicate the length of the uploaded content, which can ensure the integrity of the data.")]),t._v(" "),a("p",[t._v("In addition, it is best for users to set the content of the Expect Header field to 100-continue, which can avoid unnecessary data transmission in some error scenarios.")]),t._v(" "),a("p",[t._v("Parameter introduction:\nUsers can pass in import parameters through the Header part of HTTP")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("label: The label imported once, the data of the same label cannot be imported multiple times. Users can avoid the problem of duplicate data import by specifying Label.")]),t._v(" "),a("p",[t._v("Currently, Doris retains the most recent successful label within 30 minutes.")])]),t._v(" "),a("li",[a("p",[t._v("column_separator: used to specify the column separator in the import file, the default is \\t. If it is an invisible character, you need to add \\x as a prefix and use hexadecimal to represent the separator.")]),t._v(" "),a("p",[t._v('For example, the separator \\x01 of the hive file needs to be specified as -H "column_separator:\\x01".')]),t._v(" "),a("p",[t._v("You can use a combination of multiple characters as column separators.")])]),t._v(" "),a("li",[a("p",[t._v("line_delimiter: used to specify the newline character in the imported file, the default is \\n. Combinations of multiple characters can be used as newlines.")])]),t._v(" "),a("li",[a("p",[t._v("columns: used to specify the correspondence between the columns in the import file and the columns in the table. If the column in the source file corresponds exactly to the content in the table, then there is no need to specify the content of this field.")]),t._v(" "),a("p",[t._v("If the source file does not correspond to the table schema, then this field is required for some data conversion. There are two forms of column, one is directly corresponding to the field in the imported file, which is directly represented by the field name;")]),t._v(" "),a("p",[t._v("One is derived column, the syntax is "),a("code",[t._v("column_name")]),t._v(" = expression. Give a few examples to help understand.")]),t._v(" "),a("p",[t._v('Example 1: There are 3 columns "c1, c2, c3" in the table, and the three columns in the source file correspond to "c3, c2, c1" at a time; then you need to specify -H "columns: c3, c2, c1 "')]),t._v(" "),a("p",[t._v('Example 2: There are 3 columns "c1, c2, c3" in the table, the first three columns in the source file correspond in turn, but there is more than 1 column; then you need to specify -H "columns: c1, c2, c3, xxx";')]),t._v(" "),a("p",[t._v("The last column can be arbitrarily assigned a name and placeholder")]),t._v(" "),a("p",[t._v('Example 3: There are three columns "year, month, day" in the table, and there is only one time column in the source file, which is in "2018-06-01 01:02:03" format;')]),t._v(" "),a("p",[t._v('Then you can specify -H "columns: col, year = year(col), month=month(col), day=day(col)" to complete the import')])]),t._v(" "),a("li",[a("p",[t._v("where: used to extract part of the data. If the user needs to filter out the unnecessary data, he can achieve this by setting this option.")]),t._v(" "),a("p",[t._v('Example 1: Only import data greater than k1 column equal to 20180601, then you can specify -H "where: k1 = 20180601" when importing')])]),t._v(" "),a("li",[a("p",[t._v("max_filter_ratio: The maximum tolerable data ratio that can be filtered (for reasons such as data irregularity). Zero tolerance by default. Data irregularities do not include rows filtered out by where conditions.")])]),t._v(" "),a("li",[a("p",[t._v("partitions: used to specify the partition designed for this import. If the user can determine the partition corresponding to the data, it is recommended to specify this item. Data that does not satisfy these partitions will be filtered out.")]),t._v(" "),a("p",[t._v('For example, specify import to p1, p2 partition, -H "partitions: p1, p2"')])]),t._v(" "),a("li",[a("p",[t._v("timeout: Specify the import timeout. in seconds. The default is 600 seconds. The setting range is from 1 second to 259200 seconds.")])]),t._v(" "),a("li",[a("p",[t._v('strict_mode: The user specifies whether to enable strict mode for this import. The default is off. The enable mode is -H "strict_mode: true".')])]),t._v(" "),a("li",[a("p",[t._v("timezone: Specify the time zone used for this import. The default is Dongba District. This parameter affects the results of all time zone-related functions involved in the import.")])]),t._v(" "),a("li",[a("p",[t._v("exec_mem_limit: Import memory limit. Default is 2GB. The unit is bytes.")])]),t._v(" "),a("li",[a("p",[t._v("format: Specify the import data format, the default is csv, and json format is supported.")])]),t._v(" "),a("li",[a("p",[t._v("jsonpaths: The way of importing json is divided into: simple mode and matching mode.")]),t._v(" "),a("p",[t._v("Simple mode: The simple mode is not set the jsonpaths parameter. In this mode, the json data is required to be an object type, for example:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"k1":1, "k2":2, "k3":"hello"}, where k1, k2, k3 are column names.\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Matching mode: It is relatively complex for json data and needs to match the corresponding value through the jsonpaths parameter.")])]),t._v(" "),a("li",[a("p",[t._v("strip_outer_array: Boolean type, true indicates that the json data starts with an array object and flattens the array object, the default value is false. E.g:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' [\n  {"k1" : 1, "v1" : 2},\n  {"k1" : 3, "v1" : 4}\n ]\n When strip_outer_array is true, the final import into doris will generate two rows of data.\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v('json_root: json_root is a valid jsonpath string, used to specify the root node of the json document, the default value is "".')])]),t._v(" "),a("li",[a("p",[t._v("merge_type: The merge type of data, which supports three types: APPEND, DELETE, and MERGE. Among them, APPEND is the default value, which means that this batch of data needs to be appended to the existing data, and DELETE means to delete all the data with the same key as this batch of data. Line, the MERGE semantics need to be used in conjunction with the delete condition, which means that the data that meets the delete condition is processed according to the DELETE semantics and the rest is processed according to the APPEND semantics, for example: "),a("code",[t._v('-H "merge_type: MERGE" -H "delete: flag=1"')])])]),t._v(" "),a("li",[a("p",[t._v("delete: Only meaningful under MERGE, indicating the deletion condition of the data\nfunction_column.sequence_col: Only applicable to UNIQUE_KEYS. Under the same key column, ensure that the value column is REPLACEed according to the source_sequence column. The source_sequence can be a column in the data source or a column in the table structure.")])]),t._v(" "),a("li",[a("p",[t._v("fuzzy_parse: Boolean type, true means that json will be parsed with the schema of the first row. Enabling this option can improve the efficiency of json import, but requires that the order of the keys of all json objects is the same as the first row, the default is false, only use in json format")])]),t._v(" "),a("li",[a("p",[t._v("num_as_string: Boolean type, true means that when parsing json data, the numeric type will be converted to a string, and then imported without losing precision.")])]),t._v(" "),a("li",[a("p",[t._v("read_json_by_line: Boolean type, true to support reading one json object per line, the default value is false.")])]),t._v(" "),a("li",[a("p",[t._v("send_batch_parallelism: Integer, used to set the parallelism of sending batch data. If the value of parallelism exceeds "),a("code",[t._v("max_send_batch_parallelism_per_job")]),t._v(" in the BE configuration, the BE as a coordination point will use the value of "),a("code",[t._v("max_send_batch_parallelism_per_job")]),t._v(".")]),t._v(" "),a("p",[t._v("RETURN VALUES\nAfter the import is complete, the related content of this import will be returned in Json format. Currently includes the following fields\nStatus: Import the last status.\nSuccess: Indicates that the import is successful and the data is already visible;\nPublish Timeout: Indicates that the import job has been successfully committed, but is not immediately visible for some reason. The user can consider the import to be successful and not have to retry the import\nLabel Already Exists: Indicates that the Label has been occupied by other jobs. It may be imported successfully or it may be being imported.\nThe user needs to determine the subsequent operation through the get label state command\nOthers: The import failed, the user can specify the Label to retry the job\nMessage: Detailed description of the import status. On failure, the specific failure reason is returned.\nNumberTotalRows: The total number of rows read from the data stream\nNumberLoadedRows: The number of data rows imported this time, only valid in Success\nNumberFilteredRows: The number of rows filtered out by this import, that is, the number of rows with unqualified data quality\nNumberUnselectedRows: This import, the number of rows filtered out by the where condition\nLoadBytes: The size of the source file data imported this time\nLoadTimeMs: The time taken for this import\nBeginTxnTimeMs: The time it takes to request Fe to start a transaction, in milliseconds.\nStreamLoadPutTimeMs: The time it takes to request Fe to obtain the execution plan for importing data, in milliseconds.\nReadDataTimeMs: Time spent reading data, in milliseconds.\nWriteDataTimeMs: The time taken to perform the write data operation, in milliseconds.\nCommitAndPublishTimeMs: The time it takes to submit a request to Fe and publish the transaction, in milliseconds.\nErrorURL: The specific content of the filtered data, only the first 1000 items are retained")])])]),t._v(" "),a("p",[t._v("ERRORS:\nImport error details can be viewed with the following statement:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("   ```sql\n    SHOW LOAD WARNINGS ON 'url\n   ````\n")])])]),a("p",[t._v("where url is the url given by ErrorURL.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', and use Label for deduplication. Specify a timeout of 100 seconds")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    curl --location-trusted -u root -H "label:123" -H "timeout:100" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', use Label for deduplication, and only import data whose k1 is equal to 20180601")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "label:123" -H "where: k1=20180601" -T testData http://host:port/api/testDb/testTbl/_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allowing a 20% error rate (the user is in the defalut_cluster)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import the data in the local file 'testData' into the table 'testTbl' in the database 'testDb', allow a 20% error rate, and specify the column name of the file (the user is in the defalut_cluster)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "columns: k2, k1, v1" -T testData http://host:port/api/testDb/testTbl /_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import the data in the local file 'testData' into the p1, p2 partitions of the table 'testTbl' in the database 'testDb', allowing a 20% error rate.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "label:123" -H "max_filter_ratio:0.2" -H "partitions: p1, p2" -T testData http://host:port/api/testDb/testTbl/_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import using streaming (user is in defalut_cluster)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("````\nseq 1 10 | awk '{OFS=\"\\t\"}{print $1, $1 * 10}' | curl --location-trusted -u root -T - http://host:port/api/testDb/testTbl/ _stream_load\n````\n")])])])]),t._v(" "),a("li",[a("p",[t._v("Import a table containing HLL columns, which can be columns in the table or columns in the data to generate HLL columns, or use hll_empty to supplement columns that are not in the data")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "columns: k1, k2, v1=hll_hash(k1), v2=hll_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import data for strict mode filtering and set the time zone to Africa/Abidjan")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('````\ncurl --location-trusted -u root -H "strict_mode: true" -H "timezone: Africa/Abidjan" -T testData http://host:port/api/testDb/testTbl/_stream_load\n````\n')])])])]),t._v(" "),a("li",[a("p",[t._v("Import a table with a BITMAP column, which can be a column in the table or a column in the data to generate a BITMAP column, or use bitmap_empty to fill an empty Bitmap\n"),a("code",[t._v('curl --location-trusted -u root -H "columns: k1, k2, v1=to_bitmap(k1), v2=bitmap_empty()" -T testData http://host:port/api/testDb/testTbl/_stream_load')])])]),t._v(" "),a("li",[a("p",[t._v("Simple mode, import json data\nTable Structure:")])])]),t._v(" "),a("p",[a("code",[t._v("category")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("author")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("title")]),t._v(' varchar(512) NULL COMMENT "",\n'),a("code",[t._v("price")]),t._v(' double NULL COMMENT ""')]),t._v(" "),a("p",[t._v("json data format:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"category":"C++","author":"avc","title":"C++ primer","price":895}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Import command:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "label:123" -H "format: json" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("In order to improve throughput, it supports importing multiple pieces of json data at one time, each line is a json object, and \\n is used as a newline by default. You need to set read_json_by_line to true. The json data format is as follows:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"category":"C++","author":"avc","title":"C++ primer","price":89.5}\n{"category":"Java","author":"avc","title":"Effective Java","price":95}\n{"category":"Linux","author":"avc","title":"Linux kernel","price":195}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ol",{attrs:{start:"11"}},[a("li",[t._v("Match pattern, import json data\njson data format:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n{"category":"xuxb111","author":"1avc","title":"SayingsoftheCentury","price":895},{"category":"xuxb222","author":"2avc"," title":"SayingsoftheCentury","price":895},\n{"category":"xuxb333","author":"3avc","title":"SayingsoftheCentury","price":895}\n]\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("illustrate:\n1) If the json data starts with an array, and each object in the array is a record, you need to set strip_outer_array to true, which means flatten the array.\n2) If the json data starts with an array, and each object in the array is a record, when setting jsonpath, our ROOT node is actually an object in the array.")]),t._v(" "),a("ol",{attrs:{start:"12"}},[a("li",[t._v("User specified json root node\njson data format:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n "RECORDS":[\n{"category":"11","title":"SayingsoftheCentury","price":895,"timestamp":1589191587},\n{"category":"22","author":"2avc","price":895,"timestamp":1589191487},\n{"category":"33","author":"3avc","title":"SayingsoftheCentury","timestamp":1589191387}\n]\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("Precise import by specifying jsonpath, such as importing only three attributes of category, author, and price")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "columns: category, price, author" -H "label:123" -H "format: json" -H "jsonpaths: [\\"$.category\\",\\" $.price\\",\\"$.author\\"]" -H "strip_outer_array: true" -H "json_root: $.RECORDS" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"13"}},[a("li",[t._v("Delete the data with the same import key as this batch")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "merge_type: DELETE" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"14"}},[a("li",[t._v("Delete the columns in this batch of data that match the data whose flag is listed as true, and append other rows normally")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root: -H "column_separator:," -H "columns: siteid, citycode, username, pv, flag" -H "merge_type: MERGE" -H "delete: flag=1" -T testData http://host:port/api/testDb/testTbl/_stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("ol",{attrs:{start:"15"}},[a("li",[t._v("Import data into UNIQUE_KEYS table with sequence column")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('curl --location-trusted -u root -H "columns: k1,k2,source_sequence,v1,v2" -H "function_column.sequence_col: source_sequence" -T testData http://host:port/api/testDb/testTbl/ _stream_load\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[t._v("#")]),t._v(" Keywords")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("STREAM, LOAD\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[t._v("#")]),t._v(" Best Practice")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Check the import task status")]),t._v(" "),a("p",[t._v("Stream Load is a synchronous import process. The successful execution of the statement means that the data is imported successfully. The imported execution result will be returned synchronously through the HTTP return value. And display it in Json format. An example is as follows:")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"TxnId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("17")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"707717c0-271a-44c5-be0b-4e71bfeacaa5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberTotalRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberLoadedRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberFilteredRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"NumberUnselectedRows"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LoadBytes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("28")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"LoadTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"BeginTxnTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"StreamLoadPutTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ReadDataTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"WriteDataTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CommitAndPublishTimeMs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[t._v("The field definitions are as follows:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("TxnId: Import transaction ID, which is automatically generated by the system and is globally unique.")])]),t._v(" "),a("li",[a("p",[t._v("Label: Import Label, if not specified, the system will generate a UUID.")])]),t._v(" "),a("li",[a("p",[t._v("Status:")]),t._v(" "),a("p",[t._v("Import results. Has the following values:")]),t._v(" "),a("ul",[a("li",[t._v("Success: Indicates that the import was successful and the data is already visible.")]),t._v(" "),a("li",[t._v("Publish Timeout: This status also means that the import has completed, but the data may be visible with a delay.")]),t._v(" "),a("li",[t._v("Label Already Exists: The Label is duplicated and needs to be replaced.")]),t._v(" "),a("li",[t._v("Fail: Import failed.")])])]),t._v(" "),a("li",[a("p",[t._v("ExistingJobStatus:")]),t._v(" "),a("p",[t._v("The status of the import job corresponding to the existing Label.")]),t._v(" "),a("p",[t._v('This field is only displayed when the Status is "Label Already Exists". The user can know the status of the import job corresponding to the existing Label through this status. "RUNNING" means the job is still executing, "FINISHED" means the job was successful.')])]),t._v(" "),a("li",[a("p",[t._v("Message: Import error message.")])]),t._v(" "),a("li",[a("p",[t._v("NumberTotalRows: The total number of rows processed by the import.")])]),t._v(" "),a("li",[a("p",[t._v("NumberLoadedRows: The number of rows successfully imported.")])]),t._v(" "),a("li",[a("p",[t._v("NumberFilteredRows: The number of rows with unqualified data quality.")])]),t._v(" "),a("li",[a("p",[t._v("NumberUnselectedRows: The number of rows filtered by the where condition.")])]),t._v(" "),a("li",[a("p",[t._v("LoadBytes: Number of bytes imported.")])]),t._v(" "),a("li",[a("p",[t._v("LoadTimeMs: Import completion time. The unit is milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("BeginTxnTimeMs: The time it takes to request the FE to start a transaction, in milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("StreamLoadPutTimeMs: The time taken to request the FE to obtain the execution plan for importing data, in milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("ReadDataTimeMs: Time spent reading data, in milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("WriteDataTimeMs: The time spent performing the write data operation, in milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("CommitAndPublishTimeMs: The time it takes to submit a request to Fe and publish the transaction, in milliseconds.")])]),t._v(" "),a("li",[a("p",[t._v("ErrorURL: If there is a data quality problem, visit this URL to view the specific error line.")])])])]),t._v(" "),a("li",[a("p",[t._v("How to correctly submit the Stream Load job and process the returned results.")]),t._v(" "),a("p",[t._v("Stream Load is a synchronous import operation, so the user needs to wait for the return result of the command synchronously, and decide the next processing method according to the return result.")]),t._v(" "),a("p",[t._v("The user's primary concern is the "),a("code",[t._v("Status")]),t._v(" field in the returned result.")]),t._v(" "),a("p",[t._v("If it is "),a("code",[t._v("Success")]),t._v(", everything is fine and you can do other operations after that.")]),t._v(" "),a("p",[t._v("If the returned result shows a large number of "),a("code",[t._v("Publish Timeout")]),t._v(", it may indicate that some resources (such as IO) of the cluster are currently under strain, and the imported data cannot take effect finally. The import task in the state of "),a("code",[t._v("Publish Timeout")]),t._v(" has succeeded and does not need to be retried. However, it is recommended to slow down or stop the submission of new import tasks and observe the cluster load.")]),t._v(" "),a("p",[t._v("If the returned result is "),a("code",[t._v("Fail")]),t._v(", the import failed, and you need to check the problem according to the specific reason. Once resolved, you can retry with the same Label.")]),t._v(" "),a("p",[t._v("In some cases, the user's HTTP connection may be disconnected abnormally and the final returned result cannot be obtained. At this point, you can use the same Label to resubmit the import task, and the resubmitted task may have the following results:")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Status")]),t._v(" status is "),a("code",[t._v("Success")]),t._v(", "),a("code",[t._v("Fail")]),t._v(" or "),a("code",[t._v("Publish Timeout")]),t._v(". At this point, it can be processed according to the normal process.")]),t._v(" "),a("li",[t._v("The "),a("code",[t._v("Status")]),t._v(" status is "),a("code",[t._v("Label Already Exists")]),t._v(". At this time, you need to continue to view the "),a("code",[t._v("ExistingJobStatus")]),t._v(" field. If the value of this field is "),a("code",[t._v("FINISHED")]),t._v(", it means that the import task corresponding to this Label has been successful, and there is no need to retry. If it is "),a("code",[t._v("RUNNING")]),t._v(", it means that the import task corresponding to this Label is still running. At this time, you need to use the same Label to continue to submit repeatedly at intervals (such as 10 seconds) until "),a("code",[t._v("Status")]),t._v(" is not "),a("code",[t._v("Label Already Exists'")]),t._v(", or until the value of the "),a("code",[t._v("ExistingJobStatus")]),t._v(" field is "),a("code",[t._v("FINISHED")]),t._v(".")])])]),t._v(" "),a("li",[a("p",[t._v("Cancel the import task")]),t._v(" "),a("p",[t._v("Import tasks that have been submitted and not yet completed can be canceled with the CANCEL LOAD command. After cancellation, the written data will also be rolled back and will not take effect.")])]),t._v(" "),a("li",[a("p",[t._v("Label, import transaction, multi-table atomicity")]),t._v(" "),a("p",[t._v("All import tasks in Doris are atomic. And the import of multiple tables in the same import task can also guarantee atomicity. At the same time, Doris can also use the Label mechanism to ensure that the data imported is not lost or heavy. For details, see the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/data-operate/import/import-scenes/load-atomicity.html"}},[t._v("Import Transactions and Atomicity")]),t._v(" documentation.")],1)]),t._v(" "),a("li",[a("p",[t._v("Column mapping, derived columns and filtering")]),t._v(" "),a("p",[t._v("Doris can support very rich column transformation and filtering operations in import statements. Most built-in functions and UDFs are supported. For how to use this function correctly, please refer to the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/data-operate/import/import-scenes/load-data-convert.html"}},[t._v("Column Mapping, Conversion and Filtering")]),t._v(" document.")],1)]),t._v(" "),a("li",[a("p",[t._v("Error data filtering")]),t._v(" "),a("p",[t._v("Doris' import tasks can tolerate a portion of malformed data. The tolerance ratio is set via "),a("code",[t._v("max_filter_ratio")]),t._v(". The default is 0, which means that the entire import task will fail when there is an error data. If the user wants to ignore some problematic data rows, the secondary parameter can be set to a value between 0 and 1, and Doris will automatically skip the rows with incorrect data format.")]),t._v(" "),a("p",[t._v("For some calculation methods of the tolerance rate, please refer to the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/data-operate/import/import-scenes/load-data-convert.html"}},[t._v("Column Mapping, Conversion and Filtering")]),t._v(" document.")],1)]),t._v(" "),a("li",[a("p",[t._v("Strict Mode")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("strict_mode")]),t._v(" attribute is used to set whether the import task runs in strict mode. The format affects the results of column mapping, transformation, and filtering. For a detailed description of strict mode, see the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/data-operate/import/import-scenes/load-strict-mode.html"}},[t._v("strict mode")]),t._v(" documentation.")],1)]),t._v(" "),a("li",[a("p",[t._v("Timeout")]),t._v(" "),a("p",[t._v("The default timeout for Stream Load is 10 minutes. from the time the task is submitted. If it does not complete within the timeout period, the task fails.")])]),t._v(" "),a("li",[a("p",[t._v("Limits on data volume and number of tasks")]),t._v(" "),a("p",[t._v("Stream Load is suitable for importing data within a few GB. Because the data is processed by single-threaded transmission, the performance of importing excessively large data cannot be guaranteed. When a large amount of local data needs to be imported, multiple import tasks can be submitted in parallel.")]),t._v(" "),a("p",[t._v("Doris also limits the number of import tasks running at the same time in the cluster, usually ranging from 10-20. Import jobs submitted after that will be rejected.")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);