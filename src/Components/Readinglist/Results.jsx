import React from "react";
import Book from "./Book";

const Results = ({ results }) => {
  console.log(results);
  return results.map((result) => {
    return <Book key={result.id} result={result} />;
  });
};

export default Results;
