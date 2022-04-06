//Reflect是一个对象，这个对象下面有许多对 对象的操作方法
//Reflect是为了解决早期由于对象操作方法的不标准 然后现在出现了一个专门用于操作对象的 一个对象


const obj = {
    _name: 'hlf',
    age: 20,
    address: '十堰市',
    get name() {
        return this._name
    },
    set name(newValue) {
        this._name = newValue
    }
}


const objProxy = new Proxy(obj, {
    //因为Proxy在设计上就是为了不直接操作实例对象的，所以我们为了达到这样的要求
    //现在就直接通过Reflect对象下面的方法进行操作代理对象
    get: function (targetObj, key, receiver) {
        //这个receiver其实是代理对象
        console.log(`${key}被访问了`, targetObj)
        //这个实际上就是没有直接对代理对象进行操作
        //而是中间通过了Reflect对象下面的一个方法对代理对象进行操作
        //当通过get方法传过去了一个receiver时候，他实际上是会被作为实例对象中get和set方法的this
        return Reflect.get(targetObj, key, receiver)
    },

    set: function (targetObj, key, newValue, receiver) {
        if (key in targetObj) {
            console.log(`对象的${key}被设置了`, targetObj);
            Reflect.set(targetObj, key, newValue, receiver)
        } else {
            console.log(`对象新增了一个属性${key}`, targetObj);
            Reflect.set(targetObj, key, newValue, receiver)
        }
    },
})

console.log(objProxy.name);


