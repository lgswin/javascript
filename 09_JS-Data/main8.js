// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
import _ from 'lodash'

const user = {
    name: 'lgs',
    age: 85,
    emails: ['thesecon@gmail.com']
}

const copyUser = user
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-------')
console.log('-------')

//const shallowCopyUser = Object.assign({}, user)
const shallowCopyUser = {...user}
console.log(shallowCopyUser === user)

user.age = 42
console.log('user', user)
console.log('copyUser', shallowCopyUser)


console.log('-------')
console.log('-------')

user.emails.push('neo@zillinks.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)


const deepCopyUser = _.cloneDeep(user)
console.log(deepCopyUser === user)

user.age = 
console.log('user', user)
console.log('copyUser', deepCopyUser)


console.log('-------')
console.log('-------')

user.emails.push('neo1@zillinks.com')
console.log(user.emails === deepCopyUser.emails)
console.log('user', user)
console.log('copyUser', deepCopyUser)


