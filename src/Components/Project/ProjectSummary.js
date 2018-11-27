import React, { Component } from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
        <div className="card z-depth0 project-summary">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>Posted By {project.authorFirstName} {project.authorLastName} </p>
                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
        </div>
    )
}

export default ProjectSummary;