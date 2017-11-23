import {observable, computed} from 'mobx'

class Todo {
  @observable value
  @observable id
  @observable complete

  constructor(value){
    this.value = value
    this.id = Date.now()
    this.complete = false
  }
}

class TodoStore {
  @observable todos = []
  @observable filter = ""

  @computed get filteredTodos(){
    //case insensitive regex
    const regexFilter = new RegExp(this.filter,'i')
    return this.todos.filter(todo => regexFilter.test(todo))
  }

  createTodo(value){
    if(value){
      this.todos.push(new Todo(value))
    }
  }
}

//attach the store to 'window' for debugging
const store = window.store = new TodoStore()

export default store
