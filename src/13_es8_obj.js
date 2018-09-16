/* es8 obj*/
/* obj.values 遍历对象的属性值 */
let obj = {
	name: 'thinkive',
	age: '10',
	address: '深圳'
}

// console.log(Object.values(obj))


/* obj.entries() 遍历对象的属性名和属性值*/

for(let val of Object.entries(obj)){
	console.log(val)
}
