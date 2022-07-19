(window.webpackJsonp=window.webpackJsonp||[]).push([[2286],{2914:function(t,e,a){"use strict";a.r(e);var s=a(15),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"get-log-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-log-file"}},[t._v("#")]),t._v(" get_log_file")]),t._v(" "),a("p",[t._v("用户可以通过该 HTTP 接口获取 FE 的日志文件。")]),t._v(" "),a("h2",{attrs:{id:"日志类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志类型"}},[t._v("#")]),t._v(" 日志类型")]),t._v(" "),a("p",[t._v("支持获取以下类型的 FE 日志：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("fe.audit.log（审计日志）")]),t._v(" "),a("p",[t._v("审计日志记录了对应 FE 节点的所有请求语句已经请求的信息。审计日志的文件命名规则如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("fe.audit.log                # 当前的最新日志\nfe.audit.log.20190603.1     # 对应日期的审计日志，当对应日期的日志大小超过 1GB 后，会生成序号后缀。序号越小的日志，内容越新。\nfe.audit.log.20190603.2\nfe.audit.log.20190602.1\n...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"接口示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口示例"}},[t._v("#")]),t._v(" 接口示例")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("获取对应类型的日志文件列表")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("p",[a("code",[t._v("curl -v -X HEAD -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log")])]),t._v(" "),a("p",[t._v("返回结果：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('HTTP/1.1 200 OK\nfile_infos: {"fe.audit.log":24759,"fe.audit.log.20190528.1":132934}\ncontent-type: text/html\nconnection: keep-alive\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("在返回的 header 中，"),a("code",[t._v("file_infos")]),t._v(" 字段以 json 格式展示文件列表以及对应文件大小（单位字节）")])]),t._v(" "),a("li",[a("p",[t._v("下载日志文件")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("curl -X GET -uuser:passwd http://fe_host:http_port/api/get_log_file?type=fe.audit.log\\&file=fe.audit.log.20190528.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("返回结果：")]),t._v(" "),a("p",[t._v("以文件的形式下载指定的文件。")])])]),t._v(" "),a("h2",{attrs:{id:"接口说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口说明"}},[t._v("#")]),t._v(" 接口说明")]),t._v(" "),a("p",[t._v("该接口需要 admin 权限。")])])}),[],!1,null,null,null);e.default=l.exports}}]);