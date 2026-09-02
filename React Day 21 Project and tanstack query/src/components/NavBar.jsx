import React from 'react';
import { LogOut } from 'lucide-react';
import { NavLink } from 'react-router';
const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <h1>SkyMart</h1>
      <div className="flex gap-8 text-xl">
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'text-yellow-300' : '';
          }}
          to="/main"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'text-yellow-300' : '';
          }}
          to="/main/shop"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? 'text-yellow-400' : '';
          }}
          to="/main/about"
        >
          About
        </NavLink>
      </div>
      <div className="flex gap-5 items-center">
        <h1>
          Hey,<strong className="text-yellow-400">User</strong>
        </h1>
        <button className="cursor-pointer">Cart</button>
        <LogOut size={18} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
