import React from "react";

function Footer(){
    return(
        <footer className=" d-flex flex-wrap justify-content-araund align-items-center py-3 my-4 border-top">
            <nav className="col-md-3 d-flex align-items-center justify-content-between w-100">
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ">
                    <li className="ms-3">
                        <a href="http://instagra.com" rel="noopener noreferrer" target='_blank'>Instagram</a>
                    </li>
                    <p className="ms-3">Copyright Alekemy Challenge</p>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;