# 课前介绍

本课程示例代下载地址 https://github.com/jiyangluck/front-end/tree/master/example

在学习前，先为同学们介绍一下课程中需要用到的最进本的软件，同学们可以按照步骤自行安装软件，如果安装中出现问题可以到【博易技术交流群】提问。

学习课程
* chrome
* sublime text

#### chrome
chrome是谷歌发布的浏览器，[下载地址](https://www.baidu.com/link?url=FZ4JXdkQ5Was9KVNG0WnduDS773ErqoYson6kijhWQDcb98D3bviK0BIv08eUM2WVtkuxCiXSxIyxJMrbK3oZBMPalozNkZFMAa-08Q5zpO&wd=&eqid=fcf54ea60000029900000002580078d9)

#### sublime text
sublime text一款前端开发编辑器，[下载地址](https://www.sublimetext.com/3)，课程视频中使用的sublime text是3版本，同学们也可以使用2版本。

**sublime text插件安装**
sublime text插件可以扩展编辑器的功能，让我们可以更便捷地书写代码，这里我们只安装一个最基本的插件-emmet，安装插件步骤如下（安装插件请保持网络通畅）：

一、安装package control

打开sublime text编辑器，点击菜单中的 【view】 【show control】会弹出一个控制台界面，在控制台最下方输入下面的代码，然后按【回车键】，稍等片刻，控制台有所提示后。重启sublime text，这时在菜单中的【Preferences】中可以看到【package control】;

**sublime text3**

import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())


**sublime text2**

import urllib2,os; pf='Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler( ))); open( os.path.join( ipp, pf), 'wb' ).write( urllib2.urlopen( 'http://sublime.wbond.net/' +pf.replace( ' ','%20' )).read()); print( 'Please restart Sublime Text to finish installation')

二、使用package control安装emmet插件
上一步在菜单中已经有了【package control】，点击【package control】会看到一个输入框，在输入框中输入“install package”,会弹出另一个输入框(如果sublime text左下角出现一个 “=” 左右摆动，请等待，同下)，在弹出的输入框中输入“emmet”,sublime text 便会在网络上下载emmet，安装成功后会有英文提示。

三、测试emmet插件
插件安装完成后，重新启动sublime text,新建一个html文件，输入“!”，再按“tab”键，会html文件中会生成一段html代码，如下，看到下面代码，说明插件安装成功。
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```
**注意**
* 文件一定要保存成html格式（后缀是.html），否则不能生成这段代码。
* 感叹号一定要是英文的感叹号，如果输入中文的感叹号将不起作用。
* 上述两点没问题，按“tab”键仍然没有反应，但sublime text左下角有“=”左右摆动，请等待。

#### sublime text常用快捷键介绍(包括一些复制、保存等通用快捷键)
* ctrl + n 新建
* ctrl + s 保存
* ctrl + c 赋值
* ctrl + v 粘贴
* ctrl + [ 减少一个缩进
* ctrl + ] 增加一个缩进
* ctrl + / 注释选中代码，若没有选中则注释本行

chrome和sublime text安装完成后，我们就可以开始学习前端课程了。



