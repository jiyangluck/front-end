## 第3节:元素分类与元素浮动

#### 一、 元素的分类

html元素可以分为三类，每类元素都有各自的特性。
* 行内元素：不能设置宽高，不独占一行。
* 块元素：可以设置宽高，独占一行。
* 行内块元素：可以设置宽高，不独占一行

常用的行内元素
``` html
<a href=""></a>
<span></span>
```

常用的块元素
``` html
<div></div>
<h1></h1>
<p></p>
<ul>
    <li></li>
</ul>
```

常用的行内块元素
``` html
<img src="" alt="">
<input type="text">
```

#### 二、 元素浮动(DEMO1-3-1)

默认的情况下，块元素是独占一行的，如果给块元素设置浮动，可以让这个浮动的块元素和其他元素在同一行显示。

``` css
selector{
    /*元素左浮动*/
    float:left;  
}
```
上面的示例代码中，selector是选择器，float可以将元素设置成浮动元素，这样就能让选择器找到的块元素和其他元素放在同一行了，**注意：如果多个元素超出了容器，会被挤到下一行**

将div设置成浮动元素
``` html
<div class="box">1</div>
<div class="box">2</div>
```

``` css
.box{
    width:100px;
    height:100px;
    background-color: blue;
    border:1px solid red;
    float:left;
}
```

#### 三、 导航栏(DEMO1-3-2)

``` html
<ul class="nav">
    <li><a href="">百度</a></li>
    <li><a href="">谷歌</a></li>
    <li><a href="">网易</a></li>
    <li><a href="">搜孤</a></li>
    <li><a href="">腾讯</a></li>
</ul>
```

``` css
.nav li{
    list-style:none;
    width:100px;
    height:30px;
    background-color: #ff0;
    border:1px solid blue;
    float: left;
    text-align: center;
    line-height: 30px;

}
.nav li:hover{
    background-color: #f00;
}

.nav li a{
    text-decoration: none;
}
```


