(window.webpackJsonp=window.webpackJsonp||[]).push([[1827],{2454:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"subscribe-to-kafka-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-kafka-logs"}},[s._v("#")]),s._v(" Subscribe to Kafka logs")]),s._v(" "),a("p",[s._v("Users can directly subscribe to message data in Kafka by submitting routine import jobs to synchronize data in near real-time.")]),s._v(" "),a("p",[s._v("Doris itself can ensure that messages in Kafka are subscribed without loss or weight, that is, "),a("code",[s._v("Exactly-Once")]),s._v(" consumption semantics.")]),s._v(" "),a("h2",{attrs:{id:"subscribe-to-kafka-messages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#subscribe-to-kafka-messages"}},[s._v("#")]),s._v(" Subscribe to Kafka messages")]),s._v(" "),a("p",[s._v("Subscribing to Kafka messages uses the Routine Load feature in Doris.")]),s._v(" "),a("p",[s._v("The user first needs to create a "),a("strong",[s._v("routine import job")]),s._v(". The job will send a series of "),a("strong",[s._v("tasks")]),s._v(" continuously through routine scheduling, and each task will consume a certain number of messages in Kafka.")]),s._v(" "),a("p",[s._v("Please note the following usage restrictions:")]),s._v(" "),a("ol",[a("li",[s._v("Support unauthenticated Kafka access and SSL-authenticated Kafka clusters.")]),s._v(" "),a("li",[s._v("The supported message formats are as follows:\n"),a("ul",[a("li",[s._v("csv text format. Each message is a line, and the end of the line "),a("strong",[s._v("does not contain")]),s._v(" a newline.")]),s._v(" "),a("li",[s._v("Json format, see "),a("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/load-json-format.html"}},[s._v("Import Json Format Data")]),s._v(".")],1)])]),s._v(" "),a("li",[s._v("Only supports Kafka 0.10.0.0 (inclusive) and above.")])]),s._v(" "),a("h3",{attrs:{id:"accessing-ssl-authenticated-kafka-clusters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#accessing-ssl-authenticated-kafka-clusters"}},[s._v("#")]),s._v(" Accessing SSL-authenticated Kafka clusters")]),s._v(" "),a("p",[s._v("The routine import feature supports unauthenticated Kafka clusters, as well as SSL-authenticated Kafka clusters.")]),s._v(" "),a("p",[s._v("Accessing an SSL-authenticated Kafka cluster requires the user to provide a certificate file (ca.pem) for authenticating the Kafka Broker public key. If client authentication is also enabled in the Kafka cluster, the client's public key (client.pem), key file (client.key), and key password must also be provided. The files required here need to be uploaded to Plao through the "),a("code",[s._v("CREAE FILE")]),s._v(" command, and the catalog name is "),a("code",[s._v("kafka")]),s._v(". The specific help of the "),a("code",[s._v("CREATE FILE")]),s._v(" command can be found in the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[s._v("CREATE FILE")]),s._v(" command manual . Here is an example:")],1),s._v(" "),a("ul",[a("li",[a("p",[s._v("upload files")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_url/kafka-key/ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.key"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_urlkafka-key/client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.pem"')]),s._v(" PROPERTIES"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://example_url/kafka-key/client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])]),s._v(" "),a("p",[s._v("After the upload is complete, you can view the uploaded files through the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[s._v("SHOW FILES")]),s._v(" command.")],1),s._v(" "),a("h3",{attrs:{id:"create-a-routine-import-job"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-routine-import-job"}},[s._v("#")]),s._v(" Create a routine import job")]),s._v(" "),a("p",[s._v("For specific commands to create routine import tasks, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[s._v("ROUTINE LOAD")]),s._v(" command manual. Here is an example:")],1),s._v(" "),a("ol",[a("li",[a("p",[s._v("Access the Kafka cluster without authentication")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_interval"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_rows"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_size"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_broker_list"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker1:9092,broker2:9092,broker3:9092"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_topic"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.group.id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.client.id"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.kafka_default_offsets"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"OFFSET_BEGINNING"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("max_batch_interval/max_batch_rows/max_batch_size")]),s._v(" is used to control the running period of a subtask. The running period of a subtask is determined by the longest running time, the maximum number of rows consumed, and the maximum amount of data consumed.")])])]),s._v(" "),a("li",[a("p",[s._v("Access an SSL-authenticated Kafka cluster")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROUTINE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("my_first_routine_load_job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" test_1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMNS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TERMINATED")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\nPROPERTIES\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_interval"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_rows"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"300000"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_batch_size"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"209715200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" KAFKA\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_broker_list"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"broker1:9091,broker2:9091"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka_topic"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_topic"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.security.protocol"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssl"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.ca.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.certificate.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:client.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.key.location"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"FILE:client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"property.ssl.key.password"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abcdefg"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"view-import-job-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view-import-job-status"}},[s._v("#")]),s._v(" View import job status")]),s._v(" "),a("p",[s._v("See "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD.html"}},[s._v("SHOW ROUTINE LOAD")]),s._v(" for specific commands and examples for checking the status of a "),a("strong",[s._v("job")]),s._v(" ) command documentation.")],1),s._v(" "),a("p",[s._v("See "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-ROUTINE-LOAD-TASK.html"}},[s._v("SHOW ROUTINE LOAD TASK")]),s._v(" command documentation.")],1),s._v(" "),a("p",[s._v("Only the currently running tasks can be viewed, and the completed and unstarted tasks cannot be viewed.")]),s._v(" "),a("h3",{attrs:{id:"modify-job-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-job-properties"}},[s._v("#")]),s._v(" Modify job properties")]),s._v(" "),a("p",[s._v("The user can modify some properties of the job that has been created. For details, please refer to the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/ALTER-ROUTINE-LOAD.html"}},[s._v("ALTER ROUTINE LOAD")]),s._v(" command manual.")],1),s._v(" "),a("h3",{attrs:{id:"job-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#job-control"}},[s._v("#")]),s._v(" Job Control")]),s._v(" "),a("p",[s._v("The user can control the stop, pause and restart of the job through the "),a("code",[s._v("STOP/PAUSE/RESUME")]),s._v(" three commands.")]),s._v(" "),a("p",[s._v("For specific commands, please refer to "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/STOP-ROUTINE-LOAD.html"}},[s._v("STOP ROUTINE LOAD")]),s._v(" , "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-ROUTINE-LOAD.html"}},[s._v("PAUSE ROUTINE LOAD")]),s._v(", "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/RESUME-ROUTINE-LOAD.html"}},[s._v("RESUME ROUTINE LOAD")]),s._v(" command documentation.")],1),s._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[s._v("#")]),s._v(" more help")]),s._v(" "),a("p",[s._v("For more detailed syntax and best practices for ROUTINE LOAD, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-ROUTINE-LOAD.html"}},[s._v("ROUTINE LOAD")]),s._v(" command manual.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);