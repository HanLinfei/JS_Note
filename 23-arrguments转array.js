function foo(num1, num2) {
    console.log(arguments);
    var new_array1 = Array.prototype.slice.call(arguments)
    console.log(new_array1);
    // 第一种方法是通过array上面的原型的slice函数，然后通过call调用一下更改this指向到arguments 
    // 然后进行一个迭代 之后返回一个新的数组
    var new_array2 = [].slice.call(arguments)
    console.log(new_array2);
    // 第二种方法也是相当于直接使用数组下面的这个函数 
    // 然后通过call进行更改一下this的指向 然后是他绑定到arguments

    // es6语法


    var new_array3 = Array.from(arguments)
    console.log(new_array3);
    // Array的一个函数 传入可迭代的对象

    var new_array4 = [...arguments]
    console.log(new_array4);
    // 展开运算符 将arguments里的一个个分别展开
}

foo(23, 12, 45, 64, 32)
// test

/*

1.使用数组原型对象下面的一个函数 将它用call来调用 并且把arguments当做参数变成this传进去 然后方便遍历

2.我们自己进行遍历 


*/