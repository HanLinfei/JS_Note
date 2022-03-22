function foo() {
    var message = "hello world"
    var age = 20
    function bar() {
        console.log(message)
        debugger
    }
    return bar
}
var fn = foo()
fn()

/*
    JS引擎对于闭包没有访问到的自由变量会进行一个销毁
    此处就是对于bar这个闭包，然后外部的message自由变量
    没有被访问到，所以JS引擎会对这个变量做一个销毁
    这样做的目的是为了优化性能，节省内存
*/