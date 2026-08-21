import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="p-4 bg-black flex items-center justify-between text-white">
      <div>Logo</div>
      <div className="flex gap-12 ">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/About'}>About</NavLink>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
