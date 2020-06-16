const fs = require('fs')
const chalk = require('chalk')

const noteAdded = chalk.green.underline
const titleTaken = chalk.yellow.underline
const removedNote = chalk.green.underline
const notFoundNote = chalk.red.underline
const yourNotes = chalk.magenta.underline
const yourNotesLines = chalk.magenta

const getNotes = () => 'Your notes...'

const addNote = (title, body) => {
    const notes = loadNotes()

    // Filter function works like a loop
    const duplicateNotes = notes.filter((note) => note.title === title)
    
    // duplicateNotes is a list of elements {title:, body:}
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(noteAdded('New note added!'))
    }else {
        console.log(titleTaken('Note title taken!'))
    }
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer =  fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length === notesToKeep.length){
        console.log(notFoundNote('Something went wrong! We cant found the note with the title : '+title))
    }else{
        console.log(removedNote('Note with title "'+title+'" was removed!'))
        saveNotes(notesToKeep)
    }
}

// Goal: Wire up list command
// 1. Create and export listNotes from notes.js
// - "Your notes" using chalk
// - Print note title for each note
// 2. Call listNotes from command handler
// 3. Test your work

const listNotes = () => {
    const notes = loadNotes()

    console.log(yourNotes('Your notes...'))

    console.log(yourNotesLines('===================='))
    notes.forEach((note) => {
        console.log(note.title)
    })
    console.log(yourNotesLines('===================='))
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}