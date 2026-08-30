import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counterSlice';

const App = () => {
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  return (
    <div
      style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}
    >
      React Redux Toolkit
      <h1>Counter is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
