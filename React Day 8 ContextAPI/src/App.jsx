import React, { useContext } from 'react';
import Home from './components/Home';

const App = () => {
  let { count, setCount } = useContext(MyStore);

  return (
    <div>
      <h1>Hello - {count}</h1>
      <button onClick={setCount(count + 1)}>Increment</button>
      <Home />
      <Contact />
      <About />
    </div>
  );
};

export default App;
