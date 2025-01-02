import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute(props) {
    const isLoggedIn = localStorage.getItem('LoggedIn');
    return isLoggedIn === 'true'? <Outlet /> : <Navigate to="/signup" />
}

export default ProtectedRoute;