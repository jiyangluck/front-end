## 第1节:盒子模型

#### 一、 盒子模型相关的css属性
我们可以把一个html块元素看做是一个盒子，他具有如下css属性
``` css
selector{
    width:100px;            /*盒子的宽度*/
    height:100px;           /*盒子的高度*/
    margin:10px;            /*盒子的外边距*/
    padding:10px;           /*盒子的内编剧*/
    border:1px solid red;   /*盒子的边框*/
}
```
一个块元素有了这些属性就像是一个盒子，盒子里面可以摆放内容，内容也可以是另一个盒子，合理的运用盒子模型的这些css属性，就可以很轻松地实现我们想要的网页效果。


##### DEMO2-1-1：盒子模型示例

``` html
<div class="box1">
    <h2 class="content1">内容1</h2>
</div>
<div class="box2">
    <h2 class="content2">内容2</h2>
</div>
```

``` css
.box1{
    width:200px;
    height:200px;
    border:3px solid red;
    margin-left:50px;
    float: left;
}
.box2{
    width:100px;
    height:100px;
    border:10px solid red;
    margin-left:50px;
    padding-left:50px;
    float: left;
}
```