import { generateId } from "../utils/GenerateId.js"


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = ''
    // this.date = new Intl.DateTimeFormat('en-US')
    this.color = data.color

    this.createdAt = data.createdAt == undefined ? new Date() : new Date(data.createdAt)
    
  
    
  }


  get listHTMLTemplate() {
    return `
        <div onclick="app.NotesController.setActiveNote('${this.id}')" class="fs-3 selectable p-3 note-border" style="border-color: ${this.color}">
                <h2 class="">${this.title}</h2>
                <p class="fs-5">Created on: ${this.createdAt.toLocaleDateString()}</p>
          </div>
          <div class="d-flex text-start selectable p-3">
          <p>${this.body} </p>
          </div>
        </div>
          <hr>
          `


  }

  get activeNoteHTMLTemplate() {
    return `
  <h2 id="" class="note-border" style="border-color: ${this.color}">${this.title}</h2>
            <p>Created: ${this.createdAt.toLocaleDateString()}</p>
            <p>Last Updated at: </p>
            <div class="f-flex">
              <button onclick="app.NotesController.deleteNote()" class="bg-danger">Delete</button>
              <button onclick="app.NotesController.updateNote()" class="bg-primary">Save Note</button>
            </div>
            <textarea class="w-100" rows="20" name="body" id="body">
            ${this.body}
          </textarea>
  `


  }


  get createdDate() {
    // const date = new Date()
    // const dateFormat = new Intl.DateTimeFormat('en-US')
    return this.createdAt.toLocaleDateString()


  }

  // get updatedDate(){
  //   return this.updatedDate.toLocaleDateString() 
  // }


  get updatedDate() {
    return this.updatedDate.toLocaleDateString()
  }

  get updatedDateFullDateAndTime() {
    return this.updatedDateFullDateAndTime.toLocaleString()
  }





}
