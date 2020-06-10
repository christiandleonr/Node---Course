// const add = require('./utils')
// const sum = add(5, -1)
// console.log(sum)

// Challenge: Define and use a fucntion in a new file
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function
// 4. From app.js, load in and call the function printing message to console

// const validator = require('validator')
// const getNotes = require('./notes')

// const note = getNotes()
// console.log(note)

// console.log(validator.isURL('chiesa'))

// Challenge: Use the chalk library in your project
// 1. Install chalk
// 2. Load chalk into app.js
// 3. Use it to print the String "Success!" to the console in green
// 4. Test your work

const chalk = require('chalk')
const greenMessage = chalk.green.underline('Success!')
const yellowMessage = chalk.yellow.underline('Warning!')
const redMessage = chalk.red.underline('Error!')
const blueMessage = chalk.blue.underline('Hello World!')
console.log(greenMessage, yellowMessage, redMessage, blueMessage)