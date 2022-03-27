function inheritPrototype(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype)
    Object.defineProperty(Child.prototype, "constructor", {
        enumerable: false,
        writable: true,
        configurable: true,
        value: Child
    })
}

function Person(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
}

Person.prototype.running = function () {
    console.log(this.name + '在跑步');
}
function Student(name, age, sex, score) {
    Person.call(this, name, age, sex)
    this.score = score
}

inheritPrototype(Student, Person)

var student1 = new Student("hlf", 20, "男", 99)
student1.running()
console.log(student1);
console.log(student1.__proto__);