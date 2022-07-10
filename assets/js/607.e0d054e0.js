(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1232:function(s,t,a){"use strict";a.r(t);var e=a(15),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"help"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#help"}},[s._v("#")]),s._v(" HELP")]),s._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[s._v("#")]),s._v(" Name")]),s._v(" "),a("p",[s._v("HELP")]),s._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),a("p",[s._v("The directory of help can be queried by changing the command")]),s._v(" "),a("p",[s._v("grammar:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("HELP "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("All Doris commands can be listed with "),a("code",[s._v("help")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("List "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" MySQL commands:\nNote that "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),s._v(" commands must be "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("first")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" line "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\n? "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\?"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Synonym "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("help"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.\nclear (\\c) Clear the current input statement.\nconnect (\\r) Reconnect to the server. Optional arguments are db and host.\ndelimiter (\\d) Set statement delimiter.\nedit (\\e) Edit command with $EDITOR.\nego (\\G) Send command to mysql server, display result vertically.\nexit (\\q) Exit mysql. Same as quit.\ngo (\\g) Send command to mysql server.\nhelp (\\h) Display this help.\nnopager (\\n) Disable pager, print to stdout.\nnote (\\t) Don'")]),s._v("t "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("write")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\npager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\P"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Set")]),s._v(" PAGER "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_pager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Print")]),s._v(" the query results via PAGER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Print")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("current")]),s._v(" command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nprompt "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\R"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Change your mysql prompt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nquit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Quit mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nrehash "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\#"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Rebuild completion "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nsource "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Execute")]),s._v(" an "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" script "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Takes a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("file")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" an argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Get "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" information "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" the server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nsystem "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Execute")]),s._v(" a system shell command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\ntee "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Set")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("to_outfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Append everything "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" given "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("outfile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Use")]),s._v(" another "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Takes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" argument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Switch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" another "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Might be needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" processing binlog "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" multi"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("byte charsets"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("warnings")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\W"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Show")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("warnings")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" every statement"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nnowarning "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\\w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Don"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t show warnings after every statement.\nresetconnection(\\x) Clean session context.\n\nFor server side help, type '")]),s._v("help contents'\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("Get the Doris SQL help contents via "),a("code",[s._v("help contents")])]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("Many help items "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your request exist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("To")]),s._v(" make a more specific request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" please "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'help <item>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("item"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" one "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" the "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("following")]),s._v("\ncategories:\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("functions\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("statements\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("List all SQL help contents of Doris")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("help contents\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("The command to list all function directories of the Doris cluster")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("help "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("functions\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("List all functions under the date function")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("help "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("functions\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h3",{attrs:{id:"keywords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" Keywords")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("HELP\n")])])]),a("h3",{attrs:{id:"best-practice"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#best-practice"}},[s._v("#")]),s._v(" Best Practice")])])}),[],!1,null,null,null);t.default=n.exports}}]);