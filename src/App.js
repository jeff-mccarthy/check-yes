import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';

// import Welcome from './components/Welcome';
import Navbar from './components/layout/Navbar';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import Dashboard from './components/dashboard/Dashboard';
import ChecklistDetail from './components/ChecklistDetail';
import CreateChecklist from './components/CreateChecklist';
import EditChecklist from './components/EditChecklist';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/list/:id" component={ChecklistDetail} />
            <Route path="/create" component={CreateChecklist} />
            <Route path="/edit/:id" component={EditChecklist} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checklists: state.checklists
  }
}

export default connect(mapStateToProps)(App);
