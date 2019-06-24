import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="col-4">
            <h1>Sign up!</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">First Name</label>
                <input className="form-input" type="text" id="firstName" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">Last Name</label>
                <input className="form-input" type="text" id="lastName" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp