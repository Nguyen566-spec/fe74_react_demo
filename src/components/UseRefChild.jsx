import React, { forwardRef, useImperativeHandle, useState } from "react";

const UseRefChild = (props, ref) => {
  const [like, setLike] = useState(10);
  console.log("ref", ref);
  useImperativeHandle(ref, () => {
    return like;
  });
  return (
    <div>
      <h1>UseRefChild</h1>
      <button onClick={() => setLike(like + 1)}>Like</button>
    </div>
  );
};

export default forwardRef(UseRefChild);
