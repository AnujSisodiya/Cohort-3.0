import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ProductCardSkeleton';

import { useProductApi } from '../hooks/productsHook';
import Filters from '../components/Filters';
import { getProductsData } from '../../api/ProductApi';

const ShopPage = () => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    try {
      let data = await getProductsData();
      setProductsData(data);
      setFilteredProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  let filterProducts = (searchParams) => {
    let filteredData = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchParams.toLowerCase());
    });
    if (filteredData) {
      setFilteredProducts(filteredData);
    }
    console.log(filteredData);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="p-4">
        <Filters filterProducts={filterProducts} />
      </div>
      <div className="grid grid-cols-6 gap-6">
        {isLoading
          ? Array.from({ length: 18 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default ShopPage;
