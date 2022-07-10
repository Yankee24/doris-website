(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{1089:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"create-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-file"}},[s._v("#")]),s._v(" CREATE-FILE")]),s._v(" "),e("h3",{attrs:{id:"name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),e("p",[s._v("CREATE FILE")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("p",[s._v("This statement is used to create and upload a file to the Doris cluster.\nThis function is usually used to manage files that need to be used in some other commands, such as certificates, public and private keys, and so on.")]),s._v(" "),e("p",[s._v("This command can only be executed by users with "),e("code",[s._v("admin")]),s._v(" privileges.\nA certain file belongs to a certain database. This file can be used by any user with access rights to database.")]),s._v(" "),e("p",[s._v("A single file size is limited to 1MB.\nA Doris cluster can upload up to 100 files.")]),s._v(" "),e("p",[s._v("grammar:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file_name"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("properties"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("illustrate:")]),s._v(" "),e("ul",[e("li",[s._v("file_name: custom file name.")]),s._v(" "),e("li",[s._v("database: The file belongs to a certain db, if not specified, the db of the current session is used.")]),s._v(" "),e("li",[s._v("properties supports the following parameters:\n"),e("ul",[e("li",[s._v("url: Required. Specifies the download path for a file. Currently only unauthenticated http download paths are supported. After the command executes successfully, the file will be saved in doris and the url will no longer be needed.")]),s._v(" "),e("li",[s._v("catalog: Required. The classification name of the file can be customized. However, in some commands, files in the specified catalog are looked up. For example, in the routine import, when the data source is kafka, the file under the catalog name kafka will be searched.")]),s._v(" "),e("li",[s._v("md5: optional. md5 of the file. If specified, verification will be performed after the file is downloaded.")])])])]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Create a file ca.pem , classified as kafka")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca.pem"')]),s._v("\nPROPERTIES\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/ca.pem"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kafka"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Create a file client.key, classified as my_catalog")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FILE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"client.key"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" my_database\nPROPERTIES\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"url"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://test.bj.bcebos.com/kafka-key/client.key"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"catalog"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"my_catalog"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"md5"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b5bb901bf10f99205b39a46ac3557dd9"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CREATE, FILE\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"best-practice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("This command can only be executed by users with amdin privileges. A certain file belongs to a certain database. This file can be used by any user with access rights to database.")])]),s._v(" "),e("li",[e("p",[s._v("File size and quantity restrictions.")]),s._v(" "),e("p",[s._v("This function is mainly used to manage some small files such as certificates. So a single file size is limited to 1MB. A Doris cluster can upload up to 100 files.")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);