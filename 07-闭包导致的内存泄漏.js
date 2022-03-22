function createArrFn() {
    var arr = new Array(1024 * 1024).fill(1)
    /*
    new Array ：创建一个数组对象
    Array(数组长度)  fill(填充数组内容)
    计算数组长度:在这里一个分配的每个1相当于是int型 
    1个int型占据的内存空间是4个字节(B)
    所以就是1024*1024*4 
    */
    return function () {
        console.log(arr.length);
    }
}

var arrayS = []
for (var i = 0; i < 100; i++) {
    setTimeout(() => {
        arrayS.push(createArrFn()())
    }, i * 100);
}

/* 
因为在解析createArrFn函数时候，创建了一个AO对象
然后又解析到了内部的匿名函数，然后也创建了一个AO对象
然后这个匿名函数的AO对象里面是保存了父级作用域createArrFn的
所以这时候这个匿名函数AO对象就有指向这个createArrFn
所以createArrFn函数里的arr永不会销毁
然后在此基础上进行100次，加入到arrayS数组中....

*/
setTimeout(() => {
    for (var i = 0; i < 50; i++) {
        setTimeout(() => {
            arrayS.pop()
        }, 100 * i)
    }
}, 12000);


