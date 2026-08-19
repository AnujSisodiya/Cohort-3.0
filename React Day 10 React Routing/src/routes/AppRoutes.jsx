import React from 'react';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import About from '../Components/About';
import { Routes, Route } from 'react-router';
import Details from '../Components/Details';
import NestedAbout from '../Components/NestedAbout';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />}>
          <Route path="nestedAbout" element={<NestedAbout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
