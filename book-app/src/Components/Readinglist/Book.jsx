import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_BOOK, READ_BOOK } from "../../redux/types";
const Book = ({ result }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  return (
    <>
      <h1>{result.bookTitle}</h1>;<h2>By {result.author}</h2>
      <img src={result.image} alt={result.image} />
      <button
        onClick={() => dispatch({ type: REMOVE_BOOK, payload: result.id })}
      >
        Remove book from reading list
      </button>
      <button onClick={() => dispatch({ type: READ_BOOK, payload: result.id })}>
        Start reading this book
      </button>
    </>
  );
};

export default Book;
