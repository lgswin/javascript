// 변수 유효범위 (Variable scope)
// var, let, const

function scope() {
    if (true) {
        const a = 123
        console.log(a) // for local variable
    }
    // console.log(a) // error
}

scope()