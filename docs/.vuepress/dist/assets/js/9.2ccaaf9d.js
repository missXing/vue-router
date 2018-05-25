(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{243:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),a("p",[t._v("你可以看看这个"),a("a",{attrs:{href:"https://jsfiddle.net/yyx990803/4xfa2f19/",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线例子"),a("OutboundLink")],1),t._v("。")]),t._m(6),t._m(7),a("p",[t._v("除了 "),a("code",[t._v("$route.params")]),t._v(" 外，"),a("code",[t._v("$route")]),t._v(" 对象还提供了其它有用的信息，例如，"),a("code",[t._v("$route.query")]),t._v(" (如果 URL 中有查询参数)、"),a("code",[t._v("$route.hash")]),t._v(" 等等。你可以查看 "),a("router-link",{attrs:{to:"../../api/route-object.html"}},[t._v("API 文档")]),t._v(" 的详细说明。")],1),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("p",[a("code",[t._v("vue-router")]),t._v(" 使用 "),a("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp",target:"_blank",rel:"noopener noreferrer"}},[t._v("path-to-regexp"),a("OutboundLink")],1),t._v(" 作为路径匹配引擎，所以支持很多高级的匹配模式，例如：可选的动态路径参数、匹配零个或多个、一个或多个，甚至是自定义正则匹配。查看它的 "),a("a",{attrs:{href:"https://github.com/pillarjs/path-to-regexp#parameters",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v(" 学习高阶的路径匹配，还有 "),a("a",{attrs:{href:"https://github.com/vuejs/vue-router/blob/next/examples/route-matching/app.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个例子 "),a("OutboundLink")],1),t._v(" 展示 "),a("code",[t._v("vue-router")]),t._v(" 怎么使用这类匹配。")]),t._m(15),a("p",[t._v("有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"动态路由匹配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态路由匹配","aria-hidden":"true"}},[this._v("#")]),this._v(" 动态路由匹配")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 "),s("code",[this._v("User")]),this._v(" 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在  "),s("code",[this._v("vue-router")]),this._v(" 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>User</div>'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// 动态路径参数 以冒号开头")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" User "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("现在呢，像 "),s("code",[this._v("/user/foo")]),this._v(" 和 "),s("code",[this._v("/user/bar")]),this._v(" 都将映射到相同的路由。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一个“路径参数”使用冒号 "),s("code",[this._v(":")]),this._v(" 标记。当匹配到一个路由时，参数值会被设置到\n"),s("code",[this._v("this.$route.params")]),this._v("，可以在每个组件内使用。于是，我们可以更新 "),s("code",[this._v("User")]),this._v(" 的模板，输出当前用户的 ID：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'<div>User {{ $route.params.id }}</div>'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以在一个路由中设置多段“路径参数”，对应的值都会设置到 "),s("code",[this._v("$route.params")]),this._v(" 中。例如：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("模式")]),a("th",[t._v("匹配路径")]),a("th",[t._v("$route.params")])])]),a("tbody",[a("tr",[a("td",[t._v("/user/:username")]),a("td",[t._v("/user/evan")]),a("td",[a("code",[t._v("{ username: 'evan' }")])])]),a("tr",[a("td",[t._v("/user/:username/post/:post_id")]),a("td",[t._v("/user/evan/post/123")]),a("td",[a("code",[t._v("{ username: 'evan', post_id: 123 }")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"响应路由参数的变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应路由参数的变化","aria-hidden":"true"}},[this._v("#")]),this._v(" 响应路由参数的变化")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("提醒一下，当使用路由参数时，例如从 "),a("code",[t._v("/user/foo")]),t._v(" 导航到 "),a("code",[t._v("/user/bar")]),t._v("，"),a("strong",[t._v("原来的组件实例会被复用")]),t._v("。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。"),a("strong",[t._v("不过，这也意味着组件的生命周期钩子不会再被调用")]),t._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) "),s("code",[this._v("$route")]),this._v(" 对象：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'...'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v("'$route'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token comment"}},[t._v("// 对路由变化作出响应...")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("或者使用 2.2 中引入的 "),s("code",[this._v("beforeRouteUpdate")]),this._v(" 守卫：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'...'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),a("span",{attrs:{class:"token comment"}},[t._v("// don't forget to call next()")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"高级匹配模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高级匹配模式","aria-hidden":"true"}},[this._v("#")]),this._v(" 高级匹配模式")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"匹配优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#匹配优先级","aria-hidden":"true"}},[this._v("#")]),this._v(" 匹配优先级")])}],!1,null,null,null);s.default=e.exports}}]);