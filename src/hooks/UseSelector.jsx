import React from "react";
import { useSelector } from "react-redux";

const UseSelector = () => {
  const movieReducer = useSelector((state) => state.movieBookingReducer);
  console.log("movieReducer", movieReducer);
  return (
    <div className="container mt-5">
      <h1>UseSelector</h1>
    </div>
  );
};

export default UseSelector;
