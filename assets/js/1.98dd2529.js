(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{65:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"接口定义常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口定义常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口定义常见问题")]),a("p",[t._v("工作中，少不了要定义各种接口，系统集成要定义接口，前后台掉调用也要定义接口。接口定义一定程度上能反应程序员的编程功底。列举一下工作中我发现大家容易出现的问题：")]),a("h2",{attrs:{id:"返回格式不统一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回格式不统一","aria-hidden":"true"}},[t._v("#")]),t._v(" 返回格式不统一")]),a("p",[t._v("同一个接口，有时候返回数组，有时候返回单个；成功的时候返回对象，失败的时候返回错误信息字符串。工作中有个系统集成就是这样定义的接口，真是辣眼睛。这个对应代码上，返回的类型是map，json，object，都是不应该的。实际工作中，我们会定义一个统一的格式，就是ResultBean，分页的有另外一个PageResultBean")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("返回map可读性不好，不知道里面是什么")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("成功返回boolean，失败返回string，大忌")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Object "),a("span",{attrs:{class:"token function"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" result "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" configService"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" local"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    log"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"没有考虑失败情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有考虑失败情况","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有考虑失败情况")]),a("p",[t._v("一开始只考虑成功场景，等后面测试发现有错误情况，怎么办，改接口呗，前后台都改，劳民伤财无用功。")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("不返回任何数据，没有考虑失败场景，容易返工")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/update"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"出现和业务无关的输入参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现和业务无关的输入参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 出现和业务无关的输入参数")]),a("p",[t._v("如lang语言，当前用户信息 都不应该出现参数里面，应该从"),a("strong",[t._v("当前会话")]),t._v("里面获取。后面讲ThreadLocal会说到怎么样去掉。除了代码可读性不好问题外，尤其是参数出现当前用户信息的，这是个严重问题。")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("（当前用户删除数据）参数出现lang和userid，尤其是userid，大忌")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("delete")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String userId"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"出现复杂的参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现复杂的参数","aria-hidden":"true"}},[t._v("#")]),t._v(" 出现复杂的参数")]),a("p",[t._v("一般情况下，不允许出现例如json字符串这样的参数，这种参数可读性极差。应该定义对应的bean。")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("参数出现json格式，可读性不好，代码也难看")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/update"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("update")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String jsonStr"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{attrs:{id:"没有返回应该返回的数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有返回应该返回的数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 没有返回应该返回的数据")]),a("p",[t._v("例如，新增接口一般情况下应该返回新对象的id标识，这需要编程经验。新手定义的时候因为前台没有用就不返回数据或者只返回true，这都是不恰当的。别人要不要是别人的事情，你该返回的还是应该返回。")]),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("错误范例")]),a("p",[t._v("约定俗成，新建应该返回新对象的信息(对象或者ID)，只返回boolean容易导致返工")])]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"/add"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//xxx")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" configService"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("add")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("当时在知乎上发帖的时候，有人认为返回给前台的信息应该越少越好，避免出现信息泄露问题。这个觉悟是对的，但对象ID并不是敏感信息，这里返回没有问题。")])]),a("p",[t._v("很多人看了我的这篇文章 "),a("a",{attrs:{href:"https://www.imooc.com/article/27569",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序员你为什么这么累？")]),t._v("，都觉得里面的技术也很简单，没有什么特别的地方，但是，实现这个代码框架之前，就是要你的接口的统一的格式ResultBean，aop才好做。有些人误解了，我那篇文章说的都不是技术，重点说的是编码习惯工作方式，如果你重点还是放在什么技术上，那我也帮不了你了。同样，如果我后面的关于习惯和规范的帖子，你重点还是放在技术上的话，那是丢了西瓜捡芝麻，有很多贴还是没有任何技术点呢。")]),a("p",[t._v("附上ResultBean，没有任何技术含量：(使用了lombok)")]),a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Data")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ResultBean")]),a("span",{attrs:{class:"token generics function"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("T"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Serializable")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" serialVersionUID "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("L"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" SUCCESS "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" FAIL "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" NO_PERMISSION "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" String msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"success"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" code "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" SUCCESS"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" T data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ResultBean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ResultBean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("T data"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("ResultBean")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Throwable e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("super")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("toString")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" FAIL "),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[a("strong",[t._v("统一的接口规范，能帮忙规避很多无用的返工修改和可能出现的问题。能使代码可读性更加好，利于进行aop和自动化测试这些额外工作。大家一定要重视。")])]),a("p",[t._v("下一篇讲controller的规范，还有用到ResultBean，敬请留意。觉得有用请点赞加关注")])])}],!1,null,null,null);s.default=o.exports}}]);