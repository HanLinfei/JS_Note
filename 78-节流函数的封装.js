function throttle(fn, interval, options = { leading: true, trailing: false }) {
    const { leading, trailing } = options
    let lastTime = 0
    const _throttle = function () {
        const nowTime = new Date().getTime()
        //interval是用户传进来的间隔时间
        //nowTime是触发事件的时间
        //lastTime是一次完整的执行的最后时间
        /*
        思路：
        当前触发事件的时间毫秒数 - 上一次最后执行函数那一次触发事件的时间毫秒数 就可以得出上一次事件与这一次事件中间间隔了多久
        在拿我们规定的间隔时间减去这个间隔时间 那么就得到的数如果是小于等于0  那么就说明达到了我们间隔的时间
        那么就直接调用我们传进来的函数

        */
        //我们可以使 lastTime和nowTime的值相等 这样的话他们相减就为0 然后最后得出的间隔时间也就是为0
        // if (!leading && !lastTime) lastTime = nowTime
        const reMainTime = interval - (nowTime - lastTime)
        if (reMainTime <= 0) {
            fn()
            lastTime = nowTime
        }

    }
    return _throttle
}

export default throttle