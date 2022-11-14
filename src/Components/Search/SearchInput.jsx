import React from "react";

const SearchInput = ({ setSearchTerm }) => {
  return (
    <input
      onInput={(e) => setSearchTerm(e.target.value)}
      type="text"
      placeholder="Search for a book"
      className="input-box"
    />
  );
};

export default SearchInput;
