// Local storage vs session storage : 검사 -> application -> storage

const user = {
    'name': 'lgs',
    age : 85,
    emails : [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}
/*
localStorage.setItem('user', JSON.stringify(user))
console.log(JSON.parse(localStorage.getItem('user')))


localStorage.removeItem('user')
console.log(JSON.parse(localStorage.getItem('user')))
*/

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))