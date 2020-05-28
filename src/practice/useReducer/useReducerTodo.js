import React, { useReducer } from 'react';

// reference from https://daveceddia.com/usereducer-hook-examples/
const initialState = {
  input: '',
  items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        input: action.value
      };
    case 'add':
      return {
        ...state,
        input: '',
        items: [
          ...state.items,
          {
            id: state.items.length,
            value: action.value
          }
        ]
      };
    case 'remove':
      return {
        ...state,
        items: state.items.filter((v, index) => index !== action.id)
      };
    case 'clear':
      return {
        ...state,
        items: []
      };
    default:
      console.log('[useReducerTodo] no render');
      return state;
  }
};

const Todo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {input, items} = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: 'add', value: input});
  };

  console.log('[useReducerTodo] render');

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={e => dispatch({type: 'input', value: e.target.value})} />
        <button onClick={handleSubmit}>add</button>
      </form>
      <button onClick={() => dispatch({type: 'clear'})}>clear</button>
      <button onClick={() => dispatch({type: 'nothing'})}>nothing</button>
      <ul>
        {items.map((item, index) => {
          return <li key={item.id}>{item.value} <button onClick={() => dispatch({type: 'remove', id: index})}>x</button></li>;
        })}
      </ul>
    </>
  );
};

export default Todo;