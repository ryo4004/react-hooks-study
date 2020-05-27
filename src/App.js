import React from 'react';

import UseState from './practice/useState';
import UseReducer from './practice/useReducer';
import UseReducerSimple from './practice/useReducerSimple';
import UseReducerTodo from './practice/useReducerTodo';
import UseCallback from './practice/useCallback';
import UseCallbackEvent from './practice/useCallbackEvent';
import UseMemo from './practice/useMemo';
import NotUseMemo from './practice/notUseMemo';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <h1>React Hooks Study</h1>
      <hr />
      <h2>useState</h2>
      <UseState initialCount={0} />
      <hr />
      <h2>useReducer</h2>
      <UseReducer />
      <hr />
      <h2>useReducerSimple</h2>
      <UseReducerSimple />
      <hr />
      <h2>Todo with useReducer</h2>
      <UseReducerTodo />
      <hr />
      <h2>useCallback</h2>
      <UseCallback />
      <hr />
      <h2>useCallbackEvent</h2>
      <UseCallbackEvent />
      <hr />
      <h2>useMemo</h2>
      <UseMemo />
      <hr />
      <h2>not useMemo</h2>
      <NotUseMemo />
    </div>
  );
};

export default App;