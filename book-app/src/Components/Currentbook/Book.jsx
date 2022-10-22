import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_CURRENT_BOOK, END_BOOK } from "../../redux/types";
import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();
  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };
  return (
    <>
      <div className="book-container">
        <h2>{result.bookTitle}</h2>

        <h3>By {result.author}</h3>

        <img
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          className="book"
          src={result.image}
          alt={`${result.bookTitle} cover`}
        />
        <div>
          {/* ref={buttonRotate} className="button" */}
          <button
            className="component-btn box"
            onClick={() => dispatch({ type: END_BOOK, payload: result.id })}
          >
            I've finished this book!
          </button>
        </div>
        <button
          className="component-btn"
          onClick={() =>
            dispatch({ type: REMOVE_CURRENT_BOOK, payload: result.id })
          }
        >
          Delete book
        </button>
      </div>
    </>
  );
};

export default Book;
