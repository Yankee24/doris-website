(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1301:function(a,e,t){"use strict";t.r(e);var s=t(15),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"user-配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-配置项"}},[a._v("#")]),a._v(" User 配置项")]),a._v(" "),t("p",[a._v("该文档主要介绍了 User 级别的相关配置项。User 级别的配置生效范围为单个用户。每个用户都可以设置自己的 User property。相互不影响。")]),a._v(" "),t("h2",{attrs:{id:"查看配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看配置项"}},[a._v("#")]),a._v(" 查看配置项")]),a._v(" "),t("p",[a._v("FE 启动后，在 MySQL 客户端，通过下面命令查看 User 的配置项：")]),a._v(" "),t("p",[t("code",[a._v("SHOW PROPERTY [FOR user] [LIKE key pattern]")])]),a._v(" "),t("p",[a._v("具体语法可通过命令："),t("code",[a._v("help show property;")]),a._v(" 查询。")]),a._v(" "),t("h2",{attrs:{id:"设置配置项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置配置项"}},[a._v("#")]),a._v(" 设置配置项")]),a._v(" "),t("p",[a._v("FE 启动后，在MySQL 客户端，通过下面命令修改 User 的配置项：")]),a._v(" "),t("p",[t("code",[a._v("SET PROPERTY [FOR 'user'] 'key' = 'value' [, 'key' = 'value']")])]),a._v(" "),t("p",[a._v("具体语法可通过命令："),t("code",[a._v("help set property;")]),a._v(" 查询。")]),a._v(" "),t("p",[a._v("User 级别的配置项只会对指定用户生效，并不会影响其他用户的配置。")]),a._v(" "),t("h2",{attrs:{id:"应用举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用举例"}},[a._v("#")]),a._v(" 应用举例")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("修改用户 Billie 的 "),t("code",[a._v("max_user_connections")])]),a._v(" "),t("p",[a._v("通过 "),t("code",[a._v("SHOW PROPERTY FOR 'Billie' LIKE '%max_user_connections%';")]),a._v(" 查看 Billie 用户当前的最大链接数为 100。")]),a._v(" "),t("p",[a._v("通过 "),t("code",[a._v("SET PROPERTY FOR 'Billie' 'max_user_connections' = '200';")]),a._v(" 修改 Billie 用户的当前最大连接数到 200。")])])]),a._v(" "),t("h2",{attrs:{id:"配置项列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置项列表"}},[a._v("#")]),a._v(" 配置项列表")]),a._v(" "),t("h3",{attrs:{id:"max-user-connections"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-user-connections"}},[a._v("#")]),a._v(" max_user_connections")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("用户最大的连接数，默认值为100。一般情况不需要更改该参数，除非查询的并发数超过了默认值。\n")])])]),t("h3",{attrs:{id:"max-query-instances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#max-query-instances"}},[a._v("#")]),a._v(" max_query_instances")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("用户同一时间点可使用的instance个数, 默认是-1，小于等于0将会使用配置default_max_query_instances.\n")])])]),t("h3",{attrs:{id:"resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resource"}},[a._v("#")]),a._v(" resource")]),a._v(" "),t("h3",{attrs:{id:"quota"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quota"}},[a._v("#")]),a._v(" quota")]),a._v(" "),t("h3",{attrs:{id:"default-load-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-load-cluster"}},[a._v("#")]),a._v(" default_load_cluster")]),a._v(" "),t("h3",{attrs:{id:"load-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#load-cluster"}},[a._v("#")]),a._v(" load_cluster")])])}),[],!1,null,null,null);e.default=r.exports}}]);