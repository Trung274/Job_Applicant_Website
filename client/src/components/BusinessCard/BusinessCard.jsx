import React from 'react';
import './BusinessCard.css';

function BusinessCard({ business, onClickViewJobs }) {
    return (
        <div className="business-card">
            <div className="business-card-header">
                <img src={business.profileImage} alt={`${business.name} profile`} className="profile-image" />
                <div className="business-details">
                    <div className="business-name">{business.name}</div>
                    <div className="business-city">{business.city}</div>
                </div>
                <button className="view-jobs-button" onClick={onClickViewJobs}>View Job Openings</button>
            </div>
        </div>
    );
}

export default BusinessCard;