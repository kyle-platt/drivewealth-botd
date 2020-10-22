import React from "react";
import "./SortBar.css";

const SortBar = ({ sortOptions, selectedSort, handleClick }) => {
  return (
    <div className="btn-group">
      {sortOptions.map((option, index) => (
        <button
          className={`btn${option === selectedSort ? " active" : ""}`}
          onClick={() => handleClick(option)}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SortBar;
