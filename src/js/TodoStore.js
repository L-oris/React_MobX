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
    return this.todos.filter(todo => regexFilter.test(todo.value))
  }

  createTodo(value){
    if(value){
      this.todos.push(new Todo(value))
    }
  }

  //automatically binded to correct 'this', since it's arrow function
  clearComplete = () => {
    //in mobx we cannot directly remove a key-value pair
    const incompleteTodos = this.todos.filter(todo => !todo.complete)
    this.todos.replace(incompleteTodos)
  }
}

//attach the store to 'window' for debugging
const store = window.store = new TodoStore()

export default store
