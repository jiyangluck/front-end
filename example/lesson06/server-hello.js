var express = require("express");
var app = express();
app.get("/",function(req,res){
	res.send("hello");
})
app.listen(3000,function(){
	console.log("服务器成功启动！")
})