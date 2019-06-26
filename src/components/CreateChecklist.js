import React, { Component } from 'react'
import { connect } from 'react-redux';

import { createChecklist } from '../actions/checklistActions';

class CreateChecklist extends Component {
  state = {
    title: '',
    description: '',
    tags: [],
    imageUrl: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleTags = (e) => {
    let tags = e.target.value.split(','),
        newTags = tags.map((tag) => {
          return {
            id: `tag${Math.round(Math.random()*10000)}`,
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
    
    this.props.createChecklist(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Checklist</h5>

          <div className="form-group">
            <label className="form-label" htmlFor="title">Title</label>
            <input className="form-input" type="text" id="title" placeholder="Title" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea className="form-input" id="description" placeholder="Description" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="tags">Tags <small>(comma separated)</small></label>
            <input className="form-input" type="text" id="tags" placeholder="Tags" onChange={this.handleTags} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="imageUrl">Image URL</label>
            <input className="form-input" type="text" id="imageUrl" placeholder="Cover Image URL" onChange={this.handleChange} />
          </div>

          <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Create List" />
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChecklist: (project) => dispatch(createChecklist(project))
  }
}

// connect(mapStateToProps, mapDispatchToProps);
export default connect(null, mapDispatchToProps)(CreateChecklist);