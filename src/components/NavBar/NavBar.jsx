
import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.scss'

const NavBar = () => {
    return (
        <>

            <ul className="menu">
               
                  <Link className= "menu__link menu__link--one" to="/about">About Engage</Link>
               
               
                  <Link className= "menu__link" to="/engagements">Explore Engagements</Link>
                
              
                 <Link className= "menu__link" to="/post">Post Engagements</Link>
               
              
                 <Link className= "menu__link" to="/RememberMe">Help us remember you</Link>
               
                
            </ul>
           
            
        </>
    )
}

export default NavBar
