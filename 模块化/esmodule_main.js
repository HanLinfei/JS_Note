// //1.导入方式1：普通导入
// import { name, age, foo, Person, aaa1 } from "./esmodule_A.js"

// //2.导入方式2：起别名
// import { name as Hname } from "./esmodule_A"

// //3.导入方式3：将导出的所有内容放到一个标识符中
// import * as results from "./esmodule_A"

// import { add, sub } from "./esmodule_A.js"

//4.默认导入
// import age from "./esmodule_A.js"
// console.log(age);
//import导入时候 需要去解析被导入的那个文件
//那么也就是说他是同步的 必须得等到他解析完成拿到结果之后才可以进行后续操作
//所以 现在就出现了一种异步导入解析文件的函数 import直接当做函数来使用
//这个函数返回的是一个Promise 所以我们直接可以调用then方法 等到他解析完文件拿到结果之后 就回来调用then方法
// import("./esmodule_B.js").then(res=>{
//  console.log(res)
// })

//import导入的变量是不可以进行修改的

