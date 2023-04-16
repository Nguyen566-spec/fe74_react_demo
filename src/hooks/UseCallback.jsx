import React, { useCallback, useState } from "react";
import ChildCallback from "../components/ChildCallback";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const handleNumber = useCallback(() => setNumber((prev) => prev + 1), []);
  return (
    <div className="container mt-5">
      <h1>UseCallback</h1>
      <h2>{number}</h2>
      <ChildCallback handleNumber={handleNumber} />
    </div>
  );
};

export default UseCallback;
