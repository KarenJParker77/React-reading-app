import React, { useState } from "react";
import { ADD_USER } from "../redux/types";
import { useDispatch } from "react-redux";
import { validate } from "../validation";
import Navigation from "./Navigation";
import axios from "axios";
import { SET_SCREEN_MODE } from "../redux/types";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [errors, setErrors] = useState();

  const dispatch = useDispatch();
  // const [data, setData] = useState();

  const onSubmit = async (e) => {
    console.log(errors);
    if (!errors) {
      const result = await axios.post("http://localhost:6001/login", {
        email: userEmail,
        password: userPassword,
      });
      console.log(result);
      // if status 1, take user to search page
      if (result.data.status === 1) {
        dispatch({ type: SET_SCREEN_MODE, payload: 3 });
      }
      setUserEmail("");
      setUserPassword("");
    }
  };

  const onInput = (e) => {
    // store in state ready for user to submit

    if (e.target.name === "email") {
      setUserEmail(e.target.value);
    } else {
      setUserPassword(e.target.value);
    }

    const isError = validate(1, { userEmail, userPassword });
    // need treble = because an object is always truthy
    if (isError === true) {
      setErrors(undefined);
    } else {
      setErrors(isError);
    }
  };

  return (
    <>
      <div className="main-body">
        <Navigation />

        <input
          className="input-box"
          placeholder="Add your email address"
          onInput={onInput}
          type="text"
          name="email"
        />
        {/* if there are errors, then display username errors to screen */}
        <p>{errors && errors.userEmail}</p>
        <input
          className="input-box"
          placeholder="Add a password"
          onInput={onInput}
          type="password"
          name="password"
        />
        {/* if there are errors, then display username errors to screen */}
        <p>{errors && errors.userPassword}</p>
        <button onClick={onSubmit}>Log in</button>
      </div>
    </>
  );
};

export default Login;
