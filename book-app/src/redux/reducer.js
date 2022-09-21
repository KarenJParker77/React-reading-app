import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import {
  ADD_USER,
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_SEARCH_TERM,
} from "./types";
import { generateUserId } from "../utils";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    // for testing local storage??
    // case "ADD_BOOK":
    // logic to add book
    // const books = [...state.allBooks];
    // books.push({ id: Math.random(), book: action.payload });
    // const newState = { ...state, books };

    // storeItem("store", newState);
    // return newState;
    case ADD_USER:
      if (!action.payload.userName) {
        return state;
      }
      const user = {
        id: generateUserId(20),
        userName: action.payload.userName,
      };

      {
        const newState = { ...state, user };

        storeItem("store", newState);
        return newState;
      }

    case SET_SCREEN_MODE: {
      const newState = { ...state, screenMode: action.payload };

      storeItem("store", newState);
      return newState;
    }

    case UPDATE_USER: {
      const user = { ...state.user };
      // update userName
      user.userName = action.payload.userName;

      const newState = { ...state, user };

      storeItem("store", newState);
      return newState;
    }

    case DELETE_USER: {
      const newState = { ...state, user: {} };

      storeItem("store", newState);
      return newState;
    }

    case SET_SEARCH_TERM: {
      const newState = { ...state, searchTerm: action.payload };
      return newState;
    }

    default:
      return state;
  }
}
