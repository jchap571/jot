import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class NotesController {
  constructor() {
    console.log('the notes controller is loaded')
    AppState.on('notes', this.drawNotesList)
    AppState.on('activeNote', this.drawActiveNote)

    notesService.loadNotes()
    this.countNotes()


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
    // this is where the html element needs to be targeted, I can find the element but can't seem to get it to set text area input to the note I'm editing
    event.preventDefault()

    const textAreaElem = document.getElementById('body')
    const noteToUpdate = AppState.activeNote.body
   
   
    
    // @ts-ignore
    const newText = textAreaElem.value
    
    console.log(noteToUpdate, newText)
    
    // figure out how to add the inner text to the element and update it
    console.log('saving note changes');
    notesService.updateNote(newText)
    notesService.saveNotes()
   
    this.drawNotesList()




  }
    
    


    

  countNotes(){
  for (let i = 0; i < AppState.notes.length; i++) {
    let total = AppState.notes.length
    console.log('# of notes is', total)
    return total
    const totalNotesElem = document.getElementById('note-count')
    totalNotesElem.innerText = total.toString()
  }



  }


  deleteNote() {
    const wantsToDelete = window.confirm(`Are you sure you want to delete this?`)
    if (!wantsToDelete) return
    console.log('deleting note')
    const noteId = AppState.activeNote.id
    console.log(noteId)
    notesService.deleteNote(noteId)
    notesService.saveNotes()
    
    this.drawNotesList()
  }








}