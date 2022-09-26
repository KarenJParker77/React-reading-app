import React from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../../redux/types";
const Book = ({ result }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>{result.bookTitle}</h1>;<h2>By {result.author}</h2>
      <img src={result.image} alt={result.image} />
      <button onClick={() => dispatch({ type: ADD_BOOK, payload: result.id })}>
        Add book
      </button>
    </>
  );
};

export default Book;
