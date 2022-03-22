function foo() {
    console.log(this);
}
foo()//window

var obj = {
    age: 20,
    foo: foo
}
obj.foo()//obj

foo.apply("abc")//abc

/* 
this的指向是跟函数所处的位置以及定义时是没有关系的
是与函数被调用的方式有关系
*/