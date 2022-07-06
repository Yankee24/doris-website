(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{1366:function(s,a,r){"use strict";r.r(a);var t=r(15),_=Object(t.a)({},(function(){var s=this,a=s.$createElement,r=s._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("h1",{attrs:{id:"ldap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap"}},[s._v("#")]),s._v(" LDAP")]),s._v(" "),r("p",[s._v("接入第三方LDAP服务为Doris提供验证登录和组授权服务。")]),s._v(" "),r("p",[s._v("LDAP验证登录指的是接入LDAP服务的密码验证来补充Doris的验证登录。Doris优先使用LDAP验证用户密码，如果LDAP服务中不存在该用户则继续使用Doris验证密码，如果LDAP密码正确但是Doris中没有对应账户则创建临时用户登录Doris。")]),s._v(" "),r("p",[s._v("LDAP组授权是将LDAP中的group映射到Doris中的Role，如果用户在LDAP中属于多个用户组，登录Doris后用户将获得所有组对应Role的权限，要求组名与Role名字相同。")]),s._v(" "),r("h2",{attrs:{id:"名词解释"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[s._v("#")]),s._v(" 名词解释")]),s._v(" "),r("ul",[r("li",[s._v("LDAP： 轻量级目录访问协议，能够实现账号密码的集中管理。")]),s._v(" "),r("li",[s._v("权限 Privilege：权限作用的对象是节点、数据库或表。不同的权限代表不同的操作许可。")]),s._v(" "),r("li",[s._v("角色 Role：Doris可以创建自定义命名的角色。角色可以被看做是一组权限的集合。")])]),s._v(" "),r("h2",{attrs:{id:"启用ldap认证"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启用ldap认证"}},[s._v("#")]),s._v(" 启用LDAP认证")]),s._v(" "),r("h3",{attrs:{id:"server端配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#server端配置"}},[s._v("#")]),s._v(" server端配置")]),s._v(" "),r("p",[s._v("需要在fe/conf/ldap.conf文件中配置LDAP基本信息，另有LDAP管理员密码需要使用sql语句进行设置。")]),s._v(" "),r("h4",{attrs:{id:"配置fe-conf-ldap-conf文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#配置fe-conf-ldap-conf文件"}},[s._v("#")]),s._v(" 配置fe/conf/ldap.conf文件：")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("ldap_authentication_enabled = false\n设置值为“true”启用LDAP验证；当值为“false”时，不启用LDAP验证，该配置文件的其他配置项都无效。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_host = 127.0.0.1\nLDAP服务ip。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_port = 389\nLDAP服务端口，默认明文传输端口为389，目前Doris的LDAP功能仅支持明文密码传输。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_admin_name = cn=admin,dc=domain,dc=com\nLDAP管理员账户“Distinguished Name”。当用户使用LDAP验证登录Doris时，Doris会绑定该管理员账户在LDAP中搜索用户信息。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_user_basedn = ou=people,dc=domain,dc=com\nDoris在LDAP中搜索用户信息时的base dn。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_user_filter = (&(uid={login}))")])]),s._v(" "),r("li",[r("p",[s._v("Doris在LDAP中搜索用户信息时的过滤条件，占位符“{login}”会被替换为登录用户名。必须保证通过该过滤条件搜索的用户唯一，否则Doris无法通过LDAP验证密码，登录时会出现“ERROR 5081 (42000): user is not unique in LDAP server.”的错误信息。")]),s._v(" "),r("p",[s._v("例如使用LDAP用户节点uid属性作为登录Doris的用户名可以配置该项为：\nldap_user_filter = (&(uid={login}))；\n使用LDAP用户邮箱前缀作为用户名可配置该项：\nldap_user_filter = (&(mail={login}@baidu.com))。")])]),s._v(" "),r("li",[r("p",[s._v("ldap_group_basedn = ou=group,dc=domain,dc=com\nDoris在LDAP中搜索组信息时的base dn。如果不配置该项，将不启用LDAP组授权。")])])]),s._v(" "),r("h4",{attrs:{id:"设置ldap管理员密码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#设置ldap管理员密码"}},[s._v("#")]),s._v(" 设置LDAP管理员密码：")]),s._v(" "),r("p",[s._v("配置好ldap.conf文件后启动fe，使用root或admin账号登录Doris，执行sql：")]),s._v(" "),r("div",{staticClass:"language-sql line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-sql"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" ldap_admin_password "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ldap_admin_password'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h3",{attrs:{id:"client端配置"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#client端配置"}},[s._v("#")]),s._v(" Client端配置")]),s._v(" "),r("p",[s._v("客户端使用LDAP验证需要启用mysql客户端明文验证插件，使用命令行登录Doris可以使用下面两种方式之一启用mysql明文验证插件：")]),s._v(" "),r("ul",[r("li",[r("p",[s._v("设置环境变量LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN值1。")]),s._v(" "),r("p",[s._v("例如在linux或者mac环境中可以使用：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1"')]),s._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ～/.bash_profile "),r("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),r("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ～/.bash_profile\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])])]),s._v(" "),r("li",[r("p",[s._v("每次登录Doris时添加参数“--enable-cleartext-plugin”：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("mysql -hDORIS_HOST -PDORIS_PORT -u user -p --enable-cleartext-plugin\n\n输入ldap密码\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])])])]),s._v(" "),r("h2",{attrs:{id:"ldap认证详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap认证详解"}},[s._v("#")]),s._v(" LDAP认证详解")]),s._v(" "),r("p",[s._v("LDAP密码验证和组授权是Doris密码验证和授权的补充，开启LDAP功能并不能完全替代Doris的密码验证和授权，而是与Doris密码验证和授权并存。")]),s._v(" "),r("h3",{attrs:{id:"ldap验证登录详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap验证登录详解"}},[s._v("#")]),s._v(" LDAP验证登录详解")]),s._v(" "),r("p",[s._v("开启LDAP后，用户在Doris和DLAP中存在以下几种情况：")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("LDAP用户")]),s._v(" "),r("th",[s._v("Doris用户")]),s._v(" "),r("th",[s._v("密码")]),s._v(" "),r("th",[s._v("登录情况")]),s._v(" "),r("th",[s._v("登录Doris的用户")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("LDAP密码")]),s._v(" "),r("td",[s._v("登录成功")]),s._v(" "),r("td",[s._v("Doris用户")])]),s._v(" "),r("tr",[r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("Doris密码")]),s._v(" "),r("td",[s._v("登录失败")]),s._v(" "),r("td",[s._v("无")])]),s._v(" "),r("tr",[r("td",[s._v("不存在")]),s._v(" "),r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("Doris密码")]),s._v(" "),r("td",[s._v("登录成功")]),s._v(" "),r("td",[s._v("Doris用户")])]),s._v(" "),r("tr",[r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("不存在")]),s._v(" "),r("td",[s._v("LDAP密码")]),s._v(" "),r("td",[s._v("登录成功")]),s._v(" "),r("td",[s._v("Ldap临时用户")])])])]),s._v(" "),r("p",[s._v("开启LDAP后，用户使用mysql client登录时，Doris会先通过LDAP服务验证用户密码，如果LDAP存在用户且密码正确，Doris则使用该用户登录；此时Doris若存在对应账户则直接登录该账户，如果不存在对应账户则为用户创建临时账户并登录该账户。临时账户具有具有相应对权限（参见LDAP组授权），仅对当前连接有效，doris不会创建该用户，也不会产生创建用户对元数据。\n如果LDAP服务中不存在登录用户，则使用Doris进行密码认证。")]),s._v(" "),r("p",[s._v("以下假设已开启LDAP认证，配置ldap_user_filter = (&(uid={login}))，且其他配置项都正确,客户端设置环境变量LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1")]),s._v(" "),r("p",[s._v("例如：")]),s._v(" "),r("h4",{attrs:{id:"_1-doris和ldap中都存在账户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-doris和ldap中都存在账户"}},[s._v("#")]),s._v(" 1:Doris和LDAP中都存在账户：")]),s._v(" "),r("p",[s._v("存在Doris账户：jack@'172.10.1.10'，密码：123456\nLDAP用户节点存在属性：uid: jack 用户密码：abcdef\n使用以下命令登录Doris可以登录jack@'172.10.1.10'账户：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("p",[s._v("使用以下命令将登录失败：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h4",{attrs:{id:"_2-ldap中存在用户-doris中不存在对应账户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-ldap中存在用户-doris中不存在对应账户"}},[s._v("#")]),s._v(" 2:LDAP中存在用户，Doris中不存在对应账户：")]),s._v(" "),r("p",[s._v("LDAP用户节点存在属性：uid: jack 用户密码：abcdef\n使用以下命令创建临时用户并登录jack@'%'，临时用户具有基本权限 DatabasePrivs：Select_priv， 用户退出登录后Doris将删除该临时用户：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h4",{attrs:{id:"_3-ldap不存在用户"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-ldap不存在用户"}},[s._v("#")]),s._v(" 3:LDAP不存在用户：")]),s._v(" "),r("p",[s._v("存在Doris账户：jack@'172.10.1.10'，密码：123456\n使用Doris密码登录账户，成功：")]),s._v(" "),r("div",{staticClass:"language-bash line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[s._v("mysql -hDoris_HOST -PDoris_PORT -ujack -p "),r("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br")])]),r("h3",{attrs:{id:"ldap组授权详解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap组授权详解"}},[s._v("#")]),s._v(" LDAP组授权详解")]),s._v(" "),r("p",[s._v("DLAP用户dn是LDAP组节点的“member”属性则Doris认为用户属于该组。LDAP组授权是将LDAP中的group映射到Doris中的role，并将所有对应的role权限授予登录用户，用户退出登录后Doris会撤销对应的role权限。在使用LDAP组授权前应该在Doris中创建相应对role，并为role授权。")]),s._v(" "),r("p",[s._v("登录用户权限跟Doris用户和组权限有关，见下表：")]),s._v(" "),r("table",[r("thead",[r("tr",[r("th",[s._v("LDAP用户")]),s._v(" "),r("th",[s._v("Doris用户")]),s._v(" "),r("th",[s._v("登录用户的权限")])])]),s._v(" "),r("tbody",[r("tr",[r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("LDAP组权限 + Doris用户权限")])]),s._v(" "),r("tr",[r("td",[s._v("不存在")]),s._v(" "),r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("Doris用户权限")])]),s._v(" "),r("tr",[r("td",[s._v("存在")]),s._v(" "),r("td",[s._v("不存在")]),s._v(" "),r("td",[s._v("LDAP组权限")])])])]),s._v(" "),r("p",[s._v("如果登录的用户为临时用户，且不存在组权限，则该用户默认具有information_schema的select_priv权限")]),s._v(" "),r("p",[s._v("举例：\nLDAP用户dn是LDAP组节点的“member”属性则认为用户属于该组，Doris会截取组dn的第一个Rdn作为组名。\n例如用户dn为“uid=jack,ou=aidp,dc=domain,dc=com”， 组信息如下：")]),s._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[s._v("dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n")])]),s._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[s._v("1")]),r("br"),r("span",{staticClass:"line-number"},[s._v("2")]),r("br"),r("span",{staticClass:"line-number"},[s._v("3")]),r("br")])]),r("p",[s._v("则组名为doris_rd。")]),s._v(" "),r("p",[s._v("假如jack还属于LDAP组doris_qa、doris_pm；Doris存在role：doris_rd、doris_qa、doris_pm，在使用LDAP验证登录后，用户不但具有该账户原有的权限，还将获得role doris_rd、doris_qa和doris_pm的权限。")]),s._v(" "),r("h2",{attrs:{id:"ldap验证的局限"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ldap验证的局限"}},[s._v("#")]),s._v(" LDAP验证的局限")]),s._v(" "),r("ul",[r("li",[s._v("目前Doris的LDAP功能只支持明文密码验证，即用户登录时，密码在client与fe之间、fe与LDAP服务之间以明文的形式传输。")]),s._v(" "),r("li",[s._v("当前的LDAP验证只支持在mysql协议下进行密码验证，如果使用Http接口则无法使用LDAP用户进行验证。")]),s._v(" "),r("li",[s._v("临时用户不具有用户属性。")])])])}),[],!1,null,null,null);a.default=_.exports}}]);