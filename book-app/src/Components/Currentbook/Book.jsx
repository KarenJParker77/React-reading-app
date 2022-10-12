import React from "react";
import { useDispatch } from "react-redux";
import { REMOVE_CURRENT_BOOK, END_BOOK } from "../../redux/types";
// import { gsap } from "gsap";

const Book = ({ result }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".finishBookButton",
  //     { backgroundColor: "blue" },
  //     { backgroundColor: "gold" }
  //   );
  // }, []);
  return (
    <>
      <h1>{result.bookTitle}</h1>;<h2>By {result.author}</h2>
      <img src={result.image} alt={result.image} />
      <button
        className="finishBookButton"
        onClick={() => dispatch({ type: END_BOOK, payload: result.id })}
      >
        I've finished this book!
      </button>
      <button
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
