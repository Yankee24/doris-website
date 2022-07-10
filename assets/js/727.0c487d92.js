(window.webpackJsonp=window.webpackJsonp||[]).push([[727],{1352:function(s,e,n){"use strict";n.r(e);var a=n(15),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"query-detail"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-detail"}},[s._v("#")]),s._v(" QUERY DETAIL")]),s._v(" "),n("p",[s._v("从FE获取所有的查询细节，获取关于查询执行的相关信息。\nFE会返回在event_time之后的查询细节，其中event_time单位会精确到毫秒。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("curl -X GET http://fe_host:fe_http_port/api/query_detail?event_time=1592054515284\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("查询信息会以JSON格式返回。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n  {\n    "eventTime": 1592201405063,\n    "queryId": "a0a9259df9844029-845331577440a3bd",\n    "startTime": 1592201405055,\n    "endTime": 1592201405063,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  },\n  {\n    "eventTime": 1592201420842,\n    "queryId": "21cd79c3e1634e8a-bdac090c7e7bcc36",\n    "startTime": 1592201420834,\n    "endTime": 1592201420842,\n    "latency": 8,\n    "state": "FINISHED",\n    "database": "test",\n    "sql": "select * from table1"\n  }\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);