/* 纯函数： 
 1.确定的输入一定会产生确定的输出
 2.函数在执行过程中不能产生副作用
        副作用：表示在执行一个函数时，除了返回函数值以外
       还对调用函数产生了附加的影响，比如修改了全局变量
       修改参数或者改变外部的存储 副作用是产生bug的温床
*/


var names = ['hlf', 'jcy', 'kxc', 'lj']
var new_names = names.slice(0, 2)
console.log(new_names);

// slice就符合纯函数的定义，他不管调用多少次，输出结果都会是一样的
// 并且他也不会更改外面的值names

var names2 = ['hlf', 'jcy', 'kxc', 'lj']
var new_names2 = names2.splice(1)
console.log(names2);
console.log(new_names2);
// splice他就不符合纯函数，他有修改函数外面的值，这个操作就是副作用


