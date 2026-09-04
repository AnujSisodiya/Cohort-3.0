import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';

const App = () => {
  let limit = 10;
  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(0);
  const getAllProducts = async () => {
    try {
      let res = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${page * limit}`
      );
      setProducts(res.data);
    } catch (error) {
      console.log('Error in Products API', error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [page]);
  console.log(products);
  let totalPage = Math.ceil(products?.total / limit);
  return (
    <div className="flex flex-col items-center justify-between p-4 gap-6 h-screen bg-black">
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 ">
        {products?.products.map((val) => (
          <ProductCard key={val.id} product={val} />
        ))}
      </div>
      <div className="flex items-center gap-2 text-white">
        <button
          className="px-4 py-2 rounded bg-red-500 cursor-pointer"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>
        <p>
          {page + 1} of {totalPage}
        </p>
        <button
          className="px-4 py-2 rounded bg-red-500 cursor-pointer"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
