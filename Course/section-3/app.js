const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Christian')
fs.appendFileSync('notes.txt', '\nPonce gay')
