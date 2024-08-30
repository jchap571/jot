import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class NotesController {
  constructor() {
    console.log('the notes controller is loaded')
    // AppState.on('notesList', this.drawNotesList)
    // AppState.on('activeNote', this.drawActiveNote)

    this.drawNotesList()



  }

  drawNotesList() {
    notesService.loadNotes()
    const Notes = AppState.notes
    let notesListHTML = ''
    Notes.forEach(note => notesListHTML += note.listHTMLTemplate)
    setHTML('list-area', notesListHTML)
  }

  drawActiveNote() {
    const activeNote = AppState.activeNote
    let activeNoteHTML = ''
    setHTML('active-note', activeNote.activeNoteHTMLTemplate)
    console.log('drawing active note')

  }

  setActiveNote(noteId) {
    console.log(`setting active note with id of ${noteId}`)
    notesService.setActiveNote(noteId)
    this.drawActiveNote()

  }

  createNote() {
    event.preventDefault()
    console.log('creating new note')
    const noteForm = event.target
    const noteFormData = getFormData(noteForm)
    console.log('data from note form', noteFormData)
    notesService.createNote(noteFormData)
    notesService.saveNotes()
    this.drawNotesList()

  }


  updateNote() {

    const textAreaElem = document.getElementById('body')
    // figure out how to add the inner text to the element and update it
    console.log(textAreaElem.value)
    // textAreaElem.innerText =


    console.log('updated body of note');
    console.log('saving note changes');
    notesService.saveNotes()
    notesService.loadNotes()


  }


  deleteNote(noteId) {
    const wantsToDelete = window.confirm(`Are you sure you want to delete this?`)
    if (!wantsToDelete) return
    console.log('deleting note')

    notesService.deleteNote(noteId)
    notesService.saveNotes()
    this.drawNotesList()

  }








}