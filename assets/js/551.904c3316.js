(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{1176:function(e,s,a){"use strict";a.r(s);var n=a(15),r=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker"}},[e._v("#")]),e._v(" Broker")]),e._v(" "),a("p",[e._v("Broker is an optional process in the Doris cluster. It is mainly used to support Doris to read and write files or directories on remote storage, such as HDFS, BOS, and AFS.")]),e._v(" "),a("p",[e._v("Broker provides services through an RPC service port. It is a stateless JVM process that is responsible for encapsulating some POSIX-like file operations for read and write operations on remote storage, such as open, pred, pwrite, and so on.\nIn addition, the Broker does not record any other information, so the connection information, file information, permission information, and so on stored remotely need to be passed to the Broker process in the RPC call through parameters in order for the Broker to read and write files correctly .")]),e._v(" "),a("p",[e._v("Broker only acts as a data channel and does not participate in any calculations, so it takes up less memory. Usually one or more Broker processes are deployed in a Doris system. And the same type of Broker will form a group and set a ** Broker name **.")]),e._v(" "),a("p",[e._v("Broker's position in the Doris system architecture is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+----+   +----+\n| FE |   | BE |\n+-^--+   +--^-+\n  |         |\n  |         |\n+-v---------v-+\n|   Broker    |\n+------^------+\n       |\n       |\n+------v------+\n|HDFS/BOS/AFS |\n+-------------+\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("p",[e._v("This document mainly introduces the parameters that Broker needs when accessing different remote storages, such as connection information,\nauthorization information, and so on.")]),e._v(" "),a("h2",{attrs:{id:"supported-storage-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-storage-system"}},[e._v("#")]),e._v(" Supported Storage System")]),e._v(" "),a("p",[e._v("Different types of brokers support different storage systems.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Community HDFS")]),e._v(" "),a("ul",[a("li",[e._v("Support simple authentication access")]),e._v(" "),a("li",[e._v("Support kerberos authentication access")]),e._v(" "),a("li",[e._v("Support HDFS HA mode access")])])]),e._v(" "),a("li",[a("p",[e._v("Baidu HDFS / AFS (not supported by open source version)")]),e._v(" "),a("ul",[a("li",[e._v("Support UGI simple authentication access")])])]),e._v(" "),a("li",[a("p",[e._v("Baidu Object Storage BOS (not supported by open source version)")]),e._v(" "),a("ul",[a("li",[e._v("Support AK / SK authentication access")])])])]),e._v(" "),a("h2",{attrs:{id:"function-provided-by-broker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#function-provided-by-broker"}},[e._v("#")]),e._v(" Function provided by Broker")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Broker Load")]),e._v(" "),a("p",[e._v("The Broker Load function reads the file data on the remote storage through the Broker process and imports it into Doris. Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('LOAD LABEL example_db.label6\n(\n    DATA INFILE("bos://my_bucket/input/file")\n    INTO TABLE `my_table`\n)\nWITH BROKER "broker_name"\n(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[a("code",[e._v("WITH BROKER")]),e._v(" and following Property Map are used to provide Broker's related information.")])]),e._v(" "),a("li",[a("p",[e._v("Export")]),e._v(" "),a("p",[e._v("The Export function export the data stored in Doris to a file stored in remote storage in text format through Broker process. Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('EXPORT TABLE testTbl \nTO "hdfs://hdfs_host:port/a/b/c" \nWITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy"\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("code",[e._v("WITH BROKER")]),e._v(" and following Property Map are used to provide Broker's related information.")])]),e._v(" "),a("li",[a("p",[e._v("Create Repository")]),e._v(" "),a("p",[e._v('When users need to use the backup and restore function, they need to first create a "repository" with the '),a("code",[e._v("CREATE REPOSITORY")]),e._v(" command,and the broker metadata and related information are recorded in the warehouse metadata.\nSubsequent backup and restore operations will use Broker to back up data to this warehouse, or read data from this warehouse to restore to Doris. Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CREATE REPOSITORY `bos_repo`\nWITH BROKER `broker_name`\nON LOCATION "bos://doris_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyy"\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[a("code",[e._v("WITH BROKER")]),e._v(" and following Property Map are used to provide Broker's related information.")])])]),e._v(" "),a("h2",{attrs:{id:"broker-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-information"}},[e._v("#")]),e._v(" Broker Information")]),e._v(" "),a("p",[e._v("Broker information includes two parts: ** Broker name ** and ** Certification information **. The general syntax is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('WITH BROKER "broker_name" \n(\n    "username" = "xxx",\n    "password" = "yyy",\n    "other_prop" = "prop_value",\n    ...\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"broker-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#broker-name"}},[e._v("#")]),e._v(" Broker Name")]),e._v(" "),a("p",[e._v("Usually the user needs to specify an existing Broker Name through the "),a("code",[e._v('WITH BROKER" broker_name "')]),e._v(" clause in the operation command.\nBroker Name is a name that the user specifies when adding a Broker process through the ALTER SYSTEM ADD BROKER command.\nA name usually corresponds to one or more broker processes. Doris selects available broker processes based on the name.\nYou can use the "),a("code",[e._v("SHOW BROKER")]),e._v(" command to view the Brokers that currently exist in the cluster.")]),e._v(" "),a("p",[a("strong",[e._v("Note: Broker Name is just a user-defined name and does not represent the type of Broker.")])]),e._v(" "),a("h3",{attrs:{id:"certification-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#certification-information"}},[e._v("#")]),e._v(" Certification Information")]),e._v(" "),a("p",[e._v("Different broker types and different access methods need to provide different authentication information.\nAuthentication information is usually provided as a Key-Value in the Property Map after "),a("code",[e._v('WITH BROKER" broker_name "')]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"community-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-hdfs"}},[e._v("#")]),e._v(" Community HDFS")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Simple Authentication")]),e._v(" "),a("p",[e._v("Simple authentication means that Hadoop configures "),a("code",[e._v("hadoop.security.authentication")]),e._v(" to"),a("code",[e._v("simple")]),e._v(".")]),e._v(" "),a("p",[e._v("Use system users to access HDFS. Or add in the environment variable started by Broker: "),a("code",[e._v("HADOOP_USER_NAME")]),e._v(".")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username" = "user",\n    "password" = ""\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("Just leave the password blank.")])]),e._v(" "),a("li",[a("p",[e._v("Kerberos Authentication")]),e._v(" "),a("p",[e._v("The authentication method needs to provide the following information::")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("hadoop.security.authentication")]),e._v(": Specify the authentication method as kerberos.")]),e._v(" "),a("li",[a("code",[e._v("kerberos_principal")]),e._v(": Specify the principal of kerberos.")]),e._v(" "),a("li",[a("code",[e._v("kerberos_keytab")]),e._v(": Specify the path to the keytab file for kerberos. The file must be an absolute path to a file on the server where the broker process is located. And can be accessed by the Broker process.")]),e._v(" "),a("li",[a("code",[e._v("kerberos_keytab_content")]),e._v(": Specify the content of the keytab file in kerberos after base64 encoding. You can choose one of these with "),a("code",[e._v("kerberos_keytab")]),e._v(" configuration.")])]),e._v(" "),a("p",[e._v("Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab" = "/home/doris/my.keytab"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "hadoop.security.authentication" = "kerberos",\n    "kerberos_principal" = "doris@YOUR.COM",\n    "kerberos_keytab_content" = "ASDOWHDLAWIDJHWLDKSALDJSDIWALD"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("If Kerberos authentication is used, the "),a("a",{attrs:{href:"https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("krb5.conf"),a("OutboundLink")],1),e._v(" file is required when deploying the Broker process.\nThe krb5.conf file contains Kerberos configuration information, Normally, you should install your krb5.conf file in the directory /etc. You can override the default location by setting the environment variable KRB5_CONFIG.\nAn example of the contents of the krb5.conf file is as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[libdefaults]\n    default_realm = DORIS.HADOOP\n    default_tkt_enctypes = des3-hmac-sha1 des-cbc-crc\n    default_tgs_enctypes = des3-hmac-sha1 des-cbc-crc\n    dns_lookup_kdc = true\n    dns_lookup_realm = false\n\n[realms]\n    DORIS.HADOOP = {\n        kdc = kerberos-doris.hadoop.service:7005\n    }\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])])]),e._v(" "),a("li",[a("p",[e._v("HDFS HA Mode")]),e._v(" "),a("p",[e._v("This configuration is used to access HDFS clusters deployed in HA mode.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dfs.nameservices")]),e._v(': Specify the name of the hdfs service, custom, such as "dfs.nameservices" = "my_ha".')]),e._v(" "),a("li",[a("code",[e._v("dfs.ha.namenodes.xxx")]),e._v(":  Custom namenode names. Multiple names are separated by commas, where xxx is the custom name in "),a("code",[e._v("dfs.nameservices")]),e._v(', such as" dfs.ha.namenodes.my_ha "=" my_nn ".')]),e._v(" "),a("li",[a("code",[e._v("dfs.namenode.rpc-address.xxx.nn")]),e._v(": Specify the rpc address information of namenode, Where nn represents the name of the namenode configured in "),a("code",[e._v("dfs.ha.namenodes.xxx")]),e._v(', such as: "dfs.namenode.rpc-address.my_ha.my_nn" = "host:port".')]),e._v(" "),a("li",[a("code",[e._v("dfs.client.failover.proxy.provider")]),e._v(": Specify the provider for the client to connect to the namenode. The default is: org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider.")])]),e._v(" "),a("p",[e._v("Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("The HA mode can be combined with the previous two authentication methods for cluster access. If you access HA HDFS with simple authentication:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username"="user",\n    "password"="passwd",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("The configuration for accessing the HDFS cluster can be written to the hdfs-site.xml file. When users use the Broker process to read data from the HDFS cluster, they only need to fill in the cluster file path and authentication information.")])])]),e._v(" "),a("h4",{attrs:{id:"baidu-object-storage-bos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baidu-object-storage-bos"}},[e._v("#")]),e._v(" Baidu Object Storage BOS")]),e._v(" "),a("p",[a("strong",[e._v("(Open source version is not supported)")])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Access via AK / SK")]),e._v(" "),a("ul",[a("li",[e._v("AK/SK: Access Key and Secret Key. You can check the user's AK / SK in Baidu Cloud Security Certification Center.")]),e._v(" "),a("li",[e._v("Region Endpoint: Endpoint of the BOS region.")]),e._v(" "),a("li",[e._v("For the regions supported by BOS and corresponding Endpoints, please see [Get access domain name](https://cloud.baidu.com/doc/BOS/s/Ck1rk80hn#%E8%8E%B7%E5%8F%96%E8%AE %BF%E9%97%AE%E5%9F%9F%E5%90%8D)")])]),e._v(" "),a("p",[e._v("Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "bos_endpoint" = "http://bj.bcebos.com",\n    "bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyyy"\n)\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])])])]),e._v(" "),a("h4",{attrs:{id:"baidu-hdfs-afs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#baidu-hdfs-afs"}},[e._v("#")]),e._v(" Baidu HDFS/AFS")]),e._v(" "),a("p",[a("strong",[e._v("（Open source version is not supported）")])]),e._v(" "),a("p",[e._v("Baidu AFS and HDFS only support simple authentication access using UGI. Examples are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('(\n    "username" = "user",\n    "password" = "passwd"\n);\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("User and passwd are UGI configurations for Hadoop.")])])}),[],!1,null,null,null);s.default=r.exports}}]);