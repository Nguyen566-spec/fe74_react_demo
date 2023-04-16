import React, { memo } from "react";

const ChildMemo = () => {
  console.log("render child memo");
  return (
    <div className="container mt-5">
      <h1>ChildMemo</h1>
    </div>
  );
};

export default memo(ChildMemo);
