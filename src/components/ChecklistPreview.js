import React from 'react'
import { Link } from 'react-router-dom';
import moment from 'moment';

const ChecklistPreview = ({ list }) => {
  const image = list.imageUrl ? (
    <div className="card-image">
      <img src={list.imageUrl} alt="something" className="img-responsive" />
    </div>
  ) : null;

  const tags = list.tags ? (
    list.tags.map((tag) => {
      return <span href="#" className="chip" key={tag.id}>{tag.title}</span>
    })
  ) : null;

  const convertDate = (date) => {
    return moment(date).format('dddd MMMM D Y');
  }

  return (
    <div className="column col-md-12 col-xl-4 col-3">
      <div className="card">
        <Link to={"/list/" + list.id}>
          {image}
          <div className="card-header">
            <div className="card-title h5 text-primary">{list.title}</div>
            <div className="card-subtitle text-gray">{tags}</div>
          </div>
          <div className="card-body">

          </div>
          <div className="card-footer">
            <small><span className="checklist-created"><i className="icon icon-time"></i> {convertDate(list.created.toDate())} </span></small>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ChecklistPreview