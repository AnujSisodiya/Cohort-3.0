import React from 'react';
import { useState } from 'react';
import Home from './Components/Home';
import About from './Components/About';

const App = () => {
  console.log('App Rendering');
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: 'Raghav', id: 234 });
  return (
    <div>
      <h1>Memoization</h1>
      <h2>Count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Name is {user.name}</h1>
      <button onClick={() => setUser({ ...user, name: 'Anuj' })}>
        Change Name
      </button>
      <Home user={user} />
      {/* Receives 'user' object prop. React.memo does shallow comparison on user reference. Here The value is keep changing so Home will re-render */}
      <About />
    </div>
  );
};

export default App;
