function sum(...args) {
    return args.reduce((total, item) => {
        return total += item
    })
}


//module是一个对象 这个对象其实就是当前这个文件
//exports也是module下面的一个属性 他也是一个对象 这个对象相当于就是我们当前导出的这个对象
module.exports = {
    sum,
}


