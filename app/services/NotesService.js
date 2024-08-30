import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";



class NotesService {
  createNote(rawNoteData) {
    const note = AppState.notes

  }




  setActiveNote(noteId) {
    console.log('setting active note', noteId)
    const notes = AppState.notes
    const foundNote = notes.find(note => note.id == noteId)
    console.log('found note!', foundNote)
    AppState.activeNote = foundNote
  }


}

export const notesService = new NotesService()