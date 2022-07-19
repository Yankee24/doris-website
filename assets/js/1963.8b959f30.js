(window.webpackJsonp=window.webpackJsonp||[]).push([[1963],{2590:function(s,a,e){"use strict";e.r(a);var t=e(15),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"date-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[s._v("#")]),s._v(" date_format")]),s._v(" "),e("h3",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[s._v("#")]),s._v(" Description")]),s._v(" "),e("h4",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),e("p",[e("code",[s._v("VARCHAR DATE' FORMAT (DATETIME DATE, VARCHAR Format)")])]),s._v(" "),e("p",[s._v("Convert the date type to a bit string according to the format type.\nCurrently supports a string with a maximum 128 bytes and returns NULL if the length of the return value exceeds 128")]),s._v(" "),e("p",[s._v("The date parameter is the valid date. Format specifies the date/time output format.")]),s._v(" "),e("p",[s._v("The formats available are:")]),s._v(" "),e("p",[s._v("% a | Abbreviation for Sunday Name")]),s._v(" "),e("p",[s._v("% B | Abbreviated Monthly Name")]),s._v(" "),e("p",[s._v("% C | Month, numerical value")]),s._v(" "),e("p",[s._v("% D | Sky in the Moon with English Prefix")]),s._v(" "),e("p",[s._v("% d | Monthly day, numerical value (00-31)")]),s._v(" "),e("p",[s._v("% e | Monthly day, numerical value (0-31)")]),s._v(" "),e("p",[s._v("% f | microseconds")]),s._v(" "),e("p",[s._v("% H | Hours (00-23)")]),s._v(" "),e("p",[s._v("% h | hour (01-12)")]),s._v(" "),e("p",[s._v("% I | Hours (01-12)")]),s._v(" "),e("p",[s._v("% I | min, numerical value (00-59)")]),s._v(" "),e("p",[s._v("% J | Days of Year (001-366)")]),s._v(" "),e("p",[s._v("% k | hours (0-23)")]),s._v(" "),e("p",[s._v("% L | Hours (1-12)")]),s._v(" "),e("p",[s._v("% M | Moon Name")]),s._v(" "),e("p",[s._v("% m | month, numerical value (00-12)")]),s._v(" "),e("p",[s._v("%p | AM or PM")]),s._v(" "),e("p",[s._v("% R | Time, 12 - hour (hh: mm: SS AM or PM)")]),s._v(" "),e("p",[s._v("% S | seconds (00-59)")]),s._v(" "),e("p",[s._v("% s | seconds (00-59)")]),s._v(" "),e("p",[s._v("% T | Time, 24 - hour (hh: mm: ss)")]),s._v(" "),e("p",[s._v("% U | Week (00-53) Sunday is the first day of the week")]),s._v(" "),e("p",[s._v("% U | Week (00 - 53) Monday is the first day of the week")]),s._v(" "),e("p",[s._v("% V | Week (01-53) Sunday is the first day of the week, and% X is used.")]),s._v(" "),e("p",[s._v("% v | Week (01 - 53) Monday is the first day of the week, and% x is used")]),s._v(" "),e("p",[s._v("% W | Sunday")]),s._v(" "),e("p",[s._v("% w | Weekly day (0 = Sunday, 6 = Saturday)")]),s._v(" "),e("p",[s._v("% X | Year, where Sunday is the first day of the week, 4 places, and% V use")]),s._v(" "),e("p",[s._v("% X | year, of which Monday is the first day of the week, 4 places, and% V")]),s._v(" "),e("p",[s._v("% Y | Year, 4")]),s._v(" "),e("p",[s._v("% Y | Year, 2")]),s._v(" "),e("p",[s._v("%%  | Represent %")]),s._v(" "),e("p",[s._v("Also support 3 formats:")]),s._v(" "),e("p",[s._v("yyyyMMdd")]),s._v(" "),e("p",[s._v("yyyy-MM-dd")]),s._v(" "),e("p",[s._v("yyyy-MM-dd HH:mm:ss")]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" example")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br")])]),e("h3",{attrs:{id:"keywords"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keywords"}},[s._v("#")]),s._v(" keywords")]),s._v(" "),e("p",[s._v("DATE_FORMAT,DATE,FORMAT")])])}),[],!1,null,null,null);a.default=n.exports}}]);