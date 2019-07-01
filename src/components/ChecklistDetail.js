import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ListTodos from './ListTodos';

import { toggleChecklist, toggleFavorite } from '../actions/checklistActions';

class ChecklistDetail extends Component {
  updateCompleted = () => {
    this.props.toggleChecklist(this.props.list);
  }

  updateFavorite = () => {
    this.props.toggleFavorite(this.props.list);
  }

  convertDate(date) {
    return moment(date).format('dddd MMMM D Y');
  }

  render() {
    const { list } = this.props;

    if (list) {
      const coverImage = list.imageUrl ? (
        <div className="cover-image">
          <img src={list.imageUrl} className="img-fit-cover" alt="cover goes here" />
        </div>
      ) : (null);

      const todoList = list.todos ? (
        <ListTodos list={list} />
      ) : null;

      return (
        <div className="checklist-detail">

          {coverImage}

          <div className="container">
            <h1>{list.title}</h1>

            <div className="divider"></div>
            <div className="checklist-toolbar">
              <span className="checklist-created"><i className="icon icon-time"></i> {this.convertDate(list.created.toDate())} </span>
              <div className="form-group form-inline">
                <label className="form-switch form-inline">
                  <input type="checkbox" checked={list.completed} onChange={this.updateCompleted} />
                  <i className="form-icon"></i> <span className="text-primary">Complete</span>
                </label>
                <label className="form-switch form-inline">
                  <input type="checkbox" checked={list.favorite} onChange={this.updateFavorite} />
                  <i className="form-icon"></i> <span className="text-primary">Favorite</span>
                </label>
                <Link to={'/edit/' + list.id}><i className="icon icon-edit"></i> Edit</Link>
              </div>
            </div>
            <div className="divider"></div>

            <p>{list.description}</p>
            
            { todoList }

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
