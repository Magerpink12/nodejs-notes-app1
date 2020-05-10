const yargs = require('yargs')
const notes = require('./notes.js')
const chalk = require('chalk')

// creating add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
debugger
// creating remove command
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe:'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// creating List command
yargs.command({
    command: 'list',
    describe: 'List all the note',
    handler(){
        notes.listNotes()
    }
})

// creating Read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe:'read a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
       notes.readNote(argv.title)
    }
})
yargs.parse()
