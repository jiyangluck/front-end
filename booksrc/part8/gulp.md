## 第3节:gulp入门
gulp是一个前端自动化工具，本节课我们介绍使用gulp和gulp的插件来实现压缩css和混淆js的功能。

#### 全局安装gulp
``` bash
npm install gulp -g
```

#### 压缩css
使用gulp压缩css，我们需要安装gulp-clear-css插件
``` bash
npm install --save-dev gulp-clear-css
```

``` js
var gulp = require("gulp");
var cleanCSS = require("gulp-clean-css");
gulp.task("default",function(){
    return gulp.src("src/*.css")
        .pipe(cleanCSS())
        .pipe(gulp.dest("dist"));
})
```

#### 混淆js
使用gulp混淆css，我们需要安装gulp-uglify插件
``` bash
npm install --save-dev gulp-uglify
```

``` js
var gulp = require("gulp");
var uglify = require("gulp-uglify");
gulp.task("default",function(){
    return gulp.src("src/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist"))
})
```

**想了解更多关于gulp的课程，请关注【博易网】公众号，实时了解课程最新消息**