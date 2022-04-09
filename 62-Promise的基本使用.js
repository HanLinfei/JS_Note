function requestData(url) {
    //创建一个promise对象 直接返回这个对象 然后在外面做相应的处理
    return new Promise((resolve, reject) => {
        //模拟网络请求
        //我们的网络请求模块可以直接丢进executor函数中
        setTimeout(() => {
            const names = ['hlf', 'flh', 'lfh']
            const errorMessage = 'url错误'
            if (url === 'hlf') {
                resolve(names)
            } else {
                reject(errorMessage)
            }
        }, 3000);
    })
}

const promise = requestData('hlf')
//对刚才返回的对象进行处理
promise.then((res) => {
    console.log('请求成功:' + res);
})
promise.catch((err) => {
    console.log('请求失败' + err);
})

