// const add = require('./utils')
// const sum = add(5, -1)
// console.log(sum)

// Challenge: Define and use a fucntion in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes')
const note = getNotes()
console.log(note)