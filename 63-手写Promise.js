//保存状态 因为我们的Promise对象中的resolve方法和reject方法只能执行一个 所以保存状态来判定执行方法
const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FINALLY = 'finally'
const PROMISE_STATUS_REJECT = 'reject'
//创建一个Promise的类 然后调用时候返回一个Promise对象
class Promise_ {
    //调用这个类的时候直接执行这个函数
    constructor(executor) {//我们创建这个Promise对象时候 要求传入一个函数
        this.status = PROMISE_STATUS_PENDING
        this.value = undefined
        this.reason = undefined
        this.onFulfilledcallbacks = []
        this.onRejectedcallbacks = []
        //此时我们在外面调用这个函数时候，要求传一个res

        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                //这里使用一个异步任务是因为：
                //执行顺序上 我们必须执行完毕了then方法之后 才会产生一个函数 
                //而我们这个顺序是大于then方法的 所以我们先给他进行一个异步任务进行延时
                //让then方法这个同步任务先执行了 产生了函数之后 最后再来执行他
                queueMicrotask(() => {
                    //可以防止把这两个微任务都加入进去，这两个在实际中只能存在一个
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_FINALLY
                    this.value = value
                    this.onFulfilledcallbacks.forEach((callbackFn) => {
                        callbackFn(this.value)
                    })
                })

            }
        }
        //此时我们在外面调用这个函数的时候，要求传一个err
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDING) return
                    this.status = PROMISE_STATUS_REJECT
                    this.reason = reason
                    this.onRejectedcallbacks.forEach((callbackFn) => {
                        callbackFn(this.reason)
                    })
                })

            }
        }
        try {
            executor(resolve, reject)//直接调用我们传入的函数 
        } catch (err) {
            reject(err)
        }
        //然后把我们的对应的resolve函数和reject函数传下去执行
    }
    then(onFulfilled, onRejected) {
        //1.如果then在调用时候，状态已经确定下来了
        //这里的整体思路大概就是 我们使用一个异步任务来最后执行
        //因为在没有异步任务真正执行之前 我们的状态永远都是 pending
        //这就意味着 我们永远不会去确定状态 永远不会执行到状态函数(resolve,reject)
        //直到我们的链式调用方法then 全部执行完毕 
        //这也就是意味着我们then中的状态都被按顺序加入到数组里 然后依次按顺序执行
        return new Promise_((resolve, reject) => {
            if (this.status === PROMISE_STATUS_FINALLY && onFulfilled) {
                try {
                    const value = onFulfilled(this.value)
                    resolve(value)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === PROMISE_STATUS_REJECT && onRejected) {
                const reason = onRejected(this.reason)
                try {
                    resolve(reason)
                } catch (err) {
                    reject(err)
                }
            }
            if (this.status === PROMISE_STATUS_PENDING) {
                this.onFulfilledcallbacks.push(() => {
                    try {
                        const value = onFulfilled(this.value)
                        resolve(value)
                    } catch (err) {
                        reject(err)
                    }

                })
                this.onRejectedcallbacks.push(() => {
                    try {
                        const reason = onRejected(this.reason)
                        resolve(reason)
                    } catch (err) {
                        reject(err)
                    }
                })
            }
            //因为别人可能调用多个then方法 所以我们最好是将这些回调函数放进数组中
            //将成功的回调函数和失败的回调函数都放进数组中
        })
    }
}

const promise = new Promise_((resolve, reject) => {
    // resolve("hahhaha")
    reject("erro message")
})

promise.then(res => {
    console.log("p11111", res);
    return "aaaa"
}, err => {
    console.log("p11111", err);
    return "aaaa"
}).then(res => {
    console.log("p22222", res);
}, err => {
    console.log("p22222", err);
})



//  执行顺序：
/*
编译阶段： 
1.创建三个状态的变量
2.创建Promise变量 变量保存着Promise对象 此时对象中保存着他的父级作用域 他的顶层原型Function 代码块（此时都是字符）
开始执行：
1.给三个状态变量进行赋值
2.new关键字调用了Promise函数 此时开始正式执行Promise函数
    编译阶段：
    2.1  创建自己的函数对象
    2.2  开始一一在函数对象里创建各种变量 status... resolve... resolve还有后面几个函数都是创建变量 变量存着函数对象的地址....
    开始执行：
    执行executor函数 开始编译这个函数 .... 开始执行这个函数....
    而在这一步里面 我们就直接执行了resolve 或者是 reject 而这两个函数里面的还有两个回调函数 Fulfilled Rejected 此时是空的
    为空的原因是因为 只有调用了then方法时候 他们现在才被赋值了函数对象 而then方法是在最后调用的 所以我们需要让then方法优先执行与他
    所以给他加入了一个异步任务 让他最后执行 
    这样我们整个executor函数就执行完了 此时来到了then方法这里 就给刚才两个函数进行了赋值 至此 同步任务全部结束 开始回去执行异步任务...




*/
