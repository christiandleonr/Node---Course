const chalk = require('chalk')
const yargs = require('yargs')
const { argv, demand, demandOption } = require('yargs')
const notes = require('./notes')
const { removeNote, listNotes, readNote } = require('./notes')

const colorRemove = chalk.red.underline
const colorRead = chalk.cyanBright.underline
const colorList = chalk.magenta.underline

// Goal: Refactor all functions
// 1. If function is a methos, use ES6 method definition syntax
// 2. Otherwise, use most concise arrow function possible
// 3. Test your work

// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(){
        notes.addNote(argv.title, argv.body)
    }
})

// Challenge: Add two new commands
// 1. Setup command to support "list" command (print placeholder message for now)
// 2. Setup command to support "read" command (print placeholder message for now)
// 3. Test your work by running both command and ensure correct output

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler(){
        listNotes()
    }
})

// Challenge: setup command option and function
// 1. Setup the remove command to take a required "--title" option
// 2. Create and export a remove command handler
// 3. Call remove in remove command handler
// 4. Have removeNote log the title of the note to be removed
// 5. Test your work using: node app.js remove --title="some title"

// Challenge: Wire up removeNote
// 1. Load existing notes
// 2. Use array filter method to remove the matching note (if any)
// 3. Save the newly created array
// 4. Test your work with a title that exists and a title that doesn't exist

// Challenge: Use chalk to provide useful logs for remove
// 1. If a note is removed, print "Note removed!" with a green background
// 2. If no note is removed, print "No note found!" with a red background

yargs.command({
    command: 'remove',
    describe: 'Remove a note by the title',
    builder: {
        title: {
            describe: 'The title of the note that you want to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note by the title',
    builder: {
        title: {
            describe: 'The title of the note that you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        readNote(argv.title)
    }
})

console.log(yargs.argv)