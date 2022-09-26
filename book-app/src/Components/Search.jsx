import React from "react";
import Navigation from "./Navigation";
import Results from "./Search/Results";
import SearchInput from "./Search/SearchInput";
import { useState } from "react";
import { useSelector } from "react-redux";
import { futureBooks } from "../fakeApi";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const allBooks = useSelector((state) => state.allBooks);
  const user = useSelector((state) => state.user);

  const results = allBooks.filter((possibleBook) => {
    if (user.futureBooks && user.futureBooks.includes(possibleBook.id)) return;

    return possibleBook.bookTitle
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });
  console.log(results);
  return (
    <>
      Search
      <nav>
        <Navigation />
        <SearchInput setSearchTerm={setSearchTerm} />
        <Results results={results} />
      </nav>
    </>
  );
};

export default Search;
