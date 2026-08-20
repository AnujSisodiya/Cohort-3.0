import React from 'react';
import Detail from '../Components/Detail';
import Home from '../Components/Home';
import About from '../Components/About';
import ProductCard from '../Components/ProductCard';
import { Routes, Route } from 'react-router';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
