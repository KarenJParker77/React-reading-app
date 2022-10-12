import React from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

import Results from "./Readinglist/Results";

const Readinglist = () => {
  const allBooks = useSelector((state) => state.allBooks);
  const user = useSelector((state) => state.user);

  const results = allBooks.filter((book) => {
    return user.futureBooks.includes(book.id);
  });

  return (
    <>
      <h1>Reading list</h1>
      <nav>
        <Navigation />

        {results.length > 0 ? (
          <Results results={results} />
        ) : (
          <p>Sorry, no results</p>
        )}
      </nav>
    </>
  );
};

export default Readinglist;
