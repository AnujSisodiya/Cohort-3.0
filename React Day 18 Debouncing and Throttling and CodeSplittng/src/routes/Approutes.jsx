import React, { Children, lazy } from 'react';
import MainLayout from '../layout/MainLayout';

import App from '../App';
import { createBrowserRouter, RouterProvider } from 'react-router';
let Contact = lazy(() => import('../pages/Contact'));
let About = lazy(() => import('../pages/About'));

const Approutes = () => {
  let router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        // Keep In mind C must be small in childer otherwise it will not work //
        {
          path: '',
          element: <App />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
