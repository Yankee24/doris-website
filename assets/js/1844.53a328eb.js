(window.webpackJsonp=window.webpackJsonp||[]).push([[1844],{2471:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" Update")]),e._v(" "),a("p",[e._v("This article mainly describes how to use the UPDATE command to operate if we need to modify or update the data in Doris. The data update is limited to the version of Doris and can only be used in Doris "),a("strong",[e._v("Version 0.15.x +")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"applicable-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#applicable-scenarios"}},[e._v("#")]),e._v(" Applicable scenarios")]),e._v(" "),a("ul",[a("li",[e._v("Modify its value for rows that meet certain conditions;")]),e._v(" "),a("li",[e._v("Point update, small range update, the row to be updated is preferably a very small part of the entire table;")]),e._v(" "),a("li",[e._v("The update command can only be executed on a table with a Unique data model.")])]),e._v(" "),a("h2",{attrs:{id:"fundamentals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fundamentals"}},[e._v("#")]),e._v(" Fundamentals")]),e._v(" "),a("p",[e._v("Use the query engine's own where filtering logic to filter the rows that need to be updated from the table to be updated. Then use the Unique model's own Value column replacement logic to change the rows to be updated and reinsert them into the table. This enables row-level updates.")]),e._v(" "),a("h3",{attrs:{id:"synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronization"}},[e._v("#")]),e._v(" Synchronization")]),e._v(" "),a("p",[e._v("The Update syntax is a synchronization syntax in Doris. If the Update statement succeeds, the update succeeds and the data is visible.")]),e._v(" "),a("h3",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[e._v("#")]),e._v(" Performance")]),e._v(" "),a("p",[e._v("The performance of the Update statement is closely related to the number of rows to be updated and the retrieval efficiency of the condition.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Number of rows to be updated: The more rows to be updated, the slower the Update statement will be. This is consistent with the principle of importing.\nDoris updates are more suitable for occasional update scenarios, such as changing the values of individual rows.\nDoris is not suitable for large batches of data changes. Large modifications can make Update statements take a long time to run.")])]),e._v(" "),a("li",[a("p",[e._v("Condition retrieval efficiency: Doris Update implements the principle of reading the rows that satisfy the condition first, so if the condition retrieval efficiency is high, the Update will be faster.\nThe condition column should ideally be hit, indexed, or bucket clipped. This way Doris does not need to scan the entire table and can quickly locate the rows that need to be updated. This improves update efficiency.\nIt is strongly discouraged to include the UNIQUE model value column in the condition column.")])])]),e._v(" "),a("h3",{attrs:{id:"concurrency-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-control"}},[e._v("#")]),e._v(" Concurrency Control")]),e._v(" "),a("p",[e._v("By default, multiple concurrent Update operations on the same table are not allowed at the same time.")]),e._v(" "),a("p",[e._v("The main reason for this is that Doris currently supports row updates, which means that even if the user declares "),a("code",[e._v("SET v2 = 1")]),e._v(", virtually all other Value columns will be overwritten (even though the values are not changed).")]),e._v(" "),a("p",[e._v("This presents a problem in that if two Update operations update the same row at the same time, the behavior may be indeterminate. That is, there may be dirty data.")]),e._v(" "),a("p",[e._v("However, in practice, the concurrency limit can be turned on manually if the user himself can guarantee that even if concurrent updates are performed, they will not operate on the same row at the same time. This is done by modifying the FE configuration "),a("code",[e._v("enable_concurrent_update")]),e._v(". When the configuration value is true, there is no limit on concurrent updates.")]),e._v(" "),a("h2",{attrs:{id:"risks-of-use"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#risks-of-use"}},[e._v("#")]),e._v(" Risks of use")]),e._v(" "),a("p",[e._v("Since Doris currently supports row updates and uses a two-step read-and-write operation, there is uncertainty about the outcome of an Update statement if it modifies the same row as another Import or Delete statement.")]),e._v(" "),a("p",[e._v("Therefore, when using Doris, you must be careful to control the concurrency of Update statements and other DML statements on the "),a("strong",[e._v("user side itself")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"usage-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),a("p",[e._v("Suppose there is an order table in Doris, where the order id is the Key column, the order status and the order amount are the Value column. The data status is as follows:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("order id")]),e._v(" "),a("th",[e._v("order amount")]),e._v(" "),a("th",[e._v("order status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("Pending Payment")])])])]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+--------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+--------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" 待付款       "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+--------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.01")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("At this time, after the user clicks to pay, the Doris system needs to change the status of the order with the order id '1' to 'Pending Shipping', and the Update function needs to be used.")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[e._v("mysql"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("UPDATE")]),e._v(" test_order "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" order_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Pending Shipping'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nQuery OK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" affected "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.11")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n{"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'label'")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'update_20ae22daf0354fe0-b5aceeaaddc666c5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'status'")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'VISIBLE'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'txnId'")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'33'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'queryId'")]),e._v(":"),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'20ae22daf0354fe0-b5aceeaaddc666c5'")]),e._v("}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("The result after the update is as follows")]),e._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+------------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" order_status     "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+------------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" Pending Shipping "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("----------+--------------+------------------+")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("row")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("in")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("set")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.01")]),e._v(" sec"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("After the user executes the UPDATE command, the system performs the following three steps.")]),e._v(" "),a("p",[e._v("Step 1: Read the rows that satisfy WHERE order id=1 (1, 100, 'pending payment')\nStep 2: Change the order status of the row from 'Pending Payment' to 'Pending Shipping' (1, 100, 'Pending shipment')\nStep 3: Insert the updated row back into the table to achieve the updated effect.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("order id")]),e._v(" "),a("th",[e._v("order amount")]),e._v(" "),a("th",[e._v("order status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("Pending Payment")])]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("Pending shipments")])])])]),e._v(" "),a("p",[e._v("Since the table order is a UNIQUE model, the rows with the same Key, after which the latter will take effect, so the final effect is as follows.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("order id")]),e._v(" "),a("th",[e._v("order amount")]),e._v(" "),a("th",[e._v("order status")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("100")]),e._v(" "),a("td",[e._v("Pending shipments")])])])]),e._v(" "),a("h2",{attrs:{id:"more-help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More Help")]),e._v(" "),a("p",[e._v("For more detailed syntax used by "),a("strong",[e._v("data update")]),e._v(", please refer to the "),a("RouterLink",{attrs:{to:"/docs/sql-manual/sql-reference/Data-Manipulation-Statements/Manipulation/UPDATE.html"}},[e._v("update")]),e._v(" command manual , you can also enter "),a("code",[e._v("HELP UPDATE")]),e._v(" in the Mysql client command line to get more help information.")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);