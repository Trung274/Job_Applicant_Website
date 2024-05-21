import React from 'react';
import './BusinessCard.css';

function BusinessCard({ business, onClickViewJobs }) {
    return (
        <div className="business-card" onClick={onClickViewJobs}>
            <div className="business-card-header">
                <img src={business.profileImage} alt={`${business.name} profile`} className="profile-image" />
                <div className="business-details">
                    <div className="business-name">{business.name}</div>
                    <div className="business-city">{business.city}</div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard;