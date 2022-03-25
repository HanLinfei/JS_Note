var obj = {
    _sex: '男',
    // 这个写法是相当于可枚举和可配置都是为true
    set age(value) {
        this._sex = value
    },
    get age() {

    }
}
// 定义多个属性描述
Object.defineProperties(obj, {
    name: {
        value: 'hlf',//初始属性值 默认值undefined
        configurable: true,// 该属性不可删除 不可修改 默认值false
        enumerable: true,// 该属性不可枚举 默认值false
        writable: true //该属性是否可以被重新写入值 默认值false
    },
    // sex: {
    //     configurable: true,
    //     enumerable: false,
    //     get: function () {

    //     },
    //     set: function (value) {
    //         this._sex = value
    //     }
    // }
})
obj.age = '女'
console.log(obj._sex);