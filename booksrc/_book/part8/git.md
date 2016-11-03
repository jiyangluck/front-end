## 第1节:git
git是一个分布式版本控制工具，但是本节的内容并不涉及版本控制，我们只是用git和github存储我们的代码，并用github-pages发布我们只做的静态网页。

#### 下载和安装git

#### git bash基础命令
学习git命令之前，我们先了解一些基础的bash命令，我们可以在git bash工具中输入下述命令以实现相应的功能。

``` bash
cd <folderName>       --进入folderName目录中
cd ..                 --返回上一级目录
mkdir <folderName>    --创建一个名字为folderName的目录
```

#### git的常用命令

``` bash
git init              --仓库初始化（将本地的文件夹编程一个本地的git仓库）
git add               --将工作区的修改添加到暂存区
git commit            --将暂存区的内容提交到分支上
git push              --将本地仓库推送到远程仓库
git pull              --将远程仓库的内容拉到本地
```