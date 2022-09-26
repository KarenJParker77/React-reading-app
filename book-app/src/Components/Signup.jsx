import React, { useState } from "react";
import { ADD_USER } from "../redux/types";
import { useDispatch } from "react-redux";
import { validate } from "../validation";

const Signup = () => {
  //  local state below
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();

  const onSubmit = () => {
    if (!errors) {
      // add user, set payload to be the user name
      dispatch({ type: ADD_USER, payload: userName });
      setUserName("");
    }
  };

  const onInput = (e) => {
    // store in state ready for user to submit
    setUserName(e.target.value);

    const isError = validate(1, { userName });
    // need treble = because an object is always truthy
    if (isError === true) {
      setErrors(undefined);
    } else {
      setErrors(isError);
    }
  };

  return (
    <>
      <h1>Sign up</h1>
      <input onInput={onInput} type="text" />
      {/* if there are errors, then display username errors to screen */}
      <p>{errors && errors.userName}</p>
      <button onClick={onSubmit}>Signup</button>
    </>
  );
};

export default Signup;
