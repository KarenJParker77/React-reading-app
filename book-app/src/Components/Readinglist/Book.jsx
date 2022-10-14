import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_BOOK, READ_BOOK } from "../../redux/types";
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

  // const user = useSelector((state) => state.user);

  return (
    <>
      <h2>{result.bookTitle}</h2>
      <h3>By {result.author}</h3>
      <div>
        <img src={result.image} alt={result.image} />
      </div>
      <button
        className="component-btn"
        onClick={() => dispatch({ type: REMOVE_BOOK, payload: result.id })}
      >
        Remove book from reading list
      </button>
      <div ref={app} className="App">
        <button
          className="component-btn box"
          onClick={() => dispatch({ type: READ_BOOK, payload: result.id })}
        >
          Start reading this book
        </button>
      </div>
    </>
  );
};

export default Book;
