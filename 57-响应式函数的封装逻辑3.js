//自动监听执行

const obj = {
    name: 'hlf',
    age: 20,
    address: '武汉'
}
console.log(`${obj.name}今年${obj.age}岁，他在${obj.address}上学`)
const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
        Reflect.set(target, key, newValue, receiver)
        depend.notify()
    }
})



function watchFn(fn) {
    depend.addDepend(fn)
}


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



const depend = new Depend()
watchFn(() => {
    console.log(`${objProxy.name}今年${objProxy.age}岁，他在${objProxy.address}上学`)
})

objProxy.age = 22
objProxy.address = '十堰市'
