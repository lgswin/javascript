import _ from 'lodash'

const usersA = [
    {
        userId : '1',
        name: 'lgs'
    },
    {
        userId : '2',
        name: 'Neo'
    }
]

const usersB = [
    {
        userId : '1',
        name: 'lgs'
    },
    {
        userId : '3',
        name: 'Any'
    }
]

const usersC = usersA.concat(usersB)

console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 하나의 배열에서 중복요소 제거

const usersD = _.unionBy(usersA, usersB, 'userId') // 여러 배열 요소에서 중복요소 제거
console.log('unionBy', usersD)

const users1 = [
    { 
        userId: '1',
        name: 'lgs'
    },
    { 
        userId: '2',
        name: 'Neo'
    },
    { 
        userId: '3',
        name: 'Amy'
    },
    { 
        userId: '4',
        name: 'Evan'
    },
    { 
        userId: '5',
        name: 'Lewis'
    },
]

const foundUser = _.find(users1, {name: 'Amy'})
const foundUserIndex = _.findIndex(users1, {name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users1, {name : 'lgs'})
console.log(users1)