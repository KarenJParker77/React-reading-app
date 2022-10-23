import React from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../../redux/types";
import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.1 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
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
            className="book"
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            src={result.image}
            alt={`${result.bookTitle} cover`}
          />

          {/* ref={app} className="App" */}
          <button
            className="component-btn box"
            onClick={() => dispatch({ type: ADD_BOOK, payload: result.id })}
          >
            Add to reading list
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
