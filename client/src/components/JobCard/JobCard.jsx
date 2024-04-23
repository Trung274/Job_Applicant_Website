import React from 'react';
import './JobCard.css';

function JobCard({ job }) {
    return (
        <div className="job-card">
            <div className='card-title'>{job.title}</div>
            <p>{job.description}</p>
            <div className="job-info">
                <span>{job.company}</span>
                <span>{job.location}</span>
            </div>
        </div>
    );
}

export default JobCard;
