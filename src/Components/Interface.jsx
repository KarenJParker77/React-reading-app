import React from "react";

import { useSelector } from "react-redux";
import Currentbook from "./Currentbook";
import Search from "./Search";
import Readinglist from "./Readinglist";
import History from "./History";
import Loading from "./Loading";
import Signup from "./Signup";
import Login from "./Login";

const Interface = () => {
  const screenMode = useSelector((state) => state.screenMode);
  return (
    <>
      {screenMode === 0 && <Loading />}
      {screenMode === 1 && <Signup />}
      {screenMode === 2 && <Currentbook />}
      {screenMode === 3 && <Search />}
      {screenMode === 4 && <Readinglist />}
      {screenMode === 5 && <History />}
      {screenMode === 6 && <Login />}
    </>
  );
};

export default Interface;
