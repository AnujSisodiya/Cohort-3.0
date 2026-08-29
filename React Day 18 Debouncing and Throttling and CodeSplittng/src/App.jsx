import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [searchProduct, setSearchProduct] = useState([]);
  const [productsData, setProductsData] = useState([]);
  let getProducts = async () => {
    let res = await axios.get('https://fakestoreapi.com/products');
    setProductsData(res.data);
  };
  let filteredData = () => {
    console.log('filterdata Running..');
    let result = productsData.filter((val) => {
      return val.title.toLowerCase().includes(searchProduct.toLowerCase());
    });
    setProductsData(result);
  };
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    filteredData();
  }, [searchProduct]);
  return (
    <div>
      <h1>Debouning...</h1>
      <input
        type="text"
        placeholder="Search Products..."
        onClick={(e) => setSearchProduct(e.target.value)}
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
