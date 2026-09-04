import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-72 rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-lg">
      {/* Product Image */}
      <div className="h-56 overflow-hidden rounded-xl bg-zinc-800">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4">
        <h2 className="truncate text-lg font-semibold text-white">
          {product.title}
        </h2>

        <p className="mt-2 text-xl font-bold text-green-400">
          ${product.price}
        </p>

        {/* Quantity + Add to Cart */}
        <div className="mt-4 flex items-center justify-between gap-3">
          {/* Quantity */}
          <div className="flex items-center overflow-hidden rounded-lg border border-zinc-700">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-2 text-white hover:bg-zinc-800"
            >
              -
            </button>

            <span className="w-8 text-center text-white">{quantity}</span>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-2 text-white hover:bg-zinc-800"
            >
              +
            </button>
          </div>

          {/* Add To Cart */}
          <button
            onClick={() => console.log('Added:', product, quantity)}
            className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200 active:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
