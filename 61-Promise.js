//Promise是一个类
//Promise创建时可以传参数
/*
第一个参数：传入一个函数，这个函数被称为executor，这个函数会被立即执行
这个函数还会默认有两个参数 一个resolve 一个reject
resolve在成功时候会被回调
reject在失败时候会进行回调
*/


function foo() {
    //当我们通过new来创建了Promise时候会传进来一个executor函数，这个函数会被立即执行
    //其中这个函数还有两个参数，这两个参数也是函数
    return new Promise((resolve, reject) => {
        //这个会被立即执行，当我们在里面调用这个函数的时候
        //他外面的then函数里的回调函数就会被执行
        //也就是意思是如果Promise对resolve进行了执行
        //那就说明了这次是成功的，那么就会去执行外面的Promise对象下面的then方法，对then内部函数进行回调
        //这个成功时候执行的resolve函数是可以传递参数的 这个参数就对应着传给了下面的then
        resolve("success Message")


        //那如果我们这里调用的是reject呢
        // reject()
        //那就说明了我们这次是失败的，那么Promise就会执行这个函数，
        //对应的他就会去执行外面的Promise对象下面的catch方法，然后会catch方法的函数参数进行回调
        //这个失败时候执行的reject函数是可以传递参数的 这个参数就对应着传给了下面的catch
    })
}


const fooPromis = foo()
//then方法中的回调函数会在Promise执行resolve函数时，被回调
fooPromis.then((res) => {
    console.log(res);
})
//catch方法中的回调函数会在Promise执行reject函数时，被回调
fooPromis.catch((err) => {
    console.log(err);
})



const promise_ = new Promise((resolve, reject) => {

})

promise_.then(() => {

})

promise_.catch(() => {

})
//上面的这个promise对象等价与下面这个 
//因为我们通过new Promise时候 实际上就是返回了一个Promise对象 所以这两种都是一个意思
new Promise((resolve, reject) => {

}).then(res => {

}, err => {

})

//Promise下面的方法
//Promise下面的这些方法都是在原型上面的
console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

//then方法是有返回值的
new Promise((resolve, reject) => {
    resolve()
}).then(() => {
    return "aaaa"//这个地方return是相当于内部又帮我们创建了一个新的Promise 
    //然后这个返回值将作为这个Promise的resolve 所以他就会来到下一个他的then方法位置 
    //这个就是Promise的链式调用 而可以链式调用的原因就是 他的内部会产生新的Promise
}).then(res => {
    console.log(res)
    return "bbbb"
}).then((res) => {
    console.log("res", res);
})

//假如then方法返回的是一个Promise
//那么他会把状态移交给这个新创建的Promise 由他来决定是成功还是失败
new Promise((resolve, reject) => {
    resolve()
}).then(res => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1111)
        }, 3000);
    })
}).then(res => {
    console.log('res', res);
}).catch(err => {
    console.log('失败');
})

//Promise的finally方法 这个方法是无论状态是否执行 他最后都回来执行
new Promise((resolve, reject) => {
    reject("err message")
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    setTimeout(() => {
        console.log("finally被执行了");
    }, 4000);
})

//Promise的类方法：all
//传入多个Promise 这个方法返回的也是一个Promise对象 
//这个方法会等到所有传入的Promise对象状态为finally时候来进行执行then方法
//如果中间获取这些Promise对象的状态时，有一个状态为reject，那么这个方法就会执行reject方法
const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11111)
    }, 1000);
})

const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(22222)
    }, 2000);
})

const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(33333)
    }, 3000);
})
//传入的是一个数组，数组中存放Promise对象，也可以传入其他的，传入其他的会直接获取resolve状态
//打印的时候结果也是按照数组传入的Promise对象的顺序
Promise.all([P1, P2, P3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// Promise.allSettled 方法和 all方法类似
// 只不过allsettled方法不判定状态 他最终是会必然执行的

// Promise.race 方法和all方法类似
//这个方法是只要有一个Promise状态已经确定 那么他就会结束
//他会把这个Promise的结果当做这个race方法的Promise的结果

// Promise.any 方法和race方法类似
// 这份方法是至少等到一个Promise对象状态为finally才会结束