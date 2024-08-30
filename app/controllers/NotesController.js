import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class NotesController {
  constructor() {
    console.log('the notes controller is loaded')
    AppState.on('notesList', this.drawNotesList)
    AppState.on('activeNote', this.drawActiveNote)
    this.drawNotesList()


  }

  drawNotesList() {
    const Notes = AppState.notes
    let notesListHTML = ''
    Notes.forEach(note => notesListHTML += note.listHTMLTemplate)
    setHTML('list-area', notesListHTML)
  }

  drawActiveNote() {
    const activeNote = AppState.activeNote
    let activeNoteHTML = ''
    // request help on how to target the right info for draw active note
    const activeNoteElem = document.getElementById('active-note')
    activeNoteElem.innerHTML = activeNoteHTML
    console.log('drawing active note', Note)
    // setHTML('active-note', Note)


  }





}