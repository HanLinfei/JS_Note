//依赖收集的管理

const obj = {
    name: 'hlf',
    age: 20,
    address: '武汉'
}


const targetMap = new WeakMap()
function getDepend(target, key) {
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
        console.log(targetMap);
    }
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    console.log(targetMap);
    return depend
}

const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
        console.log('被设置了');
        Reflect.set(target, key, newValue, receiver)
        getDepend(target, key)
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

//我们发现 当数据我们发生变化了之后 他就会去执行notify方法 这时候就会产生一个问题：会把所有被监听的代码块
//都执行一遍，很显然不符合逻辑，我们只需要把被改变数据的代码块响应式的执行一遍 而不是所有的 所以我们需要进一步区分

//我们将每一个属性都对应一个depend 这样的话我们每次每个属性发生变化的时候就只会去找自己的depend
//这样也就不会执行到其他人的depend中notify函数了
//我们可以采取map数据结构
//
//const agemap = new Map()
//agemap.set("age","agedepend")
//const addressmap = new Map()
//addressmap.set("address","addressmap")
//
//我们还可以将map在进行管理一层 这样找起来我们就可以确定找的就是那个正确的depend对象
// const targetmap = new Weakmap()
// targetmap.set(age,agemap)
// targetmap.set(address,addressmap)
// targetmap.get(age).get(age)