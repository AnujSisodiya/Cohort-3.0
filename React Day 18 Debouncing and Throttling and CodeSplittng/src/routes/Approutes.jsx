import React, { lazy, Suspense } from 'react';
import MainLayout from '../layout/MainLayout';
import App from '../App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { getUsers } from '../apis/userApi';

// Code Splitting (Lazy Loading): Dynamically imports components only when their route is visited
let Contact = lazy(() => import('../pages/Contact'));
let About = lazy(() => import('../pages/About'));

const Approutes = () => {
  // Configures client-side router with nested route definitions
  let router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />, // Shared parent layout with <Outlet /> for rendering children
      children: [
        // Note: 'children' MUST be lowercase in React Router config
        {
          path: '', // Default path for "/"
          element: <App />,
        },
        {
          path: 'about',
          loader: getUsers, // Pre-fetches user data before rendering the route
          hydrateFallbackElement: <h1>Loading Users data</h1>, // Fallback UI shown while loader runs
          element: (
            // Suspense displays fallback UI while lazy-loaded bundle downloads
            <Suspense fallback={<h1>Loading About</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: 'contact',
          element: (
            // Suspense fallback for Contact page bundle loading
            <Suspense fallback={<h1>Loading Contact</h1>}>
              <Contact />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  // Renders the configured router provider
  return <RouterProvider router={router} />;
};

export default Approutes;
