/**
 * 6. Getting Input from User
 * 7. Simplified Input With Yargs
 * 8. Working with JSON 
 */

/**
 * a) JSON (JavaScript Object Notation) 
 * b) JSON is a way of represent JavaScript Array or Object using a string
 * c) we can save JSON to a text file then read it later
 * d) JSON is a string which is look like a JS object
 */

//console.log("Starting app.js");

// 3rd party module
const fs = require("fs");
// node npm module
const _ = require("lodash");
const yargs = require("yargs");   

// my own files
const notes = require("./notes.js");

// process.argv => argument vector / argument array
// used for fetching the command line argument which we passed
// it display the arguments as an array

const titleOptions = {
    describe: "Title of note",
    demand: true,
    alias: "t"
}

const bodyOptions = {
    describe: "Body of note",
    demand: true,
    alias: "b"
};

const argv = yargs
    .command("add", "Add a new note", {
        title: titleOptions,
        body: bodyOptions
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title: titleOptions 
    })
    .command("remove", "Remove a note", {
        title: titleOptions
    })
    .help()
    .argv;
// var command = process.argv[2];
var command = argv._[0];

//console.log("Command :", command);

// console.log("Process :",process.argv);

// yargs display the argument as an object in a formatted

//console.log("Yargs :",argv);


if (command === "add") {
    // console.log("Adding new note");
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note created");
        notes.logNote(note);
    } else {
        console.log("ERROR! Title already exist");
    }
} else if (command === "list") {
    // console.log("Listing new notes");
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    // array.forEach(function(element) { .... }, this);
    allNotes.forEach((note) => notes.logNote(note));
    
} else if (command === "read") {
    // console.log("Reading notes");
    var readNote = notes.getNote(argv.title);
    if(readNote) {
        console.log("Note Found Successfully");
        notes.logNote(readNote);
    } else {
        console.log("ERROR! Note not found");
    }
} else if (command === "remove") {
    // console.log("Removing notes");
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed"+"---"+"Title: "+argv.title : "ERROR! Note not found";
    console.log(message);
} else {
    console.log("Command not recognized");    
}
