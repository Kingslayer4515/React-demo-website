import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <>
        
            <div className="container-fluid nav bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink exact className="navbar-brand" to="/">Tech</NavLink>
                           
                                <span className="navbar-toggler-icon"></span>
                            
                            
                                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link active"activeClassName="menu_active" aria-current="page" to="/">Home</NavLink>
                                    </li>
                                   
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link"activeClassName="menu_active" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link"activeClassName="menu_active" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink exact className="nav-link"activeClassName="menu_active" to="/contact">Contact</NavLink>
                                    </li>

                                </ul>

                           
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
                </>
                )
}

export default Navbar;
