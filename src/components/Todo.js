import React from 'react'

function Todo(todo) {
  return (
    <div className="todo">
      <div className="todo-sort">
        <i className="icon icon-resize-vert"></i>
      </div>
      <div className="todo-content">
        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox" checked={todo.complete}/>
            <i className="form-icon"></i> {todo.title}
          </label>
        </div>
      </div>
      <button className="todo-actions btn btn-link"><i className="icon icon-more-vert"></i></button>
    </div>
  )
}

export default Todo
