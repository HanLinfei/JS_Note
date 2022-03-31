class Person {
    //这个构造函数是固定的名字 当我们需要外面传参数时候 就需要在类里面定义一个构造函数 
    // 当我们通过new操作符 操作一个类的时候会调用这个构造函数
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    //在这个类里面直接定义函数就是相当于把这个函数放在了我们类的原型对象上面
    eating() {
        console.log(this.name + 'eating');
    }

    //类的静态方法(类方法)
    // 可以直接通过类名下面的方法进行访问
    static createPerson() {
        console.log("这个类方法被访问了");
    }

}

var p1 = new Person('hlf', 20)
console.log(p1);
Person.createPerson()
