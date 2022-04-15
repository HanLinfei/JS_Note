//await关键字后面一般是一个表达式
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(11111)
            reject("err Message!")
        }, 2000);
    })
}

async function foo() {
    //await 执行的表达式是有返回值的 他的返回值就是我们Promise中的执行结果
    //await会等到后面表达式有了结果之后才会继续往后执行
    const res = await getData()

}

foo().catch(err => {
    console.log(err);
})


//如果内部await后面的 Promise状态是reject 那么他会作为整个异步函数的返回值来执行catch
