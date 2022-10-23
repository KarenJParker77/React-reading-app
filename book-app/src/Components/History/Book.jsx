import React from "react";
import { useDispatch } from "react-redux";
import { READ_AGAIN } from "../../redux/types";
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
              onClick={() => dispatch({ type: READ_AGAIN, payload: result.id })}
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
