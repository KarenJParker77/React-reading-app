import React from "react";
import Navigation from "./Navigation";
import Results from "./Search/Results";
import SearchInput from "./Search/SearchInput";
import { useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allBooks = useSelector((state) => state.allBooks);
  const user = useSelector((state) => state.user);

  const results = allBooks.filter((possibleBook) => {
    if (user.futureBooks && user.futureBooks.includes(possibleBook.id)) return;
    // or if not...
    return possibleBook.bookTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className="main-body">
        <nav>
          <Navigation />
        </nav>
        {/* <h1>Search</h1> */}
        <SearchInput setSearchTerm={setSearchTerm} />
        <div className="display-grid">
          {results.length > 0 ? (
            <Results results={results} />
          ) : (
            <p>Sorry, no results</p>
          )}{" "}
        </div>
      </div>
    </>
  );
};

export default Search;
