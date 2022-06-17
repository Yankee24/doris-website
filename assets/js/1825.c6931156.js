(window.webpackJsonp=window.webpackJsonp||[]).push([[1825],{2450:function(a,t,r){"use strict";r.r(t);var e=r(15),v=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"datax-doriswriter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#datax-doriswriter"}},[a._v("#")]),a._v(" DataX doriswriter")]),a._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/alibaba/DataX",target:"_blank",rel:"noopener noreferrer"}},[a._v("DataX"),r("OutboundLink")],1),a._v(" doriswriter 插件，用于通过 DataX 同步其他数据源的数据到 Doris 中。")]),a._v(" "),r("p",[a._v("这个插件是利用Doris的Stream Load 功能进行数据导入的。需要配合 DataX 服务一起使用。")]),a._v(" "),r("h2",{attrs:{id:"关于-datax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于-datax"}},[a._v("#")]),a._v(" 关于 DataX")]),a._v(" "),r("p",[a._v("DataX 是阿里云 DataWorks数据集成 的开源版本，在阿里巴巴集团内被广泛使用的离线数据同步工具/平台。DataX 实现了包括 MySQL、Oracle、SqlServer、Postgre、HDFS、Hive、ADS、HBase、TableStore(OTS)、MaxCompute(ODPS)、Hologres、DRDS 等各种异构数据源之间高效的数据同步功能。")]),a._v(" "),r("p",[a._v("更多信息请参阅: "),r("code",[a._v("https://github.com/alibaba/DataX/")])]),a._v(" "),r("h2",{attrs:{id:"使用手册"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用手册"}},[a._v("#")]),a._v(" 使用手册")]),a._v(" "),r("p",[a._v("DataX doriswriter 插件代码 "),r("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),r("OutboundLink")],1),a._v("。")]),a._v(" "),r("p",[a._v("这个目录包含插件代码以及 DataX 项目的开发环境。")]),a._v(" "),r("p",[a._v("doriswriter 插件依赖的 DataX 代码中的一些模块。而这些模块并没有在 Maven 官方仓库中。所以我们在开发 doriswriter 插件时，需要下载完整的 DataX 代码库，才能进行插件的编译和开发。")]),a._v(" "),r("h3",{attrs:{id:"目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[a._v("#")]),a._v(" 目录结构")]),a._v(" "),r("ol",[r("li",[r("p",[r("code",[a._v("doriswriter/")])]),a._v(" "),r("p",[a._v("这个目录是 doriswriter 插件的代码目录。这个目录中的所有代码，都托管在 Apache Doris 的代码库中。")]),a._v(" "),r("p",[a._v("doriswriter 插件帮助文档在这里："),r("code",[a._v("doriswriter/doc")])])]),a._v(" "),r("li",[r("p",[r("code",[a._v("init_env.sh")])]),a._v(" "),r("p",[a._v("这个脚本主要用于构建 DataX 开发环境，他主要进行了以下操作：")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("将 DataX 代码库 clone 到本地。")])]),a._v(" "),r("li",[r("p",[a._v("将 "),r("code",[a._v("doriswriter/")]),a._v(" 目录软链到 "),r("code",[a._v("DataX/doriswriter")]),a._v(" 目录。")])]),a._v(" "),r("li",[r("p",[a._v("在 "),r("code",[a._v("DataX/pom.xml")]),a._v(" 文件中添加 "),r("code",[a._v("<module>doriswriter</module>")]),a._v(" 模块。")])]),a._v(" "),r("li",[r("p",[a._v("将 "),r("code",[a._v("DataX/core/pom.xml")]),a._v(" 文件中的 httpclient 版本从 4.5 改为 4.5.13.")]),a._v(" "),r("blockquote",[r("p",[a._v("httpclient v4.5 在处理 307 转发时有bug。")])])])]),a._v(" "),r("p",[a._v("这个脚本执行后，开发者就可以进入 "),r("code",[a._v("DataX/")]),a._v(" 目录开始开发或编译了。因为做了软链，所以任何对 "),r("code",[a._v("DataX/doriswriter")]),a._v(" 目录中文件的修改，都会反映到 "),r("code",[a._v("doriswriter/")]),a._v(" 目录中，方便开发者提交代码。")])])]),a._v(" "),r("h3",{attrs:{id:"编译"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[a._v("#")]),a._v(" 编译")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("运行 "),r("code",[a._v("init_env.sh")])])]),a._v(" "),r("li",[r("p",[a._v("按需修改 "),r("code",[a._v("DataX/doriswriter")]),a._v(" 中的代码。")])]),a._v(" "),r("li",[r("p",[a._v("编译 doriswriter：")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("单独编译 doriswriter 插件:")]),a._v(" "),r("p",[r("code",[a._v("mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests")])])]),a._v(" "),r("li",[r("p",[a._v("编译整个 DataX 项目:")]),a._v(" "),r("p",[r("code",[a._v("mvn package assembly:assembly -Dmaven.test.skip=true")])]),a._v(" "),r("p",[a._v("产出在 "),r("code",[a._v("target/datax/datax/")]),a._v(".")]),a._v(" "),r("blockquote",[r("p",[a._v("hdfsreader, hdfswriter and oscarwriter 这三个插件需要额外的jar包。如果你并不需要这些插件，可以在 "),r("code",[a._v("DataX/pom.xml")]),a._v(" 中删除这些插件的模块。")])])]),a._v(" "),r("li",[r("p",[a._v("编译错误")]),a._v(" "),r("p",[a._v("如遇到如下编译错误：")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br")])]),r("p",[a._v("可尝试以下方式解决：")]),a._v(" "),r("ol",[r("li",[a._v("下载 "),r("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("alibaba-datax-maven-m2-20210928.tar.gz"),r("OutboundLink")],1)]),a._v(" "),r("li",[a._v("解压后，将得到的 "),r("code",[a._v("alibaba/datax/")]),a._v(" 目录，拷贝到所使用的 maven 对应的 "),r("code",[a._v(".m2/repository/com/alibaba/")]),a._v(" 下。")]),a._v(" "),r("li",[a._v("再次尝试编译。")])])])])]),a._v(" "),r("li",[r("p",[a._v("按需提交修改。")])])]),a._v(" "),r("h3",{attrs:{id:"示例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),r("p",[a._v("doriswriter 插件的使用说明请参阅 "),r("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),r("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);