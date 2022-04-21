import React, { useState } from "react";
// import  * from "../types";
import { Context } from "./context";

//TODO add reducer

//2 - create an HOC that returns a Provider, children components will have access to its context
const Provider = ({ children }: { children: JSX.Element }) => {
  return (
    <Context.Provider value={{  }}>
      {children}
    </Context.Provider>
  );
};

export { Provider };
