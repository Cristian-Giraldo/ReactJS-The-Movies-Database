import React from "react";
import { Navigate } from "react-router-dom";

function Detalle(){

    const token = localStorage.getItem('token');



    return(
        <>
            {!token && <Navigate to='/' />}
            <h1>Detalle del producto </h1>
        </>
    );
}

export default Detalle;