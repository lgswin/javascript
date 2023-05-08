/*
let result = 'Hello world!'.indexOf('world')
console.log(result) // first index of the characters

result = 'Hello world!'.indexOf('lgs')
console.log(result) // -1 : fail to find
*/

const str = '0123'
console.log(str.length)

const str1 = 'Hello world!'
console.log(str1.indexOf('lgs') !== -1)
console.log(str1.slice(0, 3))
console.log(str1.replace('world', 'lgswin'))

const str2 = 'thesecon@gmail.com'
console.log(str2.match(/.+(?=@)/)[0])

const str3 = '   Hello world   '
console.log(str3.trim())