import { useReducer } from "react";
import reducer from "../reducer/reducer";

// import  * from "../types";
import { Context } from "./context";
import initFunc from "../reducer/init";

// params to init reducer state
const initState = 50;

//2 - create an HOC that returns a Provider, children components will have access to its context
const Provider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(reducer, initState, initFunc);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Provider };
