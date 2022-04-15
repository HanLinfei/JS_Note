// 生成器是一种函数使用和控制的一种方案，他可以控制函数内部的执行与暂停
//生成器函数 function* fn{}
//当我们调用这个生成器函数时候 会给我们返回一个生成器对象
//这个生成器对象也可以当做一个迭代器使用 他是一个特殊的迭代器

function* foo() {
    console.log('我是第一段代码');
    const message1 = "111111"
    console.log(message1);
    //如果想在我们这一块代码暂停后 返回一个值的话 可以直接在yield后面跟上值
    const new_msg = yield message1

    //在上面 第一段代码的返回值 给到变量
    console.log('我是第二段代码');
    const message2 = "222222"
    //也就是说 我们外面传的参数 是传到了他上面那段代码 作为返回值了
    console.log(new_msg);
    yield

    console.log('我是第三段代码');
    const message3 = "3333333"
    console.log(message3);
    yield

    console.log('我是第四段代码');

}

//当我们调用他的时候 他并不会执行 而是生成一个生成器
//因为他是一个特殊的生成器 所以我们就就可以直接通过调用next方法进行对代码分段执行
//当我们想在每次一段代码暂停后 得到返回值 我们可以在yield后面直接跟上值
//当我们想要给每一段代码传参数时候 此时这个参数会作为上一次yield的返回值
//如果我们第一段代码想传参数 那么就在生成器函数调用时候就去传 
const foo_ = foo()
console.log(foo_.next());
console.log(foo_.next("hhahahhah"));
