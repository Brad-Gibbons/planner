import React, { Component } from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="project-list section">
        <div className="card z-depth0 project-summary">
            <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>Posted By ....</p>
                <p className="grey-text">10/10/2019</p>
            </div>
        </div>
        </div>
    )
}

export default ProjectSummary;