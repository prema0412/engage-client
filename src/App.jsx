
import React, { useState, useEfect } from 'react'
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import Dashboard from './containers/Dashboard/Dashboard';
//import logo from './assets/images/logo.png'
import logo from './assets/images/logo-2.png'

const App = () => {



  return (
    <>

      <div className='heading'>
        <img className="logo" src={logo} alt={"logo"} />
        <header className='header'>Engage</header>
      </div>

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
