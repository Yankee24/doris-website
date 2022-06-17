(window.webpackJsonp=window.webpackJsonp||[]).push([[2558],{3186:function(a,t,s){"use strict";s.r(t);var e=s(15),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"bitmap-hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bitmap-hash"}},[a._v("#")]),a._v(" bitmap_hash")]),a._v(" "),s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" description")]),a._v(" "),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("p",[s("code",[a._v("BITMAP BITMAP_HASH(expr)")])]),a._v(" "),s("p",[a._v("对任意类型的输入计算32位的哈希值，返回包含该哈希值的bitmap。主要用于stream load任务将非整型字段导入Doris表的bitmap字段。例如")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,device_id, device_id=bitmap_hash(device_id)"   http://host:8410/api/test/testDb/_stream_load\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql> select bitmap_count(bitmap_hash('hello'));\n+------------------------------------+\n| bitmap_count(bitmap_hash('hello')) |\n+------------------------------------+\n|                                  1 |\n+------------------------------------+\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"keyword"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[a._v("BITMAP_HASH,BITMAP\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);