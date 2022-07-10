(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{1287:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"doris-docker-快速搭建开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#doris-docker-快速搭建开发环境"}},[s._v("#")]),s._v(" Doris Docker 快速搭建开发环境")]),s._v(" "),t("h2",{attrs:{id:"相关详细文档导航"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关详细文档导航"}},[s._v("#")]),s._v(" 相关详细文档导航")]),s._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation.html"}},[s._v("使用 Docker 开发镜像编译")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh-CN/docs/install/install-deploy.html"}},[s._v("部署")])],1),s._v(" "),t("li",[t("RouterLink",{attrs:{to:"/zh-CN/developer/developer-guide/be-vscode-dev.html"}},[s._v("VSCode Be 开发调试")])],1)]),s._v(" "),t("h2",{attrs:{id:"环境准备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),t("ul",[t("li",[s._v("安装 Docker")]),s._v(" "),t("li",[s._v("VSCode\n"),t("ul",[t("li",[s._v("Remote 插件")])])])]),s._v(" "),t("h2",{attrs:{id:"构建镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建镜像"}},[s._v("#")]),s._v(" 构建镜像")]),s._v(" "),t("p",[s._v("创建 dockerfile")]),s._v(" "),t("p",[s._v("VSCode 中使用 Ctrl-d 替换掉所有的")]),s._v(" "),t("ul",[t("li",[s._v("<!!! your user !!!>")]),s._v(" "),t("li",[s._v("<!!! your user password !!!>")]),s._v(" "),t("li",[s._v("<!!! root password !!!>")]),s._v(" "),t("li",[s._v("<!!! your git email !!!>")]),s._v(" "),t("li",[s._v("<!!! your git username !!!>")])]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" apache/incubator-doris:build-env-latest")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" echo "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<!!! root password !!!>'")]),s._v(" | passwd root --stdin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y vim net-tools man wget git mysql lsof bash-completion "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && cp /var/local/thirdparty/installed/bin/thrift /usr/bin")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更安全的使用，创建用户而不是使用 root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y sudo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && useradd -ms /bin/bash <!!! your user !!!> && echo <!!! your user password !!!> | passwd <!!! your user !!!> --stdin "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && usermod -a -G wheel <!!! your user !!!>")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /home/<!!! your user !!!>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" git config --global color.ui true "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git email !!!>"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<!!! your git username !!!>"')])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按需安装 zsh and oh my zsh, 更易于使用，不需要的移除")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" root")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yum install -y zsh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && chsh -s /bin/zsh <!!! your user !!!>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" <!!! your user !!!>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token instruction"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-autosuggestions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("\\")]),s._v("\n        && git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ZSH_CUSTOM:-~/.oh-my-zsh/custom}")]),s._v("/plugins/zsh-syntax-highlighting")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("运行构建命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t doris "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("运行镜像")]),s._v(" "),t("p",[s._v("此处按需注意 "),t("RouterLink",{attrs:{to:"/zh-CN/docs/install/source-install/compilation.html"}},[s._v("挂载的问题")])],1),s._v(" "),t("blockquote",[t("p",[s._v("见链接中：建议以挂载本地 Doris 源码目录的方式运行镜像 .....")])]),s._v(" "),t("p",[s._v("由于如果是使用 windows 开发，挂载会存在跨文件系统访问的问题，请自行斟酌设置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -it doris:latest /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果选择安装了 zsh\n运行 容器后，在 ~/.zshrc 替换 plugins 为")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("plugins=(git zsh-autosuggestions zsh-syntax-highlighting)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建目录并下载 doris")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("your user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" code\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/apache/incubator-doris.git\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),t("p",[s._v("注意:")]),s._v(" "),t("p",[s._v("第一次编译的时候要使用如下命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh --clean --be --fe --ui\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这是因为 build-env-for-0.15.0 版本镜像升级了 thrift(0.9 -> 0.13)，需要通过 --clean 命令强制使用新版本的 thrift 生成代码文件，否则会出现不兼容的代码。：")]),s._v(" "),t("p",[s._v("编译 Doris")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" build.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),t("p",[s._v("手动创建 "),t("code",[s._v("meta_dir")]),s._v(" 元数据存放位置, 默认值为 "),t("code",[s._v("${DORIS_HOME}/doris-meta")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" meta_dir\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动FE")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/fe\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_fe.sh --daemon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启动BE")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" output/be\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" bin/start_be.sh --daemon\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("mysql-client 连接")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -h "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -P "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9030")]),s._v(" -u root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);