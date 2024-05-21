import React, { useState, useEffect } from "react";
import JobCard from "../../components/JobCard/JobCard";
import "./Jobs.css"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../components/ui/pagination";


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
  {
    "_id": { "$oid": "unique_id_11" },
    "jobTitle": "Customer Support Specialist",
    "description": "Friendly customer support specialist needed to assist our customers.",
    "business": "SupportHub",
    "location": "Houston, TX",
    "businessLogoUrl": "/assets/logos/logo2.png",
    "salary": "$45k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_12" },
    "jobTitle": "IT Support Technician",
    "description": "IT support technician needed to troubleshoot and resolve technical issues.",
    "business": "TechFix",
    "location": "San Diego, CA",
    "businessLogoUrl": "/assets/logos/logo3.png",
    "salary": "$60k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_13" },
    "jobTitle": "Sales Representative",
    "description": "Motivated sales representative needed to expand our client base.",
    "business": "SalesCorp",
    "location": "Phoenix, AZ",
    "businessLogoUrl": "/assets/logos/logo1.png",
    "salary": "$55k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_14" },
    "jobTitle": "Operations Manager",
    "description": "Operations manager needed to improve operational efficiency.",
    "business": "OpsManage",
    "location": "Philadelphia, PA",
    "businessLogoUrl": "/assets/logos/logo2.png",
    "salary": "$105k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_15" },
    "jobTitle": "Business Analyst",
    "description": "Business analyst needed to analyze business processes and data.",
    "business": "AnalyzeThis",
    "location": "Boston, MA",
    "businessLogoUrl": "/assets/logos/logo3.png",
    "salary": "$95k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_16" },
    "jobTitle": "Social Media Manager",
    "description": "Social media manager needed to manage and grow our social media presence.",
    "business": "SocialBuzz",
    "location": "Remote",
    "businessLogoUrl": "/assets/logos/logo4.png",
    "salary": "$65k/year",
    "employmentType": "Remote"
  },
  {
    "_id": { "$oid": "unique_id_17" },
    "jobTitle": "Administrative Assistant",
    "description": "Administrative assistant needed to support office operations.",
    "business": "AdminPro",
    "location": "Denver, CO",
    "businessLogoUrl": "/assets/logos/logo5.png",
    "salary": "$40k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_18" },
    "jobTitle": "DevOps Engineer",
    "description": "DevOps engineer needed to manage and optimize our infrastructure.",
    "business": "CloudTech",
    "location": "San Francisco, CA",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$130k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_19" },
    "jobTitle": "Mobile App Developer",
    "description": "Mobile app developer needed to create and maintain mobile applications.",
    "business": "AppMaster",
    "location": "Portland, OR",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$120k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_20" },
    "jobTitle": "Data Analyst",
    "description": "Data analyst needed to gather and interpret data to provide insights.",
    "business": "DataCorp",
    "location": "Salt Lake City, UT",
    "businessLogoUrl": "/assets/logos/logo6.png",
    "salary": "$85k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_21" },
    "jobTitle": "SEO Specialist",
    "description": "SEO specialist needed to optimize our website for search engines.",
    "business": "WebOptimize",
    "location": "Remote",
    "businessLogoUrl": "/assets/logos/logo4.png",
    "salary": "$70k/year",
    "employmentType": "Remote"
  },
  {
    "_id": { "$oid": "unique_id_22" },
    "jobTitle": "Cybersecurity Analyst",
    "description": "Cybersecurity analyst needed to protect our systems and data.",
    "business": "SecureNet",
    "location": "Atlanta, GA",
    "businessLogoUrl": "/assets/logos/logo2.png",
    "salary": "$115k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_23" },
    "jobTitle": "Recruiter",
    "description": "Recruiter needed to attract and hire top talent for our company.",
    "business": "TalentFind",
    "location": "Dallas, TX",
    "businessLogoUrl": "/assets/logos/logo3.png",
    "salary": "$70k/year",
    "employmentType": "Fulltime"
  },
  {
    "_id": { "$oid": "unique_id_24" },
    "jobTitle": "Accountant",
    "description": "Accountant needed to manage financial records and ensure compliance.",
    "business": "FinManage",
    "location": "Orlando, FL",
    "businessLogoUrl": "/assets/logos/logo1.png",
    "salary": "$75k/year",
    "employmentType": "Fulltime"
  }
];

const ITEMS_PER_PAGE = 8;

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Load the dummy data (for now)
    setJobs(dummyJobs);
  }, []);

  const handleJobClick = (job) => {
    alert(`Clicked job: ${job.title}`); // Replace this with a modal or navigation logic
  };

  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="title"><img src="./assets/imgs/AllJobs.svg" alt="" /></div>
      <div className="job-listings-container">
        {currentJobs.map(job => (
          <JobCard key={job._id.$oid} job={job} onClick={handleJobClick} />
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(idx + 1);
                }}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) handlePageChange(currentPage + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}