import React from 'react';
import './JobCard.css';

function JobCard({ job, onClick }) {
    return (
        <div className="job-card" onClick={() => onClick(job)}>
            <img src={job.logoUrl} alt={`${job.company} logo`} className="company-logo" />
            <div className='card-content'>
                <div className='card-title'>{job.title}</div>
                <p>{job.description}</p>
                <div className="job-info">
                    <span className="company">{job.company}</span>
                    <span className="location">{job.location}</span>
                    <span className="salary">{job.salary}</span> 
                </div>
            </div>
        </div>
    );
}

export default JobCard;