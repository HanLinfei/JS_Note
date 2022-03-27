function foo() {

}
// 1.此时内存里创建了一个foo函数对象
// 2.函数对象中存放着PanentScope(父级作用域)、[[prototype]]属性、代码体
// foo:{
// PanentScope:Parent
// [[prototype]]:foo函数原型对象
// Code.....
// }
//
//  此时的foo函数原型对象
//  foo:{
//      constructor:foo函数
// }
//
// 
/*
假如我现在通过prototype.name = "hlf" 这样添加
此时就相当于是在foo函数的原型对象中又添加了一个属性
    foo:{
        constructor:foo函数,
        name:'hlf'
    }

假如我们此时又通过创建一个新的对象来给prototype来添加属性
foo.prototype:{
    construtor:foo     因为正常规范的原型对象中需要有一个construtor属性 
    而这个新创建的里面没有这个属性 所以我们手动添加 并且将它指向foo函数
    但是还有一个不对的地方就是，初始默认的那个函数原型中国construtor属性的枚举是false
    所以我们也需要更改成一样
    可以通过Object.defineProperty属性进行精准控制
    name:'hlf',
    age:18
}

此时就是相当于在内存中重新创建了一个新的对象 所以此时foo对象里的prototype属性
就不指向先前的第一次的函数原型对象了
而是指向这个新的对象
*/