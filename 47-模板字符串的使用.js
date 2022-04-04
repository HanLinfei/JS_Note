//模板字符串 ` `
const name = 'hlf'
const age = 20

const message = "my name is " + name + " age is " + age
console.log(message);
//这样拼接起来就很麻烦 而且可读性也很差


//现在可以使用模板字符串来与变量进行拼接
const message2 = `my name is ${name} age is ${age}`
console.log(message2);

//模板字符串还可以对一些变量直接进行运算

const a = 20
console.log(`a double is ${a * 2}`);

//还可以对一些函数进行直接调用

function double() {
    return 20 * 2
}

console.log(`double is ${double()}`);
