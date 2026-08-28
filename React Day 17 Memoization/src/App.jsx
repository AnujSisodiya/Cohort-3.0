import React from 'react';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';
import { useCallback } from 'react';
import { useMemo } from 'react';

const App = () => {
  console.log('App Rendering');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Raghav', id: 234 });

  let greet = useCallback(() => {
    console.log('Hello I am Greeting...');
  }, [user]);
  // useCallback memoizes the function reference.
  // - When 'count' changes: 'user' dependency hasn't changed, so useCallback returns the SAME function reference for 'greet'.
  // - When 'user' changes: 'user' dependency changed, so useCallback creates a NEW function reference for 'greet'.

  let calculation = useMemo(() => {
    let sum = 0;
    console.log('My Calculation Running..');
    for (let i = 0; i < 1000000; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Clicking Increment causes App to re-render. 
          'greet' reference remains unchanged -> <About /> does NOT re-render. */}

      <h1>Name is {user.name}</h1>
      <button onClick={() => setUser({ ...user, name: 'Anuj' })}>
        {/* Clicking Change Name updates 'user'. 
          'greet' gets a NEW function reference -> <About /> WILL re-render. */}
        Change Name
      </button>
      <h1>My Calculation is {calculation}</h1>
      <Home user={user} greet={greet} />
      {/* Receives 'user' object prop. React.memo does shallow comparison on user reference. Here The value is keep changing so Home will re-render */}
      <About greet={greet} />
    </div>
  );
};

export default App;
