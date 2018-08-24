// Object.values()

// 不使用ES8


let obj = {a: 1, b: 2, c: 3};
 
Object.keys(obj).forEach((key) =>
{
    console.log(obj[key]); // 输出1, 2, 3
});



// 使用ES8

console.log(Object.values(obj))