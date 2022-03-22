// 我们通过new关键字调用一个函数时(构造器)，这个时候this是在调用这个构造器时创建出来的
// this = 创建出来的对象
// 这个绑定过程就是new 绑定

function Preson(name, age) {
    this.name = name
    this.age = age
    // console.log(this);
}

obj = new Preson("hlf", 20)
console.log(obj.name)
console.log(obj.age);