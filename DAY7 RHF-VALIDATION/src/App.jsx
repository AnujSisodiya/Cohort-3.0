import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Usercard from './components/Usercard';
import Form from './components/Form';

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [userData, setUserData] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });

  const delUser = (id) => {
    let filteredUser = userData.filter((val) => {
      return val.id !== id;
    });
    console.log(filteredUser);
    setUserData(filteredUser);
    localStorage.setItem('users', JSON.stringify(filteredUser));
  };

  const [updatedData, setUpdatedData] = useState(null);
  return (
    <div className="h-screen flex flex-col gap-4 bg-gray-500">
      <Navbar setToggle={setToggle} />
      {toggle ? (
        <div className="flex p-4 gap-4">
          {userData.map((elem) => {
            return (
              <Usercard
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
                delUser={delUser}
                users={elem}
                key={elem.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex h-[70%] justify-center items-center">
          <Form
            updatedData={updatedData}
            setToggle={setToggle}
            userData={userData}
            setUserData={setUserData}
          />
        </div>
      )}
    </div>
  );
};

export default App;
