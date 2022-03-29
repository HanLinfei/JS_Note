// 当我们从一个对象上获取属性时候，如果在当前对象中没有获取到他就会去它的原型上面寻找

// Object()也是一个函数 既然是一个函数 那么他也有自己的对象 所以就对应
/*
Object:{

}
*/
// 但是又因为每个函数都有一个prototype属性 这个属性指向原型对象 所以就对应
/*
Object:{
    prototype:原型对象
}

Object的原型对象[Object:null prototype]{}  :  {
    __proto__:null
}
这个Object原型对象中其实是有很多东西的，因为设置了不可枚举所以打印不出来，他不是一个空对象
他也是我们所有对象的最顶层的原型对象 一般沿着原型链来找 找到他就会停止寻找了

所有构造函数的顶层原型都是指向 Object()函数创建出的原型对象 所以所有的构造函数都是继承自Object()的
*/
console.log(Object.__proto__);