(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{80:function(t,s,n){"use strict";n.r(s);var a=n(0),o=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"导读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导读","aria-hidden":"true"}},[t._v("#")]),t._v(" 导读")]),n("p",[t._v("大家一提到程序员，首先想到的是以下标签：苦逼，加班，熬夜通宵。但是，但凡工作了的同学都知道，其实大部分程序员做的事情都很简单，代码CRUD可以说毫无技术含量，就算什么不懂依葫芦画瓢很多功能也能勉强做出来，做个多线程并发就算高科技了，程序员这行的门槛其实还是比较低的。（这里说的是大部分，有些牛逼的，写算法、jvm等的请自动跳过）")]),n("p",[n("strong",[t._v("是不是觉得很矛盾，一方面工作不复杂，一方面却累成狗")]),t._v("。有没有想过问题出在哪里？有没有想过时间都花在哪里呢？")]),n("p",[t._v("对于我个人来说，编码还是一个相对轻松的活（我是负责公司it系统的，没有太多技术含量，数据量大，但并发量不大）。从工作到现在，我加班编码的时间还是比较少的，我到现在为止每天还会编码，很少因为编码工作加班。")]),n("p",[t._v("大家写的东西都是一些crud的业务逻辑代码，为什么大家这么累，加班加点天天都是奋斗者？我从自己带的项目中观察中发现，大部分人的大部分时间都是在 定位问题 + 改代码，真正开发的时间并不多。定位问题包括开发转测试的时候发现问题和上线后发现问题，改代码的包括改bug和因为需求变动修改代码（后面专门开一贴说如何应对需求改动）。")]),n("p",[t._v("所以说，simple is not easy。很多人就是因为觉得简单，所以功能完成自己测试ok了就算了，没有思考有没有更加好的方式。归根到底是因为编码习惯太糟糕，写的代码太烂，导致无法定位频繁修改频繁出问题。（后面我会详细讲一些我看到的大部分的编码问题。）")]),n("p",[t._v("其实，"),n("strong",[t._v("对于个人来说，技术很重要，但是对于工作来说，编码的习惯比技术更加主要")]),t._v("。工作中你面试的大部分技术都不需要用到的。工作中，因为你的编码习惯不好，写的代码质量差，代码冗余重复多，很多无关的代码和业务代码搅在一起，导致了你疲于奔命应付各种问题。")]),n("p",[t._v("所以我作为SE，不管接手任何项目组，第一步就是制定代码框架，制定项目组的开发规范，把代码量减下去。事实上证明，这一步之后，大家的代码量能下去最少1/3，后台的问题数下降比较明显，大家的加班会比之前少。")]),n("p",[t._v("给大家一个直观的例子。下面是controller的一个删除数据的接口，我来之前大家写的这个样子的（其实一开始比这个还差很多），功能很简单，输入一个对象id执行删除返回是否删除成功。大家有没有觉得有什么问题？")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" Map"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Map"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" data "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("HashMap")]),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("boolean")]),t._v(" result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 语言（中英文提示不同）")]),t._v("\n    Locale local "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"zh"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("equalsIgnoreCase")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" Locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CHINESE "),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" Locale"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ENGLISH"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    result "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" configService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" local"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"code"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("0")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("CheckException")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 参数等校验出错，这类异常属于已知异常，不需要打印堆栈，返回码为-1")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"code"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("-")]),n("span",{attrs:{class:"token number"}},[t._v("1")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"msg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("getMessage")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// 其他未知异常，需要打印堆栈分析用，返回码为99")]),t._v("\n    log"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("error")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"code"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("99")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"msg"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("toString")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  data"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("put")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"result"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("其实上面的代码也没有大问题。而我接手之后，我会开发自己的代码框架，最后制定代码框架交付的代码如下（这是controller的部分）:")]),n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{attrs:{class:"token annotation punctuation"}},[t._v("@PostMapping")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v('"/delete"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ResultBean"),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token keyword"}},[t._v("long")]),t._v(" id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ResultBean")]),n("span",{attrs:{class:"token generics function"}},[n("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Boolean"),n("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("configService"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("delete")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("用到的技术就是"),n("strong",[t._v("AOP")]),t._v("，也不是什么高深技术。怎么样？代码量就一行，特性一个都没有丢。这就是我们项目组现在的controller的样子！（如果恰好有我带过的项目组的人，看到ResultBean<>应该很熟悉应该知道我是谁了）")]),n("p",[t._v("所以说"),n("strong",[t._v("技术无所谓高低，看你怎么样用")]),t._v("。上面的代码简单说一下问题，第一，lang和业务没有什么关系，我后面的代码框架去掉了（不是说我后面的代码没有这个功能，是把他隐藏起来对开发人员透明了，使用的技术就是ThreadLocal）。第二，前面那个代码，实际上干活的就只有一行，其他都和业务代码没有一毛钱关系，我的代码框架里面完全看不到了。")]),n("p",[t._v("使用的技术真的很简单，但是编码效果非常好，因为大家不要因为使用的技术初级就觉得不重要！！使用这套框架后，大家再也不需要大部分时间都写一些无聊的代码，可以有更加多时间学习其他技术。说实话，在我项目组的开发人员都是比较幸运的，觉得能学到东西，不是像其他项目组，写了几年都是一样的CRUD代码，虽然我比较严厉，但是还是愿意待在我项目组，毕竟加班比其他项目组少啊。")]),n("p",[t._v("这就是我说的工作中，编码习惯（或者说编码风格）比技术更加重要。我工作了也有很长时间了，我觉得我个人价值最大的地方就是这些，技术上其实我懂的也和大家差不多，但编码上我还是觉得可以超过大部分人的。后面我会把我们这些业务系统中大家编码的问题一个一个写出来，并把我的解决办法分享出来。初定议题如下：")]),n("ol",[n("li",[n("a",{attrs:{href:"https://www.imooc.com/article/27664",target:"_blank",rel:"noopener noreferrer"}},[t._v("接口定义规范")])]),n("li",[n("a",{attrs:{href:"http://www.imooc.com/article/27765",target:"_blank",rel:"noopener noreferrer"}},[t._v("controller规范")])]),n("li",[t._v("日志规范")]),n("li",[t._v("异常处理规范")]),n("li",[t._v("国际化j和参数校验规范")]),n("li",[t._v("工具类规范")]),n("li",[t._v("函数编写建议")]),n("li",[t._v("配置建议")])]),n("p",[t._v("这些规范不是网上的哪些编程规范，说实话哪些又长又繁琐，实践中证明很难落地，我这里的规范都比较少，一针见血，你看了便知。"),n("strong",[t._v("敬请期待！")])]),n("p",[n("strong",[t._v("=======GITHUB地址=========")])]),n("p",[t._v("所有的代码细节都在已经上了github了，地址 "),n("a",{attrs:{href:"https://github.com/xwjie/PLMCodeTemplate",target:"_blank",rel:"noopener noreferrer"}},[t._v("xwjie/PLMCodeTemplate")]),t._v("，欢迎加星。有问题欢迎提出。")])])}],!1,null,null,null);s.default=o.exports}}]);