// 콜백(callback)
// 함수의 인수로 사용되는 함수
// setTimeout(함수, 시간)

function timeout(cb) { // timeout callback(cb)를 매개변수로 받음
    setTimeout(() => {
        console.log('hello gunsu! ')
        cb()
    }, 3000)
}

// timeout() // 3초후에 timeout이 호출되므로 Done!이 먼저 출력됨
// console.log('Done!')
timeout(()=> {
    console.log('Done!')
}) 
