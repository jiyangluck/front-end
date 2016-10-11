## 第1节:DOM基础
之前我们做的获取节点和操作节点的工作都是通过jQuery完成的，那jQuery库优势如何获取和操作节点的呢？答案是DOM。

DOM为我们提供了一套方法和属性，如果不依赖jQuery，哪儿我们也可以通过DOM来获取和操作节点，接下来就给大家介绍如果使用DOM提供的接口。

#### 获取节点
``` js
//通过id获取
document.getElementById("id");
//通过class获取
document.getElementsByClassName("class");
//通过元素获取
document.getElementsByTagName("element");
//通过选择器获取一个元素，如果选择器获取多个元素，那么找到第一个
document.querySelector("#id");
//通过选择器获取多个元素
document.querySelectorAll(".class");
```

#### 绑定事件

#### 改变样式

