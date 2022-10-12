// completely isolated JS which can message store. Even tho nothing to do with JSX. Is asked to get data and returns it in useable form

// import axios from "axios"

// need to import store to give access to it
import { store } from "../redux/store";
import { allBooks, finishedBooks, futureBooks, book } from "../fakeApi";
import {
  SET_BOOKS,
  SET_FINISHED_BOOKS,
  SET_FUTURE_BOOKS,
  SET_CURRENT_BOOK,
} from "../redux/types";

export class DataController {
  //   talking to API
  init = () => {
    this.getBooks();
    this.getCurrentBook();
    this.getFinishedBooks();
    this.getFutureBooks();

    // this.poll();
  };
  // poll periodically asks API for data
  // poll = () => {
  //   setInterval(() => {
  //     this.getBooks();
  //     this.getCurrentBook();
  //     this.getFinishedBooks();
  //     this.getFutureBooks();
  //   }, 5000000);
  // };

  getBooks = async () => {
    // const result = await axios.get("URL here eventually")
    const result = allBooks;
    // messages the store
    store.dispatch({ type: SET_BOOKS, payload: result });
  };

  getCurrentBook = async () => {
    // const result = await axios.get("URL here eventually")
    const result = book;
    store.dispatch({ type: SET_CURRENT_BOOK, payload: result });
  };

  getFinishedBooks = async () => {
    // const result = await axios.get("URL here eventually")
    const result = finishedBooks;
    store.dispatch({ type: SET_FINISHED_BOOKS, payload: result });
  };

  getFutureBooks = async () => {
    // const result = await axios.get("URL here eventually")
    const result = futureBooks;
    store.dispatch({ type: SET_FUTURE_BOOKS, payload: result });
  };
}
