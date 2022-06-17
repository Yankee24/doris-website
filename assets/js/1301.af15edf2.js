(window.webpackJsonp=window.webpackJsonp||[]).push([[1301],{1926:function(e,t,s){"use strict";s.r(t);var a=s(15),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"delete"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[e._v("#")]),e._v(" Delete")]),e._v(" "),s("p",[e._v("Delete is different from other import methods. It is a synchronization process, similar to Insert into. All Delete operations are an independent import job in Doris. Generally, the Delete statement needs to specify the table and partition and delete conditions to filter the data to be deleted. , and will delete the data of the base table and the rollup table at the same time.")]),e._v(" "),s("h2",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),s("p",[e._v("Please refer to the official website for the "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.html"}},[e._v("DELETE")]),e._v(" syntax of the delete operation.")],1),e._v(" "),s("h2",{attrs:{id:"delete-result"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-result"}},[e._v("#")]),e._v(" Delete Result")]),e._v(" "),s("p",[e._v("The delete command is an SQL command, and the returned results are synchronous. It can be divided into the following types:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Successful visible")]),e._v(" "),s("p",[e._v("If delete completes successfully and is visible, the following results will be returned, "),s("code",[e._v("query OK")]),e._v(" indicates success.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" test_tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" p1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n Query OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rows")]),e._v(" affected "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.04")]),e._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n {"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'label'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'status'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'VISIBLE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'txnId'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4005'")]),e._v("}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])])]),e._v(" "),s("li",[s("p",[e._v("Submitted successfully, but not visible")]),e._v(" "),s("p",[e._v("The transaction submission of Doris is divided into two steps: submission and publish version. Only after the publish version step is completed, the result will be visible to the user. If it has been submitted successfully, then it can be considered that the publish version step will eventually success. Doris will try to wait for publishing for a period of time after submitting. If it has timed out, even if the publishing version has not been completed, it will return to the user in priority and prompt the user that the submission has been completed but not visible. If delete has been committed and executed, but has not been published and visible, the following results will be returned.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" test_tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("PARTITION")]),e._v(" p1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nQuery OK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rows")]),e._v(" affected "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.04")]),e._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n{"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'label'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'delete_e7830c72-eb14-4cb9-bbb6-eebd4511d251'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'status'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'COMMITTED'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'txnId'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'4005'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'err'")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'delete job is committed but may be taking effect later'")]),e._v(" }\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("The result will return a JSON string at the same time:")]),e._v(" "),s("p",[s("code",[e._v("affected rows")]),e._v(": Indicates the row affected by this deletion. Since the deletion of Doris is currently a logical deletion, the value is always 0.")]),e._v(" "),s("p",[s("code",[e._v("label")]),e._v(": The label generated automatically to be the signature of the delete jobs. Each job has a unique label within a single database.")]),e._v(" "),s("p",[s("code",[e._v("status")]),e._v(": Indicates whether the data deletion is visible. If it is visible, "),s("code",[e._v("visible")]),e._v(" will be displayed. If it is not visible, "),s("code",[e._v("committed")]),e._v(" will be displayed.")]),e._v(" "),s("p",[s("code",[e._v("txnId")]),e._v(": The transaction ID corresponding to the delete job")]),e._v(" "),s("p",[s("code",[e._v("err")]),e._v(": Field will display some details of this deletion")])]),e._v(" "),s("li",[s("p",[e._v("Commit failed, transaction cancelled")]),e._v(" "),s("p",[e._v("If the delete statement is not submitted successfully, it will be automatically aborted by Doris and the following results will be returned")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" test_tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("partition")]),e._v(" p1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nERROR "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1064")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("HY000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": errCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" detailMessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" {错误原因}\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("example:")]),e._v(" "),s("p",[e._v("A timeout deletion will return the timeout and unfinished replicas displayed as "),s("code",[e._v("(tablet = replica)")])]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" test_tbl "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("partition")]),e._v(" p1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("where")]),e._v(" k1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nERROR "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1064")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("HY000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": errCode "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" detailMessage "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" failed "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("to")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" replicas "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" job: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4005")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Unfinished replicas:"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10001")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("10002")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("60000")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("The correct processing logic for the returned results of the delete operation is as follows:")])]),e._v(" "),s("ol",[s("li",[s("p",[e._v("If "),s("code",[e._v("Error 1064 (HY000)")]),e._v(" is returned, deletion fails")])]),e._v(" "),s("li",[s("p",[e._v("If the returned result is "),s("code",[e._v("Query OK")]),e._v(", the deletion is successful")]),e._v(" "),s("ol",[s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is "),s("code",[e._v("committed")]),e._v(", the data deletion is committed and will be eventually invisible. Users can wait for a while and then use the "),s("code",[e._v("show delete")]),e._v(" command to view the results.")]),e._v(" "),s("li",[e._v("If "),s("code",[e._v("status")]),e._v(" is "),s("code",[e._v("visible")]),e._v(", the data have been deleted successfully.")])])])])])]),e._v(" "),s("h2",{attrs:{id:"delete-operation-related-fe-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-operation-related-fe-configuration"}},[e._v("#")]),e._v(" Delete operation related FE configuration")]),e._v(" "),s("p",[s("strong",[e._v("TIMEOUT configuration")])]),e._v(" "),s("p",[e._v("In general, Doris's deletion timeout is limited from 30 seconds to 5 minutes. The specific time can be adjusted through the following configuration items")]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("tablet_delete_timeout_second")])]),e._v(" "),s("p",[e._v("The timeout of delete itself can be elastically changed by the number of tablets in the specified partition. This configuration represents the average timeout contributed by a tablet. The default value is 2.")]),e._v(" "),s("p",[e._v("Assuming that there are 5 tablets under the specified partition for this deletion, the timeout time available for the deletion is 10 seconds. Because the minimum timeout is 30 seconds which is higher than former timeout time, the final timeout is 30 seconds.")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("load_straggler_wait_second")])]),e._v(" "),s("p",[e._v("If the user estimates a large amount of data, so that the upper limit of 5 minutes is insufficient, the user can adjust the upper limit of timeout through this item, and the default value is 300.")]),e._v(" "),s("p",[s("strong",[e._v("The specific calculation rule of timeout(seconds)")])]),e._v(" "),s("p",[s("code",[e._v("TIMEOUT = MIN(load_straggler_wait_second, MAX(30, tablet_delete_timeout_second * tablet_num))")])])]),e._v(" "),s("li",[s("p",[s("code",[e._v("query_timeout")])]),e._v(" "),s("p",[e._v("Because delete itself is an SQL command, the deletion statement is also limited by the session variables, and the timeout is also affected by the session value "),s("code",[e._v("query'timeout")]),e._v(". You can increase the value by "),s("code",[e._v("set query'timeout = xxx")]),e._v(".")])])]),e._v(" "),s("p",[s("strong",[e._v("InPredicate configuration")])]),e._v(" "),s("ul",[s("li",[s("p",[s("code",[e._v("max_allowed_in_element_num_of_delete")])]),e._v(" "),s("p",[e._v("If the user needs to take a lot of elements when using the in predicate, the user can adjust the upper limit of the allowed in elements number, and the default value is 1024.")])])]),e._v(" "),s("h2",{attrs:{id:"show-delete-history"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-delete-history"}},[e._v("#")]),e._v(" Show delete history")]),e._v(" "),s("p",[e._v("The user can view the deletion completed in history through the show delete statement.")]),e._v(" "),s("p",[e._v("Syntax")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("DELETE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" db_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("example")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("show")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("delete")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" test_db"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------+---------------+---------------------+-----------------+----------+")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" TableName "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" PartitionName "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" CreateTime          "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" DeleteCondition "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" State    "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------+---------------+---------------------+-----------------+----------+")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" empty_tbl "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" p3            "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("09")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("35")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" k1 EQ "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),e._v("       "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" FINISHED "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" test_tbl  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" p4            "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("04")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("15")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("23")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("09")]),e._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("53")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" k1 GT "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"80"')]),e._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" FINISHED "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("-----------+---------------+---------------------+-----------------+----------+")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rows")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.00")]),e._v(" sec"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("h3",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" Note")]),e._v(" "),s("p",[e._v("Unlike the Insert into command, delete cannot specify "),s("code",[e._v("label")]),e._v(" manually. For the concept of label, see the "),s("RouterLink",{attrs:{to:"/docs/data-operate/import/import-way/insert-into-manual.html"}},[e._v("Insert Into")]),e._v(" documentation.")],1),e._v(" "),s("h2",{attrs:{id:"more-help"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),s("p",[e._v("For more detailed syntax used by "),s("strong",[e._v("delete")]),e._v(", see the "),s("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/DELETE.html"}},[e._v("delete")]),e._v(" command manual, You can also enter "),s("code",[e._v("HELP DELETE")]),e._v(" in the Mysql client command line to get more help information")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);