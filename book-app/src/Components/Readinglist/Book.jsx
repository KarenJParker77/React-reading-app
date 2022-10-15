import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_BOOK, READ_BOOK } from "../../redux/types";
import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();
  const { useLayoutEffect, useRef } = React;

  useEffect(() => {
    gsap.fromTo(
      ".contents",
      { x: -50 },
      { x: 80, duration: 5, ease: "back.out(1.7)" }
    );
  }, []);

  const buttonRotate = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, buttonRotate);

    return () => ctx.revert();
  });

  // const user = useSelector((state) => state.user);

  return (
    <>
      <div className="contents">
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
        <div ref={buttonRotate} className="button">
          <button
            className="component-btn box"
            onClick={() => dispatch({ type: READ_BOOK, payload: result.id })}
          >
            Start reading this book
          </button>
        </div>
      </div>
    </>
  );
};

export default Book;
