import React, { useState, useEffect } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.css"

// Dummy data 
const dummyJobs = [
  {
    "_id": { "$oid": "unique_id_1" },
    "title": "Software Engineer",
    "description": "Looking for a qualified software engineer to design, develop, and install software solutions.",
    "company": "Facebook",
    "location": "San Francisco, CA",
    "logoUrl": "/assets/logos/logo1.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_2" },
    "title": "Software Engineer",
    "description": "Looking for a qualified software engineer to design, develop, and install software solutions.",
    "company": "X Company",
    "location": "San Francisco, CA",
    "logoUrl": "/assets/logos/logo2.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_3" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Google",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo3.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_4" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo4.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_5" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo5.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_6" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo6.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_7" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo6.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_8" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo6.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_9" },
    "title": "Product Manager",
    "description": "Seeking an experienced product manager .",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo6.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_10" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo4.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_11" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo2.png",
    "salary": "$120,000 per year"
  },
  {
    "_id": { "$oid": "unique_id_12" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY",
    "logoUrl": "/assets/logos/logo3.png",
    "salary": "$120,000 per year"
  },

];

export default function Home() {
  // Mock data
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    //Section for fetching the data from the server
    // Load the dummy data (for now)
    setJobs(dummyJobs);
  }, []);

  const handleJobClick = (job) => {
    alert(`Clicked job: ${job.title}`); // Replace this with a modal or navigation logic
  };

  return (
    <div>
      <div className="poster"><img src="assets/logos/Panel.png" alt="" /></div>
      <div className="title">Latest Jobs Open</div>
      <div className="job-listings-container">
        {jobs.map(job => (
          <JobCard key={job._id.$oid} job={job} onClick={handleJobClick} />
        ))}
      </div>
    </div>
  );
}