import React, { Component } from 'react'
import { connect } from 'react-redux';

import ListChecklists from './ListChecklists';

class Dashboard extends Component {
  render() {
    const { checklists } = this.props;
    const incompletes = checklists.filter(list => !list.completed);
    const favorites = checklists.filter(list => list.favorite);

    return (
      <div className="dashboard">
        <div className="container">
          <h1>Incomplete Lists</h1>
          <ListChecklists lists={incompletes} />

          <h1>Favorite Lists</h1>
          <ListChecklists lists={favorites}/>
          
          <h1>Recent Lists</h1>
          <ListChecklists lists={checklists.sort()}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    checklists: state.checklists
  }
}

export default connect(mapStateToProps)(Dashboard);