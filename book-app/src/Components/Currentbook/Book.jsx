import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_CURRENT_BOOK, END_BOOK } from "../../redux/types";
import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();
  const { useLayoutEffect, useRef } = React;

  const app = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, app);

    return () => ctx.revert();
  });
  return (
    <>
      <h2>{result.bookTitle}</h2>
      <h3>By {result.author}</h3>
      <img src={result.image} alt={result.image} />
      <div ref={app} className="App">
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
    </>
  );
};

export default Book;
