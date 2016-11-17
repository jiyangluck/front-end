## 第3节:使用jQuery中的ajax方法请求数据

#### 一、 不刷新页面请求数据

使用jQuery的ajax方法，在不刷新页面的情况下向服务器请求一段字符串。
``` js
$("button").click(function(){
    $.ajax({
        type:"get",
        url:"/getdata"
    }).done(function(data){
        alert(data);
    })
})
```

