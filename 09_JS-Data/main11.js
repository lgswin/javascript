// JSON (JavaScript Object Notation)
// 자바스크립트의 객체 표현법
import myData from './myData.json' // json은 문자 데이터

console.log(myData)

const user = {
    'name': 'lgs',
    age : 85,
    emails : [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)