import React, { createContext, useState } from "react";

export const Context = createContext({});

const UseContext = ({ children, ...props }) => {
  const [state, setState] = useState({
    name: "Dung",
    age: 26,
  });
  return <Context.Provider value={{ ...state, setState }}>{children}</Context.Provider>;
};

export default UseContext;
