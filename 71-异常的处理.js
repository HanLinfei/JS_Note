// throw 可以抛出异常
//throw 抛出异常之后 后续的代码将不会继续执行
// function sum(...args) {
//     args.forEach(item => {
//         if (typeof item !== "number")
//             throw new Error("Types are not numbers")
//     })
//     return args.reduce((total, item) => {
//         return total += item
//     }, 0)
// }

// console.log(sum(10, 20, 30, "a"));

//上面是没有对异常进行处理 那么会直接中断执行
//现在我们可以对异常进行处理 使用tray catch
function error_(item) {
    if (typeof item !== "number")
        throw new Error("Types are not numbers")
}

function sum(...args) {
    args.forEach((item, index) => {
        //try内是一个代码块 监听这里面的代码块有没有抛出异常 如果有抛出异常 那么就来到catch
        //finalyy 是不管有没有异常 他都会来执行
        try {
            error_(item)
        } catch (err) {
            console.log("err:", err);
        } finally {
            if (index === args.length - 1)
                console.log('我是收尾工作');
        }
    })
    return args.reduce((total, item) => {
        return total += item
    }, 0)
}

console.log(sum(10, 20, 30, "a"));



