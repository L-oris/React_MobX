import React, {Component} from 'react'
import {observer} from 'mobx-react'


@observer export default class TodoList extends Component {

  render(){
    const {todos} = this.props.store
    const todoLis = todos.map(todo => (
      <li>{todo}</li>
    ))
    
    return (
      <div>
        <h1>Todos:</h1>

        <ul>{todoLis}</ul>
      </div>
    )
  }

}
