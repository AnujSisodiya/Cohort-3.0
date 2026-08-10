import React from 'react';

const Usercard = () => {
  return (
    <div className="p-6  border-2 border-white flex flex-col gap-2 rounded bg-black">
      <div className="h-50 w-40">
        <img
          className="object-fit h-full w-full rounded"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWRzaG90fGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="text-white">
        <h1>Name</h1>
        <p>Email</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-between text-white">
        <button className="py-2 px-3 bg-blue-500 rounded cursor-pointer">
          Update
        </button>
        <button className="py-2 px-3 bg-red-500 rounded cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
