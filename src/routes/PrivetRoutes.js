import React from 'react';

import { UseContent } from '../context/Context';

import { Navigate } from 'react-router-dom';
const PrivetRoutes = ({ children }) => {
  const { user } = UseContent();

  return user ? children : <Navigate to="/login"></Navigate>;
};

export default PrivetRoutes;
