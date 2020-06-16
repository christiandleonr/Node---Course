// const square = function (x){
//     return x*x
// }

// Is used when you have to use another statements inside the function
// const square = (x) => {
//     return x*x
// }

// Is used when you only want to return something
// const square = (x) => x * x

// console.log(square(3))

// In arrow function we cant use 'this' value
const event = {
    name: 'Birthday Party',
    guestList: ['Ponce', 'Hugo', 'Edgar', 'Bryan'],
    // function inside a json
    printGuestList() {
        console.log('Guest list for ' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()
