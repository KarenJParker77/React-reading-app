import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { REMOVE_BOOK, READ_BOOK } from "../../redux/types";
import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1.2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { scale: 1 });
  };

  // const user = useSelector((state) => state.user);

  return (
    <>
      <div className>
        <h2>{result.bookTitle}</h2>
        <h3>By {result.author}</h3>
        <div>
          <img
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            src={result.image}
            alt={result.image}
          />
        </div>
        <button
          className="component-btn"
          onClick={() => dispatch({ type: REMOVE_BOOK, payload: result.id })}
        >
          Remove book from reading list
        </button>
        <div>
          {/* // ref={buttonRotate} className="button" */}
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
