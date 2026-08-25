import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import { Auth } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const Navbar = () => {
  let { setLoggedInUser } = useContext(Auth);
  return (
    <div className=" flex flex-col gap-10 border-r border-gray-500 p-4 justify-between">
      <div className="flex flex-col gap-10">
        {' '}
        <h1 className="text-4xl font-semibold">E-comm</h1>
        <div className=" flex flex-col gap-4 ml-5 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-red-500 border-b border-gray-500'
                : 'text-black border-b border-gray-500'
            }
            to="/main/"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-red-500 border-b border-gray-500'
                : 'text-black border-b border-gray-500'
            }
            to="/main/users"
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'font-semibold text-red-500 border-b border-gray-500'
                : 'text-black border-b border-gray-500'
            }
            to="/main/products"
          >
            Products
          </NavLink>
        </div>
      </div>
      <button
        onClick={() => {
          localStorage.removeItem('loggedInUsers');
          toast.warn('LoggedOut Successful');
          setLoggedInUser(null);
        }}
        className="p-4 bg-red-500 text-white rounded cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
