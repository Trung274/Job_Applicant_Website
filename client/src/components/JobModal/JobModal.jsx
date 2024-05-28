import React from 'react';
import Modal from 'react-modal';
import './JobModal.css';

const JobModal = ({ job, isOpen, onRequestClose }) => {
    if (!job) return null;

    const handleViewBusiness = () => {
        // Implement logic to view the business (e.g., navigate to business page)
        alert(`Viewing business: ${job.business}`);
    };

    const handleContactNow = () => {
        // Implement logic to contact now (e.g., open email client or contact form)
        alert(`Contacting business: ${job.business}`);
    };

    const handleSaveJob = () => {
        // Implement logic to save the job
        alert(`Saving job: ${job.jobTitle}`);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Job Details"
            ariaHideApp={false}
            className="modal"
            overlayClassName="overlay"
        >
            <button onClick={onRequestClose} className="close-button">❌</button>
            <div className='JobTitle'>{job.jobTitle}</div>
            <img src={job.businessLogoUrl} alt={`${job.business} logo`} className="modal-logo" />
            <div className="job-details">
                <div className="job-info"><strong>Business:</strong> {job.business}</div>
                <div className="job-info"><strong>Location:</strong> {job.location}</div>
                <div className="job-info"><strong>Salary:</strong> {job.salary}</div>
                <div className="job-info"><strong>Employment Type:</strong> {job.employmentType}</div>
            </div>
            <p className="job-description">{job.description}</p>
            <div className="modal-actions">
                <button onClick={handleViewBusiness} className="action-button">View Business</button>
                <button onClick={handleContactNow} className="action-button">Contact Now</button>
                <button onClick={handleSaveJob} className="action-button save-button">Save Job</button>
            </div>
        </Modal>
    );
};

export default JobModal;