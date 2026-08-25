import React, { useContext } from 'react';
import { Auth } from '../Context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoutes = () => {
  const { loggedInUser } = useContext(Auth);
  if (!loggedInUser) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
