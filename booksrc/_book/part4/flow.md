## 第5节:语句流

#### 一、 程序有三种执行顺序
* 顺序
* 分支
* 循环

之前写的示例代码都是按顺序执行的，下面我们来介绍分支和循环语句

#### 二、 分支语句
``` js
if(布尔值){
    //if语句内容
}
```
如上面示例代码所示，如果if后面的布尔值是true，则执行if语句的内容，如果是false则跳过不执行。

``` js
if(布尔值){
    //if语句内容
}else{
    //else语句内容
}
```
如上面示例代码所示，如果if后面的布尔值是true，则执行if语句的内容，如果是false则执行else语句后面的内容

#### 三、 猜数字(DEMO4-5-1)
没次刷新页面会生成一个随机数，在文本框中输入所猜的数字，提示框会弹出索财的结果。
``` js
var number = Math.floor(Math.random()*10+1);
$("button").click(function(){
    var value = Number($("#num").val());
    if(value > number){
        alert("大于真实结果！")
    }else if(value < number){
        alert("小于真实结果！")
    }else if(value == number){
        alert("恭喜你！回答正确！");
    }
})
```

#### 四、 循环语句
``` js
//i从0~9，循环10次。
for(var i = 0;i<10;i++){
    console.log(i);
}
```

#### 五、 计算100以内所有数字的加和(DEMO4-5-2)
``` js
var sum = 0;
for(var i = 0;i<=100;i++){
    sum += i;
}
console.log(sum);
```

#### 六、 输出一个数组中的所有元素(DEMO4-5-3)
``` js
var superHero = ["钢铁侠","绿巨人","美国队长","雷神"];
for(var i = 0;i<superHero.length;i++){
    console.log(superHero[i]);
}
```