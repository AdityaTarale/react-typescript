import React, { useReducer } from "react";

type CounterState = {
  count: number;
};

//* Discriminated Union

// Recommended approach to typing useReducer function

type UpdateAction = {
  type: "increment" | "decrement" | "reset";
  payload: number;
};

type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

/**
 * !Note
 *
 * Typescript will infer the type of the state object from the reducer function
 * Typescript requires help when it absolutely necessary to specify the type , unless it will automatically figure out type on its own
 *
 */
