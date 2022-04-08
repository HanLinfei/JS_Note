//Promise是一个类
//Promise创建时可以传参数
/*
第一个参数：传入一个函数，这个函数被称为executor，这个函数会被立即执行
这个函数还会默认有两个参数 一个resolve 一个reject
resolve在成功时候会被回调
reject在失败时候会进行回调
*/


function foo() {
    //当我们通过new来创建了Promise时候会传进来一个executor函数，这个函数会被立即执行
    //其中这个函数还有两个参数，这两个参数也是函数
    return new Promise((resolve, reject) => {
        //这个会被立即执行，当我们在里面调用这个函数的时候
        //他外面的then函数里的回调函数就会被执行
        //也就是意思是如果Promise对resolve进行了执行
        //那就说明了这次是成功的，那么就会去执行外面的Promise对象下面的then方法，对then内部函数进行回调
        //这个成功时候执行的resolve函数是可以传递参数的 这个参数就对应着传给了下面的then
        resolve("success Message")


        //那如果我们这里调用的是reject呢
        // reject()
        //那就说明了我们这次是失败的，那么Promise就会执行这个函数，
        //对应的他就会去执行外面的Promise对象下面的catch方法，然后会catch方法的函数参数进行回调
        //这个失败时候执行的reject函数是可以传递参数的 这个参数就对应着传给了下面的catch
    })
}


const fooPromis = foo()
//then方法中的回调函数会在Promise执行resolve函数时，被回调
fooPromis.then((res) => {
    console.log(res);
})
//catch方法中的回调函数会在Promise执行reject函数时，被回调
fooPromis.catch((err) => {
    console.log(err);
})



const promise_ = new Promise((resolve, reject) => {

})

promise_.then(() => {

})

promise_.catch(()=>{

})
//上面的这个promise对象等价与下面这个 
//因为我们通过new Promise时候 实际上就是返回了一个Promise对象 所以这两种都是一个意思
new Promise((resolve,reject)=>{

}).then(res=>{

},err=>{

})
