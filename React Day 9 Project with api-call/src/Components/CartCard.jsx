import React from 'react';

const CartCard = ({ product, quantity = 1 }) => {
  return (
    <div className="flex w-full items-center gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      {/* Product Image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-medium uppercase text-gray-400">
          {product.category}
        </p>

        <h3 className="line-clamp-2 text-base font-semibold text-gray-900">
          {product.title}
        </h3>

        <p className="mt-2 text-lg font-bold text-gray-900">${product.price}</p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium hover:bg-gray-100">
          −
        </button>

        <span className="w-6 text-center text-sm font-semibold">
          {quantity}
        </span>

        <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-lg font-medium hover:bg-gray-100">
          +
        </button>
      </div>

      {/* Remove */}
      <button
        className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
        title="Remove item"
      >
        🗑️
      </button>
    </div>
  );
};

export default CartCard;
