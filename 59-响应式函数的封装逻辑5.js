//正确收集依赖
// 在前面 我们每次收集的依赖实际上是都被放入了一个depend对象中
//我们现在想做的是 将每个属性收集到自己专属的depend中

const targetMap = new WeakMap()
function getDepend(target, key) {
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}


class Depend {
    constructor() {
        //这里使用Set数据结构是为了防止 他每次收集依赖的时候多次来添加
        //然后把我们响应式的整个函数块一起添加到里面 这样就导致了重复 
        //然后每次来执行这个里面的函数时候 就会导致重复执行
        this.reactiveFns = new Set()
    }
    addDepend(reactiveFn) {
        if (reactiveFn) {
            this.reactiveFns.add(reactiveFn)
        }
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn()
        })
    }
}

function reactive(obj) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            //根据对应的target和key获取对应的depend
            const depend = getDepend(target, key)
            depend.addDepend(activeReactiveFn)
            return Reflect.get(target, key, receiver)
        },
        set(target, key, newValue, receiver) {
            Reflect.set(target, key, newValue, receiver)
            const depend = getDepend(target, key)
            depend.notify()
        }
    })
}

let activeReactiveFn = null
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
}


const obj = {
    name: 'hlf',
    age: 20,
    address: '武汉'
}

const info = {
    name: 'feizi',
    age: '22'
}


const objProxy = reactive(obj)
const infoProxy = reactive({
    name: 'hanlinfei'
})
watchFn(() => {
    console.log(objProxy.name + '++++++++');
    console.log(objProxy.name + '--------');
})

watchFn(() => {
    console.log(infoProxy.name + '1111111111');
})

objProxy.name = 'feizi'
infoProxy.name = "hehehe"










