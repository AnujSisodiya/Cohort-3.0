import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import {useState} from "react";
import Usercard from './components/Usercard';

const App = () => {
  let [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([]);
  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center' >
      {
      toggle ? users.map((elem)=> <Usercard user={elem}/>) /*<Login setToggle={setToggle} setUsers={setUsers}/> */ : <Register setUsers={setUsers} setToggle={setToggle} />
    }</div>
  )
}

export default App;