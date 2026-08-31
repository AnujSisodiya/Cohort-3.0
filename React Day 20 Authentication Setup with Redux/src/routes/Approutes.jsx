import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayouts from '../layouts/AuthLayouts';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../layouts/MainLayout';

const Approutes = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <AuthLayouts />,
      children: [
        {
          path: '',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: 'main',
      element: <MainLayout />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
