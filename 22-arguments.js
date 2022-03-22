function foo(num1, num2, num3) {

    // arguments是类数组对象（像是一个数组，但本质上是一个对象）
    // 常见的arguments操作
    // 1.获取参数的长度
    console.log(arguments.length);

    // 2.根据索引值获取某一个参数
    console.log(arguments[4]);

    // 3.获取当前arguments所在的函数
    // arguments.callee() //不可以直接通过此方式调用函数 不然会产生递归

    // arguments也不可以使用数组的方法
}
foo(12, 312, 32, 12, 423, 21)

 