// 函数参数默认值

// 不使用ES6

function foo(height,color) {
	var height = height || 50;
	var color = color || 'red';
	console.log(height,color);
} 

foo(0,'black') // 结果 50 'black'


// 使用ES6

function foo(height = 50, color = 'red') {
	console.log(height,color);
}

foo(0,'black') // 结果 0 'black'