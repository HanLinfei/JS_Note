/*

1.默认绑定this的优先级最低
fn()


2.显示绑定this的优先级会高于隐式绑定this的优先级

var obj = {
    foo: function () {
        console.log(this);//abc
    }
}

3. obj.foo.call("abc")  在这个里面既有隐式绑定又有显示绑定 所以显示绑定(apply,call,bind)高于隐式绑定




4 var obj = {
     foo: function () {
         console.log(this)
     }
 }

 var objFn = new obj.foo()

 new绑定优先级高于隐式绑定


5.new绑定优先级高于bind绑定

function foo() {
    console.log(this);
}

var fn = foo.bind("abc")

var obj = new fn()


总结：  new绑定(new fn()) > 显示绑定(fn.apply()/call/bind) > 隐式绑定(obj.fn()) > 默认绑定(fn())
*/



