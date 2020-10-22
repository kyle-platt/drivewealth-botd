import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, handleChange }) => {
  const getOptions = () => {
    const options = [];
    for (let step = 1; step <= totalPages; step++) {
      options.push(
        <option key={step} value={step}>
          {step}
        </option>
      );
    }
    return options;
  };

  return (
    <select
      name="pages"
      id="pages"
      onChange={handleChange}
      value={currentPage}
      className="pagination"
    >
      {getOptions()}
    </select>
  );
};

export default Pagination;
