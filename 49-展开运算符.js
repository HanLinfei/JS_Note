const names = ['hlf', 'lj', 'jcy', 'kxc']

//展开运算符的使用场景
//1.函数调用时

function foo(a, b, c, d) {
    console.log(a, b, c, d);
}
//依次将names展开 然后将里面的一个个字符取出来赋值到一个个的参数
foo(...names)

//还可以对字符串进行展开 然后会将字符串里的一个个字符取出来
const name = 'hlf'
foo(...name)

//2.构造数组时

const newNames = [...names, ...name]
console.log(newNames);


//3.构造对象时
 
const info = { name: 'hlf', age: '20' }

const obj = { ...info, addres: '武汉市' }
console.log(obj);

