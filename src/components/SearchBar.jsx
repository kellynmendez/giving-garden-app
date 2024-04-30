import React from "react";

function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      id="searchInput"
      type="text"
      className="w-4/12 border-2 border-gray-300 bg-white h-20 px-10 pr-16 rounded-lg text-sm focus:outline-none"
      placeholder="Search Non-Profits..."
      value={searchTerm}
      onChange={onSearch}
    />
  );
}

export default SearchBar;
