// Let与Const


// 不使用ES6 
//var定义的变量未函数级作用域：
// {
//   var a = 10;
// }

// console.log(a); // 输出10

// const   a = 'aaa';
// a = 'bbbb';
// console.log(a)

// 使用ES6
{
  let a = 10;
}

// console.log(a); // 报错


// const 定义常量，值不可修改
// let 定义块作用域  作用域函数内部、对象内部、循环等


for(let i = 0; i < 5; i ++) {
	i += 1;
}
console.log(i)