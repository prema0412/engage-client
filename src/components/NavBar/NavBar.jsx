
import React from 'react'
import { Link } from "react-router-dom"
import './NavBar.scss'
import { GoogleLogin } from 'react-google-login';


const NavBar = () => {

    const responseGoogle = response => {
        console.log(response);
    };


    return (
        <>

            <ul className="menu">

                <Link className="menu__link menu__link--one" to="/about">About Engage</Link>


                <Link className="menu__link" to="/engagements">Explore Engagements</Link>


                <Link className="menu__link" to="/post">Post Engagements</Link>


                <Link className="menu__link" to="/RememberMe">Help us remember you</Link>

                <GoogleLogin className='googleLogin'
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'} />
            </ul>




        </>
    )
}

export default NavBar
