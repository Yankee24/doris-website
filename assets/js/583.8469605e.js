(window.webpackJsonp=window.webpackJsonp||[]).push([[583],{1208:function(s,n,a){"use strict";a.r(n);var e=a(15),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"node-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-action"}},[s._v("#")]),s._v(" Node Action")]),s._v(" "),a("h2",{attrs:{id:"request"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request"}},[s._v("#")]),s._v(" Request")]),s._v(" "),a("p",[s._v("s\n"),a("code",[s._v("GET /rest/v2/manager/node/frontends")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/backends")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/brokers")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/node_list")])]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info")])]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/set_config/fe")])]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/set_config/be")])]),s._v(" "),a("h2",{attrs:{id:"get-information-about-fe-be-broker-nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-information-about-fe-be-broker-nodes"}},[s._v("#")]),s._v(" Get information about fe, be, broker nodes")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/frontends")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/backends")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/brokers")])]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("Used to get cluster to get fe, be, broker node information.")]),s._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"get-node-configuration-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-node-configuration-information"}},[s._v("#")]),s._v(" Get node configuration information")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")])]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/node_list")])]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info")])]),s._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("configuration_name Used to get the name of the node configuration item."),a("br"),s._v("\nnode_list Get the list of nodes."),a("br"),s._v("\nconfiguration_info to get the node configuration details.")]),s._v(" "),a("h3",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters"}},[s._v("#")]),s._v(" Query parameters")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")]),a("br"),s._v("\nnone")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/node_list")]),a("br"),s._v("\nnone")]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info")])]),s._v(" "),a("ul",[a("li",[s._v("type\nThe value is fe or be, which specifies to get the configuration information of fe or the configuration information of be.")])]),s._v(" "),a("h3",{attrs:{id:"request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")]),a("br"),s._v("\nnone")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/node_list")]),a("br"),s._v("\nnone")]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"conf_name": [\n\t\t""\n\t],\n\t"node": [\n\t\t""\n\t]\n}\n\nIf no body is included, the parameters in the body use the default values.  \nconf_name specifies which configuration items to return, the default is all configuration items.\nnode is used to specify which node\'s configuration information is returned, the default is all fe nodes or be nodes configuration information.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v("GET /rest/v2/manager/node/node_list")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info?type=fe")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "MasterOnly",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[a("code",[s._v("POST /rest/v2/manager/node/configuration_info?type=be")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h3",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Get the fe agent_task_resend_wait_time_ms configuration information:")]),s._v(" "),a("p",[s._v("POST /rest/v2/manager/node/configuration_info?type=fe"),a("br"),s._v("\nbody:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Response:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "配置项",\n            "节点",\n            "节点类型",\n            "配置值类型",\n            "MasterOnly",\n            "配置值",\n            "可修改"\n        ],\n        "rows": [\n            [\n                "agent_task_resend_wait_time_ms",\n                "127.0.0.1:8030",\n                "FE",\n                "long",\n                "true",\n                "50000",\n                "true"\n            ]\n        ]\n    },\n    "count": 0\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"modify-configuration-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-configuration-values"}},[s._v("#")]),s._v(" Modify configuration values")]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/set_config/fe")])]),s._v(" "),a("p",[a("code",[s._v("POST /rest/v2/manager/node/set_config/be")])]),s._v(" "),a("h3",{attrs:{id:"description-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("Used to modify fe or be node configuration values")]),s._v(" "),a("h3",{attrs:{id:"request-body-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-body-2"}},[s._v("#")]),s._v(" Request body")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"config_name":{\n\t\t"node":[\n\t\t\t""\n\t\t],\n\t\t"value":"",\n\t\t"persist":\n\t}\n}\n\nconfig_name is the corresponding configuration item.  \nnode is a keyword indicating the list of nodes to be modified;  \nvalue is the value of the configuration.  \npersist is true for permanent modification and false for temporary modification. persist means permanent modification, false means temporary modification. permanent modification takes effect after reboot, temporary modification fails after reboot.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[s._v("#")]),s._v(" Response")]),s._v(" "),a("p",[a("code",[s._v("GET /rest/v2/manager/node/configuration_name")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n\t"msg": "",\n\t"code": 0,\n\t"data": {\n\t\t"failed":[\n\t\t\t{\n\t\t\t\t"config_name":"name",\n\t\t\t\t"value"="",\n\t\t\t\t"node":"",\n\t\t\t\t"err_info":""\n\t\t\t}\n\t\t]\n\t},\n\t"count": 0\n}\n\nfailed Indicates a configuration message that failed to be modified.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"examples-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Modify the agent_task_resend_wait_time_ms and alter_table_timeout_second configuration values in the fe 127.0.0.1:8030 node:")]),s._v(" "),a("p",[s._v("POST /rest/v2/manager/node/set_config/fe\nbody:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n\t    \t"127.0.0.1:8030"\n\t    ],\n\t    "value":"10000",\n\t    "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n\t    \t"127.0.0.1:8030"\n\t    ],\n\t    "value":"true",\n\t    "persist":"true"\n    }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("Response:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\ngent_task_resend_wait_time_ms configuration value modified successfully, alter_table_timeout_second modification failed.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])])])])])}),[],!1,null,null,null);n.default=t.exports}}]);