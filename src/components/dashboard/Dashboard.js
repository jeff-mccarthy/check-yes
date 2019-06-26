import React, { Component } from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import ListChecklists from './ListChecklists';

class Dashboard extends Component {
  render() {
    const { checklists } = this.props;
    const inProgress = checklists && checklists.filter(list => !list.completed);
    const favorites = checklists && checklists.filter(list => list.favorite);
    const recents = checklists && checklists.filter(list => list.completed && !list.favorite);

    return (
      <div className="dashboard">
        <div className="container">
          <h1>In Progress Lists</h1>
          
          <ListChecklists lists={inProgress} />

          <h1>Favorite Lists</h1>
          <ListChecklists lists={favorites}/>
          
          <h1>Recent Lists</h1>
          <ListChecklists lists={recents}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { checklists } = state.firestore.ordered;
  
  return { checklists }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'checklists'}
  ])
)(Dashboard);