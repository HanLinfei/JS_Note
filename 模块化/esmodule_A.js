// // 1.第一种导出方式 export 声明语句
// export const name = 'hlf'
// export const age = 20

// export function foo() {
//     console.log('直接导出foo函数');
// }

// //直接导出Person类
// export class Person {

// }


// //2.第二种方式 export 导出和声明分开

// const address = '武汉市'
// function bar() {
//     console.log('导出和声明分开');
// }

// //这个导出不是一个对象，不可以把它当做对象来使用，这是一个固定的语法
// export {
//     address,
//     bar
// }


// //3.第三种方式 第二种方式起别名
// //起了别名之后 就必须按着别名来导入
// const aaa = 12
// export {
//     aaa as aaa1,
// }


//4.第四种方式 导出其他模块的文件
// export { add, sub } from "./esmodule_B.js"

//5.通配符导出 全部导出
// export * from "./esmodule_B.js"


//6.默认导出
//当我们通过默认导出之后 那么导入的时候 就是默认导入的是我们这个导出的对象
//默认导出只能有一个
// const name = 'hlf'
// const age = 20
// export default age
// export default {
//     name,
//     age,
//     age as default
// }

// import age from ""