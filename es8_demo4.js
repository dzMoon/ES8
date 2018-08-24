//Object.getOwnPropertyDescriptors()


let azatsBooks = {
    books: ['React Quickly'],
    get latest()
    {
        let numberOfBooks = this.books.length;
        if (numberOfBooks == 0) return undefined;
        return this.books[numberOfBooks - 1];
    }
};


// 不使用ES8
//获取azatsBooks对象的books属性的属性描述符： 
console.log(Object.getOwnPropertyDescriptor(azatsBooks, 'books'));
 
/** 输出books属性的属性描述
[object Object] {
  configurable: true,
  enumerable: true,
  value: ["React Quickly"],
  writable: true
}
**/


//获取azatsBooks对象的lastest方法的属性描述符：


console.log(Object.getOwnPropertyDescriptor(azatsBooks, 'latest'));
 
/** 输出lastest方法的属性描述
[object Object] {
  configurable: true,
  enumerable: true,
  get: function get latest() {
    let numberOfBooks = this.books.length
    if (numberOfBooks == 0) return undefined
    return this.books[numberOfBooks - 1]
  },
  set: undefined
}
**/



// 使用ES8



console.log(Object.getOwnPropertyDescriptors(azatsBooks))
 
/** 输出azatsBooks对象所有自身属性的属性描述
[object Object] {
  books: [object Object] {
    configurable: true,
    enumerable: true,
    value: ["React Quickly"],
    writable: true
  },
  latest: [object Object] {
    configurable: true,
    enumerable: true,
    get: function get latest() {
      let numberOfBooks = this.books.length
      if (numberOfBooks == 0) return undefined
      return this.books[numberOfBooks - 1]
    },
    set: undefined
  }
}
**/