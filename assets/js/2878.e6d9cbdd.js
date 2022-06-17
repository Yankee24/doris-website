(window.webpackJsonp=window.webpackJsonp||[]).push([[2878],{3506:function(s,t,a){"use strict";a.r(t);var n=a(15),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"c-代码分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-代码分析"}},[s._v("#")]),s._v(" C++ 代码分析")]),s._v(" "),a("p",[s._v("Doris支持使用"),a("a",{attrs:{href:"https://clangd.llvm.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clangd"),a("OutboundLink")],1),s._v("和"),a("a",{attrs:{href:"https://clang.llvm.org/extra/clang-tidy/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Clang-Tidy"),a("OutboundLink")],1),s._v("进行代码静态分析。Clangd和Clang-Tidy在"),a("RouterLink",{attrs:{to:"/zh-CN/developer/install/source-install/compilation-with-ldb-toolchain.html"}},[s._v("LDB-toolchain")]),s._v("中已经内置，另外也可以自己安装或者编译。")],1),s._v(" "),a("h3",{attrs:{id:"clang-tidy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clang-tidy"}},[s._v("#")]),s._v(" Clang-Tidy")]),s._v(" "),a("p",[s._v("Clang-Tidy中可以做一些代码分析的配置,配置文件"),a("code",[s._v(".clang-tidy")]),s._v("在Doris根目录下。")]),s._v(" "),a("h3",{attrs:{id:"在vscode中配置clangd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在vscode中配置clangd"}},[s._v("#")]),s._v(" 在VSCODE中配置Clangd")]),s._v(" "),a("p",[s._v("首先需要安装clangd插件，然后在"),a("code",[s._v("settings.json")]),s._v("中编辑或者直接在首选项中更改插件配置。相比于vscode-cpptools，clangd可以为vscode提供更强大和准确的代码转跳，并且集成了clang-tidy的分析和快速修复功能。")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ldb_toolchain/bin/clangd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd的路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.arguments"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--background-index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--clang-tidy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//开启clang-tidy")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--compile-commands-dir=doris/be/build_RELEASE/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//会用到cmake生成的compile_commands.json,所以需要先编译一次生成该文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--completion-style=detailed"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-j=5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd分析文件的并行数")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--all-scopes-completion"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pch-storage=memory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--pretty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-log=verbose"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"--query-driver=ldb_toolchain/bin/*"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//编译器路径")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"clangd.trace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/disk2/pxl/dev/baidu/bdg/doris/core/output/clangd-server.log"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//clangd的日志路径,可以自己设定")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);