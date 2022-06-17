(window.webpackJsonp=window.webpackJsonp||[]).push([[2688],{3316:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"revoke"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#revoke"}},[e._v("#")]),e._v(" REVOKE")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" description")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("REVOKE 命令用于撤销指定用户或角色指定的权限。\nSyntax：\n    REVOKE privilege_list ON db_name[.tbl_name] FROM user_identity [ROLE role_name]\n\n    REVOKE privilege_list ON RESOURCE resource_name FROM user_identity [ROLE role_name]\n    \nuser_identity：\n\n这里的 user_identity 语法同 CREATE USER。且必须为使用 CREATE USER 创建过的 user_identity。user_identity 中的host可以是域名，如果是域名的话，权限的撤销时间可能会有1分钟左右的延迟。\n\n也可以撤销指定的 ROLE 的权限，执行的 ROLE 必须存在。\n")])])]),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("1. 撤销用户 jack 数据库 testDb 的权限\n\n    REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';\n\n1. 撤销用户 jack 资源 spark_resource 的使用权限\n\n    REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';\n")])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("REVOKE\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);