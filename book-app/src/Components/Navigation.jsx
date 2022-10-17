import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_SCREEN_MODE } from "../redux/types";

const Navigation = () => {
  const dispatch = useDispatch();
  const screenMode = useSelector((state) => state.screenMode);

  return (
    <>
      <nav className="nav">
        {screenMode === 1 ? (
          <button
            className="onPageButton"
            // onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 1 })}
          >
            Sign up
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 1 })}
          >
            Sign up
          </button>
        )}

        {screenMode === 2 ? (
          <button
            className="onPageButton"
            // onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}
          >
            Current book
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 2 })}
          >
            Current book
          </button>
        )}

        {screenMode === 3 ? (
          <button
            className="onPageButton"
            // onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}
          >
            Search
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 3 })}
          >
            Search
          </button>
        )}

        {screenMode === 4 ? (
          <button
            className="onPageButton"
            // onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 4 })}
          >
            Reading list
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 4 })}
          >
            Reading list
          </button>
        )}

        {screenMode === 5 ? (
          <button
            className="onPageButton"
            // onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 5 })}
          >
            History
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: SET_SCREEN_MODE, payload: 5 })}
          >
            History
          </button>
        )}
      </nav>
    </>
  );
};

export default Navigation;
