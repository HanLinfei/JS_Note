var name = 'hlf'
var num1 = 20;
var num2 = 30;
var result = num1 + num2;

/*  
1.代码被解析 ,v8引擎会帮我们创建一个对象(GlobaObject->go)
   这个对象里面包含了我们js代码的一些参数
   
   var GlobaObject = {
       String:'类',
       Data:'类',
       SetTimeout:'函数',
       name:'undefined',
       num1:'undefined',
       num2:'undefined',
       result:'undefined'
   }

   因为此时还未正式开始执行此段代码，所以这个对象里面的值是undefined

 2.运行代码
    2.1 v8为了执行代码，v8内部会有一个执行上下文栈(Execution Content stack,ESCtack)(函数调用栈)
    2.2 因为我们执行的是全局代码，为了全局代码能够正常执行，会创建一个全局上下文(Global Excetion Content)全局代码才会被执行   


3.执行代码
   此时会给这个GO里面的变量一一进行赋值
*/