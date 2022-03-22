// 封装new_call方法
Function.prototype.new_call = function (thisArg, ...restParameters) {// ...  是指剩余参数 可以将参数放进数组里
    if (typeof this !== 'function')
        throw new TypeError("Not a Function")
    var fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? thisArg : window
    thisArg = Object(thisArg)//此时传递过来的参数当成一个对象，所以要对传过来的参数进行一个转换处理，为了防止传递非对象类型
    thisArg.fn = fn
    var result = thisArg.fn(...restParameters) // ...数组：是指将数组中的值一一迭代出来
    delete thisArg.fn
    return result
}



function sum(num1, num2, num3) {
    console.log(this);
    return num1 + num2 + num3

}

var result = sum.new_call(0, 32, 13, 21)
console.log(result);

