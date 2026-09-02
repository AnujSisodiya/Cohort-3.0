import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../components/NavBar';

const MainLayout = () => {
  return (
    <div className="p-4 min-h-screen bg-black text-white">
      <NavBar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
