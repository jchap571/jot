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
      color: '',
      body: 'Rice, sausage, water, chicken hearts, pumpkin sauce, mix and eat'
    }),
    new Note({
      id: generateId(),
      title: 'Rony Pony Rice Aroni',
      color: '',
      body: 'Rice, sausage, water, chicken hearts, pumpkin sauce, mix and eat'

    }),
    new Note({
      id: generateId(),
      title: 'Rony Pony Rice Aroni',
      color: '',
      body: 'Rice, sausage, water, chicken hearts, pumpkin sauce, mix and eat'
    }),
  ]


  /**@type {Note} */
  activeNote = null


}

export const AppState = createObservableProxy(new ObservableAppState())