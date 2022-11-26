import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_FUTURE_BOOK, ADD_CURRENT_BOOK } from "../../redux/types";
import { gsap } from "gsap";
import axios from "axios";

const Book = ({ result }) => {
  const dispatch = useDispatch();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  const removeFromFutureList = async () => {
    await axios.delete("http://localhost:6001/books/future", {
      book_id: result.id,
      user_id: 9,
    });
    dispatch({ type: REMOVE_FUTURE_BOOK, payload: result.id });
  };

  const startReadingThisBook = async () => {
    await axios.post("http://localhost:6001/books/current", {
      book_id: result.id,
      user_id: 9,
    });
    dispatch({ type: ADD_CURRENT_BOOK, payload: result.id });
  };

  // const user = useSelector((state) => state.user);

  return (
    <>
      <div className="book-container">
        <div className="book-header">
          <h2>{result.bookTitle}</h2>
          <h3>By {result.author}</h3>
        </div>
        <div className="book-contents">
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            src={result.image}
            alt={`${result.bookTitle} cover`}
          />

          <button className="component-btn" onClick={removeFromFutureList}>
            Remove book from reading list
          </button>

          <button className="component-btn box" onClick={startReadingThisBook}>
            Start reading this book
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
