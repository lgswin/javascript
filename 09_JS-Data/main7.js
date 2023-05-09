// 데이터의 불변성 (Immutability)
// 원시데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, Function

let a = 1
let b = 4
console.log(a, b, a===b)
b = a
console.log(a, b, a===b)
a = 7
console.log(a, b, a===b)
let c = 1
console.log(b, c, b===c)

let aa = {k : 1}
let bb = {k : 1}
console.log(aa, bb, aa===bb)
aa.k = 7
bb = aa
console.log(aa, bb, aa===bb)
aa.k = 2
console.log(aa, bb, aa===bb)
let cc = bb
console.log(aa, bb, cc, aa===cc)
aa.k = 9
console.log(aa, bb, cc, aa===cc)