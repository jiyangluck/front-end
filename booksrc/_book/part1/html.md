## 第1节：html基础

#### 一、 创建第一个html文件

在sublime text中新建一个文件，保存成index.html,然后输入“!”，在按tab键，就可以生成一个最基本的html模板，生成后代码如下

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

用浏览器打开这个html文件，就能看到我们的第一个网页了。这个步骤同学们只需要记住以下几点。
* 网页的内容是由一个个html标签组成的，不同的标签在网页中起不同的作用。
* 通过title标签可以设置网页的标题。
* 通过body标签可以设置网页的内容。

**注意**
* 文件一定要保存成html格式才能用!+tab生成模板。
* 感叹号一定要是英文符号，不能输入汉字中的感叹号。

#### 二、 html常用标签
html有将近100个标签，但是仅仅使用10个之内就可以制作出漂亮的网页。常用的标签如下
``` html
<h*>:标题标签
<p>:段落标签
<ul>:无序列表
<li>:列表项
<a>:链接
<img>:图片

<!-- 下面两个标签后续章节会讲解 -->
<div>:布局无语义标签
<span>:文字无语义标签
```

#### 三、 常用html属性
html开始标签中可以指定标签属性，用来进一步描述标签，常用属性如下：
* id属性
* class属性
* src属性
* alt属性
* href属性

#### 四、 综合案例:制作自己的第一个网页(DEMO1-1-1)
``` html
<h1>前端开发工程师</h1>
<h2>前端开发工程师</h2>
<h3>前端开发工程师</h3>
<h4>前端开发工程师</h4>
<h5>前端开发工程师</h5>
<h6>前端开发工程师</h6>
<p>Web前端开发是从网页制作演变而来的</p>
<ul id="list">
    <li>html</li>
    <li>css</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>node</li>
    <li>ajax</li>
</ul>
<a href="http://baidu.com">跳转到百度</a>
<img class="pic" src="../images/1.jpg">
```



