import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="w-72 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow-xl">
      {/* Product Image Skeleton */}
      <div className="h-56 w-full rounded-xl bg-zinc-800" />

      <div className="mt-4">
        {/* Title Skeleton */}
        <div className="h-6 w-4/5 rounded-md bg-zinc-800" />

        {/* Price Skeleton */}
        <div className="mt-3 h-6 w-20 rounded-md bg-zinc-800" />

        {/* Quantity + Button Skeleton */}
        <div className="mt-5 flex items-center justify-between gap-3">
          {/* Quantity Skeleton */}
          <div className="h-10 w-28 rounded-lg bg-zinc-800" />

          {/* Add To Cart Skeleton */}
          <div className="h-10 w-28 rounded-lg bg-zinc-800" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
