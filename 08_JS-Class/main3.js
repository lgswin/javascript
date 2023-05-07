// ES6 Classes

const lgs = {
    name : 'lgs',
    // normal: function() {
    normal() { // 일반 함수 사용할때 function() 제거 가능
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

lgs.normal()
lgs.arrow()