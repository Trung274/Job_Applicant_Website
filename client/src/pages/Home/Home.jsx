import React, { useState, useEffect } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Home.css"

// Dummy data 
const dummyJobs = [
  {
    "_id": { "$oid": "unique_id_1" },
    "jobTitle": "Software Engineer",
    "description": "Looking for a skilled software engineer to develop and maintain web applications.",
    "business": "Facebook",
    "location": "San Francisco, CA",
    "businessLogoUrl": "/assets/logos/logo1.png",
    "salary": "$120k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_2" },
    "jobTitle": "Data Scientist",
    "description": "Seeking a data scientist to analyze large datasets and provide insights.",
    "business": "X Company",
    "location": "San Francisco, CA",
    "businessLogoUrl": "/assets/logos/logo2.png",
    "salary": "$130k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_3" },
    "jobTitle": "Product Manager",
    "description": "Lead our product development team as an experienced product manager.",
    "business": "Google",
    "location": "New York, NY",
    "businessLogoUrl": "/assets/logos/logo3.png",
    "salary": "$140k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_4" },
    "jobTitle": "UX Designer",
    "description": "Creative UX designer needed to design user-friendly interfaces.",
    "business": "Innovatech",
    "location": "Austin, TX",
    "businessLogoUrl": "/assets/logos/logo4.png",
    "salary": "$110k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_5" },
    "jobTitle": "Marketing Specialist",
    "description": "Looking for a marketing specialist to lead our campaigns and strategies.",
    "business": "Innovatech",
    "location": "New York, NY",
    "businessLogoUrl": "/assets/logos/logo5.png",
    "salary": "$85k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_6" },
    "jobTitle": "HR Coordinator",
    "description": "HR coordinator needed to manage employee relations and recruitment.",
    "business": "Innovatech",
    "location": "Los Angeles, CA",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$75k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_7" },
    "jobTitle": "Financial Analyst",
    "description": "Seeking a financial analyst to support financial planning and analysis.",
    "business": "FinancePro",
    "location": "Chicago, IL",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$90k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_8" },
    "jobTitle": "Content Writer",
    "description": "Creative content writer needed to produce engaging blog posts and articles.",
    "business": "Innovatech",
    "location": "Remote",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$50k/year",
    "employmentType": "Remote"
  },
  {
    "_id": { "$oid": "unique_id_9" },
    "jobTitle": "Graphic Designer",
    "description": "Graphic designer with a keen eye for detail needed for our design team.",
    "business": "DesignCo",
    "location": "Miami, FL",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$70k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_10" },
    "jobTitle": "Project Manager",
    "description": "Experienced project manager needed to oversee multiple projects.",
    "business": "BuildIt",
    "location": "Seattle, WA",
    "businessLogoUrl": "/assets/logos/logo4.png",
    "salary": "$95k/year",
    "employmentType": "Fulltime"
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
    alert(`Clicked job: ${job.jobTitle}`); // Replace this with a modal or navigation logic
  };

  return (
    <div>
      <div className="w-full">
        <img src="./assets/imgs/Panel.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="text-2xl mx-5 my-5">
        <img src="./assets/imgs/Jobsopen.svg" alt="" />
      </div>
      <div className="flex flex-wrap justify-center w-3/5 mx-auto gap-5">
        {jobs.map((job) => (
          <JobCard key={job._id.$oid} job={job} onClick={handleJobClick} />
        ))}
      </div>
    </div>
  );
}