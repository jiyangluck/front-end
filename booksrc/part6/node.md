## 第1节:初识node

#### 下载和安装node
到[node中文网](http://nodejs.cn/)下载最新版本的node并安装。node的安装包自带npm，npm是node的包管理器，我们在开发的过程中可以使用npm下载项目的依赖模块（使用npm需要用到命令行工具，在这里推荐使用git bash，git bash详细信息见第八章）。

在git bash中输入
``` bash
node -v
npm -v
```
如果两个命令都能正确输出node和npm的版本号，说明软件安装成功。

#### hello world
我们用node完成的第一个任务仍然是输出hello world，我们需要新建一个js文件,文件名为myscript.js，里面添加一行代码。
``` js
console.log("hello world");
```
然后在git bash中输入
``` bash
node myscript.js
```
上面代码执行后会在命令行的控制台输出hello world。

#### 模块的概念
node中有三种模块
* 核心模块
* 自定义模块
* 第三方模块
其中【核心模块】是安装node之后就自带的模块，我们可以直接使用。【自定义模块】是我们自己创建的模块，其实在node中，我们写的每一个文件都可以是一个模块。【第三方模块】是别人写好并发布的模块，我们可以通过npm下载第三方模块来使用别人为我们写好的功能。本节课程我们主要使用一个叫做express的第三方模块。

#### 使用npm下载第三方模块
下载express
``` bash
npm install express
```

#### package.json文件
package.json文件简要说明
``` js
{
    "name":"myname",
    "version":"0.0.0"
}
```

使用package.json文件来管理项目依赖
``` bash
npm install express --save-dev
```

