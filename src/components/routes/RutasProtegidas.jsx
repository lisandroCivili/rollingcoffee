import React from 'react';
import { Navigate } from 'react-router-dom';

const RutasProtegidas = ({children}) => {

    const admin = JSON.parse(sessionStorage.getItem('loginRC')) || null
    if (!admin) {
        console.log(admin);
        return <Navigate to={'/login'}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas; 