import React from 'react';
import {
  useAllProducts,
  useProductByCategory,
} from '../../../hooks/useProductHook';
import ProductCard from '../../../state/ProductCard';
import Filter from '../../../state/Filter';

const ProductPage = () => {
  let { data, isPending, errors, setSearch, search } = useAllProducts();
  let {
    data: productByCategory,
    category,
    setCategory,
  } = useProductByCategory();

  if (isPending) return <h1>Loading State</h1>;
  return (
    <div>
      <Filter
        setSearch={setSearch}
        search={search}
        category={category}
        setCategory={setCategory}
      />

      <div className="grid grid-cols-6 gap-6 p-4 bg-black">
        {productByCategory?.products.length
          ? productByCategory.products.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))
          : data.products.map((val) => (
              <ProductCard key={val.id} product={val} />
            ))}
      </div>
    </div>
  );
};

export default ProductPage;
