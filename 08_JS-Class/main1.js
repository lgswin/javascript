function User(first, last) {
    this.firstName = first
    this.lastName = last
}
User.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

const lgs = new User('Gs', 'Lee')
const amy = new User('Amy', 'Clark')
const neo = new User('Neo', 'Smith')

console.log(lgs.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())

