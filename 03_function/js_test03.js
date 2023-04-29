// 함수 선언
function helloFunc() {
    console.log(1234);
}
helloFunc();

// 리턴값
function returnFunc() {
    return 123;
}
let a = returnFunc();
console.log(a);

// 함수선언
function sum(a, b) { // 매개변수
    return a + b;
}

// 재사용
let b = sum(1,2); // 인수(arguments)
let c = sum(7, 12);
let d = sum(2,4);

console.log(b,c,d);

// 기명(이름이 있는) 함수
// 함수 선언
function hello() {
    console.log('Hello~');
}

// 익명(이름이 없는) 함수
// 함수 표현 - 익명함수(fucntion())를 어떤 변수에 할당하는 것
let world=function() {
    console.log('World~');
}
// 함수호출
hello();
world();

// 객체 데이터 
const heropy = {
    name: 'HEROPY',
    age: 85,
    // 메소드(method)
    getName: function() {
        return this.name;
    }
};

const hisName = heropy.getName();
console.log(hisName); 
console.log(heropy.getName());