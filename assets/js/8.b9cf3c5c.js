(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{358:function(t,s,n){"use strict";n.r(s);var a=n(18),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"代码规范"}},[t._v("代码规范")]),t._v(" "),n("h2",{attrs:{id:"前言"}},[t._v("前言")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("为了符合web标准, 语义化html, 结构表现行为分离, 兼容性优良. 页面性能方面, 代码要求简洁明了有序, 尽可能的减小服务器负载, 保证最快的解析速度.")])]),t._v(" "),n("h2",{attrs:{id:"项目架构"}},[t._v("项目架构")]),t._v(" "),n("p",[n("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/3/19/170f20da6284c107?w=1147&h=1008&f=png&s=74198",alt:""}})]),t._v(" "),n("h2",{attrs:{id:"一、命名规范"}},[t._v("一、命名规范")]),t._v(" "),n("ul",[n("li",[n("p",[n("strong",[t._v("1) 文件命名:")]),t._v(" 全部采用小写方式， 以下划线分隔。 如："),n("code",[t._v("my_project_name.html")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("2) 目录命名:")]),t._v(" 参照项目命名规则；有复数结构时，要采用复数命名法。如："),n("code",[t._v("pages")]),t._v(","),n("code",[t._v("assets")]),t._v(","),n("code",[t._v("components")]),t._v(","),n("code",[t._v("utils")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("3) css命名:")])]),t._v(" "),n("ul",[n("li",[t._v("class使用小写字母，以中划线分隔")]),t._v(" "),n("li",[t._v("id 采用驼峰式命名")]),t._v(" "),n("li",[t._v("scss 中的变量、函数以中划线分隔命名")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("4) js命名:")])]),t._v(" "),n("ul",[n("li",[t._v("标准变量采用驼峰式命名（除了对象的属性外，主要是考虑到cgi返回的数据）")]),t._v(" "),n("li",[t._v("常量全大写，用下划线连接")]),t._v(" "),n("li",[t._v("构造函数，大写第一个字母")]),t._v(" "),n("li",[t._v("jquery对象必须以'$'开头命名")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("5) 组件命名:")]),t._v(" 全部采用首字母驼峰式命名")])])]),t._v(" "),n("h2",{attrs:{id:"二、代码规范"}},[t._v("二、代码规范")]),t._v(" "),n("h3",{attrs:{id:"html代码规范"}},[t._v("HTML代码规范")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("1) html5声明类型 <示例1-1>")])]),t._v(" "),n("li",[n("strong",[t._v("2) 编码统一为"),n("code",[t._v("utf-8")]),t._v("  <示例1-2>")])]),t._v(" "),n("li",[n("strong",[t._v("3) 非特殊情况下"),n("code",[t._v("css")]),t._v("文件必须在"),n("code",[t._v("<head>...</head>")]),t._v("之间引入，选择"),n("code",[t._v("link")]),t._v("方式引入")])]),t._v(" "),n("li",[n("strong",[t._v("4) 根据HTML5规范引入"),n("code",[t._v("CSS")]),t._v("和"),n("code",[t._v("JS")]),t._v("时不需要指明type <示例1-4>")])]),t._v(" "),n("li",[n("strong",[t._v("5) 尽可能减少标签嵌套,避免使用过度复杂的HTML结构")])]),t._v(" "),n("li",[n("strong",[t._v("6) "),n("code",[t._v("boolean")]),t._v("属性不需要声明取值的属性 <示例1-6>")])]),t._v(" "),n("li",[n("strong",[t._v("7) 属性书写顺序 <示例1-7>")])]),t._v(" "),n("li",[n("strong",[t._v("8) 属性超过三个或单个属性超出50字符强制换行 <示例1-8>")])]),t._v(" "),n("li",[n("strong",[t._v("9) 在页面中尽量避免使用"),n("code",[t._v("style")]),t._v("属性,即style=”„”")])]),t._v(" "),n("li",[n("strong",[t._v("10) 重要图片必须加上"),n("code",[t._v("alt")]),t._v("属性; 给重要的元素和截断的元素加上"),n("code",[t._v("title")]),t._v("; <示例1-9>")])]),t._v(" "),n("li",[n("strong",[t._v("11) 给区块代码及重要功能加上注释")])])]),t._v(" "),n("h3",{attrs:{id:"示例代码"}},[t._v("示例代码")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('1-1:\n<!DOCTYPE HTML>;\n\n1-2: \n<meta charset="utf-8"/>\n\n1-4:\n<link rel="stylesheet" href="style.css">\n\n1-6:\n<input type="text" checked>\n\n1-7:\nv-if, v-for,wx:if,wx:for,wx:for-item,wx:for-index,wx:key\nclass\nid\nname\ndata-*\nsrc,for,type,value,max-length,max,min,pattern\nplaceholder,title,alt\naria-*,role\nrequired,readonly,disabled\nstyle\nOnclick, bindtap,@click\n\n1-8:\n<input\n   class="layui-input"\n   type="text"\n   name="title"\n   value="{:input(\'title\')}"\n   placeholder="请输入规格名称"\n   autocomplete="off"\n/>\n\n1-9:\n<img src="img.png" alt="图片">\n')])])]),n("h3",{attrs:{id:"_2-css代码规范"}},[t._v("2.CSS代码规范")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("1) 统一编码utf-8")])]),t._v(" "),n("li",[n("strong",[t._v("2) 命名以中划线分割")])]),t._v(" "),n("li",[n("strong",[t._v("3) 嵌套最多不超过5层")])]),t._v(" "),n("li",[n("strong",[t._v("4) 属性书写顺序 <示例2-4>")])]),t._v(" "),n("li",[n("strong",[t._v("5) 每一块及功能注释")])])]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("2-4:\n属性顺序\n    定位\n    盒模型\n    自身属性\n    字体排版\n    视觉样式\n    其他\n\n.declaration-order")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("right")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("z-index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" right"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #e5e5e5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal 13px "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Helvetica Neue"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sans-serif"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("line-height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1.5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-align")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #333"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #f5f5f5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("opacity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("详细信息:")]),t._v(" "),n("a",{attrs:{href:"http://alloyteam.github.io/CodeGuide/#html-lang",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://alloyteam.github.io/CodeGuide/#html-lang"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"_3-javascript代码规范"}},[t._v("3.JAVASCRIPT代码规范")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("1) 变量采用驼峰命名")])]),t._v(" "),n("li",[n("strong",[t._v("2) 通过解构方式获取数据")])]),t._v(" "),n("li",[n("strong",[t._v("3) "),n("code",[t._v("Vue")]),t._v("或小程序中所有变量在"),n("code",[t._v("data")]),t._v("中初始化并备注")])]),t._v(" "),n("li",[n("strong",[t._v("4) "),n("code",[t._v("Vue")]),t._v("或小程序生命周期初始化"),n("code",[t._v("that")]),t._v("供全局使用")])]),t._v(" "),n("li",[n("strong",[t._v("5) 使用"),n("code",[t._v("promise")]),t._v("方式解决回调")])]),t._v(" "),n("li",[n("strong",[t._v("6) 每句必须以分号结尾")])]),t._v(" "),n("li",[n("strong",[t._v("7) 代码结构明了,加适量注释,提高函数变量重用率")])])]),t._v(" "),n("h3",{attrs:{id:"_4-代码注释"}},[t._v("4.代码注释")]),t._v(" "),n("ul",[n("li",[t._v("1.html注释：注释格式\x3c!--注释--\x3e，'--'只能在注释的始末位置，不可置入注释文字区域；")]),t._v(" "),n("li",[t._v("2.css注释: 注释格式/*注释*/;")]),t._v(" "),n("li",[t._v("3.JavaScript注释: 单行使用‘//单行注释’，多行注释使用/*多行注释*/")])]),t._v(" "),n("h3",{attrs:{id:"注释示例"}},[t._v("注释示例")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("作者注释"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("@author "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("emailAddress"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @author yussicahe <yussicahe@gmail.com> \n */")]),t._v("\n\n变量注释\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ‘’"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 备注")]),t._v("\n\n方法注释\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * @func\n * @desc 计算两个数值的和\n * @param {number} a - 加数a\n * @param {number} b - 加数b\n * @returns {number} 返回a和b的和\n * @example\n * add(1, 2);    // 返回3\n */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("详细参考:")]),t._v(" "),n("a",{attrs:{href:"http://yuri4ever.github.io/jsdoc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://yuri4ever.github.io/jsdoc/"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);