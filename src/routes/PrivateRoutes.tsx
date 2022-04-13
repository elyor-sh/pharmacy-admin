import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'

const PrivateRoutes = () => {
    return localStorage.getItem('token') ?
        <Outlet/>
        :
        <Navigate to={'/login'}/>

};

export {PrivateRoutes};