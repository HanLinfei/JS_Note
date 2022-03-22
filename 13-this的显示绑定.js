
/*
function foo() {
    console.log("函数被执行了:" + this.age);
}

var obj = {
    age: 20
}

//apply与call是可以指定this的绑定对象
foo.call()//undefined
foo.call(obj)//20
foo.apply()//undefined
foo.apply(obj)//20


*/

// apply 和 call 区别
// 区别在于传参数的方式不同
// function sum(num1, num2, num3) {
//     console.log(num1 + num2 + num3, this);
// }

// sum(10, 20, 30)
// sum.apply("apply", [30, 40, 50])
// sum.call("call", 20, 30, 40)

// call和apply在执行函数时候，是可以明确的绑定this的，这个绑定规则称之为显示绑定

// bind的显示绑定


function foo() {
    console.log(this);
}

newFoo = foo.bind("bind") //给这个函数绑定上this之后 会返回一个新的函数 
// 这个新的函数就不需要再次绑定this了
newFoo()//默认绑定和bind显示绑定优先级：bind显示绑定>默认绑定

