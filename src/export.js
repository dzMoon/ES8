/* 直接导出 导出变量*/
// export var name = 'thinkive';


/* 多变量的导出 */

// export var age = 10;

var name = 'thinkive'
var age = 10
// export { name as x  , age as y}

const add = (a, b) => {a + b};

/* export default 相当于默认的入口，一个文件中只能有一个*/


// export {age, add};
export default {age: age};
