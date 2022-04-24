interface API {}

interface ContextInterFace {}

type reducerState = { count: number };

type ACTIONTYPE =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset"; payload: number };

type initialState = { count: number };

export type { ACTIONTYPE, reducerState, initialState };
