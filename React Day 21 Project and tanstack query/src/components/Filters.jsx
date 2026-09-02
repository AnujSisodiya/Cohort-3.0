import React from 'react';

const Filters = ({ filterProducts }) => {
  return (
    <div className="p-3 border rounded border-gray-500">
      <div className="flex gap-8 ">
        <input
          onChange={(e) => filterProducts(e.target.value)}
          className="w-full p-2 border rounded outline-0"
          type="text"
          placeholder="Search any products...."
        />
        <button className="bg-white text-black px-6  border rounded">
          Search
        </button>
        <div>
          <span>Select Categories</span>
          <select className="bg-white text-black px-4  border rounded">
            <option value="groceries">Groceries</option>
            <option value="furniture">Furniture</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
