(window.webpackJsonp=window.webpackJsonp||[]).push([[806],{1432:function(s,a,t){"use strict";t.r(a);var r=t(15),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"空间列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#空间列表"}},[s._v("#")]),s._v(" 空间列表")]),s._v(" "),t("p",[s._v("超级管理员在空间列表主要可进行如下操作：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("进行新建集群和集群托管操作")])]),s._v(" "),t("li",[t("p",[s._v("未完成空间的恢复和删除操作")])]),s._v(" "),t("li",[t("p",[s._v("已完成空间的删除操作")])])]),s._v(" "),t("p",[s._v("空间管理员在空间列表主要可进行如下操作：")]),s._v(" "),t("ul",[t("li",[s._v("查看有权限的空间信息")])]),s._v(" "),t("h2",{attrs:{id:"已完成空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#已完成空间"}},[s._v("#")]),s._v(" 已完成空间")]),s._v(" "),t("p",[s._v("超级管理员可以通过空间名称右侧按钮对已完成空间进行操作。空间管理员可以点击进入空间，对空间内的集群或数据进行管理操作。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-1.png"),alt:""}}),s._v(" "),t("h2",{attrs:{id:"未完成空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#未完成空间"}},[s._v("#")]),s._v(" 未完成空间")]),s._v(" "),t("p",[s._v("Doris Manger 提供了空间创建流程的草稿保存功能，用以记录未完成的空间创建流程。超级管理员可从通过切换tab页查看未完成空间列表，进行恢复或是删除操作。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-2.png"),alt:""}}),s._v(" "),t("h1",{attrs:{id:"新建空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建空间"}},[s._v("#")]),s._v(" 新建空间")]),s._v(" "),t("p",[s._v("新建空间包括新建集群和集群托管两种方式。")]),s._v(" "),t("h2",{attrs:{id:"新建集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建集群"}},[s._v("#")]),s._v(" 新建集群")]),s._v(" "),t("h3",{attrs:{id:"_1-注册空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册空间"}},[s._v("#")]),s._v(" 1 注册空间")]),s._v(" "),t("p",[s._v("空间信息包括空间名称、空间简介、选择空间管理员。")]),s._v(" "),t("p",[s._v("空间名称、管理员为必填/选字段。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-3.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_2-添加主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加主机"}},[s._v("#")]),s._v(" 2 添加主机")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-4.png"),alt:""}}),s._v(" "),t("h4",{attrs:{id:"配置ssh免登陆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh免登陆"}},[s._v("#")]),s._v(" 配置SSH免登陆")]),s._v(" "),t("p",[s._v("Doris Manager 在安装时需要分发Agent安装包，故需要在待安装Doris的服务器(agent01)配置SSH免登陆。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.登录服务器，需要使用manager和agent账号保持一致")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - xxx\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.在部署doris manager机器上生成密钥对")]),s._v("\nssh-keygen -t rsa -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" -f ~/.ssh/id_rsa\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.将公钥拷贝到机器agent01上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v("  ~/.ssh/id_rsa.pub root@agent01:~\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4.登录agent01，将公钥追加到authorized_keys ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .ssh/authorized_keys\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5.这样做完之后我们就可以在doris manger机器免密码登录agent01")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" agent01@xx.xxx.xx.xx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("详细可参考：https://blog.csdn.net/universe_hao/article/details/52296811")]),s._v(" "),t("p",[s._v("另外需要注意，.ssh目录的权限为700，其下文件authorized_keys和私钥的权限为600。否则会因为权限问题导致无法免密码登录。我们可以看到登陆后会有known_hosts文件生成。同时启动doris时需要使用免密码登录的账号。")]),s._v(" "),t("p",[s._v("在Doris Manager 安装集群第二步添加节点时，使用部署doris manager机器的私钥即可，即~/.ssh/id_rsa(注意：包括密钥文件的头尾)")]),s._v(" "),t("h4",{attrs:{id:"主机列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主机列表"}},[s._v("#")]),s._v(" 主机列表")]),s._v(" "),t("p",[s._v("输入主机IP添加新的主机，也可通过批量添加。")]),s._v(" "),t("h3",{attrs:{id:"_3-安装选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装选项"}},[s._v("#")]),s._v(" 3 安装选项")]),s._v(" "),t("h4",{attrs:{id:"获取安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取安装包"}},[s._v("#")]),s._v(" 获取安装包")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("代码包路径")]),s._v(" "),t("p",[s._v("通过Doris Manager 进行集群部署时，需要提供已编译好的 Doris 安装包，您可以通过 Doris 源码自行编译，或使用官方提供的"),t("a",{attrs:{href:"https://doris.apache.org/zh-CN/downloads/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("二进制版本"),t("OutboundLink")],1),s._v("。")])])]),s._v(" "),t("p",[t("code",[s._v("Doris Manager 将通过 http 方式拉取Doris安装包，若您需要自建 http 服务，请参考文档底部-自建http服务")]),s._v("。")]),s._v(" "),t("h4",{attrs:{id:"指定安装路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定安装路径"}},[s._v("#")]),s._v(" 指定安装路径")]),s._v(" "),t("ol",[t("li",[s._v("Doris与Doris Manger Agent将安装至该目录下。请确保该目录为Doirs以及相关组件专用。")]),s._v(" "),t("li",[s._v("指定Agent启动端口，默认为8001，若有冲突，可自定义。")])]),s._v(" "),t("h3",{attrs:{id:"_4-校验主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-校验主机"}},[s._v("#")]),s._v(" 4 校验主机")]),s._v(" "),t("p",[s._v("系统会根据主机状态自动进行校验，当校验完成时既Agent启动回传心跳，可点击进行下一步。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-5.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_5-规划节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-规划节点"}},[s._v("#")]),s._v(" 5 规划节点")]),s._v(" "),t("p",[s._v("点击分配节点按钮，对主机进行FE/BE/Broker节点的规划。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-6.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_6-配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置参数"}},[s._v("#")]),s._v(" 6 配置参数")]),s._v(" "),t("p",[s._v("对上一步规划的节点进行配置参数，可以使用默认值也可以打开自定义配置开关对配置进行自定义。")]),s._v(" "),t("h3",{attrs:{id:"_7-部署集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-部署集群"}},[s._v("#")]),s._v(" 7 部署集群")]),s._v(" "),t("p",[s._v("系统会根据主机安装进度状态自动进行校验，当校验完成时既启动节点并回传心跳，可点击进行下一步。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-7.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_8-完成创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-完成创建"}},[s._v("#")]),s._v(" 8 完成创建")]),s._v(" "),t("p",[s._v("完成以上步骤即可完成新建集群。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-8.png"),alt:""}}),s._v(" "),t("h2",{attrs:{id:"集群托管"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群托管"}},[s._v("#")]),s._v(" 集群托管")]),s._v(" "),t("h3",{attrs:{id:"_1-注册空间-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-注册空间-2"}},[s._v("#")]),s._v(" 1 注册空间")]),s._v(" "),t("p",[s._v("空间信息包括空间名称、空间简介、选择空间管理员。")]),s._v(" "),t("p",[s._v("空间名称、管理员为必填/选字段。")]),s._v(" "),t("h3",{attrs:{id:"_2-连接集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-连接集群"}},[s._v("#")]),s._v(" 2 连接集群")]),s._v(" "),t("p",[s._v("集群信息包括集群地址、HTTP端口、JDBC端口、集群用户名和集群密码。用户可根据自身集群信息进行填写。")]),s._v(" "),t("p",[s._v("点击链接测试按钮进行测试。")]),s._v(" "),t("h3",{attrs:{id:"_3-托管选项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-托管选项"}},[s._v("#")]),s._v(" 3 托管选项")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-9.png"),alt:""}}),s._v(" "),t("h4",{attrs:{id:"配置ssh免登陆-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置ssh免登陆-2"}},[s._v("#")]),s._v(" 配置SSH免登陆")]),s._v(" "),t("p",[s._v("Doris Manager 在安装时需要分发Agent安装包，故需要在待安装Doris的服务器(agent01)配置SSH免登陆。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.登录服务器，需要使用manger和agent账号保持一致")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" - xxx\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.在部署doris manager机器上生成密钥对")]),s._v("\nssh-keygen -t rsa -P "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" -f ~/.ssh/id_rsa\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.将公钥拷贝到机器agent01上")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v("  ~/.ssh/id_rsa.pub root@agent01:~\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4.登录agent01，将公钥追加到authorized_keys ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/id_rsa.pub "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .ssh/authorized_keys\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5.这样做完之后我们就可以在doris manger机器免密码登录agent01")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" agent01@xx.xxx.xx.xx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("另外需要注意，.ssh目录的权限为700，其下文件authorized_keys和私钥的权限为600。否则会因为权限问题导致无法免密码登录。我们可以看到登陆后会有known_hosts文件生成。同时启动doris时需要使用免密码登录的账号。")]),s._v(" "),t("p",[s._v("在Doris Manager 安装集群时，使用部署doris manager机器的私钥即可，即~/.ssh/id_rsa")]),s._v(" "),t("p",[s._v("详细可参考：https://blog.csdn.net/universe_hao/article/details/52296811")]),s._v(" "),t("h4",{attrs:{id:"指定安装路径-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定安装路径-2"}},[s._v("#")]),s._v(" 指定安装路径")]),s._v(" "),t("ol",[t("li",[s._v("Doris与Doris Manger Agent将安装至该目录下。请确保该目录为Doirs以及相关组件专用。")]),s._v(" "),t("li",[s._v("指定Agent启动端口，默认为8001，若有冲突，可自定义。")])]),s._v(" "),t("h3",{attrs:{id:"_4-校验主机-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-校验主机-2"}},[s._v("#")]),s._v(" 4 校验主机")]),s._v(" "),t("p",[s._v("系统会根据主机状态自动进行校验，当校验完成时既Agent启动回传心跳，可点击进行下一步。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-10.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_5-校验集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-校验集群"}},[s._v("#")]),s._v(" 5 校验集群")]),s._v(" "),t("p",[s._v("校验集群分位实例安装校验、实例依赖校验、实例启动校验，校验成功后点击下一步即可完成创建。")]),s._v(" "),t("img",{attrs:{src:s.$withBase("/images/doris-manager/spacelist-11.png"),alt:""}}),s._v(" "),t("h3",{attrs:{id:"_6-完成接入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-完成接入"}},[s._v("#")]),s._v(" 6 完成接入")]),s._v(" "),t("p",[s._v("完成以上步骤即可完成集群托管。")]),s._v(" "),t("h2",{attrs:{id:"自建http服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自建http服务"}},[s._v("#")]),s._v(" 自建http服务")]),s._v(" "),t("h3",{attrs:{id:"_1-yum源安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-yum源安装"}},[s._v("#")]),s._v(" 1 yum源安装")]),s._v(" "),t("p",[s._v("1.安装\nyum install -y nginx\n2.启动\nsystemctl start nginx")]),s._v(" "),t("h3",{attrs:{id:"_2-源码安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-源码安装"}},[s._v("#")]),s._v(" 2 源码安装")]),s._v(" "),t("p",[s._v("可参考：https://www.runoob.com/linux/nginx-install-setup.html")]),s._v(" "),t("h3",{attrs:{id:"_3-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置"}},[s._v("#")]),s._v(" 3 配置")]),s._v(" "),t("p",[s._v("1.将doris安装包放置nginx根目录\nmv PALO-0.15.1-rc03-binary.tar.gz /usr/share/nginx/html")]),s._v(" "),t("p",[s._v("2.修改ngixn.conf")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("location /download {\n                alias /home/work/nginx/nginx/html/;\n        }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("修改后重启ngxin访问 ：\nhttps://host:port/download/PALO-0.15.1-rc03-binary.tar.gz")])])}),[],!1,null,null,null);a.default=e.exports}}]);