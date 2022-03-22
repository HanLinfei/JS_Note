// 自己实现的apply函数
Function.prototype.new_apply = function (thisArg, restParameters) {
    var fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    thisArg.fn = fn
    restParameters = restParameters || []
    //这一步是为了防止外面没有传参数进来
    // 然后此时的restParameters参数为undefined，然后undefined是不可以迭代的
    var result = thisArg.fn(...restParameters)
    delete thisArg.fn
    return result
}


function sum(num1, num2) {
    console.log("sum被执行了", this);

    return num1 + num2
}

var result = sum.new_apply(0, [13, -4])
console.log(result);
