import { useContext } from "react";
import { Context } from "../context/context";

function Hello() {
  const { state, dispatch } = useContext(Context);

  return (
    <>
      Count : {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        {" "}
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>
        {" "}
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        {" "}
        Decrement
      </button>
    </>
  );
}

export default Hello;
