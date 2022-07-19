(window.webpackJsonp=window.webpackJsonp||[]).push([[1813],{2440:function(e,t,a){"use strict";a.r(t);var s=a(15),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-manager"}},[e._v("#")]),e._v(" File Manager")]),e._v(" "),a("p",[e._v("Some functions in Doris require some user-defined files. For example, public keys, key files, certificate files and so on are used to access external data sources. The File Manager provides a function that allows users to upload these files in advance and save them in Doris system, which can then be referenced or accessed in other commands.")]),e._v(" "),a("h2",{attrs:{id:"noun-interpretation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noun-interpretation"}},[e._v("#")]),e._v(" Noun Interpretation")]),e._v(" "),a("ul",[a("li",[e._v("BDBJE: Oracle Berkeley DB Java Edition. Distributed embedded database for persistent metadata in FE.")]),e._v(" "),a("li",[e._v("SmallFileMgr: File Manager. Responsible for creating and maintaining user files.")])]),e._v(" "),a("h2",{attrs:{id:"basic-concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts"}},[e._v("#")]),e._v(" Basic concepts")]),e._v(" "),a("p",[e._v("Files are files created and saved by users in Doris.")]),e._v(" "),a("p",[e._v("A file is located by "),a("code",[e._v("database")]),e._v(", "),a("code",[e._v("catalog")]),e._v(", "),a("code",[e._v("file_name")]),e._v(". At the same time, each file also has a globally unique ID (file_id), which serves as the identification in the system.")]),e._v(" "),a("p",[e._v("File creation and deletion can only be performed by users with "),a("code",[e._v("admin")]),e._v(" privileges. A file belongs to a database. Users who have access to a database (queries, imports, modifications, etc.) can use the files created under the database.")]),e._v(" "),a("h2",{attrs:{id:"specific-operation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specific-operation"}},[e._v("#")]),e._v(" Specific operation")]),e._v(" "),a("p",[e._v("File management has three main commands: "),a("code",[e._v("CREATE FILE")]),e._v(", "),a("code",[e._v("SHOW FILE")]),e._v(" and "),a("code",[e._v("DROP FILE")]),e._v(", creating, viewing and deleting files respectively. The specific syntax of these three commands can be viewed by connecting to Doris and executing "),a("code",[e._v("HELP cmd;")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"create-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[e._v("#")]),e._v(" CREATE FILE")]),e._v(" "),a("p",[e._v("This statement is used to create and upload a file to the Doris cluster. For details, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[e._v("CREATE FILE")]),e._v(".")],1),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Create")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("file")]),e._v(" ca"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" classified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" kafka\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FILE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ca.pem"')]),e._v("\n    PROPERTIES\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"url"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://test.bj.bcebos.com/kafka-key/ca.pem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"catalog"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kafka"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Create")]),e._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("file")]),e._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" classified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("as")]),e._v(" my_catalog\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FILE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"client.key"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("IN")]),e._v(" my_database\n    PROPERTIES\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"url"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://test.bj.bcebos.com/kafka-key/client.key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"catalog"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"my_catalog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"md5"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"b5bb901bf10f99205b39a46ac3557dd9"')]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br")])]),a("h3",{attrs:{id:"show-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-file"}},[e._v("#")]),e._v(" SHOW FILE")]),e._v(" "),a("p",[e._v("This statement can view the files that have been created successfully. For details, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE.html"}},[e._v("SHOW FILE")]),e._v(".")],1),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("View")]),e._v(" uploaded files "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("database")]),e._v(" my_database\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FILE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" my_database"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h3",{attrs:{id:"drop-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#drop-file"}},[e._v("#")]),e._v(" DROP FILE")]),e._v(" "),a("p",[e._v("This statement can view and delete an already created file. For specific operations, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE.html"}},[e._v("DROP FILE")]),e._v(".")],1),e._v(" "),a("p",[e._v("Examples:")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("file")]),e._v(" ca"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pem\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DROP")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FILE")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ca.pem"')]),e._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"catalog"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kafka"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"implementation-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation-details"}},[e._v("#")]),e._v(" Implementation details")]),e._v(" "),a("h3",{attrs:{id:"create-and-delete-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-and-delete-files"}},[e._v("#")]),e._v(" Create and delete files")]),e._v(" "),a("p",[e._v("When the user executes the "),a("code",[e._v("CREATE FILE")]),e._v(" command, FE downloads the file from a given URL. The contents of the file are stored in FE memory directly in the form of Base64 encoding. At the same time, the file content and meta-information related to the file will be persisted in BDBJE. All created files, their meta-information and file content reside in FE memory. If the FE goes down and restarts, meta information and file content will also be loaded into memory from the BDBJE. When a file is deleted, the relevant information is deleted directly from FE memory and persistent information is deleted from BDBJE.")]),e._v(" "),a("h3",{attrs:{id:"use-of-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-of-documents"}},[e._v("#")]),e._v(" Use of documents")]),e._v(" "),a("p",[e._v("If the FE side needs to use the created file, SmallFileMgr will directly save the data in FE memory as a local file, store it in the specified directory, and return the local file path for use.")]),e._v(" "),a("p",[e._v("If the BE side needs to use the created file, BE will download the file content to the specified directory on BE through FE's HTTP interface "),a("code",[e._v("api/get_small_file")]),e._v(" for use. At the same time, BE also records the information of the files that have been downloaded in memory. When BE requests a file, it first checks whether the local file exists and verifies it. If the validation passes, the local file path is returned directly. If the validation fails, the local file is deleted and downloaded from FE again. When BE restarts, local files are preloaded into memory.")]),e._v(" "),a("h2",{attrs:{id:"use-restrictions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-restrictions"}},[e._v("#")]),e._v(" Use restrictions")]),e._v(" "),a("p",[e._v("Because the file meta-information and content are stored in FE memory. So by default, only files with size less than 1MB can be uploaded. And the total number of files is limited to 100. The configuration items described in the next section can be modified.")]),e._v(" "),a("h2",{attrs:{id:"relevant-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#relevant-configuration"}},[e._v("#")]),e._v(" Relevant configuration")]),e._v(" "),a("ol",[a("li",[e._v("FE configuration")])]),e._v(" "),a("ul",[a("li",[a("p",[a("code",[e._v("Small_file_dir")]),e._v(": The path used to store uploaded files, defaulting to the "),a("code",[e._v("small_files/")]),e._v(" directory of the FE runtime directory.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_small_file_size_bytes")]),e._v(": A single file size limit in bytes. The default is 1MB. File creation larger than this configuration will be rejected.")])]),e._v(" "),a("li",[a("p",[a("code",[e._v("max_small_file_number")]),e._v(": The total number of files supported by a Doris cluster. The default is 100. When the number of files created exceeds this value, subsequent creation will be rejected.")]),e._v(" "),a("blockquote",[a("p",[e._v("If you need to upload more files or increase the size limit of a single file, you can modify the "),a("code",[e._v("max_small_file_size_bytes")]),e._v(" and "),a("code",[e._v("max_small_file_number")]),e._v(" parameters by using the "),a("code",[e._v("ADMIN SET CONFIG")]),e._v(" command. However, the increase in the number and size of files will lead to an increase in FE memory usage.")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("BE configuration")])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Small_file_dir")]),e._v(": The path used to store files downloaded from FE by default is in the "),a("code",[e._v("lib/small_files/")]),e._v(" directory of the BE runtime directory.")])]),e._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),a("p",[e._v("For more detailed syntax and best practices used by the file manager, see "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-FILE.html"}},[e._v("CREATE FILE")]),e._v(", "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE.html"}},[e._v("DROP FILE")]),e._v(" and "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Show-Statements/SHOW-FILE.html"}},[e._v("SHOW FILE")]),e._v(" command manual, you can also enter "),a("code",[e._v("HELP CREATE FILE")]),e._v(", "),a("code",[e._v("HELP DROP FILE")]),e._v(" and "),a("code",[e._v("HELP SHOW FILE")]),e._v(" in the MySql client command line to get more help information.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);