(window.webpackJsonp=window.webpackJsonp||[]).push([[876],{1501:function(a,s,e){"use strict";e.r(s);var n=e(15),t=Object(n.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"date-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#date-format"}},[a._v("#")]),a._v(" date_format")]),a._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[a._v("#")]),a._v(" Description")]),a._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("p",[e("code",[a._v("VARCHAR DATE' FORMAT (DATETIME DATE, VARCHAR Format)")])]),a._v(" "),e("p",[a._v("Convert the date type to a bit string according to the format type.\nCurrently supports a string with a maximum 128 bytes and returns NULL if the length of the return value exceeds 128")]),a._v(" "),e("p",[a._v("The date parameter is the valid date. Format specifies the date/time output format.")]),a._v(" "),e("p",[a._v("The formats available are:")]),a._v(" "),e("p",[a._v("% a | Abbreviation for Sunday Name")]),a._v(" "),e("p",[a._v("% B | Abbreviated Monthly Name")]),a._v(" "),e("p",[a._v("% C | Month, numerical value")]),a._v(" "),e("p",[a._v("% D | Sky in the Moon with English Prefix")]),a._v(" "),e("p",[a._v("% d | Monthly day, numerical value (00-31)")]),a._v(" "),e("p",[a._v("% e | Monthly day, numerical value (0-31)")]),a._v(" "),e("p",[a._v("% f | microseconds")]),a._v(" "),e("p",[a._v("% H | Hours (00-23)")]),a._v(" "),e("p",[a._v("% h | hour (01-12)")]),a._v(" "),e("p",[a._v("% I | Hours (01-12)")]),a._v(" "),e("p",[a._v("% I | min, numerical value (00-59)")]),a._v(" "),e("p",[a._v("% J | Days of Year (001-366)")]),a._v(" "),e("p",[a._v("% k | hours (0-23)")]),a._v(" "),e("p",[a._v("% L | Hours (1-12)")]),a._v(" "),e("p",[a._v("% M | Moon Name")]),a._v(" "),e("p",[a._v("% m | month, numerical value (00-12)")]),a._v(" "),e("p",[a._v("%p | AM or PM")]),a._v(" "),e("p",[a._v("% R | Time, 12 - hour (hh: mm: SS AM or PM)")]),a._v(" "),e("p",[a._v("% S | seconds (00-59)")]),a._v(" "),e("p",[a._v("% s | seconds (00-59)")]),a._v(" "),e("p",[a._v("% T | Time, 24 - hour (hh: mm: ss)")]),a._v(" "),e("p",[a._v("% U | Week (00-53) Sunday is the first day of the week")]),a._v(" "),e("p",[a._v("% U | Week (00 - 53) Monday is the first day of the week")]),a._v(" "),e("p",[a._v("% V | Week (01-53) Sunday is the first day of the week, and% X is used.")]),a._v(" "),e("p",[a._v("% v | Week (01 - 53) Monday is the first day of the week, and% x is used")]),a._v(" "),e("p",[a._v("% W | Sunday")]),a._v(" "),e("p",[a._v("% w | Weekly day (0 = Sunday, 6 = Saturday)")]),a._v(" "),e("p",[a._v("% X | Year, where Sunday is the first day of the week, 4 places, and% V use")]),a._v(" "),e("p",[a._v("% X | year, of which Monday is the first day of the week, 4 places, and% V")]),a._v(" "),e("p",[a._v("% Y | Year, 4")]),a._v(" "),e("p",[a._v("% Y | Year, 2")]),a._v(" "),e("p",[a._v("%%  | Represent %")]),a._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mysql> select date_format('2009-10-04 22:23:00', '%W %M %Y');\n+------------------------------------------------+\n| date_format('2009-10-04 22:23:00', '%W %M %Y') |\n+------------------------------------------------+\n| Sunday October 2009                            |\n+------------------------------------------------+\n\nmysql> select date_format('2007-10-04 22:23:00', '%H:%i:%s');\n+------------------------------------------------+\n| date_format('2007-10-04 22:23:00', '%H:%i:%s') |\n+------------------------------------------------+\n| 22:23:00                                       |\n+------------------------------------------------+\n\nmysql> select date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j');\n+------------------------------------------------------------+\n| date_format('1900-10-04 22:23:00', '%D %y %a %d %m %b %j') |\n+------------------------------------------------------------+\n| 4th 00 Thu 04 10 Oct 277                                   |\n+------------------------------------------------------------+\n\nmysql> select date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w');\n+------------------------------------------------------------+\n| date_format('1997-10-04 22:23:00', '%H %k %I %r %T %S %w') |\n+------------------------------------------------------------+\n| 22 22 10 10:23:00 PM 22:23:00 00 6                         |\n+------------------------------------------------------------+\n\nmysql> select date_format('1999-01-01 00:00:00', '%X %V'); \n+---------------------------------------------+\n| date_format('1999-01-01 00:00:00', '%X %V') |\n+---------------------------------------------+\n| 1998 52                                     |\n+---------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%d');\n+------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%d') |\n+------------------------------------------+\n| 01                                       |\n+------------------------------------------+\n\nmysql> select date_format('2006-06-01', '%%%d');\n+--------------------------------------------+\n| date_format('2006-06-01 00:00:00', '%%%d') |\n+--------------------------------------------+\n| %01                                        |\n+--------------------------------------------+\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br"),e("span",{staticClass:"line-number"},[a._v("18")]),e("br"),e("span",{staticClass:"line-number"},[a._v("19")]),e("br"),e("span",{staticClass:"line-number"},[a._v("20")]),e("br"),e("span",{staticClass:"line-number"},[a._v("21")]),e("br"),e("span",{staticClass:"line-number"},[a._v("22")]),e("br"),e("span",{staticClass:"line-number"},[a._v("23")]),e("br"),e("span",{staticClass:"line-number"},[a._v("24")]),e("br"),e("span",{staticClass:"line-number"},[a._v("25")]),e("br"),e("span",{staticClass:"line-number"},[a._v("26")]),e("br"),e("span",{staticClass:"line-number"},[a._v("27")]),e("br"),e("span",{staticClass:"line-number"},[a._v("28")]),e("br"),e("span",{staticClass:"line-number"},[a._v("29")]),e("br"),e("span",{staticClass:"line-number"},[a._v("30")]),e("br"),e("span",{staticClass:"line-number"},[a._v("31")]),e("br"),e("span",{staticClass:"line-number"},[a._v("32")]),e("br"),e("span",{staticClass:"line-number"},[a._v("33")]),e("br"),e("span",{staticClass:"line-number"},[a._v("34")]),e("br"),e("span",{staticClass:"line-number"},[a._v("35")]),e("br"),e("span",{staticClass:"line-number"},[a._v("36")]),e("br"),e("span",{staticClass:"line-number"},[a._v("37")]),e("br"),e("span",{staticClass:"line-number"},[a._v("38")]),e("br"),e("span",{staticClass:"line-number"},[a._v("39")]),e("br"),e("span",{staticClass:"line-number"},[a._v("40")]),e("br"),e("span",{staticClass:"line-number"},[a._v("41")]),e("br"),e("span",{staticClass:"line-number"},[a._v("42")]),e("br"),e("span",{staticClass:"line-number"},[a._v("43")]),e("br"),e("span",{staticClass:"line-number"},[a._v("44")]),e("br"),e("span",{staticClass:"line-number"},[a._v("45")]),e("br"),e("span",{staticClass:"line-number"},[a._v("46")]),e("br"),e("span",{staticClass:"line-number"},[a._v("47")]),e("br"),e("span",{staticClass:"line-number"},[a._v("48")]),e("br")])]),e("h2",{attrs:{id:"keyword"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#keyword"}},[a._v("#")]),a._v(" keyword")]),a._v(" "),e("p",[a._v("DATE_FORMAT,DATE,FORMAT")])])}),[],!1,null,null,null);s.default=t.exports}}]);