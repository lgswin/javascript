// 함수 복습
function sum (x, y) {
    return x+y
}

const muli = function (x, y) {
    return x*y
}

function subs() {
    console.log(arguments) // 선언 없이 그냥 쓸수 있음
    return arguments[0] - arguments[1]
} 

console.log(sum(1,3))
console.log(muli(2,3))
console.log(subs(5,3))

// 화살표 함수
// () => {} vs function() {}

const double = function(x) {
    return x * 2
}
console.log ('double : ', double(7))

const doubleArrow = (x) => {
    return x * 2
}
console.log('doubleArrow : ', doubleArrow(7))

const shortDoubleArrow = (x) => x*2 // 함수 안에 다른 구문이 없어야 함, 매개변수가 1개 이면 ()도 필요 없음.
console.log('shortDoubleArrow : ', shortDoubleArrow(7))

const shortFunction = x => { x - 1 } // {}를 사용하면 return 구문을 반드시 사용해야함, {}가 함수 블럭으로 인식됨
// 객체 데이터를 반환하고 싶으면?

const shortObject = x => ({
    name : 'gs'
}) // ()로 한번 더 묶어주면 됨

// 즉시 실행 함수 
// IIFE, Immediately-Invoked Function Expression
const a = 7
function double1() {
    console.log(a * 2)
}
double1();

// () ()
(function() {
    console.log(a*2)
})();

// ( () )
(function() {
    console.log(a*2)
}()); 