var name = 'hlf'
var age = 20

var obj = {
    name: name,
    age: age,
    foo: function () {
        console.log(this);
    }
}

var obj1 = {
    // 属性的简写
    name,
    age,
    // 方法的简写
    foo() {
        console.log(this);
    },
    // 计算属性的简写
    [name + "hahahhaha"]: name
}

console.log(obj1);