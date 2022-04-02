{
    // 这个就是一个代码块 也就是相当于拥有块级作用域
    // 块级作用域对var无效 对let const class有效
    // 对只支持ES6语法的浏览器时候，函数也生效
}

// 在作用域里 外面是无法访问作用域内部的 但是作用域内部可以访问外面
{
    let a = 10
    const b = 20
    class Person { }
    var aaa_ = 20
}

// console.log(a);//无法访问块级作用域内部的变量
// console.log(b);//无法访问块级作用域内部的变量
// var p = new Person//无法访问块级作用域内部的变量
// console.log(p);//无法访问块级作用域内部的变量

//  if switch for 这些也都是块级作用域

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100 * i);
}
console.log(window);
//因为var不受块级作用域影响 所以他实际上是相当于在全局window对象上创建了一个变量i 
// 而不是在for内部创建的变量i 
// 所以这个for循环执行完成之后 然后来执行定时器时候 定时器里面要去访问i
// 此时定时器发现自己这个函数作用域里没有i 他就去上层作用域找 此时找到了for的作用域
// 但是此时for里用的是var定义的i 所以实际上for这个作用域里根本就没有i 
//  所以就继续去上层找 此时就找到了全局作用域 
// 然后恰巧全局作用域下有i 就是我们在for里用var定义的i 全局作用域下的i此时已经是100了 
// 所以这些每一个定时器 都要去经过这样一个过程 每次都要最终找到全局下的i 然后每次都是100




// var btns = document.getElementsByTagName("button")
// for (var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         console.log("第" + i + "个按钮被点击");
//     }
// }
// // 此时不管单击第几个按钮 他都是打印第5个按钮被单击

// for (var i = 0; i < btns.length; i++) {
//     (function (n) {
//         btns[i].onclick = function () {
//             console.log("第" + n + "个按钮被点击");
//         }
//     })(i)
// }

