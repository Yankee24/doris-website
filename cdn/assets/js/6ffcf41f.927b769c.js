"use strict";(self.webpackChunkselectdb_portal=self.webpackChunkselectdb_portal||[]).push([[19876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(h,s(s({ref:t},m),{},{components:a})):r.createElement(h,s({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},93787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Authority Management",language:"en"},s=void 0,o={unversionedId:"administrator-guide/privilege",id:"version-0.15/administrator-guide/privilege",title:"Authority Management",description:"\x3c!--",source:"@site/versioned_docs/version-0.15/administrator-guide/privilege.md",sourceDirName:"administrator-guide",slug:"/administrator-guide/privilege",permalink:"/docs/0.15/administrator-guide/privilege",draft:!1,tags:[],version:"0.15",frontMatter:{title:"Authority Management",language:"en"},sidebar:"docs",previous:{title:"Export Query Result",permalink:"/docs/0.15/administrator-guide/outfile"},next:{title:"LDAP",permalink:"/docs/0.15/administrator-guide/ldap"}},l={},p=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Supported operations",id:"supported-operations",level:2},{value:"Permission type",id:"permission-type",level:2},{value:"Permission hierarchy",id:"permission-hierarchy",level:2},{value:"ADMIN /GRANT",id:"admin-grant",level:2},{value:"Some explanations",id:"some-explanations",level:2},{value:"Best Practices",id:"best-practices",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authority-management"},"Authority Management"),(0,n.kt)("p",null,"Doris's new privilege management system refers to Mysql's privilege management mechanism, achieves table-level fine-grained privilege control, role-based privilege access control, and supports whitelist mechanism."),(0,n.kt)("h2",{id:"noun-interpretation"},"Noun Interpretation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"user_identity"),(0,n.kt)("p",{parentName:"li"},"In a permission system, a user is identified as a User Identity. User ID consists of two parts: username and userhost. Username is a user name, which is composed of English upper and lower case. Userhost represents the IP from which the user link comes. User_identity is presented as username@'userhost', representing the username from userhost."),(0,n.kt)("p",{parentName:"li"},"Another expression of user_identity is username@","['domain']",", where domain is the domain name, which can be resolved into a set of IPS by DNS BNS (Baidu Name Service). The final expression is a set of username@'userhost', so we use username@'userhost'to represent it.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Privilege"),(0,n.kt)("p",{parentName:"li"},"The objects of permissions are nodes, databases or tables. Different permissions represent different operating permissions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Role"),(0,n.kt)("p",{parentName:"li"},"Doris can create custom named roles. Roles can be seen as a set of permissions. When a newly created user can be assigned a role, the role's permissions are automatically granted. Subsequent changes in the role's permissions will also be reflected in all user permissions that belong to the role.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"user_property"),(0,n.kt)("p",{parentName:"li"},"User attributes are directly attached to a user, not to a user identity. That is, both cmy@'192.%'and cmy@","['domain']"," have the same set of user attributes, which belong to user cmy, not cmy@'192.%' or cmy@","['domain']","."),(0,n.kt)("p",{parentName:"li"},"User attributes include, but are not limited to, the maximum number of user connections, import cluster configuration, and so on."))),(0,n.kt)("h2",{id:"supported-operations"},"Supported operations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create users: CREATE USER"),(0,n.kt)("li",{parentName:"ol"},"Delete users: DROP USER"),(0,n.kt)("li",{parentName:"ol"},"Authorization: GRANT"),(0,n.kt)("li",{parentName:"ol"},"Withdrawal: REVOKE"),(0,n.kt)("li",{parentName:"ol"},"Create role: CREATE ROLE"),(0,n.kt)("li",{parentName:"ol"},"Delete Roles: DROP ROLE"),(0,n.kt)("li",{parentName:"ol"},"View current user privileges: SHOW GRANTS"),(0,n.kt)("li",{parentName:"ol"},"View all user privilegesSHOW ALL GRANTS;"),(0,n.kt)("li",{parentName:"ol"},"View the created roles: SHOW ROLES"),(0,n.kt)("li",{parentName:"ol"},"View user attributes: SHOW PROPERTY")),(0,n.kt)("p",null,"For detailed help with the above commands, you can use help + command to get help after connecting Doris through the MySQL client. For example ",(0,n.kt)("inlineCode",{parentName:"p"},"HELP CREATE USER"),"."),(0,n.kt)("h2",{id:"permission-type"},"Permission type"),(0,n.kt)("p",null,"Doris currently supports the following permissions"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Node_priv"),(0,n.kt)("p",{parentName:"li"},"Nodes change permissions. Including FE, BE, BROKER node addition, deletion, offline operations. Currently, this permission can only be granted to Root users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Grant_priv"),(0,n.kt)("p",{parentName:"li"},"Permissions change permissions. Allow the execution of operations including authorization, revocation, add/delete/change user/role, etc.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select_priv"),(0,n.kt)("p",{parentName:"li"},"Read-only access to databases and tables.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Load_priv"),(0,n.kt)("p",{parentName:"li"},"Write permissions to databases and tables. Including Load, Insert, Delete and so on.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Alter_priv"),(0,n.kt)("p",{parentName:"li"},"Change permissions on databases and tables. It includes renaming libraries/tables, adding/deleting/changing columns, and adding/deleting partitions.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create_priv"),(0,n.kt)("p",{parentName:"li"},"The right to create databases, tables, and views.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Drop_priv"),(0,n.kt)("p",{parentName:"li"},"Delete permissions for databases, tables, and views."))),(0,n.kt)("h2",{id:"permission-hierarchy"},"Permission hierarchy"),(0,n.kt)("p",null,"At the same time, according to the scope of application of permissions, we divide them into three levels:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"GLOBAL LEVEL: Global permissions. That is, permissions on ",(0,n.kt)("inlineCode",{parentName:"li"},"*.*")," granted by GRANT statements. The granted permissions apply to any table in any database."),(0,n.kt)("li",{parentName:"ol"},"DATABASE LEVEL: Database-level permissions. That is, permissions on ",(0,n.kt)("inlineCode",{parentName:"li"},"db.*")," granted by GRANT statements. The granted permissions apply to any table in the specified database."),(0,n.kt)("li",{parentName:"ol"},"TABLE LEVEL: Table-level permissions. That is, permissions on ",(0,n.kt)("inlineCode",{parentName:"li"},"db.tbl")," granted by GRANT statements. The permissions granted apply to the specified tables in the specified database.")),(0,n.kt)("h2",{id:"admin-grant"},"ADMIN /GRANT"),(0,n.kt)("p",null,"ADMIN","_","PRIV and GRANT","_","PRIV have the authority of ",(0,n.kt)("strong",{parentName:"p"},'"grant authority"')," at the same time, which is more special. The operations related to these two privileges are described here one by one."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CREATE USER"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users with ADMIN or GRANT privileges at any level can create new users."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"DROP USER"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Only ADMIN privileges can delete users."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"CREATE/DROP ROLE"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Only ADMIN privileges can create roles."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"GRANT /REVOKE"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users with ADMIN or GLOBAL GRANT privileges can grant or revoke the privileges of any user."),(0,n.kt)("li",{parentName:"ul"},"Users with GRANT privileges at the DATABASE level can grant or revoke the privileges of any user on the specified database."),(0,n.kt)("li",{parentName:"ul"},"Users with GRANT privileges at TABLE level can grant or revoke the privileges of any user on the specified tables in the specified database."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SET PASSWORD"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users with ADMIN or GLOBAL GRANT privileges can set any user's password."),(0,n.kt)("li",{parentName:"ul"},"Ordinary users can set their corresponding User Identity password. The corresponding User Identity can be viewed by ",(0,n.kt)("inlineCode",{parentName:"li"},"SELECT CURRENT_USER();"),"command."),(0,n.kt)("li",{parentName:"ul"},"Users with GRANT privileges at non-GLOBAL level cannot set the password of existing users, but can only specify the password when creating users.")))),(0,n.kt)("h2",{id:"some-explanations"},"Some explanations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When Doris initializes, the following users and roles are automatically created:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Operator role: This role has Node","_","priv and Admin","_","priv, i.e. all permissions for Doris. In a subsequent upgrade version, we may restrict the role's permissions to Node","_","priv, which is to grant only node change permissions. To meet some cloud deployment requirements.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"admin role: This role has Admin","_","priv, which is all permissions except for node changes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"root@'%': root user, which allows login from any node, with the role of operator.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"admin@'%': admin user, allowing login from any node, role admin.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"It is not supported to delete or change the permissions of default created roles or users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user of the operator role has one and only one user. Users of admin roles can create multiple.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Operational instructions for possible conflicts"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Conflict between domain name and ip:"),(0,n.kt)("p",{parentName:"li"},"Assume that the following users are created:"),(0,n.kt)("p",{parentName:"li"},"CREATE USER cmy@","['domain']",";"),(0,n.kt)("p",{parentName:"li"},"And authorize:"),(0,n.kt)("p",{parentName:"li"},"GRANT SELECT_PRIV ON ","*",".","*"," TO cmy@","['domain']"),(0,n.kt)("p",{parentName:"li"},"The domain is resolved into two ips: IP1 and IP2"),(0,n.kt)("p",{parentName:"li"},"Let's assume that we have a separate authorization for cmy@'ip1':"),(0,n.kt)("p",{parentName:"li"},"GRANT ALTER_PRIV ON ","*",".","*"," TO cmy@'ip1';"),(0,n.kt)("p",{parentName:"li"},"The permissions of CMY @'ip1'will be changed to SELECT","_","PRIV, ALTER","_","PRIV. And when we change the permissions of cmy@","['domain']"," again, cmy@'ip1' will not follow.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"duplicate IP conflicts:"),(0,n.kt)("p",{parentName:"li"},"Assume that the following users are created:"),(0,n.kt)("p",{parentName:"li"},"CREATE USER cmy@'%' IDENTIFIED BY \"12345\";"),(0,n.kt)("p",{parentName:"li"},"CREATE USER cmy@'192.%' IDENTIFIED BY \"abcde\";"),(0,n.kt)("p",{parentName:"li"},"In priority,'192.%'takes precedence over'%', so when user CMY tries to login Doris with password '12345' from 192.168.1.1, the machine will be rejected.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Forget passwords"),(0,n.kt)("p",{parentName:"li"},"If you forget your password and cannot log in to Doris, you can log in to Doris without a password using the following command on the machine where the Doris FE node is located:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"mysql-client -h 127.0.0.1 -P query_port -uroot")),(0,n.kt)("p",{parentName:"li"},"After login, the password can be reset through the SET PASSWORD command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"No user can reset the password of the root user except the root user himself.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"ADMIN","_","PRIV permissions can only be granted or revoked at the GLOBAL level.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Having GRANT","_","PRIV at GLOBAL level is actually equivalent to having ADMIN","_","PRIV, because GRANT","_","PRIV at this level has the right to grant arbitrary permissions, please use it carefully.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"current_user()")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"user()")),(0,n.kt)("p",{parentName:"li"},"Users can view ",(0,n.kt)("inlineCode",{parentName:"p"},"current_user")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," respectively by ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT current_user();")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"SELECT user();"),". Where ",(0,n.kt)("inlineCode",{parentName:"p"},"current_user")," indicates which identity the current user is passing through the authentication system, and ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," is the user's current actual ",(0,n.kt)("inlineCode",{parentName:"p"},"user_identity"),"."))),(0,n.kt)("p",null,"\xa0   For example, suppose the user ",(0,n.kt)("inlineCode",{parentName:"p"},"user1@'192.%'")," is created, and then a user user1 from 192.168.10.1 is logged into the system. At this time, ",(0,n.kt)("inlineCode",{parentName:"p"},"current_user")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"user1@'192.%'"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"user")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"user1@'192.168.10.1'"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"All privileges are given to a `current_user`, and the real user has all the privileges of the corresponding `current_user`.\n")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("p",null,"Here are some usage scenarios of Doris privilege system."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scene 1"),(0,n.kt)("p",{parentName:"li"},"The users of Doris cluster are divided into Admin, RD and Client. Administrators have all the rights of the whole cluster, mainly responsible for cluster building, node management and so on. The development engineer is responsible for business modeling, including database building, data import and modification. Users access different databases and tables to get data."),(0,n.kt)("p",{parentName:"li"},"In this scenario, ADMIN or GRANT privileges can be granted to administrators. Give RD CREATE, DROP, ALTER, LOAD, SELECT permissions to any or specified database tables. Give Client SELECT permission to any or specified database table. At the same time, it can also simplify the authorization of multiple users by creating different roles.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Scene 2"),(0,n.kt)("p",{parentName:"li"},"There are multiple services in a cluster, and each business may use one or more data. Each business needs to manage its own users. In this scenario. Administrator users can create a user with GRANT privileges at the DATABASE level for each database. The user can only authorize the specified database for the user.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Blacklist"),(0,n.kt)("p",{parentName:"li"},"Doris itself does not support blacklist, only whitelist, but we can simulate blacklist in some way. Suppose you first create a user named ",(0,n.kt)("inlineCode",{parentName:"p"},"user@'192.%'"),", which allows users from ",(0,n.kt)("inlineCode",{parentName:"p"},"192.*")," to login. At this time, if you want to prohibit users from ",(0,n.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," from logging in, you can create another user with ",(0,n.kt)("inlineCode",{parentName:"p"},"cmy@'192.168.10.1'")," and set a new password. Since ",(0,n.kt)("inlineCode",{parentName:"p"},"192.168.10.1")," has a higher priority than ",(0,n.kt)("inlineCode",{parentName:"p"},"192.%"),", user can no longer login by using the old password from ",(0,n.kt)("inlineCode",{parentName:"p"},"192.168.10.1"),"."))))}d.isMDXComponent=!0}}]);