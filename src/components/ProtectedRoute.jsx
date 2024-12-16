import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isLoggedIn = localStorage.getItem('authToken');

    return isLoggedIn ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;