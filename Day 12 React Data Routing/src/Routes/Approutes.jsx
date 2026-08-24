import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import AppLayout from '../Layout/AppLayout';

const Approutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Approutes;
