import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className=" h-screen flex p-2 grid grid-cols-[1fr_7fr]">
      <Navbar />
      <div className="h-full p-4 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
