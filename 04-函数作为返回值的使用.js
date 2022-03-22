// 此函数是将另外一个函数作为返回值 此函数可以称为高阶函数
function makeAdder(count) {
    function add(num) {
        return count + num
    }
    // 将add函数作为返回值返回出去
    return add
}

var add5 = makeAdder(5)
console.log(add5(7));
