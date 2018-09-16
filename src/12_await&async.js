/* async await */
/* 2 基本用法 */
// function timeout(time){
// 	return new Promise((resolve, reject) =>{
// 		setTimeout(function(){
// 			resolve()	
// 		}, time)
// 	})
// }
// async function print(){
// 	await timeout(1000);
// 	console.log("thinkive")
// }
// print()


/* 2 async函数使用形式 */

// async function foo() {};
// const foo = async function(){};
// let obj = {async foo(){}};
// obj.foo().then(...)

// class Storage {

// }
// const foo = async () => {};

/* 3 错误处理 */


async function print(){
	try {
		await new Promise((resolve, reject) =>{
			reject(new Error("await error"))
		})
	} catch(e){
		
	}

}
print()
// .then(v => console.log(v))
// .catch(e => {console.log(e)})
