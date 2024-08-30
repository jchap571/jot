import { generateId } from "../utils/GenerateId.js"


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body
    this.date = new Date()

  }


  get listHTMLTemplate() {
    return `
        <div onclick="app.NotesController.setActiveNote('${this.id}')" class="fs-3 selectable p-3">
                <h5>${this.title}</h5>
                <p>${this.date}</p>
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
  <h3>${this.title}</h3>
            <p>${this.date}</p>
            <p>Last Updated at: 12:00:00PM</p>
            <div class="f-flex">
              <button class="bg-danger">Delete</button>
              <button class="bg-primary">Save Note</button>
            </div>
            <textarea class="w-100" rows="20" name="body" id="body">
            '${this.body}'
          </textarea>
  `


  }





}


