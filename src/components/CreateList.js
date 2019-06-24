import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createChecklist } from '../actions/checklistActions';

class CreateList extends Component {
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
    let val = e.target.value.split(',');

    this.setState({
      [e.target.id]: val
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.createList(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Project</h5>

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
    createList: (project) => dispatch(createChecklist(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateList);