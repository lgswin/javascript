// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const a = 7

// Uncaught TypeError: double is not a function
/* double()

const double = function() {
    console.log(a*2)
}
*/

// Function hoisting 
// 함수 표현으로 함수가 작성되어 있으면 함수가 아래 정의되어 있어도 사용하는데 문제 없음
double()

function double() {
    console.log(a*2)
}