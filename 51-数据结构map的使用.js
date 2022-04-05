//我们想在一个对象中 将一个对象作为key 这个时候是不可以的 他会将我们的对象转换成字符串
//当我们想将一个对象作为另一个对象的key使用 这个时候就可以通过map来实现
//
const obj1 = { name: 'hlf' }
const obj2 = { name: 'jcy' }

const map = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")
console.log(map);

//get方法
console.log(map.get(obj1));//通过键来获取值

//has方法
console.log(map.has(obj2));//判断某个键是否存在

//delete方法
map.delete(obj2)//删除某个键值
console.log(map);

//clear方法 清除整个map中的键值

//遍历map
map.forEach((item, key) => {
    console.log(key, item);
})


//通过 for of遍历出来的是数组键值对
for (const item of map) {
    console.log(item);
}

//还可以在遍历的时候 直接对这个数组进行一个结构

for (const [key, value] of map) {
    console.log(key, value);
}

//weakmap与map的不同
//1.weakmap的键只能为对象
//2.weakmap通过key的引用是一种弱引用
//3.weakmap不可以遍历和打印