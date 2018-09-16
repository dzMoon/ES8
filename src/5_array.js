/* 扩展运算符 */

/* 1 用法 */

// let arr = ['t', 'h' , 'i', 'n', 'k', 'i', 'v', 'e'];
// console.log(...arr);

/* 2 作用，改变值 */

// let arr = ['t', 'h' , 'i', 'n', 'k', 'i', 'v', 'e'];
// // let arr2 = arr;
// let arr2 = [...arr];
// arr2.push('aaa');
// console.log(arr, arr2)

/* 数组 */

/* json 数组格式转换 from*/

// let arr = {
// 	'0': 'thinkive',
//     '1': '思迪',
//     '2': '深圳',
//     length:3
// }
// console.log(Array.from(arr));

/* of 将变量或者文本转化为数组*/

// console.log(Array.of('jweofjiewoef'))

/* find() 查找 */
// let arr = ['a', 'b', 'c', 'd'];

// console.log(arr.find(function(val, index, arr){
// 	return val == 'a'
// }))

/* for of*/
let arr = ['a', 'b', 'c', 'd'];
// for(let val of arr.keys()){
// 	console.log(val)
// }
/* keys 索引值 entries 键值 */

for(let [index,val] of arr.entries()){
	console.log(index, val)
}


