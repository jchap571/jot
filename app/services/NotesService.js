import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js"



class NotesService {
  updateNote(updatedBody) {
    console.log('updating note')
    const note = AppState.activeNote
    note.body = updatedBody
    note.updatedAt = new Date()
    const noteId = note.id
    console.log(note)
    AppState.emit('notesList')
    AppState.emit('activeNote')
    this.saveNotes()
  }
  




  getNoteFromStorage(noteId){
    let note = AppState.notes.find(note => note.id == noteId)
    return note

  }


  createNote(noteFormData) {
    const note = AppState.notes
    const newNote = new Note(noteFormData)
    console.log(newNote)
    note.push(newNote)
   
  }

  setActiveNote(noteId) {
    console.log('setting active note', noteId)
    const notes = AppState.notes
    const foundNote = notes.find(note => note.id == noteId)
    console.log('found note!', foundNote)
    AppState.activeNote = foundNote
  }



  saveNotes() {
    saveState('notes', AppState.notes)
  
  }
    



  loadNotes() {
    const notesFromLocalStorage = loadState('notes', [Note])
    AppState.notes = notesFromLocalStorage
  }


  deleteNote(noteId) {
    const notes = AppState.notes
    const noteIndex = notes.findIndex(note => note.id == noteId)
    notes.splice(noteIndex, 1)
    this.saveNotes()
   
    

  }



}

export const notesService = new NotesService()


