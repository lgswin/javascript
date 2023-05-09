// 구조 분해 할당 (Destructuring assingment)
// 비구조화 할당

const user = {
    name: 'lgs',
    age: 85,
    email: 'thesecon@gmail.com'
}

const {name, age, email, address} = user
// const {name: lgs, age, address='Korea'} = user 
// 다른 이름으로 정의하거나 default value를 지정할수 있다.
// E.g, user.address

console.log(`사용자의 이름은 ${name}입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits // 배열은 [] 사용해야함.
console.log(a,b,c,d)
const [, bb] = fruits
console.log(bb) // Banana만 출력하고 싶을때

// 전개 연산자 (Spread)
console.log(fruits)
console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

function toObject(a, b, c) {
    return {
        a: a, 
        b: b,
        c: c
    }
}
//  const toObject = (a, c, c) => ({a, b, c})

console.log(toObject(...fruits))