import React, { useReducer } from 'react';

// sample from https://ja.reactjs.org/docs/hooks-reference.html#usereducer
const initialState = 0;

function reducer(state, action) {
  return state + action;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state}
      <button onClick={() => dispatch(-1)}>-</button>
      <button onClick={() => dispatch(1)}>+</button>
    </>
  );
}
// sample end

export default Counter;