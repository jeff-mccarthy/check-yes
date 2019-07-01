import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

import TodoPreview from './TodoPreview';

export class ListTodos extends Component {
  state = {

  }

  handleAddTodo = () => {
    this.props.addTodo(this.props.list)
  }
  
  render() {
    const { todos } = this.props.list;

    const renderTodos = todos.length ? (
      todos.map(todo => {
        return <TodoPreview todo={todo} key={todo.id} />
      })
    ) : ( <div>No todos! <button className="btn">Add one :D</button></div> );
    
    return (
      <div>
        <div className="df ac jsb">
          <h2 className="d-inline">To Dos</h2>
          <button onClick={this.handleAddTodo} className="btn form-inline"><i className="icon icon-plus"></i></button>
        </div>
        <div className="divider"></div>

        { renderTodos }

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo))
  }
}

export default connect(null, mapDispatchToProps)(ListTodos);