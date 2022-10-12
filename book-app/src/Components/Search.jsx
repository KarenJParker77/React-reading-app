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

  //NEED TO REMOVE ALREADY READ AND CURRENT BOOK FROM SEARCH!!!
  // const alreadyRead = allBooks.filter((book) => {
  //   return user.finishedBooks.includes(book);
  // });
  // console.log(alreadyRead);

  // results = the books we show on screen
  // if already in reading list - return it

  const results = allBooks.filter((possibleBook) => {
    if (user.futureBooks && user.futureBooks.includes(possibleBook.id)) return;
    // or if not...
    return possibleBook.bookTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <h1>Search</h1>
      <nav>
        <Navigation />
        <SearchInput setSearchTerm={setSearchTerm} />
        {results.length > 0 ? (
          <Results results={results} />
        ) : (
          <p>Sorry, no results</p>
        )}
      </nav>
    </>
  );
};

export default Search;
