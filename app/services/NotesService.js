import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js"



class NotesService {
  updateNote(updatedBody) {
    console.log('updating note')
    const note = AppState.activeNote
    note.body = updatedBody
    // note.date = new Date()
    const noteId = note.id
    console.log(note)
    // let savedNote = this.getNoteFromStorage(noteId)
    // savedNote = note
    AppState.emit('notesList')
    AppState.emit('activeNote')
    this.saveNotes()

// need to save the text area input into the active note, can't figure it out. also need the updated time and date to be drawn to the note

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
    // need to make sure when note is created, there isn't an undefined inside the body and there is a current date and time - but not raw date and time
  }

  setActiveNote(noteId) {
    console.log('setting active note', noteId)
    const notes = AppState.notes
    const foundNote = notes.find(note => note.id == noteId)
    console.log('found note!', foundNote)
    AppState.activeNote = foundNote
  }

  saveNotes() {
    console.log(AppState.notes)
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


