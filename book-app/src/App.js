import React, { useEffect } from "react";
import Interface from "./Components/Interface";
import Loading from "./Components/Loading";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SCREEN_MODE } from "./redux/types";
import "bootstrap/dist/css/bootstrap.min.css";
// import { DataController } from "./Controllers";

const App = () => {
  // use local state below to determine whether on loading screen - only needs to exist for a moment in time
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // send message to store re which screen to load
  const setInterface = () => {
    const payload = user.id ? 2 : 1;
    dispatch({ type: SET_SCREEN_MODE, payload });
    setLoading(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setInterface();
    }, 3000);
    // getting data from API and storing in the store. Instance of class - use underscore
    //   const _dataController = new DataController();
    //   _dataController.init();
  }, []);

  return <>{loading ? <Loading /> : <Interface />}</>;
};

export default App;
