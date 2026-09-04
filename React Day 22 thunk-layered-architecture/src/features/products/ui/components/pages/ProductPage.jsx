import React from 'react';
import { useAllProducts } from '../../../hooks/useProductHook';
import ProductCard from '../../../state/ProductCard';
import Filter from '../../../state/Filter';

const ProductPage = () => {
  let { data, isPending, errors, setSearch, search } = useAllProducts();

  if (isPending) return <h1>Loading State</h1>;
  return (
    <div>
      <Filter setSearch={setSearch} search={search} />

      <div className="grid grid-cols-6 gap-6 p-4 bg-black">
        {data.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
