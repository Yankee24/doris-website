(window.webpackJsonp=window.webpackJsonp||[]).push([[2233],{2861:function(e,t,s){"use strict";s.r(t);var a=s(15),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"show-processlist"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-processlist"}},[e._v("#")]),e._v(" SHOW-PROCESSLIST")]),e._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),s("p",[e._v("SHOW PROCESSLIST")]),e._v(" "),s("h3",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("Display the running threads of the user. It should be noted that except the root user who can see all running threads, other users can only see their own running threads, and cannot see the running threads of other users.")]),e._v(" "),s("p",[e._v("grammar:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" PROCESSLIST\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("illustrate:")]),e._v(" "),s("ul",[s("li",[e._v("Id: It is the unique identifier of this thread. When we find that there is a problem with this thread, we can use the kill command to add this Id value to kill this thread. Earlier we said that the information displayed by show processlist comes from the information_schema.processlist table, so this Id is the primary key of this table.")]),e._v(" "),s("li",[e._v("User: refers to the user who started this thread.")]),e._v(" "),s("li",[e._v("Host: Records the IP and port number of the client sending the request. Through this information, when troubleshooting the problem, we can locate which client and which process sent the request.")]),e._v(" "),s("li",[e._v("Cluster: Cluster name")]),e._v(" "),s("li",[e._v("DB: which database the currently executed command is on. If no database is specified, the value is NULL .")]),e._v(" "),s("li",[e._v("Command: refers to the command that the thread is executing at the moment. This is very complicated, and is explained separately below")]),e._v(" "),s("li",[e._v("Time: Indicates the time the thread is in the current state.")]),e._v(" "),s("li",[e._v("State: The state of the thread, corresponding to Command, explained separately below.")]),e._v(" "),s("li",[e._v("Info: Generally recorded is the statement executed by the thread. By default, only the first 100 characters are displayed, that is, the statement you see may be truncated. To see all the information, you need to use show full processlist.")])]),e._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("View the threads running by the current user")]),e._v(" "),s("div",{staticClass:"language-SQL line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SHOW")]),e._v(" PROCESSLIST\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])]),e._v(" "),s("h3",{attrs:{id:"keywords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" Keywords")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("SHOW, PROCESSLIST\n")])])]),s("h3",{attrs:{id:"best-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")])])}),[],!1,null,null,null);t.default=r.exports}}]);