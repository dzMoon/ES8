/* 数组*/

/* 1 正常解构*/

// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

/* 2 变量不一致*/
// let [a, b, c] = [1, 2, 3, 4]
// console.log(a, b, c)

/* 3 定义默认值*/

// let [a, b, c,d=5] = [1, 2, 3 ]
// console.log(a, b, c,d)

/* 4 定义默认值null & undefined*/

// let [a, b, c,d=5] = [1, 2, 3, null ]
// console.log(a, b, c,d)


/* 对象 */

/* 1 正常 变量名与值相同 */

// let {name, age} = {name: 'thinkive', age: '15'}

// console.log(name, age)

/* 2 解构之前定义变量 */

// let name;
// let age;

// ({name, age} = {name: 'thinkive', age: '15'})
// console.log(name, age);

/* 字符串 */
/* 1 依次解构 */
let [a, b, c] = '123'
console.log(a, b, c)


