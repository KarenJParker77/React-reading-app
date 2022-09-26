import React from "react";

const SearchInput = ({ setSearchTerm }) => {
  return <input onInput={(e) => setSearchTerm(e.target.value)} type="text" />;
};

export default SearchInput;
