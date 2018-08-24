//使用padEnd()可以在字符串后面填充指定的字符串



// 不使用ES8
console.log('0.00 ' + '0.00' )         	
console.log('10,000.00 ' + '10,000.00' )    
console.log('250,000.00 ' + '250,000.00')



// 使用ES8


console.log('0.00'.padEnd(20) + '0.00' )         	
console.log('10,000.00'.padEnd(20) + '10,000.00' )    
console.log('250,000.00'.padEnd(20) + '250,000.00')