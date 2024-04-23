import React, { useState, useEffect } from "react";
import JobCard from "../../components/JobCard/JobCard";
import Footer from "../../components/Footer/Footer";
import "./Home.css"

// Dummy data 
const dummyJobs = [
  {
    "_id": { "$oid": "unique_id_1" },
    "title": "Software Engineer",
    "description": "Looking for a qualified software engineer to design, develop, and install software solutions.",
    "company": "Tech Corp",
    "location": "San Francisco, CA",
  },
  {
    "_id": { "$oid": "unique_id_2" },
    "title": "Software Engineer",
    "description": "Looking for a qualified software engineer to design, develop, and install software solutions.",
    "company": "Tech Corp",
    "location": "San Francisco, CA"
  },
  {
    "_id": { "$oid": "unique_id_3" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY"
  },
  {
    "_id": { "$oid": "unique_id_4" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY"
  },
  {
    "_id": { "$oid": "unique_id_5" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY"
  },
  {
    "_id": { "$oid": "unique_id_6" },
    "title": "Product Manager",
    "description": "Seeking a detail-oriented, experienced product manager to lead our product development team.",
    "company": "Innovatech",
    "location": "New York, NY"
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

  return (
    <div>
      <h1>Job Listings</h1>
      <div className="job-listings-container">
        {jobs.map(job => (
          <JobCard key={job._id.$oid} job={job} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
