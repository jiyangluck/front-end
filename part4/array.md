## 第4节:数组
在上一章中我们已经简单了解了数组的概念，在这里再复习一下

#### DEMO4-4-1:数组是元素的有序集合
``` js
var team = ["博小易","小博","小易"];
var result = team[0];
console.log(result);   //博小易
```
上面的示例代定义了一个数组team,通过team[0]的方式可以获取数组的第一个元素。

#### DEMO4-4-2:获取数组元素的个数 
``` js
var team = ["博小易","小博","小易"];
var result = team.length
console.log(result);   //3
```
数组是技术的内置对象，它自带了一些属性和方法，我们可以通过length属性获取数组元素的个数

#### DEMO4-4-3:push方法
``` js
var team = ["博小易","小博","小易"];
var result = team.push("博易");
console.log(team);   //["博小易","小博","小易","博易"]
```
push是数组自带的方法，我们可以通过push方法想数组结尾添加元素