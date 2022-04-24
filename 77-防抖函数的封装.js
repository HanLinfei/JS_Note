//1.传入一个函数，这个函数将被防抖处理
//2.传入一个延迟时间，延迟事件将控制什么时候执行这个传入进来的函数 
// 在这个延迟时间内如果再次发生事件，则延迟时间会被重置
//3.事件发生第一次时候是否立即执行 默认值是不执行
//4.外面的函数如果有返回值，那么就需要传入一个回调函数 在回调函数中拿到返回值
function debounce(fn, delay, immediately = false, resultCallback) {
    //这个变量用来保存上一次的定时器对象
    //每一次都把这一轮延迟执行的函数传给timer 然后当事件再次发生时候 就取消掉timer 
    //实际上这个取消掉的timer是上一次事件的timer 也就是说 上一次事件就被取消了 
    var timer = null
    //这个变量用来保存阶段状态
    //在每一次都要判断当前阶段是否执行 如果没有执行的话 则我们需要立即执行
    let isInvoke = false

    //这个函数实际上就是 事件触发时候 执行的函数
    const _debonce = function (...args) {
        //当事件再次进来时候 取消上一次的定时器对象
        if (timer) clearTimeout(timer)

        if (immediately && !isInvoke) {
            const result = fn.apply(this, args)
            if (resultCallback) resultCallback(result)
            isInvoke = true
        }
        else {
            //延迟执行我们的函数
            timer = setTimeout(() => {
                //更改一下this指向 不然此时被执行的函数里面的this指向的是window
                //他的this正确指向应该是触发这个事件的元素
                //而此时这个函数里的this就是触发这个事件的元素 所以我们要在这里把this传给被执行的函数
                const result = fn.apply(this, args)
                if (resultCallback) resultCallback(result)
                //这一个阶段执行完毕之后 恢复阶段状态为未执行
                isInvoke = false
                timer = null
            }, delay)
        }
    }
    //取消后续操作
    _debonce.cancel = function () {
        console.log('取消事件');
        clearTimeout(timer)
        timer = null
        isInvoke = false
    }

    return _debonce
}

export default debounce