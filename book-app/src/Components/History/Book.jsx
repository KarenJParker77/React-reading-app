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
      <h2>{result.bookTitle}</h2>
      <h3>By {result.author}</h3>
      <img
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        src={result.image}
        alt={`${result.bookTitle} cover`}
      />
      <div>
        {/* ref={app} className="App"> */}
        <button
          className="component-btn box"
          onClick={() => dispatch({ type: READ_AGAIN, payload: result.id })}
        >
          Put this book back in your reading list
        </button>
      </div>
    </>
  );
};

export default Book;
