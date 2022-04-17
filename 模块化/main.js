//我们导入的时候就可以使用require导入 导入时候选择路径
//然后这个require函数会返回一个对象 这个对象就是我们刚才导出的那个对象
const sumFn = require("./sum.js")
const result = sumFn.sum(10, 20, 30, 50)
console.log(result);
