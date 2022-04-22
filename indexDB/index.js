//打开数据库(和数据库建立连接)
const DBrequest = indexedDB.open("hlfDB", 3)//如果数据库存在则直接打开，不存在则会创建一个
DBrequest.onerror = function (err) {
    console.log('errMessage:与数据库建立连接失败');
}
let db = null
DBrequest.onsuccess = function (e) {
    console.log('success:与数据库建立连接成功');
    db = e.target.result
}
//第一次打开或者版本发生更新
DBrequest.onupgradeneeded = function (e) {
    //当我们第一次打开hlfDB这个数据库时候 我们可以拿到这个数据库 然后拿到这个数据库了之后 
    //我们就可以通过这个DB对象来操作数据库
    const db = e.target.result

    //创建一些存储对象 users表 keyPath相当于是主键(key) 必须得有
    db.createObjectStore("users", { keyPath: "id" })
}


class Users {
    constructor(id, name, age) {
        this.id = id
        this.name = name
        this.age = age
    }
}


const users = [
    new Users(100, "hlf", 20),
    new Users(101, "lyy", 21),
    new Users(102, "hpy", 22)
]

const inputID = document.querySelector("input")
let inputValId = null
const inputText = document.querySelectorAll("input")[1]
let inputVal = null

const btns = document.querySelectorAll("button")
//监听按钮点击
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        // //在每一个的操作中都给他新创建一个事物对象
        const transaction = db.transaction("users", "readwrite")//告诉这个事物对象操作的是哪一个表
        const store = transaction.objectStore("users")//再次来确定要操作的是那一个对象
        switch (i) {
            case 0: {  // 将我们所有的user对象放到这个表中
                for (const user of users) {
                    const request = store.add(user)
                    //单个对象的添加成功的回调函数
                    request.onsuccess = function (e) {
                        console.log(`${user.name}添加成功`);
                    }
                }
                //当我们的本次事务全部完成之后 他会来回调这个函数
                transaction.oncomplete = function () {
                    console.log('添加操作全部完成');
                }
            }
                break
            case 1: {
                inputValId = Number(inputID.value)
                if (inputValId) {
                    // 根据主键查询
                    const request = store.get(inputValId)
                    request.onsuccess = function (e) {
                        console.log(e.target.result);
                    }
                } else {
                    alert("查无此人")
                }
                //批量查询
                //创建光标对象
                // const request = store.openCursor()
                //光标回调函数
                // request.onsuccess = function (e) {
                //     const cursor = e.target.result //拿到对应的光标
                //     if (cursor) {
                //         console.log(cursor.key, cursor.value)
                //         cursor.continue()//每执行一次进行光标下移一行 并且重新执行这个光标的回调函数
                //     } else {
                //         console.log('查询完成');
                //     }
                // }

            }
                break
            case 2: {
                inputValId = Number(inputID.value)
                inputVal = Number(inputText.value)
                if (inputValId) {
                    // 根据主键查询
                    const request = store.openCursor()
                    request.onsuccess = function (e) {
                        const cursor = e.target.result
                        if (cursor) {
                            if (cursor.key === inputValId) {
                                const value = cursor.value
                                value.age = inputVal
                                cursor.update(value)
                                const newAge = store.get(inputValId)
                                newAge.onsuccess = function (e) {
                                    console.log(e.target.result);
                                }
                            } else {
                                cursor.continue()
                            }
                        } else {
                            console.log('查询完成');
                        }
                    }
                } else {
                    alert("查无此人")
                }
            } break
            case 3: {
                inputValId = Number(inputID.value)
                if (inputValId) {
                    // 根据主键查询
                    const request = store.openCursor()
                    request.onsuccess = function (e) {
                        const cursor = e.target.result
                        if (cursor) {
                            if (cursor.key === inputValId) {
                                cursor.delete()
                                console.log('删除成功');
                            } else {
                                cursor.continue()
                            }
                        } else {
                            console.log('查询完成');
                        }
                    }
                } else {
                    alert("查无此人")
                }
            }

                break
        }
    }
}