## 第1节:html5和css3新特性
html5和css3分别是已发布的最新的html和css版本，这个版本是在以前的基础上添加了很多跨时代的新特性。本节将介绍html5和css3常用的新特性。

#### DEMO7-1-1:新增的布局标签
以前我们布局都是用div标签来完成的，在html5中新增了很多新的布局标签
1. header:页面主体上的头部。
2. nav:导航的布局
3. footer:页面的底部（页脚）。
4. section:小块布局用div，大的独立内容的布局用section。
5. article:文字集中的区域可以使用article布局。
6. aside:侧栏的布局使用aside。

#### 音频和视频
1. audio标签：音频标签
2. video标签：视频标签
2. controls属性：播放器面板
3. source标签：设置源文件，可省略
4. autoplay属性：自动播放
5. loop循环播放
6. paused属性：是否暂停状态
7. 方法： pause暂停 load重新加载（初始状态决定是否播放） play播放
8. 修改音乐播放的样式：不设置controls并且设置成autoplay

#### DEMO7-1-2:音频标签

#### DEMO7-1-3:视频标签

#### 圆角
html
``` html
<div class="box"></div>
```
css
``` css
.box{
    height:200px;
    width: 200px;
    background-color: #00f;
    border-radius: 100px; 
}
```

#### 边框
html
``` html
<div class="box"></div>
```
css
``` css
*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    /*边框再宽高之内*/
}
.box{
    width:100px;
    height:100px;
    border:40px solid red;
    /*如果边框大于宽高，会将盒子撑开*/
}
```

#### 阴影
html
``` html
<div class="box"></div>
```
css
``` css
.box{
    width:200px;
    height:200px;
    border:1px solid red;
    box-shadow: 20px 20px 50px 10px blue;
    /*shox-shadow:x轴偏移 y轴偏移 阴影模糊半径 阴影扩展半径 阴影颜色 投影方式*/
    /*投影方式设置inset：内部投影，不设置，外部投影*/
}
```
#### 透明度
html
``` html
<div class="box1">
    <h1>测试</h1>
</div>
<div class="box2">
    <h1>测试</h1>
</div>
```
css
``` css
body{
    background-color: #ff0;
}
.box1{
    width:100px;
    height:100px;
    background-color: rgba(255,0,0,0.5);
    /*设置原色和透明度，子集不会继承父级透明度*/
}
.box2{
    width:100px;
    height:100px;
    background-color: #f00;
    opacity: 0.5; 
    /*设置透明度,子集会继承父级的透明度*/
}
```
