
import React, { useState, useEfect } from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Dashboard from './containers/Dashboard/Dashboard';
import logo from './assets/images/logo.png'

const App = () => {

 

  return (
    <>

    {/* <GoogleLogin
    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    buttonText="Log in with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} /> */}

    <img className="logo" src={logo} alt={"logo"} />
    <header className='header'>Engage</header>

    <Router>

     

      <div>

      <Routes>

        <Route path="/*" element={<Dashboard />} />

      </Routes>
      
      </div>



    </Router>
    </>
  )
  }

export default App
