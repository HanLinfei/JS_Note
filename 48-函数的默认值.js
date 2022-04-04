//如果调用时候不传参数，我们就需要给他一个默认值
function foo(num1 = 12, num2 = "abc") {
    console.log(num1, num2);
}

foo()

//还可以设置对象为默认值

function info({ name, age } = { name: 'hlf', age: '20' }) {
    console.log(name, age);
}
info()

info({ name: 'jcy', age: 22 })

//另外一种写法 
//意思就是给函数的参数一个空对象为默认值 ，然后我们将这个对象进行结构 将它空对象里的值更改掉
// 然后我们就直接在解构的时候直接给他默认值
function info1({ name = 'lj', age = '23' } = {}) {
    console.log(name, age);
}

info1()

// 当有默认值得时候 这个函数的length 他值会计算默认值之前的参数个数 不包括默认值本身