// //迭代器是一个对象 迭代器规则是 对象中必须有一个next方法 方法可以无惨或者有一个参数 并且有返回一个对象 
// const names = ['hlf', 'lyy', 'lily']

// let index = 0
// const namesIterator = {
//     //内部过程
//     // next: function () {
//     //     return { done: false, value: 'hlf' }
//     //     return { done: false, value: 'lyy' }
//     //     return { done: false, value: 'lily' }
//     //     return { done: true, value: undefined }
//     // }
//     //实现迭代器

//     next: function () {
//         if (index < names.length)
//             return { done: false, value: names[index++] }
//         else
//             return { done: true, value: undefined }
//     }
// }

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

const names = ['hlf', 'lyy', 'lily']
const nums = [12, 231, 21, 42, 46, 2]
//生成一个迭代器函数

function createArrayIterator(arr) {
    let index = 0
    const ArrayIterator = {
        next: function () {
            if (index < arr.length)
                return { done: false, value: arr[index++] }
            else
                return { done: true, value: undefined }
        }
    }
    return ArrayIterator
}

const namesIterator = createArrayIterator(names)
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());

const numsIterator = createArrayIterator(nums)
console.log(numsIterator.next());
console.log(numsIterator.next());       
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
console.log(numsIterator.next());
