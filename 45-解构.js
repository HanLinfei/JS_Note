// 数组的解构 []
var names = ["hlf", "jcy", "lj", "kxc"]
var [name1, name2, name3, name4] = names
console.log(name1, name3);

// 解构后面的元素

var [, name11, name22,] = names
console.log(name11, name22);

// 将部分没有解构的元素放到数组中
var [name111, ...new_names] = names
console.log(name111, new_names);

// 解构的默认值

var [name1111, name2222, name3333, name4444, name5555 = "我没有解构到,但是我有默认值"] = names
console.log(name5555);



// 对象的解构 {}
var obj = {
    name: "hlf",
    age: 20,
    sex: "男"
}

var { name, age, sex } = obj //根据key值进行解构赋值
console.log(name, age, sex);

// 对解构的属性重命名
var { name: name1 } = obj
console.log(name1);