## 第2节:函数

#### 一、 函数的概念
函数是一个可执行的语句块，声明的时候不执行，调用的时候执行。我们可以使用function来定义一个函数
``` js
//声明一个函数
function fun(){
    //函数的内容
    alert("hello function")
}

//调用一个函数
fun();
```
在上面的示例代码中，fun是函数名，函数fun声明的时候，{}内部的代码不会执行，我们可以通过“函数名()”的方式来调用函数，调用函数之后花括号内的代码才会执行。

#### 二、 定义一个函数，计算10和20的加和(DEMO4-2-1)
``` js
function add(){
    var num1 = 10;
    var num2 = 20;
    var result = num1 + num2;
    alert(result);
}

add();    //控制台输出30；
```

#### 三、 函数的参数(DEMO4-2-2)
声明函数的时候可以在小括号内指定函数的参数，调用函数的时候，可以指定对应参数的值。声明函数时的参数叫做【形参】，调用函数时的参数叫做【实参】。
``` js
function fun(str){
    alert(str);
}
fun("hello arg");
```
上面的例子在声明函数的时候指定了一个参数str，并且函数内部用alert输出str的值。在调用fun函数的时候，将"hello arg"作为实参传给函数，所以调用的时候输出的是"hello arg"

计算两个参数的加和
``` js
function count(num1,num2){
    var result = num1 + num2;
    alert(result);
}
count(10,20);
```

#### 四、 函数的返回值(DEMO4-2-3)
``` js
function count(num1,num2){
    var result = num1 + num2;
    return result;
}
var number = count(10,20);
alert(number);
```


