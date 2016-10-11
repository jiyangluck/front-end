# 学习前的准备工作

**这是一个以案例引导知识点的前端开发教程，所以不会介绍各种繁杂的概念和发展史。类似于什么是html，什么是css，它们有多少个版本，这些问题都不会在教程中出现。教程唯一的目的就是让同学通过课程案例高效地学习前端开发**

## 工具
* chrome浏览器
* sublime text 3 
* photoshop 

#### chrome简介
选择chrome浏览器是因为它提供了强大的调试工具，可以让开发人员更快的锁定代码问题所在位置。（按f12可以打开chrome浏览器）。

注：firefox浏览器功能也很强大，但是打开速度会慢一些。

#### sublime text插件安装
首先要在sublime text中安装package control。

点解菜单中的 【view】【show control】,然后输入如下代码。

sublime text3

import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())


sublime text2

import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')


使用package control下载下面两个插件。
* emmet:快速编写html
* OmniMarkupPreviewer：预览md格式文件

#### Photoshop
[百度云下载地址](http://pan.baidu.com/s/1c5jDc6)


## 推荐网站
对于初学者来说，下面两个工具类的网站可以提供很大的帮助
* [w3school](http://www.w3school.com.cn/)
* [w3cschool](http://www.w3cschool.cn/)

课程中所有案例可以到这里下载https://github.com/jiyangluck/front-end/tree/master/example


