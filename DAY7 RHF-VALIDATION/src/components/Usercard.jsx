import React from 'react';

const Usercard = ({ users }) => {
  return (
    <div className="p-6  border-2 border-white flex flex-col gap-2 rounded bg-black">
      <div className="h-50 w-60">
        <img
          className="object-cover h-full w-full border-2 border-white rounded"
          src={users.image}
          alt=""
        />
      </div>
      <div className="text-white">
        <h1>{users.name}</h1>
        <p>{users.Email}</p>
        <p>{users.Number}</p>
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
