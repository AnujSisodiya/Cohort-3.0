import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  let [toggle, setToggle] = useState(false);
  return (
    <div className="h-screen flex flex-col gap-4 bg-gray-500">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex p-4">
          <Usercard />
        </div>
      ) : (
        <div className="flex h-[70%] justify-center items-center">
          <Form />
        </div>
      )}
    </div>
  );
};

export default App;
