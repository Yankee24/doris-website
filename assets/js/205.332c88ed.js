(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{831:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"datax-doriswriter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datax-doriswriter"}},[t._v("#")]),t._v(" DataX doriswriter")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/alibaba/DataX",target:"_blank",rel:"noopener noreferrer"}},[t._v("DataX"),a("OutboundLink")],1),t._v(" doriswriter plug-in, used to synchronize data from other data sources to Doris through DataX.")]),t._v(" "),a("p",[t._v("The plug-in uses Doris' Stream Load function to synchronize and import data. It needs to be used with DataX service.")]),t._v(" "),a("h2",{attrs:{id:"about-datax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#about-datax"}},[t._v("#")]),t._v(" About DataX")]),t._v(" "),a("p",[t._v("DataX is an open source version of Alibaba Cloud DataWorks data integration, an offline data synchronization tool/platform widely used in Alibaba Group. DataX implements efficient data synchronization functions between various heterogeneous data sources including MySQL, Oracle, SqlServer, Postgre, HDFS, Hive, ADS, HBase, TableStore (OTS), MaxCompute (ODPS), Hologres, DRDS, etc.")]),t._v(" "),a("p",[t._v("More details can be found at: "),a("code",[t._v("https://github.com/alibaba/DataX/")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("The code of DataX doriswriter plug-in can be found "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/tree/master/extension/DataX",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This directory is the doriswriter plug-in development environment of Alibaba DataX.")]),t._v(" "),a("p",[t._v("Because the doriswriter plug-in depends on some modules in the DataX code base, and these module dependencies are not submitted to the official Maven repository, when we develop the doriswriter plug-in, we need to download the complete DataX code base to facilitate our development and compilation of the doriswriter plug-in.")]),t._v(" "),a("h3",{attrs:{id:"directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[t._v("#")]),t._v(" Directory structure")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("doriswriter/")])]),t._v(" "),a("p",[t._v("This directory is the code directory of doriswriter, and this part of the code should be in the Doris code base.")]),t._v(" "),a("p",[t._v("The help doc can be found in "),a("code",[t._v("doriswriter/doc")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("init-env.sh")])]),t._v(" "),a("p",[t._v("The script mainly performs the following steps:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Git clone the DataX code base to the local")])]),t._v(" "),a("li",[a("p",[t._v("Softlink the "),a("code",[t._v("doriswriter/")]),t._v(" directory to "),a("code",[t._v("DataX/doriswriter")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Add "),a("code",[t._v("<module>doriswriter</module>")]),t._v(" to the original "),a("code",[t._v("DataX/pom.xml")])])]),t._v(" "),a("li",[a("p",[t._v("Change httpclient version from 4.5 to 4.5.13 in DataX/core/pom.xml")]),t._v(" "),a("blockquote",[a("p",[t._v("httpclient v4.5 can not handle redirect 307 correctly.")])])])]),t._v(" "),a("p",[t._v("After that, developers can enter "),a("code",[t._v("DataX/")]),t._v(" for development. And the changes in the "),a("code",[t._v("DataX/doriswriter")]),t._v(" directory will be reflected in the "),a("code",[t._v("doriswriter/")]),t._v(" directory, which is convenient for developers to submit code.")])])]),t._v(" "),a("h3",{attrs:{id:"how-to-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-build"}},[t._v("#")]),t._v(" How to build")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Run "),a("code",[t._v("init-env.sh")])])]),t._v(" "),a("li",[a("p",[t._v("Modify code of doriswriter in "),a("code",[t._v("DataX/doriswriter")]),t._v(" if you need.")])]),t._v(" "),a("li",[a("p",[t._v("Build doriswriter")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Build doriswriter along:")]),t._v(" "),a("p",[a("code",[t._v("mvn clean install -pl plugin-rdbms-util,doriswriter -DskipTests")])])]),t._v(" "),a("li",[a("p",[t._v("Build DataX:")]),t._v(" "),a("p",[a("code",[t._v("mvn package assembly:assembly -Dmaven.test.skip=true")])]),t._v(" "),a("p",[t._v("The output will be in "),a("code",[t._v("target/datax/datax/")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("hdfsreader, hdfswriter and oscarwriter needs some extra jar packages. If you don't need to use these components, you can comment out the corresponding module in DataX/pom.xml.")])])]),t._v(" "),a("li",[a("p",[t._v("Compilation error")]),t._v(" "),a("p",[t._v("If you encounter the following compilation errors:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Could not find artifact com.alibaba.datax:datax-all:pom:0.0.1-SNAPSHOT ...\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("You can try the following solutions:")]),t._v(" "),a("ol",[a("li",[t._v("Download "),a("a",{attrs:{href:"https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/alibaba-datax-maven-m2-20210928.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[t._v("alibaba-datax-maven-m2-20210928.tar.gz"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("After decompression, copy the resulting "),a("code",[t._v("alibaba/datax/")]),t._v(" directory to "),a("code",[t._v(".m2/repository/com/alibaba/")]),t._v(" corresponding to the maven used.")]),t._v(" "),a("li",[t._v("Try to compile again.")])])])])]),t._v(" "),a("li",[a("p",[t._v("Commit code of doriswriter in "),a("code",[t._v("doriswriter")]),t._v(" if you need.")])])]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("h4",{attrs:{id:"_1-stream-reads-the-data-and-imports-it-to-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-stream-reads-the-data-and-imports-it-to-doris"}},[t._v("#")]),t._v(" 1. Stream reads the data and imports it to Doris")]),t._v(" "),a("p",[t._v("For instructions on using the doriswriter plug-in, please refer to "),a("a",{attrs:{href:"https://github.com/apache/incubator-doris/blob/master/extension/DataX/doriswriter/doc/doriswriter.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"_2-mysql-reads-the-data-and-imports-it-to-doris"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-mysql-reads-the-data-and-imports-it-to-doris"}},[t._v("#")]),t._v(" 2.Mysql reads the data and imports it to Doris")]),t._v(" "),a("p",[t._v("1.Mysql table structure")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("t_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("line_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("remark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("unit_no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("unit_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BTREE")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8mb4 ROW_FORMAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("DYNAMIC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("2.Doris table structure")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("ods_t_test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("line_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("remark"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("unit_no"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("unit_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("decimal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n）"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("OLAP\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UNIQUE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("order_code"),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(")\nDISTRIBUTED BY HASH("),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")])]),t._v("order_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" BUCKETS "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nPROPERTIES "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"replication_allocation"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tag.location.default: 3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"in_memory"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"storage_format"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"V2"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br")])]),a("p",[t._v("3.Create datax script")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "job": {\n        "setting": {\n            "speed": {\n                "channel": 1\n            },\n            "errorLimit": {\n                "record": 0,\n                "percentage": 0\n            }\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "xxx",\n                        "password": "xxx",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "connection": [ { "table": [ "t_test" ], "jdbcUrl": [ "jdbc:mysql://10.10.10.1:33306/demo" ] } ] }\n                },\n                "writer": {\n                    "name": "doriswriter",\n                    "parameter": {\n                        "feLoadUrl": ["127.0.0.1:8030","127.0.0.2:8030"],\n                        "beLoadUrl": ["127.0.0.3:8040","127.0.0.4:8040","127.0.0.5:8040"],\n                        "jdbcUrl": "jdbc:mysql://127.0.0.1:9030/",\n                        "database": "demo",\n                        "table": "ods_t_test",\n                        "column": ["id","order_code","line_code","remark","unit_no","unit_name","price"],\n                        "username": "xxx",\n                        "password": "xxx",\n                        "postSql": [],\n                        "preSql": [],\n                        "loadProps": {\n                        },\n                        "maxBatchRows" : 300000,\n                        "maxBatchByteSize" : 20971520\n                    }\n                }\n            }\n        ]\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br")])]),a("p",[t._v("4.Execute the datax task, refer to the specific "),a("a",{attrs:{href:"https://github.com/alibaba/DataX/blob/master/userGuid.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("datax official website"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);