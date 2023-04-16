import React from "react";
import ChildProvider from "./ChildProvider";
import ChildProvider2 from "./ChildProvider2";
import Provider from "./provider/Provider";

const DemoProvider = () => {
  return (
    <Provider
      data={{
        name: "Dung",
        age: 28,
        gender: "male",
      }}
    >
      <ChildProvider />
      <ChildProvider2 />
    </Provider>
  );
};

export default DemoProvider;
