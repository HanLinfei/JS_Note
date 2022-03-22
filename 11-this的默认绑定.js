/* 
默认绑定：独立函数调用  =>此时这个foo函数不属于任何对象，他是一个独立的函数


 1.
function foo() {
    console.log(this);
}
foo()//window

2.
var obj = {
    age: 20,
    foo: function () {
        console.log(this)
    }
}

var bar = obj.foo
bar()//window


*/

function foo() {
    return function () {
        console.log(this)
    }
}

var fn = foo()
fn()//window



