import React from 'react';

const NavBar = () => {
  return (
    <div>
      <h1>SkyMart</h1>
      <NavLink to="/main">Home</NavLink>
      <NavLink to="/main/shop">Shop</NavLink>
      <NavLink to="/main/about">About</NavLink>
    </div>
  );
};

export default NavBar;
