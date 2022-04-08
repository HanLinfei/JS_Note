
const obj = {
    name: 'hlf',
    age: 20,
    address: '武汉'
}

const info = {
    name: 'feizi',
    age: '22'
}


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
    Object.keys(obj).forEach(key => {
        let value = obj[key]
        Object.defineProperty(obj, key, {
            get() {
                //收集依赖--------------------
                //创建专属每个对象属性的depend对象
                const depend = getDepend(obj, key)
                //在专属的depend对象中添加需要被监听的代码块
                depend.addDepend(activeReactiveFn)
                //收集依赖结束-------------------------------
                return value
            },
            set(newValue) {
                value = newValue
                const depend = getDepend(obj, key)
                depend.notify()
            }
        })
    })
    return obj
}



let activeReactiveFn = null
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
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










