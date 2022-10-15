import React from "react";
import { useDispatch } from "react-redux";
import { ADD_BOOK } from "../../redux/types";
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
      <img src={result.image} alt={`${result.bookTitle} cover`} />
      <div ref={app} className="App">
        <button
          className="component-btn box"
          onClick={() => dispatch({ type: ADD_BOOK, payload: result.id })}
        >
          Add to reading list
        </button>
      </div>
    </>
  );
};

export default Book;
