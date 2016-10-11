## 第1节:变量、数据类型、运算符

#### 变量
上一章我们简单了解了什么是变量
* 变量可以存储数据
* 通过var可以定义一个变量
* 可以用过 "=" 将一个值赋值给一个变量

本章我们将深入了解变量的概念
* 变量名只能以数字、字母、下划线、$开始，否则程序会报错。
* 为了让代码更易读，变量名要有语义，不能随意起名字。
* 变量名如果有两个单词组成，可以用驼峰命名，例如firstName，第二个字母大写。

#### 数据类型
JavaScript有六种数据类型
``` js
var str = "hello string";  // 字符串
var num = 100;             // 数字
var book = true;           // true 和 false 是布尔类型
var nul = null;            //空
var und = undefined        //未定义（如果一个变量没在声明后没有赋值，那他也是未定义）
var obj = {};              //对象，后续章节会详细介绍。
```

#### 数学运算符
常用的数学运算符：加(+)、减(-)、乘(*)、除(/)
``` js
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log(result);   //程序会在控制台输出30
```
上面举了一个加法运算的例子，两个变量是数字类型，相加后结果是数值的相加。如果两个变量是字符串，那么"+"会将两个字符串连接
``` js
var num1 = "10";
var num2 = "20";
var result = num1 + num2;
console.log(result);   //程序会在控制台输出1020
```

#### demo4-1-1:在两个文本框中分别输入两个数，点击“计算”按钮计算家和
``` js
$("button").click(function(){
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    var result = Number(num1) + Number(num2);
    alert(result);
})
```

#### 逻辑运算:与(&&)、或(||)、非(！)
``` js
//与
var result = true && true;  //true
var result = true && false;  //false
var result = false && true;  //false
var result = false && false;  //false
//或
var result = true || true;  //true
var result = true || false;  //true
var result = false || true;  //true
var result = false || false;  //false
//非
var result = !true           //false
var result = !false          //true
```