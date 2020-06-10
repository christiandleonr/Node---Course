const chalk = require('chalk')
const yargs = require('yargs')

const greenMessage = chalk.green.underline('Success!')
const yellowMessage = chalk.yellow.underline('Warning!')
const redMessage = chalk.red.underline('Error!')
console.log(greenMessage, yellowMessage, redMessage)

const colorAdd = chalk.blue.underline
const colorRemove = chalk.red.underline
const colorRead = chalk.cyanBright.underline
const colorList = chalk.magenta.underline

// const command = process.argv[2]

// if (command === 'add'){
//     console.log(colorAdd('Adding note!'))
// } else if (command === 'remove'){
//     console.log(colorRemove('Removing note!'))
// }

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function(){
        console.log(colorAdd('Adding a new note!'))
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log(colorRemove('Removing note!'))
    }
});

// Challenge: Add two new commands
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both command and ensure correct output

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log(colorList('Listing out all the notes!'))
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function(){
        console.log(colorRead('Reading a note!'))
    }
})

console.log(yargs.argv)