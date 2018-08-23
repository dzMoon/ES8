// 模块化



JavaScript一直没有官方的模块化解决方案，开发者在实践中主要采用CommonJS和AMD规范。而ES6制定了模块(Module)功能。

不使用ES6

Node.js采用CommenJS规范实现了模块化，而前端也可以采用，只是在部署时需要使用Browserify等工具打包。这里不妨介绍一下CommenJS规范。

module.js中使用module.exports导出port变量和getAccounts函数
exports 与 module.exports区别， 两者初始指向同一个空对象{}，在不改变exports的时候，可以代替module.exports，当exports被赋值时，无法导出，只有module.exports导出指定内容 
module.exports = {
  port: 3000,
  getAccounts: function() {
    ...
  }
}
main.js中使用require导入module.js

var service = require('module.js')
console.log(service.port) // 输出3000

使用ES6

ES6中使用export与import关键词实现模块化。

module.js中使用export导出port变量和getAccounts函数

// 导出
export var port = 3000
export function getAccounts(url) {
  ...
}


// 导入

import {port, getAccounts} from 'module'
console.log(port) // 输出3000

import * as service from 'module'
console.log(service.port) // 3000