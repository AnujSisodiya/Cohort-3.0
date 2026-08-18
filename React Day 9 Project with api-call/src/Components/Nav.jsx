import react from 'react';

const Nav = ({ setIsCartOpen }) => {
  return (
    <div className="bg-black flex items-center justify-between text-white p-4">
      <div>Logo</div>
      <div className="flex gap-10 text-xl">
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer"
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          Cart
        </p>
      </div>
      <div className="cursor-pointer">Login</div>
    </div>
  );
};

export default Nav;
