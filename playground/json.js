const fs = require("fs");

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
// convert it into string
var originalNoteString = JSON.stringify(originalNote);

// save this string to notes.json file
fs.writeFileSync("notes.json", originalNoteString);

// ***************************************************

// read the content of notes.json
var noteString = fs.readFileSync("notes.json");

// coonvert this string to object
var note = JSON.parse(noteString);

console.log(typeof note, note);