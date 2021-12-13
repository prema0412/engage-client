
import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {
    return (
        <>

            <ul className="navbar">
                <Link className="navbar__link navbar__link--one" to="/TellMe">Tell Me</Link>
                <Link className="navbar__link" to="/ShowMe">Show Me</Link>
                <Link className="navbar__link" to="/RememberMe">Remember Me</Link>
            
            </ul>
            
        </>
    )
}

export default NavBar
