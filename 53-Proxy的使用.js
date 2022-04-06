const obj = {
    name: 'hlf',
    age: 20,
    address: '十堰市'
}


//基本使用
// Proxy是一个类 我们会通过Proxy来创建一个代理对象 然后对这个代理对象进行操作
//这个类第一个参数传一个我们需要被代理的对象，第二个参数是一个对象，里面是捕获器属性（13个捕获器）

const objProxy = new Proxy(obj, {
    //这个是我当我们去获取对象的一个属性时，这个代理对象会来做一个回调函数
    //第一个参数是当前被代理的对象，第二个参数是被访问的属性的key
    get: function (targetObj, key, receiver) {
        console.log(`对象的${key}被设置了`, targetObj);
        return targetObj[key]
    },

    //这个是当我们修改对象的一个属性时，这个代理对象会来做的一个回调函数
    //第一个参数是被代理的对象，第二个参数是被修改的属性的key，第三个参数是修改的值
    set: function (targetObj, key, newValue, receiver) {

        if (key in targetObj) {
            console.log(`对象的${key}被设置了`, targetObj);
            targetObj[key] = newValue
        } else {
            console.log(`对象新增了一个属性${key}`, targetObj);
            targetObj[key] = newValue
        }
    },

    //当对象的一个属性被删除时
    deleteProperty: function (targetObj, key) {
        console.log(`对象的${key}被删除了`, targetObj);
        delete targetObj[key]
    }
})

console.log(objProxy.name);
objProxy.name = 'feizi'//我们操作的代理对象 他最后实际上会把真实对象也做操作
console.log(obj.name);
delete objProxy.address
objProxy.sex = '男'
console.log(objProxy);

