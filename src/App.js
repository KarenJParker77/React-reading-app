import React, { useEffect, useState } from "react";
import Interface from "./Components/Interface";
import Loading from "./Components/Loading";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";
import "bootstrap/dist/css/bootstrap.min.css";
// import { DataController } from "./Controllers";

const App = () => {
  // use local state below to determine whether on loading screen - only needs to exist for a moment in time
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // send message to store re which screen to load
  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  // const getApiData = async () => {
  //   try {
  //     const books = await axios.get(
  //       "https://books17.p.rapidapi.com/works/387215"
  //     );
  //     const options = {
  //       // what to do with the below??
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "6abd2dee0bmshdbfe0202c91fdf1p1f8e01jsnbd598e6016b0",
  //         "X-RapidAPI-Host": "books17.p.rapidapi.com",
  //       },
  //     };
  //     setBooks(books.data);
  //   } catch (error) {
  //     console.log("API error");
  //   }
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setInterface();
    }, 6000);
    // getting data from API and storing in the store. Instance of class - use underscore
    //   const _dataController = new DataController();
    //   _dataController.init();
  }, []);

  return <>{loading ? <Loading /> : <Interface />}</>;
};

export default App;
