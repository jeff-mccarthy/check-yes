import React, { Component } from 'react'

export class TodoPreview extends Component {
  state = {
    isEditing: false
  }

  toggleEditMode = () => {
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  render() {
    const { todo } = this.props;

    console.log(todo);

    return (
      <div className="todo">
        <div className="todo-sort">
          <i className="icon icon-resize-vert"></i>
        </div>
        <div className="todo-content">
          <div className="form-group">

            {
              this.state.isEditing ? (
                <input type="text" />
              ) : (
                  <label className="form-checkbox">
                    <input type="checkbox" checked={todo.complete} />
                    <i className="form-icon"></i>
                    { todo.title }
                  </label>
                )

            }

          </div>
        </div>
        <button onClick={this.toggleEditMode} className="todo-actions btn btn-link"><i className="icon icon-edit"></i></button>
        <button className="todo-actions btn btn-link"><i className="icon icon-delete"></i></button>
      </div>
    )
  }
}

export default TodoPreview
