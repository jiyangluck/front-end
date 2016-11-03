## 第2节:定位

#### 一、 css的position属性。
position属性规定了元素的定位类型，主要类型包括以下三种：

* 绝对定位 absolute
* 相对定位 relative
* 固定定位 fixed

元素设置成定位元素之后，可以通过设置top、left、bottom、right属性控制元素位置。若两个元素重叠，可以通过z-index属性设置元素的前后关系（z-index值大的会挡住z-index值小的元素）。


#### 二、 绝对定位(DEMO2-2-1)
将position属性设置成absolute，可以将元素设置为绝对定位元素，绝对定位元素脱离文档流，一般会通过top和left属性设置绝对定位元素的位置。
``` css
.box{
    position:absolute;
    top:100px;
    left:100px;
}
```

#### 三、 相对定位(DEMO2-2-2)
将position属性设置成relative，可以将元素设置为相对定位元素，位置相对于原位置定位。相对定位元素不脱离文档流，也可以通过top和left属性设置元素位置。
``` css
.box{
    position:relative;
    top:100px;
    left:100px;
}
```

#### 四、 固定定位(DEMO2-2-3)
将position属性设置成relative，可以将元素设置为固定定位元素，固定定位相对于浏览器窗口进行定位，元素脱离文档流，一般通过top和left属性设置元素的位置。
``` css
.box{
    position:fixed;
    top:100px;
    left:100px;
}
```

#### 五、 设置参照物(DEMO2-2-4)
position属性为absolute的元素，如果距离其最近的父级元素是定位元素，那么它定位会以这个父级元素为参照物。
``` html
<div class="box">
    <div class="content"></div>
</div>
```

``` css
.box{
    width:500px;
    height:300px;
    border:1px solid red;
    margin:0 auto;
    position: relative;
}
.content{
    width:100px;
    height:40px;
    position: absolute;
    background-color: #f00;
    top:200px;
    left:200px;
}
```

