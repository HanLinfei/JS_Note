/* () = > {

}
语法:
()：参数
=>:箭头
{}函数体

*/


// 箭头函数的简写方式:

// 1.如果箭头函数的参数只有一个，那么()可以省略
var nums = [14, 23, 523, 2, 97]
nums.forEach(item => {
    console.log(item);
})

// 2.如果函数执行体只有一行代码，那么{}也可以省略
//   并且这段代码的执行结果作为返回值
New_nums = nums.filter(item => item % 2 == 0)
console.log(New_nums);

// 需求：将nums这串数组中的偶数进行乘10然后全部累加
var result = nums.filter(item => item % 2 === 0)
    .map(item => item * 10)
    .reduce((preValue, item) => preValue + item)
console.log(result);

// 3.如果一个箭头函数，只有一行代码，需要返回一个对象：
var bar = () => ({ name: 'hlf', age: 20 })
obj = bar()
console.log(obj);
// 因为箭头函数执行体只有一行代码，所以可以省略花括号
// 但是因为这个对象带有花括号，所以编译的时候就会出问题
// 所以需要把这个对象括起来，变成一个整体




