// Promise


// 不使用ES6 
//嵌套两个setTimeout回调函数：
setTimeout(function()
{
    console.log('Hello'); // 1秒后输出"Hello"
    setTimeout(function()
    {
        console.log('Fundebug'); // 2秒后输出"Fundebug"
    }, 1000);
}, 1000);


// 使用ES6
//使用两个then是异步编程串行化，避免了回调地狱

// var promise = new Promise( (resolve, reject) => {
// 	 setTimeout(resolve, 1000);
// })
// promise.then( () => {
// 	console.log("hello");
// 	return promise;
// }).then( () => {
// 	console.log("Fundbug");
// })