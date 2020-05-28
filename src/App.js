import React from 'react';

import UseState from './practice/useState/useState';
import UseReducer from './practice/useReducer/useReducer';
import UseReducerSimple from './practice/useReducer/useReducerSimple';
import UseReducerTodo from './practice/useReducer/useReducerTodo';
import UseCallback from './practice/useCallback/useCallback';
import UseCallbackEvent from './practice/useCallback/useCallbackEvent';
import UseMemo from './practice/useMemo/useMemo';
import NotUseMemo from './practice/useMemo/notUseMemo';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <h1>React Hooks Study</h1>
      <hr />
      <h2>useState</h2>
      <hr />
      <h3>useState</h3>
      <UseState initialCount={0} />
      <hr />
      <h2>useReducer</h2>
      <hr />
      <h3>useReducer</h3>
      <UseReducer />
      <hr />
      <h3>useReducerSimple</h3>
      <UseReducerSimple />
      <hr />
      <h3>Todo with useReducer</h3>
      <UseReducerTodo />
      <hr />
      <h2>useCallback</h2>
      <hr />
      <h3>useCallback</h3>
      <UseCallback />
      <hr />
      <h3>useCallbackEvent</h3>
      <UseCallbackEvent />
      <hr />
      <h2>useMemo</h2>
      <hr />
      <h3>useMemo</h3>
      <UseMemo />
      <hr />
      <h3>not useMemo</h3>
      <NotUseMemo />
    </div>
  );
};

export default App;