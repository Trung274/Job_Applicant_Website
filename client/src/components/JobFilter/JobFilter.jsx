import React from 'react';
import './JobFilter.css';

const JobFilter = ({ filters, setFilters }) => {
  const handleFilterChange = (category, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [category]: {
        ...prevFilters[category],
        [value]: !prevFilters[category][value]
      }
    }));
  };

  const renderFilterOptions = (category, options) => (
    <div className="filter-category" key={category}>
      <h4>{category}</h4>
      {options.map(option => (
        <label key={option}>
          <input
            type="checkbox"
            checked={filters[category][option]}
            onChange={() => handleFilterChange(category, option)}
          />
          {option}
        </label>
      ))}
    </div>
  );

  const filterOptions = {
    City: ["San Francisco, CA", "New York, NY", "Austin, TX", "Los Angeles, CA", "Chicago, IL", "Remote"],
    "Type of Employment": ["Fulltime", "Part-Time", "Remote", "Internship", "Contract"],
    "Salary Range": ["$0 - $50k/year", "$50k - $75k/year", "$75k - $100k/year", "$100k - $125k/year", "$125k - $150k/year"]
  };

  return (
    <div className="filter-container">
      {Object.entries(filterOptions).map(([category, options]) =>
        renderFilterOptions(category, options)
      )}
    </div>
  );
};

export default JobFilter;