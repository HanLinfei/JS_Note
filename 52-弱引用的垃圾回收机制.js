//垃圾回收机制会对一些没有引用的对象不定时进行一个销毁
//但是当有一个对象是弱引用时，他也是回被销毁的

const finalRegistry = new FinalizationRegistry((value) => {
    console.log(`${value}被销毁了`);
})

let obj = {
    name: 'hlf',
    age: 20,
    address: '十堰市'
}

let info = new WeakSet()
info.add(obj) //即使这里有一个info的引用指向obj 但是由于他是弱引用 垃圾回收机制会无视 

finalRegistry.register(obj, "obj")

obj = null