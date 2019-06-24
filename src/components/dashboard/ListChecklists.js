import React, { Component } from 'react'

import ChecklistPreview from '../ChecklistPreview'
import Empty from '../dashboard/Empty';

class ListChecklists extends Component {
  render() {
    const { lists } = this.props;
    const checklists = lists.length ? (
      lists.map(list => {
        return (
          <ChecklistPreview list={list} key={list.id} />
        )
      })
    ) : (
      <Empty />
    );

    return (
      <div className="columns">
        { checklists }
      </div>
    )
  }
}

export default ListChecklists;