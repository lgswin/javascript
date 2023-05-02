// 산술 연산자(arithmetic operator)
console.log(1+2)
console.log(5-7)
console.log(3*4)
console.log(10/2)
console.log(7%5)

// 할당 연산자 (assignment operator)
const a = 2
let b = 3
console.log(a)
console.log(b)
b = b+1;
console.log(b)
b += 1;
console.log(b)

// 비교 연산자 (comparison operator)
const c = 1
const d = 1
console.log(c === d)

function isEqual(x, y) {
    return x === y
}
console.log(isEqual(1, 1))
console.log(isEqual(1, '1'))

console.log(c !== d)

// 논리 연산자 (logical oeprator)
const e = 1 === 1
const f = 'AB' === 'AB'
const g = true

console.log(e)
console.log(f)
console.log(g)

const h = false
console.log('&&: ', f && g)
console.log('&&: ', g || h)

// 삼항 연산자 (ternary operator)
const  i = 1 < 2
if (i) {
    console.log('참')
} else {
    console.log('거짓')
}

console.log (i ? '참' : '거짓')