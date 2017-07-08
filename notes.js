// console.log("Starting notes.js");
const fs = require("fs");

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
    // console.log("Adding note", title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    /**
     * array.filter(() => { return ...}) => take a callback function as an args
     * if value exists then it return true otherrwise false
     * note.title => is the title exist or not in an array
     * title => is the title which we pass through cmd
     */
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    //console.log("Getting all notes")
    return fetchNotes();
};

var getNote = (title) => {
    // console.log("Getting note", title);

    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var removeNote = (title) => {
    //console.log("Removing note", title);
    
    var notes = fetchNotes();
    //filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    // save notes
    saveNotes(filteredNotes);
    
    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    debugger;
    console.log("----");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
 addNote,
 getAll,
 getNote,
 removeNote,
 logNote
};