import React from 'react';

const Form = (setToggle) => {
  return (
    <div className="flex flex-col gap-6 text-white">
      <h1 className="text-center text-xl font-semibold">Create User</h1>
      <form className="w-80 flex flex-col gap-3 p-4 border border-white rounded-xl bg-black text-white">
        <input
          className="p-2 rounded outline-0 border-2 border-white"
          type="email"
          placeholder="Email"
        />
        <input
          className="p-2 rounded outline-0 border-2 border-white"
          type="text"
          placeholder="Name"
        />
        <input
          className="p-2 rounded outline-0 border-2 border-white"
          type="number"
          placeholder="Mobile"
        />
        <input
          className="p-2 rounded outline-0 border-2 border-white"
          type="url"
          placeholder="Image"
        />
        <button className="py-2 px-3 bg-blue-500 rounded cursor-pointer">
          Create User
        </button>
      </form>
    </div>
  );
};

export default Form;
