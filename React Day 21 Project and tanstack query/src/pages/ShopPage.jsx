import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

const ShopPage = () => {
  let { data, isPending, error } = useProductApi();

  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="grid grid-cols-6 gap-6">
      {isPending
        ? Array.from({ length: 18 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};

export default ShopPage;
