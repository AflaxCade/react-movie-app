import React from 'react'
import { NavLink } from "react-router";
import '../css/Navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLink to="/">Movie App</NavLink>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
            </div>
        </nav>
    )
}

export default NavBar