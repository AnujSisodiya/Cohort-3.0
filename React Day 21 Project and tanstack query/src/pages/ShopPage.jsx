import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

import { useProductApi } from '../hooks/productsHook';
import Filters from '../components/Filters';

const ShopPage = () => {
  let { data, isPending, error } = useProductApi();

  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="p-4">
      <div className="p-4">
        <Filters />
      </div>
      <div className="grid grid-cols-6 gap-6">
        {isPending
          ? Array.from({ length: 18 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
