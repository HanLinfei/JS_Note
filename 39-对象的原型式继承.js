// 原型式继承：是指用一个新的对象来继承我们想要被继承的原型


var info = {
    name: 'hlf',
    age: 20
}

var new_info = {

}
// 现在我们想要info作为new_info的原型

// 1.
function createObject(obj) {
    var new_obj = {}
    Object.setPrototypeOf(new_obj, obj)//这个方法是把obj作为nwe_obj的原型
    return new_obj
}
// 这个函数是外面传进来一个函数，传进来的这个函数将作为一个新函数的原型 最后将这个新函数返回出去
console.log(new_info.__proto__);
var new_info = createObject(info)
console.log(new_info.__proto__);


// 手动实现
// 2.
function new_createObject(obj) {
    function fn() { }
    fn.prototype = obj
    // console.log(fn.prototype);
    // 新创建一个函数，将这个函数的原型更改成info 
    // 然后此时函数的原型已经是info了
    var new_obj = new fn()
    // 我们就通过new 来调用fn 使之创建一个新的对象
    // 因为上面已经将fn函数的原型更改了 所以这个新的对象原型也是更改过后的
    return new_obj
}

var new_info1 = new_createObject(info)
console.log(new_info1.__proto__);


// ES6新方法
var new_info2 = Object.create(info)
console.log(new_info2.__proto__);