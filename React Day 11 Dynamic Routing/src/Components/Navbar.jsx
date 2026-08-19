import React from 'react';

const Navbar = () => {
  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <div>Logo</div>
      <div>
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
