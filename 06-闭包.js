// 在一个函数中，如果可以访问外层作用域的变量，那么这个函数就是一个闭包

function foo() {
    var age = 20
    function bar() {
        console.log("bar", age);
    }
    return bar
}

var fn = foo()
fn()


/**
 执行过程：
    1.创建一个全局执行上下文栈(Global Excetion Content)，上下文栈中创建一个VO对象，
    2.开始扫描编译，创建GO对象，GO对象里用于存放各种全局函数、对象、以及全局变量，上下文栈中VO指向的是GO
        
        第3行：     1.遇到foo函数，创建一个foo函数对象
                      函数对象中包含父级作用域(这个foo函数的父级作用域是全局对象GO)和函数体。
                    2.将foo函数对象的地址存入GO对象中
                    GO：{
                        string
                        window
                        .......
                        foo:0xa000
                    }

        
        第11行：    1.遇到全局变量fn
                    2.在GO中创建全局变量fn
                    GO：{
                        foo:0xa000,
                        fn:undefined
                    }
                    
                    编译结束

    3.开始执行代码：
         第11行：   1.遇到foo函数
                    2.开始创建函数执行上下文           
                    3.在函数执行上下文中进行编译，创建AO对象(foo函数的AO对象)
                        第4行：     遇到foo函数中的变量age
                                    在自己的AO对象中创建age变量
                                    AO:{
                                        age:undefined
                                    }
                        第5行：      遇到bar函数，创建一个bar函数对象，函数对象中包含父级作用域(foo函数的AO对象)和函数体。
                                    将bar函数对象的地址存入foo函数的AO对象中
                                    AO:{
                                        age:undefined
                                        bar:0xb00
                                    }
                    4.编译结束开始执行此函数
                        第4行：     遇到age = 20;
                                    开始在自己的AO里找age
                                    此时找到age，然后进行赋值
                                    AO:{
                                        age:20
                                        bar:0xb00
                                    }
                        第8行：     遇到return bar
                                    开始在自己的AO里找bar
                                    此时找到bar，bar里存放的是一个地址，所以将地址返回
                                    
                                    
                        第11行：     此时把这个地址给到全局变量fn(GO中的fn)
                                   
                                    GO：{
                                            foo:0xa000,
                                            fn:0xb00(bar函数地址)
                                    }
                        
                        
                                    
                        第12行：    执行fn函数，因为fn变量里此时存放的是一个bar函数的地址
                                    此时在这里指向的就是bar函数
                                    执行fn函数 --->  bar()
                                    在函数执行上下文中创建bar函数的AO对象
                                    开始编译bar函数
                                    AO:{

                                    }
                                    因为bar函数里没有东西，所以此时AO对象里就是空
                                    编译结束，开始执行bar函数

                                        第6行：打印"bar" age
                                        此时直接打印出字符bar 然后打印变量age
                                        然后此时去自己的AO对象中(bar的AO对象)找变量age
                                        然后自己的对象中无age变量，然后就沿着作用域链的顺序继续向上找
                                        此时来到父级作用域：foo函数
                                        在foo函数的AO对象中找age
                                            AO:{
                                            age:20
                                            bar:0xb00
                                        }
                                        打印：bar 20

            ------------------------------------------------------------------------------------------
                在这段代码中，bar函数此时就形成了一个闭包，他访问了外层变量age，这实际上就是一个闭包的过程

                我们的每个函数在编译时候，都是在函数执行上下文中进行编译执行的，在编译这个函数的时候
                就会创建一个专属于自己的函数对象，然后这个函数对象中就存放着 父级作用域(Parent Scope)
                这个父级作用域在闭包中就起着关键的作用，他会保证我们这个父级作用域会一直指向着我们的父级地址，
                这样就会导致我们的父级函数在执行完毕准备销毁时候，因为我们的子函数的对象中有指向这个父函数的
                指针，所以就会导致我们的父级函数对象不会被销毁，正因为这样，我们父级函数中的那些变量也就还会
                依然存在着，然后就可以供子函数中进行访问使用。然后子函数在使用这些父级作用域中的变量的过程，
                实际上就是一个闭包的过程。


                闭包带来的内存泄漏：
                因为我们的函数对象中保存的有父级作用域地址指向，这样就导致这个地址指向的函数有被引用，
                这样就导致了JS引擎的垃圾回收机制不会对其进行回收
                最简单的解决办法就是将函数置位空(Null)，这样这个函数就在内存中就没有被根对象所指向
                所以就会被垃圾回收机制所销毁

                fn = null
                foo = null
               
                
               
                                        
                                    
                                    

                        
                                    


    
                
    
 */