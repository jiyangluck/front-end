## 第3节:使用jQuery中的ajax方法请求数据

#### 不刷新页面请求数据
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

