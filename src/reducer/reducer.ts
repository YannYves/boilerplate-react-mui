import { ACTIONTYPE, initialState, reducerState } from "../types";
import initFunc from "./init";

const reducer = (state: reducerState, action: ACTIONTYPE): initialState => {
  let newState;
  switch (action.type) {
    case "increment":
      newState = { count: state.count + 1 };
      break;
    case "decrement":
      newState = { count: state.count - 1 };
      break;
    case "reset":
      newState = initFunc(action.payload);
      break;
    default:
      throw new Error();
  }

  return newState;
};

export default reducer;
