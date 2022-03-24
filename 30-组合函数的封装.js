function composeFn(...fns) {
    var fns_Length = fns.length
    if (fns_Length === 0)
        throw new TypeError("参数不可以为空")
    for (var i = 0; i < fns_Length; i++) {
        if (typeof fns[i] !== 'function') {
            throw new TypeError("参数类型必须为函数")
        }
    }
    return function (...args) {
        var index = 0
        var result = fns[index].apply(this, args)
        while (++index < fns_Length) {
            result = fns[index].call(this, result)
        }
        return result
    }
}


// 实现思想：至少传入一个函数进去，并且也排查参数是否为函数类型
//          直接在里面返回一个新的函数，然后先调用第一个函数并将结果返回当下一个函数的参数
//          然后继续判断整个函数是否循环完毕，没有则拿到上一个函数的返回值当做参数继续执行
function foo(double) {
    return double * 2
}

function bar(square) {
    return square * square
}

var new_fn = composeFn()
var result = new_fn(5)
console.log(result);