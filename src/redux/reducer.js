import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import {
  ADD_USER,
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_SEARCH_TERM,
  REMOVE_BOOK,
  REMOVE_CURRENT_BOOK,
  READ_BOOK,
  END_BOOK,
  ADD_BOOK,
  READ_AGAIN,
  SET_CURRENT_BOOK,
  SET_BOOKS,
  SET_FINISHED_BOOKS,
  SET_FUTURE_BOOKS,
} from "./types";
import { generateUserId } from "../utils";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      // if (!action.payload.userName) {
      //   return state;
      // }
      const user = {
        id: generateUserId(20),
        userName: action.payload,
        finishedBooks: [],
        futureBooks: [],
        currentBook: [],
      };

      // below means - make a copy of the state, add the user and send them straight to search for books
      const newState = { ...state, user, screenMode: 3 };

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
    // remove book from reading list
    case REMOVE_BOOK: {
      const user = { ...state.user };
      const futureBooks = user.futureBooks;

      const index = futureBooks.indexOf(action.payload);

      futureBooks.splice(index, 1);

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }
    // add book to reading list
    case ADD_BOOK: {
      const user = { ...state.user };
      // const allBooks = { ...state.allBooks };
      // if no future books, create an empty array
      const futureBooks = user.futureBooks ? user.futureBooks : [];

      // already in reading list? If so, return with no change
      if (futureBooks.includes(action.payload)) {
        return state;
      }
      // const index = allBooks.indexOf(action.payload);

      // allBooks.splice(index, 1);

      futureBooks.push(action.payload);

      user.futureBooks = futureBooks;

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }

    // remove book from current
    case REMOVE_CURRENT_BOOK: {
      const user = { ...state.user };
      const allBooks = state.allBooks;

      const indexOfBook = allBooks.findIndex(
        (item) => item.id === action.payload.id
      );

      user.currentBook.splice(indexOfBook, 1);

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }

    case END_BOOK: {
      const user = { ...state.user };

      const currentBook = user.currentBook;
      const finishedBooks = user.finishedBooks;

      const indexOfBook = currentBook.findIndex(
        (item) => item.id === action.payload.id
      );
      currentBook.splice(indexOfBook, 1);

      finishedBooks.push(action.payload);

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }
    // move from reading list to current book!!
    case READ_BOOK: {
      const user = { ...state.user };
      const futureBooks = user.futureBooks;

      const index = futureBooks.indexOf(action.payload);
      futureBooks.splice(index, 1);

      const currentBook = user.currentBook;
      currentBook.push(action.payload);

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }
    // re-add to reading list but keep in finished books list too
    case READ_AGAIN: {
      const user = { ...state.user };
      // if no books in reading list, create an empty object
      const futureBooks = user.futureBooks ? user.futureBooks : [];
      // const finishedBooks = user.finishedBooks;

      // already there? If so, return with no change
      if (futureBooks.includes(action.payload)) {
        return state;
      }
      futureBooks.push(action.payload);

      user.futureBooks = futureBooks;

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }

    // API types below!!!!

    case SET_BOOKS: {
      const newState = { ...state, allBooks: action.payload };

      storeItem("store", newState);
      return newState;
    }

    case SET_CURRENT_BOOK: {
      const newState = { ...state, book: action.payload };

      storeItem("store", newState);
      return newState;
    }

    case SET_FINISHED_BOOKS: {
      const newState = { ...state, finishedBooks: action.payload };

      storeItem("store", newState);
      return newState;
    }

    case SET_FUTURE_BOOKS: {
      const newState = { ...state, futureBooks: action.payload };

      storeItem("store", newState);
      return newState;
    }
    default:
      return state;
  }
}
