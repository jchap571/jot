import { generateId } from "./utils/GenerateId.js"

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title



  }


  get listHTMLTemplate() {
    return /*html*/`
        <div class="d-flex justify-content-between">
                <h3>Note Title</h3>
                <p>8/30/24</p>
          </div>
          <div class="d-flex text-start">
            <p>
                  1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, asperiores!
                  2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio quas labore ipsum
                  cupiditate
                  explicabo?
                  3. Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
          <hr>
`



  }




}


