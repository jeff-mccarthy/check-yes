import React from 'react'
import { Link } from 'react-router-dom';

const ChecklistPreview = ({ list }) => {
  const image = list.imageUrl ? (
      <div className="card-image">
        <img src={list.imageUrl} alt="something" className="img-responsive" />
      </div>   
    ) : null;

  const tags = list.tags ? (
    list.tags.map((tag) => {
      return <span href="#" className="chip" key={tag.id}>{ tag.title }</span>
    })
  ) : null;
    
  return (
    <div className="column col-md-12 col-3">
      <div className="card">
        { image }
        <div className="card-header">
          <Link to={"/list/" + list.id}>
            <div className="card-title h5 text-primary">{list.title}</div>
          </Link>
          <div className="card-subtitle text-gray">{tags}</div>
        </div>
        <div className="card-body">
          <div><small>{ `Created: ${list.created}` }</small></div>
        </div>
        <div className="card-footer">
          <div>{ `completed: ${list.completed}` }</div>
          <div>{ `favorite: ${list.favorite}` }</div>
        </div>
      </div>
    </div>
  )
}

export default ChecklistPreview