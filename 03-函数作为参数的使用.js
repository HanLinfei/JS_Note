// 函数作为另一个函数的参数
// function foo(fff) {
//     fff()
// }

// function bar() {
//     console.log("bar")
// }

// foo(bar) ==>  bar

//高阶函数：将另一个函数作为参数的函数，或者将另一个函数作为返回值的函数可以称作为高阶函数
// 此函数是将另一个函数作为参数，这个函数可以当做为高阶函数
function calc(num1, num2, op) {
    console.log(op(num1, num2));
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}
// 将函数作为参数传进去
calc(20, 30, sub);

