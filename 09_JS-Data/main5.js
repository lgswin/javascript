const userAge = {
    // key : value
    name : 'lgs',
    age : 85
}

const userEmail = {
    name : 'lgs',
    email : 'thesecon@gmail.com'
}


const target = Object.assign(userAge, userEmail) // target <- source
// const target = Object.assign({}, userAge, userEmail) // userAge 원본을 유지하고 싶을때, userAge, userEmail을 합쳐서 새로운 객체 반환
console.log(target)
console.log(userAge)
console.log(target === userAge) // 같은 메모리를 참조하므로 true

const a = {k: 123}
const b = {k: 123}
console.log(a===b) // a와 b는 별개의 메모리 주소 -> false 


const user = {
    name: 'lgs',
    age: 85,
    email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)