import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "./redux/types";

const App = () => {
  const [book, setBook] = useState("");
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => localStorage.clear()}>Delete local storage</button>
      <input
        onInput={(e) => {
          setBook(e.target.book);
        }}
        type="text"
      />
      <button
        onClick={() => {
          dispatch({ type: ADD_USER, payload: { userName: "Testing" } });
        }}
      >
        Add
      </button>
    </>
  );
};

export default App;
