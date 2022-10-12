import React from "react";
import { useDispatch } from "react-redux";
import { READ_AGAIN } from "../../redux/types";
const Book = ({ result }) => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>{result.bookTitle}</h1>;<h2>By {result.author}</h2>
      <img src={result.image} alt={result.image} />
      <button
        onClick={() => dispatch({ type: READ_AGAIN, payload: result.id })}
      >
        Read again
      </button>
    </>
  );
};

export default Book;
