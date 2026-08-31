import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByValue,
} from '../features/couterSlice';

const LoginPage = () => {
  const [inpValue, setInpValue] = useState(0);
  let dispatch = useDispatch();
  let { count } = useSelector((store) => store.counter);
  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br /> <br />
      <input
        type="text"
        placeholder="Enter Number"
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByValue(inpValue))}>
        Add to Count
      </button>
    </div>
  );
};

export default LoginPage;
