import React from "react";
import Navigation from "./Navigation";
import Results from "./Currentbook/Results";
import { useSelector } from "react-redux";

// import { useState } from "react";

const Currentbook = () => {
  const user = useSelector((state) => state.user);
  const allBooks = useSelector((state) => state.allBooks);
  console.log(user.currentBook);

  const results = allBooks.filter((book) => {
    if (user.currentBook.includes(book.id)) return true;
  });

  return (
    <>
      <h1>Current Book</h1>
      <nav>
        <Navigation />

        {results.length > 0 ? (
          <Results results={results} />
        ) : (
          <p>No current book</p>
        )}
      </nav>
    </>
  );
};

export default Currentbook;
