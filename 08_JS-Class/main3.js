// ES6 Classes

const lgs = {
    name : 'lgs',
    normal: function() {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

lgs.normal()
lgs.arrow()