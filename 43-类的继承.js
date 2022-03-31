class Person {
    //父类的一些属性 子类可以直接继承过去
    constructor(name, age, sex) {
        this.name = name
        this.age = age
        this.sex = sex
    }
    //父类方法 可以直接写 子类也可以直接调用
    running() {
        console.log(this.name + " running");
    }
    Personmethods() {
        console.log("Personmethods1");
    }
}

class Student extends Person {
    // 如果在有使用extends继承的函数类中 则必须使用spuer来调用一次 否则会报错
    constructor(name, age, sex, store) {
        //使用super把参数交给父类处理
        super(name, age, sex)
        this.store = store
    }
    Personmethods() {
        //super在这里起到复用父类中方法的逻辑作用
        super.Personmethods()
        console.log("Personmethods2");
    }
}

var s1 = new Student('hlf', 20, '男', 89)
s1.running()
s1.Personmethods()