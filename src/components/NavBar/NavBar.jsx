
import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {
    return (
        <>

            <ul className="navbar">
               
                  <Link className= "navbar__link navbar__link--one" to="/about">About Engage</Link>
               
               
                  <Link className= "navbar__link" to="/engagements">Explore Engagements</Link>
                
              
                 <Link className= "navbar__link" to="/post">Post Engagements</Link>
               
              
                 <Link className= "navbar__link" to="/RememberMe">Help us remember you</Link>
               
                
            </ul>
           
            
        </>
    )
}

export default NavBar
