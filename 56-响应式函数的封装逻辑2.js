//依赖的收集

// let reactiveFns = []
// function watchFns(fn) {
//     reactiveFns.push(fn)
// }

// watchFns(function () {
//     console.log("我是第一个需要被响应式的代码块");
// })

// watchFns(function () {
//     console.log("我是第二个需要被响应式的代码块");
// })

// console.log(reactiveFns);

// reactiveFns.forEach(fn => {
//     fn()
// })
//我们会发现 我们把需要被响应式的代码块放进了一个数组中，可是如果这个响应式的代码块中被响应式的变量比较多的话
//我们这样将它放在数组中进行管理的话就显得不太合理了 所以我们就需要对每一个响应式的代码块单独进行管理 所以我们就
//可以用一个类来 然后给每个代码块创建一个单独的对象

class Depend {
    constructor() {
        this.reactiveFns = []
    }
    addDepend(reactiveFn) {
        this.reactiveFns.push(reactiveFn)
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}
const depend1 = new Depend()
const depend2 = new Depend()
function watchFn(fn) {
    depend1.addDepend(fn)
}






