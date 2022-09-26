import { initialState } from "./initialState";
import { storeItem, getItem } from "../localStorage";
import {
  ADD_USER,
  SET_SCREEN_MODE,
  UPDATE_USER,
  DELETE_USER,
  SET_SEARCH_TERM,
  REMOVE_BOOK,
  READ_BOOK,
  END_BOOK,
  ADD_BOOK,
} from "./types";
import { generateUserId } from "../utils";
import { allBooks } from "../fakeApi";

export function reducer(state = getItem("store") || initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      // if (!action.payload.userName) {
      //   return state;
      // }
      const user = {
        id: generateUserId(20),
        userName: action.payload,
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

    case REMOVE_BOOK: {
      const books = [...state.books];
      const indexOfBook = books.findIndex((item) => item.id === action.payload);

      books.splice(indexOfBook, 1);

      return { ...state, books };
    }

    case ADD_BOOK: {
      const user = { ...state.user };
      // if no future books, create an empty array
      const futureBooks = user.futureBooks ? user.futureBooks : [];

      // already in reading list? If so, return with no change
      if (futureBooks.includes(action.payload)) {
        return state;
      }
      futureBooks.push(action.payload);

      user.futureBooks = futureBooks;

      const newState = { ...state, user };
      storeItem("store", newState);
      return newState;
    }
    // do I need to find index and splice the below from book too?
    case END_BOOK: {
      const finishedBooks = [state.finishedBooks];
      finishedBooks.push({
        userId: state.currentUserId,
        bookId: action.payload.bookId,
        whenFinished: Date.now(),
      });

      const newState = { ...state, finishedBooks };
      storeItem("store", newState);
      return newState;
    }
    // current book!!
    case READ_BOOK: {
      const book = [state.book];
      book.push({
        userId: state.currentUserId,
        bookId: action.payload.bookId,
      });

      const newState = { ...state, book };
      storeItem("store", newState);
      return newState;
    }
    default:
      return state;
  }
}
