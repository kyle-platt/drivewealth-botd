import React from "react";
import "./Search.css";

const Search = ({ handleChange, value }) => {
  return (
    <input
      className="search-bar"
      placeholder="search"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Search;
