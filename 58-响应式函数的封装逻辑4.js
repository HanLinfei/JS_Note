//依赖收集的管理

const obj = {
    name: 'hlf',
    age: 20,
    address: '武汉'
}

const info = {
    name: 'feizi',
    age: '22'
}


//这个整体思路：
// 我们在WeakMap对象里面用来存放map 而这个map实际上其实就是一个个的对象 每一个对象都有一个自己的map对象
// 然后在我们的map里面 还有一个个的被管理的属性 这个被管理的属性实际上就是当前被修改的属性 
const targetMap = new WeakMap()
function getDepend(target, key) {
    //根据target对象获取map的过程
    //这个map实际上就是一个被管理的对象，每次都来获取一下传过来的对象实际上就是来判断一下
    //能不能获取的到 如果可以获取得到 这说明这个对象就是原有的 意思就是之前已经传过的对象 
    //所以我们就没必要在给他重新创建一个map了 
    //所以相反 如果获取不到 就说明现在传过来的对象是新对象 我们就需要给他一个专属的管理的map
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }

    //根据key获取depend对象
    //这个也是一个道理 我们首先获取一下传过来的key 如果这个key有获取到 就说明他在之前已经存在自己的map对象了
    //所以我们就不需要再次来创建属于他的新的map对象 
    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}


const objProxy = new Proxy(obj, {
    get(target, key, receiver) {
        return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
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
objProxy.name = 'linfeizi'
infoProxy.name = 'hanlinfei'
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