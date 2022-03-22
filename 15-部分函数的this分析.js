//this交给别人去执行


// function mySettimeout(fn, timer) {
//     fn()//此处调用我们传进来的函数
//          所以在这里目前this指向的是一个window
//          但是如果这个函数是这样调用的呢？
//           fn.call("abc")  fn.apply("abc")
//          所以我们就无法确定这个this指向的到底是谁了
// }

// mySettimeout(function () {
//     console.log(this);
// }, 3000)

// var wrapper = document.getElementsByClassName('wrapper')[0]
// wrapper.onclick = function () {
//     console.log(this); //wrapper
// }

// var student = ['hlf', 'jcy', 'kxc', 'lj']
// student.forEach(function () {
//     console.log(this);
// }, "aaa") //这个方法第二个参数是可以传递this的指向的

