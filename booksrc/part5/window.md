## 第2节:window对象的常用方法和事件
window对象是JavaScript在浏览器环境运行的全局对象，所有全局变量都是window对象的属性，所有全局的函数都是window对象的方法。本节为大家介绍window对象的常用方法和事件。

#### 弹出框
window对象有三个弹出框方法
``` js
alert("hello");
prompt("请输入文字");
confirm("是否删除此条数据");
```

#### window事件
window对象控制着浏览器窗口，所以浏览器窗口发生一些变化的时候，会触发一些window对象的事件
``` js
window.onload
window.resize
```

#### 计时器方法
在浏览器中经常会看到计时或自动播放的效果，都是通过计时器方法实现的，下面来介绍四个计时器方法的简单用法
``` js
setInterval();
clearInterval();
setTimeout();
clearTimeout();
```

#### DEMO5-2-1:五秒后跳转至百度
首先，我们要使用js实现页面的跳转
``` js
location.href = "http://baidu.com"
```

然后我们实现五秒钟之后跳转到百度，代码如下：
html
``` html
<p><span id="second">5</span>秒后自动跳转到百度</p>
<!-- span用来显示剩余的秒数 -->
```
javascript
``` js
var second = 5;
function countSecond(){
    $("#second").text(second);
    second--;
    if(second == 0){
        window.location.href = "http://baidu.com";
    }
}
setInterval(countSecond,1000);
```

#### DEMO5-2-2:图片自动播放(用jQuery制作)
[效果演示]()
[案例代码]()

