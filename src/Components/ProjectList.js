import React, { Component } from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from "react-router-dom"

class ProjectList extends Component {

  render() {
    const projectList = this.props.projects
    return (
      <div className="section">
        {
          projectList && projectList.map((project) => {
            return (
              <Link to={"/project/" + project.id} key={project.id}>
                <ProjectSummary project={project} />
              </Link>
            )
          })
        }
      </div>
    )
  }
}

export default ProjectList
