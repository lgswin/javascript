const { first } = require("lodash")
//.filter()
const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

const a = numbers.map(number => { // callback 함수
    return number < 3
})
console.log(a)

const b = numbers.filter(number => { // callback 함수
    return number < 3
})

console.log(b)

//.find() .findIndex()
const c= fruits.find(fruit => /^B/.test(fruit)) // 'B'로 시작하는 문자 데이터
console.log(c)

const d= fruits.findIndex(fruit => /^B/.test(fruit)) // 'B'로 시작하는 문자 데이터의 index
console.log(d)

//.includes()
const e= numbers.includes(3)
console.log(e)

const f = fruits.includes('lgs')
console.log(f)

//.push() .unshift()
// 원본수정주의!

numbers.push(5) // 배열의 뒷쪽에 삽입
console.log(numbers)

numbers.unshift(0) // 배열의 앞쪽에 삽입
console.log(numbers)

//.reverse()
// 원본수정주의!

numbers.reverse()
fruits.reverse()
console.log(numbers)
console.log(fruits)
numbers.reverse()
fruits.reverse()

//.splice()
//원본수정주의!

numbers.splice(2,1) // index 2에서 1개를 지우라!
console.log(numbers)

numbers.splice(2,0,999) // index 2에 999를 삽입
console.log(numbers)

numbers.splice(2,1,100) // index 2에서 1개를 지우고 100을 삽입
console.log(numbers)

fruits.splice(2, 0, 'Orange')
console.log(fruits)

