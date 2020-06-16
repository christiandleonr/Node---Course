const fs = require('fs')
const chalk = require('chalk')

const noteAdded = chalk.green.underline
const titleTaken = chalk.yellow.underline
const removedNote = chalk.green.underline
const notFoundNote = chalk.red.underline
const yourNotes = chalk.magenta.underline
const yourNotesLines = chalk.magenta

const addNote = (title, body) => {
    const notes = loadNotes()

    // Filter function works like a loop
    // const duplicateNotes = notes.filter((note) => note.title === title)
    
    // .find method stops when find the first that match with which your are looking for
    const duplicateNote = notes.find((note) => note.title === title)

    debugger
    
    // duplicateNotes is a list of elements {title:, body:}
    if(!duplicateNote){
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

// Goal: wire up read command
// 1. Setup --title opotion for read commnad
// 2. Create readNote in notes.js
// - Search for note by title
// - Find note and print title (styled) and body (plain)
// - No note found? Print error in red
// 3. Have the command handler call the function
// 4. Test your work by running a couple command

const readNote = (title) => {
    const notes = loadNotes()

    const noteFound = notes.find((note) => note.title === title)

    if(noteFound){
        console.log(yourNotes(noteFound.title))
        console.log(noteFound.body)
    }else{
        console.log(notFoundNote('Note not found'))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}