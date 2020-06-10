const chalk = require('chalk')
const greenMessage = chalk.green.underline('Success!')
const yellowMessage = chalk.yellow.underline('Warning!')
const redMessage = chalk.red.underline('Error!')
console.log(greenMessage, yellowMessage, redMessage)

const colorAdd = chalk.blue.underline
const colorRemove = chalk.red.underline

const command = process.argv[2]
console.log(process.argv)

if (command === 'add'){
    console.log(colorAdd('Adding note!'))
} else if (command === 'remove'){
    console.log(colorRemove('Removing note!'))
} 