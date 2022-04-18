//commonJs是一个模块化规范，node对其进行了支持，这个规范也简称为cjs
//在node中 每一个文件都是一个单独的模块 对应着一个module实例
//这个模块包括commonjs的核心变量：exports、module.exports、require
//exports和module.exports可以负责对模块中的内容进行导入
//require可以帮助我们导入其他模块(自定义模块、系统模块、第三方库模块)中的内容

/*
源码里做的操作：
module.exports = {}
exports = module.exports

最终导出的对象必然是module.exports
在一开始就把module.exports给到了exports了
所以就相当于exports的引用是指向module.exports
所以我们修改exports的值时候 是相当于直接修改的module.exports

*/

/*
require函数查找规则
1.如果require函数的参数是一个node的核心模块 那么就直接拿到这个核心模块 返回一个对象
require(path)

2.如果require函数的参数是一个 / ./ 开头，那么这就是一个路径，他会沿着这个路径去查找对应的文件
require(./sum.js)

3.如果require函数的参数不是路径也不是一个核心模块
那么他就会去沿着绝对路径去node_modules文件夹中查找我们下载的第三方库
一般这个是用于我们导入第三方库

4.模块是通过require函数进行加载的
require函数会直接运行一次这个模块里的代码，在下次再有加载这个模块时候就不会在运行了
只会一开始加载时候运行一次


5.require加载模块时候是同步的 必须等到上一个模块家在执行完毕之后才会进行下一个
*/