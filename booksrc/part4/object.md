## 第3节:对象
六种数据类型中，最特殊的就是对象

#### 对象是属性的无序集合，如果对象的某个属性值是一个函数，那我们叫这个函数是这个对象的方法，对象的语法如下所示：

``` js
//创建一个对象
var obj = {
    "属性名1":"属性值1",
    "属性名2":"属性值2"
}
```

#### DEMO4-3-1:创建一个dog对象

``` js
var dog = {
    name:"wangcai",
    age:2,
    sayName:function(){
        alert("我是"+this.name)
    }
}
dog.age():      //获取dog的name属性。
dog.sayName();   //调用dog的sayName方法。
```
在上面的示例代码中，有一个对象dog，属性name的值是wangcai，属性age的值是2，属性sayName的值是一个函数，所以sayName是dog的方法。我们通过dog.sayName()调用这个方法，dog对象就能输出自己的名字了。

#### 内置对象:Math
Math是js的内置对象，我们可以直接通过Math方法完成一些数学运算或获取随机数。
``` js
var num = 3.14;
var result = Math.floor(num); //向下取整，结果是 3
```

``` js
var result = Math.random();   //获取一个0~1之间的随机数
```

#### DEMO4-3-2:编写一个函数，这个函数可以生成1~10的任意一个随机数。
``` js
function getRandom(){
    return Math.floor(Math.random() * 10 + 1);
}
alert(getRandom());
```


