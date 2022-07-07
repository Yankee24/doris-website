(window.webpackJsonp=window.webpackJsonp||[]).push([[641],{1267:function(s,a,e){"use strict";e.r(a);var n=e(15),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"发布-doris-core"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布-doris-core"}},[s._v("#")]),s._v(" 发布 Doris Core")]),s._v(" "),e("p",[s._v("Doris Core 指发布 https://github.com/apache/incubator-doris 中的内容。")]),s._v(" "),e("h2",{attrs:{id:"准备发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备发布"}},[s._v("#")]),s._v(" 准备发布")]),s._v(" "),e("p",[s._v("首先，请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-prepare.html"}},[s._v("发版准备")]),s._v(" 文档进行发版准备。")],1),s._v(" "),e("h3",{attrs:{id:"准备分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备分支"}},[s._v("#")]),s._v(" 准备分支")]),s._v(" "),e("p",[s._v("发布前需要先新建一个分支。例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git checkout -b branch-0.9\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("这个分支要进行比较充分的测试，使得功能可用，bug收敛，重要bug都得到修复。\n这个过程需要等待社区，看看是否有必要的patch需要在这个版本合入，如果有，需要把它 cherry-pick 到发布分支。")]),s._v(" "),e("h3",{attrs:{id:"清理issue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清理issue"}},[s._v("#")]),s._v(" 清理issue")]),s._v(" "),e("p",[s._v("将属于这个版本的所有 issue 都过一遍，关闭已经完成的，如果没法完成的，推迟到更晚的版本。")]),s._v(" "),e("h3",{attrs:{id:"合并必要的patch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并必要的patch"}},[s._v("#")]),s._v(" 合并必要的Patch")]),s._v(" "),e("p",[s._v("在发布等待过程中，可能会有比较重要的Patch合入，如果社区有人说要有重要的Bug需要合入，那么 Release Manager 需要评估并将重要的Patch合入到发布分支中。")]),s._v(" "),e("h2",{attrs:{id:"验证分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证分支"}},[s._v("#")]),s._v(" 验证分支")]),s._v(" "),e("h3",{attrs:{id:"稳定性测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#稳定性测试"}},[s._v("#")]),s._v(" 稳定性测试")]),s._v(" "),e("p",[s._v("将打好的分支交给 QA 同学进行稳定性测试。如果在测试过程中，出现需要修复的问题，则如果在测试过程中，出现需要修复的问题，待修复好后，需要将修复问题的 PR 合入到待发版本的分支中。")]),s._v(" "),e("p",[s._v("待整个分支稳定后，才能准备发版本。")]),s._v(" "),e("h3",{attrs:{id:"编译验证"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译验证"}},[s._v("#")]),s._v(" 编译验证")]),s._v(" "),e("p",[s._v("请参阅编译文档进行编译，以确保源码编译正确性。")]),s._v(" "),e("h3",{attrs:{id:"准备-release-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备-release-notes"}},[s._v("#")]),s._v(" 准备 Release Notes")]),s._v(" "),e("h2",{attrs:{id:"社区发布投票流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#社区发布投票流程"}},[s._v("#")]),s._v(" 社区发布投票流程")]),s._v(" "),e("h3",{attrs:{id:"打-tag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打-tag"}},[s._v("#")]),s._v(" 打 tag")]),s._v(" "),e("p",[s._v("当上述分支已经比较稳定后，就可以在此分支上打 tag。\n记得在创建 tag 时，修改 "),e("code",[s._v("gensrc/script/gen_build_version.sh")]),s._v(" 中的 "),e("code",[s._v("build_version")]),s._v(" 变量。如 "),e("code",[s._v('build_version="0.10.0-release"')])]),s._v(" "),e("p",[s._v("例如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ git checkout branch-0.9\n$ git tag -a 0.9.0-rc01 -m "0.9.0 release candidate 01"\n$ git push origin 0.9.0-rc01\nCounting objects: 1, done.\nWriting objects: 100% (1/1), 165 bytes | 0 bytes/s, done.\nTotal 1 (delta 0), reused 0 (delta 0)\nTo git@github.com:apache/incubator-doris.git\n * [new tag]         0.9.0-rc01 -> 0.9.0-rc01\n\n$ git tag\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"打包、签名上传"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打包、签名上传"}},[s._v("#")]),s._v(" 打包、签名上传")]),s._v(" "),e("p",[s._v("如下步骤，也需要通过 SecureCRT 等终端直接登录用户账户，不能通过 su - user 或者 ssh 转，否则密码输入 box 会显示不出来而报错。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ git checkout 0.9.0-rc01\n\n$ git archive --format=tar 0.9.0-rc01 --prefix=apache-doris-0.9.0-incubating-src/ | gzip > apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg -u xxx@apache.org --armor --output apache-doris-0.9.0-incubating-src.tar.gz.asc --detach-sign apache-doris-0.9.0-incubating-src.tar.gz\n\n$ gpg --verify apache-doris-0.9.0-incubating-src.tar.gz.asc apache-doris-0.9.0-incubating-src.tar.gz\n\n$ sha512sum apache-doris-0.9.0-incubating-src.tar.gz > apache-doris-0.9.0-incubating-src.tar.gz.sha512\n\n$ sha512sum --check apache-doris-0.9.0-incubating-src.tar.gz.sha512\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("然后将打包的内容上传到svn仓库中，首先下载 svn 库：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("svn co https://dist.apache.org/repos/dist/dev/incubator/doris/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("将之前得到的全部文件组织成以下svn路径")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("./doris/\n|-- 0.11.0-rc1\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz\n|   |-- apache-doris-0.11.0-incubating-src.tar.gz.asc\n|   `-- apache-doris-0.11.0-incubating-src.tar.gz.sha512\n`-- KEYS\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("上传这些文件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('svn add 0.11.0-rc1\nsvn commit -m "Add 0.11.0-rc1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"发邮件到社区-dev-doris-apache-org-进行投票"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发邮件到社区-dev-doris-apache-org-进行投票"}},[s._v("#")]),s._v(" 发邮件到社区 dev@doris.apache.org 进行投票")]),s._v(" "),e("p",[s._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available\nhere:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nRelease Notes are here:\nhttps://github.com/apache/incubator-doris/issues/1891\n\nThanks to everyone who has contributed to this release.\n\nThe artifacts (source, signature and checksum) corresponding to this release\ncandidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc1/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to\nlide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nTo verify and build, you can refer to following link:\nhttp://doris.incubator.apache.org/community/release-and-verify/release-verify.html\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br")])]),e("h3",{attrs:{id:"投票通过后-发-result-邮件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#投票通过后-发-result-邮件"}},[s._v("#")]),s._v(" 投票通过后，发 Result 邮件")]),s._v(" "),e("p",[s._v("[Result][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Thanks to everyone, and this vote is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Zhao Chun\n+1 xxx\n+1 Li Chaoyong\n+1 Mingyu Chen\n\nBest Regards,\nxxx\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"发邮件到-general-incubator-apache-org-进行投票"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发邮件到-general-incubator-apache-org-进行投票"}},[s._v("#")]),s._v(" 发邮件到 general@incubator.apache.org 进行投票")]),s._v(" "),e("p",[e("strong",[s._v("如非孵化器项目，请跳过")])]),s._v(" "),e("p",[s._v("[VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi all,\n\nPlease review and vote on Apache Doris 0.9.0-incubating-rc01 release.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe Apache Doris community has voted on and approved this release:\nhttps://lists.apache.org/thread.html/d70f7c8a8ae448bf6680a15914646005c6483564464cfa15f4ddc2fc@%3Cdev.doris.apache.org%3E\n\nThe vote result email thread:\nhttps://lists.apache.org/thread.html/64d229f0ba15d66adc83306bc8d7b7ccd5910ecb7e842718ce6a61da@%3Cdev.doris.apache.org%3E\n\nThe release candidate has been tagged in GitHub as 0.9.0-rc01, available here:\nhttps://github.com/apache/incubator-doris/releases/tag/0.9.0-rc01\n\nThere is no CHANGE LOG file because this is the first release of Apache Doris.\nThanks to everyone who has contributed to this release, and there is a simple release notes can be found here:\nhttps://github.com/apache/incubator-doris/issues/406\n\nThe artifacts (source, signature and checksum) corresponding to this release candidate can be found here:\nhttps://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/\n\nThis has been signed with PGP key 33DBF2E0, corresponding to lide@apache.org.\nKEYS file is available here:\nhttps://downloads.apache.org/incubator/doris/KEYS\nIt is also listed here:\nhttps://people.apache.org/keys/committer/lide.asc\n\nThe vote will be open for at least 72 hours.\n[ ] +1 Approve the release\n[ ] +0 No opinion\n[ ] -1 Do not release this package because ...\n\nTo verify and build, you can refer to following instruction:\n\nFirstly, you must be install and start docker service, and then you could build Doris as following steps:\n\nStep1: Pull the docker image with Doris building environment\n$ docker pull apache/incubator-doris:build-env-1.3.1\nYou can check it by listing images, its size is about 3.28GB.\n\nStep2: Run the Docker image\nYou can run image directly:\n$ docker run -it apache/incubator-doris:build-env-1.3.1\n\nStep3: Download Doris source\nNow you should in docker environment, and you can download Doris source package.\n(If you have downloaded source and it is not in image, you can map its path to image in Step2.)\n$ wget https://dist.apache.org/repos/dist/dev/incubator/doris/0.9/0.9.0-rc01/apache-doris-0.9.0.rc01-incubating-src.tar.gz\n\nStep4: Build Doris\nNow you can decompress and enter Doris source path and build Doris.\n$ tar zxvf apache-doris-0.9.0.rc01-incubating-src.tar.gz\n$ cd apache-doris-0.9.0.rc01-incubating-src\n$ sh build.sh\n\nBest Regards,\nxxx\n\n----\nDISCLAIMER: \nApache Doris (incubating) is an effort undergoing incubation at The\nApache Software Foundation (ASF), sponsored by the Apache Incubator PMC.\n\nIncubation is required of all newly accepted\nprojects until a further review indicates that the\ninfrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF\nprojects.\n\nWhile incubation status is not necessarily a reflection\nof the completeness or stability of the code, it does indicate\nthat the project has yet to be fully endorsed by the ASF.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br")])]),e("p",[s._v("邮件的 thread 连接可以在这里找到：")]),s._v(" "),e("p",[e("code",[s._v("https://lists.apache.org/list.html?dev@doris.apache.org")])]),s._v(" "),e("h3",{attrs:{id:"发-result-邮件到-general-incubator-apache-org"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发-result-邮件到-general-incubator-apache-org"}},[s._v("#")]),s._v(" 发 Result 邮件到 general@incubator.apache.org")]),s._v(" "),e("p",[e("strong",[s._v("如非孵化器项目，请跳过")])]),s._v(" "),e("p",[s._v("[RESULT][VOTE] Release Apache Doris 0.9.0-incubating-rc01")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi,\n\nThanks to everyone, and the vote for releasing Apache Doris 0.9.0-incubating-rc01 is now closed.\n\nIt has passed with 4 +1 (binding) votes and no 0 or -1 votes.\n\nBinding:\n+1 Willem Jiang\n+1 Justin Mclean\n+1 ShaoFeng Shi\n+1 Makoto Yui\n\nThe vote thread:\nhttps://lists.apache.org/thread.html/da05fdd8d84e35de527f27200b5690d7811a1e97d419d1ea66562130@%3Cgeneral.incubator.apache.org%3E\n\nBest Regards,\nxxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br")])]),e("h2",{attrs:{id:"完成发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完成发布"}},[s._v("#")]),s._v(" 完成发布")]),s._v(" "),e("p",[s._v("请参阅 "),e("RouterLink",{attrs:{to:"/zh-CN/community/release-and-verify/release-complete.html"}},[s._v("完成发布")]),s._v(" 文档完成所有发布流程。")],1)])}),[],!1,null,null,null);a.default=t.exports}}]);