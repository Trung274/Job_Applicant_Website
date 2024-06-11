import React from 'react';

function BusinessCard({ business, onClickViewJobs }) {
  return (
    <div
      className="flex items-center border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow-md hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={onClickViewJobs}
    >
      <img src={business.profileImage} alt={`${business.name} profile`} className="w-16 h-16 rounded-full mr-4" />
      <div className="flex-grow">
        <div className="text-lg font-bold mb-1">{business.name}</div>
        <div className="text-gray-600">{business.city}</div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        View Jobs
      </button>
    </div>
  );
}

export default BusinessCard;