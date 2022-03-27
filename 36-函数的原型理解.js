/*
function fn(){

}
fn函数有两个原型对象：1.  fn对象的原型对象(隐式原型)fn.     2.fn函数本身的原型对象(显示原型)fn()
1.我们每个函数在编译的时候都会创建一个自己的函数对象，这个函数对象中有着这几个变量
    fn:{
        ParentScope(父级作用域)
        [[prototype]]属性:fn函数原型对象(显示原型)
        代码体
    }
2.当我们通过new关键字调用这个函数时候：
    他在函数内部创建了一个对象obj
    obj:{
        __proto__:{}
    }
    并且会把这个对象给到this  this = obj
    然后会接着把fn函数对象中的prototype属性给覆盖到这个被创建的对象中的__proto__属性
    obj.__proto__(隐式原型)   =   fn.prototype
    这时候他们的地址就都指向了最终的fn函数原型对象(显示原型)
    obj.__proto === fn.prototype
    所以就说明了最终在fn函数内部创建的对象 最终都是指向的是fn函数原型对象
3.执行代码体    
4.将这个当前的obj返回    
    


当我们在函数内部创建的obj对象在获取某一个属性值时候，他会现在自己的对象内找，找不到的时候，他便会去
原型中寻找，此时原型已经是fn函数原型对象了，所以他就会直接找到fn函数原型对象
*/


function fn(name) {
    this.name = name
}

var obj1 = new fn("hlf")
console.log(obj1);
fn.prototype.age = '20'
console.log(obj1.__proto__);
obj1.__proto__.sex = '男'
console.log(fn.prototype);
console.log(obj1);

// 从上面就可以看出，不管更改的是函数对象的原型属性 还是更改的是创建的obj对象的原型属性
// 他们都是改的同一个对象  也就是函数原型对象 
