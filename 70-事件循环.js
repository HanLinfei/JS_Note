//JS语言执行时候是只有一个线程的，当我们遇到比较耗时的任务时，会把这个任务加入到其他线程中
//当这个任务在这个线程中处理完毕之后，这个任务就将会被按顺序加入到事件队列中
//JS引擎是不断地会从这个事件队列中取任务的，当取出来之后就会将这个任务放入主线程中继续执行
//这样下来 也就是 JS线程 -> 浏览器其他线程 -> 浏览器事件队列 ->JS线程
//他们形成一个闭环 这个闭环我们就称作为事件循环

//事件队列中又分为两个队列
//宏任务队列 macrotask queue   定时器、ajax、点击事件....
//微任务队列 microtask queue   queueMicrotask、Promise.then().....
//而我们JS主线程去事件队列中拿任务时候，会优先拿到微任务队列里的任务进行执行
//直到微任务里的全部任务被执行完毕之后才会去执行微任务队列的任务

