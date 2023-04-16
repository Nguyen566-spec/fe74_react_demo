import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(2);
  const [like, setLike] = useState(0);
  const countLike = useMemo(() => {
    const l = like + 100;
    console.log("Count like", l);
    return l;
  }, [like]);
  console.log(countLike);
  return (
    <div className="container mt-5">
      <h1>UseMemo</h1>
      <button className="btn btn-success" onClick={() => setNumber(number - 1)}>
        -
      </button>
      <span className="px-3">{number}</span>
      <button className="btn btn-success" onClick={() => setNumber(number + 1)}>
        +
      </button>
      <button className="btn btn-warning" onClick={() => setLike(like - 1)}>
        -
      </button>
      <span> Like: {like}</span>
      <button className="btn btn-warning" onClick={() => setLike(like + 1)}>
        +
      </button>
    </div>
  );
};

export default UseMemo;
