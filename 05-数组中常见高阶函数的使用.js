/* 函数和方法的区别：
 当我们一个函数不属于某个对象时候，这个函数就称之为函数 例如：
  function foo(){
  console.log("foo") 
  } 
 这个函数就属于函数，他并不属于某个对象
 
 当我们的一个函数属于某个对象的时候，这个函数就称之为方法 例如：
 var obj:{
  foo:function(){
  console.log("foo")
  }
 }
 此时这个函数就称之为方法  
 */


/*
1.
var nums = [21, 107, 4, 51, 983, 23, 16]
filter:过滤
var newNums = nums.filter(function (item) {
    return item % 2 === 0
})
console.log(newNums)

这个数组的方法就可以称之为一个高阶函数，这个函数是将另一个函数作为参数传进来
filter这个方法要求参数传入一个函数进去，而且这个函数必须返回一个布尔值
传入的这个函数可以有三个参数：item,index,arr 
item则是这个数组中的每一项，index是这个每一项当前所处位置，arr是这个数组 
*/



/*
2.
var nums = [21, 107, 4, 51, 983, 23, 16]
map:映射
var newNums = nums.map(function (item) {
    return item * 10
})
console.log(newNums);

此函数也是一个高阶函数，他是对于我们数组中的每一项做一个处理 然后进行返回
*/



/*
3.
var nums = [21, 107, 4, 51, 983, 23, 16]
forEach:迭代(遍历)
nums.forEach(function (item) {
    console.log(item)
})
此函数是没有返回值的
*/



/*
4.
var friends = [
    { name: "hanlinfei", age: 19 },
    { name: "jiangchengyi", age: 20 },
    { name: "leijun", age: 20 },
    { name: "kongxiangcheng", age: 20 }
]

// find：精准查找 查找到之后进行返回这一项
// findIndex：精准查找 查找之后返回索引

// var firendsFind = friends.find(function (item) {
//     return item.name === "hanlinfei"
// })
// console.log(firendsFind);

var firendsIndex = friends.findIndex(function (item) {
    return item.name === "leijun"
})
console.log(firendsIndex);


*/
//5.
//reduce：累加
var nums = [21, 107, 4, 51, 983, 23, 16]

var total = nums.reduce(function (prevValue, item) {//prevValue为上一项的值，item为当前数组的一项
    return prevValue + item
}, 0)//这里的这个参数为初始值

console.log(total);
