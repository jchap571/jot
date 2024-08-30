import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";



export class NotesController {
  constructor() {
    console.log('the notes controller is loaded')




  }

  drawNotesList() {
    const Notes = AppState.notes
    let notesListHTML = ''
    Notes.forEach(note => notesListHTML += note.listHTMLTemplate)
    setHTML('list-area', notesListHTML)
  }



}