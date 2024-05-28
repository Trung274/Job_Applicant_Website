import React from 'react';
import './JobCard.css';

function JobCard({ job, onClick }) {
    return (
        <div className="job-card" onClick={() => onClick(job)}>
            <img src={job.businessLogoUrl} alt={`${job.business} logo`} className="company-logo" />
            <div className='card-content'>
                <div className='card-title'>{job.business}</div>
                <div className='job-title'>{job.jobTitle}</div>
                <div className="job-info">
                    <span className="location">🏢{job.location}</span>
                    <span className="salary">{job.salary}</span>
                    <span className="employment-type">{job.employmentType}</span>
                </div>
            </div>
        </div>
    );
}

export default JobCard;