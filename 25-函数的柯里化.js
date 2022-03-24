// 柯里化：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩余参数 这个过程就称之为柯里化

// 现有一个函数，他接收四个值
function foo(num1, num2, num3, num4) {
    console.log(num1, num2, num3, num4);
}
foo(12, 22, 32, 42)

// 现在将它柯里化

function bar(num1) {
    console.log(num1);
    return function (num2) {
        console.log(num2);
        return function (num3) {
            console.log(num3);
            return function (num4) {
                console.log(num4);
                console.log(num1, num2, num3, num4);
            }
        }
    }
}
bar(12)(22)(32)(42)