import { Note } from "./models/Note.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { generateId } from "./utils/GenerateId.js"
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {



  /**@type {Note[]}*/
  notes = [
    new Note({
      id: generateId(),
      title: 'Rony Pony Rice Aroni',
      color: 'Green',
      body: 'Rice, sausage, water, chicken hearts, pumpkin sauce, mix and eat'
    }),
    new Note({
      id: generateId(),
      title: 'Charley Barley',
      color: 'Red',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sunt delectus esse mollitia! Voluptas, obcaecati!'

    }),
    new Note({
      id: generateId(),
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
      color: 'Blue',
      body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet illo debitis officia. Consequuntur sapiente facilis placeat aliquid vero beatae blanditiis.'
    }),
  ]


  /**@type {Note} */
  activeNote = null


}

export const AppState = createObservableProxy(new ObservableAppState())