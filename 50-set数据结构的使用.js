// set其实是一个构造类 set里面不可以有重复的值
const set = new Set()
set.add(20)
set.add(30)
set.add(40)
set.add(50)
set.add(40)
console.log(set);

//自己使用算法实现数组去重
const nums = [10, 20, 30, 40, 20, 50, 10]
const new_nums = []
for (const item of nums) {
    if (new_nums.indexOf(item) == -1) {
        new_nums.push(item)
    }
}
console.log(new_nums);
//使用Set实现数组去重
const set_nums = new Set(nums)
console.log(set_nums);
//此时打印的这个数组是一个set结构 所以我们希望他是一个数组结构
// const newArr = Array.from(set_nums)
// console.log(newArr);
const newArr = [...set_nums]
console.log(newArr);

// size方法
console.log(set_nums.size);//求元素个数

//delete方法
set_nums.delete(40)//删除元素
console.log(set_nums);

//has方法
console.log(set_nums.has(50));//判断有没有包含某一个数

//clear方法
//清除整个set里面的元素

//set中的遍历方法
set_nums.forEach(item => {
    console.log(item);
})

for (const item of set_nums) {
    console.log(item);
}


//另外 set还有另一种  weakset
//weakset 与 set 的不同
//1. weakset只可以保存对象 不可以保存基本存储类型
//2. weakset是建立的弱引用 而Set是建立的强引用
//弱引用指向的时候 会被垃圾回收机制gc 无视
//强引用有指向时候则不会被垃圾回收机制所销毁