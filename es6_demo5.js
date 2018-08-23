// 对象属性简写
// 属性与值相同时，可以将值省略
// 不使用ES6 
var house = 'qwe123'
var mouse = 'mouse'
var data1 = {
	house: house,
	mouse: mouse
}
console.log(data1)

// 使用ES6
var house = 'qwe123'
var mouse = 'mouse'

var data2 = {
	house,
	mouse
}
console.log(data2)