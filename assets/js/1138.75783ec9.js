(window.webpackJsonp=window.webpackJsonp||[]).push([[1138],{1764:function(e,a,t){"use strict";t.r(a);var s=t(15),_=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"set-variable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-variable"}},[e._v("#")]),e._v(" SET-VARIABLE")]),e._v(" "),t("h3",{attrs:{id:"name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" Name")]),e._v(" "),t("p",[e._v("SET VARIABLE")]),e._v(" "),t("h3",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),t("p",[e._v("该语句主要是用来修改 Doris 系统变量，这些系统变量可以分为全局以及会话级别层面来修改，有些也可以进行动态修改。你也可以通过 "),t("code",[e._v("SHOW VARIABLE")]),e._v(" 来查看这些系统变量。")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" variable_assignment "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" variable_assignment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("说明：")]),e._v(" "),t("ol",[t("li",[e._v("variable_assignment:\nuser_var_name = expr\n| [GLOBAL | SESSION] system_var_name = expr")])]),e._v(" "),t("blockquote",[t("p",[e._v("注意：")]),e._v(" "),t("ol",[t("li",[e._v("只有 ADMIN 用户可以设置变量的全局生效")]),e._v(" "),t("li",[e._v("全局生效的变量不影响当前会话的变量值，仅影响新的会话中的变量。")])])]),e._v(" "),t("p",[e._v("既支持当前会话生效又支持全局生效的变量包括：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("time_zone")])]),e._v(" "),t("li",[t("code",[e._v("wait_timeout")])]),e._v(" "),t("li",[t("code",[e._v("sql_mode")])]),e._v(" "),t("li",[t("code",[e._v("enable_profile")])]),e._v(" "),t("li",[t("code",[e._v("query_timeout")])]),e._v(" "),t("li",[t("code",[e._v("exec_mem_limit")])]),e._v(" "),t("li",[t("code",[e._v("batch_size")])]),e._v(" "),t("li",[t("code",[e._v("allow_partition_column_nullable")])]),e._v(" "),t("li",[t("code",[e._v("insert_visible_timeout_ms")])]),e._v(" "),t("li",[t("code",[e._v("enable_fold_constant_by_be")])])]),e._v(" "),t("p",[e._v("只支持全局生效的变量包括：")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("default_rowset_type")])])]),e._v(" "),t("h3",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("设置时区为东八区")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('SET time_zone = "Asia/Shanghai";\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("设置全局的执行内存大小")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SET GLOBAL exec_mem_limit = 137438953472\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h3",{attrs:{id:"keywords"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[e._v("#")]),e._v(" Keywords")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("SET, VARIABLE\n")])])]),t("h3",{attrs:{id:"best-practice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[e._v("#")]),e._v(" Best Practice")])])}),[],!1,null,null,null);a.default=_.exports}}]);