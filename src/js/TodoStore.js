import {observable, computed} from 'mobx'

class TodoStore {
  @observable todos = ["buy milk", "buy eggs"]
  @observable filter = ""

  @computed get filteredTodos(){
    //case insensitive regex
    const regexFilter = new RegExp(this.filter,'i')
    return this.todos.filter(todo => regexFilter.test(todo))
  }

  createTodo(newTodo){
    if(newTodo){
      this.todos.push(newTodo)
    }
  }
}

//attach the store to 'window' for debugging
const store = window.store = new TodoStore()

export default store
