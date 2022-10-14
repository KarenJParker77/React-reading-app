import React from "react";
import { useDispatch } from "react-redux";
import { READ_AGAIN } from "../../redux/types";
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
      <img
        src={result.image}
        alt={`${result.bookTitle} cover`}
        width="500"
        height="600"
      />
      <div ref={app} className="App">
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
