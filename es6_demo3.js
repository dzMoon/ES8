// 多行字符串

// 不使用ES6   \n 换行  \t 空格

var str1 = 'Then took the other, as just as fair,\n\t'
    + 'And having perhaps the better claim\n\t'
    + 'Because it was grassy and wanted wear,\n\t'
    + 'Though as for that the passing there\n\t'
    + 'Had worn them really about the same,\n\t'

console.log(str1);
// 使用ES6

var str2 = `Then took the other, as just as fair,
     'And having perhaps the better claim
     'Because it was grassy and wanted wear,
     'Though as for that the passing there
     'Had worn them really about the same`

console.log(str2)