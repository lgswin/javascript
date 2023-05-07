// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

const lgs = {
    name: 'gsLee',
    normal: function() {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

lgs.normal() // this == lgs
lgs.arrow() // this == ? arrow가 정의된 함수 영역에 this를 위한 객체가 정의 되어 있어야 함.

const amy = {
    name: 'Amy',
    normal: lgs.normal,
    arrow: lgs.arrow
}

amy.normal()
amy.arrow()


function User(name) {
    this.name = name
}
User.prototype.normal = function() {
    console.log(this.name)
}
User.prototype.arrow = () => {
    console.log(this.name)
}

const lgs2 = new User('gsLee2')

lgs2.normal()
lgs2.arrow()


const timer = {
    name: 'lgs',
    timeout: function() {
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}

timer.timeout() 