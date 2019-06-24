import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

import { toggleChecklist } from '../actions/checklistActions';

class ChecklistDetail extends Component {
  handleChange = () => {
    this.props.toggleChecklist(this.props.list);
  }

  render() {
    const { list } = this.props;
    const todos = list.todos && list.todos.map(todo => {
      return <Todo {...todo} key={todo.id} />
    })
    
    return (
      <div className="checklist-detail">
        <div className="cover-image">
          <img src={ list.imageUrl } className="img-fit-cover" alt="cover goes here" />
        </div>
        <div className="container">
          <div className="form-group">
            <label className="form-switch">
              <input type="checkbox" checked={list.completed} onChange={this.handleChange} /> 
              <i className="form-icon"></i> Complete
            </label>
          </div>
          <h1>{list.title}</h1>
          
          <p>{list.description}</p>

          <h2>To dos</h2>
          <div className="divider"></div>
          {todos}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.list;

  return {
    list: state.checklists.find(list => list.id === id)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecklist: (checked) => { dispatch(toggleChecklist(checked)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChecklistDetail);
