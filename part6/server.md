## 第2节:express搭建静态服务器

#### 使用express搭建一个简单的服务器
``` js
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("hello");
})
app.listen(3000,function(){
    console.log("服务器成功启动！")
})
```

#### 搭建静态服务器
``` js
var express = require("express");
var app = express();
app.use(express.static("public"));
app.listen(3000,function(){
    console.log("服务器成功启动！")
})
```

#### 设置路由，处理表单提交的请求
``` js
var express = require("express");
var app = express();
app.use(express.static("public"));
app.get("/getdata",function(req,res){
    res.send("hello");
})
app.listen(3000,function(){
    console.log("服务器成功启动！")
})
```
