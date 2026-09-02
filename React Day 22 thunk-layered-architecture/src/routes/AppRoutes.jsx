import { RouterProvider, createBrowserRouter } from 'react-router';
import AuthLayout from '../app/layout/AuthLayout';
import PublicProtected from './protected/PublicProtected';
import LoginPage from '../features/auth/ui/pages/LoginPage';
import RegisterPage from '../features/auth/ui/pages/RegisterPage';
import MainLayout from '../app/layout/MainLayout';
import MainProtected from './protected/MainProtected';
import AboutPage from '../shared/ui/pages/AboutPage';
import ProductPage from '../features/products/ui/components/pages/ProductPage';
const AppRoutes = () => {
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
              element: <HomePage />,
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
