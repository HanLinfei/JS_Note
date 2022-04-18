//ESmodule是通过import来导入 export来导出
//使用ES module之后将自动使用严格模式(use strict)

//1.当我们通过在浏览器中引用JS文件时候，浏览器只会把这个JS文件当做一个普通的JS文件 会直接做一个执行
// 所以在里面如果遇到了 import这种引入 他是会报错的 所以我们在浏览器引入时候 还需要给他加一个类型
// type = "module"  <script src="main.js" type = "module"></script>
//也就是相当于把这个引入的文件当做一个模块来使用

