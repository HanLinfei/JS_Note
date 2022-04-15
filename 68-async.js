// async关键字用于声明一个异步函数
// async fn()
//1.异步函数的返回值：
//异步函数返回值一定是一个Promise
//这个异步函数里的return返回值将作为Promise的resolve来执行

//2.异步函数的异常：
//异步函数出现异常后不会中断代码的执行 
//异步函数的异常会被作为Promise的reject来执行
async function foo() {
    console.log('foo function start')
    throw new Error("erro Message!")
    console.log('foo function end');
    return "hahaha"
}

foo().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

console.log('后续代码');


