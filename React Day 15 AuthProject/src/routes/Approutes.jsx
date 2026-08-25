import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AppLayout from '../layouts/AppLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import MainLayout from '../layouts/MainLayout';
import ProtectedRoutes from './ProtectedRoutes';
import Main from '../Pages/Main';

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '', element: <Login /> },
        {
          path: 'register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/main',
      element: <ProtectedRoutes />,
      children: [{ path: '', element: <MainLayout /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
