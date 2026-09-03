import { RouterProvider, createBrowserRouter } from 'react-router';
import AuthLayout from '../app/layout/AuthLayout';
import PublicProtected from './protected/PublicProtected';
import LoginPage from '../features/auth/ui/pages/LoginPage';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MainLayout from '../app/layout/MainLayout';
import MainProtected from './protected/MainProtected';
import AboutPage from '../shared/ui/pages/AboutPage';
import ProductPage from '../features/products/ui/components/pages/ProductPage';
import Homepage from '../shared/ui/pages/Homepage';
import CartPage from '../features/cart/ui/components/pages/CartPage';
import OrderPage from '../features/orders/ui/components/pages/OrderPage';
import { hydrateUser } from '../features/auth/api/authApi';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/auth/state/authSlice';
import { useEffect } from 'react';

const AppRoutes = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        let response = await hydrateUser();
        console.log(response);
        dispatch(addUser(response));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  let router = createBrowserRouter([
    {
      path: '/',
      element: <PublicProtected />,
      children: [
        {
          path: '',
          element: <AuthLayout />,
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
              element: <Homepage />,
            },
            {
              path: 'product',
              element: <ProductPage />,
            },
            {
              path: 'about',
              element: <AboutPage />,
            },
            {
              path: 'cart',
              element: <CartPage />,
            },
            {
              path: 'order',
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
