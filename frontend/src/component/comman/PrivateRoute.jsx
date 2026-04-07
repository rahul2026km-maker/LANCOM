import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, adminOnly = false }) => {
  const token = localStorage.getItem('token');
  const department = JSON.parse(localStorage.getItem('department') || '{}');
  
  if (!token) {
    return <Navigate to="/" />;
  }
  
  if (adminOnly && department.role !== 'admin') {
    return <Navigate to="/dashboard" />;
  }
  
  return children;
};

export default PrivateRoute;