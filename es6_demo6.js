// 箭头函数


// 不使用ES6 
//普通函数体内的this，指向调用时所在的对象。
function foo() 
{
    console.log(this.id);
}

foo.call({ id: 2 }); // 输出2
// 使用ES6
//箭头函数体内的this，就是定义时所在的对象，而不是调用时所在的对象。
var foo = () => {
	console.log(this.id);
}
foo.call({id: 2});