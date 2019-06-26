import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import { updateChecklist } from '../actions/checklistActions';

class EditChecklist extends Component {
  state = {
    title: '',
    description: '',
    tags: [],
    imageUrl: ''
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps.list
    })
  }

  componentDidMount() {
    this.setState({
      ...this.props.list
    })
  }

  handleChange = (e) => {
    console.log(e.target.value);

    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTags = (e) => {
    let tags = e.target.value.split(','),
      newTags = tags.map((tag) => {
        return {
          id: `tag${Math.round(Math.random() * 10000)}`,
          title: tag.trim()
        }
      });

    // needs to be an array of objects
    // id: ?
    // title: tag1
    this.setState({
      [e.target.id]: newTags
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateChecklist(this.state);
    this.props.history.push('/');
  }

  render() {
    const { list } = this.props;
    const { title, description, imageUrl } = this.state;

    if (list) {
      const tags = this.state.tags.map(tag => tag.title);

      return (
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Edit Checklist - {list.title}</h5>

            <div className="form-group">
              <label className="form-label" htmlFor="title">Title</label>
              <input
                type="text"
                className="form-input"
                value={title}
                id="title"
                placeholder="Title"
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="description">Description</label>
              <textarea
                rows="12"
                id="description"
                className="form-input"
                placeholder="Description"
                value={description}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="tags">Tags <small>(comma separated)</small></label>
              <input
                type="text"
                id="tags"
                className="form-input"
                placeholder="Tags"
                value={tags}
                onChange={this.handleTags}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                id="imageUrl"
                className="form-input"
                placeholder="Cover Image URL"
                value={imageUrl}
                onChange={this.handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary"
                value="Update List"
              />
            </div>
          </form>
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateChecklist: (list) => dispatch(updateChecklist(list))
  }
}

// connect(mapStateToProps, mapDispatchToProps);
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: 'checklists' }
  ])
)(EditChecklist)