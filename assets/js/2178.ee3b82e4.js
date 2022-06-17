(window.webpackJsonp=window.webpackJsonp||[]).push([[2178],{2803:function(e,t,a){"use strict";a.r(t);var s=a(15),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"show-encryptkeys"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-encryptkeys"}},[e._v("#")]),e._v(" SHOW ENCRYPTKEYS")]),e._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[e._v("#")]),e._v(" Syntax")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("db")]),e._v(": 要查询的数据库名字\n"),a("code",[e._v("key_pattern")]),e._v(": 用来过滤密钥名称的参数")])]),e._v(" "),a("p",[e._v("查看数据库下所有的自定义的密钥。如果用户指定了数据库，那么查看对应数据库的，否则直接查询当前会话所在数据库。")]),e._v(" "),a("p",[e._v("需要对这个数据库拥有 "),a("code",[e._v("ADMIN")]),e._v(" 权限")]),e._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v('```\nmysql> SHOW ENCRYPTKEYS;\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n\nmysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n+-------------------+-------------------+\n| EncryptKey Name   | EncryptKey String |\n+-------------------+-------------------+\n| example_db.my_key | ABCD123456789     |\n+-------------------+-------------------+\n1 row in set (0.00 sec)\n```\n')])])]),a("h2",{attrs:{id:"keyword"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[e._v("#")]),e._v(" keyword")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[e._v("SHOW,ENCRYPTKEYS\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);