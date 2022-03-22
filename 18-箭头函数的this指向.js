//箭头函数是不绑定this的
// 箭头函数也不会被四个规则所绑定给覆盖，他只会从上层找this
// var obj = {
//     data: [],
//     getData: function () {
//         _this = this
//         setTimeout(function () {
//             var student = ["hlf", "hqc", "jcy", 'kxc', 'lj']
//             _this.data = student
//             console.log(_this.data);
//         }, 2000);
//     }
// }
// obj.getData()
/*在没有箭头函数之前的应用场景：
因为在obj的getData的方法里面 定时器去执行了回调 此时这个this的指向是window
所以把值给到this.data时候，是相当于给到window里面的data 所以需要在函数外面
进行保存这个this
*/

var obj = {
    data: [],
    getData: function () {
        setTimeout(() => {
            var student = ["hlf", "hqc", "jcy", 'kxc', 'lj']
            this.data = student
            console.log(this.data);
        }, 2000);
    }
}
obj.getData()

// 因为箭头函数是没有绑定this的，所以他就会沿着作用域链去上层找this
// 在这个里面，箭头函数发现没有this，他就会去找上层父亲getData的this
// 然后getData的this是obj

