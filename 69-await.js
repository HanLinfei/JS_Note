//await关键字后面一般是一个表达式
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(11111)
            reject("err Message!")
        }, 2000);
    })
}

async function foo() {
    //await 执行的表达式是有返回值的 他的返回值就是我们Promise中的执行结果
    //await会等到后面表达式有了结果之后才会继续往后执行
    //强调：await后面的表达式内 必须有结果了之后才会执行 
    //也就是说 我们可以理解为await这一行代码后面的代码是被加入到then里面在
    const res = await getData()

}

foo().catch(err => {
    console.log(err);
})


//如果内部await后面的 Promise状态是reject 那么他会作为整个异步函数的返回值来执行catch

//请求北京的天气
async function requestWeather() {
    const result = await getWeatherData()
    console.log(result);
}

function getWeatherData() {
    return new Promise((resolve, reject) => {
        const requestHttp = new XMLHttpRequest()
        requestHttp.open('get', 'https://devapi.qweather.com/v7/weather/now?location=101010100&key=4fc8d88357c948acaad13b98849ef139')
        requestHttp.send()
        requestHttp.onreadystatechange = function () {
            if (requestHttp.readyState === 4)
                if (requestHttp.status === 200)
                    resolve(JSON.parse(requestHttp.responseText))
                else throw new Error("获取数据错误");
        }
    })
}

requestWeather()
