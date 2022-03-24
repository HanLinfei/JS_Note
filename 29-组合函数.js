// 将多个函数当参数传入，然后组合起来执行

function double(num) {
    return num * 2
}

function square(num) {
    return num * num
}
// 现在将他们组合
var result = square(double(5))
console.log(result);

// 现在将他们优化变的灵活
function composeFn(m, n) {
    return function (num) {
        return m(n(num))
    }
}

var new_fn = composeFn(square, double)
var new_result = new_fn(10)
console.log(new_result);

