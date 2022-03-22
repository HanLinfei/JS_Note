
// 异步任务分为：宏任务和微任务
/*
宏任务：

    script(整体代码)
    setTimeout
    setInterval
    I/O
    UI交互事件
    postMessage
    MessageChannel
    setImmediate(Node.js 环境)

微任务：
    Promise.then
    Object.observe
    MutationObserver
    process.nextTick(Node.js 环境)

*/

console.log("同步")
setTimeout(() => {
    console.log("异步宏任务")
})
Promise.resolve().then(() => {
    console.log("异步微任务")
})
console.log("同步")

/*
先执行同步代码
遇到异步宏任务时候则将异步宏任务放入宏任务队列中
遇到异步微任务的时候则将异步微任务放入微任务列表中
当所有的同步代码执行完毕后
在将异步微任务从列表中调入主线程执行
异步微任务执行完毕之后再将异步宏任务从队列中调入主线程执行
一直循环到素有任务执行完毕

ps:微任务执行先于页面渲染的
*/
