import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header className="p-3 bg-dark text-white">
            <nav className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">TheMovie</Link>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-link">
                            <Link to="/" >Home</Link> 
                        </li>
                        <li className="nav-link">
                            <Link to="/listado" >Listado</Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/contacto" >Contacto</Link> 
                        </li> 
                    </ul>
                    <div className="text-end">
                        <Link to="/" className="btn btn-outline-light me-2">Login</Link>
                        <Link to="/" className="btn btn btn-warning">Sign-Up</Link>
                    </div>
                </div>  
            </nav>
        </header>
    )
}

export default Header;