var message = "hello global"

function foo() {
    console.log(message)
}

function bar() {
    var messgae = "hello bar"
    foo()
}

bar()

/*   

执行过程

1.开始编译，创建初始的GO(Global Object)对象
    Global Object { 
        message:undefined
        foo:0xa00
        bar:0xb00
    }
2.GO对象里面开始创建各种初始类，各种全局函数，还包含代码中的变量
  因为还没有开始执行，所以这些变量初始值为undefined

  其中，包含了一个函数，所以就会创建一个函数对象，这个对象里面存放的是这个函数对象的地址，
  foo:0xa00
  ↓↓↓↓↓
   foo {
    parent Scope(父级作用域):GO
    函数体(代码块)

  }
  bar:0xb00
 ↓↓↓↓↓
 bar {
    parent Scope(父级作用域):GO
     函数体(代码块)
 }




 3.开始执行 将代码入ECStack(调用栈) 其中栈中有一个VO对象 这个VO对象就指向GO
    开始一条一条执行代码，将找到的变量按顺序在作用域中优先进行赋值
    Global Object { 
        message:“hello global”
        foo:0xa00
        bar:0xb00
    }

    此时遇到bar()
    3.1 开始创建函数执行上下文:FEC(function Exction Content) 其中栈中有一个VO对象 
    3.2 创建AO对象(Active function)  栈中AO对象就指向GO
    AO { -----> bar()函数
        messgae:undefined
    }
    
    3.3 开始执行bar函数代码
       给message赋值 此时就去按着作用域链去找message
       所以此时找到了message 赋值到 message = "hello bar"
       此时代码也并未销毁，因为还有一句未执行完
      
       接着执行 遇到foo() 
        3.3.1  此时给foo创建函数上下文 创建AO对象 
        3.3.2    AO { -----> foo()函数    AO指向GO
                    null
                }
        3.3.3  开始执行foo函数代码
        打印console.log(message)
        此时就去找message 此时在foo函数的GO对象中去寻找message 此时发现里面是空的
        继续去父级作用域找 而此时他的父级作用域就是GO了
        所以便在GO里找message 此时便找到了 
        所以进行打印 ----> console.log(message) --->  hello global


        函数的父级作用域是与定义位置有关系，与调用位置无关系
    







*/