/* 类 */
/* 1 类的基本用法 */
// class Person {
// 	run () {
// 		console.log("person is run")
// 	}
// 	swimming () {
// 		console.log("person is swimming")
// 	}
// }
// let person = new Person()
// person.run()

/* 2 参数 属性 */

class Person {
	constructor (name) {
		this.name = name;
	}
	run () {
		console.log("person is run")
	}
	swimming () {
		console.log("person is swimming")
	}
}
// let person = new Person("thinkive")
// console.log(person.name)

/* 继承 类首字母大写*/

class Man extends Person {

}
let man = new Man("thinkive")
console.log(man.name)


