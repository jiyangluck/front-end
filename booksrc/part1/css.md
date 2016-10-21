## 第2节：css基础

#### 一、 css语法入门

对于初学者来说，我们先将css写在html文件中，head标签下的script标签内，css语法
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style type="text/css">
        //css书写位置
    </style>
</head>
<body>
    
</body>
</html>
```

知道了样式书写位置，那用什么样的语法来设置样式呢
```
选择器{
    属性名:属性值
}
```

#### 二、 css选择器
首先应该学会使用最常用的集中选择器
* id选择器
* class选择器
* 元素选择器
``` css
#id{
    color:red;
}
.class{
    color:red;
}
h1{
    color:red;
}
```

#### 三、 css常用属性
刚才的例子使用了color属性，可以设置文字的颜色，接下来介绍更多常用的属性
``` css
#id{
    color:red;
    border: 1px solid red;
    width:500px;
    height:100px;
    text-align: center;
    line-height: 100px;
    font-size: 16px;
    background-color: #eee;
}
```

#### DEMO1-2-1: 为自己的网页添加简单的样式。

``` html
<h1 id="myh">前端开发工程师</h1>
```

``` css
#myh{
    color:red;
    border: 1px solid red;
    width:500px;
    height:100px;
    text-align: center;
    line-height: 100px;
    font-size: 16px;
    background-color: #eee;
}
```
