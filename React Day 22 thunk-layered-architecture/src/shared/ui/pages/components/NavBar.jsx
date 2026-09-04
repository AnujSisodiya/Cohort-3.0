import React from 'react';
import { ShoppingCart, Box } from 'lucide-react';
import { NavLink } from 'react-router';

const NavBar = () => {
  return (
    <div className="flex p-4 justify-between bg-yellow-700 text-white items-center mb-4">
      <h1>SkyMart</h1>
      <div className="flex justify-between gap-5 font-semibold">
        <NavLink
          className={({ isActive }) => (isActive ? 'text-green-500' : '')}
          to="/main"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-green-500' : '')}
          to="/main/product"
        >
          Shop
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-green-500' : '')}
          to="/main/about"
        >
          About
        </NavLink>
      </div>
      <div className="flex justify-between gap-5 items-center">
        <NavLink
          className={({ isActive }) => (isActive ? 'text-green-500' : '')}
          to="/main/cart"
        >
          <ShoppingCart />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'text-green-500' : '')}
          to="/main/order"
        >
          <Box />
        </NavLink>
        <button className="bg-red-500 rounded px-4 py-2 cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
