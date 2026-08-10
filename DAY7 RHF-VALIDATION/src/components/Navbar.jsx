import React from 'react';

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 flex rounded item-center justify-between bg-black text-white ">
      <div>
        <img
          className="rounded-full"
          width={35}
          src="https://thumbs.dreamstime.com/b/vector-user-icon-7337510.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 bg-blue-500 rounded cursor-pointer"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
