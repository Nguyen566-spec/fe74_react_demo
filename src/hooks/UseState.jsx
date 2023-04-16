import React, { useState } from "react";

const UseState = () => {
  const [number, setNumber] = useState(1);
  return (
    <div className="container">
      <button className="btn btn-danger" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <span className="px-4">{number}</span>
      <button className="btn btn-primary" onClick={() => setNumber(number + 1)}>
        +
      </button>
    </div>
  );
};

export default UseState;
