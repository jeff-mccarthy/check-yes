import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

import Todo from './Todo';

import { toggleChecklist, toggleFavorite } from '../actions/checklistActions';

class ChecklistDetail extends Component {
  updateCompleted = () => {
    this.props.toggleChecklist(this.props.list);
  }

  updateFavorite = () => {
    this.props.toggleFavorite(this.props.list);
  }

  render() {
    console.log(this.props);

    const { list } = this.props;

    if (list) {
      const todos = list.todos.map(todo => {
        return <Todo {...todo} key={todo.id} />
      });

      return (
        <div className="checklist-detail">
          <div className="cover-image">
            <img src={list.imageUrl} className="img-fit-cover" alt="cover goes here" />
          </div>
          <div className="container">
            <div className="divider"></div>
            <div className="checklist-toolbar">
              <div className="form-group">
                <label className="form-switch form-inline">
                  <input type="checkbox" checked={list.completed} onChange={this.updateCompleted} />
                  Complete <i className="form-icon"></i>
                </label>
                <label className="form-switch form-inline">
                  <input type="checkbox" checked={list.favorite} onChange={this.updateFavorite} />
                  Favorite <i className="form-icon"></i>
                </label>
                <Link to={'/edit/' + list.id}><i className="icon icon-edit"></i></Link>
              </div>
            </div>
            <div className="divider"></div>

            <h1>{list.title}</h1>

            <p>{list.description}</p>

            <h2>To dos</h2>
            <div className="divider"></div>
            {todos}
          </div>
        </div>
      )
    } else {
      return (
        <div className="p-centered hero">
          <div className="loading loading-lg mb-2"></div>
          <p className="text-center text-primary"><strong>Loading checklist...</strong></p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const checklists = state.firestore.data.checklists;
  const list = checklists ? { ...checklists[id], id } : null;

  return {
    list
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecklist: (checked) => { dispatch(toggleChecklist(checked)) },
    toggleFavorite: (checked) => { dispatch(toggleFavorite(checked)) }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'checklists' }
  ])
)(ChecklistDetail);
