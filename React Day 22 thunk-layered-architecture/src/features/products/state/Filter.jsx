import React from 'react';
import { useAllCategories } from '../hooks/useProductHook';

const Filter = ({ search, setSearch, category, setCategory }) => {
  let { data, isPending, errors } = useAllCategories();

  if (isPending) return <h1>Loading State</h1>;

  return (
    <div className="mb-8 flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-4 sm:flex-row sm:items-center sm:justify-between">
      {/* Search */}
      <div className="w-full sm:w-1/2">
        <input
          type="text"
          value={search || ''}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-500 focus:border-white"
        />
      </div>

      {/* Category Select */}
      <div className="w-full sm:w-56">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full cursor-pointer rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-white"
        >
          <option value="">All Categories</option>

          {data.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
