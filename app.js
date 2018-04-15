console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');
const yargs = require('yargs')
const argv = yargs.argv
var command = process.argv[2]

console.log('Command', command)

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if(note) {
        console.log('Note created')
    } else {
        console.log('Note title taken')
        console.log('--')
        console.log(`Title: ${note.title}`)
        console.log(`Body: ${note.body}`)
    }
} else if(command ==='list') {
    console.log('listing all notes')
}
    else if(command === 'read') {
        console.log('Reading note');
    
}  else if(command === 'remove') {
        console.log('Removing note')   ;
}else {
    console.log('Command not recognized');
}
console.log(process.argv)





