/* 柯里化具有单一职责

 例如我们在处理某些很大的一个问题时候我们需要用函数来进行处理。
 然后这个问题又非常的大，就导致了函数里的步骤很多，就会导致
 函数看起来很复杂，并且修改错误时候很麻烦


*/


// 柯里化的逻辑服用
// 现在需要进行打印日志

function log_message(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
}

log_message(new Date(), "DEBUG", "查询到输入框的错误")

// 现在将它柯里化 进行逻辑服用

var log_message2 = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}][${type}][${message}]`);
}

var date_log_message = log_message2(new Date())
date_log_message("DEBUG")("其他错误")

var date_type_log_message = log_message2(new Date())("FETURE")
date_type_log_message("新添加功能")
// 在我们经常需要重复使用一个变量时候，我们就可以将它柯里化进行保存返回一个新的函数
// 这样我们就不需要每次都重新来使用这个变量

// 柯里化复用
function makerAdd(const_num) {
    return function (num) {
        return const_num + num
    }
}

var result = makerAdd(5)(7)
console.log(result);
