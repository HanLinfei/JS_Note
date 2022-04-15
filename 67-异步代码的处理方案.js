/*
需求：url
    url+"aaa"> urlaaa
    urlaaa+"bbb"
    urlaaabbb
*/

// function requestData(url) {
//     //创建一个promise对象 直接返回这个对象 然后在外面做相应的处理
//     return new Promise((resolve, reject) => {
//         //模拟网络请求
//         //我们的网络请求模块可以直接丢进executor函数中
//         setTimeout(() => {
//             resolve(url)
//         }, 1000);
//     })
// }

//1.第一种方案：多次回调
//此处是一个典型的回调地狱 代码可读性很差
// requestData("url").then(res => {
//     requestData(res + "aaa").then(res => {
//         requestData(res + "bbb").then(res => {
//             console.log(res);
//         })
//     })
// })

//2.第二种方案：Promise中then的返回值
// requestData("url").then(res => {
//     return requestData(res + "aaa")
// }).then(res => {
//     return requestData(res + "bbb")
// }).then(res => {
//     console.log(res);
// })

//3.第三种方案：Promise+生成器（generator）实现
// function* getData() {
//     const url = yield requestData("url")
//     const urlaaa = yield requestData(url + "aaa")
//     const urlaaabbb = yield requestData(urlaaa + "bbb")
//     const urlaaabbbccc = yield requestData(urlaaabbb + "ccc")
//     console.log(urlaaabbbccc);
// }


//拿到这个生成器对象
// const generator = getData()
//调用生成器对象方法next 每调用一次 他就去执行一块代码
//因为我们yield还有返回值 他会把yield关键字后面的代码执行结果作为返回值
//也就是会作为我们调用next方法的返回值
//所以我们此时调用next就可以拿到 requestData的返回值 而这个返回值是一个Promise
//又因为我们的yield返回值实际上是一个对象的形式 {done:boolean,value:value}
//所以我们就需要通过拿到他下面的属性来拿到值 所以就拿到了Promise对象
//手动执行
// generator.next().value.then(res => {
//     return generator.next(res).value
// }).then(res => {
//     return generator.next(res).value
// }).then(res => {
//     generator.next(res)
// })


//封装自动执行

//封装自动化执行多次网络请求函数

// function execGenerator(getFn) { //传入一个生成器
//     const generator = getFn() //拿到生成器对象
//     //递归调用 自动执行 每次递归过程中调用一次next
//     //next每调用一次 就会来到下一个yield 而上一个yield会有一个返回值 他会返回一个Promise
//     //所以我们会对在Promise中的then中进行一个递归调用 并且会把这次拿到的值传到下一次调用
//     //我们在下一次调用时候就将上次拿到的值传到我们上一次yield处的变量中 在下一次直接进行拼接
//     //当我们的每次生成器返回对象中 done的值变为undefin时候 就说明我们已经执行完所有生成器代码
//     //直接将我们这一次的结果return出去
//     function exec(res) {
//         const result = generator.next(res)
//         if (result.done)
//             return result.value
//         else
//             result.value.then(res => {
//                 exec(res)
//             })
//     }
//     exec()


// }

// execGenerator(getData)


// const Provice = [
//     {
//         name: '湖北省',
//         city: [
//             {
//                 name: '十堰市',
//                 area: ['茅箭区', '张湾区', '郧阳区', '丹江口市', '郧西县']
//             }
//         ]
//     }
// ]

// console.log(Provice[0].city[0].area[0]);//茅箭区


// function requestDataAddress(url) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const address = url
//             resolve(address)
//         }, 1000);
//     })
// }



// function* getDataAddress() {
//     const province = yield requestDataAddress(Provice[0])
//     const city = yield requestDataAddress(province.city[0])
//     const area = yield requestDataAddress(city.area[0])
//     console.log(area);
// }

//  const address = execGenerator(getDataAddress) 我们自己实现的方法



const Provice = [
    {
        name: '湖北省',
        city: [
            {
                name: '十堰市',
                area: ['茅箭区', '张湾区', '郧阳区', '丹江口市', '郧西县']
            }
        ]
    }
]



//4.第四种方案 async/await

function requestDataAddress(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const address = url
            resolve(address)
        }, 1000);
    })
}

async function getDataAddress() {
    const province = await requestDataAddress(Provice[0])
    const city = await requestDataAddress(province.city[0])
    const area = await requestDataAddress(city.area[0])
    console.log(area);
}

getDataAddress()
