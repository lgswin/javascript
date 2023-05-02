// 형 변환 (type conversion)

const a = 1;
const b = '1'

console.log( a === b) // 일치 연산자
console.log( a == b) // 동등 연산자, 안쓰는것 권장!

// Truthy (참과 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy (거짓과 같은 값)
// false, '', null, undefined, 0, -1, NaN

if ('false') {
    console.log('Truthy')
}

if (!null) {
    console.log('Falsy')
}