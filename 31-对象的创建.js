// 描述一个人
// 1.通过new Object()创建
var obj = new Object()
obj.name = "hlf"
obj.length = 18
obj.running = function () {
    console.log(this.name + '在运动');
}


// 2.通过字面量形式创建
var info = {
    name: 'hlf',
    length: 18,
    age: 20,
    eat: function () {
        console.log(this.name + '在吃东西');
    }
}

