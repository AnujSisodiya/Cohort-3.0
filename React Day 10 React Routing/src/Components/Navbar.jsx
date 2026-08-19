import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="bg-black p-4 w-full text-white flex items-center justify-between">
      <div>
        <h2>Logo</h2>
      </div>
      <div className="flex gap-10">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
        <NavLink to={'/about'}>About</NavLink>
      </div>
      <button className="cursor-pointer rounded px-4 py-2 bg-blue-500">
        Login
      </button>
    </div>
  );
};

export default Navbar;
