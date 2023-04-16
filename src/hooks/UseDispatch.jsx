import React from "react";
import { useDispatch } from "react-redux";
import { payChair } from "./../movies/movie/action"

const UseDispatch = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mt-5">
      <h1>UseDispatch</h1>
      <button className="btn btn-primary" onClick={() => dispatch(payChair())}>Paychair action</button>
    </div>
  );
};

export default UseDispatch;
