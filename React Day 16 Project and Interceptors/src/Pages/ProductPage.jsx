import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../Component/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductPage = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let getProductData = async () => {
    try {
      let res = await axiosInstance.get('/products');
      console.log(res);
      setProductData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log('Error in products API', error);
    }
  };
  useEffect(() => {
    getProductData();
  }, []);

  if (isLoading)
    return <h1 className="text-4xl font-semibold">Loading Products</h1>;

  return (
    <div className="grid grid-cols-4 gap-5">
      {productData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default ProductPage;
