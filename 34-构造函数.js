// 如果一个函数只是直接调用的话，那么这个函数只是一个函数
// 如果一个函数是通过new关键字进行调用的话,那么这个函数就是一个构造函数
/*
当我们通过new关键字调用了一个函数时候，他的内部发生了这些变化
1.在内存中创建一个新的空对象   {}
2.这个对象内部的prototype(原型)属性会被赋值为该构造函数的prototype属性
3.构造函数内部的this会指向创建出来的新对象  this = {}
4.执行函数内部的代码 
5.如果构造函数没有返回非空对象，则返回创建出来的新对象 return this

*/

// 规范：构造函数的首字母一般都是大写
function Person(name, age, gender) {
    // 当前的这个this就是这个函数创建的那个对象 this = obj
    this.name = name
    this.age = age
    this.gender = gender
    this.running = function () {
        console.log(this.name + '在跑步');
    }
}

var p1 = new Person("hlf", 20, "男")
var p2 = new Person("hpy", 20, "女")
p1.running()
console.log(p1);

// 通过上面创建了一个构造函数 我们发现，当我们每次通过new一个函数时候，他都会在内部重新创建一个新的对象
// 然后其中这个新的对象里面他每次都会重新创建一个函数，可是这个函数他做的又都是相同的，然后每次都去创建
// 这个函数时候，就都会重新创建一个函数对象，这样就导致的很浪费，所以我们可以做以下优化

function Person_new(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}
Person_new.prototype.running = function () {
    console.log(this.name + '在跑步');
}
var p3 = new Person_new("hlf", 20, "男")
p3.running()
// 我们可以在这个原型对象中进行创建一个函数