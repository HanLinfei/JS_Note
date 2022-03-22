Function.prototype.new_bind = function (thisArg, ...restParameters) {
    var fn = this
    thisArg = (thisArg !== null && thisArg !== undefined) ? thisArg : window
    thisArg = Object(thisArg)
    thisArg.fn = fn
    return function (...nums) {
        restParameters.push(...nums)
        var result = thisArg.fn(...restParameters)
        delete thisArg.fn
        return result
    }

}

function sum(num1, num2, num3) {
    console.log(this);
    return num1 + num2 + num3
}


var fn = sum.new_bind("abc", 15, 8.4)
var result = fn(3)
console.log(result);


