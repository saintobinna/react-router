import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleTitleChange = (e) => {
    onFilterChange({ title: e.target.value });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ rating: e.target.value });
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
