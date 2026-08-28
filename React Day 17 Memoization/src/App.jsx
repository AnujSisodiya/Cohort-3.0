import React from 'react';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  console.log('App Rendering');
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Home />
      <About />
    </div>
  );
};

export default App;
