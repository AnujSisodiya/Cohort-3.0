import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { MyStore } from '../Context/MyContext';
import ProductCard from './ProductCard';
const Home = () => {
  let { productData, setProductData } = useContext(MyStore);

  const getProductData = async () => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      setProductData(res.data);
      console.log(res);
    } catch (error) {
      console.log('Error During API call', error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-5 gap-4 grid grid-cols-3">
      {productData.map((val) => {
        return <ProductCard key={val.id} product={val} />;
      })}
    </div>
  );
};

export default Home;
