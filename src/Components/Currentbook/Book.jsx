import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_CURRENT_BOOK, ADD_FINISHED_BOOK } from "../../redux/types";
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

  const deleteFromCurrentList = async () => {
    await axios.delete("http://localhost:6001/books/current", {
      book_id: result.id,
      user_id: 9,
    });
    dispatch({ type: REMOVE_CURRENT_BOOK, payload: result.id });
  };

  const finishedThisBook = async () => {
    await axios.post("http://localhost:6001/books/finished", {
      book_id: result.id,
      user_id: 9,
    });
    dispatch({ type: ADD_FINISHED_BOOK, payload: result.id });
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
            className="book"
            src={result.image}
            alt={`${result.bookTitle} cover`}
          />
          <div>
            {/* ref={buttonRotate} className="button" */}
            <button className="component-btn box" onClick={finishedThisBook}>
              I've finished this book!
            </button>
          </div>
          <button className="component-btn" onClick={deleteFromCurrentList}>
            Delete book
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
