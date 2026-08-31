import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import AuthLayouts from '../layouts/AuthLayouts';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import MainLayout from '../layouts/MainLayout';
import { useDispatch } from 'react-redux';
import PublicProtected from './protected/PublicProtected';
import MainProtected from './protected/MainProtected';
import HomePage from '../pages/HomePage';
import { toast } from 'react-toastify';

const Approutes = () => {
  //Hydrating the User
  let dispatch = useDispatch();
  let hydrateUser = () => {
    let loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers'));

    if (!loggedInUsers) {
      toast.error('Unauthorized User');
      return;
    }
    dispatch(addUser(loggedInUsers));
  };
  useEffect(() => {
    hydrateUser(); //It will run ontime on every reload of the page to hydrate the user
  }, []);

  let router = createBrowserRouter([
    {
      path: '/',
      element: <PublicProtected />,
      children: [
        {
          path: '',
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
      ],
    },
    {
      path: '/main',
      element: <MainProtected />,
      children: [
        {
          path: '',
          element: <MainLayout />,
          children: [
            {
              path: '',
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Approutes;
