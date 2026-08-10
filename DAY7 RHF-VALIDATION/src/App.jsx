import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [userData, setUserData] = useState([]);
  return (
    <div className="h-screen flex flex-col gap-4 bg-gray-500">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex p-4 gap-4">
          {userData.map((elem) => {
            return <Usercard users={elem} />;
          })}
        </div>
      ) : (
        <div className="flex h-[70%] justify-center items-center">
          <Form setToggle={setToggle} setUserData={setUserData} />
        </div>
      )}
    </div>
  );
};

export default App;
