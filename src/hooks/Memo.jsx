import React, { useState } from "react";
import ChildMemo from "../components/ChildMemo";

const Memo = () => {
  const [number, setNumber] = useState(2);
  const [like, setLike] = useState(0);
  return (
    <div className="container mt-5">
      <h1>Memo</h1>
      <button className="btn btn-success" onClick={() => setNumber(number + 1)}>
        + Number
      </button>
      <button className="btn btn-warning" onClick={() => setLike(like + 1)}>
        + Like
      </button>
      <ChildMemo number={number}/>
    </div>
  );
};

export default Memo;
