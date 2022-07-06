(window.webpackJsonp=window.webpackJsonp||[]).push([[657],{1282:function(a,t,r){"use strict";r.r(t);var o=r(15),e=Object(o.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"c-代码格式化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-代码格式化"}},[a._v("#")]),a._v(" C++ 代码格式化")]),a._v(" "),r("p",[a._v("Doris使用clang-format进行代码格式化，并在build-support目录下提供了封装脚本：")]),a._v(" "),r("ul",[r("li",[r("p",[r("code",[a._v("clang-format.sh")]),a._v(".")]),a._v(" "),r("p",[a._v("格式化 "),r("code",[a._v("be/src")]),a._v(" 和 "),r("code",[a._v("be/test")]),a._v(" 目录下的 C/C++ 代码。")])]),a._v(" "),r("li",[r("p",[r("code",[a._v("check-format.sh")]),a._v(".")]),a._v(" "),r("p",[a._v("检查 "),r("code",[a._v("be/src")]),a._v(" 和 "),r("code",[a._v("be/test")]),a._v(" 目录下的 C/C++ 代码格式，并将 diff 输出，但不会修改文件内容。")])])]),a._v(" "),r("h2",{attrs:{id:"代码风格定制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码风格定制"}},[a._v("#")]),a._v(" 代码风格定制")]),a._v(" "),r("p",[a._v("Doris的代码风格在Google Style的基础上稍有改动，定制为 "),r("code",[a._v(".clang-format")]),a._v(" 文件，位于Doris根目录。")]),a._v(" "),r("p",[a._v("目前，"),r("code",[a._v(".clang-format")]),a._v(" 配置文件适配clang-format-13.0.1以上的版本。")]),a._v(" "),r("p",[r("code",[a._v(".clang-format-ignore")]),a._v(" 文件中记录了不希望被格式化的代码。这些代码通常来自第三方代码库，建议保持原有代码风格。")]),a._v(" "),r("h2",{attrs:{id:"环境准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[a._v("#")]),a._v(" 环境准备")]),a._v(" "),r("p",[a._v("需要下载安装clang-format，也可使用IDE或Editor提供的clang-format插件，下面分别介绍。")]),a._v(" "),r("h3",{attrs:{id:"下载安装clang-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#下载安装clang-format"}},[a._v("#")]),a._v(" 下载安装clang-format")]),a._v(" "),r("p",[a._v("推荐使用 NPM 安装 clang-format 14（不同版本的 clang-format 可能产生不同的代码格式，建议使用 14 版本）：")]),a._v(" "),r("p",[r("code",[a._v("npm install clang-format@1.6.0")])]),a._v(" "),r("p",[a._v("Ubuntu: "),r("code",[a._v("apt-get install clang-format")])]),a._v(" "),r("p",[a._v("当前版本为10.0，也可指定旧版本，例如: "),r("code",[a._v("apt-get install clang-format-9")]),a._v("，建议源码编译14.0版本。")]),a._v(" "),r("p",[a._v("Mac: "),r("code",[a._v("brew install clang-format")])]),a._v(" "),r("p",[a._v("Centos 7:")]),a._v(" "),r("p",[a._v("centos yum安装的clang-format版本过老，支持的StyleOption太少，建议源码编译14.0版本。")]),a._v(" "),r("p",[a._v("LDB toolchain:")]),a._v(" "),r("p",[a._v("如果使用"),r("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation-with-ldb-toolchain.html"}},[a._v("LDB toolchain")]),a._v("，\n最新版本的"),r("a",{attrs:{href:"https://github.com/amosbird/ldb_toolchain_gen/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("LDB toolchain"),r("OutboundLink")],1),a._v("（>= v0.11）已经包含了预编译的clang-format\n13.0.1的二进制文件。")],1),a._v(" "),r("h3",{attrs:{id:"clang-format插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clang-format插件"}},[a._v("#")]),a._v(" clang-format插件")]),a._v(" "),r("p",[a._v('Clion IDE可使用插件"ClangFormat"，'),r("code",[a._v("File->Setting->Plugins")]),a._v("搜索下载。但版本无法和\nclang-format程序的版本匹配，从支持的StyleOption上看，应该是低于clang-format-9.0。")]),a._v(" "),r("h2",{attrs:{id:"使用方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[a._v("#")]),a._v(" 使用方式")]),a._v(" "),r("h3",{attrs:{id:"命令行运行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#命令行运行"}},[a._v("#")]),a._v(" 命令行运行")]),a._v(" "),r("p",[a._v("cd到Doris根目录下，然后执行如下命令:")]),a._v(" "),r("p",[r("code",[a._v("build-support/clang-format.sh")])]),a._v(" "),r("blockquote",[r("p",[a._v("注："),r("code",[a._v("clang-format.sh")]),a._v("脚本要求您的机器上安装了python 3")])]),a._v(" "),r("h3",{attrs:{id:"在ide或editor中使用clang-format"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#在ide或editor中使用clang-format"}},[a._v("#")]),a._v(" 在IDE或Editor中使用clang-format")]),a._v(" "),r("h4",{attrs:{id:"clion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#clion"}},[a._v("#")]),a._v(" Clion")]),a._v(" "),r("p",[a._v("Clion如果使用插件，点击"),r("code",[a._v("Reformat Code")]),a._v("即可。")]),a._v(" "),r("h4",{attrs:{id:"vs-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vs-code"}},[a._v("#")]),a._v(" VS Code")]),a._v(" "),r("p",[a._v("VS Code需安装扩展程序Clang-Format，但需要自行提供clang-format执行程序的位置。")]),a._v(" "),r("p",[a._v('打开VS Code配置页面，直接搜索"clang_format"，填上')]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v('"clang_format_path":  "$clang-format path$",\n"clang_format_style": "file"\n')])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br")])]),r("p",[a._v("然后，右键点击"),r("code",[a._v("Format Document")]),a._v("即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);