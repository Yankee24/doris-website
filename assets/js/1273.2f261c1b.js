(window.webpackJsonp=window.webpackJsonp||[]).push([[1273],{1898:function(e,s,t){"use strict";t.r(s);var a=t(15),o=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sql-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode"}},[e._v("#")]),e._v(" SQL MODE")]),e._v(" "),t("p",[e._v("The sql mode newly supported by Doris refers to the sql mode management mechanism of Mysql. Each client can set its own sql mode, and database administrators with Admin privileges can set the global sql mode.")]),e._v(" "),t("h2",{attrs:{id:"sql-mode-introduce"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-mode-introduce"}},[e._v("#")]),e._v(" sql mode introduce")]),e._v(" "),t("p",[e._v("sql mode enables users to switch between different styles of sql syntax and data validation strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string concatenator, but in Doris it is equivalent to 'or', then users only need to use sql mode to switch to the style they want. Each client can set the sql mode, which is valid in the current session. Only users with Admin privileges can set the global sql mode.")]),e._v(" "),t("h2",{attrs:{id:"principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principle"}},[e._v("#")]),e._v(" principle")]),e._v(" "),t("p",[e._v("The sql mode is stored in SessionVariables with a 64-bit Long type. Each bit of this address represents the enable/disable (1 means open, 0 means disable) state of a mode, as long as you know where each mode is. Bit, we can easily and quickly perform checksum operations on sql mode through bit operations.")]),e._v(" "),t("p",[e._v("Every time you query the sql mode, the Long type will be parsed and turned into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a string that can be stored in SessionVariables. Long type.")]),e._v(" "),t("p",[e._v("The global sql mode that has been set will be persisted, so the operation on the global sql mode always only needs to be performed once, and the last global sql mode can be restored even after the program is restarted.")]),e._v(" "),t("h2",{attrs:{id:"operation-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-method"}},[e._v("#")]),e._v(" Operation method")]),e._v(" "),t("ol",[t("li",[e._v("Set sql mode")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("Currently Doris's default sql mode is DEFAULT (but this will be changed in subsequent revisions soon).\nSetting global sql mode requires Admin privileges and will affect all clients connecting thereafter.\nSetting session sql mode will only affect the current dialog client, the default is session mode.")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Query sql mode")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("select @@global.sql_mode\nselect @@session.sql_mode\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("In addition to this way, you can also check the current sql mode by returning all session variables in the following way")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("show global variables\nshow session variables\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"mode-is-supported"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mode-is-supported"}},[e._v("#")]),e._v(" mode is supported")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("PIPES_AS_CONCAT")])])]),e._v(" "),t("p",[e._v("In this mode, the '||' symbol is a string concatenation symbol (same as the CONCAT() function), not a synonym for the 'OR' symbol. (e.g., "),t("code",[e._v("'a'||'b' = 'ab'")]),e._v(", "),t("code",[e._v("1||0 = '10'")]),e._v(")")]),e._v(" "),t("h2",{attrs:{id:"composite-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#composite-mode"}},[e._v("#")]),e._v(" composite mode")]),e._v(" "),t("p",[e._v("(subsequent additions)")])])}),[],!1,null,null,null);s.default=o.exports}}]);