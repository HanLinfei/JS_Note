
/* 
 this通常只会出现在函数中
 但是有一种特殊情况：全局作用域下也会有this
 浏览器: window => GO对象
 node: {}(空对象)
*/
console.log(this); //window