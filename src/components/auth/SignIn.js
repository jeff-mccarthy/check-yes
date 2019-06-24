import React, { Component } from 'react'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
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
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input" type="email" id="email" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <input className="form-input" type="password" id="password" onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <button className="btn" type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn