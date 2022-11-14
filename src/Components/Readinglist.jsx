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
      <div className="main-body">
        <nav>
          <Navigation />
        </nav>
        {/* <h1>Reading list</h1> */}
        <div className="display-grid">
          {results.length > 0 ? (
            <Results results={results} />
          ) : (
            <p>Sorry, no results</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Readinglist;
