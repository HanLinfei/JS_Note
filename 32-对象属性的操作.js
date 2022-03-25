var info = {
    name: 'hlf',
    age: 20,
    eat: function () {
        console.log(this.name + '在吃东西');
    }
}
// 通过字面量直接创建的对象属性，他们每个属性对应的默认值都是为true


// Object.defineProperty(对象名,属性名,属性配置)

// 1. 数据属性描述符
Object.defineProperty(info, "length", {//属性描述符
    value: 18,//初始属性值 默认值undefined
    configurable: false,// 该属性不可删除 不可修改 默认值false
    enumerable: false,// 该属性不可枚举 默认值false
    writable: false //该属性是否可以被重新写入值 默认值false
})

// console.log(info);


// 2.存取属性描述符
// 场景：
// 1.隐藏某一个私有属性，不希望被外界使用和赋值
// 2.如果我们希望截获某一个属性它访问和设置值的过程时，也会使用存取属性描述符
var obj = {
    name: 'hlf',
    age: 20,
    _arress: '武汉市'
}

Object.defineProperty(obj, "address", {
    enumerable: true,
    configurable: true,
    // 私有属性一般是下划线开头，当我们想隐藏某一属性时候通过回调这个get方法来绑定属性名称
    // 当我们访问obj.address属性之后，他就会来回调get函数
    get: function () {
        get_count()
        return this._arress
    },
    // 更改伪装属性，当我们去更改伪装属性时候，他就会来回调这个函数
    set: function (value) {
        this._arress = value

    }
})
var count = 0;
console.log(obj.address);
console.log(obj.address);


function get_count() {
    count++
    console.log("address被访问了" + count + "次");
}



