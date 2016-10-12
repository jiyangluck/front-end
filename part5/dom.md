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
获取节点后，可以为获取的节点绑定事件
``` js
var elem = document.querySelector("#id");
elem.onclick = function(){
    alert("hello event");
}
```

#### DEMO5-1-1:获取属性
本案例中有一个文本框和一个按钮，在文本框中输入内容后点击按钮会弹出文本框中输入的内容。例子实际上就是：点击按钮触发事件，alert弹出文本框的value属性值。在这里，我们使用document.querySelector方法获取元素。
``` js
var oTxt = document.querySelector("#txt");
var oBtn = document.querySelector("#btn");
oBtn.onclick = function(){
    alert(oTxt.value);
}
```

#### DEMO5-1-2:添加节点
html
``` html
<input type="text" id="txt">
<button id="btn">按钮</button>
<ul id="list">
    <li>苹果</li>
    <li>香蕉</li>
    <li>鸭梨</li>
</ul>
```
JavaScript

``` js
var oTxt = document.querySelector("#txt");
var oBtn = document.querySelector("#btn");
var oList = document.querySelector("#list");
oBtn.onclick = function(){
    var value = oTxt.value;
    var oLi = document.createElement("li");
    var text = document.createTextNode(value);
    oLi.appendChild(text);
    oList.appendChild(oLi);
}
```

