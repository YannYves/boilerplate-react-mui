import React from "react";
import { ACTIONTYPE, initialState } from "../types";

const initContext = {
  state: { count: 5 },
  dispatch: () => undefined,
};
// 1 create a movie context object
const Context = React.createContext<{
  state: initialState;
  dispatch: React.Dispatch<ACTIONTYPE>;
}>(initContext);

export { Context };
