import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer export default class TodoList extends Component {

  filter(e){
    this.props.store.filter = e.target.value
  }

  createNew(e){
    //create new todo only if 'Enter' is pressed (keyCode 13)
    if(e.which === 13){
      this.props.store.createTodo(e.target.value)
      //clear input
      e.target.value = ''
    }
  }

  render(){
    const {filteredTodos, filter} = this.props.store
    const todoLis = filteredTodos.map(todo => (
      <li key={todo}>{todo}</li>
    ))

    return (
      <div>
        <h1>Todos:</h1>

        <h3>Create</h3>
        <input className="create" onKeyPress={this.createNew.bind(this)}/>

        <h3>Filter</h3>
        <input className="filter" value={filter} onChange={this.filter.bind(this)}/>

        <ul>{todoLis}</ul>
      </div>
    )
  }

}
