import { AppState } from "../AppState.js";
import { NotesController } from "../controllers/NotesController.js";
import { Note } from "../models/Note.js";
import { loadState, saveState } from "../utils/Store.js"



class NotesService {
  updateNote(updatedBody) {
    console.log('updating note')
    const note = AppState.activeNote
    note.body = updatedBody
    this.saveNotes()


  }


  createNote(noteFormData) {
    const note = AppState.notes
    const newNote = new Note(noteFormData)
    note.push(newNote)
  }

  setActiveNote(noteId) {
    console.log('setting active note', noteId)
    const notes = AppState.notes
    const foundNote = notes.find(note => note.id == noteId)
    console.log('found note!', foundNote)
    AppState.activeNote = foundNote
  }

  saveNotes(noteId) {
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
    this.loadNotes()


  }



}

export const notesService = new NotesService()


