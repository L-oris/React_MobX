import {observable} from 'mobx'

class TodoStore {
  @observable todos = ["buy milk", "buy eggs"]
  @observable filter = ""
}

//attach the store to 'window' for debugging
const store = window.store = new TodoStore()

export default store
