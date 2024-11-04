import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router';

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    // Hacemos esto para recordar la utlima ruta donde estaba el usuario antes de cerrar sesion
    const { pathname, search } = useLocation();

    const lastPath = `${pathname}${search}`;
    localStorage.setItem('lastPath', lastPath);
    console.log('rerender');

    return (logged)
    ? children
    : <Navigate to="/login" />
    
}
