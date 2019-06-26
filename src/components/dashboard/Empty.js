import React from 'react'
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <div className="empty">
      <div className="empty-icon">
        <i className="icon icon-check icon-4x"></i>
      </div>
      <p className="empty-title h5">You have no new checklists</p>
      <p className="empty-subtitle">Click below to add your first!</p>
      <div className="empty-action">
        <Link to="/create"><button className="btn btn-primary"><i className="icon icon-plus mr-2"></i> Add Checklist</button></Link>
      </div>
    </div>
  )
}

export default Empty;