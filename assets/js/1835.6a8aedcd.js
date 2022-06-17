(window.webpackJsonp=window.webpackJsonp||[]).push([[1835],{2460:function(s,e,a){"use strict";a.r(e);var n=a(15),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"高级使用指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级使用指南"}},[s._v("#")]),s._v(" 高级使用指南")]),s._v(" "),a("p",[s._v("这里我们介绍 Doris 的一些高级特性。")]),s._v(" "),a("h2",{attrs:{id:"_1-表结构变更"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-表结构变更"}},[s._v("#")]),s._v(" 1 表结构变更")]),s._v(" "),a("p",[s._v("使用 ALTER TABLE 命令可以修改表的 Schema，包括如下修改：")]),s._v(" "),a("ul",[a("li",[s._v("增加列")]),s._v(" "),a("li",[s._v("删除列")]),s._v(" "),a("li",[s._v("修改列类型")]),s._v(" "),a("li",[s._v("改变列顺序")])]),s._v(" "),a("p",[s._v("以下举例说明。")]),s._v(" "),a("p",[s._v("原表 table1 的 Schema 如下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("我们新增一列 uv，类型为 BIGINT，聚合类型为 SUM，默认值为 0:")]),s._v(" "),a("p",[a("code",[s._v("ALTER TABLE table1 ADD COLUMN uv BIGINT SUM DEFAULT '0' after pv;")])]),s._v(" "),a("p",[s._v("提交成功后，可以通过以下命令查看作业进度:")]),s._v(" "),a("p",[a("code",[s._v("SHOW ALTER TABLE COLUMN;")])]),s._v(" "),a("p",[s._v("当作业状态为 FINISHED，则表示作业完成。新的 Schema 已生效。")]),s._v(" "),a("p",[s._v("ALTER TABLE 完成之后, 可以通过 "),a("code",[s._v("DESC TABLE")]),s._v(" 查看最新的 Schema。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> DESC table1;\n+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n5 rows in set (0.00 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("可以使用以下命令取消当前正在执行的作业:")]),s._v(" "),a("p",[a("code",[s._v("CANCEL ALTER TABLE COLUMN FROM table1")])]),s._v(" "),a("p",[s._v("更多帮助，可以参阅 "),a("code",[s._v("HELP ALTER TABLE")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_2-rollup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-rollup"}},[s._v("#")]),s._v(" 2 Rollup")]),s._v(" "),a("p",[s._v("Rollup 可以理解为 Table 的一个物化索引结构。"),a("strong",[s._v("物化")]),s._v(" 是因为其数据在物理上独立存储，而 "),a("strong",[s._v("索引")]),s._v(" 的意思是，Rollup可以调整列顺序以增加前缀索引的命中率，也可以减少key列以增加数据的聚合度。")]),s._v(" "),a("p",[s._v("以下举例说明。")]),s._v(" "),a("p",[s._v("原表table1的Schema如下:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+----------+-------------+------+-------+---------+-------+\n| Field    | Type        | Null | Key   | Default | Extra |\n+----------+-------------+------+-------+---------+-------+\n| siteid   | int(11)     | No   | true  | 10      |       |\n| citycode | smallint(6) | No   | true  | N/A     |       |\n| username | varchar(32) | No   | true  |         |       |\n| pv       | bigint(20)  | No   | false | 0       | SUM   |\n| uv       | bigint(20)  | No   | false | 0       | SUM   |\n+----------+-------------+------+-------+---------+-------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("对于 table1 明细数据是 siteid, citycode, username 三者构成一组 key，从而对 pv 字段进行聚合；如果业务方经常有看城市 pv 总量的需求，可以建立一个只有 citycode, pv 的rollup。")]),s._v(" "),a("p",[a("code",[s._v("ALTER TABLE table1 ADD ROLLUP rollup_city(citycode, pv);")])]),s._v(" "),a("p",[s._v("提交成功后，可以通过以下命令查看作业进度：")]),s._v(" "),a("p",[a("code",[s._v("SHOW ALTER TABLE ROLLUP;")])]),s._v(" "),a("p",[s._v("当作业状态为 FINISHED，则表示作业完成。")]),s._v(" "),a("p",[s._v("Rollup 建立完成之后可以使用 "),a("code",[s._v("DESC table1 ALL")]),s._v(" 查看表的 Rollup 信息。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> desc table1 all;\n+-------------+----------+-------------+------+-------+--------+-------+\n| IndexName   | Field    | Type        | Null | Key   | Default | Extra |\n+-------------+----------+-------------+------+-------+---------+-------+\n| table1      | siteid   | int(11)     | No   | true  | 10      |       |\n|             | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | username | varchar(32) | No   | true  |         |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n|             | uv       | bigint(20)  | No   | false | 0       | SUM   |\n|             |          |             |      |       |         |       |\n| rollup_city | citycode | smallint(6) | No   | true  | N/A     |       |\n|             | pv       | bigint(20)  | No   | false | 0       | SUM   |\n+-------------+----------+-------------+------+-------+---------+-------+\n8 rows in set (0.01 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("可以使用以下命令取消当前正在执行的作业:")]),s._v(" "),a("p",[a("code",[s._v("CANCEL ALTER TABLE ROLLUP FROM table1;")])]),s._v(" "),a("p",[s._v("Rollup 建立之后，查询不需要指定 Rollup 进行查询。还是指定原有表进行查询即可。程序会自动判断是否应该使用 Rollup。是否命中 Rollup可以通过 "),a("code",[s._v("EXPLAIN your_sql;")]),s._v(" 命令进行查看。")]),s._v(" "),a("p",[s._v("更多帮助，可以参阅 "),a("code",[s._v("HELP ALTER TABLE")]),s._v("。")]),s._v(" "),a("h2",{attrs:{id:"_2-数据表的查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据表的查询"}},[s._v("#")]),s._v(" 2 数据表的查询")]),s._v(" "),a("h3",{attrs:{id:"_2-1-内存限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-内存限制"}},[s._v("#")]),s._v(" 2.1 内存限制")]),s._v(" "),a("p",[s._v("为了防止用户的一个查询可能因为消耗内存过大。查询进行了内存控制，一个查询任务，在单个 BE 节点上默认使用不超过 2GB 内存。")]),s._v(" "),a("p",[s._v("用户在使用时，如果发现报 "),a("code",[s._v("Memory limit exceeded")]),s._v(" 错误，一般是超过内存限制了。")]),s._v(" "),a("p",[s._v("遇到内存超限时，用户应该尽量通过优化自己的 sql 语句来解决。")]),s._v(" "),a("p",[s._v("如果确切发现2GB内存不能满足，可以手动设置内存参数。")]),s._v(" "),a("p",[s._v("显示查询内存限制:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 2147483648 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[a("code",[s._v("exec_mem_limit")]),s._v(" 的单位是 byte，可以通过 "),a("code",[s._v("SET")]),s._v(" 命令改变 "),a("code",[s._v("exec_mem_limit")]),s._v(" 的值。如改为 8GB。")]),s._v(" "),a("p",[a("code",[s._v("SET exec_mem_limit = 8589934592;")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> SHOW VARIABLES LIKE "%mem_limit%";\n+---------------+------------+\n| Variable_name | Value      |\n+---------------+------------+\n| exec_mem_limit| 8589934592 |\n+---------------+------------+\n1 row in set (0.00 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("ul",[a("li",[s._v("以上该修改为 session 级别，仅在当前连接 session 内有效。断开重连则会变回默认值。")]),s._v(" "),a("li",[s._v("如果需要修改全局变量，可以这样设置："),a("code",[s._v("SET GLOBAL exec_mem_limit = 8589934592;")]),s._v("。设置完成后，断开 session 重新登录，参数将永久生效。")])])]),s._v(" "),a("h3",{attrs:{id:"_2-2-查询超时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查询超时"}},[s._v("#")]),s._v(" 2.2 查询超时")]),s._v(" "),a("p",[s._v("当前默认查询时间设置为最长为 300 秒，如果一个查询在 300 秒内没有完成，则查询会被 Doris 系统 cancel 掉。用户可以通过这个参数来定制自己应用的超时时间，实现类似 wait(timeout) 的阻塞方式。")]),s._v(" "),a("p",[s._v("查看当前超时设置:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysql> SHOW VARIABLES LIKE "%query_timeout%";\n+---------------+-------+\n| Variable_name | Value |\n+---------------+-------+\n| QUERY_TIMEOUT | 300   |\n+---------------+-------+\n1 row in set (0.00 sec)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("修改超时时间到1分钟:")]),s._v(" "),a("p",[a("code",[s._v("SET query_timeout = 60;")])]),s._v(" "),a("blockquote",[a("ul",[a("li",[s._v("当前超时的检查间隔为 5 秒，所以小于 5 秒的超时不会太准确。")]),s._v(" "),a("li",[s._v("以上修改同样为 session 级别。可以通过 "),a("code",[s._v("SET GLOBAL")]),s._v(" 修改全局有效。")])])]),s._v(" "),a("h3",{attrs:{id:"_2-3-broadcast-shuffle-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-broadcast-shuffle-join"}},[s._v("#")]),s._v(" 2.3 Broadcast/Shuffle Join")]),s._v(" "),a("p",[s._v("系统默认实现 Join 的方式，是将小表进行条件过滤后，将其广播到大表所在的各个节点上，形成一个内存 Hash 表，然后流式读出大表的数据进行Hash Join。但是如果当小表过滤后的数据量无法放入内存的话，此时 Join 将无法完成，通常的报错应该是首先造成内存超限。")]),s._v(" "),a("p",[s._v("如果遇到上述情况，建议显式指定 Shuffle Join，也被称作 Partitioned Join。即将小表和大表都按照 Join 的 key 进行 Hash，然后进行分布式的 Join。这个对内存的消耗就会分摊到集群的所有计算节点上。")]),s._v(" "),a("p",[s._v("Doris会自动尝试进行 Broadcast Join，如果预估小表过大则会自动切换至 Shuffle Join。注意，如果此时显式指定了 Broadcast Join 也会自动切换至 Shuffle Join。")]),s._v(" "),a("p",[s._v("使用 Broadcast Join（默认）:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select sum(table1.pv) from table1 join table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("使用 Broadcast Join（显式指定）:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select sum(table1.pv) from table1 join [broadcast] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.20 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("使用 Shuffle Join:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> select sum(table1.pv) from table1 join [shuffle] table2 where table1.siteid = 2;\n+--------------------+\n| sum(`table1`.`pv`) |\n+--------------------+\n|                 10 |\n+--------------------+\n1 row in set (0.15 sec)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-4-查询重试和高可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-查询重试和高可用"}},[s._v("#")]),s._v(" 2.4 查询重试和高可用")]),s._v(" "),a("p",[s._v("当部署多个 FE 节点时，用户可以在多个 FE 之上部署负载均衡层来实现 Doris 的高可用。")]),s._v(" "),a("p",[s._v("以下提供一些高可用的方案：")]),s._v(" "),a("p",[a("strong",[s._v("第一种")])]),s._v(" "),a("p",[s._v("自己在应用层代码进行重试和负载均衡。比如发现一个连接挂掉，就自动在其他连接上进行重试。应用层代码重试需要应用自己配置多个doris前端节点地址。")]),s._v(" "),a("p",[a("strong",[s._v("第二种")])]),s._v(" "),a("p",[s._v("如果使用 mysql jdbc connector 来连接Doris，可以使用 jdbc 的自动重试机制:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jdbc:mysql://[host:port],[host:port].../[database][?propertyName1][=propertyValue1][&propertyName2][=propertyValue2]...\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("第三种")])]),s._v(" "),a("p",[s._v("应用可以连接到和应用部署到同一机器上的 MySQL Proxy，通过配置 MySQL Proxy 的 Failover 和 Load Balance 功能来达到目的。")]),s._v(" "),a("p",[a("code",[s._v("http://dev.mysql.com/doc/refman/5.6/en/mysql-proxy-using.html")])])])}),[],!1,null,null,null);e.default=t.exports}}]);