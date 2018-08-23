// 解构赋值

var data = {
	house: 'hose',
	mouse: 'mouse',
	list: 'list'
}
var arr = [
	'col1111' , 'col2'
]

// 不使用ES6 

var house = data.house
var mouse = data.mouse
console.log(house,mouse)

// 使用ES6

var {house, mouse} = data
var [col1, col2] = arr

console.log(house, mouse)
console.log(col1, col2)