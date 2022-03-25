var obj = {}
// 获取原型的两种方法
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));
// 我们每个对象的属性中都有一个 [[prototype]](原型)
// 这个原型是一个对象,并且这个是一个隐式原型

// 原型的作用

// 当我们需要获取对象中的一个属性时候，它会触发[[get]]操作
// 1.在当前对象中去查找对应属性，如果找到就直接使用
// 2.如果没有找到，那就会沿着它的原型中去查找[[prototype]]

// 我们还可以在这个对象的原型对象中添加属性
obj.__proto__.age = 20
console.log(obj.age);