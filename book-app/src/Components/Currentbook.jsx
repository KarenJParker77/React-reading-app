import React from "react";
import Navigation from "./Navigation";
import Results from "./Currentbook/Results";
import { useSelector } from "react-redux";

// import { useState } from "react";

const Currentbook = () => {
  const user = useSelector((state) => state.user);
  const allBooks = useSelector((state) => state.allBooks);

  const results = allBooks.filter((book) => {
    if (user.currentBook.includes(book.id)) return true;
  });

  return (
    <>
      <div className="main-body">
        <nav>
          <Navigation />
        </nav>
        {/* <h1>Current Book</h1> */}
        <div className="display-grid">
          {results.length > 0 ? (
            <Results results={results} />
          ) : (
            <p>No current book</p>
          )}
        </div>
      </div>
      <button onClick={() => localStorage.clear()}>Delete my data</button>
    </>
  );
};

export default Currentbook;
