## 第1节:输出hello world

#### 一、 在html文档中嵌入JavaScript代码
JavaScript代码应该写在body标签结束前的script标签中
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
    <script>
        //这里是js代码
    </script>
</body>
</html>
```

#### 二、 在网页中输出hello world(DEMO3-1-1)
可以通过一行代码让浏览器弹出一个对话框，并输出"hello world"
``` js
alert("hello world")
```

#### 三、引入外部文件
``` html
<script src="test.js"></script>
<script src="jquery.js"></script>
```

