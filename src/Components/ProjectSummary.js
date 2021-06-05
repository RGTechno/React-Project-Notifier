import React from 'react'
import moment from "moment"

function ProjectSummary(props) {
  return (
    <div className="card z-depth-0">
      <div className="card-content">
        <span className="card-title">{props.project.title}</span>
        <p>Posted By {props.project.authorFirstname} {props.project.authorLastname}</p>
        <div className="grey-text">{moment(props.project.createdAt.toDate()).calendar()}</div>
      </div>
    </div>
  )
}

export default ProjectSummary
