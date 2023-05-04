// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setinterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(() => {
    console.log('Hello gunsu!')
}, 3000)

let i = 0
const iTimer = setInterval(() => {
    i++
    console.log('Hello gunsu! ' + i)
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    console.log('call clearTimeout')
    clearTimeout(timer)
    clearInterval(iTimer)
})

