(window.webpackJsonp=window.webpackJsonp||[]).push([[709],{1335:function(s,e,a){"use strict";a.r(e);var n=a(15),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"set-config-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-config-action"}},[s._v("#")]),s._v(" Set Config Action")]),s._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("p",[a("code",[s._v("GET /api/_set_config")])]),s._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("用于动态设置 FE 的参数。该命令等同于通过 "),a("code",[s._v("ADMIN SET FRONTEND CONFIG")]),s._v(" 命令。但该命令仅会设置对应 FE 节点的配置。并且不会自动转发 "),a("code",[s._v("MasterOnly")]),s._v(" 配置项给 Master FE 节点。")]),s._v(" "),a("h2",{attrs:{id:"path-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#path-parameters"}},[s._v("#")]),s._v(" Path parameters")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("confkey1=confvalue1")])]),s._v(" "),a("p",[s._v("指定要设置的配置名称，其值为要修改的配置值。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("persist")])]),s._v(" "),a("p",[s._v("是否要将修改的配置持久化。默认为 false，即不持久化。如果为 true，这修改后的配置项会写入 "),a("code",[s._v("fe_custom.conf")]),s._v(" 文件中，并在 FE 重启后仍会生效。")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("reset_persist")])]),s._v(" "),a("p",[s._v("是否要清空原来的持久化配置，只在 persist 参数为 true 时生效。为了兼容原来的版本，reset_persist 默认为 true。"),a("br"),s._v("\n如果 persist 设为 true，不设置 reset_persist 或 reset_persist 为 true，将先清空"),a("code",[s._v("fe_custom.conf")]),s._v("文件中的配置再将本次修改的配置写入"),a("code",[s._v("fe_custom.conf")]),s._v("；"),a("br"),s._v("\n如果 persist 设为 true，reset_persist 为 false，本次修改的配置项将会增量添加到"),a("code",[s._v("fe_custom.conf")]),s._v("。")])])]),s._v(" "),a("h2",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),a("p",[s._v("无")]),s._v(" "),a("h2",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"msg": "success",\n\t"code": 0,\n\t"data": {\n\t\t"set": {\n\t\t\t"key": "value"\n\t\t},\n\t\t"err": [\n\t\t\t{\n\t\t       "config_name": "",\n\t\t       "config_value": "",\n\t\t       "err_info": ""\n\t\t    }\n\t\t],\n\t\t"persist":""\n\t},\n\t"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[a("code",[s._v("set")]),s._v(" 字段表示设置成功的配置。"),a("code",[s._v("err")]),s._v(" 字段表示设置失败的配置。 "),a("code",[s._v("persist")]),s._v(" 字段表示持久化信息。")]),s._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("设置 "),a("code",[s._v("storage_min_left_capacity_bytes")]),s._v(" 、 "),a("code",[s._v("replica_ack_policy")]),s._v(" 和 "),a("code",[s._v("agent_task_resend_wait_time_ms")]),s._v("  三个配置的值。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET /api/_set_config?storage_min_left_capacity_bytes=1024&replica_ack_policy=SIMPLE_MAJORITY&agent_task_resend_wait_time_ms=true\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "storage_min_left_capacity_bytes": "1024"\n    },\n    "err": [\n        {\n            "config_name": "replica_ack_policy",\n            "config_value": "SIMPLE_MAJORITY",\n            "err_info": "Not support dynamic modification."\n        },\n        {\n            "config_name": "agent_task_resend_wait_time_ms",\n            "config_value": "true",\n            "err_info": "Unsupported configuration value type."\n        }\n    ],\n    "persist": ""\n},\n"count": 0\n}\n\nstorage_min_left_capacity_bytes 设置成功；  \nreplica_ack_policy 设置失败，原因是该配置项不支持动态修改； \nagent_task_resend_wait_time_ms 设置失败，因为该配置项类型为long， 设置boolean类型失败。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("设置 "),a("code",[s._v("max_bytes_per_broker_scanner")]),s._v(" 并持久化")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('GET /api/_set_config?max_bytes_per_broker_scanner=21474836480&persist=true&reset_persist=false\n\nResponse:\n{\n"msg": "success",\n"code": 0,\n"data": {\n    "set": {\n        "max_bytes_per_broker_scanner": "21474836480"\n    },\n    "err": [],\n    "persist": "ok"\n},\n"count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("fe/conf 目录生成fe_custom.conf：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#THIS IS AN AUTO GENERATED CONFIG FILE.\n#You can modify this file manually, and the configurations in this file\n#will overwrite the configurations in fe.conf\n#Wed Jul 28 12:43:14 CST 2021\nmax_bytes_per_broker_scanner=21474836480\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])])])])}),[],!1,null,null,null);e.default=t.exports}}]);