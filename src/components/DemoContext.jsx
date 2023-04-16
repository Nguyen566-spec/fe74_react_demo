import React, { useContext } from "react";
import UseContext, { Context } from "../hooks/UseContext";
import ChildContext from "./ChildContext";

const DemoContext = () => {
  const context = useContext(Context);
  console.log(context);
  return (
    <UseContext>
      <ChildContext />
    </UseContext>
  );
};

export default DemoContext;
