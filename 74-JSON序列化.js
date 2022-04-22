const obj = {
    name: 'hlf',
    age: 20,
    friends: {
        name: 'lyy'
    },
    hobbies: ['音乐', '敲代码'],
}

//必须传字符串格式
// localStorage.setItem("obj", obj)

//现在将其转换成JSON格式字符串
// console.log(JSON.stringify(obj));
localStorage.setItem("obj", JSON.stringify(obj))
console.log(localStorage.getItem("obj"));//打印的是一个JSON格式的数据
const jsonString = localStorage.getItem("obj")
const info = JSON.parse(jsonString)
console.log(info);
// console.log(info.name);

//JSON实现深拷贝

//先实现浅拷贝
//利用结构，将这个对象中的每个属性一个个的取出来放到这个对象中
//浅拷贝对于基本数据类型，更改数值，不会互相影响
//但是浅拷贝对于引用型数据类型，更改值是会互相影响的，因为浅拷贝保存属性的时候，如果属性是引用类型，
//那么实际上保存的就是那个引用类型对象的地址，此时去做操作时候，一直是操作的是这个地址所指向的对象
//所以此时更改的时候 始终更改的就是那个对象 那么就会产生互相影响
const obj2 = { ...obj }
console.log(obj2);


//实现深拷贝
//深拷贝是不会出现引用类型互相影响的问题的
//利用JSON的序列化实现深拷贝
const jsonObjSting = JSON.stringify(obj)
const obj3 = JSON.parse(jsonObjSting)
console.log(obj3);
obj3.friends.name = 'hpy'
console.log(obj.friends.name);//此时没有发生改变
