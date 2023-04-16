import React, { useRef, useState } from "react";
import UseRefChild from "../components/UseRefChild";

const UseRef = () => {
  const inputRef = useRef("");
  const [number, setNumber] = useState(1)
  const object = {
    current: 10,
  }
  console.log('Object', object);
  const objectRef = useRef(10);
  console.log('Object ref', objectRef);
  const getValueFromChildRef = useRef(2);
  return (
    <div className="container mt-5">
      <h1>UseRef</h1>
      <div>
        <input ref={inputRef} type="text" className="form-control my-5" />
        <button
          className="btn btn-success"
          onClick={() => console.log(inputRef.current.value)}
        >
          Change value
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            setNumber(number + 1);
            object.current++;
            objectRef.current++;
        }}
        >
          Get value from input
        </button>
      </div>
      <UseRefChild ref={getValueFromChildRef}/>
      <button className="btn btn-warning" onClick={() => console.log(getValueFromChildRef.current)}>Get value from child</button>
    </div>
  );
};

export default UseRef;
