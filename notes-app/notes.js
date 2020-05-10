const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
   return 'your note...................'
}

const saveNotes= (notes) =>{
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
   try {
      const dataBuffer = fs.readFileSync('notes.json')
      const dataJSON = dataBuffer.toString()
      return JSON.parse(dataJSON)
   } catch (error) {
      return []
   }
  
}


const addNote =(title, body) =>{
   const notes = loadNotes()
   //const duplicateNotes = notes.filter((note)=> note.title === title)
   var duplicateNote = notes.find((note)=>note.title===title)
   if (!duplicateNote) {
      notes.push({
         title: title,
         body: body
      })
      saveNotes(notes)
      console.log(chalk.green.bold.inverse('New Note Added'))
   } else {
      console.log(chalk.red.bold.inverse('Note Title Taten!'))
   }
   
}


const removeNote = (title) => {
   const notes = loadNotes()
   const noteToKeep = notes.filter((note)=> note.title !== title)
   if (notes.length > noteToKeep.length) {
      saveNotes(noteToKeep)
      console.log(chalk.green.bold.inverse('Note Removed!'))
   } else {
      console.log(chalk.red.bold.inverse('No Note Found!'))
   }
   
}

const listNotes =()=>{
   const notes=loadNotes()
   console.log(chalk.blued.inverse('Your Notes'))
   notes.forEach(note => {
      console.log(note.title)
   });
}

var readNote = (title)=>{
   var notes =loadNotes()
   var chose = notes.find((note) => note.title === title)
   if (chose) {
      console.log(chalk.italic.blueBright.bold(chose.title)+' : '+chose.body)
   } else {
      console.log(chalk.red.inverse('No Note Found'))
   }
  
}
module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNotes:listNotes,
   readNote: readNote
}