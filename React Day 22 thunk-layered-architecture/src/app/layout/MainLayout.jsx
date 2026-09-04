import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../../shared/ui/pages/components/NavBar';

const MainLayout = () => {
  return (
    <div className="bg-black h-screen ">
      <h1>
        <NavBar />
      </h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
