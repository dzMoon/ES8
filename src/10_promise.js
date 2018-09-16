/* promise */


/* 1 基本用法 resolve reject then */


// let promise = new Promise((resolve, reject) => {
// 	console.log(0)
// 	setTimeout(function(){
// 		// resolve("延迟1s");
// 		reject("错误延迟1s");
// 	}, 1000)
	
// })
// promise.then(function(val){
// 	console.log(val)
// })

/* 2 catch */

// let promise = new Promise(function(resolve, reject) {
//     reject(new Error("this is bug"));
// });
// promise.catch(function(error) {
//   console.log(error);
// });

/* 2 all 全部执行完才执行*/

// let step1 = new Promise((resolve, reject) => {
// 	setTimeout(function(){
// 		resolve("延迟1s");
// 	}, 1000)
	
// })
// let step2 = new Promise((resolve, reject) => {
// 	setTimeout(function(){
// 		resolve("延迟2s");
// 	}, 2000)
	
// })

// Promise.all([step1, step2]).then(function(val){
// 	console.log(val)
// }).catch(function(err){
// 	console.log(err)
// })

/* 3 race */
//超时控制
let step1 = new Promise((resolve, reject) => {
	setTimeout(function(){
		reject(new Error('request setTimeout'));
	}, 3000)
	
})
//模拟接口调用
let step2 = new Promise((resolve, reject) => {
	setTimeout(function(){
		resolve("输出正确结果");
	}, 1000)
	
})
Promise.race([step2, step1]).then(function(val){
	console.log(val)
}).catch(function(err){
	console.log(err)
})