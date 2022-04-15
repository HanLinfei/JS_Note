// //可迭代对象需要在Symbol.iterator方法中返回一个迭代器
// //此时iterableObj就是一个可迭代对象
// const iterableObj = {
//     names: ['hlf', 'lyy', 'lily'],
//     //中括号是可计算属性
//     [Symbol.iterator]: function () {
//         let index = 0
//         return {
//             next: () => {
//                 if (index < this.names.length)
//                     return { done: false, value: this.names[index++] }
//                 else
//                     return { done: true, value: undefined }
//             }
//         }
//     }
// }

// //通过访问这个可迭代对象下面的Symbol.iterator方法 生成一个迭代器

// const namesIterator = iterableObj[Symbol.iterator]()
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

// //for of 只可以遍历可迭代对象 for of可以看做成是一个语法糖 他所做的事情其实适合我们手动调用next方法是一样的
// for (const item of iterableObj) {
//     console.log(item);
// }

//类对象默认是不可迭代的 但是我们可以将它封装成一个可迭代的对象

class School {
    constructor(name, grade, studens) {
        this.name = name
        this.grade = grade
        this.studens = studens
    }

    [Symbol.iterator]() {
        let index = 0
        return {
            next: () => {
                if (index < this.studens.length)
                    return { done: false, value: { student: this.studens[index++] } }
                else
                    return { done: true, value: undefined }
            }
        }
    }
}

const s1 = new School('行政楼307', '计应2002', ['hlf', 'jcy', 'kxc', 'lj'])

for (const student of s1) {
    console.log(student);
}
