const { first } = require("lodash")

const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers[1])
console.log(fruits[2])

console.log(numbers.length)
console.log(fruits.length)
console.log([1,2].length)
console.log([].length)

console.log(numbers.concat(fruits))
console.log(numbers)
console.log(fruits)

// .forEach()
fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})
/*
Apple 0 (3) ['Apple', 'Banana', 'Cherry']
Banana 1 (3) ['Apple', 'Banana', 'Cherry']
Cherry 2 (3) ['Apple', 'Banana', 'Cherry']
*/
fruits.forEach(function (fruit, i) {
    console.log(fruit, i)
})
/*
Apple 0
Banana 1
Cherry 2
*/

// .map()
const a = fruits.forEach(function (fruit, index) {
    console.log(`${fruit}-${index}`)
})
const arrow1 = fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`)
})
console.log(arrow1)

const b = fruits.map(function (fruit, index) {
    return `${fruit}-${index}`
})
const arrow2 = fruits.map((fruit, index) => {
    return `${fruit}-${index}`
})
console.log(arrow2)

const c = fruits.map(function (fruit, index) {
    return { // 객체 데이터로 반환
        id: index,
        name: fruit
    }
})
const arrow3 = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}))
console.log(arrow3)
