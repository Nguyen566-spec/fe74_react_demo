import React, { createContext, useContext, useMemo } from "react";

const Context = createContext();

export const useProvider = () => useContext(Context);

const Provider = ({ children, ...props }) => {
  const context = useProvider();
  const data = useMemo(() => {
    return {
      ...context,
      ...props,
    };
  }, [context, props]);
  return <Context.Provider value={{ ...data }}>{children}</Context.Provider>;
};

export default Provider;
