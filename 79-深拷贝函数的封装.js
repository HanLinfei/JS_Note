let s1 = Symbol("aaa")
let s2 = Symbol("bbb")

const obj = {
    name: 'hlf',
    age: 20,
    [s1]: "6666",
    s2: s2,
    friends: {
        name: 'lyy',
        address: '十堰市',
        eat: function () {
            console.log(this.name + '在吃东西');
        }
    },
    address: '十堰市',
    hobbies: ['敲代码', '音乐', '绘画', '钢琴'],
    learn: function () {
        console.log(this.name + '在学习');
    }
}


// //实现简单的浅拷贝
// function deepCopy(obj) {
//     const newObj = {}
//     for (const key in obj) {
//         newObj[key] = obj[key]
//     }
//     return newObj
// }

// const copyObj = deepCopy(obj)
// console.log(copyObj)

//实现深拷贝

//判断是否是一个对象的工具函数

function isObject(value) {
    const Valuetypeof = typeof value
    return (value !== null) && (Valuetypeof === 'object')
}


//1.每次都传入一个键值 判断该键值是否引用类型
//2.如果这个键值不是引用类型 那么说明他是普通值 无需再次处理 直接将其返回给到新的对象作为键值
//3.如果这个键值是引用类型 那么就说明他是对象中的深层对象 那么就直接递归调用他
//4.递归调用中 给他创建一个新的对象 在对这个深层对象进行一个遍历依次给key赋值 
function deepCopy(obj) {
    //如果判断类型是函数类型，那么就直接返回使用
    if (typeof obj === 'function')
        return obj
    if (!isObject(obj))
        return obj

    //判断是数组还是对象
    const newObjct = Array.isArray(obj) ? [] : {}
    for (const key in obj) {
        newObjct[key] = deepCopy(obj[key])
    }
    return newObjct
}

// deepCopy(obj).friends.address = '武汉市'
console.log(deepCopy(obj));

