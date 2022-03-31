var obj = {
    name: 'hlf'
}
//此时是通过字面量创建的对象 字面量创建对象那就相当于 是通过 new Object()来创建的 而Object是一个函数
// 所以Object他会产生一个属于自己的原型对象 而这个原型对象也就是所有构造函数的顶层原型对象 
console.log(obj.__proto__);//他打印的是顶层原型对象 他指向的原型对象就是 Object.prototype
console.log(obj.__proto__ === Object.prototype);//true 
//对象里面是有一个__proto__对象(隐式原型对象)

function foo() {

}
// foo函数是一个函数，所以他就会有一个显示原型对象:foo.prototype
// foo.prototype来自那里？
// 一旦你创建了一个函数，JS引擎内部就会创建一个新的对象：foo.prototype = {constructor:foo }

// 函数本身也是一个对象，所以他也还会有一个隐式原型对象：foo.__proto__
// foo.__proto__来自哪里
// 函数创建的时候 实际上是通过 new Function() 所以实际上是把 Function.ptototype给到了foo.__proto__
//Function.prototype = {constructor:Function} 