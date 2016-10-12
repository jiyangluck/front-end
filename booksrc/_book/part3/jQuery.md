## 第2节:jQuery入门
jQuery是JavaScript的一个库，可以让我们用更少的代码来实现更多的页面效果。如果希望使用jQuery，那么需要在html文档中引入jQuery库，引入方法如下:
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
   
   <script src="script/jquery.js"></script> 
    <script>
        //这里可以使用jQuery提供的方法
    </script>
</body>
</html>
```

#### DEMO3-2-1:用jQuery改变元素的样式

我们现在对css已经非常熟练了，css的思路是通过【css选择器】获取元素，然后通过【css属性】设置元素的样式，jQuery的编写也是类似的思虑，首先通过【jQuery选择器】获取元素，然后通过【jQuery方法】操作元素。

jQuery常用选择器如下：
``` js
$("#id") //id选择器
$(".class")  //类选择器
$("element")  //元素选择器
```

下面的例子我们通过jQuery的css方法，将一个宽100px,高100px,背景为红色,id属性是“box”的div修改成背景为绿色，示例效果[链接](),核心代码如下：
``` js
$("#box").css("backgrount-color","green");
```

#### DEMO3-2-2:点击div，让div背景颜色变成绿色

单单只是改变元素的样式并没有实际意义，我们下一步要做的是，点击这个div之后，让div的背景颜色改变。

点击事件：当用户用鼠标单击浏览器的时候，就会触发点击事件。我们可以把点击之后需要执行的代码写在click()中
``` js
$("#box").click(function(){
    alert("hello click");  //点击box后，浏览器会弹出hello click的对话框
})
```

下面要做的是，点击div让div的北京颜色变化，
``` js
$("#box").click(function(){
    $(this).css("background-color","green");
    //关于this,暂且理解为，点击的是哪个元素，事件内部的this对应的就是哪个元素
})
```



#### DEMO03-2-3:点击图片后显示另一张图片

我们已经实现了点击事件的功能，那接下来我们要做的例子是，点击一张图片，让这张图片编程另外一张图片。我们知道，img的src属性绝顶着img标签显示的是哪张图片，那么这个例子其实就是当我们点击图片的时候，改变img标签的src属性。

``` js
$("#pic").click(function(){
    $(this).attr("src","另一张图片url");
})
```

#### DEMO03-2-4:点击数字列表切换图片 [示例效果]()
首先查看【示例效果】，完成这个实例需要了解下列知识点

**变量：**js通过var定义变量，变量可以理解为存储数据的容器。（关于变量，下一章有更详细的讲解）
``` js
var str = "hello string"  //将hello world这个字符串存储到str这个变量中。
//更准确的说是把字符串赋值给str “=”是赋值的意思，将右侧的值赋值给左侧的变量。
```

**数组：**数组是一个有序的集合。（关于数组，下一章有更详细的讲解）
``` js
var team = ["博小易","小博","小易"]; //把三个名字放到一个数组中，并复制给team这个变量
team[0];  //第一个元素
```

图片切换的核心代码如下：
``` js
//定义一个数组，数组内存放所有所有图片的url
var imgList = [
    "../images/0.jpg",
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg"
]

//定义点击事件
$("#num-list li").click(function(){
    var index = $(this).index();  //获取点击的那个li的索引值
    var src = imgList[index];     //通过索引值获取数组中对应的图片url
    $("#pic").attr("src",src);    //修改img标签的url
})
```

#### DEMO03-2-5:选项卡

#### DEMO03-2-6:jQuery中的动画方法

#### DEMO03-2-7:滚动导航效果

#### DEMO03-2-8:图片轮播效果


