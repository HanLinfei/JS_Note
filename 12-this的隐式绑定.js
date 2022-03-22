/*
隐式绑定： object.fn()
object对象会被JS引擎绑定到fn函数中的this里面
function foo() {
    console.log(this)
}

var obj = {
    foo: foo
}
obj.foo()//obj对象



var obj = {
    name: 'hlf',
    running: function () {
        console.log(this.name + '在奔跑')
    }
}

obj.running()//this=>obj

*/
var obj = {
    name: 'hlf',
    running: function () {
        console.log(this.name + '在奔跑');

    }
}
var fn = obj.running
fn() //this ==> window 此时这个obj对象里的running函数里的this指向的是一个window 所以拿不到name