import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer export default class TodoList extends Component {

  createNew(e){
    //create new todo only if 'Enter' is pressed (keyCode 13)
    if(e.which === 13){
      this.props.store.createTodo(e.target.value)
      //clear input
      e.target.value = ''
    }
  }

  filter(e){
    this.props.store.filter = e.target.value
  }

  toggleComplete(todo){
    todo.complete = !todo.complete
  }

  render(){
    const {filteredTodos, filter, clearComplete} = this.props.store

    const todoLis = filteredTodos.map(todo => (
      <li key={todo.id}>
        <input
          type="checkbox"
          value={todo.complete}
          checked={todo.complete}
          onChange={this.toggleComplete.bind(this, todo)}
        />
        {todo.value}
      </li>
    ))

    return (
      <div>
        <h1>Todos:</h1>

        <h3>Create</h3>
        <input className="create" onKeyPress={this.createNew.bind(this)}/>

        <h3>Filter</h3>
        <input className="filter" value={filter} onChange={this.filter.bind(this)}/>

        <ul>{todoLis}</ul>

        <a href="#" onClick={clearComplete}>Clear Complete</a>
      </div>
    )
  }

}
