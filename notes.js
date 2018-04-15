console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json')
        return notes = JSON.parse(noteString);
  
    } catch (e) {
        return [];
    }
}
 
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };  

    var duplicateNotes = notes.filter((note)=> note.title === title );

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note
    }   
}

var getAll = () => {
    console.log('Getting all notes')
}

var getNote = (title) => {
    console.log('Getting note', title)
}

var removeNote = (title) => {
  // fetch notes
  // filter notes, removing the one with title of argument
  //
  var notes = fetchNotes();
  var duplicateNotes = notes.filter((note)=> note.title === title );

  // save new notes array
  if(duplicateNotes.length !== 0) {
      saveNotes(notes)
      return note
  }

}


module.exports ={
    addNote,
    getAll,
    getNote,
    removeNote
}