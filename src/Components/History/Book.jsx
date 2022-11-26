import React from "react";
import { useDispatch } from "react-redux";
import { ADD_FUTURE_BOOK_AGAIN } from "../../redux/types";
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

  const addBackToReadingList = async () => {
    await axios.post("http://localhost:6001/books/future", {
      book_id: result.id,
      user_id: 9,
    });
    dispatch({ type: ADD_FUTURE_BOOK_AGAIN, payload: result.id });
  };

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
          <div>
            <button
              className="component-btn box"
              onClick={addBackToReadingList}
            >
              Put this book back in your reading list
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
