import React from "react";

const initState = {};

// 1 create a movie context object
const Context = React.createContext<Partial<any>>(initState);

export { Context };
