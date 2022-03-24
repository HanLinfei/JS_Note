// 封装柯里化函数
function Currying(fn) {
    function Curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function (...args_) {//递归调用去判断满不满足长度条件
                return Curried.apply(this, [...args, ...args_])
            }
        }
    }
    return Curried
}
//----------------------------------------------------------------------
// 实现思想：
// 将需要柯里化的函数当做参数传入进去 然后返回一个已经柯里化完毕的新函数
// 在这个函数里面需要接收被柯里化的参数 因为参数很多 所以用剩余参数当形参
// 每次都来判断一下当前执行的参数有没有超过这个被柯里化的函数的参数 
// 超过了就说明这个函数已经被柯里化完毕 就直接调用我们的函数
// 其中每次都来判断一次是通过递归一直来判断我们的参数有没有被柯里化完毕

function log_message(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
}
//将日志函数柯里化
var Curried_log = Currying(log_message)
Curried_log(new Date())("Fetur", "新增功能")






function sum(num1, num2) {
    return num1 + num2
}
// 将求和函数柯里化
var currying_sum = Currying(sum)
var result = currying_sum(30)(20)
console.log(result);

