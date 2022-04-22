//1.localStorage:浏览器关闭时 存储的内容依然保留 
//2.sessionStorage:浏览器关闭 存储的内容消失 更准确来说 这个是保存在当前会话中
//一个标签页就是一个会话

//1.
const btn = document.createElement("button")
document.body.appendChild(btn)
btn.innerHTML = '单击登录'

//通过这里就表现了 localStorge是存储在本地 浏览器关闭了 下次打开他还是有数据
//而session则在浏览器关闭了之后 数据就不存在了
document.querySelector("button").onclick = function () {
    localStorage.setItem("name", "hanlinfei")
    sessionStorage.setItem("name", "liangyuanyuan")
}


