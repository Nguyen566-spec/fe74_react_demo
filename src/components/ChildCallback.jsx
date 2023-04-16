import React, { memo } from "react";

const ChildCallback = ({ handleNumber }) => {
  console.log("render");
  return (
    <>
      <h1>ChildCallback</h1>
      <button className="btn btn-info" onClick={handleNumber}>
        + Number
      </button>
    </>
  );
};

export default memo(ChildCallback);
